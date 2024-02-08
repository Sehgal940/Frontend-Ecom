import axios from "axios";
const URL=process.env.REACT_APP_URL
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