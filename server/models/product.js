var mongoose = require('mongoose');


var productSchema =  mongoose.Schema({
// strain
  name: { type: String, required: true },
  description: { type: String },
  rating: { type: String },
}, {timestamps: true});

// });

module.exports = mongoose.model('Product', productSchema);

// Models are fancy constructors compiled from our Schema definitions.
 // Instances of these models represent documents which can be saved
 // and retrieved from our database. All document creation and retrieval from the database
  // is handled by these models.
