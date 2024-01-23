import { useProducts } from "./useProducts";

export const ProductsList = () => {
  const { data: products, isLoading, isError } = useProducts();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error!</p>;
  }

  return (
    <div>
      <h3>Products</h3>
      <ul>
        {products.map((elem) => (
          <li key={elem.id}>
            {elem.fields.title} {elem.fields.price}zł
          </li>
        ))}
      </ul>
    </div>
  );
};
