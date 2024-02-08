import axios from "axios";
const URL=process.env.REACT_APP_URL
const orderCancel=async(id)=>{
try{
    return await axios.post(`${URL}/cancel/${id}`)
}
catch(error)
{
   console.log('error in cancelOrder outgoing')
}
}
export {orderCancel}