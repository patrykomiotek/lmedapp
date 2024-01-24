import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// $('#root').innerHTML =
// <div id="root"></div>

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ReactDOM.createRoot(document.getElementById("wizyty")!).render(
//   <React.StrictMode>
//     <WizityComponent />
//   </React.StrictMode>
// );

// ReactDOM.createRoot(document.getElementById("recepty")!).render(
//   <React.StrictMode>
//     <ReceptyPage />
//   </React.StrictMode>
// );
