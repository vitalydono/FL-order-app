const OrderModel = require('../models/orders')

exports.findAll = (req, res) => {
  OrderModel.find({}, (err, data) => {
    console.log(data)
    if (err) {
      return res.send(err)
    }
    res.json(data)
  })
}

exports.create = (req, res) => {
  console.log(req.body)
  if (!req.body) {
    res.status(400).send({ message: 'content cannot be empty' })
    return
  }
  const order = new OrderModel({
    Fullname: req.body.Fullname,
    phoneNumber: req.body.phoneNumber,
    SenderName: req.body.SenderName,
    SenderPhoneNumber: req.body.SenderPhoneNumber,
    address: req.body.address,
    price: req.body.price,
    colors: req.body.colors,
    greeting: req.body.greeting
  })
  // save new order in database
  
  order.save(order).then(data => {
    console.log(data)
    res.send(data)
  }).catch(err => {
    res.status(500).send({ message: err.message || 'opppss cannot create order' })
  })
}

exports.delete = (req, res) => {
  const id = req.params.id

  OrderModel.findByIdAndDelete(id)
    .then(data => {
      if (!data) {
        res.status(404).send({ message: `Cannot delete with this ${id}` })
      } else {
        res.send({ messsage: 'order was removed successfully!!!' })
      }
    }).catch(err => {
      res.status(500).send({ message: 'Could not delete order ' })
  })
}

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: 'Data to update could not be empty' })
  }

  const id = req.params.id

  OrderModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {

      if (!data) {
        res.status(404).send({ message: 'There is no order to update' })
      } else {
        res.send(data)
      }
    }).catch(err => {
    res.status(500).send({ message: 'Could not update order' })
  })
}

exports.findOne = (req, res) => {
  const id = req.params.id
  OrderModel.findById(id).then(data => {
    if (!data) {
      res.status(404).send({ message: 'Can not find the specific order' })
    } else {
      res.json(data)
    }
  }).catch(err => {
    res.status(500).send({ message: 'Error can not find order' })
  })
}
