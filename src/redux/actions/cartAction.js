import axios from 'axios'
const URL=process.env.REACT_APP_URI
const addToCart=(id,quantity)=>async(dispatch)=>{
    try{
        let {data}= await axios.get(`${URL}/products/${id}`)
        dispatch({type:'addToCart',payload:{...data,quantity}});
    }
    catch(error)
    {
        dispatch({type:'errorAddToCart',payload:error.message});
    }
}
const removeCart=(id)=>(dispatch)=>{
    dispatch({type:'removeFromCart',payload:id});
}
const addItem=(id)=>(dispatch)=>{
    dispatch({type:'addItem',payload:1,Item:id});
}
const removeItem=(id)=>(dispatch)=>{
    dispatch({type:'removeItem',payload:1,Item:id});
}
export {addToCart,removeCart,addItem,removeItem}