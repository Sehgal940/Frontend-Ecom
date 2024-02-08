import axios from "axios"
const URL=process.env.REACT_APP_URL
const orderAction=(name)=>async(dispatch)=>{
    try
    {
        let {data}=await axios.get(`${URL}/orders/${name}`)
        dispatch({type:'gotOrders',payload:data})
    }
    catch(error)
   {
   console.log('error in order fetching')
   }
}
const removeOrder=(id)=>(dispatch)=>{
    try
    {
        dispatch({type:'removeOrder',payload:id})
    }
    catch(error)
   {
   console.log('error in removing Order')
   }
}

export {orderAction,removeOrder}
