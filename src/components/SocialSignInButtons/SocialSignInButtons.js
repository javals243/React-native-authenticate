import React from "react";
import { View, Text } from "react-native";
import CustomButton from "../CustomButton";

const SocialSignInButtons = () => {
  const onSignInFacebookPressed = () => {
    console.warn("Facebook");
  };
  const onSignInGooglePressed = () => {
    console.warn("Google");
  };
  const onSignInApplePressed = () => {
    console.warn("Apple");
  };

  return (
    <>
      <CustomButton
        onPress={onSignInGooglePressed}
        text="Sign in with  Google"
        bgColor="#fae9ea"
        fgColor="#dd4d44"
      />
      <CustomButton
        onPress={onSignInFacebookPressed}
        text="sign in with FaceBook"
        bgColor="#e7eaf4"
        fgColor="#4765a9"
      />
      <CustomButton
        onPress={onSignInApplePressed}
        text="sign in with  Apple"
        bgColor="#e3e3e3"
        fgColor="#363636"
      />
    </>
  );
};

export default SocialSignInButtons;
