import { createRoot } from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import App from "./App";
import "./index.scss";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <NextUIProvider>
    <App tab="home" />
  </NextUIProvider>
);
