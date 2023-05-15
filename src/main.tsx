import "./styles/tailwind.css";

import { render } from "inferno";

import PageRouter from "./router";

const mountPoint = document.getElementById("_SHIFTCODE_INFERNO_");

if (mountPoint) {
  render(<PageRouter />, mountPoint);
} else {
  console.error("Unable to render page");
}
