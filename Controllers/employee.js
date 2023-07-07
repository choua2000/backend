const employee = require('../Models/employee');

exports.create = async (req,res) =>{
    try {
        const { name,phone,email,address} = req.body;
        const data = {
            name:name,
            phone:phone,
            email:email,
            address:address
        }
        await employee.create(data).then((success)=>{
            if(success){
                return res.status(201).json({message:"created"})
            }else{
                return res.status(404).json("No data")}
        });
           
    } catch (error) {
        console.log(error)
        return res.send(500).json({message:error.message})
    }
}
exports.get_id = async (req,res) =>{
    try {
        const id = req.params.id;
        const data_id = await employee.findById(id)
        if(!data_id){
            return res.status(404).json("not found")
        }
        return res.status(200).json(data_id)
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:error.message})
    }
}
exports.getAll = async (req,res)=>{
    try {
        await employee.find({}).then((data) => {
            if(data) {
             return res.status(200).json(data)
            }
        }).catch((error) => {
            return res.status(404).json({message:"not found data"})
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:error.message})
    }
}
exports.delete_id = async (req,res) =>{
    try {
        const id = req.params.id;
        const data_id = await employee.findByIdAndDelete(id)
        if(!data_id){
            return res.status(404).json("not found")
        }else{
            return res.status(200).json({message:"deleted"})
        }
    } catch (error) {
        console.log(error)
        return res.status(200).json({message:error.message})
    }
}
exports.update_id = async (req,res) =>{
    try {
        const id = req.params.id;
        const { name,phone,email,address } = req.body;
        const data = {
            name:name,
            phone:phone,
            email:email,
            address:address
        }
        const data_id = await employee.findByIdAndUpdate(id,{
            $set:data})
        if(!data_id){
            return res.status(404).json("not found")
        }
        return res.status(200).json(data_id)
    } catch (error) {
        console.log(error)
        return res.send( 500).json({message:error.message})
    }
}

