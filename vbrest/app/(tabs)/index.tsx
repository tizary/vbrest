import { FlatList, TouchableOpacity, Text, StyleSheet, Image, View } from "react-native"
import { useRouter } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context"
import jsonData from "../../assets/data-api.json"
import { AppColors } from "@/constants/colors"

export default function NewsScreen() {
  const router = useRouter()
  const newsData: Data[] = jsonData.data

  const renderNewsItem = ({ item, index }: { item: Data; index: number }) =>
    index === 0 ? (
      <TouchableOpacity onPress={() => router.push(`/${item.id}`)}>
        <Text style={[styles.title, { fontSize: 16, marginBottom: 14, marginTop: 16 }]}>
          {item.title}
        </Text>
        <Image source={{ uri: item.img_main }} style={{ height: 182 }} resizeMode="cover" />
      </TouchableOpacity>
    ) : (
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
          <View style={{ height: 1, backgroundColor: AppColors.lightGrey, marginVertical: 20 }} />
        )}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.white,
    paddingHorizontal: 16,
    paddingTop: 56,
  },
  newsItem: {
    flexDirection: "row",
    gap: 12,
    height: 80,
  },
  image: {
    width: 108,
    height: 76,
  },
  title: {
    flex: 1,
    fontSize: 14,
    fontWeight: 600,
    lineHeight: 19.6,
  },
})
