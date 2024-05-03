import React from "react";
import Routes from "@/routes";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@/redux/store";
import { TooltipProvider } from "./ui/tooltip";
import { Toaster } from "sonner";

const App = () => {
  const queryClient = new QueryClient();

  return (
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <TooltipProvider>
                <Routes />
                <Toaster richColors={true}/>
              </TooltipProvider>
            </PersistGate>
          </Provider>
        </QueryClientProvider>
  );
};

export default App;
