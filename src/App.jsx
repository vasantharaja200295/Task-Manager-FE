import React from "react";
import Routes from "@/routes";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@/components/themeProvider";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@/redux/store";
import { TooltipProvider } from "./ui/tooltip";

const App = () => {
  const queryClient = new QueryClient();

  return (
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <TooltipProvider>
                <Routes />
              </TooltipProvider>
            </PersistGate>
          </Provider>
        </QueryClientProvider>
      </ThemeProvider>
  );
};

export default App;
