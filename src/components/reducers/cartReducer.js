import Item1 from '../../images/item1.jpg'
import Item2 from '../../images/item2.jpg'
import Item3 from '../../images/item3.jpg'
import Item4 from '../../images/item4.jpg'
import Item5 from '../../images/item5.jpg'
import Item6 from '../../images/item6.jpg'
import { ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY } from '../actions/action-types/cart-action'

const initState = {
    items: [
        { id: 1, title: '', desc: "Burned cashew,250g pack.", price: 700.00, img: Item1 },
        { id: 2, title: '', desc: "Burned cashew,250g pack.", price: 700.00, img: Item2 },
        { id: 3, title: '', desc: "Burned cashew,500g pack.", price: 1500.00, img: Item3 },
        { id: 4, title: '', desc: "Raw cashew,250g pack.", price: 650.00, img: Item4 },
        { id: 5, title: '', desc: "Raw cashew,250g pack.", price: 650.00, img: Item5 },
        { id: 6, title: '', desc: "Raw cashew,500g pack.", price: 1350.00, img: Item6 }
    ],
    addedItems: [],
    total: 0
}

const cardReducer = (state = initState, action) => {
    if (action.type === ADD_TO_CART) {
        let addedItem = state.items.find(item => item.id === action.id)
        let existed_item = state.addedItems.find(item => action.id === item.id)
        if (existed_item) {
            console.log("Already exist")
            addedItem.quantity += 1
            return {
                ...state,
                total: state.total + addedItem.price
            }

        } else {
            console.log("New")
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price

            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total: newTotal
            }
        }
    }
    else if (action.type === REMOVE_ITEM) {
        let itemToRemove = state.addedItems.find(item => action.id === item.id)
        let new_items = state.addedItems.filter(item => action.id !== item.id)
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity)
        return {
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    } else if (action.type === ADD_QUANTITY) {
        let addedItem = state.items.find(item => item.id === action.id)
        addedItem.quantity += 1
        let newTotal = state.total + addedItem.price
        return {
            ...state,
            total: newTotal
        }
    } else if (action.type === SUB_QUANTITY) {
        let addedItem = state.items.find(item => item.id === action.id)
        //if the qt == 0 then it should be removed
        if (addedItem.quantity === 1) {
            let new_items = state.addedItems.filter(item => item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return {
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return {
                ...state,
                total: newTotal
            }
        }

    } else if (action.type === 'ADD_SHIPPING') {
        return {
            ...state,
            total: state.total + 300
        }
    } else if (action.type === 'SUB_SHIPPING') {
        return {
            ...state,
            total: state.total - 300
        }
    }

    else {
        return state
    }
    
}

export default cardReducer;









