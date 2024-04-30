import { useEffect, useState } from "react";
import axios from "axios";

export const useFetch = () => {
  const controller = new AbortController();
  const [Data, setData] = useState("");


  const fetchData = async () => {
    const sessionData = sessionStorage.getItem("coinData");
    if (!sessionData) {
      try {
        const fetchData = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false",
          { signal: controller.signal }
        );
        setData(fetchData.data);
        sessionStorage.setItem("coinData", JSON.stringify(fetchData.data));
      } catch (error) {
        setData(error.message);
      }
    }else{
        setData(()=>JSON.parse(sessionData));
    }
  };


  ////////////////////get data
  useEffect(() => {
    if (Data.length===0) {
      fetchData();
    }
    return () => {
      controller.abort();
    };
  });

  return Data;
};
