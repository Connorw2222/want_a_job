const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/want-a-job',
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true    
  }
);

module.exports = mongoose.connection;