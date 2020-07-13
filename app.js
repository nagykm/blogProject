const express = require('express');
const indexRouter = require('./routes/index');
const adminRouter = require('./routes/admin');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const app = express();

app.use(express.static('./public'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

mongoose.connect('mongodb+srv://adminBlog:123456abc@cluster0-prgde.mongodb.net/<dbname>?retryWrites=true&w=majority', {useNewUrlParser: true,useUnifiedTopology: true})

var db = mongoose.connection;
db.once('open',()=>{
    console.log('fut')
})
app.use('/admin',adminRouter);
app.use('/',indexRouter);

app.set('view engine', 'pug');
app.set('views',__dirname + '/views');

app.listen(3000,()=>{
    console.log('listenning on 3000')
});