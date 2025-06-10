import {
  MD3LightTheme as DefaultTheme,
  MD3DarkTheme,
  MD3Theme,
} from 'react-native-paper';

export const FiniloLightTheme: MD3Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#03045e',
    onPrimary: '#ffffff',
    primaryContainer: '#0077b6',
    onPrimaryContainer: '#ffffff',

    secondary: '#90e0ef',
    onSecondary: '#03045e',
    secondaryContainer: '#f1f8ff',
    onSecondaryContainer: '#03045e',

    background: '#f1f8ff',
    surface: '#ffffff',
    surfaceVariant: '#e0e0e0',
    onSurface: '#1c1c2e',
    onSurfaceVariant: '#6c757d',

    error: '#ff4d4f',
    onError: '#ffffff',
    errorContainer: '#ffdad6',
    onErrorContainer: '#690005',

    outline: '#cccccc',
    shadow: '#000000',
    inverseSurface: '#1c1c2e',
    inverseOnSurface: '#f1f8ff',
    inversePrimary: '#61a5c2',
  },
};

export const FiniloDarkTheme: MD3Theme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: '#61a5c2',
    onPrimary: '#000000',
    primaryContainer: '#03045e',
    onPrimaryContainer: '#ffffff',

    secondary: '#90e0ef',
    onSecondary: '#03045e',
    secondaryContainer: '#1b263b',
    onSecondaryContainer: '#f1f8ff',

    background: '#010225',
    surface: '#0b1a3e',
    surfaceVariant: '#1a1a2a',
    onSurface: '#e0e0f0',
    onSurfaceVariant: '#a5acc1',

    error: '#ff4d4f',
    onError: '#ffffff',
    errorContainer: '#93000a',
    onErrorContainer: '#ffd9d9',

    outline: '#4c4c4c',
    shadow: '#000000',
    inverseSurface: '#f1f8ff',
    inverseOnSurface: '#0b1a3e',
    inversePrimary: '#0077b6',
  },
};

