import ProductList from "../../components/products/product-list";
import axios from "axios";
import { useState, useEffect } from "react";


function Productos() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/product", {withCredentials: true})
            .then(res => {
                const newProducts = res.data;
                console.log("newProducts", newProducts)
                setProducts(newProducts)
        })
    },[])

    useEffect(()=>{
        const cat = products.map(p => p.category);
        const newCat = cat.filter((item,index)=>{
            return cat.indexOf(item) === index;
          });
        setCategories(newCat);
    }, products)

    console.log(products)

    return ( 
    <div className="container">
        { categories && categories.map(cate => (<div key={cate} className="mt-4">
            <ProductList products={products.filter(pro => pro?.category === cate)} title={cate} />
            </div>
        ))

        }
    </div>
     );
}

export default Productos;