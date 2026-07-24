import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { SiteSettingsProvider } from "./components/site/SiteSettingsProvider";
import "./styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SiteSettingsProvider>
      <App />
    </SiteSettingsProvider>
  </StrictMode>,
);
