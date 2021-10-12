// create a findById, which takes an ID and an itemList
// loop through the itemList in a list
// if the item's ID is equal to the ID argument, return the item 
// else, continue the loop

export function findById(id, itemList){
    for (let item of itemList){
        if (item.id === id){
            return item;
        }
    }
}