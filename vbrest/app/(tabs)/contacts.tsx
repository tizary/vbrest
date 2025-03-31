import { AppColors } from "@/constants/colors"
import { View, Text, StyleSheet, TouchableOpacity, Linking } from "react-native"

export default function Contacts() {
  function handleLink(url: string) {
    Linking.openURL(url).catch((err: any) => console.error("An error occurred", err))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Как связаться с нами?</Text>

      <Text style={styles.text}>Воспользуйтесь ботом телеграм-канала сайта, вот</Text>
      <TouchableOpacity
        onPress={() => handleLink("https://t.me/virtualbrestnews")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>@virtualbrest</Text>
      </TouchableOpacity>

      <Text style={styles.text}>
        Если хотите прислать информацию анонимно или связаться с нами! Пришлите нам в бот анонимно
        текст, фото или видео
      </Text>
      <TouchableOpacity
        onPress={() => handleLink("https://t.me/virtualbrest_bot")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>@virtualbrest_bot</Text>
      </TouchableOpacity>
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
  text: {
    fontSize: 16,
    lineHeight: 20,
    paddingBottom: 16,
  },
  button: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: AppColors.white,
    padding: 12,
    borderRadius: 10,
    shadowColor: AppColors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    color: AppColors.lightBlue,
    fontWeight: "500",
  },
})
