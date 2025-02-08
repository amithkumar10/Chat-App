import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { BrowserRouter } from "react-router-dom";
import "@fontsource/montserrat"; // Default Montserrat font
import "@fontsource/montserrat/700.css"; // Bold Montserrat
import "./index.css";

const styles = {
  global: (props) => ({
    body: {
      bg: mode("gray.100", "#000")(props),
      color: mode("gray.800", "WhiteAlpha.900")(props),
      fontFamily: "'Montserrat', sans-serif", // Apply Montserrat globally
    },
  }),
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

// Extend the theme with fonts
const theme = extendTheme({
  config,
  styles,
  fonts: {
    heading: "'Montserrat', sans-serif", // Font for headings
    body: "'Montserrat', sans-serif", // Font for body text
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
