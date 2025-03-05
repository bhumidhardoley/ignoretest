const express = require('express')
const app = express()



app.get('/',(req,res)=>{
    res.send('You are welcome')
})


app.listen(3000,()=>{
    console.log('The server is running')
})