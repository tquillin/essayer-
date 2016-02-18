var express = require('express');
var router = express.Router();

// ../../models/prodcut   connects to the schema... the schema is accessible via the models directory
var Product = require('../../models/product');

//Get (All or Nothing)
router.get('/', function(req, res){
  Product.find({}, function(err, dbProducts){
    res.json({ products: dbProducts });
  });
});

// Show One
router.get('/:id', function(req, res){
  Product.findById( req.params.id, function(err, dbProducts){
    res.json( dbProduct );
  });
});


// Product(create)
router.post('/', function(req, res){
  console.log(req.body);
    Product.create(req.body.product, function(err, product){
      res.json( product );
  });
});

// Delete
router.delete('/:id', function(req, res){
  console.log("je supprime...");
    Product.findByIdAndRemove(req.params.id, function(err){
      if (err) {res.status(500).end();}
      res.status(204).end();

    });
});

module.exports = router;
