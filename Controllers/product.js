const product = require('../Models/product');

exports.create = async (req, res) => {
    try {


        const { name, detail, price } = req.body;
        const data = {
            name: name,
            detail: detail,
            price: price
        }
        await product.create(data).then((success) => {
            if (success) {
                return res.status(201).json({ message: "Created" })
            } else {
                return res.status(400).json({ message: "Failed" })
            }
        });

    } catch (error) {
        console.log(error)
        res.status(500).send({ message: error.message })
    }
}
exports.list = async (req, res) => {
    try {
        await product.find({}).then((data) => {
            if (!data) {
                return res.status(404).json("not found")
            }
            return res.status(200).json(data)
        });

    } catch (error) {
        console.log(error)
        res.status(500).send({ message: error.message })
    }
}
exports.get_id = async (req, res) => {
    try {
        const id = req.params.id;

        const data_id = await product.findById(id)
        if (!data_id) {
            return res.status(404).json("notfound")
        }
        return res.status(200).json(data_id)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
exports.delete_data = async (req, res) => {
    try {
        const id = req.params.id;
        const data_id = await product.findByIdAndDelete(id)
        if (data_id == null) {

            return res.status(404).json("not found")
        }
        return res.status(200).json({ message: "deleted" })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
exports.update_data = async (req, res) => {
    try {
        const id = req.params.id;
        const { name, detail, price } = req.body
        const data = {
            name: name,
            detail: detail,
            price: price
        }
        const data_id = await product.findByIdAndUpdate(id, {
            $set: data
        })
        if (!data_id) {
            return res.status(404).json("not found")

        }
        return res.status(200).json(data_id)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
