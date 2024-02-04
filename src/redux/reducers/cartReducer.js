const cartReducer=(state={cartItems:[]},action)=>{
    if(action.type==='addToCart')
    {
        const item=action.payload
        const exist=state.cartItems.find((val)=>val.id===item.id)
        if(exist)
        {
            return {cartItems:[...state.cartItems]}
        }
        else
        {
            return {cartItems:[...state.cartItems,item]}
        }
    }
    else if(action.type==='removeFromCart')
    {
       const id=action.payload
       return {cartItems:state.cartItems.filter((val)=>val.id!== id)}
    }
    else if(action.type==='addItem')
    {
       const id=action.Item
       let curr=state.cartItems.find((val)=>val.id===id)
       curr.quantity+=action.payload;
       const arr=state.cartItems.filter((val)=>val.id!== id)
       return {cartItems:[...arr,curr]}
    }
    else if(action.type==='removeItem')
    {
       const id=action.Item
       let curr=state.cartItems.find((val)=>val.id===id)
       if(curr.quantity>1)curr.quantity-=action.payload;
       const arr=state.cartItems.filter((val)=>val.id!== id)
       return {cartItems:[...arr,curr]}
    }
    else return state;
    }
    export {cartReducer}