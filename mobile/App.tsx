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

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#1a1a1a' : '#f5f5f5',
  };

  return (
    <SafeAreaView style={[styles.container, backgroundStyle]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={styles.content}>
        <Text style={[styles.title, {color: isDarkMode ? '#fff' : '#333'}]}>
          Finilo
        </Text>
        <Text style={[styles.subtitle, {color: isDarkMode ? '#ccc' : '#666'}]}>
          Never miss a subscription again
        </Text>
        <Text style={[styles.description, {color: isDarkMode ? '#aaa' : '#888'}]}>
          Track your subscriptions, get reminders before renewals, and take control of your recurring expenses all in one place at the same time.
        </Text>
        <View style={styles.versionContainer}>
          <Text style={[styles.version, {color: isDarkMode ? '#888' : '#aaa'}]}>
            React Native + TypeScript
          </Text>
        </View>
      </View>
    </SafeAreaView>
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
