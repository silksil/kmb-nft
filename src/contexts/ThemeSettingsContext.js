import PropTypes from "prop-types";
import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const initialState = {
  themeMode: "dark",
  themeColor: "bluet",
  onChangeMode: () => {}
};

const ThemeSettingsContext = createContext(initialState);

ThemeSettingsProvider.propTypes = {
  children: PropTypes.node
};

function ThemeSettingsProvider({ children }) {
  const [settings, setSettings] = useLocalStorage("settings", {
    themeMode: initialState.themeMode
  });

  const onChangeMode = () => {
    setSettings({
      ...settings,
      themeMode: " event.target.value"
    });
  };

  const themeMode = "dark";
  return (
    <ThemeSettingsContext.Provider
      value={{
        ...settings,
        themeMode,
        onChangeMode
      }}
    >
      {children}
    </ThemeSettingsContext.Provider>
  );
}

export { ThemeSettingsProvider, ThemeSettingsContext };
