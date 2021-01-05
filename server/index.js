require('dotenv-safe').config();
const express = require('express');
const app = express();
const server = require('http').createServer(app);
global.io = require('socket.io')(server);
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes/routes');
const { tb_users } = require('./models/database');
const jwt = require('./utils/jwt');

// configs
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// static files
app.use('/todo-app/static/', express.static('public'));

// socket.io
io.on('connection', socket => {
    console.log('A new client connected: ' + socket.id);
    socket.on('desconnect', () => {
        console.log('user' + socket.id + 'disconnected')
    })
});

// routes
app.use('/api/v1', routes);

app.get('/api/v1', (req, res) => {
    res.status(200).json({
        'message': 'todo list api - version:1.0.0'
    });
});

// para análise
app.get('/api/v1/all-users', (req, res) => {
    res.json(tb_users);
})

app.get('/api/v1/login', (req, res) => {
    try {
        const [, hash] = req.headers.authorization.split(' ');
        const [email, pass] = Buffer.from(hash, 'base64').toString().split(':');
    
        const {...user} = tb_users.find(user => user.email == email && user.pass == pass);
    
        if(!user) {
            return res.status(404).json({
                "message": "404 - Not Found"
            });
        }
    
        const token = jwt.sign({ user: user.id })
    
        res.status(200).json({
            "message": "200 - Success",
            token
        });

    } catch(err) {
        return res.status(401).json({
            "message": "401 - unauthorized"
        })
    }

})


server.listen(process.env.SERVER_PORT, () => console.log('API is running!'));