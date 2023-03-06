import ProductList from "../../components/products/product-list";
import axios from "axios";
import { useState, useEffect } from "react";


function Productos() {
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

    return ( <ProductList products={products}/> );
}

export default Productos;