import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView
} from "react-native";
import Logo from "../../../assets/images/Logo_1.png";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import SocialSignInButtons from "../../components/SocialSignInButtons/SocialSignInButtons";
import {useNavigation} from "@react-navigation/native"
CustomInput;
const SignInScreen = () => {
  const navigation = useNavigation();
  const { height } = useWindowDimensions();
  const { username, setUsername } = useState();
  const { password, setPassword } = useState();
  const onSignInPressed = () => {
    console.warn("Sign in");

    //validate user
    navigation.navigate('home')
  };
  const onForgotPasswordPressed = () => {
    console.warn("ForgotPassword");
    navigation.navigate("ForgotPassword");
  };
  
   const onSignInUpPressed = () => {
    navigation.navigate("SignUp")
   };;
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, { height: height * 0.3 }]}
          resizeMode="contain"
        />
        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
          secureTextEntry={false}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <CustomButton onPress={onSignInPressed} text="Sign in" />
        <CustomButton
          onPress={onForgotPasswordPressed}
          text="Forgot password"
          type="TERTIARY"
        />
        <SocialSignInButtons/>
        <CustomButton
          onPress={onSignInUpPressed}
          text="haven an account ? Sign in"
          type="TERTIARY"
          bgColor="transparent"
        />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: "70%",
    maxHeight: 200,
    maxWidth: 200,
    borderRadius: 50,
  },
});

export default SignInScreen;
