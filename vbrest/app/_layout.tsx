import React from "react"
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native"
import CustomHeader from "../components/customHeader"
import { useNavigation } from "expo-router"
import { Drawer } from "expo-router/drawer"
import { DrawerToggleButton } from "@react-navigation/drawer"
import { menuItems } from "@/constants/menu"
import CustomMenu from "@/components/customMenu"

const CustomDrawerContent = (props: any) => {
  return (
    <View style={styles.drawerContent}>
      <TouchableOpacity onPress={props.navigation.closeDrawer} style={styles.closeButton}>
        <Image source={require("../assets/icons/close.png")} />
      </TouchableOpacity>

      {menuItems.map((item) => (
        <CustomMenu title={item.title} onPress={() => props.navigation.navigate(item.route)} />
      ))}

    </View>
  )
}

export default function Layout() {
  const navigation = useNavigation()
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerLeft: () => <DrawerToggleButton />,
        drawerType: "front",
      }}
    >
      {menuItems.map((item, index) => (
        <Drawer.Screen
          key={index}
          name={item.route}
          options={{
            title: item.title,
            header: () => <CustomHeader isNewsPage={false} navigation={navigation} />,
          }}
        />
      ))}

      <Drawer.Screen
        name="[id]"
        options={{
          header: () => <CustomHeader isNewsPage={true} navigation={navigation} />,
        }}
      />
    </Drawer>
  )
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    backgroundColor: "#272734",
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  closeButton: {
    width: 22,
    height: 22,
    marginBottom: 46,
  },
  closeText: {
    fontSize: 20,
    color: "#FFFFFF",
  },
})
