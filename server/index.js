require('dotenv-safe').config();
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes/routes');

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/todo-app/static/', express.static('public'));

app.use('/api/v1', routes);

app.get('/api/v1', (req, res) => {
    res.status(200).json({
        'message': 'todo list api - version:1.0.0'
    });
});


server.listen(process.env.SERVER_PORT, () => console.log('API is running!'));