const express = require('express');
const app = express();


app.use('/test',(req,res)=>{
    res.send('welcome to test server')
})
app.get('/name',(req, res)=> {
    res.send('Lakshmi')
})
app.post('/name',(req, res)=> {
    res.send('My name is changed to siri')
})
app.delete('/name',(req, res)=> {
    res.send('Lakshmi is dead')
})
app.listen(3000, ()=>{
    console.log('Server is running on http port 3000')
})