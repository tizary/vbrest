import { TouchableOpacity, View, Text, StyleSheet } from "react-native"

type CustomMenuProps = {
  title: string
  onPress: () => void
}

export default function CustomMenu({ title, onPress }: CustomMenuProps) {
  return (
    <>
      <TouchableOpacity onPress={onPress} style={styles.drawerItem}>
        <Text style={styles.drawerItemText}>{title}</Text>
      </TouchableOpacity>
      <View style={styles.divider} />
    </>
  )
}

const styles = StyleSheet.create({
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "#FFFFFF",
    opacity: 0.2,
  },
  drawerItem: {
    paddingVertical: 14,
  },
  drawerItemText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: 500,
    lineHeight: 20,
    fontFamily: "Inter",
  },
})
