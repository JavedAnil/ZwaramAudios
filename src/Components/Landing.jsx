

function Landing() {
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
                <div className="flex space-x-4 mx-4">
                    <div className="w-48">
                        <img alt="Album cover of Bhaja Govindam Vishnu Sahasranamam" className="w-full h-auto" height="200" src="https://storage.googleapis.com/a1aa/image/3_P9HqygYw0a7jMuwGhgGX5Qc18ClSCzvCNQXVuDAS8.jpg" width="200"/>
                        <p className="text-center text-gray-700 mt-2">
                            Bhaja Govindam Vishnu Sahasranamam
                        </p>
                    </div>
                    <div className="w-48">
                        <img alt="Album cover of Saath-Saath" className="w-full h-auto" height="200" src="https://storage.googleapis.com/a1aa/image/RXlb1Jmsgjn-xx3A-pNJ2h3n0dDy033kE8GxGvQTnv0.jpg" width="200"/>
                        <p className="text-center text-gray-700 mt-2">
                            Saath-Saath
                        </p>
                    </div>
                    <div className="w-48">
                        <img alt="Album cover of Arth" className="w-full h-auto" height="200" src="https://storage.googleapis.com/a1aa/image/Rv4t9pcbrpkqlH6sy13RSRnnI8GIpSKpXkYnlFN9t1M.jpg" width="200"/>
                        <p className="text-center text-gray-700 mt-2">
                            Arth
                        </p>
                    </div>
                    <div className="w-48">
                        <img alt="Album cover of Call of the Valley" className="w-full h-auto" height="200" src="https://storage.googleapis.com/a1aa/image/UGAaooxDfY443GVxvT86HDdtoX5PtI7hWnmCYggW7_w.jpg" width="200"/>
                        <p className="text-center text-gray-700 mt-2">
                            Call of the Valley
                        </p>
                    </div>
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
