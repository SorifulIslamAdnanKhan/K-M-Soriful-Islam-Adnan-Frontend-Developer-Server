const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();
require('dotenv').config();

const port = process.env.PORT || 5000;

// Middleware

app.use(cors());
app.use(express.json());

async function run(){
    try{
        //JWT
        
        app.post('/jwt', async (req, res)=>{
            const user = req.body;
            const token = jwt.sign(user, process.env.ACCESS_JWT_TOKEN, {expiresIn: '1d'});
            res.send({token});
        });
    }
    finally {

    }
}
run().catch(err => console.log(err));

app.get('/', (req, res)=>{
    res.send('SPX Rocket Server Running..')
});

app.listen(port, ()=>{
    console.log(`SPX Rocket Server Running on Port ${port}`);
});