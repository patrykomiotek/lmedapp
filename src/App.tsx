import { useEffect, useRef, useState } from "react";
import { Text } from "@lmedui/common-ui";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Generator } from "./components/Generator/Generator";
import { RegistrationFormState } from "./components/RegistrationFormState";
import { RegistrationFormRefs } from "./components/RegistrationFormRefs";
import { MagicButton } from "./ui/MagicButton";
import { RegistrationPage } from "./pages/RegistrationPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ContactPage } from "./pages/ContactPage";
import { Layout } from "./components/Layout/Layout";
import { ProductsPage } from "./pages/ProductsPage";
import { ProductDetails } from "./features/products/ProductDetails";
import { ProductDetailsPage } from "./pages/ProductDetailsPage";

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

  return (
    <div>
      <RouterProvider router={router} />

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
    </div>
  );
}

export default App;
