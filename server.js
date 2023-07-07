const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const router = require('./Routes/index')

mongoose.connect('mongodb+srv://chouavang:chouavang@cluster0.egqgukp.mongodb.net/?retryWrites=true&w=majority')
      .then(() => console.log('connected db'))
      .catch((error) => console.error(error))
const app = express();
app.use(morgan('dev'))
app.use(cors({
      credentials: true, origin: 'http://localhost:3000'
}))
app.use(bodyParser.json({ limit: '10mb' }))
app.use(router)

app.listen(5000, () =>
      console.log('server is runing on port', 5000))
