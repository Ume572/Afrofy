

// // // // screens/NowPlayingScreen.tsx - SMOOTH FIXED VERSION
// // // import React, { useState, useRef, useEffect } from 'react';
// // // import {
// // //   View,
// // //   Text,
// // //   Image,
// // //   TouchableOpacity,
// // //   StyleSheet,
// // //   Dimensions,
// // //   SafeAreaView,
// // //   StatusBar,
// // //   Animated,
// // //   Easing,
// // //   FlatList,
// // //   ActivityIndicator,
// // //   Modal,
// // //   Share
// // // } from 'react-native';
// // // import Icon from 'react-native-vector-icons/Ionicons';
// // // import Slider from '@react-native-community/slider';
// // // import { 
// // //   getSongInfo, 
// // //   addSongToPlaylist, 
// // //   getUserPlaylists,
// // //   checkSongLikeStatus,
// // //   likeSong,
// // //   unlikeSong
// // // } from '../Services/mobile-api';
// // // import { useAudio } from '../contexts/AudioContext';
// // // import { wp, hp } from "../assets/Global.Css";

// // // const { width, height } = Dimensions.get('window');

// // // const NowPlayingScreen = ({ navigation, route }) => {
// // //   const { songId, resetToBeginning = false } = route.params || {};

// // //   const { 
// // //     currentSong, 
// // //     isPlaying, 
// // //     currentTime, 
// // //     duration, 
// // //     togglePlayPause, 
// // //     playSong,
// // //     seekTo,
// // //   } = useAudio();

// // //   const [isLoading, setIsLoading] = useState(false);
// // //   const [isLiked, setIsLiked] = useState(false);
// // //   const [showPlaylistModal, setShowPlaylistModal] = useState(false);
// // //   const [userPlaylists, setUserPlaylists] = useState([]);
// // //   const [togglingLike, setTogglingLike] = useState(false);
// // //   const [currentlyAddingPlaylist, setCurrentlyAddingPlaylist] = useState(null);
// // //   const [downloading, setDownloading] = useState(false);
// // //   const [playlistLoading, setPlaylistLoading] = useState(false);

// // //   // ✅ STYLISH POPUP STATES
// // //   const [showPopup, setShowPopup] = useState(false);
// // //   const [popupTitle, setPopupTitle] = useState('');
// // //   const [popupMessage, setPopupMessage] = useState('');
// // //   const [popupType, setPopupType] = useState<'success' | 'error' | 'info'>('success');

// // //   const rotateAnim = useRef(new Animated.Value(0)).current;
// // //   const fadeAnim = useRef(new Animated.Value(0)).current;

// // //   // ✅ STYLISH POPUP FUNCTION
// // //   const showStylishPopup = (type: 'success' | 'error' | 'info', title: string, message: string) => {
// // //     setPopupType(type);
// // //     setPopupTitle(title);
// // //     setPopupMessage(message);
// // //     setShowPopup(true);
    
// // //     // Auto close after 3 seconds
// // //     setTimeout(() => {
// // //       setShowPopup(false);
// // //     }, 3000);
// // //   };

// // //   // ✅ Screen open animation
// // //   useEffect(() => {
// // //     Animated.timing(fadeAnim, {
// // //       toValue: 1,
// // //       duration: 300,
// // //       useNativeDriver: true,
// // //     }).start();

// // //     if (songId) {
// // //       if (!currentSong || currentSong.id !== songId) {
// // //         fetchSongInfo();
// // //       }
// // //       checkLikeStatus();
// // //     }
// // //   }, [songId]);

// // //   // ✅ Check like status
// // //   const checkLikeStatus = async () => {
// // //     try {
// // //       const response = await checkSongLikeStatus(songId);
// // //       if (response && response.success) {
// // //         setIsLiked(response.isLiked || false);
// // //       }
// // //     } catch (error) {
// // //       console.error('Error checking like status:', error);
// // //     }
// // //   };

// // //   // ✅ Fetch song information
// // //   const fetchSongInfo = async () => {
// // //     try {
// // //       setIsLoading(true);
// // //       const numericSongId = typeof songId === 'string' ? parseInt(songId) : songId;
// // //       const response = await getSongInfo(numericSongId);
      
// // //       if (response && response.success) {
// // //         const songData = {
// // //           id: numericSongId,
// // //           title: response.song?.title || 'Unknown Title',
// // //           artist: response.song?.artist?.name || 'Unknown Artist',
// // //           audioUrl: response.song?.audioFile 
// // //             ? `http://103.119.171.213:3001${response.song.audioFile}`
// // //             : 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
// // //           artwork: response.song?.thumbnail || 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop'
// // //         };
        
// // //         playSong(songData);
// // //       }
// // //     } catch (error) {
// // //       console.error('Song Info Error:', error);
// // //       showStylishPopup('error', 'Error', 'Failed to load song');
// // //     } finally {
// // //       setIsLoading(false);
// // //     }
// // //   };

// // //   // ✅ FIXED: LIKE/UNLIKE HANDLER - WITH PROPER MESSAGES
// // //   const handleLikeToggle = async () => {
// // //     if (!songId || togglingLike) return;

// // //     try {
// // //       setTogglingLike(true);
      
// // //       if (isLiked) {
// // //         const response = await unlikeSong(songId);
// // //         if (response && response.success) {
// // //           setIsLiked(false);
// // //           showStylishPopup('success', 'Removed from Likes ❤️', 'Song removed from your liked songs');
// // //         } else {
// // //           setIsLiked(false);
// // //           showStylishPopup('info', 'Already Removed', 'Song was already removed from likes');
// // //         }
// // //       } else {
// // //         const response = await likeSong(songId);
// // //         if (response && response.success) {
// // //           setIsLiked(true);
// // //           showStylishPopup('success', 'Added to Likes ❤️', 'Song added to your liked songs!');
// // //         } else {
// // //           setIsLiked(true);
// // //           showStylishPopup('info', 'Already Liked', 'Song already in your liked songs');
// // //         }
// // //       }
// // //     } catch (error) {
// // //       console.error('Like toggle error:', error);
// // //       if (error.message?.includes('already')) {
// // //         showStylishPopup('info', 'Already Processed', 'Song status already updated');
// // //       } else {
// // //         showStylishPopup('error', 'Error', 'Failed to update likes. Please try again.');
// // //       }
// // //     } finally {
// // //       setTogglingLike(false);
// // //     }
// // //   };

// // //   // ✅ DOWNLOAD HANDLER
// // //   const handleDownload = async () => {
// // //     if (downloading) return;
    
// // //     try {
// // //       setDownloading(true);
// // //       await new Promise(resolve => setTimeout(resolve, 2000));
// // //       showStylishPopup('success', 'Download Started 📥', 'Song will be available in your downloads soon');
// // //     } catch (error) {
// // //       showStylishPopup('error', 'Download Failed', 'Failed to download song. Please try again.');
// // //     } finally {
// // //       setDownloading(false);
// // //     }
// // //   };

// // //   // ✅ FIXED: SHARE HANDLER - ONLY SHOW SUCCESS WHEN ACTUALLY SHARED
// // //   const handleShare = async () => {
// // //     try {
// // //       const shareOptions = {
// // //         title: 'Check out this song!',
// // //         message: `Listen to "${displaySongData.title}" by ${displaySongData.artist} on Afrofy`,
// // //         url: displaySongData.artwork,
// // //       };

// // //       const result = await Share.share(shareOptions);
      
// // //       if (result.action === Share.sharedAction) {
// // //         showStylishPopup('success', 'Shared Successfully 📤', 'Song shared with your friends!');
// // //       }
// // //     } catch (error) {
// // //       console.error('Share error:', error);
// // //     }
// // //   };

// // //   // ✅ FIXED: FETCH USER PLAYLISTS WITH BETTER CHECKING
// // //   const fetchUserPlaylists = async () => {
// // //     try {
// // //       setPlaylistLoading(true);
      
// // //       const response = await getUserPlaylists();
      
// // //       if (response && response.success) {
// // //         const playlists = response.playlists || [];
        
// // //         // ✅ DEEPER CHECK - Properly check if song exists in playlist
// // //         const playlistsWithSongStatus = playlists.map(playlist => {
// // //           // Check if songs array exists and contains current song
// // //           const songExists = playlist.songs?.some(song => {
// // //             // Compare both string and number IDs
// // //             const songIdNum = parseInt(songId);
// // //             return song.id === songIdNum || song.id === songId || 
// // //                    song.songId === songIdNum || song.songId === songId;
// // //           }) || false;
          
// // //           return {
// // //             ...playlist,
// // //             songExists
// // //           };
// // //         });
        
// // //         setUserPlaylists(playlistsWithSongStatus);
// // //         setShowPlaylistModal(true);
// // //       } else {
// // //         showStylishPopup('error', 'Error', 'Failed to fetch playlists');
// // //       }
// // //     } catch (error) {
// // //       console.error('Fetch playlists error:', error);
// // //       showStylishPopup('error', 'Error', 'Failed to load playlists');
// // //     } finally {
// // //       setPlaylistLoading(false);
// // //     }
// // //   };

// // //   // ✅ FIXED: ADD TO PLAYLIST HANDLER - SMOOTH EXPERIENCE
// // //   const handleAddToPlaylist = async (playlistId, playlistName, songAlreadyExists = false) => {
// // //     // ✅ Agar song already playlist mein hai to kuch mat karo
// // //     if (songAlreadyExists) {
// // //       return;
// // //     }

// // //     if (currentlyAddingPlaylist) return;

// // //     try {
// // //       setCurrentlyAddingPlaylist(playlistId);
      
// // //       // ✅ THODA DELAY FOR SMOOTH EXPERIENCE
// // //       await new Promise(resolve => setTimeout(resolve, 300));
      
// // //       const response = await addSongToPlaylist(playlistId, songId);
      
// // //       if (response.success) {
// // //         // ✅ SMOOTH STATE UPDATE WITH DELAY
// // //         setTimeout(() => {
// // //           setUserPlaylists(prevPlaylists => 
// // //             prevPlaylists.map(playlist => 
// // //               playlist.id === playlistId 
// // //                 ? { ...playlist, songExists: true }
// // //                 : playlist
// // //             )
// // //           );
// // //         }, 200);
        
// // //         // ✅ BIG POPUP SHOW KARO
// // //         showStylishPopup('success', 'Added to Playlist ✅', `"${displaySongData.title}" added to "${playlistName}"`);
        
// // //         // ✅ MODAL AUTOMATICALLY CLOSE KARO AFTER DELAY
// // //         setTimeout(() => {
// // //           setShowPlaylistModal(false);
// // //         }, 2000);
        
// // //       } else {
// // //         // ✅ Agar server ne kaha ki song already hai to state update karo
// // //         if (response.message?.includes('already') || response.message?.includes('exists')) {
// // //           setTimeout(() => {
// // //             setUserPlaylists(prevPlaylists => 
// // //               prevPlaylists.map(playlist => 
// // //                 playlist.id === playlistId 
// // //                   ? { ...playlist, songExists: true }
// // //                   : playlist
// // //               )
// // //             );
// // //           }, 200);
// // //         } else {
// // //           showStylishPopup('error', 'Error', response.message || 'Failed to add song to playlist');
// // //         }
// // //       }
// // //     } catch (error) {
// // //       console.error('Add to playlist error:', error);
      
// // //       if (error.message?.includes('already') || error.message?.includes('exists')) {
// // //         setTimeout(() => {
// // //           setUserPlaylists(prevPlaylists => 
// // //             prevPlaylists.map(playlist => 
// // //               playlist.id === playlistId 
// // //                 ? { ...playlist, songExists: true }
// // //                 : playlist
// // //             )
// // //           );
// // //         }, 200);
// // //       } else if (error.message?.includes('Network')) {
// // //         showStylishPopup('error', 'Network Error', 'Please check your internet connection');
// // //       } else {
// // //         showStylishPopup('error', 'Error', 'Failed to add song to playlist');
// // //       }
// // //     } finally {
// // //       // ✅ SMOOTH RESET WITH DELAY
// // //       setTimeout(() => {
// // //         setCurrentlyAddingPlaylist(null);
// // //       }, 500);
// // //     }
// // //   };

// // //   // ---- Controls ----
// // //   const handlePlayPause = () => {
// // //     togglePlayPause();
// // //   };

// // //   const handleSkipForward = () => {
// // //     const newTime = Math.min((Number(currentTime) || 0) + 10, Number(duration) || 0);
// // //     seekTo(newTime);
// // //   };

// // //   const handleSkipBackward = () => {
// // //     const newTime = Math.max((Number(currentTime) || 0) - 10, 0);
// // //     seekTo(newTime);
// // //   };

// // //   const handleGoBack = () => {
// // //     navigation.goBack();
// // //   };

// // //   // ---- Animation ----
// // //   const startRotation = () => {
// // //     rotateAnim.setValue(0);
// // //     Animated.loop(
// // //       Animated.timing(rotateAnim, {
// // //         toValue: 1,
// // //         duration: 20000,
// // //         easing: Easing.linear,
// // //         useNativeDriver: true,
// // //       })
// // //     ).start();
// // //   };

// // //   const stopRotation = () => {
// // //     rotateAnim.stopAnimation();
// // //   };

// // //   const rotateInterpolate = rotateAnim.interpolate({
// // //     inputRange: [0, 1],
// // //     outputRange: ['0deg', '360deg'],
// // //   });

// // //   // ---- Helpers ----
// // //   const formatTime = (s) => {
// // //     const sec = Number(s);
// // //     const safeSec = Number.isFinite(sec) && sec >= 0 ? Math.floor(sec) : 0;
// // //     const m = Math.floor(safeSec / 60);
// // //     const r = Math.floor(safeSec % 60);
// // //     return `${m}:${r < 10 ? '0' : ''}${r}`;
// // //   };

// // //   const displaySongData = currentSong ? {
// // //     title: currentSong.title,
// // //     artist: currentSong.artist,
// // //     artwork: currentSong.artwork,
// // //   } : {
// // //     title: 'Loading...',
// // //     artist: 'Unknown Artist',
// // //     artwork: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop',
// // //   };

// // //   // Rotation control
// // //   useEffect(() => {
// // //     if (isPlaying) {
// // //       startRotation();
// // //     } else {
// // //       stopRotation();
// // //     }
// // //   }, [isPlaying]);

// // //   // ✅ STYLISH POPUP COMPONENT
// // //   const StylishPopup = () => (
// // //     <Modal
// // //       visible={showPopup}
// // //       transparent={true}
// // //       animationType="fade"
// // //       onRequestClose={() => setShowPopup(false)}
// // //     >
// // //       <View style={styles.popupOverlay}>
// // //         <View style={styles.popupContainer}>
// // //           <View style={styles.popupIcon}>
// // //             <Icon 
// // //               name={
// // //                 popupType === 'success' ? 'checkmark-circle' :
// // //                 popupType === 'error' ? 'close-circle' :
// // //                 'information-circle'
// // //               } 
// // //               size={wp(12)} 
// // //               color="#FF3B3B"
// // //             />
// // //           </View>
          
// // //           <Text style={styles.popupTitle}>{popupTitle}</Text>
// // //           <Text style={styles.popupMessage}>{popupMessage}</Text>
          
// // //           <TouchableOpacity
// // //             style={styles.popupButton}
// // //             onPress={() => setShowPopup(false)}
// // //           >
// // //             <Text style={styles.popupButtonText}>OK</Text>
// // //           </TouchableOpacity>
// // //         </View>
// // //       </View>
// // //     </Modal>
// // //   );

// // //   // ✅ FIXED: PLAYLIST MODAL - SMOOTH EXPERIENCE
// // //   const PlaylistModal = () => (
// // //     <Modal
// // //       visible={showPlaylistModal}
// // //       transparent={true}
// // //       animationType="slide"
// // //       onRequestClose={() => setShowPlaylistModal(false)}
// // //     >
// // //       <View style={styles.modalOverlay}>
// // //         <View style={styles.modalContainer}>
// // //           <View style={styles.modalHeader}>
// // //             <Text style={styles.modalTitle}>Add to Playlist</Text>
// // //             <TouchableOpacity 
// // //               onPress={() => setShowPlaylistModal(false)}
// // //               style={styles.closeButton}
// // //             >
// // //               <Icon name="close" size={wp(6)} color="#fff" />
// // //             </TouchableOpacity>
// // //           </View>

// // //           <Text style={styles.modalSubtitle}>
// // //             Add "{displaySongData.title}" to playlist
// // //           </Text>

// // //           {playlistLoading ? (
// // //             <View style={styles.loadingContainer}>
// // //               <ActivityIndicator size="large" color="#FF3B3B" />
// // //               <Text style={styles.loadingText}>Loading playlists...</Text>
// // //             </View>
// // //           ) : userPlaylists.length === 0 ? (
// // //             <View style={styles.emptyPlaylists}>
// // //               <Icon name="musical-notes-outline" size={wp(15)} color="#666" />
// // //               <Text style={styles.emptyPlaylistsText}>No playlists found</Text>
// // //               <Text style={styles.emptyPlaylistsSubtext}>
// // //                 Create a playlist first to add songs
// // //               </Text>
// // //             </View>
// // //           ) : (
// // //             <FlatList
// // //               data={userPlaylists}
// // //               keyExtractor={(item) => item.id.toString()}
// // //               renderItem={({ item }) => {
// // //                 const isCurrentlyAdding = currentlyAddingPlaylist === item.id;
// // //                 const songAlreadyExists = item.songExists || false;
                
// // //                 return (
// // //                   <TouchableOpacity
// // //                     style={[
// // //                       styles.playlistItem,
// // //                       isCurrentlyAdding && styles.playlistItemDisabled,
// // //                       songAlreadyExists && styles.playlistItemAlreadyAdded
// // //                     ]}
// // //                     onPress={() => handleAddToPlaylist(item.id, item.title, songAlreadyExists)}
// // //                     disabled={isCurrentlyAdding || songAlreadyExists}
// // //                     activeOpacity={0.7}
// // //                   >
// // //                     <View style={styles.playlistInfo}>
// // //                       <Text style={[
// // //                         styles.playlistName,
// // //                         songAlreadyExists && styles.playlistNameAdded
// // //                       ]} numberOfLines={1}>
// // //                         {item.title}
// // //                       </Text>
// // //                       <Text style={styles.playlistStats}>
// // //                         {item._count?.songs || 0} songs • {item.isPublic ? 'Public' : 'Private'}
// // //                         {songAlreadyExists && ' • Already added'}
// // //                       </Text>
// // //                     </View>
                    
// // //                     {isCurrentlyAdding ? (
// // //                       <ActivityIndicator size="small" color="#FF3B3B" />
// // //                     ) : songAlreadyExists ? (
// // //                       <View style={styles.addedIndicator}>
// // //                         <Icon name="checkmark" size={wp(4)} color="#FF3B3B" />
// // //                         <Text style={styles.addedText}>Added</Text>
// // //                       </View>
// // //                     ) : (
// // //                       <Icon name="add-circle" size={wp(6)} color="#FF3B3B" />
// // //                     )}
// // //                   </TouchableOpacity>
// // //                 );
// // //               }}
// // //               style={styles.playlistList}
// // //             />
// // //           )}
// // //         </View>
// // //       </View>
// // //     </Modal>
// // //   );

// // //   return (
// // //     <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
// // //       <StatusBar barStyle="light-content" backgroundColor="#000" />

// // //       <StylishPopup />
// // //       <PlaylistModal />

// // //       {/* Header */}
// // //       <View style={styles.header}>
// // //         <TouchableOpacity onPress={handleGoBack} style={styles.headerButton}>
// // //           <Icon name="chevron-down" size={wp(7)} color="#fff" />
// // //         </TouchableOpacity>
        
// // //         <View style={styles.headerCenter}>
// // //           <Text style={styles.headerTitle}>NOW PLAYING</Text>
// // //         </View>
        
// // //         <TouchableOpacity style={styles.headerButton}>
// // //           <Icon name="ellipsis-horizontal" size={wp(6)} color="#fff" />
// // //         </TouchableOpacity>
// // //       </View>

// // //       {/* Album Art */}
// // //       <View style={styles.albumArtContainer}>
// // //         <Animated.View
// // //           style={[
// // //             styles.albumArtWrapper,
// // //             {
// // //               transform: [{ rotate: isPlaying ? rotateInterpolate : '0deg' }],
// // //             },
// // //           ]}
// // //         >
// // //           <Image
// // //             source={{ uri: displaySongData.artwork }}
// // //             style={styles.albumArt}
// // //             resizeMode="cover"
// // //           />
// // //         </Animated.View>
// // //       </View>

// // //       {/* Song Info */}
// // //       <View style={styles.songInfoContainer}>
// // //         <View style={styles.songTextContainer}>
// // //           <Text style={styles.songTitle} numberOfLines={2} ellipsizeMode="tail">
// // //             {displaySongData.title}
// // //           </Text>
// // //           <Text style={styles.songArtist} numberOfLines={1} ellipsizeMode="tail">
// // //             {displaySongData.artist}
// // //           </Text>
// // //         </View>

// // //         {/* Action Buttons */}
// // //         <View style={styles.actions}>
// // //           <TouchableOpacity
// // //             style={styles.actionButton}
// // //             onPress={handleDownload}
// // //             disabled={downloading}
// // //           >
// // //             {downloading ? (
// // //               <ActivityIndicator size="small" color="#b3b3b3" />
// // //             ) : (
// // //               <Icon name="download-outline" size={wp(6)} color="#b3b3b3" />
// // //             )}
// // //           </TouchableOpacity>

// // //           <TouchableOpacity
// // //             style={styles.actionButton}
// // //             onPress={handleShare}
// // //           >
// // //             <Icon name="share-social-outline" size={wp(6)} color="#b3b3b3" />
// // //           </TouchableOpacity>

// // //           <TouchableOpacity
// // //             style={styles.actionButton}
// // //             onPress={fetchUserPlaylists}
// // //           >
// // //             <Icon name="add" size={wp(6)} color="#b3b3b3" />
// // //           </TouchableOpacity>

// // //           <TouchableOpacity
// // //             style={styles.likeButton}
// // //             onPress={handleLikeToggle}
// // //             disabled={togglingLike}
// // //           >
// // //             {togglingLike ? (
// // //               <ActivityIndicator size="small" color="#FF3B3B" />
// // //             ) : (
// // //               <Icon
// // //                 name={isLiked ? 'heart' : 'heart-outline'}
// // //                 size={wp(6)}
// // //                 color={isLiked ? '#FF3B3B' : '#b3b3b3'}
// // //               />
// // //             )}
// // //           </TouchableOpacity>
// // //         </View>
// // //       </View>

// // //       {/* Progress Bar */}
// // //       <View style={styles.progressContainer}>
// // //         <Slider
// // //           style={styles.slider}
// // //           minimumValue={0}
// // //           maximumValue={duration > 0 ? duration : 1}
// // //           value={currentTime}
// // //           onSlidingComplete={(value) => seekTo(value)}
// // //           minimumTrackTintColor="#fff"
// // //           maximumTrackTintColor="#535353"
// // //           thumbTintColor="#fff"
// // //           thumbSize={wp(3)}
// // //           disabled={isLoading}
// // //         />
// // //         <View style={styles.timeContainer}>
// // //           <Text style={styles.timeText}>{formatTime(currentTime)}</Text>
// // //           <Text style={styles.timeText}>{formatTime(duration)}</Text>
// // //         </View>
// // //       </View>

// // //       {/* Controls */}
// // //       <View style={styles.controls}>
// // //         <TouchableOpacity style={styles.controlButton} onPress={handleSkipBackward}>
// // //           <Icon name="play-skip-back" size={wp(8)} color="#fff" />
// // //         </TouchableOpacity>

// // //         <TouchableOpacity
// // //           style={[styles.playButton, isLoading && styles.playButtonDisabled]}
// // //           onPress={togglePlayPause}
// // //           disabled={isLoading}
// // //         >
// // //           <Icon 
// // //             name={isPlaying ? 'pause' : 'play'} 
// // //             size={wp(8)} 
// // //             color="#000" 
// // //           />
// // //         </TouchableOpacity>

// // //         <TouchableOpacity style={styles.controlButton} onPress={handleSkipForward}>
// // //           <Icon name="play-skip-forward" size={wp(8)} color="#fff" />
// // //         </TouchableOpacity>
// // //       </View>
// // //     </Animated.View>
// // //   );
// // // };

// // // // ✅ RESPONSIVE STYLES
// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     backgroundColor: '#000',
// // //     paddingHorizontal: wp(4),
// // //   },
// // //   header: {
// // //     flexDirection: 'row',
// // //     alignItems: 'center',
// // //     justifyContent: 'space-between',
// // //     paddingVertical: hp(2),
// // //     marginTop: hp(1),
// // //   },
// // //   headerButton: {
// // //     padding: wp(2),
// // //   },
// // //   headerCenter: {
// // //     alignItems: 'center',
// // //     flex: 1,
// // //   },
// // //   headerTitle: {
// // //     fontSize: wp(3.2),
// // //     fontWeight: '600',
// // //     color: '#fff',
// // //     letterSpacing: 0.5,
// // //   },
// // //   albumArtContainer: {
// // //     alignItems: 'center',
// // //     justifyContent: 'center',
// // //     marginVertical: hp(4),
// // //   },
// // //   albumArtWrapper: {
// // //     width: wp(75),
// // //     height: wp(75),
// // //     borderRadius: wp(75) / 2,
// // //     shadowColor: '#000',
// // //     shadowOffset: { width: 0, height: 20 },
// // //     shadowOpacity: 0.8,
// // //     shadowRadius: 30,
// // //     elevation: 25,
// // //     overflow: 'hidden',
// // //   },
// // //   albumArt: {
// // //     width: '100%',
// // //     height: '100%',
// // //   },
// // //   songInfoContainer: {
// // //     marginBottom: hp(4),
// // //     alignItems: 'center',
// // //   },
// // //   songTextContainer: {
// // //     alignItems: 'center',
// // //     width: '100%',
// // //     paddingHorizontal: wp(5),
// // //     marginBottom: hp(3),
// // //   },
// // //   songTitle: {
// // //     fontSize: wp(7),
// // //     fontWeight: 'bold',
// // //     color: '#fff',
// // //     textAlign: 'center',
// // //     marginBottom: hp(1),
// // //     lineHeight: hp(4),
// // //     width: '100%',
// // //     maxWidth: wp(90),
// // //   },
// // //   songArtist: {
// // //     fontSize: wp(4.5),
// // //     color: '#b3b3b3',
// // //     textAlign: 'center',
// // //     width: '100%',
// // //     maxWidth: wp(90),
// // //   },
// // //   actions: {
// // //     flexDirection: 'row',
// // //     alignItems: 'center',
// // //     justifyContent: 'space-around',
// // //     width: '100%',
// // //     paddingHorizontal: wp(5),
// // //   },
// // //   actionButton: {
// // //     padding: wp(3),
// // //     backgroundColor: 'rgba(255, 255, 255, 0.1)',
// // //     borderRadius: wp(8),
// // //     width: wp(12),
// // //     height: wp(12),
// // //     justifyContent: 'center',
// // //     alignItems: 'center',
// // //   },
// // //   likeButton: {
// // //     padding: wp(3),
// // //     backgroundColor: 'rgba(255, 255, 255, 0.1)',
// // //     borderRadius: wp(8),
// // //     width: wp(12),
// // //     height: wp(12),
// // //     justifyContent: 'center',
// // //     alignItems: 'center',
// // //   },
// // //   progressContainer: {
// // //     marginBottom: hp(4),
// // //   },
// // //   slider: {
// // //     width: '100%',
// // //     height: hp(4),
// // //   },
// // //   timeContainer: {
// // //     flexDirection: 'row',
// // //     justifyContent: 'space-between',
// // //     marginTop: hp(-1),
// // //   },
// // //   timeText: {
// // //     fontSize: wp(3),
// // //     color: '#b3b3b3',
// // //     fontWeight: '500',
// // //   },
// // //   controls: {
// // //     flexDirection: 'row',
// // //     alignItems: 'center',
// // //     justifyContent: 'space-around',
// // //     marginBottom: hp(2),
// // //     paddingHorizontal: wp(5),
// // //   },
// // //   controlButton: {
// // //     padding: wp(3),
// // //   },
// // //   playButton: {
// // //     backgroundColor: '#fff',
// // //     width: wp(18),
// // //     height: wp(18),
// // //     borderRadius: wp(9),
// // //     justifyContent: 'center',
// // //     alignItems: 'center',
// // //     shadowColor: '#fff',
// // //     shadowOffset: { width: 0, height: 8 },
// // //     shadowOpacity: 0.3,
// // //     shadowRadius: 15,
// // //     elevation: 15,
// // //   },
// // //   playButtonDisabled: {
// // //     backgroundColor: '#666',
// // //   },
// // //   popupOverlay: {
// // //     flex: 1,
// // //     backgroundColor: 'rgba(0, 0, 0, 0.8)',
// // //     justifyContent: 'center',
// // //     alignItems: 'center',
// // //     paddingHorizontal: wp(5),
// // //   },
// // //   popupContainer: {
// // //     backgroundColor: '#1E1E1E',
// // //     borderRadius: wp(5),
// // //     paddingHorizontal: wp(6),
// // //     paddingVertical: hp(4),
// // //     alignItems: 'center',
// // //     width: '100%',
// // //     maxWidth: wp(85),
// // //     borderWidth: 1,
// // //     borderColor: '#FF3B3B',
// // //   },
// // //   popupIcon: {
// // //     marginBottom: hp(2),
// // //     backgroundColor: 'rgba(255, 59, 59, 0.1)',
// // //     borderRadius: wp(8),
// // //     padding: wp(3),
// // //   },
// // //   popupTitle: {
// // //     fontSize: wp(5.5),
// // //     fontWeight: 'bold',
// // //     color: '#fff',
// // //     textAlign: 'center',
// // //     marginBottom: hp(1.5),
// // //   },
// // //   popupMessage: {
// // //     fontSize: wp(4),
// // //     color: '#b3b3b3',
// // //     textAlign: 'center',
// // //     marginBottom: hp(3),
// // //     lineHeight: hp(2.8),
// // //   },
// // //   popupButton: {
// // //     backgroundColor: '#FF3B3B',
// // //     borderRadius: wp(6),
// // //     paddingVertical: hp(1.5),
// // //     paddingHorizontal: wp(8),
// // //     width: '100%',
// // //     justifyContent: 'center',
// // //     alignItems: 'center',
// // //   },
// // //   popupButtonText: {
// // //     color: 'white',
// // //     fontSize: wp(4.5),
// // //     fontWeight: 'bold',
// // //   },
// // //   modalOverlay: {
// // //     flex: 1,
// // //     backgroundColor: 'rgba(0,0,0,0.7)',
// // //     justifyContent: 'flex-end',
// // //   },
// // //   modalContainer: {
// // //     backgroundColor: '#1a1a1a',
// // //     borderTopLeftRadius: wp(5),
// // //     borderTopRightRadius: wp(5),
// // //     maxHeight: hp(80),
// // //     paddingBottom: hp(3),
// // //   },
// // //   modalHeader: {
// // //     flexDirection: 'row',
// // //     justifyContent: 'space-between',
// // //     alignItems: 'center',
// // //     padding: wp(5),
// // //     borderBottomWidth: 1,
// // //     borderBottomColor: '#333',
// // //   },
// // //   modalTitle: {
// // //     fontSize: wp(5),
// // //     fontWeight: 'bold',
// // //     color: '#fff',
// // //   },
// // //   closeButton: {
// // //     padding: wp(1),
// // //   },
// // //   modalSubtitle: {
// // //     fontSize: wp(4),
// // //     color: '#b3b3b3',
// // //     paddingHorizontal: wp(5),
// // //     paddingVertical: hp(2),
// // //     borderBottomWidth: 1,
// // //     borderBottomColor: '#333',
// // //   },
// // //   loadingContainer: {
// // //     alignItems: 'center',
// // //     padding: hp(8),
// // //   },
// // //   loadingText: {
// // //     color: '#b3b3b3',
// // //     marginTop: hp(2),
// // //     fontSize: wp(4),
// // //   },
// // //   emptyPlaylists: {
// // //     alignItems: 'center',
// // //     padding: hp(8),
// // //   },
// // //   emptyPlaylistsText: {
// // //     fontSize: wp(4.5),
// // //     color: '#fff',
// // //     marginTop: hp(2),
// // //     marginBottom: hp(1),
// // //   },
// // //   emptyPlaylistsSubtext: {
// // //     fontSize: wp(4),
// // //     color: '#b3b3b3',
// // //     textAlign: 'center',
// // //   },
// // //   playlistList: {
// // //     maxHeight: hp(50),
// // //   },
// // //   playlistItem: {
// // //     flexDirection: 'row',
// // //     alignItems: 'center',
// // //     justifyContent: 'space-between',
// // //     padding: wp(4),
// // //     borderBottomWidth: 1,
// // //     borderBottomColor: '#333',
// // //   },
// // //   playlistItemDisabled: {
// // //     opacity: 0.6,
// // //   },
// // //   playlistItemAlreadyAdded: {
// // //     backgroundColor: 'rgba(255, 59, 59, 0.05)',
// // //   },
// // //   playlistInfo: {
// // //     flex: 1,
// // //     marginRight: wp(3),
// // //   },
// // //   playlistName: {
// // //     fontSize: wp(4.5),
// // //     fontWeight: '600',
// // //     color: '#fff',
// // //     marginBottom: hp(0.5),
// // //   },
// // //   playlistNameAdded: {
// // //     color: '#FF3B3B',
// // //   },
// // //   playlistStats: {
// // //     fontSize: wp(3.5),
// // //     color: '#b3b3b3',
// // //   },
// // //   addedIndicator: {
// // //     flexDirection: 'row',
// // //     alignItems: 'center',
// // //     backgroundColor: 'rgba(255, 59, 59, 0.1)',
// // //     paddingHorizontal: wp(3),
// // //     paddingVertical: wp(1.5),
// // //     borderRadius: wp(3),
// // //   },
// // //   addedText: {
// // //     color: '#FF3B3B',
// // //     fontSize: wp(3),
// // //     fontWeight: '600',
// // //     marginLeft: wp(1),
// // //   },
// // // });

// // // export default NowPlayingScreen;


// // // screens/NowPlayingScreen.tsx - FIXED MODAL & POPUP VERSION
// // import React, { useState, useRef, useEffect } from 'react';
// // import {
// //   View,
// //   Text,
// //   Image,
// //   TouchableOpacity,
// //   StyleSheet,
// //   Dimensions,
// //   SafeAreaView,
// //   StatusBar,
// //   Animated,
// //   Easing,
// //   FlatList,
// //   ActivityIndicator,
// //   Modal,
// //   Share
// // } from 'react-native';
// // import Icon from 'react-native-vector-icons/Ionicons';
// // import Slider from '@react-native-community/slider';
// // import { 
// //   getSongInfo, 
// //   addSongToPlaylist, 
// //   getUserPlaylists,
// //   checkSongLikeStatus,
// //   likeSong,
// //   unlikeSong
// // } from '../Services/mobile-api';
// // import { useAudio } from '../contexts/AudioContext';
// // import { wp, hp } from "../assets/Global.Css";

// // const { width, height } = Dimensions.get('window');

// // const NowPlayingScreen = ({ navigation, route }) => {
// //   const { songId, resetToBeginning = false } = route.params || {};

// //   const { 
// //     currentSong, 
// //     isPlaying, 
// //     currentTime, 
// //     duration, 
// //     togglePlayPause, 
// //     playSong,
// //     seekTo,
// //   } = useAudio();

// //   const [isLoading, setIsLoading] = useState(false);
// //   const [isLiked, setIsLiked] = useState(false);
// //   const [showPlaylistModal, setShowPlaylistModal] = useState(false);
// //   const [userPlaylists, setUserPlaylists] = useState([]);
// //   const [togglingLike, setTogglingLike] = useState(false);
// //   const [currentlyAddingPlaylist, setCurrentlyAddingPlaylist] = useState(null);
// //   const [downloading, setDownloading] = useState(false);
// //   const [playlistLoading, setPlaylistLoading] = useState(false);

// //   // ✅ STYLISH POPUP STATES
// //   const [showPopup, setShowPopup] = useState(false);
// //   const [popupTitle, setPopupTitle] = useState('');
// //   const [popupMessage, setPopupMessage] = useState('');
// //   const [popupType, setPopupType] = useState<'success' | 'error' | 'info'>('success');

// //   const rotateAnim = useRef(new Animated.Value(0)).current;
// //   const fadeAnim = useRef(new Animated.Value(0)).current;
// //   const modalSlideAnim = useRef(new Animated.Value(height)).current;

// //   // ✅ STYLISH POPUP FUNCTION
// //   const showStylishPopup = (type: 'success' | 'error' | 'info', title: string, message: string) => {
// //     setPopupType(type);
// //     setPopupTitle(title);
// //     setPopupMessage(message);
// //     setShowPopup(true);
    
// //     // Auto close after 3 seconds
// //     setTimeout(() => {
// //       setShowPopup(false);
// //     }, 3000);
// //   };

// //   // ✅ Screen open animation
// //   useEffect(() => {
// //     Animated.timing(fadeAnim, {
// //       toValue: 1,
// //       duration: 300,
// //       useNativeDriver: true,
// //     }).start();

// //     if (songId) {
// //       if (!currentSong || currentSong.id !== songId) {
// //         fetchSongInfo();
// //       }
// //       checkLikeStatus();
// //     }
// //   }, [songId]);

// //   // ✅ Modal animation control
// //   useEffect(() => {
// //     if (showPlaylistModal) {
// //       // Modal slide up animation
// //       Animated.timing(modalSlideAnim, {
// //         toValue: 0,
// //         duration: 300,
// //         easing: Easing.out(Easing.cubic),
// //         useNativeDriver: true,
// //       }).start();
// //     } else {
// //       // Modal slide down animation
// //       Animated.timing(modalSlideAnim, {
// //         toValue: height,
// //         duration: 250,
// //         easing: Easing.in(Easing.cubic),
// //         useNativeDriver: true,
// //       }).start();
// //     }
// //   }, [showPlaylistModal]);

// //   // ✅ Check like status
// //   const checkLikeStatus = async () => {
// //     try {
// //       const response = await checkSongLikeStatus(songId);
// //       if (response && response.success) {
// //         setIsLiked(response.isLiked || false);
// //       }
// //     } catch (error) {
// //       console.error('Error checking like status:', error);
// //     }
// //   };

// //   // ✅ Fetch song information
// //   const fetchSongInfo = async () => {
// //     try {
// //       setIsLoading(true);
// //       const numericSongId = typeof songId === 'string' ? parseInt(songId) : songId;
// //       const response = await getSongInfo(numericSongId);
      
// //       if (response && response.success) {
// //         const songData = {
// //           id: numericSongId,
// //           title: response.song?.title || 'Unknown Title',
// //           artist: response.song?.artist?.name || 'Unknown Artist',
// //           audioUrl: response.song?.audioFile 
// //             ? `http://103.119.171.213:3001${response.song.audioFile}`
// //             : 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
// //           artwork: response.song?.thumbnail || 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop'
// //         };
        
// //         playSong(songData);
// //       }
// //     } catch (error) {
// //       console.error('Song Info Error:', error);
// //       showStylishPopup('error', 'Error', 'Failed to load song');
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   // ✅ FIXED: LIKE/UNLIKE HANDLER - WITH PROPER MESSAGES
// //   const handleLikeToggle = async () => {
// //     if (!songId || togglingLike) return;

// //     try {
// //       setTogglingLike(true);
      
// //       if (isLiked) {
// //         const response = await unlikeSong(songId);
// //         if (response && response.success) {
// //           setIsLiked(false);
// //           showStylishPopup('success', 'Removed from Likes ❤️', 'Song removed from your liked songs');
// //         } else {
// //           setIsLiked(false);
// //           showStylishPopup('info', 'Already Removed', 'Song was already removed from likes');
// //         }
// //       } else {
// //         const response = await likeSong(songId);
// //         if (response && response.success) {
// //           setIsLiked(true);
// //           showStylishPopup('success', 'Added to Likes ❤️', 'Song added to your liked songs!');
// //         } else {
// //           setIsLiked(true);
// //           showStylishPopup('info', 'Already Liked', 'Song already in your liked songs');
// //         }
// //       }
// //     } catch (error) {
// //       console.error('Like toggle error:', error);
// //       if (error.message?.includes('already')) {
// //         showStylishPopup('info', 'Already Processed', 'Song status already updated');
// //       } else {
// //         showStylishPopup('error', 'Error', 'Failed to update likes. Please try again.');
// //       }
// //     } finally {
// //       setTogglingLike(false);
// //     }
// //   };

// //   // ✅ DOWNLOAD HANDLER
// //   const handleDownload = async () => {
// //     if (downloading) return;
    
// //     try {
// //       setDownloading(true);
// //       await new Promise(resolve => setTimeout(resolve, 2000));
// //       showStylishPopup('success', 'Download Started 📥', 'Song will be available in your downloads soon');
// //     } catch (error) {
// //       showStylishPopup('error', 'Download Failed', 'Failed to download song. Please try again.');
// //     } finally {
// //       setDownloading(false);
// //     }
// //   };

// //   // ✅ FIXED: SHARE HANDLER - ONLY SHOW SUCCESS WHEN ACTUALLY SHARED
// //   const handleShare = async () => {
// //     try {
// //       const shareOptions = {
// //         title: 'Check out this song!',
// //         message: `Listen to "${displaySongData.title}" by ${displaySongData.artist} on Afrofy`,
// //         url: displaySongData.artwork,
// //       };

// //       const result = await Share.share(shareOptions);
      
// //       if (result.action === Share.sharedAction) {
// //         showStylishPopup('success', 'Shared Successfully 📤', 'Song shared with your friends!');
// //       }
// //     } catch (error) {
// //       console.error('Share error:', error);
// //     }
// //   };

// //   // ✅ FIXED: FETCH USER PLAYLISTS - BETTER ERROR HANDLING
// //   const fetchUserPlaylists = async () => {
// //     try {
// //       setPlaylistLoading(true);
      
// //       const response = await getUserPlaylists();
      
// //       if (response && response.success) {
// //         const playlists = response.playlists || [];
        
// //         // ✅ DEEPER CHECK - Properly check if song exists in playlist
// //         const playlistsWithSongStatus = playlists.map(playlist => {
// //           const songExists = playlist.songs?.some(song => {
// //             const songIdNum = parseInt(songId);
// //             return song.id === songIdNum || song.id === songId || 
// //                    song.songId === songIdNum || song.songId === songId;
// //           }) || false;
          
// //           return {
// //             ...playlist,
// //             songExists
// //           };
// //         });
        
// //         setUserPlaylists(playlistsWithSongStatus);
// //         setShowPlaylistModal(true);
// //       } else {
// //         showStylishPopup('error', 'Failed to Load', 'Could not fetch your playlists. Please try again.');
// //       }
// //     } catch (error) {
// //       console.error('Fetch playlists error:', error);
// //       showStylishPopup('error', 'Network Error', 'Please check your internet connection and try again.');
// //     } finally {
// //       setPlaylistLoading(false);
// //     }
// //   };

// //   // ✅ FIXED: ADD TO PLAYLIST HANDLER - PROPER ERROR MESSAGES
// //   const handleAddToPlaylist = async (playlistId, playlistName, songAlreadyExists = false) => {
// //     // ✅ Agar song already playlist mein hai to message show karo
// //     if (songAlreadyExists) {
// //       showStylishPopup('info', 'Already Added', `"${displaySongData.title}" is already in "${playlistName}"`);
// //       return;
// //     }

// //     if (currentlyAddingPlaylist) return;

// //     try {
// //       setCurrentlyAddingPlaylist(playlistId);
      
// //       const response = await addSongToPlaylist(playlistId, songId);
      
// //       if (response && response.success) {
// //         // ✅ Update state to show song is added
// //         setUserPlaylists(prevPlaylists => 
// //           prevPlaylists.map(playlist => 
// //             playlist.id === playlistId 
// //               ? { ...playlist, songExists: true }
// //               : playlist
// //           )
// //         );
        
// //         showStylishPopup('success', 'Added to Playlist ✅', `"${displaySongData.title}" added to "${playlistName}"`);
        
// //         // ✅ Modal close after delay
// //         setTimeout(() => {
// //           setShowPlaylistModal(false);
// //         }, 1500);
        
// //       } else {
// //         // ✅ Handle different error cases
// //         if (response?.message?.includes('already') || response?.message?.includes('exists')) {
// //           setUserPlaylists(prevPlaylists => 
// //             prevPlaylists.map(playlist => 
// //               playlist.id === playlistId 
// //                 ? { ...playlist, songExists: true }
// //                 : playlist
// //             )
// //           );
// //           showStylishPopup('info', 'Already Added', `"${displaySongData.title}" is already in "${playlistName}"`);
// //         } else if (response?.message?.includes('not found') || response?.message?.includes('invalid')) {
// //           showStylishPopup('error', 'Playlist Not Found', 'The playlist could not be found. Please try again.');
// //         } else {
// //           showStylishPopup('error', 'Failed to Add', response?.message || 'Could not add song to playlist. Please try again.');
// //         }
// //       }
// //     } catch (error) {
// //       console.error('Add to playlist error:', error);
      
// //       // ✅ Network and other errors
// //       if (error.message?.includes('Network') || error.message?.includes('timeout')) {
// //         showStylishPopup('error', 'Network Error', 'Please check your internet connection and try again.');
// //       } else if (error.message?.includes('already') || error.message?.includes('exists')) {
// //         setUserPlaylists(prevPlaylists => 
// //           prevPlaylists.map(playlist => 
// //             playlist.id === playlistId 
// //               ? { ...playlist, songExists: true }
// //               : playlist
// //           )
// //         );
// //         showStylishPopup('info', 'Already Added', `"${displaySongData.title}" is already in "${playlistName}"`);
// //       } else {
// //         showStylishPopup('error', 'Something Went Wrong', 'Failed to add song to playlist. Please try again later.');
// //       }
// //     } finally {
// //       setCurrentlyAddingPlaylist(null);
// //     }
// //   };

// //   // ✅ SMOOTH MODAL CLOSE
// //   const handleCloseModal = () => {
// //     setShowPlaylistModal(false);
// //   };

// //   // ---- Controls ----
// //   const handlePlayPause = () => {
// //     togglePlayPause();
// //   };

// //   const handleSkipForward = () => {
// //     const newTime = Math.min((Number(currentTime) || 0) + 10, Number(duration) || 0);
// //     seekTo(newTime);
// //   };

// //   const handleSkipBackward = () => {
// //     const newTime = Math.max((Number(currentTime) || 0) - 10, 0);
// //     seekTo(newTime);
// //   };

// //   const handleGoBack = () => {
// //     navigation.goBack();
// //   };

// //   // ---- Animation ----
// //   const startRotation = () => {
// //     rotateAnim.setValue(0);
// //     Animated.loop(
// //       Animated.timing(rotateAnim, {
// //         toValue: 1,
// //         duration: 20000,
// //         easing: Easing.linear,
// //         useNativeDriver: true,
// //       })
// //     ).start();
// //   };

// //   const stopRotation = () => {
// //     rotateAnim.stopAnimation();
// //   };

// //   const rotateInterpolate = rotateAnim.interpolate({
// //     inputRange: [0, 1],
// //     outputRange: ['0deg', '360deg'],
// //   });

// //   // ---- Helpers ----
// //   const formatTime = (s) => {
// //     const sec = Number(s);
// //     const safeSec = Number.isFinite(sec) && sec >= 0 ? Math.floor(sec) : 0;
// //     const m = Math.floor(safeSec / 60);
// //     const r = Math.floor(safeSec % 60);
// //     return `${m}:${r < 10 ? '0' : ''}${r}`;
// //   };

// //   const displaySongData = currentSong ? {
// //     title: currentSong.title,
// //     artist: currentSong.artist,
// //     artwork: currentSong.artwork,
// //   } : {
// //     title: 'Loading...',
// //     artist: 'Unknown Artist',
// //     artwork: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop',
// //   };

// //   // Rotation control
// //   useEffect(() => {
// //     if (isPlaying) {
// //       startRotation();
// //     } else {
// //       stopRotation();
// //     }
// //   }, [isPlaying]);

// //   // ✅ STYLISH POPUP COMPONENT
// //   const StylishPopup = () => (
// //     <Modal
// //       visible={showPopup}
// //       transparent={true}
// //       animationType="fade"
// //       onRequestClose={() => setShowPopup(false)}
// //     >
// //       <View style={styles.popupOverlay}>
// //         <View style={styles.popupContainer}>
// //           <View style={[
// //             styles.popupIcon,
// //             popupType === 'success' && styles.popupIconSuccess,
// //             popupType === 'error' && styles.popupIconError,
// //             popupType === 'info' && styles.popupIconInfo
// //           ]}>
// //             <Icon 
// //               name={
// //                 popupType === 'success' ? 'checkmark-circle' :
// //                 popupType === 'error' ? 'close-circle' :
// //                 'information-circle'
// //               } 
// //               size={wp(12)} 
// //               color={
// //                 popupType === 'success' ? '#FF3B3B' :
// //                 popupType === 'error' ? '#FF5252' :
// //                 '#FF3B3B'
// //               }
// //             />
// //           </View>
          
// //           <Text style={styles.popupTitle}>{popupTitle}</Text>
// //           <Text style={styles.popupMessage}>{popupMessage}</Text>
          
// //           <TouchableOpacity
// //             style={[
// //               styles.popupButton,
// //               popupType === 'success' && styles.popupButtonSuccess,
// //               popupType === 'error' && styles.popupButtonError,
// //               popupType === 'info' && styles.popupButtonInfo
// //             ]}
// //             onPress={() => setShowPopup(false)}
// //           >
// //             <Text style={styles.popupButtonText}>OK</Text>
// //           </TouchableOpacity>
// //         </View>
// //       </View>
// //     </Modal>
// //   );

// //   // ✅ FIXED: PLAYLIST MODAL - SMOOTH ANIMATION
// //   const PlaylistModal = () => (
// //     <Modal
// //       visible={showPlaylistModal}
// //       transparent={true}
// //       animationType="none"
// //       onRequestClose={handleCloseModal}
// //     >
// //       <View style={styles.modalOverlay}>
// //         <TouchableOpacity 
// //           style={styles.modalBackdrop}
// //           activeOpacity={1}
// //           onPress={handleCloseModal}
// //         />
// //         <Animated.View 
// //           style={[
// //             styles.modalContainer,
// //             { transform: [{ translateY: modalSlideAnim }] }
// //           ]}
// //         >
// //           <View style={styles.modalHeader}>
// //             <Text style={styles.modalTitle}>Add to Playlist</Text>
// //             <TouchableOpacity 
// //               onPress={handleCloseModal}
// //               style={styles.closeButton}
// //             >
// //               <Icon name="close" size={wp(6)} color="#fff" />
// //             </TouchableOpacity>
// //           </View>

// //           <Text style={styles.modalSubtitle}>
// //             Add "{displaySongData.title}" to playlist
// //           </Text>

// //           {playlistLoading ? (
// //             <View style={styles.loadingContainer}>
// //               <ActivityIndicator size="large" color="#FF3B3B" />
// //               <Text style={styles.loadingText}>Loading your playlists...</Text>
// //             </View>
// //           ) : userPlaylists.length === 0 ? (
// //             <View style={styles.emptyPlaylists}>
// //               <Icon name="musical-notes-outline" size={wp(15)} color="#666" />
// //               <Text style={styles.emptyPlaylistsText}>No Playlists Found</Text>
// //               <Text style={styles.emptyPlaylistsSubtext}>
// //                 Create your first playlist to add songs
// //               </Text>
// //             </View>
// //           ) : (
// //             <FlatList
// //               data={userPlaylists}
// //               keyExtractor={(item) => item.id.toString()}
// //               renderItem={({ item }) => {
// //                 const isCurrentlyAdding = currentlyAddingPlaylist === item.id;
// //                 const songAlreadyExists = item.songExists || false;
                
// //                 return (
// //                   <TouchableOpacity
// //                     style={[
// //                       styles.playlistItem,
// //                       isCurrentlyAdding && styles.playlistItemDisabled,
// //                       songAlreadyExists && styles.playlistItemAlreadyAdded
// //                     ]}
// //                     onPress={() => handleAddToPlaylist(item.id, item.title, songAlreadyExists)}
// //                     disabled={isCurrentlyAdding || songAlreadyExists}
// //                     activeOpacity={0.7}
// //                   >
// //                     <View style={styles.playlistInfo}>
// //                       <Text style={[
// //                         styles.playlistName,
// //                         songAlreadyExists && styles.playlistNameAdded
// //                       ]} numberOfLines={1}>
// //                         {item.title}
// //                       </Text>
// //                       <Text style={styles.playlistStats}>
// //                         {item._count?.songs || 0} songs • {item.isPublic ? 'Public' : 'Private'}
// //                         {songAlreadyExists && ' • Already added'}
// //                       </Text>
// //                     </View>
                    
// //                     {isCurrentlyAdding ? (
// //                       <ActivityIndicator size="small" color="#FF3B3B" />
// //                     ) : songAlreadyExists ? (
// //                       <View style={styles.addedIndicator}>
// //                         <Icon name="checkmark" size={wp(4)} color="#FF3B3B" />
// //                         <Text style={styles.addedText}>Added</Text>
// //                       </View>
// //                     ) : (
// //                       <Icon name="add-circle" size={wp(6)} color="#FF3B3B" />
// //                     )}
// //                   </TouchableOpacity>
// //                 );
// //               }}
// //               style={styles.playlistList}
// //               showsVerticalScrollIndicator={false}
// //             />
// //           )}
// //         </Animated.View>
// //       </View>
// //     </Modal>
// //   );

// //   return (
// //     <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
// //       <StatusBar barStyle="light-content" backgroundColor="#000" />

// //       <StylishPopup />
// //       <PlaylistModal />

// //       {/* Header */}
// //       <View style={styles.header}>
// //         <TouchableOpacity onPress={handleGoBack} style={styles.headerButton}>
// //           <Icon name="arrow-back" size={wp(7)} color="#fff" />
// //         </TouchableOpacity>
        
// //         <View style={styles.headerCenter}>
// //           <Text style={styles.headerTitle}>NOW PLAYING</Text>
// //         </View>
        
// //         <TouchableOpacity style={styles.headerButton}>
// //           {/* <Icon name="ellipsis-horizontal" size={wp(6)} color="#fff" /> */}
// //         </TouchableOpacity>
// //       </View>

// //       {/* Album Art */}
// //       <View style={styles.albumArtContainer}>
// //         <Animated.View
// //           style={[
// //             styles.albumArtWrapper,
// //             {
// //               transform: [{ rotate: isPlaying ? rotateInterpolate : '0deg' }],
// //             },
// //           ]}
// //         >
// //           <Image
// //             source={{ uri: displaySongData.artwork }}
// //             style={styles.albumArt}
// //             resizeMode="cover"
// //           />
// //         </Animated.View>
// //       </View>

// //       {/* Song Info */}
// //       <View style={styles.songInfoContainer}>
// //         <View style={styles.songTextContainer}>
// //           <Text style={styles.songTitle} numberOfLines={2} ellipsizeMode="tail">
// //             {displaySongData.title}
// //           </Text>
// //           <Text style={styles.songArtist} numberOfLines={1} ellipsizeMode="tail">
// //             {displaySongData.artist}
// //           </Text>
// //         </View>

// //         {/* Action Buttons */}
// //         <View style={styles.actions}>
// //           <TouchableOpacity
// //             style={styles.actionButton}
// //             onPress={handleDownload}
// //             disabled={downloading}
// //           >
// //             {downloading ? (
// //               <ActivityIndicator size="small" color="#b3b3b3" />
// //             ) : (
// //               <Icon name="download-outline" size={wp(6)} color="#b3b3b3" />
// //             )}
// //           </TouchableOpacity>

// //           <TouchableOpacity
// //             style={styles.actionButton}
// //             onPress={handleShare}
// //           >
// //             <Icon name="share-social-outline" size={wp(6)} color="#b3b3b3" />
// //           </TouchableOpacity>

// //           <TouchableOpacity
// //             style={styles.actionButton}
// //             onPress={fetchUserPlaylists}
// //           >
// //             <Icon name="add" size={wp(6)} color="#b3b3b3" />
// //           </TouchableOpacity>

// //           <TouchableOpacity
// //             style={styles.likeButton}
// //             onPress={handleLikeToggle}
// //             disabled={togglingLike}
// //           >
// //             {togglingLike ? (
// //               <ActivityIndicator size="small" color="#FF3B3B" />
// //             ) : (
// //               <Icon
// //                 name={isLiked ? 'heart' : 'heart-outline'}
// //                 size={wp(6)}
// //                 color={isLiked ? '#FF3B3B' : '#b3b3b3'}
// //               />
// //             )}
// //           </TouchableOpacity>
// //         </View>
// //       </View>

// //       {/* Progress Bar */}
// //       <View style={styles.progressContainer}>
// //         <Slider
// //           style={styles.slider}
// //           minimumValue={0}
// //           maximumValue={duration > 0 ? duration : 1}
// //           value={currentTime}
// //           onSlidingComplete={(value) => seekTo(value)}
// //           minimumTrackTintColor="#fff"
// //           maximumTrackTintColor="#535353"
// //           thumbTintColor="#fff"
// //           thumbSize={wp(3)}
// //           disabled={isLoading}
// //         />
// //         <View style={styles.timeContainer}>
// //           <Text style={styles.timeText}>{formatTime(currentTime)}</Text>
// //           <Text style={styles.timeText}>{formatTime(duration)}</Text>
// //         </View>
// //       </View>

// //       {/* Controls */}
// //       <View style={styles.controls}>
// //         <TouchableOpacity style={styles.controlButton} onPress={handleSkipBackward}>
// //           <Icon name="play-skip-back" size={wp(8)} color="#fff" />
// //         </TouchableOpacity>

// //         <TouchableOpacity
// //           style={[styles.playButton, isLoading && styles.playButtonDisabled]}
// //           onPress={togglePlayPause}
// //           disabled={isLoading}
// //         >
// //           <Icon 
// //             name={isPlaying ? 'pause' : 'play'} 
// //             size={wp(8)} 
// //             color="#000" 
// //           />
// //         </TouchableOpacity>

// //         <TouchableOpacity style={styles.controlButton} onPress={handleSkipForward}>
// //           <Icon name="play-skip-forward" size={wp(8)} color="#fff" />
// //         </TouchableOpacity>
// //       </View>
// //     </Animated.View>
// //   );
// // };

// // // ✅ RESPONSIVE STYLES WITH FIXED MODAL
// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#000',
// //     paddingHorizontal: wp(4),
// //   },
// //   header: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     justifyContent: 'space-between',
// //     paddingVertical: hp(2),
// //     marginTop: hp(1),
// //   },
// //   headerButton: {
// //     padding: wp(2),
// //   },
// //   headerCenter: {
// //     alignItems: 'center',
// //     flex: 1,
// //   },
// //   headerTitle: {
// //     fontSize: wp(3.5),
// //     fontWeight: '600',
// //     color: '#fff',
// //     letterSpacing: 0.5,
// //   },
// //   albumArtContainer: {
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     marginVertical: hp(4),
// //   },
// //   albumArtWrapper: {
// //     width: wp(75),
// //     height: wp(75),
// //     borderRadius: wp(75) / 2,
// //     shadowColor: '#000',
// //     shadowOffset: { width: 0, height: 20 },
// //     shadowOpacity: 0.8,
// //     shadowRadius: 30,
// //     elevation: 25,
// //     overflow: 'hidden',
// //   },
// //   albumArt: {
// //     width: '100%',
// //     height: '100%',
// //   },
// //   songInfoContainer: {
// //     marginBottom: hp(4),
// //     alignItems: 'center',
// //   },
// //   songTextContainer: {
// //     alignItems: 'center',
// //     width: '100%',
// //     paddingHorizontal: wp(5),
// //     marginBottom: hp(3),
// //   },
// //   songTitle: {
// //     fontSize: wp(7),
// //     fontWeight: 'bold',
// //     color: '#fff',
// //     textAlign: 'center',
// //     marginBottom: hp(1),
// //     lineHeight: hp(4),
// //     width: '100%',
// //     maxWidth: wp(90),
// //   },
// //   songArtist: {
// //     fontSize: wp(4.5),
// //     color: '#b3b3b3',
// //     textAlign: 'center',
// //     width: '100%',
// //     maxWidth: wp(90),
// //   },
// //   actions: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     justifyContent: 'space-around',
// //     width: '100%',
// //     paddingHorizontal: wp(5),
// //   },
// //   actionButton: {
// //     padding: wp(3),
// //     backgroundColor: 'rgba(255, 255, 255, 0.1)',
// //     borderRadius: wp(8),
// //     width: wp(12),
// //     height: wp(12),
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   likeButton: {
// //     padding: wp(3),
// //     backgroundColor: 'rgba(255, 255, 255, 0.1)',
// //     borderRadius: wp(8),
// //     width: wp(12),
// //     height: wp(12),
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   progressContainer: {
// //     marginBottom: hp(4),
// //   },
// //   slider: {
// //     width: '100%',
// //     height: hp(4),
// //   },
// //   timeContainer: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     marginTop: hp(-1),
// //   },
// //   timeText: {
// //     fontSize: wp(3),
// //     color: '#b3b3b3',
// //     fontWeight: '500',
// //   },
// //   controls: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     justifyContent: 'space-around',
// //     marginBottom: hp(2),
// //     paddingHorizontal: wp(5),
// //   },
// //   controlButton: {
// //     padding: wp(3),
// //   },
// //   playButton: {
// //     backgroundColor: '#fff',
// //     width: wp(18),
// //     height: wp(18),
// //     borderRadius: wp(9),
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     shadowColor: '#fff',
// //     shadowOffset: { width: 0, height: 8 },
// //     shadowOpacity: 0.3,
// //     shadowRadius: 15,
// //     elevation: 15,
// //   },
// //   playButtonDisabled: {
// //     backgroundColor: '#666',
// //   },

// //   // ✅ IMPROVED POPUP STYLES
// //   popupOverlay: {
// //     flex: 1,
// //     backgroundColor: 'rgba(0, 0, 0, 0.8)',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     paddingHorizontal: wp(5),
// //   },
// //   popupContainer: {
// //     backgroundColor: '#1E1E1E',
// //     borderRadius: wp(5),
// //     paddingHorizontal: wp(6),
// //     paddingVertical: hp(4),
// //     alignItems: 'center',
// //     width: '100%',
// //     maxWidth: wp(85),
// //     borderWidth: 1,
// //     borderColor: '#333',
// //   },
// //   popupIcon: {
// //     marginBottom: hp(2),
// //     backgroundColor: 'rgba(255, 59, 59, 0.1)',
// //     borderRadius: wp(8),
// //     padding: wp(3),
// //   },
// //   popupIconSuccess: {
// //     backgroundColor: 'rgba(76, 175, 80, 0.1)',
// //   },
// //   popupIconError: {
// //     backgroundColor: 'rgba(255, 82, 82, 0.1)',
// //   },
// //   popupIconInfo: {
// //     backgroundColor: 'rgba(255, 59, 59, 0.1)',
// //   },
// //   popupTitle: {
// //     fontSize: wp(5.5),
// //     fontWeight: 'bold',
// //     color: '#fff',
// //     textAlign: 'center',
// //     marginBottom: hp(1.5),
// //   },
// //   popupMessage: {
// //     fontSize: wp(4),
// //     color: '#b3b3b3',
// //     textAlign: 'center',
// //     marginBottom: hp(3),
// //     lineHeight: hp(2.8),
// //   },
// //   popupButton: {
// //     backgroundColor: '#FF3B3B',
// //     borderRadius: wp(6),
// //     paddingVertical: hp(1.5),
// //     paddingHorizontal: wp(8),
// //     width: '100%',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   popupButtonSuccess: {
// //     backgroundColor: '#FF5252',
// //   },
// //   popupButtonError: {
// //     backgroundColor: '#FF5252',
// //   },
// //   popupButtonInfo: {
// //     backgroundColor: '#FF3B3B',
// //   },
// //   popupButtonText: {
// //     color: 'white',
// //     fontSize: wp(4.5),
// //     fontWeight: 'bold',
// //   },

// //   // ✅ FIXED MODAL STYLES
// //   modalOverlay: {
// //     flex: 1,
// //     backgroundColor: 'rgba(0,0,0,0.7)',
// //   },
// //   modalBackdrop: {
// //     flex: 1,
// //   },
// //   modalContainer: {
// //     backgroundColor: '#1a1a1a',
// //     borderTopLeftRadius: wp(5),
// //     borderTopRightRadius: wp(5),
// //     maxHeight: hp(80),
// //     paddingBottom: hp(3),
// //     position: 'absolute',
// //     bottom: 0,
// //     left: 0,
// //     right: 0,
// //   },
// //   modalHeader: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     padding: wp(5),
// //     borderBottomWidth: 1,
// //     borderBottomColor: '#333',
// //   },
// //   modalTitle: {
// //     fontSize: wp(5),
// //     fontWeight: 'bold',
// //     color: '#fff',
// //   },
// //   closeButton: {
// //     padding: wp(2),
// //   },
// //   modalSubtitle: {
// //     fontSize: wp(4),
// //     color: '#b3b3b3',
// //     paddingHorizontal: wp(5),
// //     paddingVertical: hp(2),
// //     borderBottomWidth: 1,
// //     borderBottomColor: '#333',
// //   },
// //   loadingContainer: {
// //     alignItems: 'center',
// //     padding: hp(8),
// //   },
// //   loadingText: {
// //     color: '#b3b3b3',
// //     marginTop: hp(2),
// //     fontSize: wp(4),
// //   },
// //   emptyPlaylists: {
// //     alignItems: 'center',
// //     padding: hp(8),
// //   },
// //   emptyPlaylistsText: {
// //     fontSize: wp(4.5),
// //     color: '#fff',
// //     marginTop: hp(2),
// //     marginBottom: hp(1),
// //   },
// //   emptyPlaylistsSubtext: {
// //     fontSize: wp(4),
// //     color: '#b3b3b3',
// //     textAlign: 'center',
// //   },
// //   playlistList: {
// //     maxHeight: hp(50),
// //   },
// //   playlistItem: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     justifyContent: 'space-between',
// //     padding: wp(4),
// //     borderBottomWidth: 1,
// //     borderBottomColor: '#333',
// //   },
// //   playlistItemDisabled: {
// //     opacity: 0.6,
// //   },
// //   playlistItemAlreadyAdded: {
// //     backgroundColor: 'rgba(175, 76, 76, 0.05)',
// //   },
// //   playlistInfo: {
// //     flex: 1,
// //     marginRight: wp(3),
// //   },
// //   playlistName: {
// //     fontSize: wp(4.5),
// //     fontWeight: '600',
// //     color: '#fff',
// //     marginBottom: hp(0.5),
// //   },
// //   playlistNameAdded: {
// //     color: '#FF3B3B',
// //   },
// //   playlistStats: {
// //     fontSize: wp(3.5),
// //     color: '#b3b3b3',
// //   },
// //   addedIndicator: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     backgroundColor: 'rgba(175, 99, 76, 0.1)',
// //     paddingHorizontal: wp(3),
// //     paddingVertical: wp(1.5),
// //     borderRadius: wp(3),
// //   },
// //   addedText: {
// //     color: '#FF3B3B',
// //     fontSize: wp(3),
// //     fontWeight: '600',
// //     marginLeft: wp(1),
// //   },
// // });

// // export default NowPlayingScreen;


 
// import React, { useState, useRef, useEffect } from 'react';
// import {
//   View,
//   Text,
//   Image,
//   TouchableOpacity,
//   StyleSheet,
//   Dimensions,
//   SafeAreaView,
//   StatusBar,
//   Animated,
//   Easing,
//   FlatList,
//   ActivityIndicator,
//   Modal,
//   Share,
//   Alert
// } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import Slider from '@react-native-community/slider';
// import { 
//   getSongInfo, 
//   addSongToPlaylist, 
//   getUserPlaylists,
//   checkSongLikeStatus,
//   likeSong,
//   unlikeSong
// } from '../Services/mobile-api';
// import { useAudio } from '../contexts/AudioContext';

// const { width } = Dimensions.get('window');

// const NowPlayingScreen = ({ navigation, route }) => {
//   const { songId, resetToBeginning = false } = route.params || {};

//   const { 
//     currentSong, 
//     isPlaying, 
//     currentTime, 
//     duration, 
//     togglePlayPause, 
//     playSong,
//     seekTo,
//   } = useAudio();

//   const [isLoading, setIsLoading] = useState(false);
//   const [isLiked, setIsLiked] = useState(false);
//   const [songInfo, setSongInfo] = useState(null);
//   const [debugInfo, setDebugInfo] = useState('');
//   const [showPlaylistModal, setShowPlaylistModal] = useState(false);
//   const [userPlaylists, setUserPlaylists] = useState([]);
//   const [addingToPlaylist, setAddingToPlaylist] = useState(false);
//   const [checkingLikeStatus, setCheckingLikeStatus] = useState(false);
//   const [togglingLike, setTogglingLike] = useState(false);
//   const [currentlyAddingPlaylist, setCurrentlyAddingPlaylist] = useState(null);

//   // ✅ STYLISH POPUP STATES
//   const [showPopup, setShowPopup] = useState(false);
//   const [popupTitle, setPopupTitle] = useState('');
//   const [popupMessage, setPopupMessage] = useState('');
//   const [popupType, setPopupType] = useState<'success' | 'error' | 'info'>('success');

//   const rotateAnim = useRef(new Animated.Value(0)).current;
//   const scaleAnim = useRef(new Animated.Value(1)).current;

//   // ✅ STYLISH POPUP FUNCTION
//   const showStylishPopup = (type: 'success' | 'error' | 'info', title: string, message: string) => {
//     setPopupType(type);
//     setPopupTitle(title);
//     setPopupMessage(message);
//     setShowPopup(true);
    
//     // Auto close after 3 seconds
//     setTimeout(() => {
//       setShowPopup(false);
//     }, 3000);
//   };

//   // ✅ Jab screen open ho to check karo kya karna hai
//   useEffect(() => {
//     if (songId) {
//       console.log('🎵 NowPlayingScreen opened - Reset flag:', resetToBeginning);
      
//       if (!currentSong || currentSong.id !== songId) {
//         fetchSongInfo();
//       } else if (resetToBeginning) {
//         console.log('🔄 Resetting song to beginning');
//         handleResetToBeginning();
//       }
      
//       // ✅ Check if song is already liked
//       checkLikeStatus();
//     }
//   }, [songId, resetToBeginning]);

//   // ✅ Check if current song is liked - FIXED VERSION
//   const checkLikeStatus = async () => {
//     try {
//       setCheckingLikeStatus(true);
//       console.log('❤️ Checking like status for song:', songId);
      
//       const response = await checkSongLikeStatus(songId);
//       console.log('❤️ Like status API response:', response);
      
//       if (response && response.success) {
//         // ✅ Direct response check karo (separate API hai)
//         const liked = response.isLiked || false;
//         setIsLiked(liked);
//         console.log('✅ Song like status:', liked ? 'Liked ❤️' : 'Not liked 🤍');
//       } else {
//         setIsLiked(false);
//         console.log('❌ Like status API failed');
//       }
//     } catch (error) {
//       console.error('❌ Error checking like status:', error);
//       // Fallback - assume not liked
//       setIsLiked(false);
//     } finally {
//       setCheckingLikeStatus(false);
//     }
//   };

//   // ✅ Fetch song information
//   const fetchSongInfo = async () => {
//     try {
//       setIsLoading(true);
//       const numericSongId = typeof songId === 'string' ? parseInt(songId) : songId;
//       const response = await getSongInfo(numericSongId);
      
//       if (response && response.success) {
//         const songData = {
//           id: numericSongId,
//           title: response.song?.title || 'Unknown Title',
//           artist: response.song?.artist?.name || 'Unknown Artist',
//           audioUrl: response.song?.audioFile 
//             ? `http://103.119.171.213:3001${response.song.audioFile}`
//             : 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
//           artwork: response.song?.thumbnail || 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop'
//         };
        
//         playSong(songData);
//       }
//     } catch (error) {
//       console.error('❌ Song Info Error:', error);
//       showStylishPopup('error', 'Error', 'Failed to load song');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // ✅ SONG LIKE/UNLIKE HANDLER - WITH STYLISH POPUPS
//   const handleLikeToggle = async () => {
//     console.log('❤️ Like button pressed, songId:', songId, 'Currently liked:', isLiked);
    
//     if (!songId) {
//       console.log('❌ No song ID available');
//       showStylishPopup('error', 'Error', 'Song information not available');
//       return;
//     }

//     // ✅ Agar already process chal raha hai to rok do
//     if (togglingLike) {
//       console.log('🛑 Like toggle already in progress');
//       return;
//     }

//     try {
//       setTogglingLike(true);
      
//       if (isLiked) {
//         // Unlike song
//         console.log('🗑️ Unliking song:', songId);
//         const response = await unlikeSong(songId);
//         console.log('🗑️ Unlike response:', response);
        
//         if (response && response.success) {
//           setIsLiked(false);
//           console.log('✅ Song unliked successfully');
//           showStylishPopup('success', 'Removed from Likes ❤️', 'Song removed from your liked songs');
//         } else {
//           // ✅ Agar song already unliked hai to bhi state update karo
//           if (response?.message?.includes('already') || response?.message?.includes('not liked')) {
//             setIsLiked(false);
//             console.log('ℹ️ Song was already unliked');
//             showStylishPopup('info', 'Already Removed', 'Song already removed from liked songs');
//           } else {
//             throw new Error(response?.message || 'Failed to unlike song');
//           }
//         }
//       } else {
//         // Like song
//         console.log('➕ Liking song:', songId);
//         const response = await likeSong(songId);
//         console.log('➕ Like response:', response);
        
//         if (response && response.success) {
//           setIsLiked(true);
//           console.log('✅ Song liked successfully');
//           showStylishPopup('success', 'Added to Likes ❤️', 'Song added to your liked songs!');
//         } else {
//           // ✅ Agar song already liked hai to bhi state update karo
//           if (response?.message?.includes('already') || response?.message?.includes('already liked')) {
//             setIsLiked(true);
//             console.log('ℹ️ Song was already liked');
//             showStylishPopup('info', 'Already Liked', 'This song is already in your liked songs');
//           } else {
//             throw new Error(response?.message || 'Failed to like song');
//           }
//         }
//       }
//     } catch (error) {
//       console.error('❌ Like toggle error:', error);
      
//       // ✅ Better error messages with specific cases
//       if (error.message.includes('already liked') || error.message.includes('already exists')) {
//         setIsLiked(true); // UI sync karo
//         showStylishPopup('info', 'Already Liked', 'This song is already in your liked songs');
//       } else if (error.message.includes('not liked') || error.message.includes('already unliked')) {
//         setIsLiked(false); // UI sync karo
//         showStylishPopup('info', 'Already Removed', 'Song was already removed from liked songs');
//       } else {
//         showStylishPopup('error', 'Error', 'Failed to update likes. Please try again.');
//       }
//     } finally {
//       setTogglingLike(false);
//     }
//   };

//   // ✅ Fetch user playlists for add to playlist modal
//   const fetchUserPlaylists = async () => {
//     try {
//       console.log('📋 Fetching user playlists...');
//       const response = await getUserPlaylists();
      
//       if (response && response.success) {
//         setUserPlaylists(response.playlists || []);
//         setShowPlaylistModal(true);
//       } else {
//         showStylishPopup('error', 'Error', 'Failed to fetch playlists');
//       }
//     } catch (error) {
//       console.error('❌ Fetch playlists error:', error);
//       showStylishPopup('error', 'Error', 'Failed to load playlists');
//     }
//   };

//   // ✅ Add current song to playlist - WITH STYLISH POPUPS
//   const handleAddToPlaylist = async (playlistId, playlistName) => {
//     // ✅ Prevent multiple simultaneous additions
//     if (currentlyAddingPlaylist) {
//       console.log('🛑 Already adding to another playlist');
//       return;
//     }

//     try {
//       setCurrentlyAddingPlaylist(playlistId);
//       setAddingToPlaylist(true);
      
//       console.log(`➕ Adding song ${songId} to playlist ${playlistId} (${playlistName})`);
      
//       const response = await addSongToPlaylist(playlistId, songId);
      
//       if (response.success) {
//         showStylishPopup('success', 'Added to Playlist ✅', `"${displaySongData.title}" added to "${playlistName}"`);
//         setShowPlaylistModal(false);
//       } else {
//         if (response.message?.includes('already') || response.message?.includes('exists')) {
//           showStylishPopup('info', 'Already Added', `"${displaySongData.title}" is already in "${playlistName}"`);
//         } else {
//           showStylishPopup('error', 'Error', response.message || 'Failed to add song');
//         }
//       }
//     } catch (error) {
//       console.error('❌ Add to playlist error:', error);
      
//       // ✅ Better error messages
//       if (error.message === 'SONG_ALREADY_EXISTS') {
//         showStylishPopup('info', 'Already Added', `"${displaySongData.title}" is already in "${playlistName}"`);
//       } else if (error.message.includes('already') || error.message.includes('exists')) {
//         showStylishPopup('info', 'Already Added', 'This song is already in the playlist');
//       } else if (error.message.includes('Failed') || error.message.includes('Error')) {
//         showStylishPopup('error', 'Error', 'Failed to add song to playlist. Please try again.');
//       } else {
//         showStylishPopup('error', 'Error', error.message || 'Failed to add song to playlist');
//       }
//     } finally {
//       setAddingToPlaylist(false);
//       setCurrentlyAddingPlaylist(null);
//     }
//   };

//   // ✅ Song ko start se reset karo
//   const handleResetToBeginning = () => {
//     seekTo(0);
    
//     if (isPlaying) {
//       setTimeout(() => {
//         togglePlayPause(); // Pause
//         setTimeout(() => {
//           togglePlayPause(); // Play (start se)
//         }, 100);
//       }, 50);
//     }
//   };

//   // ---- Rotation ----
//   const startRotation = () => {
//     rotateAnim.setValue(0);
//     Animated.loop(
//       Animated.timing(rotateAnim, {
//         toValue: 1,
//         duration: 20000,
//         easing: Easing.linear,
//         useNativeDriver: true,
//       })
//     ).start();
//   };

//   const stopRotation = () => {
//     try {
//       rotateAnim.stopAnimation();
//     } catch (e) {
//       // ignore
//     }
//   };

//   const rotateInterpolate = rotateAnim.interpolate({
//     inputRange: [0, 1],
//     outputRange: ['0deg', '360deg'],
//   });

//   // ---- Controls ----
//   const handlePlayPause = () => {
//     togglePlayPause();
    
//     Animated.sequence([
//       Animated.timing(scaleAnim, { toValue: 0.92, duration: 100, useNativeDriver: true }),
//       Animated.timing(scaleAnim, { toValue: 1, duration: 120, useNativeDriver: true }),
//     ]).start();
//   };

//   const handleSkipForward = () => {
//     const newTime = Math.min((Number(currentTime) || 0) + 15, Number(duration) || 0);
//     seekTo(newTime);
//   };

//   const handleSkipBackward = () => {
//     const newTime = Math.max((Number(currentTime) || 0) - 15, 0);
//     seekTo(newTime);
//   };

//   const handleGoBack = () => {
//     navigation.goBack();
//   };

//   const handleReloadAudio = () => {
//     if (songId) {
//       fetchSongInfo();
//     }
//   };

//   // ✅ Reset song to start manually
//   const handleResetToBeginningManual = () => {
//     seekTo(0);
//     if (!isPlaying) {
//       togglePlayPause();
//     }
//   };

//   // ---- Helpers ----
//   const formatTime = (s) => {
//     const sec = Number(s);
//     const safeSec = Number.isFinite(sec) && sec >= 0 ? Math.floor(sec) : 0;
//     const m = Math.floor(safeSec / 60);
//     const r = Math.floor(safeSec % 60);
//     return `${m}:${r < 10 ? '0' : ''}${r}`;
//   };

//   const safeDurationNum = Number(duration) || 0;
//   const sliderValue = Math.min(Number(currentTime) || 0, safeDurationNum);

//   // ✅ Current song data - API RESPONSE KE ACCORDING UPDATE
//   const displaySongData = currentSong ? {
//     title: currentSong.title,
//     artist: currentSong.artist,
//     artwork: currentSong.artwork,
//     album: currentSong.album || 'Unknown Album'
//   } : songInfo ? {
//     title: songInfo.song?.title || 'Unknown Title',
//     artist: songInfo.song?.artist?.name || songInfo.song?.artist?.stageName || 'Unknown Artist',
//     artwork: songInfo.song?.thumbnail || songInfo.song?.coverImage || songInfo.song?.artist?.profilePic || 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop',
//     album: songInfo.song?.album || 'Unknown Album'
//   } : {
//     title: 'Loading...',
//     artist: 'Unknown Artist',
//     artwork: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop',
//     album: 'Unknown Album'
//   };

//   // Rotation control based on play state
//   useEffect(() => {
//     if (isPlaying) {
//       startRotation();
//     } else {
//       stopRotation();
//     }
//   }, [isPlaying]);

//   // ✅ STYLISH POPUP COMPONENT
//   const StylishPopup = () => (
//     <Modal
//       visible={showPopup}
//       transparent={true}
//       animationType="fade"
//       onRequestClose={() => setShowPopup(false)}
//     >
//       <View style={styles.popupOverlay}>
//         <View style={styles.popupContainer}>
//           {/* Popup Icon */}
//           <View style={styles.popupIcon}>
//             <Icon 
//               name={
//                 popupType === 'success' ? 'checkmark-circle' :
//                 popupType === 'error' ? 'close-circle' :
//                 'information-circle'
//               } 
//               size={35} 
//               color="#FF3B3B"
//             />
//           </View>
          
//           {/* Popup Title */}
//           <Text style={styles.popupTitle}>{popupTitle}</Text>
          
//           {/* Popup Message */}
//           <Text style={styles.popupMessage}>{popupMessage}</Text>
          
//           {/* Close Button */}
//           <TouchableOpacity
//             style={styles.popupButton}
//             onPress={() => setShowPopup(false)}
//           >
//             <Text style={styles.popupButtonText}>OK</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </Modal>
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="light-content" backgroundColor="#000" />

//       {/* ✅ STYLISH POPUP */}
//       <StylishPopup />

//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={handleGoBack} style={styles.headerButton}>
//           <Icon name="arrow-back" size={25} color="#fff" />
//         </TouchableOpacity>

//         <View style={styles.headerCenter}>
//           <Text style={styles.headerTitle} numberOfLines={1}>
//             NOW PLAYING
//           </Text>
//         </View>

//         <TouchableOpacity style={styles.headerButton}>
//           {/* Empty for alignment */}
//         </TouchableOpacity>
//       </View>

//       {/* Album Art */}
//       <View style={styles.albumArtContainer}>
//         <Animated.View
//           style={[
//             styles.albumArtWrapper,
//             {
//               transform: [{ rotate: isPlaying ? rotateInterpolate : '0deg' }],
//             },
//           ]}
//         >
//           <Image
//             source={{ uri: displaySongData.artwork }}
//             style={styles.albumArt}
//             resizeMode="cover"
//           />
//         </Animated.View>

//         <View style={styles.vinylRing} />
//         <View style={styles.vinylRing2} />
//       </View>

//       {/* Info & Actions */}
//       <View style={styles.songInfo}>
//         <View style={styles.songText}>
//           <Text style={styles.songTitle} numberOfLines={1}>
//             {displaySongData.title}
//           </Text>
//           <Text style={styles.songArtist} numberOfLines={1}>
//             {displaySongData.artist}
//           </Text>
//         </View>

//         <View style={styles.actions}>
//           {/* ✅ ADD SONG TO PLAYLIST BUTTON */}
//           <TouchableOpacity
//             style={styles.actionButton}
//             onPress={fetchUserPlaylists}
//           >
//             <Icon name="add" size={24} color="#fff" />
//           </TouchableOpacity>

//           {/* ✅ FIXED SONG LIKE BUTTON - RED HEART WHEN LIKED */}
//           <TouchableOpacity
//             style={styles.actionButton}
//             onPress={handleLikeToggle}
//             disabled={togglingLike || checkingLikeStatus}
//           >
//             {togglingLike || checkingLikeStatus ? (
//               <ActivityIndicator size="small" color="#FF3B3B" />
//             ) : (
//               <Icon
//                 name={isLiked ? 'heart' : 'heart-outline'}
//                 size={24}
//                 color={isLiked ? '#FF3B3B' : '#fff'}
//               />
//             )}
//           </TouchableOpacity>
          
//           <TouchableOpacity style={styles.actionButton}>
//             <Icon name="download-outline" size={24} color="#fff" />
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.actionButton}>
//             <Icon name="share-outline" size={24} color="#fff" />
//           </TouchableOpacity>
//         </View>
//       </View>

//       {/* Progress */}
//       <View style={styles.progressContainer}>
//         <Slider
//           style={styles.slider}
//           minimumValue={0}
//           maximumValue={duration > 0 ? duration : 1}
//           value={currentTime}
//           onSlidingComplete={(value) => seekTo(value)}
//           minimumTrackTintColor="#FF3B3B"
//           maximumTrackTintColor="#333"
//           thumbTintColor="#FF3B3B"
//           disabled={isLoading}
//         />
//         <View style={styles.timeContainer}>
//           <Text style={styles.timeText}>{formatTime(currentTime)}</Text>
//           <Text style={styles.timeText}>{formatTime(duration)}</Text>
//         </View>
//       </View>

//       {/* Controls */}
//       <View style={styles.controls}>
//         <TouchableOpacity style={styles.controlButton}>
//           <Icon name="shuffle" size={24} color="#b3b3b3" />
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.controlButton} onPress={handleSkipBackward}>
//           <Icon name="play-skip-back" size={32} color="#fff" />
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={[styles.playButton, isLoading && styles.playButtonDisabled]}
//           onPress={togglePlayPause}
//           disabled={isLoading}
//         >
//           {isLoading ? (
//             <Text style={styles.loadingText}>...</Text>
//           ) : (
//             <Icon name={isPlaying ? 'pause' : 'play'} size={36} color="#000" />
//           )}
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.controlButton} onPress={handleSkipForward}>
//           <Icon name="play-skip-forward" size={32} color="#fff" />
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.controlButton}>
//           <Icon name="repeat" size={24} color="#b3b3b3" />
//         </TouchableOpacity>
//       </View>

//       {/* ✅ STYLISH PLAYLIST MODAL */}
//       <Modal
//         visible={showPlaylistModal}
//         transparent={true}
//         animationType="slide"
//         onRequestClose={() => setShowPlaylistModal(false)}
//       >
//         <View style={styles.modalOverlay}>
//           <View style={styles.modalContent}>
//             {/* ✅ STYLISH MODAL HEADER */}
//             <View style={styles.modalHeader}>
//               <View style={styles.modalTitleContainer}>
//                 <Icon name="musical-notes" size={24} color="#FF3B3B" style={styles.modalTitleIcon} />
//                 <Text style={styles.modalTitle}>Add to Playlist</Text>
//               </View>
//               <TouchableOpacity 
//                 onPress={() => setShowPlaylistModal(false)}
//                 style={styles.closeButton}
//               >
//                 <Icon name="close" size={24} color="#fff" />
//               </TouchableOpacity>
//             </View>

//             {/* ✅ STYLISH SUBTITLE */}
//             <View style={styles.modalSubtitleContainer}>
//               <Text style={styles.modalSubtitle}>
//                 Add to playlist
//               </Text>
//               <Text style={styles.songTitleInModal} numberOfLines={1}>
//                 "{displaySongData.title}"
//               </Text>
//             </View>

//             {userPlaylists.length === 0 ? (
//               <View style={styles.emptyPlaylists}>
//                 <Icon name="musical-notes-outline" size={48} color="#666" />
//                 <Text style={styles.emptyPlaylistsText}>No playlists found</Text>
//                 <Text style={styles.emptyPlaylistsSubtext}>
//                   Create a playlist first to add songs
//                 </Text>
//               </View>
//             ) : (
//               <FlatList
//                 data={userPlaylists}
//                 keyExtractor={(item) => item.id}
//                 renderItem={({ item }) => {
//                   const isCurrentlyAdding = currentlyAddingPlaylist === item.id;
                  
//                   return (
//                     <TouchableOpacity
//                       style={[
//                         styles.playlistItem,
//                         isCurrentlyAdding && styles.playlistItemDisabled
//                       ]}
//                       onPress={() => {
//                         if (!isCurrentlyAdding) {
//                           handleAddToPlaylist(item.id, item.title);
//                         }
//                       }}
//                       disabled={isCurrentlyAdding}
//                       activeOpacity={0.7}
//                     >
//                       <View style={styles.playlistInfo}>
//                         <View style={styles.playlistIconContainer}>
//                           <Icon name="musical-notes" size={20} color="#FF3B3B" />
//                         </View>
//                         <View style={styles.playlistTextContainer}>
//                           <Text style={styles.playlistName}>{item.title}</Text>
//                           <Text style={styles.playlistStats}>
//                             {item._count?.songs || 0} songs • {item.isPublic ? 'Public' : 'Private'}
//                           </Text>
//                         </View>
//                       </View>
                      
//                       {/* ✅ STYLISH LOADING/ADD ICON */}
//                       {isCurrentlyAdding ? (
//                         <View style={styles.addingContainer}>
//                           <ActivityIndicator size="small" color="#FF3B3B" />
//                         </View>
//                       ) : (
//                         <View style={styles.addIconContainer}>
//                           <Icon name="add-circle" size={24} color="#FF3B3B" />
//                         </View>
//                       )}
//                     </TouchableOpacity>
//                   );
//                 }}
//                 style={styles.playlistList}
//                 showsVerticalScrollIndicator={false}
//               />
//             )}
//           </View>
//         </View>
//       </Modal>
//     </SafeAreaView>
//   );
// };

// // ✅ STYLISH STYLES
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//     paddingHorizontal: 24,
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingVertical: 16,
//   },
//   headerButton: {
//     padding: 8,
//   },
//   headerCenter: {
//     alignItems: 'center',
//     flex: 1,
//     paddingHorizontal: 20,
//   },
//   headerTitle: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: '#fff',
//     letterSpacing: 1,
//   },
//   albumArtContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginVertical: 30,
//     position: 'relative',
//   },
//   albumArtWrapper: {
//     width: width * 0.75,
//     height: width * 0.75,
//     borderRadius: width * 0.375,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 10 },
//     shadowOpacity: 0.8,
//     shadowRadius: 20,
//     elevation: 20,
//     overflow: 'hidden',
//   },
//   albumArt: {
//     width: '100%',
//     height: '100%',
//   },
//   vinylRing: {
//     position: 'absolute',
//     width: width * 0.85,
//     height: width * 0.85,
//     borderRadius: width * 0.425,
//     borderWidth: 2,
//     borderColor: 'rgba(255,255,255,0.1)',
//   },
//   vinylRing2: {
//     position: 'absolute',
//     width: width * 0.9,
//     height: width * 0.9,
//     borderRadius: width * 0.45,
//     borderWidth: 1,
//     borderColor: 'rgba(255,255,255,0.05)',
//   },
//   songInfo: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginBottom: 24,
//   },
//   songText: {
//     flex: 1,
//   },
//   songTitle: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#fff',
//     marginBottom: 4,
//   },
//   songArtist: {
//     fontSize: 16,
//     color: '#b3b3b3',
//   },
//   actions: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   actionButton: {
//     padding: 12,
//     marginLeft: 8,
//   },
//   progressContainer: {
//     marginBottom: 32,
//   },
//   slider: {
//     width: '100%',
//     height: 40,
//   },
//   timeContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: -10,
//   },
//   timeText: {
//     fontSize: 12,
//     color: '#b3b3b3',
//   },
//   controls: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginBottom: 32,
//     paddingHorizontal: 20,
//   },
//   controlButton: {
//     padding: 12,
//   },
//   playButton: {
//     backgroundColor: '#FF3B3B',
//     width: 70,
//     height: 70,
//     borderRadius: 35,
//     justifyContent: 'center',
//     alignItems: 'center',
//     shadowColor: '#FF3B3B',
//     shadowOffset: { width: 0, height: 8 },
//     shadowOpacity: 0.4,
//     shadowRadius: 16,
//     elevation: 16,
//   },
//   playButtonDisabled: {
//     backgroundColor: '#666',
//   },
//   loadingText: {
//     color: '#000',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },

//   // ✅ STYLISH POPUP STYLES
//   popupOverlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.8)',
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//   },
//   popupContainer: {
//     backgroundColor: '#1E1E1E',
//     borderRadius: 20,
//     paddingHorizontal: 24,
//     paddingVertical: 32,
//     alignItems: 'center',
//     width: '100%',
//     maxWidth: 320,
//     borderWidth: 2,
//     borderColor: '#FF3B3B',
//     shadowColor: '#FF3B3B',
//     shadowOffset: { width: 0, height: 10 },
//     shadowOpacity: 0.3,
//     shadowRadius: 20,
//     elevation: 10,
//   },
//   popupIcon: {
//     marginBottom: 16,
//     backgroundColor: 'rgba(255, 59, 59, 0.1)',
//     borderRadius: 50,
//     padding: 16,
//   },
//   popupTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#fff',
//     textAlign: 'center',
//     marginBottom: 12,
//   },
//   popupMessage: {
//     fontSize: 16,
//     color: '#b3b3b3',
//     textAlign: 'center',
//     marginBottom: 24,
//     lineHeight: 22,
//   },
//   popupButton: {
//     backgroundColor: '#FF3B3B',
//     borderRadius: 25,
//     paddingVertical: 12,
//     paddingHorizontal: 32,
//     width: '100%',
//     justifyContent: 'center',
//     alignItems: 'center',
//     shadowColor: '#FF3B3B',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     elevation: 6,
//   },
//   popupButtonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },

//   // ✅ STYLISH MODAL STYLES
//   modalOverlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0,0,0,0.7)',
//     justifyContent: 'flex-end',
//   },
//   modalContent: {
//     backgroundColor: '#1a1a1a',
//     borderTopLeftRadius: 25,
//     borderTopRightRadius: 25,
//     maxHeight: '80%',
//     paddingBottom: 20,
//   },
//   modalHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 20,
//     borderBottomWidth: 1,
//     borderBottomColor: '#333',
//   },
//   modalTitleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   modalTitleIcon: {
//     marginRight: 12,
//   },
//   modalTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#fff',
//   },
//   closeButton: {
//     padding: 8,
//     backgroundColor: 'rgba(255,255,255,0.1)',
//     borderRadius: 20,
//   },
//   modalSubtitleContainer: {
//     paddingHorizontal: 20,
//     paddingVertical: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#333',
//   },
//   modalSubtitle: {
//     fontSize: 14,
//     color: '#b3b3b3',
//     marginBottom: 4,
//   },
//   songTitleInModal: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#fff',
//   },
//   emptyPlaylists: {
//     alignItems: 'center',
//     padding: 40,
//   },
//   emptyPlaylistsText: {
//     fontSize: 18,
//     color: '#fff',
//     marginTop: 16,
//     marginBottom: 8,
//   },
//   emptyPlaylistsSubtext: {
//     fontSize: 14,
//     color: '#b3b3b3',
//     textAlign: 'center',
//   },
//   playlistList: {
//     maxHeight: 400,
//   },
//   playlistItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     padding: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#333',
//   },
//   playlistItemDisabled: {
//     opacity: 0.6,
//   },
//   playlistInfo: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   playlistIconContainer: {
//     backgroundColor: 'rgba(255, 59, 59, 0.1)',
//     padding: 12,
//     borderRadius: 12,
//     marginRight: 12,
//   },
//   playlistTextContainer: {
//     flex: 1,
//   },
//   playlistName: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#fff',
//     marginBottom: 4,
//   },
//   playlistStats: {
//     fontSize: 12,
//     color: '#b3b3b3',
//   },
//   addingContainer: {
//     padding: 8,
//   },
//   addIconContainer: {
//     padding: 8,
//   },
// });

// export default NowPlayingScreen; 


import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  StatusBar,
  Animated,
  Easing,
  FlatList,
  ActivityIndicator,
  Modal,
  Share,
  Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Slider from '@react-native-community/slider';
import { 
  getSongInfo, 
  addSongToPlaylist, 
  getUserPlaylists,
  checkSongLikeStatus,
  likeSong,
  unlikeSong
} from '../Services/mobile-api';
import { useAudio } from '../contexts/AudioContext';
import { wp, hp } from "../assets/Global.Css";

const { width } = Dimensions.get('window');

const NowPlayingScreen = ({ navigation, route }) => {
  const { songId, resetToBeginning = false } = route.params || {};

  const { 
    currentSong, 
    isPlaying, 
    currentTime, 
    duration, 
    togglePlayPause, 
    playSong,
    seekTo,
  } = useAudio();

  const [isLoading, setIsLoading] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [songInfo, setSongInfo] = useState(null);
  const [showPlaylistModal, setShowPlaylistModal] = useState(false);
  const [userPlaylists, setUserPlaylists] = useState([]);
  const [addingToPlaylist, setAddingToPlaylist] = useState(false);
  const [checkingLikeStatus, setCheckingLikeStatus] = useState(false);
  const [togglingLike, setTogglingLike] = useState(false);
  const [currentlyAddingPlaylist, setCurrentlyAddingPlaylist] = useState(null);

  // Popup states
  const [showPopup, setShowPopup] = useState(false);
  const [popupTitle, setPopupTitle] = useState('');
  const [popupMessage, setPopupMessage] = useState('');
  const [popupType, setPopupType] = useState('success');

  const rotateAnim = useRef(new Animated.Value(0)).current;

  // Popup function
  const showStylishPopup = (type, title, message) => {
    setPopupType(type);
    setPopupTitle(title);
    setPopupMessage(message);
    setShowPopup(true);
    
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  // Component mount pe data fetch
  useEffect(() => {
    if (songId) {
      if (!currentSong || currentSong.id !== songId) {
        fetchSongInfo();
      } else if (resetToBeginning) {
        handleResetToBeginning();
      }
      checkLikeStatus();
    }
  }, [songId, resetToBeginning]);

  // Check if current song is liked
  const checkLikeStatus = async () => {
    try {
      setCheckingLikeStatus(true);
      const response = await checkSongLikeStatus(songId);
      
      if (response && response.success) {
        setIsLiked(response.isLiked || false);
      } else {
        setIsLiked(false);
      }
    } catch (error) {
      console.error('Error checking like status:', error);
      setIsLiked(false);
    } finally {
      setCheckingLikeStatus(false);
    }
  };

  // Fetch song information
  const fetchSongInfo = async () => {
    try {
      setIsLoading(true);
      const numericSongId = typeof songId === 'string' ? parseInt(songId) : songId;
      const response = await getSongInfo(numericSongId);
      
      if (response && response.success) {
        const songData = {
          id: numericSongId,
          title: response.song?.title || 'Unknown Title',
          artist: response.song?.artist?.name || 'Unknown Artist',
          audioUrl: response.song?.audioFile 
            ? `http://103.119.171.213:3001${response.song.audioFile}`
            : 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
          artwork: response.song?.thumbnail || 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop'
        };
        
        setSongInfo(response);
        playSong(songData);
      }
    } catch (error) {
      console.error('Song Info Error:', error);
      showStylishPopup('error', 'Error', 'Failed to load song');
    } finally {
      setIsLoading(false);
    }
  };

  // Like/Unlike handler
  const handleLikeToggle = async () => {
    if (!songId) {
      showStylishPopup('error', 'Error', 'Song information not available');
      return;
    }

    if (togglingLike) return;

    try {
      setTogglingLike(true);
      
      if (isLiked) {
        const response = await unlikeSong(songId);
        if (response && response.success) {
          setIsLiked(false);
          showStylishPopup('success', 'Removed from Likes ❤️', 'Song removed from your liked songs');
        } else {
          throw new Error(response?.message || 'Failed to unlike song');
        }
      } else {
        const response = await likeSong(songId);
        if (response && response.success) {
          setIsLiked(true);
          showStylishPopup('success', 'Added to Likes ❤️', 'Song added to your liked songs!');
        } else {
          throw new Error(response?.message || 'Failed to like song');
        }
      }
    } catch (error) {
      console.error('Like toggle error:', error);
      showStylishPopup('error', 'Error', 'Failed to update likes. Please try again.');
    } finally {
      setTogglingLike(false);
    }
  };

  // Fetch user playlists
  const fetchUserPlaylists = async () => {
    try {
      const response = await getUserPlaylists();
      
      if (response && response.success) {
        setUserPlaylists(response.playlists || []);
        setShowPlaylistModal(true);
      } else {
        showStylishPopup('error', 'Error', 'Failed to fetch playlists');
      }
    } catch (error) {
      console.error('Fetch playlists error:', error);
      showStylishPopup('error', 'Error', 'Failed to load playlists');
    }
  };

  // Add to playlist
  const handleAddToPlaylist = async (playlistId, playlistName) => {
    if (currentlyAddingPlaylist) return;

    try {
      setCurrentlyAddingPlaylist(playlistId);
      setAddingToPlaylist(true);
      
      const response = await addSongToPlaylist(playlistId, songId);
      
      if (response.success) {
        showStylishPopup('success', 'Added to Playlist ✅', `"${displaySongData.title}" added to "${playlistName}"`);
        setShowPlaylistModal(false);
      } else {
        showStylishPopup('error', 'Error', response.message || 'Failed to add song');
      }
    } catch (error) {
      console.error('Add to playlist error:', error);
      showStylishPopup('error', 'Error', 'Failed to add song to playlist');
    } finally {
      setAddingToPlaylist(false);
      setCurrentlyAddingPlaylist(null);
    }
  };

  // Share song functionality
  const handleShareSong = async () => {
    try {
      const songTitle = displaySongData.title;
      const artistName = displaySongData.artist;
      
      const shareMessage = `🎵 Listen to "${songTitle}" by ${artistName} on Afrofy! 🎧\n\nDownload Afrofy now to discover more amazing music!`;
      
      const result = await Share.share({
        message: shareMessage,
        title: `Share "${songTitle}"`,
      });
      
      if (result.action === Share.sharedAction) {
        console.log('Song shared successfully');
      }
    } catch (error) {
      console.error('Error sharing song:', error);
      showStylishPopup('error', 'Share Error', 'Failed to share song');
    }
  };

  // Reset song to beginning
  const handleResetToBeginning = () => {
    seekTo(0);
    if (isPlaying) {
      setTimeout(() => {
        togglePlayPause();
        setTimeout(() => {
          togglePlayPause();
        }, 100);
      }, 50);
    }
  };

  // Rotation animation
  const startRotation = () => {
    rotateAnim.setValue(0);
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 20000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  };

  const stopRotation = () => {
    rotateAnim.stopAnimation();
  };

  const rotateInterpolate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  // Controls
  const handlePlayPause = () => {
    togglePlayPause();
  };

  const handleSkipForward = () => {
    const newTime = Math.min((Number(currentTime) || 0) + 15, Number(duration) || 0);
    seekTo(newTime);
  };

  const handleSkipBackward = () => {
    const newTime = Math.max((Number(currentTime) || 0) - 15, 0);
    seekTo(newTime);
  };

  // Helpers
  const formatTime = (s) => {
    const sec = Number(s);
    const safeSec = Number.isFinite(sec) && sec >= 0 ? Math.floor(sec) : 0;
    const m = Math.floor(safeSec / 60);
    const r = Math.floor(safeSec % 60);
    return `${m}:${r < 10 ? '0' : ''}${r}`;
  };

  // Current song data
  const displaySongData = currentSong ? {
    title: currentSong.title || 'Unknown Title',
    artist: currentSong.artist || 'Unknown Artist',
    artwork: currentSong.artwork || 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop',
  } : songInfo ? {
    title: songInfo.song?.title || 'Unknown Title',
    artist: songInfo.song?.artist?.name || songInfo.song?.artist?.stageName || 'Unknown Artist',
    artwork: songInfo.song?.thumbnail || songInfo.song?.coverImage || songInfo.song?.artist?.profilePic || 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop',
  } : {
    title: 'Loading...',
    artist: 'Unknown Artist',
    artwork: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop',
  };

  // Rotation control
  useEffect(() => {
    if (isPlaying) {
      startRotation();
    } else {
      stopRotation();
    }
  }, [isPlaying]);

  // Popup Component
  const StylishPopup = () => (
    <Modal
      visible={showPopup}
      transparent={true}
      animationType="fade"
      onRequestClose={() => setShowPopup(false)}
    >
      <View style={styles.popupOverlay}>
        <View style={styles.popupContainer}>
          <View style={styles.popupIcon}>
            <Icon 
              name={
                popupType === 'success' ? 'checkmark-circle' :
                popupType === 'error' ? 'close-circle' :
                'information-circle'
              } 
              size={wp(8)} 
              color="#FF3B3B"
            />
          </View>
          <Text style={styles.popupTitle}>{popupTitle}</Text>
          <Text style={styles.popupMessage}>{popupMessage}</Text>
          <TouchableOpacity
            style={styles.popupButton}
            onPress={() => setShowPopup(false)}
          >
            <Text style={styles.popupButtonText}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />

      <StylishPopup />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerButton}>
          <Icon name="arrow-back" size={wp(6)} color="#fff" />
        </TouchableOpacity>

        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle} numberOfLines={1}>
            NOW PLAYING
          </Text>
        </View>

        <TouchableOpacity style={styles.headerButton}>
          {/* Empty for alignment */}
        </TouchableOpacity>
      </View>

      {/* Album Art */}
      <View style={styles.albumArtContainer}>
        <Animated.View
          style={[
            styles.albumArtWrapper,
            {
              transform: [{ rotate: isPlaying ? rotateInterpolate : '0deg' }],
            },
          ]}
        >
          <Image
            source={{ uri: displaySongData.artwork }}
            style={styles.albumArt}
            resizeMode="cover"
          />
        </Animated.View>

        <View style={styles.vinylRing} />
        <View style={styles.vinylRing2} />
      </View>

      {/* Song Info */}
      <View style={styles.songInfoContainer}>
        <View style={styles.songTitleContainer}>
          <Text style={styles.songTitle} numberOfLines={2}>
            {displaySongData.title}
          </Text>
        </View>

        <View style={styles.artistContainer}>
          <Text style={styles.songArtist} numberOfLines={2}>
            {displaySongData.artist}
          </Text>
        </View>

        {/* Actions Row */}
        <View style={styles.actionsRow}>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={fetchUserPlaylists}
          >
            <Icon name="add" size={wp(6)} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionButton}
            onPress={handleLikeToggle}
            disabled={togglingLike || checkingLikeStatus}
          >
            {togglingLike || checkingLikeStatus ? (
              <ActivityIndicator size="small" color="#FF3B3B" />
            ) : (
              <Icon
                name={isLiked ? 'heart' : 'heart-outline'}
                size={wp(6)}
                color={isLiked ? '#FF3B3B' : '#fff'}
              />
            )}
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.actionButton}>
            <Icon name="download-outline" size={wp(6)} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.actionButton}
            onPress={handleShareSong}
          >
            <Icon name="share-outline" size={wp(6)} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Progress */}
      <View style={styles.progressContainer}>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={duration > 0 ? duration : 1}
          value={currentTime}
          onSlidingComplete={(value) => seekTo(value)}
          minimumTrackTintColor="#FF3B3B"
          maximumTrackTintColor="#333"
          thumbTintColor="#FF3B3B"
          disabled={isLoading}
        />
        <View style={styles.timeContainer}>
          <Text style={styles.timeText}>{formatTime(currentTime)}</Text>
          <Text style={styles.timeText}>{formatTime(duration)}</Text>
        </View>
      </View>

      {/* ✅ FIXED: Controls - Perfectly Centered with Equal Spacing */}
      <View style={styles.controlsContainer}>
        <View style={styles.controlsRow}>
          <TouchableOpacity style={styles.controlButton} onPress={handleSkipBackward}>
            <Icon name="play-skip-back" size={wp(8)} color="#fff" />
          </TouchableOpacity>

          {/* ✅ Play Button - Perfectly Centered */}
          <TouchableOpacity
            style={[styles.playButton, isLoading && styles.playButtonDisabled]}
            onPress={togglePlayPause}
            disabled={isLoading}
          >
            {isLoading ? (
              <ActivityIndicator size="small" color="#000" />
            ) : (
              <Icon 
                name={isPlaying ? 'pause' : 'play'} 
                size={wp(9)} 
                color="#000" 
              />
            )}
          </TouchableOpacity>

          <TouchableOpacity style={styles.controlButton} onPress={handleSkipForward}>
            <Icon name="play-skip-forward" size={wp(8)} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Playlist Modal */}
      <Modal
        visible={showPlaylistModal}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowPlaylistModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <View style={styles.modalTitleContainer}>
                <Icon name="musical-notes" size={wp(6)} color="#FF3B3B" style={styles.modalTitleIcon} />
                <Text style={styles.modalTitle}>Add to Playlist</Text>
              </View>
              <TouchableOpacity 
                onPress={() => setShowPlaylistModal(false)}
                style={styles.closeButton}
              >
                <Icon name="close" size={wp(6)} color="#fff" />
              </TouchableOpacity>
            </View>

            <View style={styles.modalSubtitleContainer}>
              <Text style={styles.modalSubtitle}>
                Add to playlist
              </Text>
              <Text style={styles.songTitleInModal} numberOfLines={1}>
                "{displaySongData.title}"
              </Text>
            </View>

            {userPlaylists.length === 0 ? (
              <View style={styles.emptyPlaylists}>
                <Icon name="musical-notes-outline" size={wp(12)} color="#666" />
                <Text style={styles.emptyPlaylistsText}>No playlists found</Text>
                <Text style={styles.emptyPlaylistsSubtext}>
                  Create a playlist first to add songs
                </Text>
              </View>
            ) : (
              <FlatList
                data={userPlaylists}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => {
                  const isCurrentlyAdding = currentlyAddingPlaylist === item.id;
                  
                  return (
                    <TouchableOpacity
                      style={[
                        styles.playlistItem,
                        isCurrentlyAdding && styles.playlistItemDisabled
                      ]}
                      onPress={() => {
                        if (!isCurrentlyAdding) {
                          handleAddToPlaylist(item.id, item.title);
                        }
                      }}
                      disabled={isCurrentlyAdding}
                    >
                      <View style={styles.playlistInfo}>
                        <View style={styles.playlistIconContainer}>
                          <Icon name="musical-notes" size={wp(5)} color="#FF3B3B" />
                        </View>
                        <View style={styles.playlistTextContainer}>
                          <Text style={styles.playlistName}>{item.title}</Text>
                          <Text style={styles.playlistStats}>
                            {item._count?.songs || 0} songs • {item.isPublic ? 'Public' : 'Private'}
                          </Text>
                        </View>
                      </View>
                      
                      {isCurrentlyAdding ? (
                        <View style={styles.addingContainer}>
                          <ActivityIndicator size="small" color="#FF3B3B" />
                        </View>
                      ) : (
                        <View style={styles.addIconContainer}>
                          <Icon name="add-circle" size={wp(6)} color="#FF3B3B" />
                        </View>
                      )}
                    </TouchableOpacity>
                  );
                }}
                style={styles.playlistList}
                showsVerticalScrollIndicator={false}
              />
            )}
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: wp(5),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: hp(2),
    marginTop: hp(1),
  },
  headerButton: {
    padding: wp(2),
  },
  headerCenter: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: wp(4),
  },
  headerTitle: {
    fontSize: wp(4),
    fontWeight: 'bold',
    color: '#fff',
    letterSpacing: 1,
  },
  albumArtContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(4),
    marginBottom: hp(4), // ✅ Reduced spacing
    position: 'relative',
  },
  albumArtWrapper: {
    width: wp(65), // ✅ Slightly smaller
    height: wp(65), // ✅ Slightly smaller
    borderRadius: wp(32.5),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.8,
    shadowRadius: 20,
    elevation: 20,
    overflow: 'hidden',
  },
  albumArt: {
    width: '100%',
    height: '100%',
  },
  vinylRing: {
    position: 'absolute',
    width: wp(75),
    height: wp(75),
    borderRadius: wp(37.5),
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  vinylRing2: {
    position: 'absolute',
    width: wp(80),
    height: wp(80),
    borderRadius: wp(40),
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.05)',
  },
  songInfoContainer: {
    marginBottom: hp(4),
    paddingHorizontal: wp(6),
  },
  songTitleContainer: {
    marginBottom: hp(1),
  },
  songTitle: {
    fontSize: wp(6.5), // ✅ Slightly smaller
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    letterSpacing: 0.5,
    lineHeight: hp(3.5), // ✅ Better line height
  },
  artistContainer: {
    marginBottom: hp(3), // ✅ Reduced spacing
  },
  songArtist: {
    fontSize: wp(4), // ✅ Slightly smaller
    color: '#b3b3b3',
    textAlign: 'center',
    fontWeight: '500',
    lineHeight: hp(2.5), // ✅ Better line height
  },
  actionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: hp(1), // ✅ Reduced spacing
    paddingHorizontal: wp(8),
  },
  actionButton: {
    padding: wp(3),
  },
  progressContainer: {
    marginBottom: hp(4), // ✅ Reduced spacing
    paddingHorizontal: wp(6),
  },
  slider: {
    width: '100%',
    height: hp(4),
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(1),
  },
  timeText: {
    fontSize: wp(3),
    color: '#b3b3b3',
  },
  // ✅ FIXED: Controls Layout - Perfectly Centered
  controlsContainer: {
    marginBottom: hp(6),
    paddingHorizontal: wp(6),
  },
  controlsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // ✅ Equal spacing between all buttons
    paddingHorizontal: wp(5), // ✅ Proper padding
  },
  controlButton: {
    padding: wp(4), // ✅ Larger touch area
  },
  playButton: {
    backgroundColor: '#FF3B3B',
    width: wp(20), // ✅ Larger play button
    height: wp(20), // ✅ Larger play button
    borderRadius: wp(10), // ✅ Perfect circle
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#FF3B3B',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 16,
    // ✅ Center mein perfectly align hoga
    marginHorizontal: wp(10), // ✅ Equal spacing on both sides
  },
  playButtonDisabled: {
    backgroundColor: '#666',
  },
  popupOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: wp(5),
  },
  popupContainer: {
    backgroundColor: '#1E1E1E',
    borderRadius: wp(5),
    paddingHorizontal: wp(6),
    paddingVertical: hp(4),
    alignItems: 'center',
    width: '100%',
    maxWidth: wp(320),
    borderWidth: 2,
    borderColor: '#FF3B3B',
  },
  popupIcon: {
    marginBottom: hp(2),
    backgroundColor: 'rgba(255, 59, 59, 0.1)',
    borderRadius: wp(25),
    padding: wp(4),
  },
  popupTitle: {
    fontSize: wp(5),
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: hp(1.5),
  },
  popupMessage: {
    fontSize: wp(4),
    color: '#b3b3b3',
    textAlign: 'center',
    marginBottom: hp(3),
    lineHeight: hp(2.8),
  },
  popupButton: {
    backgroundColor: '#FF3B3B',
    borderRadius: wp(6),
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(8),
    width: '100%',
  },
  popupButtonText: {
    color: 'white',
    fontSize: wp(4),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#1a1a1a',
    borderTopLeftRadius: wp(5),
    borderTopRightRadius: wp(5),
    maxHeight: hp(80),
    paddingBottom: hp(3),
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: wp(5),
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  modalTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  modalTitleIcon: {
    marginRight: wp(3),
  },
  modalTitle: {
    fontSize: wp(5),
    fontWeight: 'bold',
    color: '#fff',
  },
  closeButton: {
    padding: wp(2),
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: wp(5),
  },
  modalSubtitleContainer: {
    paddingHorizontal: wp(5),
    paddingVertical: hp(2),
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  modalSubtitle: {
    fontSize: wp(3.5),
    color: '#b3b3b3',
    marginBottom: hp(0.5),
  },
  songTitleInModal: {
    fontSize: wp(4),
    fontWeight: '600',
    color: '#fff',
  },
  emptyPlaylists: {
    alignItems: 'center',
    padding: hp(5),
  },
  emptyPlaylistsText: {
    fontSize: wp(4.5),
    color: '#fff',
    marginTop: hp(2),
    marginBottom: hp(1),
  },
  emptyPlaylistsSubtext: {
    fontSize: wp(3.5),
    color: '#b3b3b3',
    textAlign: 'center',
  },
  playlistList: {
    maxHeight: hp(400),
  },
  playlistItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: wp(4),
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  playlistItemDisabled: {
    opacity: 0.6,
  },
  playlistInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  playlistIconContainer: {
    backgroundColor: 'rgba(255, 59, 59, 0.1)',
    padding: wp(3),
    borderRadius: wp(3),
    marginRight: wp(3),
  },
  playlistTextContainer: {
    flex: 1,
  },
  playlistName: {
    fontSize: wp(4),
    fontWeight: '600',
    color: '#fff',
    marginBottom: hp(0.5),
  },
  playlistStats: {
    fontSize: wp(3),
    color: '#b3b3b3',
  },
  addingContainer: {
    padding: wp(2),
  },
  addIconContainer: {
    padding: wp(2),
  },
});

export default NowPlayingScreen;