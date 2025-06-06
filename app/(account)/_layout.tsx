import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
export default function ProfileLayout() {

  return (
    <Stack>
      <Stack.Screen name="profile" />

      <Stack.Screen name="notifications" />

      <StatusBar style="auto" />
    </Stack>
  );
}
