import PropTypes from 'prop-types';
import { createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import palette from '../theme/palette';

const PRIMARY_COLOR = [
  {
    name: 'default',
    ...palette.light.primary,
  },
  {
    name: 'purple',
    lighter: '#EBD6FD',
    light: '#B985F4',
    main: '#7635dc',
    dark: '#431A9E',
    darker: '#200A69',
    contrastText: '#fff',
  },
  {
    name: 'cyan',
    lighter: '#D1FFFC',
    light: '#76F2FF',
    main: '#1CCAFF',
    dark: '#0E77B7',
    darker: '#053D7A',
    contrastText: palette.light.grey[800],
  },
  {
    name: 'blue',
    lighter: '#CCDFFF',
    light: '#6697FF',
    main: '#0045FF',
    dark: '#0027B7',
    darker: '#00137A',
    contrastText: '#fff',
  },
  {
    name: 'orange',
    lighter: '#FEF4D4',
    light: '#FED680',
    main: '#fda92d',
    dark: '#B66816',
    darker: '#793908',
    contrastText: palette.light.grey[800],
  },
  {
    name: 'red',
    lighter: '#FFE3D5',
    light: '#FFC1AC',
    main: '#FF3030',
    dark: '#B71833',
    darker: '#7A0930',
    contrastText: '#fff',
  },
];

SetColor.propTypes = {
  themeColor: PropTypes.oneOf(['default', 'purple', 'cyan', 'blue', 'orange', 'red']),
};

function SetColor(themeColor) {
  let color;
  const DEFAULT = PRIMARY_COLOR[0];
  const PURPLE = PRIMARY_COLOR[1];
  const CYAN = PRIMARY_COLOR[2];
  const BLUE = PRIMARY_COLOR[3];
  const ORANGE = PRIMARY_COLOR[4];
  const RED = PRIMARY_COLOR[5];

  switch (themeColor) {
    case 'purple':
      color = PURPLE;
      break;
    case 'cyan':
      color = CYAN;
      break;
    case 'blue':
      color = BLUE;
      break;
    case 'orange':
      color = ORANGE;
      break;
    case 'red':
      color = RED;
      break;
    default:
      color = DEFAULT;
  }
  return color;
}

const initialState = {
  themeMode: 'light',
  themeColor: 'bluet',
  onChangeMode: () => {},
  setColor: PRIMARY_COLOR[0],
};

const SettingsContext = createContext(initialState);

SettingsProvider.propTypes = {
  children: PropTypes.node,
};

function SettingsProvider({ children }) {
  const [settings, setSettings] = useLocalStorage('settings', {
    themeMode: initialState.themeMode,
    themeStretch: initialState.themeStretch,
  });

  const primaryColor = 'blue';
  const onChangeMode = (event) => {
    setSettings({
      ...settings,
      themeMode: event.target.value,
    });
  };

  return (
    <SettingsContext.Provider
      value={{
        ...settings,
        onChangeMode,
        primaryColor: SetColor(primaryColor),
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export { SettingsProvider, SettingsContext };
