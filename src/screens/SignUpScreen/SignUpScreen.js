import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";

import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import SocialSignInButtons from "../../components/SocialSignInButtons/SocialSignInButtons";
import Navigation from "../../navigation";
CustomInput;
const SignUpScreen = () => {
  const navigation = useNavigation()
  const { username, setUsername } = useState();
  const [email, setEmail] = useState();
  const [passwordRepeat, setPasswordRepeat] = useState();
  const { password, setPassword } = useState();
  const onSignInPressed = () => {
   
     navigation.navigate("SignIn")
  };
  
  

  const onTermsOfUsePressed = () => {
    console.warn("Terms of used");
  };
  const onPrivacyPressed = () =>{
    console.warn("Privacy policy")
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Create an account</Text>
        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
          secureTextEntry={false}
        />
        <CustomInput
          placeholder="Email"
          value={email}
          setValue={setEmail}
          secureTextEntry={false}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <CustomInput
          placeholder="Password repeat"
          value={passwordRepeat}
          setValue={setPasswordRepeat}
          secureTextEntry={true}
        />
        <CustomButton onPress={onSignInPressed} text="Sign up" />
        <Text style={styles.text}>
          By register, you confirm that you accept our{" "}
          <Text style={styles.link} onPress={onTermsOfUsePressed}>
            Terms of Use{" "}
          </Text>{" "}
          and{" "}
          <Text style={styles.link} onPress={onPrivacyPressed}>
            Privacy Policy
          </Text>
        </Text>
      <SocialSignInButtons/>
        <CustomButton
          onPress={onSignInPressed}
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
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#051c60",
    margin: 20,
  },
  text:{
color:"gray",
marginVertical:10
  },
  link:{
color:"#fdb075"
  }
});

export default SignUpScreen;
