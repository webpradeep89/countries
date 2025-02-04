import { NavLink } from "react-router";
import { useTheme } from "../hooks/useTheme";

const Header = () => {
  const [isDark, setDark] = useTheme();

  return (
    <>
    <header className={`header-container ${isDark && 'dark'}`}>
      
        <div className='all-country'>
          <i className="icon-globe"></i> Hello World!
        </div>
        <div className="right-navigation">
          <NavLink to="/">
            Home
          </NavLink>
          <NavLink to="/expenses">
            Expenses
          </NavLink>
          <div className='thim-type' onClick={
            () => {
              setDark(!isDark)
              localStorage.setItem('isDarkTheme', !isDark)
            }
            }>
              <i className={`icon-${!isDark ? 'moon' : 'sun'}`}></i> {isDark ? 'Light' : 'Dark'} Mode
          </div>
        </div>
    </header>
    </>
  )
}

export default Header