import { Helmet } from "react-helmet-async";

export const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>{import.meta.env.VITE_APP_TITLE}</title>
      </Helmet>
      <h1>Home</h1>
    </div>
  );
};
