const url = 'api/food'

class ItemService{
    static async getItems(){        
        const res = await fetch(url)
        var data = await res.json()        
        return data;        
    }   

}

export default ItemService