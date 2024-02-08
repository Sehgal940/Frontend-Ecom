import axios from "axios";
const URL=process.env.REACT_APP_URL
const authorization=async(logDet)=>{
    try{
        return await axios.post(`${URL}/login`,logDet)
    }
    catch(error)
    {
        console.log('error in login')
    }
}
export{authorization}