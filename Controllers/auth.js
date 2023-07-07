const User = require('../Models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.signup = async (req, res) => {
    try {
        //require data
        const {name, email, phone, password} = req.body;
        const checkUser = await User.findOne({phone});
        console.log(checkUser)
        if(checkUser){
            return res.status(404).json({message: 'this phone number already signup'})
        }
        const newPass = await bcrypt.hash(password, 10);

        const user = await User({
            name,
            email,
            phone,
            password:newPass
        }).save();

        res.status(201).json(user)
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}

exports.signin = async (req, res) => {
    try {
        const {phone, password} = req.body;
        const user = await User.findOne({phone});
        if(!user) {
            return res.status(404).json({message:'this user not fonnd'})
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){
            return res.status(404).json({message:"password incorrent"});
        }

        const token = await jwt.sign({id:user._id, name:user.name, phone:user.phone, email:user.email},"MySecretKey", {expiresIn:'7d'} )

       return res.status(200).json({assessToken:token}) 
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}