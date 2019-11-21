const express = require('express');
const helmet = require('helmet');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const morgan = require('morgan');

const app = express();
app.use(helmet());
const router = express.Router();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.dbURL || 'mongodb://api-db:27017/test', {useUnifiedTopology: true});

const port = process.env.PORT || 4001;
const server = require('http').Server(app);

app.use(bodyparser.json());
app.use(morgan('dev'));
app.use(router);


app.use('/api', require('./routes'))

app.get('/', function(req, res) {
    res.status(200).json({
        msg: 'good request'
    })
})


server.listen(port);




