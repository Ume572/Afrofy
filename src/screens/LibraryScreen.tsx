// // // import React from 'react';
// // // import {
// // //   View,
// // //   Text,
// // //   TouchableOpacity,
// // //   StyleSheet,
// // //   SafeAreaView,
// // //   StatusBar,
// // //   ScrollView,
// // // } from 'react-native';
// // // import Icon from 'react-native-vector-icons/Ionicons';
// // // import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// // // const LibraryScreen = ({ navigation }) => {
// // //   // Library sections data
// // //   const librarySections = [
// // //     {
// // //       title: 'Liked Songs',
// // //       subtitle: '120 songs',
// // //       icon: 'heart',
// // //       color: '#1DB954',
// // //       screen: 'LikedSongsScreen'
// // //     },
// // //     {
// // //       title: 'Downloads',
// // //       subtitle: '210 songs', 
// // //       icon: 'download',
// // //       color: '#1DB954',
// // //       screen: 'DownloadsScreen'
// // //     },
// // //     {
// // //       title: 'Playlists',
// // //       subtitle: '12 playlists',
// // //       icon: 'list',
// // //       color: '#1DB954',
// // //       screen: 'PlaylistsScreen'
// // //     },
// // //     {
// // //       title: 'Artists',
// // //       subtitle: '3 artists',
// // //       icon: 'people',
// // //       color: '#1DB954',
// // //       screen: 'ArtistsScreen'
// // //     }
// // //   ];

// // //   // Recently played songs - NO images, music icons like screenshot
// // //   const recentlyPlayed = [
// // //     {
// // //       id: 1,
// // //       title: 'Inside Out',
// // //       artist: 'The Chainsmokers, Charlie',
// // //     },
// // //     {
// // //       id: 2,
// // //       title: 'Young',
// // //       artist: 'The Chainsmokers',
// // //     },
// // //     {
// // //       id: 3,
// // //       title: 'Beach House',
// // //       artist: 'The Chainsmokers - Sick',
// // //     },
// // //     {
// // //       id: 4,
// // //       title: 'Kills You Slowly',
// // //       artist: 'The Chainsmokers - World',
// // //     },
// // //     {
// // //       id: 5,
// // //       title: 'Setting Free',
// // //       artist: 'The Chainsmokers, XYLO -',
// // //     }
// // //   ];

// // //   const handleLibraryItemPress = (screenName) => {
// // //     navigation.navigate(screenName);
// // //   };

// // //   const handleSongPress = (song) => {
// // //     navigation.navigate('NowPlaying', { song });
// // //   };

// // //   return (
// // //     <SafeAreaView style={styles.container}>
// // //       <StatusBar barStyle="light-content" backgroundColor="#000" />
      
// // //       {/* Header - Simple */}
// // //       <View style={styles.header}>
// // //         <Text style={styles.headerTitle}>Your Library</Text>
// // //       </View>

// // //       <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
// // //         {/* Library Sections */}
// // //         <View style={styles.librarySection}>
// // //           {/* <Text style={styles.sectionTitle}>Your Library</Text> */}
// // //           <View style={styles.libraryGrid}>
// // //             {librarySections.map((section, index) => (
// // //               <TouchableOpacity 
// // //                 key={index} 
// // //                 style={styles.libraryItem}
// // //                 onPress={() => handleLibraryItemPress(section.screen)}
// // //               >
// // //                 <View style={[styles.iconContainer, { backgroundColor: section.color }]}>
// // //                   <Icon name={section.icon} size={20} color="#000" />
// // //                 </View>
// // //                 <View style={styles.libraryText}>
// // //                   <Text style={styles.libraryTitle}>{section.title}</Text>
// // //                   <Text style={styles.librarySubtitle}>{section.subtitle}</Text>
// // //                 </View>
// // //               </TouchableOpacity>
// // //             ))}
// // //           </View>
// // //         </View>

// // //         {/* Divider */}
// // //         <View style={styles.divider} />

// // //         {/* Recently Played - With Music Icons (NO images) */}
// // //         <View style={styles.recentlyPlayedSection}>
// // //           <Text style={styles.sectionTitle}>Recently Played</Text>
// // //           <View style={styles.recentlyPlayedList}>
// // //             {recentlyPlayed.map((song) => (
// // //               <TouchableOpacity 
// // //                 key={song.id} 
// // //                 style={styles.songItem}
// // //                 onPress={() => handleSongPress(song)}
// // //               >
// // //                 {/* Music Icon - Left side like screenshot */}
// // //                 <View style={styles.musicIconContainer}>
// // //                   <MaterialIcons name="music-note" size={24} color="#b3b3b3" />
// // //                 </View>
                
// // //                 <View style={styles.songInfo}>
// // //                   <Text style={styles.songTitle}>{song.title}</Text>
// // //                   <Text style={styles.songArtist}>{song.artist}</Text>
// // //                 </View>
                
// // //                 <TouchableOpacity style={styles.moreButton}>
// // //                   <Icon name="ellipsis-vertical" size={16} color="#b3b3b3" />
// // //                 </TouchableOpacity>
// // //               </TouchableOpacity>
// // //             ))}
// // //           </View>
// // //         </View>

// // //         {/* Somewhat Section */}
// // //         <View style={styles.somewhatSection}>
// // //           <Text style={styles.somewhatTitle}>Somewhat</Text>
// // //           <TouchableOpacity style={styles.somewhatItem}>
// // //             <View style={styles.artistImage}>
// // //               <Text style={styles.artistInitials}>CS</Text>
// // //             </View>
// // //             <Text style={styles.somewhatText}>Chainsmokers</Text>
// // //           </TouchableOpacity>
// // //         </View>

// // //         {/* Bottom Spacer */}
// // //         <View style={styles.bottomSpacer} />
// // //       </ScrollView>
// // //     </SafeAreaView>
// // //   );
// // // };

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     backgroundColor: '#000',
// // //   },
// // //   header: {
// // //     paddingHorizontal: 20,
// // //     paddingTop: 10,
// // //     paddingBottom: 15,
// // //     borderBottomWidth: 1,
// // //     borderBottomColor: '#282828',
// // //   },
// // //   headerTitle: {
// // //     fontSize: 28,
// // //     fontWeight: 'bold',
// // //     color: '#fff',
// // //   },
// // //   scrollView: {
// // //     flex: 1,
// // //     paddingHorizontal: 20,
// // //   },
// // //   librarySection: {
// // //     marginTop: 20,
// // //   },
// // //   sectionTitle: {
// // //     fontSize: 24,
// // //     fontWeight: 'bold',
// // //     color: '#fff',
// // //     marginBottom: 15,
// // //   },
// // //   libraryGrid: {
// // //     flexDirection: 'row',
// // //     flexWrap: 'wrap',
// // //     justifyContent: 'space-between',
// // //   },
// // //   libraryItem: {
// // //     width: '48%',
// // //     flexDirection: 'row',
// // //     alignItems: 'center',
// // //     backgroundColor: 'rgba(255,255,255,0.08)',
// // //     padding: 15,
// // //     borderRadius: 8,
// // //     marginBottom: 12,
// // //   },
// // //   iconContainer: {
// // //     width: 40,
// // //     height: 40,
// // //     borderRadius: 20,
// // //     justifyContent: 'center',
// // //     alignItems: 'center',
// // //     marginRight: 12,
// // //   },
// // //   libraryText: {
// // //     flex: 1,
// // //   },
// // //   libraryTitle: {
// // //     fontSize: 16,
// // //     fontWeight: 'bold',
// // //     color: '#fff',
// // //     marginBottom: 4,
// // //   },
// // //   librarySubtitle: {
// // //     fontSize: 12,
// // //     color: '#b3b3b3',
// // //   },
// // //   divider: {
// // //     height: 1,
// // //     backgroundColor: '#282828',
// // //     marginVertical: 25,
// // //   },
// // //   recentlyPlayedSection: {
// // //     marginBottom: 25,
// // //   },
// // //   recentlyPlayedList: {
// // //     backgroundColor: 'rgba(255,255,255,0.02)',
// // //     borderRadius: 8,
// // //     overflow: 'hidden',
// // //   },
// // //   songItem: {
// // //     flexDirection: 'row',
// // //     alignItems: 'center',
// // //     paddingVertical: 12,
// // //     paddingHorizontal: 15,
// // //     borderBottomWidth: 1,
// // //     borderBottomColor: '#282828',
// // //   },
// // //   musicIconContainer: {
// // //     width: 40,
// // //     height: 40,
// // //     justifyContent: 'center',
// // //     alignItems: 'center',
// // //     marginRight: 15,
// // //     backgroundColor: 'rgba(255,255,255,0.1)',
// // //     borderRadius: 4,
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
// // //   songArtist: {
// // //     fontSize: 14,
// // //     color: '#b3b3b3',
// // //   },
// // //   moreButton: {
// // //     padding: 5,
// // //   },
// // //   somewhatSection: {
// // //     marginBottom: 20,
// // //   },
// // //   somewhatTitle: {
// // //     fontSize: 20,
// // //     fontWeight: 'bold',
// // //     color: '#fff',
// // //     marginBottom: 15,
// // //   },
// // //   somewhatItem: {
// // //     flexDirection: 'row',
// // //     alignItems: 'center',
// // //     backgroundColor: 'rgba(255,255,255,0.08)',
// // //     padding: 15,
// // //     borderRadius: 8,
// // //   },
// // //   artistImage: {
// // //     width: 50,
// // //     height: 50,
// // //     borderRadius: 25,
// // //     backgroundColor: '#1e3264',
// // //     justifyContent: 'center',
// // //     alignItems: 'center',
// // //     marginRight: 15,
// // //   },
// // //   artistInitials: {
// // //     fontSize: 16,
// // //     fontWeight: 'bold',
// // //     color: '#fff',
// // //   },
// // //   somewhatText: {
// // //     fontSize: 16,
// // //     color: '#fff',
// // //     fontWeight: '500',
// // //   },
// // //   bottomSpacer: {
// // //     height: 20,
// // //   },
// // // });

// // // export default LibraryScreen;

// // import React from 'react';
// // import {
// //   View,
// //   Text,
// //   TouchableOpacity,
// //   StyleSheet,
// //   SafeAreaView,
// //   StatusBar,
// //   ScrollView,
// //   Image,
// //   Dimensions
// // } from 'react-native';

// // import Icon from 'react-native-vector-icons/Ionicons';
// // import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// // import FontAwesome from 'react-native-vector-icons/FontAwesome';

// // const { width } = Dimensions.get('window');

// // const LibraryScreen = ({ navigation }) => {
// //   // Library sections data with images
// //   const librarySections = [
// //     {
// //       title: 'Liked Songs',
// //       subtitle: '120 songs',
// //       icon: 'heart',
// //       color: '#FF3B3B',
// //       screen: 'LikedSongsScreen',
// //       gradient: ['#450af5', '#c4efd9'],
// //       image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop'
// //     },
// //     {
// //       title: 'Downloads',
// //       subtitle: '210 songs', 
// //       icon: 'download',
// //       color: '#FF3B3B',
// //       screen: 'DownloadsScreen',
// //       gradient: ['#006450', '#1db954'],
// //       image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop'
// //     },
// //     {
// //       title: 'Playlists',
// //       subtitle: '12 playlists',
// //       icon: 'list',
// //       color: '#FF3B3B',
// //       screen: 'PlaylistsScreen',
// //       gradient: ['#8400e7', '#b199ff'],
// //       image: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=300&h=300&fit=crop'
// //     },
// //     {
// //       title: 'Artists',
// //       subtitle: '8 artists',
// //       icon: 'people',
// //       color: '#FF3B3B',
// //       screen: 'ArtistsScreen',
// //       gradient: ['#1e3264', '#a567d3'],
// //       image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&h=300&fit=crop'
// //     },
   
   
// //   ];

// //   const handleProfilePress = () => {
// //   navigation.navigate('ProfileSettingsScreen'); // अपने screen name के हिसाब से बदलें
// // };

// //   // Recently played songs with images
// //   const recentlyPlayed = [
// //     {
// //       id: 1,
// //       title: 'Inside Out',
// //       artist: 'The Chainsmokers, Charlie',
// //       image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop',
// //       duration: '3:45'
// //     },
// //     {
// //       id: 2,
// //       title: 'Young',
// //       artist: 'The Chainsmokers',
// //       image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop',
// //       duration: '4:12'
// //     },
// //     {
// //       id: 3,
// //       title: 'Beach House',
// //       artist: 'The Chainsmokers - Sick',
// //       image: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=200&h=200&fit=crop',
// //       duration: '3:28'
// //     },
// //     {
// //       id: 4,
// //       title: 'Kills You Slowly',
// //       artist: 'The Chainsmokers - World',
// //       image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=200&h=200&fit=crop',
// //       duration: '3:15'
// //     },
// //     {
// //       id: 5,
// //       title: 'Setting Free',
// //       artist: 'The Chainsmokers, XYLO',
// //       image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=200&h=200&fit=crop',
// //       duration: '4:02'
// //     }
// //   ];

// //   // Favorite artists with images
// //   const favoriteArtists = [
// //     {
// //       id: 1,
// //       name: 'The Chainsmokers',
// //       image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop&crop=face',
// //       type: 'Artist'
// //     },
// //     {
// //       id: 2,
// //       name: 'Coldplay',
// //       image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop&crop=face',
// //       type: 'Artist'
// //     },
// //     {
// //       id: 3,
// //       name: 'Taylor Swift',
// //       image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face',
// //       type: 'Artist'
// //     }
// //   ];

// //   // Navigation handlers
// //   const handleLibraryItemPress = (screenName) => {
// //     navigation.navigate(screenName);
// //   };

// //   const handleSongPress = (song) => {
// //     navigation.navigate('NowPlayingScreen', { song });
// //   };

// //   const handleArtistPress = (artist) => {
// //     navigation.navigate('ArtistProfileScreen', { 
// //       artistName: artist.name,
// //       artistImage: artist.image 
// //     });
// //   };

// //   const handlePlaylistPress = () => {
// //     navigation.navigate('PlaylistScreen', { 
// //       playlistName: 'Your Playlist',
// //       playlistImage: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop'
// //     });
// //   };

// //   const handleSeeAllPlaylists = () => {
// //     navigation.navigate('PlaylistsScreen');
// //   };

// //   const handleSeeAllArtists = () => {
// //     navigation.navigate('ArtistsScreen');
// //   };

// //   const handleSeeAllRecentlyPlayed = () => {
// //     navigation.navigate('RecentlyPlayedScreen');
// //   };

// //   const handleSearchPress = () => {
// //     navigation.navigate('SearchScreen');
// //   };

// //   const handleCreatePlaylist = () => {
// //     // Navigate to create playlist screen or show modal
// //     navigation.navigate('CreatePlaylistScreen');
// //   };

// //   return (
// //     <SafeAreaView style={styles.container}>
// //       <StatusBar barStyle="light-content" backgroundColor="#000" />
       
      
// //       {/* <View style={styles.header}>
// //         <View style={styles.headerLeft}>
// //           <Image 
// //             source={{ uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face' }}
// //             style={styles.profileImage}
// //           />
// //           <View style={styles.headerText}>
// //             <Text style={styles.headerTitle}>Welcome !</Text>
// //             <Text style={styles.headerSubtitle}>John Logan</Text>
// //           </View>
// //         </View>
// //         <View style={styles.headerRight}>
// //           <TouchableOpacity style={styles.headerButton} onPress={handleSearchPress}>
// //             <Icon name="search" size={24} color="#fff" />
// //           </TouchableOpacity>
// //           <TouchableOpacity style={styles.headerButton} onPress={handleProfilePress}>
// //             <Icon name="add" size={28} color="#fff" />
// //           </TouchableOpacity>
// //         </View>
// //       </View>  */}

// //       <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
// //         {/* Quick Filters */}
// //         <View style={styles.filtersSection}>
// //           <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filtersScroll}>
// //             {/* <TouchableOpacity 
// //               style={[styles.filterButton, styles.filterActive]}
// //               onPress={() => navigation.navigate('PlaylistsScreen')}
// //             >
// //               <Text style={[styles.filterText, styles.filterTextActive]}>Playlists</Text>
// //             </TouchableOpacity>
// //             <TouchableOpacity 
// //               style={styles.filterButton}
// //               onPress={() => navigation.navigate('ArtistsScreen')}
// //             >
// //               <Text style={styles.filterText}>Artists</Text>
// //             </TouchableOpacity> */}
// //             {/* <TouchableOpacity 
// //               style={styles.filterButton}
// //               onPress={() => navigation.navigate('AlbumsScreen')}
// //             >
// //               <Text style={styles.filterText}>Albums</Text>
// //             </TouchableOpacity> */}
// //             {/* <TouchableOpacity 
// //               style={styles.filterButton}
// //               onPress={() => navigation.navigate('DownloadsScreen')}
// //             >
// //               <Text style={styles.filterText}>Downloads</Text>
// //             </TouchableOpacity>
// //             <TouchableOpacity 
// //               style={styles.filterButton}
// //               onPress={() => navigation.navigate('LikedSongsScreen')}
// //             >
// //               <Text style={styles.filterText}>Liked Songs</Text>
// //             </TouchableOpacity> */}
// //           </ScrollView>
// //         </View>

// //         {/* Library Grid */}
// //         <View style={styles.librarySection}>
// //           <View style={styles.sectionHeader}>
// //             <Text style={styles.sectionTitle}>Your Library</Text>
// //             <TouchableOpacity onPress={handleSeeAllPlaylists}>
// //               {/* <Text style={styles.seeAllText}>See all</Text> */}
// //             </TouchableOpacity>
// //           </View>
// //           <View style={styles.libraryGrid}>
// //             {librarySections.map((item, index) => (
// //               <TouchableOpacity 
// //                 key={index} 
// //                 style={styles.libraryItem}
// //                 onPress={() => handleLibraryItemPress(item.screen)}
// //               >
// //                 <Image 
// //                   source={{ uri: item.image }} 
// //                   style={styles.libraryImage}
// //                   resizeMode="cover"
// //                 />
// //                 <View style={styles.libraryOverlay} />
// //                 <View style={styles.libraryContent}>
// //                   <View style={styles.libraryIcon}>
// //                     <Icon name={item.icon} size={20} color="#fff" />
// //                   </View>
// //                   <View style={styles.libraryText}>
// //                     <Text style={styles.libraryTitle} numberOfLines={1}>{item.title}</Text>
// //                     <Text style={styles.librarySubtitle}>{item.subtitle}</Text>
// //                   </View>
// //                 </View>
// //               </TouchableOpacity>
// //             ))}
// //           </View>
// //         </View>

// //         {/* Recently Played Songs */}
// //         <View style={styles.recentlyPlayedSection}>
// //           <View style={styles.sectionHeader}>
// //             <Text style={styles.sectionTitle}>Recently played</Text>
// //             <TouchableOpacity onPress={handleSeeAllRecentlyPlayed}>
// //               <Text style={styles.seeAllText}>See all</Text>
// //             </TouchableOpacity>
// //           </View>
// //           <View style={styles.recentlyPlayedList}>
// //             {recentlyPlayed.map((song, index) => (
// //               <TouchableOpacity 
// //                 key={song.id} 
// //                 style={styles.songItem}
// //                 onPress={() => handleSongPress(song)}
// //               >
// //                 <View style={styles.songLeft}>
// //                   <Image 
// //                     source={{ uri: song.image }} 
// //                     style={styles.songImage}
// //                     resizeMode="cover"
// //                   />
// //                   <View style={styles.songInfo}>
// //                     <Text style={styles.songTitle} numberOfLines={1}>{song.title}</Text>
// //                     <Text style={styles.songArtist} numberOfLines={1}>{song.artist}</Text>
// //                   </View>
// //                 </View>
// //                 <View style={styles.songRight}>
// //                   <Text style={styles.songDuration}>{song.duration}</Text>
// //                   <TouchableOpacity style={styles.moreButton}>
// //                     <Icon name="ellipsis-vertical" size={16} color="#b3b3b3" />
// //                   </TouchableOpacity>
// //                 </View>
// //               </TouchableOpacity>
// //             ))}
// //           </View>
// //         </View>

// //         {/* Favorite Artists */}
// //         <View style={styles.artistsSection}>
// //           <View style={styles.sectionHeader}>
// //             <Text style={styles.sectionTitle}>Favorite artists</Text>
// //             <TouchableOpacity onPress={handleSeeAllArtists}>
// //               <Text style={styles.seeAllText}>See all</Text>
// //             </TouchableOpacity>
// //           </View>
// //           <View style={styles.artistsGrid}>
// //             {favoriteArtists.map((artist) => (
// //               <TouchableOpacity 
// //                 key={artist.id} 
// //                 style={styles.artistItem}
// //                 onPress={() => handleArtistPress(artist)}
// //               >
// //                 <Image 
// //                   source={{ uri: artist.image }} 
// //                   style={styles.artistImage}
// //                   resizeMode="cover"
// //                 />
// //                 <View style={styles.artistInfo}>
// //                   <Text style={styles.artistName} numberOfLines={1}>{artist.name}</Text>
// //                   <Text style={styles.artistType}>{artist.type}</Text>
// //                 </View>
// //               </TouchableOpacity>
// //             ))}
// //           </View>
// //         </View>

// //         {/* Bottom Spacer */}
// //         <View style={styles.bottomSpacer} />
// //       </ScrollView>
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
// //     paddingHorizontal: 20,
// //     paddingVertical: 15,
// //     borderBottomWidth: 1,
// //     borderBottomColor: '#282828',
   
// //   },
// //   headerLeft: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     flex: 1,
// //   },
// //   profileImage: {
// //     width: 40,
// //     height: 40,
// //     borderRadius: 20,
// //     marginRight: 12,
// //   },
// //   headerText: {
// //     flex: 1,
// //   },
// //   headerTitle: {
// //     fontSize: 24,
// //     fontWeight: 'bold',
// //     color: '#fff',
// //     marginBottom: 2,
// //   },
// //   headerSubtitle: {
// //     fontSize: 14,
// //     color: '#b3b3b3',
// //   },
// //   headerRight: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //   },
// //   headerButton: {
// //     padding: 8,
// //     marginLeft: 12,
// //   },
// //   scrollView: {
// //     flex: 1,
    
// //   },
// //   filtersSection: {
// //     paddingVertical: 16,
// //     borderBottomWidth: 1,
// //     borderBottomColor: '#000',
// //     marginBottom:-30
// //   },
// //   filtersScroll: {
// //     paddingHorizontal: 20,
// //   },
// //   filterButton: {
// //     paddingHorizontal: 20,
// //     paddingVertical: 8,
// //     borderRadius: 20,
// //     marginRight: 8,
// //     backgroundColor: 'rgba(255,255,255,0.1)',
// //   },
// //   filterActive: {
// //     backgroundColor: '#fff',
// //   },
// //   filterText: {
// //     fontSize: 14,
// //     fontWeight: '600',
// //     color: '#fff',
// //   },
// //   filterTextActive: {
// //     color: '#000',
// //   },
// //   librarySection: {
// //     padding: 20,
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
// //   seeAllText: {
// //     fontSize: 14,
// //     color: '#b3b3b3',
// //     fontWeight: '600',
// //   },
// //   libraryGrid: {
// //     flexDirection: 'row',
// //     flexWrap: 'wrap',
// //     justifyContent: 'space-between',
// //   },
// //   libraryItem: {
// //     width: (width - 60) / 2,
// //     height: (width - 60) / 2,
// //     borderRadius: 8,
// //     marginBottom: 16,
// //     overflow: 'hidden',
// //     position: 'relative',
// //   },
// //   libraryImage: {
// //     width: '100%',
// //     height: '100%',
// //     position: 'absolute',
// //   },
// //   libraryOverlay: {
// //     ...StyleSheet.absoluteFillObject,
// //     backgroundColor: 'rgba(0,0,0,0.4)',
// //   },
// //   libraryContent: {
// //     flex: 1,
// //     padding: 12,
// //     justifyContent: 'space-between',
// //   },
// //   libraryIcon: {
// //     width: 32,
// //     height: 32,
// //     borderRadius: 16,
// //     backgroundColor: 'rgba(0,0,0,0.6)',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     alignSelf: 'flex-end',
// //   },
// //   libraryText: {
// //     marginTop: 'auto',
// //   },
// //   libraryTitle: {
// //     fontSize: 16,
// //     fontWeight: 'bold',
// //     color: '#fff',
// //     marginBottom: 4,
// //     textShadowColor: 'rgba(0,0,0,0.8)',
// //     textShadowOffset: { width: 1, height: 1 },
// //     textShadowRadius: 4,
// //   },
// //   librarySubtitle: {
// //     fontSize: 12,
// //     color: '#b3b3b3',
// //     textShadowColor: 'rgba(0,0,0,0.8)',
// //     textShadowOffset: { width: 1, height: 1 },
// //     textShadowRadius: 4,
// //   },
// //   recentlyPlayedSection: {
// //     padding: 20,
// //     paddingTop: 0,
// //   },
// //   recentlyPlayedList: {
// //     backgroundColor: 'rgba(255,255,255,0.02)',
// //     borderRadius: 8,
// //     overflow: 'hidden',
// //   },
// //   songItem: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     justifyContent: 'space-between',
// //     paddingVertical: 12,
// //     paddingHorizontal: 16,
// //     borderBottomWidth: 1,
// //     borderBottomColor: '#282828',
// //   },
// //   songLeft: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     flex: 1,
// //   },
// //   songImage: {
// //     width: 50,
// //     height: 50,
// //     borderRadius: 4,
// //     marginRight: 12,
// //   },
// //   songInfo: {
// //     flex: 1,
// //   },
// //   songTitle: {
// //     fontSize: 16,
// //     fontWeight: '600',
// //     color: '#fff',
// //     marginBottom: 4,
// //   },
// //   songArtist: {
// //     fontSize: 14,
// //     color: '#b3b3b3',
// //   },
// //   songRight: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //   },
// //   songDuration: {
// //     fontSize: 14,
// //     color: '#b3b3b3',
// //     marginRight: 12,
// //   },
// //   moreButton: {
// //     padding: 4,
// //   },
// //   artistsSection: {
// //     padding: 20,
// //     paddingTop: 0,
// //   },
// //   artistsGrid: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //   },
// //   artistItem: {
// //     width: (width - 60) / 3,
// //     alignItems: 'center',
// //   },
// //   artistImage: {
// //     width: (width - 60) / 3,
// //     height: (width - 60) / 3,
// //     borderRadius: (width - 60) / 6,
// //     marginBottom: 8,
// //   },
// //   artistInfo: {
// //     alignItems: 'center',
// //   },
// //   artistName: {
// //     fontSize: 14,
// //     fontWeight: '600',
// //     color: '#fff',
// //     marginBottom: 2,
// //     textAlign: 'center',
// //   },
// //   artistType: {
// //     fontSize: 12,
// //     color: '#b3b3b3',
// //     textAlign: 'center',
// //   },
// //   bottomSpacer: {
// //     height: 20,
// //   },
// // });

// // export default LibraryScreen;


// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   SafeAreaView,
//   StatusBar,
//   ScrollView,
//   Image,
//   Dimensions,
//   RefreshControl,
//   ActivityIndicator
// } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import { getFavoriteArtists } from '../Services/mobile-api';

// const { width } = Dimensions.get('window');

// const LibraryScreen = ({ navigation }) => {
//   // Library sections data with images
//   const librarySections = [
//     {
//       title: 'Liked Songs',
//       subtitle: '120 songs',
//       icon: 'heart',
//       color: '#FF3B3B',
//       screen: 'LikedSongsScreen',
//       gradient: ['#450af5', '#c4efd9'],
//       image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop'
//     },
//     {
//       title: 'Downloads',
//       subtitle: '210 songs', 
//       icon: 'download',
//       color: '#FF3B3B',
//       screen: 'DownloadsScreen',
//       gradient: ['#006450', '#1db954'],
//       image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop'
//     },
//     {
//       title: 'Playlists',
//       subtitle: '12 playlists',
//       icon: 'list',
//       color: '#FF3B3B',
//       screen: 'PlaylistsScreen',
//       gradient: ['#8400e7', '#b199ff'],
//       image: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=300&h=300&fit=crop'
//     },
//     {
//       title: 'Artists',
//       subtitle: '8 artists',
//       icon: 'people',
//       color: '#FF3B3B',
//       screen: 'ArtistsScreen',
//       gradient: ['#1e3264', '#a567d3'],
//       image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&h=300&fit=crop'
//     },
//   ];

//   // State for favorite artists
//   const [favoriteArtists, setFavoriteArtists] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [refreshing, setRefreshing] = useState(false);

//   // ✅ Fetch Favorite Artists from API
//   const fetchFavoriteArtists = async () => {
//     try {
//       setLoading(true);
//       console.log('📱 Fetching favorite artists...');
      
//       const response = await getFavoriteArtists();
//       console.log('✅ Favorite artists API response:', response);
      
//       if (response && response.success) {
//         // ✅ API se artists data extract karo
//         const artistsData = response.data?.artists || response.data || [];
//         console.log('🎵 Favorite artists data:', artistsData);
        
//         setFavoriteArtists(Array.isArray(artistsData) ? artistsData : []);
//       } else {
//         console.log('❌ Failed to fetch favorite artists');
//         setFavoriteArtists([]);
//       }
//     } catch (error) {
//       console.error('❌ Error fetching favorite artists:', error);
//       // Fallback to default data
//       setFavoriteArtists(getDefaultFavoriteArtists());
//     } finally {
//       setLoading(false);
//       setRefreshing(false);
//     }
//   };

//   useEffect(() => {
//     fetchFavoriteArtists();
//   }, []);

//   // ✅ Default favorite artists (fallback)
//   const getDefaultFavoriteArtists = () => [
//     {
//       id: 1,
//       name: 'The Chainsmokers',
//       stageName: 'The Chainsmokers',
//       image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop&crop=face',
//       profilePic: null,
//       type: 'Artist'
//     },
//     {
//       id: 2,
//       name: 'Coldplay',
//       stageName: 'Coldplay',
//       image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop&crop=face',
//       profilePic: null,
//       type: 'Artist'
//     },
//     {
//       id: 3,
//       name: 'Taylor Swift',
//       stageName: 'Taylor Swift',
//       image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face',
//       profilePic: null,
//       type: 'Artist'
//     }
//   ];

//   // Recently played songs with images
//   const recentlyPlayed = [
//     {
//       id: 1,
//       title: 'Inside Out',
//       artist: 'The Chainsmokers, Charlie',
//       image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop',
//       duration: '3:45'
//     },
//     {
//       id: 2,
//       title: 'Young',
//       artist: 'The Chainsmokers',
//       image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop',
//       duration: '4:12'
//     },
//     {
//       id: 3,
//       title: 'Beach House',
//       artist: 'The Chainsmokers - Sick',
//       image: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=200&h=200&fit=crop',
//       duration: '3:28'
//     },
//     {
//       id: 4,
//       title: 'Kills You Slowly',
//       artist: 'The Chainsmokers - World',
//       image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=200&h=200&fit=crop',
//       duration: '3:15'
//     },
//     {
//       id: 5,
//       title: 'Setting Free',
//       artist: 'The Chainsmokers, XYLO',
//       image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=200&h=200&fit=crop',
//       duration: '4:02'
//     }
//   ];

//   // Navigation handlers
//   const handleProfilePress = () => {
//     navigation.navigate('ProfileSettingsScreen');
//   };

//   const handleLibraryItemPress = (screenName) => {
//     navigation.navigate(screenName);
//   };

//   const handleSongPress = (song) => {
//     navigation.navigate('NowPlayingScreen', { song });
//   };

//   const handleArtistPress = (artist) => {
//     navigation.navigate('ArtistProfileScreen', { 
//       artistId: artist.id,
//       artistName: artist.name || artist.stageName,
//       artistImage: artist.image || artist.profilePic 
//     });
//   };

//   const handlePlaylistPress = () => {
//     navigation.navigate('PlaylistScreen', { 
//       playlistName: 'Your Playlist',
//       playlistImage: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop'
//     });
//   };

//   const handleSeeAllPlaylists = () => {
//     navigation.navigate('PlaylistsScreen');
//   };

//   const handleSeeAllArtists = () => {
//     navigation.navigate('ArtistsScreen');
//   };

//   const handleSeeAllRecentlyPlayed = () => {
//     navigation.navigate('RecentlyPlayedScreen');
//   };

//   const handleSearchPress = () => {
//     navigation.navigate('SearchScreen');
//   };

//   const handleCreatePlaylist = () => {
//     navigation.navigate('CreatePlaylistScreen');
//   };

//   // ✅ Refresh handler
//   const onRefresh = async () => {
//     setRefreshing(true);
//     await fetchFavoriteArtists();
//   };

//   // ✅ Helper function for image URLs
//   const getImageUrl = (imagePath) => {
//     if (!imagePath) {
//       return 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop';
//     }
    
//     if (imagePath.startsWith('http')) {
//       return imagePath;
//     }
    
//     if (imagePath.startsWith('/')) {
//       return `http://103.119.171.213:3001${imagePath}`;
//     }
    
//     return 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop';
//   };

//   // ✅ Render Favorite Artists Section
//   const renderFavoriteArtists = () => {
//     if (loading) {
//       return (
//         <View style={styles.loadingContainer}>
//           <ActivityIndicator size="small" color="#FF3B3B" />
//           <Text style={styles.loadingText}>Loading favorite artists...</Text>
//         </View>
//       );
//     }

//     if (favoriteArtists.length === 0) {
//       return (
//         <View style={styles.noArtistsContainer}>
//           <Icon name="heart-outline" size={48} color="#b3b3b3" />
//           <Text style={styles.noArtistsText}>No favorite artists yet</Text>
//           <Text style={styles.noArtistsSubtext}>
//             Like artists to see them here
//           </Text>
//         </View>
//       );
//     }

//     return (
//       <View style={styles.artistsGrid}>
//         {favoriteArtists.map((artist) => (
//           <TouchableOpacity 
//             key={artist.id} 
//             style={styles.artistItem}
//             onPress={() => handleArtistPress(artist)}
//           >
//             <Image 
//               source={{ 
//                 uri: getImageUrl(artist.image || artist.profilePic)
//               }} 
//               style={styles.artistImage}
//               resizeMode="cover"
//               defaultSource={{ uri: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop&crop=face' }}
//             />
//             <View style={styles.artistInfo}>
//               <Text style={styles.artistName} numberOfLines={1}>
//                 {artist.name || artist.stageName || 'Unknown Artist'}
//               </Text>
//               <Text style={styles.artistType}>Artist</Text>
//             </View>
//           </TouchableOpacity>
//         ))}
//       </View>
//     );
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="light-content" backgroundColor="#000" />
      
//       <ScrollView 
//         style={styles.scrollView} 
//         showsVerticalScrollIndicator={false}
//         refreshControl={
//           <RefreshControl
//             refreshing={refreshing}
//             onRefresh={onRefresh}
//             colors={['#FF3B3B']}
//             tintColor="#FF3B3B"
//           />
//         }
//       >
//         {/* Quick Filters */}
//         {/* <View style={styles.filtersSection}>
//           <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filtersScroll}>
//             <TouchableOpacity 
//               style={[styles.filterButton, styles.filterActive]}
//               onPress={() => navigation.navigate('PlaylistsScreen')}
//             >
//               <Text style={[styles.filterText, styles.filterTextActive]}>Playlists</Text>
//             </TouchableOpacity>
//             <TouchableOpacity 
//               style={styles.filterButton}
//               onPress={() => navigation.navigate('ArtistsScreen')}
//             >
//               <Text style={styles.filterText}>Artists</Text>
//             </TouchableOpacity>
//             <TouchableOpacity 
//               style={styles.filterButton}
//               onPress={() => navigation.navigate('DownloadsScreen')}
//             >
//               <Text style={styles.filterText}>Downloads</Text>
//             </TouchableOpacity>
//             <TouchableOpacity 
//               style={styles.filterButton}
//               onPress={() => navigation.navigate('LikedSongsScreen')}
//             >
//               <Text style={styles.filterText}>Liked Songs</Text>
//             </TouchableOpacity>
//           </ScrollView>
//         </View> */}

//         {/* Library Grid */}
//         <View style={styles.librarySection}>
//           <View style={styles.sectionHeader}>
//             <Text style={styles.sectionTitle}>Your Library</Text>
//             <TouchableOpacity onPress={handleSeeAllPlaylists}>
//               {/* <Text style={styles.seeAllText}>See all</Text> */}
//             </TouchableOpacity>
//           </View>
//           <View style={styles.libraryGrid}>
//             {librarySections.map((item, index) => (
//               <TouchableOpacity 
//                 key={index} 
//                 style={styles.libraryItem}
//                 onPress={() => handleLibraryItemPress(item.screen)}
//               >
//                 <Image 
//                   source={{ uri: item.image }} 
//                   style={styles.libraryImage}
//                   resizeMode="cover"
//                 />
//                 <View style={styles.libraryOverlay} />
//                 <View style={styles.libraryContent}>
//                   <View style={styles.libraryIcon}>
//                     <Icon name={item.icon} size={20} color="#fff" />
//                   </View>
//                   <View style={styles.libraryText}>
//                     <Text style={styles.libraryTitle} numberOfLines={1}>{item.title}</Text>
//                     <Text style={styles.librarySubtitle}>{item.subtitle}</Text>
//                   </View>
//                 </View>
//               </TouchableOpacity>
//             ))}
//           </View>
//         </View>

//         {/* Recently Played Songs */}
//         <View style={styles.recentlyPlayedSection}>
//           <View style={styles.sectionHeader}>
//             <Text style={styles.sectionTitle}>Recently played</Text>
//             <TouchableOpacity onPress={handleSeeAllRecentlyPlayed}>

//              {/* <Text style={styles.seeAllText}>See all</Text>  */}

//             </TouchableOpacity>
//           </View>
//           <View style={styles.recentlyPlayedList}>
//             {recentlyPlayed.map((song, index) => (
//               <TouchableOpacity 
//                 key={song.id} 
//                 style={styles.songItem}
//                 onPress={() => handleSongPress(song)}
//               >
//                 <View style={styles.songLeft}>
//                   <Image 
//                     source={{ uri: song.image }} 
//                     style={styles.songImage}
//                     resizeMode="cover"
//                   />
//                   <View style={styles.songInfo}>
//                     <Text style={styles.songTitle} numberOfLines={1}>{song.title}</Text>
//                     <Text style={styles.songArtist} numberOfLines={1}>{song.artist}</Text>
//                   </View>
//                 </View>
//                 <View style={styles.songRight}>
//                   <Text style={styles.songDuration}>{song.duration}</Text>
//                   <TouchableOpacity style={styles.moreButton}>
//                     <Icon name="ellipsis-vertical" size={16} color="#b3b3b3" />
//                   </TouchableOpacity>
//                 </View>
//               </TouchableOpacity>
//             ))}
//           </View>
//         </View>

//         {/* Favorite Artists - API Data */}
//         {/* <View style={styles.artistsSection}>
//           <View style={styles.sectionHeader}>
//             <Text style={styles.sectionTitle}>Favorite artists</Text>
//             <TouchableOpacity onPress={handleSeeAllArtists}>
//               <Text style={styles.seeAllText}>See all</Text>
//             </TouchableOpacity>
//           </View>
//           {renderFavoriteArtists()}
//         </View> */}

//         {/* Bottom Spacer */}
//         <View style={styles.bottomSpacer} />
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//   },
//   scrollView: {
//     flex: 1,
//   },
//   filtersSection: {
//     paddingVertical: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#282828',
//   },
//   filtersScroll: {
//     paddingHorizontal: 20,
//   },
//   filterButton: {
//     paddingHorizontal: 20,
//     paddingVertical: 8,
//     borderRadius: 20,
//     marginRight: 8,
//     backgroundColor: 'rgba(255,255,255,0.1)',
//   },
//   filterActive: {
//     backgroundColor: '#fff',
//   },
//   filterText: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#fff',
//   },
//   filterTextActive: {
//     color: '#000',
//   },
//   librarySection: {
//     padding: 20,
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
//   seeAllText: {
//     fontSize: 14,
//     color: '#b3b3b3',
//     fontWeight: '600',
//   },
//   libraryGrid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//   },
//   libraryItem: {
//     width: (width - 60) / 2,
//     height: (width - 60) / 2,
//     borderRadius: 8,
//     marginBottom: 16,
//     overflow: 'hidden',
//     position: 'relative',
//   },
//   libraryImage: {
//     width: '100%',
//     height: '100%',
//     position: 'absolute',
//   },
//   libraryOverlay: {
//     ...StyleSheet.absoluteFillObject,
//     backgroundColor: 'rgba(0,0,0,0.4)',
//   },
//   libraryContent: {
//     flex: 1,
//     padding: 12,
//     justifyContent: 'space-between',
//   },
//   libraryIcon: {
//     width: 32,
//     height: 32,
//     borderRadius: 16,
//     backgroundColor: 'rgba(0,0,0,0.6)',
//     justifyContent: 'center',
//     alignItems: 'center',
//     alignSelf: 'flex-end',
//   },
//   libraryText: {
//     marginTop: 'auto',
//   },
//   libraryTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#fff',
//     marginBottom: 4,
//     textShadowColor: 'rgba(0,0,0,0.8)',
//     textShadowOffset: { width: 1, height: 1 },
//     textShadowRadius: 4,
//   },
//   librarySubtitle: {
//     fontSize: 12,
//     color: '#b3b3b3',
//     textShadowColor: 'rgba(0,0,0,0.8)',
//     textShadowOffset: { width: 1, height: 1 },
//     textShadowRadius: 4,
//   },
//   recentlyPlayedSection: {
//     padding: 20,
//     paddingTop: 0,
//   },
//   recentlyPlayedList: {
//     backgroundColor: 'rgba(255,255,255,0.02)',
//     borderRadius: 8,
//     overflow: 'hidden',
//   },
//   songItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingVertical: 12,
//     paddingHorizontal: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#282828',
//   },
//   songLeft: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     flex: 1,
//   },
//   songImage: {
//     width: 50,
//     height: 50,
//     borderRadius: 4,
//     marginRight: 12,
//   },
//   songInfo: {
//     flex: 1,
//   },
//   songTitle: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#fff',
//     marginBottom: 4,
//   },
//   songArtist: {
//     fontSize: 14,
//     color: '#b3b3b3',
//   },
//   songRight: {
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
//   artistsSection: {
//     padding: 20,
//     paddingTop: 0,
//   },
//   artistsGrid: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     flexWrap: 'wrap',
//   },
//   artistItem: {
//     width: (width - 60) / 3,
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   artistImage: {
//     width: (width - 60) / 3,
//     height: (width - 60) / 3,
//     borderRadius: (width - 60) / 6,
//     marginBottom: 8,
//   },
//   artistInfo: {
//     alignItems: 'center',
//   },
//   artistName: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#fff',
//     marginBottom: 2,
//     textAlign: 'center',
//   },
//   artistType: {
//     fontSize: 12,
//     color: '#b3b3b3',
//     textAlign: 'center',
//   },
//   // Loading and Empty States
//   loadingContainer: {
//     alignItems: 'center',
//     paddingVertical: 20,
//   },
//   loadingText: {
//     color: '#b3b3b3',
//     marginTop: 8,
//     fontSize: 14,
//   },
//   noArtistsContainer: {
//     alignItems: 'center',
//     paddingVertical: 40,
//     backgroundColor: 'rgba(255,255,255,0.02)',
//     borderRadius: 8,
//     marginVertical: 10,
//   },
//   noArtistsText: {
//     fontSize: 16,
//     color: '#fff',
//     fontWeight: '600',
//     marginTop: 12,
//     marginBottom: 4,
//   },
//   noArtistsSubtext: {
//     fontSize: 14,
//     color: '#b3b3b3',
//     textAlign: 'center',
//   },
//   bottomSpacer: {
//     height: 20,
//   },
// });

// export default LibraryScreen;

import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Image,
  Dimensions,
  RefreshControl,
  ActivityIndicator,
  FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { getFavoriteArtists, getDataWithToken } from '../Services/mobile-api';
import { wp, hp } from "../assets/Global.Css";
import { mobile_siteConfig } from '../Services/mobile-siteConfig';
import { useAudio } from '../contexts/AudioContext';

const { width } = Dimensions.get('window');

// ✅ IMAGE URL HELPER FUNCTION
const getImageUrl = (imagePath) => {
  if (!imagePath) {
    return 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop';
  }
  
  if (imagePath.startsWith('http')) {
    return imagePath;
  }
  
  if (imagePath.startsWith('/')) {
    return `${mobile_siteConfig.IMAGE_BASE_URL}${imagePath}`;
  }
  
  return 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop';
};

const LibraryScreen = ({ navigation }) => {
  const { playSong } = useAudio();
  
  // Library sections data with images
  const librarySections = [
    {
      title: 'Liked Songs',
      subtitle: '120 songs',
      icon: 'heart',
      color: '#FF3B3B',
      screen: 'LikedSongsScreen',
      gradient: ['#450af5', '#c4efd9'],
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop'
    },
    {
      title: 'Downloads',
      subtitle: '210 songs', 
      icon: 'download',
      color: '#FF3B3B',
      screen: 'DownloadsScreen',
      gradient: ['#006450', '#1db954'],
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop'
    },
    {
      title: 'Playlists',
      subtitle: '12 playlists',
      icon: 'list',
      color: '#FF3B3B',
      screen: 'PlaylistsScreen',
      gradient: ['#8400e7', '#b199ff'],
      image: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=300&h=300&fit=crop'
    },
    {
      title: 'Artists',
      subtitle: '8 artists',
      icon: 'people',
      color: '#FF3B3B',
      screen: 'ArtistsScreen',
      gradient: ['#1e3264', '#a567d3'],
      image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&h=300&fit=crop'
    },
  ];

  // State for favorite artists
  const [favoriteArtists, setFavoriteArtists] = useState([]);
  const [recentlyPlayed, setRecentlyPlayed] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  // ✅ Fetch Recently Played from API
  const fetchRecentlyPlayed = async () => {
    try {
      console.log('🎵 Fetching recently played...');
      
      const response = await getDataWithToken('user/home');
      console.log('🎵 Home API Response for recently played:', response);
      
      if (response && response.success && response.data) {
        const recentlyPlayedData = Array.isArray(response.data.recentlyPlayed?.songs) 
          ? response.data.recentlyPlayed.songs 
          : getDefaultRecentlyPlayed();
        
        console.log('🎵 Recently played data:', recentlyPlayedData);
        setRecentlyPlayed(recentlyPlayedData);
      } else {
        console.log('❌ No recently played data found, using default');
        setRecentlyPlayed(getDefaultRecentlyPlayed());
      }
    } catch (error) {
      console.error('❌ Error fetching recently played:', error);
      setRecentlyPlayed(getDefaultRecentlyPlayed());
    }
  };

  // ✅ Fetch Favorite Artists from API
  const fetchFavoriteArtists = async () => {
    try {
      console.log('📱 Fetching favorite artists...');
      
      const response = await getFavoriteArtists();
      console.log('✅ Favorite artists API response:', response);
      
      if (response && response.success) {
        const artistsData = response.data?.favoriteArtists || response.data?.artists || response.data || [];
        console.log('🎵 Favorite artists data:', artistsData);
        
        setFavoriteArtists(Array.isArray(artistsData) ? artistsData : []);
      } else {
        console.log('❌ Failed to fetch favorite artists');
        setFavoriteArtists([]);
      }
    } catch (error) {
      console.error('❌ Error fetching favorite artists:', error);
      setFavoriteArtists(getDefaultFavoriteArtists());
    }
  };

  // ✅ Load all data
  const loadLibraryData = async () => {
    try {
      setLoading(true);
      await Promise.all([
        fetchRecentlyPlayed(),
        fetchFavoriteArtists()
      ]);
    } catch (error) {
      console.error('❌ Error loading library data:', error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    loadLibraryData();
  }, []);

  // ✅ Default recently played (fallback)
  const getDefaultRecentlyPlayed = () => [
    { 
      id: '1', 
      title: 'Inside Out', 
      artist: 'The Chainsmokers',
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop'
    },
    { 
      id: '2', 
      title: 'Young', 
      artist: 'The Chainsmokers',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop'
    },
    { 
      id: '3', 
      title: 'Beach House', 
      artist: 'The Chainsmokers - Sick',
      image: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=200&h=200&fit=crop'
    },
  ];

  // ✅ Default favorite artists (fallback)
  const getDefaultFavoriteArtists = () => [
    {
      id: 1,
      name: 'The Chainsmokers',
      stageName: 'The Chainsmokers',
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop&crop=face',
      profilePic: null,
      type: 'Artist'
    },
    {
      id: 2,
      name: 'Coldplay',
      stageName: 'Coldplay',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop&crop=face',
      profilePic: null,
      type: 'Artist'
    },
    {
      id: 3,
      name: 'Taylor Swift',
      stageName: 'Taylor Swift',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face',
      profilePic: null,
      type: 'Artist'
    }
  ];

  // ✅ SONG PLAY FUNCTION - Start from beginning (HomeScreen jaisa)
  const handleSongPlay = async (item) => {
    console.log('🎵 Song clicked from Library - starting from beginning');
    
    try {
      const songInfo = await getDataWithToken(`user/song/${item.id || item._id}/info`);
      console.log('🎵 Song Info:', songInfo);
      
      if (songInfo && songInfo.success) {
        const songData = {
          id: item.id || item._id,
          title: item.title || item.name || 'Unknown Title',
          artist: item.artist || 'Unknown Artist',
          audioUrl: songInfo.song?.audioFile 
            ? `${mobile_siteConfig.IMAGE_BASE_URL}${songInfo.song.audioFile}`
            : 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
          artwork: getImageUrl(item.image || item.thumbnail || songInfo.song?.thumbnail)
        };
        
        console.log('🎵 Playing song from beginning:', songData);
        
        playSong(songData);
        
        navigation.navigate('NowPlayingScreen', { 
          songId: item.id || item._id,
          resetToBeginning: true
        });
      }
    } catch (error) {
      console.error('❌ Error playing song:', error);
      
      const fallbackSongData = {
        id: item.id || item._id || '1',
        title: item.title || item.name || 'Unknown Title',
        artist: item.artist || 'Unknown Artist',
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
        artwork: getImageUrl(item.image || item.thumbnail)
      };
      
      playSong(fallbackSongData);
      navigation.navigate('NowPlayingScreen', { 
        songId: item.id || item._id,
        resetToBeginning: true
      });
    }
  };

  // Navigation handlers
  const handleLibraryItemPress = (screenName) => {
    navigation.navigate(screenName);
  };

  const handleArtistPress = (artist) => {
    navigation.navigate('ArtistProfileScreen', { 
      artistId: artist.id,
      artistName: artist.name || artist.stageName,
      artistImage: artist.image || artist.profilePic 
    });
  };

  const handleSeeAllRecentlyPlayed = () => {
    navigation.navigate('RecentlyPlayedScreen');
  };

  // ✅ Refresh handler
  const onRefresh = async () => {
    setRefreshing(true);
    await loadLibraryData();
  };

  // ✅ RENDER FUNCTIONS - HomeScreen jaisa responsive

  // ✅ Render Recently Played Item (HomeScreen jaisa)
  const renderRecentlyPlayedItem = ({ item }) => {
    if (!item || typeof item !== 'object') return null;
    
    return (
      <TouchableOpacity 
        style={styles.recentItem}
        onPress={() => handleSongPlay(item)}
      >
        <Image 
          source={{ 
            uri: getImageUrl(item.image || item.thumbnail || item.artwork)
          }} 
          style={styles.recentImage}
          resizeMode="cover"
          defaultSource={{ uri: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop' }}
        />
        <View style={styles.recentText}>
          <Text style={styles.recentTitle} numberOfLines={1}>
            {item.title || item.name || 'Unknown Title'}
          </Text>
          <Text style={styles.recentArtist} numberOfLines={1}>
            {item.artist || 'Unknown Artist'}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  // ✅ Render Favorite Artists
  const renderFavoriteArtists = () => {
    if (loading) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="small" color="#FF3B3B" />
          <Text style={styles.loadingText}>Loading favorite artists...</Text>
        </View>
      );
    }

    if (favoriteArtists.length === 0) {
      return (
        <View style={styles.noArtistsContainer}>
          <Icon name="heart-outline" size={wp(12)} color="#b3b3b3" />
          <Text style={styles.noArtistsText}>No favorite artists yet</Text>
          <Text style={styles.noArtistsSubtext}>
            Like artists to see them here
          </Text>
        </View>
      );
    }

    return (
      <FlatList
        data={favoriteArtists}
        renderItem={renderArtistItem}
        keyExtractor={item => item?.id?.toString() || Math.random().toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.artistsList}
      />
    );
  };

  // ✅ Render Artist Item
  const renderArtistItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.artistItem}
      onPress={() => handleArtistPress(item)}
    >
      <Image 
        source={{ 
          uri: getImageUrl(item.image || item.profilePic)
        }} 
        style={styles.artistImage}
        resizeMode="cover"
        defaultSource={{ uri: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop&crop=face' }}
      />
      <View style={styles.artistInfo}>
        <Text style={styles.artistName} numberOfLines={1}>
          {item.name || item.stageName || 'Unknown Artist'}
        </Text>
        <Text style={styles.artistType}>Artist</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      
      <ScrollView 
        style={styles.scrollView} 
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={['#FF3B3B']}
            tintColor="#FF3B3B"
          />
        }
      >
        {/* Library Grid */}
        <View style={styles.librarySection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Your Library</Text>
          </View>
          <View style={styles.libraryGrid}>
            {librarySections.map((item, index) => (
              <TouchableOpacity 
                key={index} 
                style={styles.libraryItem}
                onPress={() => handleLibraryItemPress(item.screen)}
              >
                <Image 
                  source={{ uri: item.image }} 
                  style={styles.libraryImage}
                  resizeMode="cover"
                />
                <View style={styles.libraryOverlay} />
                <View style={styles.libraryContent}>
                  <View style={styles.libraryIcon}>
                    <Icon name={item.icon} size={wp(5)} color="#fff" />
                  </View>
                  <View style={styles.libraryText}>
                    <Text style={styles.libraryTitle} numberOfLines={1}>{item.title}</Text>
                    <Text style={styles.librarySubtitle}>{item.subtitle}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Recently Played Songs - DYNAMIC API DATA */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recently played</Text>
            <TouchableOpacity onPress={handleSeeAllRecentlyPlayed}>
              {/* <Text style={styles.seeAllText}>See all</Text> */}
            </TouchableOpacity>
          </View>
          <FlatList
            data={recentlyPlayed}
            renderItem={renderRecentlyPlayedItem}
            keyExtractor={item => item?.id?.toString() || Math.random().toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.recentList}
          />
        </View>

        {/* Favorite Artists - API Data */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Favorite artists</Text>
            {/* <TouchableOpacity onPress={() => navigation.navigate('ArtistsScreen')}>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity> */}
          </View>
          {renderFavoriteArtists()}
        </View>

        {/* Bottom Spacer */}
        <View style={styles.bottomSpacer} />
      </ScrollView>
    </SafeAreaView>
  );
};

// ✅ RESPONSIVE STYLES - HomeScreen jaisa
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  scrollView: {
    flex: 1,
  },
  librarySection: {
    paddingHorizontal: wp(5),
    paddingVertical: hp(2),
  },
  section: {
    marginBottom: hp(3),
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp(2),
    paddingHorizontal: wp(5),
  },
  sectionTitle: {
    fontSize: wp(5.5),
    fontWeight: 'bold',
    color: '#fff',
  },
  seeAllText: {
    fontSize: wp(3.5),
    color: '#b3b3b3',
    fontWeight: '600',
  },
  libraryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  libraryItem: {
    width: (wp(100) - wp(15)) / 2,
    height: (wp(100) - wp(15)) / 2,
    borderRadius: wp(2),
    marginBottom: hp(2),
    overflow: 'hidden',
    position: 'relative',
  },
  libraryImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  libraryOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  libraryContent: {
    flex: 1,
    padding: wp(3),
    justifyContent: 'space-between',
  },
  libraryIcon: {
    width: wp(8),
    height: wp(8),
    borderRadius: wp(4),
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  libraryText: {
    marginTop: 'auto',
  },
  libraryTitle: {
    fontSize: wp(4),
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: hp(0.5),
    textShadowColor: 'rgba(0,0,0,0.8)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  librarySubtitle: {
    fontSize: wp(3),
    color: '#b3b3b3',
    textShadowColor: 'rgba(0,0,0,0.8)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  // ✅ Recently Played Styles (HomeScreen jaisa)
  recentList: {
    paddingHorizontal: wp(5),
  },
  recentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#181818',
    borderRadius: wp(2),
    marginRight: wp(3),
    padding: wp(3),
    width: wp(70),
  },
  recentImage: {
    width: wp(15),
    height: wp(15),
    borderRadius: wp(1),
    marginRight: wp(3),
  },
  recentText: {
    flex: 1,
  },
  recentTitle: {
    fontSize: wp(3.8),
    fontWeight: '600',
    color: '#fff',
    marginBottom: hp(0.5),
  },
  recentArtist: {
    fontSize: wp(3.2),
    color: '#b3b3b3',
  },
  // ✅ Artists Styles
  artistsList: {
    paddingHorizontal: wp(5),
  },
  artistItem: {
    alignItems: 'center',
    marginRight: wp(4),
    width: wp(25),
  },
  artistImage: {
    width: wp(25),
    height: wp(25),
    borderRadius: wp(12.5),
    marginBottom: hp(1),
  },
  artistInfo: {
    alignItems: 'center',
  },
  artistName: {
    fontSize: wp(3.5),
    fontWeight: '600',
    color: '#fff',
    marginBottom: hp(0.3),
    textAlign: 'center',
  },
  artistType: {
    fontSize: wp(3),
    color: '#b3b3b3',
    textAlign: 'center',
  },
  // Loading and Empty States
  loadingContainer: {
    alignItems: 'center',
    paddingVertical: hp(3),
    paddingHorizontal: wp(5),
  },
  loadingText: {
    color: '#b3b3b3',
    marginTop: hp(1),
    fontSize: wp(3.5),
  },
  noArtistsContainer: {
    alignItems: 'center',
    paddingVertical: hp(5),
    paddingHorizontal: wp(5),
    backgroundColor: 'rgba(255,255,255,0.02)',
    borderRadius: wp(2),
    marginHorizontal: wp(5),
  },
  noArtistsText: {
    fontSize: wp(4),
    color: '#fff',
    fontWeight: '600',
    marginTop: hp(1.5),
    marginBottom: hp(0.5),
  },
  noArtistsSubtext: {
    fontSize: wp(3.5),
    color: '#b3b3b3',
    textAlign: 'center',
  },
  bottomSpacer: {
    height: hp(3),
  },
});

export default LibraryScreen;