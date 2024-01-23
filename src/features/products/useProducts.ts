import { useEffect, useState } from "react";
import { ProductDto, fetchProducts } from "./services";

export const useProducts = () => {
  const [data, setData] = useState<ProductDto[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetchProducts();

        setData(response.data.records);
        setIsLoading(false);
      } catch (e) {
        // error
        setIsError(true);
      }
    };

    loadData();
  }, []);

  return { data, isLoading, isError };
};
