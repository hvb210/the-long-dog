import { Stack } from "expo-router";
import { AppProvider } from "@/context/AppContext";

export default function RootLayout() {
  return (
    <AppProvider>
      <Stack
        screenOptions={{
          headerShown: true,
          headerBackButtonDisplayMode: "minimal",
          headerTitle: ""
        }}
      >
      <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
      />
    </Stack>
    </AppProvider>
  );
}
