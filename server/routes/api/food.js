const express = require('express');
const router = express.Router();
const Item = require('./firebase')[0]

router.get('/', async (req, res) => {      
  var items = await Item.getItems();
  res.send(items)
});

router.get('/:id', async(req, res) => {
  var item = await Item.findItem(req.params.id);
  res.send(item)
})






module.exports = router;