import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import "./style/index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Provider from "./hooks/useCurrencyContext.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <Provider>
            <App />
        </Provider>
    </React.StrictMode>
);