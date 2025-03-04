import React, { useState } from 'react'

function Adminlogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Email:', email);
    console.log('Password:', password);
  }

  return (
    <div>
      <div className="bg-gray-100 flex items-center justify-center min-h-screen">
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8 flex flex-col items-center">
          <div className="mb-8">
            <h2>Zwaram Audios</h2>
          </div>
          <div className="w-full flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 flex justify-center items-center p-4">
              <img alt="" className="w-3/4" height="200" src="https://atlas-content-cdn.pixelsquid.com/stock-images/gramophone-phonograph-K69qoR2-600.jpg" width="300"/>
            </div>
            <div className="w-full md:w-1/2 p-4">
              <h2 className="text-xl font-semibold mb-4">
                Login as a Admin User
              </h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="relative">
                  <input 
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600" 
                    placeholder="Email" 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <i className="fas fa-user absolute right-3 top-3 text-gray-400"></i>
                </div>
                <div className="relative">
                  <input 
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600" 
                    placeholder="********" 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <i className="fas fa-lock absolute right-3 top-3 text-gray-400"></i>
                </div>
                <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700" type="submit">
                  LOGIN
                </button>
              </form>
              <div className="mt-4 text-center">
                <span>Forgot your password?</span><br/>
                <span>Please contact your Developer!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Adminlogin