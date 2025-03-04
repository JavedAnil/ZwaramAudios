import { useEffect, useState } from "react"
import { getProduct } from "./Services/allAPI"


function Landing() {

const [data,setData] = useState([])


    const fetchData = async()=> {
            try {
                const serverResponse = await getProduct ()
                console.log(serverResponse.data)
                setData(serverResponse.data)
            } catch (error) {
                console.log(error)
            }
    }
 useEffect(()=>{
    fetchData ()
 },[])
 console.log(data)
return (
    <>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <img src="src/assets/pexels-photo-167092.jpeg" style={{ width: "100%" }} />
            
        </div>

        <div data-aos="fade-up" style={{ textAlign: 'center', }}>
            <span><h2>THE MUSIC REALITY IN LOSSLESS QUALITY</h2></span>
            <h3>33 1/3 RPM, 12 IN VINYL</h3>
        </div>

        <div className="spinner">
                <img className="disc" src="src/assets/pngegg.png" alt="" />
        </div>
             
       

        <div className="bg-white flex flex-col items-center justify-center min-h-screen">
            <div className="text-center">
                <h1 className="text-4xl font-semibold text-gray-700">
                    CURATED COLLECTION
                </h1>
                <p className="text-gray-500 mt-2">
                    Handpicked collection of evergreen classics
                </p>
            </div>
            <div className="flex items-center justify-center mt-8">
                <button className="text-gray-500 hover:text-gray-700">
                    <i className="fas fa-chevron-left text-2xl"></i>
                </button>
                <div className="flex  space-x-4 mx-4" >
                    {data.map((value,index)=>(
                            <div className="w-48" key={index}>
                            <img className="w-full h-auto" height="200" src={value.imageUrl} width="200"/>
                            <p className="text-center text-gray-700 mt-2">
                                {value.name}
                            </p>
                        </div>
                    ))}
                    
                
                </div>
                <button className="text-gray-500 hover:text-gray-700">
                    <i className="fas fa-chevron-right text-2xl"></i>
                </button>
            </div>
        </div>
    </>
)
}

export default Landing
