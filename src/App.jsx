import React from "react";
import Routes from "@/routes";
import { Provider } from "react-redux";
import {
  QueryClient,
  QueryClientProvider
} from "@tanstack/react-query";
import store from "./redux/store";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <Routes />
        </Provider>
      </QueryClientProvider>
    </div>
  );
};

export default App;
