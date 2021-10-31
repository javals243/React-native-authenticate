import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, StyleSheet, Text ,View,Image } from 'react-native';
import Navigation from './src/navigation';

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
    <Navigation/>
      {/* <SignInScreen /> */}
      {/* <SignUpScreen/> */}
      {/* <ConfirmEmailScreen/> */}
      {/* <ForgotPasswordScreen/> */}
      {/* <NewPasswordScreen/> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root:{
    flex:1,
    backgroundColor:"#f9fbfc"
  }
});
