const controller = require('../Controllers/auth')

module.exports = (app) => {
app.post('/signup', controller.signup);
app.post('/signin', controller.signin);
}

