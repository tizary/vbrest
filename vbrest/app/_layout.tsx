import React from "react"
import { Stack } from "expo-router"
import CustomHeader from "../components/customHeader"

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ header: () => <CustomHeader isNewsPage={false} /> }} />
      <Stack.Screen
        name="[id]"
        options={{
          header: () => <CustomHeader isNewsPage={true} />,
        }}
      />
    </Stack>
  )
}
