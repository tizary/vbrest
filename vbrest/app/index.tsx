import { View, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';

interface NewsItem {
  id: string;
  title: string;
  preview: string;
}

export default function NewsScreen() {
  const router = useRouter();

  const [news, setNews] = useState<NewsItem[]>([

    { id: '1', title: 'Заголовок новости 1', preview: 'Краткое описание...' },
    { id: '2', title: 'Заголовок новости 2', preview: 'Краткое описание...' },
     { id: '3', title: 'Заголовок новости 1', preview: 'Краткое описание...' },
    { id: '4', title: 'Заголовок новости 2', preview: 'Краткое описание...' },
     { id: '5', title: 'Заголовок новости 1', preview: 'Краткое описание...' },
    { id: '6', title: 'Заголовок новости 2', preview: 'Краткое описание...' },
     { id: '7', title: 'Заголовок новости 1', preview: 'Краткое описание...' },
    { id: '8', title: 'Заголовок новости 2', preview: 'Краткое описание...' },
     { id: '9', title: 'Заголовок новости 1', preview: 'Краткое описание...' },
    { id: '10', title: 'Заголовок новости 2', preview: 'Краткое описание...' },
     { id: '11', title: 'Заголовок новости 1', preview: 'Краткое описание...' },
    { id: '12', title: 'Заголовок новости 2', preview: 'Краткое описание...' },
     { id: '13', title: 'Заголовок новости 1', preview: 'Краткое описание...' },
    { id: '14', title: 'Заголовок новости 2', preview: 'Краткое описание...' },
  ]);

  const renderNewsItem = ({ item }: { item: NewsItem }) => (
    <TouchableOpacity
      style={styles.newsItem}
      onPress={() => router.push(`/${item.id}`)}
    >
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.preview}>{item.preview}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={news}
        renderItem={renderNewsItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  newsItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  preview: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
});