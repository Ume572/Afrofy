

// // // screens/LikedSongsScreen.tsx - WORKING VERSION WITH IMAGES
// // import React, { useState, useEffect } from 'react';
// // import {
// //   View,
// //   Text,
// //   TouchableOpacity,
// //   StyleSheet,
// //   SafeAreaView,
// //   StatusBar,
// //   ScrollView,
// //   Image,
// //   Dimensions,
// //   FlatList,
// //   Alert,
// //   ActivityIndicator,
// //   RefreshControl,
// //   TextInput
// // } from 'react-native';
// // import Icon from 'react-native-vector-icons/Ionicons';
// // import { getLikedSongs, unlikeSong } from '../Services/mobile-api';

// // const { width, height } = Dimensions.get('window');

// // const LikedSongsScreen = ({ navigation, route }) => {
// //   const [searchQuery, setSearchQuery] = useState('');
// //   const [likedSongs, setLikedSongs] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [refreshing, setRefreshing] = useState(false);
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const [hasMore, setHasMore] = useState(true);
// //   const [totalSongs, setTotalSongs] = useState(0);

// //   // ✅ Refresh trigger - jab bhi screen focus ho
// //   useEffect(() => {
// //     const unsubscribe = navigation.addListener('focus', () => {
// //       console.log('🔄 LikedSongsScreen focused - refreshing data');
// //       fetchLikedSongs(1, true);
// //     });

// //     return unsubscribe;
// //   }, [navigation]);

// //   // ✅ FIXED: Get proper image URL with base URL
// //   const getProperImageUrl = (imagePath) => {
// //     if (!imagePath) {
// //       return 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop';
// //     }
    
// //     // Agar full URL hai to wahi return karo
// //     if (imagePath.startsWith('http')) {
// //       return imagePath;
// //     }
    
// //     // Agar relative path hai to base URL se combine karo
// //     if (imagePath.startsWith('/')) {
// //       return `http://103.119.171.213:3001${imagePath}`;
// //     }
    
// //     // Default fallback
// //     return 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop';
// //   };

// //   // Fetch liked songs from API
// //   const fetchLikedSongs = async (page = 1, isRefresh = false) => {
// //     try {
// //       if (isRefresh) {
// //         setRefreshing(true);
// //       } else {
// //         setLoading(true);
// //       }

// //       const response = await getLikedSongs(page, 20);
      
// //       console.log('🔵 Liked songs API response:', response);
      
// //       if (response && response.success) {
// //         let songsData = [];
// //         let totalCount = 0;

// //         if (Array.isArray(response.data?.likedSongs)) {
// //           songsData = response.data.likedSongs;
// //           totalCount = response.data.pagination?.total || songsData.length;
// //         } 
// //         else if (Array.isArray(response.data)) {
// //           songsData = response.data;
// //           totalCount = response.data.length;
// //         } else if (Array.isArray(response.data?.songs)) {
// //           songsData = response.data.songs;
// //           totalCount = response.data.totalCount || response.data.total || songsData.length;
// //         } else if (Array.isArray(response.songs)) {
// //           songsData = response.songs;
// //           totalCount = response.totalCount || response.total || songsData.length;
// //         } else {
// //           console.log('❌ Unexpected API response structure:', response);
// //           songsData = [];
// //           totalCount = 0;
// //         }
        
// //         console.log('✅ Processed songs data:', songsData.length, 'songs');
        
// //         if (page === 1) {
// //           setLikedSongs(songsData);
// //         } else {
// //           setLikedSongs(prev => [...prev, ...songsData]);
// //         }
        
// //         setTotalSongs(totalCount);
// //         setHasMore(songsData.length === 20);
// //         setCurrentPage(page);
// //       } else {
// //         console.log('❌ API returned unsuccessful:', response);
// //         setLikedSongs([]);
// //         setTotalSongs(0);
// //       }
// //     } catch (error) {
// //       console.error('❌ Error fetching liked songs:', error);
// //       setLikedSongs([]);
// //       setTotalSongs(0);
// //     } finally {
// //       setLoading(false);
// //       setRefreshing(false);
// //     }
// //   };

// //   // Remove like from a song
// //   const removeLike = async (songId) => {
// //     try {
// //       Alert.alert(
// //         'Remove from Liked Songs',
// //         'Are you sure you want to remove this song from your liked songs?',
// //         [
// //           {
// //             text: 'Cancel',
// //             style: 'cancel',
// //           },
// //           {
// //             text: 'Remove',
// //             style: 'destructive',
// //             onPress: async () => {
// //               try {
// //                 const response = await unlikeSong(songId);
                
// //                 if (response && response.success) {
// //                   // Remove from local state immediately
// //                   setLikedSongs(prev => prev.filter(song => getSongId(song) !== songId));
// //                   setTotalSongs(prev => prev - 1);
// //                 } else {
// //                   Alert.alert('Error', response?.message || 'Failed to remove like');
// //                 }
// //               } catch (error) {
// //                 console.error('Error removing like:', error);
// //                 Alert.alert('Error', 'Failed to remove like');
// //               }
// //             },
// //           },
// //         ]
// //       );
// //     } catch (error) {
// //       console.error('Error in remove like:', error);
// //     }
// //   };

// //   // ✅ ORIGINAL WORKING: Play song function (jo pichle code mein kaam kar raha tha)
// //   const handlePlaySong = async (song) => {
// //     try {
// //       const songId = getSongId(song);
      
// //       console.log('🎵 Playing song from LikedSongs:', { 
// //         songId: songId,
// //         title: getSongTitle(song)
// //       });
      
// //       if (!songId) {
// //         Alert.alert('Error', 'Cannot play this song - invalid song data');
// //         return;
// //       }
      
// //       // ✅ Direct navigation like before (jo kaam kar raha tha)
// //       navigation.navigate('NowPlayingScreen', { 
// //         songId: songId,
// //         song: song,
// //         resetToBeginning: true
// //       });
      
// //     } catch (error) {
// //       console.error('❌ Error playing song:', error);
// //       Alert.alert('Error', 'Failed to play song. Please try again.');
// //     }
// //   };

// //   // ✅ ORIGINAL WORKING: Play all function
// //   const handlePlayAll = () => {
// //     if (Array.isArray(likedSongs) && likedSongs.length > 0) {
// //       console.log('🎵 Playing all liked songs, starting with first song');
// //       handlePlaySong(likedSongs[0]);
// //     } else {
// //       Alert.alert('No Songs', 'No liked songs available to play');
// //     }
// //   };

// //   // Load more songs
// //   const loadMoreSongs = () => {
// //     if (!loading && hasMore) {
// //       fetchLikedSongs(currentPage + 1, false);
// //     }
// //   };

// //   // Pull to refresh
// //   const onRefresh = () => {
// //     fetchLikedSongs(1, true);
// //   };

// //   // Format duration from seconds to MM:SS
// //   const formatDuration = (seconds) => {
// //     if (!seconds) return '0:00';
// //     const mins = Math.floor(seconds / 60);
// //     const secs = Math.floor(seconds % 60);
// //     return `${mins}:${secs.toString().padStart(2, '0')}`;
// //   };

// //   // Get image URL
// //   const getImageUrl = (song) => {
// //     if (!song) return getProperImageUrl(null);
    
// //     const imagePath = song.coverImage || song.image || song.thumbnail || song.artwork || 
// //                      song.cover_url || song.image_url || song.cover ||
// //                      song.song?.coverImage || song.song?.image || song.song?.thumbnail;
    
// //     return getProperImageUrl(imagePath);
// //   };

// //   // Get artist name
// //   const getArtistName = (song) => {
// //     if (!song) return 'Unknown Artist';
    
// //     if (song.artist && typeof song.artist === 'object') {
// //       return song.artist.name || song.artist.stageName || song.artist.artistName || 'Unknown Artist';
// //     }
    
// //     return song.artist_name || song.artistName || song.artist || 
// //            song.song?.artist?.name || song.song?.artist?.stageName || 'Unknown Artist';
// //   };

// //   // Get song title
// //   const getSongTitle = (song) => {
// //     if (!song) return 'Unknown Title';
// //     return song.title || song.name || song.song_name || song.song?.title || 'Unknown Title';
// //   };

// //   // Get song ID
// //   const getSongId = (song) => {
// //     if (!song) return Math.random().toString();
// //     return song.id?.toString() || song.song_id?.toString() || song._id?.toString() || 
// //            song.song?.id?.toString() || Math.random().toString();
// //   };

// //   // Safe filter function
// //   const filteredSongs = Array.isArray(likedSongs) 
// //     ? likedSongs.filter(song => {
// //         if (!song) return false;
// //         const title = getSongTitle(song).toLowerCase();
// //         const artist = getArtistName(song).toLowerCase();
// //         const query = searchQuery.toLowerCase();
// //         return title.includes(query) || artist.includes(query);
// //       })
// //     : [];

// //   // Calculate total duration
// //   const totalDuration = Array.isArray(likedSongs) 
// //     ? likedSongs.reduce((total, song) => total + (song?.duration || 0), 0)
// //     : 0;
    
// //   const totalHours = Math.floor(totalDuration / 3600);
// //   const totalMinutes = Math.floor((totalDuration % 3600) / 60);

// //   // ✅ FIXED: Render song item with proper image handling
// //   const renderSongItem = ({ item, index }) => {
// //     if (!item) return null;
    
// //     const songId = getSongId(item);
// //     const songTitle = getSongTitle(item);
// //     const artistName = getArtistName(item);
// //     const imageUrl = getImageUrl(item);
// //     const duration = formatDuration(item.duration);
    
// //     return (
// //       <TouchableOpacity 
// //         style={styles.songItem}
// //         onPress={() => handlePlaySong(item)}
// //         activeOpacity={0.7}
// //       >
// //         <View style={styles.songLeft}>
// //           <View style={styles.songNumber}>
// //             <Text style={styles.songNumberText}>{index + 1}</Text>
// //           </View>
          
// //           <View style={styles.imageContainer}>
// //             <Image 
// //               source={{ uri: imageUrl }} 
// //               style={styles.songImage}
// //               resizeMode="cover"
// //               defaultSource={{ uri: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=100&h=100&fit=crop' }}
// //             />
// //           </View>
          
// //           <View style={styles.songInfo}>
// //             <Text style={styles.songTitle} numberOfLines={1}>
// //               {songTitle}
// //             </Text>
// //             <View style={styles.songMeta}>
// //               <Icon name="heart" size={12} color="#FF3B3B" style={styles.heartIcon} />
// //               <Text style={styles.songArtist} numberOfLines={1}>
// //                 {artistName}
// //               </Text>
// //             </View>
// //           </View>
// //         </View>
        
// //         <View style={styles.songRight}>
// //           <Text style={styles.songDuration}>
// //             {duration}
// //           </Text>
// //           <View style={styles.actionButtons}>
// //             <TouchableOpacity 
// //               style={styles.actionButton}
// //               onPress={(e) => {
// //                 e.stopPropagation();
// //                 removeLike(songId);
// //               }}
// //             >
// //               <Icon name="heart" size={20} color="#FF3B3B" />
// //             </TouchableOpacity>
// //             <TouchableOpacity 
// //               style={styles.actionButton}
// //               onPress={(e) => e.stopPropagation()}
// //             >
// //               <Icon name="ellipsis-vertical" size={18} color="#b3b3b3" />
// //             </TouchableOpacity>
// //           </View>
// //         </View>
// //       </TouchableOpacity>
// //     );
// //   };

// //   // Render footer for loading more
// //   const renderFooter = () => {
// //     if (!hasMore && likedSongs.length > 0) {
// //       return (
// //         <View style={styles.footer}>
// //           <Text style={styles.footerText}>All {totalSongs} songs loaded</Text>
// //         </View>
// //       );
// //     }
    
// //     if (hasMore) {
// //       return (
// //         <View style={styles.footer}>
// //           <ActivityIndicator size="small" color="#FF3B3B" />
// //           <Text style={styles.footerText}>Loading more songs...</Text>
// //         </View>
// //       );
// //     }
    
// //     return null;
// //   };

// //   // Initial load
// //   useEffect(() => {
// //     fetchLikedSongs(1, false);
// //   }, []);

// //   if (loading && likedSongs.length === 0) {
// //     return (
// //       <SafeAreaView style={styles.container}>
// //         <StatusBar barStyle="light-content" backgroundColor="#000" />
// //         <View style={styles.loadingContainer}>
// //           <ActivityIndicator size="large" color="#FF3B3B" />
// //           <Text style={styles.loadingText}>Loading your liked songs...</Text>
// //         </View>
// //       </SafeAreaView>
// //     );
// //   }

// //   return (
// //     <SafeAreaView style={styles.container}>
// //       <StatusBar barStyle="light-content" backgroundColor="#000" />
      
// //       {/* Header */}
// //       <View style={styles.header}>
// //         <TouchableOpacity 
// //           onPress={() => navigation.goBack()} 
// //           style={styles.backButton}
// //         >
// //           <Icon name="chevron-back" size={28} color="#fff" />
// //         </TouchableOpacity>
        
// //         <View style={styles.headerTitleContainer}>
// //           <Text style={styles.headerTitle}>Liked Songs</Text>
// //           <Text style={styles.headerSubtitle}>Your personal collection</Text>
// //         </View>
        
// //         <TouchableOpacity 
// //           style={styles.headerButton}
// //           onPress={onRefresh}
// //         >
// //           <Icon name="refresh-outline" size={24} color="#fff" />
// //         </TouchableOpacity>
// //       </View>

// //       <ScrollView 
// //         style={styles.scrollView} 
// //         showsVerticalScrollIndicator={false}
// //         refreshControl={
// //           <RefreshControl
// //             refreshing={refreshing}
// //             onRefresh={onRefresh}
// //             tintColor="#FF3B3B"
// //             colors={['#FF3B3B']}
// //           />
// //         }
// //       >
// //         {/* Playlist Header */}
// //         <View style={styles.playlistHeader}>
// //           <View style={styles.playlistImageContainer}>
// //             <View style={styles.playlistImage}>
// //               <View style={styles.heartIconContainer}>
// //                 <Icon name="heart" size={40} color="#fff" />
// //               </View>
// //             </View>
// //           </View>
          
// //           <View style={styles.playlistInfo}>
// //             <Text style={styles.playlistName}>Liked Songs</Text>
// //             <View style={styles.playlistStats}>
// //               <View style={styles.statItem}>
// //                 <Icon name="heart" size={16} color="#FF3B3B" />
// //                 <Text style={styles.statText}>{totalSongs.toLocaleString()} songs</Text>
// //               </View>
// //               <Text style={styles.statDivider}>•</Text>
// //               <Text style={styles.statText}>
// //                 {totalHours > 0 ? `${totalHours}h ` : ''}{totalMinutes}m
// //               </Text>
// //             </View>
// //           </View>
// //         </View>

// //         {/* Play Controls */}
// //         <View style={styles.playControls}>
// //           <TouchableOpacity 
// //             style={[styles.playButton, likedSongs.length === 0 && styles.playButtonDisabled]} 
// //             onPress={handlePlayAll}
// //             disabled={likedSongs.length === 0}
// //           >
// //             <Icon name="play" size={28} color="#000" />
// //           </TouchableOpacity>
          
// //           <View style={styles.controlButtons}>
// //             <TouchableOpacity style={styles.iconButton}>
// //               <Icon name="download-outline" size={22} color="#fff" />
// //             </TouchableOpacity>
// //           </View>
// //         </View>

// //         {/* Search Bar */}
// //         {likedSongs.length > 0 && (
// //           <View style={styles.searchContainer}>
// //             <Icon name="search" size={20} color="#666" style={styles.searchIcon} />
// //             <TextInput
// //               style={styles.searchInput}
// //               placeholder="Search in liked songs..."
// //               placeholderTextColor="#666"
// //               value={searchQuery}
// //               onChangeText={setSearchQuery}
// //               clearButtonMode="while-editing"
// //             />
// //           </View>
// //         )}

// //         {/* Songs List Section */}
// //         <View style={styles.songsSection}>
// //           <View style={styles.songsHeader}>
// //             <Text style={styles.songsHeaderTitle}>Liked Songs</Text>
// //             <View style={styles.songsHeaderRight}>
// //               <Text style={styles.songsHeaderCount}>{filteredSongs.length}</Text>
// //               <Text style={styles.songsHeaderLabel}>songs</Text>
// //             </View>
// //           </View>

// //           {/* Songs List */}
// //           <View style={styles.songsList}>
// //             {filteredSongs.length === 0 ? (
// //               <View style={styles.emptyState}>
// //                 {searchQuery ? (
// //                   <>
// //                     <Icon name="search-outline" size={70} color="#666" />
// //                     <Text style={styles.emptyStateTitle}>No songs found</Text>
// //                     <Text style={styles.emptyStateText}>
// //                       Try searching with different keywords
// //                     </Text>
// //                   </>
// //                 ) : (
// //                   <>
// //                     <Icon name="heart-outline" size={70} color="#666" />
// //                     <Text style={styles.emptyStateTitle}>No liked songs yet</Text>
// //                     <Text style={styles.emptyStateText}>
// //                       Start liking songs to build your personal collection
// //                     </Text>
// //                   </>
// //                 )}
// //               </View>
// //             ) : (
// //               <FlatList
// //                 data={filteredSongs}
// //                 renderItem={renderSongItem}
// //                 keyExtractor={(item, index) => getSongId(item) + index}
// //                 scrollEnabled={false}
// //                 ListFooterComponent={renderFooter}
// //                 onEndReached={loadMoreSongs}
// //                 onEndReachedThreshold={0.3}
// //               />
// //             )}
// //           </View>
// //         </View>

// //         {/* Bottom Spacer */}
// //         <View style={styles.bottomSpacer} />
// //       </ScrollView>
// //     </SafeAreaView>
// //   );
// // };

// // // Styles
// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#000',
// //   },
// //   loadingContainer: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     backgroundColor: '#000',
// //   },
// //   loadingText: {
// //     color: '#fff',
// //     marginTop: 16,
// //     fontSize: 16,
// //     fontWeight: '500',
// //   },
// //   header: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     justifyContent: 'space-between',
// //     paddingHorizontal: 20,
// //     paddingVertical: 16,
// //     borderBottomWidth: 1,
// //     borderBottomColor: '#1a1a1a',
// //     backgroundColor: '#000',
// //   },
// //   backButton: {
// //     padding: 8,
// //     borderRadius: 20,
// //     backgroundColor: 'rgba(255,255,255,0.1)',
// //   },
// //   headerTitleContainer: {
// //     alignItems: 'center',
// //     flex: 1,
// //   },
// //   headerTitle: {
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //     color: '#fff',
// //     marginBottom: 2,
// //   },
// //   headerSubtitle: {
// //     fontSize: 12,
// //     color: '#b3b3b3',
// //     fontWeight: '500',
// //   },
// //   headerButton: {
// //     padding: 8,
// //     borderRadius: 20,
// //     backgroundColor: 'rgba(255,255,255,0.1)',
// //   },
// //   scrollView: {
// //     flex: 1,
// //   },
// //   playlistHeader: {
// //     padding: 30,
// //     alignItems: 'center',
// //     backgroundColor: 'rgba(255,59,59,0.05)',
// //   },
// //   playlistImageContainer: {
// //     position: 'relative',
// //     marginBottom: 25,
// //   },
// //   playlistImage: {
// //     width: 160,
// //     height: 160,
// //     borderRadius: 12,
// //     backgroundColor: '#FF3B3B',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     shadowColor: '#FF3B3B',
// //     shadowOffset: { width: 0, height: 8 },
// //     shadowOpacity: 0.3,
// //     shadowRadius: 12,
// //     elevation: 8,
// //   },
// //   heartIconContainer: {
// //     width: 80,
// //     height: 80,
// //     borderRadius: 40,
// //     backgroundColor: 'rgba(255,255,255,0.2)',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   playlistInfo: {
// //     alignItems: 'center',
// //   },
// //   playlistName: {
// //     fontSize: 32,
// //     fontWeight: 'bold',
// //     color: '#fff',
// //     marginBottom: 12,
// //     textAlign: 'center',
// //   },
// //   playlistStats: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //   },
// //   statItem: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //   },
// //   statText: {
// //     fontSize: 15,
// //     color: '#b3b3b3',
// //     marginLeft: 6,
// //     fontWeight: '500',
// //   },
// //   statDivider: {
// //     fontSize: 15,
// //     color: '#b3b3b3',
// //     marginHorizontal: 10,
// //   },
// //   playControls: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     justifyContent: 'space-between',
// //     paddingHorizontal: 24,
// //     paddingVertical: 24,
// //     borderBottomWidth: 1,
// //     borderBottomColor: '#282828',
// //   },
// //   playButton: {
// //     width: 64,
// //     height: 64,
// //     backgroundColor: '#FF3B3B',
// //     borderRadius: 32,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     shadowColor: '#FF3B3B',
// //     shadowOffset: { width: 0, height: 6 },
// //     shadowOpacity: 0.4,
// //     shadowRadius: 12,
// //     elevation: 10,
// //   },
// //   playButtonDisabled: {
// //     backgroundColor: '#666',
// //     shadowColor: '#000',
// //   },
// //   controlButtons: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     gap: 16,
// //   },
// //   iconButton: {
// //     width: 44,
// //     height: 44,
// //     borderRadius: 22,
// //     backgroundColor: 'rgba(255,255,255,0.1)',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   searchContainer: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     backgroundColor: 'rgba(255,255,255,0.1)',
// //     marginHorizontal: 20,
// //     marginVertical: 16,
// //     paddingHorizontal: 16,
// //     paddingVertical: 14,
// //     borderRadius: 12,
// //     borderWidth: 1,
// //     borderColor: 'rgba(255,255,255,0.2)',
// //   },
// //   searchIcon: {
// //     marginRight: 12,
// //   },
// //   searchInput: {
// //     flex: 1,
// //     fontSize: 16,
// //     color: '#fff',
// //     fontWeight: '500',
// //   },
// //   songsSection: {
// //     paddingTop: 8,
// //   },
// //   songsHeader: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     paddingHorizontal: 20,
// //     paddingVertical: 20,
// //   },
// //   songsHeaderTitle: {
// //     fontSize: 22,
// //     fontWeight: 'bold',
// //     color: '#fff',
// //   },
// //   songsHeaderRight: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     gap: 6,
// //   },
// //   songsHeaderCount: {
// //     fontSize: 16,
// //     fontWeight: 'bold',
// //     color: '#FF3B3B',
// //   },
// //   songsHeaderLabel: {
// //     fontSize: 14,
// //     color: '#b3b3b3',
// //     fontWeight: '500',
// //   },
// //   songsList: {
// //     paddingHorizontal: 12,
// //     minHeight: 200,
// //   },
// //   songItem: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     justifyContent: 'space-between',
// //     paddingVertical: 12,
// //     paddingHorizontal: 12,
// //     marginHorizontal: 8,
// //     marginBottom: 4,
// //     borderRadius: 8,
// //     backgroundColor: 'transparent',
// //   },
// //   songLeft: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     flex: 1,
// //   },
// //   songNumber: {
// //     width: 32,
// //     alignItems: 'center',
// //     marginRight: 16,
// //   },
// //   songNumberText: {
// //     fontSize: 15,
// //     color: '#b3b3b3',
// //     fontWeight: '500',
// //   },
// //   imageContainer: {
// //     position: 'relative',
// //     marginRight: 16,
// //   },
// //   songImage: {
// //     width: 56,
// //     height: 56,
// //     borderRadius: 8,
// //     backgroundColor: '#333',
// //   },
// //   songInfo: {
// //     flex: 1,
// //   },
// //   songTitle: {
// //     fontSize: 16,
// //     fontWeight: '600',
// //     color: '#fff',
// //     marginBottom: 6,
// //   },
// //   songMeta: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //   },
// //   heartIcon: {
// //     marginRight: 6,
// //   },
// //   songArtist: {
// //     fontSize: 14,
// //     color: '#b3b3b3',
// //     fontWeight: '500',
// //   },
// //   songRight: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     gap: 16,
// //   },
// //   songDuration: {
// //     fontSize: 14,
// //     color: '#b3b3b3',
// //     fontWeight: '500',
// //     minWidth: 40,
// //   },
// //   actionButtons: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     gap: 8,
// //   },
// //   actionButton: {
// //     padding: 6,
// //     borderRadius: 8,
// //   },
// //   emptyState: {
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     paddingVertical: 80,
// //     paddingHorizontal: 40,
// //   },
// //   emptyStateTitle: {
// //     fontSize: 20,
// //     fontWeight: 'bold',
// //     color: '#fff',
// //     marginTop: 20,
// //     marginBottom: 12,
// //     textAlign: 'center',
// //   },
// //   emptyStateText: {
// //     fontSize: 15,
// //     color: '#b3b3b3',
// //     textAlign: 'center',
// //     lineHeight: 22,
// //     marginBottom: 24,
// //   },
// //   footer: {
// //     flexDirection: 'row',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     paddingVertical: 24,
// //     gap: 8,
// //   },
// //   footerText: {
// //     color: '#b3b3b3',
// //     fontSize: 14,
// //     fontWeight: '500',
// //   },
// //   bottomSpacer: {
// //     height: 30,
// //   },
// // });

// // export default LikedSongsScreen;


// // screens/LikedSongsScreen.tsx - DURATION REMOVED VERSION
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
//   FlatList,
//   Alert,
//   ActivityIndicator,
//   RefreshControl,
//   TextInput
// } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { getLikedSongs, unlikeSong } from '../Services/mobile-api';
// import { wp, hp } from "../assets/Global.Css";

// const { width, height } = Dimensions.get('window');

// const LikedSongsScreen = ({ navigation, route }) => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [likedSongs, setLikedSongs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [refreshing, setRefreshing] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [hasMore, setHasMore] = useState(true);
//   const [totalSongs, setTotalSongs] = useState(0);

//   // ✅ Refresh trigger - jab bhi screen focus ho
//   useEffect(() => {
//     const unsubscribe = navigation.addListener('focus', () => {
//       console.log('🔄 LikedSongsScreen focused - refreshing data');
//       fetchLikedSongs(1, true);
//     });

//     return unsubscribe;
//   }, [navigation]);

//   // ✅ FIXED: Get proper image URL with base URL
//   const getProperImageUrl = (imagePath) => {
//     if (!imagePath) {
//       return 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop';
//     }
    
//     // Agar full URL hai to wahi return karo
//     if (imagePath.startsWith('http')) {
//       return imagePath;
//     }
    
//     // Agar relative path hai to base URL se combine karo
//     if (imagePath.startsWith('/')) {
//       return `http://103.119.171.213:3001${imagePath}`;
//     }
    
//     // Default fallback
//     return 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop';
//   };

//   // Fetch liked songs from API
//   const fetchLikedSongs = async (page = 1, isRefresh = false) => {
//     try {
//       if (isRefresh) {
//         setRefreshing(true);
//       } else {
//         setLoading(true);
//       }

//       const response = await getLikedSongs(page, 20);
      
//       console.log('🔵 Liked songs API response:', response);
      
//       if (response && response.success) {
//         let songsData = [];
//         let totalCount = 0;

//         if (Array.isArray(response.data?.likedSongs)) {
//           songsData = response.data.likedSongs;
//           totalCount = response.data.pagination?.total || songsData.length;
//         } 
//         else if (Array.isArray(response.data)) {
//           songsData = response.data;
//           totalCount = response.data.length;
//         } else if (Array.isArray(response.data?.songs)) {
//           songsData = response.data.songs;
//           totalCount = response.data.totalCount || response.data.total || songsData.length;
//         } else if (Array.isArray(response.songs)) {
//           songsData = response.songs;
//           totalCount = response.totalCount || response.total || songsData.length;
//         } else {
//           console.log('❌ Unexpected API response structure:', response);
//           songsData = [];
//           totalCount = 0;
//         }
        
//         console.log('✅ Processed songs data:', songsData.length, 'songs');
        
//         if (page === 1) {
//           setLikedSongs(songsData);
//         } else {
//           setLikedSongs(prev => [...prev, ...songsData]);
//         }
        
//         setTotalSongs(totalCount);
//         setHasMore(songsData.length === 20);
//         setCurrentPage(page);
//       } else {
//         console.log('❌ API returned unsuccessful:', response);
//         setLikedSongs([]);
//         setTotalSongs(0);
//       }
//     } catch (error) {
//       console.error('❌ Error fetching liked songs:', error);
//       setLikedSongs([]);
//       setTotalSongs(0);
//     } finally {
//       setLoading(false);
//       setRefreshing(false);
//     }
//   };

//   // Remove like from a song
//   const removeLike = async (songId) => {
//     try {
//       Alert.alert(
//         'Remove from Liked Songs',
//         'Are you sure you want to remove this song from your liked songs?',
//         [
//           {
//             text: 'Cancel',
//             style: 'cancel',
//           },
//           {
//             text: 'Remove',
//             style: 'destructive',
//             onPress: async () => {
//               try {
//                 const response = await unlikeSong(songId);
                
//                 if (response && response.success) {
//                   // Remove from local state immediately
//                   setLikedSongs(prev => prev.filter(song => getSongId(song) !== songId));
//                   setTotalSongs(prev => prev - 1);
//                 } else {
//                   Alert.alert('Error', response?.message || 'Failed to remove like');
//                 }
//               } catch (error) {
//                 console.error('Error removing like:', error);
//                 Alert.alert('Error', 'Failed to remove like');
//               }
//             },
//           },
//         ]
//       );
//     } catch (error) {
//       console.error('Error in remove like:', error);
//     }
//   };

//   // ✅ ORIGINAL WORKING: Play song function
//   const handlePlaySong = async (song) => {
//     try {
//       const songId = getSongId(song);
      
//       console.log('🎵 Playing song from LikedSongs:', { 
//         songId: songId,
//         title: getSongTitle(song)
//       });
      
//       if (!songId) {
//         Alert.alert('Error', 'Cannot play this song - invalid song data');
//         return;
//       }
      
//       // ✅ Direct navigation like before (jo kaam kar raha tha)
//       navigation.navigate('NowPlayingScreen', { 
//         songId: songId,
//         song: song,
//         resetToBeginning: true
//       });
      
//     } catch (error) {
//       console.error('❌ Error playing song:', error);
//       Alert.alert('Error', 'Failed to play song. Please try again.');
//     }
//   };

//   // ✅ ORIGINAL WORKING: Play all function
//   const handlePlayAll = () => {
//     if (Array.isArray(likedSongs) && likedSongs.length > 0) {
//       console.log('🎵 Playing all liked songs, starting with first song');
//       handlePlaySong(likedSongs[0]);
//     } else {
//       Alert.alert('No Songs', 'No liked songs available to play');
//     }
//   };

//   // Load more songs
//   const loadMoreSongs = () => {
//     if (!loading && hasMore) {
//       fetchLikedSongs(currentPage + 1, false);
//     }
//   };

//   // Pull to refresh
//   const onRefresh = () => {
//     fetchLikedSongs(1, true);
//   };

//   // ✅ COMPLETELY REMOVED: Duration formatting function - ab kisi ko bhi need nahi hai

//   // Get image URL
//   const getImageUrl = (song) => {
//     if (!song) return getProperImageUrl(null);
    
//     const imagePath = song.coverImage || song.image || song.thumbnail || song.artwork || 
//                      song.cover_url || song.image_url || song.cover ||
//                      song.song?.coverImage || song.song?.image || song.song?.thumbnail;
    
//     return getProperImageUrl(imagePath);
//   };

//   // Get artist name
//   const getArtistName = (song) => {
//     if (!song) return 'Unknown Artist';
    
//     if (song.artist && typeof song.artist === 'object') {
//       return song.artist.name || song.artist.stageName || song.artist.artistName || 'Unknown Artist';
//     }
    
//     return song.artist_name || song.artistName || song.artist || 
//            song.song?.artist?.name || song.song?.artist?.stageName || 'Unknown Artist';
//   };

//   // Get song title
//   const getSongTitle = (song) => {
//     if (!song) return 'Unknown Title';
//     return song.title || song.name || song.song_name || song.song?.title || 'Unknown Title';
//   };

//   // Get song ID
//   const getSongId = (song) => {
//     if (!song) return Math.random().toString();
//     return song.id?.toString() || song.song_id?.toString() || song._id?.toString() || 
//            song.song?.id?.toString() || Math.random().toString();
//   };

//   // Safe filter function
//   const filteredSongs = Array.isArray(likedSongs) 
//     ? likedSongs.filter(song => {
//         if (!song) return false;
//         const title = getSongTitle(song).toLowerCase();
//         const artist = getArtistName(song).toLowerCase();
//         const query = searchQuery.toLowerCase();
//         return title.includes(query) || artist.includes(query);
//       })
//     : [];

//   // Calculate total duration (ab sirf display ke liye, songs list mein nahi dikhega)
//   const totalDuration = Array.isArray(likedSongs) 
//     ? likedSongs.reduce((total, song) => total + (song?.duration || 0), 0)
//     : 0;
    
//   const totalHours = Math.floor(totalDuration / 3600);
//   const totalMinutes = Math.floor((totalDuration % 3600) / 60);

//   // ✅ FIXED: Render song item - COMPLETELY REMOVED DURATION
//   const renderSongItem = ({ item, index }) => {
//     if (!item) return null;
    
//     const songId = getSongId(item);
//     const songTitle = getSongTitle(item);
//     const artistName = getArtistName(item);
//     const imageUrl = getImageUrl(item);
    
//     return (
//       <TouchableOpacity 
//         style={styles.songItem}
//         onPress={() => handlePlaySong(item)}
//         activeOpacity={0.7}
//       >
//         <View style={styles.songLeft}>
//           <View style={styles.songNumber}>
//             <Text style={styles.songNumberText}>{index + 1}</Text>
//           </View>
          
//           <View style={styles.imageContainer}>
//             <Image 
//               source={{ uri: imageUrl }} 
//               style={styles.songImage}
//               resizeMode="cover"
//               defaultSource={{ uri: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=100&h=100&fit=crop' }}
//             />
//           </View>
          
//           <View style={styles.songInfo}>
//             <Text style={styles.songTitle} numberOfLines={1}>
//               {songTitle}
//             </Text>
//             <View style={styles.songMeta}>
//               <Icon name="heart" size={wp(3)} color="#FF3B3B" style={styles.heartIcon} />
//               <Text style={styles.songArtist} numberOfLines={1}>
//                 {artistName}
//               </Text>
//             </View>
//           </View>
//         </View>
        
//         <View style={styles.songRight}>
//           {/* ✅ COMPLETELY REMOVED: Duration section - koi bhi duration nahi dikhega */}
          
//           {/* ✅ Sirf heart button rakha */}
//           <TouchableOpacity 
//             style={styles.heartButton}
//             onPress={(e) => {
//               e.stopPropagation();
//               removeLike(songId);
//             }}
//           >
//             <Icon name="heart" size={wp(5)} color="#FF3B3B" />
//           </TouchableOpacity>
//         </View>
//       </TouchableOpacity>
//     );
//   };

//   // Render footer for loading more
//   const renderFooter = () => {
//     if (!hasMore && likedSongs.length > 0) {
//       return (
//         <View style={styles.footer}>
//           <Text style={styles.footerText}>All {totalSongs} songs loaded</Text>
//         </View>
//       );
//     }
    
//     if (hasMore) {
//       return (
//         <View style={styles.footer}>
//           <ActivityIndicator size="small" color="#FF3B3B" />
//           <Text style={styles.footerText}>Loading more songs...</Text>
//         </View>
//       );
//     }
    
//     return null;
//   };

//   // Initial load
//   useEffect(() => {
//     fetchLikedSongs(1, false);
//   }, []);

//   if (loading && likedSongs.length === 0) {
//     return (
//       <SafeAreaView style={styles.container}>
//         <StatusBar barStyle="light-content" backgroundColor="#000" />
//         <View style={styles.loadingContainer}>
//           <ActivityIndicator size="large" color="#FF3B3B" />
//           <Text style={styles.loadingText}>Loading your liked songs...</Text>
//         </View>
//       </SafeAreaView>
//     );
//   }

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="light-content" backgroundColor="#000" />
      
//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity 
//           onPress={() => navigation.goBack()} 
//           style={styles.backButton}
//         >
//           <Icon name="chevron-back" size={wp(7)} color="#fff" />
//         </TouchableOpacity>
        
//         <View style={styles.headerTitleContainer}>
//           <Text style={styles.headerTitle}>Liked Songs</Text>
//           <Text style={styles.headerSubtitle}>Your personal collection</Text>
//         </View>
        
//         <TouchableOpacity 
//           style={styles.headerButton}
//           onPress={onRefresh}
//         >
//           <Icon name="refresh-outline" size={wp(6)} color="#fff" />
//         </TouchableOpacity>
//       </View>

//       <ScrollView 
//         style={styles.scrollView} 
//         showsVerticalScrollIndicator={false}
//         refreshControl={
//           <RefreshControl
//             refreshing={refreshing}
//             onRefresh={onRefresh}
//             tintColor="#FF3B3B"
//             colors={['#FF3B3B']}
//           />
//         }
//       >
//         {/* Playlist Header */}
//         <View style={styles.playlistHeader}>
//           <View style={styles.playlistImageContainer}>
//             <View style={styles.playlistImage}>
//               <View style={styles.heartIconContainer}>
//                 <Icon name="heart" size={wp(10)} color="#fff" />
//               </View>
//             </View>
//           </View>
          
//           <View style={styles.playlistInfo}>
//             <Text style={styles.playlistName}>Liked Songs</Text>
//             <View style={styles.playlistStats}>
//               <View style={styles.statItem}>
//                 <Icon name="heart" size={wp(4)} color="#FF3B3B" />
//                 <Text style={styles.statText}>{totalSongs.toLocaleString()} songs</Text>
//               </View>
//               {/* ✅ Total duration abhi bhi header mein show ho raha hai, par songs list mein nahi */}
//               <Text style={styles.statDivider}>•</Text>
//               <Text style={styles.statText}>
//                 {totalHours > 0 ? `${totalHours}h ` : ''}{totalMinutes}m
//               </Text>
//             </View>
//           </View>
//         </View>

//         {/* Play Controls */}
//         <View style={styles.playControls}>
//           <TouchableOpacity 
//             style={[styles.playButton, likedSongs.length === 0 && styles.playButtonDisabled]} 
//             onPress={handlePlayAll}
//             disabled={likedSongs.length === 0}
//           >
//             <Icon name="play" size={wp(7)} color="#000" />
//           </TouchableOpacity>
          
//           <View style={styles.controlButtons}>
//             <TouchableOpacity style={styles.iconButton}>
//               <Icon name="download-outline" size={wp(5.5)} color="#fff" />
//             </TouchableOpacity>
//           </View>
//         </View>

//         {/* Search Bar */}
//         {likedSongs.length > 0 && (
//           <View style={styles.searchContainer}>
//             <Icon name="search" size={wp(5)} color="#666" style={styles.searchIcon} />
//             <TextInput
//               style={styles.searchInput}
//               placeholder="Search in liked songs..."
//               placeholderTextColor="#666"
//               value={searchQuery}
//               onChangeText={setSearchQuery}
//               clearButtonMode="while-editing"
//             />
//           </View>
//         )}

//         {/* Songs List Section */}
//         <View style={styles.songsSection}>
//           <View style={styles.songsHeader}>
//             <Text style={styles.songsHeaderTitle}>Liked Songs</Text>
//             <View style={styles.songsHeaderRight}>
//               <Text style={styles.songsHeaderCount}>{filteredSongs.length}</Text>
//               <Text style={styles.songsHeaderLabel}>songs</Text>
//             </View>
//           </View>

//           {/* Songs List */}
//           <View style={styles.songsList}>
//             {filteredSongs.length === 0 ? (
//               <View style={styles.emptyState}>
//                 {searchQuery ? (
//                   <>
//                     <Icon name="search-outline" size={wp(17)} color="#666" />
//                     <Text style={styles.emptyStateTitle}>No songs found</Text>
//                     <Text style={styles.emptyStateText}>
//                       Try searching with different keywords
//                     </Text>
//                   </>
//                 ) : (
//                   <>
//                     <Icon name="heart-outline" size={wp(17)} color="#666" />
//                     <Text style={styles.emptyStateTitle}>No liked songs yet</Text>
//                     <Text style={styles.emptyStateText}>
//                       Start liking songs to build your personal collection
//                     </Text>
//                   </>
//                 )}
//               </View>
//             ) : (
//               <FlatList
//                 data={filteredSongs}
//                 renderItem={renderSongItem}
//                 keyExtractor={(item, index) => getSongId(item) + index}
//                 scrollEnabled={false}
//                 ListFooterComponent={renderFooter}
//                 onEndReached={loadMoreSongs}
//                 onEndReachedThreshold={0.3}
//               />
//             )}
//           </View>
//         </View>

//         {/* Bottom Spacer */}
//         <View style={styles.bottomSpacer} />
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// // ✅ RESPONSIVE STYLES - DURATION REMOVED
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#000',
//   },
//   loadingText: {
//     color: '#fff',
//     marginTop: hp(2),
//     fontSize: wp(4),
//     fontWeight: '500',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingHorizontal: wp(5),
//     paddingVertical: hp(2),
//     borderBottomWidth: 1,
//     borderBottomColor: '#1a1a1a',
//     backgroundColor: '#000',
//   },
//   backButton: {
//     padding: wp(2),
//     borderRadius: wp(5),
//     backgroundColor: 'rgba(255,255,255,0.1)',
//   },
//   headerTitleContainer: {
//     alignItems: 'center',
//     flex: 1,
//   },
//   headerTitle: {
//     fontSize: wp(4.5),
//     fontWeight: 'bold',
//     color: '#fff',
//     marginBottom: hp(0.5),
//   },
//   headerSubtitle: {
//     fontSize: wp(3),
//     color: '#b3b3b3',
//     fontWeight: '500',
//   },
//   headerButton: {
//     padding: wp(2),
//     borderRadius: wp(5),
//     backgroundColor: 'rgba(255,255,255,0.1)',
//   },
//   scrollView: {
//     flex: 1,
//   },
//   playlistHeader: {
//     paddingHorizontal: wp(5),
//     paddingVertical: hp(4),
//     alignItems: 'center',
//     backgroundColor: 'rgba(255,59,59,0.05)',
//   },
//   playlistImageContainer: {
//     position: 'relative',
//     marginBottom: hp(3),
//   },
//   playlistImage: {
//     width: wp(40),
//     height: wp(40),
//     borderRadius: wp(3),
//     backgroundColor: '#FF3B3B',
//     justifyContent: 'center',
//     alignItems: 'center',
//     shadowColor: '#FF3B3B',
//     shadowOffset: { width: 0, height: wp(2) },
//     shadowOpacity: 0.3,
//     shadowRadius: wp(3),
//     elevation: 8,
//   },
//   heartIconContainer: {
//     width: wp(20),
//     height: wp(20),
//     borderRadius: wp(10),
//     backgroundColor: 'rgba(255,255,255,0.2)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   playlistInfo: {
//     alignItems: 'center',
//   },
//   playlistName: {
//     fontSize: wp(8),
//     fontWeight: 'bold',
//     color: '#fff',
//     marginBottom: hp(1.5),
//     textAlign: 'center',
//   },
//   playlistStats: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   statItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   statText: {
//     fontSize: wp(3.5),
//     color: '#b3b3b3',
//     marginLeft: wp(1.5),
//     fontWeight: '500',
//   },
//   statDivider: {
//     fontSize: wp(3.5),
//     color: '#b3b3b3',
//     marginHorizontal: wp(2.5),
//   },
//   playControls: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingHorizontal: wp(6),
//     paddingVertical: hp(3),
//     borderBottomWidth: 1,
//     borderBottomColor: '#282828',
//   },
//   playButton: {
//     width: wp(16),
//     height: wp(16),
//     backgroundColor: '#FF3B3B',
//     borderRadius: wp(8),
//     justifyContent: 'center',
//     alignItems: 'center',
//     shadowColor: '#FF3B3B',
//     shadowOffset: { width: 0, height: wp(1.5) },
//     shadowOpacity: 0.4,
//     shadowRadius: wp(3),
//     elevation: 10,
//   },
//   playButtonDisabled: {
//     backgroundColor: '#666',
//     shadowColor: '#000',
//   },
//   controlButtons: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: wp(4),
//   },
//   iconButton: {
//     width: wp(11),
//     height: wp(11),
//     borderRadius: wp(5.5),
//     backgroundColor: 'rgba(255,255,255,0.1)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: 'rgba(255,255,255,0.1)',
//     marginHorizontal: wp(5),
//     marginVertical: hp(2),
//     paddingHorizontal: wp(4),
//     paddingVertical: hp(1.5),
//     borderRadius: wp(3),
//     borderWidth: 1,
//     borderColor: 'rgba(255,255,255,0.2)',
//   },
//   searchIcon: {
//     marginRight: wp(3),
//   },
//   searchInput: {
//     flex: 1,
//     fontSize: wp(4),
//     color: '#fff',
//     fontWeight: '500',
//   },
//   songsSection: {
//     paddingTop: hp(1),
//   },
//   songsHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: wp(5),
//     paddingVertical: hp(2.5),
//   },
//   songsHeaderTitle: {
//     fontSize: wp(5.5),
//     fontWeight: 'bold',
//     color: '#fff',
//   },
//   songsHeaderRight: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: wp(1.5),
//   },
//   songsHeaderCount: {
//     fontSize: wp(4),
//     fontWeight: 'bold',
//     color: '#FF3B3B',
//   },
//   songsHeaderLabel: {
//     fontSize: wp(3.5),
//     color: '#b3b3b3',
//     fontWeight: '500',
//   },
//   songsList: {
//     paddingHorizontal: wp(3),
//     minHeight: hp(20),
//   },
//   songItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingVertical: hp(1.5),
//     paddingHorizontal: wp(3),
//     marginHorizontal: wp(2),
//     marginBottom: hp(0.5),
//     borderRadius: wp(2),
//     backgroundColor: 'transparent',
//   },
//   songLeft: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     flex: 1,
//   },
//   songNumber: {
//     width: wp(8),
//     alignItems: 'center',
//     marginRight: wp(4),
//   },
//   songNumberText: {
//     fontSize: wp(3.5),
//     color: '#b3b3b3',
//     fontWeight: '500',
//   },
//   imageContainer: {
//     position: 'relative',
//     marginRight: wp(4),
//   },
//   songImage: {
//     width: wp(14),
//     height: wp(14),
//     borderRadius: wp(2),
//     backgroundColor: '#333',
//   },
//   songInfo: {
//     flex: 1,
//   },
//   songTitle: {
//     fontSize: wp(4),
//     fontWeight: '600',
//     color: '#fff',
//     marginBottom: hp(0.5),
//   },
//   songMeta: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   heartIcon: {
//     marginRight: wp(1.5),
//   },
//   songArtist: {
//     fontSize: wp(3.5),
//     color: '#b3b3b3',
//     fontWeight: '500',
//   },
//   songRight: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     // ✅ Gap remove kiya kyunki ab sirf ek button hai
//   },
//   // ✅ COMPLETELY REMOVED: songDuration style - ab koi need nahi hai
//   heartButton: {
//     padding: wp(1.5),
//     borderRadius: wp(2),
//   },
//   emptyState: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: hp(10),
//     paddingHorizontal: wp(10),
//   },
//   emptyStateTitle: {
//     fontSize: wp(5),
//     fontWeight: 'bold',
//     color: '#fff',
//     marginTop: hp(2.5),
//     marginBottom: hp(1.5),
//     textAlign: 'center',
//   },
//   emptyStateText: {
//     fontSize: wp(3.8),
//     color: '#b3b3b3',
//     textAlign: 'center',
//     lineHeight: hp(2.8),
//     marginBottom: hp(3),
//   },
//   footer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingVertical: hp(3),
//     gap: wp(2),
//   },
//   footerText: {
//     color: '#b3b3b3',
//     fontSize: wp(3.5),
//     fontWeight: '500',
//   },
//   bottomSpacer: {
//     height: hp(4),
//   },
// });

// export default LikedSongsScreen;

// screens/LikedSongsScreen.tsx - WITH ONLY SUCCESS POPUP (NO OK BUTTON)
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
  FlatList,
  ActivityIndicator,
  RefreshControl,
  TextInput,
  Modal
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { getLikedSongs, unlikeSong } from '../Services/mobile-api';
import { wp, hp } from "../assets/Global.Css";

const { width, height } = Dimensions.get('window');

// ✅ SIMPLIFIED POPUP COMPONENT - ONLY SUCCESS/ERROR MESSAGES (NO OK BUTTON)
const StylishPopup = ({ visible, title, message, type = 'success', onClose }) => {
  if (!visible) return null;

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableOpacity 
        style={styles.popupOverlay}
        activeOpacity={1}
        onPress={onClose}
      >
        <View style={styles.popupContainer}>
          {/* ✅ Popup Icon - Red Background with White Icon */}
          <View style={[
            styles.popupIconContainer,
            type === 'error' && styles.popupIconError
          ]}>
            <Icon 
              name={
                type === 'success' ? 'checkmark-circle' :
                type === 'error' ? 'close-circle' :
                'information-circle'
              } 
              size={wp(10)} 
              color="#fff"
            />
          </View>
          
          {/* ✅ Popup Title - White Text */}
          <Text style={styles.popupTitle}>{title}</Text>
          
          {/* ✅ Popup Message - Light Gray Text */}
          <Text style={styles.popupMessage}>{message}</Text>
          
          {/* ❌ OK BUTTON REMOVED - Auto close after timeout */}
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const LikedSongsScreen = ({ navigation, route }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [likedSongs, setLikedSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [totalSongs, setTotalSongs] = useState(0);

  // ✅ SIMPLIFIED POPUP STATES - ONLY FOR SUCCESS/ERROR
  const [showPopup, setShowPopup] = useState(false);
  const [popupData, setPopupData] = useState({
    title: '',
    message: '',
    type: 'success'
  });

  // ✅ SHOW POPUP FUNCTION - DIRECTLY SHOW SUCCESS/ERROR
  const showStylishPopup = (type, title, message) => {
    setPopupData({ type, title, message });
    setShowPopup(true);
    
    // Auto close after 2 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

  // ✅ Refresh trigger - jab bhi screen focus ho
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      console.log('🔄 LikedSongsScreen focused - refreshing data');
      fetchLikedSongs(1, true);
    });

    return unsubscribe;
  }, [navigation]);

  // ✅ FIXED: Get proper image URL with base URL
  const getProperImageUrl = (imagePath) => {
    if (!imagePath) {
      return 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop';
    }
    
    // Agar full URL hai to wahi return karo
    if (imagePath.startsWith('http')) {
      return imagePath;
    }
    
    // Agar relative path hai to base URL se combine karo
    if (imagePath.startsWith('/')) {
      return `http://103.119.171.213:3001${imagePath}`;
    }
    
    // Default fallback
    return 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop';
  };

  // Fetch liked songs from API
  const fetchLikedSongs = async (page = 1, isRefresh = false) => {
    try {
      if (isRefresh) {
        setRefreshing(true);
      } else {
        setLoading(true);
      }

      const response = await getLikedSongs(page, 20);
      
      console.log('🔵 Liked songs API response:', response);
      
      if (response && response.success) {
        let songsData = [];
        let totalCount = 0;

        if (Array.isArray(response.data?.likedSongs)) {
          songsData = response.data.likedSongs;
          totalCount = response.data.pagination?.total || songsData.length;
        } 
        else if (Array.isArray(response.data)) {
          songsData = response.data;
          totalCount = response.data.length;
        } else if (Array.isArray(response.data?.songs)) {
          songsData = response.data.songs;
          totalCount = response.data.totalCount || response.data.total || songsData.length;
        } else if (Array.isArray(response.songs)) {
          songsData = response.songs;
          totalCount = response.totalCount || response.total || songsData.length;
        } else {
          console.log('❌ Unexpected API response structure:', response);
          songsData = [];
          totalCount = 0;
        }
        
        console.log('✅ Processed songs data:', songsData.length, 'songs');
        
        if (page === 1) {
          setLikedSongs(songsData);
        } else {
          setLikedSongs(prev => [...prev, ...songsData]);
        }
        
        setTotalSongs(totalCount);
        setHasMore(songsData.length === 20);
        setCurrentPage(page);
      } else {
        console.log('❌ API returned unsuccessful:', response);
        setLikedSongs([]);
        setTotalSongs(0);
      }
    } catch (error) {
      console.error('❌ Error fetching liked songs:', error);
      setLikedSongs([]);
      setTotalSongs(0);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  // ✅ FIXED: Remove like from a song - DIRECTLY REMOVE WITH SUCCESS POPUP
  const removeLike = async (songId, songTitle) => {
    try {
      // ✅ DIRECTLY REMOVE KARO - NO CONFIRMATION POPUP
      const response = await unlikeSong(songId);
      
      if (response && response.success) {
        // Remove from local state immediately
        setLikedSongs(prev => prev.filter(song => getSongId(song) !== songId));
        setTotalSongs(prev => prev - 1);
        
        // ✅ SUCCESS POPUP SHOW KARO
        showStylishPopup('success', 'Removed ❤️', `"${songTitle}" removed from liked songs`);
      } else {
        showStylishPopup('error', 'Error ❌', response?.message || 'Failed to remove like');
      }
    } catch (error) {
      console.error('Error removing like:', error);
      showStylishPopup('error', 'Error ❌', 'Failed to remove like');
    }
  };

  // ✅ ORIGINAL WORKING: Play song function
  const handlePlaySong = async (song) => {
    try {
      const songId = getSongId(song);
      
      console.log('🎵 Playing song from LikedSongs:', { 
        songId: songId,
        title: getSongTitle(song)
      });
      
      if (!songId) {
        showStylishPopup('error', 'Error ❌', 'Cannot play this song - invalid song data');
        return;
      }
      
      // ✅ Direct navigation like before (jo kaam kar raha tha)
      navigation.navigate('NowPlayingScreen', { 
        songId: songId,
        song: song,
        resetToBeginning: true
      });
      
    } catch (error) {
      console.error('❌ Error playing song:', error);
      showStylishPopup('error', 'Error ❌', 'Failed to play song. Please try again.');
    }
  };

  // ✅ ORIGINAL WORKING: Play all function
  const handlePlayAll = () => {
    if (Array.isArray(likedSongs) && likedSongs.length > 0) {
      console.log('🎵 Playing all liked songs, starting with first song');
      handlePlaySong(likedSongs[0]);
    } else {
      showStylishPopup('error', 'No Songs', 'No liked songs available to play');
    }
  };

  // Load more songs
  const loadMoreSongs = () => {
    if (!loading && hasMore) {
      fetchLikedSongs(currentPage + 1, false);
    }
  };

  // Pull to refresh
  const onRefresh = () => {
    fetchLikedSongs(1, true);
  };

  // Get image URL
  const getImageUrl = (song) => {
    if (!song) return getProperImageUrl(null);
    
    const imagePath = song.coverImage || song.image || song.thumbnail || song.artwork || 
                     song.cover_url || song.image_url || song.cover ||
                     song.song?.coverImage || song.song?.image || song.song?.thumbnail;
    
    return getProperImageUrl(imagePath);
  };

  // Get artist name
  const getArtistName = (song) => {
    if (!song) return 'Unknown Artist';
    
    if (song.artist && typeof song.artist === 'object') {
      return song.artist.name || song.artist.stageName || song.artist.artistName || 'Unknown Artist';
    }
    
    return song.artist_name || song.artistName || song.artist || 
           song.song?.artist?.name || song.song?.artist?.stageName || 'Unknown Artist';
  };

  // Get song title
  const getSongTitle = (song) => {
    if (!song) return 'Unknown Title';
    return song.title || song.name || song.song_name || song.song?.title || 'Unknown Title';
  };

  // Get song ID
  const getSongId = (song) => {
    if (!song) return Math.random().toString();
    return song.id?.toString() || song.song_id?.toString() || song._id?.toString() || 
           song.song?.id?.toString() || Math.random().toString();
  };

  // Safe filter function
  const filteredSongs = Array.isArray(likedSongs) 
    ? likedSongs.filter(song => {
        if (!song) return false;
        const title = getSongTitle(song).toLowerCase();
        const artist = getArtistName(song).toLowerCase();
        const query = searchQuery.toLowerCase();
        return title.includes(query) || artist.includes(query);
      })
    : [];

  // Calculate total duration (ab sirf display ke liye, songs list mein nahi dikhega)
  const totalDuration = Array.isArray(likedSongs) 
    ? likedSongs.reduce((total, song) => total + (song?.duration || 0), 0)
    : 0;
    
  const totalHours = Math.floor(totalDuration / 3600);
  const totalMinutes = Math.floor((totalDuration % 3600) / 60);

  // ✅ FIXED: Render song item - COMPLETELY REMOVED DURATION
  const renderSongItem = ({ item, index }) => {
    if (!item) return null;
    
    const songId = getSongId(item);
    const songTitle = getSongTitle(item);
    const artistName = getArtistName(item);
    const imageUrl = getImageUrl(item);
    
    return (
      <TouchableOpacity 
        style={styles.songItem}
        onPress={() => handlePlaySong(item)}
        activeOpacity={0.7}
      >
        <View style={styles.songLeft}>
          <View style={styles.songNumber}>
            <Text style={styles.songNumberText}>{index + 1}</Text>
          </View>
          
          <View style={styles.imageContainer}>
            <Image 
              source={{ uri: imageUrl }} 
              style={styles.songImage}
              resizeMode="cover"
              defaultSource={{ uri: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=100&h=100&fit=crop' }}
            />
          </View>
          
          <View style={styles.songInfo}>
            <Text style={styles.songTitle} numberOfLines={1}>
              {songTitle}
            </Text>
            <View style={styles.songMeta}>
              <Icon name="heart" size={wp(3)} color="#FF3B3B" style={styles.heartIcon} />
              <Text style={styles.songArtist} numberOfLines={1}>
                {artistName}
              </Text>
            </View>
          </View>
        </View>
        
        <View style={styles.songRight}>
          {/* ✅ Sirf heart button rakha */}
          <TouchableOpacity 
            style={styles.heartButton}
            onPress={(e) => {
              e.stopPropagation();
              removeLike(songId, songTitle);
            }}
          >
            <Icon name="heart" size={wp(5)} color="#FF3B3B" />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  // Render footer for loading more
  const renderFooter = () => {
    if (!hasMore && likedSongs.length > 0) {
      return (
        <View style={styles.footer}>
          <Text style={styles.footerText}>All {totalSongs} songs loaded</Text>
        </View>
      );
    }
    
    if (hasMore) {
      return (
        <View style={styles.footer}>
          <ActivityIndicator size="small" color="#FF3B3B" />
          <Text style={styles.footerText}>Loading more songs...</Text>
        </View>
      );
    }
    
    return null;
  };

  // Initial load
  useEffect(() => {
    fetchLikedSongs(1, false);
  }, []);

  if (loading && likedSongs.length === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#000" />
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#FF3B3B" />
          <Text style={styles.loadingText}>Loading your liked songs...</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      
      {/* ✅ SIMPLIFIED POPUP - NO OK BUTTON */}
      <StylishPopup
        visible={showPopup}
        title={popupData.title}
        message={popupData.message}
        type={popupData.type}
        onClose={() => setShowPopup(false)}
      />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => navigation.goBack()} 
          style={styles.backButton}
        >
          <Icon name="chevron-back" size={wp(7)} color="#fff" />
        </TouchableOpacity>
        
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Liked Songs</Text>
          <Text style={styles.headerSubtitle}>Your personal collection</Text>
        </View>
        
        <TouchableOpacity 
          style={styles.headerButton}
          onPress={onRefresh}
        >
          <Icon name="refresh-outline" size={wp(6)} color="#fff" />
        </TouchableOpacity>
      </View>

      <ScrollView 
        style={styles.scrollView} 
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor="#FF3B3B"
            colors={['#FF3B3B']}
          />
        }
      >
        {/* Playlist Header */}
        <View style={styles.playlistHeader}>
          <View style={styles.playlistImageContainer}>
            <View style={styles.playlistImage}>
              <View style={styles.heartIconContainer}>
                <Icon name="heart" size={wp(10)} color="#fff" />
              </View>
            </View>
          </View>
          
          <View style={styles.playlistInfo}>
            <Text style={styles.playlistName}>Liked Songs</Text>
            <View style={styles.playlistStats}>
              <View style={styles.statItem}>
                <Icon name="heart" size={wp(4)} color="#FF3B3B" />
                <Text style={styles.statText}>{totalSongs.toLocaleString()} songs</Text>
              </View>
              {/* ✅ Total duration abhi bhi header mein show ho raha hai, par songs list mein nahi */}
              <Text style={styles.statDivider}>•</Text>
              <Text style={styles.statText}>
                {totalHours > 0 ? `${totalHours}h ` : ''}{totalMinutes}m
              </Text>
            </View>
          </View>
        </View>

        {/* Play Controls */}
        <View style={styles.playControls}>
          <TouchableOpacity 
            style={[styles.playButton, likedSongs.length === 0 && styles.playButtonDisabled]} 
            onPress={handlePlayAll}
            disabled={likedSongs.length === 0}
          >
            <Icon name="play" size={wp(7)} color="#000" />
          </TouchableOpacity>
          
          <View style={styles.controlButtons}>
            <TouchableOpacity style={styles.iconButton}>
              <Icon name="download-outline" size={wp(5.5)} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Search Bar */}
        {likedSongs.length > 0 && (
          <View style={styles.searchContainer}>
            <Icon name="search" size={wp(5)} color="#666" style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search in liked songs..."
              placeholderTextColor="#666"
              value={searchQuery}
              onChangeText={setSearchQuery}
              clearButtonMode="while-editing"
            />
          </View>
        )}

        {/* Songs List Section */}
        <View style={styles.songsSection}>
          <View style={styles.songsHeader}>
            <Text style={styles.songsHeaderTitle}>Liked Songs</Text>
            <View style={styles.songsHeaderRight}>
              <Text style={styles.songsHeaderCount}>{filteredSongs.length}</Text>
              <Text style={styles.songsHeaderLabel}>songs</Text>
            </View>
          </View>

          {/* Songs List */}
          <View style={styles.songsList}>
            {filteredSongs.length === 0 ? (
              <View style={styles.emptyState}>
                {searchQuery ? (
                  <>
                    <Icon name="search-outline" size={wp(17)} color="#666" />
                    <Text style={styles.emptyStateTitle}>No songs found</Text>
                    <Text style={styles.emptyStateText}>
                      Try searching with different keywords
                    </Text>
                  </>
                ) : (
                  <>
                    <Icon name="heart-outline" size={wp(17)} color="#666" />
                    <Text style={styles.emptyStateTitle}>No liked songs yet</Text>
                    <Text style={styles.emptyStateText}>
                      Start liking songs to build your personal collection
                    </Text>
                  </>
                )}
              </View>
            ) : (
              <FlatList
                data={filteredSongs}
                renderItem={renderSongItem}
                keyExtractor={(item, index) => getSongId(item) + index}
                scrollEnabled={false}
                ListFooterComponent={renderFooter}
                onEndReached={loadMoreSongs}
                onEndReachedThreshold={0.3}
              />
            )}
          </View>
        </View>

        {/* Bottom Spacer */}
        <View style={styles.bottomSpacer} />
      </ScrollView>
    </SafeAreaView>
  );
};

// ✅ RESPONSIVE STYLES - DURATION REMOVED + SIMPLIFIED POPUP STYLES
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  loadingText: {
    color: '#fff',
    marginTop: hp(2),
    fontSize: wp(4),
    fontWeight: '500',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(5),
    paddingVertical: hp(2),
    borderBottomWidth: 1,
    borderBottomColor: '#1a1a1a',
    backgroundColor: '#000',
  },
  backButton: {
    padding: wp(2),
    borderRadius: wp(5),
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  headerTitleContainer: {
    alignItems: 'center',
    flex: 1,
  },
  headerTitle: {
    fontSize: wp(4.5),
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: hp(0.5),
  },
  headerSubtitle: {
    fontSize: wp(3),
    color: '#b3b3b3',
    fontWeight: '500',
  },
  headerButton: {
    padding: wp(2),
    borderRadius: wp(5),
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  scrollView: {
    flex: 1,
  },
  playlistHeader: {
    paddingHorizontal: wp(5),
    paddingVertical: hp(4),
    alignItems: 'center',
    backgroundColor: 'rgba(255,59,59,0.05)',
  },
  playlistImageContainer: {
    position: 'relative',
    marginBottom: hp(3),
  },
  playlistImage: {
    width: wp(40),
    height: wp(40),
    borderRadius: wp(3),
    backgroundColor: '#FF3B3B',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#FF3B3B',
    shadowOffset: { width: 0, height: wp(2) },
    shadowOpacity: 0.3,
    shadowRadius: wp(3),
    elevation: 8,
  },
  heartIconContainer: {
    width: wp(20),
    height: wp(20),
    borderRadius: wp(10),
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playlistInfo: {
    alignItems: 'center',
  },
  playlistName: {
    fontSize: wp(8),
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: hp(1.5),
    textAlign: 'center',
  },
  playlistStats: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statText: {
    fontSize: wp(3.5),
    color: '#b3b3b3',
    marginLeft: wp(1.5),
    fontWeight: '500',
  },
  statDivider: {
    fontSize: wp(3.5),
    color: '#b3b3b3',
    marginHorizontal: wp(2.5),
  },
  playControls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(6),
    paddingVertical: hp(3),
    borderBottomWidth: 1,
    borderBottomColor: '#282828',
  },
  playButton: {
    width: wp(16),
    height: wp(16),
    backgroundColor: '#FF3B3B',
    borderRadius: wp(8),
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#FF3B3B',
    shadowOffset: { width: 0, height: wp(1.5) },
    shadowOpacity: 0.4,
    shadowRadius: wp(3),
    elevation: 10,
  },
  playButtonDisabled: {
    backgroundColor: '#666',
    shadowColor: '#000',
  },
  controlButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(4),
  },
  iconButton: {
    width: wp(11),
    height: wp(11),
    borderRadius: wp(5.5),
    backgroundColor: 'rgba(255,255,255,0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.1)',
    marginHorizontal: wp(5),
    marginVertical: hp(2),
    paddingHorizontal: wp(4),
    paddingVertical: hp(1.5),
    borderRadius: wp(3),
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  searchIcon: {
    marginRight: wp(3),
  },
  searchInput: {
    flex: 1,
    fontSize: wp(4),
    color: '#fff',
    fontWeight: '500',
  },
  songsSection: {
    paddingTop: hp(1),
  },
  songsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(5),
    paddingVertical: hp(2.5),
  },
  songsHeaderTitle: {
    fontSize: wp(5.5),
    fontWeight: 'bold',
    color: '#fff',
  },
  songsHeaderRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(1.5),
  },
  songsHeaderCount: {
    fontSize: wp(4),
    fontWeight: 'bold',
    color: '#FF3B3B',
  },
  songsHeaderLabel: {
    fontSize: wp(3.5),
    color: '#b3b3b3',
    fontWeight: '500',
  },
  songsList: {
    paddingHorizontal: wp(3),
    minHeight: hp(20),
  },
  songItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(3),
    marginHorizontal: wp(2),
    marginBottom: hp(0.5),
    borderRadius: wp(2),
    backgroundColor: 'transparent',
  },
  songLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  songNumber: {
    width: wp(8),
    alignItems: 'center',
    marginRight: wp(4),
  },
  songNumberText: {
    fontSize: wp(3.5),
    color: '#b3b3b3',
    fontWeight: '500',
  },
  imageContainer: {
    position: 'relative',
    marginRight: wp(4),
  },
  songImage: {
    width: wp(14),
    height: wp(14),
    borderRadius: wp(2),
    backgroundColor: '#333',
  },
  songInfo: {
    flex: 1,
  },
  songTitle: {
    fontSize: wp(4),
    fontWeight: '600',
    color: '#fff',
    marginBottom: hp(0.5),
  },
  songMeta: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  heartIcon: {
    marginRight: wp(1.5),
  },
  songArtist: {
    fontSize: wp(3.5),
    color: '#b3b3b3',
    fontWeight: '500',
  },
  songRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  heartButton: {
    padding: wp(1.5),
    borderRadius: wp(2),
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: hp(10),
    paddingHorizontal: wp(10),
  },
  emptyStateTitle: {
    fontSize: wp(5),
    fontWeight: 'bold',
    color: '#fff',
    marginTop: hp(2.5),
    marginBottom: hp(1.5),
    textAlign: 'center',
  },
  emptyStateText: {
    fontSize: wp(3.8),
    color: '#b3b3b3',
    textAlign: 'center',
    lineHeight: hp(2.8),
    marginBottom: hp(3),
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: hp(3),
    gap: wp(2),
  },
  footerText: {
    color: '#b3b3b3',
    fontSize: wp(3.5),
    fontWeight: '500',
  },
  bottomSpacer: {
    height: hp(4),
  },

  // ✅ SIMPLIFIED POPUP STYLES - NO OK BUTTON
  popupOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: wp(5),
  },
  popupContainer: {
    backgroundColor: '#1a1a1a',
    borderRadius: wp(4),
    paddingHorizontal: wp(6),
    paddingVertical: hp(4),
    alignItems: 'center',
    width: '100%',
    maxWidth: wp(320),
    borderWidth: 2,
    borderColor: '#FF3B3B',
    shadowColor: '#FF3B3B',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 15,
  },
  popupIconContainer: {
    backgroundColor: '#FF3B3B',
    width: wp(20),
    height: wp(20),
    borderRadius: wp(10),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp(2),
    shadowColor: '#FF3B3B',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 8,
  },
  popupIconError: {
    backgroundColor: '#ff3b30',
  },
  popupTitle: {
    fontSize: wp(5.5),
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: hp(1.5),
    letterSpacing: 0.5,
  },
  popupMessage: {
    fontSize: wp(4),
    color: '#e0e0e0',
    textAlign: 'center',
    marginBottom: hp(0), // ✅ No bottom margin since no button
    lineHeight: hp(2.8),
    fontWeight: '500',
  },
  // ❌ OK BUTTON REMOVED
});

export default LikedSongsScreen;