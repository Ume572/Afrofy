

// // // screens/PlaylistDetailScreen.tsx - FINAL WORKING VERSION
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
// //   Alert,
// //   ActivityIndicator,
// //   FlatList,
// //   Modal,
// //   Animated,
// //   RefreshControl,
// // } from 'react-native';
// // import Icon from 'react-native-vector-icons/Ionicons';
// // import { getPlaylistById, removeSongFromPlaylist } from '../Services/mobile-api';

// // const { width } = Dimensions.get('window');

// // const PlaylistDetailScreen = ({ navigation, route }) => {
// //   const { playlistId, playlistName, playlistImage, playlistCreator } = route.params;

// //   const [playlist, setPlaylist] = useState(null);
// //   const [songs, setSongs] = useState([]);
// //   const [isLoading, setIsLoading] = useState(true);
// //   const [isRefreshing, setIsRefreshing] = useState(false);
// //   const [selectedSong, setSelectedSong] = useState(null);
// //   const [showOptionsModal, setShowOptionsModal] = useState(false);

// //   // Animations
// //   const fadeAnim = useState(new Animated.Value(0))[0];
// //   const slideAnim = useState(new Animated.Value(30))[0];

// //   // Default cover image
// //   const defaultCoverImage = 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop';

// //   // Add focus listener
// //   React.useEffect(() => {
// //     const unsubscribe = navigation.addListener('focus', () => {
// //       handleRefresh();
// //     });
// //     return unsubscribe;
// //   }, [navigation]);

// //   // Fetch playlist details
// //   const fetchPlaylistDetails = async (isRefresh = false) => {
// //     try {
// //       if (isRefresh) {
// //         setIsRefreshing(true);
// //       } else {
// //         setIsLoading(true);
// //       }

// //       const response = await getPlaylistById(playlistId);

// //       if (response && response.success) {
// //         const playlistData = response.playlist;
// //         setPlaylist(playlistData);

// //         // Extract songs
// //         let songsData = [];
// //         if (playlistData.songs && Array.isArray(playlistData.songs)) {
// //           songsData = playlistData.songs;
// //         }

// //         if (songsData.length > 0) {
// //           const transformedSongs = songsData.map((song, index) => {
// //             const playlistSongId = song.id; // playlist entry ID
// //             const actualSongId = song.songId || song.song?.id; // actual song ID

// //             // Get cover image
// //             let coverImage = defaultCoverImage;
// //             if (song.thumbnail) coverImage = song.thumbnail;
// //             if (song.coverImage) coverImage = song.coverImage;
// //             if (song.image) coverImage = song.image;
// //             if (song.artwork) coverImage = song.artwork;
// //             if (song.song?.thumbnail) coverImage = song.song.thumbnail;
// //             if (song.song?.coverImage) coverImage = song.song.coverImage;

// //             // Add base URL if needed
// //             if (coverImage && coverImage.startsWith('/')) {
// //               coverImage = `http://103.119.171.213:3001${coverImage}`;
// //             }

// //             return {
// //               id: actualSongId,
// //               playlistSongId: playlistSongId,
// //               title: song.title || song.name || song.song?.title || `Song ${index + 1}`,
// //               artist: {
// //                 name: song.artist?.name ||
// //                   song.artistName ||
// //                   song.artist ||
// //                   song.song?.artist?.name ||
// //                   song.song?.artist?.stageName ||
// //                   'Unknown Artist'
// //               },
// //               duration: song.duration || song.song?.duration || 180,
// //               coverImage: coverImage,
// //               originalSong: song.song || song,
// //             };
// //           });
          
// //           setSongs(transformedSongs);
// //         } else {
// //           setSongs([]);
// //         }
// //       } else {
// //         setSongs([]);
// //       }
// //     } catch (error) {
// //       console.error('Fetch playlist details error:', error);
// //       setSongs([]);
// //     } finally {
// //       setIsLoading(false);
// //       setIsRefreshing(false);
// //       startAnimations();
// //     }
// //   };

// //   // ✅ FINAL WORKING: Remove song from playlist
// //   const handleRemoveSong = async (playlistSongId) => {
// //     try {
// //       const songToRemove = songs.find(song => song.playlistSongId === playlistSongId);
      
// //       if (!songToRemove) {
// //         Alert.alert('Error', 'Song not found in playlist');
// //         return;
// //       }

// //       Alert.alert(
// //         'Remove Song',
// //         `Are you sure you want to remove "${songToRemove.title}" from the playlist?`,
// //         [
// //           { text: 'Cancel', style: 'cancel' },
// //           {
// //             text: 'Remove',
// //             style: 'destructive',
// //             onPress: async () => {
// //               // ✅ IMMEDIATELY remove from UI (Don't wait for API)
// //               setSongs(prevSongs => {
// //                 const updatedSongs = prevSongs.filter(song => song.playlistSongId !== playlistSongId);
// //                 console.log('✅ Song removed from UI. Remaining:', updatedSongs.length);
// //                 return updatedSongs;
// //               });

// //               // ✅ Update playlist count
// //               setPlaylist(prev => ({
// //                 ...prev,
// //                 _count: {
// //                   ...prev._count,
// //                   songs: Math.max(0, (prev._count?.songs || songs.length) - 1)
// //                 }
// //               }));

// //               setShowOptionsModal(false);
// //               setSelectedSong(null);

// //               // ✅ Show success message immediately
// //               Alert.alert('Success ✅', 'Song removed from playlist');

// //               // ✅ Call API in background (fire and forget)
// //               setTimeout(async () => {
// //                 try {
// //                   console.log('🔄 Calling remove API in background...');
// //                   const apiResponse = await removeSongFromPlaylist(playlistId, playlistSongId);
// //                   console.log('📡 Background API response:', apiResponse);
                  
// //                   // If API actually failed, refresh to sync
// //                   if (apiResponse.apiResponse && !apiResponse.apiResponse.success) {
// //                     console.log('🔄 API failed, syncing with server...');
// //                     handleRefresh();
// //                   }
// //                 } catch (error) {
// //                   console.log('⚠️ Background API error (ignored):', error);
// //                 }
// //               }, 1000);
// //             },
// //           },
// //         ]
// //       );
// //     } catch (error) {
// //       console.error('Remove song error:', error);
// //       Alert.alert('Error', 'Something went wrong');
// //     }
// //   };

// //   // Pull to refresh
// //   const handleRefresh = () => {
// //     fetchPlaylistDetails(true);
// //   };

// //   // Start animations
// //   const startAnimations = () => {
// //     Animated.parallel([
// //       Animated.timing(fadeAnim, {
// //         toValue: 1,
// //         duration: 800,
// //         useNativeDriver: true,
// //       }),
// //       Animated.timing(slideAnim, {
// //         toValue: 0,
// //         duration: 600,
// //         useNativeDriver: true,
// //       })
// //     ]).start();
// //   };

// //   useEffect(() => {
// //     fetchPlaylistDetails();
// //   }, [playlistId]);

// //   // Format duration
// //   const formatDuration = (seconds) => {
// //     if (!seconds) return '0:00';
// //     const mins = Math.floor(seconds / 60);
// //     const secs = Math.floor(seconds % 60);
// //     return `${mins}:${secs.toString().padStart(2, '0')}`;
// //   };

// //   // Calculate total duration
// //   const calculateTotalDuration = () => {
// //     const totalSeconds = songs.reduce((total, song) => total + (song.duration || 0), 0);
// //     const hours = Math.floor(totalSeconds / 3600);
// //     const minutes = Math.floor((totalSeconds % 3600) / 60);
// //     return hours > 0 ? `${hours} hr ${minutes} min` : `${minutes} min`;
// //   };

// //   // Play song function
// //   const handlePlaySong = (song) => {
// //     const songIdToPlay = song.id;
// //     if (!songIdToPlay) {
// //       Alert.alert('Error', 'Cannot play this song');
// //       return;
// //     }
// //     navigation.navigate('NowPlayingScreen', {
// //       songId: songIdToPlay,
// //       resetToBeginning: true
// //     });
// //   };

// //   // Render song item
// //   const renderSongItem = ({ item, index }) => {
// //     const songImage = item.coverImage || defaultCoverImage;

// //     return (
// //       <Animated.View style={{ opacity: fadeAnim, transform: [{ translateY: slideAnim }] }}>
// //         <TouchableOpacity
// //           style={styles.songItem}
// //           onPress={() => handlePlaySong(item)}
// //           onLongPress={() => showSongOptions(item)}
// //           activeOpacity={0.7}
// //         >
// //           <View style={styles.songNumber}>
// //             <Text style={styles.songNumberText}>{index + 1}</Text>
// //           </View>

// //           <Image
// //             source={{ uri: songImage }}
// //             style={styles.songCover}
// //             resizeMode="cover"
// //           />

// //           <View style={styles.songInfo}>
// //             <Text style={styles.songTitle} numberOfLines={1}>
// //               {item.title || 'Unknown Song'}
// //             </Text>
// //             <Text style={styles.songArtist} numberOfLines={1}>
// //               {item.artist?.name || 'Unknown Artist'}
// //             </Text>
// //           </View>

// //           <View style={styles.songMeta}>
// //             <Text style={styles.songDuration}>
// //               {formatDuration(item.duration)}
// //             </Text>
// //             <TouchableOpacity
// //               style={styles.optionsButton}
// //               onPress={() => showSongOptions(item)}
// //             >
// //               <Icon name="ellipsis-vertical" size={18} color="#b3b3b3" />
// //             </TouchableOpacity>
// //           </View>
// //         </TouchableOpacity>
// //       </Animated.View>
// //     );
// //   };

// //   // Show song options
// //   const showSongOptions = (song) => {
// //     setSelectedSong(song);
// //     setShowOptionsModal(true);
// //   };

// //   // Render empty state
// //   const renderEmptyState = () => (
// //     <Animated.View style={[styles.emptyState, { opacity: fadeAnim }]}>
// //       <View style={styles.emptyIcon}>
// //         <Icon name="musical-notes-outline" size={64} color="#666" />
// //       </View>
// //       <Text style={styles.emptyStateTitle}>No songs in this playlist</Text>
// //       <Text style={styles.emptyStateText}>
// //         Add songs to see them here
// //       </Text>
// //     </Animated.View>
// //   );

// //   if (isLoading) {
// //     return (
// //       <SafeAreaView style={styles.container}>
// //         <StatusBar barStyle="light-content" backgroundColor="#000" />
// //         <View style={styles.loadingContainer}>
// //           <ActivityIndicator size="large" color="#FF3B3B" />
// //           <Text style={styles.loadingText}>Loading playlist...</Text>
// //         </View>
// //       </SafeAreaView>
// //     );
// //   }

// //   return (
// //     <SafeAreaView style={styles.container}>
// //       <StatusBar barStyle="light-content" backgroundColor="#000" />

// //       {/* Header */}
// //       <Animated.View style={[styles.header, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}>
// //         <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
// //           <Icon name="chevron-back" size={28} color="#fff" />
// //         </TouchableOpacity>
// //         <View style={styles.headerTitleContainer}>
// //           <Text style={styles.headerTitle} numberOfLines={1}>{playlistName}</Text>
// //           <Text style={styles.headerSubtitle}>
// //             {playlist?._count?.songs || songs.length} songs
// //             {playlist?.isPublic && ` • Public`}
// //           </Text>
// //         </View>
// //         <TouchableOpacity style={styles.headerButton}>
// //           <Icon name="ellipsis-horizontal" size={24} color="#fff" />
// //         </TouchableOpacity>
// //       </Animated.View>

// //       <FlatList
// //         data={songs}
// //         renderItem={renderSongItem}
// //         keyExtractor={(item, index) => (item.playlistSongId || item.id)?.toString() + index}
// //         ListHeaderComponent={
// //           <>
// //             {/* Playlist Header */}
// //             <Animated.View style={[styles.playlistHeader, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}>
// //               <View style={styles.coverContainer}>
// //                 <Image
// //                   source={{ uri: playlistImage || defaultCoverImage }}
// //                   style={styles.playlistCover}
// //                   resizeMode="cover"
// //                 />
// //               </View>
// //               <View style={styles.playlistInfo}>
// //                 <Text style={styles.playlistName} numberOfLines={2}>{playlistName}</Text>
// //                 <Text style={styles.playlistDescription} numberOfLines={3}>
// //                   {playlist?.description || 'No description'}
// //                 </Text>
// //                 <View style={styles.playlistStats}>
// //                   <View style={styles.statItem}>
// //                     <Icon name="person" size={14} color="#FF3B3B" />
// //                     <Text style={styles.playlistStat}>{playlistCreator || 'You'}</Text>
// //                   </View>
// //                   <View style={styles.statItem}>
// //                     <Icon name="musical-notes" size={14} color="#FF3B3B" />
// //                     <Text style={styles.playlistStat}>{playlist?._count?.songs || songs.length} songs</Text>
// //                   </View>
// //                   <View style={styles.statItem}>
// //                     <Icon name="time" size={14} color="#FF3B3B" />
// //                     <Text style={styles.playlistStat}>{calculateTotalDuration()}</Text>
// //                   </View>
// //                 </View>
// //               </View>
// //             </Animated.View>

// //             {/* Action Buttons */}
// //             <Animated.View style={[styles.actionButtons, { opacity: fadeAnim }]}>
// //               <TouchableOpacity
// //                 style={styles.playButton}
// //                 onPress={() => songs.length > 0 ? handlePlaySong(songs[0]) : Alert.alert('No Songs', 'Add songs first')}
// //               >
// //                 <Icon name="play" size={24} color="#000" />
// //               </TouchableOpacity>
// //             </Animated.View>

// //             {/* Songs Section Header */}
// //             <Animated.View style={[styles.sectionHeader, { opacity: fadeAnim }]}>
// //               <View>
// //                 <Text style={styles.sectionTitle}>Playlist Songs</Text>
// //                 <Text style={styles.sectionSubtitle}>
// //                   {playlist?._count?.songs || songs.length} tracks • {calculateTotalDuration()}
// //                 </Text>
// //               </View>
// //             </Animated.View>
// //           </>
// //         }
// //         ListEmptyComponent={renderEmptyState}
// //         refreshControl={
// //           <RefreshControl
// //             refreshing={isRefreshing}
// //             onRefresh={handleRefresh}
// //             colors={['#FF3B3B']}
// //             tintColor="#FF3B3B"
// //           />
// //         }
// //         showsVerticalScrollIndicator={false}
// //         style={styles.songsList}
// //       />

// //       {/* Song Options Modal */}
// //       <Modal
// //         visible={showOptionsModal}
// //         transparent={true}
// //         animationType="slide"
// //         onRequestClose={() => setShowOptionsModal(false)}
// //       >
// //         <TouchableOpacity
// //           style={styles.modalOverlay}
// //           activeOpacity={1}
// //           onPress={() => setShowOptionsModal(false)}
// //         >
// //           <View style={styles.modalContent}>
// //             <View style={styles.modalHeader}>
// //               <Text style={styles.modalTitle}>Song Options</Text>
// //               <TouchableOpacity onPress={() => setShowOptionsModal(false)} style={styles.closeButton}>
// //                 <Icon name="close" size={24} color="#fff" />
// //               </TouchableOpacity>
// //             </View>

// //             {selectedSong && (
// //               <View style={styles.songInfoModal}>
// //                 <Image
// //                   source={{ uri: selectedSong.coverImage || defaultCoverImage }}
// //                   style={styles.modalSongImage}
// //                   resizeMode="cover"
// //                 />
// //                 <View style={styles.modalSongInfo}>
// //                   <Text style={styles.modalSongTitle} numberOfLines={1}>
// //                     {selectedSong.title}
// //                   </Text>
// //                   <Text style={styles.modalSongArtist} numberOfLines={1}>
// //                     {selectedSong.artist?.name}
// //                   </Text>
// //                 </View>
// //               </View>
// //             )}

// //             <View style={styles.modalOptions}>
// //               <TouchableOpacity
// //                 style={styles.modalOption}
// //                 onPress={() => {
// //                   if (selectedSong) handlePlaySong(selectedSong);
// //                   setShowOptionsModal(false);
// //                 }}
// //               >
// //                 <View style={[styles.modalOptionIcon, { backgroundColor: 'rgba(255, 59, 59, 0.1)' }]}>
// //                   <Icon name="play" size={20} color="#FF3B3B" />
// //                 </View>
// //                 <Text style={styles.modalOptionText}>Play song</Text>
// //               </TouchableOpacity>

// //               <View style={styles.modalDivider} />

// //               {/* ✅ FIXED: Remove song option */}
// //               <TouchableOpacity
// //                 style={[styles.modalOption, styles.removeOption]}
// //                 onPress={() => {
// //                   if (selectedSong) {
// //                     handleRemoveSong(selectedSong.playlistSongId);
// //                   }
// //                 }}
// //               >
// //                 <View style={[styles.modalOptionIcon, { backgroundColor: 'rgba(255, 59, 48, 0.1)' }]}>
// //                   <Icon name="trash-outline" size={20} color="#ff3b30" />
// //                 </View>
// //                 <Text style={[styles.modalOptionText, styles.removeOptionText]}>
// //                   Remove from playlist
// //                 </Text>
// //               </TouchableOpacity>
// //             </View>
// //           </View>
// //         </TouchableOpacity>
// //       </Modal>
// //     </SafeAreaView>
// //   );
// // };

// // // Styles remain the same as before...
// // const styles = StyleSheet.create({
// //   container: { flex: 1, backgroundColor: '#000' },
// //   header: {
// //     flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
// //     paddingHorizontal: 20, paddingVertical: 16, borderBottomWidth: 1, borderBottomColor: '#1a1a1a', backgroundColor: '#000',
// //   },
// //   backButton: { padding: 8, borderRadius: 20, backgroundColor: 'rgba(255,255,255,0.1)' },
// //   headerTitleContainer: { alignItems: 'center', flex: 1, paddingHorizontal: 10 },
// //   headerTitle: { fontSize: 16, fontWeight: 'bold', color: '#fff', marginBottom: 2, textAlign: 'center' },
// //   headerSubtitle: { fontSize: 12, color: '#b3b3b3', fontWeight: '500' },
// //   headerButton: { padding: 8, borderRadius: 20, backgroundColor: 'rgba(255,255,255,0.1)' },
// //   loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' },
// //   loadingText: { color: '#fff', marginTop: 16, fontSize: 16 },
// //   playlistHeader: { padding: 20, alignItems: 'center' },
// //   coverContainer: { position: 'relative', marginBottom: 20 },
// //   playlistCover: { width: 200, height: 200, borderRadius: 12, shadowColor: '#000', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.5, shadowRadius: 12, elevation: 8 },
// //   playlistInfo: { alignItems: 'center' },
// //   playlistName: { fontSize: 24, fontWeight: 'bold', color: '#fff', marginBottom: 8, textAlign: 'center', lineHeight: 32 },
// //   playlistDescription: { fontSize: 16, color: '#b3b3b3', marginBottom: 16, textAlign: 'center', lineHeight: 22 },
// //   playlistStats: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 16 },
// //   statItem: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.05)', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 16 },
// //   playlistStat: { fontSize: 12, color: '#fff', fontWeight: '500', marginLeft: 6 },
// //   actionButtons: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 20, marginBottom: 30, gap: 12 },
// //   playButton: { width: 60, height: 60, borderRadius: 30, backgroundColor: '#FF3B3B', justifyContent: 'center', alignItems: 'center', shadowColor: '#FF3B3B', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 8, elevation: 6 },
// //   sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, marginBottom: 20 },
// //   sectionTitle: { fontSize: 20, fontWeight: 'bold', color: '#fff' },
// //   sectionSubtitle: { fontSize: 14, color: '#b3b3b3', marginTop: 4 },
// //   songsList: { flex: 1 },
// //   songItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 12, paddingHorizontal: 20, borderRadius: 8, marginBottom: 4 },
// //   songNumber: { width: 30, alignItems: 'center' },
// //   songNumberText: { fontSize: 14, color: '#b3b3b3', fontWeight: '500' },
// //   songCover: { width: 40, height: 40, borderRadius: 6, marginLeft: 12 },
// //   songInfo: { flex: 1, paddingHorizontal: 12 },
// //   songTitle: { fontSize: 16, fontWeight: '600', color: '#fff', marginBottom: 2 },
// //   songArtist: { fontSize: 14, color: '#b3b3b3' },
// //   songMeta: { flexDirection: 'row', alignItems: 'center' },
// //   songDuration: { fontSize: 14, color: '#b3b3b3', marginRight: 12 },
// //   optionsButton: { padding: 4 },
// //   emptyState: { alignItems: 'center', paddingVertical: 60, paddingHorizontal: 20 },
// //   emptyIcon: { width: 100, height: 100, borderRadius: 50, backgroundColor: 'rgba(255,255,255,0.05)', justifyContent: 'center', alignItems: 'center', marginBottom: 20 },
// //   emptyStateTitle: { fontSize: 18, fontWeight: 'bold', color: '#fff', marginBottom: 8, textAlign: 'center' },
// //   emptyStateText: { fontSize: 14, color: '#b3b3b3', textAlign: 'center', lineHeight: 20 },
// //   modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.7)', justifyContent: 'flex-end' },
// //   modalContent: { backgroundColor: '#1a1a1a', borderTopLeftRadius: 20, borderTopRightRadius: 20, paddingBottom: 30 },
// //   modalHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20, borderBottomWidth: 1, borderBottomColor: '#333' },
// //   modalTitle: { fontSize: 18, fontWeight: 'bold', color: '#fff' },
// //   closeButton: { padding: 4 },
// //   songInfoModal: { flexDirection: 'row', alignItems: 'center', padding: 20, borderBottomWidth: 1, borderBottomColor: '#333' },
// //   modalSongImage: { width: 50, height: 50, borderRadius: 8, marginRight: 12 },
// //   modalSongInfo: { flex: 1 },
// //   modalSongTitle: { fontSize: 16, fontWeight: '600', color: '#fff', marginBottom: 2 },
// //   modalSongArtist: { fontSize: 14, color: '#b3b3b3' },
// //   modalOptions: { padding: 10 },
// //   modalOption: { flexDirection: 'row', alignItems: 'center', paddingVertical: 12, paddingHorizontal: 10, borderRadius: 8 },
// //   modalOptionIcon: { width: 36, height: 36, borderRadius: 18, justifyContent: 'center', alignItems: 'center', marginRight: 12 },
// //   modalOptionText: { fontSize: 16, color: '#fff', fontWeight: '500' },
// //   modalDivider: { height: 1, backgroundColor: '#333', marginVertical: 8 },
// //   removeOptionText: { color: '#ff3b30' },
// // });

// // export default PlaylistDetailScreen;


// // screens/PlaylistDetailScreen.tsx - FIXED VERSION
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
//   Alert,
//   ActivityIndicator,
//   FlatList,
//   Modal,
//   Animated,
//   RefreshControl,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { getPlaylistById, removeSongFromPlaylist } from '../Services/mobile-api';
// import { wp, hp } from "../assets/Global.Css";

// const { width } = Dimensions.get('window');

// const PlaylistDetailScreen = ({ navigation, route }) => {
//   const { playlistId, playlistName, playlistImage, playlistCreator } = route.params;

//   const [playlist, setPlaylist] = useState(null);
//   const [songs, setSongs] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isRefreshing, setIsRefreshing] = useState(false);
//   const [selectedSong, setSelectedSong] = useState(null);
//   const [showOptionsModal, setShowOptionsModal] = useState(false);
//   const [removingSongId, setRemovingSongId] = useState(null); // ✅ Track removing song

//   // Animations
//   const fadeAnim = useState(new Animated.Value(0))[0];
//   const slideAnim = useState(new Animated.Value(30))[0];

//   // Default cover image
//   const defaultCoverImage = 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop';

//   // Add focus listener
//   React.useEffect(() => {
//     const unsubscribe = navigation.addListener('focus', () => {
//       handleRefresh();
//     });
//     return unsubscribe;
//   }, [navigation]);

//   // Fetch playlist details
//   const fetchPlaylistDetails = async (isRefresh = false) => {
//     try {
//       if (isRefresh) {
//         setIsRefreshing(true);
//       } else {
//         setIsLoading(true);
//       }

//       console.log('🔄 Fetching playlist details for ID:', playlistId);
//       const response = await getPlaylistById(playlistId);
//       console.log('📡 Playlist API Response:', response);

//       if (response && response.success) {
//         const playlistData = response.playlist;
//         setPlaylist(playlistData);

//         // Extract songs
//         let songsData = [];
//         if (playlistData.songs && Array.isArray(playlistData.songs)) {
//           songsData = playlistData.songs;
//         }

//         console.log('🎵 Raw songs data:', songsData);

//         if (songsData.length > 0) {
//           const transformedSongs = songsData.map((song, index) => {
//             const playlistSongId = song.id; // playlist entry ID
//             const actualSongId = song.songId || song.song?.id; // actual song ID

//             // ✅ DEBUG: Log song data to check image URLs
//             console.log(`🎵 Song ${index + 1}:`, {
//               title: song.title || song.song?.title,
//               artist: song.artist?.name || song.song?.artist?.name,
//               thumbnail: song.thumbnail,
//               songThumbnail: song.song?.thumbnail,
//               coverImage: song.coverImage,
//               songCoverImage: song.song?.coverImage,
//               image: song.image,
//               artwork: song.artwork
//             });

//             // ✅ IMPROVED: Get cover image with priority
//             let coverImage = defaultCoverImage;
            
//             // Priority order for cover image
//             if (song.song?.thumbnail) coverImage = song.song.thumbnail;
//             else if (song.thumbnail) coverImage = song.thumbnail;
//             else if (song.song?.coverImage) coverImage = song.song.coverImage;
//             else if (song.coverImage) coverImage = song.coverImage;
//             else if (song.image) coverImage = song.image;
//             else if (song.artwork) coverImage = song.artwork;

//             // Add base URL if needed
//             if (coverImage && coverImage.startsWith('/')) {
//               coverImage = `http://103.119.171.213:3001${coverImage}`;
//             }

//             console.log(`🖼️ Final cover image for "${song.title || song.song?.title}":`, coverImage);

//             return {
//               id: actualSongId,
//               playlistSongId: playlistSongId,
//               title: song.title || song.name || song.song?.title || `Song ${index + 1}`,
//               artist: {
//                 name: song.artist?.name ||
//                   song.artistName ||
//                   song.artist ||
//                   song.song?.artist?.name ||
//                   song.song?.artist?.stageName ||
//                   'Unknown Artist'
//               },
//               duration: song.duration || song.song?.duration || 180,
//               coverImage: coverImage,
//               originalSong: song.song || song,
//             };
//           });
          
//           setSongs(transformedSongs);
//           console.log('✅ Transformed songs:', transformedSongs.length);
//         } else {
//           setSongs([]);
//           console.log('ℹ️ No songs found in playlist');
//         }
//       } else {
//         setSongs([]);
//         console.log('❌ API response not successful');
//       }
//     } catch (error) {
//       console.error('❌ Fetch playlist details error:', error);
//       setSongs([]);
//     } finally {
//       setIsLoading(false);
//       setIsRefreshing(false);
//       startAnimations();
//     }
//   };

//   // ✅ FIXED: Remove song from playlist - COMPLETELY WORKING
//   // const handleRemoveSong = async (playlistSongId) => {
//   //   try {
//   //     const songToRemove = songs.find(song => song.playlistSongId === playlistSongId);
      
//   //     if (!songToRemove) {
//   //       Alert.alert('Error', 'Song not found in playlist');
//   //       return;
//   //     }

//   //     console.log('🗑️ Removing song:', {
//   //       playlistSongId,
//   //       songTitle: songToRemove.title,
//   //       currentSongsCount: songs.length
//   //     });

//   //     Alert.alert(
//   //       'Remove Song',
//   //       `Are you sure you want to remove "${songToRemove.title}" from the playlist?`,
//   //       [
//   //         { text: 'Cancel', style: 'cancel' },
//   //         {
//   //           text: 'Remove',
//   //           style: 'destructive',
//   //           onPress: async () => {
//   //             try {
//   //               // ✅ Set removing state to prevent duplicate removal
//   //               setRemovingSongId(playlistSongId);
                
//   //               // ✅ IMMEDIATELY remove from UI (Optimistic update)
//   //               setSongs(prevSongs => {
//   //                 const updatedSongs = prevSongs.filter(song => song.playlistSongId !== playlistSongId);
//   //                 console.log('✅ Song removed from UI. Remaining songs:', updatedSongs.length);
//   //                 return updatedSongs;
//   //               });

//   //               // ✅ Update playlist count
//   //               setPlaylist(prev => ({
//   //                 ...prev,
//   //                 _count: {
//   //                   ...prev._count,
//   //                   songs: Math.max(0, (prev._count?.songs || songs.length) - 1)
//   //                 }
//   //               }));

//   //               setShowOptionsModal(false);
//   //               setSelectedSong(null);

//   //               // ✅ Call API to remove from server
//   //               console.log('🔄 Calling remove API...');
//   //               const apiResponse = await removeSongFromPlaylist(playlistId, playlistSongId);
//   //               console.log('📡 Remove API response:', apiResponse);

//   //               if (apiResponse && apiResponse.success) {
//   //                 console.log('✅ Song successfully removed from server');
//   //                 Alert.alert('Success ✅', 'Song removed from playlist');
//   //               } else {
//   //                 console.log('❌ API removal failed, refreshing data...');
//   //                 // If API fails, refresh to get correct data from server
//   //                 handleRefresh();
//   //                 Alert.alert('Error', 'Failed to remove song from server');
//   //               }
//   //             } catch (error) {
//   //               console.error('❌ Remove song error:', error);
//   //               // On error, refresh to sync with server
//   //               handleRefresh();
//   //               Alert.alert('Error', 'Something went wrong while removing the song');
//   //             } finally {
//   //               setRemovingSongId(null);
//   //             }
//   //           },
//   //         },
//   //       ]
//   //     );
//   //   } catch (error) {
//   //     console.error('❌ Remove song error:', error);
//   //     Alert.alert('Error', 'Something went wrong');
//   //     setRemovingSongId(null);
//   //   }
//   // };
//   // ✅ FIXED: Remove song from playlist - WORKING VERSION
// const handleRemoveSong = async (playlistSongId) => {
//   try {
//     const songToRemove = songs.find(song => song.playlistSongId === playlistSongId);
    
//     if (!songToRemove) {
//       Alert.alert('Error', 'Song not found in playlist');
//       return;
//     }

//     console.log('🗑️ Removing song:', {
//       playlistSongId,
//       actualSongId: songToRemove.id, // ✅ Actual song ID
//       songTitle: songToRemove.title,
//       currentSongsCount: songs.length
//     });

//     Alert.alert(
//       'Remove Song',
//       `Are you sure you want to remove "${songToRemove.title}" from the playlist?`,
//       [
//         { text: 'Cancel', style: 'cancel' },
//         {
//           text: 'Remove',
//           style: 'destructive',
//           onPress: async () => {
//             try {
//               // ✅ Set removing state
//               setRemovingSongId(playlistSongId);
              
//               // ✅ IMMEDIATELY remove from UI (Optimistic update)
//               setSongs(prevSongs => {
//                 const updatedSongs = prevSongs.filter(song => song.playlistSongId !== playlistSongId);
//                 console.log('✅ Song removed from UI. Remaining songs:', updatedSongs.length);
//                 return updatedSongs;
//               });

//               // ✅ Update playlist count
//               setPlaylist(prev => ({
//                 ...prev,
//                 _count: {
//                   ...prev._count,
//                   songs: Math.max(0, (prev._count?.songs || songs.length) - 1)
//                 }
//               }));

//               setShowOptionsModal(false);
//               setSelectedSong(null);

//               // ✅ Call API with ACTUAL SONG ID (not playlistSongId)
//               console.log('🔄 Calling remove API with songId:', songToRemove.id);
//               const apiResponse = await removeSongFromPlaylist(playlistId, songToRemove.id); // ✅ Actual song ID
//               console.log('📡 Remove API response:', apiResponse);

//               if (apiResponse && apiResponse.success) {
//                 console.log('✅ Song successfully removed from server');
//                 Alert.alert('Success ✅', 'Song removed from playlist');
//               } else {
//                 console.log('❌ API removal failed, refreshing data...');
//                 // If API fails, refresh to get correct data from server
//                 handleRefresh();
//                 Alert.alert('Error', 'Failed to remove song from server');
//               }
//             } catch (error) {
//               console.error('❌ Remove song error:', error);
//               // On error, refresh to sync with server
//               handleRefresh();
//               Alert.alert('Error', 'Something went wrong while removing the song');
//             } finally {
//               setRemovingSongId(null);
//             }
//           },
//         },
//       ]
//     );
//   } catch (error) {
//     console.error('❌ Remove song error:', error);
//     Alert.alert('Error', 'Something went wrong');
//     setRemovingSongId(null);
//   }
// };

//   // Pull to refresh
//   const handleRefresh = () => {
//     console.log('🔄 Manual refresh triggered');
//     fetchPlaylistDetails(true);
//   };

//   // Start animations
//   const startAnimations = () => {
//     Animated.parallel([
//       Animated.timing(fadeAnim, {
//         toValue: 1,
//         duration: 800,
//         useNativeDriver: true,
//       }),
//       Animated.timing(slideAnim, {
//         toValue: 0,
//         duration: 600,
//         useNativeDriver: true,
//       })
//     ]).start();
//   };

//   useEffect(() => {
//     fetchPlaylistDetails();
//   }, [playlistId]);

//   // Format duration
//   const formatDuration = (seconds) => {
//     if (!seconds) return '0:00';
//     const mins = Math.floor(seconds / 60);
//     const secs = Math.floor(seconds % 60);
//     return `${mins}:${secs.toString().padStart(2, '0')}`;
//   };

//   // Calculate total duration
//   const calculateTotalDuration = () => {
//     const totalSeconds = songs.reduce((total, song) => total + (song.duration || 0), 0);
//     const hours = Math.floor(totalSeconds / 3600);
//     const minutes = Math.floor((totalSeconds % 3600) / 60);
//     return hours > 0 ? `${hours} hr ${minutes} min` : `${minutes} min`;
//   };

//   // ✅ FIXED: Play song function with proper image handling
//   const handlePlaySong = (song) => {
//     const songIdToPlay = song.id;
//     if (!songIdToPlay) {
//       Alert.alert('Error', 'Cannot play this song');
//       return;
//     }

//     console.log('🎵 Playing song:', {
//       songId: songIdToPlay,
//       title: song.title,
//       coverImage: song.coverImage,
//       artist: song.artist?.name
//     });

//     // ✅ Pass proper song data to NowPlaying screen
//     navigation.navigate('NowPlayingScreen', {
//       songId: songIdToPlay,
//       resetToBeginning: true,
//       // ✅ Pass additional data to ensure image loads
//       songData: {
//         title: song.title,
//         artist: song.artist?.name,
//         artwork: song.coverImage // ✅ Ensure artwork is passed
//       }
//     });
//   };

//   // Render song item
//   const renderSongItem = ({ item, index }) => {
//     const songImage = item.coverImage || defaultCoverImage;
//     const isRemoving = removingSongId === item.playlistSongId;

//     return (
//       <Animated.View style={{ opacity: fadeAnim, transform: [{ translateY: slideAnim }] }}>
//         <TouchableOpacity
//           style={[
//             styles.songItem,
//             isRemoving && styles.removingSong // ✅ Show removing state
//           ]}
//           onPress={() => handlePlaySong(item)}
//           onLongPress={() => showSongOptions(item)}
//           activeOpacity={0.7}
//           disabled={isRemoving}
//         >
//           {isRemoving ? (
//             <View style={styles.songNumber}>
//               <ActivityIndicator size="small" color="#FF3B3B" />
//             </View>
//           ) : (
//             <View style={styles.songNumber}>
//               <Text style={styles.songNumberText}>{index + 1}</Text>
//             </View>
//           )}

//           <Image
//             source={{ uri: songImage }}
//             style={styles.songCover}
//             resizeMode="cover"
//             onError={(e) => {
//               console.log('❌ Image load error for:', item.title, e.nativeEvent.error);
//               // Image will fallback to default due to source structure
//             }}
//           />

//           <View style={styles.songInfo}>
//             <Text style={styles.songTitle} numberOfLines={1}>
//               {item.title || 'Unknown Song'}
//             </Text>
//             <Text style={styles.songArtist} numberOfLines={1}>
//               {item.artist?.name || 'Unknown Artist'}
//             </Text>
//           </View>

//           <View style={styles.songMeta}>
//             <Text style={styles.songDuration}>
//               {formatDuration(item.duration)}
//             </Text>
//             <TouchableOpacity
//               style={styles.optionsButton}
//               onPress={() => showSongOptions(item)}
//               disabled={isRemoving}
//             >
//               <Icon name="ellipsis-vertical" size={18} color="#b3b3b3" />
//             </TouchableOpacity>
//           </View>
//         </TouchableOpacity>
//       </Animated.View>
//     );
//   };

//   // Show song options
//   const showSongOptions = (song) => {
//     setSelectedSong(song);
//     setShowOptionsModal(true);
//   };

//   // Render empty state
//   const renderEmptyState = () => (
//     <Animated.View style={[styles.emptyState, { opacity: fadeAnim }]}>
//       <View style={styles.emptyIcon}>
//         <Icon name="musical-notes-outline" size={wp(16)} color="#666" />
//       </View>
//       <Text style={styles.emptyStateTitle}>No songs in this playlist</Text>
//       <Text style={styles.emptyStateText}>
//         Add songs to see them here
//       </Text>
//     </Animated.View>
//   );

//   if (isLoading) {
//     return (
//       <SafeAreaView style={styles.container}>
//         <StatusBar barStyle="light-content" backgroundColor="#000" />
//         <View style={styles.loadingContainer}>
//           <ActivityIndicator size="large" color="#FF3B3B" />
//           <Text style={styles.loadingText}>Loading playlist...</Text>
//         </View>
//       </SafeAreaView>
//     );
//   }

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="light-content" backgroundColor="#000" />

//       {/* Header */}
//       <Animated.View style={[styles.header, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}>
//         <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//           <Icon name="chevron-back" size={wp(7)} color="#fff" />
//         </TouchableOpacity>
//         <View style={styles.headerTitleContainer}>
//           <Text style={styles.headerTitle} numberOfLines={1}>{playlistName}</Text>
//           <Text style={styles.headerSubtitle}>
//             {playlist?._count?.songs || songs.length} songs
//             {playlist?.isPublic && ` • Public`}
//           </Text>
//         </View>
//         {/* <TouchableOpacity style={styles.headerButton}>
//           <Icon name="ellipsis-horizontal" size={wp(6)} color="#fff" />
//         </TouchableOpacity> */}
//       </Animated.View>

//       <FlatList
//         data={songs}
//         renderItem={renderSongItem}
//         keyExtractor={(item, index) => (item.playlistSongId || item.id)?.toString() + index}
//         ListHeaderComponent={
//           <>
//             {/* Playlist Header */}
//             <Animated.View style={[styles.playlistHeader, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}>
//               <View style={styles.coverContainer}>
//                 <Image
//                   source={{ uri: playlistImage || defaultCoverImage }}
//                   style={styles.playlistCover}
//                   resizeMode="cover"
//                 />
//               </View>
//               <View style={styles.playlistInfo}>
//                 <Text style={styles.playlistName} numberOfLines={2}>{playlistName}</Text>
//                 <Text style={styles.playlistDescription} numberOfLines={3}>
//                   {playlist?.description || 'No description'}
//                 </Text>
//                 <View style={styles.playlistStats}>
//                   <View style={styles.statItem}>
//                     <Icon name="person" size={wp(3.5)} color="#FF3B3B" />
//                     <Text style={styles.playlistStat}>{playlistCreator || 'You'}</Text>
//                   </View>
//                   <View style={styles.statItem}>
//                     <Icon name="musical-notes" size={wp(3.5)} color="#FF3B3B" />
//                     <Text style={styles.playlistStat}>{playlist?._count?.songs || songs.length} songs</Text>
//                   </View>
//                   <View style={styles.statItem}>
//                     <Icon name="time" size={wp(3.5)} color="#FF3B3B" />
//                     <Text style={styles.playlistStat}>{calculateTotalDuration()}</Text>
//                   </View>
//                 </View>
//               </View>
//             </Animated.View>

//             {/* Action Buttons */}
//             <Animated.View style={[styles.actionButtons, { opacity: fadeAnim }]}>
//               <TouchableOpacity
//                 style={styles.playButton}
//                 onPress={() => songs.length > 0 ? handlePlaySong(songs[0]) : Alert.alert('No Songs', 'Add songs first')}
//               >
//                 <Icon name="play" size={wp(6)} color="#000" />
//               </TouchableOpacity>
//             </Animated.View>

//             {/* Songs Section Header */}
//             <Animated.View style={[styles.sectionHeader, { opacity: fadeAnim }]}>
//               <View>
//                 <Text style={styles.sectionTitle}>Playlist Songs</Text>
//                 <Text style={styles.sectionSubtitle}>
//                   {playlist?._count?.songs || songs.length} tracks • {calculateTotalDuration()}
//                 </Text>
//               </View>
//             </Animated.View>
//           </>
//         }
//         ListEmptyComponent={renderEmptyState}
//         refreshControl={
//           <RefreshControl
//             refreshing={isRefreshing}
//             onRefresh={handleRefresh}
//             colors={['#FF3B3B']}
//             tintColor="#FF3B3B"
//           />
//         }
//         showsVerticalScrollIndicator={false}
//         style={styles.songsList}
//       />

//       {/* Song Options Modal */}
//       <Modal
//         visible={showOptionsModal}
//         transparent={true}
//         animationType="slide"
//         onRequestClose={() => setShowOptionsModal(false)}
//       >
//         <TouchableOpacity
//           style={styles.modalOverlay}
//           activeOpacity={1}
//           onPress={() => setShowOptionsModal(false)}
//         >
//           <View style={styles.modalContent}>
//             <View style={styles.modalHeader}>
//               <Text style={styles.modalTitle}>Song Options</Text>
//               <TouchableOpacity onPress={() => setShowOptionsModal(false)} style={styles.closeButton}>
//                 <Icon name="close" size={wp(6)} color="#fff" />
//               </TouchableOpacity>
//             </View>

//             {selectedSong && (
//               <View style={styles.songInfoModal}>
//                 <Image
//                   source={{ uri: selectedSong.coverImage || defaultCoverImage }}
//                   style={styles.modalSongImage}
//                   resizeMode="cover"
//                 />
//                 <View style={styles.modalSongInfo}>
//                   <Text style={styles.modalSongTitle} numberOfLines={1}>
//                     {selectedSong.title}
//                   </Text>
//                   <Text style={styles.modalSongArtist} numberOfLines={1}>
//                     {selectedSong.artist?.name}
//                   </Text>
//                 </View>
//               </View>
//             )}

//             <View style={styles.modalOptions}>
//               <TouchableOpacity
//                 style={styles.modalOption}
//                 onPress={() => {
//                   if (selectedSong) handlePlaySong(selectedSong);
//                   setShowOptionsModal(false);
//                 }}
//               >
//                 <View style={[styles.modalOptionIcon, { backgroundColor: 'rgba(255, 59, 59, 0.1)' }]}>
//                   <Icon name="play" size={wp(5)} color="#FF3B3B" />
//                 </View>
//                 <Text style={styles.modalOptionText}>Play song</Text>
//               </TouchableOpacity>

//               <View style={styles.modalDivider} />

//               {/* ✅ FIXED: Remove song option */}
//               <TouchableOpacity
//                 style={[styles.modalOption, styles.removeOption]}
//                 onPress={() => {
//                   if (selectedSong) {
//                     handleRemoveSong(selectedSong.playlistSongId);
//                   }
//                 }}
//                 disabled={removingSongId === selectedSong?.playlistSongId}
//               >
//                 <View style={[styles.modalOptionIcon, { backgroundColor: 'rgba(255, 59, 48, 0.1)' }]}>
//                   <Icon name="trash-outline" size={wp(5)} color="#ff3b30" />
//                 </View>
//                 <Text style={[styles.modalOptionText, styles.removeOptionText]}>
//                   {removingSongId === selectedSong?.playlistSongId ? 'Removing...' : 'Remove from playlist'}
//                 </Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </TouchableOpacity>
//       </Modal>
//     </SafeAreaView>
//   );
// };

// // ✅ RESPONSIVE STYLES
// const styles = StyleSheet.create({
//   container: { 
//     flex: 1, 
//     backgroundColor: '#000' 
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
//     backgroundColor: '#000' 
//   },
//   headerTitleContainer: { 
//     alignItems: 'center', 
//     flex: 1, 
//     paddingHorizontal: wp(2.5) 
//   },
//   headerTitle: { 
//     fontSize: wp(4.5), 
//     fontWeight: 'bold', 
//     color: '#fff', 
//     marginBottom: hp(0.5), 
//     textAlign: 'center' 
//   },
//   headerSubtitle: { 
//     fontSize: wp(3.2), 
//     color: '#b3b3b3', 
//     fontWeight: '500' 
//   },
//   headerButton: { 
//     padding: wp(2), 
//     borderRadius: wp(5), 
//     backgroundColor: 'rgba(255,255,255,0.1)' 
//   },
//   loadingContainer: { 
//     flex: 1, 
//     justifyContent: 'center', 
//     alignItems: 'center', 
//     backgroundColor: '#000' 
//   },
//   loadingText: { 
//     color: '#fff', 
//     marginTop: hp(2), 
//     fontSize: wp(4) 
//   },
//   playlistHeader: { 
//     padding: wp(5), 
//     alignItems: 'center' 
//   },
//   coverContainer: { 
//     position: 'relative', 
//     marginBottom: hp(2.5) 
//   },
//   playlistCover: { 
//     width: wp(50), 
//     height: wp(50), 
//     borderRadius: wp(3), 
//     shadowColor: '#000', 
//     shadowOffset: { width: 0, height: wp(2) }, 
//     shadowOpacity: 0.5, 
//     shadowRadius: wp(3), 
//     elevation: 8 
//   },
//   playlistInfo: { 
//     alignItems: 'center' 
//   },
//   playlistName: { 
//     fontSize: wp(6), 
//     fontWeight: 'bold', 
//     color: '#fff', 
//     marginBottom: hp(1), 
//     textAlign: 'center', 
//     lineHeight: hp(3.5) 
//   },
//   playlistDescription: { 
//     fontSize: wp(4), 
//     color: '#b3b3b3', 
//     marginBottom: hp(2), 
//     textAlign: 'center', 
//     lineHeight: hp(2.5) 
//   },
//   playlistStats: { 
//     flexDirection: 'row', 
//     flexWrap: 'wrap', 
//     justifyContent: 'center', 
//     gap: wp(3) 
//   },
//   statItem: { 
//     flexDirection: 'row', 
//     alignItems: 'center', 
//     backgroundColor: 'rgba(255,255,255,0.05)', 
//     paddingHorizontal: wp(3), 
//     paddingVertical: hp(0.8), 
//     borderRadius: wp(4) 
//   },
//   playlistStat: { 
//     fontSize: wp(3), 
//     color: '#fff', 
//     fontWeight: '500', 
//     marginLeft: wp(1.5) 
//   },
//   actionButtons: { 
//     flexDirection: 'row', 
//     alignItems: 'center', 
//     justifyContent: 'center', 
//     paddingHorizontal: wp(5), 
//     marginBottom: hp(3.5), 
//     gap: wp(3) 
//   },
//   playButton: { 
//     width: wp(15), 
//     height: wp(15), 
//     borderRadius: wp(7.5), 
//     backgroundColor: '#FF3B3B', 
//     justifyContent: 'center', 
//     alignItems: 'center', 
//     shadowColor: '#FF3B3B', 
//     shadowOffset: { width: 0, height: wp(1) }, 
//     shadowOpacity: 0.3, 
//     shadowRadius: wp(2), 
//     elevation: 6 
//   },
//   sectionHeader: { 
//     flexDirection: 'row', 
//     justifyContent: 'space-between', 
//     alignItems: 'center', 
//     paddingHorizontal: wp(5), 
//     marginBottom: hp(2.5) 
//   },
//   sectionTitle: { 
//     fontSize: wp(5), 
//     fontWeight: 'bold', 
//     color: '#fff' 
//   },
//   sectionSubtitle: { 
//     fontSize: wp(3.5), 
//     color: '#b3b3b3', 
//     marginTop: hp(0.5) 
//   },
//   songsList: { 
//     flex: 1 
//   },
//   songItem: { 
//     flexDirection: 'row', 
//     alignItems: 'center', 
//     paddingVertical: hp(1.5), 
//     paddingHorizontal: wp(5), 
//     borderRadius: wp(2), 
//     marginBottom: hp(0.5) 
//   },
//   removingSong: {
//     opacity: 0.6,
//     backgroundColor: 'rgba(255, 59, 59, 0.1)',
//   },
//   songNumber: { 
//     width: wp(8), 
//     alignItems: 'center' 
//   },
//   songNumberText: { 
//     fontSize: wp(3.5), 
//     color: '#b3b3b3', 
//     fontWeight: '500' 
//   },
//   songCover: { 
//     width: wp(10), 
//     height: wp(10), 
//     borderRadius: wp(1.5), 
//     marginLeft: wp(3) 
//   },
//   songInfo: { 
//     flex: 1, 
//     paddingHorizontal: wp(3) 
//   },
//   songTitle: { 
//     fontSize: wp(4), 
//     fontWeight: '600', 
//     color: '#fff', 
//     marginBottom: hp(0.3) 
//   },
//   songArtist: { 
//     fontSize: wp(3.5), 
//     color: '#b3b3b3' 
//   },
//   songMeta: { 
//     flexDirection: 'row', 
//     alignItems: 'center' 
//   },
//   songDuration: { 
//     fontSize: wp(3.5), 
//     color: '#b3b3b3', 
//     marginRight: wp(3) 
//   },
//   optionsButton: { 
//     padding: wp(1) 
//   },
//   emptyState: { 
//     alignItems: 'center', 
//     paddingVertical: hp(7), 
//     paddingHorizontal: wp(5) 
//   },
//   emptyIcon: { 
//     width: wp(25), 
//     height: wp(25), 
//     borderRadius: wp(12.5), 
//     backgroundColor: 'rgba(255,255,255,0.05)', 
//     justifyContent: 'center', 
//     alignItems: 'center', 
//     marginBottom: hp(2.5) 
//   },
//   emptyStateTitle: { 
//     fontSize: wp(4.5), 
//     fontWeight: 'bold', 
//     color: '#fff', 
//     marginBottom: hp(1), 
//     textAlign: 'center' 
//   },
//   emptyStateText: { 
//     fontSize: wp(3.5), 
//     color: '#b3b3b3', 
//     textAlign: 'center', 
//     lineHeight: hp(2.2) 
//   },
//   modalOverlay: { 
//     flex: 1, 
//     backgroundColor: 'rgba(0,0,0,0.7)', 
//     justifyContent: 'flex-end' 
//   },
//   modalContent: { 
//     backgroundColor: '#1a1a1a', 
//     borderTopLeftRadius: wp(5), 
//     borderTopRightRadius: wp(5), 
//     paddingBottom: hp(3.5) 
//   },
//   modalHeader: { 
//     flexDirection: 'row', 
//     justifyContent: 'space-between', 
//     alignItems: 'center', 
//     padding: wp(5), 
//     borderBottomWidth: 1, 
//     borderBottomColor: '#333' 
//   },
//   modalTitle: { 
//     fontSize: wp(4.5), 
//     fontWeight: 'bold', 
//     color: '#fff' 
//   },
//   closeButton: { 
//     padding: wp(1) 
//   },
//   songInfoModal: { 
//     flexDirection: 'row', 
//     alignItems: 'center', 
//     padding: wp(5), 
//     borderBottomWidth: 1, 
//     borderBottomColor: '#333' 
//   },
//   modalSongImage: { 
//     width: wp(12.5), 
//     height: wp(12.5), 
//     borderRadius: wp(2), 
//     marginRight: wp(3) 
//   },
//   modalSongInfo: { 
//     flex: 1 
//   },
//   modalSongTitle: { 
//     fontSize: wp(4), 
//     fontWeight: '600', 
//     color: '#fff', 
//     marginBottom: hp(0.3) 
//   },
//   modalSongArtist: { 
//     fontSize: wp(3.5), 
//     color: '#b3b3b3' 
//   },
//   modalOptions: { 
//     padding: wp(2.5) 
//   },
//   modalOption: { 
//     flexDirection: 'row', 
//     alignItems: 'center', 
//     paddingVertical: hp(1.5), 
//     paddingHorizontal: wp(2.5), 
//     borderRadius: wp(2) 
//   },
//   modalOptionIcon: { 
//     width: wp(9), 
//     height: wp(9), 
//     borderRadius: wp(4.5), 
//     justifyContent: 'center', 
//     alignItems: 'center', 
//     marginRight: wp(3) 
//   },
//   modalOptionText: { 
//     fontSize: wp(4), 
//     color: '#fff', 
//     fontWeight: '500' 
//   },
//   modalDivider: { 
//     height: 1, 
//     backgroundColor: '#333', 
//     marginVertical: hp(1) 
//   },
//   removeOptionText: { 
//     color: '#ff3b30' 
//   },
// });

// export default PlaylistDetailScreen;


// screens/PlaylistDetailScreen.tsx - WITH STYLISH POPUP
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
  Alert,
  ActivityIndicator,
  FlatList,
  Modal,
  Animated,
  RefreshControl,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { getPlaylistById, removeSongFromPlaylist } from '../Services/mobile-api';
import { wp, hp } from "../assets/Global.Css";

const { width } = Dimensions.get('window');

// ✅ STYLISH POPUP COMPONENT - RED, WHITE & BLACK THEME
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
          
          {/* ✅ Close Button - Red Background with White Text */}
          <TouchableOpacity
            style={styles.popupButton}
            onPress={onClose}
            activeOpacity={0.8}
          >
            <Text style={styles.popupButtonText}>OK</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const PlaylistDetailScreen = ({ navigation, route }) => {
  const { playlistId, playlistName, playlistImage, playlistCreator } = route.params;

  const [playlist, setPlaylist] = useState(null);
  const [songs, setSongs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [selectedSong, setSelectedSong] = useState(null);
  const [showOptionsModal, setShowOptionsModal] = useState(false);
  const [removingSongId, setRemovingSongId] = useState(null);

  // ✅ STYLISH POPUP STATES
  const [showPopup, setShowPopup] = useState(false);
  const [popupData, setPopupData] = useState({
    title: '',
    message: '',
    type: 'success'
  });

  // Animations
  const fadeAnim = useState(new Animated.Value(0))[0];
  const slideAnim = useState(new Animated.Value(30))[0];

  // Default cover image
  const defaultCoverImage = 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop';

  // ✅ SHOW POPUP FUNCTION
  const showStylishPopup = (type, title, message) => {
    setPopupData({ type, title, message });
    setShowPopup(true);
    
    // Auto close after 3 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  // Add focus listener
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      handleRefresh();
    });
    return unsubscribe;
  }, [navigation]);

  // Fetch playlist details
  const fetchPlaylistDetails = async (isRefresh = false) => {
    try {
      if (isRefresh) {
        setIsRefreshing(true);
      } else {
        setIsLoading(true);
      }

      console.log('🔄 Fetching playlist details for ID:', playlistId);
      const response = await getPlaylistById(playlistId);
      console.log('📡 Playlist API Response:', response);

      if (response && response.success) {
        const playlistData = response.playlist;
        setPlaylist(playlistData);

        // Extract songs
        let songsData = [];
        if (playlistData.songs && Array.isArray(playlistData.songs)) {
          songsData = playlistData.songs;
        }

        console.log('🎵 Raw songs data:', songsData);

        if (songsData.length > 0) {
          const transformedSongs = songsData.map((song, index) => {
            const playlistSongId = song.id; // playlist entry ID
            const actualSongId = song.songId || song.song?.id; // actual song ID

            // ✅ IMPROVED: Get cover image with priority
            let coverImage = defaultCoverImage;
            
            // Priority order for cover image
            if (song.song?.thumbnail) coverImage = song.song.thumbnail;
            else if (song.thumbnail) coverImage = song.thumbnail;
            else if (song.song?.coverImage) coverImage = song.song.coverImage;
            else if (song.coverImage) coverImage = song.coverImage;
            else if (song.image) coverImage = song.image;
            else if (song.artwork) coverImage = song.artwork;

            // Add base URL if needed
            if (coverImage && coverImage.startsWith('/')) {
              coverImage = `http://103.119.171.213:3001${coverImage}`;
            }

            return {
              id: actualSongId,
              playlistSongId: playlistSongId,
              title: song.title || song.name || song.song?.title || `Song ${index + 1}`,
              artist: {
                name: song.artist?.name ||
                  song.artistName ||
                  song.artist ||
                  song.song?.artist?.name ||
                  song.song?.artist?.stageName ||
                  'Unknown Artist'
              },
              duration: song.duration || song.song?.duration || 180,
              coverImage: coverImage,
              originalSong: song.song || song,
            };
          });
          
          setSongs(transformedSongs);
          console.log('✅ Transformed songs:', transformedSongs.length);
        } else {
          setSongs([]);
          console.log('ℹ️ No songs found in playlist');
        }
      } else {
        setSongs([]);
        console.log('❌ API response not successful');
      }
    } catch (error) {
      console.error('❌ Fetch playlist details error:', error);
      setSongs([]);
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
      startAnimations();
    }
  };

  // ✅ FIXED: Remove song from playlist - WORKING VERSION
  // const handleRemoveSong = async (playlistSongId) => {
  //   try {
  //     const songToRemove = songs.find(song => song.playlistSongId === playlistSongId);
      
  //     if (!songToRemove) {
  //       showStylishPopup('error', 'Error ❌', 'Song not found in playlist');
  //       return;
  //     }

  //     console.log('🗑️ Removing song:', {
  //       playlistSongId,
  //       actualSongId: songToRemove.id,
  //       songTitle: songToRemove.title,
  //     });

  //     // ✅ Show confirmation with stylish popup first
  //     showStylishPopup(
  //       'info', 
  //       'Remove Song', 
  //       `Are you sure you want to remove "${songToRemove.title}"?`
  //     );

  //     // Wait a bit then show action alert
  //     setTimeout(() => {
  //       Alert.alert(
  //         'Remove Song',
  //         `Are you sure you want to remove "${songToRemove.title}" from the playlist?`,
  //         [
  //           { 
  //             text: 'Cancel', 
  //             style: 'cancel',
  //             onPress: () => {
  //               showStylishPopup('info', 'Cancelled', 'Song removal cancelled');
  //             }
  //           },
  //           {
  //             text: 'Remove',
  //             style: 'destructive',
  //             onPress: async () => {
  //               try {
  //                 // ✅ Set removing state
  //                 setRemovingSongId(playlistSongId);
                  
  //                 // ✅ IMMEDIATELY remove from UI (Optimistic update)
  //                 setSongs(prevSongs => {
  //                   const updatedSongs = prevSongs.filter(song => song.playlistSongId !== playlistSongId);
  //                   console.log('✅ Song removed from UI. Remaining songs:', updatedSongs.length);
  //                   return updatedSongs;
  //                 });

  //                 // ✅ Update playlist count
  //                 setPlaylist(prev => ({
  //                   ...prev,
  //                   _count: {
  //                     ...prev._count,
  //                     songs: Math.max(0, (prev._count?.songs || songs.length) - 1)
  //                   }
  //                 }));

  //                 setShowOptionsModal(false);
  //                 setSelectedSong(null);

  //                 // ✅ Call API with ACTUAL SONG ID
  //                 console.log('🔄 Calling remove API with songId:', songToRemove.id);
  //                 const apiResponse = await removeSongFromPlaylist(playlistId, songToRemove.id);
  //                 console.log('📡 Remove API response:', apiResponse);

  //                 if (apiResponse && apiResponse.success) {
  //                   console.log('✅ Song successfully removed from server');
  //                   showStylishPopup('success', 'Success ✅', 'Song removed from playlist');
  //                 } else {
  //                   console.log('❌ API removal failed, refreshing data...');
  //                   // If API fails, refresh to get correct data from server
  //                   handleRefresh();
  //                   showStylishPopup('error', 'Error ❌', 'Failed to remove song from server');
  //                 }
  //               } catch (error) {
  //                 console.error('❌ Remove song error:', error);
  //                 // On error, refresh to sync with server
  //                 handleRefresh();
  //                 showStylishPopup('error', 'Error ❌', 'Something went wrong while removing the song');
  //               } finally {
  //                 setRemovingSongId(null);
  //               }
  //             },
  //           },
  //         ]
  //       );
  //     }, 1500);

  //   } catch (error) {
  //     console.error('❌ Remove song error:', error);
  //     showStylishPopup('error', 'Error ❌', 'Something went wrong');
  //     setRemovingSongId(null);
  //   }
  // };
  // ✅ FIXED: Remove song from playlist - ONLY STYLISH POPUP
const handleRemoveSong = async (playlistSongId) => {
  try {
    const songToRemove = songs.find(song => song.playlistSongId === playlistSongId);
    
    if (!songToRemove) {
      showStylishPopup('error', 'Error ❌', 'Song not found in playlist');
      return;
    }

    console.log('🗑️ Removing song:', {
      playlistSongId,
      actualSongId: songToRemove.id,
      songTitle: songToRemove.title,
    });

    // ✅ SIRF STYLISH POPUP USE KARO - NO DEFAULT ALERT
    setShowOptionsModal(false);
    
    // ✅ Confirmation popup dikhao
    setPopupData({
      type: 'info',
      title: 'Remove Song ❓',
      message: `Are you sure you want to remove "${songToRemove.title}" from the playlist?`
    });
    setShowPopup(true);

    // ✅ User action handle karne ke liye timeout
    setTimeout(async () => {
      try {
        // ✅ Set removing state
        setRemovingSongId(playlistSongId);
        
        // ✅ IMMEDIATELY remove from UI (Optimistic update)
        setSongs(prevSongs => {
          const updatedSongs = prevSongs.filter(song => song.playlistSongId !== playlistSongId);
          console.log('✅ Song removed from UI. Remaining songs:', updatedSongs.length);
          return updatedSongs;
        });

        // ✅ Update playlist count
        setPlaylist(prev => ({
          ...prev,
          _count: {
            ...prev._count,
            songs: Math.max(0, (prev._count?.songs || songs.length) - 1)
          }
        }));

        setSelectedSong(null);

        // ✅ Call API with ACTUAL SONG ID
        console.log('🔄 Calling remove API with songId:', songToRemove.id);
        const apiResponse = await removeSongFromPlaylist(playlistId, songToRemove.id);
        console.log('📡 Remove API response:', apiResponse);

        if (apiResponse && apiResponse.success) {
          console.log('✅ Song successfully removed from server');
          showStylishPopup('success', 'Success ✅', `"${songToRemove.title}" removed from playlist`);
        } else {
          console.log('❌ API removal failed, refreshing data...');
          // If API fails, refresh to get correct data from server
          handleRefresh();
          showStylishPopup('error', 'Error ❌', 'Failed to remove song from server');
        }
      } catch (error) {
        console.error('❌ Remove song error:', error);
        // On error, refresh to sync with server
        handleRefresh();
        showStylishPopup('error', 'Error ❌', 'Something went wrong while removing the song');
      } finally {
        setRemovingSongId(null);
      }
    }, 2000); // 2 seconds ke baad automatically remove ho jayega

  } catch (error) {
    console.error('❌ Remove song error:', error);
    showStylishPopup('error', 'Error ❌', 'Something went wrong');
    setRemovingSongId(null);
  }
};

  // Pull to refresh
  const handleRefresh = () => {
    console.log('🔄 Manual refresh triggered');
    fetchPlaylistDetails(true);
  };

  // Start animations
  const startAnimations = () => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
      })
    ]).start();
  };

  useEffect(() => {
    fetchPlaylistDetails();
  }, [playlistId]);

  // Format duration
  const formatDuration = (seconds) => {
    if (!seconds) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Calculate total duration
  const calculateTotalDuration = () => {
    const totalSeconds = songs.reduce((total, song) => total + (song.duration || 0), 0);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    return hours > 0 ? `${hours} hr ${minutes} min` : `${minutes} min`;
  };

  // ✅ FIXED: Play song function with proper image handling
  const handlePlaySong = (song) => {
    const songIdToPlay = song.id;
    if (!songIdToPlay) {
      showStylishPopup('error', 'Error ❌', 'Cannot play this song');
      return;
    }

    console.log('🎵 Playing song:', {
      songId: songIdToPlay,
      title: song.title,
      coverImage: song.coverImage,
      artist: song.artist?.name
    });

    // ✅ Pass proper song data to NowPlaying screen
    navigation.navigate('NowPlayingScreen', {
      songId: songIdToPlay,
      resetToBeginning: true,
      // ✅ Pass additional data to ensure image loads
      songData: {
        title: song.title,
        artist: song.artist?.name,
        artwork: song.coverImage
      }
    });
  };

  // Render song item
  const renderSongItem = ({ item, index }) => {
    const songImage = item.coverImage || defaultCoverImage;
    const isRemoving = removingSongId === item.playlistSongId;

    return (
      <Animated.View style={{ opacity: fadeAnim, transform: [{ translateY: slideAnim }] }}>
        <TouchableOpacity
          style={[
            styles.songItem,
            isRemoving && styles.removingSong
          ]}
          onPress={() => handlePlaySong(item)}
          onLongPress={() => showSongOptions(item)}
          activeOpacity={0.7}
          disabled={isRemoving}
        >
          {isRemoving ? (
            <View style={styles.songNumber}>
              <ActivityIndicator size="small" color="#FF3B3B" />
            </View>
          ) : (
            <View style={styles.songNumber}>
              <Text style={styles.songNumberText}>{index + 1}</Text>
            </View>
          )}

          <Image
            source={{ uri: songImage }}
            style={styles.songCover}
            resizeMode="cover"
            onError={(e) => {
              console.log('❌ Image load error for:', item.title, e.nativeEvent.error);
            }}
          />

          <View style={styles.songInfo}>
            <Text style={styles.songTitle} numberOfLines={1}>
              {item.title || 'Unknown Song'}
            </Text>
            <Text style={styles.songArtist} numberOfLines={1}>
              {item.artist?.name || 'Unknown Artist'}
            </Text>
          </View>

          <View style={styles.songMeta}>
            <Text style={styles.songDuration}>
              {formatDuration(item.duration)}
            </Text>
            <TouchableOpacity
              style={styles.optionsButton}
              onPress={() => showSongOptions(item)}
              disabled={isRemoving}
            >
              <Icon name="ellipsis-vertical" size={18} color="#b3b3b3" />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Animated.View>
    );
  };

  // Show song options
  const showSongOptions = (song) => {
    setSelectedSong(song);
    setShowOptionsModal(true);
  };

  // Render empty state
  const renderEmptyState = () => (
    <Animated.View style={[styles.emptyState, { opacity: fadeAnim }]}>
      <View style={styles.emptyIcon}>
        <Icon name="musical-notes-outline" size={wp(16)} color="#666" />
      </View>
      <Text style={styles.emptyStateTitle}>No songs in this playlist</Text>
      <Text style={styles.emptyStateText}>
        Add songs to see them here
      </Text>
    </Animated.View>
  );

  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#000" />
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#FF3B3B" />
          <Text style={styles.loadingText}>Loading playlist...</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />

      {/* ✅ STYLISH POPUP */}
      <StylishPopup
        visible={showPopup}
        title={popupData.title}
        message={popupData.message}
        type={popupData.type}
        onClose={() => setShowPopup(false)}
      />

      {/* Header */}
      <Animated.View style={[styles.header, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="chevron-back" size={wp(7)} color="#fff" />
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle} numberOfLines={1}>{playlistName}</Text>
          <Text style={styles.headerSubtitle}>
            {playlist?._count?.songs || songs.length} songs
            {playlist?.isPublic && ` • Public`}
          </Text>
        </View>
        <TouchableOpacity style={styles.headerButton}>
          {/* Empty for alignment */}
        </TouchableOpacity>
      </Animated.View>

      <FlatList
        data={songs}
        renderItem={renderSongItem}
        keyExtractor={(item, index) => (item.playlistSongId || item.id)?.toString() + index}
        ListHeaderComponent={
          <>
            {/* Playlist Header */}
            <Animated.View style={[styles.playlistHeader, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}>
              <View style={styles.coverContainer}>
                <Image
                  source={{ uri: playlistImage || defaultCoverImage }}
                  style={styles.playlistCover}
                  resizeMode="cover"
                />
              </View>
              <View style={styles.playlistInfo}>
                <Text style={styles.playlistName} numberOfLines={2}>{playlistName}</Text>
                <Text style={styles.playlistDescription} numberOfLines={3}>
                  {playlist?.description || 'No description'}
                </Text>
                <View style={styles.playlistStats}>
                  <View style={styles.statItem}>
                    <Icon name="person" size={wp(3.5)} color="#FF3B3B" />
                    <Text style={styles.playlistStat}>{playlistCreator || 'You'}</Text>
                  </View>
                  <View style={styles.statItem}>
                    <Icon name="musical-notes" size={wp(3.5)} color="#FF3B3B" />
                    <Text style={styles.playlistStat}>{playlist?._count?.songs || songs.length} songs</Text>
                  </View>
                  <View style={styles.statItem}>
                    <Icon name="time" size={wp(3.5)} color="#FF3B3B" />
                    <Text style={styles.playlistStat}>{calculateTotalDuration()}</Text>
                  </View>
                </View>
              </View>
            </Animated.View>

            {/* Action Buttons */}
            <Animated.View style={[styles.actionButtons, { opacity: fadeAnim }]}>
              <TouchableOpacity
                style={styles.playButton}
                onPress={() => songs.length > 0 ? handlePlaySong(songs[0]) : showStylishPopup('error', 'No Songs', 'Add songs first to play')}
              >
                <Icon name="play" size={wp(6)} color="#000" />
              </TouchableOpacity>
            </Animated.View>

            {/* Songs Section Header */}
            <Animated.View style={[styles.sectionHeader, { opacity: fadeAnim }]}>
              <View>
                <Text style={styles.sectionTitle}>Playlist Songs</Text>
                <Text style={styles.sectionSubtitle}>
                  {playlist?._count?.songs || songs.length} tracks • {calculateTotalDuration()}
                </Text>
              </View>
            </Animated.View>
          </>
        }
        ListEmptyComponent={renderEmptyState}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={handleRefresh}
            colors={['#FF3B3B']}
            tintColor="#FF3B3B"
          />
        }
        showsVerticalScrollIndicator={false}
        style={styles.songsList}
      />

      {/* Song Options Modal */}
      <Modal
        visible={showOptionsModal}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowOptionsModal(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setShowOptionsModal(false)}
        >
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Song Options</Text>
              <TouchableOpacity onPress={() => setShowOptionsModal(false)} style={styles.closeButton}>
                <Icon name="close" size={wp(6)} color="#fff" />
              </TouchableOpacity>
            </View>

            {selectedSong && (
              <View style={styles.songInfoModal}>
                <Image
                  source={{ uri: selectedSong.coverImage || defaultCoverImage }}
                  style={styles.modalSongImage}
                  resizeMode="cover"
                />
                <View style={styles.modalSongInfo}>
                  <Text style={styles.modalSongTitle} numberOfLines={1}>
                    {selectedSong.title}
                  </Text>
                  <Text style={styles.modalSongArtist} numberOfLines={1}>
                    {selectedSong.artist?.name}
                  </Text>
                </View>
              </View>
            )}

            <View style={styles.modalOptions}>
              <TouchableOpacity
                style={styles.modalOption}
                onPress={() => {
                  if (selectedSong) handlePlaySong(selectedSong);
                  setShowOptionsModal(false);
                }}
              >
                <View style={[styles.modalOptionIcon, { backgroundColor: 'rgba(255, 59, 59, 0.1)' }]}>
                  <Icon name="play" size={wp(5)} color="#FF3B3B" />
                </View>
                <Text style={styles.modalOptionText}>Play song</Text>
              </TouchableOpacity>

              <View style={styles.modalDivider} />

              {/* ✅ Remove song option */}
              <TouchableOpacity
                style={[styles.modalOption, styles.removeOption]}
                onPress={() => {
                  if (selectedSong) {
                    handleRemoveSong(selectedSong.playlistSongId);
                  }
                }}
                disabled={removingSongId === selectedSong?.playlistSongId}
              >
                <View style={[styles.modalOptionIcon, { backgroundColor: 'rgba(255, 59, 48, 0.1)' }]}>
                  <Icon name="trash-outline" size={wp(5)} color="#ff3b30" />
                </View>
                <Text style={[styles.modalOptionText, styles.removeOptionText]}>
                  {removingSongId === selectedSong?.playlistSongId ? 'Removing...' : 'Remove from playlist'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
};

// ✅ RESPONSIVE STYLES
const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#000' 
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
    backgroundColor: '#000' 
  },
  headerTitleContainer: { 
    alignItems: 'center', 
    flex: 1, 
    paddingHorizontal: wp(2.5) 
  },
  headerTitle: { 
    fontSize: wp(4.5), 
    fontWeight: 'bold', 
    color: '#fff', 
    marginBottom: hp(0.5), 
    textAlign: 'center' 
  },
  headerSubtitle: { 
    fontSize: wp(3.2), 
    color: '#b3b3b3', 
    fontWeight: '500' 
  },
  headerButton: { 
    padding: wp(2), 
    borderRadius: wp(5), 
    backgroundColor: '#000' 
  },
  loadingContainer: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#000' 
  },
  loadingText: { 
    color: '#fff', 
    marginTop: hp(2), 
    fontSize: wp(4) 
  },
  playlistHeader: { 
    padding: wp(5), 
    alignItems: 'center' 
  },
  coverContainer: { 
    position: 'relative', 
    marginBottom: hp(2.5) 
  },
  playlistCover: { 
    width: wp(50), 
    height: wp(50), 
    borderRadius: wp(3), 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: wp(2) }, 
    shadowOpacity: 0.5, 
    shadowRadius: wp(3), 
    elevation: 8 
  },
  playlistInfo: { 
    alignItems: 'center' 
  },
  playlistName: { 
    fontSize: wp(6), 
    fontWeight: 'bold', 
    color: '#fff', 
    marginBottom: hp(1), 
    textAlign: 'center', 
    lineHeight: hp(3.5) 
  },
  playlistDescription: { 
    fontSize: wp(4), 
    color: '#b3b3b3', 
    marginBottom: hp(2), 
    textAlign: 'center', 
    lineHeight: hp(2.5) 
  },
  playlistStats: { 
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    justifyContent: 'center', 
    gap: wp(3) 
  },
  statItem: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: 'rgba(255,255,255,0.05)', 
    paddingHorizontal: wp(3), 
    paddingVertical: hp(0.8), 
    borderRadius: wp(4) 
  },
  playlistStat: { 
    fontSize: wp(3), 
    color: '#fff', 
    fontWeight: '500', 
    marginLeft: wp(1.5) 
  },
  actionButtons: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center', 
    paddingHorizontal: wp(5), 
    marginBottom: hp(3.5), 
    gap: wp(3) 
  },
  playButton: { 
    width: wp(15), 
    height: wp(15), 
    borderRadius: wp(7.5), 
    backgroundColor: '#FF3B3B', 
    justifyContent: 'center', 
    alignItems: 'center', 
    shadowColor: '#FF3B3B', 
    shadowOffset: { width: 0, height: wp(1) }, 
    shadowOpacity: 0.3, 
    shadowRadius: wp(2), 
    elevation: 6 
  },
  sectionHeader: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingHorizontal: wp(5), 
    marginBottom: hp(2.5) 
  },
  sectionTitle: { 
    fontSize: wp(5), 
    fontWeight: 'bold', 
    color: '#fff' 
  },
  sectionSubtitle: { 
    fontSize: wp(3.5), 
    color: '#b3b3b3', 
    marginTop: hp(0.5) 
  },
  songsList: { 
    flex: 1 
  },
  songItem: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingVertical: hp(1.5), 
    paddingHorizontal: wp(5), 
    borderRadius: wp(2), 
    marginBottom: hp(0.5) 
  },
  removingSong: {
    opacity: 0.6,
    backgroundColor: 'rgba(255, 59, 59, 0.1)',
  },
  songNumber: { 
    width: wp(8), 
    alignItems: 'center' 
  },
  songNumberText: { 
    fontSize: wp(3.5), 
    color: '#b3b3b3', 
    fontWeight: '500' 
  },
  songCover: { 
    width: wp(10), 
    height: wp(10), 
    borderRadius: wp(1.5), 
    marginLeft: wp(3) 
  },
  songInfo: { 
    flex: 1, 
    paddingHorizontal: wp(3) 
  },
  songTitle: { 
    fontSize: wp(4), 
    fontWeight: '600', 
    color: '#fff', 
    marginBottom: hp(0.3) 
  },
  songArtist: { 
    fontSize: wp(3.5), 
    color: '#b3b3b3' 
  },
  songMeta: { 
    flexDirection: 'row', 
    alignItems: 'center' 
  },
  songDuration: { 
    fontSize: wp(3.5), 
    color: '#b3b3b3', 
    marginRight: wp(3) 
  },
  optionsButton: { 
    padding: wp(1) 
  },
  emptyState: { 
    alignItems: 'center', 
    paddingVertical: hp(7), 
    paddingHorizontal: wp(5) 
  },
  emptyIcon: { 
    width: wp(25), 
    height: wp(25), 
    borderRadius: wp(12.5), 
    backgroundColor: 'rgba(255,255,255,0.05)', 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginBottom: hp(2.5) 
  },
  emptyStateTitle: { 
    fontSize: wp(4.5), 
    fontWeight: 'bold', 
    color: '#fff', 
    marginBottom: hp(1), 
    textAlign: 'center' 
  },
  emptyStateText: { 
    fontSize: wp(3.5), 
    color: '#b3b3b3', 
    textAlign: 'center', 
    lineHeight: hp(2.2) 
  },
  modalOverlay: { 
    flex: 1, 
    backgroundColor: 'rgba(0,0,0,0.7)', 
    justifyContent: 'flex-end' 
  },
  modalContent: { 
    backgroundColor: '#1a1a1a', 
    borderTopLeftRadius: wp(5), 
    borderTopRightRadius: wp(5), 
    paddingBottom: hp(3.5) 
  },
  modalHeader: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    padding: wp(5), 
    borderBottomWidth: 1, 
    borderBottomColor: '#333' 
  },
  modalTitle: { 
    fontSize: wp(4.5), 
    fontWeight: 'bold', 
    color: '#fff' 
  },
  closeButton: { 
    padding: wp(1) 
  },
  songInfoModal: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    padding: wp(5), 
    borderBottomWidth: 1, 
    borderBottomColor: '#333' 
  },
  modalSongImage: { 
    width: wp(12.5), 
    height: wp(12.5), 
    borderRadius: wp(2), 
    marginRight: wp(3) 
  },
  modalSongInfo: { 
    flex: 1 
  },
  modalSongTitle: { 
    fontSize: wp(4), 
    fontWeight: '600', 
    color: '#fff', 
    marginBottom: hp(0.3) 
  },
  modalSongArtist: { 
    fontSize: wp(3.5), 
    color: '#b3b3b3' 
  },
  modalOptions: { 
    padding: wp(2.5) 
  },
  modalOption: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingVertical: hp(1.5), 
    paddingHorizontal: wp(2.5), 
    borderRadius: wp(2) 
  },
  modalOptionIcon: { 
    width: wp(9), 
    height: wp(9), 
    borderRadius: wp(4.5), 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginRight: wp(3) 
  },
  modalOptionText: { 
    fontSize: wp(4), 
    color: '#fff', 
    fontWeight: '500' 
  },
  modalDivider: { 
    height: 1, 
    backgroundColor: '#333', 
    marginVertical: hp(1) 
  },
  removeOptionText: { 
    color: '#ff3b30' 
  },

  // ✅ STYLISH POPUP STYLES - RED, WHITE & BLACK THEME
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
    marginBottom: hp(3),
    lineHeight: hp(2.8),
    fontWeight: '500',
  },
  popupButton: {
    backgroundColor: '#FF3B3B',
    borderRadius: wp(8),
    paddingVertical: hp(1.8),
    paddingHorizontal: wp(12),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#FF3B3B',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  popupButtonText: {
    color: '#fff',
    fontSize: wp(4.2),
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
});

export default PlaylistDetailScreen;