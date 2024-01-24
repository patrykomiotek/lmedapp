import { useNavigate } from "react-router-dom";
import { CreateProductForm } from "../features/products/CreateProductForm";
import { createProduct } from "../features/products/services";
import { CreateProductDto } from "../types/dtos/CreateProductDto";

export const CreateProductPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (data: CreateProductDto) => {
    const save = async () => {
      try {
        const response = await createProduct(data);
        console.log(response.data);
        navigate(`/products/${response.data.records[0].id}`);
        // toast, alert
      } catch {
        //
      }
    };

    save();
  };

  return (
    <div>
      <h1>Create Product</h1>
      <CreateProductForm onSubmit={handleSubmit} />
    </div>
  );
};
