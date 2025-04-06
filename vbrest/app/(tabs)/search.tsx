import { AppColors } from "@/constants/colors"
import React, { useState } from "react"
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Text,
  Image,
  ActivityIndicator,
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import FontAwesome from "@expo/vector-icons/FontAwesome"
import { router } from "expo-router"
import { searchByText } from "@/services/api"

export default function Search() {
  const [searchText, setSearchText] = useState("")
  const [filteredNews, setFilteredNews] = useState<Data[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSearch(text: string) {
    setLoading(true)
    try {
      const data = await searchByText(text, 1)
      setFilteredNews(data)
    } catch (error: any) {
      setError(error.message || "Ошибка при загрузке данных")
    } finally {
      setLoading(false)
    }
  }

  const renderNewsItem = ({ item }: { item: Data }) => (
    <TouchableOpacity style={styles.newsItem} onPress={() => router.push(`/${item.id}`)}>
      <Image source={{ uri: item.img }} style={styles.image} resizeMode="cover" />
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  )

  return loading ? (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color={AppColors.lightBlue} />
    </View>
  ) : (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <View style={styles.searchSection}>
        <TouchableOpacity onPress={() => handleSearch(searchText)} style={styles.searchIcon}>
          <FontAwesome size={20} name="search" color={"grey"} />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Поиск"
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>
      {error ? (
        <View style={{ paddingHorizontal: 16 }}>
          <Text style={styles.error}>{error}</Text>
        </View>
      ) : (
        <View style={styles.list}>
          <FlatList
            data={filteredNews}
            renderItem={renderNewsItem}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => (
              <View
                style={{ height: 1, backgroundColor: AppColors.lightGrey, marginVertical: 20 }}
              />
            )}
          />
        </View>
      )}
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
  },
  searchSection: {
    position: "relative",
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 32,
    marginHorizontal: 16,
  },
  input: {
    flex: 1,
    borderRadius: 50,
    borderWidth: 1,
    paddingVertical: 10,
    paddingRight: 16,
    paddingLeft: 16,
    borderColor: AppColors.azure,
  },
  searchIcon: {
    position: "absolute",
    right: 10,
    padding: 12,
    marginRight: 5,
    zIndex: 5,
  },
  list: {
    flex: 1,
    marginHorizontal: 16,
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
