import { Tabs } from 'expo-router'
import React from 'react'

const TabLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Главная" }} />
      <Tabs.Screen name="poster" options={{ title: "Афиша" }} />
      <Tabs.Screen name="contacts" options={{ title: "Контакты" }} />
    </Tabs>
  )
}

export default TabLayout