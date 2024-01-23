import { useEffect, useState } from "react";
import axios from "axios";

const TOKEN =
  "patbOoitoFRwwRPkZ.60487b09a6d89b41d77926048fdfbeb4910fd66d559440fbf1b3d91d40d1a8fb";

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
    axios
      .get("https://api.airtable.com/v0/appHBgV8KCoqcryWu/products", {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        // schema.safeParse
        console.log(response.data);
        setProducts(response.data.records);
      });
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
