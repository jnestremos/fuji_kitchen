var admin = require("firebase-admin");
var serviceAccount = require("../../fuji-kitchen-sa3rdyr2ndsem-firebase-adminsdk-is7wm-2e8213f3fa.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });

const db = admin.firestore();

class Item{
    static async getItems(){
        const itemCollection = db.collection('item');
        var data = [];
        const items = await itemCollection.get();
        items.forEach((item) => {
          var itemObj = {};
          itemObj.id = item.id
          itemObj.name = item.data().name
          itemObj.price = item.data().price
          itemObj.image_url = item.data().image_url
          itemObj.description = item.data().description
          data.push(itemObj)
        });          
        return data;  
    }
    static async findItem(id){        
        const itemSearch = db.collection('item').doc(id);        
        var itemObj = {};
        const item = await itemSearch.get()        
        if(item.exists){
            itemObj.id = item.id
            itemObj.name = item.data().name
            itemObj.price = item.data().price
            itemObj.image_url = item.data().image_url
            itemObj.description = item.data().description
            return itemObj;
        }
        else{
            console.log("No document!")
        }
    }
}
class Cart extends Item{
    static async getCartItems(){
        const cartItemCollection = db.collection('cart_items');
        var data = [];
        const cart_items = await cartItemCollection.get();        
        cart_items.forEach((item) => {
          var cart_itemObj = {};          
          cart_itemObj.id = item.id
          cart_itemObj.item_id = item.data().item_id
          cart_itemObj.quantity = item.data().quantity
          cart_itemObj.subtotal = item.data().subtotal          
          data.push(cart_itemObj)          
        });                
        return data;  
    }
    static async addCartItem(newItem){
        var newItemObj = {
            item_id: newItem.item_id,
            quantity: newItem.quantity,
            subtotal: newItem.subtotal
        }; 
        await db.collection('cart_items').add(newItemObj);
        var cart_items = this.getCartItems(); 
        return cart_items
        // var allCartItems = await db.collection('cart_items').get()
        // var items = [];
        // allCartItems.forEach(doc => {
        //     items.push(doc.data())
        // })
        // return items;
    }
    static async updateQty(id, operation){
        var item = await db.collection('cart_items').doc(id).get()        
        var item_id = item.data().item_id
        var subtotal = parseFloat(item.data().subtotal)
        var quantity = parseInt(item.data().quantity)
        var price = subtotal / quantity
        if(operation == 'add'){                                                          
            await db.collection('cart_items').doc(id).set({
                item_id : item_id,            
                quantity : quantity + 1,
                subtotal : price * (quantity + 1),
            });           
        }
        else{          
            if(quantity == 1){
                await db.collection('cart_items').doc(id).delete()
            }
            else{                              
                await db.collection('cart_items').doc(id).set({
                    item_id : item_id,            
                    quantity : quantity - 1,
                    subtotal : price * (quantity - 1),
                });
            }
        }
        var cart_items = this.getCartItems()
        return cart_items
    }
}

module.exports = [Item, Cart]