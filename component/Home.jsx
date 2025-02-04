import { useState } from "react";
import CountryContainer from "./CountryContainer";
import Search from "./Search";
import SelectMenu from "./SelectMenu";
import { useTheme } from "../hooks/useTheme";

const Home = () => {
    const [searchQuery, setSearchQueary] = useState('');
    const [isDark] = useTheme();
  return (
    <>
    <main className={`${isDark && 'dark'}`}>
        <div className="search-container">
        <Search setSearchQueary={setSearchQueary} />
        <SelectMenu setSearchQueary={setSearchQueary} />
        </div>
        <CountryContainer searchQuery={searchQuery} />
    </main>
    </>
  )
}

export default Home