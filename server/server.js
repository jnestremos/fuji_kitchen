const express = require('express');
const app = express();
const food = require('./routes/api/food');
const cart = require('./routes/api/cart');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(express.json())
app.use(bodyParser.json())
app.use(cors())
app.use('/api/food', food);
app.use('/api/cart', cart);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(__dirname + '/public/'));    
    app.get(/.*/, (req, res) => {
        res.sendFile(__dirname + '/public/index.html')
    })
}


app.listen(process.env.PORT || 8000);