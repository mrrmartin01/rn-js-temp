import { StyleSheet, Text, View } from "react-native";
import { Slot, Stack } from "expo-router";

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
};

export default _layout;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#cecece",
    alignItems: "center",
    justifyContent: "center",
  },
});
