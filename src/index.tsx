import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { I18nProvider } from "./i18n";
import { Frame } from "./screens/Frame";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <I18nProvider>
      <Frame />
    </I18nProvider>
  </StrictMode>,
);
