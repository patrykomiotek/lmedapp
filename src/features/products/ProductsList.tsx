import { useEffect, useState } from "react";
import { ProductDto, fetchProducts } from "./services";

export const ProductsList = () => {
  const [products, setProducts] = useState<ProductDto[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetchProducts();

        setProducts(response.data.records);
        setIsLoading(false);
      } catch (e) {
        // error
        setIsError(true);
      }
    };

    loadData();
  }, []);

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
