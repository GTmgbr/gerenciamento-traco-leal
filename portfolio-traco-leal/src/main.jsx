import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import App from "./App";

import "./index.css";

import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")).render(

    <BrowserRouter>

        <AuthProvider>

            <App />

        </AuthProvider>

    </BrowserRouter>

);