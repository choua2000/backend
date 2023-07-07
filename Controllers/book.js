const book = require('../Models/book');

exports.create = async (req,res) =>{
    try {
        const {name_book, author,genre,year} = req.body;
        const data = {
            name_book,
            author,
            genre,
            year
        }
        await book.create(data).then((success) => {
          if(success){
            return res.status(201).json({message:"created"})
          }
           return res.status(404).json({message:"not found"})
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:error.message})
    }
}
exports.getAll = async (req,res) =>{
    try {
        await book.find({}).then((data) =>{
          if(data){
            return res.status(200).json(data)
          }
           return res.status(404).json({message:"not data"})
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:error.message})
    }
}
exports.get_id = async (req,res) =>{
    try {
        const id = req.params.id;
        const data_id = await book.findById(id)
        if(!data_id){
            return res.status(404).json({message:"Not Found"})
        }
            return res.status(200).json(data_id)
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:error.message})
    }
}
exports.update = async (req,res) =>{
    try {
        const {id} = req.params;
        const {name_book,author,genre,year} = req.body;
        const data = {
            name_book:name_book,
            author:author,
            genre:genre,
            year:year
        }
        await book.findByIdAndUpdate(id,{$set:data})
            if(!data){
                return res.status(404).json({message:"Not found"})
            }
              return res.status(200).json({message:"updated"})
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:error.message})
    }
} 
exports.delete_id = async (req,res) =>{
    try {
        const {id} = req.params;
        const data_id = await book.findByIdAndDelete(id)
        if(!data_id){
            return res.status(404).json({message:"not found"})
        }
            return res.status(200).json({message:"deleted"})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:error.message})
    }
}
