// import express
const express = require('express');

const userRouter = require('./Routers/userRouter');
const aiRouter = require('./Routers/aiRouter');
const utilRouter = require('./Routers/utils');
const cors = require('cors');

// initialize express
const app = express();
const port = 5000;

// middlewares
app.use(express.json());
app.use(cors({
    origin: [ 'http://localhost:5173' ]
}));

app.use('/user', userRouter);
app.use('/ai', aiRouter);
app.use('/utils', utilRouter);

app.use(express.static('./uploads'));

// Routes

app.get('/', (req, res) => {
    res.send('Response from Express')
});

app.get('/home', (req, res) => {
    res.send("Response from Home");
});

app.get('/add', (req, res) => {
    res.send("Response from Add");
});

app.get('/getall', (req, res) => {
    res.send("Response from GetAll");
});


// home
// add
// getall

// starting the server 
app.listen( port, () => { console.log('express server started') } );

