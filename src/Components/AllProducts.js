import useProduct from "./Hooks/useProduct";
import Product from './Product';

const AllProducts = () => {
    const [products, setProducts] = useProduct([]);
    return (
        <>
            <section className="p-7">
                <h1 className="text-center text-primary-focus text-3xl font-bold">Products</h1>
                <div className="grid gap-8 pt-8 mx-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {products.map((product) => (
                        <Product key={products._id} product={product} />
                    ))}
                </div>
            </section>
        </>
    );
};

export default AllProducts;