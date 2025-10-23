// // // // // // // // // src/screens/ArtistProfileScreen.js
// // // // // // // // import React from 'react';
// // // // // // // // import {
// // // // // // // //   View,
// // // // // // // //   Text,
// // // // // // // //   ScrollView,
// // // // // // // //   TouchableOpacity,
// // // // // // // //   StyleSheet,
// // // // // // // //   StatusBar,
// // // // // // // //   SafeAreaView,
// // // // // // // //   Image,
// // // // // // // //   FlatList
// // // // // // // // } from 'react-native';
// // // // // // // // import Icon from 'react-native-vector-icons/MaterialIcons';
// // // // // // // // import { useNavigation } from '@react-navigation/native';

// // // // // // // // const ArtistProfileScreen = ({ route }) => {
// // // // // // // //   const navigation = useNavigation();
// // // // // // // //   const { artistName = 'MAROON 5' } = route.params || {};

// // // // // // // //   // Popular releases data
// // // // // // // //   const popularReleases = [
// // // // // // // //     { id: '1', title: 'Mixery', album: 'Maroon 5 - Mixery' },
// // // // // // // //     { id: '2', title: 'Perphone', album: 'Maroon 5 - Overexposed' },
// // // // // // // //     { id: '3', title: 'Astratis', album: 'Maroon 5 - V' },
// // // // // // // //     { id: '4', title: 'Sugar', album: 'Maroon 5 - Singles' },
// // // // // // // //     { id: '5', title: 'The Sun', album: 'Maroon 5 - Songs About June' },
// // // // // // // //     { id: '6', title: 'What Lowest Do', album: 'Maroon 5 - Real Bill Blues Deluxe' },
// // // // // // // //   ];

// // // // // // // //   // Artist playlists data
// // // // // // // //   const artistPlaylists = [
// // // // // // // //     { id: '1', title: 'Maroon 5: Start of the best' },
// // // // // // // //     { id: '2', title: 'This is Maroon 5' },
// // // // // // // //     { id: '3', title: 'Maroon 5' },
// // // // // // // //   ];

// // // // // // // //   // Similar artists data
// // // // // // // //   const similarArtists = [
// // // // // // // //     { id: '1', name: 'One Republic' },
// // // // // // // //     { id: '2', name: 'Codgistry' },
// // // // // // // //     { id: '3', name: 'The Chairman...' },
// // // // // // // //     { id: '4', name: 'Shawn Monica' },
// // // // // // // //   ];

// // // // // // // //   const renderPopularRelease = ({ item }) => (
// // // // // // // //     <TouchableOpacity style={styles.releaseItem}>
// // // // // // // //       <View style={styles.releaseImage}>
// // // // // // // //         <Icon name="album" size={50} color="#b3b3b3" />
// // // // // // // //       </View>
// // // // // // // //       <View style={styles.releaseText}>
// // // // // // // //         <Text style={styles.releaseTitle}>{item.title}</Text>
// // // // // // // //         <Text style={styles.releaseAlbum}>{item.album}</Text>
// // // // // // // //       </View>
// // // // // // // //       <TouchableOpacity style={styles.moreButton}>
// // // // // // // //         <Icon name="more-horiz" size={24} color="#b3b3b3" />
// // // // // // // //       </TouchableOpacity>
// // // // // // // //     </TouchableOpacity>
// // // // // // // //   );

// // // // // // // //   const renderArtistPlaylist = ({ item }) => (
// // // // // // // //     <TouchableOpacity style={styles.playlistItem}
// // // // // // // //       onPress={() => navigation.navigate('PlaylistScreen', { playlistName: item.title })}
// // // // // // // //   >
// // // // // // // //       <View style={styles.playlistImage}>
// // // // // // // //         <Icon name="queue-music" size={40} color="#b3b3b3" />
// // // // // // // //       </View>
// // // // // // // //       <Text style={styles.playlistTitle}>{item.title}</Text>
// // // // // // // //     </TouchableOpacity>
// // // // // // // //   );

// // // // // // // //   const renderSimilarArtist = ({ item }) => (
// // // // // // // //     <TouchableOpacity style={styles.similarArtistItem}>
// // // // // // // //       <View style={styles.similarArtistImage}>
// // // // // // // //         <Text style={styles.similarArtistText}>
// // // // // // // //           {item.name.split(' ').map(n => n[0]).join('')}
// // // // // // // //         </Text>
// // // // // // // //       </View>
// // // // // // // //       <Text style={styles.similarArtistName}>{item.name}</Text>
// // // // // // // //     </TouchableOpacity>
// // // // // // // //   );

// // // // // // // //   return (
// // // // // // // //     <SafeAreaView style={styles.container}>
// // // // // // // //       <StatusBar barStyle="light-content" backgroundColor="#000" />
      
// // // // // // // //       {/* Header with Back Button */}
// // // // // // // //       <View style={styles.header}>
// // // // // // // //         <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
// // // // // // // //           <Icon name="arrow-back" size={24} color="#fff" />
// // // // // // // //         </TouchableOpacity>
// // // // // // // //         <Text style={styles.headerTitle}>AI1 ISI</Text>
// // // // // // // //         <View style={styles.headerRight}>
// // // // // // // //           <TouchableOpacity style={styles.headerIcon}>
// // // // // // // //             <Icon name="more-vert" size={24} color="#fff" />
// // // // // // // //           </TouchableOpacity>
// // // // // // // //         </View>
// // // // // // // //       </View>

// // // // // // // //       <ScrollView 
// // // // // // // //         style={styles.scrollView}
// // // // // // // //         showsVerticalScrollIndicator={false}
// // // // // // // //       >
// // // // // // // //         {/* Artist Header Section */}
// // // // // // // //         <View style={styles.artistHeader}>
// // // // // // // //           <View style={styles.artistImageContainer}>
// // // // // // // //             <View style={styles.artistImage}>
// // // // // // // //               <Text style={styles.artistImageText}>M5</Text>
// // // // // // // //             </View>
// // // // // // // //           </View>
          
// // // // // // // //           <View style={styles.artistInfo}>
// // // // // // // //             <Text style={styles.artistName}>MAROON 5</Text>
// // // // // // // //             <Text style={styles.artistType}>Artist</Text>
// // // // // // // //           </View>

// // // // // // // //           <View style={styles.statsSection}>
// // // // // // // //             <Text style={styles.listenersCount}>2.3 L monthly listeners</Text>
// // // // // // // //             <TouchableOpacity style={styles.followButton}>
// // // // // // // //               <Text style={styles.followButtonText}>Follow</Text>
// // // // // // // //             </TouchableOpacity>
// // // // // // // //           </View>
// // // // // // // //         </View>

// // // // // // // //         {/* Popular Releases Section */}
// // // // // // // //         <View style={styles.section}>
// // // // // // // //           <View style={styles.sectionHeader}>
// // // // // // // //             <Text style={styles.sectionTitle}>Popular releases</Text>
// // // // // // // //             <TouchableOpacity 
// // // // // // // //             onPress={() => navigation.navigate('ArtistSongsScreen', { artistName: 'MAROON 5' })}>
// // // // // // // //               <Text style={styles.seeMoreText}>See more</Text>
// // // // // // // //             </TouchableOpacity>
// // // // // // // //           </View>
// // // // // // // //           <FlatList
// // // // // // // //             data={popularReleases}
// // // // // // // //             renderItem={renderPopularRelease}
// // // // // // // //             keyExtractor={item => item.id}
// // // // // // // //             scrollEnabled={false}
// // // // // // // //           />
// // // // // // // //         </View>

// // // // // // // //         {/* Artist Playlists Section */}
// // // // // // // //         <View style={styles.section}>
// // // // // // // //           <Text style={styles.sectionTitle}>Artist Playlists</Text>
// // // // // // // //           <FlatList
// // // // // // // //             data={artistPlaylists}
// // // // // // // //             renderItem={renderArtistPlaylist}
// // // // // // // //             keyExtractor={item => item.id}
// // // // // // // //             horizontal
// // // // // // // //             showsHorizontalScrollIndicator={false}
// // // // // // // //             contentContainerStyle={styles.playlistsList}
// // // // // // // //           />
// // // // // // // //         </View>

// // // // // // // //         {/* Similar Artists Section */}
// // // // // // // //         <View style={styles.section}>
// // // // // // // //           <Text style={styles.sectionTitle}>Similar artists</Text>
// // // // // // // //           <FlatList
// // // // // // // //             data={similarArtists}
// // // // // // // //             renderItem={renderSimilarArtist}
// // // // // // // //             keyExtractor={item => item.id}
// // // // // // // //             horizontal
// // // // // // // //             showsHorizontalScrollIndicator={false}
// // // // // // // //             contentContainerStyle={styles.similarArtistsList}
// // // // // // // //           />
// // // // // // // //         </View>

// // // // // // // //         {/* Bottom Padding */}
// // // // // // // //         <View style={styles.bottomPadding} />
// // // // // // // //       </ScrollView>
// // // // // // // //     </SafeAreaView>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // const styles = StyleSheet.create({
// // // // // // // //   container: {
// // // // // // // //     flex: 1,
// // // // // // // //     backgroundColor: '#000',
// // // // // // // //   },
// // // // // // // //   header: {
// // // // // // // //     flexDirection: 'row',
// // // // // // // //     justifyContent: 'space-between',
// // // // // // // //     alignItems: 'center',
// // // // // // // //     paddingHorizontal: 16,
// // // // // // // //     paddingVertical: 12,
// // // // // // // //     borderBottomWidth: 1,
// // // // // // // //     borderBottomColor: '#282828',
// // // // // // // //   },
// // // // // // // //   backButton: {
// // // // // // // //     padding: 4,
// // // // // // // //   },
// // // // // // // //   headerTitle: {
// // // // // // // //     fontSize: 16,
// // // // // // // //     fontWeight: 'bold',
// // // // // // // //     color: '#fff',
// // // // // // // //     flex: 1,
// // // // // // // //     textAlign: 'center',
// // // // // // // //   },
// // // // // // // //   headerRight: {
// // // // // // // //     width: 40,
// // // // // // // //     alignItems: 'flex-end',
// // // // // // // //   },
// // // // // // // //   headerIcon: {
// // // // // // // //     padding: 4,
// // // // // // // //   },
// // // // // // // //   scrollView: {
// // // // // // // //     flex: 1,
// // // // // // // //   },
// // // // // // // //   artistHeader: {
// // // // // // // //     padding: 20,
// // // // // // // //     alignItems: 'center',
// // // // // // // //     borderBottomWidth: 1,
// // // // // // // //     borderBottomColor: '#282828',
// // // // // // // //   },
// // // // // // // //   artistImageContainer: {
// // // // // // // //     marginBottom: 16,
// // // // // // // //   },
// // // // // // // //   artistImage: {
// // // // // // // //     width: 120,
// // // // // // // //     height: 120,
// // // // // // // //     borderRadius: 60,
// // // // // // // //     backgroundColor: '#1e3264',
// // // // // // // //     justifyContent: 'center',
// // // // // // // //     alignItems: 'center',
// // // // // // // //   },
// // // // // // // //   artistImageText: {
// // // // // // // //     fontSize: 24,
// // // // // // // //     fontWeight: 'bold',
// // // // // // // //     color: '#fff',
// // // // // // // //   },
// // // // // // // //   artistInfo: {
// // // // // // // //     alignItems: 'center',
// // // // // // // //     marginBottom: 16,
// // // // // // // //   },
// // // // // // // //   artistName: {
// // // // // // // //     fontSize: 24,
// // // // // // // //     fontWeight: 'bold',
// // // // // // // //     color: '#fff',
// // // // // // // //     marginBottom: 4,
// // // // // // // //   },
// // // // // // // //   artistType: {
// // // // // // // //     fontSize: 14,
// // // // // // // //     color: '#b3b3b3',
// // // // // // // //   },
// // // // // // // //   statsSection: {
// // // // // // // //     alignItems: 'center',
// // // // // // // //   },
// // // // // // // //   listenersCount: {
// // // // // // // //     fontSize: 14,
// // // // // // // //     color: '#b3b3b3',
// // // // // // // //     marginBottom: 12,
// // // // // // // //   },
// // // // // // // //   followButton: {
// // // // // // // //     backgroundColor: '#1db954',
// // // // // // // //     paddingHorizontal: 32,
// // // // // // // //     paddingVertical: 8,
// // // // // // // //     borderRadius: 20,
// // // // // // // //   },
// // // // // // // //   followButtonText: {
// // // // // // // //     fontSize: 14,
// // // // // // // //     fontWeight: 'bold',
// // // // // // // //     color: '#000',
// // // // // // // //   },
// // // // // // // //   section: {
// // // // // // // //     padding: 16,
// // // // // // // //     borderBottomWidth: 1,
// // // // // // // //     borderBottomColor: '#282828',
// // // // // // // //   },
// // // // // // // //   sectionHeader: {
// // // // // // // //     flexDirection: 'row',
// // // // // // // //     justifyContent: 'space-between',
// // // // // // // //     alignItems: 'center',
// // // // // // // //     marginBottom: 16,
// // // // // // // //   },
// // // // // // // //   sectionTitle: {
// // // // // // // //     fontSize: 20,
// // // // // // // //     fontWeight: 'bold',
// // // // // // // //     color: '#fff',
// // // // // // // //   },
// // // // // // // //   seeMoreText: {
// // // // // // // //     fontSize: 14,
// // // // // // // //     color: '#b3b3b3',
// // // // // // // //   },
// // // // // // // //   releaseItem: {
// // // // // // // //     flexDirection: 'row',
// // // // // // // //     alignItems: 'center',
// // // // // // // //     marginBottom: 16,
// // // // // // // //   },
// // // // // // // //   releaseImage: {
// // // // // // // //     width: 60,
// // // // // // // //     height: 60,
// // // // // // // //     backgroundColor: '#333',
// // // // // // // //     borderRadius: 4,
// // // // // // // //     justifyContent: 'center',
// // // // // // // //     alignItems: 'center',
// // // // // // // //     marginRight: 12,
// // // // // // // //   },
// // // // // // // //   releaseText: {
// // // // // // // //     flex: 1,
// // // // // // // //   },
// // // // // // // //   releaseTitle: {
// // // // // // // //     fontSize: 16,
// // // // // // // //     fontWeight: '600',
// // // // // // // //     color: '#fff',
// // // // // // // //     marginBottom: 4,
// // // // // // // //   },
// // // // // // // //   releaseAlbum: {
// // // // // // // //     fontSize: 14,
// // // // // // // //     color: '#b3b3b3',
// // // // // // // //   },
// // // // // // // //   moreButton: {
// // // // // // // //     padding: 4,
// // // // // // // //   },
// // // // // // // //   playlistsList: {
// // // // // // // //     paddingRight: 16,
// // // // // // // //   },
// // // // // // // //   playlistItem: {
// // // // // // // //     alignItems: 'center',
// // // // // // // //     marginRight: 20,
// // // // // // // //     width: 120,
// // // // // // // //   },
// // // // // // // //   playlistImage: {
// // // // // // // //     width: 120,
// // // // // // // //     height: 120,
// // // // // // // //     backgroundColor: '#333',
// // // // // // // //     borderRadius: 4,
// // // // // // // //     justifyContent: 'center',
// // // // // // // //     alignItems: 'center',
// // // // // // // //     marginBottom: 8,
// // // // // // // //   },
// // // // // // // //   playlistTitle: {
// // // // // // // //     fontSize: 14,
// // // // // // // //     fontWeight: '600',
// // // // // // // //     color: '#fff',
// // // // // // // //     textAlign: 'center',
// // // // // // // //   },
// // // // // // // //   similarArtistsList: {
// // // // // // // //     paddingRight: 16,
// // // // // // // //   },
// // // // // // // //   similarArtistItem: {
// // // // // // // //     alignItems: 'center',
// // // // // // // //     marginRight: 20,
// // // // // // // //   },
// // // // // // // //   similarArtistImage: {
// // // // // // // //     width: 100,
// // // // // // // //     height: 100,
// // // // // // // //     borderRadius: 50,
// // // // // // // //     backgroundColor: '#333',
// // // // // // // //     justifyContent: 'center',
// // // // // // // //     alignItems: 'center',
// // // // // // // //     marginBottom: 8,
// // // // // // // //   },
// // // // // // // //   similarArtistText: {
// // // // // // // //     fontSize: 18,
// // // // // // // //     fontWeight: 'bold',
// // // // // // // //     color: '#fff',
// // // // // // // //   },
// // // // // // // //   similarArtistName: {
// // // // // // // //     fontSize: 14,
// // // // // // // //     fontWeight: '600',
// // // // // // // //     color: '#fff',
// // // // // // // //     textAlign: 'center',
// // // // // // // //   },
// // // // // // // //   bottomPadding: {
// // // // // // // //     height: 20,
// // // // // // // //   },
// // // // // // // // });

// // // // // // // // export default ArtistProfileScreen;


// // // // // // // // src/screens/ArtistProfileScreen.js
// // // // // // // import React from 'react';
// // // // // // // import {
// // // // // // //   View,
// // // // // // //   Text,
// // // // // // //   ScrollView,
// // // // // // //   TouchableOpacity,
// // // // // // //   StyleSheet,
// // // // // // //   StatusBar,
// // // // // // //   SafeAreaView,
// // // // // // //   Image,
// // // // // // //   FlatList,
// // // // // // //   Dimensions
// // // // // // // } from 'react-native';
// // // // // // // import Icon from 'react-native-vector-icons/MaterialIcons';
// // // // // // // import { useNavigation } from '@react-navigation/native';

// // // // // // // const { width } = Dimensions.get('window');

// // // // // // // const ArtistProfileScreen = ({ route }) => {
// // // // // // //   const navigation = useNavigation();
// // // // // // //   const { artistName = 'MAROON 5' } = route.params || {};

// // // // // // //   // Popular releases data with images
// // // // // // //   const popularReleases = [
// // // // // // //     { 
// // // // // // //       id: '1', 
// // // // // // //       title: 'Mixery', 
// // // // // // //       album: 'Maroon 5 - Mixery',
// // // // // // //       image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop',
// // // // // // //       plays: '12.5M'
// // // // // // //     },
// // // // // // //     { 
// // // // // // //       id: '2', 
// // // // // // //       title: 'Perphone', 
// // // // // // //       album: 'Maroon 5 - Overexposed',
// // // // // // //       image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop',
// // // // // // //       plays: '8.7M'
// // // // // // //     },
// // // // // // //     { 
// // // // // // //       id: '3', 
// // // // // // //       title: 'Astratis', 
// // // // // // //       album: 'Maroon 5 - V',
// // // // // // //       image: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=200&h=200&fit=crop',
// // // // // // //       plays: '6.3M'
// // // // // // //     },
// // // // // // //     { 
// // // // // // //       id: '4', 
// // // // // // //       title: 'Sugar', 
// // // // // // //       album: 'Maroon 5 - Singles',
// // // // // // //       image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=200&h=200&fit=crop',
// // // // // // //       plays: '45.2M'
// // // // // // //     },
// // // // // // //     { 
// // // // // // //       id: '5', 
// // // // // // //       title: 'The Sun', 
// // // // // // //       album: 'Maroon 5 - Songs About June',
// // // // // // //       image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=200&h=200&fit=crop',
// // // // // // //       plays: '3.8M'
// // // // // // //     },
// // // // // // //     // { 
// // // // // // //     //   id: '6', 
// // // // // // //     //   title: 'What Lowest Do', 
// // // // // // //     //   album: 'Maroon 5 - Real Bill Blues Deluxe',
// // // // // // //     //   image: 'https://images.unsplash.com/photo-1489599809505-fb44932d0e71?w=200&h=200&fit=crop',
// // // // // // //     //   plays: '5.1M'
// // // // // // //     // },
// // // // // // //   ];

// // // // // // //   // Artist playlists data with images
// // // // // // //   const artistPlaylists = [
// // // // // // //     { 
// // // // // // //       id: '1', 
// // // // // // //       title: 'Maroon 5: Start of the best',
// // // // // // //       image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop',
// // // // // // //       followers: '2.1M'
// // // // // // //     },
// // // // // // //     { 
// // // // // // //       id: '2', 
// // // // // // //       title: 'This is Maroon 5',
// // // // // // //       image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
// // // // // // //       followers: '3.4M'
// // // // // // //     },
// // // // // // //     { 
// // // // // // //       id: '3', 
// // // // // // //       title: 'Maroon 5 Greatest Hits',
// // // // // // //       image: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=300&h=300&fit=crop',
// // // // // // //       followers: '1.8M'
// // // // // // //     },
// // // // // // //   ];

// // // // // // //   // Similar artists data with images
// // // // // // //   const similarArtists = [
// // // // // // //     { 
// // // // // // //       id: '1', 
// // // // // // //       name: 'One Republic',
// // // // // // //       image: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=200&h=200&fit=crop&crop=face'
// // // // // // //     },
// // // // // // //     { 
// // // // // // //       id: '2', 
// // // // // // //       name: 'Coldplay',
// // // // // // //       image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop&crop=face'
// // // // // // //     },
// // // // // // //     { 
// // // // // // //       id: '3', 
// // // // // // //       name: 'The Weeknd',
// // // // // // //       image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=200&h=200&fit=crop&crop=face'
// // // // // // //     },
// // // // // // //     { 
// // // // // // //       id: '4', 
// // // // // // //       name: 'Bruno Mars',
// // // // // // //       image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200&h=200&fit=crop&crop=face'
// // // // // // //     },
// // // // // // //   ];

// // // // // // //   const renderPopularRelease = ({ item }) => (
// // // // // // //     <TouchableOpacity style={styles.releaseItem}>
// // // // // // //       <Image 
// // // // // // //         source={{ uri: item.image }} 
// // // // // // //         style={styles.releaseImage}
// // // // // // //         resizeMode="cover"
// // // // // // //       />
// // // // // // //       <View style={styles.releaseText}>
// // // // // // //         <Text style={styles.releaseTitle} numberOfLines={1}>{item.title}</Text>
// // // // // // //         <Text style={styles.releaseAlbum} numberOfLines={1}>{item.album}</Text>
// // // // // // //         <Text style={styles.releasePlays}>{item.plays} plays</Text>
// // // // // // //       </View>
// // // // // // //       <TouchableOpacity style={styles.moreButton}>
// // // // // // //         <Icon name="more-horiz" size={24} color="#b3b3b3" />
// // // // // // //       </TouchableOpacity>
// // // // // // //     </TouchableOpacity>
// // // // // // //   );

// // // // // // //   const renderArtistPlaylist = ({ item }) => (
// // // // // // //     <TouchableOpacity style={styles.playlistItem}
// // // // // // //       onPress={() => navigation.navigate('ArtistPlaylistScreen', { playlistName: item.title })}
// // // // // // //     >
// // // // // // //       <View style={styles.playlistImageContainer}>
// // // // // // //         <Image 
// // // // // // //           source={{ uri: item.image }} 
// // // // // // //           style={styles.playlistImage}
// // // // // // //           resizeMode="cover"
// // // // // // //         />
// // // // // // //         <View style={styles.playlistOverlay}>
// // // // // // //           <Icon name="play-arrow" size={30} color="#fff" />
// // // // // // //         </View>
// // // // // // //       </View>
// // // // // // //       <Text style={styles.playlistTitle} numberOfLines={2}>{item.title}</Text>
// // // // // // //       <Text style={styles.playlistFollowers}>{item.followers} followers</Text>
// // // // // // //     </TouchableOpacity>
// // // // // // //   );

// // // // // // //   const renderSimilarArtist = ({ item }) => (
// // // // // // //     <TouchableOpacity style={styles.similarArtistItem}>
// // // // // // //       <View style={styles.similarArtistImageContainer}>
// // // // // // //         <Image 
// // // // // // //           source={{ uri: item.image }} 
// // // // // // //           style={styles.similarArtistImage}
// // // // // // //           resizeMode="cover"
// // // // // // //         />
// // // // // // //         <View style={styles.verifiedBadge}>
// // // // // // //           <Icon name="verified" size={16} color="#1DB954" />
// // // // // // //         </View>
// // // // // // //       </View>
// // // // // // //       <Text style={styles.similarArtistName} numberOfLines={1}>{item.name}</Text>
// // // // // // //       <Text style={styles.artistType}>Artist</Text>
// // // // // // //     </TouchableOpacity>
// // // // // // //   );

// // // // // // //   return (
// // // // // // //     <SafeAreaView style={styles.container}>
// // // // // // //       <StatusBar barStyle="light-content" backgroundColor="#000" />
      
// // // // // // //       {/* Header with Back Button */}
// // // // // // //       <View style={styles.header}>
// // // // // // //         <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
// // // // // // //           <Icon name="arrow-back" size={24} color="#fff" />
// // // // // // //         </TouchableOpacity>
// // // // // // //         <View style={styles.headerTitleContainer}>
// // // // // // //           <Text style={styles.headerTitle} numberOfLines={1}>{artistName}</Text>
// // // // // // //           <Text style={styles.headerSubtitle}>Artist</Text>
// // // // // // //         </View>
// // // // // // //         <View style={styles.headerRight}>
// // // // // // //           <TouchableOpacity style={styles.headerIcon}>
// // // // // // //             <Icon name="favorite-border" size={24} color="#fff" />
// // // // // // //           </TouchableOpacity>
// // // // // // //           <TouchableOpacity style={styles.headerIcon}>
// // // // // // //             <Icon name="more-vert" size={24} color="#fff" />
// // // // // // //           </TouchableOpacity>
// // // // // // //         </View>
// // // // // // //       </View>

// // // // // // //       <ScrollView 
// // // // // // //         style={styles.scrollView}
// // // // // // //         showsVerticalScrollIndicator={false}
// // // // // // //       >
// // // // // // //         {/* Artist Header Section */}
// // // // // // //         <View style={styles.artistHeader}>
// // // // // // //           <View style={styles.artistImageContainer}>
// // // // // // //             <Image 
// // // // // // //               source={{ uri: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop&crop=face' }}
// // // // // // //               style={styles.artistImage}
// // // // // // //               resizeMode="cover"
// // // // // // //             />
// // // // // // //             <View style={styles.verifiedBadgeLarge}>
// // // // // // //               <Icon name="verified" size={28} color="#1DB954" />
// // // // // // //             </View>
// // // // // // //           </View>
          
// // // // // // //           <View style={styles.artistInfo}>
// // // // // // //             <Text style={styles.artistName}>MAROON 5</Text>
// // // // // // //             <Text style={styles.artistType}>Artist</Text>
// // // // // // //           </View>

// // // // // // //           <View style={styles.statsSection}>
// // // // // // //             <View style={styles.statItem}>
// // // // // // //               <Text style={styles.statNumber}>2.3M</Text>
// // // // // // //               <Text style={styles.statLabel}>Monthly Listeners</Text>
// // // // // // //             </View>
// // // // // // //             <View style={styles.statItem}>
// // // // // // //               <Text style={styles.statNumber}>12.5M</Text>
// // // // // // //               <Text style={styles.statLabel}>Followers</Text>
// // // // // // //             </View>
// // // // // // //           </View>

// // // // // // //           <View style={styles.actionButtons}>
// // // // // // //             <TouchableOpacity style={styles.shuffleButton}>
// // // // // // //               <Icon name="shuffle" size={24} color="#000" />
// // // // // // //               <Text style={styles.shuffleButtonText}>Shuffle</Text>
// // // // // // //             </TouchableOpacity>
// // // // // // //             <TouchableOpacity style={styles.followButton}>
// // // // // // //               <Text style={styles.followButtonText}>Follow</Text>
// // // // // // //             </TouchableOpacity>
// // // // // // //           </View>
// // // // // // //         </View>

// // // // // // //         {/* Popular Releases Section */}
// // // // // // //         <View style={styles.section}>
// // // // // // //           <View style={styles.sectionHeader}>
// // // // // // //             <Text style={styles.sectionTitle}>Popular releases</Text>
// // // // // // //             <TouchableOpacity 
// // // // // // //               onPress={() => navigation.navigate('ArtistSongsScreen', { artistName: 'MAROON 5' })}
// // // // // // //             >
// // // // // // //               <Text style={styles.seeMoreText}>See more</Text>
// // // // // // //             </TouchableOpacity>
// // // // // // //           </View>
// // // // // // //           <FlatList
// // // // // // //             data={popularReleases}
// // // // // // //             renderItem={renderPopularRelease}
// // // // // // //             keyExtractor={item => item.id}
// // // // // // //             scrollEnabled={false}
// // // // // // //           />
// // // // // // //         </View>

// // // // // // //         {/* Artist Playlists Section */}
// // // // // // //         <View style={styles.section}>
// // // // // // //           <View style={styles.sectionHeader}>
// // // // // // //             <Text style={styles.sectionTitle}>Artist Playlists</Text>
// // // // // // //             <TouchableOpacity>
// // // // // // //               <Text style={styles.seeMoreText}>See more</Text>
// // // // // // //             </TouchableOpacity>
// // // // // // //           </View>
// // // // // // //           <FlatList
// // // // // // //             data={artistPlaylists}
// // // // // // //             renderItem={renderArtistPlaylist}
// // // // // // //             keyExtractor={item => item.id}
// // // // // // //             horizontal
// // // // // // //             showsHorizontalScrollIndicator={false}
// // // // // // //             contentContainerStyle={styles.playlistsList}
// // // // // // //           />
// // // // // // //         </View>

// // // // // // //         {/* Similar Artists Section */}
// // // // // // //         <View style={styles.section}>
// // // // // // //           <View style={styles.sectionHeader}>
// // // // // // //             <Text style={styles.sectionTitle}>Similar artists</Text>
// // // // // // //             <TouchableOpacity>
// // // // // // //               <Text style={styles.seeMoreText}>See more</Text>
// // // // // // //             </TouchableOpacity>
// // // // // // //           </View>
// // // // // // //           <FlatList
// // // // // // //             data={similarArtists}
// // // // // // //             renderItem={renderSimilarArtist}
// // // // // // //             keyExtractor={item => item.id}
// // // // // // //             horizontal
// // // // // // //             showsHorizontalScrollIndicator={false}
// // // // // // //             contentContainerStyle={styles.similarArtistsList}
// // // // // // //           />
// // // // // // //         </View>

// // // // // // //         {/* Bottom Padding */}
// // // // // // //         <View style={styles.bottomPadding} />
// // // // // // //       </ScrollView>
// // // // // // //     </SafeAreaView>
// // // // // // //   );
// // // // // // // };

// // // // // // // const styles = StyleSheet.create({
// // // // // // //   container: {
// // // // // // //     flex: 1,
// // // // // // //     backgroundColor: '#000',
// // // // // // //   },
// // // // // // //   header: {
// // // // // // //     flexDirection: 'row',
// // // // // // //     alignItems: 'center',
// // // // // // //     paddingHorizontal: 16,
// // // // // // //     paddingVertical: 12,
// // // // // // //     borderBottomWidth: 1,
// // // // // // //     borderBottomColor: '#282828',
// // // // // // //   },
// // // // // // //   backButton: {
// // // // // // //     padding: 4,
// // // // // // //   },
// // // // // // //   headerTitleContainer: {
// // // // // // //     flex: 1,
// // // // // // //     alignItems: 'center',
// // // // // // //   },
// // // // // // //   headerTitle: {
// // // // // // //     fontSize: 16,
// // // // // // //     fontWeight: 'bold',
// // // // // // //     color: '#fff',
// // // // // // //   },
// // // // // // //   headerSubtitle: {
// // // // // // //     fontSize: 12,
// // // // // // //     color: '#b3b3b3',
// // // // // // //   },
// // // // // // //   headerRight: {
// // // // // // //     flexDirection: 'row',
// // // // // // //     alignItems: 'center',
// // // // // // //   },
// // // // // // //   headerIcon: {
// // // // // // //     padding: 4,
// // // // // // //     marginLeft: 12,
// // // // // // //   },
// // // // // // //   scrollView: {
// // // // // // //     flex: 1,
// // // // // // //   },
// // // // // // //   artistHeader: {
// // // // // // //     padding: 24,
// // // // // // //     alignItems: 'center',
// // // // // // //     borderBottomWidth: 1,
// // // // // // //     borderBottomColor: '#282828',
// // // // // // //   },
// // // // // // //   artistImageContainer: {
// // // // // // //     marginBottom: 20,
// // // // // // //     position: 'relative',
// // // // // // //   },
// // // // // // //   artistImage: {
// // // // // // //     width: 150,
// // // // // // //     height: 150,
// // // // // // //     borderRadius: 75,
// // // // // // //   },
// // // // // // //   verifiedBadgeLarge: {
// // // // // // //     position: 'absolute',
// // // // // // //     bottom: 5,
// // // // // // //     right: 5,
// // // // // // //     backgroundColor: '#000',
// // // // // // //     borderRadius: 15,
// // // // // // //     padding: 4,
// // // // // // //   },
// // // // // // //   artistInfo: {
// // // // // // //     alignItems: 'center',
// // // // // // //     marginBottom: 20,
// // // // // // //   },
// // // // // // //   artistName: {
// // // // // // //     fontSize: 32,
// // // // // // //     fontWeight: 'bold',
// // // // // // //     color: '#fff',
// // // // // // //     marginBottom: 4,
// // // // // // //     textAlign: 'center',
// // // // // // //   },
// // // // // // //   artistType: {
// // // // // // //     fontSize: 14,
// // // // // // //     color: '#b3b3b3',
// // // // // // //     textTransform: 'uppercase',
// // // // // // //     letterSpacing: 1,
// // // // // // //   },
// // // // // // //   statsSection: {
// // // // // // //     flexDirection: 'row',
// // // // // // //     justifyContent: 'space-around',
// // // // // // //     width: '100%',
// // // // // // //     marginBottom: 20,
// // // // // // //   },
// // // // // // //   statItem: {
// // // // // // //     alignItems: 'center',
// // // // // // //   },
// // // // // // //   statNumber: {
// // // // // // //     fontSize: 18,
// // // // // // //     fontWeight: 'bold',
// // // // // // //     color: '#fff',
// // // // // // //     marginBottom: 4,
// // // // // // //   },
// // // // // // //   statLabel: {
// // // // // // //     fontSize: 12,
// // // // // // //     color: '#b3b3b3',
// // // // // // //   },
// // // // // // //   actionButtons: {
// // // // // // //     flexDirection: 'row',
// // // // // // //     justifyContent: 'center',
// // // // // // //     width: '100%',
// // // // // // //     gap: 12,
// // // // // // //   },
// // // // // // //   shuffleButton: {
// // // // // // //     flexDirection: 'row',
// // // // // // //     alignItems: 'center',
// // // // // // //     backgroundColor: '#FF3B3B',
// // // // // // //     paddingHorizontal: 24,
// // // // // // //     paddingVertical: 12,
// // // // // // //     borderRadius: 25,
// // // // // // //     gap: 8,
// // // // // // //   },
// // // // // // //   shuffleButtonText: {
// // // // // // //     fontSize: 14,
// // // // // // //     fontWeight: 'bold',
// // // // // // //     color: '#000',
// // // // // // //   },
// // // // // // //   followButton: {
// // // // // // //     backgroundColor: 'transparent',
// // // // // // //     borderWidth: 1,
// // // // // // //     borderColor: '#b3b3b3',
// // // // // // //     paddingHorizontal: 32,
// // // // // // //     paddingVertical: 12,
// // // // // // //     borderRadius: 25,
// // // // // // //   },
// // // // // // //   followButtonText: {
// // // // // // //     fontSize: 14,
// // // // // // //     fontWeight: 'bold',
// // // // // // //     color: '#fff',
// // // // // // //   },
// // // // // // //   section: {
// // // // // // //     padding: 20,
// // // // // // //     borderBottomWidth: 1,
// // // // // // //     borderBottomColor: '#282828',
// // // // // // //   },
// // // // // // //   sectionHeader: {
// // // // // // //     flexDirection: 'row',
// // // // // // //     justifyContent: 'space-between',
// // // // // // //     alignItems: 'center',
// // // // // // //     marginBottom: 16,
// // // // // // //   },
// // // // // // //   sectionTitle: {
// // // // // // //     fontSize: 22,
// // // // // // //     fontWeight: 'bold',
// // // // // // //     color: '#fff',
// // // // // // //   },
// // // // // // //   seeMoreText: {
// // // // // // //     fontSize: 14,
// // // // // // //     color: '#b3b3b3',
// // // // // // //     fontWeight: '600',
// // // // // // //   },
// // // // // // //   releaseItem: {
// // // // // // //     flexDirection: 'row',
// // // // // // //     alignItems: 'center',
// // // // // // //     marginBottom: 16,
// // // // // // //     backgroundColor: 'rgba(255,255,255,0.05)',
// // // // // // //     borderRadius: 8,
// // // // // // //     padding: 12,
// // // // // // //   },
// // // // // // //   releaseImage: {
// // // // // // //     width: 60,
// // // // // // //     height: 60,
// // // // // // //     borderRadius: 4,
// // // // // // //     marginRight: 12,
// // // // // // //   },
// // // // // // //   releaseText: {
// // // // // // //     flex: 1,
// // // // // // //   },
// // // // // // //   releaseTitle: {
// // // // // // //     fontSize: 16,
// // // // // // //     fontWeight: '600',
// // // // // // //     color: '#fff',
// // // // // // //     marginBottom: 4,
// // // // // // //   },
// // // // // // //   releaseAlbum: {
// // // // // // //     fontSize: 14,
// // // // // // //     color: '#b3b3b3',
// // // // // // //     marginBottom: 2,
// // // // // // //   },
// // // // // // //   releasePlays: {
// // // // // // //     fontSize: 12,
// // // // // // //     color: '#b3b3b3',
// // // // // // //   },
// // // // // // //   moreButton: {
// // // // // // //     padding: 4,
// // // // // // //   },
// // // // // // //   playlistsList: {
// // // // // // //     paddingRight: 16,
// // // // // // //   },
// // // // // // //   playlistItem: {
// // // // // // //     width: 160,
// // // // // // //     marginRight: 16,
// // // // // // //   },
// // // // // // //   playlistImageContainer: {
// // // // // // //     width: 160,
// // // // // // //     height: 160,
// // // // // // //     borderRadius: 8,
// // // // // // //     marginBottom: 12,
// // // // // // //     position: 'relative',
// // // // // // //     overflow: 'hidden',
// // // // // // //   },
// // // // // // //   playlistImage: {
// // // // // // //     width: '100%',
// // // // // // //     height: '100%',
// // // // // // //   },
// // // // // // //   playlistOverlay: {
// // // // // // //     ...StyleSheet.absoluteFillObject,
// // // // // // //     backgroundColor: 'rgba(0,0,0,0.5)',
// // // // // // //     justifyContent: 'center',
// // // // // // //     alignItems: 'center',
// // // // // // //     opacity: 0,
// // // // // // //   },
// // // // // // //   playlistTitle: {
// // // // // // //     fontSize: 14,
// // // // // // //     fontWeight: '600',
// // // // // // //     color: '#fff',
// // // // // // //     marginBottom: 4,
// // // // // // //   },
// // // // // // //   playlistFollowers: {
// // // // // // //     fontSize: 12,
// // // // // // //     color: '#b3b3b3',
// // // // // // //   },
// // // // // // //   similarArtistsList: {
// // // // // // //     paddingRight: 16,
// // // // // // //   },
// // // // // // //   similarArtistItem: {
// // // // // // //     alignItems: 'center',
// // // // // // //     marginRight: 20,
// // // // // // //     width: 100,
// // // // // // //   },
// // // // // // //   similarArtistImageContainer: {
// // // // // // //     width: 100,
// // // // // // //     height: 100,
// // // // // // //     borderRadius: 50,
// // // // // // //     marginBottom: 8,
// // // // // // //     position: 'relative',
// // // // // // //   },
// // // // // // //   similarArtistImage: {
// // // // // // //     width: '100%',
// // // // // // //     height: '100%',
// // // // // // //     borderRadius: 50,
// // // // // // //   },
// // // // // // //   verifiedBadge: {
// // // // // // //     position: 'absolute',
// // // // // // //     bottom: 2,
// // // // // // //     right: 2,
// // // // // // //     backgroundColor: '#000',
// // // // // // //     borderRadius: 10,
// // // // // // //     padding: 2,
// // // // // // //   },
// // // // // // //   similarArtistName: {
// // // // // // //     fontSize: 14,
// // // // // // //     fontWeight: '600',
// // // // // // //     color: '#fff',
// // // // // // //     textAlign: 'center',
// // // // // // //     marginBottom: 2,
// // // // // // //   },
// // // // // // //   bottomPadding: {
// // // // // // //     height: 20,
// // // // // // //   },
// // // // // // // });

// // // // // // // export default ArtistProfileScreen;


// // // // // // import React, { useState, useEffect } from 'react';
// // // // // // import {
// // // // // //   View,
// // // // // //   Text,
// // // // // //   ScrollView,
// // // // // //   TouchableOpacity,
// // // // // //   StyleSheet,
// // // // // //   StatusBar,
// // // // // //   SafeAreaView,
// // // // // //   Image,
// // // // // //   FlatList,
// // // // // //   Dimensions,
// // // // // //   ActivityIndicator,
// // // // // //   Alert
// // // // // // } from 'react-native';
// // // // // // import Icon from 'react-native-vector-icons/MaterialIcons';
// // // // // // import { useNavigation } from '@react-navigation/native';
// // // // // // import { getDataWithToken, addToFavoriteArtists, removeFromFavoriteArtists } from '../Services/mobile-api';
// // // // // // import { mobile_siteConfig } from '../Services/mobile-siteConfig';

// // // // // // const { width } = Dimensions.get('window');

// // // // // // // ✅ IMAGE URL HELPER FUNCTION
// // // // // // const getImageUrl = (imagePath) => {
// // // // // //   if (!imagePath) {
// // // // // //     return 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop&crop=face';
// // // // // //   }
  
// // // // // //   if (imagePath.startsWith('http')) {
// // // // // //     return imagePath;
// // // // // //   }
  
// // // // // //   if (imagePath.startsWith('/')) {
// // // // // //     return `${mobile_siteConfig.IMAGE_BASE_URL}${imagePath}`;
// // // // // //   }
  
// // // // // //   return 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop&crop=face';
// // // // // // };

// // // // // // const ArtistProfileScreen = ({ route }) => {
// // // // // //   const navigation = useNavigation();
// // // // // //   const { artistId, artistName = 'Artist' } = route.params || {};

// // // // // //   // ✅ State Variables
// // // // // //   const [artistData, setArtistData] = useState(null);
// // // // // //   const [popularReleases, setPopularReleases] = useState([]);
// // // // // //   const [artistPlaylists, setArtistPlaylists] = useState([]);
// // // // // //   const [similarArtists, setSimilarArtists] = useState([]);
// // // // // //   const [isLoading, setIsLoading] = useState(true);
// // // // // //   const [isFollowing, setIsFollowing] = useState(false);
// // // // // //   const [isFavorite, setIsFavorite] = useState(false);

// // // // // //   // ✅ Fetch Artist Data
// // // // // //   useEffect(() => {
// // // // // //     if (artistId) {
// // // // // //       fetchArtistData();
// // // // // //     }
// // // // // //   }, [artistId]);

// // // // // //   // ✅ API: Fetch Artist Profile Data
// // // // // //   const fetchArtistData = async () => {
// // // // // //     try {
// // // // // //       setIsLoading(true);
// // // // // //       console.log('🎵 Fetching artist data for ID:', artistId);

// // // // // //       // ✅ Artist Profile API Call
// // // // // //       const response = await getDataWithToken(`user/artist/${artistId}`);
// // // // // //       console.log('🎵 Artist Profile API Response:', response);

// // // // // //       if (response && response.success) {
// // // // // //         const data = response.data;
        
// // // // // //         // ✅ Set Main Artist Data
// // // // // //         setArtistData(data.artist || data);
        
// // // // // //         // ✅ Set Popular Releases (API se ya default)
// // // // // //         if (data.popularReleases && Array.isArray(data.popularReleases)) {
// // // // // //           setPopularReleases(data.popularReleases);
// // // // // //         } else if (data.songs && Array.isArray(data.songs)) {
// // // // // //           setPopularReleases(data.songs);
// // // // // //         } else {
// // // // // //           setPopularReleases(getDefaultReleases());
// // // // // //         }

// // // // // //         // ✅ Set Artist Playlists (API se ya default)
// // // // // //         if (data.playlists && Array.isArray(data.playlists)) {
// // // // // //           setArtistPlaylists(data.playlists);
// // // // // //         } else {
// // // // // //           setArtistPlaylists(getDefaultPlaylists());
// // // // // //         }

// // // // // //         // ✅ Set Similar Artists (API se ya default)
// // // // // //         if (data.similarArtists && Array.isArray(data.similarArtists)) {
// // // // // //           setSimilarArtists(data.similarArtists);
// // // // // //         } else {
// // // // // //           setSimilarArtists(getDefaultSimilarArtists());
// // // // // //         }

// // // // // //       } else {
// // // // // //         console.log('❌ API response not successful, using default data');
// // // // // //         setDefaultData();
// // // // // //       }
// // // // // //     } catch (error) {
// // // // // //       console.error('❌ Artist profile fetch error:', error);
// // // // // //       setDefaultData();
// // // // // //     } finally {
// // // // // //       setIsLoading(false);
// // // // // //     }
// // // // // //   };

// // // // // //   // ✅ Default Data Fallback
// // // // // //   const setDefaultData = () => {
// // // // // //     setArtistData({
// // // // // //       name: artistName,
// // // // // //       followers: '2.3M',
// // // // // //       monthlyListeners: '12.5M',
// // // // // //       image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop&crop=face'
// // // // // //     });
// // // // // //     setPopularReleases(getDefaultReleases());
// // // // // //     setArtistPlaylists(getDefaultPlaylists());
// // // // // //     setSimilarArtists(getDefaultSimilarArtists());
// // // // // //   };

// // // // // //   // ✅ Default Data Functions
// // // // // //   const getDefaultReleases = () => [
// // // // // //     { 
// // // // // //       id: '1', 
// // // // // //       title: 'Mixery', 
// // // // // //       album: `${artistName} - Mixery`,
// // // // // //       image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop',
// // // // // //       plays: '12.5M'
// // // // // //     },
// // // // // //     { 
// // // // // //       id: '2', 
// // // // // //       title: 'Perphone', 
// // // // // //       album: `${artistName} - Overexposed`,
// // // // // //       image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop',
// // // // // //       plays: '8.7M'
// // // // // //     },
// // // // // //     { 
// // // // // //       id: '3', 
// // // // // //       title: 'Astratis', 
// // // // // //       album: `${artistName} - V`,
// // // // // //       image: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=200&h=200&fit=crop',
// // // // // //       plays: '6.3M'
// // // // // //     },
// // // // // //   ];

// // // // // //   const getDefaultPlaylists = () => [
// // // // // //     { 
// // // // // //       id: '1', 
// // // // // //       title: `${artistName}: Start of the best`,
// // // // // //       image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop',
// // // // // //       followers: '2.1M'
// // // // // //     },
// // // // // //     { 
// // // // // //       id: '2', 
// // // // // //       title: `This is ${artistName}`,
// // // // // //       image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
// // // // // //       followers: '3.4M'
// // // // // //     },
// // // // // //   ];

// // // // // //   const getDefaultSimilarArtists = () => [
// // // // // //     { 
// // // // // //       id: '1', 
// // // // // //       name: 'One Republic',
// // // // // //       image: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=200&h=200&fit=crop&crop=face'
// // // // // //     },
// // // // // //     { 
// // // // // //       id: '2', 
// // // // // //       name: 'Coldplay',
// // // // // //       image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop&crop=face'
// // // // // //     },
// // // // // //     { 
// // // // // //       id: '3', 
// // // // // //       name: 'The Weeknd',
// // // // // //       image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=200&h=200&fit=crop&crop=face'
// // // // // //     },
// // // // // //   ];

// // // // // //   // ✅ Favorite Artist Handler
// // // // // //   const handleFavoriteToggle = async () => {
// // // // // //     try {
// // // // // //       if (isFavorite) {
// // // // // //         // Remove from favorites
// // // // // //         await removeFromFavoriteArtists(artistId);
// // // // // //         setIsFavorite(false);
// // // // // //         Alert.alert('Success', 'Artist removed from favorites');
// // // // // //       } else {
// // // // // //         // Add to favorites
// // // // // //         await addToFavoriteArtists(artistId);
// // // // // //         setIsFavorite(true);
// // // // // //         Alert.alert('Success', 'Artist added to favorites');
// // // // // //       }
// // // // // //     } catch (error) {
// // // // // //       console.error('❌ Favorite toggle error:', error);
// // // // // //       Alert.alert('Error', 'Failed to update favorites');
// // // // // //     }
// // // // // //   };

// // // // // //   // ✅ Follow/Unfollow Handler
// // // // // //   const handleFollowToggle = () => {
// // // // // //     setIsFollowing(!isFollowing);
// // // // // //     Alert.alert('Success', isFollowing ? 'Unfollowed artist' : 'Following artist');
// // // // // //   };

// // // // // //   // ✅ Song Press Handler
// // // // // //   const handleSongPress = (song) => {
// // // // // //     navigation.navigate('NowPlayingScreen', { 
// // // // // //       songId: song.id,
// // // // // //       resetToBeginning: true 
// // // // // //     });
// // // // // //   };

// // // // // //   // ✅ Render Functions
// // // // // //   const renderPopularRelease = ({ item }) => (
// // // // // //     <TouchableOpacity 
// // // // // //       style={styles.releaseItem}
// // // // // //       onPress={() => handleSongPress(item)}
// // // // // //     >
// // // // // //       <Image 
// // // // // //         source={{ uri: getImageUrl(item.image || item.thumbnail) }} 
// // // // // //         style={styles.releaseImage}
// // // // // //         resizeMode="cover"
// // // // // //       />
// // // // // //       <View style={styles.releaseText}>
// // // // // //         <Text style={styles.releaseTitle} numberOfLines={1}>
// // // // // //           {item.title || item.name}
// // // // // //         </Text>
// // // // // //         <Text style={styles.releaseAlbum} numberOfLines={1}>
// // // // // //           {item.album || artistName}
// // // // // //         </Text>
// // // // // //         <Text style={styles.releasePlays}>
// // // // // //           {item.plays || item.playCount || '0'} plays
// // // // // //         </Text>
// // // // // //       </View>
// // // // // //       <TouchableOpacity style={styles.moreButton}>
// // // // // //         <Icon name="more-horiz" size={24} color="#b3b3b3" />
// // // // // //       </TouchableOpacity>
// // // // // //     </TouchableOpacity>
// // // // // //   );

// // // // // //   const renderArtistPlaylist = ({ item }) => (
// // // // // //     <TouchableOpacity style={styles.playlistItem}>
// // // // // //       <View style={styles.playlistImageContainer}>
// // // // // //         <Image 
// // // // // //           source={{ uri: getImageUrl(item.image || item.thumbnail) }} 
// // // // // //           style={styles.playlistImage}
// // // // // //           resizeMode="cover"
// // // // // //         />
// // // // // //         <View style={styles.playlistOverlay}>
// // // // // //           <Icon name="play-arrow" size={30} color="#fff" />
// // // // // //         </View>
// // // // // //       </View>
// // // // // //       <Text style={styles.playlistTitle} numberOfLines={2}>
// // // // // //         {item.title || item.name}
// // // // // //       </Text>
// // // // // //       <Text style={styles.playlistFollowers}>
// // // // // //         {item.followers || '0'} followers
// // // // // //       </Text>
// // // // // //     </TouchableOpacity>
// // // // // //   );

// // // // // //   const renderSimilarArtist = ({ item }) => (
// // // // // //     <TouchableOpacity 
// // // // // //       style={styles.similarArtistItem}
// // // // // //       onPress={() => navigation.navigate('ArtistProfileScreen', { 
// // // // // //         artistId: item.id,
// // // // // //         artistName: item.name 
// // // // // //       })}
// // // // // //     >
// // // // // //       <View style={styles.similarArtistImageContainer}>
// // // // // //         <Image 
// // // // // //           source={{ uri: getImageUrl(item.image || item.profilePic) }} 
// // // // // //           style={styles.similarArtistImage}
// // // // // //           resizeMode="cover"
// // // // // //         />
// // // // // //         <View style={styles.verifiedBadge}>
// // // // // //           <Icon name="verified" size={16} color="#1DB954" />
// // // // // //         </View>
// // // // // //       </View>
// // // // // //       <Text style={styles.similarArtistName} numberOfLines={1}>
// // // // // //         {item.name}
// // // // // //       </Text>
// // // // // //       <Text style={styles.artistType}>Artist</Text>
// // // // // //     </TouchableOpacity>
// // // // // //   );

// // // // // //   // ✅ Loading State
// // // // // //   if (isLoading) {
// // // // // //     return (
// // // // // //       <SafeAreaView style={styles.container}>
// // // // // //         <StatusBar barStyle="light-content" backgroundColor="#000" />
// // // // // //         <View style={styles.loadingContainer}>
// // // // // //           <ActivityIndicator size="large" color="#FF3B3B" />
// // // // // //           <Text style={styles.loadingText}>Loading artist profile...</Text>
// // // // // //         </View>
// // // // // //       </SafeAreaView>
// // // // // //     );
// // // // // //   }

// // // // // //   return (
// // // // // //     <SafeAreaView style={styles.container}>
// // // // // //       <StatusBar barStyle="light-content" backgroundColor="#000" />
      
// // // // // //       {/* Header with Back Button */}
// // // // // //       <View style={styles.header}>
// // // // // //         <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
// // // // // //           <Icon name="arrow-back" size={24} color="#fff" />
// // // // // //         </TouchableOpacity>
// // // // // //         <View style={styles.headerTitleContainer}>
// // // // // //           <Text style={styles.headerTitle} numberOfLines={1}>
// // // // // //             {artistData?.name || artistName}
// // // // // //           </Text>
// // // // // //           <Text style={styles.headerSubtitle}>Artist</Text>
// // // // // //         </View>
// // // // // //         <View style={styles.headerRight}>
// // // // // //           <TouchableOpacity 
// // // // // //             style={styles.headerIcon}
// // // // // //             onPress={handleFavoriteToggle}
// // // // // //           >
// // // // // //             <Icon 
// // // // // //               name={isFavorite ? "favorite" : "favorite-border"} 
// // // // // //               size={24} 
// // // // // //               color={isFavorite ? "#FF3B3B" : "#fff"} 
// // // // // //             />
// // // // // //           </TouchableOpacity>
// // // // // //           <TouchableOpacity style={styles.headerIcon}>
// // // // // //             <Icon name="more-vert" size={24} color="#fff" />
// // // // // //           </TouchableOpacity>
// // // // // //         </View>
// // // // // //       </View>

// // // // // //       <ScrollView 
// // // // // //         style={styles.scrollView}
// // // // // //         showsVerticalScrollIndicator={false}
// // // // // //       >
// // // // // //         {/* Artist Header Section */}
// // // // // //         <View style={styles.artistHeader}>
// // // // // //           <View style={styles.artistImageContainer}>
// // // // // //             <Image 
// // // // // //               source={{ uri: getImageUrl(artistData?.image || artistData?.profilePic) }}
// // // // // //               style={styles.artistImage}
// // // // // //               resizeMode="cover"
// // // // // //             />
// // // // // //             <View style={styles.verifiedBadgeLarge}>
// // // // // //               <Icon name="verified" size={28} color="#1DB954" />
// // // // // //             </View>
// // // // // //           </View>
          
// // // // // //           <View style={styles.artistInfo}>
// // // // // //             <Text style={styles.artistName}>
// // // // // //               {artistData?.name || artistName}
// // // // // //             </Text>
// // // // // //             <Text style={styles.artistType}>Artist</Text>
// // // // // //           </View>

// // // // // //           <View style={styles.statsSection}>
// // // // // //             <View style={styles.statItem}>
// // // // // //               <Text style={styles.statNumber}>
// // // // // //                 {artistData?.monthlyListeners || '2.3M'}
// // // // // //               </Text>
// // // // // //               <Text style={styles.statLabel}>Monthly Listeners</Text>
// // // // // //             </View>
// // // // // //             <View style={styles.statItem}>
// // // // // //               <Text style={styles.statNumber}>
// // // // // //                 {artistData?.followers || '12.5M'}
// // // // // //               </Text>
// // // // // //               <Text style={styles.statLabel}>Followers</Text>
// // // // // //             </View>
// // // // // //           </View>

// // // // // //           <View style={styles.actionButtons}>
// // // // // //             <TouchableOpacity style={styles.shuffleButton}>
// // // // // //               <Icon name="shuffle" size={24} color="#000" />
// // // // // //               <Text style={styles.shuffleButtonText}>Shuffle</Text>
// // // // // //             </TouchableOpacity>
// // // // // //             <TouchableOpacity 
// // // // // //               style={[
// // // // // //                 styles.followButton,
// // // // // //                 isFollowing && styles.followingButton
// // // // // //               ]}
// // // // // //               onPress={handleFollowToggle}
// // // // // //             >
// // // // // //               <Text style={[
// // // // // //                 styles.followButtonText,
// // // // // //                 isFollowing && styles.followingButtonText
// // // // // //               ]}>
// // // // // //                 {isFollowing ? 'Following' : 'Follow'}
// // // // // //               </Text>
// // // // // //             </TouchableOpacity>
// // // // // //           </View>
// // // // // //         </View>

// // // // // //         {/* Popular Releases Section */}
// // // // // //         <View style={styles.section}>
// // // // // //           <View style={styles.sectionHeader}>
// // // // // //             <Text style={styles.sectionTitle}>Popular releases</Text>
// // // // // //             <TouchableOpacity>
// // // // // //               <Text style={styles.seeMoreText}>See more</Text>
// // // // // //             </TouchableOpacity>
// // // // // //           </View>
// // // // // //           <FlatList
// // // // // //             data={popularReleases}
// // // // // //             renderItem={renderPopularRelease}
// // // // // //             keyExtractor={item => `release-${item.id}`}
// // // // // //             scrollEnabled={false}
// // // // // //           />
// // // // // //         </View>

// // // // // //         {/* Artist Playlists Section */}
// // // // // //         {artistPlaylists.length > 0 && (
// // // // // //           <View style={styles.section}>
// // // // // //             <View style={styles.sectionHeader}>
// // // // // //               <Text style={styles.sectionTitle}>Artist Playlists</Text>
// // // // // //               <TouchableOpacity>
// // // // // //                 <Text style={styles.seeMoreText}>See more</Text>
// // // // // //               </TouchableOpacity>
// // // // // //             </View>
// // // // // //             <FlatList
// // // // // //               data={artistPlaylists}
// // // // // //               renderItem={renderArtistPlaylist}
// // // // // //               keyExtractor={item => `playlist-${item.id}`}
// // // // // //               horizontal
// // // // // //               showsHorizontalScrollIndicator={false}
// // // // // //               contentContainerStyle={styles.playlistsList}
// // // // // //             />
// // // // // //           </View>
// // // // // //         )}

// // // // // //         {/* Similar Artists Section */}
// // // // // //         {similarArtists.length > 0 && (
// // // // // //           <View style={styles.section}>
// // // // // //             <View style={styles.sectionHeader}>
// // // // // //               <Text style={styles.sectionTitle}>Similar artists</Text>
// // // // // //               <TouchableOpacity>
// // // // // //                 <Text style={styles.seeMoreText}>See more</Text>
// // // // // //               </TouchableOpacity>
// // // // // //             </View>
// // // // // //             <FlatList
// // // // // //               data={similarArtists}
// // // // // //               renderItem={renderSimilarArtist}
// // // // // //               keyExtractor={item => `similar-${item.id}`}
// // // // // //               horizontal
// // // // // //               showsHorizontalScrollIndicator={false}
// // // // // //               contentContainerStyle={styles.similarArtistsList}
// // // // // //             />
// // // // // //           </View>
// // // // // //         )}

// // // // // //         {/* Bottom Padding */}
// // // // // //         <View style={styles.bottomPadding} />
// // // // // //       </ScrollView>
// // // // // //     </SafeAreaView>
// // // // // //   );
// // // // // // };

// // // // // // // Styles same as before (jo aapke paas already hain)
// // // // // // const styles = StyleSheet.create({
// // // // // //   container: {
// // // // // //     flex: 1,
// // // // // //     backgroundColor: '#000',
// // // // // //   },
// // // // // //   loadingContainer: {
// // // // // //     flex: 1,
// // // // // //     justifyContent: 'center',
// // // // // //     alignItems: 'center',
// // // // // //     backgroundColor: '#000',
// // // // // //   },
// // // // // //   loadingText: {
// // // // // //     color: '#fff',
// // // // // //     marginTop: 10,
// // // // // //     fontSize: 16,
// // // // // //   },
// // // // // //   header: {
// // // // // //     flexDirection: 'row',
// // // // // //     alignItems: 'center',
// // // // // //     paddingHorizontal: 16,
// // // // // //     paddingVertical: 12,
// // // // // //     borderBottomWidth: 1,
// // // // // //     borderBottomColor: '#282828',
// // // // // //   },
// // // // // //   backButton: {
// // // // // //     padding: 4,
// // // // // //   },
// // // // // //   headerTitleContainer: {
// // // // // //     flex: 1,
// // // // // //     alignItems: 'center',
// // // // // //   },
// // // // // //   headerTitle: {
// // // // // //     fontSize: 16,
// // // // // //     fontWeight: 'bold',
// // // // // //     color: '#fff',
// // // // // //   },
// // // // // //   headerSubtitle: {
// // // // // //     fontSize: 12,
// // // // // //     color: '#b3b3b3',
// // // // // //   },
// // // // // //   headerRight: {
// // // // // //     flexDirection: 'row',
// // // // // //     alignItems: 'center',
// // // // // //   },
// // // // // //   headerIcon: {
// // // // // //     padding: 4,
// // // // // //     marginLeft: 12,
// // // // // //   },
// // // // // //   scrollView: {
// // // // // //     flex: 1,
// // // // // //   },
// // // // // //   artistHeader: {
// // // // // //     padding: 24,
// // // // // //     alignItems: 'center',
// // // // // //     borderBottomWidth: 1,
// // // // // //     borderBottomColor: '#282828',
// // // // // //   },
// // // // // //   artistImageContainer: {
// // // // // //     marginBottom: 20,
// // // // // //     position: 'relative',
// // // // // //   },
// // // // // //   artistImage: {
// // // // // //     width: 150,
// // // // // //     height: 150,
// // // // // //     borderRadius: 75,
// // // // // //   },
// // // // // //   verifiedBadgeLarge: {
// // // // // //     position: 'absolute',
// // // // // //     bottom: 5,
// // // // // //     right: 5,
// // // // // //     backgroundColor: '#000',
// // // // // //     borderRadius: 15,
// // // // // //     padding: 4,
// // // // // //   },
// // // // // //   artistInfo: {
// // // // // //     alignItems: 'center',
// // // // // //     marginBottom: 20,
// // // // // //   },
// // // // // //   artistName: {
// // // // // //     fontSize: 32,
// // // // // //     fontWeight: 'bold',
// // // // // //     color: '#fff',
// // // // // //     marginBottom: 4,
// // // // // //     textAlign: 'center',
// // // // // //   },
// // // // // //   artistType: {
// // // // // //     fontSize: 14,
// // // // // //     color: '#b3b3b3',
// // // // // //     textTransform: 'uppercase',
// // // // // //     letterSpacing: 1,
// // // // // //   },
// // // // // //   statsSection: {
// // // // // //     flexDirection: 'row',
// // // // // //     justifyContent: 'space-around',
// // // // // //     width: '100%',
// // // // // //     marginBottom: 20,
// // // // // //   },
// // // // // //   statItem: {
// // // // // //     alignItems: 'center',
// // // // // //   },
// // // // // //   statNumber: {
// // // // // //     fontSize: 18,
// // // // // //     fontWeight: 'bold',
// // // // // //     color: '#fff',
// // // // // //     marginBottom: 4,
// // // // // //   },
// // // // // //   statLabel: {
// // // // // //     fontSize: 12,
// // // // // //     color: '#b3b3b3',
// // // // // //   },
// // // // // //   actionButtons: {
// // // // // //     flexDirection: 'row',
// // // // // //     justifyContent: 'center',
// // // // // //     width: '100%',
// // // // // //     gap: 12,
// // // // // //   },
// // // // // //   shuffleButton: {
// // // // // //     flexDirection: 'row',
// // // // // //     alignItems: 'center',
// // // // // //     backgroundColor: '#FF3B3B',
// // // // // //     paddingHorizontal: 24,
// // // // // //     paddingVertical: 12,
// // // // // //     borderRadius: 25,
// // // // // //     gap: 8,
// // // // // //   },
// // // // // //   shuffleButtonText: {
// // // // // //     fontSize: 14,
// // // // // //     fontWeight: 'bold',
// // // // // //     color: '#000',
// // // // // //   },
// // // // // //   followButton: {
// // // // // //     backgroundColor: 'transparent',
// // // // // //     borderWidth: 1,
// // // // // //     borderColor: '#b3b3b3',
// // // // // //     paddingHorizontal: 32,
// // // // // //     paddingVertical: 12,
// // // // // //     borderRadius: 25,
// // // // // //   },
// // // // // //   followingButton: {
// // // // // //     backgroundColor: '#1DB954',
// // // // // //     borderColor: '#1DB954',
// // // // // //   },
// // // // // //   followButtonText: {
// // // // // //     fontSize: 14,
// // // // // //     fontWeight: 'bold',
// // // // // //     color: '#fff',
// // // // // //   },
// // // // // //   followingButtonText: {
// // // // // //     color: '#000',
// // // // // //   },
// // // // // //   section: {
// // // // // //     padding: 20,
// // // // // //     borderBottomWidth: 1,
// // // // // //     borderBottomColor: '#282828',
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
// // // // // //   seeMoreText: {
// // // // // //     fontSize: 14,
// // // // // //     color: '#b3b3b3',
// // // // // //     fontWeight: '600',
// // // // // //   },
// // // // // //   releaseItem: {
// // // // // //     flexDirection: 'row',
// // // // // //     alignItems: 'center',
// // // // // //     marginBottom: 16,
// // // // // //     backgroundColor: 'rgba(255,255,255,0.05)',
// // // // // //     borderRadius: 8,
// // // // // //     padding: 12,
// // // // // //   },
// // // // // //   releaseImage: {
// // // // // //     width: 60,
// // // // // //     height: 60,
// // // // // //     borderRadius: 4,
// // // // // //     marginRight: 12,
// // // // // //   },
// // // // // //   releaseText: {
// // // // // //     flex: 1,
// // // // // //   },
// // // // // //   releaseTitle: {
// // // // // //     fontSize: 16,
// // // // // //     fontWeight: '600',
// // // // // //     color: '#fff',
// // // // // //     marginBottom: 4,
// // // // // //   },
// // // // // //   releaseAlbum: {
// // // // // //     fontSize: 14,
// // // // // //     color: '#b3b3b3',
// // // // // //     marginBottom: 2,
// // // // // //   },
// // // // // //   releasePlays: {
// // // // // //     fontSize: 12,
// // // // // //     color: '#b3b3b3',
// // // // // //   },
// // // // // //   moreButton: {
// // // // // //     padding: 4,
// // // // // //   },
// // // // // //   playlistsList: {
// // // // // //     paddingRight: 16,
// // // // // //   },
// // // // // //   playlistItem: {
// // // // // //     width: 160,
// // // // // //     marginRight: 16,
// // // // // //   },
// // // // // //   playlistImageContainer: {
// // // // // //     width: 160,
// // // // // //     height: 160,
// // // // // //     borderRadius: 8,
// // // // // //     marginBottom: 12,
// // // // // //     position: 'relative',
// // // // // //     overflow: 'hidden',
// // // // // //   },
// // // // // //   playlistImage: {
// // // // // //     width: '100%',
// // // // // //     height: '100%',
// // // // // //   },
// // // // // //   playlistOverlay: {
// // // // // //     ...StyleSheet.absoluteFillObject,
// // // // // //     backgroundColor: 'rgba(0,0,0,0.5)',
// // // // // //     justifyContent: 'center',
// // // // // //     alignItems: 'center',
// // // // // //     opacity: 0,
// // // // // //   },
// // // // // //   playlistTitle: {
// // // // // //     fontSize: 14,
// // // // // //     fontWeight: '600',
// // // // // //     color: '#fff',
// // // // // //     marginBottom: 4,
// // // // // //   },
// // // // // //   playlistFollowers: {
// // // // // //     fontSize: 12,
// // // // // //     color: '#b3b3b3',
// // // // // //   },
// // // // // //   similarArtistsList: {
// // // // // //     paddingRight: 16,
// // // // // //   },
// // // // // //   similarArtistItem: {
// // // // // //     alignItems: 'center',
// // // // // //     marginRight: 20,
// // // // // //     width: 100,
// // // // // //   },
// // // // // //   similarArtistImageContainer: {
// // // // // //     width: 100,
// // // // // //     height: 100,
// // // // // //     borderRadius: 50,
// // // // // //     marginBottom: 8,
// // // // // //     position: 'relative',
// // // // // //   },
// // // // // //   similarArtistImage: {
// // // // // //     width: '100%',
// // // // // //     height: '100%',
// // // // // //     borderRadius: 50,
// // // // // //   },
// // // // // //   verifiedBadge: {
// // // // // //     position: 'absolute',
// // // // // //     bottom: 2,
// // // // // //     right: 2,
// // // // // //     backgroundColor: '#000',
// // // // // //     borderRadius: 10,
// // // // // //     padding: 2,
// // // // // //   },
// // // // // //   similarArtistName: {
// // // // // //     fontSize: 14,
// // // // // //     fontWeight: '600',
// // // // // //     color: '#fff',
// // // // // //     textAlign: 'center',
// // // // // //     marginBottom: 2,
// // // // // //   },
// // // // // //   bottomPadding: {
// // // // // //     height: 20,
// // // // // //   },
// // // // // // });

// // // // // // export default ArtistProfileScreen;


// // // // // import React, { useState, useEffect } from 'react';
// // // // // import {
// // // // //   View,
// // // // //   Text,
// // // // //   ScrollView,
// // // // //   TouchableOpacity,
// // // // //   StyleSheet,
// // // // //   StatusBar,
// // // // //   SafeAreaView,
// // // // //   Image,
// // // // //   FlatList,
// // // // //   Dimensions,
// // // // //   ActivityIndicator,
// // // // //   Alert
// // // // // } from 'react-native';
// // // // // import Icon from 'react-native-vector-icons/MaterialIcons';
// // // // // import { useNavigation } from '@react-navigation/native';
// // // // // import { getDataWithToken, addToFavoriteArtists, removeFromFavoriteArtists } from '../Services/mobile-api';
// // // // // import { mobile_siteConfig } from '../Services/mobile-siteConfig';

// // // // // const { width } = Dimensions.get('window');

// // // // // // ✅ IMAGE URL HELPER FUNCTION
// // // // // const getImageUrl = (imagePath) => {
// // // // //   if (!imagePath || imagePath === 'null' || imagePath === 'undefined') {
// // // // //     return 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop&crop=face';
// // // // //   }
  
// // // // //   if (imagePath.startsWith('http')) {
// // // // //     return imagePath;
// // // // //   }
  
// // // // //   if (imagePath.startsWith('/')) {
// // // // //     return `${mobile_siteConfig.IMAGE_BASE_URL}${imagePath}`;
// // // // //   }
  
// // // // //   return 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop&crop=face';
// // // // // };

// // // // // const ArtistProfileScreen = ({ route }) => {
// // // // //   const navigation = useNavigation();
// // // // //   const { artistId, artistName = 'Artist' } = route.params || {};

// // // // //   // ✅ State Variables
// // // // //   const [artistData, setArtistData] = useState(null);
// // // // //   const [songs, setSongs] = useState([]);
// // // // //   const [playlists, setPlaylists] = useState([]);
// // // // //   const [isLoading, setIsLoading] = useState(true);
// // // // //   const [isFollowing, setIsFollowing] = useState(false);
// // // // //   const [isFavorite, setIsFavorite] = useState(false);

// // // // //   // ✅ Fetch Artist Data
// // // // //   useEffect(() => {
// // // // //     if (artistId) {
// // // // //       fetchArtistData();
// // // // //     }
// // // // //   }, [artistId]);

// // // // //   // ✅ API: Fetch Artist Profile Data
// // // // //   const fetchArtistData = async () => {
// // // // //     try {
// // // // //       setIsLoading(true);
// // // // //       console.log('🎵 Fetching artist data for ID:', artistId);

// // // // //       const response = await getDataWithToken(`user/artist/${artistId}`);
// // // // //       console.log('🎵 Artist Profile API Response:', response);

// // // // //       if (response && response.success) {
// // // // //         const data = response.data;
        
// // // // //         // ✅ Set Main Artist Data (EXACTLY FROM API)
// // // // //         setArtistData(data.artist);
        
// // // // //         // ✅ Set Songs (EXACTLY FROM API)
// // // // //         if (data.songs && Array.isArray(data.songs)) {
// // // // //           setSongs(data.songs);
// // // // //         }
        
// // // // //         // ✅ Set Playlists (EXACTLY FROM API)
// // // // //         if (data.publicPlaylists && Array.isArray(data.publicPlaylists)) {
// // // // //           setPlaylists(data.publicPlaylists);
// // // // //         }

// // // // //         console.log('✅ Data set from API:', {
// // // // //           artist: data.artist,
// // // // //           songsCount: data.songs?.length,
// // // // //           playlistsCount: data.publicPlaylists?.length
// // // // //         });

// // // // //       } else {
// // // // //         console.log('❌ API response not successful');
// // // // //         Alert.alert('Error', 'Failed to load artist data');
// // // // //       }
// // // // //     } catch (error) {
// // // // //       console.error('❌ Artist profile fetch error:', error);
// // // // //       Alert.alert('Error', 'Failed to load artist profile');
// // // // //     } finally {
// // // // //       setIsLoading(false);
// // // // //     }
// // // // //   };

// // // // //   // ✅ Format time helper
// // // // //   const formatTime = (seconds) => {
// // // // //     const mins = Math.floor(seconds / 60);
// // // // //     const secs = seconds % 60;
// // // // //     return `${mins}:${secs.toString().padStart(2, '0')}`;
// // // // //   };

// // // // //   // ✅ Favorite Artist Handler
// // // // //   const handleFavoriteToggle = async () => {
// // // // //     try {
// // // // //       if (isFavorite) {
// // // // //         await removeFromFavoriteArtists(artistId);
// // // // //         setIsFavorite(false);
// // // // //         Alert.alert('Success', 'Artist removed from favorites');
// // // // //       } else {
// // // // //         await addToFavoriteArtists(artistId);
// // // // //         setIsFavorite(true);
// // // // //         Alert.alert('Success', 'Artist added to favorites');
// // // // //       }
// // // // //     } catch (error) {
// // // // //       console.error('❌ Favorite toggle error:', error);
// // // // //       Alert.alert('Error', 'Failed to update favorites');
// // // // //     }
// // // // //   };

// // // // //   // ✅ Follow/Unfollow Handler
// // // // //   const handleFollowToggle = () => {
// // // // //     setIsFollowing(!isFollowing);
// // // // //     Alert.alert('Success', isFollowing ? 'Unfollowed artist' : 'Following artist');
// // // // //   };

// // // // //   // ✅ Song Press Handler - PROPER DATA PASSING
// // // // //   const handleSongPress = (song) => {
// // // // //     console.log('🎵 Song pressed:', song);
// // // // //     navigation.navigate('NowPlayingScreen', { 
// // // // //       songId: song.id,
// // // // //       songData: song, // ✅ Pure song data pass karo
// // // // //       resetToBeginning: true 
// // // // //     });
// // // // //   };

// // // // //   // ✅ Render Song Item - WITH EXACT API DATA
// // // // //   const renderSongItem = ({ item }) => (
// // // // //     <TouchableOpacity 
// // // // //       style={styles.songItem}
// // // // //       onPress={() => handleSongPress(item)}
// // // // //     >
// // // // //       <Image 
// // // // //         source={{ uri: getImageUrl(item.coverImage) }} 
// // // // //         style={styles.songImage}
// // // // //         resizeMode="cover"
// // // // //         defaultSource={{ uri: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop' }}
// // // // //       />
// // // // //       <View style={styles.songInfo}>
// // // // //         <Text style={styles.songTitle} numberOfLines={1}>
// // // // //           {item.title}
// // // // //         </Text>
// // // // //         <Text style={styles.songAlbum} numberOfLines={1}>
// // // // //           {item.album} • {item.genre?.name}
// // // // //         </Text>
// // // // //         <Text style={styles.songMeta}>
// // // // //           {formatTime(item.duration)} • {item.playCount} plays
// // // // //         </Text>
// // // // //       </View>
// // // // //       <TouchableOpacity style={styles.moreButton}>
// // // // //         <Icon name="more-horiz" size={24} color="#b3b3b3" />
// // // // //       </TouchableOpacity>
// // // // //     </TouchableOpacity>
// // // // //   );

// // // // //   // ✅ Render Playlist Item - WITH EXACT API DATA
// // // // //   const renderPlaylistItem = ({ item }) => (
// // // // //     <TouchableOpacity style={styles.playlistItem}>
// // // // //       <View style={styles.playlistImageContainer}>
// // // // //         <Image 
// // // // //           source={{ uri: getImageUrl(item.artistSongs?.[0]?.coverImage) }} 
// // // // //           style={styles.playlistImage}
// // // // //           resizeMode="cover"
// // // // //           defaultSource={{ uri: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop' }}
// // // // //         />
// // // // //         <View style={styles.playlistOverlay}>
// // // // //           <Icon name="play-arrow" size={30} color="#fff" />
// // // // //         </View>
// // // // //       </View>
// // // // //       <Text style={styles.playlistTitle} numberOfLines={2}>
// // // // //         {item.title}
// // // // //       </Text>
// // // // //       <Text style={styles.playlistInfo}>
// // // // //         {item.totalSongs} songs • {item.description}
// // // // //       </Text>
// // // // //     </TouchableOpacity>
// // // // //   );

// // // // //   // ✅ Loading State
// // // // //   if (isLoading) {
// // // // //     return (
// // // // //       <SafeAreaView style={styles.container}>
// // // // //         <StatusBar barStyle="light-content" backgroundColor="#000" />
// // // // //         <View style={styles.loadingContainer}>
// // // // //           <ActivityIndicator size="large" color="#FF3B3B" />
// // // // //           <Text style={styles.loadingText}>Loading artist profile...</Text>
// // // // //         </View>
// // // // //       </SafeAreaView>
// // // // //     );
// // // // //   }

// // // // //   // ✅ If no artist data
// // // // //   if (!artistData) {
// // // // //     return (
// // // // //       <SafeAreaView style={styles.container}>
// // // // //         <StatusBar barStyle="light-content" backgroundColor="#000" />
// // // // //         <View style={styles.errorContainer}>
// // // // //           <Icon name="error-outline" size={64} color="#b3b3b3" />
// // // // //           <Text style={styles.errorText}>Artist not found</Text>
// // // // //           <TouchableOpacity 
// // // // //             style={styles.retryButton}
// // // // //             onPress={fetchArtistData}
// // // // //           >
// // // // //             <Text style={styles.retryButtonText}>Retry</Text>
// // // // //           </TouchableOpacity>
// // // // //         </View>
// // // // //       </SafeAreaView>
// // // // //     );
// // // // //   }

// // // // //   return (
// // // // //     <SafeAreaView style={styles.container}>
// // // // //       <StatusBar barStyle="light-content" backgroundColor="#000" />
      
// // // // //       {/* Header with Back Button */}
// // // // //       <View style={styles.header}>
// // // // //         <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
// // // // //           <Icon name="arrow-back" size={24} color="#fff" />
// // // // //         </TouchableOpacity>
// // // // //         <View style={styles.headerTitleContainer}>
// // // // //           <Text style={styles.headerTitle} numberOfLines={1}>
// // // // //             {artistData.name}
// // // // //           </Text>
// // // // //           <Text style={styles.headerSubtitle}>Artist</Text>
// // // // //         </View>
// // // // //         <View style={styles.headerRight}>
// // // // //           <TouchableOpacity 
// // // // //             style={styles.headerIcon}
// // // // //             onPress={handleFavoriteToggle}
// // // // //           >
// // // // //             <Icon 
// // // // //               name={isFavorite ? "favorite" : "favorite-border"} 
// // // // //               size={24} 
// // // // //               color={isFavorite ? "#FF3B3B" : "#fff"} 
// // // // //             />
// // // // //           </TouchableOpacity>
// // // // //           <TouchableOpacity style={styles.headerIcon}>
// // // // //             <Icon name="more-vert" size={24} color="#fff" />
// // // // //           </TouchableOpacity>
// // // // //         </View>
// // // // //       </View>

// // // // //       <ScrollView 
// // // // //         style={styles.scrollView}
// // // // //         showsVerticalScrollIndicator={false}
// // // // //       >
// // // // //         {/* Artist Header Section - WITH EXACT API DATA */}
// // // // //         <View style={styles.artistHeader}>
// // // // //           <View style={styles.artistImageContainer}>
// // // // //             <Image 
// // // // //               source={{ uri: getImageUrl(artistData.profilePic) }}
// // // // //               style={styles.artistImage}
// // // // //               resizeMode="cover"
// // // // //               defaultSource={{ uri: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop&crop=face' }}
// // // // //             />
// // // // //             {artistData.isVerified && (
// // // // //               <View style={styles.verifiedBadgeLarge}>
// // // // //                 <Icon name="verified" size={28} color="#1DB954" />
// // // // //               </View>
// // // // //             )}
// // // // //           </View>
          
// // // // //           <View style={styles.artistInfo}>
// // // // //             <Text style={styles.artistName}>
// // // // //               {artistData.name}
// // // // //             </Text>
// // // // //             <Text style={styles.artistStageName}>
// // // // //               {artistData.stageName}
// // // // //             </Text>
// // // // //             {artistData.bio && (
// // // // //               <Text style={styles.artistBio}>
// // // // //                 {artistData.bio}
// // // // //               </Text>
// // // // //             )}
// // // // //           </View>

// // // // //           <View style={styles.statsSection}>
// // // // //             <View style={styles.statItem}>
// // // // //               <Text style={styles.statNumber}>
// // // // //                 {artistData.totalSongs || 0}
// // // // //               </Text>
// // // // //               <Text style={styles.statLabel}>Songs</Text>
// // // // //             </View>
// // // // //             <View style={styles.statItem}>
// // // // //               <Text style={styles.statNumber}>
// // // // //                 {artistData.followers || 0}
// // // // //               </Text>
// // // // //               <Text style={styles.statLabel}>Followers</Text>
// // // // //             </View>
// // // // //             <View style={styles.statItem}>
// // // // //               <Text style={styles.statNumber}>
// // // // //                 {artistData.totalPlaylists || 0}
// // // // //               </Text>
// // // // //               <Text style={styles.statLabel}>Playlists</Text>
// // // // //             </View>
// // // // //           </View>

// // // // //           <View style={styles.actionButtons}>
// // // // //             <TouchableOpacity style={styles.shuffleButton}>
// // // // //               <Icon name="shuffle" size={24} color="#000" />
// // // // //               <Text style={styles.shuffleButtonText}>Shuffle</Text>
// // // // //             </TouchableOpacity>
// // // // //             <TouchableOpacity 
// // // // //               style={[
// // // // //                 styles.followButton,
// // // // //                 isFollowing && styles.followingButton
// // // // //               ]}
// // // // //               onPress={handleFollowToggle}
// // // // //             >
// // // // //               <Text style={[
// // // // //                 styles.followButtonText,
// // // // //                 isFollowing && styles.followingButtonText
// // // // //               ]}>
// // // // //                 {isFollowing ? 'Following' : 'Follow'}
// // // // //               </Text>
// // // // //             </TouchableOpacity>
// // // // //           </View>
// // // // //         </View>

// // // // //         {/* Songs Section - ONLY IF SONGS EXIST */}
// // // // //         {songs.length > 0 && (
// // // // //           <View style={styles.section}>
// // // // //             <View style={styles.sectionHeader}>
// // // // //               <Text style={styles.sectionTitle}>Popular Songs</Text>
// // // // //               <Text style={styles.sectionCount}>{songs.length} songs</Text>
// // // // //             </View>
// // // // //             <FlatList
// // // // //               data={songs}
// // // // //               renderItem={renderSongItem}
// // // // //               keyExtractor={item => `song-${item.id}`}
// // // // //               scrollEnabled={false}
// // // // //             />
// // // // //           </View>
// // // // //         )}

// // // // //         {/* Playlists Section - ONLY IF PLAYLISTS EXIST */}
// // // // //         {playlists.length > 0 && (
// // // // //           <View style={styles.section}>
// // // // //             <View style={styles.sectionHeader}>
// // // // //               <Text style={styles.sectionTitle}>Public Playlists</Text>
// // // // //               <Text style={styles.sectionCount}>{playlists.length} playlists</Text>
// // // // //             </View>
// // // // //             <FlatList
// // // // //               data={playlists}
// // // // //               renderItem={renderPlaylistItem}
// // // // //               keyExtractor={item => `playlist-${item.id}`}
// // // // //               horizontal
// // // // //               showsHorizontalScrollIndicator={false}
// // // // //               contentContainerStyle={styles.playlistsList}
// // // // //             />
// // // // //           </View>
// // // // //         )}

// // // // //         {/* No Content Message */}
// // // // //         {songs.length === 0 && playlists.length === 0 && (
// // // // //           <View style={styles.noContent}>
// // // // //             <Icon name="music-off" size={64} color="#b3b3b3" />
// // // // //             <Text style={styles.noContentText}>No content available</Text>
// // // // //             <Text style={styles.noContentSubtext}>
// // // // //               This artist hasn't uploaded any songs or playlists yet.
// // // // //             </Text>
// // // // //           </View>
// // // // //         )}

// // // // //         {/* Bottom Padding */}
// // // // //         <View style={styles.bottomPadding} />
// // // // //       </ScrollView>
// // // // //     </SafeAreaView>
// // // // //   );
// // // // // };

// // // // // // ✅ Styles - Updated for better layout
// // // // // const styles = StyleSheet.create({
// // // // //   container: {
// // // // //     flex: 1,
// // // // //     backgroundColor: '#000',
// // // // //   },
// // // // //   loadingContainer: {
// // // // //     flex: 1,
// // // // //     justifyContent: 'center',
// // // // //     alignItems: 'center',
// // // // //     backgroundColor: '#000',
// // // // //   },
// // // // //   loadingText: {
// // // // //     color: '#fff',
// // // // //     marginTop: 10,
// // // // //     fontSize: 16,
// // // // //   },
// // // // //   errorContainer: {
// // // // //     flex: 1,
// // // // //     justifyContent: 'center',
// // // // //     alignItems: 'center',
// // // // //     backgroundColor: '#000',
// // // // //     padding: 20,
// // // // //   },
// // // // //   errorText: {
// // // // //     color: '#fff',
// // // // //     fontSize: 18,
// // // // //     fontWeight: 'bold',
// // // // //     marginTop: 16,
// // // // //     marginBottom: 8,
// // // // //   },
// // // // //   retryButton: {
// // // // //     backgroundColor: '#FF3B3B',
// // // // //     paddingHorizontal: 24,
// // // // //     paddingVertical: 12,
// // // // //     borderRadius: 25,
// // // // //     marginTop: 16,
// // // // //   },
// // // // //   retryButtonText: {
// // // // //     color: '#fff',
// // // // //     fontSize: 16,
// // // // //     fontWeight: 'bold',
// // // // //   },
// // // // //   header: {
// // // // //     flexDirection: 'row',
// // // // //     alignItems: 'center',
// // // // //     paddingHorizontal: 16,
// // // // //     paddingVertical: 12,
// // // // //     borderBottomWidth: 1,
// // // // //     borderBottomColor: '#282828',
// // // // //   },
// // // // //   backButton: {
// // // // //     padding: 4,
// // // // //   },
// // // // //   headerTitleContainer: {
// // // // //     flex: 1,
// // // // //     alignItems: 'center',
// // // // //   },
// // // // //   headerTitle: {
// // // // //     fontSize: 16,
// // // // //     fontWeight: 'bold',
// // // // //     color: '#fff',
// // // // //   },
// // // // //   headerSubtitle: {
// // // // //     fontSize: 12,
// // // // //     color: '#b3b3b3',
// // // // //   },
// // // // //   headerRight: {
// // // // //     flexDirection: 'row',
// // // // //     alignItems: 'center',
// // // // //   },
// // // // //   headerIcon: {
// // // // //     padding: 4,
// // // // //     marginLeft: 12,
// // // // //   },
// // // // //   scrollView: {
// // // // //     flex: 1,
// // // // //   },
// // // // //   artistHeader: {
// // // // //     padding: 24,
// // // // //     alignItems: 'center',
// // // // //     borderBottomWidth: 1,
// // // // //     borderBottomColor: '#282828',
// // // // //   },
// // // // //   artistImageContainer: {
// // // // //     marginBottom: 20,
// // // // //     position: 'relative',
// // // // //   },
// // // // //   artistImage: {
// // // // //     width: 150,
// // // // //     height: 150,
// // // // //     borderRadius: 75,
// // // // //   },
// // // // //   verifiedBadgeLarge: {
// // // // //     position: 'absolute',
// // // // //     bottom: 5,
// // // // //     right: 5,
// // // // //     backgroundColor: '#000',
// // // // //     borderRadius: 15,
// // // // //     padding: 4,
// // // // //   },
// // // // //   artistInfo: {
// // // // //     alignItems: 'center',
// // // // //     marginBottom: 20,
// // // // //   },
// // // // //   artistName: {
// // // // //     fontSize: 32,
// // // // //     fontWeight: 'bold',
// // // // //     color: '#fff',
// // // // //     marginBottom: 4,
// // // // //     textAlign: 'center',
// // // // //   },
// // // // //   artistStageName: {
// // // // //     fontSize: 16,
// // // // //     color: '#b3b3b3',
// // // // //     marginBottom: 8,
// // // // //     fontStyle: 'italic',
// // // // //   },
// // // // //   artistBio: {
// // // // //     fontSize: 14,
// // // // //     color: '#b3b3b3',
// // // // //     textAlign: 'center',
// // // // //     lineHeight: 20,
// // // // //     maxWidth: '80%',
// // // // //   },
// // // // //   statsSection: {
// // // // //     flexDirection: 'row',
// // // // //     justifyContent: 'space-around',
// // // // //     width: '100%',
// // // // //     marginBottom: 20,
// // // // //   },
// // // // //   statItem: {
// // // // //     alignItems: 'center',
// // // // //     flex: 1,
// // // // //   },
// // // // //   statNumber: {
// // // // //     fontSize: 18,
// // // // //     fontWeight: 'bold',
// // // // //     color: '#fff',
// // // // //     marginBottom: 4,
// // // // //   },
// // // // //   statLabel: {
// // // // //     fontSize: 12,
// // // // //     color: '#b3b3b3',
// // // // //     textAlign: 'center',
// // // // //   },
// // // // //   actionButtons: {
// // // // //     flexDirection: 'row',
// // // // //     justifyContent: 'center',
// // // // //     width: '100%',
// // // // //     gap: 12,
// // // // //   },
// // // // //   shuffleButton: {
// // // // //     flexDirection: 'row',
// // // // //     alignItems: 'center',
// // // // //     backgroundColor: '#FF3B3B',
// // // // //     paddingHorizontal: 24,
// // // // //     paddingVertical: 12,
// // // // //     borderRadius: 25,
// // // // //     gap: 8,
// // // // //   },
// // // // //   shuffleButtonText: {
// // // // //     fontSize: 14,
// // // // //     fontWeight: 'bold',
// // // // //     color: '#000',
// // // // //   },
// // // // //   followButton: {
// // // // //     backgroundColor: 'transparent',
// // // // //     borderWidth: 1,
// // // // //     borderColor: '#b3b3b3',
// // // // //     paddingHorizontal: 32,
// // // // //     paddingVertical: 12,
// // // // //     borderRadius: 25,
// // // // //   },
// // // // //   followingButton: {
// // // // //     backgroundColor: '#1DB954',
// // // // //     borderColor: '#1DB954',
// // // // //   },
// // // // //   followButtonText: {
// // // // //     fontSize: 14,
// // // // //     fontWeight: 'bold',
// // // // //     color: '#fff',
// // // // //   },
// // // // //   followingButtonText: {
// // // // //     color: '#000',
// // // // //   },
// // // // //   section: {
// // // // //     padding: 20,
// // // // //     borderBottomWidth: 1,
// // // // //     borderBottomColor: '#282828',
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
// // // // //   sectionCount: {
// // // // //     fontSize: 14,
// // // // //     color: '#b3b3b3',
// // // // //   },
// // // // //   songItem: {
// // // // //     flexDirection: 'row',
// // // // //     alignItems: 'center',
// // // // //     marginBottom: 16,
// // // // //     backgroundColor: 'rgba(255,255,255,0.05)',
// // // // //     borderRadius: 8,
// // // // //     padding: 12,
// // // // //   },
// // // // //   songImage: {
// // // // //     width: 60,
// // // // //     height: 60,
// // // // //     borderRadius: 4,
// // // // //     marginRight: 12,
// // // // //   },
// // // // //   songInfo: {
// // // // //     flex: 1,
// // // // //   },
// // // // //   songTitle: {
// // // // //     fontSize: 16,
// // // // //     fontWeight: '600',
// // // // //     color: '#fff',
// // // // //     marginBottom: 4,
// // // // //   },
// // // // //   songAlbum: {
// // // // //     fontSize: 14,
// // // // //     color: '#b3b3b3',
// // // // //     marginBottom: 2,
// // // // //   },
// // // // //   songMeta: {
// // // // //     fontSize: 12,
// // // // //     color: '#666',
// // // // //   },
// // // // //   moreButton: {
// // // // //     padding: 4,
// // // // //   },
// // // // //   playlistsList: {
// // // // //     paddingRight: 16,
// // // // //   },
// // // // //   playlistItem: {
// // // // //     width: 160,
// // // // //     marginRight: 16,
// // // // //   },
// // // // //   playlistImageContainer: {
// // // // //     width: 160,
// // // // //     height: 160,
// // // // //     borderRadius: 8,
// // // // //     marginBottom: 12,
// // // // //     position: 'relative',
// // // // //     overflow: 'hidden',
// // // // //   },
// // // // //   playlistImage: {
// // // // //     width: '100%',
// // // // //     height: '100%',
// // // // //   },
// // // // //   playlistOverlay: {
// // // // //     ...StyleSheet.absoluteFillObject,
// // // // //     backgroundColor: 'rgba(0,0,0,0.5)',
// // // // //     justifyContent: 'center',
// // // // //     alignItems: 'center',
// // // // //     opacity: 0,
// // // // //   },
// // // // //   playlistTitle: {
// // // // //     fontSize: 14,
// // // // //     fontWeight: '600',
// // // // //     color: '#fff',
// // // // //     marginBottom: 4,
// // // // //   },
// // // // //   playlistInfo: {
// // // // //     fontSize: 12,
// // // // //     color: '#b3b3b3',
// // // // //   },
// // // // //   noContent: {
// // // // //     alignItems: 'center',
// // // // //     justifyContent: 'center',
// // // // //     paddingVertical: 60,
// // // // //     paddingHorizontal: 20,
// // // // //   },
// // // // //   noContentText: {
// // // // //     fontSize: 18,
// // // // //     color: '#fff',
// // // // //     fontWeight: 'bold',
// // // // //     marginTop: 16,
// // // // //     marginBottom: 8,
// // // // //     textAlign: 'center',
// // // // //   },
// // // // //   noContentSubtext: {
// // // // //     fontSize: 14,
// // // // //     color: '#b3b3b3',
// // // // //     textAlign: 'center',
// // // // //     lineHeight: 20,
// // // // //   },
// // // // //   bottomPadding: {
// // // // //     height: 20,
// // // // //   },
// // // // // });

// // // // // export default ArtistProfileScreen;



// // // // // ArtistProfileScreen.js - FIXED VERSION

// // // // import React, { useState, useEffect } from 'react';
// // // // import {
// // // //   View,
// // // //   Text,
// // // //   ScrollView,
// // // //   TouchableOpacity,
// // // //   StyleSheet,
// // // //   StatusBar,
// // // //   SafeAreaView,
// // // //   Image,
// // // //   FlatList,
// // // //   Dimensions,
// // // //   ActivityIndicator,
// // // //   Alert
// // // // } from 'react-native';
// // // // import Icon from 'react-native-vector-icons/MaterialIcons';
// // // // import { useNavigation } from '@react-navigation/native';
// // // // import { getDataWithToken, addToFavoriteArtists, removeFromFavoriteArtists } from '../Services/mobile-api';
// // // // import { mobile_siteConfig } from '../Services/mobile-siteConfig';
// // // // import { useAudio } from '../contexts/AudioContext'; // ✅ Audio Context Import

// // // // const { width } = Dimensions.get('window');

// // // // // ✅ IMAGE URL HELPER FUNCTION
// // // // const getImageUrl = (imagePath) => {
// // // //   if (!imagePath || imagePath === 'null' || imagePath === 'undefined') {
// // // //     return 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop&crop=face';
// // // //   }
  
// // // //   if (imagePath.startsWith('http')) {
// // // //     return imagePath;
// // // //   }
  
// // // //   if (imagePath.startsWith('/')) {
// // // //     return `${mobile_siteConfig.IMAGE_BASE_URL}${imagePath}`;
// // // //   }
  
// // // //   return 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop&crop=face';
// // // // };

// // // // const ArtistProfileScreen = ({ route }) => {
// // // //   const navigation = useNavigation();
// // // //   const { artistId, artistName = 'Artist' } = route.params || {};

// // // //   // ✅ Global Audio Context - YEH ADD KARO
// // // //   const { playSong } = useAudio();

// // // //   // ✅ State Variables
// // // //   const [artistData, setArtistData] = useState(null);
// // // //   const [songs, setSongs] = useState([]);
// // // //   const [playlists, setPlaylists] = useState([]);
// // // //   const [isLoading, setIsLoading] = useState(true);
// // // //   const [isFollowing, setIsFollowing] = useState(false);
// // // //   const [isFavorite, setIsFavorite] = useState(false);

// // // //   // ✅ Fetch Artist Data
// // // //   useEffect(() => {
// // // //     if (artistId) {
// // // //       fetchArtistData();
// // // //     }
// // // //   }, [artistId]);

// // // //   // ✅ API: Fetch Artist Profile Data
// // // //   const fetchArtistData = async () => {
// // // //     try {
// // // //       setIsLoading(true);
// // // //       console.log('🎵 Fetching artist data for ID:', artistId);

// // // //       const response = await getDataWithToken(`user/artist/${artistId}`);
// // // //       console.log('🎵 Artist Profile API Response:', response);

// // // //       if (response && response.success) {
// // // //         const data = response.data;
        
// // // //         // ✅ Set Main Artist Data (EXACTLY FROM API)
// // // //         setArtistData(data.artist);
        
// // // //         // ✅ Set Songs (EXACTLY FROM API)
// // // //         if (data.songs && Array.isArray(data.songs)) {
// // // //           setSongs(data.songs);
// // // //         }
        
// // // //         // ✅ Set Playlists (EXACTLY FROM API)
// // // //         if (data.publicPlaylists && Array.isArray(data.publicPlaylists)) {
// // // //           setPlaylists(data.publicPlaylists);
// // // //         }

// // // //         console.log('✅ Data set from API:', {
// // // //           artist: data.artist,
// // // //           songsCount: data.songs?.length,
// // // //           playlistsCount: data.publicPlaylists?.length
// // // //         });

// // // //       } else {
// // // //         console.log('❌ API response not successful');
// // // //         Alert.alert('Error', 'Failed to load artist data');
// // // //       }
// // // //     } catch (error) {
// // // //       console.error('❌ Artist profile fetch error:', error);
// // // //       Alert.alert('Error', 'Failed to load artist profile');
// // // //     } finally {
// // // //       setIsLoading(false);
// // // //     }
// // // //   };

// // // //   // ✅ Format time helper
// // // //   const formatTime = (seconds) => {
// // // //     const mins = Math.floor(seconds / 60);
// // // //     const secs = seconds % 60;
// // // //     return `${mins}:${secs.toString().padStart(2, '0')}`;
// // // //   };

// // // //   // ✅ Favorite Artist Handler
// // // //   const handleFavoriteToggle = async () => {
// // // //     try {
// // // //       if (isFavorite) {
// // // //         await removeFromFavoriteArtists(artistId);
// // // //         setIsFavorite(false);
// // // //         Alert.alert('Success', 'Artist removed from favorites');
// // // //       } else {
// // // //         await addToFavoriteArtists(artistId);
// // // //         setIsFavorite(true);
// // // //         Alert.alert('Success', 'Artist added to favorites');
// // // //       }
// // // //     } catch (error) {
// // // //       console.error('❌ Favorite toggle error:', error);
// // // //       Alert.alert('Error', 'Failed to update favorites');
// // // //     }
// // // //   };

// // // //   // ✅ Follow/Unfollow Handler
// // // //   const handleFollowToggle = () => {
// // // //     setIsFollowing(!isFollowing);
// // // //     Alert.alert('Success', isFollowing ? 'Unfollowed artist' : 'Following artist');
// // // //   };

// // // //   // ✅ FIXED: Song Press Handler - playSong() USE KARO
// // // //   const handleSongPress = async (song) => {
// // // //     console.log('🎵 Song pressed from Artist Profile:', song);
    
// // // //     try {
// // // //       // ✅ Pehle song info fetch karo (HomeScreen ki tarah)
// // // //       const songInfo = await getDataWithToken(`user/song/${song.id}/info`);
// // // //       console.log('🎵 Song Info from Artist Screen:', songInfo);
      
// // // //       if (songInfo && songInfo.success) {
// // // //         const songData = {
// // // //           id: song.id,
// // // //           title: song.title || 'Unknown Title',
// // // //           artist: artistData?.name || 'Unknown Artist', // ✅ Artist name use karo
// // // //           audioUrl: songInfo.song?.audioFile 
// // // //             ? `${mobile_siteConfig.IMAGE_BASE_URL}${songInfo.song.audioFile}`
// // // //             : 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
// // // //           artwork: getImageUrl(song.coverImage || songInfo.song?.thumbnail)
// // // //         };
        
// // // //         console.log('🎵 Playing song data from Artist:', songData);
        
// // // //         // ✅ Global context mein play karo (HomeScreen ki tarah)
// // // //         playSong(songData);
        
// // // //         // ✅ NowPlayingScreen pe navigate karo
// // // //         navigation.navigate('NowPlayingScreen', { 
// // // //           songId: song.id,
// // // //           resetToBeginning: true 
// // // //         });
// // // //       } else {
// // // //         throw new Error('Song info not found');
// // // //       }
// // // //     } catch (error) {
// // // //       console.error('❌ Error playing song from Artist:', error);
      
// // // //       // ✅ Fallback song data
// // // //       const fallbackSongData = {
// // // //         id: song.id,
// // // //         title: song.title || 'Unknown Title',
// // // //         artist: artistData?.name || 'Unknown Artist', // ✅ Artist name use karo
// // // //         audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
// // // //         artwork: getImageUrl(song.coverImage)
// // // //       };
      
// // // //       playSong(fallbackSongData);
// // // //       navigation.navigate('NowPlayingScreen', { 
// // // //         songId: song.id,
// // // //         resetToBeginning: true
// // // //       });
// // // //     }
// // // //   };

// // // //   // ✅ Render Song Item - WITH EXACT API DATA
// // // //   // const renderSongItem = ({ item }) => (
// // // //   //   <TouchableOpacity 
// // // //   //     style={styles.songItem}
// // // //   //     onPress={() => handleSongPress(item)}
// // // //   //   >
// // // //   //     <Image 
// // // //   //       source={{ uri: getImageUrl(item.coverImage) }} 
// // // //   //       style={styles.songImage}
// // // //   //       resizeMode="cover"
// // // //   //       defaultSource={{ uri: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop' }}
// // // //   //     />
// // // //   //     <View style={styles.songInfo}>
// // // //   //       <Text style={styles.songTitle} numberOfLines={1}>
// // // //   //         {item.title}
// // // //   //       </Text>
// // // //   //       <Text style={styles.songAlbum} numberOfLines={1}>
// // // //   //         {item.album} • {item.genre?.name}
// // // //   //       </Text>
// // // //   //       <Text style={styles.songMeta}>
// // // //   //         {formatTime(item.duration)} • {item.playCount} plays
// // // //   //       </Text>
// // // //   //     </View>
// // // //   //     <TouchableOpacity style={styles.moreButton}>
// // // //   //       <Icon name="more-horiz" size={24} color="#b3b3b3" />
// // // //   //     </TouchableOpacity>
// // // //   //   </TouchableOpacity>
// // // //   // );
// // // //   // ✅ FIXED: Render Song Item - WITH ARTIST NAME
// // // // const renderSongItem = ({ item }) => (
// // // //   <TouchableOpacity 
// // // //     style={styles.songItem}
// // // //     onPress={() => handleSongPress(item)}
// // // //   >
// // // //     <Image 
// // // //       source={{ uri: getImageUrl(item.coverImage) }} 
// // // //       style={styles.songImage}
// // // //       resizeMode="cover"
// // // //       defaultSource={{ uri: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop' }}
// // // //     />
// // // //     <View style={styles.songInfo}>
// // // //       <Text style={styles.songTitle} numberOfLines={1}>
// // // //         {item.title || 'Unknown Title'}
// // // //       </Text>
// // // //       {/* ✅ FIX: Artist name properly display karo */}
// // // //       <Text style={styles.songArtist} numberOfLines={1}>
// // // //         {item.artist?.name || artistData?.name || 'Unknown Artist'}
// // // //       </Text>
// // // //       <Text style={styles.songMeta}>
// // // //         {formatTime(item.duration)} • {item.playCount} plays
// // // //       </Text>
// // // //     </View>
// // // //     <TouchableOpacity style={styles.moreButton}>
// // // //       <Icon name="more-horiz" size={24} color="#b3b3b3" />
// // // //     </TouchableOpacity>
// // // //   </TouchableOpacity>
// // // // );

// // // //   // ✅ Render Playlist Item - WITH EXACT API DATA
// // // //   const renderPlaylistItem = ({ item }) => (
// // // //     <TouchableOpacity style={styles.playlistItem}>
// // // //       <View style={styles.playlistImageContainer}>
// // // //         <Image 
// // // //           source={{ uri: getImageUrl(item.artistSongs?.[0]?.coverImage) }} 
// // // //           style={styles.playlistImage}
// // // //           resizeMode="cover"
// // // //           defaultSource={{ uri: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop' }}
// // // //         />
// // // //         <View style={styles.playlistOverlay}>
// // // //           <Icon name="play-arrow" size={30} color="#fff" />
// // // //         </View>
// // // //       </View>
// // // //       <Text style={styles.playlistTitle} numberOfLines={2}>
// // // //         {item.title}
// // // //       </Text>
// // // //       <Text style={styles.playlistInfo}>
// // // //         {item.totalSongs} songs • {item.description}
// // // //       </Text>
// // // //     </TouchableOpacity>
// // // //   );

// // // //   // ✅ Loading State
// // // //   if (isLoading) {
// // // //     return (
// // // //       <SafeAreaView style={styles.container}>
// // // //         <StatusBar barStyle="light-content" backgroundColor="#000" />
// // // //         <View style={styles.loadingContainer}>
// // // //           <ActivityIndicator size="large" color="#FF3B3B" />
// // // //           <Text style={styles.loadingText}>Loading artist profile...</Text>
// // // //         </View>
// // // //       </SafeAreaView>
// // // //     );
// // // //   }

// // // //   // ✅ If no artist data
// // // //   if (!artistData) {
// // // //     return (
// // // //       <SafeAreaView style={styles.container}>
// // // //         <StatusBar barStyle="light-content" backgroundColor="#000" />
// // // //         <View style={styles.errorContainer}>
// // // //           <Icon name="error-outline" size={64} color="#b3b3b3" />
// // // //           <Text style={styles.errorText}>Artist not found</Text>
// // // //           <TouchableOpacity 
// // // //             style={styles.retryButton}
// // // //             onPress={fetchArtistData}
// // // //           >
// // // //             <Text style={styles.retryButtonText}>Retry</Text>
// // // //           </TouchableOpacity>
// // // //         </View>
// // // //       </SafeAreaView>
// // // //     );
// // // //   }

// // // //   return (
// // // //     <SafeAreaView style={styles.container}>
// // // //       <StatusBar barStyle="light-content" backgroundColor="#000" />
      
// // // //       {/* Header with Back Button */}
// // // //       <View style={styles.header}>
// // // //         <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
// // // //           <Icon name="arrow-back" size={24} color="#fff" />
// // // //         </TouchableOpacity>
// // // //         <View style={styles.headerTitleContainer}>
// // // //           <Text style={styles.headerTitle} numberOfLines={1}>
// // // //             {artistData.name}
// // // //           </Text>
// // // //           <Text style={styles.headerSubtitle}>Artist</Text>
// // // //         </View>
// // // //         <View style={styles.headerRight}>
// // // //           <TouchableOpacity 
// // // //             style={styles.headerIcon}
// // // //             onPress={handleFavoriteToggle}
// // // //           >
// // // //             <Icon 
// // // //               name={isFavorite ? "favorite" : "favorite-border"} 
// // // //               size={24} 
// // // //               color={isFavorite ? "#FF3B3B" : "#fff"} 
// // // //             />
// // // //           </TouchableOpacity>
// // // //           <TouchableOpacity style={styles.headerIcon}>
// // // //             <Icon name="more-vert" size={24} color="#fff" />
// // // //           </TouchableOpacity>
// // // //         </View>
// // // //       </View>

// // // //       <ScrollView 
// // // //         style={styles.scrollView}
// // // //         showsVerticalScrollIndicator={false}
// // // //       >
// // // //         {/* Artist Header Section - WITH EXACT API DATA */}
// // // //         <View style={styles.artistHeader}>
// // // //           <View style={styles.artistImageContainer}>
// // // //             <Image 
// // // //               source={{ uri: getImageUrl(artistData.profilePic) }}
// // // //               style={styles.artistImage}
// // // //               resizeMode="cover"
// // // //               defaultSource={{ uri: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop&crop=face' }}
// // // //             />
// // // //             {artistData.isVerified && (
// // // //               <View style={styles.verifiedBadgeLarge}>
// // // //                 <Icon name="verified" size={28} color="#1DB954" />
// // // //               </View>
// // // //             )}
// // // //           </View>
          
// // // //           <View style={styles.artistInfo}>
// // // //             <Text style={styles.artistName}>
// // // //               {artistData.name}
// // // //             </Text>
// // // //             <Text style={styles.artistStageName}>
// // // //               {artistData.stageName}
// // // //             </Text>
// // // //             {artistData.bio && (
// // // //               <Text style={styles.artistBio}>
// // // //                 {artistData.bio}
// // // //               </Text>
// // // //             )}
// // // //           </View>

// // // //           <View style={styles.statsSection}>
// // // //             <View style={styles.statItem}>
// // // //               <Text style={styles.statNumber}>
// // // //                 {artistData.totalSongs || 0}
// // // //               </Text>
// // // //               <Text style={styles.statLabel}>Songs</Text>
// // // //             </View>
// // // //             <View style={styles.statItem}>
// // // //               <Text style={styles.statNumber}>
// // // //                 {artistData.followers || 0}
// // // //               </Text>
// // // //               <Text style={styles.statLabel}>Followers</Text>
// // // //             </View>
// // // //             <View style={styles.statItem}>
// // // //               <Text style={styles.statNumber}>
// // // //                 {artistData.totalPlaylists || 0}
// // // //               </Text>
// // // //               <Text style={styles.statLabel}>Playlists</Text>
// // // //             </View>
// // // //           </View>

// // // //           <View style={styles.actionButtons}>
// // // //             <TouchableOpacity style={styles.shuffleButton}>
// // // //               <Icon name="shuffle" size={24} color="#000" />
// // // //               <Text style={styles.shuffleButtonText}>Shuffle</Text>
// // // //             </TouchableOpacity>
// // // //             <TouchableOpacity 
// // // //               style={[
// // // //                 styles.followButton,
// // // //                 isFollowing && styles.followingButton
// // // //               ]}
// // // //               onPress={handleFollowToggle}
// // // //             >
// // // //               <Text style={[
// // // //                 styles.followButtonText,
// // // //                 isFollowing && styles.followingButtonText
// // // //               ]}>
// // // //                 {isFollowing ? 'Following' : 'Follow'}
// // // //               </Text>
// // // //             </TouchableOpacity>
// // // //           </View>
// // // //         </View>

// // // //         {/* Songs Section - ONLY IF SONGS EXIST */}
// // // //         {songs.length > 0 && (
// // // //           <View style={styles.section}>
// // // //             <View style={styles.sectionHeader}>
// // // //               <Text style={styles.sectionTitle}>Popular Songs</Text>
// // // //               <Text style={styles.sectionCount}>{songs.length} songs</Text>
// // // //             </View>
// // // //             <FlatList
// // // //               data={songs}
// // // //               renderItem={renderSongItem}
// // // //               keyExtractor={item => `song-${item.id}`}
// // // //               scrollEnabled={false}
// // // //             />
// // // //           </View>
// // // //         )}

// // // //         {/* Playlists Section - ONLY IF PLAYLISTS EXIST */}
// // // //         {playlists.length > 0 && (
// // // //           <View style={styles.section}>
// // // //             <View style={styles.sectionHeader}>
// // // //               <Text style={styles.sectionTitle}>Public Playlists</Text>
// // // //               <Text style={styles.sectionCount}>{playlists.length} playlists</Text>
// // // //             </View>
// // // //             <FlatList
// // // //               data={playlists}
// // // //               renderItem={renderPlaylistItem}
// // // //               keyExtractor={item => `playlist-${item.id}`}
// // // //               horizontal
// // // //               showsHorizontalScrollIndicator={false}
// // // //               contentContainerStyle={styles.playlistsList}
// // // //             />
// // // //           </View>
// // // //         )}

// // // //         {/* No Content Message */}
// // // //         {songs.length === 0 && playlists.length === 0 && (
// // // //           <View style={styles.noContent}>
// // // //             <Icon name="music-off" size={64} color="#b3b3b3" />
// // // //             <Text style={styles.noContentText}>No content available</Text>
// // // //             <Text style={styles.noContentSubtext}>
// // // //               This artist hasn't uploaded any songs or playlists yet.
// // // //             </Text>
// // // //           </View>
// // // //         )}

// // // //         {/* Bottom Padding */}
// // // //         <View style={styles.bottomPadding} />
// // // //       </ScrollView>
// // // //     </SafeAreaView>
// // // //   );
// // // // };

// // // // // Styles same rahenge...
// // // // const styles = StyleSheet.create({
// // // //   container: {
// // // //     flex: 1,
// // // //     backgroundColor: '#000',
// // // //   },
// // // //    songArtist: {
// // // //     fontSize: 14,
// // // //     color: '#b3b3b3',
// // // //     marginBottom: 2,
// // // //   },
// // // //   loadingContainer: {
// // // //     flex: 1,
// // // //     justifyContent: 'center',
// // // //     alignItems: 'center',
// // // //     backgroundColor: '#000',
// // // //   },
// // // //   loadingText: {
// // // //     color: '#fff',
// // // //     marginTop: 10,
// // // //     fontSize: 16,
// // // //   },
// // // //   errorContainer: {
// // // //     flex: 1,
// // // //     justifyContent: 'center',
// // // //     alignItems: 'center',
// // // //     backgroundColor: '#000',
// // // //     padding: 20,
// // // //   },
// // // //   errorText: {
// // // //     color: '#fff',
// // // //     fontSize: 18,
// // // //     fontWeight: 'bold',
// // // //     marginTop: 16,
// // // //     marginBottom: 8,
// // // //   },
// // // //   retryButton: {
// // // //     backgroundColor: '#FF3B3B',
// // // //     paddingHorizontal: 24,
// // // //     paddingVertical: 12,
// // // //     borderRadius: 25,
// // // //     marginTop: 16,
// // // //   },
// // // //   retryButtonText: {
// // // //     color: '#fff',
// // // //     fontSize: 16,
// // // //     fontWeight: 'bold',
// // // //   },
// // // //   header: {
// // // //     flexDirection: 'row',
// // // //     alignItems: 'center',
// // // //     paddingHorizontal: 16,
// // // //     paddingVertical: 12,
// // // //     borderBottomWidth: 1,
// // // //     borderBottomColor: '#282828',
// // // //   },
// // // //   backButton: {
// // // //     padding: 4,
// // // //   },
// // // //   headerTitleContainer: {
// // // //     flex: 1,
// // // //     alignItems: 'center',
// // // //   },
// // // //   headerTitle: {
// // // //     fontSize: 16,
// // // //     fontWeight: 'bold',
// // // //     color: '#fff',
// // // //   },
// // // //   headerSubtitle: {
// // // //     fontSize: 12,
// // // //     color: '#b3b3b3',
// // // //   },
// // // //   headerRight: {
// // // //     flexDirection: 'row',
// // // //     alignItems: 'center',
// // // //   },
// // // //   headerIcon: {
// // // //     padding: 4,
// // // //     marginLeft: 12,
// // // //   },
// // // //   scrollView: {
// // // //     flex: 1,
// // // //   },
// // // //   artistHeader: {
// // // //     padding: 24,
// // // //     alignItems: 'center',
// // // //     borderBottomWidth: 1,
// // // //     borderBottomColor: '#282828',
// // // //   },
// // // //   artistImageContainer: {
// // // //     marginBottom: 20,
// // // //     position: 'relative',
// // // //   },
// // // //   artistImage: {
// // // //     width: 150,
// // // //     height: 150,
// // // //     borderRadius: 75,
// // // //   },
// // // //   verifiedBadgeLarge: {
// // // //     position: 'absolute',
// // // //     bottom: 5,
// // // //     right: 5,
// // // //     backgroundColor: '#000',
// // // //     borderRadius: 15,
// // // //     padding: 4,
// // // //   },
// // // //   artistInfo: {
// // // //     alignItems: 'center',
// // // //     marginBottom: 20,
// // // //   },
// // // //   artistName: {
// // // //     fontSize: 32,
// // // //     fontWeight: 'bold',
// // // //     color: '#fff',
// // // //     marginBottom: 4,
// // // //     textAlign: 'center',
// // // //   },
// // // //   artistStageName: {
// // // //     fontSize: 16,
// // // //     color: '#b3b3b3',
// // // //     marginBottom: 8,
// // // //     fontStyle: 'italic',
// // // //   },
// // // //   artistBio: {
// // // //     fontSize: 14,
// // // //     color: '#b3b3b3',
// // // //     textAlign: 'center',
// // // //     lineHeight: 20,
// // // //     maxWidth: '80%',
// // // //   },
// // // //   statsSection: {
// // // //     flexDirection: 'row',
// // // //     justifyContent: 'space-around',
// // // //     width: '100%',
// // // //     marginBottom: 20,
// // // //   },
// // // //   statItem: {
// // // //     alignItems: 'center',
// // // //     flex: 1,
// // // //   },
// // // //   statNumber: {
// // // //     fontSize: 18,
// // // //     fontWeight: 'bold',
// // // //     color: '#fff',
// // // //     marginBottom: 4,
// // // //   },
// // // //   statLabel: {
// // // //     fontSize: 12,
// // // //     color: '#b3b3b3',
// // // //     textAlign: 'center',
// // // //   },
// // // //   actionButtons: {
// // // //     flexDirection: 'row',
// // // //     justifyContent: 'center',
// // // //     width: '100%',
// // // //     gap: 12,
// // // //   },
// // // //   shuffleButton: {
// // // //     flexDirection: 'row',
// // // //     alignItems: 'center',
// // // //     backgroundColor: '#FF3B3B',
// // // //     paddingHorizontal: 24,
// // // //     paddingVertical: 12,
// // // //     borderRadius: 25,
// // // //     gap: 8,
// // // //   },
// // // //   shuffleButtonText: {
// // // //     fontSize: 14,
// // // //     fontWeight: 'bold',
// // // //     color: '#000',
// // // //   },
// // // //   followButton: {
// // // //     backgroundColor: 'transparent',
// // // //     borderWidth: 1,
// // // //     borderColor: '#b3b3b3',
// // // //     paddingHorizontal: 32,
// // // //     paddingVertical: 12,
// // // //     borderRadius: 25,
// // // //   },
// // // //   followingButton: {
// // // //     backgroundColor: '#1DB954',
// // // //     borderColor: '#1DB954',
// // // //   },
// // // //   followButtonText: {
// // // //     fontSize: 14,
// // // //     fontWeight: 'bold',
// // // //     color: '#fff',
// // // //   },
// // // //   followingButtonText: {
// // // //     color: '#000',
// // // //   },
// // // //   section: {
// // // //     padding: 20,
// // // //     borderBottomWidth: 1,
// // // //     borderBottomColor: '#282828',
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
// // // //   sectionCount: {
// // // //     fontSize: 14,
// // // //     color: '#b3b3b3',
// // // //   },
// // // //   songItem: {
// // // //     flexDirection: 'row',
// // // //     alignItems: 'center',
// // // //     marginBottom: 16,
// // // //     backgroundColor: 'rgba(255,255,255,0.05)',
// // // //     borderRadius: 8,
// // // //     padding: 12,
// // // //   },
// // // //   songImage: {
// // // //     width: 60,
// // // //     height: 60,
// // // //     borderRadius: 4,
// // // //     marginRight: 12,
// // // //   },
// // // //   songInfo: {
// // // //     flex: 1,
// // // //   },
// // // //   songTitle: {
// // // //     fontSize: 16,
// // // //     fontWeight: '600',
// // // //     color: '#fff',
// // // //     marginBottom: 4,
// // // //   },
// // // //   songAlbum: {
// // // //     fontSize: 14,
// // // //     color: '#b3b3b3',
// // // //     marginBottom: 2,
// // // //   },
// // // //   songMeta: {
// // // //     fontSize: 12,
// // // //     color: '#666',
// // // //   },
// // // //   moreButton: {
// // // //     padding: 4,
// // // //   },
// // // //   playlistsList: {
// // // //     paddingRight: 16,
// // // //   },
// // // //   playlistItem: {
// // // //     width: 160,
// // // //     marginRight: 16,
// // // //   },
// // // //   playlistImageContainer: {
// // // //     width: 160,
// // // //     height: 160,
// // // //     borderRadius: 8,
// // // //     marginBottom: 12,
// // // //     position: 'relative',
// // // //     overflow: 'hidden',
// // // //   },
// // // //   playlistImage: {
// // // //     width: '100%',
// // // //     height: '100%',
// // // //   },
// // // //   playlistOverlay: {
// // // //     ...StyleSheet.absoluteFillObject,
// // // //     backgroundColor: 'rgba(0,0,0,0.5)',
// // // //     justifyContent: 'center',
// // // //     alignItems: 'center',
// // // //     opacity: 0,
// // // //   },
// // // //   playlistTitle: {
// // // //     fontSize: 14,
// // // //     fontWeight: '600',
// // // //     color: '#fff',
// // // //     marginBottom: 4,
// // // //   },
// // // //   playlistInfo: {
// // // //     fontSize: 12,
// // // //     color: '#b3b3b3',
// // // //   },
// // // //   noContent: {
// // // //     alignItems: 'center',
// // // //     justifyContent: 'center',
// // // //     paddingVertical: 60,
// // // //     paddingHorizontal: 20,
// // // //   },
// // // //   noContentText: {
// // // //     fontSize: 18,
// // // //     color: '#fff',
// // // //     fontWeight: 'bold',
// // // //     marginTop: 16,
// // // //     marginBottom: 8,
// // // //     textAlign: 'center',
// // // //   },
// // // //   noContentSubtext: {
// // // //     fontSize: 14,
// // // //     color: '#b3b3b3',
// // // //     textAlign: 'center',
// // // //     lineHeight: 20,
// // // //   },
// // // //   bottomPadding: {
// // // //     height: 20,
// // // //   },
// // // // });

// // // // export default ArtistProfileScreen;


// // // // ArtistProfileScreen.js - UPDATED WITH FOLLOW/UNFOLLOW
// // // import React, { useState, useEffect } from 'react';
// // // import {
// // //   View,
// // //   Text,
// // //   ScrollView,
// // //   TouchableOpacity,
// // //   StyleSheet,
// // //   StatusBar,
// // //   SafeAreaView,
// // //   Image,
// // //   FlatList,
// // //   Dimensions,
// // //   ActivityIndicator,
// // //   Alert
// // // } from 'react-native';
// // // import Icon from 'react-native-vector-icons/MaterialIcons';
// // // import { useNavigation } from '@react-navigation/native';
// // // import { getDataWithToken, addToFavoriteArtists, removeFromFavoriteArtists } from '../Services/mobile-api';
// // // import { mobile_siteConfig } from '../Services/mobile-siteConfig';
// // // import { useAudio } from '../contexts/AudioContext';
// // // import { followArtist, unfollowArtist } from '../Services/mobile-api'; // ✅ Follow/Unfollow APIs Import

// // // const { width } = Dimensions.get('window');

// // // // ✅ IMAGE URL HELPER FUNCTION
// // // const getImageUrl = (imagePath) => {
// // //   if (!imagePath || imagePath === 'null' || imagePath === 'undefined') {
// // //     return 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop&crop=face';
// // //   }
  
// // //   if (imagePath.startsWith('http')) {
// // //     return imagePath;
// // //   }
  
// // //   if (imagePath.startsWith('/')) {
// // //     return `${mobile_siteConfig.IMAGE_BASE_URL}${imagePath}`;
// // //   }
  
// // //   return 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop&crop=face';
// // // };

// // // const ArtistProfileScreen = ({ route }) => {
// // //   const navigation = useNavigation();
// // //   const { artistId, artistName = 'Artist' } = route.params || {};

// // //   // ✅ Global Audio Context
// // //   const { playSong } = useAudio();

// // //   // ✅ State Variables
// // //   const [artistData, setArtistData] = useState(null);
// // //   const [songs, setSongs] = useState([]);
// // //   const [playlists, setPlaylists] = useState([]);
// // //   const [isLoading, setIsLoading] = useState(true);
// // //   const [isFollowing, setIsFollowing] = useState(false);
// // //   const [isFavorite, setIsFavorite] = useState(false);
// // //   const [isFollowLoading, setIsFollowLoading] = useState(false);

// // //   // ✅ Fetch Artist Data
// // //   useEffect(() => {
// // //     if (artistId) {
// // //       fetchArtistData();
// // //     }
// // //   }, [artistId]);

// // //   // ✅ API: Fetch Artist Profile Data
// // //   const fetchArtistData = async () => {
// // //     try {
// // //       setIsLoading(true);
// // //       console.log('🎵 Fetching artist data for ID:', artistId);

// // //       const response = await getDataWithToken(`user/artist/${artistId}`);
// // //       console.log('🎵 Artist Profile API Response:', response);

// // //       if (response && response.success) {
// // //         const data = response.data;
        
// // //         // ✅ Set Main Artist Data (EXACTLY FROM API)
// // //         setArtistData(data.artist);
        
// // //         // ✅ Set Following Status from API
// // //         setIsFollowing(data.artist?.isFavorite || false);
        
// // //         // ✅ Set Songs (EXACTLY FROM API)
// // //         if (data.songs && Array.isArray(data.songs)) {
// // //           setSongs(data.songs);
// // //         }
        
// // //         // ✅ Set Playlists (EXACTLY FROM API)
// // //         if (data.publicPlaylists && Array.isArray(data.publicPlaylists)) {
// // //           setPlaylists(data.publicPlaylists);
// // //         }

// // //         console.log('✅ Data set from API:', {
// // //           artist: data.artist,
// // //           isFollowing: data.artist?.isFavorite,
// // //           songsCount: data.songs?.length,
// // //           playlistsCount: data.publicPlaylists?.length
// // //         });

// // //       } else {
// // //         console.log('❌ API response not successful');
// // //         Alert.alert('Error', 'Failed to load artist data');
// // //       }
// // //     } catch (error) {
// // //       console.error('❌ Artist profile fetch error:', error);
// // //       Alert.alert('Error', 'Failed to load artist profile');
// // //     } finally {
// // //       setIsLoading(false);
// // //     }
// // //   };

// // //   // ✅ Format time helper
// // //   const formatTime = (seconds) => {
// // //     const mins = Math.floor(seconds / 60);
// // //     const secs = seconds % 60;
// // //     return `${mins}:${secs.toString().padStart(2, '0')}`;
// // //   };

// // //   // ✅ Favorite Artist Handler
// // //   const handleFavoriteToggle = async () => {
// // //     try {
// // //       if (isFavorite) {
// // //         await removeFromFavoriteArtists(artistId);
// // //         setIsFavorite(false);
// // //         Alert.alert('Success', 'Artist removed from favorites');
// // //       } else {
// // //         await addToFavoriteArtists(artistId);
// // //         setIsFavorite(true);
// // //         Alert.alert('Success', 'Artist added to favorites');
// // //       }
// // //     } catch (error) {
// // //       console.error('❌ Favorite toggle error:', error);
// // //       Alert.alert('Error', 'Failed to update favorites');
// // //     }
// // //   };

// // //   // ✅ FIXED: Follow/Unfollow Handler - USING YOUR APIS
// // //   const handleFollowToggle = async () => {
// // //     if (isFollowLoading) return;
    
// // //     try {
// // //       setIsFollowLoading(true);
      
// // //       if (isFollowing) {
// // //         // Unfollow artist
// // //         console.log('👤 Unfollowing artist from Artist Profile:', artistId);
// // //         const response = await unfollowArtist(artistId);
        
// // //         if (response.success) {
// // //           setIsFollowing(false);
// // //           // ✅ Update local artist data
// // //           setArtistData(prev => ({
// // //             ...prev,
// // //             followers: Math.max(0, (prev.followers || 0) - 1),
// // //             isFavorite: false
// // //           }));
// // //           console.log('✅ Artist unfollowed successfully from Artist Profile');
// // //         } else {
// // //           Alert.alert('Error', response.message || 'Failed to unfollow artist');
// // //         }
// // //       } else {
// // //         // Follow artist
// // //         console.log('👤 Following artist from Artist Profile:', artistId);
// // //         const response = await followArtist(artistId);
        
// // //         if (response.success) {
// // //           setIsFollowing(true);
// // //           // ✅ Update local artist data
// // //           setArtistData(prev => ({
// // //             ...prev,
// // //             followers: (prev.followers || 0) + 1,
// // //             isFavorite: true
// // //           }));
// // //           console.log('✅ Artist followed successfully from Artist Profile');
// // //         } else {
// // //           Alert.alert('Error', response.message || 'Failed to follow artist');
// // //         }
// // //       }
// // //     } catch (error) {
// // //       console.error('❌ Follow toggle error in Artist Profile:', error);
// // //       Alert.alert('Error', 'Something went wrong');
// // //     } finally {
// // //       setIsFollowLoading(false);
// // //     }
// // //   };

// // //   // ✅ FIXED: Song Press Handler - playSong() USE KARO
// // //   const handleSongPress = async (song) => {
// // //     console.log('🎵 Song pressed from Artist Profile:', song);
    
// // //     try {
// // //       // ✅ Pehle song info fetch karo (HomeScreen ki tarah)
// // //       const songInfo = await getDataWithToken(`user/song/${song.id}/info`);
// // //       console.log('🎵 Song Info from Artist Screen:', songInfo);
      
// // //       if (songInfo && songInfo.success) {
// // //         const songData = {
// // //           id: song.id,
// // //           title: song.title || 'Unknown Title',
// // //           artist: artistData?.name || 'Unknown Artist', // ✅ Artist name use karo
// // //           audioUrl: songInfo.song?.audioFile 
// // //             ? `${mobile_siteConfig.IMAGE_BASE_URL}${songInfo.song.audioFile}`
// // //             : 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
// // //           artwork: getImageUrl(song.coverImage || songInfo.song?.thumbnail)
// // //         };
        
// // //         console.log('🎵 Playing song data from Artist:', songData);
        
// // //         // ✅ Global context mein play karo (HomeScreen ki tarah)
// // //         playSong(songData);
        
// // //         // ✅ NowPlayingScreen pe navigate karo
// // //         navigation.navigate('NowPlayingScreen', { 
// // //           songId: song.id,
// // //           resetToBeginning: true 
// // //         });
// // //       } else {
// // //         throw new Error('Song info not found');
// // //       }
// // //     } catch (error) {
// // //       console.error('❌ Error playing song from Artist:', error);
      
// // //       // ✅ Fallback song data
// // //       const fallbackSongData = {
// // //         id: song.id,
// // //         title: song.title || 'Unknown Title',
// // //         artist: artistData?.name || 'Unknown Artist', // ✅ Artist name use karo
// // //         audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
// // //         artwork: getImageUrl(song.coverImage)
// // //       };
      
// // //       playSong(fallbackSongData);
// // //       navigation.navigate('NowPlayingScreen', { 
// // //         songId: song.id,
// // //         resetToBeginning: true
// // //       });
// // //     }
// // //   };

// // //   // ✅ FIXED: Render Song Item - WITH ARTIST NAME
// // //   const renderSongItem = ({ item }) => (
// // //     <TouchableOpacity 
// // //       style={styles.songItem}
// // //       onPress={() => handleSongPress(item)}
// // //     >
// // //       <Image 
// // //         source={{ uri: getImageUrl(item.coverImage) }} 
// // //         style={styles.songImage}
// // //         resizeMode="cover"
// // //         defaultSource={{ uri: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop' }}
// // //       />
// // //       <View style={styles.songInfo}>
// // //         <Text style={styles.songTitle} numberOfLines={1}>
// // //           {item.title || 'Unknown Title'}
// // //         </Text>
// // //         {/* ✅ FIX: Artist name properly display karo */}
// // //         <Text style={styles.songArtist} numberOfLines={1}>
// // //           {item.artist?.name || artistData?.name || 'Unknown Artist'}
// // //         </Text>
// // //         <Text style={styles.songMeta}>
// // //           {formatTime(item.duration)} • {item.playCount} plays
// // //         </Text>
// // //       </View>
// // //       <TouchableOpacity style={styles.moreButton}>
// // //         {/* <Icon name="more-horiz" size={24} color="#b3b3b3" /> */}
// // //       </TouchableOpacity>
// // //     </TouchableOpacity>
// // //   );

// // //   // ✅ Render Playlist Item - WITH EXACT API DATA
// // //   const renderPlaylistItem = ({ item }) => (
// // //     <TouchableOpacity style={styles.playlistItem}>
// // //       <View style={styles.playlistImageContainer}>
// // //         <Image 
// // //           source={{ uri: getImageUrl(item.artistSongs?.[0]?.coverImage) }} 
// // //           style={styles.playlistImage}
// // //           resizeMode="cover"
// // //           defaultSource={{ uri: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop' }}
// // //         />
// // //         <View style={styles.playlistOverlay}>
// // //           <Icon name="play-arrow" size={30} color="#fff" />
// // //         </View>
// // //       </View>
// // //       <Text style={styles.playlistTitle} numberOfLines={2}>
// // //         {item.title}
// // //       </Text>
// // //       <Text style={styles.playlistInfo}>
// // //         {item.totalSongs} songs • {item.description}
// // //       </Text>
// // //     </TouchableOpacity>
// // //   );

// // //   // ✅ Loading State
// // //   if (isLoading) {
// // //     return (
// // //       <SafeAreaView style={styles.container}>
// // //         <StatusBar barStyle="light-content" backgroundColor="#000" />
// // //         <View style={styles.loadingContainer}>
// // //           <ActivityIndicator size="large" color="#FF3B3B" />
// // //           <Text style={styles.loadingText}>Loading artist profile...</Text>
// // //         </View>
// // //       </SafeAreaView>
// // //     );
// // //   }

// // //   // ✅ If no artist data
// // //   if (!artistData) {
// // //     return (
// // //       <SafeAreaView style={styles.container}>
// // //         <StatusBar barStyle="light-content" backgroundColor="#000" />
// // //         <View style={styles.errorContainer}>
// // //           <Icon name="error-outline" size={64} color="#b3b3b3" />
// // //           <Text style={styles.errorText}>Artist not found</Text>
// // //           <TouchableOpacity 
// // //             style={styles.retryButton}
// // //             onPress={fetchArtistData}
// // //           >
// // //             <Text style={styles.retryButtonText}>Retry</Text>
// // //           </TouchableOpacity>
// // //         </View>
// // //       </SafeAreaView>
// // //     );
// // //   }

// // //   return (
// // //     <SafeAreaView style={styles.container}>
// // //       <StatusBar barStyle="light-content" backgroundColor="#000" />
      
// // //       {/* Header with Back Button */}
// // //       <View style={styles.header}>
// // //         <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
// // //           <Icon name="arrow-back" size={24} color="#fff" />
// // //         </TouchableOpacity>
// // //         <View style={styles.headerTitleContainer}>
// // //           <Text style={styles.headerTitle} numberOfLines={1}>
// // //             {artistData.name}
// // //           </Text>
// // //           <Text style={styles.headerSubtitle}>Artist</Text>
// // //         </View>
// // //         <View style={styles.headerRight}>
// // //           {/* <TouchableOpacity 
// // //             style={styles.headerIcon}
// // //             onPress={handleFavoriteToggle}
// // //           >
// // //             <Icon 
// // //               name={isFavorite ? "favorite" : "favorite-border"} 
// // //               size={24} 
// // //               color={isFavorite ? "#FF3B3B" : "#fff"} 
// // //             />
// // //           </TouchableOpacity> */}
// // //           <TouchableOpacity style={styles.headerIcon}>
// // //             {/* <Icon name="more-vert" size={24} color="#fff" /> */}
// // //           </TouchableOpacity>
// // //         </View>
// // //       </View>

// // //       <ScrollView 
// // //         style={styles.scrollView}
// // //         showsVerticalScrollIndicator={false}
// // //       >
// // //         {/* Artist Header Section - WITH EXACT API DATA */}
// // //         <View style={styles.artistHeader}>
// // //           <View style={styles.artistImageContainer}>
// // //             <Image 
// // //               source={{ uri: getImageUrl(artistData.profilePic) }}
// // //               style={styles.artistImage}
// // //               resizeMode="cover"
// // //               defaultSource={{ uri: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop&crop=face' }}
// // //             />
// // //             {artistData.isVerified && (
// // //               <View style={styles.verifiedBadgeLarge}>
// // //                 <Icon name="verified" size={28} color="#1DB954" />
// // //               </View>
// // //             )}
// // //           </View>
          
// // //           <View style={styles.artistInfo}>
// // //             <Text style={styles.artistName}>
// // //               {artistData.name}
// // //             </Text>
// // //             <Text style={styles.artistStageName}>
// // //               {artistData.stageName}
// // //             </Text>
// // //             {artistData.bio && (
// // //               <Text style={styles.artistBio}>
// // //                 {artistData.bio}
// // //               </Text>
// // //             )}
// // //           </View>

// // //           <View style={styles.statsSection}>
// // //             <View style={styles.statItem}>
// // //               <Text style={styles.statNumber}>
// // //                 {artistData.totalSongs || 0}
// // //               </Text>
// // //               <Text style={styles.statLabel}>Songs</Text>
// // //             </View>
// // //             <View style={styles.statItem}>
// // //               <Text style={styles.statNumber}>
// // //                 {artistData.followers || 0}
// // //               </Text>
// // //               <Text style={styles.statLabel}>Followers</Text>
// // //             </View>
// // //             <View style={styles.statItem}>
// // //               <Text style={styles.statNumber}>
// // //                 {artistData.totalPlaylists || 0}
// // //               </Text>
// // //               <Text style={styles.statLabel}>Playlists</Text>
// // //             </View>
// // //           </View>

// // //           <View style={styles.actionButtons}>
// // //             {/* <TouchableOpacity style={styles.shuffleButton}>
// // //               <Icon name="shuffle" size={24} color="#000" />
// // //               <Text style={styles.shuffleButtonText}>Shuffle</Text>
// // //             </TouchableOpacity> */}
            
// // //             {/* ✅ FIXED: Follow Button with Loading State */}
// // //             <TouchableOpacity 
// // //               style={[
// // //                 styles.followButton,
// // //                 isFollowing ? styles.followingButton : styles.notFollowingButton
// // //               ]}
// // //               onPress={handleFollowToggle}
// // //               disabled={isFollowLoading}
// // //             >
// // //               {isFollowLoading ? (
// // //                 <ActivityIndicator size="small" color={isFollowing ? "#FF3B3B" : "#fff"} />
// // //               ) : (
// // //                 <Text style={[
// // //                   styles.followButtonText,
// // //                   isFollowing ? styles.followingButtonText : styles.notFollowingButtonText
// // //                 ]}>
// // //                   {isFollowing ? 'Following' : 'Follow'}
// // //                 </Text>
// // //               )}
// // //             </TouchableOpacity>
// // //           </View>
// // //         </View>

// // //         {/* Songs Section - ONLY IF SONGS EXIST */}
// // //         {songs.length > 0 && (
// // //           <View style={styles.section}>
// // //             <View style={styles.sectionHeader}>
// // //               <Text style={styles.sectionTitle}>Popular Songs</Text>
// // //               <Text style={styles.sectionCount}>{songs.length} songs</Text>
// // //             </View>
// // //             <FlatList
// // //               data={songs}
// // //               renderItem={renderSongItem}
// // //               keyExtractor={item => `song-${item.id}`}
// // //               scrollEnabled={false}
// // //             />
// // //           </View>
// // //         )}

// // //         {/* Playlists Section - ONLY IF PLAYLISTS EXIST */}
// // //         {playlists.length > 0 && (
// // //           <View style={styles.section}>
// // //             <View style={styles.sectionHeader}>
// // //               <Text style={styles.sectionTitle}>Public Playlists</Text>
// // //               <Text style={styles.sectionCount}>{playlists.length} playlists</Text>
// // //             </View>
// // //             <FlatList
// // //               data={playlists}
// // //               renderItem={renderPlaylistItem}
// // //               keyExtractor={item => `playlist-${item.id}`}
// // //               horizontal
// // //               showsHorizontalScrollIndicator={false}
// // //               contentContainerStyle={styles.playlistsList}
// // //             />
// // //           </View>
// // //         )}

// // //         {/* No Content Message */}
// // //         {songs.length === 0 && playlists.length === 0 && (
// // //           <View style={styles.noContent}>
// // //             <Icon name="music-off" size={64} color="#b3b3b3" />
// // //             <Text style={styles.noContentText}>No content available</Text>
// // //             <Text style={styles.noContentSubtext}>
// // //               This artist hasn't uploaded any songs or playlists yet.
// // //             </Text>
// // //           </View>
// // //         )}

// // //         {/* Bottom Padding */}
// // //         <View style={styles.bottomPadding} />
// // //       </ScrollView>
// // //     </SafeAreaView>
// // //   );
// // // };

// // // // ✅ UPDATED STYLES WITH FOLLOW BUTTON
// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     backgroundColor: '#000',
// // //   },
// // //   songArtist: {
// // //     fontSize: 14,
// // //     color: '#b3b3b3',
// // //     marginBottom: 2,
// // //   },
// // //   loadingContainer: {
// // //     flex: 1,
// // //     justifyContent: 'center',
// // //     alignItems: 'center',
// // //     backgroundColor: '#000',
// // //   },
// // //   loadingText: {
// // //     color: '#fff',
// // //     marginTop: 10,
// // //     fontSize: 16,
// // //   },
// // //   errorContainer: {
// // //     flex: 1,
// // //     justifyContent: 'center',
// // //     alignItems: 'center',
// // //     backgroundColor: '#000',
// // //     padding: 20,
// // //   },
// // //   errorText: {
// // //     color: '#fff',
// // //     fontSize: 18,
// // //     fontWeight: 'bold',
// // //     marginTop: 16,
// // //     marginBottom: 8,
// // //   },
// // //   retryButton: {
// // //     backgroundColor: '#FF3B3B',
// // //     paddingHorizontal: 24,
// // //     paddingVertical: 12,
// // //     borderRadius: 25,
// // //     marginTop: 16,
// // //   },
// // //   retryButtonText: {
// // //     color: '#fff',
// // //     fontSize: 16,
// // //     fontWeight: 'bold',
// // //   },
// // //   header: {
// // //     flexDirection: 'row',
// // //     alignItems: 'center',
// // //     paddingHorizontal: 16,
// // //     paddingVertical: 12,
// // //     borderBottomWidth: 1,
// // //     borderBottomColor: '#282828',
// // //   },
// // //   backButton: {
// // //     padding: 4,
// // //   },
// // //   headerTitleContainer: {
// // //     flex: 1,
// // //     alignItems: 'center',
// // //   },
// // //   headerTitle: {
// // //     fontSize: 16,
// // //     fontWeight: 'bold',
// // //     color: '#fff',
// // //   },
// // //   headerSubtitle: {
// // //     fontSize: 12,
// // //     color: '#b3b3b3',
// // //   },
// // //   headerRight: {
// // //     flexDirection: 'row',
// // //     alignItems: 'center',
// // //   },
// // //   headerIcon: {
// // //     padding: 4,
// // //     marginLeft: 12,
// // //   },
// // //   scrollView: {
// // //     flex: 1,
// // //   },
// // //   artistHeader: {
// // //     padding: 24,
// // //     alignItems: 'center',
// // //     borderBottomWidth: 1,
// // //     borderBottomColor: '#282828',
// // //   },
// // //   artistImageContainer: {
// // //     marginBottom: 20,
// // //     position: 'relative',
// // //   },
// // //   artistImage: {
// // //     width: 150,
// // //     height: 150,
// // //     borderRadius: 75,
// // //   },
// // //   verifiedBadgeLarge: {
// // //     position: 'absolute',
// // //     bottom: 5,
// // //     right: 5,
// // //     backgroundColor: '#000',
// // //     borderRadius: 15,
// // //     padding: 4,
// // //   },
// // //   artistInfo: {
// // //     alignItems: 'center',
// // //     marginBottom: 20,
// // //   },
// // //   artistName: {
// // //     fontSize: 32,
// // //     fontWeight: 'bold',
// // //     color: '#fff',
// // //     marginBottom: 4,
// // //     textAlign: 'center',
// // //   },
// // //   artistStageName: {
// // //     fontSize: 16,
// // //     color: '#b3b3b3',
// // //     marginBottom: 8,
// // //     fontStyle: 'italic',
// // //   },
// // //   artistBio: {
// // //     fontSize: 14,
// // //     color: '#b3b3b3',
// // //     textAlign: 'center',
// // //     lineHeight: 20,
// // //     maxWidth: '80%',
// // //   },
// // //   statsSection: {
// // //     flexDirection: 'row',
// // //     justifyContent: 'space-around',
// // //     width: '100%',
// // //     marginBottom: 20,
// // //   },
// // //   statItem: {
// // //     alignItems: 'center',
// // //     flex: 1,
// // //   },
// // //   statNumber: {
// // //     fontSize: 18,
// // //     fontWeight: 'bold',
// // //     color: '#fff',
// // //     marginBottom: 4,
// // //   },
// // //   statLabel: {
// // //     fontSize: 12,
// // //     color: '#b3b3b3',
// // //     textAlign: 'center',
// // //   },
// // //   actionButtons: {
// // //     flexDirection: 'row',
// // //     justifyContent: 'center',
// // //     width: '100%',
// // //     gap: 12,
// // //   },
// // //   shuffleButton: {
// // //     flexDirection: 'row',
// // //     alignItems: 'center',
// // //     backgroundColor: '#FF3B3B',
// // //     paddingHorizontal: 24,
// // //     paddingVertical: 12,
// // //     borderRadius: 25,
// // //     gap: 8,
// // //   },
// // //   shuffleButtonText: {
// // //     fontSize: 14,
// // //     fontWeight: 'bold',
// // //     color: '#000',
// // //   },
// // //   // ✅ UPDATED: Follow Button Styles
// // //   followButton: {
// // //     paddingHorizontal: 32,
// // //     paddingVertical: 12,
// // //     borderRadius: 25,
// // //     minWidth: 100,
// // //     alignItems: 'center',
// // //     justifyContent: 'center',
// // //   },
// // //   notFollowingButton: {
// // //     backgroundColor: '#FF3B3B',
// // //   },
// // //   followingButton: {
// // //     backgroundColor: 'transparent',
// // //     borderWidth: 1,
// // //     borderColor: '#FF3B3B',
// // //   },
// // //   followButtonText: {
// // //     fontSize: 14,
// // //     fontWeight: 'bold',
// // //   },
// // //   notFollowingButtonText: {
// // //     color: '#fff',
// // //   },
// // //   followingButtonText: {
// // //     color: '#FF3B3B',
// // //   },
// // //   section: {
// // //     padding: 20,
// // //     borderBottomWidth: 1,
// // //     borderBottomColor: '#282828',
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
// // //   sectionCount: {
// // //     fontSize: 14,
// // //     color: '#b3b3b3',
// // //   },
// // //   songItem: {
// // //     flexDirection: 'row',
// // //     alignItems: 'center',
// // //     marginBottom: 16,
// // //     backgroundColor: 'rgba(255,255,255,0.05)',
// // //     borderRadius: 8,
// // //     padding: 12,
// // //   },
// // //   songImage: {
// // //     width: 60,
// // //     height: 60,
// // //     borderRadius: 4,
// // //     marginRight: 12,
// // //   },
// // //   songInfo: {
// // //     flex: 1,
// // //   },
// // //   songTitle: {
// // //     fontSize: 16,
// // //     fontWeight: '600',
// // //     color: '#fff',
// // //     marginBottom: 4,
// // //   },
// // //   songAlbum: {
// // //     fontSize: 14,
// // //     color: '#b3b3b3',
// // //     marginBottom: 2,
// // //   },
// // //   songMeta: {
// // //     fontSize: 12,
// // //     color: '#666',
// // //   },
// // //   moreButton: {
// // //     padding: 4,
// // //   },
// // //   playlistsList: {
// // //     paddingRight: 16,
// // //   },
// // //   playlistItem: {
// // //     width: 160,
// // //     marginRight: 16,
// // //   },
// // //   playlistImageContainer: {
// // //     width: 160,
// // //     height: 160,
// // //     borderRadius: 8,
// // //     marginBottom: 12,
// // //     position: 'relative',
// // //     overflow: 'hidden',
// // //   },
// // //   playlistImage: {
// // //     width: '100%',
// // //     height: '100%',
// // //   },
// // //   playlistOverlay: {
// // //     ...StyleSheet.absoluteFillObject,
// // //     backgroundColor: 'rgba(0,0,0,0.5)',
// // //     justifyContent: 'center',
// // //     alignItems: 'center',
// // //     opacity: 0,
// // //   },
// // //   playlistTitle: {
// // //     fontSize: 14,
// // //     fontWeight: '600',
// // //     color: '#fff',
// // //     marginBottom: 4,
// // //   },
// // //   playlistInfo: {
// // //     fontSize: 12,
// // //     color: '#b3b3b3',
// // //   },
// // //   noContent: {
// // //     alignItems: 'center',
// // //     justifyContent: 'center',
// // //     paddingVertical: 60,
// // //     paddingHorizontal: 20,
// // //   },
// // //   noContentText: {
// // //     fontSize: 18,
// // //     color: '#fff',
// // //     fontWeight: 'bold',
// // //     marginTop: 16,
// // //     marginBottom: 8,
// // //     textAlign: 'center',
// // //   },
// // //   noContentSubtext: {
// // //     fontSize: 14,
// // //     color: '#b3b3b3',
// // //     textAlign: 'center',
// // //     lineHeight: 20,
// // //   },
// // //   bottomPadding: {
// // //     height: 20,
// // //   },
// // // });

// // // export default ArtistProfileScreen;


// // // ArtistProfileScreen.js - FIXED FOLLOW STATUS
// // import React, { useState, useEffect } from 'react';
// // import {
// //   View,
// //   Text,
// //   ScrollView,
// //   TouchableOpacity,
// //   StyleSheet,
// //   StatusBar,
// //   SafeAreaView,
// //   Image,
// //   FlatList,
// //   Dimensions,
// //   ActivityIndicator,
// //   Alert
// // } from 'react-native';
// // import Icon from 'react-native-vector-icons/MaterialIcons';
// // import { useNavigation } from '@react-navigation/native';
// // import { getDataWithToken } from '../Services/mobile-api';
// // import { mobile_siteConfig } from '../Services/mobile-siteConfig';
// // import { useAudio } from '../contexts/AudioContext';
// // import { followArtist, unfollowArtist } from '../Services/mobile-api';
// // import { wp, hp } from "../assets/Global.Css";

// // const { width } = Dimensions.get('window');

// // // ✅ IMAGE URL HELPER FUNCTION
// // const getImageUrl = (imagePath) => {
// //   if (!imagePath || imagePath === 'null' || imagePath === 'undefined') {
// //     return 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop&crop=face';
// //   }
  
// //   if (imagePath.startsWith('http')) {
// //     return imagePath;
// //   }
  
// //   if (imagePath.startsWith('/')) {
// //     return `${mobile_siteConfig.IMAGE_BASE_URL}${imagePath}`;
// //   }
  
// //   return 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop&crop=face';
// // };

// // const ArtistProfileScreen = ({ route }) => {
// //   const navigation = useNavigation();
// //   const { artistId, artistName = 'Artist' } = route.params || {};

// //   // ✅ Global Audio Context
// //   const { playSong } = useAudio();

// //   // ✅ State Variables
// //   const [artistData, setArtistData] = useState(null);
// //   const [songs, setSongs] = useState([]);
// //   const [playlists, setPlaylists] = useState([]);
// //   const [isLoading, setIsLoading] = useState(true);
// //   const [isFollowing, setIsFollowing] = useState(false);
// //   const [isFavorite, setIsFavorite] = useState(false);
// //   const [isFollowLoading, setIsFollowLoading] = useState(false);

// //   // ✅ Fetch Artist Data
// //   useEffect(() => {
// //     if (artistId) {
// //       fetchArtistData();
// //     }
// //   }, [artistId]);

// //   // ✅ API: Fetch Artist Profile Data - WITH BETTER FOLLOW STATUS CHECK
// //   const fetchArtistData = async () => {
// //     try {
// //       setIsLoading(true);
// //       console.log('🎵 Fetching artist data for ID:', artistId);

// //       const response = await getDataWithToken(`user/artist/${artistId}`);
// //       console.log('🎵 Artist Profile API Response:', response);

// //       if (response && response.success) {
// //         const data = response.data;
        
// //         // ✅ Set Main Artist Data
// //         setArtistData(data.artist);
        
// //         // ✅ FIXED: Better follow status detection
// //         // Pehle check karo agar API mein koi follow status field hai
// //         let followStatus = false;
        
// //         if (data.artist?.isFavorite !== undefined) {
// //           followStatus = data.artist.isFavorite;
// //         } else if (data.artist?.isFollowing !== undefined) {
// //           followStatus = data.artist.isFollowing;
// //         } else if (data.artist?.followStatus !== undefined) {
// //           followStatus = data.artist.followStatus;
// //         } else {
// //           // ✅ Agar API mein koi status nahi hai, toh check karo local storage ya cache se
// //           // Yahan aap ek local storage check bhi add kar sakte hain
// //           followStatus = await checkLocalFollowStatus(artistId);
// //         }
        
// //         setIsFollowing(followStatus);
// //         console.log('✅ Final follow status set to:', followStatus);
        
// //         // ✅ Set Songs
// //         if (data.songs && Array.isArray(data.songs)) {
// //           setSongs(data.songs);
// //         }
        
// //         // ✅ Set Playlists
// //         if (data.publicPlaylists && Array.isArray(data.publicPlaylists)) {
// //           setPlaylists(data.publicPlaylists);
// //         }

// //         console.log('✅ Data set from API:', {
// //           artist: data.artist,
// //           isFollowing: followStatus,
// //           songsCount: data.songs?.length,
// //           playlistsCount: data.publicPlaylists?.length
// //         });

// //       } else {
// //         console.log('❌ API response not successful');
// //         Alert.alert('Error', 'Failed to load artist data');
// //       }
// //     } catch (error) {
// //       console.error('❌ Artist profile fetch error:', error);
// //       Alert.alert('Error', 'Failed to load artist profile');
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   // ✅ LOCAL FOLLOW STATUS CHECK (Optional - agar API reliable nahi hai)
// //   const checkLocalFollowStatus = async (artistId) => {
// //     try {
// //       // Yahan aap AsyncStorage ya local state check kar sakte hain
// //       // Temporary solution - manually manage karo
// //       return false; // Default false, API pe depend karo
// //     } catch (error) {
// //       console.log('❌ Local follow status check error:', error);
// //       return false;
// //     }
// //   };

// //   // ✅ Format time helper
// //   const formatTime = (seconds) => {
// //     const mins = Math.floor(seconds / 60);
// //     const secs = seconds % 60;
// //     return `${mins}:${secs.toString().padStart(2, '0')}`;
// //   };

// //   // ✅ FIXED: Follow/Unfollow Handler - WITH BETTER SYNC
// //   const handleFollowToggle = async () => {
// //     if (isFollowLoading) return;
    
// //     try {
// //       setIsFollowLoading(true);
      
// //       if (isFollowing) {
// //         // Unfollow artist
// //         console.log('👤 Unfollowing artist from Artist Profile:', artistId);
// //         const response = await unfollowArtist(artistId);
        
// //         if (response.success) {
// //           setIsFollowing(false);
// //           // ✅ Update local artist data
// //           setArtistData(prev => ({
// //             ...prev,
// //             followers: Math.max(0, (prev.followers || 0) - 1),
// //             isFavorite: false,
// //             isFollowing: false
// //           }));
// //           console.log('✅ Artist unfollowed successfully from Artist Profile');
          
// //           // ✅ Optional: Local storage mein bhi save karo
// //           await saveLocalFollowStatus(artistId, false);
// //         } else {
// //           Alert.alert('Error', response.message || 'Failed to unfollow artist');
// //         }
// //       } else {
// //         // Follow artist
// //         console.log('👤 Following artist from Artist Profile:', artistId);
// //         const response = await followArtist(artistId);
        
// //         if (response.success) {
// //           setIsFollowing(true);
// //           // ✅ Update local artist data
// //           setArtistData(prev => ({
// //             ...prev,
// //             followers: (prev.followers || 0) + 1,
// //             isFavorite: true,
// //             isFollowing: true
// //           }));
// //           console.log('✅ Artist followed successfully from Artist Profile');
          
// //           // ✅ Optional: Local storage mein bhi save karo
// //           await saveLocalFollowStatus(artistId, true);
// //         } else {
// //           Alert.alert('Error', response.message || 'Failed to follow artist');
// //         }
// //       }
// //     } catch (error) {
// //       console.error('❌ Follow toggle error in Artist Profile:', error);
// //       Alert.alert('Error', 'Something went wrong');
// //     } finally {
// //       setIsFollowLoading(false);
// //     }
// //   };

// //   // ✅ SAVE LOCAL FOLLOW STATUS (Optional)
// //   const saveLocalFollowStatus = async (artistId, status) => {
// //     try {
// //       // Yahan aap AsyncStorage use kar sakte hain follow status store karne ke liye
// //       // Example: await AsyncStorage.setItem(`follow_${artistId}`, status.toString());
// //       console.log(`💾 Local follow status saved: Artist ${artistId} -> ${status}`);
// //     } catch (error) {
// //       console.log('❌ Local follow status save error:', error);
// //     }
// //   };

// //   // ✅ FIXED: Song Press Handler
// //   const handleSongPress = async (song) => {
// //     console.log('🎵 Song pressed from Artist Profile:', song);
    
// //     try {
// //       const songInfo = await getDataWithToken(`user/song/${song.id}/info`);
// //       console.log('🎵 Song Info from Artist Screen:', songInfo);
      
// //       if (songInfo && songInfo.success) {
// //         const songData = {
// //           id: song.id,
// //           title: song.title || 'Unknown Title',
// //           artist: artistData?.name || 'Unknown Artist',
// //           audioUrl: songInfo.song?.audioFile 
// //             ? `${mobile_siteConfig.IMAGE_BASE_URL}${songInfo.song.audioFile}`
// //             : 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
// //           artwork: getImageUrl(song.coverImage || songInfo.song?.thumbnail)
// //         };
        
// //         console.log('🎵 Playing song data from Artist:', songData);
        
// //         playSong(songData);
        
// //         navigation.navigate('NowPlayingScreen', { 
// //           songId: song.id,
// //           resetToBeginning: true 
// //         });
// //       } else {
// //         throw new Error('Song info not found');
// //       }
// //     } catch (error) {
// //       console.error('❌ Error playing song from Artist:', error);
      
// //       const fallbackSongData = {
// //         id: song.id,
// //         title: song.title || 'Unknown Title',
// //         artist: artistData?.name || 'Unknown Artist',
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

// //   // ✅ Render Song Item
// //   const renderSongItem = ({ item }) => (
// //     <TouchableOpacity 
// //       style={styles.songItem}
// //       onPress={() => handleSongPress(item)}
// //     >
// //       <Image 
// //         source={{ uri: getImageUrl(item.coverImage) }} 
// //         style={styles.songImage}
// //         resizeMode="cover"
// //         defaultSource={{ uri: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop' }}
// //       />
// //       <View style={styles.songInfo}>
// //         <Text style={styles.songTitle} numberOfLines={1}>
// //           {item.title || 'Unknown Title'}
// //         </Text>
// //         <Text style={styles.songArtist} numberOfLines={1}>
// //           {item.artist?.name || artistData?.name || 'Unknown Artist'}
// //         </Text>
// //         <Text style={styles.songMeta}>
// //           {formatTime(item.duration)} • {item.playCount || 0} plays
// //         </Text>
// //       </View>
// //       <TouchableOpacity style={styles.moreButton}>
// //         {/* <Icon name="more-horiz" size={24} color="#b3b3b3" /> */}
// //       </TouchableOpacity>
// //     </TouchableOpacity>
// //   );

// //   // ✅ Render Playlist Item
// //   const renderPlaylistItem = ({ item }) => (
// //     <TouchableOpacity style={styles.playlistItem}>
// //       <View style={styles.playlistImageContainer}>
// //         <Image 
// //           source={{ uri: getImageUrl(item.artistSongs?.[0]?.coverImage) }} 
// //           style={styles.playlistImage}
// //           resizeMode="cover"
// //           defaultSource={{ uri: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop' }}
// //         />
// //         <View style={styles.playlistOverlay}>
// //           <Icon name="play-arrow" size={wp(7)} color="#fff" />
// //         </View>
// //       </View>
// //       <Text style={styles.playlistTitle} numberOfLines={2}>
// //         {item.title}
// //       </Text>
// //       <Text style={styles.playlistInfo}>
// //         {item.totalSongs || 0} songs • {item.description || 'No description'}
// //       </Text>
// //     </TouchableOpacity>
// //   );

// //   // ✅ Loading State
// //   if (isLoading) {
// //     return (
// //       <SafeAreaView style={styles.container}>
// //         <StatusBar barStyle="light-content" backgroundColor="#000" />
// //         <View style={styles.loadingContainer}>
// //           <ActivityIndicator size="large" color="#FF3B3B" />
// //           <Text style={styles.loadingText}>Loading artist profile...</Text>
// //         </View>
// //       </SafeAreaView>
// //     );
// //   }

// //   // ✅ If no artist data
// //   if (!artistData) {
// //     return (
// //       <SafeAreaView style={styles.container}>
// //         <StatusBar barStyle="light-content" backgroundColor="#000" />
// //         <View style={styles.errorContainer}>
// //           <Icon name="error-outline" size={wp(16)} color="#b3b3b3" />
// //           <Text style={styles.errorText}>Artist not found</Text>
// //           <TouchableOpacity 
// //             style={styles.retryButton}
// //             onPress={fetchArtistData}
// //           >
// //             <Text style={styles.retryButtonText}>Retry</Text>
// //           </TouchableOpacity>
// //         </View>
// //       </SafeAreaView>
// //     );
// //   }

// //   return (
// //     <SafeAreaView style={styles.container}>
// //       <StatusBar barStyle="light-content" backgroundColor="#000" />
      
// //       {/* Header with Back Button */}
// //       <View style={styles.header}>
// //         <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
// //           <Icon name="arrow-back" size={wp(6)} color="#fff" />
// //         </TouchableOpacity>
// //         <View style={styles.headerTitleContainer}>
// //           <Text style={styles.headerTitle} numberOfLines={1}>
// //             {artistData.name}
// //           </Text>
// //           <Text style={styles.headerSubtitle}>Artist</Text>
// //         </View>
// //         <View style={styles.headerRight}>
// //           <TouchableOpacity style={styles.headerIcon}>
// //             {/* <Icon name="more-vert" size={wp(6)} color="#fff" /> */}
// //           </TouchableOpacity>
// //         </View>
// //       </View>

// //       <ScrollView 
// //         style={styles.scrollView}
// //         showsVerticalScrollIndicator={false}
// //       >
// //         {/* Artist Header Section */}
// //         <View style={styles.artistHeader}>
// //           <View style={styles.artistImageContainer}>
// //             <Image 
// //               source={{ uri: getImageUrl(artistData.profilePic) }}
// //               style={styles.artistImage}
// //               resizeMode="cover"
// //               defaultSource={{ uri: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop&crop=face' }}
// //             />
// //             {artistData.isVerified && (
// //               <View style={styles.verifiedBadgeLarge}>
// //                 <Icon name="verified" size={wp(7)} color="#1DB954" />
// //               </View>
// //             )}
// //           </View>
          
// //           <View style={styles.artistInfo}>
// //             <Text style={styles.artistName}>
// //               {artistData.name}
// //             </Text>
// //             <Text style={styles.artistStageName}>
// //               {artistData.stageName}
// //             </Text>
// //             {artistData.bio && (
// //               <Text style={styles.artistBio}>
// //                 {artistData.bio}
// //               </Text>
// //             )}
// //           </View>

// //           <View style={styles.statsSection}>
// //             <View style={styles.statItem}>
// //               <Text style={styles.statNumber}>
// //                 {artistData.totalSongs || 0}
// //               </Text>
// //               <Text style={styles.statLabel}>Songs</Text>
// //             </View>
// //             <View style={styles.statItem}>
// //               <Text style={styles.statNumber}>
// //                 {artistData.followers || 0}
// //               </Text>
// //               <Text style={styles.statLabel}>Followers</Text>
// //             </View>
// //             <View style={styles.statItem}>
// //               <Text style={styles.statNumber}>
// //                 {artistData.totalPlaylists || 0}
// //               </Text>
// //               <Text style={styles.statLabel}>Playlists</Text>
// //             </View>
// //           </View>

// //           <View style={styles.actionButtons}>
// //             {/* ✅ FIXED: Follow Button - Proper State Display */}
// //             <TouchableOpacity 
// //               style={[
// //                 styles.followButton,
// //                 isFollowing ? styles.followingButton : styles.notFollowingButton
// //               ]}
// //               onPress={handleFollowToggle}
// //               disabled={isFollowLoading}
// //             >
// //               {isFollowLoading ? (
// //                 <ActivityIndicator size="small" color={isFollowing ? "#FF3B3B" : "#fff"} />
// //               ) : (
// //                 <>
// //                   <Text style={[
// //                     styles.followButtonText,
// //                     isFollowing ? styles.followingButtonText : styles.notFollowingButtonText
// //                   ]}>
// //                     {isFollowing ? 'Following' : 'Follow'}
// //                   </Text>
// //                   {/* ✅ Debug Info (Remove in production) */}
// //                   <Text style={styles.debugText}>
// //                     {`API: ${artistData.isFavorite !== undefined ? artistData.isFavorite : 'N/A'}`}
// //                   </Text>
// //                 </>
// //               )}
// //             </TouchableOpacity>
// //           </View>
// //         </View>

// //         {/* Songs Section */}
// //         {songs.length > 0 && (
// //           <View style={styles.section}>
// //             <View style={styles.sectionHeader}>
// //               <Text style={styles.sectionTitle}>Popular Songs</Text>
// //               <Text style={styles.sectionCount}>{songs.length} songs</Text>
// //             </View>
// //             <FlatList
// //               data={songs}
// //               renderItem={renderSongItem}
// //               keyExtractor={item => `song-${item.id}`}
// //               scrollEnabled={false}
// //             />
// //           </View>
// //         )}

// //         {/* Playlists Section */}
// //         {playlists.length > 0 && (
// //           <View style={styles.section}>
// //             <View style={styles.sectionHeader}>
// //               <Text style={styles.sectionTitle}>Public Playlists</Text>
// //               <Text style={styles.sectionCount}>{playlists.length} playlists</Text>
// //             </View>
// //             <FlatList
// //               data={playlists}
// //               renderItem={renderPlaylistItem}
// //               keyExtractor={item => `playlist-${item.id}`}
// //               horizontal
// //               showsHorizontalScrollIndicator={false}
// //               contentContainerStyle={styles.playlistsList}
// //             />
// //           </View>
// //         )}

// //         {/* No Content Message */}
// //         {songs.length === 0 && playlists.length === 0 && (
// //           <View style={styles.noContent}>
// //             <Icon name="music-off" size={wp(16)} color="#b3b3b3" />
// //             <Text style={styles.noContentText}>No content available</Text>
// //             <Text style={styles.noContentSubtext}>
// //               This artist hasn't uploaded any songs or playlists yet.
// //             </Text>
// //           </View>
// //         )}

// //         {/* Bottom Padding */}
// //         <View style={styles.bottomPadding} />
// //       </ScrollView>
// //     </SafeAreaView>
// //   );
// // };

// // // ✅ STYLES (Same as before with responsive design)
// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#000',
// //   },
// //   songArtist: {
// //     fontSize: wp(3.5),
// //     color: '#b3b3b3',
// //     marginBottom: hp(0.5),
// //   },
// //   loadingContainer: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     backgroundColor: '#000',
// //   },
// //   loadingText: {
// //     color: '#fff',
// //     marginTop: hp(1),
// //     fontSize: wp(4),
// //   },
// //   errorContainer: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     backgroundColor: '#000',
// //     paddingHorizontal: wp(5),
// //   },
// //   errorText: {
// //     color: '#fff',
// //     fontSize: wp(4.5),
// //     fontWeight: 'bold',
// //     marginTop: hp(2),
// //     marginBottom: hp(1),
// //   },
// //   retryButton: {
// //     backgroundColor: '#FF3B3B',
// //     paddingHorizontal: wp(6),
// //     paddingVertical: hp(1.5),
// //     borderRadius: wp(6),
// //     marginTop: hp(2),
// //   },
// //   retryButtonText: {
// //     color: '#fff',
// //     fontSize: wp(4),
// //     fontWeight: 'bold',
// //   },
// //   header: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     paddingHorizontal: wp(4),
// //     paddingVertical: hp(1.5),
// //     borderBottomWidth: 1,
// //     borderBottomColor: '#282828',
// //   },
// //   backButton: {
// //     padding: wp(1),
// //   },
// //   headerTitleContainer: {
// //     flex: 1,
// //     alignItems: 'center',
// //   },
// //   headerTitle: {
// //     fontSize: wp(4.5),
// //     fontWeight: 'bold',
// //     color: '#fff',
// //   },
// //   headerSubtitle: {
// //     fontSize: wp(3),
// //     color: '#b3b3b3',
// //   },
// //   headerRight: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //   },
// //   headerIcon: {
// //     padding: wp(1),
// //     marginLeft: wp(3),
// //   },
// //   scrollView: {
// //     flex: 1,
// //   },
// //   artistHeader: {
// //     paddingHorizontal: wp(6),
// //     paddingVertical: hp(3),
// //     alignItems: 'center',
// //     borderBottomWidth: 1,
// //     borderBottomColor: '#282828',
// //   },
// //   artistImageContainer: {
// //     marginBottom: hp(2.5),
// //     position: 'relative',
// //   },
// //   artistImage: {
// //     width: wp(35),
// //     height: wp(35),
// //     borderRadius: wp(17.5),
// //   },
// //   verifiedBadgeLarge: {
// //     position: 'absolute',
// //     bottom: wp(1),
// //     right: wp(1),
// //     backgroundColor: '#000',
// //     borderRadius: wp(4),
// //     padding: wp(1),
// //   },
// //   artistInfo: {
// //     alignItems: 'center',
// //     marginBottom: hp(2.5),
// //   },
// //   artistName: {
// //     fontSize: wp(7),
// //     fontWeight: 'bold',
// //     color: '#fff',
// //     marginBottom: hp(0.5),
// //     textAlign: 'center',
// //   },
// //   artistStageName: {
// //     fontSize: wp(4),
// //     color: '#b3b3b3',
// //     marginBottom: hp(1),
// //     fontStyle: 'italic',
// //   },
// //   artistBio: {
// //     fontSize: wp(3.5),
// //     color: '#b3b3b3',
// //     textAlign: 'center',
// //     lineHeight: hp(2.5),
// //     maxWidth: '80%',
// //   },
// //   statsSection: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-around',
// //     width: '100%',
// //     marginBottom: hp(2.5),
// //   },
// //   statItem: {
// //     alignItems: 'center',
// //     flex: 1,
// //   },
// //   statNumber: {
// //     fontSize: wp(4.5),
// //     fontWeight: 'bold',
// //     color: '#fff',
// //     marginBottom: hp(0.5),
// //   },
// //   statLabel: {
// //     fontSize: wp(3),
// //     color: '#b3b3b3',
// //     textAlign: 'center',
// //   },
// //   actionButtons: {
// //     flexDirection: 'row',
// //     justifyContent: 'center',
// //     width: '100%',
// //     gap: wp(3),
// //   },
// //   followButton: {
// //     paddingHorizontal: wp(8),
// //     paddingVertical: hp(1.5),
// //     borderRadius: wp(6),
// //     minWidth: wp(25),
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// //   notFollowingButton: {
// //     backgroundColor: '#FF3B3B',
// //   },
// //   followingButton: {
// //     backgroundColor: 'transparent',
// //     borderWidth: 1,
// //     borderColor: '#FF3B3B',
// //   },
// //   followButtonText: {
// //     fontSize: wp(3.5),
// //     fontWeight: 'bold',
// //   },
// //   notFollowingButtonText: {
// //     color: '#fff',
// //   },
// //   followingButtonText: {
// //     color: '#FF3B3B',
// //   },
// //   debugText: {
// //     fontSize: wp(2),
// //     color: '#666',
// //     marginTop: hp(0.5),
// //   },
// //   section: {
// //     paddingHorizontal: wp(5),
// //     paddingVertical: hp(2.5),
// //     borderBottomWidth: 1,
// //     borderBottomColor: '#282828',
// //   },
// //   sectionHeader: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     marginBottom: hp(2),
// //   },
// //   sectionTitle: {
// //     fontSize: wp(5.5),
// //     fontWeight: 'bold',
// //     color: '#fff',
// //   },
// //   sectionCount: {
// //     fontSize: wp(3.5),
// //     color: '#b3b3b3',
// //   },
// //   songItem: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     marginBottom: hp(2),
// //     backgroundColor: 'rgba(255,255,255,0.05)',
// //     borderRadius: wp(2),
// //     padding: wp(3),
// //   },
// //   songImage: {
// //     width: wp(15),
// //     height: wp(15),
// //     borderRadius: wp(1),
// //     marginRight: wp(3),
// //   },
// //   songInfo: {
// //     flex: 1,
// //   },
// //   songTitle: {
// //     fontSize: wp(4),
// //     fontWeight: '600',
// //     color: '#fff',
// //     marginBottom: hp(0.5),
// //   },
// //   songAlbum: {
// //     fontSize: wp(3.5),
// //     color: '#b3b3b3',
// //     marginBottom: hp(0.3),
// //   },
// //   songMeta: {
// //     fontSize: wp(3),
// //     color: '#666',
// //   },
// //   moreButton: {
// //     padding: wp(1),
// //   },
// //   playlistsList: {
// //     paddingRight: wp(4),
// //   },
// //   playlistItem: {
// //     width: wp(40),
// //     marginRight: wp(4),
// //   },
// //   playlistImageContainer: {
// //     width: wp(40),
// //     height: wp(40),
// //     borderRadius: wp(2),
// //     marginBottom: hp(1.5),
// //     position: 'relative',
// //     overflow: 'hidden',
// //   },
// //   playlistImage: {
// //     width: '100%',
// //     height: '100%',
// //   },
// //   playlistOverlay: {
// //     ...StyleSheet.absoluteFillObject,
// //     backgroundColor: 'rgba(0,0,0,0.5)',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     opacity: 0,
// //   },
// //   playlistTitle: {
// //     fontSize: wp(3.5),
// //     fontWeight: '600',
// //     color: '#fff',
// //     marginBottom: hp(0.5),
// //   },
// //   playlistInfo: {
// //     fontSize: wp(3),
// //     color: '#b3b3b3',
// //   },
// //   noContent: {
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     paddingVertical: hp(8),
// //     paddingHorizontal: wp(5),
// //   },
// //   noContentText: {
// //     fontSize: wp(4.5),
// //     color: '#fff',
// //     fontWeight: 'bold',
// //     marginTop: hp(2),
// //     marginBottom: hp(1),
// //     textAlign: 'center',
// //   },
// //   noContentSubtext: {
// //     fontSize: wp(3.5),
// //     color: '#b3b3b3',
// //     textAlign: 'center',
// //     lineHeight: hp(2.5),
// //   },
// //   bottomPadding: {
// //     height: hp(3),
// //   },
// // });

// // export default ArtistProfileScreen;

// // ArtistProfileScreen.js - COMPLETE FIX
// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   ScrollView,
//   TouchableOpacity,
//   StyleSheet,
//   StatusBar,
//   SafeAreaView,
//   Image,
//   FlatList,
//   Dimensions,
//   ActivityIndicator,
//   Alert
// } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import { useNavigation } from '@react-navigation/native';
// import { getDataWithToken } from '../Services/mobile-api';
// import { mobile_siteConfig } from '../Services/mobile-siteConfig';
// import { useAudio } from '../contexts/AudioContext';
// import { followArtist, unfollowArtist } from '../Services/mobile-api';
// import { wp, hp } from "../assets/Global.Css";

// const { width } = Dimensions.get('window');

// const getImageUrl = (imagePath) => {
//   if (!imagePath || imagePath === 'null' || imagePath === 'undefined') {
//     return 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop&crop=face';
//   }
//   if (imagePath.startsWith('http')) return imagePath;
//   if (imagePath.startsWith('/')) return `${mobile_siteConfig.IMAGE_BASE_URL}${imagePath}`;
//   return 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop&crop=face';
// };

// const ArtistProfileScreen = ({ route }) => {
//   const navigation = useNavigation();
//   const { artistId, artistName = 'Artist' } = route.params || {};

//   const { playSong } = useAudio();
//   const [artistData, setArtistData] = useState(null);
//   const [songs, setSongs] = useState([]);
//   const [playlists, setPlaylists] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isFollowing, setIsFollowing] = useState(false);
//   const [isFollowLoading, setIsFollowLoading] = useState(false);

//   // ✅ Fetch Artist Data with LOCAL STATUS CHECK
//   const fetchArtistData = async () => {
//     try {
//       setIsLoading(true);
//       console.log('🎵 Fetching artist data for ID:', artistId);

//       // ✅ PEHLE LOCAL STATUS CHECK KARO
//       const localFollowStatus = await checkLocalFollowStatus(artistId);
//       console.log('🎵 Local follow status:', localFollowStatus);

//       const response = await getDataWithToken(`user/artist/${artistId}`);
//       console.log('🎵 Artist Profile API Response:', response);

//       if (response && response.success) {
//         const data = response.data;
//         setArtistData(data.artist);
        
//         // ✅ CRITICAL: LOCAL STATUS ko priority do
//         let followStatus = localFollowStatus;
        
//         // Agar local status nahi hai, tabhi API status check karo
//         if (!localFollowStatus) {
//           if (data.artist?.isFavorite !== undefined) {
//             followStatus = data.artist.isFavorite;
//           } else if (data.artist?.isFollowing !== undefined) {
//             followStatus = data.artist.isFollowing;
//           } else if (data.artist?.followStatus !== undefined) {
//             followStatus = data.artist.followStatus;
//           }
//         }
        
//         setIsFollowing(followStatus);
//         console.log('✅ Final follow status set to:', followStatus, '(Local:', localFollowStatus, ')');
        
//         if (data.songs && Array.isArray(data.songs)) {
//           setSongs(data.songs);
//         }
//         if (data.publicPlaylists && Array.isArray(data.publicPlaylists)) {
//           setPlaylists(data.publicPlaylists);
//         }

//       } else {
//         console.log('❌ API response not successful');
//       }
//     } catch (error) {
//       console.error('❌ Artist profile fetch error:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // ✅ LOCAL FOLLOW STATUS CHECK from AsyncStorage
//   const checkLocalFollowStatus = async (artistId) => {
//     try {
//       const storedStatus = await AsyncStorage.getItem('artist_follow_status');
//       if (storedStatus) {
//         const followStatusMap = JSON.parse(storedStatus);
//         return followStatusMap[artistId] || false;
//       }
//       return false;
//     } catch (error) {
//       console.log('❌ Local follow status check error:', error);
//       return false;
//     }
//   };

//   // ✅ SAVE LOCAL FOLLOW STATUS
//   const saveLocalFollowStatus = async (artistId, status) => {
//     try {
//       const storedStatus = await AsyncStorage.getItem('artist_follow_status');
//       let followStatusMap = storedStatus ? JSON.parse(storedStatus) : {};
//       followStatusMap[artistId] = status;
//       await AsyncStorage.setItem('artist_follow_status', JSON.stringify(followStatusMap));
//       console.log(`💾 Local follow status saved: Artist ${artistId} -> ${status}`);
//     } catch (error) {
//       console.log('❌ Local follow status save error:', error);
//     }
//   };

//   // ✅ Follow/Unfollow Handler - WITH LOCAL SYNC
//   const handleFollowToggle = async () => {
//     if (isFollowLoading) return;
    
//     try {
//       setIsFollowLoading(true);
      
//       // ✅ OPTIMISTIC UPDATE
//       const newFollowStatus = !isFollowing;
//       setIsFollowing(newFollowStatus);
//       await saveLocalFollowStatus(artistId, newFollowStatus);
      
//       if (newFollowStatus) {
//         // Follow artist
//         console.log('👤 Following artist:', artistId);
//         const response = await followArtist(artistId);
        
//         if (response.success) {
//           console.log('✅ Artist followed successfully');
//           setArtistData(prev => ({
//             ...prev,
//             followers: (prev.followers || 0) + 1
//           }));
//         } else {
//           // Revert on failure
//           console.log('❌ Follow failed, reverting UI');
//           setIsFollowing(false);
//           await saveLocalFollowStatus(artistId, false);
//           Alert.alert('Error', response.message || 'Failed to follow artist');
//         }
//       } else {
//         // Unfollow artist
//         console.log('👤 Unfollowing artist:', artistId);
//         const response = await unfollowArtist(artistId);
        
//         if (response.success) {
//           console.log('✅ Artist unfollowed successfully');
//           setArtistData(prev => ({
//             ...prev,
//             followers: Math.max(0, (prev.followers || 0) - 1)
//           }));
//         } else {
//           // Revert on failure
//           console.log('❌ Unfollow failed, reverting UI');
//           setIsFollowing(true);
//           await saveLocalFollowStatus(artistId, true);
//           Alert.alert('Error', response.message || 'Failed to unfollow artist');
//         }
//       }
//     } catch (error) {
//       console.error('❌ Follow toggle error:', error);
//       // Revert on error
//       setIsFollowing(!isFollowing);
//       await saveLocalFollowStatus(artistId, !isFollowing);
//       Alert.alert('Error', 'Something went wrong');
//     } finally {
//       setIsFollowLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (artistId) {
//       fetchArtistData();
//     }
//   }, [artistId]);

//   // ✅ Format time helper
//   const formatTime = (seconds) => {
//     const mins = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${mins}:${secs.toString().padStart(2, '0')}`;
//   };

//   // ✅ Song Press Handler
//   const handleSongPress = async (song) => {
//     console.log('🎵 Song pressed:', song);
//     try {
//       const songInfo = await getDataWithToken(`user/song/${song.id}/info`);
//       if (songInfo && songInfo.success) {
//         const songData = {
//           id: song.id,
//           title: song.title || 'Unknown Title',
//           artist: artistData?.name || 'Unknown Artist',
//           audioUrl: songInfo.song?.audioFile 
//             ? `${mobile_siteConfig.IMAGE_BASE_URL}${songInfo.song.audioFile}`
//             : 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
//           artwork: getImageUrl(song.coverImage || songInfo.song?.thumbnail)
//         };
//         playSong(songData);
//         navigation.navigate('NowPlayingScreen', { 
//           songId: song.id,
//           resetToBeginning: true 
//         });
//       }
//     } catch (error) {
//       console.error('❌ Error playing song:', error);
//       const fallbackSongData = {
//         id: song.id,
//         title: song.title || 'Unknown Title',
//         artist: artistData?.name || 'Unknown Artist',
//         audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
//         artwork: getImageUrl(song.coverImage)
//       };
//       playSong(fallbackSongData);
//       navigation.navigate('NowPlayingScreen', { 
//         songId: song.id,
//         resetToBeginning: true
//       });
//     }
//   };

//   // ✅ Render Song Item
//   const renderSongItem = ({ item }) => (
//     <TouchableOpacity 
//       style={styles.songItem}
//       onPress={() => handleSongPress(item)}
//     >
//       <Image 
//         source={{ uri: getImageUrl(item.coverImage) }} 
//         style={styles.songImage}
//         resizeMode="cover"
//         defaultSource={{ uri: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop' }}
//       />
//       <View style={styles.songInfo}>
//         <Text style={styles.songTitle} numberOfLines={1}>
//           {item.title || 'Unknown Title'}
//         </Text>
//         <Text style={styles.songArtist} numberOfLines={1}>
//           {item.artist?.name || artistData?.name || 'Unknown Artist'}
//         </Text>
//         <Text style={styles.songMeta}>
//           {formatTime(item.duration)} • {item.playCount || 0} plays
//         </Text>
//       </View>
//     </TouchableOpacity>
//   );

//   // ✅ Render Playlist Item
//   const renderPlaylistItem = ({ item }) => (
//     <TouchableOpacity style={styles.playlistItem}>
//       <View style={styles.playlistImageContainer}>
//         <Image 
//           source={{ uri: getImageUrl(item.artistSongs?.[0]?.coverImage) }} 
//           style={styles.playlistImage}
//           resizeMode="cover"
//           defaultSource={{ uri: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop' }}
//         />
//         <View style={styles.playlistOverlay}>
//           <Icon name="play-arrow" size={wp(7)} color="#fff" />
//         </View>
//       </View>
//       <Text style={styles.playlistTitle} numberOfLines={2}>
//         {item.title}
//       </Text>
//       <Text style={styles.playlistInfo}>
//         {item.totalSongs || 0} songs • {item.description || 'No description'}
//       </Text>
//     </TouchableOpacity>
//   );

//   // ✅ Loading State
//   if (isLoading) {
//     return (
//       <SafeAreaView style={styles.container}>
//         <StatusBar barStyle="light-content" backgroundColor="#000" />
//         <View style={styles.loadingContainer}>
//           <ActivityIndicator size="large" color="#FF3B3B" />
//           <Text style={styles.loadingText}>Loading artist profile...</Text>
//         </View>
//       </SafeAreaView>
//     );
//   }

//   if (!artistData) {
//     return (
//       <SafeAreaView style={styles.container}>
//         <StatusBar barStyle="light-content" backgroundColor="#000" />
//         <View style={styles.errorContainer}>
//           <Icon name="error-outline" size={wp(16)} color="#b3b3b3" />
//           <Text style={styles.errorText}>Artist not found</Text>
//           <TouchableOpacity 
//             style={styles.retryButton}
//             onPress={fetchArtistData}
//           >
//             <Text style={styles.retryButtonText}>Retry</Text>
//           </TouchableOpacity>
//         </View>
//       </SafeAreaView>
//     );
//   }

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="light-content" backgroundColor="#000" />
      
//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//           <Icon name="arrow-back" size={wp(6)} color="#fff" />
//         </TouchableOpacity>
//         <View style={styles.headerTitleContainer}>
//           <Text style={styles.headerTitle} numberOfLines={1}>
//             {artistData.name}
//           </Text>
//           <Text style={styles.headerSubtitle}>Artist</Text>
//         </View>
//         <View style={styles.headerRight} />
//       </View>

//       <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
//         {/* Artist Header */}
//         <View style={styles.artistHeader}>
//           <View style={styles.artistImageContainer}>
//             <Image 
//               source={{ uri: getImageUrl(artistData.profilePic) }}
//               style={styles.artistImage}
//               resizeMode="cover"
//               defaultSource={{ uri: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop&crop=face' }}
//             />
//             {artistData.isVerified && (
//               <View style={styles.verifiedBadgeLarge}>
//                 <Icon name="verified" size={wp(7)} color="#1DB954" />
//               </View>
//             )}
//           </View>
          
//           <View style={styles.artistInfo}>
//             <Text style={styles.artistName}>{artistData.name}</Text>
//             <Text style={styles.artistStageName}>{artistData.stageName}</Text>
//             {artistData.bio && (
//               <Text style={styles.artistBio}>{artistData.bio}</Text>
//             )}
//           </View>

//           <View style={styles.statsSection}>
//             <View style={styles.statItem}>
//               <Text style={styles.statNumber}>{artistData.totalSongs || 0}</Text>
//               <Text style={styles.statLabel}>Songs</Text>
//             </View>
//             <View style={styles.statItem}>
//               <Text style={styles.statNumber}>{artistData.followers || 0}</Text>
//               <Text style={styles.statLabel}>Followers</Text>
//             </View>
//             <View style={styles.statItem}>
//               <Text style={styles.statNumber}>{artistData.totalPlaylists || 0}</Text>
//               <Text style={styles.statLabel}>Playlists</Text>
//             </View>
//           </View>

//           <View style={styles.actionButtons}>
//             <TouchableOpacity 
//               style={[
//                 styles.followButton,
//                 isFollowing ? styles.followingButton : styles.notFollowingButton
//               ]}
//               onPress={handleFollowToggle}
//               disabled={isFollowLoading}
//             >
//               {isFollowLoading ? (
//                 <ActivityIndicator size="small" color={isFollowing ? "#FF3B3B" : "#fff"} />
//               ) : (
//                 <Text style={[
//                   styles.followButtonText,
//                   isFollowing ? styles.followingButtonText : styles.notFollowingButtonText
//                 ]}>
//                   {isFollowing ? 'Following' : 'Follow'}
//                 </Text>
//               )}
//             </TouchableOpacity>
//           </View>
//         </View>

//         {/* Songs Section */}
//         {songs.length > 0 && (
//           <View style={styles.section}>
//             <View style={styles.sectionHeader}>
//               <Text style={styles.sectionTitle}>Popular Songs</Text>
//               <Text style={styles.sectionCount}>{songs.length} songs</Text>
//             </View>
//             <FlatList
//               data={songs}
//               renderItem={renderSongItem}
//               keyExtractor={item => `song-${item.id}`}
//               scrollEnabled={false}
//             />
//           </View>
//         )}

//         {/* Playlists Section */}
//         {playlists.length > 0 && (
//           <View style={styles.section}>
//             <View style={styles.sectionHeader}>
//               <Text style={styles.sectionTitle}>Public Playlists</Text>
//               <Text style={styles.sectionCount}>{playlists.length} playlists</Text>
//             </View>
//             <FlatList
//               data={playlists}
//               renderItem={renderPlaylistItem}
//               keyExtractor={item => `playlist-${item.id}`}
//               horizontal
//               showsHorizontalScrollIndicator={false}
//               contentContainerStyle={styles.playlistsList}
//             />
//           </View>
//         )}

//         {/* No Content */}
//         {songs.length === 0 && playlists.length === 0 && (
//           <View style={styles.noContent}>
//             <Icon name="music-off" size={wp(16)} color="#b3b3b3" />
//             <Text style={styles.noContentText}>No content available</Text>
//             <Text style={styles.noContentSubtext}>
//               This artist hasn't uploaded any songs or playlists yet.
//             </Text>
//           </View>
//         )}

//         <View style={styles.bottomPadding} />
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// // ✅ STYLES (SAME AS BEFORE)
// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#000' },
//   songArtist: { fontSize: wp(3.5), color: '#b3b3b3', marginBottom: hp(0.5) },
//   loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' },
//   loadingText: { color: '#fff', marginTop: hp(1), fontSize: wp(4) },
//   errorContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000', paddingHorizontal: wp(5) },
//   errorText: { color: '#fff', fontSize: wp(4.5), fontWeight: 'bold', marginTop: hp(2), marginBottom: hp(1) },
//   retryButton: { backgroundColor: '#FF3B3B', paddingHorizontal: wp(6), paddingVertical: hp(1.5), borderRadius: wp(6), marginTop: hp(2) },
//   retryButtonText: { color: '#fff', fontSize: wp(4), fontWeight: 'bold' },
//   header: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: wp(4), paddingVertical: hp(1.5), borderBottomWidth: 1, borderBottomColor: '#282828' },
//   backButton: { padding: wp(1) },
//   headerTitleContainer: { flex: 1, alignItems: 'center' },
//   headerTitle: { fontSize: wp(4.5), fontWeight: 'bold', color: '#fff' },
//   headerSubtitle: { fontSize: wp(3), color: '#b3b3b3' },
//   headerRight: { flexDirection: 'row', alignItems: 'center' },
//   scrollView: { flex: 1 },
//   artistHeader: { paddingHorizontal: wp(6), paddingVertical: hp(3), alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#282828' },
//   artistImageContainer: { marginBottom: hp(2.5), position: 'relative' },
//   artistImage: { width: wp(35), height: wp(35), borderRadius: wp(17.5) },
//   verifiedBadgeLarge: { position: 'absolute', bottom: wp(1), right: wp(1), backgroundColor: '#000', borderRadius: wp(4), padding: wp(1) },
//   artistInfo: { alignItems: 'center', marginBottom: hp(2.5) },
//   artistName: { fontSize: wp(7), fontWeight: 'bold', color: '#fff', marginBottom: hp(0.5), textAlign: 'center' },
//   artistStageName: { fontSize: wp(4), color: '#b3b3b3', marginBottom: hp(1), fontStyle: 'italic' },
//   artistBio: { fontSize: wp(3.5), color: '#b3b3b3', textAlign: 'center', lineHeight: hp(2.5), maxWidth: '80%' },
//   statsSection: { flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginBottom: hp(2.5) },
//   statItem: { alignItems: 'center', flex: 1 },
//   statNumber: { fontSize: wp(4.5), fontWeight: 'bold', color: '#fff', marginBottom: hp(0.5) },
//   statLabel: { fontSize: wp(3), color: '#b3b3b3', textAlign: 'center' },
//   actionButtons: { flexDirection: 'row', justifyContent: 'center', width: '100%', gap: wp(3) },
//   followButton: { paddingHorizontal: wp(8), paddingVertical: hp(1.5), borderRadius: wp(6), minWidth: wp(25), alignItems: 'center', justifyContent: 'center' },
//   notFollowingButton: { backgroundColor: '#FF3B3B' },
//   followingButton: { backgroundColor: 'transparent', borderWidth: 1, borderColor: '#FF3B3B' },
//   followButtonText: { fontSize: wp(3.5), fontWeight: 'bold' },
//   notFollowingButtonText: { color: '#fff' },
//   followingButtonText: { color: '#FF3B3B' },
//   section: { paddingHorizontal: wp(5), paddingVertical: hp(2.5), borderBottomWidth: 1, borderBottomColor: '#282828' },
//   sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: hp(2) },
//   sectionTitle: { fontSize: wp(5.5), fontWeight: 'bold', color: '#fff' },
//   sectionCount: { fontSize: wp(3.5), color: '#b3b3b3' },
//   songItem: { flexDirection: 'row', alignItems: 'center', marginBottom: hp(2), backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: wp(2), padding: wp(3) },
//   songImage: { width: wp(15), height: wp(15), borderRadius: wp(1), marginRight: wp(3) },
//   songInfo: { flex: 1 },
//   songTitle: { fontSize: wp(4), fontWeight: '600', color: '#fff', marginBottom: hp(0.5) },
//   songMeta: { fontSize: wp(3), color: '#666' },
//   playlistsList: { paddingRight: wp(4) },
//   playlistItem: { width: wp(40), marginRight: wp(4) },
//   playlistImageContainer: { width: wp(40), height: wp(40), borderRadius: wp(2), marginBottom: hp(1.5), position: 'relative', overflow: 'hidden' },
//   playlistImage: { width: '100%', height: '100%' },
//   playlistOverlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center', opacity: 0 },
//   playlistTitle: { fontSize: wp(3.5), fontWeight: '600', color: '#fff', marginBottom: hp(0.5) },
//   playlistInfo: { fontSize: wp(3), color: '#b3b3b3' },
//   noContent: { alignItems: 'center', justifyContent: 'center', paddingVertical: hp(8), paddingHorizontal: wp(5) },
//   noContentText: { fontSize: wp(4.5), color: '#fff', fontWeight: 'bold', marginTop: hp(2), marginBottom: hp(1), textAlign: 'center' },
//   noContentSubtext: { fontSize: wp(3.5), color: '#b3b3b3', textAlign: 'center', lineHeight: hp(2.5) },
//   bottomPadding: { height: hp(3) },
// });

// export default ArtistProfileScreen;

// ArtistProfileScreen.js - COMPLETE FIX FOR FOLLOWERS COUNT
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Image,
  FlatList,
  Dimensions,
  ActivityIndicator,
  Alert
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { getDataWithToken } from '../Services/mobile-api';
import { mobile_siteConfig } from '../Services/mobile-siteConfig';
import { useAudio } from '../contexts/AudioContext';
import { followArtist, unfollowArtist } from '../Services/mobile-api';
import { wp, hp } from "../assets/Global.Css";

const { width } = Dimensions.get('window');

const getImageUrl = (imagePath) => {
  if (!imagePath || imagePath === 'null' || imagePath === 'undefined') {
    return 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop&crop=face';
  }
  if (imagePath.startsWith('http')) return imagePath;
  if (imagePath.startsWith('/')) return `${mobile_siteConfig.IMAGE_BASE_URL}${imagePath}`;
  return 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop&crop=face';
};

const ArtistProfileScreen = ({ route }) => {
  const navigation = useNavigation();
  const { artistId, artistName = 'Artist' } = route.params || {};

  const { playSong } = useAudio();
  const [artistData, setArtistData] = useState(null);
  const [songs, setSongs] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFollowing, setIsFollowing] = useState(false);
  const [isFollowLoading, setIsFollowLoading] = useState(false);

  // ✅ Fetch Artist Data
  const fetchArtistData = async () => {
    try {
      setIsLoading(true);
      console.log('🎵 Fetching artist data for ID:', artistId);

      const response = await getDataWithToken(`user/artist/${artistId}`);
      console.log('🎵 Artist Profile API Response:', response);

      if (response && response.success) {
        const data = response.data;
        setArtistData(data.artist);
        
        // ✅ PEHLE LOCAL STORAGE CHECK KARO FOLLOWERS COUNT KE LIYE
        const localFollowersCount = await getLocalFollowersCount(artistId);
        const apiFollowers = data.artist?.followers || 0;
        
        console.log('🎵 API Followers:', apiFollowers, 'Local Followers:', localFollowersCount);
        
        // ✅ FINAL FOLLOWERS COUNT: Local storage ko priority do
        const finalFollowersCount = localFollowersCount !== null ? localFollowersCount : apiFollowers;
        
        // ✅ Follow status check
        let followStatus = false;
        
        if (data.artist?.isFavorite !== undefined) {
          followStatus = data.artist.isFavorite;
        } else if (data.artist?.isFollowing !== undefined) {
          followStatus = data.artist.isFollowing;
        } else if (data.artist?.followStatus !== undefined) {
          followStatus = data.artist.followStatus;
        }
        
        // ✅ EXTRA CHECK: Agar API false de raha hai to local storage check karo
        if (!followStatus) {
          const localStatus = await checkLocalFollowStatus(artistId);
          if (localStatus) {
            followStatus = true;
            console.log('🎵 Using local storage status: true');
          }
        }
        
        setIsFollowing(followStatus);
        console.log('✅ Final follow status set to:', followStatus);
        console.log('✅ Final followers count:', finalFollowersCount);
        
        // ✅ Update artist data with correct followers count
        setArtistData(prev => ({
          ...prev,
          followers: finalFollowersCount
        }));
        
        if (data.songs && Array.isArray(data.songs)) {
          setSongs(data.songs);
        }
        if (data.publicPlaylists && Array.isArray(data.publicPlaylists)) {
          setPlaylists(data.publicPlaylists);
        }

      } else {
        console.log('❌ API response not successful');
      }
    } catch (error) {
      console.error('❌ Artist profile fetch error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // ✅ LOCAL FOLLOW STATUS CHECK
  const checkLocalFollowStatus = async (artistId) => {
    try {
      const storedStatus = await AsyncStorage.getItem('artist_follow_status');
      if (storedStatus) {
        const followStatusMap = JSON.parse(storedStatus);
        return followStatusMap[artistId] || false;
      }
      return false;
    } catch (error) {
      console.log('❌ Local follow status check error:', error);
      return false;
    }
  };

  // ✅ GET LOCAL FOLLOWERS COUNT
  const getLocalFollowersCount = async (artistId) => {
    try {
      const storedCount = await AsyncStorage.getItem('artist_followers_count');
      if (storedCount) {
        const followersCountMap = JSON.parse(storedCount);
        return followersCountMap[artistId] !== undefined ? followersCountMap[artistId] : null;
      }
      return null;
    } catch (error) {
      console.log('❌ Local followers count check error:', error);
      return null;
    }
  };

  // ✅ SAVE LOCAL FOLLOW STATUS
  const saveLocalFollowStatus = async (artistId, status) => {
    try {
      const storedStatus = await AsyncStorage.getItem('artist_follow_status');
      let followStatusMap = storedStatus ? JSON.parse(storedStatus) : {};
      followStatusMap[artistId] = status;
      await AsyncStorage.setItem('artist_follow_status', JSON.stringify(followStatusMap));
      console.log(`💾 Local follow status saved: Artist ${artistId} -> ${status}`);
    } catch (error) {
      console.log('❌ Local follow status save error:', error);
    }
  };

  // ✅ SAVE LOCAL FOLLOWERS COUNT
  const saveLocalFollowersCount = async (artistId, count) => {
    try {
      const storedCount = await AsyncStorage.getItem('artist_followers_count');
      let followersCountMap = storedCount ? JSON.parse(storedCount) : {};
      followersCountMap[artistId] = count;
      await AsyncStorage.setItem('artist_followers_count', JSON.stringify(followersCountMap));
      console.log(`💾 Local followers count saved: Artist ${artistId} -> ${count}`);
    } catch (error) {
      console.log('❌ Local followers count save error:', error);
    }
  };

  // ✅ Follow/Unfollow Handler
  const handleFollowToggle = async () => {
    if (isFollowLoading) return;
    
    try {
      setIsFollowLoading(true);
      
      // ✅ OPTIMISTIC UPDATE
      const newFollowStatus = !isFollowing;
      setIsFollowing(newFollowStatus);
      
      // ✅ UPDATE FOLLOWERS COUNT
      const currentFollowers = artistData?.followers || 0;
      let newFollowersCount = currentFollowers;
      
      if (newFollowStatus) {
        newFollowersCount = currentFollowers + 1; // Follow karne pe +1
      } else {
        newFollowersCount = Math.max(0, currentFollowers - 1); // Unfollow karne pe -1
      }
      
      // ✅ Update local storage and UI
      await saveLocalFollowStatus(artistId, newFollowStatus);
      await saveLocalFollowersCount(artistId, newFollowersCount);
      
      // ✅ Update UI immediately
      setArtistData(prev => ({
        ...prev,
        followers: newFollowersCount
      }));
      
      if (newFollowStatus) {
        // Follow artist
        console.log('👤 Following artist:', artistId);
        const response = await followArtist(artistId);
        
        if (response.success) {
          console.log('✅ Artist followed successfully');
          // ✅ Refresh data to sync with API
          await fetchArtistData();
        } else {
          // Revert on failure
          console.log('❌ Follow failed, reverting UI');
          setIsFollowing(false);
          setArtistData(prev => ({
            ...prev,
            followers: currentFollowers
          }));
          await saveLocalFollowStatus(artistId, false);
          await saveLocalFollowersCount(artistId, currentFollowers);
          Alert.alert('Error', response.message || 'Failed to follow artist');
        }
      } else {
        // Unfollow artist
        console.log('👤 Unfollowing artist:', artistId);
        const response = await unfollowArtist(artistId);
        
        if (response.success) {
          console.log('✅ Artist unfollowed successfully');
          // ✅ Refresh data to sync with API
          await fetchArtistData();
        } else {
          // Revert on failure
          console.log('❌ Unfollow failed, reverting UI');
          setIsFollowing(true);
          setArtistData(prev => ({
            ...prev,
            followers: currentFollowers
          }));
          await saveLocalFollowStatus(artistId, true);
          await saveLocalFollowersCount(artistId, currentFollowers);
          Alert.alert('Error', response.message || 'Failed to unfollow artist');
        }
      }
    } catch (error) {
      console.error('❌ Follow toggle error:', error);
      // Revert on error
      setIsFollowing(!isFollowing);
      const currentFollowers = artistData?.followers || 0;
      setArtistData(prev => ({
        ...prev,
        followers: isFollowing ? currentFollowers - 1 : currentFollowers + 1
      }));
      await saveLocalFollowStatus(artistId, !isFollowing);
      await saveLocalFollowersCount(artistId, isFollowing ? currentFollowers - 1 : currentFollowers + 1);
      Alert.alert('Error', 'Something went wrong');
    } finally {
      setIsFollowLoading(false);
    }
  };

  useEffect(() => {
    if (artistId) {
      fetchArtistData();
    }
  }, [artistId]);

  // ✅ Rest of the code remains same...
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSongPress = async (song) => {
    console.log('🎵 Song pressed:', song);
    try {
      const songInfo = await getDataWithToken(`user/song/${song.id}/info`);
      if (songInfo && songInfo.success) {
        const songData = {
          id: song.id,
          title: song.title || 'Unknown Title',
          artist: artistData?.name || 'Unknown Artist',
          audioUrl: songInfo.song?.audioFile 
            ? `${mobile_siteConfig.IMAGE_BASE_URL}${songInfo.song.audioFile}`
            : 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
          artwork: getImageUrl(song.coverImage || songInfo.song?.thumbnail)
        };
        playSong(songData);
        navigation.navigate('NowPlayingScreen', { 
          songId: song.id,
          resetToBeginning: true 
        });
      }
    } catch (error) {
      console.error('❌ Error playing song:', error);
      const fallbackSongData = {
        id: song.id,
        title: song.title || 'Unknown Title',
        artist: artistData?.name || 'Unknown Artist',
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
        artwork: getImageUrl(song.coverImage)
      };
      playSong(fallbackSongData);
      navigation.navigate('NowPlayingScreen', { 
        songId: song.id,
        resetToBeginning: true
      });
    }
  };

  const renderSongItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.songItem}
      onPress={() => handleSongPress(item)}
    >
      <Image 
        source={{ uri: getImageUrl(item.coverImage) }} 
        style={styles.songImage}
        resizeMode="cover"
        defaultSource={{ uri: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop' }}
      />
      <View style={styles.songInfo}>
        <Text style={styles.songTitle} numberOfLines={1}>
          {item.title || 'Unknown Title'}
        </Text>
        <Text style={styles.songArtist} numberOfLines={1}>
          {item.artist?.name || artistData?.name || 'Unknown Artist'}
        </Text>
        <Text style={styles.songMeta}>
          {formatTime(item.duration)} • {item.playCount || 0} plays
        </Text>
      </View>
    </TouchableOpacity>
  );

  const renderPlaylistItem = ({ item }) => (
    <TouchableOpacity style={styles.playlistItem}>
      <View style={styles.playlistImageContainer}>
        <Image 
          source={{ uri: getImageUrl(item.artistSongs?.[0]?.coverImage) }} 
          style={styles.playlistImage}
          resizeMode="cover"
          defaultSource={{ uri: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop' }}
        />
        <View style={styles.playlistOverlay}>
          <Icon name="play-arrow" size={wp(7)} color="#fff" />
        </View>
      </View>
      <Text style={styles.playlistTitle} numberOfLines={2}>
        {item.title}
      </Text>
      <Text style={styles.playlistInfo}>
        {item.totalSongs || 0} songs • {item.description || 'No description'}
      </Text>
    </TouchableOpacity>
  );

  // ✅ Loading State
  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#000" />
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#FF3B3B" />
          <Text style={styles.loadingText}>Loading artist profile...</Text>
        </View>
      </SafeAreaView>
    );
  }

  if (!artistData) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#000" />
        <View style={styles.errorContainer}>
          <Icon name="error-outline" size={wp(16)} color="#b3b3b3" />
          <Text style={styles.errorText}>Artist not found</Text>
          <TouchableOpacity 
            style={styles.retryButton}
            onPress={fetchArtistData}
          >
            <Text style={styles.retryButtonText}>Retry</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-back" size={wp(6)} color="#fff" />
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle} numberOfLines={1}>
            {artistData.name}
          </Text>
          <Text style={styles.headerSubtitle}>Artist</Text>
        </View>
        <View style={styles.headerRight} />
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Artist Header */}
        <View style={styles.artistHeader}>
          <View style={styles.artistImageContainer}>
            <Image 
              source={{ uri: getImageUrl(artistData.profilePic) }}
              style={styles.artistImage}
              resizeMode="cover"
              defaultSource={{ uri: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop&crop=face' }}
            />
            {artistData.isVerified && (
              <View style={styles.verifiedBadgeLarge}>
                <Icon name="verified" size={wp(7)} color="#1DB954" />
              </View>
            )}
          </View>
          
          <View style={styles.artistInfo}>
            <Text style={styles.artistName}>{artistData.name}</Text>
            <Text style={styles.artistStageName}>{artistData.stageName}</Text>
            {artistData.bio && (
              <Text style={styles.artistBio}>{artistData.bio}</Text>
            )}
          </View>

          <View style={styles.statsSection}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>{artistData.totalSongs || 0}</Text>
              <Text style={styles.statLabel}>Songs</Text>
            </View>
            <View style={styles.statItem}>
              {/* ✅ FIXED: Use updated followers count from artistData */}
              <Text style={styles.statNumber}>{artistData.followers || 0}</Text>
              <Text style={styles.statLabel}>Followers</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>{artistData.totalPlaylists || 0}</Text>
              <Text style={styles.statLabel}>Playlists</Text>
            </View>
          </View>

          <View style={styles.actionButtons}>
            <TouchableOpacity 
              style={[
                styles.followButton,
                isFollowing ? styles.followingButton : styles.notFollowingButton
              ]}
              onPress={handleFollowToggle}
              disabled={isFollowLoading}
            >
              {isFollowLoading ? (
                <ActivityIndicator size="small" color={isFollowing ? "#FF3B3B" : "#fff"} />
              ) : (
                <Text style={[
                  styles.followButtonText,
                  isFollowing ? styles.followingButtonText : styles.notFollowingButtonText
                ]}>
                  {isFollowing ? 'Following' : 'Follow'}
                </Text>
              )}
            </TouchableOpacity>
          </View>
        </View>

        {/* Rest of the code remains same... */}
        {songs.length > 0 && (
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Popular Songs</Text>
              <Text style={styles.sectionCount}>{songs.length} songs</Text>
            </View>
            <FlatList
              data={songs}
              renderItem={renderSongItem}
              keyExtractor={item => `song-${item.id}`}
              scrollEnabled={false}
            />
          </View>
        )}

        {playlists.length > 0 && (
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Public Playlists</Text>
              <Text style={styles.sectionCount}>{playlists.length} playlists</Text>
            </View>
            <FlatList
              data={playlists}
              renderItem={renderPlaylistItem}
              keyExtractor={item => `playlist-${item.id}`}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.playlistsList}
            />
          </View>
        )}

        {songs.length === 0 && playlists.length === 0 && (
          <View style={styles.noContent}>
            <Icon name="music-off" size={wp(16)} color="#b3b3b3" />
            <Text style={styles.noContentText}>No content available</Text>
            <Text style={styles.noContentSubtext}>
              This artist hasn't uploaded any songs or playlists yet.
            </Text>
          </View>
        )}

        <View style={styles.bottomPadding} />
      </ScrollView>
    </SafeAreaView>
  );
};

// ✅ STYLES (SAME AS BEFORE)
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  songArtist: { fontSize: wp(3.5), color: '#b3b3b3', marginBottom: hp(0.5) },
  loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' },
  loadingText: { color: '#fff', marginTop: hp(1), fontSize: wp(4) },
  errorContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000', paddingHorizontal: wp(5) },
  errorText: { color: '#fff', fontSize: wp(4.5), fontWeight: 'bold', marginTop: hp(2), marginBottom: hp(1) },
  retryButton: { backgroundColor: '#FF3B3B', paddingHorizontal: wp(6), paddingVertical: hp(1.5), borderRadius: wp(6), marginTop: hp(2) },
  retryButtonText: { color: '#fff', fontSize: wp(4), fontWeight: 'bold' },
  header: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: wp(4), paddingVertical: hp(1.5), borderBottomWidth: 1, borderBottomColor: '#282828' },
  backButton: { padding: wp(1) },
  headerTitleContainer: { flex: 1, alignItems: 'center' },
  headerTitle: { fontSize: wp(4.5), fontWeight: 'bold', color: '#fff' },
  headerSubtitle: { fontSize: wp(3), color: '#b3b3b3' },
  headerRight: { flexDirection: 'row', alignItems: 'center' },
  scrollView: { flex: 1 },
  artistHeader: { paddingHorizontal: wp(6), paddingVertical: hp(3), alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#282828' },
  artistImageContainer: { marginBottom: hp(2.5), position: 'relative' },
  artistImage: { width: wp(35), height: wp(35), borderRadius: wp(17.5) },
  verifiedBadgeLarge: { position: 'absolute', bottom: wp(1), right: wp(1), backgroundColor: '#000', borderRadius: wp(4), padding: wp(1) },
  artistInfo: { alignItems: 'center', marginBottom: hp(2.5) },
  artistName: { fontSize: wp(7), fontWeight: 'bold', color: '#fff', marginBottom: hp(0.5), textAlign: 'center' },
  artistStageName: { fontSize: wp(4), color: '#b3b3b3', marginBottom: hp(1), fontStyle: 'italic' },
  artistBio: { fontSize: wp(3.5), color: '#b3b3b3', textAlign: 'center', lineHeight: hp(2.5), maxWidth: '80%' },
  statsSection: { flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginBottom: hp(2.5) },
  statItem: { alignItems: 'center', flex: 1 },
  statNumber: { fontSize: wp(4.5), fontWeight: 'bold', color: '#fff', marginBottom: hp(0.5) },
  statLabel: { fontSize: wp(3), color: '#b3b3b3', textAlign: 'center' },
  actionButtons: { flexDirection: 'row', justifyContent: 'center', width: '100%', gap: wp(3) },
  followButton: { paddingHorizontal: wp(8), paddingVertical: hp(1.5), borderRadius: wp(6), minWidth: wp(25), alignItems: 'center', justifyContent: 'center' },
  notFollowingButton: { backgroundColor: '#FF3B3B' },
  followingButton: { backgroundColor: 'transparent', borderWidth: 1, borderColor: '#FF3B3B' },
  followButtonText: { fontSize: wp(3.5), fontWeight: 'bold' },
  notFollowingButtonText: { color: '#fff' },
  followingButtonText: { color: '#FF3B3B' },
  section: { paddingHorizontal: wp(5), paddingVertical: hp(2.5), borderBottomWidth: 1, borderBottomColor: '#282828' },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: hp(2) },
  sectionTitle: { fontSize: wp(5.5), fontWeight: 'bold', color: '#fff' },
  sectionCount: { fontSize: wp(3.5), color: '#b3b3b3' },
  songItem: { flexDirection: 'row', alignItems: 'center', marginBottom: hp(2), backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: wp(2), padding: wp(3) },
  songImage: { width: wp(15), height: wp(15), borderRadius: wp(1), marginRight: wp(3) },
  songInfo: { flex: 1 },
  songTitle: { fontSize: wp(4), fontWeight: '600', color: '#fff', marginBottom: hp(0.5) },
  songMeta: { fontSize: wp(3), color: '#666' },
  playlistsList: { paddingRight: wp(4) },
  playlistItem: { width: wp(40), marginRight: wp(4) },
  playlistImageContainer: { width: wp(40), height: wp(40), borderRadius: wp(2), marginBottom: hp(1.5), position: 'relative', overflow: 'hidden' },
  playlistImage: { width: '100%', height: '100%' },
  playlistOverlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center', opacity: 0 },
  playlistTitle: { fontSize: wp(3.5), fontWeight: '600', color: '#fff', marginBottom: hp(0.5) },
  playlistInfo: { fontSize: wp(3), color: '#b3b3b3' },
  noContent: { alignItems: 'center', justifyContent: 'center', paddingVertical: hp(8), paddingHorizontal: wp(5) },
  noContentText: { fontSize: wp(4.5), color: '#fff', fontWeight: 'bold', marginTop: hp(2), marginBottom: hp(1), textAlign: 'center' },
  noContentSubtext: { fontSize: wp(3.5), color: '#b3b3b3', textAlign: 'center', lineHeight: hp(2.5) },
  bottomPadding: { height: hp(3) },
});

export default ArtistProfileScreen;