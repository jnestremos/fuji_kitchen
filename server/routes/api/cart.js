const express = require('express');
const router = express.Router();
const Cart = require('./firebase')[1]
const bodyParser = require('body-parser');



router.get('/', async (req, res) => {    
    var cart_items = await Cart.getCartItems();    
    res.send(cart_items)
  });

router.post('/', bodyParser.urlencoded({ extended: false }) ,async (req, res) => {          
    await Cart.addCartItem(req.body)        
    res.redirect('https://murmuring-tor-72100.herokuapp.com/menu')
  });
router.put('/:id', bodyParser.urlencoded({ extended: false }), async(req, res) => {  
  var operation = req.body['operation']  
  var cart_items = await Cart.updateQty(req.params.id, operation)
  res.send(cart_items)
})





module.exports = router;