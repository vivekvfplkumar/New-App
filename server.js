const express = require('express')
const app = express()
// add route in page
app.get('/', (req, res)=> {
    res.send('Hello World my name is vivek')
  })

app.listen (3000, ()=>{
    console.log('this file is running on 4000 server,hello world')
})