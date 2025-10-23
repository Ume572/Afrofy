// // src/screens/PlaylistScreen.js
// import React from 'react';
// import {
//   View,
//   Text,
//   ScrollView,
//   TouchableOpacity,
//   StyleSheet,
//   StatusBar,
//   SafeAreaView,
//   FlatList,
//   Image
// } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import { useNavigation } from '@react-navigation/native';

// const PlaylistScreen = ({ route }) => {
//   const navigation = useNavigation();
//   const { playlistName = 'Phonk Madness' } = route.params || {};

//   // Playlist songs data
//   const playlistSongs = [
//     { 
//       id: '1', 
//       title: 'METAMORPHOSIS', 
//       artist: 'INTERWORLD',
//       album: 'Minerie in My Mind',
//       duration: '2:45'
//     },
//     { 
//       id: '2', 
//       title: 'Objectbad Thema', 
//       artist: 'gjabu.com',
//       album: '',
//       duration: '3:12'
//     },
//     { 
//       id: '3', 
//       title: 'SHARON', 
//       artist: 'OHNANBUI, SMITHMANE',
//       album: '',
//       duration: '2:58'
//     },
//     { 
//       id: '4', 
//       title: 'Crystals', 
//       artist: 'brooke.exe',
//       album: '',
//       duration: '3:25'
//     },
//     { 
//       id: '5', 
//       title: 'DEMONS IN MY SOUL', 
//       artist: 'SCAR SOUL, Schmwy',
//       album: '',
//       duration: '2:37'
//     },
//     { 
//       id: '6', 
//       title: 'Snopp', 
//       artist: 'Kenemini',
//       album: '',
//       duration: '3:08'
//     },
//     { 
//       id: '7', 
//       title: 'GHOST!', 
//       artist: 'Kenemini',
//       album: '',
//       duration: '2:51'
//     },
//   ];

//   const renderSongItem = ({ item, index }) => (
//     <TouchableOpacity style={styles.songItem}>
//       <View style={styles.songNumber}>
//         <Text style={styles.songNumberText}>{index + 1}</Text>
//       </View>
//       <View style={styles.songInfo}>
//         <Text style={styles.songTitle} numberOfLines={1}>{item.title}</Text>
//         <Text style={styles.songArtist} numberOfLines={1}>
//           {item.artist}
//         </Text>
//       </View>
//       <View style={styles.songActions}>
//         <Text style={styles.songDuration}>{item.duration}</Text>
//         <TouchableOpacity style={styles.moreButton}>
//           <Icon name="more-horiz" size={20} color="#b3b3b3" />
//         </TouchableOpacity>
//       </View>
//     </TouchableOpacity>
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="light-content" backgroundColor="#000" />
      
//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//           <Icon name="arrow-back" size={24} color="#fff" />
//         </TouchableOpacity>
//         <View style={styles.headerRight}>
//           <TouchableOpacity style={styles.headerButton}>
//             <Icon name="favorite-border" size={24} color="#fff" />
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.headerButton}>
//             <Icon name="more-vert" size={24} color="#fff" />
//           </TouchableOpacity>
//         </View>
//       </View>

//       <ScrollView 
//         style={styles.scrollView}
//         showsVerticalScrollIndicator={false}
//       >
//         {/* Playlist Header */}
//         <View style={styles.playlistHeader}>
//           <View style={styles.playlistImageContainer}>
//             <View style={styles.playlistImage}>
//               <Icon name="queue-music" size={60} color="#b3b3b3" />
//             </View>
//           </View>
          
//           <View style={styles.playlistInfo}>
//             <Text style={styles.playlistName}>{playlistName}</Text>
//             <Text style={styles.playlistType}>Playlist</Text>
//             <Text style={styles.playlistStats}>1.2L likes • 44 songs</Text>
//           </View>
//         </View>

//         {/* Play Controls */}
//         <View style={styles.playControls}>
//           <TouchableOpacity style={styles.playButton}>
//             <Icon name="play-arrow" size={28} color="#000" />
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.shuffleButton}>
//             <Icon name="shuffle" size={24} color="#1db954" />
//           </TouchableOpacity>
//         </View>

//         {/* Songs List */}
//         <View style={styles.songsList}>
//           <FlatList
//             data={playlistSongs}
//             renderItem={renderSongItem}
//             keyExtractor={item => item.id}
//             scrollEnabled={false}
//           />
//         </View>

//         {/* Bottom Padding */}
//         <View style={styles.bottomPadding} />
//       </ScrollView>

//       {/* Bottom Navigation */}
//       <View style={styles.bottomNav}>
//         <TouchableOpacity style={styles.navItem}>
//           <Icon name="home" size={24} color="#b3b3b3" />
//           <Text style={styles.navText}>Home</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.navItem}>
//           <Icon name="search" size={24} color="#b3b3b3" />
//           <Text style={styles.navText}>Search</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.navItem}>
//           <Icon name="library-music" size={24} color="#b3b3b3" />
//           <Text style={styles.navText}>Your Library</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//   },
//   backButton: {
//     padding: 4,
//   },
//   headerRight: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   headerButton: {
//     padding: 4,
//     marginLeft: 16,
//   },
//   scrollView: {
//     flex: 1,
//   },
//   playlistHeader: {
//     padding: 20,
//     flexDirection: 'row',
//     alignItems: 'flex-end',
//   },
//   playlistImageContainer: {
//     marginRight: 16,
//   },
//   playlistImage: {
//     width: 140,
//     height: 140,
//     backgroundColor: '#1e3264',
//     borderRadius: 8,
//     justifyContent: 'center',
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.5,
//     shadowRadius: 8,
//     elevation: 8,
//   },
//   playlistInfo: {
//     flex: 1,
//   },
//   playlistName: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#fff',
//     marginBottom: 8,
//   },
//   playlistType: {
//     fontSize: 14,
//     color: '#b3b3b3',
//     marginBottom: 8,
//     textTransform: 'uppercase',
//     fontWeight: '600',
//   },
//   playlistStats: {
//     fontSize: 14,
//     color: '#b3b3b3',
//   },
//   playControls: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     paddingVertical: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#282828',
//   },
//   playButton: {
//     width: 56,
//     height: 56,
//     backgroundColor: '#1db954',
//     borderRadius: 28,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 16,
//     shadowColor: '#1db954',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     elevation: 6,
//   },
//   shuffleButton: {
//     width: 40,
//     height: 40,
//     borderWidth: 1,
//     borderColor: '#b3b3b3',
//     borderRadius: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   songsList: {
//     paddingTop: 8,
//   },
//   songItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//     marginBottom: 1,
//     backgroundColor: 'transparent',
//   },
//   songNumber: {
//     width: 30,
//     alignItems: 'center',
//     marginRight: 12,
//   },
//   songNumberText: {
//     fontSize: 14,
//     color: '#b3b3b3',
//     fontWeight: '500',
//   },
//   songInfo: {
//     flex: 1,
//   },
//   songTitle: {
//     fontSize: 16,
//     color: '#fff',
//     marginBottom: 4,
//     fontWeight: '500',
//   },
//   songArtist: {
//     fontSize: 14,
//     color: '#b3b3b3',
//   },
//   songActions: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   songDuration: {
//     fontSize: 14,
//     color: '#b3b3b3',
//     marginRight: 12,
//   },
//   moreButton: {
//     padding: 4,
//   },
//   bottomPadding: {
//     height: 80,
//   },
//   bottomNav: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     backgroundColor: '#000',
//     borderTopWidth: 1,
//     borderTopColor: '#282828',
//     paddingVertical: 12,
//     paddingHorizontal: 16,
//   },
//   navItem: {
//     alignItems: 'center',
//     flex: 1,
//   },
//   navText: {
//     fontSize: 12,
//     color: '#b3b3b3',
//     marginTop: 4,
//   },
// });

// export default PlaylistScreen;

// // // src/screens/PlaylistScreen.js
// // import React from 'react';
// // import {
// //   View,
// //   Text,
// //   ScrollView,
// //   TouchableOpacity,
// //   StyleSheet,
// //   StatusBar,
// //   SafeAreaView,
// //   FlatList,
// //   Image
// // } from 'react-native';
// // import Icon from 'react-native-vector-icons/MaterialIcons';
// // import Ionicons from 'react-native-vector-icons/Ionicons';
// // import { useNavigation } from '@react-navigation/native';

// // const PlaylistScreen = ({ route }) => {
// //   const navigation = useNavigation();
// //   const { playlistName = 'Phonk Madness' } = route.params || {};

// //   // Playlist songs data
// //   const playlistSongs = [
// //     { 
// //       id: '1', 
// //       title: 'METAMORPHOSIS', 
// //       artist: 'INTERWORLD',
// //       album: 'Minerie in My Mind',
// //       duration: '2:45',
// //       isLiked: false
// //     },
// //     { 
// //       id: '2', 
// //       title: 'Objectbad Thema', 
// //       artist: 'gjabu.com',
// //       album: '',
// //       duration: '3:12',
// //       isLiked: true
// //     },
// //     { 
// //       id: '3', 
// //       title: 'SHARON', 
// //       artist: 'OHNANBUI, SMITHMANE',
// //       album: '',
// //       duration: '2:58',
// //       isLiked: false
// //     },
// //     { 
// //       id: '4', 
// //       title: 'Crystals', 
// //       artist: 'brooke.exe',
// //       album: '',
// //       duration: '3:25',
// //       isLiked: false
// //     },
// //     { 
// //       id: '5', 
// //       title: 'DEMONS IN MY SOUL', 
// //       artist: 'SCAR SOUL, Schmwy',
// //       album: '',
// //       duration: '2:37',
// //       isLiked: true
// //     },
// //     { 
// //       id: '6', 
// //       title: 'Snopp', 
// //       artist: 'Kenemini',
// //       album: '',
// //       duration: '3:08',
// //       isLiked: false
// //     },
// //     { 
// //       id: '7', 
// //       title: 'GHOST!', 
// //       artist: 'Kenemini',
// //       album: '',
// //       duration: '2:51',
// //       isLiked: false
// //     },
// //   ];

// //   const [isPlaylistLiked, setIsPlaylistLiked] = React.useState(false);
// //   const [songs, setSongs] = React.useState(playlistSongs);

// //   const togglePlaylistLike = () => {
// //     setIsPlaylistLiked(!isPlaylistLiked);
// //   };

// //   const toggleSongLike = (id) => {
// //     setSongs(songs.map(song => 
// //       song.id === id ? { ...song, isLiked: !song.isLiked } : song
// //     ));
// //   };

// //   const renderSongItem = ({ item, index }) => (
// //     <TouchableOpacity style={styles.songItem}>
// //       <View style={styles.songNumber}>
// //         <Text style={styles.songNumberText}>{index + 1}</Text>
// //       </View>
// //       <View style={styles.songInfo}>
// //         <Text style={styles.songTitle} numberOfLines={1}>{item.title}</Text>
// //         <Text style={styles.songArtist} numberOfLines={1}>
// //           {item.artist}
// //         </Text>
// //       </View>
// //       <View style={styles.songActions}>
// //         <TouchableOpacity 
// //           style={styles.likeButton}
// //           onPress={() => toggleSongLike(item.id)}
// //         >
// //           <Icon 
// //             name={item.isLiked ? "favorite" : "favorite-border"} 
// //             size={20} 
// //             color={item.isLiked ? "#1db954" : "#b3b3b3"} 
// //           />
// //         </TouchableOpacity>
// //         <Text style={styles.songDuration}>{item.duration}</Text>
// //         <TouchableOpacity style={styles.moreButton}>
// //           <Ionicons name="ellipsis-horizontal" size={20} color="#b3b3b3" />
// //         </TouchableOpacity>
// //       </View>
// //     </TouchableOpacity>
// //   );

// //   return (
// //     <SafeAreaView style={styles.container}>
// //       <StatusBar barStyle="light-content" backgroundColor="#000" />
      
// //       {/* Header */}
// //       <View style={styles.header}>
// //         <TouchableOpacity 
// //           onPress={() => navigation.goBack()} 
// //           style={styles.backButton}
// //         >
// //           <Ionicons name="chevron-down" size={28} color="#fff" />
// //         </TouchableOpacity>
// //         <Text style={styles.headerTitle}>{playlistName}</Text>
// //         <View style={styles.headerRight}>
// //           <TouchableOpacity style={styles.headerButton}>
// //             <Ionicons name="heart-outline" size={24} color="#fff" />
// //           </TouchableOpacity>
// //           <TouchableOpacity style={styles.headerButton}>
// //             <Ionicons name="share-social-outline" size={24} color="#fff" />
// //           </TouchableOpacity>
// //           <TouchableOpacity style={styles.headerButton}>
// //             <Ionicons name="ellipsis-vertical" size={24} color="#fff" />
// //           </TouchableOpacity>
// //         </View>
// //       </View>

// //       <ScrollView 
// //         style={styles.scrollView}
// //         showsVerticalScrollIndicator={false}
// //       >
// //         {/* Playlist Header */}
// //         <View style={styles.playlistHeader}>
// //           <View style={styles.playlistImageContainer}>
// //             <View style={styles.playlistImage}>
// //               <Ionicons name="musical-notes" size={60} color="#fff" />
// //               <View style={styles.gradientOverlay} />
// //             </View>
// //           </View>
          
// //           <View style={styles.playlistInfo}>
// //             <Text style={styles.playlistName}>{playlistName}</Text>
// //             <Text style={styles.playlistType}>Playlist</Text>
// //             <View style={styles.playlistStats}>
// //               <Ionicons name="heart" size={14} color="#1db954" />
// //               <Text style={styles.playlistStatsText}>1.2L likes</Text>
// //               <View style={styles.dotSeparator} />
// //               <Text style={styles.playlistStatsText}>44 songs</Text>
// //             </View>
// //           </View>
// //         </View>

// //         {/* Play Controls */}
// //         <View style={styles.playControls}>
// //           <TouchableOpacity style={styles.playButton}>
// //             <Ionicons name="play" size={28} color="#000" />
// //           </TouchableOpacity>
// //           <TouchableOpacity 
// //             style={styles.likeButtonLarge}
// //             onPress={togglePlaylistLike}
// //           >
// //             <Ionicons 
// //               name={isPlaylistLiked ? "heart" : "heart-outline"} 
// //               size={28} 
// //               color={isPlaylistLiked ? "#1db954" : "#fff"} 
// //             />
// //           </TouchableOpacity>
// //           <TouchableOpacity style={styles.shareButton}>
// //             <Ionicons name="share-social-outline" size={24} color="#fff" />
// //           </TouchableOpacity>
// //           <TouchableOpacity style={styles.moreButtonLarge}>
// //             <Ionicons name="ellipsis-horizontal" size={24} color="#fff" />
// //           </TouchableOpacity>
// //         </View>

// //         {/* Songs List Header */}
// //         <View style={styles.songsHeader}>
// //           <View style={styles.hashSymbol}>
// //             <Text style={styles.hashText}>#</Text>
// //           </View>
// //           <View style={styles.songsHeaderTitle}>
// //             <Text style={styles.songsHeaderText}>TITLE</Text>
// //           </View>
// //           <View style={styles.songsHeaderDuration}>
// //             <Ionicons name="time-outline" size={16} color="#b3b3b3" />
// //           </View>
// //         </View>

// //         {/* Songs List */}
// //         <View style={styles.songsList}>
// //           <FlatList
// //             data={songs}
// //             renderItem={renderSongItem}
// //             keyExtractor={item => item.id}
// //             scrollEnabled={false}
// //           />
// //         </View>

// //         {/* Footer Info */}
// //         <View style={styles.footerInfo}>
// //           <Text style={styles.footerText}>
// //             Made for you • Updated today
// //           </Text>
// //         </View>

// //         {/* Bottom Padding */}
// //         <View style={styles.bottomPadding} />
// //       </ScrollView>

// //       {/* Mini Player */}
// //       <View style={styles.miniPlayer}>
// //         <View style={styles.miniPlayerLeft}>
// //           <View style={styles.miniPlayerImage}>
// //             <Ionicons name="musical-note" size={20} color="#fff" />
// //           </View>
// //           <View style={styles.miniPlayerText}>
// //             <Text style={styles.miniPlayerTitle} numberOfLines={1}>
// //               METAMORPHOSIS
// //             </Text>
// //             <Text style={styles.miniPlayerArtist} numberOfLines={1}>
// //               INTERWORLD
// //             </Text>
// //           </View>
// //         </View>
// //         <View style={styles.miniPlayerRight}>
// //           <TouchableOpacity style={styles.miniPlayerButton}>
// //             <Ionicons name="heart-outline" size={20} color="#b3b3b3" />
// //           </TouchableOpacity>
// //           <TouchableOpacity style={styles.miniPlayerButton}>
// //             <Ionicons name="play" size={28} color="#fff" />
// //           </TouchableOpacity>
// //         </View>
// //       </View>

// //       {/* Bottom Navigation */}
// //       <View style={styles.bottomNav}>
// //         <TouchableOpacity style={styles.navItem}>
// //           <Ionicons name="home-outline" size={24} color="#b3b3b3" />
// //           <Text style={styles.navText}>Home</Text>
// //         </TouchableOpacity>
// //         <TouchableOpacity style={styles.navItem}>
// //           <Ionicons name="search-outline" size={24} color="#b3b3b3" />
// //           <Text style={styles.navText}>Search</Text>
// //         </TouchableOpacity>
// //         <TouchableOpacity style={styles.navItem}>
// //           <Ionicons name="library-outline" size={24} color="#b3b3b3" />
// //           <Text style={styles.navText}>Your Library</Text>
// //         </TouchableOpacity>
// //       </View>
// //     </SafeAreaView>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#000',
// //   },
// //   header: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     paddingHorizontal: 16,
// //     paddingVertical: 12,
// //     backgroundColor: 'rgba(0,0,0,0.8)',
// //   },
// //   backButton: {
// //     padding: 4,
// //   },
// //   headerTitle: {
// //     fontSize: 16,
// //     fontWeight: 'bold',
// //     color: '#fff',
// //     flex: 1,
// //     textAlign: 'center',
// //   },
// //   headerRight: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //   },
// //   headerButton: {
// //     padding: 8,
// //     marginLeft: 8,
// //   },
// //   scrollView: {
// //     flex: 1,
// //   },
// //   playlistHeader: {
// //     padding: 20,
// //     flexDirection: 'row',
// //     alignItems: 'flex-end',
// //     backgroundColor: 'linear-gradient(180deg, #1e3264 0%, #000 100%)',
// //   },
// //   playlistImageContainer: {
// //     marginRight: 16,
// //   },
// //   playlistImage: {
// //     width: 140,
// //     height: 140,
// //     backgroundColor: '#1e3264',
// //     borderRadius: 8,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     shadowColor: '#000',
// //     shadowOffset: { width: 0, height: 8 },
// //     shadowOpacity: 0.8,
// //     shadowRadius: 12,
// //     elevation: 12,
// //   },
// //   gradientOverlay: {
// //     ...StyleSheet.absoluteFillObject,
// //     backgroundColor: 'rgba(30, 50, 100, 0.6)',
// //     borderRadius: 8,
// //   },
// //   playlistInfo: {
// //     flex: 1,
// //   },
// //   playlistName: {
// //     fontSize: 24,
// //     fontWeight: 'bold',
// //     color: '#fff',
// //     marginBottom: 8,
// //     textShadowColor: 'rgba(0, 0, 0, 0.8)',
// //     textShadowOffset: { width: 0, height: 2 },
// //     textShadowRadius: 4,
// //   },
// //   playlistType: {
// //     fontSize: 14,
// //     color: '#b3b3b3',
// //     marginBottom: 12,
// //     textTransform: 'uppercase',
// //     fontWeight: '600',
// //     letterSpacing: 1,
// //   },
// //   playlistStats: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //   },
// //   playlistStatsText: {
// //     fontSize: 14,
// //     color: '#b3b3b3',
// //     marginLeft: 6,
// //   },
// //   dotSeparator: {
// //     width: 4,
// //     height: 4,
// //     borderRadius: 2,
// //     backgroundColor: '#b3b3b3',
// //     marginHorizontal: 8,
// //   },
// //   playControls: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     paddingHorizontal: 20,
// //     paddingVertical: 24,
// //     borderBottomWidth: 1,
// //     borderBottomColor: '#282828',
// //   },
// //   playButton: {
// //     width: 56,
// //     height: 56,
// //     backgroundColor: '#1db954',
// //     borderRadius: 28,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     marginRight: 16,
// //     shadowColor: '#1db954',
// //     shadowOffset: { width: 0, height: 4 },
// //     shadowOpacity: 0.4,
// //     shadowRadius: 8,
// //     elevation: 8,
// //   },
// //   likeButtonLarge: {
// //     width: 48,
// //     height: 48,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     marginRight: 12,
// //   },
// //   shareButton: {
// //     width: 48,
// //     height: 48,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     marginRight: 12,
// //   },
// //   moreButtonLarge: {
// //     width: 48,
// //     height: 48,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   songsHeader: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     paddingHorizontal: 16,
// //     paddingVertical: 8,
// //     borderBottomWidth: 1,
// //     borderBottomColor: '#282828',
// //   },
// //   hashSymbol: {
// //     width: 30,
// //     alignItems: 'center',
// //     marginRight: 12,
// //   },
// //   hashText: {
// //     fontSize: 14,
// //     color: '#b3b3b3',
// //     fontWeight: '600',
// //   },
// //   songsHeaderTitle: {
// //     flex: 1,
// //   },
// //   songsHeaderText: {
// //     fontSize: 12,
// //     color: '#b3b3b3',
// //     fontWeight: '600',
// //     letterSpacing: 1,
// //   },
// //   songsHeaderDuration: {
// //     width: 80,
// //     alignItems: 'center',
// //   },
// //   songsList: {
// //     paddingTop: 4,
// //   },
// //   songItem: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     paddingHorizontal: 16,
// //     paddingVertical: 12,
// //     marginBottom: 1,
// //     backgroundColor: 'transparent',
// //   },
// //   songNumber: {
// //     width: 30,
// //     alignItems: 'center',
// //     marginRight: 12,
// //   },
// //   songNumberText: {
// //     fontSize: 14,
// //     color: '#b3b3b3',
// //     fontWeight: '500',
// //   },
// //   songInfo: {
// //     flex: 1,
// //   },
// //   songTitle: {
// //     fontSize: 16,
// //     color: '#fff',
// //     marginBottom: 4,
// //     fontWeight: '500',
// //   },
// //   songArtist: {
// //     fontSize: 14,
// //     color: '#b3b3b3',
// //   },
// //   songActions: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //   },
// //   likeButton: {
// //     padding: 6,
// //     marginRight: 8,
// //   },
// //   songDuration: {
// //     fontSize: 14,
// //     color: '#b3b3b3',
// //     marginRight: 12,
// //     minWidth: 40,
// //     textAlign: 'right',
// //   },
// //   moreButton: {
// //     padding: 4,
// //   },
// //   footerInfo: {
// //     padding: 20,
// //     alignItems: 'center',
// //   },
// //   footerText: {
// //     fontSize: 12,
// //     color: '#b3b3b3',
// //     textAlign: 'center',
// //   },
// //   bottomPadding: {
// //     height: 80,
// //   },
// //   miniPlayer: {
// //     position: 'absolute',
// //     bottom: 60,
// //     left: 0,
// //     right: 0,
// //     backgroundColor: '#181818',
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     justifyContent: 'space-between',
// //     paddingHorizontal: 16,
// //     paddingVertical: 8,
// //     borderTopWidth: 1,
// //     borderTopColor: '#282828',
// //     marginHorizontal: 8,
// //     borderRadius: 8,
// //     shadowColor: '#000',
// //     shadowOffset: { width: 0, height: -2 },
// //     shadowOpacity: 0.5,
// //     shadowRadius: 8,
// //     elevation: 8,
// //   },
// //   miniPlayerLeft: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     flex: 1,
// //   },
// //   miniPlayerImage: {
// //     width: 40,
// //     height: 40,
// //     backgroundColor: '#333',
// //     borderRadius: 4,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     marginRight: 12,
// //   },
// //   miniPlayerText: {
// //     flex: 1,
// //   },
// //   miniPlayerTitle: {
// //     fontSize: 14,
// //     fontWeight: '600',
// //     color: '#fff',
// //     marginBottom: 2,
// //   },
// //   miniPlayerArtist: {
// //     fontSize: 12,
// //     color: '#b3b3b3',
// //   },
// //   miniPlayerRight: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //   },
// //   miniPlayerButton: {
// //     marginLeft: 16,
// //   },
// //   bottomNav: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-around',
// //     alignItems: 'center',
// //     backgroundColor: '#000',
// //     borderTopWidth: 1,
// //     borderTopColor: '#282828',
// //     paddingVertical: 12,
// //     paddingHorizontal: 16,
// //     position: 'absolute',
// //     bottom: 0,
// //     left: 0,
// //     right: 0,
// //   },
// //   navItem: {
// //     alignItems: 'center',
// //     flex: 1,
// //   },
// //   navText: {
// //     fontSize: 12,
// //     color: '#b3b3b3',
// //     marginTop: 4,
// //   },
// // });

// // export default PlaylistScreen;



// src/screens/PlaylistScreen.js
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  FlatList,
  Image,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const ArtistPlaylistScreen = ({ route }) => {
  const navigation = useNavigation();
  const { playlistName = 'Phonk Madness' } = route.params || {};

  // Playlist songs data with images
  const playlistSongs = [
    { 
      id: '1', 
      title: 'METAMORPHOSIS', 
      artist: 'INTERWORLD',
      album: 'Minerie in My Mind',
      duration: '2:45',
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop',
      plays: '45.2M'
    },
    { 
      id: '2', 
      title: 'Objectbad Thema', 
      artist: 'gjabu.com',
      album: 'Digital Dreams',
      duration: '3:12',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop',
      plays: '12.8M'
    },
    { 
      id: '3', 
      title: 'SHARON', 
      artist: 'OHNANBUI, SMITHMANE',
      album: 'Urban Vibes',
      duration: '2:58',
      image: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=200&h=200&fit=crop',
      plays: '28.7M'
    },
    { 
      id: '4', 
      title: 'Crystals', 
      artist: 'brooke.exe',
      album: 'Electronic Waves',
      duration: '3:25',
      image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=200&h=200&fit=crop',
      plays: '15.3M'
    },
    { 
      id: '5', 
      title: 'DEMONS IN MY SOUL', 
      artist: 'SCAR SOUL, Schmwy',
      album: 'Dark Matter',
      duration: '2:37',
      image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=200&h=200&fit=crop',
      plays: '32.1M'
    },
    { 
      id: '6', 
      title: 'Snopp', 
      artist: 'Kenemini',
      album: 'Night Drive',
      duration: '3:08',
      image: 'https://images.unsplash.com/photo-1489599809505-fb44932d0e71?w=200&h=200&fit=crop',
      plays: '8.9M'
    },
    { 
      id: '7', 
      title: 'GHOST!', 
      artist: 'Kenemini',
      album: 'Phonk Collection',
      duration: '2:51',
      image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200&h=200&fit=crop',
      plays: '21.4M'
    },
  ];

  const renderSongItem = ({ item, index }) => (
    <TouchableOpacity style={styles.songItem}
      onPress={() => navigation.navigate('NowPlayingScreen', { song: item })}
    >
      <View style={styles.songLeft}>
        <View style={styles.songNumber}>
          <Text style={styles.songNumberText}>{index + 1}</Text>
        </View>
        <Image 
          source={{ uri: item.image }} 
          style={styles.songImage}
          resizeMode="cover"
        />
        <View style={styles.songInfo}>
          <Text style={styles.songTitle} numberOfLines={1}>{item.title}</Text>
          <View style={styles.songMeta}>
            <Text style={styles.songArtist} numberOfLines={1}>{item.artist}</Text>
            <Text style={styles.songPlays}>• {item.plays}</Text>
          </View>
        </View>
      </View>
      <View style={styles.songRight}>
        <Text style={styles.songDuration}>{item.duration}</Text>
        <TouchableOpacity style={styles.moreButton}>
          <Icon name="more-horiz" size={20} color="#b3b3b3" />
        </TouchableOpacity>
        
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle} numberOfLines={1}>{playlistName}</Text>
          <Text style={styles.headerSubtitle}>Playlist</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.headerButton}>
            <Icon name="favorite" size={24} color="#FF3B3B" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerButton}>
            <Icon name="more-vert" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Playlist Header */}
        <View style={styles.playlistHeader}>
          <View style={styles.playlistImageContainer}>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop' }}
              style={styles.playlistImage}
              resizeMode="cover"
            />
            <View style={styles.playlistGradient} />
          </View>
          
          <View style={styles.playlistInfo}>
            <Text style={styles.playlistName} numberOfLines={2}>{playlistName}</Text>
            <Text style={styles.playlistDescription} numberOfLines={2}>
              The best phonk tracks to fuel your night drives and gaming sessions
            </Text>
            <View style={styles.playlistStats}>
              <View style={styles.statItem}>
                <Icon name="favorite" size={16} color="#FF3B3B" />
                <Text style={styles.statText}>1.2M likes</Text>
              </View>
              <Text style={styles.statDivider}>•</Text>
              <Text style={styles.statText}>44 songs</Text>
              <Text style={styles.statDivider}>•</Text>
              <Text style={styles.statText}>2h 14m</Text>
            </View>
            <View style={styles.creatorInfo}>
              <Image 
                source={{ uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face' }}
                style={styles.creatorImage}
              />
              <Text style={styles.creatorText}>By Spotify</Text>
            </View>
          </View>
        </View>

        {/* Play Controls */}
        <View style={styles.playControls}>
          <TouchableOpacity style={styles.playButton}>
            <Icon name="play-arrow" size={28} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.shuffleButton}>
            <Icon name="shuffle" size={24} color="#FF3B3B" />
            <Text style={styles.shuffleText}>Shuffle</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.downloadButton}>
            <Icon name="file-download" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Songs Header */}
        <View style={styles.songsHeader}>
          <View style={styles.songsHeaderLeft}>
            <Text style={styles.songsHeaderTitle}>Songs</Text>
            <Text style={styles.songsHeaderCount}>44</Text>
          </View>
          <TouchableOpacity style={styles.sortButton}>
            <Text style={styles.sortText}>Recently added</Text>
            <Icon name="arrow-drop-down" size={20} color="#b3b3b3" />
          </TouchableOpacity>
        </View>

        {/* Songs List */}
        <View style={styles.songsList}>
          <FlatList
            data={playlistSongs}
            renderItem={renderSongItem}
            keyExtractor={item => item.id}
            scrollEnabled={false}
          />
        </View>

        {/* Suggested Section */}
        <View style={styles.suggestedSection}>
          <Text style={styles.suggestedTitle}>More like this</Text>
          <View style={styles.suggestedGrid}>
            <TouchableOpacity style={styles.suggestedItem}>
              <Image 
                source={{ uri: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop' }}
                style={styles.suggestedImage}
              />
              <Text style={styles.suggestedText}>Drift Phonk</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.suggestedItem}>
              <Image 
                source={{ uri: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=200&h=200&fit=crop' }}
                style={styles.suggestedImage}
              />
              <Text style={styles.suggestedText}>Night Drive</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Bottom Padding */}
        <View style={styles.bottomPadding} />
      </ScrollView>

      {/* Mini Player */}
      <View style={styles.miniPlayer}>
        <View style={styles.miniPlayerLeft}>
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=100&h=100&fit=crop' }}
            style={styles.miniPlayerImage}
          />
          <View style={styles.miniPlayerText}>
            <Text style={styles.miniPlayerTitle} numberOfLines={1}>
              METAMORPHOSIS
            </Text>
            <Text style={styles.miniPlayerArtist} numberOfLines={1}>
              INTERWORLD
            </Text>
          </View>
        </View>
        <View style={styles.miniPlayerRight}>
          <TouchableOpacity style={styles.miniPlayerButton}>
            <Icon name="favorite" size={20} color="#FF3B3B" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.miniPlayerButton}>
            <Icon name="play-arrow" size={28} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#282828',
  },
  backButton: {
    padding: 4,
  },
  headerTitleContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 2,
  },
  headerSubtitle: {
    fontSize: 12,
    color: '#b3b3b3',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerButton: {
    padding: 8,
    marginLeft: 8,
  },
  scrollView: {
    flex: 1,
  },
  playlistHeader: {
    padding: 24,
  },
  playlistImageContainer: {
    position: 'relative',
    marginBottom: 24,
  },
  playlistImage: {
    width: width - 48,
    height: width - 48,
    borderRadius: 8,
    alignSelf: 'center',
  },
  playlistGradient: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 8,
  },
  playlistInfo: {
    alignItems: 'center',
  },
  playlistName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 12,
    textAlign: 'center',
  },
  playlistDescription: {
    fontSize: 16,
    color: '#b3b3b3',
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 22,
  },
  playlistStats: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statText: {
    fontSize: 14,
    color: '#b3b3b3',
    marginLeft: 4,
  },
  statDivider: {
    fontSize: 14,
    color: '#b3b3b3',
    marginHorizontal: 8,
  },
  creatorInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  creatorImage: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 8,
  },
  creatorText: {
    fontSize: 14,
    color: '#b3b3b3',
  },
  playControls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#282828',
  },
  playButton: {
    width: 60,
    height: 60,
    backgroundColor: '#FF3B3B',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#FF3B3B',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  shuffleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#727272',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  shuffleText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
    marginLeft: 6,
  },
  downloadButton: {
    padding: 8,
  },
  songsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#282828',
  },
  songsHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  songsHeaderTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginRight: 8,
  },
  songsHeaderCount: {
    fontSize: 14,
    color: '#b3b3b3',
  },
  sortButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sortText: {
    fontSize: 14,
    color: '#b3b3b3',
    marginRight: 4,
  },
  songsList: {
    paddingTop: 8,
  },
  songItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 1,
    backgroundColor: 'transparent',
  },
  songLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  songNumber: {
    width: 30,
    alignItems: 'center',
    marginRight: 12,
  },
  songNumberText: {
    fontSize: 14,
    color: '#b3b3b3',
    fontWeight: '500',
  },
  songImage: {
    width: 50,
    height: 50,
    borderRadius: 4,
    marginRight: 12,
  },
  songInfo: {
    flex: 1,
  },
  songTitle: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 4,
    fontWeight: '500',
  },
  songMeta: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  songArtist: {
    fontSize: 14,
    color: '#b3b3b3',
  },
  songPlays: {
    fontSize: 12,
    color: '#727272',
    marginLeft: 6,
  },
  songRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  songDuration: {
    fontSize: 14,
    color: '#b3b3b3',
    marginRight: 12,
  },
  moreButton: {
    padding: 4,
  },
  suggestedSection: {
    padding: 24,
    borderTopWidth: 1,
    borderTopColor: '#282828',
    marginTop: 16,
  },
  suggestedTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
  },
  suggestedGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  suggestedItem: {
    width: (width - 64) / 2,
  },
  suggestedImage: {
    width: '100%',
    height: (width - 64) / 2,
    borderRadius: 8,
    marginBottom: 8,
  },
  suggestedText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
  },
  bottomPadding: {
    height: 80,
  },
  miniPlayer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#181818',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#282828',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.8,
    shadowRadius: 8,
    elevation: 16,
  },
  miniPlayerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  miniPlayerImage: {
    width: 40,
    height: 40,
    borderRadius: 2,
    marginRight: 12,
  },
  miniPlayerText: {
    flex: 1,
  },
  miniPlayerTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 2,
  },
  miniPlayerArtist: {
    fontSize: 12,
    color: '#b3b3b3',
  },
  miniPlayerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  miniPlayerButton: {
    marginLeft: 16,
  },
});

export default ArtistPlaylistScreen;