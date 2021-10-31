import React from 'react'
import { View, Text, TextInput,StyleSheet } from 'react-native'

const CustomerInput = ({ value, setValue, placeholder, secureTextEntry }) => {
  return (
    <View style={Styles.container}>
      <TextInput
        placeholder={placeholder}
        style={Styles.input}
        value={value}
        onChangeText={setValue}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};
const Styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    borderColor: "#ebebe8",
    borderWidth: 1,
    borderRadius: 5,

    paddingHorizontal: 10,
    marginVertical: 10,
  },
  input: {
    padding: 10,
  },
});
export default CustomerInput
