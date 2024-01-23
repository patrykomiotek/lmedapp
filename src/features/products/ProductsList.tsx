import { useEffect, useState } from "react";
import { api } from "../../config/api";

type ProductDto = {
  id: string;
  fields: {
    title: string;
    description: string;
    price: number;
  };
};

export const ProductsList = () => {
  const [products, setProducts] = useState<ProductDto[]>([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await api.get("/products");

        setProducts(response.data.records);
      } catch {
        // error
      }
    };

    loadData();
  }, []);

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
