import { api } from "../../config/api";

// export const fetchProducts = async () => {
//   return await api.get("/products");
// }

export type ProductDto = {
  id: string;
  fields: {
    title: string;
    description: string;
    price: number;
  };
};

type ProductsResponse = {
  records: ProductDto[];
};

export const fetchProducts = () => {
  return api.get<ProductsResponse>("/products");
};
