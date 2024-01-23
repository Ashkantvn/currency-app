import React, { useContext,useMemo } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { currencyAppContext } from "../hooks/useCurrencyContext";

function Footer() {
  const { isNightMode, setisNightMode ,ishidden} = useContext(currencyAppContext);
  const display = useMemo(() => (ishidden ? "bottom-f" : ""), [ishidden]);
  ///night mode event handler
  function nightModeClickHandler() {
    setisNightMode((isNightMode) => !isNightMode);
  }

  ///scroll to the top of the page
  const topArrowButtonClickHandler = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className={`${display}`}>
      <button className="fixed-buttons" onClick={topArrowButtonClickHandler}>
        <AiOutlineArrowUp />
      </button>
      <button
        onClick={nightModeClickHandler}
        className="fixed-buttons nightmode-button"
      >
        {isNightMode ? <BsMoonFill /> : <BsSunFill />}
      </button>
    </footer>
  );
}

export default Footer;
