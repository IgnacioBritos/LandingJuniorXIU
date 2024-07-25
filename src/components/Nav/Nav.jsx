import LogoSmile from "../logo/LogoSmile";
import GitHub from "../icons/GitHub";
import LinkedIn from "../icons/LinkedIn";
import Sun from "../icons/sun-svgrepo-com";
import { useTheme } from "../store/store";
import Moon from "../icons/Moon";

const Nav = () => {
  const toggleTheme = useTheme(state => state.toggleTheme);
  const theme = useTheme(state => state.theme);

  return (
    <nav className="text-lg flex gap-5 items-center h-12 fixed top-0 left-0 right-0 ">
      <div className="flex gap-5 items-center px-24">
        <a href="/">
          <LogoSmile />
        </a>
      </div>
      <div className="flex gap-3 items-center ml-auto px-24">
        <a href="/Docs" className="font-medium">Docs</a>
        <button onClick={toggleTheme} className="size-5 flex items-center justify-center">
          { theme === true ? <Sun /> : <Moon /> }
        </button>
        <a href="https://github.com/IgnacioBritos/Junior-xui" target="_blank" className="size-5 flex items-center justify-center">
          <GitHub />
        </a>
        <a href="https://www.linkedin.com/in/ignacio-gaspar-britos/" target="_blank" className="size-5 flex items-center justify-center">
          <LinkedIn />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
