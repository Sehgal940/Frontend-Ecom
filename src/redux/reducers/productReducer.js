const getProductsReducer=(state={products:[]},action)=>{
if(action.type==='success')
{
    return {products:action.payload}
}
else if(action.type==='failure')
{
    return {error:action.payload}
}
else return state
}
const getProductReducer=(state={product:{}},action)=>{
    if(action.type==='gotOne')
    {
        action.loading(false)
        return {product:action.payload}

    }
    else if(action.type==='None')
    {
        return {error:action.payload}
    }
    else return state
    }
export{getProductsReducer,getProductReducer}