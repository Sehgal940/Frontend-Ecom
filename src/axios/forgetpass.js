import axios from "axios";
const URL=process.env.REACT_APP_URI
const authPass=async(data)=>{
    try{
        return await axios.post(`${URL}/forgetpass`,data)
    }
    catch(error)
    {
        console.log('error in login')
    }
}
export{authPass}