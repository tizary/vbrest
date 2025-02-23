import { TouchableOpacity, View, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Search from '../assets/icons/search.svg'

export default function CustomHeader() {
  return (
    <LinearGradient
      colors={['#14229F',  '#3E61C8']}
      style={styles.header}
    >
      <TouchableOpacity onPress={() => null} style={styles.menuButton}>
        <View style={styles.line}></View>
        <View style={styles.line}></View>
        <View style={styles.line}></View>
      </TouchableOpacity>

      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/icons/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <TouchableOpacity onPress={() => null} style={styles.searchIcon}>
        <Search />
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  menuButton: {
    width: 22,
    height: 22,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  line: {
    width: 22,
    height: 1.4,
    backgroundColor: 'white'
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    height: 12,
    width: 180,
  },
  searchIcon: {
    width: 22,
    height: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
});