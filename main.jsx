import { createRoot } from 'react-dom/client'
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from './component/Home';
import CountryDetails from './component/CountryDetails';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="" element={<Home />} />
        <Route path="/:country" element={<CountryDetails />} />
      </Route>
    </Routes>
    </BrowserRouter>
)