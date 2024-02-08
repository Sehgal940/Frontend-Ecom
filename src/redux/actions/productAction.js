import axios from 'axios'
const URL='http://localhost:8000'
const getProducts=()=>async(dispatch)=>{
    try{
         let {data}= await axios.get(`${URL}/products`)
         dispatch({type:'success',payload:data})
    }
    catch(error)
    {
         dispatch({type:'failure',payload:error.message})
    }
}

const getProduct=(id,setLoad)=>async(dispatch)=>{
     try{
          let {data}= await axios.get(`${URL}/products/${id}`)
          setTimeout(()=>dispatch({type:'gotOne',payload:data,loading:setLoad}),1000)
     }
     catch(error)
     {
          dispatch({type:'None',payload:error.message})
     }
 }
export{getProducts,getProduct}