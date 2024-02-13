import { useEffect, useRef } from "react";
import { ReactQueryDevtools } from "react-query/devtools";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";

// import "./App.css";
import { store } from "./store";
import { RegistrationPage } from "./pages/RegistrationPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ContactPage } from "./pages/ContactPage";
import { Layout } from "./components/Layout/Layout";
import { ProductsPage } from "./pages/ProductsPage";
import { ProductDetailsPage } from "./pages/ProductDetailsPage";
import { QueryClient, QueryClientProvider } from "react-query";
import { CreateProductPage } from "./pages/CreateProductPage";
import { AuthProvider } from "./components/Auth/AuthContext";
import { AuthPage } from "./pages/AuthPage";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { ThemeProvider } from "./components/Theme/ThemeContext";

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
        path: "/auth",
        element: <AuthPage />,
      },
      {
        path: "/contact",
        element: (
          <ProtectedRoute>
            <ContactPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

function App() {
  const magicRef = useRef<HTMLButtonElement>(null);
  // const [isLogged, setIsLogged] = useState(false);

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
    <div className="dark:bg-slate-900 h-full w-full">
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <AuthProvider>
              <ThemeProvider>
                <RouterProvider router={router} />
              </ThemeProvider>
            </AuthProvider>
          </Provider>
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
    </div>
  );
}

export default App;
