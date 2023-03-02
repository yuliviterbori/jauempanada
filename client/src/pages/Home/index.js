import axios from 'axios'
import { useEffect, useState } from 'react';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/product", {withCredentials: true})
            .then(res => {
                const newProducts = res.data;
                console.log("newProducts", newProducts)
                setProducts(newProducts)
        })
    },[])
    console.log(products)

    return <div>
        <h1>Home</h1>
        {products?.map(prod => (<div>{prod?.title}</div>))}
        </div>;
  };
  
  export default Home;