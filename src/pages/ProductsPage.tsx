import { ProductsList } from "../features/products/ProductsList";
import { Header } from "../ui";

export const ProductsPage = () => {
  return (
    <div>
      <Header>Products</Header>
      <ProductsList />
    </div>
  );
};
