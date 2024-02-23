import ProductCard from "./ProductCard";
const ProductList = () => {
  const products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="flex flex-wrap w-4/6 justify-center">
      {products.map((product) => (
        <ProductCard key={product.id} />
      ))}
    </div>
  );
};

export default ProductList;
