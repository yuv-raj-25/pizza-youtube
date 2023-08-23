import React from 'react'

const SingleProducts = () => {
    return (
        <>
            <div className="container mx-auto mt-12">
                <button className="font-bold mb-12">Back</button>
                <div className="flex">
                    <img className="" src="/images/peproni.png" alt="pizza" />
                    <div>
                        <h3 className="text-xl font-bold px-8">Havana special</h3>
                        <div className="text-md px-8">Small

                        </div>
                        <div className="font-bold mt-2 px-8">₹ 400

                        </div>
                        <button className="bg-yellow-500 py-1 px-8 rounded-full font-bold mt-4">Add to cart</button>

                    </div>

                </div>


            </div>
        </>
    )
}

export default SingleProducts