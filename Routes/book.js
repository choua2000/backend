const router = require('.');
const {create,getAll,get_id, update,delete_id} = require('../Controllers/book');

module.exports = (app) =>{
    app.post('/book',create);
    app.get('/book',getAll);
    app.get('/book/:id',get_id);
    app.put('/book/:id',update);
    app.delete('/book/:id',delete_id)
};