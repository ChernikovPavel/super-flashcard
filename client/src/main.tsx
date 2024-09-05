import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Theme, ThemePanel } from "@radix-ui/themes";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <Theme appearance="dark">
      <App />
    </Theme>
  </Provider>
);
