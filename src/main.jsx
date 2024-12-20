import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "./components/ui/provider.jsx";
import UserData from "./UserData.jsx";
import NavBar from "./NavBar.jsx";


createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavBar />
    {/* <Provider>
      <App />
      <UserData />
    </Provider> */}
  </React.StrictMode>
);
