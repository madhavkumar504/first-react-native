import React, { useState } from 'react';

import { SafeAreaView, StatusBar, StyleSheet, Button, View, Text, TextInput, TouchableOpacity } from 'react-native';
import Login from './Login';


function Signup(): React.JSX.Element {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

  const onLoginPress = () => {
    <Login />
  };
  const onSignUpPress = () => {
    console.log('onSignUpPress attempted');
  };
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Username:</Text>
            <TextInput
                style={styles.input}
                value={username}
                onChangeText={setUsername}
                placeholder="Enter your username"
                autoCapitalize="none"
            />
            <Text style={styles.label}>Email:</Text>
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="Enter your email"
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <Text style={styles.label}>Password:</Text>
            <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                placeholder="Enter your password"
                secureTextEntry
            />
            <Text style={styles.label}>Confirm Password:</Text>
            <TextInput
                style={styles.input}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                placeholder="Confirm your password"
                secureTextEntry
            />
            <TouchableOpacity style={styles.signupButton} onPress={onSignUpPress}>
                <Text style={styles.signupButtonText}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginButton} onPress={onLoginPress}>
                <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20
    },
    label: {
        fontSize: 16,
        marginBottom: 5
    },
    input: {
        fontSize: 14,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10
    },
    loginButton: {
        marginTop: 10,
        backgroundColor: '#28a745',
        padding: 10,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
    },
    loginButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    signupButton: {
        marginTop: 10,
        backgroundColor: '#28a745',
        padding: 10,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
    },
    signupButtonText: {
        color: 'white',
        fontWeight: 'bold',
    }
});

export default Signup;
