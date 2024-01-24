import { useEffect, useRef, useState } from "react";
import { ReactQueryDevtools } from "react-query/devtools";
import { HelmetProvider } from "react-helmet-async";

import "./App.css";
import { RegistrationPage } from "./pages/RegistrationPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ContactPage } from "./pages/ContactPage";
import { Layout } from "./components/Layout/Layout";
import { ProductsPage } from "./pages/ProductsPage";
import { ProductDetails } from "./features/products/ProductDetails";
import { ProductDetailsPage } from "./pages/ProductDetailsPage";
import { QueryClient, QueryClientProvider } from "react-query";
import { CreateProductPage } from "./pages/CreateProductPage";

// routes.ts (config map)

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // loader: rootLoader,
    children: [
      {
        path: "/",
        element: <HomePage />,
        // loader: teamLoader,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/products/create",
        element: <CreateProductPage />,
      },
      {
        path: "/products/:id",
        element: <ProductDetailsPage />,
      },
      {
        path: "/registration",
        element: <RegistrationPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
]);

function App() {
  const [count, setCount] = useState(0);
  const magicRef = useRef<HTMLButtonElement>(null);
  // const state = useState(0);
  // state[0] <- state
  // state[1] <- callback(newState)

  useEffect(() => {
    if (magicRef.current) {
      magicRef.current.style.backgroundColor = "red";
    }
  }, []);

  const handleMouseEnter = () => {
    if (magicRef.current) {
      magicRef.current.style.backgroundColor = "green";
    }
  };

  const handleMouseLeave = () => {
    if (magicRef.current) {
      magicRef.current.style.backgroundColor = "blue";
    }
  };

  const queryClient = new QueryClient();

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>

      {/* <RegistrationPage /> */}
      {/* <MagicButton
          ref={magicRef}
          label="Click me"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        /> */}
      {/* <RegistrationFormRefs /> */}
      {/* <RegistrationFormState /> */}
      {/* <Generator /> */}
    </HelmetProvider>
  );
}

export default App;
