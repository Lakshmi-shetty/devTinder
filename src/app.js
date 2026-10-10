const express = require('express');
const app = express();


// app.use('/test',(req,res)=>{
//     res.send('welcome to test server')
// })
// app.get('/name',(req, res)=> {
//     res.send('Lakshmi')
// })
// app.post('/name',(req, res)=> {
//     res.send('My name is changed to siri')
// })
// app.delete('/name',(req, res)=> {
//     res.send('Lakshmi is dead')
// })

//Exploring routes with (), ?, +,*
//Below code throws aeeror in express 5 version, so use regular expression instead
// app.get("/ab?c",(req, res)=> {
//     res.send("Good work");
// })

//using regular expression
app.get(/\/ab?c/,(req, res)=>{
    res.send('Used regular expression')
})


//reading dynamic params(static queries)
//http://localhost:3000/user/23
app.post("/user/:userId", (req, res)=> {
    console.log(req.params);
    res.send(`I am using dynamic params with userDI`)
})

//This is query params handing
//http://localhost:3000/agent?userId=54&username=Lakshmi
app.post("/agent", (req, res)=> {
  console.log(req.query);
  res.send("i am using query params")
})



app.listen(3000, ()=>{
    console.log('Server is running on http port 3000')
})