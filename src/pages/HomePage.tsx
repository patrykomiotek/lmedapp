import { Helmet } from "react-helmet-async";
import { CounterRedux } from "../features/CounterRedux";
import { Generator } from "../components/Generator/Generator";

export const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>{import.meta.env.VITE_APP_TITLE}</title>
      </Helmet>
      <h1>Home</h1>
      <Generator />
      <CounterRedux />
    </div>
  );
};
