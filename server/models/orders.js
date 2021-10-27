const mongoose = require('mongoose');

// Define schema
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  Fullname: {
    type: String,
    required: [true, 'Fullname is required']
  },
  phoneNumber: {
    type: Number,
    required: [true, 'phone numberp is required']
  },
  SenderName: {
    type: String,
    required: [true, 'SenderName is required']
  },
  SenderPhoneNumber: {
    type: Number,
    required: [true, 'sender phone numberp is required']
  },
  address: {
    type: String,
    required: [true, 'address is required']
  },
  price: {
    type: Number,
    required: [true, 'price is required']
  },
  colors: {
    type: String
  },
  greeting: {
    type: String
  },
  created: {
    type: Date,
    value: Date.now()
  }
});

// Compile models from schema
module.exports = mongoose.model('orders', OrderSchema);
