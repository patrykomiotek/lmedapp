import { Link } from "react-router-dom";
import { fetchProducts, type ProductDto } from "./services";
import { useApi } from "./useApi";
import { useQuery } from "react-query";

export const ProductsList = () => {
  // const {
  //   data: products,
  //   isLoading,
  //   isError,
  // } = useApi<ProductDto[]>(fetchProducts);
  const {
    data: products,
    isLoading,
    isError,
    refetch,
  } = useQuery("products", fetchProducts);

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
      <button onClick={() => refetch()}>Refresh</button>
    </div>
  );
};
