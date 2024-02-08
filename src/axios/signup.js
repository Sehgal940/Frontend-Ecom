import axios from 'axios'
const URL=process.env.REACT_APP_URL
const authSignup=async(data)=>{
try{
    return await axios.post(`${URL}/signup`,data)
}
catch(error)
{
    console.log('fetching error in signup')
}
}
export default authSignup