import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  useWindowDimensions,
  ActivityIndicator,
} from "react-native"
import React, { useEffect, useState } from "react"
import { useLocalSearchParams } from "expo-router"
import Eye from "../assets/icons/eye.svg"
import RenderHTML from "react-native-render-html"
import { SafeAreaView } from "react-native-safe-area-context"
import { AppColors } from "@/constants/colors"
import { getNewsById } from "@/services/api"
import { formatDate } from "@/services/locator"

const NewsPage = () => {
  const { id } = useLocalSearchParams()
  const { width } = useWindowDimensions()
  const [newsData, setNewsData] = useState<Data>()
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const idNews = Array.isArray(id) ? id[0] : (id as string)
  const date = formatDate(newsData?.updatedDate || "")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getNewsById(idNews)
        setNewsData(data)
      } catch (error: any) {
        setError(error.message || "Ошибка при загрузке данных")
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

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
      <ScrollView>
        <Text style={styles.title}>{newsData?.title || ""}</Text>
        <View style={styles.dateContainer}>
          <Text style={styles.date}>{date}</Text>
          <View style={styles.viewContainer}>
            <Eye />
            <Text style={styles.date}>{newsData?.countView}</Text>
          </View>
        </View>
        <RenderHTML
          contentWidth={width}
          source={{ html: newsData?.content || "" }}
          renderersProps={{}}
          customHTMLElementModels={{}}
        />
        {newsData?.authorName ? (
          <View style={styles.author}>
            <Text style={styles.sourceText}>Автор: {newsData?.authorName}</Text>
          </View>
        ) : null}
        {newsData?.sourceName ? (
          <View style={styles.source}>
            <Text style={styles.sourceText}>Источник: {newsData?.sourceName}</Text>
          </View>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  )
}

export default NewsPage

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 76,
    paddingBottom: 28,
    backgroundColor: AppColors.white,
  },
  title: {
    fontSize: 20,
    fontWeight: 600,
    lineHeight: 26,
    fontFamily: "Noto Serif",
    marginBottom: 14,
  },
  dateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  viewContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  date: {
    fontSize: 12,
    fontWeight: 500,
    lineHeight: 18,
    fontFamily: "Inter",
    color: AppColors.grey,
  },
  text: {
    marginTop: 20,
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 21,
    fontFamily: "Inter",
  },
  source: {
    backgroundColor: AppColors.purpleLight,
    borderLeftWidth: 3,
    borderColor: AppColors.darkRed,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  sourceText: {
    color: AppColors.nero,
    fontSize: 14,
    fontWeight: 500,
    lineHeight: 21,
    fontFamily: "Inter",
  },
  author: {
    backgroundColor: AppColors.lavender,
    borderLeftWidth: 3,
    borderColor: AppColors.blue,
    paddingHorizontal: 14,
    paddingVertical: 10,
    marginBottom: 20
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
