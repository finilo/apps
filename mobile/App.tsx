/**
 * Finilo Mobile App
 * Track subscriptions and never miss a renewal
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  useColorScheme,
} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import {ThemeProvider, useThemeToggle} from './src/contexts/ThemeContext';
import {Switch} from 'react-native-paper';

function App(): React.JSX.Element {
  const {isDark, toggleTheme, theme} = useThemeToggle();
  const backgroundStyle = {
    backgroundColor: isDark ? '#1a1a1a' : '#f5f5f5',
  };



  return (
    <ThemeProvider>
      <PaperProvider theme={theme}>
        <SafeAreaView style={[styles.container, backgroundStyle]}>
          <StatusBar
            barStyle={isDark ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
          />
          <View style={styles.content}>
            <Text style={[styles.title, {color: isDark ? '#fff' : '#333'}]}>
              Finilo
            </Text>
            <Text style={[styles.subtitle, {color: isDark ? '#ccc' : '#666'}]}>
              Never miss a subscription again
            </Text>
            <Text
              style={[styles.description, {color: isDark ? '#aaa' : '#888'}]}>
              Track your subscriptions, get reminders before renewals, and take
              control of your recurring expenses all in one place at the same
              time.
            </Text>
            <View style={styles.versionContainer}>
              <Text style={[styles.version, {color: isDark ? '#888' : '#aaa'}]}>
                React Native + TypeScript
              </Text>
            </View>
          </View>
          <View style={styles.themeToggleContainer}>
            <Switch
              value={isDark}
              onValueChange={toggleTheme}
              color={theme.colors.primary}
            />
          </View>
        </SafeAreaView>
      </PaperProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 24,
    textAlign: 'center',
    fontWeight: '500',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
    maxWidth: 300,
  },
  versionContainer: {
    position: 'absolute',
    bottom: 50,
  },
  version: {
    fontSize: 12,
    textAlign: 'center',
  },
});

export default App;
