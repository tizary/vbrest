import { TouchableOpacity, View, StyleSheet, Image } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { SafeAreaView } from "react-native-safe-area-context"
import { useRouter } from "expo-router"
import FontAwesome from "@expo/vector-icons/FontAwesome"
import { AppColors } from "@/constants/colors"


type CustomHeaderProps = {
  isNewsPage?: boolean
}

export default function CustomHeader({ isNewsPage = false }: CustomHeaderProps) {
  const router = useRouter()

  return (
    <SafeAreaView style={{ flex: 1 }} edges={["top", "left", "right"]}>
      <LinearGradient colors={[AppColors.egyptianBlue, AppColors.lightBlue]} style={styles.header}>
        {isNewsPage ? (
          <TouchableOpacity onPress={() => router.back()} style={styles.menuButton}>
            <Image source={require("../assets/icons/back.png")} />
          </TouchableOpacity>
        ) : (
          <View style={styles.menuButton}></View>
        )}
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/icons/logo.png")}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        <TouchableOpacity onPress={() => null} style={styles.styleIcon}>
          <FontAwesome size={22} name="moon-o" color={AppColors.white} />
          {/* <FontAwesome size={22} name="sun-o" color={AppColors.white} /> */}
        </TouchableOpacity>
      </LinearGradient>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  menuButton: {
    width: 22,
    height: 22,
    justifyContent: "space-around",
    alignItems: "center",
  },
  logoContainer: {
    flex: 1,
    alignItems: "center",
  },
  logo: {
    height: 12,
    width: 180,
  },
  styleIcon: {
    width: 22,
    height: 22,
    justifyContent: "center",
    alignItems: "center",
  },
})
