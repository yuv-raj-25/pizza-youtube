import React, { useState } from 'react'

const SingleProducts = () => {
    const [product,setProducts] = useState([]);

    useState(()=>{
        fetch('http://localhost:8080/api/products')
    })
    return (
        <>
            <div className="container mx-auto mt-12">
                <button className="font-bold mb-12">Back</button>
                <div className="flex">
                    <img className="" src="/images/peproni.png" alt="pizza" />
                    <div className="ml-16">
                        <h3 className="text-xl font-bold">Havana special</h3>
                        <div className="text-md">Small

                        </div>
                        <div className="font-bold mt-2 ">₹ 400

                        </div>
                        <button className="bg-yellow-500 py-1 px-8 rounded-full font-bold mt-4">Add to cart</button>

                    </div>

                </div>


            </div>
        </>
    )
}

export default SingleProducts