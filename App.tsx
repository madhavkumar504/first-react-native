import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text } from 'react-native';
import Signup from './components/Signup'; // Fixed import statement

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Signup />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff',
  },
});

export default App;
