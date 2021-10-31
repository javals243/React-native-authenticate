import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Logo from "../../../assets/images/Logo_1.png";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import SocialSignInButtons from "../../components/SocialSignInButtons/SocialSignInButtons";
CustomInput;
const ConfirmEmailScreen = () => {
  const { code, setCode } = useState();

  const onSignInPressed = () => {
    console.warn("Sign Up");
  };

  const onResendPressed = () => {
    console.warn("Hello my friend");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm your email</Text>
        <CustomInput
          placeholder="Enter your confirmation code"
          value={code}
          setValue={setCode}
          secureTextEntry={false}
        />

        <CustomButton onPress={onSignInPressed} text="Confirm" />
        <CustomButton
          onPress={onResendPressed}
          text="Resend code"
          type="SECONDARY"
        />
        <CustomButton
          onPress={onSignInPressed}
          text="Sign in"
          type="SECONDARY"
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
  text: {
    color: "gray",
    marginVertical: 10,
  },
  link: {
    color: "#fdb075",
  },
});

export default ConfirmEmailScreen;
