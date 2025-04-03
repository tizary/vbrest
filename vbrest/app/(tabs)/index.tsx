import {
  FlatList,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  View,
  ActivityIndicator,
} from "react-native"
import { useRouter } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context"
import { AppColors } from "@/constants/colors"
import { useEffect, useState } from "react"
import { getNews } from "@/services/api"

export default function NewsScreen() {
  const router = useRouter()
  const [newsData, setNewsData] = useState<Data[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getNews()
        setNewsData(data)
      } catch (error: any) {
        setError(error.message || "Ошибка при загрузке данных")
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const renderNewsItem = ({ item, index }: { item: Data; index: number }) =>
    index === 0 ? (
      <TouchableOpacity onPress={() => router.push(`/${item.id}`)}>
        <Text style={[styles.title, { fontSize: 16, marginBottom: 14, marginTop: 16 }]}>
          {item.title}
        </Text>
        <Image source={{ uri: item.img }} style={{ height: 182 }} resizeMode="cover" />
      </TouchableOpacity>
    ) : (
      <TouchableOpacity
        style={styles.newsItem}
        onPress={() =>
          router.push({
            pathname: `/${item.id}`,
            params: {
              id: item.id,
            },
          })
        }
      >
        <Image source={{ uri: item.img }} style={styles.image} resizeMode="cover" />
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
    )

  if (error) {
    return (
      <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
        <Text style={styles.error}>{error}</Text>
      </SafeAreaView>
    )
  }

  return loading ? (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color={AppColors.lightBlue} />
    </View>
  ) : (
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
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
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
  error: {
    color: AppColors.cozy,
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    marginVertical: 36,
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: AppColors.voracious,
    borderRadius: 5,
    borderLeftWidth: 4,
    borderLeftColor: AppColors.cozy,
    shadowColor: AppColors.cozy,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
})
