
const { create ,list, update_data, get_id, delete_data} = require('../Controllers/product')

module.exports = (app) => {

app.post('/product', create)
app.get('/product', list)
app.get('/product/:id', get_id)
app.put('/product/:id', update_data)
app.delete('/product/:id', delete_data)
}


