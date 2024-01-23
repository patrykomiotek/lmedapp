import { useEffect, useState } from "react";
import { ProductDto, fetchProducts } from "./services";

type S =
  | {
      // pending
      data: undefined;
      isLoading: true;
      isError: false;
    }
  | {
      // resolved
      data: ProductDto[];
      isLoading: false;
      isError: false;
    }
  | {
      // rejected
      data: undefined;
      isLoading: false;
      isError: true;
    };

export const useProducts = () => {
  const [state, setState] = useState<S>({
    data: undefined,
    isLoading: true,
    isError: false,
  });
  const { data, isLoading, isError } = state;

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetchProducts();

        setState({
          data: response.data.records,
          isLoading: false,
          isError: false,
        });
      } catch (e) {
        // error
        setState({
          data: undefined,
          isLoading: false,
          isError: true,
        });
      }
    };

    loadData();
  }, []);

  return { data, isLoading, isError };
};
