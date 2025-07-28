import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";

const client_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

// const client_ID = "554478603837-aotj43h50ie8b7eukeq3u506430n63e3.apps.googleusercontent.com";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={client_ID}>
      <App />
    </GoogleOAuthProvider>
  </StrictMode>
);
