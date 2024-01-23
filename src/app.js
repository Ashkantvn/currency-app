import React, { useContext, useRef } from "react";
import Header from "./parts/Header";
import Main from "./parts/Main";
import { currencyAppContext } from "./hooks/useCurrencyContext";
import GlobalStyle from "./style/styledComponents/globalStyle";
import Footer from "./parts/Footer";

const App = () => {
  const { setishidden, isNightMode } = useContext(currencyAppContext);
  const timer = useRef(0); // settimeout functions ID

  ///scroll event for body element
  window.addEventListener("scroll", () => {
    setishidden((ishidden) => (ishidden = true));
    if (timer.current !== 0) {
      /// will stop showing the header if client is scrolling
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      setishidden((ishidden) => (ishidden = false));
    }, 300);
  });

  return (
    <>
      <GlobalStyle isNightMode={isNightMode} />
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default App;
