import { AppColors } from "@/constants/colors"
import { View, Text, StyleSheet } from "react-native"

export default function Poster() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Афиша</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.white,
    paddingTop: 56,
    paddingHorizontal: 16,
  },
  title: {
    paddingVertical: 32,
    fontSize: 18,
    fontWeight: 600,
    textAlign: "center",
  },
})
