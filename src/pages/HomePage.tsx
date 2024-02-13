import { Helmet } from "react-helmet-async";
import { CounterRedux } from "../features/CounterRedux";
import { Generator } from "../components/Generator/Generator";
import { Header } from "../ui/Header";

export const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>{import.meta.env.VITE_APP_TITLE}</title>
      </Helmet>
      <Header>Home</Header>
      <Generator />
      <CounterRedux />
    </div>
  );
};
