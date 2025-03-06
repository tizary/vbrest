import { FlatList, TouchableOpacity, Text, StyleSheet, Image, View } from "react-native"
import { useRouter } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context"
import jsonData from "../assets/data-api.json"

export default function NewsScreen() {
  const router = useRouter()
  const newsData: Data[] = jsonData.data

  const renderNewsItem = ({ item }: { item: Data }) => (
    <TouchableOpacity style={styles.newsItem} onPress={() => router.push(`/${item.id}`)}>
      <Image source={{ uri: item.img_main }} style={styles.image} resizeMode="cover" />
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  )

  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <FlatList
        data={newsData}
        renderItem={renderNewsItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => (
          <View style={{ height: 1, backgroundColor: "#E1E3EA", marginVertical: 20 }} />
        )}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingBottom: 32,
    paddingHorizontal: 16,
    paddingTop: 88,
  },
  newsItem: {
    flexDirection: "row",
    gap: 12,
    height: 80,
  },
  image: {
    width: 108,
    height: 76,
    backgroundColor: "grey",
  },
  title: {
    flex: 1,
    fontSize: 14,
    fontWeight: 600,
    lineHeight: 19.6,
  },
})
