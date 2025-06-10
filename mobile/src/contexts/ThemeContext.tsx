import React, {createContext, useState, useContext, ReactNode} from 'react';
import {FiniloLightTheme, FiniloDarkTheme} from '../themes/finiloTheme';
import {useColorScheme} from 'react-native';
const ThemeContext = createContext({
  isDark: false,
  toggleTheme: () => {},
  theme: FiniloLightTheme,
});

export const ThemeProvider = ({ children }: { children: ReactNode; }) => {
    const colorScheme = useColorScheme();
  const [isDark, setIsDark] = useState(colorScheme === 'dark');
    const toggleTheme = () => setIsDark(
      colorScheme === 'dark' ? false : true
  );
  const theme = isDark ? FiniloDarkTheme : FiniloLightTheme;
  return (
    <ThemeContext.Provider value={{isDark, toggleTheme, theme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeToggle = () => useContext(ThemeContext);
