import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ReactDOM from "react-dom";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./routes/Routes";

// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    <Toaster></Toaster>
  </QueryClientProvider>
);
