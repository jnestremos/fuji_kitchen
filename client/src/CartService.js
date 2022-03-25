const url = 'api/cart'

class CartService{
    static async getCart(){
        const res = await fetch(url)
        const data = await res.json()
        if(typeof(data) == 'object'){
            var arr = [];
            arr.push(data)
        }
        return data;                      
    }  
    static async updateQty(id, operation){
        var query = { 
            operation
        }       
        const res = await fetch(url+'/'+id, {
            headers: {
                'Content-Type': 'application/json'
            },
            method:'PUT',
            body: JSON.stringify(query)
        })
        const data = await res.json()
        if(typeof(data) == 'object'){
            var arr = [];
            arr.push(data)
        }
        return data;  
    }                   
}

export default CartService