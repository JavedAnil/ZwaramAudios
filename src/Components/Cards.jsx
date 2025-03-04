import React, { useEffect, useState } from 'react'
import { getProduct } from './Services/allAPI'
import { useNavigate } from 'react-router-dom'





function Cards() {

    const [data,setData] = useState([])
    const navigate = useNavigate()
    
    
        const fetchData = async()=> {
                try {
                    const serverResponse = await getProduct ()
                    console.log(serverResponse.data)
                    setData(serverResponse.data)
                } catch (error) {
                    console.log(error)
                }
        }

        const mainCard = (value)=> {
            sessionStorage.setItem("pDetails",JSON.stringify(value))
            navigate("/Maincard")
        }
     useEffect(()=>{
        fetchData ()
     },[])
     console.log(data)


  return (
    <div>
       <div className="d-flex justify-content-center gap-5 space-x-4 mx-4"  >
                    {data.map((value,index)=>(
                            <div id='carts-card' className="my-5" key={index} onClick={()=>mainCard (value) }>
                            <img id='card-image' className=""  src={value.imageUrl} />
                            <p className="text-center text-gray-700 mt-2">
                                {value.name}
                            </p>
                        <div className='d-flex justify-content-center' >
                            <button className='btn btn-primary'>View Details</button>
                        </div>
                        </div>

                        
                    ))}

      
                </div>
  
    </div>
  )
}

export default Cards
