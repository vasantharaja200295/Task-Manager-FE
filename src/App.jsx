import React from "react";
import Routes from "@/routes";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@/components/themeProvider";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@/redux/store";


const App = () => {
  const queryClient = new QueryClient();


  return (
    <div>
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <Routes />
            </PersistGate>
          </Provider>
        </QueryClientProvider>
      </ThemeProvider>
    </div>
  );
};

export default App;
