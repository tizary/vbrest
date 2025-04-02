import { AppColors } from "@/constants/colors"
import { Text, StyleSheet, FlatList, Image } from "react-native"
import jsonData from "../../assets/data-api.json"
import { SafeAreaView } from "react-native-safe-area-context"

export default function Poster() {
  const newsData: Data[] = jsonData.data

  const renderNewsItem = ({ item }: { item: Data }) => (
    <>
      <Text style={[styles.title, { fontSize: 16, marginBottom: 14, marginTop: 16 }]}>
        {item.createdDate}
      </Text>
      <Image source={{ uri: item.img_main }} style={{ height: 382 }} resizeMode="cover" />
    </>
  )

  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <Text style={styles.title}>Афиша</Text>
      <FlatList data={newsData} renderItem={renderNewsItem} keyExtractor={(item) => item.id} />
    </SafeAreaView>
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
