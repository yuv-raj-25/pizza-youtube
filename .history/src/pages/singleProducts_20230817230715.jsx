import{ useState ,useEffect} from 'react';
import { useParams } from 'react-router-dom';

const SingleProducts = () => {
    const [product,setProducts] = useState({});
    const params = useParams();

    useEffect(()=>{
        fetch(`http://localhost:8080/api/products/${params._id}`).then(response => response.json()).
        then((product) =>{
            // console.log(product);
            setProducts(product)
        })
    },[])
    return (
        <>
            <div className="container mx-auto mt-12">
                <button className="font-bold mb-12">Back</button>
                <div className="flex">
                    <img className="" src="/images/peproni.png" alt="pizza" />
                    <div className="ml-16">
                        <h3 className="text-xl font-bold">{product.name}</h3>
                        <div className="text-md">{product.size}

                        </div>
                        <div className="font-bold mt-2 ">₹ {pro}

                        </div>
                        <button className="bg-yellow-500 py-1 px-8 rounded-full font-bold mt-4">Add to cart</button>

                    </div>

                </div>


            </div>
        </>
    )
}

export default SingleProducts