import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { initAnalytics } from "./lib/analytics";

createRoot(document.getElementById("root")!).render(<App />);

if (typeof window !== "undefined") {
  if (document.readyState === "complete") {
    initAnalytics();
  } else {
    window.addEventListener("load", () => initAnalytics(), { once: true });
  }
}
