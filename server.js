const express = require('express');
const mongoose = require('mongoose');
const Product = require('./modules/ProductModule')
const app = express()
// add route in page/
app.use(express.json())
app.use(express.urlencoded({extended: false}))
// get data
app.get('/', (req, res)=> {
    res.send('Hello World my name is vivek')
  })

  app.get('/blog', (req, res)=> {
    res.send('Hello World My Name Is Vivek')
  })
  app.get('/products', async(req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.get('/products/:id', async(req, res) =>{
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})
//update data
app.put('/products/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        // we cannot find any product in database
        if(!product){
            return res.status(404).json({message: `cannot find any product with ID ${id}`})
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})
// delete data
app.delete('/products/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        // we cannot find any product in database
        if(!product){
            return res.status(404).json({message: `cannot find any product with ID ${id}`})
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

  app.post('/products', async(req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})



mongoose.connect("mongodb+srv://demo1:demo1@cluster0.ou4tuyv.mongodb.net/demo1?retryWrites=true&w=majority")
.then(()=>{
    app.listen (3000, ()=>{
        console.log('this file is running on 4000 server,hello world')
    })
    console.log("connected to dataBase")
}).catch(()=>{
    console.log(error)
})