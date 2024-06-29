import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";


export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-500">
      <Text className = "text-6xl">If</Text>
      <Text className = "text-4xl">you give up,</Text>
      <Text className = "text-lg">just know you're a</Text>
      <StatusBar style="auto" />
      <Link href={"/profile"} className="text-sm">Bitch</Link>
    </View>
  );
}


