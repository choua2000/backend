const user = require('../Models/user');


exports.create = async (req, res) => {
    try {
        const { name, phone, password, email } = req.body
        const data = {
            name: name,
            phone: phone,
            password: password,
            email: email
        }
        await user.create(data).then((success) => {
            if (success) {
                return res.status(201).json({message:"created"})
            }
            return res.status(500).json({ message: error.message })
        });
    } catch (error) {
        console.log(error)
        res.status(500).send({ message: error.message })
    }
}
exports.list = async (req, res) => {
    try {
        await user.find({}).then((data) => {
            if (!data) {
                return res.status(404).json({ message: "not found" })
            }
            return res.status(200).json(data)
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: error.message })
    }
}
exports.update_id = async (req, res) => {
    try {
        const id = req.params.id;
        const { name, phone, email, password } = req.body
        const data = {
            name: name,
            phone: phone,
            email: email,
            password: password
        }
        const data_id = await user.findByIdAndUpdate(id, {
            $set: data
        })
        if (!data_id) {
            return res.status(404).json({ message: "not found" })

        }
        return res.status(200).json(data_id)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
exports.get_id = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await user.findById(id)
        if (!data) {
            return res.status(404).json({ message: "not found" })
        }
        return res.status(200).json(data)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: error.message })
    }
}
exports.delete_id = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await user.findByIdAndDelete(id)
        if (!data) {
            return res.status(404).json({ message: "not found" })
        }
        return res.status(200).json({ message: "deleted" })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: error.message })
    }
}