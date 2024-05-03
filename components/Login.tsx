import React, { useState } from 'react';

import { SafeAreaView, StatusBar, StyleSheet, Button, View, Text, TextInput, TouchableOpacity } from 'react-native';


function Login(): React.JSX.Element {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Login attempted with username:', username, 'and password:', password);
  };
    return (
        <View style={styles.container}>
      <Text style={styles.label}>Username:</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
        placeholder="Enter your username"
      />
      <Text style={styles.label}>Password:</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholder="Enter your password"
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
      );
}


const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: '#fff',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    input: {
      width: '100%',
      marginVertical: 10,
      padding: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
    },
    label: {
      alignSelf: 'flex-start',
      marginLeft: 10,
      marginTop: 20,
      marginBottom: 5,
      fontWeight: 'bold',
    },
    button: {
      backgroundColor: '#007bff',
      padding: 15,
      borderRadius: 5,
      marginTop: 20,
      width: '100%',
      alignItems: 'center',
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
    },
    signupButton: {
      marginTop: 10,
      backgroundColor: '#28a745',
      padding: 15,
      borderRadius: 5,
      width: '100%',
      alignItems: 'center',
    },
    signupButtonText: {
      color: 'white',
      fontWeight: 'bold',
    }
  });
export default Login;
