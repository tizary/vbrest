// import { AppColors } from "@/constants/colors"
// import React, { useState } from "react"
// import { View, StyleSheet, TextInput, TouchableOpacity, FlatList, Text, Image } from "react-native"
// import { SafeAreaView } from "react-native-safe-area-context"
// import FontAwesome from "@expo/vector-icons/FontAwesome"
// import jsonData from "../../assets/data-api.json"
// import { router } from "expo-router"

// export default function Search() {
//   const [searchText, setSearchText] = useState("")
//   const [filteredNews, setFilteredNews] = useState<Data[]>([])
//   const newsData: Data[] = jsonData.data

//   function handleChange(text: string) {
//     setSearchText(text)

//     const filtered = newsData.filter((item) =>
//       item.title.toLowerCase().includes(text.toLowerCase())
//     )
//     setFilteredNews(filtered)
//   }

//   const renderNewsItem = ({ item }: { item: Data }) => (
//     <TouchableOpacity style={styles.newsItem} onPress={() => router.push(`/${item.id}`)}>
//       <Image source={{ uri: item.img_main }} style={styles.image} resizeMode="cover" />
//       <Text style={styles.title}>{item.title}</Text>
//     </TouchableOpacity>
//   )

//   return (
//     <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
//       <View style={styles.searchSection}>
//         <TouchableOpacity onPress={() => console.log(searchText)} style={styles.searchIcon}>
//           <FontAwesome size={20} name="search" color={"grey"} />
//         </TouchableOpacity>
//         <TextInput
//           style={styles.input}
//           placeholder="Поиск"
//           value={searchText}
//           onChangeText={handleChange}
//         />
//       </View>
//       <View style={styles.list}>
//         <FlatList
//           data={filteredNews}
//           renderItem={renderNewsItem}
//           keyExtractor={(item) => item.id}
//           ItemSeparatorComponent={() => (
//             <View style={{ height: 1, backgroundColor: AppColors.lightGrey, marginVertical: 20 }} />
//           )}
//         />
//       </View>
//     </SafeAreaView>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: AppColors.white,
//     paddingTop: 56,
//   },
//   searchSection: {
//     height: 40,
//     flexDirection: "row",
//     alignItems: "center",
//     marginVertical: 32,
//     marginHorizontal: 16,
//   },
//   input: {
//     flex: 1,
//     borderRadius: 50,
//     borderWidth: 1,
//     paddingVertical: 10,
//     paddingRight: 16,
//     paddingLeft: 45,
//     borderColor: AppColors.azure,
//   },
//   searchIcon: {
//     position: "absolute",
//     left: 12,
//   },
//   list: {
//     flex:1,
//     marginHorizontal: 16,
//   },
//   newsItem: {
//     flexDirection: "row",
//     gap: 12,
//     height: 80,
//   },
//   image: {
//     width: 108,
//     height: 76,
//   },
//   title: {
//     flex: 1,
//     fontSize: 14,
//     fontWeight: 600,
//     lineHeight: 19.6,
//   },
// })
