import { Tabs } from "expo-router"
import FontAwesome from "@expo/vector-icons/FontAwesome"
import React from "react"

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          height: 80,
          elevation: 5,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.3,
          shadowRadius: 4,
        },
        tabBarItemStyle: {
          paddingVertical: 5,
          height: 60,
          alignItems: "center",
          justifyContent: "center",
        },
        tabBarLabelStyle: {
          paddingTop: 5,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Главная",
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Поиск",
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="search" color={color} />,
        }}
      />
      <Tabs.Screen
        name="poster"
        options={{
          title: "Афиша",
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="ticket" color={color} />,
        }}
      />
      <Tabs.Screen
        name="contacts"
        options={{
          title: "Контакты",
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="address-book" color={color} />,
        }}
      />
    </Tabs>
  )
}

export default TabLayout
