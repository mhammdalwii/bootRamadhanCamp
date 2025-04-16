import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryCluient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryCluient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
