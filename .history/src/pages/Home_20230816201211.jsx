import React from 'react'
import {Link} from 'react-router-dom'


const Home = () => {
    return(
        <div className="hero py-16">
            <div className="container mx-auto">
               <div className="w-1/2">
                <h6 className="text-lg"><em>Are you Hungry</em></h6>
                <h1 className="text-3xl md:text-5xl font-bold">Don't Wait !</h1>
                <button className="px-6 py-2 rounded-full text-white font-bold mt-4 bg-yellow-500
                hover:bg-yellow-600,cursoe">Order Now</button>
               </div>

               <div className="w-1/2"></div>
              
            </div>

        </div>
    )
    
  

}

export default Home