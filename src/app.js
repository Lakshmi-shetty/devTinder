const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('Welcome to my server')
})

app.listen(3000, ()=>{
    console.log('Server is running on http port 3000')
})