import commonAPI from "./commonAPI";

export const uploadProduct = async(requestData)=>{
    return await commonAPI("post","/products",requestData)
  }

  export const getProduct = async()=>{
    return  await commonAPI("get","/products"," ")
  }  

  export const showProducts = async()=>{
    return await commonAPI("get","/products"," ")
  }

  export const deleteProducts = async(id)=>{
    return await commonAPI("delete",`/products/${id}`,{})
  } 
 