import axios from "axios";
const URL=process.env.REACT_APP_URI
const order=async(data,acc)=>{
try{

   await axios.post(`${URL}/orders`,{data,acc})
}
catch(error)
{
   console.log('error in order outgoing')
}
}
export {order}