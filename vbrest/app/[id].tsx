import { StyleSheet, Text, View, Image, ScrollView, useWindowDimensions } from "react-native"
import React from "react"
import { useLocalSearchParams } from "expo-router"
import jsonData from "../assets/data-api.json"
import Eye from "../assets/icons/eye.svg"
import RenderHTML from "react-native-render-html"
import { SafeAreaView } from "react-native-safe-area-context"

const NewsPage = () => {
  const { id } = useLocalSearchParams()
  const { width } = useWindowDimensions()
  const newsItem = jsonData.data.find((item) => item.id === id)
  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <ScrollView>
        <Text style={styles.title}>{newsItem?.title}</Text>
        <View style={styles.dateContainer}>
          <Text style={styles.date}>{newsItem?.date}</Text>
          <View style={styles.viewContainer}>
            <Eye />
            <Text style={styles.date}>{newsItem?.countView}</Text>
          </View>
        </View>
        <RenderHTML
          contentWidth={width}
          source={{ html: newsItem?.content || "" }}
          renderersProps={{}}
          customHTMLElementModels={{}}
        />
        {newsItem?.sourceTitle ? (
          <View style={styles.source}>
            <Text style={styles.sourceText}>Источник: {newsItem?.sourceTitle}</Text>
          </View>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  )
}

export default NewsPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 76,
    paddingBottom: 28,
    backgroundColor: "#FFFFFF",
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
    color: "#5E5F75",
  },
  text: {
    marginTop: 20,
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 21,
    fontFamily: "Inter",
  },
  source: {
    backgroundColor: "#E6E8FF",
    borderLeftWidth: 3,
    borderColor: "#193FA2",
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  sourceText: {
    color: "#141414",
    fontSize: 14,
    fontWeight: 500,
    lineHeight: 21,
    fontFamily: "Inter",
  },
})
