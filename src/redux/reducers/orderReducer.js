function orderReducer(state={myorders:[]},action) {
 if(action.type==='gotOrders')
 {
   const arr=action.payload
   return {myorders:[...arr]}
 }
 else if(action.type==='removeOrder')
 {
   return {myorders:state.myorders.filter((val)=>val._id!==action.payload)}
 }
 else return state
}

export {orderReducer}