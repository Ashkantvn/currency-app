import React, { useContext, useRef } from 'react';
import Header from './parts/Header';
import {AiOutlineArrowUp} from "react-icons/ai"
import Main from './parts/Main';
import { currencyAppContext } from './hooks/useCurrencyContext';
import GlobalStyle from './style/styledComponents/globalStyle';

const App = () => {
    const { setishidden , isNightMode} = useContext(currencyAppContext);
    const timer = useRef(0);// settimeout functions ID

    ///scroll to the top of the page
    const topArrowButtonClickHandler = ()=>{
        window.scrollTo(0,0);
    }

    ///scroll event for body element 
    window.addEventListener("scroll",()=>{
      setishidden((ishidden)=>ishidden=true);
      if (timer.current!==0){/// will stop showing the header if client is scrolling
          clearTimeout(timer.current);
      }
      timer.current = setTimeout(()=>{
          setishidden((ishidden)=>ishidden=false);
      },300);
    })
  
    
    
    return (
        
        <div>
            <GlobalStyle isNightMode={isNightMode}/>
            <Header />
            <Main/>
            <button className='top-link' onClick={topArrowButtonClickHandler}><AiOutlineArrowUp/></button>
        </div>
    );
    }

export default App;

