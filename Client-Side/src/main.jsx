import ReactDOM from "react-dom/client";
import "./index.css";
import AuthProvider from "./AuthProviders/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";
import { router } from "./routes/routes.jsx";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <AuthProvider>
      <Toaster />
      <RouterProvider router={router} />
    </AuthProvider>
  </HelmetProvider>
);
