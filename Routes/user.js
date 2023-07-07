// const controller = require('../Controllers/user')
const {create,update_id,get_id,delete_id,list } = require('../Controllers/user')
module.exports = (app) =>{
    app.post('/user',create)
    app.get('/user',list)
    app.put('/user/:id',update_id)
    app.get('/user/:id',get_id)
    app.delete('/user/:id',delete_id)
    
}

