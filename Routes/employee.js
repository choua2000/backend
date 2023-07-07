const {getAll,update_id,get_id,create,delete_id} = require('../Controllers/employee')
module.exports = (app)=>{

app.get('/employee',getAll)
app.put('/employee/:id',update_id)
app.get('/employee/:id',get_id)
app.post('/employee',create)
app.delete('/employee/:id',delete_id)

}