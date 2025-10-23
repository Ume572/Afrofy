// // // // // // // src/screens/SearchScreen.js
// // // // // // import React, { useState } from 'react';
// // // // // // import {
// // // // // //   View,
// // // // // //   Text,
// // // // // //   TextInput,
// // // // // //   TouchableOpacity,
// // // // // //   StyleSheet,
// // // // // //   StatusBar,
// // // // // //   SafeAreaView,
// // // // // //   ScrollView,
// // // // // //   FlatList,
// // // // // //   Dimensions
// // // // // // } from 'react-native';
// // // // // // import Icon from 'react-native-vector-icons/MaterialIcons';
// // // // // // import Feather from 'react-native-vector-icons/Feather';

// // // // // // const { width } = Dimensions.get('window');

// // // // // // const SearchScreen = () => {
// // // // // //   const [searchQuery, setSearchQuery] = useState('');
// // // // // //   const [recentSearches, setRecentSearches] = useState([
// // // // // //     { id: '1', text: 'Childish Gambino' },
// // // // // //     { id: '2', text: 'Marvin Gaye' },
// // // // // //     { id: '3', text: 'Kanye West' },
// // // // // //     { id: '4', text: 'Justin Bieber' },
// // // // // //   ]);

// // // // // //   // Current time for the header
// // // // // //   const currentTime = new Date().toLocaleTimeString([], { 
// // // // // //     hour: '2-digit', 
// // // // // //     minute: '2-digit' 
// // // // // //   });

// // // // // //   // Trending artists data
// // // // // //   const trendingArtists = [
// // // // // //     { id: '1', name: 'Childish Gambino' },
// // // // // //     { id: '2', name: 'Marvin Gaye' },
// // // // // //     { id: '3', name: 'Kanye West' },
// // // // // //     { id: '4', name: 'Justin Bieber' },
// // // // // //   ];

// // // // // //   // Browse categories data
// // // // // //   const browseCategories = [
// // // // // //     { id: '1', name: 'Hollywood', color: '#ff0090' },
// // // // // //     { id: '2', name: 'INTERNATIONAL', color: '#ba5d07' },
// // // // // //     { id: '3', name: 'POP', color: '#1e3264' },
// // // // // //     { id: '4', name: 'DANCE', color: '#8d67ab' },
// // // // // //     { id: '5', name: 'COUNTRY', color: '#477d95' },
// // // // // //     { id: '6', name: 'INDIE', color: '#e8115b' },
// // // // // //     { id: '7', name: 'JAZZ', color: '#148a08' },
// // // // // //     { id: '8', name: 'PUNK', color: '#503750' },
// // // // // //     { id: '9', name: 'R&B', color: '#af2896' },
// // // // // //   ];

// // // // // //   const clearSearchHistory = () => {
// // // // // //     setRecentSearches([]);
// // // // // //   };

// // // // // //   const removeRecentSearch = (id) => {
// // // // // //     setRecentSearches(recentSearches.filter(item => item.id !== id));
// // // // // //   };

// // // // // //   const renderTrendingArtist = ({ item }) => (
// // // // // //     <TouchableOpacity style={styles.trendingArtistItem}>
// // // // // //       <View style={styles.artistAvatar}>
// // // // // //         <Text style={styles.avatarText}>
// // // // // //           {item.name.split(' ').map(n => n[0]).join('')}
// // // // // //         </Text>
// // // // // //       </View>
// // // // // //       <Text style={styles.artistName}>{item.name}</Text>
// // // // // //     </TouchableOpacity>
// // // // // //   );

// // // // // //   const renderRecentSearch = ({ item }) => (
// // // // // //     <TouchableOpacity style={styles.recentSearchItem}>
// // // // // //       <Icon name="history" size={20} color="#b3b3b3" />
// // // // // //       <Text style={styles.recentSearchText}>{item.text}</Text>
// // // // // //       <TouchableOpacity 
// // // // // //         style={styles.clearIcon}
// // // // // //         onPress={() => removeRecentSearch(item.id)}
// // // // // //       >
// // // // // //         <Icon name="close" size={18} color="#b3b3b3" />
// // // // // //       </TouchableOpacity>
// // // // // //     </TouchableOpacity>
// // // // // //   );

// // // // // //   const renderBrowseCategory = ({ item, index }) => (
// // // // // //     <TouchableOpacity 
// // // // // //       style={[
// // // // // //         styles.browseCategory, 
// // // // // //         { 
// // // // // //           backgroundColor: item.color,
// // // // // //           marginRight: index % 2 === 0 ? 8 : 0
// // // // // //         }
// // // // // //       ]}
// // // // // //     >
// // // // // //       <Text style={styles.browseCategoryText}>{item.name}</Text>
// // // // // //     </TouchableOpacity>
// // // // // //   );

// // // // // //   return (
// // // // // //     <SafeAreaView style={styles.container}>
// // // // // //       <StatusBar barStyle="light-content" backgroundColor="#000" />
      
// // // // // //       {/* Header with Time */}
// // // // // //       <View style={styles.header}>
// // // // // //         <Text style={styles.timeText}>{currentTime}</Text>
// // // // // //         <Text style={styles.searchTitle}>Search</Text>
// // // // // //         <View style={{ width: 40 }} /> {/* Spacer for alignment */}
// // // // // //       </View>

// // // // // //       {/* Search Bar */}
// // // // // //       <View style={styles.searchContainer}>
// // // // // //         <Icon name="search" size={24} color="#b3b3b3" style={styles.searchIcon} />
// // // // // //         <TextInput
// // // // // //           style={styles.searchInput}
// // // // // //           placeholder="Search songs, artist, album o..."
// // // // // //           placeholderTextColor="#b3b3b3"
// // // // // //           value={searchQuery}
// // // // // //           onChangeText={setSearchQuery}
// // // // // //         />
// // // // // //       </View>

// // // // // //       <ScrollView 
// // // // // //         style={styles.scrollView}
// // // // // //         showsVerticalScrollIndicator={false}
// // // // // //       >
// // // // // //         {/* Recent Searches */}
// // // // // //         {recentSearches.length > 0 && (
// // // // // //           <View style={styles.section}>
// // // // // //             <View style={styles.sectionHeader}>
// // // // // //               <Text style={styles.sectionTitle}>Recent searches</Text>
// // // // // //               <TouchableOpacity onPress={clearSearchHistory}>
// // // // // //                 <Text style={styles.clearAllText}>Clear all</Text>
// // // // // //               </TouchableOpacity>
// // // // // //             </View>
// // // // // //             <FlatList
// // // // // //               data={recentSearches}
// // // // // //               renderItem={renderRecentSearch}
// // // // // //               keyExtractor={item => item.id}
// // // // // //               scrollEnabled={false}
// // // // // //             />
// // // // // //           </View>
// // // // // //         )}

// // // // // //         {/* Trending Artists */}
// // // // // //         <View style={styles.section}>
// // // // // //           <Text style={styles.sectionTitle}>Trending artists</Text>
// // // // // //           <FlatList
// // // // // //             data={trendingArtists}
// // // // // //             renderItem={renderTrendingArtist}
// // // // // //             keyExtractor={item => item.id}
// // // // // //             horizontal
// // // // // //             showsHorizontalScrollIndicator={false}
// // // // // //             contentContainerStyle={styles.trendingList}
// // // // // //           />
// // // // // //         </View>

// // // // // //         {/* Browse Categories */}
// // // // // //         <View style={styles.section}>
// // // // // //           <Text style={styles.sectionTitle}>Browse</Text>
// // // // // //           <View style={styles.browseGrid}>
// // // // // //             {browseCategories.map((item, index) => (
// // // // // //               <TouchableOpacity 
// // // // // //                 key={item.id}
// // // // // //                 style={[
// // // // // //                   styles.browseCategory, 
// // // // // //                   { 
// // // // // //                     backgroundColor: item.color,
// // // // // //                     marginRight: index % 2 === 0 ? 8 : 0
// // // // // //                   }
// // // // // //                 ]}
// // // // // //               >
// // // // // //                 <Text style={styles.browseCategoryText}>{item.name}</Text>
// // // // // //               </TouchableOpacity>
// // // // // //             ))}
// // // // // //           </View>
// // // // // //         </View>

// // // // // //         {/* Bottom Padding */}
// // // // // //         <View style={styles.bottomPadding} />
// // // // // //       </ScrollView>
// // // // // //     </SafeAreaView>
// // // // // //   );
// // // // // // };

// // // // // // const styles = StyleSheet.create({
// // // // // //   container: {
// // // // // //     flex: 1,
// // // // // //     backgroundColor: '#000',
// // // // // //   },
// // // // // //   header: {
// // // // // //     flexDirection: 'row',
// // // // // //     justifyContent: 'space-between',
// // // // // //     alignItems: 'center',
// // // // // //     paddingHorizontal: 16,
// // // // // //     paddingVertical: 12,
// // // // // //   },
// // // // // //   timeText: {
// // // // // //     fontSize: 16,
// // // // // //     fontWeight: '600',
// // // // // //     color: '#fff',
// // // // // //   },
// // // // // //   searchTitle: {
// // // // // //     fontSize: 24,
// // // // // //     fontWeight: 'bold',
// // // // // //     color: '#fff',
// // // // // //     textAlign: 'center',
// // // // // //     flex: 1,
// // // // // //   },
// // // // // //   searchContainer: {
// // // // // //     flexDirection: 'row',
// // // // // //     alignItems: 'center',
// // // // // //     backgroundColor: '#2a2a2a',
// // // // // //     marginHorizontal: 16,
// // // // // //     marginVertical: 16,
// // // // // //     borderRadius: 8,
// // // // // //     paddingHorizontal: 16,
// // // // // //     height: 56,
// // // // // //   },
// // // // // //   searchIcon: {
// // // // // //     marginRight: 12,
// // // // // //   },
// // // // // //   searchInput: {
// // // // // //     flex: 1,
// // // // // //     color: '#fff',
// // // // // //     fontSize: 16,
// // // // // //     paddingVertical: 8,
// // // // // //   },
// // // // // //   scrollView: {
// // // // // //     flex: 1,
// // // // // //   },
// // // // // //   section: {
// // // // // //     marginBottom: 32,
// // // // // //     paddingHorizontal: 16,
// // // // // //   },
// // // // // //   sectionHeader: {
// // // // // //     flexDirection: 'row',
// // // // // //     justifyContent: 'space-between',
// // // // // //     alignItems: 'center',
// // // // // //     marginBottom: 16,
// // // // // //   },
// // // // // //   sectionTitle: {
// // // // // //     fontSize: 22,
// // // // // //     fontWeight: 'bold',
// // // // // //     color: '#fff',
// // // // // //   },
// // // // // //   clearAllText: {
// // // // // //     fontSize: 14,
// // // // // //     color: '#b3b3b3',
// // // // // //     textDecorationLine: 'underline',
// // // // // //   },
// // // // // //   recentSearchItem: {
// // // // // //     flexDirection: 'row',
// // // // // //     alignItems: 'center',
// // // // // //     paddingVertical: 12,
// // // // // //     borderBottomWidth: 1,
// // // // // //     borderBottomColor: '#282828',
// // // // // //   },
// // // // // //   recentSearchText: {
// // // // // //     flex: 1,
// // // // // //     fontSize: 16,
// // // // // //     color: '#fff',
// // // // // //     marginLeft: 12,
// // // // // //   },
// // // // // //   clearIcon: {
// // // // // //     padding: 4,
// // // // // //   },
// // // // // //   trendingList: {
// // // // // //     paddingRight: 16,
// // // // // //   },
// // // // // //   trendingArtistItem: {
// // // // // //     alignItems: 'center',
// // // // // //     marginRight: 20,
// // // // // //   },
// // // // // //   artistAvatar: {
// // // // // //     width: 100,
// // // // // //     height: 100,
// // // // // //     borderRadius: 50,
// // // // // //     backgroundColor: '#333',
// // // // // //     justifyContent: 'center',
// // // // // //     alignItems: 'center',
// // // // // //     marginBottom: 8,
// // // // // //   },
// // // // // //   avatarText: {
// // // // // //     fontSize: 24,
// // // // // //     fontWeight: 'bold',
// // // // // //     color: '#fff',
// // // // // //   },
// // // // // //   artistName: {
// // // // // //     fontSize: 14,
// // // // // //     fontWeight: '600',
// // // // // //     color: '#fff',
// // // // // //     textAlign: 'center',
// // // // // //   },
// // // // // //   browseGrid: {
// // // // // //     flexDirection: 'row',
// // // // // //     flexWrap: 'wrap',
// // // // // //     justifyContent: 'space-between',
// // // // // //   },
// // // // // //   browseCategory: {
// // // // // //     width: (width - 48) / 2,
// // // // // //     height: 80,
// // // // // //     borderRadius: 8,
// // // // // //     justifyContent: 'center',
// // // // // //     alignItems: 'center',
// // // // // //     marginBottom: 12,
// // // // // //   },
// // // // // //   browseCategoryText: {
// // // // // //     fontSize: 16,
// // // // // //     fontWeight: 'bold',
// // // // // //     color: '#fff',
// // // // // //     textAlign: 'center',
// // // // // //   },
// // // // // //   bottomPadding: {
// // // // // //     height: 20,
// // // // // //   },
// // // // // // });

// // // // // // export default SearchScreen;


// // // // // // src/screens/SearchScreen.js
// // // // // import React, { useState } from 'react';
// // // // // import {
// // // // //   View,
// // // // //   Text,
// // // // //   TextInput,
// // // // //   TouchableOpacity,
// // // // //   StyleSheet,
// // // // //   StatusBar,
// // // // //   SafeAreaView,
// // // // //   ScrollView,
// // // // //   FlatList,
// // // // //   Dimensions
// // // // // } from 'react-native';
// // // // // import Icon from 'react-native-vector-icons/MaterialIcons';
// // // // // import { useNavigation,useRoute  } from '@react-navigation/native';

// // // // // const { width } = Dimensions.get('window');

// // // // // const SearchScreen = () => {
// // // // //      const navigation = useNavigation();
// // // // //   const [searchQuery, setSearchQuery] = useState('');
// // // // //   const [recentSearches, setRecentSearches] = useState([
// // // // //     { id: '1', text: 'Childish Gambino' },
// // // // //     { id: '2', text: 'Marvin Gaye' },
// // // // //     { id: '3', text: 'Kanye West' },
// // // // //     { id: '4', text: 'Justin Bieber' },
// // // // //   ]);

// // // // //   // Trending artists data
// // // // //   const trendingArtists = [
// // // // //     { id: '1', name: 'Childish Gambino' },
// // // // //     { id: '2', name: 'Marvin Gaye' },
// // // // //     { id: '3', name: 'Kanye West' },
// // // // //     { id: '4', name: 'Justin Bieber' },
// // // // //   ];

// // // // //   // Browse categories data
// // // // //   const browseCategories = [
// // // // //     { id: '1', name: 'Hollywood', color: '#ff0090' },
// // // // //     { id: '2', name: 'INTERNATIONAL', color: '#ba5d07' },
// // // // //     { id: '3', name: 'POP', color: '#1e3264' },
// // // // //     { id: '4', name: 'DANCE', color: '#8d67ab' },
// // // // //     { id: '5', name: 'COUNTRY', color: '#477d95' },
// // // // //     { id: '6', name: 'INDIE', color: '#e8115b' },
// // // // //     { id: '7', name: 'JAZZ', color: '#148a08' },
// // // // //     { id: '8', name: 'PUNK', color: '#503750' },
// // // // //     { id: '9', name: 'R&B', color: '#af2896' },
// // // // //   ];

// // // // //   const clearSearchHistory = () => {
// // // // //     setRecentSearches([]);
// // // // //   };

// // // // //   const removeRecentSearch = (id) => {
// // // // //     setRecentSearches(recentSearches.filter(item => item.id !== id));
// // // // //   };

// // // // //   const renderTrendingArtist = ({ item }) => (
// // // // //     <TouchableOpacity style={styles.trendingArtistItem}
// // // // //      onPress={() => navigation.navigate('ArtistProfileScreen', { artistName: item.name })}
// // // // //   >
// // // // //       <View style={styles.artistAvatar}>
// // // // //         <Text style={styles.avatarText}>
// // // // //           {item.name.split(' ').map(n => n[0]).join('')}
// // // // //         </Text>
// // // // //       </View>
// // // // //       <Text style={styles.artistName}>{item.name}</Text>
// // // // //     </TouchableOpacity>
// // // // //   );

// // // // //   const renderRecentSearch = ({ item }) => (
// // // // //     <TouchableOpacity style={styles.recentSearchItem}>
// // // // //       <Icon name="history" size={20} color="#b3b3b3" />
// // // // //       <Text style={styles.recentSearchText}>{item.text}</Text>
// // // // //       <TouchableOpacity 
// // // // //         style={styles.clearIcon}
// // // // //         onPress={() => removeRecentSearch(item.id)}
// // // // //       >
// // // // //         <Icon name="close" size={18} color="#b3b3b3" />
// // // // //       </TouchableOpacity>
// // // // //     </TouchableOpacity>
// // // // //   );

// // // // //   return (
// // // // //     <SafeAreaView style={styles.container}>
// // // // //       <StatusBar barStyle="light-content" backgroundColor="#000" />
      
// // // // //       {/* Search Bar */}
// // // // //       <View style={styles.searchContainer}>
// // // // //         <Icon name="search" size={24} color="#b3b3b3" style={styles.searchIcon} />
// // // // //         <TextInput
// // // // //           style={styles.searchInput}
// // // // //           placeholder="Search songs, artist, album o..."
// // // // //           placeholderTextColor="#b3b3b3"
// // // // //           value={searchQuery}
// // // // //           onChangeText={setSearchQuery}
// // // // //         />
// // // // //       </View>

// // // // //       <ScrollView 
// // // // //         style={styles.scrollView}
// // // // //         showsVerticalScrollIndicator={false}
// // // // //       >
// // // // //         {/* Recent Searches */}
// // // // //         {recentSearches.length > 0 && (
// // // // //           <View style={styles.section}>
// // // // //             <View style={styles.sectionHeader}>
// // // // //               <Text style={styles.sectionTitle}>Recent searches</Text>
// // // // //               <TouchableOpacity onPress={clearSearchHistory}>
// // // // //                 <Text style={styles.clearAllText}>Clear all</Text>
// // // // //               </TouchableOpacity>
// // // // //             </View>
// // // // //             <FlatList
// // // // //               data={recentSearches}
// // // // //               renderItem={renderRecentSearch}
// // // // //               keyExtractor={item => item.id}
// // // // //               scrollEnabled={false}
// // // // //             />
// // // // //           </View>
// // // // //         )}

// // // // //         {/* Trending Artists */}
// // // // //         <View style={styles.section}>
// // // // //           <Text style={styles.sectionTitle}>Trending artists</Text>
// // // // //           <FlatList
// // // // //             data={trendingArtists}
// // // // //             renderItem={renderTrendingArtist}
// // // // //             keyExtractor={item => item.id}
// // // // //             horizontal
// // // // //             showsHorizontalScrollIndicator={false}
// // // // //             contentContainerStyle={styles.trendingList}
// // // // //           />
// // // // //         </View>

// // // // //         {/* Browse Categories */}
// // // // //         <View style={styles.section}>
// // // // //           <Text style={styles.sectionTitle}>Browse</Text>
// // // // //           <View style={styles.browseGrid}>
// // // // //             {browseCategories.map((item, index) => (
// // // // //               <TouchableOpacity 
// // // // //                 key={item.id}
// // // // //                 style={[
// // // // //                   styles.browseCategory, 
// // // // //                   { 
// // // // //                     backgroundColor: item.color,
// // // // //                     marginRight: index % 2 === 0 ? 8 : 0
// // // // //                   }
// // // // //                 ]}
// // // // //               >
// // // // //                 <Text style={styles.browseCategoryText}>{item.name}</Text>
// // // // //               </TouchableOpacity>
// // // // //             ))}
// // // // //           </View>
// // // // //         </View>

// // // // //         {/* Bottom Padding */}
// // // // //         <View style={styles.bottomPadding} />
// // // // //       </ScrollView>
// // // // //     </SafeAreaView>
// // // // //   );
// // // // // };

// // // // // const styles = StyleSheet.create({
// // // // //   container: {
// // // // //     flex: 1,
// // // // //     backgroundColor: '#000',
// // // // //     paddingTop: 16,
// // // // //   },
// // // // //   searchContainer: {
// // // // //     flexDirection: 'row',
// // // // //     alignItems: 'center',
// // // // //     backgroundColor: '#2a2a2a',
// // // // //     marginHorizontal: 16,
// // // // //     marginVertical: 16,
// // // // //     borderRadius: 8,
// // // // //     paddingHorizontal: 16,
// // // // //     height: 56,
// // // // //   },
// // // // //   searchIcon: {
// // // // //     marginRight: 12,
// // // // //   },
// // // // //   searchInput: {
// // // // //     flex: 1,
// // // // //     color: '#fff',
// // // // //     fontSize: 16,
// // // // //     paddingVertical: 8,
// // // // //   },
// // // // //   scrollView: {
// // // // //     flex: 1,
// // // // //   },
// // // // //   section: {
// // // // //     marginBottom: 32,
// // // // //     paddingHorizontal: 16,
// // // // //   },
// // // // //   sectionHeader: {
// // // // //     flexDirection: 'row',
// // // // //     justifyContent: 'space-between',
// // // // //     alignItems: 'center',
// // // // //     marginBottom: 16,
// // // // //   },
// // // // //   sectionTitle: {
// // // // //     fontSize: 22,
// // // // //     fontWeight: 'bold',
// // // // //     color: '#fff',
// // // // //   },
// // // // //   clearAllText: {
// // // // //     fontSize: 14,
// // // // //     color: '#b3b3b3',
// // // // //     textDecorationLine: 'underline',
// // // // //   },
// // // // //   recentSearchItem: {
// // // // //     flexDirection: 'row',
// // // // //     alignItems: 'center',
// // // // //     paddingVertical: 12,
// // // // //     borderBottomWidth: 1,
// // // // //     borderBottomColor: '#282828',
// // // // //   },
// // // // //   recentSearchText: {
// // // // //     flex: 1,
// // // // //     fontSize: 16,
// // // // //     color: '#fff',
// // // // //     marginLeft: 12,
// // // // //   },
// // // // //   clearIcon: {
// // // // //     padding: 4,
// // // // //   },
// // // // //   trendingList: {
// // // // //     paddingRight: 16,
// // // // //   },
// // // // //   trendingArtistItem: {
// // // // //     alignItems: 'center',
// // // // //     marginRight: 20,
// // // // //   },
// // // // //   artistAvatar: {
// // // // //     width: 100,
// // // // //     height: 100,
// // // // //     borderRadius: 50,
// // // // //     backgroundColor: '#333',
// // // // //     justifyContent: 'center',
// // // // //     alignItems: 'center',
// // // // //     marginBottom: 8,
// // // // //   },
// // // // //   avatarText: {
// // // // //     fontSize: 24,
// // // // //     fontWeight: 'bold',
// // // // //     color: '#fff',
// // // // //   },
// // // // //   artistName: {
// // // // //     fontSize: 14,
// // // // //     fontWeight: '600',
// // // // //     color: '#fff',
// // // // //     textAlign: 'center',
// // // // //   },
// // // // //   browseGrid: {
// // // // //     flexDirection: 'row',
// // // // //     flexWrap: 'wrap',
// // // // //     justifyContent: 'space-between',
// // // // //   },
// // // // //   browseCategory: {
// // // // //     width: (width - 48) / 2,
// // // // //     height: 80,
// // // // //     borderRadius: 8,
// // // // //     justifyContent: 'center',
// // // // //     alignItems: 'center',
// // // // //     marginBottom: 12,
// // // // //   },
// // // // //   browseCategoryText: {
// // // // //     fontSize: 16,
// // // // //     fontWeight: 'bold',
// // // // //     color: '#fff',
// // // // //     textAlign: 'center',
// // // // //   },
// // // // //   bottomPadding: {
// // // // //     height: 20,
// // // // //   },
// // // // // });

// // // // // export default SearchScreen;


// // // // // src/screens/SearchScreen.js
// // // // import React, { useState } from 'react';
// // // // import {
// // // //   View,
// // // //   Text,
// // // //   TextInput,
// // // //   TouchableOpacity,
// // // //   StyleSheet,
// // // //   StatusBar,
// // // //   SafeAreaView,
// // // //   ScrollView,
// // // //   FlatList,
// // // //   Dimensions,
// // // //   Image
// // // // } from 'react-native';
// // // // import Icon from 'react-native-vector-icons/MaterialIcons';
// // // // import { useNavigation,useRoute  } from '@react-navigation/native';

// // // // const { width } = Dimensions.get('window');

// // // // const SearchScreen = () => {
// // // //      const navigation = useNavigation();
// // // //   const [searchQuery, setSearchQuery] = useState('');
// // // //   const [recentSearches, setRecentSearches] = useState([
// // // //     { id: '1', text: 'Childish Gambino' },
// // // //     { id: '2', text: 'Marvin Gaye' },
// // // //     { id: '3', text: 'Kanye West' },
// // // //     { id: '4', text: 'Justin Bieber' },
// // // //   ]);

// // // //   // Trending artists data with images
// // // //   const trendingArtists = [
// // // //     { 
// // // //       id: '1', 
// // // //       name: 'Childish Gambino',
// // // //       image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=400&fit=crop&crop=face'
// // // //     },
// // // //     { 
// // // //       id: '2', 
// // // //       name: 'Marvin Gaye',
// // // //       image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop&crop=face'
// // // //     },
// // // //     { 
// // // //       id: '3', 
// // // //       name: 'Kanye West',
// // // //       image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face'
// // // //     },
// // // //     { 
// // // //       id: '4', 
// // // //       name: 'Justin Bieber',
// // // //       image: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=400&h=400&fit=crop&crop=face'
// // // //     },
// // // //     { 
// // // //       id: '5', 
// // // //       name: 'Taylor Swift',
// // // //       image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face'
// // // //     },
// // // //     { 
// // // //       id: '6', 
// // // //       name: 'The Weeknd',
// // // //       image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400&h=400&fit=crop&crop=face'
// // // //     },
// // // //   ];

// // // //   // Browse categories data with images
// // // //   const browseCategories = [
// // // //     { 
// // // //       id: '1', 
// // // //       name: 'Hollywood', 
// // // //       color: '#ff0090',
// // // //       image: 'https://images.unsplash.com/photo-1489599809505-fb44932d0e71?w=400&h=200&fit=crop'
// // // //     },
// // // //     { 
// // // //       id: '2', 
// // // //       name: 'INTERNATIONAL', 
// // // //       color: '#ba5d07',
// // // //       image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=200&fit=crop'
// // // //     },
// // // //     { 
// // // //       id: '3', 
// // // //       name: 'POP', 
// // // //       color: '#1e3264',
// // // //       image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=200&fit=crop'
// // // //     },
// // // //     { 
// // // //       id: '4', 
// // // //       name: 'DANCE', 
// // // //       color: '#8d67ab',
// // // //       image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=400&h=200&fit=crop'
// // // //     },
// // // //     { 
// // // //       id: '5', 
// // // //       name: 'COUNTRY', 
// // // //       color: '#477d95',
// // // //       image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=200&fit=crop'
// // // //     },
// // // //     { 
// // // //       id: '6', 
// // // //       name: 'INDIE', 
// // // //       color: '#e8115b',
// // // //       image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=200&fit=crop'
// // // //     },
// // // //     { 
// // // //       id: '7', 
// // // //       name: 'JAZZ', 
// // // //       color: '#148a08',
// // // //       image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400&h=200&fit=crop'
// // // //     },
// // // //     { 
// // // //       id: '8', 
// // // //       name: 'PUNK', 
// // // //       color: '#503750',
// // // //       image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=200&fit=crop'
// // // //     },
// // // //     { 
// // // //       id: '9', 
// // // //       name: 'R&B', 
// // // //       color: '#af2896',
// // // //       image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=200&fit=crop'
// // // //     },
// // // //   ];

// // // //   const clearSearchHistory = () => {
// // // //     setRecentSearches([]);
// // // //   };

// // // //   const removeRecentSearch = (id) => {
// // // //     setRecentSearches(recentSearches.filter(item => item.id !== id));
// // // //   };

// // // //   const renderTrendingArtist = ({ item }) => (
// // // //     <TouchableOpacity style={styles.trendingArtistItem}
// // // //      onPress={() => navigation.navigate('ArtistProfileScreen', { artistName: item.name })}
// // // //   >
// // // //       <View style={styles.artistImageContainer}>
// // // //         <Image 
// // // //           source={{ uri: item.image }} 
// // // //           style={styles.artistImage}
// // // //           resizeMode="cover"
// // // //         />
// // // //         {/* Verified Badge */}
// // // //         <View style={styles.verifiedBadge}>
// // // //           <Icon name="verified" size={14} color="#1DB954" />
// // // //         </View>
// // // //       </View>
// // // //       <Text style={styles.artistName}>{item.name}</Text>
// // // //       <Text style={styles.artistType}>Artist</Text>
// // // //     </TouchableOpacity>
// // // //   );

// // // //   const renderRecentSearch = ({ item }) => (
// // // //     <TouchableOpacity style={styles.recentSearchItem}>
// // // //       <Icon name="history" size={20} color="#b3b3b3" />
// // // //       <Text style={styles.recentSearchText}>{item.text}</Text>
// // // //       <TouchableOpacity 
// // // //         style={styles.clearIcon}
// // // //         onPress={() => removeRecentSearch(item.id)}
// // // //       >
// // // //         <Icon name="close" size={18} color="#b3b3b3" />
// // // //       </TouchableOpacity>
// // // //     </TouchableOpacity>
// // // //   );

// // // //   const renderBrowseCategory = ({ item, index }) => (
// // // //     <TouchableOpacity 
// // // //       style={[
// // // //         styles.browseCategory, 
// // // //         { 
// // // //           marginRight: index % 2 === 0 ? 8 : 0
// // // //         }
// // // //       ]}
// // // //     >
// // // //       <Image 
// // // //         source={{ uri: item.image }} 
// // // //         style={styles.browseCategoryImage}
// // // //         resizeMode="cover"
// // // //       />
// // // //       <View style={styles.browseCategoryOverlay} />
// // // //       <Text style={styles.browseCategoryText}>{item.name}</Text>
// // // //     </TouchableOpacity>
// // // //   );

// // // //   return (
// // // //     <SafeAreaView style={styles.container}>
// // // //       <StatusBar barStyle="light-content" backgroundColor="#000" />
      
// // // //       {/* Search Bar */}
// // // //       <View style={styles.searchContainer}>
// // // //         <Icon name="search" size={24} color="#000" style={styles.searchIcon} />
// // // //         <TextInput
// // // //           style={styles.searchInput}
// // // //           placeholder="Search songs, artist, album o..."
// // // //           placeholderTextColor="#000"
// // // //           value={searchQuery}
// // // //           onChangeText={setSearchQuery}
// // // //         />
// // // //       </View>

// // // //       <ScrollView 
// // // //         style={styles.scrollView}
// // // //         showsVerticalScrollIndicator={false}
// // // //       >
// // // //         {/* Recent Searches */}
// // // //         {recentSearches.length > 0 && (
// // // //           <View style={styles.section}>
// // // //             <View style={styles.sectionHeader}>
// // // //               <Text style={styles.sectionTitle}>Recent searches</Text>
// // // //               <TouchableOpacity onPress={clearSearchHistory}>
// // // //                 <Text style={styles.clearAllText}>Clear all</Text>
// // // //               </TouchableOpacity>
// // // //             </View>
// // // //             <FlatList
// // // //               data={recentSearches}
// // // //               renderItem={renderRecentSearch}
// // // //               keyExtractor={item => item.id}
// // // //               scrollEnabled={false}
// // // //             />
// // // //           </View>
// // // //         )}

// // // //         {/* Trending Artists */}
// // // //         <View style={styles.section}>
// // // //           <Text style={styles.sectionTitle}>Trending artists</Text>
// // // //           <FlatList
// // // //             data={trendingArtists}
// // // //             renderItem={renderTrendingArtist}
// // // //             keyExtractor={item => item.id}
// // // //             horizontal
// // // //             showsHorizontalScrollIndicator={false}
// // // //             contentContainerStyle={styles.trendingList}
// // // //           />
// // // //         </View>

// // // //         {/* Browse Categories */}
// // // //         <View style={styles.section}>
// // // //           <Text style={styles.sectionTitle}>Browse</Text>
// // // //           <View style={styles.browseGrid}>
// // // //             {browseCategories.map((item, index) => (
// // // //               <TouchableOpacity 
// // // //                 key={item.id}
// // // //                 style={[
// // // //                   styles.browseCategory, 
// // // //                   { 
// // // //                     marginRight: index % 2 === 0 ? 8 : 0
// // // //                   }
// // // //                 ]}
// // // //               >
// // // //                 <Image 
// // // //                   source={{ uri: item.image }} 
// // // //                   style={styles.browseCategoryImage}
// // // //                   resizeMode="cover"
// // // //                 />
// // // //                 <View style={styles.browseCategoryOverlay} />
// // // //                 <Text style={styles.browseCategoryText}>{item.name}</Text>
// // // //               </TouchableOpacity>
// // // //             ))}
// // // //           </View>
// // // //         </View>

// // // //         {/* Bottom Padding */}
// // // //         <View style={styles.bottomPadding} />
// // // //       </ScrollView>
// // // //     </SafeAreaView>
// // // //   );
// // // // };

// // // // const styles = StyleSheet.create({
// // // //   container: {
// // // //     flex: 1,
// // // //     backgroundColor: '#000',
// // // //     paddingTop: 16,
// // // //   },
// // // //   searchContainer: {
// // // //     flexDirection: 'row',
// // // //     alignItems: 'center',
// // // //     backgroundColor: '#fff',
// // // //     marginHorizontal: 16,
// // // //     marginVertical: 16,
// // // //     borderRadius: 30,
// // // //     paddingHorizontal: 16,
// // // //     height: 56,
// // // //   },
// // // //   searchIcon: {
// // // //     marginRight: 12,
// // // //   },
// // // //   searchInput: {
// // // //     flex: 1,
// // // //     color: '#fff',
// // // //     fontSize: 16,
// // // //     paddingVertical: 8,
// // // //   },
// // // //   scrollView: {
// // // //     flex: 1,
// // // //   },
// // // //   section: {
// // // //     marginBottom: 32,
// // // //     paddingHorizontal: 16,
// // // //   },
// // // //   sectionHeader: {
// // // //     flexDirection: 'row',
// // // //     justifyContent: 'space-between',
// // // //     alignItems: 'center',
// // // //     marginBottom: 16,
// // // //   },
// // // //   sectionTitle: {
// // // //     fontSize: 22,
// // // //     fontWeight: 'bold',
// // // //     color: '#fff',
// // // //   },
// // // //   clearAllText: {
// // // //     fontSize: 14,
// // // //     color: '#b3b3b3',
// // // //     textDecorationLine: 'underline',
// // // //   },
// // // //   recentSearchItem: {
// // // //     flexDirection: 'row',
// // // //     alignItems: 'center',
// // // //     paddingVertical: 12,
// // // //     borderBottomWidth: 1,
// // // //     borderBottomColor: '#282828',
// // // //   },
// // // //   recentSearchText: {
// // // //     flex: 1,
// // // //     fontSize: 16,
// // // //     color: '#fff',
// // // //     marginLeft: 12,
// // // //   },
// // // //   clearIcon: {
// // // //     padding: 4,
// // // //   },
// // // //   trendingList: {
// // // //     paddingRight: 16,
// // // //   },
// // // //   trendingArtistItem: {
// // // //     alignItems: 'center',
// // // //     marginRight: 20,
// // // //     width: 100,
// // // //   },
// // // //   artistImageContainer: {
// // // //     width: 100,
// // // //     height: 100,
// // // //     borderRadius: 50,
// // // //     marginBottom: 8,
// // // //     position: 'relative',
// // // //     shadowColor: '#000',
// // // //     shadowOffset: {
// // // //       width: 0,
// // // //       height: 4,
// // // //     },
// // // //     shadowOpacity: 0.3,
// // // //     shadowRadius: 8,
// // // //     elevation: 8,
// // // //   },
// // // //   artistImage: {
// // // //     width: '100%',
// // // //     height: '100%',
// // // //     borderRadius: 50,
// // // //   },
// // // //   verifiedBadge: {
// // // //     position: 'absolute',
// // // //     bottom: 2,
// // // //     right: 2,
// // // //     backgroundColor: '#000',
// // // //     borderRadius: 10,
// // // //     padding: 2,
// // // //   },
// // // //   artistName: {
// // // //     fontSize: 14,
// // // //     fontWeight: 'bold',
// // // //     color: '#fff',
// // // //     textAlign: 'center',
// // // //     marginBottom: 2,
// // // //   },
// // // //   artistType: {
// // // //     fontSize: 12,
// // // //     color: '#b3b3b3',
// // // //     textAlign: 'center',
// // // //   },
// // // //   browseGrid: {
// // // //     flexDirection: 'row',
// // // //     flexWrap: 'wrap',
// // // //     justifyContent: 'space-between',
// // // //   },
// // // //   browseCategory: {
// // // //     width: (width - 48) / 2,
// // // //     height: 100,
// // // //     borderRadius: 8,
// // // //     marginBottom: 12,
// // // //     overflow: 'hidden',
// // // //     position: 'relative',
// // // //   },
// // // //   browseCategoryImage: {
// // // //     width: '100%',
// // // //     height: '100%',
// // // //     position: 'absolute',
// // // //   },
// // // //   browseCategoryOverlay: {
// // // //     ...StyleSheet.absoluteFillObject,
// // // //     backgroundColor: 'rgba(0,0,0,0.4)',
// // // //   },
// // // //   browseCategoryText: {
// // // //     fontSize: 16,
// // // //     fontWeight: 'bold',
// // // //     color: '#fff',
// // // //     textAlign: 'center',
// // // //     position: 'absolute',
// // // //     top: '50%',
// // // //     left: 0,
// // // //     right: 0,
// // // //     transform: [{ translateY: -10 }],
// // // //     paddingHorizontal: 8,
// // // //     textShadowColor: 'rgba(0,0,0,0.8)',
// // // //     textShadowOffset: { width: 1, height: 1 },
// // // //     textShadowRadius: 4,
// // // //   },
// // // //   bottomPadding: {
// // // //     height: 20,
// // // //   },
// // // // });

// // // // export default SearchScreen;

// // // // src/screens/SearchScreen.js
// // // import React, { useState, useEffect } from 'react';
// // // import {
// // //   View,
// // //   Text,
// // //   TextInput,
// // //   TouchableOpacity,
// // //   StyleSheet,
// // //   StatusBar,
// // //   SafeAreaView,
// // //   ScrollView,
// // //   FlatList,
// // //   Dimensions,
// // //   Image,
// // //   ActivityIndicator
// // // } from 'react-native';
// // // import Icon from 'react-native-vector-icons/MaterialIcons';
// // // import { useNavigation } from '@react-navigation/native';
// // // import { getDataWithToken, postDataWithToken } from '../Services/mobile-api';

// // // const { width } = Dimensions.get('window');

// // // const SearchScreen = () => {
// // //   const navigation = useNavigation();
// // //   const [searchQuery, setSearchQuery] = useState('');
// // //   const [isLoading, setIsLoading] = useState(false);
// // //   const [searchResults, setSearchResults] = useState(null);
// // //   const [searchPageData, setSearchPageData] = useState(null);
// // //   const [recentSearches, setRecentSearches] = useState([]);

// // //   // ✅ Search page data fetch karo (on component mount)
// // //   useEffect(() => {
// // //     fetchSearchPageData();
// // //   }, []);

// // //   // ✅ Search page data API
// // //   const fetchSearchPageData = async () => {
// // //     try {
// // //       setIsLoading(true);
// // //       const response = await getDataWithToken('user/search');
      
// // //       if (response && response.success) {
// // //         setSearchPageData(response.data);
// // //         console.log('✅ Search page data loaded:', response.data);
// // //       } else {
// // //         console.log('❌ Failed to fetch search page data');
// // //       }
// // //     } catch (error) {
// // //       console.error('❌ Search page data error:', error);
// // //     } finally {
// // //       setIsLoading(false);
// // //     }
// // //   };

// // //   // ✅ Search API call
// // //   const handleSearch = async (query) => {
// // //     if (!query.trim()) {
// // //       setSearchResults(null);
// // //       return;
// // //     }

// // //     try {
// // //       setIsLoading(true);
// // //       const response = await postDataWithToken(
// // //         { query: query.trim(), type: 'all' },
// // //         'user/search'
// // //       );
      
// // //       if (response && response.success) {
// // //         setSearchResults(response.data);
        
// // //         // Recent searches mein add karo (unique)
// // //         if (!recentSearches.find(item => item.text.toLowerCase() === query.toLowerCase())) {
// // //           setRecentSearches(prev => [
// // //             { id: Date.now().toString(), text: query.trim() },
// // //             ...prev.slice(0, 4) // Max 5 recent searches
// // //           ]);
// // //         }
        
// // //         console.log('✅ Search results:', response.data);
// // //       } else {
// // //         console.log('❌ Search failed');
// // //       }
// // //     } catch (error) {
// // //       console.error('❌ Search error:', error);
// // //       setSearchResults(null);
// // //     } finally {
// // //       setIsLoading(false);
// // //     }
// // //   };

// // //   // ✅ Search query change handler with debounce
// // //   useEffect(() => {
// // //     const timeoutId = setTimeout(() => {
// // //       if (searchQuery.trim()) {
// // //         handleSearch(searchQuery);
// // //       } else {
// // //         setSearchResults(null);
// // //       }
// // //     }, 500); // 500ms debounce

// // //     return () => clearTimeout(timeoutId);
// // //   }, [searchQuery]);

// // //   // ✅ Clear search history
// // //   const clearSearchHistory = () => {
// // //     setRecentSearches([]);
// // //   };

// // //   // ✅ Remove single recent search
// // //   const removeRecentSearch = (id) => {
// // //     setRecentSearches(recentSearches.filter(item => item.id !== id));
// // //   };

// // //   // ✅ Song item press handler
// // //   const handleSongPress = (song) => {
// // //     navigation.navigate('NowPlayingScreen', { 
// // //       songId: song.id,
// // //       resetToBeginning: true 
// // //     });
// // //   };

// // //   // ✅ Artist item press handler
// // //   const handleArtistPress = (artist) => {
// // //     navigation.navigate('ArtistProfileScreen', { 
// // //       artistId: artist.id,
// // //       artistName: artist.name 
// // //     });
// // //   };

// // //   // ✅ Render trending artists from API
// // //   const renderTrendingArtist = ({ item }) => (
// // //     <TouchableOpacity 
// // //       style={styles.trendingArtistItem}
// // //       onPress={() => handleArtistPress(item)}
// // //     >
// // //       <View style={styles.artistImageContainer}>
// // //         <Image 
// // //           source={{ 
// // //             uri: item.image 
// // //               ? `http://103.119.171.213:3001${item.image}`
// // //               : 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop&crop=face'
// // //           }} 
// // //           style={styles.artistImage}
// // //           resizeMode="cover"
// // //         />
// // //         {/* Verified Badge */}
// // //         <View style={styles.verifiedBadge}>
// // //           <Icon name="verified" size={14} color="#1DB954" />
// // //         </View>
// // //       </View>
// // //       <Text style={styles.artistName}>{item.name}</Text>
// // //       <Text style={styles.artistType}>Artist</Text>
// // //       <Text style={styles.followerCount}>{item.followers} followers</Text>
// // //     </TouchableOpacity>
// // //   );

// // //   // ✅ Render browse categories from API
// // //   const renderBrowseCategory = ({ item, index }) => (
// // //     <TouchableOpacity 
// // //       style={[
// // //         styles.browseCategory, 
// // //         { 
// // //           marginRight: index % 2 === 0 ? 8 : 0
// // //         }
// // //       ]}
// // //     >
// // //       <Image 
// // //         source={{ 
// // //           uri: item.image 
// // //             ? `http://103.119.171.213:3001${item.image}`
// // //             : 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=200&fit=crop'
// // //         }} 
// // //         style={styles.browseCategoryImage}
// // //         resizeMode="cover"
// // //       />
// // //       <View style={styles.browseCategoryOverlay} />
// // //       <Text style={styles.browseCategoryText}>{item.name}</Text>
// // //     </TouchableOpacity>
// // //   );

// // //   // ✅ Render recent searches
// // //   const renderRecentSearch = ({ item }) => (
// // //     <TouchableOpacity 
// // //       style={styles.recentSearchItem}
// // //       onPress={() => setSearchQuery(item.text)}
// // //     >
// // //       <Icon name="history" size={20} color="#b3b3b3" />
// // //       <Text style={styles.recentSearchText}>{item.text}</Text>
// // //       <TouchableOpacity 
// // //         style={styles.clearIcon}
// // //         onPress={() => removeRecentSearch(item.id)}
// // //       >
// // //         <Icon name="close" size={18} color="#b3b3b3" />
// // //       </TouchableOpacity>
// // //     </TouchableOpacity>
// // //   );

// // //   // ✅ Render search results - Songs
// // //   const renderSongResult = ({ item }) => (
// // //     <TouchableOpacity 
// // //       style={styles.searchResultItem}
// // //       onPress={() => handleSongPress(item)}
// // //     >
// // //       <Image 
// // //         source={{ 
// // //           uri: item.image 
// // //             ? `http://103.119.171.213:3001${item.image}`
// // //             : 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop'
// // //         }} 
// // //         style={styles.searchResultImage}
// // //         resizeMode="cover"
// // //       />
// // //       <View style={styles.searchResultInfo}>
// // //         <Text style={styles.searchResultTitle}>{item.title}</Text>
// // //         <Text style={styles.searchResultSubtitle}>{item.artist}</Text>
// // //         <Text style={styles.searchResultMeta}>
// // //           {Math.floor(item.duration / 60)}:{(item.duration % 60).toString().padStart(2, '0')} • {item.playCount} plays
// // //         </Text>
// // //       </View>
// // //       <TouchableOpacity style={styles.moreButton}>
// // //         <Icon name="more-vert" size={20} color="#b3b3b3" />
// // //       </TouchableOpacity>
// // //     </TouchableOpacity>
// // //   );

// // //   // ✅ Render search results - Artists
// // //   const renderArtistResult = ({ item }) => (
// // //     <TouchableOpacity 
// // //       style={styles.searchResultItem}
// // //       onPress={() => handleArtistPress(item)}
// // //     >
// // //       <Image 
// // //         source={{ 
// // //           uri: item.image 
// // //             ? `http://103.119.171.213:3001${item.image}`
// // //             : 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop&crop=face'
// // //         }} 
// // //         style={[styles.searchResultImage, { borderRadius: 25 }]}
// // //         resizeMode="cover"
// // //       />
// // //       <View style={styles.searchResultInfo}>
// // //         <Text style={styles.searchResultTitle}>{item.name}</Text>
// // //         <Text style={styles.searchResultSubtitle}>Artist</Text>
// // //         <Text style={styles.searchResultMeta}>{item.followers} followers</Text>
// // //       </View>
// // //       <TouchableOpacity style={styles.moreButton}>
// // //         <Icon name="more-vert" size={20} color="#b3b3b3" />
// // //       </TouchableOpacity>
// // //     </TouchableOpacity>
// // //   );

// // //   return (
// // //     <SafeAreaView style={styles.container}>
// // //       <StatusBar barStyle="light-content" backgroundColor="#000" />
      
// // //       {/* Search Bar */}
// // //       <View style={styles.searchContainer}>
// // //         <Icon name="search" size={24} color="#000" style={styles.searchIcon} />
// // //         <TextInput
// // //           style={styles.searchInput}
// // //           placeholder="Search songs, artist, album..."
// // //           placeholderTextColor="#000"
// // //           value={searchQuery}
// // //           onChangeText={setSearchQuery}
// // //           returnKeyType="search"
// // //         />
// // //         {isLoading && (
// // //           <ActivityIndicator size="small" color="#000" style={styles.loadingIndicator} />
// // //         )}
// // //       </View>

// // //       <ScrollView 
// // //         style={styles.scrollView}
// // //         showsVerticalScrollIndicator={false}
// // //       >
// // //         {/* Search Results */}
// // //         {searchResults ? (
// // //           <View style={styles.section}>
// // //             {/* Songs Results */}
// // //             {searchResults.results.songs.count > 0 && (
// // //               <>
// // //                 <Text style={styles.resultsSectionTitle}>
// // //                   {searchResults.results.songs.title}
// // //                 </Text>
// // //                 <FlatList
// // //                   data={searchResults.results.songs.items}
// // //                   renderItem={renderSongResult}
// // //                   keyExtractor={item => `song-${item.id}`}
// // //                   scrollEnabled={false}
// // //                 />
// // //               </>
// // //             )}

// // //             {/* Artists Results */}
// // //             {searchResults.results.artists.count > 0 && (
// // //               <>
// // //                 <Text style={styles.resultsSectionTitle}>
// // //                   {searchResults.results.artists.title}
// // //                 </Text>
// // //                 <FlatList
// // //                   data={searchResults.results.artists.items}
// // //                   renderItem={renderArtistResult}
// // //                   keyExtractor={item => `artist-${item.id}`}
// // //                   scrollEnabled={false}
// // //                 />
// // //               </>
// // //             )}

// // //             {/* No Results */}
// // //             {searchResults.totalResults === 0 && (
// // //               <View style={styles.noResults}>
// // //                 <Icon name="search-off" size={64} color="#b3b3b3" />
// // //                 <Text style={styles.noResultsText}>No results found for "{searchQuery}"</Text>
// // //                 <Text style={styles.noResultsSubtext}>Try searching with different keywords</Text>
// // //               </View>
// // //             )}
// // //           </View>
// // //         ) : (
// // //           /* Default Search Page */
// // //           <>
// // //             {/* Recent Searches */}
// // //             {recentSearches.length > 0 && (
// // //               <View style={styles.section}>
// // //                 <View style={styles.sectionHeader}>
// // //                   <Text style={styles.sectionTitle}>Recent searches</Text>
// // //                   <TouchableOpacity onPress={clearSearchHistory}>
// // //                     <Text style={styles.clearAllText}>Clear all</Text>
// // //                   </TouchableOpacity>
// // //                 </View>
// // //                 <FlatList
// // //                   data={recentSearches}
// // //                   renderItem={renderRecentSearch}
// // //                   keyExtractor={item => item.id}
// // //                   scrollEnabled={false}
// // //                 />
// // //               </View>
// // //             )}

// // //             {/* Trending Artists from API */}
// // //             {searchPageData?.trendingArtists && searchPageData.trendingArtists.artists.length > 0 && (
// // //               <View style={styles.section}>
// // //                 <Text style={styles.sectionTitle}>{searchPageData.trendingArtists.title}</Text>
// // //                 <Text style={styles.sectionDescription}>
// // //                   {searchPageData.trendingArtists.description}
// // //                 </Text>
// // //                 <FlatList
// // //                   data={searchPageData.trendingArtists.artists}
// // //                   renderItem={renderTrendingArtist}
// // //                   keyExtractor={item => `trending-${item.id}`}
// // //                   horizontal
// // //                   showsHorizontalScrollIndicator={false}
// // //                   contentContainerStyle={styles.trendingList}
// // //                 />
// // //               </View>
// // //             )}

// // //             {/* Browse Categories from API */}
// // //             {searchPageData?.browseMusic && searchPageData.browseMusic.genres.length > 0 && (
// // //               <View style={styles.section}>
// // //                 <Text style={styles.sectionTitle}>{searchPageData.browseMusic.title}</Text>
// // //                 <Text style={styles.sectionDescription}>
// // //                   {searchPageData.browseMusic.description}
// // //                 </Text>
// // //                 <View style={styles.browseGrid}>
// // //                   {searchPageData.browseMusic.genres.map((item, index) => (
// // //                     <TouchableOpacity 
// // //                       key={`browse-${item.id}`}
// // //                       style={[
// // //                         styles.browseCategory, 
// // //                         { 
// // //                           marginRight: index % 2 === 0 ? 8 : 0
// // //                         }
// // //                       ]}
// // //                     >
// // //                       <Image 
// // //                         source={{ 
// // //                           uri: item.image 
// // //                             ? `http://103.119.171.213:3001${item.image}`
// // //                             : 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=200&fit=crop'
// // //                         }} 
// // //                         style={styles.browseCategoryImage}
// // //                         resizeMode="cover"
// // //                       />
// // //                       <View style={styles.browseCategoryOverlay} />
// // //                       <Text style={styles.browseCategoryText}>{item.name}</Text>
// // //                     </TouchableOpacity>
// // //                   ))}
// // //                 </View>
// // //               </View>
// // //             )}

// // //             {/* Loading State */}
// // //             {isLoading && (
// // //               <View style={styles.loadingContainer}>
// // //                 <ActivityIndicator size="large" color="#1DB954" />
// // //                 <Text style={styles.loadingText}>Searching...</Text>
// // //               </View>
// // //             )}
// // //           </>
// // //         )}

// // //         {/* Bottom Padding */}
// // //         <View style={styles.bottomPadding} />
// // //       </ScrollView>
// // //     </SafeAreaView>
// // //   );
// // // };

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     backgroundColor: '#000',
// // //     paddingTop: 16,
// // //   },
// // //   searchContainer: {
// // //     flexDirection: 'row',
// // //     alignItems: 'center',
// // //     backgroundColor: '#fff',
// // //     marginHorizontal: 16,
// // //     marginVertical: 16,
// // //     borderRadius: 30,
// // //     paddingHorizontal: 16,
// // //     height: 56,
// // //   },
// // //   searchIcon: {
// // //     marginRight: 12,
// // //   },
// // //   searchInput: {
// // //     flex: 1,
// // //     color: '#000',
// // //     fontSize: 16,
// // //     paddingVertical: 8,
// // //   },
// // //   loadingIndicator: {
// // //     marginLeft: 8,
// // //   },
// // //   scrollView: {
// // //     flex: 1,
// // //   },
// // //   section: {
// // //     marginBottom: 32,
// // //     paddingHorizontal: 16,
// // //   },
// // //   sectionHeader: {
// // //     flexDirection: 'row',
// // //     justifyContent: 'space-between',
// // //     alignItems: 'center',
// // //     marginBottom: 16,
// // //   },
// // //   sectionTitle: {
// // //     fontSize: 22,
// // //     fontWeight: 'bold',
// // //     color: '#fff',
// // //   },
// // //   sectionDescription: {
// // //     fontSize: 14,
// // //     color: '#b3b3b3',
// // //     marginBottom: 16,
// // //   },
// // //   clearAllText: {
// // //     fontSize: 14,
// // //     color: '#b3b3b3',
// // //     textDecorationLine: 'underline',
// // //   },
// // //   recentSearchItem: {
// // //     flexDirection: 'row',
// // //     alignItems: 'center',
// // //     paddingVertical: 12,
// // //     borderBottomWidth: 1,
// // //     borderBottomColor: '#282828',
// // //   },
// // //   recentSearchText: {
// // //     flex: 1,
// // //     fontSize: 16,
// // //     color: '#fff',
// // //     marginLeft: 12,
// // //   },
// // //   clearIcon: {
// // //     padding: 4,
// // //   },
// // //   trendingList: {
// // //     paddingRight: 16,
// // //   },
// // //   trendingArtistItem: {
// // //     alignItems: 'center',
// // //     marginRight: 20,
// // //     width: 100,
// // //   },
// // //   artistImageContainer: {
// // //     width: 100,
// // //     height: 100,
// // //     borderRadius: 50,
// // //     marginBottom: 8,
// // //     position: 'relative',
// // //     shadowColor: '#000',
// // //     shadowOffset: { width: 0, height: 4 },
// // //     shadowOpacity: 0.3,
// // //     shadowRadius: 8,
// // //     elevation: 8,
// // //   },
// // //   artistImage: {
// // //     width: '100%',
// // //     height: '100%',
// // //     borderRadius: 50,
// // //   },
// // //   verifiedBadge: {
// // //     position: 'absolute',
// // //     bottom: 2,
// // //     right: 2,
// // //     backgroundColor: '#000',
// // //     borderRadius: 10,
// // //     padding: 2,
// // //   },
// // //   artistName: {
// // //     fontSize: 14,
// // //     fontWeight: 'bold',
// // //     color: '#fff',
// // //     textAlign: 'center',
// // //     marginBottom: 2,
// // //   },
// // //   artistType: {
// // //     fontSize: 12,
// // //     color: '#b3b3b3',
// // //     textAlign: 'center',
// // //   },
// // //   followerCount: {
// // //     fontSize: 10,
// // //     color: '#666',
// // //     textAlign: 'center',
// // //   },
// // //   browseGrid: {
// // //     flexDirection: 'row',
// // //     flexWrap: 'wrap',
// // //     justifyContent: 'space-between',
// // //   },
// // //   browseCategory: {
// // //     width: (width - 48) / 2,
// // //     height: 100,
// // //     borderRadius: 8,
// // //     marginBottom: 12,
// // //     overflow: 'hidden',
// // //     position: 'relative',
// // //   },
// // //   browseCategoryImage: {
// // //     width: '100%',
// // //     height: '100%',
// // //     position: 'absolute',
// // //   },
// // //   browseCategoryOverlay: {
// // //     ...StyleSheet.absoluteFillObject,
// // //     backgroundColor: 'rgba(0,0,0,0.4)',
// // //   },
// // //   browseCategoryText: {
// // //     fontSize: 16,
// // //     fontWeight: 'bold',
// // //     color: '#fff',
// // //     textAlign: 'center',
// // //     position: 'absolute',
// // //     top: '50%',
// // //     left: 0,
// // //     right: 0,
// // //     transform: [{ translateY: -10 }],
// // //     paddingHorizontal: 8,
// // //     textShadowColor: 'rgba(0,0,0,0.8)',
// // //     textShadowOffset: { width: 1, height: 1 },
// // //     textShadowRadius: 4,
// // //   },
// // //   // Search Results Styles
// // //   resultsSectionTitle: {
// // //     fontSize: 18,
// // //     fontWeight: 'bold',
// // //     color: '#fff',
// // //     marginBottom: 16,
// // //     marginTop: 8,
// // //   },
// // //   searchResultItem: {
// // //     flexDirection: 'row',
// // //     alignItems: 'center',
// // //     paddingVertical: 12,
// // //     borderBottomWidth: 1,
// // //     borderBottomColor: '#282828',
// // //   },
// // //   searchResultImage: {
// // //     width: 50,
// // //     height: 50,
// // //     borderRadius: 4,
// // //     marginRight: 12,
// // //   },
// // //   searchResultInfo: {
// // //     flex: 1,
// // //   },
// // //   searchResultTitle: {
// // //     fontSize: 16,
// // //     fontWeight: '600',
// // //     color: '#fff',
// // //     marginBottom: 4,
// // //   },
// // //   searchResultSubtitle: {
// // //     fontSize: 14,
// // //     color: '#b3b3b3',
// // //     marginBottom: 2,
// // //   },
// // //   searchResultMeta: {
// // //     fontSize: 12,
// // //     color: '#666',
// // //   },
// // //   moreButton: {
// // //     padding: 8,
// // //   },
// // //   noResults: {
// // //     alignItems: 'center',
// // //     justifyContent: 'center',
// // //     paddingVertical: 60,
// // //   },
// // //   noResultsText: {
// // //     fontSize: 18,
// // //     color: '#fff',
// // //     fontWeight: 'bold',
// // //     marginTop: 16,
// // //     marginBottom: 8,
// // //     textAlign: 'center',
// // //   },
// // //   noResultsSubtext: {
// // //     fontSize: 14,
// // //     color: '#b3b3b3',
// // //     textAlign: 'center',
// // //   },
// // //   loadingContainer: {
// // //     alignItems: 'center',
// // //     justifyContent: 'center',
// // //     paddingVertical: 40,
// // //   },
// // //   loadingText: {
// // //     fontSize: 16,
// // //     color: '#b3b3b3',
// // //     marginTop: 12,
// // //   },
// // //   bottomPadding: {
// // //     height: 20,
// // //   },
// // // });

// // // export default SearchScreen;


// // // src/screens/SearchScreen.js - FIXED VERSION
// // import React, { useState, useEffect } from 'react';
// // import {
// //   View,
// //   Text,
// //   TextInput,
// //   TouchableOpacity,
// //   StyleSheet,
// //   StatusBar,
// //   SafeAreaView,
// //   ScrollView,
// //   FlatList,
// //   Dimensions,
// //   Image,
// //   ActivityIndicator
// // } from 'react-native';
// // import Icon from 'react-native-vector-icons/MaterialIcons';
// // import { useNavigation } from '@react-navigation/native';
// // import { getDataWithToken, postDataWithToken } from '../Services/mobile-api';
// // import { mobile_siteConfig } from '../Services/mobile-siteConfig';
// // import { useAudio } from '../contexts/AudioContext';

// // const { width } = Dimensions.get('window');

// // // ✅ IMAGE URL HELPER FUNCTION
// // const getImageUrl = (imagePath) => {
// //   if (!imagePath || imagePath === 'null' || imagePath === 'undefined') {
// //     return 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop';
// //   }
  
// //   if (imagePath.startsWith('http')) {
// //     return imagePath;
// //   }
  
// //   if (imagePath.startsWith('/')) {
// //     return `${mobile_siteConfig.IMAGE_BASE_URL}${imagePath}`;
// //   }
  
// //   return 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop';
// // };

// // const SearchScreen = () => {
// //   const navigation = useNavigation();
// //   const [searchQuery, setSearchQuery] = useState('');
// //   const [isLoading, setIsLoading] = useState(false);
// //   const [searchResults, setSearchResults] = useState(null);
// //   const [searchPageData, setSearchPageData] = useState(null);
// //   const [recentSearches, setRecentSearches] = useState([]);

// //   // ✅ Audio Context
// //   const { playSong } = useAudio();

// //   // ✅ Search page data fetch karo (on component mount)
// //   useEffect(() => {
// //     fetchSearchPageData();
// //   }, []);

// //   // ✅ Search page data API
// //   const fetchSearchPageData = async () => {
// //     try {
// //       setIsLoading(true);
// //       const response = await getDataWithToken('user/search');
      
// //       if (response && response.success) {
// //         setSearchPageData(response.data);
// //         console.log('✅ Search page data loaded:', response.data);
// //       } else {
// //         console.log('❌ Failed to fetch search page data');
// //       }
// //     } catch (error) {
// //       console.error('❌ Search page data error:', error);
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   // ✅ Search API call
// //   const handleSearch = async (query) => {
// //     if (!query.trim()) {
// //       setSearchResults(null);
// //       return;
// //     }

// //     try {
// //       setIsLoading(true);
// //       const response = await postDataWithToken(
// //         { query: query.trim(), type: 'all' },
// //         'user/search'
// //       );
      
// //       if (response && response.success) {
// //         setSearchResults(response.data);
        
// //         // Recent searches mein add karo (unique)
// //         if (!recentSearches.find(item => item.text.toLowerCase() === query.toLowerCase())) {
// //           setRecentSearches(prev => [
// //             { id: Date.now().toString(), text: query.trim() },
// //             ...prev.slice(0, 4) // Max 5 recent searches
// //           ]);
// //         }
        
// //         console.log('✅ Search results:', response.data);
// //       } else {
// //         console.log('❌ Search failed');
// //       }
// //     } catch (error) {
// //       console.error('❌ Search error:', error);
// //       setSearchResults(null);
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   // ✅ Search query change handler with debounce
// //   useEffect(() => {
// //     const timeoutId = setTimeout(() => {
// //       if (searchQuery.trim()) {
// //         handleSearch(searchQuery);
// //       } else {
// //         setSearchResults(null);
// //       }
// //     }, 500); // 500ms debounce

// //     return () => clearTimeout(timeoutId);
// //   }, [searchQuery]);

// //   // ✅ Clear search history
// //   const clearSearchHistory = () => {
// //     setRecentSearches([]);
// //   };

// //   // ✅ Remove single recent search
// //   const removeRecentSearch = (id) => {
// //     setRecentSearches(recentSearches.filter(item => item.id !== id));
// //   };

// //   // ✅ FIXED: Song item press handler - PROPER DATA PASS KARO
// //   const handleSongPress = async (song) => {
// //     console.log('🎵 Song pressed from Search:', song);
    
// //     try {
// //       // ✅ Pehle song info fetch karo
// //       const songInfo = await getDataWithToken(`user/song/${song.id}/info`);
// //       console.log('🎵 Song Info from Search:', songInfo);
      
// //       if (songInfo && songInfo.success) {
// //         // ✅ CORRECT DATA STRUCTURE BANAO
// //         const songData = {
// //           id: song.id,
// //           title: song.title || 'Unknown Title',
// //           artist: song.artist?.name || 'Unknown Artist',
// //           audioUrl: songInfo.song?.audioFile 
// //             ? `${mobile_siteConfig.IMAGE_BASE_URL}${songInfo.song.audioFile}`
// //             : 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
// //           artwork: getImageUrl(song.coverImage || songInfo.song?.thumbnail)
// //         };
        
// //         console.log('🎵 Playing song data from Search:', songData);
        
// //         // ✅ Global context mein play karo
// //         playSong(songData);
        
// //         // ✅ NowPlayingScreen pe navigate karo
// //         navigation.navigate('NowPlayingScreen', { 
// //           songId: song.id,
// //           resetToBeginning: true 
// //         });
// //       } else {
// //         throw new Error('Song info not found');
// //       }
// //     } catch (error) {
// //       console.error('❌ Error playing song from Search:', error);
      
// //       // ✅ Fallback song data
// //       const fallbackSongData = {
// //         id: song.id,
// //         title: song.title || 'Unknown Title',
// //         artist: song.artist?.name || 'Unknown Artist',
// //         audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
// //         artwork: getImageUrl(song.coverImage)
// //       };
      
// //       playSong(fallbackSongData);
// //       navigation.navigate('NowPlayingScreen', { 
// //         songId: song.id,
// //         resetToBeginning: true
// //       });
// //     }
// //   };

// //   // ✅ Artist item press handler
// //   const handleArtistPress = (artist) => {
// //     navigation.navigate('ArtistProfileScreen', { 
// //       artistId: artist.id,
// //       artistName: artist.name 
// //     });
// //   };

// //   // ✅ NEW: Browse Category press handler - MoodSongsScreen open karo
// //   const handleBrowseCategoryPress = (category) => {
// //     console.log('🎵 Browse category pressed:', category);
    
// //     // ✅ MoodSongsScreen mein navigate karo with mood data
// //     navigation.navigate('MoodSongsScreen', {
// //       moodId: category.id,
// //       moodName: category.name,
// //       moodImage: category.image
// //     });
// //   };

// //   // ✅ Render trending artists from API
// //   const renderTrendingArtist = ({ item }) => (
// //     <TouchableOpacity 
// //       style={styles.trendingArtistItem}
// //       onPress={() => handleArtistPress(item)}
// //     >
// //       <View style={styles.artistImageContainer}>
// //         <Image 
// //           source={{ 
// //             uri: getImageUrl(item.image)
// //           }} 
// //           style={styles.artistImage}
// //           resizeMode="cover"
// //         />
// //         {/* Verified Badge */}
// //         <View style={styles.verifiedBadge}>
// //           <Icon name="verified" size={14} color="#1DB954" />
// //         </View>
// //       </View>
// //       <Text style={styles.artistName}>{item.name}</Text>
// //       <Text style={styles.artistType}>Artist</Text>
// //       <Text style={styles.followerCount}>{item.followers} followers</Text>
// //     </TouchableOpacity>
// //   );

// //   // ✅ FIXED: Render browse categories from API - MoodSongsScreen se connect karo
// //   const renderBrowseCategory = ({ item, index }) => (
// //     <TouchableOpacity 
// //       style={[
// //         styles.browseCategory, 
// //         { 
// //           marginRight: index % 2 === 0 ? 8 : 0
// //         }
// //       ]}
// //       onPress={() => handleBrowseCategoryPress(item)}
// //     >
// //       <Image 
// //         source={{ 
// //           uri: getImageUrl(item.image)
// //         }} 
// //         style={styles.browseCategoryImage}
// //         resizeMode="cover"
// //       />
// //       <View style={styles.browseCategoryOverlay} />
// //       <Text style={styles.browseCategoryText}>{item.name}</Text>
// //     </TouchableOpacity>
// //   );

// //   // ✅ Render recent searches
// //   const renderRecentSearch = ({ item }) => (
// //     <TouchableOpacity 
// //       style={styles.recentSearchItem}
// //       onPress={() => setSearchQuery(item.text)}
// //     >
// //       <Icon name="history" size={20} color="#b3b3b3" />
// //       <Text style={styles.recentSearchText}>{item.text}</Text>
// //       <TouchableOpacity 
// //         style={styles.clearIcon}
// //         onPress={() => removeRecentSearch(item.id)}
// //       >
// //         <Icon name="close" size={18} color="#b3b3b3" />
// //       </TouchableOpacity>
// //     </TouchableOpacity>
// //   );

// //   // ✅ FIXED: Render search results - Songs
// //   const renderSongResult = ({ item }) => (
// //     <TouchableOpacity 
// //       style={styles.searchResultItem}
// //       onPress={() => handleSongPress(item)}
// //     >
// //       <Image 
// //         source={{ 
// //           uri: getImageUrl(item.coverImage || item.image)
// //         }} 
// //         style={styles.searchResultImage}
// //         resizeMode="cover"
// //       />
// //       <View style={styles.searchResultInfo}>
// //         <Text style={styles.searchResultTitle}>{item.title}</Text>
// //         {/* ✅ FIX: Artist name properly display karo */}
// //         <Text style={styles.searchResultSubtitle}>
// //           {item.artist?.name || 'Unknown Artist'}
// //         </Text>
// //         <Text style={styles.searchResultMeta}>
// //           {Math.floor((item.duration || 180) / 60)}:{(item.duration || 180) % 60} • {item.playCount || 0} plays
// //         </Text>
// //       </View>
// //       <TouchableOpacity style={styles.moreButton}>
// //         <Icon name="more-vert" size={20} color="#b3b3b3" />
// //       </TouchableOpacity>
// //     </TouchableOpacity>
// //   );

// //   // ✅ Render search results - Artists
// //   const renderArtistResult = ({ item }) => (
// //     <TouchableOpacity 
// //       style={styles.searchResultItem}
// //       onPress={() => handleArtistPress(item)}
// //     >
// //       <Image 
// //         source={{ 
// //           uri: getImageUrl(item.image || item.profilePic)
// //         }} 
// //         style={[styles.searchResultImage, { borderRadius: 25 }]}
// //         resizeMode="cover"
// //       />
// //       <View style={styles.searchResultInfo}>
// //         <Text style={styles.searchResultTitle}>{item.name}</Text>
// //         <Text style={styles.searchResultSubtitle}>Artist</Text>
// //         <Text style={styles.searchResultMeta}>{item.followers || 0} followers</Text>
// //       </View>
// //       <TouchableOpacity style={styles.moreButton}>
// //         <Icon name="more-vert" size={20} color="#b3b3b3" />
// //       </TouchableOpacity>
// //     </TouchableOpacity>
// //   );

// //   return (
// //     <SafeAreaView style={styles.container}>
// //       <StatusBar barStyle="light-content" backgroundColor="#000" />
      
// //       {/* Search Bar */}
// //       <View style={styles.searchContainer}>
// //         <Icon name="search" size={24} color="#000" style={styles.searchIcon} />
// //         <TextInput
// //           style={styles.searchInput}
// //           placeholder="Search songs, artist, album..."
// //           placeholderTextColor="#000"
// //           value={searchQuery}
// //           onChangeText={setSearchQuery}
// //           returnKeyType="search"
// //         />
// //         {isLoading && (
// //           <ActivityIndicator size="small" color="#000" style={styles.loadingIndicator} />
// //         )}
// //       </View>

// //       <ScrollView 
// //         style={styles.scrollView}
// //         showsVerticalScrollIndicator={false}
// //       >
// //         {/* Search Results */}
// //         {searchResults ? (
// //           <View style={styles.section}>
// //             {/* Songs Results */}
// //             {searchResults.results?.songs?.count > 0 && (
// //               <>
// //                 <Text style={styles.resultsSectionTitle}>
// //                   {searchResults.results.songs.title || 'Songs'}
// //                 </Text>
// //                 <FlatList
// //                   data={searchResults.results.songs.items}
// //                   renderItem={renderSongResult}
// //                   keyExtractor={item => `song-${item.id}`}
// //                   scrollEnabled={false}
// //                 />
// //               </>
// //             )}

// //             {/* Artists Results */}
// //             {searchResults.results?.artists?.count > 0 && (
// //               <>
// //                 <Text style={styles.resultsSectionTitle}>
// //                   {searchResults.results.artists.title || 'Artists'}
// //                 </Text>
// //                 <FlatList
// //                   data={searchResults.results.artists.items}
// //                   renderItem={renderArtistResult}
// //                   keyExtractor={item => `artist-${item.id}`}
// //                   scrollEnabled={false}
// //                 />
// //               </>
// //             )}

// //             {/* No Results */}
// //             {searchResults.totalResults === 0 && (
// //               <View style={styles.noResults}>
// //                 <Icon name="search-off" size={64} color="#b3b3b3" />
// //                 <Text style={styles.noResultsText}>No results found for "{searchQuery}"</Text>
// //                 <Text style={styles.noResultsSubtext}>Try searching with different keywords</Text>
// //               </View>
// //             )}
// //           </View>
// //         ) : (
// //           /* Default Search Page */
// //           <>
// //             {/* Recent Searches */}
// //             {recentSearches.length > 0 && (
// //               <View style={styles.section}>
// //                 <View style={styles.sectionHeader}>
// //                   <Text style={styles.sectionTitle}>Recent searches</Text>
// //                   <TouchableOpacity onPress={clearSearchHistory}>
// //                     <Text style={styles.clearAllText}>Clear all</Text>
// //                   </TouchableOpacity>
// //                 </View>
// //                 <FlatList
// //                   data={recentSearches}
// //                   renderItem={renderRecentSearch}
// //                   keyExtractor={item => item.id}
// //                   scrollEnabled={false}
// //                 />
// //               </View>
// //             )}

// //             {/* Trending Artists from API */}
// //             {searchPageData?.trendingArtists && searchPageData.trendingArtists.artists.length > 0 && (
// //               <View style={styles.section}>
// //                 <Text style={styles.sectionTitle}>{searchPageData.trendingArtists.title}</Text>
// //                 <Text style={styles.sectionDescription}>
// //                   {searchPageData.trendingArtists.description}
// //                 </Text>
// //                 <FlatList
// //                   data={searchPageData.trendingArtists.artists}
// //                   renderItem={renderTrendingArtist}
// //                   keyExtractor={item => `trending-${item.id}`}
// //                   horizontal
// //                   showsHorizontalScrollIndicator={false}
// //                   contentContainerStyle={styles.trendingList}
// //                 />
// //               </View>
// //             )}

// //             {/* Browse Categories from API - MOODSONGSSCREEN SE CONNECT */}
// //             {searchPageData?.browseMusic && searchPageData.browseMusic.genres.length > 0 && (
// //               <View style={styles.section}>
// //                 <Text style={styles.sectionTitle}>{searchPageData.browseMusic.title}</Text>
// //                 <Text style={styles.sectionDescription}>
// //                   {searchPageData.browseMusic.description}
// //                 </Text>
// //                 <View style={styles.browseGrid}>
// //                   {searchPageData.browseMusic.genres.map((item, index) => (
// //                     <TouchableOpacity 
// //                       key={`browse-${item.id}`}
// //                       style={[
// //                         styles.browseCategory, 
// //                         { 
// //                           marginRight: index % 2 === 0 ? 8 : 0
// //                         }
// //                       ]}
// //                       onPress={() => handleBrowseCategoryPress(item)}
// //                     >
// //                       <Image 
// //                         source={{ 
// //                           uri: getImageUrl(item.image)
// //                         }} 
// //                         style={styles.browseCategoryImage}
// //                         resizeMode="cover"
// //                       />
// //                       <View style={styles.browseCategoryOverlay} />
// //                       <Text style={styles.browseCategoryText}>{item.name}</Text>
// //                     </TouchableOpacity>
// //                   ))}
// //                 </View>
// //               </View>
// //             )}

// //             {/* Loading State */}
// //             {isLoading && (
// //               <View style={styles.loadingContainer}>
// //                 <ActivityIndicator size="large" color="#1DB954" />
// //                 <Text style={styles.loadingText}>Searching...</Text>
// //               </View>
// //             )}
// //           </>
// //         )}

// //         {/* Bottom Padding */}
// //         <View style={styles.bottomPadding} />
// //       </ScrollView>
// //     </SafeAreaView>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#000',
// //     paddingTop: 16,
// //   },
// //   searchContainer: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     backgroundColor: '#fff',
// //     marginHorizontal: 16,
// //     marginVertical: 16,
// //     borderRadius: 30,
// //     paddingHorizontal: 16,
// //     height: 56,
// //   },
// //   searchIcon: {
// //     marginRight: 12,
// //   },
// //   searchInput: {
// //     flex: 1,
// //     color: '#000',
// //     fontSize: 16,
// //     paddingVertical: 8,
// //   },
// //   loadingIndicator: {
// //     marginLeft: 8,
// //   },
// //   scrollView: {
// //     flex: 1,
// //   },
// //   section: {
// //     marginBottom: 32,
// //     paddingHorizontal: 16,
// //   },
// //   sectionHeader: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     marginBottom: 16,
// //   },
// //   sectionTitle: {
// //     fontSize: 22,
// //     fontWeight: 'bold',
// //     color: '#fff',
// //   },
// //   sectionDescription: {
// //     fontSize: 14,
// //     color: '#b3b3b3',
// //     marginBottom: 16,
// //   },
// //   clearAllText: {
// //     fontSize: 14,
// //     color: '#b3b3b3',
// //     textDecorationLine: 'underline',
// //   },
// //   recentSearchItem: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     paddingVertical: 12,
// //     borderBottomWidth: 1,
// //     borderBottomColor: '#282828',
// //   },
// //   recentSearchText: {
// //     flex: 1,
// //     fontSize: 16,
// //     color: '#fff',
// //     marginLeft: 12,
// //   },
// //   clearIcon: {
// //     padding: 4,
// //   },
// //   trendingList: {
// //     paddingRight: 16,
// //   },
// //   trendingArtistItem: {
// //     alignItems: 'center',
// //     marginRight: 20,
// //     width: 100,
// //   },
// //   artistImageContainer: {
// //     width: 100,
// //     height: 100,
// //     borderRadius: 50,
// //     marginBottom: 8,
// //     position: 'relative',
// //     shadowColor: '#000',
// //     shadowOffset: { width: 0, height: 4 },
// //     shadowOpacity: 0.3,
// //     shadowRadius: 8,
// //     elevation: 8,
// //   },
// //   artistImage: {
// //     width: '100%',
// //     height: '100%',
// //     borderRadius: 50,
// //   },
// //   verifiedBadge: {
// //     position: 'absolute',
// //     bottom: 2,
// //     right: 2,
// //     backgroundColor: '#000',
// //     borderRadius: 10,
// //     padding: 2,
// //   },
// //   artistName: {
// //     fontSize: 14,
// //     fontWeight: 'bold',
// //     color: '#fff',
// //     textAlign: 'center',
// //     marginBottom: 2,
// //   },
// //   artistType: {
// //     fontSize: 12,
// //     color: '#b3b3b3',
// //     textAlign: 'center',
// //   },
// //   followerCount: {
// //     fontSize: 10,
// //     color: '#666',
// //     textAlign: 'center',
// //   },
// //   browseGrid: {
// //     flexDirection: 'row',
// //     flexWrap: 'wrap',
// //     justifyContent: 'space-between',
// //   },
// //   browseCategory: {
// //     width: (width - 48) / 2,
// //     height: 100,
// //     borderRadius: 8,
// //     marginBottom: 12,
// //     overflow: 'hidden',
// //     position: 'relative',
// //   },
// //   browseCategoryImage: {
// //     width: '100%',
// //     height: '100%',
// //     position: 'absolute',
// //   },
// //   browseCategoryOverlay: {
// //     ...StyleSheet.absoluteFillObject,
// //     backgroundColor: 'rgba(0,0,0,0.4)',
// //   },
// //   browseCategoryText: {
// //     fontSize: 16,
// //     fontWeight: 'bold',
// //     color: '#fff',
// //     textAlign: 'center',
// //     position: 'absolute',
// //     top: '50%',
// //     left: 0,
// //     right: 0,
// //     transform: [{ translateY: -10 }],
// //     paddingHorizontal: 8,
// //     textShadowColor: 'rgba(0,0,0,0.8)',
// //     textShadowOffset: { width: 1, height: 1 },
// //     textShadowRadius: 4,
// //   },
// //   // Search Results Styles
// //   resultsSectionTitle: {
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //     color: '#fff',
// //     marginBottom: 16,
// //     marginTop: 8,
// //   },
// //   searchResultItem: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     paddingVertical: 12,
// //     borderBottomWidth: 1,
// //     borderBottomColor: '#282828',
// //   },
// //   searchResultImage: {
// //     width: 50,
// //     height: 50,
// //     borderRadius: 4,
// //     marginRight: 12,
// //   },
// //   searchResultInfo: {
// //     flex: 1,
// //   },
// //   searchResultTitle: {
// //     fontSize: 16,
// //     fontWeight: '600',
// //     color: '#fff',
// //     marginBottom: 4,
// //   },
// //   searchResultSubtitle: {
// //     fontSize: 14,
// //     color: '#b3b3b3',
// //     marginBottom: 2,
// //   },
// //   searchResultMeta: {
// //     fontSize: 12,
// //     color: '#666',
// //   },
// //   moreButton: {
// //     padding: 8,
// //   },
// //   noResults: {
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     paddingVertical: 60,
// //   },
// //   noResultsText: {
// //     fontSize: 18,
// //     color: '#fff',
// //     fontWeight: 'bold',
// //     marginTop: 16,
// //     marginBottom: 8,
// //     textAlign: 'center',
// //   },
// //   noResultsSubtext: {
// //     fontSize: 14,
// //     color: '#b3b3b3',
// //     textAlign: 'center',
// //   },
// //   loadingContainer: {
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     paddingVertical: 40,
// //   },
// //   loadingText: {
// //     fontSize: 16,
// //     color: '#b3b3b3',
// //     marginTop: 12,
// //   },
// //   bottomPadding: {
// //     height: 20,
// //   },
// // });

// // export default SearchScreen;

// // src/screens/SearchScreen.js - FIXED VERSION
// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   StatusBar,
//   SafeAreaView,
//   ScrollView,
//   FlatList,
//   Dimensions,
//   Image,
//   ActivityIndicator
// } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import { useNavigation } from '@react-navigation/native';
// import { getDataWithToken, postDataWithToken } from '../Services/mobile-api';
// import { mobile_siteConfig } from '../Services/mobile-siteConfig';
// import { useAudio } from '../contexts/AudioContext';

// const { width } = Dimensions.get('window');

// // ✅ IMAGE URL HELPER FUNCTION
// const getImageUrl = (imagePath) => {
//   if (!imagePath || imagePath === 'null' || imagePath === 'undefined') {
//     return 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop';
//   }
  
//   if (imagePath.startsWith('http')) {
//     return imagePath;
//   }
  
//   if (imagePath.startsWith('/')) {
//     return `${mobile_siteConfig.IMAGE_BASE_URL}${imagePath}`;
//   }
  
//   return 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop';
// };

// const SearchScreen = () => {
//   const navigation = useNavigation();
//   const [searchQuery, setSearchQuery] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [searchResults, setSearchResults] = useState(null);
//   const [searchPageData, setSearchPageData] = useState(null);
//   const [recentSearches, setRecentSearches] = useState([]);

//   // ✅ Audio Context
//   const { playSong } = useAudio();

//   // ✅ Search page data fetch karo (on component mount)
//   useEffect(() => {
//     fetchSearchPageData();
//   }, []);

//   // ✅ Search page data API
//   const fetchSearchPageData = async () => {
//     try {
//       setIsLoading(true);
//       const response = await getDataWithToken('user/search');
      
//       if (response && response.success) {
//         setSearchPageData(response.data);
//         console.log('✅ Search page data loaded:', response.data);
//       } else {
//         console.log('❌ Failed to fetch search page data');
//       }
//     } catch (error) {
//       console.error('❌ Search page data error:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // ✅ Search API call
//   const handleSearch = async (query) => {
//     if (!query.trim()) {
//       setSearchResults(null);
//       return;
//     }

//     try {
//       setIsLoading(true);
//       const response = await postDataWithToken(
//         { query: query.trim(), type: 'all' },
//         'user/search'
//       );
      
//       if (response && response.success) {
//         setSearchResults(response.data);
        
//         // Recent searches mein add karo (unique)
//         if (!recentSearches.find(item => item.text.toLowerCase() === query.toLowerCase())) {
//           setRecentSearches(prev => [
//             { id: Date.now().toString(), text: query.trim() },
//             ...prev.slice(0, 4) // Max 5 recent searches
//           ]);
//         }
        
//         console.log('✅ Search results:', JSON.stringify(response.data, null, 2));
//       } else {
//         console.log('❌ Search failed');
//       }
//     } catch (error) {
//       console.error('❌ Search error:', error);
//       setSearchResults(null);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // ✅ Search query change handler with debounce
//   useEffect(() => {
//     const timeoutId = setTimeout(() => {
//       if (searchQuery.trim()) {
//         handleSearch(searchQuery);
//       } else {
//         setSearchResults(null);
//       }
//     }, 500); // 500ms debounce

//     return () => clearTimeout(timeoutId);
//   }, [searchQuery]);

//   // ✅ Clear search history
//   const clearSearchHistory = () => {
//     setRecentSearches([]);
//   };

//   // ✅ Remove single recent search
//   const removeRecentSearch = (id) => {
//     setRecentSearches(recentSearches.filter(item => item.id !== id));
//   };

//   // ✅ FIXED: Song item press handler - PROPER DATA PASS KARO
//   // const handleSongPress = async (song) => {
//   //   console.log('🎵 Song pressed from Search:', song);
    
//   //   try {
//   //     // ✅ Pehle song info fetch karo
//   //     const songInfo = await getDataWithToken(`user/song/${song.id}/info`);
//   //     console.log('🎵 Song Info from Search:', songInfo);
      
//   //     if (songInfo && songInfo.success) {
//   //       // ✅ CORRECT DATA STRUCTURE BANAO
//   //       const songData = {
//   //         id: song.id,
//   //         title: song.title || 'Unknown Title',
//   //         // ✅ FIX: Artist name properly extract karo
//   //         artist: song.artist?.name || song.artist?.stageName || 'Unknown Artist',
//   //         audioUrl: songInfo.song?.audioFile 
//   //           ? `${mobile_siteConfig.IMAGE_BASE_URL}${songInfo.song.audioFile}`
//   //           : 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
//   //         // ✅ FIX: Image properly set karo
//   //         artwork: getImageUrl(song.coverImage || song.image || songInfo.song?.thumbnail)
//   //       };
        
//   //       console.log('🎵 Playing song data from Search:', songData);
        
//   //       // ✅ Global context mein play karo
//   //       playSong(songData);
        
//   //       // ✅ NowPlayingScreen pe navigate karo
//   //       navigation.navigate('NowPlayingScreen', { 
//   //         songId: song.id,
//   //         resetToBeginning: true 
//   //       });
//   //     } else {
//   //       throw new Error('Song info not found');
//   //     }
//   //   } catch (error) {
//   //     console.error('❌ Error playing song from Search:', error);
      
//   //     // ✅ Fallback song data
//   //     const fallbackSongData = {
//   //       id: song.id,
//   //       title: song.title || 'Unknown Title',
//   //       // ✅ FIX: Artist name properly extract karo
//   //       artist: song.artist?.name || song.artist?.stageName || 'Unknown Artist',
//   //       audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
//   //       // ✅ FIX: Image properly set karo
//   //       artwork: getImageUrl(song.coverImage || song.image)
//   //     };
      
//   //     playSong(fallbackSongData);
//   //     navigation.navigate('NowPlayingScreen', { 
//   //       songId: song.id,
//   //       resetToBeginning: true
//   //     });
//   //   }
//   // };
//   // ✅ FIXED: Song item press handler - PROPER DATA PASS KARO
// const handleSongPress = async (song) => {
//   console.log('🎵 Song pressed from Search:', song);
  
//   try {
//     // ✅ Pehle song info fetch karo
//     const songInfo = await getDataWithToken(`user/song/${song.id}/info`);
//     console.log('🎵 Song Info from Search:', songInfo);
    
//     if (songInfo && songInfo.success) {
//       // ✅ FIX: Artist name properly extract karo (same logic as above)
//       let artistName = 'Unknown Artist';
//       if (song.artist && typeof song.artist === 'object') {
//         artistName = song.artist.name || 'Unknown Artist';
//       } else if (song.artist && typeof song.artist === 'string') {
//         artistName = song.artist;
//       } else if (song.artistName) {
//         artistName = song.artistName;
//       }

//       // ✅ CORRECT DATA STRUCTURE BANAO
//       const songData = {
//         id: song.id,
//         title: song.title || 'Unknown Title',
//         artist: artistName,
//         audioUrl: songInfo.song?.audioFile 
//           ? `${mobile_siteConfig.IMAGE_BASE_URL}${songInfo.song.audioFile}`
//           : 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
//         // ✅ FIX: Image properly set karo
//         artwork: getImageUrl(song.coverImage || song.image || songInfo.song?.thumbnail)
//       };
      
//       console.log('🎵 Playing song data from Search:', songData);
      
//       // ✅ Global context mein play karo
//       playSong(songData);
      
//       // ✅ NowPlayingScreen pe navigate karo
//       navigation.navigate('NowPlayingScreen', { 
//         songId: song.id,
//         resetToBeginning: true 
//       });
//     } else {
//       throw new Error('Song info not found');
//     }
//   } catch (error) {
//     console.error('❌ Error playing song from Search:', error);
    
//     // ✅ Fallback song data with same artist name logic
//     let artistName = 'Unknown Artist';
//     if (song.artist && typeof song.artist === 'object') {
//       artistName = song.artist.name || 'Unknown Artist';
//     } else if (song.artist && typeof song.artist === 'string') {
//       artistName = song.artist;
//     } else if (song.artistName) {
//       artistName = song.artistName;
//     }

//     const fallbackSongData = {
//       id: song.id,
//       title: song.title || 'Unknown Title',
//       artist: artistName,
//       audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
//       artwork: getImageUrl(song.coverImage || song.image)
//     };
    
//     playSong(fallbackSongData);
//     navigation.navigate('NowPlayingScreen', { 
//       songId: song.id,
//       resetToBeginning: true
//     });
//   }
// };

//   // ✅ Artist item press handler
//   const handleArtistPress = (artist) => {
//     navigation.navigate('ArtistProfileScreen', { 
//       artistId: artist.id,
//       artistName: artist.name 
//     });
//   };

//   // ✅ NEW: Browse Category press handler - MoodSongsScreen open karo
//   const handleBrowseCategoryPress = (category) => {
//     console.log('🎵 Browse category pressed:', category);
    
//     // ✅ MoodSongsScreen mein navigate karo with mood data
//     navigation.navigate('MoodSongsScreen', {
//       moodId: category.id,
//       moodName: category.name,
//       moodImage: category.image
//     });
//   };

//   // ✅ Render trending artists from API
//   const renderTrendingArtist = ({ item }) => (
//     <TouchableOpacity 
//       style={styles.trendingArtistItem}
//       onPress={() => handleArtistPress(item)}
//     >
//       <View style={styles.artistImageContainer}>
//         <Image 
//           source={{ 
//             uri: getImageUrl(item.image)
//           }} 
//           style={styles.artistImage}
//           resizeMode="cover"
//         />
//         {/* Verified Badge */}
//         <View style={styles.verifiedBadge}>
//           <Icon name="verified" size={14} color="#1DB954" />
//         </View>
//       </View>
//       <Text style={styles.artistName}>{item.name}</Text>
//       <Text style={styles.artistType}>Artist</Text>
//       <Text style={styles.followerCount}>{item.followers} followers</Text>
//     </TouchableOpacity>
//   );

//   // ✅ FIXED: Render browse categories from API - MoodSongsScreen se connect karo
//   const renderBrowseCategory = ({ item, index }) => (
//     <TouchableOpacity 
//       style={[
//         styles.browseCategory, 
//         { 
//           marginRight: index % 2 === 0 ? 8 : 0
//         }
//       ]}
//       onPress={() => handleBrowseCategoryPress(item)}
//     >
//       <Image 
//         source={{ 
//           uri: getImageUrl(item.image)
//         }} 
//         style={styles.browseCategoryImage}
//         resizeMode="cover"
//       />
//       <View style={styles.browseCategoryOverlay} />
//       <Text style={styles.browseCategoryText}>{item.name}</Text>
//     </TouchableOpacity>
//   );

//   // ✅ Render recent searches
//   const renderRecentSearch = ({ item }) => (
//     <TouchableOpacity 
//       style={styles.recentSearchItem}
//       onPress={() => setSearchQuery(item.text)}
//     >
//       <Icon name="history" size={20} color="#b3b3b3" />
//       <Text style={styles.recentSearchText}>{item.text}</Text>
//       <TouchableOpacity 
//         style={styles.clearIcon}
//         onPress={() => removeRecentSearch(item.id)}
//       >
//         <Icon name="close" size={18} color="#b3b3b3" />
//       </TouchableOpacity>
//     </TouchableOpacity>
//   );

//   // ✅ FIXED: Render search results - Songs
//   // const renderSongResult = ({ item }) => {
//   //   console.log('🎵 Rendering song result:', item);
    
//   //   // ✅ FIX: Artist name properly extract karo
//   //   const artistName = item.artist?.name || item.artist?.stageName || 'Unknown Artist';
//   //   // ✅ FIX: Image properly set karo
//   //   const songImage = getImageUrl(item.coverImage || item.image);

//   //   return (
//   //     <TouchableOpacity 
//   //       style={styles.searchResultItem}
//   //       onPress={() => handleSongPress(item)}
//   //     >
//   //       <Image 
//   //         source={{ uri: songImage }} 
//   //         style={styles.searchResultImage}
//   //         resizeMode="cover"
//   //         defaultSource={{ uri: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop' }}
//   //       />
//   //       <View style={styles.searchResultInfo}>
//   //         <Text style={styles.searchResultTitle}>{item.title}</Text>
//   //         {/* ✅ FIX: Artist name properly display karo */}
//   //         <Text style={styles.searchResultSubtitle}>
//   //           {artistName}
//   //         </Text>
//   //         <Text style={styles.searchResultMeta}>
//   //           {Math.floor((item.duration || 180) / 60)}:{(item.duration || 180) % 60} • {item.playCount || 0} plays
//   //         </Text>
//   //       </View>
//   //       <TouchableOpacity style={styles.moreButton}>
//   //         <Icon name="more-vert" size={20} color="#b3b3b3" />
//   //       </TouchableOpacity>
//   //     </TouchableOpacity>
//   //   );
//   // };

//   // ✅ FIXED: Render search results - Songs
// const renderSongResult = ({ item }) => {
//   console.log('🎵 Rendering song result:', item);
  
//   // ✅ DEBUG: Check kya aa raha hai artist field mein
//   console.log('🎵 Artist data:', {
//     artist: item.artist,
//     artistType: typeof item.artist,
//     hasName: item.artist?.name,
//     hasStageName: item.artist?.stageName,
//     fullItem: item
//   });

//   // ✅ FIX: Artist name properly extract karo - MULTIPLE WAYS TRY KARO
//   let artistName = 'Unknown Artist';
  
//   if (item.artist) {
//     if (typeof item.artist === 'object') {
//       // Agar artist object hai
//       artistName = item.artist.name || item.artist.stageName || 'Unknown Artist';
//     } else if (typeof item.artist === 'string') {
//       // Agar artist directly string hai
//       artistName = item.artist;
//     }
//   }
  
//   // ✅ ALTERNATIVE: Agar artist field hi nahi hai to koi aur field check karo
//   if (artistName === 'Unknown Artist') {
//     if (item.artistName) {
//       artistName = item.artistName;
//     } else if (item.singer) {
//       artistName = item.singer;
//     } else if (item.artist_name) {
//       artistName = item.artist_name;
//     }
//   }

//   // ✅ FIX: Image properly set karo
//   const songImage = getImageUrl(item.coverImage || item.image || item.thumbnail);

//   return (
//     <TouchableOpacity 
//       style={styles.searchResultItem}
//       onPress={() => handleSongPress(item)}
//     >
//       <Image 
//         source={{ uri: songImage }} 
//         style={styles.searchResultImage}
//         resizeMode="cover"
//         defaultSource={{ uri: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop' }}
//       />
//       <View style={styles.searchResultInfo}>
//         <Text style={styles.searchResultTitle}>{item.title}</Text>
//         {/* ✅ FIX: Artist name properly display karo */}
//         <Text style={styles.searchResultSubtitle}>
//           {artistName}
//         </Text>
//         <Text style={styles.searchResultMeta}>
//           {Math.floor((item.duration || 180) / 60)}:{(item.duration || 180) % 60} • {item.playCount || 0} plays
//         </Text>
//       </View>
//       <TouchableOpacity style={styles.moreButton}>
//         <Icon name="more-vert" size={20} color="#b3b3b3" />
//       </TouchableOpacity>
//     </TouchableOpacity>
//   );
// };

//   // ✅ Render search results - Artists
//   const renderArtistResult = ({ item }) => (
//     <TouchableOpacity 
//       style={styles.searchResultItem}
//       onPress={() => handleArtistPress(item)}
//     >
//       <Image 
//         source={{ 
//           uri: getImageUrl(item.image || item.profilePic)
//         }} 
//         style={[styles.searchResultImage, { borderRadius: 25 }]}
//         resizeMode="cover"
//       />
//       <View style={styles.searchResultInfo}>
//         <Text style={styles.searchResultTitle}>{item.name}</Text>
//         <Text style={styles.searchResultSubtitle}>Artist</Text>
//         <Text style={styles.searchResultMeta}>{item.followers || 0} followers</Text>
//       </View>
//       <TouchableOpacity style={styles.moreButton}>
//         <Icon name="more-vert" size={20} color="#b3b3b3" />
//       </TouchableOpacity>
//     </TouchableOpacity>
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="light-content" backgroundColor="#000" />
      
//       {/* Search Bar */}
//       <View style={styles.searchContainer}>
//         <Icon name="search" size={24} color="#000" style={styles.searchIcon} />
//         <TextInput
//           style={styles.searchInput}
//           placeholder="Search songs, artist, album..."
//           placeholderTextColor="#000"
//           value={searchQuery}
//           onChangeText={setSearchQuery}
//           returnKeyType="search"
//         />
//         {isLoading && (
//           <ActivityIndicator size="small" color="#000" style={styles.loadingIndicator} />
//         )}
//       </View>

//       <ScrollView 
//         style={styles.scrollView}
//         showsVerticalScrollIndicator={false}
//       >
//         {/* Search Results */}
//         {searchResults ? (
//           <View style={styles.section}>
//             {/* Songs Results */}
//             {searchResults.results?.songs?.count > 0 && (
//               <>
//                 <Text style={styles.resultsSectionTitle}>
//                   {searchResults.results.songs.title || 'Songs'}
//                 </Text>
//                 <FlatList
//                   data={searchResults.results.songs.items}
//                   renderItem={renderSongResult}
//                   keyExtractor={item => `song-${item.id}`}
//                   scrollEnabled={false}
//                 />
//               </>
//             )}

//             {/* Artists Results */}
//             {searchResults.results?.artists?.count > 0 && (
//               <>
//                 <Text style={styles.resultsSectionTitle}>
//                   {searchResults.results.artists.title || 'Artists'}
//                 </Text>
//                 <FlatList
//                   data={searchResults.results.artists.items}
//                   renderItem={renderArtistResult}
//                   keyExtractor={item => `artist-${item.id}`}
//                   scrollEnabled={false}
//                 />
//               </>
//             )}

//             {/* No Results */}
//             {searchResults.totalResults === 0 && (
//               <View style={styles.noResults}>
//                 <Icon name="search-off" size={64} color="#b3b3b3" />
//                 <Text style={styles.noResultsText}>No results found for "{searchQuery}"</Text>
//                 <Text style={styles.noResultsSubtext}>Try searching with different keywords</Text>
//               </View>
//             )}
//           </View>
//         ) : (
//           /* Default Search Page */
//           <>
//             {/* Recent Searches */}
//             {recentSearches.length > 0 && (
//               <View style={styles.section}>
//                 <View style={styles.sectionHeader}>
//                   <Text style={styles.sectionTitle}>Recent searches</Text>
//                   <TouchableOpacity onPress={clearSearchHistory}>
//                     <Text style={styles.clearAllText}>Clear all</Text>
//                   </TouchableOpacity>
//                 </View>
//                 <FlatList
//                   data={recentSearches}
//                   renderItem={renderRecentSearch}
//                   keyExtractor={item => item.id}
//                   scrollEnabled={false}
//                 />
//               </View>
//             )}

//             {/* Trending Artists from API */}
//             {searchPageData?.trendingArtists && searchPageData.trendingArtists.artists.length > 0 && (
//               <View style={styles.section}>
//                 <Text style={styles.sectionTitle}>{searchPageData.trendingArtists.title}</Text>
//                 <Text style={styles.sectionDescription}>
//                   {searchPageData.trendingArtists.description}
//                 </Text>
//                 <FlatList
//                   data={searchPageData.trendingArtists.artists}
//                   renderItem={renderTrendingArtist}
//                   keyExtractor={item => `trending-${item.id}`}
//                   horizontal
//                   showsHorizontalScrollIndicator={false}
//                   contentContainerStyle={styles.trendingList}
//                 />
//               </View>
//             )}

//             {/* Browse Categories from API - MOODSONGSSCREEN SE CONNECT */}
//             {searchPageData?.browseMusic && searchPageData.browseMusic.genres.length > 0 && (
//               <View style={styles.section}>
//                 <Text style={styles.sectionTitle}>{searchPageData.browseMusic.title}</Text>
//                 <Text style={styles.sectionDescription}>
//                   {searchPageData.browseMusic.description}
//                 </Text>
//                 <View style={styles.browseGrid}>
//                   {searchPageData.browseMusic.genres.map((item, index) => (
//                     <TouchableOpacity 
//                       key={`browse-${item.id}`}
//                       style={[
//                         styles.browseCategory, 
//                         { 
//                           marginRight: index % 2 === 0 ? 8 : 0
//                         }
//                       ]}
//                       onPress={() => handleBrowseCategoryPress(item)}
//                     >
//                       <Image 
//                         source={{ 
//                           uri: getImageUrl(item.image)
//                         }} 
//                         style={styles.browseCategoryImage}
//                         resizeMode="cover"
//                       />
//                       <View style={styles.browseCategoryOverlay} />
//                       <Text style={styles.browseCategoryText}>{item.name}</Text>
//                     </TouchableOpacity>
//                   ))}
//                 </View>
//               </View>
//             )}

//             {/* Loading State */}
//             {isLoading && (
//               <View style={styles.loadingContainer}>
//                 <ActivityIndicator size="large" color="#1DB954" />
//                 <Text style={styles.loadingText}>Searching...</Text>
//               </View>
//             )}
//           </>
//         )}

//         {/* Bottom Padding */}
//         <View style={styles.bottomPadding} />
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// // Styles same rahenge...
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//     paddingTop: 16,
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     marginHorizontal: 16,
//     marginVertical: 16,
//     borderRadius: 30,
//     paddingHorizontal: 16,
//     height: 56,
//   },
//   searchIcon: {
//     marginRight: 12,
//   },
//   searchInput: {
//     flex: 1,
//     color: '#000',
//     fontSize: 16,
//     paddingVertical: 8,
//   },
//   loadingIndicator: {
//     marginLeft: 8,
//   },
//   scrollView: {
//     flex: 1,
//   },
//   section: {
//     marginBottom: 32,
//     paddingHorizontal: 16,
//   },
//   sectionHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   sectionTitle: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#fff',
//   },
//   sectionDescription: {
//     fontSize: 14,
//     color: '#b3b3b3',
//     marginBottom: 16,
//   },
//   clearAllText: {
//     fontSize: 14,
//     color: '#b3b3b3',
//     textDecorationLine: 'underline',
//   },
//   recentSearchItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 12,
//     borderBottomWidth: 1,
//     borderBottomColor: '#282828',
//   },
//   recentSearchText: {
//     flex: 1,
//     fontSize: 16,
//     color: '#fff',
//     marginLeft: 12,
//   },
//   clearIcon: {
//     padding: 4,
//   },
//   trendingList: {
//     paddingRight: 16,
//   },
//   trendingArtistItem: {
//     alignItems: 'center',
//     marginRight: 20,
//     width: 100,
//   },
//   artistImageContainer: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     marginBottom: 8,
//     position: 'relative',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     elevation: 8,
//   },
//   artistImage: {
//     width: '100%',
//     height: '100%',
//     borderRadius: 50,
//   },
//   verifiedBadge: {
//     position: 'absolute',
//     bottom: 2,
//     right: 2,
//     backgroundColor: '#000',
//     borderRadius: 10,
//     padding: 2,
//   },
//   artistName: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: '#fff',
//     textAlign: 'center',
//     marginBottom: 2,
//   },
//   artistType: {
//     fontSize: 12,
//     color: '#b3b3b3',
//     textAlign: 'center',
//   },
//   followerCount: {
//     fontSize: 10,
//     color: '#666',
//     textAlign: 'center',
//   },
//   browseGrid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//   },
//   browseCategory: {
//     width: (width - 48) / 2,
//     height: 100,
//     borderRadius: 8,
//     marginBottom: 12,
//     overflow: 'hidden',
//     position: 'relative',
//   },
//   browseCategoryImage: {
//     width: '100%',
//     height: '100%',
//     position: 'absolute',
//   },
//   browseCategoryOverlay: {
//     ...StyleSheet.absoluteFillObject,
//     backgroundColor: 'rgba(0,0,0,0.4)',
//   },
//   browseCategoryText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#fff',
//     textAlign: 'center',
//     position: 'absolute',
//     top: '50%',
//     left: 0,
//     right: 0,
//     transform: [{ translateY: -10 }],
//     paddingHorizontal: 8,
//     textShadowColor: 'rgba(0,0,0,0.8)',
//     textShadowOffset: { width: 1, height: 1 },
//     textShadowRadius: 4,
//   },
//   // Search Results Styles
//   resultsSectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#fff',
//     marginBottom: 16,
//     marginTop: 8,
//   },
//   searchResultItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 12,
//     borderBottomWidth: 1,
//     borderBottomColor: '#282828',
//   },
//   searchResultImage: {
//     width: 50,
//     height: 50,
//     borderRadius: 4,
//     marginRight: 12,
//   },
//   searchResultInfo: {
//     flex: 1,
//   },
//   searchResultTitle: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#fff',
//     marginBottom: 4,
//   },
//   searchResultSubtitle: {
//     fontSize: 14,
//     color: '#b3b3b3',
//     marginBottom: 2,
//   },
//   searchResultMeta: {
//     fontSize: 12,
//     color: '#666',
//   },
//   moreButton: {
//     padding: 8,
//   },
//   noResults: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 60,
//   },
//   noResultsText: {
//     fontSize: 18,
//     color: '#fff',
//     fontWeight: 'bold',
//     marginTop: 16,
//     marginBottom: 8,
//     textAlign: 'center',
//   },
//   noResultsSubtext: {
//     fontSize: 14,
//     color: '#b3b3b3',
//     textAlign: 'center',
//   },
//   loadingContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 40,
//   },
//   loadingText: {
//     fontSize: 16,
//     color: '#b3b3b3',
//     marginTop: 12,
//   },
//   bottomPadding: {
//     height: 20,
//   },
// });

// export default SearchScreen;


// src/screens/SearchScreen.js - UPDATED WITH FOLLOW BUTTON
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ScrollView,
  FlatList,
  Dimensions,
  Image,
  ActivityIndicator,
  Alert
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { getDataWithToken, postDataWithToken } from '../Services/mobile-api';
import { mobile_siteConfig } from '../Services/mobile-siteConfig';
import { useAudio } from '../contexts/AudioContext';
import { followArtist, unfollowArtist } from '../Services/mobile-api';

const { width } = Dimensions.get('window');

// ✅ IMAGE URL HELPER FUNCTION
const getImageUrl = (imagePath) => {
  if (!imagePath || imagePath === 'null' || imagePath === 'undefined') {
    return 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop';
  }
  
  if (imagePath.startsWith('http')) {
    return imagePath;
  }
  
  if (imagePath.startsWith('/')) {
    return `${mobile_siteConfig.IMAGE_BASE_URL}${imagePath}`;
  }
  
  return 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop';
};

const SearchScreen = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState(null);
  const [searchPageData, setSearchPageData] = useState(null);
  const [recentSearches, setRecentSearches] = useState([]);
  const [followLoading, setFollowLoading] = useState({}); // Track follow loading per artist

  // ✅ Audio Context
  const { playSong } = useAudio();

  // ✅ Search page data fetch karo (on component mount)
  useEffect(() => {
    fetchSearchPageData();
  }, []);

  // ✅ Search page data API
  const fetchSearchPageData = async () => {
    try {
      setIsLoading(true);
      const response = await getDataWithToken('user/search');
      
      if (response && response.success) {
        setSearchPageData(response.data);
        console.log('✅ Search page data loaded:', response.data);
      } else {
        console.log('❌ Failed to fetch search page data');
      }
    } catch (error) {
      console.error('❌ Search page data error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // ✅ Search API call
  const handleSearch = async (query) => {
    if (!query.trim()) {
      setSearchResults(null);
      return;
    }

    try {
      setIsLoading(true);
      const response = await postDataWithToken(
        { query: query.trim(), type: 'all' },
        'user/search'
      );
      
      if (response && response.success) {
        setSearchResults(response.data);
        
        // Recent searches mein add karo (unique)
        if (!recentSearches.find(item => item.text.toLowerCase() === query.toLowerCase())) {
          setRecentSearches(prev => [
            { id: Date.now().toString(), text: query.trim() },
            ...prev.slice(0, 4) // Max 5 recent searches
          ]);
        }
        
        console.log('✅ Search results:', JSON.stringify(response.data, null, 2));
      } else {
        console.log('❌ Search failed');
      }
    } catch (error) {
      console.error('❌ Search error:', error);
      setSearchResults(null);
    } finally {
      setIsLoading(false);
    }
  };

  // ✅ Search query change handler with debounce
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchQuery.trim()) {
        handleSearch(searchQuery);
      } else {
        setSearchResults(null);
      }
    }, 500); // 500ms debounce

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  // ✅ Clear search history
  const clearSearchHistory = () => {
    setRecentSearches([]);
  };

  // ✅ Remove single recent search
  const removeRecentSearch = (id) => {
    setRecentSearches(recentSearches.filter(item => item.id !== id));
  };

  // ✅ FIXED: Song item press handler - PROPER DATA PASS KARO
  const handleSongPress = async (song) => {
    console.log('🎵 Song pressed from Search:', song);
    
    try {
      // ✅ Pehle song info fetch karo
      const songInfo = await getDataWithToken(`user/song/${song.id}/info`);
      console.log('🎵 Song Info from Search:', songInfo);
      
      if (songInfo && songInfo.success) {
        // ✅ FIX: Artist name properly extract karo (same logic as above)
        let artistName = 'Unknown Artist';
        if (song.artist && typeof song.artist === 'object') {
          artistName = song.artist.name || 'Unknown Artist';
        } else if (song.artist && typeof song.artist === 'string') {
          artistName = song.artist;
        } else if (song.artistName) {
          artistName = song.artistName;
        }

        // ✅ CORRECT DATA STRUCTURE BANAO
        const songData = {
          id: song.id,
          title: song.title || 'Unknown Title',
          artist: artistName,
          audioUrl: songInfo.song?.audioFile 
            ? `${mobile_siteConfig.IMAGE_BASE_URL}${songInfo.song.audioFile}`
            : 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
          // ✅ FIX: Image properly set karo
          artwork: getImageUrl(song.coverImage || song.image || songInfo.song?.thumbnail)
        };
        
        console.log('🎵 Playing song data from Search:', songData);
        
        // ✅ Global context mein play karo
        playSong(songData);
        
        // ✅ NowPlayingScreen pe navigate karo
        navigation.navigate('NowPlayingScreen', { 
          songId: song.id,
          resetToBeginning: true 
        });
      } else {
        throw new Error('Song info not found');
      }
    } catch (error) {
      console.error('❌ Error playing song from Search:', error);
      
      // ✅ Fallback song data with same artist name logic
      let artistName = 'Unknown Artist';
      if (song.artist && typeof song.artist === 'object') {
        artistName = song.artist.name || 'Unknown Artist';
      } else if (song.artist && typeof song.artist === 'string') {
        artistName = song.artist;
      } else if (song.artistName) {
        artistName = song.artistName;
      }

      const fallbackSongData = {
        id: song.id,
        title: song.title || 'Unknown Title',
        artist: artistName,
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
        artwork: getImageUrl(song.coverImage || song.image)
      };
      
      playSong(fallbackSongData);
      navigation.navigate('NowPlayingScreen', { 
        songId: song.id,
        resetToBeginning: true
      });
    }
  };

  // ✅ Artist item press handler
  const handleArtistPress = (artist) => {
    navigation.navigate('ArtistProfileScreen', { 
      artistId: artist.id,
      artistName: artist.name 
    });
  };

  // ✅ NEW: Follow/Unfollow Artist Handler
  const handleFollowToggle = async (artist) => {
    if (followLoading[artist.id]) return;
    
    try {
      setFollowLoading(prev => ({ ...prev, [artist.id]: true }));
      
      const artistId = artist.id;
      const isCurrentlyFollowing = artist.isFollowing || false;

      if (isCurrentlyFollowing) {
        // Unfollow artist
        console.log('👤 Unfollowing artist from Search:', artistId);
        const response = await unfollowArtist(artistId);
        
        if (response.success) {
          // ✅ Update local state
          updateArtistFollowStatus(artistId, false);
          console.log('✅ Artist unfollowed successfully from Search');
        } else {
          Alert.alert('Error', response.message || 'Failed to unfollow artist');
        }
      } else {
        // Follow artist
        console.log('👤 Following artist from Search:', artistId);
        const response = await followArtist(artistId);
        
        if (response.success) {
          // ✅ Update local state
          updateArtistFollowStatus(artistId, true);
          console.log('✅ Artist followed successfully from Search');
        } else {
          Alert.alert('Error', response.message || 'Failed to follow artist');
        }
      }
    } catch (error) {
      console.error('❌ Follow toggle error in Search:', error);
      Alert.alert('Error', 'Something went wrong');
    } finally {
      setFollowLoading(prev => ({ ...prev, [artist.id]: false }));
    }
  };

  // ✅ Helper function to update artist follow status in all states
  const updateArtistFollowStatus = (artistId, isFollowing) => {
    // Update in search results
    if (searchResults?.results?.artists?.items) {
      setSearchResults(prev => ({
        ...prev,
        results: {
          ...prev.results,
          artists: {
            ...prev.results.artists,
            items: prev.results.artists.items.map(artist =>
              artist.id === artistId ? { ...artist, isFollowing } : artist
            )
          }
        }
      }));
    }

    // Update in trending artists
    if (searchPageData?.trendingArtists?.artists) {
      setSearchPageData(prev => ({
        ...prev,
        trendingArtists: {
          ...prev.trendingArtists,
          artists: prev.trendingArtists.artists.map(artist =>
            artist.id === artistId ? { ...artist, isFollowing } : artist
          )
        }
      }));
    }
  };

  // ✅ NEW: Browse Category press handler - MoodSongsScreen open karo
  const handleBrowseCategoryPress = (category) => {
    console.log('🎵 Browse category pressed:', category);
    
    // ✅ MoodSongsScreen mein navigate karo with mood data
    navigation.navigate('MoodSongsScreen', {
      moodId: category.id,
      moodName: category.name,
      moodImage: category.image
    });
  };

  // ✅ Render trending artists from API - WITH FOLLOW BUTTON
  const renderTrendingArtist = ({ item }) => (
    <TouchableOpacity 
      style={styles.trendingArtistItem}
      onPress={() => handleArtistPress(item)}
    >
      <View style={styles.artistImageContainer}>
        <Image 
          source={{ 
            uri: getImageUrl(item.image)
          }} 
          style={styles.artistImage}
          resizeMode="cover"
        />
        {/* Verified Badge */}
        {item.isVerified && (
          <View style={styles.verifiedBadge}>
            <Ionicons name="checkmark-circle" size={14} color="#1DB954" />
          </View>
        )}
      </View>
      <Text style={styles.artistName}>{item.name}</Text>
      <Text style={styles.artistType}>Artist</Text>
      
      {/* ✅ FOLLOW BUTTON FOR TRENDING ARTISTS 
      <TouchableOpacity 
        style={[
          styles.followButton,
          item.isFollowing ? styles.followingButton : styles.notFollowingButton
        ]}
        onPress={(e) => {
          e.stopPropagation(); // Prevent artist press
          handleFollowToggle(item);
        }}
        disabled={followLoading[item.id]}
      >
        {followLoading[item.id] ? (
          <ActivityIndicator size="small" color={item.isFollowing ? "#FF0000" : "#fff"} />
        ) : (
          <Text style={[
            styles.followButtonText,
            item.isFollowing ? styles.followingButtonText : styles.notFollowingButtonText
          ]}>
            {item.isFollowing ? 'Following' : 'Follow'}
          </Text>
        )}
      </TouchableOpacity>  */}
    
    </TouchableOpacity>
  );

  // ✅ FIXED: Render browse categories from API - MoodSongsScreen se connect karo
  const renderBrowseCategory = ({ item, index }) => (
    <TouchableOpacity 
      style={[
        styles.browseCategory, 
        { 
          marginRight: index % 2 === 0 ? 8 : 0
        }
      ]}
      onPress={() => handleBrowseCategoryPress(item)}
    >
      <Image 
        source={{ 
          uri: getImageUrl(item.image)
        }} 
        style={styles.browseCategoryImage}
        resizeMode="cover"
      />
      <View style={styles.browseCategoryOverlay} />
      <Text style={styles.browseCategoryText}>{item.name}</Text>
    </TouchableOpacity>
  );

  // ✅ Render recent searches
  const renderRecentSearch = ({ item }) => (
    <TouchableOpacity 
      style={styles.recentSearchItem}
      onPress={() => setSearchQuery(item.text)}
    >
      <Icon name="history" size={20} color="#b3b3b3" />
      <Text style={styles.recentSearchText}>{item.text}</Text>
      <TouchableOpacity 
        style={styles.clearIcon}
        onPress={() => removeRecentSearch(item.id)}
      >
        <Icon name="close" size={18} color="#b3b3b3" />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  // ✅ FIXED: Render search results - Songs
  const renderSongResult = ({ item }) => {
    console.log('🎵 Rendering song result:', item);
    
    // ✅ DEBUG: Check kya aa raha hai artist field mein
    console.log('🎵 Artist data:', {
      artist: item.artist,
      artistType: typeof item.artist,
      hasName: item.artist?.name,
      hasStageName: item.artist?.stageName,
      fullItem: item
    });

    // ✅ FIX: Artist name properly extract karo - MULTIPLE WAYS TRY KARO
    let artistName = 'Unknown Artist';
    
    if (item.artist) {
      if (typeof item.artist === 'object') {
        // Agar artist object hai
        artistName = item.artist.name || item.artist.stageName || 'Unknown Artist';
      } else if (typeof item.artist === 'string') {
        // Agar artist directly string hai
        artistName = item.artist;
      }
    }
    
    // ✅ ALTERNATIVE: Agar artist field hi nahi hai to koi aur field check karo
    if (artistName === 'Unknown Artist') {
      if (item.artistName) {
        artistName = item.artistName;
      } else if (item.singer) {
        artistName = item.singer;
      } else if (item.artist_name) {
        artistName = item.artist_name;
      }
    }

    // ✅ FIX: Image properly set karo
    const songImage = getImageUrl(item.coverImage || item.image || item.thumbnail);

    return (
      <TouchableOpacity 
        style={styles.searchResultItem}
        onPress={() => handleSongPress(item)}
      >
        <Image 
          source={{ uri: songImage }} 
          style={styles.searchResultImage}
          resizeMode="cover"
          defaultSource={{ uri: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop' }}
        />
        <View style={styles.searchResultInfo}>
          <Text style={styles.searchResultTitle}>{item.title}</Text>
          {/* ✅ FIX: Artist name properly display karo */}
          <Text style={styles.searchResultSubtitle}>
            {artistName}
          </Text>
          <Text style={styles.searchResultMeta}>
            {Math.floor((item.duration || 180) / 60)}:{(item.duration || 180) % 60} • {item.playCount || 0} plays
          </Text>
        </View>
        <TouchableOpacity style={styles.moreButton}>
          <Icon name="more-vert" size={20} color="#b3b3b3" />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  // ✅ Render search results - Artists WITH FOLLOW BUTTON
  const renderArtistResult = ({ item }) => (
    <TouchableOpacity 
      style={styles.searchResultItem}
      onPress={() => handleArtistPress(item)}
    >
      <Image 
        source={{ 
          uri: getImageUrl(item.image || item.profilePic)
        }} 
        style={[styles.searchResultImage, { borderRadius: 25 }]}
        resizeMode="cover"
      />
      <View style={styles.searchResultInfo}>
        <Text style={styles.searchResultTitle}>{item.name}</Text>
        <Text style={styles.searchResultSubtitle}>Artist</Text>
        <Text style={styles.searchResultMeta}>{item.followers || 0} followers</Text>
      </View>
      
      {/* ✅ FOLLOW BUTTON FOR SEARCH RESULTS ARTISTS */}
      <TouchableOpacity 
        style={[
          styles.searchFollowButton,
          item.isFollowing ? styles.followingButton : styles.notFollowingButton
        ]}
        onPress={(e) => {
          e.stopPropagation(); // Prevent artist press
          handleFollowToggle(item);
        }}
        disabled={followLoading[item.id]}
      >
        {followLoading[item.id] ? (
          <ActivityIndicator size="small" color={item.isFollowing ? "#FF0000" : "#fff"} />
        ) : (
          <Text style={[
            styles.followButtonText,
            item.isFollowing ? styles.followingButtonText : styles.notFollowingButtonText
          ]}>
            {item.isFollowing ? 'Following' : 'Follow'}
          </Text>
        )}
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Icon name="search" size={24} color="#000" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search songs, artist, album..."
          placeholderTextColor="#000"
          value={searchQuery}
          onChangeText={setSearchQuery}
          returnKeyType="search"
        />
        {isLoading && (
          <ActivityIndicator size="small" color="#000" style={styles.loadingIndicator} />
        )}
      </View>

      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Search Results */}
        {searchResults ? (
          <View style={styles.section}>
            {/* Songs Results */}
            {searchResults.results?.songs?.count > 0 && (
              <>
                <Text style={styles.resultsSectionTitle}>
                  {searchResults.results.songs.title || 'Songs'}
                </Text>
                <FlatList
                  data={searchResults.results.songs.items}
                  renderItem={renderSongResult}
                  keyExtractor={item => `song-${item.id}`}
                  scrollEnabled={false}
                />
              </>
            )}

            {/* Artists Results */}
            {searchResults.results?.artists?.count > 0 && (
              <>
                <Text style={styles.resultsSectionTitle}>
                  {searchResults.results.artists.title || 'Artists'}
                </Text>
                <FlatList
                  data={searchResults.results.artists.items}
                  renderItem={renderArtistResult}
                  keyExtractor={item => `artist-${item.id}`}
                  scrollEnabled={false}
                />
              </>
            )}

            {/* No Results */}
            {searchResults.totalResults === 0 && (
              <View style={styles.noResults}>
                <Icon name="search-off" size={64} color="#b3b3b3" />
                <Text style={styles.noResultsText}>No results found for "{searchQuery}"</Text>
                <Text style={styles.noResultsSubtext}>Try searching with different keywords</Text>
              </View>
            )}
          </View>
        ) : (
          /* Default Search Page */
          <>
            {/* Recent Searches */}
            {recentSearches.length > 0 && (
              <View style={styles.section}>
                <View style={styles.sectionHeader}>
                  <Text style={styles.sectionTitle}>Recent searches</Text>
                  <TouchableOpacity onPress={clearSearchHistory}>
                    <Text style={styles.clearAllText}>Clear all</Text>
                  </TouchableOpacity>
                </View>
                <FlatList
                  data={recentSearches}
                  renderItem={renderRecentSearch}
                  keyExtractor={item => item.id}
                  scrollEnabled={false}
                />
              </View>
            )}

            {/* Trending Artists from API */}
            {searchPageData?.trendingArtists && searchPageData.trendingArtists.artists.length > 0 && (
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>{searchPageData.trendingArtists.title}</Text>
                <Text style={styles.sectionDescription}>
                  {searchPageData.trendingArtists.description}
                </Text>
                <FlatList
                  data={searchPageData.trendingArtists.artists}
                  renderItem={renderTrendingArtist}
                  keyExtractor={item => `trending-${item.id}`}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={styles.trendingList}
                />
              </View>
            )}

            {/* Browse Categories from API - MOODSONGSSCREEN SE CONNECT */}
            {searchPageData?.browseMusic && searchPageData.browseMusic.genres.length > 0 && (
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>{searchPageData.browseMusic.title}</Text>
                <Text style={styles.sectionDescription}>
                  {searchPageData.browseMusic.description}
                </Text>
                <View style={styles.browseGrid}>
                  {searchPageData.browseMusic.genres.map((item, index) => (
                    <TouchableOpacity 
                      key={`browse-${item.id}`}
                      style={[
                        styles.browseCategory, 
                        { 
                          marginRight: index % 2 === 0 ? 8 : 0
                        }
                      ]}
                      onPress={() => handleBrowseCategoryPress(item)}
                    >
                      <Image 
                        source={{ 
                          uri: getImageUrl(item.image)
                        }} 
                        style={styles.browseCategoryImage}
                        resizeMode="cover"
                      />
                      <View style={styles.browseCategoryOverlay} />
                      <Text style={styles.browseCategoryText}>{item.name}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            )}

            {/* Loading State */}
            {isLoading && (
              <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#1DB954" />
                <Text style={styles.loadingText}>Searching...</Text>
              </View>
            )}
          </>
        )}

        {/* Bottom Padding */}
        <View style={styles.bottomPadding} />
      </ScrollView>
    </SafeAreaView>
  );
};

// ✅ UPDATED STYLES WITH FOLLOW BUTTON
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginVertical: 16,
    borderRadius: 30,
    paddingHorizontal: 16,
    height: 56,
  },
  searchIcon: {
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    color: '#000',
    fontSize: 16,
    paddingVertical: 8,
  },
  loadingIndicator: {
    marginLeft: 8,
  },
  scrollView: {
    flex: 1,
  },
  section: {
    marginBottom: 32,
    paddingHorizontal: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  sectionDescription: {
    fontSize: 14,
    color: '#b3b3b3',
    marginBottom: 16,
  },
  clearAllText: {
    fontSize: 14,
    color: '#b3b3b3',
    textDecorationLine: 'underline',
  },
  recentSearchItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#282828',
  },
  recentSearchText: {
    flex: 1,
    fontSize: 16,
    color: '#fff',
    marginLeft: 12,
  },
  clearIcon: {
    padding: 4,
  },
  trendingList: {
    paddingRight: 16,
  },
  trendingArtistItem: {
    alignItems: 'center',
    marginRight: 20,
    width: 120, // Increased width for follow button
  },
  artistImageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 8,
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  artistImage: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  verifiedBadge: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    backgroundColor: '#000',
    borderRadius: 10,
    padding: 2,
  },
  artistName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 2,
  },
  artistType: {
    fontSize: 12,
    color: '#b3b3b3',
    textAlign: 'center',
    marginBottom: 6,
  },
  // ✅ FOLLOW BUTTON STYLES
  followButton: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 16,
    minWidth: 80,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
  },
  searchFollowButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
    minWidth: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notFollowingButton: {
    backgroundColor: '#FF0000',
  },
  followingButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#FF0000',
  },
  followButtonText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  notFollowingButtonText: {
    color: '#fff',
  },
  followingButtonText: {
    color: '#FF0000',
  },
  browseGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  browseCategory: {
    width: (width - 48) / 2,
    height: 100,
    borderRadius: 8,
    marginBottom: 12,
    overflow: 'hidden',
    position: 'relative',
  },
  browseCategoryImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  browseCategoryOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  browseCategoryText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    position: 'absolute',
    top: '50%',
    left: 0,
    right: 0,
    transform: [{ translateY: -10 }],
    paddingHorizontal: 8,
    textShadowColor: 'rgba(0,0,0,0.8)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  // Search Results Styles
  resultsSectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
    marginTop: 8,
  },
  searchResultItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#282828',
  },
  searchResultImage: {
    width: 50,
    height: 50,
    borderRadius: 4,
    marginRight: 12,
  },
  searchResultInfo: {
    flex: 1,
  },
  searchResultTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 4,
  },
  searchResultSubtitle: {
    fontSize: 14,
    color: '#b3b3b3',
    marginBottom: 2,
  },
  searchResultMeta: {
    fontSize: 12,
    color: '#666',
  },
  moreButton: {
    padding: 8,
  },
  noResults: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
  },
  noResultsText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
    textAlign: 'center',
  },
  noResultsSubtext: {
    fontSize: 14,
    color: '#b3b3b3',
    textAlign: 'center',
  },
  loadingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
  },
  loadingText: {
    fontSize: 16,
    color: '#b3b3b3',
    marginTop: 12,
  },
  bottomPadding: {
    height: 20,
  },
});

export default SearchScreen;