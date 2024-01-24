import { Link } from "react-router-dom";
import { fetchProducts, type ProductDto } from "./services";
import { useApi } from "./useApi";

export const ProductsList = () => {
  const {
    data: products,
    isLoading,
    isError,
  } = useApi<ProductDto[]>(fetchProducts);

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
        {products &&
          products.map((elem) => (
            <li key={elem.id}>
              <Link to={`/products/${elem.id}`}>
                {elem.fields.title} {elem.fields.price}zł
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};
