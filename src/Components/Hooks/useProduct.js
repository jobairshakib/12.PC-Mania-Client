import { useState, useEffect } from 'react';

const useProduct = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`https://pc-mania.herokuapp.com/part`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return [products, setProducts];
};

export default useProduct;