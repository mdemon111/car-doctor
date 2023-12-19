import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Products = () => {
    const [products, setProduct] = useState([])

    useEffect(() =>{
        fetch("http://localhost:5000/product")
        .then(res =>res.json())
        .then(data => setProduct(data))
    }, [])
    return (
        <div className="mt-4">
            <div className="text-center">
                <h3 className="text-3xl font-bold text-orange-500">Popular Products</h3>
                <h2 className="text-5xl font-bold">Browse Our Products</h2>
                <p className="mb-8 mt-5">The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {
                products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
               }
            </div>
        </div>
    );
};

export default Products;