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
// // //   RefreshControl
// // // } from 'react-native';
// // // import Icon from 'react-native-vector-icons/MaterialIcons';
// // // import { useNavigation, useRoute } from '@react-navigation/native';
// // // import { getDataWithToken } from '../Services/mobile-api';
// // // import { mobile_siteConfig } from '../Services/mobile-siteConfig';
// // // import { useAudio } from '../contexts/AudioContext';

// // // const { width } = Dimensions.get('window');

// // // // ✅ IMAGE URL HELPER FUNCTION
// // // const getImageUrl = (imagePath) => {
// // //   if (!imagePath || imagePath === 'null' || imagePath === 'undefined') {
// // //     return 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop';
// // //   }
  
// // //   if (imagePath.startsWith('http')) {
// // //     return imagePath;
// // //   }
  
// // //   if (imagePath.startsWith('/')) {
// // //     return `${mobile_siteConfig.IMAGE_BASE_URL}${imagePath}`;
// // //   }
  
// // //   return 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop';
// // // };

// // // const MoodSongsScreen = () => {
// // //   const navigation = useNavigation();
// // //   const route = useRoute();
// // //   const { moodId, moodName, moodImage } = route.params || {};
  
// // //   // ✅ Global Audio Context
// // //   const { playSong } = useAudio();

// // //   // ✅ State Variables - INITIAL VALUES SET KARO
// // //   const [songs, setSongs] = useState([]);
// // //   const [isLoading, setIsLoading] = useState(true);
// // //   const [refreshing, setRefreshing] = useState(false);
// // //   const [moodInfo, setMoodInfo] = useState({ 
// // //     name: moodName || 'Mood', 
// // //     image: moodImage 
// // //   });

// // //   // ✅ Fetch Mood Songs
// // //   useEffect(() => {
// // //     if (moodId) {
// // //       fetchMoodSongs();
// // //     }
// // //   }, [moodId]);

// // //   // ✅ API: Fetch Mood Songs - SIMPLIFIED VERSION
// // //   const fetchMoodSongs = async () => {
// // //     try {
// // //       setIsLoading(true);
// // //       console.log('🎵 Fetching mood songs for ID:', moodId);

// // //       const response = await getDataWithToken(`user/mood/${moodId}/songs?page=1&limit=20`);
// // //       console.log('🎵 Mood Songs API Response:', response);

// // //       // ✅ FIX: Simple check karo aur array ensure karo
// // //       if (response && response.success) {
// // //         let songsData = [];
        
// // //         // Multiple possible paths check karo
// // //         if (Array.isArray(response.data?.songs)) {
// // //           songsData = response.data.songs;
// // //         } else if (Array.isArray(response.songs)) {
// // //           songsData = response.songs;
// // //         } else if (Array.isArray(response.data)) {
// // //           songsData = response.data;
// // //         }
        
// // //         console.log('✅ Final songs data:', songsData);
// // //         setSongs(songsData);

// // //         // ✅ FIX: Mood info safely set karo
// // //         if (response.data?.mood) {
// // //           setMoodInfo({
// // //             id: response.data.mood.id || moodId,
// // //             name: response.data.mood.name || response.data.mood.title || moodName || 'Mood',
// // //             image: response.data.mood.image || response.data.mood.thumbnail || moodImage
// // //           });
// // //         }

// // //       } else {
// // //         console.log('❌ Mood songs API failed, using sample data');
// // //         setSongs(getSampleSongs());
// // //       }
// // //     } catch (error) {
// // //       console.error('❌ Mood songs fetch error:', error);
// // //       setSongs(getSampleSongs());
// // //     } finally {
// // //       setIsLoading(false);
// // //     }
// // //   };

// // //   // ✅ Sample Songs (Fallback)
// // //   const getSampleSongs = () => [
// // //     {
// // //       id: 1,
// // //       title: 'Happy Vibes',
// // //       artist: 'Various Artists',
// // //       album: 'Happy Mood Mix',
// // //       duration: 180,
// // //       playCount: 125000,
// // //       coverImage: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop'
// // //     },
// // //     {
// // //       id: 2,
// // //       title: 'Sunshine Melody',
// // //       artist: 'DJ Happy',
// // //       album: 'Positive Energy',
// // //       duration: 210,
// // //       playCount: 89000,
// // //       coverImage: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop'
// // //     }
// // //   ];

// // //   // ✅ Refresh Function
// // //   const onRefresh = async () => {
// // //     setRefreshing(true);
// // //     await fetchMoodSongs();
// // //     setRefreshing(false);
// // //   };

// // //   // ✅ Song Play Handler - SIMPLIFIED
// // //   const handleSongPlay = async (song) => {
// // //     console.log('🎵 Playing song:', song);
    
// // //     try {
// // //       // ✅ FIX: Ensure song data is valid
// // //       if (!song || typeof song !== 'object') {
// // //         console.error('❌ Invalid song data');
// // //         return;
// // //       }

// // //       const songData = {
// // //         id: song.id?.toString() || Math.random().toString(),
// // //         title: String(song.title || 'Unknown Title'),
// // //         artist: String(song.artist || 'Unknown Artist'),
// // //         audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
// // //         artwork: getImageUrl(song.coverImage || song.image)
// // //       };
      
// // //       playSong(songData);
// // //       navigation.navigate('NowPlayingScreen', { 
// // //         songId: song.id,
// // //         resetToBeginning: true 
// // //       });
// // //     } catch (error) {
// // //       console.error('❌ Song play error:', error);
// // //     }
// // //   };

// // //   // ✅ Format Time Helper
// // //   const formatTime = (seconds) => {
// // //     if (!seconds || typeof seconds !== 'number') return '0:00';
// // //     const mins = Math.floor(seconds / 60);
// // //     const secs = seconds % 60;
// // //     return `${mins}:${secs.toString().padStart(2, '0')}`;
// // //   };

// // //   // ✅ Format Play Count
// // //   const formatPlayCount = (count) => {
// // //     if (!count || typeof count !== 'number') return '0';
// // //     if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M`;
// // //     if (count >= 1000) return `${(count / 1000).toFixed(1)}K`;
// // //     return count.toString();
// // //   };

// // //   // ✅ Render Song Item - WITH VALIDATION
// // //   const renderSongItem = ({ item, index }) => {
// // //     // ✅ STRICT VALIDATION - Agar object nahi hai to return null
// // //     if (!item || typeof item !== 'object' || Array.isArray(item)) {
// // //       console.warn('❌ Invalid song item:', item);
// // //       return null;
// // //     }

// // //     // ✅ Ensure all values are strings
// // //     const songTitle = String(item.title || 'Unknown Title');
// // //     const songArtist = String(item.artist || 'Unknown Artist');
// // //     const songAlbum = String(item.album || 'Unknown Album');

// // //     return (
// // //       <TouchableOpacity 
// // //         style={styles.songItem}
// // //         onPress={() => handleSongPlay(item)}
// // //       >
// // //         <View style={styles.songNumber}>
// // //           <Text style={styles.songNumberText}>
// // //             {String(index + 1)}
// // //           </Text>
// // //         </View>
        
// // //         <Image 
// // //           source={{ uri: getImageUrl(item.coverImage || item.image) }}
// // //           style={styles.songImage}
// // //           resizeMode="cover"
// // //           defaultSource={{ uri: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop' }}
// // //         />
        
// // //         <View style={styles.songInfo}>
// // //           <Text style={styles.songTitle} numberOfLines={1}>
// // //             {songTitle}
// // //           </Text>
// // //           <Text style={styles.songArtist} numberOfLines={1}>
// // //             {songArtist}
// // //           </Text>
// // //           <Text style={styles.songAlbum} numberOfLines={1}>
// // //             {songAlbum}
// // //           </Text>
// // //         </View>
        
// // //         <View style={styles.songMeta}>
// // //           <Text style={styles.songPlays}>
// // //             {formatPlayCount(item.playCount || 0)} plays
// // //           </Text>
// // //           <Text style={styles.songDuration}>
// // //             {formatTime(item.duration || 180)}
// // //           </Text>
// // //         </View>
        
// // //         <TouchableOpacity style={styles.moreButton}>
// // //           <Icon name="more-vert" size={20} color="#b3b3b3" />
// // //         </TouchableOpacity>
// // //       </TouchableOpacity>
// // //     );
// // //   };

// // //   // ✅ Shuffle Play Function
// // //   const handleShufflePlay = () => {
// // //     if (songs.length > 0) {
// // //       const randomSong = songs[Math.floor(Math.random() * songs.length)];
// // //       handleSongPlay(randomSong);
// // //     }
// // //   };

// // //   // ✅ Calculate total duration
// // //   const calculateTotalDuration = () => {
// // //     return songs.reduce((total, song) => total + (song.duration || 0), 0);
// // //   };

// // //   // ✅ Calculate total plays
// // //   const calculateTotalPlays = () => {
// // //     return songs.reduce((total, song) => total + (song.playCount || 0), 0);
// // //   };

// // //   // ✅ FIXED RENDER - All values ko string mein convert karo
// // //   return (
// // //     <SafeAreaView style={styles.container}>
// // //       <StatusBar barStyle="light-content" backgroundColor="#000" />
      
// // //       {/* Header */}
// // //       <View style={styles.header}>
// // //         <TouchableOpacity 
// // //           onPress={() => navigation.goBack()} 
// // //           style={styles.backButton}
// // //         >
// // //           <Icon name="arrow-back" size={24} color="#fff" />
// // //         </TouchableOpacity>
        
// // //         <View style={styles.headerTitleContainer}>
// // //           {/* ✅ FIX: String conversion */}
// // //           <Text style={styles.headerTitle} numberOfLines={1}>
// // //             {String(moodInfo?.name || 'Mood')}
// // //           </Text>
// // //           <Text style={styles.headerSubtitle}>Mood Playlist</Text>
// // //         </View>
        
// // //         <TouchableOpacity style={styles.headerButton}>
// // //           <Icon name="search" size={24} color="#fff" />
// // //         </TouchableOpacity>
// // //       </View>

// // //       <ScrollView 
// // //         style={styles.scrollView}
// // //         showsVerticalScrollIndicator={false}
// // //         refreshControl={
// // //           <RefreshControl
// // //             refreshing={refreshing}
// // //             onRefresh={onRefresh}
// // //             tintColor="#FF3B3B"
// // //             colors={['#FF3B3B']}
// // //           />
// // //         }
// // //       >
// // //         {/* Mood Header Section */}
// // //         <View style={styles.moodHeader}>
// // //           <View style={styles.moodImageContainer}>
// // //             <Image 
// // //               source={{ uri: getImageUrl(moodInfo?.image) }}
// // //               style={styles.moodImage}
// // //               resizeMode="cover"
// // //               defaultSource={{ uri: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop' }}
// // //             />
// // //             <View style={styles.moodOverlay} />
// // //           </View>
          
// // //           <View style={styles.moodInfo}>
// // //             {/* ✅ FIX: String conversion */}
// // //             <Text style={styles.moodName}>
// // //               {String(moodInfo?.name || 'Mood')}
// // //             </Text>
// // //             <Text style={styles.moodDescription}>
// // //               {`Curated playlist to match your ${String(moodInfo?.name?.toLowerCase() || 'current')} mood`}
// // //             </Text>
            
// // //             <View style={styles.moodStats}>
// // //               <View style={styles.statItem}>
// // //                 <Text style={styles.statNumber}>{String(songs.length)}</Text>
// // //                 <Text style={styles.statLabel}>Songs</Text>
// // //               </View>
// // //               <View style={styles.statItem}>
// // //                 <Text style={styles.statNumber}>
// // //                   {String(formatPlayCount(calculateTotalPlays()))}
// // //                 </Text>
// // //                 <Text style={styles.statLabel}>Total Plays</Text>
// // //               </View>
// // //               <View style={styles.statItem}>
// // //                 <Text style={styles.statNumber}>
// // //                   {String(formatTime(calculateTotalDuration()))}
// // //                 </Text>
// // //                 <Text style={styles.statLabel}>Duration</Text>
// // //               </View>
// // //             </View>
// // //           </View>
// // //         </View>

// // //         {/* Action Buttons */}
// // //         <View style={styles.actionSection}>
// // //           <TouchableOpacity 
// // //             style={styles.shuffleButton}
// // //             onPress={handleShufflePlay}
// // //             disabled={songs.length === 0}
// // //           >
// // //             <Icon name="shuffle" size={24} color="#000" />
// // //             <Text style={styles.shuffleButtonText}>Shuffle Play</Text>
// // //           </TouchableOpacity>
          
// // //           <View style={styles.secondaryActions}>
// // //             <TouchableOpacity style={styles.secondaryButton}>
// // //               <Icon name="favorite-border" size={20} color="#fff" />
// // //             </TouchableOpacity>
// // //             <TouchableOpacity style={styles.secondaryButton}>
// // //               <Icon name="download" size={20} color="#fff" />
// // //             </TouchableOpacity>
// // //             <TouchableOpacity style={styles.secondaryButton}>
// // //               <Icon name="share" size={20} color="#fff" />
// // //             </TouchableOpacity>
// // //           </View>
// // //         </View>

// // //         {/* Songs List */}
// // //         <View style={styles.songsSection}>
// // //           <View style={styles.sectionHeader}>
// // //             <Text style={styles.sectionTitle}>
// // //               {`Songs (${String(songs.length)})`}
// // //             </Text>
// // //             <TouchableOpacity>
// // //               <Text style={styles.seeAllText}>Recently added</Text>
// // //             </TouchableOpacity>
// // //           </View>

// // //           {isLoading ? (
// // //             <View style={styles.loadingContainer}>
// // //               <ActivityIndicator size="large" color="#FF3B3B" />
// // //               <Text style={styles.loadingText}>Loading songs...</Text>
// // //             </View>
// // //           ) : songs.length > 0 ? (
// // //             <FlatList
// // //               data={songs}
// // //               renderItem={renderSongItem}
// // //               keyExtractor={(item, index) => 
// // //                 `mood-song-${item?.id?.toString() || index}-${Math.random()}`
// // //               }
// // //               scrollEnabled={false}
// // //               showsVerticalScrollIndicator={false}
// // //               extraData={songs} // Re-render trigger
// // //             />
// // //           ) : (
// // //             <View style={styles.emptyState}>
// // //               <Icon name="music-off" size={64} color="#b3b3b3" />
// // //               <Text style={styles.emptyStateText}>No songs available</Text>
// // //               <Text style={styles.emptyStateSubtext}>
// // //                 Songs for this mood will be available soon
// // //               </Text>
// // //             </View>
// // //           )}
// // //         </View>

// // //         {/* Bottom Padding */}
// // //         <View style={styles.bottomPadding} />
// // //       </ScrollView>
// // //     </SafeAreaView>
// // //   );
// // // };

// // // // Styles same rahenge...
// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     backgroundColor: '#000',
// // //   },
// // //   header: {
// // //     flexDirection: 'row',
// // //     alignItems: 'center',
// // //     justifyContent: 'space-between',
// // //     paddingHorizontal: 16,
// // //     paddingVertical: 12,
// // //     borderBottomWidth: 1,
// // //     borderBottomColor: '#282828',
// // //   },
// // //   backButton: {
// // //     padding: 8,
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
// // //   headerButton: {
// // //     padding: 8,
// // //   },
// // //   scrollView: {
// // //     flex: 1,
// // //   },
// // //   moodHeader: {
// // //     position: 'relative',
// // //     height: 280,
// // //   },
// // //   moodImageContainer: {
// // //     width: '100%',
// // //     height: '100%',
// // //     position: 'relative',
// // //   },
// // //   moodImage: {
// // //     width: '100%',
// // //     height: '100%',
// // //   },
// // //   moodOverlay: {
// // //     ...StyleSheet.absoluteFillObject,
// // //     backgroundColor: 'rgba(0,0,0,0.6)',
// // //   },
// // //   moodInfo: {
// // //     position: 'absolute',
// // //     bottom: 0,
// // //     left: 0,
// // //     right: 0,
// // //     padding: 24,
// // //   },
// // //   moodName: {
// // //     fontSize: 32,
// // //     fontWeight: 'bold',
// // //     color: '#fff',
// // //     marginBottom: 8,
// // //   },
// // //   moodDescription: {
// // //     fontSize: 16,
// // //     color: '#b3b3b3',
// // //     marginBottom: 20,
// // //   },
// // //   moodStats: {
// // //     flexDirection: 'row',
// // //     justifyContent: 'space-between',
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
// // //   },
// // //   actionSection: {
// // //     flexDirection: 'row',
// // //     alignItems: 'center',
// // //     justifyContent: 'space-between',
// // //     paddingHorizontal: 20,
// // //     paddingVertical: 16,
// // //     borderBottomWidth: 1,
// // //     borderBottomColor: '#282828',
// // //   },
// // //   shuffleButton: {
// // //     flexDirection: 'row',
// // //     alignItems: 'center',
// // //     backgroundColor: '#FF3B3B',
// // //     paddingHorizontal: 24,
// // //     paddingVertical: 12,
// // //     borderRadius: 25,
// // //     gap: 8,
// // //     flex: 1,
// // //     marginRight: 12,
// // //     justifyContent: 'center',
// // //   },
// // //   shuffleButtonText: {
// // //     fontSize: 14,
// // //     fontWeight: 'bold',
// // //     color: '#000',
// // //   },
// // //   secondaryActions: {
// // //     flexDirection: 'row',
// // //     alignItems: 'center',
// // //     gap: 12,
// // //   },
// // //   secondaryButton: {
// // //     width: 40,
// // //     height: 40,
// // //     borderRadius: 20,
// // //     backgroundColor: 'rgba(255,255,255,0.1)',
// // //     justifyContent: 'center',
// // //     alignItems: 'center',
// // //   },
// // //   songsSection: {
// // //     padding: 20,
// // //   },
// // //   sectionHeader: {
// // //     flexDirection: 'row',
// // //     justifyContent: 'space-between',
// // //     alignItems: 'center',
// // //     marginBottom: 20,
// // //   },
// // //   sectionTitle: {
// // //     fontSize: 22,
// // //     fontWeight: 'bold',
// // //     color: '#fff',
// // //   },
// // //   seeAllText: {
// // //     fontSize: 14,
// // //     color: '#b3b3b3',
// // //     fontWeight: '600',
// // //   },
// // //   songItem: {
// // //     flexDirection: 'row',
// // //     alignItems: 'center',
// // //     paddingVertical: 12,
// // //     borderBottomWidth: 1,
// // //     borderBottomColor: '#282828',
// // //   },
// // //   songNumber: {
// // //     width: 30,
// // //     alignItems: 'center',
// // //     marginRight: 12,
// // //   },
// // //   songNumberText: {
// // //     fontSize: 14,
// // //     color: '#b3b3b3',
// // //     fontWeight: '600',
// // //   },
// // //   songImage: {
// // //     width: 50,
// // //     height: 50,
// // //     borderRadius: 6,
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
// // //   songArtist: {
// // //     fontSize: 14,
// // //     color: '#b3b3b3',
// // //     marginBottom: 2,
// // //   },
// // //   songAlbum: {
// // //     fontSize: 12,
// // //     color: '#666',
// // //   },
// // //   songMeta: {
// // //     alignItems: 'flex-end',
// // //     marginRight: 12,
// // //   },
// // //   songPlays: {
// // //     fontSize: 12,
// // //     color: '#b3b3b3',
// // //     marginBottom: 2,
// // //   },
// // //   songDuration: {
// // //     fontSize: 12,
// // //     color: '#666',
// // //   },
// // //   moreButton: {
// // //     padding: 4,
// // //   },
// // //   loadingContainer: {
// // //     alignItems: 'center',
// // //     justifyContent: 'center',
// // //     paddingVertical: 40,
// // //   },
// // //   loadingText: {
// // //     color: '#b3b3b3',
// // //     marginTop: 12,
// // //     fontSize: 16,
// // //   },
// // //   emptyState: {
// // //     alignItems: 'center',
// // //     justifyContent: 'center',
// // //     paddingVertical: 60,
// // //   },
// // //   emptyStateText: {
// // //     fontSize: 18,
// // //     color: '#fff',
// // //     fontWeight: 'bold',
// // //     marginTop: 16,
// // //     marginBottom: 8,
// // //   },
// // //   emptyStateSubtext: {
// // //     fontSize: 14,
// // //     color: '#b3b3b3',
// // //     textAlign: 'center',
// // //   },
// // //   bottomPadding: {
// // //     height: 20,
// // //   },
// // // });

// // // export default MoodSongsScreen;

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
// //   RefreshControl
// // } from 'react-native';
// // import Icon from 'react-native-vector-icons/MaterialIcons';
// // import { useNavigation, useRoute } from '@react-navigation/native';
// // import { getDataWithToken } from '../Services/mobile-api';
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

// // // ✅ SAFE STRING HELPER - Object ko safely string mein convert karega
// // const safeString = (value, fallback = '') => {
// //   if (value === null || value === undefined) return fallback;
// //   if (typeof value === 'object') {
// //     // Agar object hai to JSON.stringify karo ya fallback use karo
// //     try {
// //       return JSON.stringify(value);
// //     } catch {
// //       return fallback;
// //     }
// //   }
// //   return String(value);
// // };

// // const MoodSongsScreen = () => {
// //   const navigation = useNavigation();
// //   const route = useRoute();
// //   const { moodId, moodName, moodImage } = route.params || {};
  
// //   // ✅ Global Audio Context
// //   const { playSong } = useAudio();

// //   // ✅ State Variables - INITIAL VALUES SET KARO
// //   const [songs, setSongs] = useState([]);
// //   const [isLoading, setIsLoading] = useState(true);
// //   const [refreshing, setRefreshing] = useState(false);
// //   const [moodInfo, setMoodInfo] = useState({ 
// //     name: moodName || 'Mood', 
// //     image: moodImage 
// //   });

// //   // ✅ Fetch Mood Songs
// //   useEffect(() => {
// //     if (moodId) {
// //       fetchMoodSongs();
// //     }
// //   }, [moodId]);

// //   // ✅ API: Fetch Mood Songs - SIMPLIFIED VERSION
// //   const fetchMoodSongs = async () => {
// //     try {
// //       setIsLoading(true);
// //       console.log('🎵 Fetching mood songs for ID:', moodId);

// //       const response = await getDataWithToken(`user/mood/${moodId}/songs?page=1&limit=20`);
// //       console.log('🎵 Mood Songs API Response:', response);

// //       // ✅ FIX: Simple check karo aur array ensure karo
// //       if (response && response.success) {
// //         let songsData = [];
        
// //         // Multiple possible paths check karo
// //         if (Array.isArray(response.data?.songs)) {
// //           songsData = response.data.songs;
// //         } else if (Array.isArray(response.songs)) {
// //           songsData = response.songs;
// //         } else if (Array.isArray(response.data)) {
// //           songsData = response.data;
// //         }
        
// //         console.log('✅ Final songs data:', songsData);
        
// //         // ✅ FIX: Ensure every song has required properties
// //         const validatedSongs = songsData.map((song, index) => ({
// //           id: song?.id || `temp-${index}`,
// //           title: safeString(song?.title || song?.name, 'Unknown Title'),
// //           artist: safeString(song?.artist || song?.artist_name || song?.singer, 'Unknown Artist'),
// //           album: safeString(song?.album || song?.album_name, 'Unknown Album'),
// //           duration: Number(song?.duration) || 180,
// //           playCount: Number(song?.playCount || song?.play_count || song?.views) || 0,
// //           coverImage: song?.coverImage || song?.image || song?.thumbnail || song?.artwork
// //         }));
        
// //         setSongs(validatedSongs);

// //         // ✅ FIX: Mood info safely set karo
// //         if (response.data?.mood) {
// //           setMoodInfo({
// //             id: response.data.mood.id || moodId,
// //             name: safeString(response.data.mood.name || response.data.mood.title || moodName, 'Mood'),
// //             image: response.data.mood.image || response.data.mood.thumbnail || moodImage
// //           });
// //         }

// //       } else {
// //         console.log('❌ Mood songs API failed, using sample data');
// //         setSongs(getSampleSongs());
// //       }
// //     } catch (error) {
// //       console.error('❌ Mood songs fetch error:', error);
// //       setSongs(getSampleSongs());
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   // ✅ Sample Songs (Fallback)
// //   const getSampleSongs = () => [
// //     {
// //       id: 1,
// //       title: 'Happy Vibes',
// //       artist: 'Various Artists',
// //       album: 'Happy Mood Mix',
// //       duration: 180,
// //       playCount: 125000,
// //       coverImage: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop'
// //     },
// //     {
// //       id: 2,
// //       title: 'Sunshine Melody',
// //       artist: 'DJ Happy',
// //       album: 'Positive Energy',
// //       duration: 210,
// //       playCount: 89000,
// //       coverImage: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop'
// //     }
// //   ];

// //   // ✅ Refresh Function
// //   const onRefresh = async () => {
// //     setRefreshing(true);
// //     await fetchMoodSongs();
// //     setRefreshing(false);
// //   };

// //   // ✅ FIXED: Song Play Handler - HomeScreen ki tarah API call karo
// //   const handleSongPlay = async (song) => {
// //     console.log('🎵 Playing song from Mood Screen:', song);
    
// //     try {
// //       // ✅ Pehle song info fetch karo (HomeScreen ki tarah)
// //       const songInfo = await getDataWithToken(`user/song/${song.id}/info`);
// //       console.log('🎵 Song Info from Mood Screen:', songInfo);
      
// //       if (songInfo && songInfo.success) {
// //         const songData = {
// //           id: song.id,
// //           title: safeString(song.title, 'Unknown Title'),
// //           artist: safeString(song.artist, 'Unknown Artist'),
// //           audioUrl: songInfo.song?.audioFile 
// //             ? `${mobile_siteConfig.IMAGE_BASE_URL}${songInfo.song.audioFile}`
// //             : 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
// //           artwork: getImageUrl(song.coverImage || songInfo.song?.thumbnail)
// //         };
        
// //         console.log('🎵 Playing song data from Mood:', songData);
        
// //         // ✅ Global context mein play karo (HomeScreen ki tarah)
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
// //       console.error('❌ Error playing song from Mood:', error);
      
// //       // ✅ Fallback song data
// //       const fallbackSongData = {
// //         id: song.id,
// //         title: safeString(song.title, 'Unknown Title'),
// //         artist: safeString(song.artist, 'Unknown Artist'),
// //         audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
// //         artwork: getImageUrl(song.coverImage || song.image)
// //       };
      
// //       playSong(fallbackSongData);
// //       navigation.navigate('NowPlayingScreen', { 
// //         songId: song.id,
// //         resetToBeginning: true
// //       });
// //     }
// //   };

// //   // ✅ Format Time Helper
// //   const formatTime = (seconds) => {
// //     if (!seconds || typeof seconds !== 'number') return '0:00';
// //     const mins = Math.floor(seconds / 60);
// //     const secs = seconds % 60;
// //     return `${mins}:${secs.toString().padStart(2, '0')}`;
// //   };

// //   // ✅ Format Play Count
// //   const formatPlayCount = (count) => {
// //     if (!count || typeof count !== 'number') return '0';
// //     if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M`;
// //     if (count >= 1000) return `${(count / 1000).toFixed(1)}K`;
// //     return count.toString();
// //   };

// //   // ✅ Render Song Item - WITH BETTER VALIDATION
// //   const renderSongItem = ({ item, index }) => {
// //     // ✅ STRICT VALIDATION - Agar object nahi hai to return null
// //     if (!item || typeof item !== 'object' || Array.isArray(item)) {
// //       console.warn('❌ Invalid song item:', item);
// //       return null;
// //     }

// //     // ✅ SAFE VALUES using safeString helper
// //     const songTitle = safeString(item.title, 'Unknown Title');
// //     const songArtist = safeString(item.artist, 'Unknown Artist');
// //     const songAlbum = safeString(item.album, 'Unknown Album');

// //     return (
// //       <TouchableOpacity 
// //         style={styles.songItem}
// //         onPress={() => handleSongPlay(item)}
// //       >
// //         <View style={styles.songNumber}>
// //           <Text style={styles.songNumberText}>
// //             {safeString(index + 1)}
// //           </Text>
// //         </View>
        
// //         <Image 
// //           source={{ uri: getImageUrl(item.coverImage || item.image) }}
// //           style={styles.songImage}
// //           resizeMode="cover"
// //           defaultSource={{ uri: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop' }}
// //         />
        
// //         <View style={styles.songInfo}>
// //           <Text style={styles.songTitle} numberOfLines={1}>
// //             {songTitle}
// //           </Text>
// //           <Text style={styles.songArtist} numberOfLines={1}>
// //             {songArtist}
// //           </Text>
// //           <Text style={styles.songAlbum} numberOfLines={1}>
// //             {songAlbum}
// //           </Text>
// //         </View>
        
// //         <View style={styles.songMeta}>
// //           <Text style={styles.songPlays}>
// //             {formatPlayCount(item.playCount || 0)} plays
// //           </Text>
// //           <Text style={styles.songDuration}>
// //             {formatTime(item.duration || 180)}
// //           </Text>
// //         </View>
        
// //         <TouchableOpacity style={styles.moreButton}>
// //           <Icon name="more-vert" size={20} color="#b3b3b3" />
// //         </TouchableOpacity>
// //       </TouchableOpacity>
// //     );
// //   };

// //   // ✅ Shuffle Play Function
// //   const handleShufflePlay = () => {
// //     if (songs.length > 0) {
// //       const randomSong = songs[Math.floor(Math.random() * songs.length)];
// //       handleSongPlay(randomSong);
// //     }
// //   };

// //   // ✅ Calculate total duration
// //   const calculateTotalDuration = () => {
// //     return songs.reduce((total, song) => total + (song.duration || 0), 0);
// //   };

// //   // ✅ Calculate total plays
// //   const calculateTotalPlays = () => {
// //     return songs.reduce((total, song) => total + (song.playCount || 0), 0);
// //   };

// //   return (
// //     <SafeAreaView style={styles.container}>
// //       <StatusBar barStyle="light-content" backgroundColor="#000" />
      
// //       {/* Header */}
// //       <View style={styles.header}>
// //         <TouchableOpacity 
// //           onPress={() => navigation.goBack()} 
// //           style={styles.backButton}
// //         >
// //           <Icon name="arrow-back" size={24} color="#fff" />
// //         </TouchableOpacity>
        
// //         <View style={styles.headerTitleContainer}>
// //           <Text style={styles.headerTitle} numberOfLines={1}>
// //             {safeString(moodInfo?.name, 'Mood')}
// //           </Text>
// //           <Text style={styles.headerSubtitle}>Mood Playlist</Text>
// //         </View>
        
// //         <TouchableOpacity style={styles.headerButton}>
// //           <Icon name="search" size={24} color="#fff" />
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
// //         {/* Mood Header Section */}
// //         <View style={styles.moodHeader}>
// //           <View style={styles.moodImageContainer}>
// //             <Image 
// //               source={{ uri: getImageUrl(moodInfo?.image) }}
// //               style={styles.moodImage}
// //               resizeMode="cover"
// //               defaultSource={{ uri: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop' }}
// //             />
// //             <View style={styles.moodOverlay} />
// //           </View>
          
// //           <View style={styles.moodInfo}>
// //             <Text style={styles.moodName}>
// //               {safeString(moodInfo?.name, 'Mood')}
// //             </Text>
// //             <Text style={styles.moodDescription}>
// //               {`Curated playlist to match your ${safeString(moodInfo?.name?.toLowerCase(), 'current')} mood`}
// //             </Text>
            
// //             <View style={styles.moodStats}>
// //               <View style={styles.statItem}>
// //                 <Text style={styles.statNumber}>{safeString(songs.length)}</Text>
// //                 <Text style={styles.statLabel}>Songs</Text>
// //               </View>
// //               <View style={styles.statItem}>
// //                 <Text style={styles.statNumber}>
// //                   {safeString(formatPlayCount(calculateTotalPlays()))}
// //                 </Text>
// //                 <Text style={styles.statLabel}>Total Plays</Text>
// //               </View>
// //               <View style={styles.statItem}>
// //                 <Text style={styles.statNumber}>
// //                   {safeString(formatTime(calculateTotalDuration()))}
// //                 </Text>
// //                 <Text style={styles.statLabel}>Duration</Text>
// //               </View>
// //             </View>
// //           </View>
// //         </View>

// //         {/* Action Buttons */}
// //         <View style={styles.actionSection}>
// //           <TouchableOpacity 
// //             style={styles.shuffleButton}
// //             onPress={handleShufflePlay}
// //             disabled={songs.length === 0}
// //           >
// //             <Icon name="shuffle" size={24} color="#000" />
// //             <Text style={styles.shuffleButtonText}>Shuffle Play</Text>
// //           </TouchableOpacity>
          
// //           <View style={styles.secondaryActions}>
// //             <TouchableOpacity style={styles.secondaryButton}>
// //               <Icon name="favorite-border" size={20} color="#fff" />
// //             </TouchableOpacity>
// //             <TouchableOpacity style={styles.secondaryButton}>
// //               <Icon name="download" size={20} color="#fff" />
// //             </TouchableOpacity>
// //             <TouchableOpacity style={styles.secondaryButton}>
// //               <Icon name="share" size={20} color="#fff" />
// //             </TouchableOpacity>
// //           </View>
// //         </View>

// //         {/* Songs List */}
// //         <View style={styles.songsSection}>
// //           <View style={styles.sectionHeader}>
// //             <Text style={styles.sectionTitle}>
// //               {`Songs (${safeString(songs.length)})`}
// //             </Text>
// //             <TouchableOpacity>
// //               <Text style={styles.seeAllText}>Recently added</Text>
// //             </TouchableOpacity>
// //           </View>

// //           {isLoading ? (
// //             <View style={styles.loadingContainer}>
// //               <ActivityIndicator size="large" color="#FF3B3B" />
// //               <Text style={styles.loadingText}>Loading songs...</Text>
// //             </View>
// //           ) : songs.length > 0 ? (
// //             <FlatList
// //               data={songs}
// //               renderItem={renderSongItem}
// //               keyExtractor={(item, index) => 
// //                 `mood-song-${safeString(item?.id, index)}-${Math.random()}`
// //               }
// //               scrollEnabled={false}
// //               showsVerticalScrollIndicator={false}
// //               extraData={songs}
// //             />
// //           ) : (
// //             <View style={styles.emptyState}>
// //               <Icon name="music-off" size={64} color="#b3b3b3" />
// //               <Text style={styles.emptyStateText}>No songs available</Text>
// //               <Text style={styles.emptyStateSubtext}>
// //                 Songs for this mood will be available soon
// //               </Text>
// //             </View>
// //           )}
// //         </View>

// //         {/* Bottom Padding */}
// //         <View style={styles.bottomPadding} />
// //       </ScrollView>
// //     </SafeAreaView>
// //   );
// // };

// // // Styles (same as before)
// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#000',
// //   },
// //   header: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     justifyContent: 'space-between',
// //     paddingHorizontal: 16,
// //     paddingVertical: 12,
// //     borderBottomWidth: 1,
// //     borderBottomColor: '#282828',
// //   },
// //   backButton: {
// //     padding: 8,
// //   },
// //   headerTitleContainer: {
// //     flex: 1,
// //     alignItems: 'center',
// //   },
// //   headerTitle: {
// //     fontSize: 16,
// //     fontWeight: 'bold',
// //     color: '#fff',
// //   },
// //   headerSubtitle: {
// //     fontSize: 12,
// //     color: '#b3b3b3',
// //   },
// //   headerButton: {
// //     padding: 8,
// //   },
// //   scrollView: {
// //     flex: 1,
// //   },
// //   moodHeader: {
// //     position: 'relative',
// //     height: 280,
// //   },
// //   moodImageContainer: {
// //     width: '100%',
// //     height: '100%',
// //     position: 'relative',
// //   },
// //   moodImage: {
// //     width: '100%',
// //     height: '100%',
// //   },
// //   moodOverlay: {
// //     ...StyleSheet.absoluteFillObject,
// //     backgroundColor: 'rgba(0,0,0,0.6)',
// //   },
// //   moodInfo: {
// //     position: 'absolute',
// //     bottom: 0,
// //     left: 0,
// //     right: 0,
// //     padding: 24,
// //   },
// //   moodName: {
// //     fontSize: 32,
// //     fontWeight: 'bold',
// //     color: '#fff',
// //     marginBottom: 8,
// //   },
// //   moodDescription: {
// //     fontSize: 16,
// //     color: '#b3b3b3',
// //     marginBottom: 20,
// //   },
// //   moodStats: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //   },
// //   statItem: {
// //     alignItems: 'center',
// //     flex: 1,
// //   },
// //   statNumber: {
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //     color: '#fff',
// //     marginBottom: 4,
// //   },
// //   statLabel: {
// //     fontSize: 12,
// //     color: '#b3b3b3',
// //   },
// //   actionSection: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     justifyContent: 'space-between',
// //     paddingHorizontal: 20,
// //     paddingVertical: 16,
// //     borderBottomWidth: 1,
// //     borderBottomColor: '#282828',
// //   },
// //   shuffleButton: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     backgroundColor: '#FF3B3B',
// //     paddingHorizontal: 24,
// //     paddingVertical: 12,
// //     borderRadius: 25,
// //     gap: 8,
// //     flex: 1,
// //     marginRight: 12,
// //     justifyContent: 'center',
// //   },
// //   shuffleButtonText: {
// //     fontSize: 14,
// //     fontWeight: 'bold',
// //     color: '#000',
// //   },
// //   secondaryActions: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     gap: 12,
// //   },
// //   secondaryButton: {
// //     width: 40,
// //     height: 40,
// //     borderRadius: 20,
// //     backgroundColor: 'rgba(255,255,255,0.1)',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   songsSection: {
// //     padding: 20,
// //   },
// //   sectionHeader: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     marginBottom: 20,
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
// //   songItem: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     paddingVertical: 12,
// //     borderBottomWidth: 1,
// //     borderBottomColor: '#282828',
// //   },
// //   songNumber: {
// //     width: 30,
// //     alignItems: 'center',
// //     marginRight: 12,
// //   },
// //   songNumberText: {
// //     fontSize: 14,
// //     color: '#b3b3b3',
// //     fontWeight: '600',
// //   },
// //   songImage: {
// //     width: 50,
// //     height: 50,
// //     borderRadius: 6,
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
// //     marginBottom: 2,
// //   },
// //   songAlbum: {
// //     fontSize: 12,
// //     color: '#666',
// //   },
// //   songMeta: {
// //     alignItems: 'flex-end',
// //     marginRight: 12,
// //   },
// //   songPlays: {
// //     fontSize: 12,
// //     color: '#b3b3b3',
// //     marginBottom: 2,
// //   },
// //   songDuration: {
// //     fontSize: 12,
// //     color: '#666',
// //   },
// //   moreButton: {
// //     padding: 4,
// //   },
// //   loadingContainer: {
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     paddingVertical: 40,
// //   },
// //   loadingText: {
// //     color: '#b3b3b3',
// //     marginTop: 12,
// //     fontSize: 16,
// //   },
// //   emptyState: {
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     paddingVertical: 60,
// //   },
// //   emptyStateText: {
// //     fontSize: 18,
// //     color: '#fff',
// //     fontWeight: 'bold',
// //     marginTop: 16,
// //     marginBottom: 8,
// //   },
// //   emptyStateSubtext: {
// //     fontSize: 14,
// //     color: '#b3b3b3',
// //     textAlign: 'center',
// //   },
// //   bottomPadding: {
// //     height: 20,
// //   },
// // });

// // export default MoodSongsScreen;


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
//   RefreshControl
// } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import { useNavigation, useRoute } from '@react-navigation/native';
// import { getDataWithToken } from '../Services/mobile-api';
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

// // ✅ SAFE STRING HELPER - Object ko safely string mein convert karega
// const safeString = (value, fallback = '') => {
//   if (value === null || value === undefined) return fallback;
//   if (typeof value === 'object') {
//     // ✅ FIX: Agar artist object hai to uska name extract karo
//     if (value.name) {
//       return String(value.name);
//     }
//     // Agar koi aur object hai to JSON.stringify karo ya fallback use karo
//     try {
//       return JSON.stringify(value);
//     } catch {
//       return fallback;
//     }
//   }
//   return String(value);
// };

// const MoodSongsScreen = () => {
//   const navigation = useNavigation();
//   const route = useRoute();
//   const { moodId, moodName, moodImage } = route.params || {};
  
//   // ✅ Global Audio Context
//   const { playSong } = useAudio();

//   // ✅ State Variables
//   const [songs, setSongs] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [refreshing, setRefreshing] = useState(false);
//   const [moodInfo, setMoodInfo] = useState({ 
//     name: moodName || 'Mood', 
//     image: moodImage 
//   });

//   // ✅ Fetch Mood Songs
//   useEffect(() => {
//     if (moodId) {
//       fetchMoodSongs();
//     }
//   }, [moodId]);

//   // ✅ API: Fetch Mood Songs - FIXED VERSION
//   const fetchMoodSongs = async () => {
//     try {
//       setIsLoading(true);
//       console.log('🎵 Fetching mood songs for ID:', moodId);

//       const response = await getDataWithToken(`user/mood/${moodId}/songs?page=1&limit=20`);
//       console.log('🎵 Mood Songs API Response:', JSON.stringify(response, null, 2));

//       if (response && response.success) {
//         let songsData = [];
        
//         // Multiple possible paths check karo
//         if (Array.isArray(response.data?.songs)) {
//           songsData = response.data.songs;
//         } else if (Array.isArray(response.songs)) {
//           songsData = response.songs;
//         } else if (Array.isArray(response.data)) {
//           songsData = response.data;
//         }
        
//         console.log('✅ Raw songs data:', songsData);
        
//         // ✅ FIX: PROPERLY EXTRACT ARTIST NAME FROM OBJECT
//         const validatedSongs = songsData.map((song, index) => {
//           // ✅ CORRECT WAY: Artist name extract karo
//           let artistName = 'Unknown Artist';
//           if (song.artist) {
//             if (typeof song.artist === 'object' && song.artist.name) {
//               artistName = song.artist.name; // ✅ Yahan se artist name milega
//             } else if (typeof song.artist === 'string') {
//               artistName = song.artist;
//             }
//           }
          
//           // ✅ CORRECT WAY: Album name extract karo
//           let albumName = 'Unknown Album';
//           if (song.album) {
//             if (typeof song.album === 'string') {
//               albumName = song.album;
//             }
//           }

//           return {
//             id: song?.id || `temp-${index}`,
//             title: song?.title || 'Unknown Title',
//             artist: artistName, // ✅ Yahan sirf artist name jayega, object nahi
//             album: albumName, // ✅ Yahan sirf album name jayega
//             duration: Number(song?.duration) || 180,
//             playCount: Number(song?.playCount || song?.play_count || song?.views) || 0,
//             coverImage: song?.coverImage || song?.image || song?.thumbnail || song?.artwork,
//             // ✅ Complete song object bhi save karo for playing
//             rawSong: song
//           };
//         });
        
//         console.log('✅ Processed songs data:', validatedSongs);
//         setSongs(validatedSongs);

//         // ✅ Mood info safely set karo
//         if (response.data?.mood) {
//           setMoodInfo({
//             id: response.data.mood.id || moodId,
//             name: response.data.mood.name || response.data.mood.title || moodName || 'Mood',
//             image: response.data.mood.image || response.data.mood.thumbnail || moodImage
//           });
//         }

//       } else {
//         console.log('❌ Mood songs API failed, using sample data');
//         setSongs(getSampleSongs());
//       }
//     } catch (error) {
//       console.error('❌ Mood songs fetch error:', error);
//       setSongs(getSampleSongs());
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // ✅ Sample Songs (Fallback)
//   const getSampleSongs = () => [
//     {
//       id: 1,
//       title: 'Happy Vibes',
//       artist: 'Various Artists',
//       album: 'Happy Mood Mix',
//       duration: 180,
//       playCount: 125000,
//       coverImage: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop'
//     },
//     {
//       id: 2,
//       title: 'Sunshine Melody',
//       artist: 'DJ Happy',
//       album: 'Positive Energy',
//       duration: 210,
//       playCount: 89000,
//       coverImage: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop'
//     }
//   ];

//   // ✅ Refresh Function
//   const onRefresh = async () => {
//     setRefreshing(true);
//     await fetchMoodSongs();
//     setRefreshing(false);
//   };

//   // ✅ FIXED: Song Play Handler
//   const handleSongPlay = async (song) => {
//     console.log('🎵 Playing song from Mood Screen:', song);
    
//     try {
//       // ✅ Pehle song info fetch karo
//       const songInfo = await getDataWithToken(`user/song/${song.id}/info`);
//       console.log('🎵 Song Info from Mood Screen:', songInfo);
      
//       if (songInfo && songInfo.success) {
//         const songData = {
//           id: song.id,
//           title: song.title || 'Unknown Title',
//           artist: song.artist || 'Unknown Artist', // ✅ Yahan bhi sirf name jayega
//           audioUrl: songInfo.song?.audioFile 
//             ? `${mobile_siteConfig.IMAGE_BASE_URL}${songInfo.song.audioFile}`
//             : 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
//           artwork: getImageUrl(song.coverImage || songInfo.song?.thumbnail)
//         };
        
//         console.log('🎵 Playing song data from Mood:', songData);
        
//         // ✅ Global context mein play karo
//         playSong(songData);
        
//         // ✅ NowPlayingScreen pe navigate karo
//         navigation.navigate('NowPlayingScreen', { 
//           songId: song.id,
//           resetToBeginning: true 
//         });
//       } else {
//         throw new Error('Song info not found');
//       }
//     } catch (error) {
//       console.error('❌ Error playing song from Mood:', error);
      
//       // ✅ Fallback song data
//       const fallbackSongData = {
//         id: song.id,
//         title: song.title || 'Unknown Title',
//         artist: song.artist || 'Unknown Artist', // ✅ Yahan bhi sirf name jayega
//         audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
//         artwork: getImageUrl(song.coverImage || song.image)
//       };
      
//       playSong(fallbackSongData);
//       navigation.navigate('NowPlayingScreen', { 
//         songId: song.id,
//         resetToBeginning: true
//       });
//     }
//   };

//   // ✅ Format Time Helper
//   const formatTime = (seconds) => {
//     if (!seconds || typeof seconds !== 'number') return '0:00';
//     const mins = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${mins}:${secs.toString().padStart(2, '0')}`;
//   };

//   // ✅ Format Play Count
//   const formatPlayCount = (count) => {
//     if (!count || typeof count !== 'number') return '0';
//     if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M`;
//     if (count >= 1000) return `${(count / 1000).toFixed(1)}K`;
//     return count.toString();
//   };

//   // ✅ Render Song Item - FIXED
//   const renderSongItem = ({ item, index }) => {
//     // ✅ STRICT VALIDATION
//     if (!item || typeof item !== 'object' || Array.isArray(item)) {
//       console.warn('❌ Invalid song item:', item);
//       return null;
//     }

//     // ✅ DEBUG: Check kya aa raha hai
//     console.log('🎵 Rendering song item:', {
//       title: item.title,
//       artist: item.artist,
//       type: typeof item.artist
//     });

//     return (
//       <TouchableOpacity 
//         style={styles.songItem}
//         onPress={() => handleSongPlay(item)}
//       >
//         <View style={styles.songNumber}>
//           <Text style={styles.songNumberText}>
//             {index + 1}
//           </Text>
//         </View>
        
//         <Image 
//           source={{ uri: getImageUrl(item.coverImage || item.image) }}
//           style={styles.songImage}
//           resizeMode="cover"
//           defaultSource={{ uri: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop' }}
//         />
        
//         <View style={styles.songInfo}>
//           <Text style={styles.songTitle} numberOfLines={1}>
//             {item.title || 'Unknown Title'}
//           </Text>
//           <Text style={styles.songArtist} numberOfLines={1}>
//             {item.artist || 'Unknown Artist'}
//           </Text>
//           <Text style={styles.songAlbum} numberOfLines={1}>
//             {item.album || 'Unknown Album'}
//           </Text>
//         </View>
        
//         <View style={styles.songMeta}>
//           <Text style={styles.songPlays}>
//             {formatPlayCount(item.playCount || 0)} plays
//           </Text>
//           <Text style={styles.songDuration}>
//             {formatTime(item.duration || 180)}
//           </Text>
//         </View>
        
//         <TouchableOpacity style={styles.moreButton}>
//           <Icon name="more-vert" size={20} color="#b3b3b3" />
//         </TouchableOpacity>
//       </TouchableOpacity>
//     );
//   };

//   // ✅ Shuffle Play Function
//   const handleShufflePlay = () => {
//     if (songs.length > 0) {
//       const randomSong = songs[Math.floor(Math.random() * songs.length)];
//       handleSongPlay(randomSong);
//     }
//   };

//   // ✅ Calculate total duration
//   const calculateTotalDuration = () => {
//     return songs.reduce((total, song) => total + (song.duration || 0), 0);
//   };

//   // ✅ Calculate total plays
//   const calculateTotalPlays = () => {
//     return songs.reduce((total, song) => total + (song.playCount || 0), 0);
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="light-content" backgroundColor="#000" />
      
//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity 
//           onPress={() => navigation.goBack()} 
//           style={styles.backButton}
//         >
//           <Icon name="arrow-back" size={24} color="#fff" />
//         </TouchableOpacity>
        
//         <View style={styles.headerTitleContainer}>
//           <Text style={styles.headerTitle} numberOfLines={1}>
//             {moodInfo?.name || 'Mood'}
//           </Text>
//           <Text style={styles.headerSubtitle}>Mood Playlist</Text>
//         </View>
        
//         <TouchableOpacity style={styles.headerButton}>
//           <Icon name="search" size={24} color="#fff" />
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
//         {/* Mood Header Section */}
//         <View style={styles.moodHeader}>
//           <View style={styles.moodImageContainer}>
//             <Image 
//               source={{ uri: getImageUrl(moodInfo?.image) }}
//               style={styles.moodImage}
//               resizeMode="cover"
//               defaultSource={{ uri: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop' }}
//             />
//             <View style={styles.moodOverlay} />
//           </View>
          
//           <View style={styles.moodInfo}>
//             <Text style={styles.moodName}>
//               {moodInfo?.name || 'Mood'}
//             </Text>
//             <Text style={styles.moodDescription}>
//               {`Curated playlist to match your ${(moodInfo?.name || 'current').toLowerCase()} mood`}
//             </Text>
            
//             <View style={styles.moodStats}>
//               <View style={styles.statItem}>
//                 <Text style={styles.statNumber}>{songs.length}</Text>
//                 <Text style={styles.statLabel}>Songs</Text>
//               </View>
//               <View style={styles.statItem}>
//                 <Text style={styles.statNumber}>
//                   {formatPlayCount(calculateTotalPlays())}
//                 </Text>
//                 <Text style={styles.statLabel}>Total Plays</Text>
//               </View>
//               <View style={styles.statItem}>
//                 <Text style={styles.statNumber}>
//                   {formatTime(calculateTotalDuration())}
//                 </Text>
//                 <Text style={styles.statLabel}>Duration</Text>
//               </View>
//             </View>
//           </View>
//         </View>

//         {/* Action Buttons */}
//         <View style={styles.actionSection}>
//           <TouchableOpacity 
//             style={styles.shuffleButton}
//             onPress={handleShufflePlay}
//             disabled={songs.length === 0}
//           >
//             <Icon name="shuffle" size={24} color="#000" />
//             <Text style={styles.shuffleButtonText}>Shuffle Play</Text>
//           </TouchableOpacity>
          
//           <View style={styles.secondaryActions}>
//             <TouchableOpacity style={styles.secondaryButton}>
//               <Icon name="favorite-border" size={20} color="#fff" />
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.secondaryButton}>
//               <Icon name="download" size={20} color="#fff" />
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.secondaryButton}>
//               <Icon name="share" size={20} color="#fff" />
//             </TouchableOpacity>
//           </View>
//         </View>

//         {/* Songs List */}
//         <View style={styles.songsSection}>
//           <View style={styles.sectionHeader}>
//             <Text style={styles.sectionTitle}>
//               {`Songs (${songs.length})`}
//             </Text>
//             <TouchableOpacity>
//               <Text style={styles.seeAllText}>Recently added</Text>
//             </TouchableOpacity>
//           </View>

//           {isLoading ? (
//             <View style={styles.loadingContainer}>
//               <ActivityIndicator size="large" color="#FF3B3B" />
//               <Text style={styles.loadingText}>Loading songs...</Text>
//             </View>
//           ) : songs.length > 0 ? (
//             <FlatList
//               data={songs}
//               renderItem={renderSongItem}
//               keyExtractor={(item, index) => 
//                 `mood-song-${item?.id || index}-${Math.random()}`
//               }
//               scrollEnabled={false}
//               showsVerticalScrollIndicator={false}
//               extraData={songs}
//             />
//           ) : (
//             <View style={styles.emptyState}>
//               <Icon name="music-off" size={64} color="#b3b3b3" />
//               <Text style={styles.emptyStateText}>No songs available</Text>
//               <Text style={styles.emptyStateSubtext}>
//                 Songs for this mood will be available soon
//               </Text>
//             </View>
//           )}
//         </View>

//         {/* Bottom Padding */}
//         <View style={styles.bottomPadding} />
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// // Styles (same as before, no changes needed)
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//     borderBottomWidth: 1,
//     borderBottomColor: '#282828',
//   },
//   backButton: {
//     padding: 8,
//   },
//   headerTitleContainer: {
//     flex: 1,
//     alignItems: 'center',
//   },
//   headerTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#fff',
//   },
//   headerSubtitle: {
//     fontSize: 12,
//     color: '#b3b3b3',
//   },
//   headerButton: {
//     padding: 8,
//   },
//   scrollView: {
//     flex: 1,
//   },
//   moodHeader: {
//     position: 'relative',
//     height: 280,
//   },
//   moodImageContainer: {
//     width: '100%',
//     height: '100%',
//     position: 'relative',
//   },
//   moodImage: {
//     width: '100%',
//     height: '100%',
//   },
//   moodOverlay: {
//     ...StyleSheet.absoluteFillObject,
//     backgroundColor: 'rgba(0,0,0,0.6)',
//   },
//   moodInfo: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     padding: 24,
//   },
//   moodName: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     color: '#fff',
//     marginBottom: 8,
//   },
//   moodDescription: {
//     fontSize: 16,
//     color: '#b3b3b3',
//     marginBottom: 20,
//   },
//   moodStats: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   statItem: {
//     alignItems: 'center',
//     flex: 1,
//   },
//   statNumber: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#fff',
//     marginBottom: 4,
//   },
//   statLabel: {
//     fontSize: 12,
//     color: '#b3b3b3',
//   },
//   actionSection: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingHorizontal: 20,
//     paddingVertical: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#282828',
//   },
//   shuffleButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#FF3B3B',
//     paddingHorizontal: 24,
//     paddingVertical: 12,
//     borderRadius: 25,
//     gap: 8,
//     flex: 1,
//     marginRight: 12,
//     justifyContent: 'center',
//   },
//   shuffleButtonText: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: '#000',
//   },
//   secondaryActions: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 12,
//   },
//   secondaryButton: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     backgroundColor: 'rgba(255,255,255,0.1)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   songsSection: {
//     padding: 20,
//   },
//   sectionHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 20,
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
//   songItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 12,
//     borderBottomWidth: 1,
//     borderBottomColor: '#282828',
//   },
//   songNumber: {
//     width: 30,
//     alignItems: 'center',
//     marginRight: 12,
//   },
//   songNumberText: {
//     fontSize: 14,
//     color: '#b3b3b3',
//     fontWeight: '600',
//   },
//   songImage: {
//     width: 50,
//     height: 50,
//     borderRadius: 6,
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
//     marginBottom: 2,
//   },
//   songAlbum: {
//     fontSize: 12,
//     color: '#666',
//   },
//   songMeta: {
//     alignItems: 'flex-end',
//     marginRight: 12,
//   },
//   songPlays: {
//     fontSize: 12,
//     color: '#b3b3b3',
//     marginBottom: 2,
//   },
//   songDuration: {
//     fontSize: 12,
//     color: '#666',
//   },
//   moreButton: {
//     padding: 4,
//   },
//   loadingContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 40,
//   },
//   loadingText: {
//     color: '#b3b3b3',
//     marginTop: 12,
//     fontSize: 16,
//   },
//   emptyState: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 60,
//   },
//   emptyStateText: {
//     fontSize: 18,
//     color: '#fff',
//     fontWeight: 'bold',
//     marginTop: 16,
//     marginBottom: 8,
//   },
//   emptyStateSubtext: {
//     fontSize: 14,
//     color: '#b3b3b3',
//     textAlign: 'center',
//   },
//   bottomPadding: {
//     height: 20,
//   },
// });

// export default MoodSongsScreen;


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
  RefreshControl
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { getDataWithToken } from '../Services/mobile-api';
import { mobile_siteConfig } from '../Services/mobile-siteConfig';
import { useAudio } from '../contexts/AudioContext';
import { wp, hp } from "../assets/Global.Css";

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

const MoodSongsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { moodId, moodName, moodImage } = route.params || {};
  
  // ✅ Global Audio Context
  const { playSong } = useAudio();

  // ✅ State Variables
  const [songs, setSongs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [moodInfo, setMoodInfo] = useState({ 
    name: moodName || 'Mood', 
    image: moodImage 
  });

  // ✅ Fetch Mood Songs
  useEffect(() => {
    if (moodId) {
      fetchMoodSongs();
    }
  }, [moodId]);

  // ✅ API: Fetch Mood Songs - FIXED VERSION
  const fetchMoodSongs = async () => {
    try {
      setIsLoading(true);
      console.log('🎵 Fetching mood songs for ID:', moodId);

      const response = await getDataWithToken(`user/mood/${moodId}/songs?page=1&limit=20`);
      console.log('🎵 Mood Songs API Response:', JSON.stringify(response, null, 2));

      if (response && response.success) {
        let songsData = [];
        
        // Multiple possible paths check karo
        if (Array.isArray(response.data?.songs)) {
          songsData = response.data.songs;
        } else if (Array.isArray(response.songs)) {
          songsData = response.songs;
        } else if (Array.isArray(response.data)) {
          songsData = response.data;
        }
        
        console.log('✅ Raw songs data:', songsData);
        
        // ✅ FIX: PROPERLY EXTRACT ARTIST NAME FROM OBJECT - STAGE NAME HATA KAR
        const validatedSongs = songsData.map((song, index) => {
          // ✅ CORRECT WAY: Artist name extract karo - sirf name use karo
          let artistName = 'Unknown Artist';
          if (song.artist) {
            if (typeof song.artist === 'object') {
              // ✅ Sirf artist.name use karo, stageName nahi
              artistName = song.artist.name || 'Unknown Artist';
            } else if (typeof song.artist === 'string') {
              artistName = song.artist;
            }
          }
          
          // ✅ CORRECT WAY: Album name extract karo
          let albumName = 'Unknown Album';
          if (song.album) {
            if (typeof song.album === 'string') {
              albumName = song.album;
            }
          }

          return {
            id: song?.id || `temp-${index}`,
            title: song?.title || 'Unknown Title',
            artist: artistName, // ✅ Yahan sirf artist name jayega
            album: albumName,
            duration: Number(song?.duration) || 180,
            playCount: Number(song?.playCount || song?.play_count || song?.views) || 0,
            coverImage: song?.coverImage || song?.image || song?.thumbnail || song?.artwork,
            // ✅ Complete song object bhi save karo for playing
            rawSong: song
          };
        });
        
        console.log('✅ Processed songs data:', validatedSongs);
        setSongs(validatedSongs);

        // ✅ Mood info safely set karo
        if (response.data?.mood) {
          setMoodInfo({
            id: response.data.mood.id || moodId,
            name: response.data.mood.name || response.data.mood.title || moodName || 'Mood',
            image: response.data.mood.image || response.data.mood.thumbnail || moodImage
          });
        }

      } else {
        console.log('❌ Mood songs API failed, using sample data');
        setSongs(getSampleSongs());
      }
    } catch (error) {
      console.error('❌ Mood songs fetch error:', error);
      setSongs(getSampleSongs());
    } finally {
      setIsLoading(false);
    }
  };

  // ✅ Sample Songs (Fallback)
  const getSampleSongs = () => [
    {
      id: 1,
      title: 'Happy Vibes',
      artist: 'Various Artists',
      album: 'Happy Mood Mix',
      duration: 180,
      playCount: 125000,
      coverImage: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop'
    },
    {
      id: 2,
      title: 'Sunshine Melody',
      artist: 'DJ Happy',
      album: 'Positive Energy',
      duration: 210,
      playCount: 89000,
      coverImage: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop'
    }
  ];

  // ✅ Refresh Function
  const onRefresh = async () => {
    setRefreshing(true);
    await fetchMoodSongs();
    setRefreshing(false);
  };

  // ✅ FIXED: Song Play Handler
  const handleSongPlay = async (song) => {
    console.log('🎵 Playing song from Mood Screen:', song);
    
    try {
      // ✅ Pehle song info fetch karo
      const songInfo = await getDataWithToken(`user/song/${song.id}/info`);
      console.log('🎵 Song Info from Mood Screen:', songInfo);
      
      if (songInfo && songInfo.success) {
        const songData = {
          id: song.id,
          title: song.title || 'Unknown Title',
          artist: song.artist || 'Unknown Artist', // ✅ Yahan bhi sirf name jayega
          audioUrl: songInfo.song?.audioFile 
            ? `${mobile_siteConfig.IMAGE_BASE_URL}${songInfo.song.audioFile}`
            : 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
          artwork: getImageUrl(song.coverImage || songInfo.song?.thumbnail)
        };
        
        console.log('🎵 Playing song data from Mood:', songData);
        
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
      console.error('❌ Error playing song from Mood:', error);
      
      // ✅ Fallback song data
      const fallbackSongData = {
        id: song.id,
        title: song.title || 'Unknown Title',
        artist: song.artist || 'Unknown Artist',
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

  // ✅ Format Time Helper
  const formatTime = (seconds) => {
    if (!seconds || typeof seconds !== 'number') return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // ✅ Format Play Count
  const formatPlayCount = (count) => {
    if (!count || typeof count !== 'number') return '0';
    if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M`;
    if (count >= 1000) return `${(count / 1000).toFixed(1)}K`;
    return count.toString();
  };

  // ✅ Render Song Item - FIXED (3 DOTS REMOVED)
  const renderSongItem = ({ item, index }) => {
    // ✅ STRICT VALIDATION
    if (!item || typeof item !== 'object' || Array.isArray(item)) {
      console.warn('❌ Invalid song item:', item);
      return null;
    }

    return (
      <TouchableOpacity 
        style={styles.songItem}
        onPress={() => handleSongPlay(item)}
      >
        <View style={styles.songNumber}>
          <Text style={styles.songNumberText}>
            {index + 1}
          </Text>
        </View>
        
        <Image 
          source={{ uri: getImageUrl(item.coverImage || item.image) }}
          style={styles.songImage}
          resizeMode="cover"
          defaultSource={{ uri: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop' }}
        />
        
        <View style={styles.songInfo}>
          <Text style={styles.songTitle} numberOfLines={1}>
            {item.title || 'Unknown Title'}
          </Text>
          <Text style={styles.songArtist} numberOfLines={1}>
            {item.artist || 'Unknown Artist'}
          </Text>
        </View>
        
        <View style={styles.songMeta}>
          <Text style={styles.songDuration}>
            {formatTime(item.duration || 180)}
          </Text>
        </View>
        
        {/* ✅ 3 DOTS COMPLETELY REMOVED */}
      </TouchableOpacity>
    );
  };

  // ✅ Play All Function (Shuffle Play ki jagah)
  const handlePlayAll = () => {
    if (songs.length > 0) {
      handleSongPlay(songs[0]);
    }
  };

  // ✅ Calculate total duration
  const calculateTotalDuration = () => {
    return songs.reduce((total, song) => total + (song.duration || 0), 0);
  };

  // ✅ Calculate total plays
  const calculateTotalPlays = () => {
    return songs.reduce((total, song) => total + (song.playCount || 0), 0);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => navigation.goBack()} 
          style={styles.backButton}
        >
          <Icon name="arrow-back" size={wp(6)} color="#fff" />
        </TouchableOpacity>
        
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle} numberOfLines={1}>
            {moodInfo?.name || 'Mood'}
          </Text>
          <Text style={styles.headerSubtitle}>Mood Playlist</Text>
        </View>
        
        <TouchableOpacity style={styles.headerButton}>
          <Icon name="search" size={wp(6)} color="#fff" />
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
        {/* Mood Header Section */}
        <View style={styles.moodHeader}>
          <View style={styles.moodImageContainer}>
            <Image 
              source={{ uri: getImageUrl(moodInfo?.image) }}
              style={styles.moodImage}
              resizeMode="cover"
              defaultSource={{ uri: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop' }}
            />
            <View style={styles.moodOverlay} />
          </View>
          
          <View style={styles.moodInfo}>
            <Text style={styles.moodName}>
              {moodInfo?.name || 'Mood'}
            </Text>
            <Text style={styles.moodDescription}>
              {`Curated playlist to match your ${(moodInfo?.name || 'current').toLowerCase()} mood`}
            </Text>
            
            <View style={styles.moodStats}>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>{songs.length}</Text>
                <Text style={styles.statLabel}>Songs</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>
                  {formatPlayCount(calculateTotalPlays())}
                </Text>
                <Text style={styles.statLabel}>Total Plays</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>
                  {formatTime(calculateTotalDuration())}
                </Text>
                <Text style={styles.statLabel}>Duration</Text>
              </View>
            </View>
          </View>
        </View>

        {/* ✅ SIMPLIFIED Action Buttons - Shuffle Play, Download, Share, Heart REMOVED */}
        <View style={styles.actionSection}>
          <TouchableOpacity 
            style={styles.playButton}
            onPress={handlePlayAll}
            disabled={songs.length === 0}
          >
            <Icon name="play-arrow" size={wp(6)} color="#000" />
            <Text style={styles.playButtonText}>Play All</Text>
          </TouchableOpacity>
        </View>

        {/* Songs List */}
        <View style={styles.songsSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              {`Songs (${songs.length})`}
            </Text>
          </View>

          {isLoading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="#FF3B3B" />
              <Text style={styles.loadingText}>Loading songs...</Text>
            </View>
          ) : songs.length > 0 ? (
            <FlatList
              data={songs}
              renderItem={renderSongItem}
              keyExtractor={(item, index) => 
                `mood-song-${item?.id || index}-${Math.random()}`
              }
              scrollEnabled={false}
              showsVerticalScrollIndicator={false}
              extraData={songs}
            />
          ) : (
            <View style={styles.emptyState}>
              <Icon name="music-off" size={wp(16)} color="#b3b3b3" />
              <Text style={styles.emptyStateText}>No songs available</Text>
              <Text style={styles.emptyStateSubtext}>
                Songs for this mood will be available soon
              </Text>
            </View>
          )}
        </View>

        {/* Bottom Padding */}
        <View style={styles.bottomPadding} />
      </ScrollView>
    </SafeAreaView>
  );
};

// ✅ RESPONSIVE STYLES
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(4),
    paddingVertical: hp(1.5),
    borderBottomWidth: 1,
    borderBottomColor: '#282828',
  },
  backButton: {
    padding: wp(2),
  },
  headerTitleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: wp(4.5),
    fontWeight: 'bold',
    color: '#fff',
  },
  headerSubtitle: {
    fontSize: wp(3),
    color: '#b3b3b3',
  },
  headerButton: {
    padding: wp(2),
  },
  scrollView: {
    flex: 1,
  },
  moodHeader: {
    position: 'relative',
    height: hp(35),
  },
  moodImageContainer: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  moodImage: {
    width: '100%',
    height: '100%',
  },
  moodOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  moodInfo: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: wp(6),
    paddingVertical: hp(3),
  },
  moodName: {
    fontSize: wp(8),
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: hp(1),
  },
  moodDescription: {
    fontSize: wp(4),
    color: '#b3b3b3',
    marginBottom: hp(2.5),
  },
  moodStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statNumber: {
    fontSize: wp(4.5),
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: hp(0.5),
  },
  statLabel: {
    fontSize: wp(3),
    color: '#b3b3b3',
  },
  actionSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: wp(5),
    paddingVertical: hp(2),
    borderBottomWidth: 1,
    borderBottomColor: '#282828',
  },
  playButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FF3B3B',
    paddingHorizontal: wp(8),
    paddingVertical: hp(1.5),
    borderRadius: wp(6),
    gap: wp(2),
    justifyContent: 'center',
  },
  playButtonText: {
    fontSize: wp(4),
    fontWeight: 'bold',
    color: '#000',
  },
  // ✅ REMOVED: secondaryActions, secondaryButton, shuffleButton, shuffleButtonText
  songsSection: {
    paddingHorizontal: wp(5),
    paddingVertical: hp(2),
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp(2),
  },
  sectionTitle: {
    fontSize: wp(5.5),
    fontWeight: 'bold',
    color: '#fff',
  },
  // ✅ REMOVED: seeAllText
  songItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: hp(1.5),
    borderBottomWidth: 1,
    borderBottomColor: '#282828',
  },
  songNumber: {
    width: wp(8),
    alignItems: 'center',
    marginRight: wp(3),
  },
  songNumberText: {
    fontSize: wp(3.5),
    color: '#b3b3b3',
    fontWeight: '600',
  },
  songImage: {
    width: wp(12.5),
    height: wp(12.5),
    borderRadius: wp(1.5),
    marginRight: wp(3),
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
  songArtist: {
    fontSize: wp(3.5),
    color: '#b3b3b3',
  },
  // ✅ REMOVED: songAlbum
  songMeta: {
    alignItems: 'flex-end',
    marginRight: wp(3),
  },
  // ✅ REMOVED: songPlays
  songDuration: {
    fontSize: wp(3.5),
    color: '#666',
  },
  // ✅ REMOVED: moreButton
  loadingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: hp(5),
  },
  loadingText: {
    color: '#b3b3b3',
    marginTop: hp(1.5),
    fontSize: wp(4),
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: hp(7.5),
  },
  emptyStateText: {
    fontSize: wp(4.5),
    color: '#fff',
    fontWeight: 'bold',
    marginTop: hp(2),
    marginBottom: hp(1),
  },
  emptyStateSubtext: {
    fontSize: wp(3.8),
    color: '#b3b3b3',
    textAlign: 'center',
  },
  bottomPadding: {
    height: hp(2.5),
  },
});

export default MoodSongsScreen;