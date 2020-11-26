const express = require('express');
const app = express();
const server = require('http').createServer(app);
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes/routes');

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/v1', routes);

app.get('/', (req, res) => {
    res.status(200).json({
        'message': 'todo list api - version:1.0.0'
    });
});


server.listen(4000, () => console.log('API is running!'));