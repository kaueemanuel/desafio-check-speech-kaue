import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import Navbar from "./components/Narbar/Navbar";
import Solutions from "./components/Solutions/Solutions";
import Customers from "./components/Customers/Customers";
import Prices from "./components/Prices/Prices";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import WebFont from "webfontloader";
import GlobalStyle from "./global.styles";

function LoadFonts() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto"],
      },
    });
  });

  return <></>;
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <LoadFonts />
    <GlobalStyle />
    <Navbar />
    <Header />
    <Solutions />
    <Customers />
    <Prices />
    <Contact />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
