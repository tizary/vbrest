import { AppColors } from "@/constants/colors"
import { Text, StyleSheet, FlatList, Image, View, ActivityIndicator } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { useEffect, useState } from "react"
import { getPosters } from "@/services/api"

export default function Poster() {
  const [data, setData] = useState<Data[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPosters()
        setData(data)
      } catch (error: any) {
        setError(error.message || "Ошибка при загрузке данных")
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const formatDate = (isoString: string) => {
    const date = new Date(isoString)
    return date.toLocaleDateString("ru-RU", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })
  }

  const renderNewsItem = ({ item }: { item: Data }) => (
    <>
      <Text style={[styles.title, { fontSize: 16, marginBottom: 14, marginTop: 16 }]}>
        {formatDate(item.date)}
      </Text>
      <Image source={{ uri: item.img }} style={{ height: 400 }} resizeMode="contain" />
    </>
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
      <FlatList data={data} renderItem={renderNewsItem}
      ListHeaderComponent={<Text style={styles.title}>Афиша</Text>}
      keyExtractor={(item) => item.id} />
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
    paddingTop: 56,
    paddingHorizontal: 16,
  },
  title: {
    paddingTop: 32,
    fontSize: 21,
    fontWeight: 600,
    textAlign: "center",
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
