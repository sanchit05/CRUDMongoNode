const express = require('express')
const mongoose = require('mongoose')

const app = express()


const url =  'mongodb+srv://Sanchit:root@restcluster.a4bok.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(url, { useNewUrlParser: true ,useUnifiedTopology: true });
const con = mongoose.connection

con.on('open', function(){
    console.log("connected to mongodb....");
})

app.use(express.json())

const bookRouter = require('./routers/books')
app.use('/books',bookRouter)

app.listen(9000, () => {
    console.log("server started");
})