import React from 'react'

function Footer() {
return (
    <div>
        <div className="bg-black text-white">
            <footer className="py-10">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <div className="flex items-center mb-4">
                                <img
                                    alt="Satyam Audios logo"
                                    className="mr-2"
                                    height="40"
                                    src="src/assets/vinyl-record.png"
                                    width="40"
                                />
                                <span className="text-xl font-bold">Zwaram Audios</span>
                            </div>
                            <p className="text-sm mb-4">
                                Zwaram Audios is one of the leading LP Vinyl Records company in Kerala,
                                Trivandrum. The label has produced and distributed
                                film soundtracks, poems, music albums, lp records etc.
                            </p>
                            <div className="flex space-x-4">
                                <a className="text-gray-400 hover:text-white" href="#">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a className="text-gray-400 hover:text-white" href="#">
                                    <i className="fab fa-youtube"></i>
                                </a>
                            </div>
                        </div>

                        
                        <div>
                            <h3 className="text-lg font-bold mb-4">CONTACT</h3>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <i className="fas fa-map-marker-alt mr-2"></i>
                                    Zwaram Audios, Trivandrum, Kerala.
                                </li>
                                <li>
                                    <i className="fas fa-phone-alt mr-2"></i>
                                    +91 799 4067720
                                </li>
                                <li>
                                    <i className="fas fa-envelope mr-2"></i>
                                    zwaramaudios@gmail.com
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-10 text-center text-gray-500 text-xs">
                        © 2025 Zwaram. All rights reserved.
                        
                    </div>
                </div>
            </footer>
        </div>
    </div>
);
}

export default Footer
