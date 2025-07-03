import { UseThemeContext } from '../themes/ThemeContent';

export default function Button({ children }) {
    const { toggleTheme, setToggleTheme } = UseThemeContext();

    const handleThemeChange = (theme) => {
        setToggleTheme(theme === "light" ? "dark" : "light");
    }

  return (
    <button
      className={`btn ${toggleTheme}`}
      onClick={() => handleThemeChange(toggleTheme)}
    >
      {children || "Toggle Theme"}
    </button>
  );
}