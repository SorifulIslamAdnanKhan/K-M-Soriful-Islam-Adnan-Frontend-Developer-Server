const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res)=>{
    res.send('SPX Rocket Server Running..')
});

app.listen(port, ()=>{
    console.log(`SPX Rocket Server Running on Port ${port}`);
});