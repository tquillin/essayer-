var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

app.use(express.static('./client'));

app.set('views', __dirname + '/client/views');
app.set('view engine', 'ejs');

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/products_api');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var indexRouter = require('./server/routes/index');
var productsRouter = require('./server/routes/api/products');



app.get('/inventory', function(req, res){
  // what if you changed res.render to maybe /views/index ??
  res.render("/views/inventory");
});


app.use('/inventory', productsRouter);


app.use('/', indexRouter);
app.use('/api/products', productsRouter);


var port = process.env.PORT || 8080;
app.listen(port, function(){
  console.log('je t\'ecoute sur le port '+ port );
});
