const express = require('express');
const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api');
const mongoose = require('mongoose');
const app = express();
 
mongoose.connect('mongodb+srv://adminBlog:123456abc@cluster0-prgde.mongodb.net/<dbname>?retryWrites=true&w=majority', {useNewUrlParser: true,useUnifiedTopology: true})
var db = mongoose.connection;
db.once('open',()=>{
    console.log('fut')
})

app.use('/',indexRouter);
app.use('/api',apiRouter); 
app.set('view engine', 'pug');
app.set('views',__dirname + '/views');

app.listen(3000);