// // // // screens/AddSongToPlaylistScreen.js
// // // import React, { useState, useEffect } from 'react';
// // // import {
// // //   View,
// // //   Text,
// // //   TouchableOpacity,
// // //   StyleSheet,
// // //   SafeAreaView,
// // //   StatusBar,
// // //   ScrollView,
// // //   TextInput,
// // //   Image,
// // //   Alert,
// // //   ActivityIndicator,
// // //   FlatList,
// // // } from 'react-native';
// // // import Icon from 'react-native-vector-icons/Ionicons';
// // // import { addSongToPlaylist, getDataWithToken } from '../Services/mobile-api';

// // // const AddSongToPlaylistScreen = ({ navigation, route }) => {
// // //   const { playlistId, playlistName } = route.params;
  
// // //   const [songs, setSongs] = useState([]);
// // //   const [filteredSongs, setFilteredSongs] = useState([]);
// // //   const [searchQuery, setSearchQuery] = useState('');
// // //   const [isLoading, setIsLoading] = useState(true);
// // //   const [selectedSongs, setSelectedSongs] = useState(new Set());
// // //   const [addingSongs, setAddingSongs] = useState(false);

// // //   // Fetch all available songs - Home data se songs le sakte hain
// // //   const fetchAllSongs = async () => {
// // //     try {
// // //       // Home data se songs fetch karein
// // //       const response = await getDataWithToken('user/home');
      
// // //       console.log('📦 Home API Response:', response);
      
// // //       if (response && response.success) {
// // //         // Different possible structures handle karein
// // //         let allSongs = [];
        
// // //         if (response.data && response.data.songs) {
// // //           allSongs = response.data.songs;
// // //         } else if (response.songs) {
// // //           allSongs = response.songs;
// // //         } else if (response.data && Array.isArray(response.data)) {
// // //           allSongs = response.data;
// // //         } else if (response.recentSongs) {
// // //           allSongs = response.recentSongs;
// // //         } else if (response.popularSongs) {
// // //           allSongs = response.popularSongs;
// // //         }
        
// // //         console.log('🎵 Songs found:', allSongs.length);
        
// // //         if (allSongs.length > 0) {
// // //           setSongs(allSongs);
// // //           setFilteredSongs(allSongs);
// // //         } else {
// // //           // Fallback dummy data
// // //           const dummySongs = getDummySongs();
// // //           setSongs(dummySongs);
// // //           setFilteredSongs(dummySongs);
// // //         }
// // //       } else {
// // //         // Fallback data
// // //         const dummySongs = getDummySongs();
// // //         setSongs(dummySongs);
// // //         setFilteredSongs(dummySongs);
// // //       }
// // //     } catch (error) {
// // //       console.error('Fetch songs error:', error);
// // //       // Fallback data
// // //       const dummySongs = getDummySongs();
// // //       setSongs(dummySongs);
// // //       setFilteredSongs(dummySongs);
// // //     } finally {
// // //       setIsLoading(false);
// // //     }
// // //   };

// // //   // Dummy songs for fallback
// // //   const getDummySongs = () => {
// // //     return [
// // //       {
// // //         id: 1,
// // //         title: 'Tum Hi Ho',
// // //         artist: { name: 'Arijit Singh' },
// // //         duration: 280,
// // //         coverImage: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop'
// // //       },
// // //       {
// // //         id: 2,
// // //         title: 'Channa Mereya',
// // //         artist: { name: 'Arijit Singh' },
// // //         duration: 240,
// // //         coverImage: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop'
// // //       },
// // //       {
// // //         id: 3,
// // //         title: 'Kesariya',
// // //         artist: { name: 'Arijit Singh' },
// // //         duration: 260,
// // //         coverImage: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=300&h=300&fit=crop'
// // //       },
// // //       {
// // //         id: 4,
// // //         title: 'Apna Bana Le',
// // //         artist: { name: 'Arijit Singh' },
// // //         duration: 270,
// // //         coverImage: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&h=300&fit=crop'
// // //       },
// // //       {
// // //         id: 5,
// // //         title: 'Raabta',
// // //         artist: { name: 'Arijit Singh' },
// // //         duration: 290,
// // //         coverImage: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop'
// // //       }
// // //     ];
// // //   };

// // //   useEffect(() => {
// // //     fetchAllSongs();
// // //   }, []);

// // //   // Search functionality
// // //   useEffect(() => {
// // //     if (searchQuery.trim() === '') {
// // //       setFilteredSongs(songs);
// // //     } else {
// // //       const filtered = songs.filter(song =>
// // //         song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // //         song.artist?.name.toLowerCase().includes(searchQuery.toLowerCase())
// // //       );
// // //       setFilteredSongs(filtered);
// // //     }
// // //   }, [searchQuery, songs]);

// // //   // Toggle song selection
// // //   const toggleSongSelection = (songId) => {
// // //     const newSelected = new Set(selectedSongs);
// // //     if (newSelected.has(songId)) {
// // //       newSelected.delete(songId);
// // //     } else {
// // //       newSelected.add(songId);
// // //     }
// // //     setSelectedSongs(newSelected);
// // //   };

// // //   // Add selected songs to playlist
// // //   const handleAddSongs = async () => {
// // //     if (selectedSongs.size === 0) {
// // //       Alert.alert('No Songs Selected', 'Please select at least one song to add.');
// // //       return;
// // //     }

// // //     setAddingSongs(true);
// // //     try {
// // //       const songIds = Array.from(selectedSongs);
// // //       let successCount = 0;
// // //       let failedSongs = [];

// // //       // Add each song one by one
// // //       for (const songId of songIds) {
// // //         try {
// // //           console.log(`🔄 Adding song ${songId} to playlist ${playlistId}`);
// // //           const response = await addSongToPlaylist(playlistId, songId);
          
// // //           if (response.success) {
// // //             successCount++;
// // //             console.log(`✅ Song ${songId} added successfully`);
// // //           } else {
// // //             failedSongs.push(songId);
// // //             console.log(`❌ Failed to add song ${songId}:`, response.message);
// // //           }
// // //         } catch (error) {
// // //           console.error(`❌ Error adding song ${songId}:`, error);
// // //           failedSongs.push(songId);
// // //         }
// // //       }

// // //       if (failedSongs.length === 0) {
// // //         Alert.alert(
// // //           'Success 🎉',
// // //           `${successCount} song(s) added to playlist successfully!`,
// // //           [
// // //             {
// // //               text: 'OK',
// // //               onPress: () => navigation.goBack()
// // //             }
// // //           ]
// // //         );
// // //       } else {
// // //         Alert.alert(
// // //           'Partial Success',
// // //           `${successCount} song(s) added successfully, ${failedSongs.length} failed.`,
// // //           [
// // //             {
// // //               text: 'OK',
// // //               onPress: () => navigation.goBack()
// // //             }
// // //           ]
// // //         );
// // //       }
// // //     } catch (error) {
// // //       console.error('Add songs error:', error);
// // //       Alert.alert('Error', 'Failed to add songs to playlist');
// // //     } finally {
// // //       setAddingSongs(false);
// // //     }
// // //   };

// // //   // Format duration
// // //   const formatDuration = (seconds) => {
// // //     if (!seconds) return '0:00';
// // //     const mins = Math.floor(seconds / 60);
// // //     const secs = Math.floor(seconds % 60);
// // //     return `${mins}:${secs.toString().padStart(2, '0')}`;
// // //   };

// // //   // Render song item
// // //   const renderSongItem = ({ item }) => (
// // //     <TouchableOpacity 
// // //       style={[
// // //         styles.songItem,
// // //         selectedSongs.has(item.id) && styles.songItemSelected
// // //       ]}
// // //       onPress={() => toggleSongSelection(item.id)}
// // //       activeOpacity={0.7}
// // //     >
// // //       <View style={styles.songImageContainer}>
// // //         <Image 
// // //           source={{ uri: item.coverImage }} 
// // //           style={styles.songImage}
// // //           resizeMode="cover"
// // //         />
// // //         {selectedSongs.has(item.id) && (
// // //           <View style={styles.selectedOverlay}>
// // //             <Icon name="checkmark" size={24} color="#fff" />
// // //           </View>
// // //         )}
// // //       </View>
      
// // //       <View style={styles.songInfo}>
// // //         <Text style={styles.songTitle} numberOfLines={1}>{item.title}</Text>
// // //         <Text style={styles.songArtist} numberOfLines={1}>
// // //           {item.artist?.name || 'Unknown Artist'}
// // //         </Text>
// // //       </View>
      
// // //       <View style={styles.songMeta}>
// // //         <Text style={styles.songDuration}>
// // //           {formatDuration(item.duration)}
// // //         </Text>
// // //         <View style={[
// // //           styles.selectionIndicator,
// // //           selectedSongs.has(item.id) && styles.selectionIndicatorSelected
// // //         ]}>
// // //           {selectedSongs.has(item.id) && (
// // //             <Icon name="checkmark" size={16} color="#fff" />
// // //           )}
// // //         </View>
// // //       </View>
// // //     </TouchableOpacity>
// // //   );

// // //   if (isLoading) {
// // //     return (
// // //       <SafeAreaView style={styles.container}>
// // //         <StatusBar barStyle="light-content" backgroundColor="#000" />
// // //         <View style={styles.loadingContainer}>
// // //           <ActivityIndicator size="large" color="#1DB954" />
// // //           <Text style={styles.loadingText}>Loading songs...</Text>
// // //         </View>
// // //       </SafeAreaView>
// // //     );
// // //   }

// // //   return (
// // //     <SafeAreaView style={styles.container}>
// // //       <StatusBar barStyle="light-content" backgroundColor="#000" />
      
// // //       {/* Header */}
// // //       <View style={styles.header}>
// // //         <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
// // //           <Icon name="chevron-back" size={24} color="#fff" />
// // //         </TouchableOpacity>
// // //         <View style={styles.headerTitleContainer}>
// // //           <Text style={styles.headerTitle} numberOfLines={1}>Add Songs</Text>
// // //           <Text style={styles.headerSubtitle}>to {playlistName}</Text>
// // //         </View>
// // //         <TouchableOpacity style={styles.headerButton}>
// // //           <Icon name="ellipsis-horizontal" size={24} color="#fff" />
// // //         </TouchableOpacity>
// // //       </View>

// // //       <View style={styles.content}>
// // //         {/* Search Bar */}
// // //         <View style={styles.searchContainer}>
// // //           <Icon name="search" size={20} color="#666" style={styles.searchIcon} />
// // //           <TextInput
// // //             style={styles.searchInput}
// // //             placeholder="Search songs..."
// // //             placeholderTextColor="#666"
// // //             value={searchQuery}
// // //             onChangeText={setSearchQuery}
// // //             returnKeyType="search"
// // //           />
// // //           {searchQuery.length > 0 && (
// // //             <TouchableOpacity onPress={() => setSearchQuery('')}>
// // //               <Icon name="close-circle" size={20} color="#666" />
// // //             </TouchableOpacity>
// // //           )}
// // //         </View>

// // //         {/* Selection Info */}
// // //         {selectedSongs.size > 0 && (
// // //           <View style={styles.selectionInfo}>
// // //             <Text style={styles.selectionText}>
// // //               {selectedSongs.size} song(s) selected
// // //             </Text>
// // //             <TouchableOpacity onPress={() => setSelectedSongs(new Set())}>
// // //               <Text style={styles.clearText}>Clear</Text>
// // //             </TouchableOpacity>
// // //           </View>
// // //         )}

// // //         {/* Songs List */}
// // //         {filteredSongs.length === 0 ? (
// // //           <View style={styles.emptyState}>
// // //             <Icon name="musical-notes-outline" size={64} color="#666" />
// // //             <Text style={styles.emptyStateTitle}>No songs found</Text>
// // //             <Text style={styles.emptyStateText}>
// // //               {searchQuery ? 'Try a different search' : 'No songs available'}
// // //             </Text>
// // //           </View>
// // //         ) : (
// // //           <FlatList
// // //             data={filteredSongs}
// // //             renderItem={renderSongItem}
// // //             keyExtractor={(item) => item.id.toString()}
// // //             showsVerticalScrollIndicator={false}
// // //             style={styles.songsList}
// // //           />
// // //         )}

// // //         {/* Add Songs Button */}
// // //         {selectedSongs.size > 0 && (
// // //           <View style={styles.footer}>
// // //             <TouchableOpacity
// // //               style={styles.addButton}
// // //               onPress={handleAddSongs}
// // //               disabled={addingSongs}
// // //             >
// // //               {addingSongs ? (
// // //                 <View style={styles.loadingContainerSmall}>
// // //                   <ActivityIndicator size="small" color="#fff" />
// // //                   <Text style={styles.addButtonText}>Adding...</Text>
// // //                 </View>
// // //               ) : (
// // //                 <Text style={styles.addButtonText}>
// // //                   Add {selectedSongs.size} Song(s)
// // //                 </Text>
// // //               )}
// // //             </TouchableOpacity>
// // //           </View>
// // //         )}
// // //       </View>
// // //     </SafeAreaView>
// // //   );
// // // };

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     backgroundColor: '#000',
// // //   },
// // //   header: {
// // //     flexDirection: 'row',
// // //     alignItems: 'center',
// // //     justifyContent: 'space-between',
// // //     paddingHorizontal: 20,
// // //     paddingVertical: 16,
// // //     borderBottomWidth: 1,
// // //     borderBottomColor: '#1a1a1a',
// // //   },
// // //   backButton: {
// // //     padding: 4,
// // //   },
// // //   headerTitleContainer: {
// // //     alignItems: 'center',
// // //     flex: 1,
// // //   },
// // //   headerTitle: {
// // //     fontSize: 18,
// // //     fontWeight: 'bold',
// // //     color: '#fff',
// // //     marginBottom: 2,
// // //   },
// // //   headerSubtitle: {
// // //     fontSize: 12,
// // //     color: '#b3b3b3',
// // //   },
// // //   headerButton: {
// // //     padding: 4,
// // //   },
// // //   content: {
// // //     flex: 1,
// // //     padding: 20,
// // //   },
// // //   searchContainer: {
// // //     flexDirection: 'row',
// // //     alignItems: 'center',
// // //     backgroundColor: 'rgba(255,255,255,0.1)',
// // //     paddingHorizontal: 16,
// // //     paddingVertical: 14,
// // //     borderRadius: 12,
// // //     borderWidth: 1,
// // //     borderColor: '#333',
// // //     marginBottom: 16,
// // //   },
// // //   searchIcon: {
// // //     marginRight: 12,
// // //   },
// // //   searchInput: {
// // //     flex: 1,
// // //     fontSize: 16,
// // //     color: '#fff',
// // //     padding: 0,
// // //   },
// // //   selectionInfo: {
// // //     flexDirection: 'row',
// // //     justifyContent: 'space-between',
// // //     alignItems: 'center',
// // //     backgroundColor: 'rgba(29, 185, 84, 0.1)',
// // //     padding: 12,
// // //     borderRadius: 8,
// // //     marginBottom: 16,
// // //     borderWidth: 1,
// // //     borderColor: 'rgba(29, 185, 84, 0.3)',
// // //   },
// // //   selectionText: {
// // //     fontSize: 14,
// // //     color: '#1DB954',
// // //     fontWeight: '600',
// // //   },
// // //   clearText: {
// // //     fontSize: 14,
// // //     color: '#1DB954',
// // //     fontWeight: '600',
// // //   },
// // //   songsList: {
// // //     flex: 1,
// // //   },
// // //   songItem: {
// // //     flexDirection: 'row',
// // //     alignItems: 'center',
// // //     paddingVertical: 12,
// // //     paddingHorizontal: 8,
// // //     borderRadius: 8,
// // //     marginBottom: 8,
// // //   },
// // //   songItemSelected: {
// // //     backgroundColor: 'rgba(29, 185, 84, 0.1)',
// // //   },
// // //   songImageContainer: {
// // //     position: 'relative',
// // //     marginRight: 12,
// // //   },
// // //   songImage: {
// // //     width: 50,
// // //     height: 50,
// // //     borderRadius: 8,
// // //   },
// // //   selectedOverlay: {
// // //     ...StyleSheet.absoluteFillObject,
// // //     backgroundColor: 'rgba(29, 185, 84, 0.7)',
// // //     borderRadius: 8,
// // //     justifyContent: 'center',
// // //     alignItems: 'center',
// // //   },
// // //   songInfo: {
// // //     flex: 1,
// // //   },
// // //   songTitle: {
// // //     fontSize: 16,
// // //     fontWeight: '600',
// // //     color: '#fff',
// // //     marginBottom: 2,
// // //   },
// // //   songArtist: {
// // //     fontSize: 14,
// // //     color: '#b3b3b3',
// // //   },
// // //   songMeta: {
// // //     flexDirection: 'row',
// // //     alignItems: 'center',
// // //   },
// // //   songDuration: {
// // //     fontSize: 14,
// // //     color: '#b3b3b3',
// // //     marginRight: 12,
// // //   },
// // //   selectionIndicator: {
// // //     width: 22,
// // //     height: 22,
// // //     borderRadius: 11,
// // //     borderWidth: 2,
// // //     borderColor: '#b3b3b3',
// // //     justifyContent: 'center',
// // //     alignItems: 'center',
// // //   },
// // //   selectionIndicatorSelected: {
// // //     backgroundColor: '#1DB954',
// // //     borderColor: '#1DB954',
// // //   },
// // //   footer: {
// // //     paddingTop: 16,
// // //     borderTopWidth: 1,
// // //     borderTopColor: '#1a1a1a',
// // //   },
// // //   addButton: {
// // //     backgroundColor: '#1DB954',
// // //     paddingVertical: 16,
// // //     borderRadius: 30,
// // //     alignItems: 'center',
// // //   },
// // //   addButtonText: {
// // //     fontSize: 16,
// // //     fontWeight: 'bold',
// // //     color: '#fff',
// // //   },
// // //   loadingContainerSmall: {
// // //     flexDirection: 'row',
// // //     alignItems: 'center',
// // //   },
// // //   emptyState: {
// // //     flex: 1,
// // //     justifyContent: 'center',
// // //     alignItems: 'center',
// // //   },
// // //   emptyStateTitle: {
// // //     fontSize: 18,
// // //     fontWeight: 'bold',
// // //     color: '#fff',
// // //     marginTop: 16,
// // //     marginBottom: 8,
// // //   },
// // //   emptyStateText: {
// // //     fontSize: 14,
// // //     color: '#b3b3b3',
// // //     textAlign: 'center',
// // //   },
// // //   loadingContainer: {
// // //     flex: 1,
// // //     justifyContent: 'center',
// // //     alignItems: 'center',
// // //   },
// // //   loadingText: {
// // //     color: '#fff',
// // //     marginTop: 16,
// // //     fontSize: 16,
// // //   },
// // // });

// // // export default AddSongToPlaylistScreen;

// // // screens/AddSongToPlaylistScreen.tsx - FIXED VERSION
// // import React, { useState, useEffect } from 'react';
// // import {
// //   View,
// //   Text,
// //   TouchableOpacity,
// //   StyleSheet,
// //   SafeAreaView,
// //   StatusBar,
// //   ScrollView,
// //   TextInput,
// //   Image,
// //   Alert,
// //   ActivityIndicator,
// //   FlatList,
// // } from 'react-native';
// // import Icon from 'react-native-vector-icons/Ionicons';
// // import { addSongToPlaylist, getDataWithToken } from '../Services/mobile-api';
// // import { mobile_siteConfig } from '../Services/mobile-siteConfig';

// // const AddSongToPlaylistScreen = ({ navigation, route }) => {
// //   const { playlistId, playlistName } = route.params;
  
// //   const [songs, setSongs] = useState([]);
// //   const [filteredSongs, setFilteredSongs] = useState([]);
// //   const [searchQuery, setSearchQuery] = useState('');
// //   const [isLoading, setIsLoading] = useState(true);
// //   const [selectedSongs, setSelectedSongs] = useState(new Set());
// //   const [addingSongs, setAddingSongs] = useState(false);

// //   // ✅ FIXED: Extract songs from home data structure
// //   const extractSongsFromHomeData = (homeData) => {
// //     let songsList = [];
    
// //     console.log('🔍 Extracting songs from home data structure...');
    
// //     if (homeData.data) {
// //       const data = homeData.data;
      
// //       // Continue Listening songs
// //       if (data.continueListening && data.continueListening.songs && Array.isArray(data.continueListening.songs)) {
// //         console.log('🎵 Found continueListening songs:', data.continueListening.songs.length);
// //         songsList = [...songsList, ...data.continueListening.songs];
// //       }
      
// //       // New Releases songs
// //       if (data.newReleases && data.newReleases.songs && Array.isArray(data.newReleases.songs)) {
// //         console.log('🎵 Found newReleases songs:', data.newReleases.songs.length);
// //         songsList = [...songsList, ...data.newReleases.songs];
// //       }
      
// //       // Recently Played songs
// //       if (data.recentlyPlayed && data.recentlyPlayed.songs && Array.isArray(data.recentlyPlayed.songs)) {
// //         console.log('🎵 Found recentlyPlayed songs:', data.recentlyPlayed.songs.length);
// //         songsList = [...songsList, ...data.recentlyPlayed.songs];
// //       }
      
// //       // Pick Your Mood songs (nested in moods)
// //       if (data.pickYourMood && data.pickYourMood.moods && Array.isArray(data.pickYourMood.moods)) {
// //         data.pickYourMood.moods.forEach(mood => {
// //           if (mood.songs && Array.isArray(mood.songs)) {
// //             console.log('🎵 Found mood songs:', mood.songs.length);
// //             songsList = [...songsList, ...mood.songs];
// //           }
// //         });
// //       }
// //     }
    
// //     console.log('📊 Total songs extracted:', songsList.length);
    
// //     // Remove duplicates based on song ID
// //     const uniqueSongs = songsList.filter((song, index, self) =>
// //       index === self.findIndex(s => s.id === song.id)
// //     );
    
// //     console.log('🎯 Unique songs after deduplication:', uniqueSongs.length);
    
// //     return uniqueSongs;
// //   };

// //   // ✅ FIXED: Fetch all available songs from HOME DATA
// //   const fetchAllSongs = async () => {
// //     try {
// //       console.log('🔄 Fetching songs from home data...');
      
// //       const homeResponse = await getDataWithToken(mobile_siteConfig.HOME_DATA);
      
// //       console.log('📦 Home API Response Structure:', Object.keys(homeResponse.data || {}));
      
// //       if (homeResponse && homeResponse.success && homeResponse.data) {
// //         const allSongs = extractSongsFromHomeData(homeResponse);
        
// //         console.log('🎵 Final songs list:', allSongs.length);
        
// //         if (allSongs.length > 0) {
// //           setSongs(allSongs);
// //           setFilteredSongs(allSongs);
          
// //           // Log first few songs for debugging
// //           allSongs.slice(0, 3).forEach((song, index) => {
// //             console.log(`Sample song ${index + 1}:`, {
// //               id: song.id,
// //               title: song.title,
// //               artist: song.artist?.name,
// //               duration: song.duration
// //             });
// //           });
// //         } else {
// //           console.log('❌ No songs extracted from home data');
// //           Alert.alert('Info', 'No songs available to add. Songs will appear here from your listening history and new releases.');
// //           setSongs([]);
// //           setFilteredSongs([]);
// //         }
// //       } else {
// //         throw new Error('Failed to fetch home data or invalid response structure');
// //       }
// //     } catch (error) {
// //       console.error('❌ Fetch songs error:', error);
// //       Alert.alert('Error', 'Could not load songs. Please try again.');
// //       setSongs([]);
// //       setFilteredSongs([]);
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchAllSongs();
// //   }, []);

// //   // Search functionality
// //   useEffect(() => {
// //     if (searchQuery.trim() === '') {
// //       setFilteredSongs(songs);
// //     } else {
// //       const filtered = songs.filter(song =>
// //         song.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
// //         song.artist?.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
// //         song.artistName?.toLowerCase().includes(searchQuery.toLowerCase())
// //       );
// //       setFilteredSongs(filtered);
// //     }
// //   }, [searchQuery, songs]);

// //   // Toggle song selection
// //   const toggleSongSelection = (songId) => {
// //     const newSelected = new Set(selectedSongs);
// //     if (newSelected.has(songId)) {
// //       newSelected.delete(songId);
// //     } else {
// //       newSelected.add(songId);
// //     }
// //     setSelectedSongs(newSelected);
// //   };

// //   // Add selected songs to playlist
// //   const handleAddSongs = async () => {
// //     if (selectedSongs.size === 0) {
// //       Alert.alert('No Songs Selected', 'Please select at least one song to add.');
// //       return;
// //     }

// //     setAddingSongs(true);
// //     try {
// //       const songIds = Array.from(selectedSongs);
// //       let successCount = 0;
// //       let failedSongs = [];

// //       // Add each song one by one
// //       for (const songId of songIds) {
// //         try {
// //           console.log(`🔄 Adding song ${songId} to playlist ${playlistId}`);
// //           const response = await addSongToPlaylist(playlistId, songId);
          
// //           if (response.success) {
// //             successCount++;
// //             console.log(`✅ Song ${songId} added successfully`);
// //           } else {
// //             failedSongs.push({ id: songId, error: response.message });
// //             console.log(`❌ Failed to add song ${songId}:`, response.message);
// //           }
// //         } catch (error) {
// //           console.error(`❌ Error adding song ${songId}:`, error);
// //           failedSongs.push({ id: songId, error: error.message });
// //         }
// //       }

// //       if (failedSongs.length === 0) {
// //         Alert.alert(
// //           'Success 🎉',
// //           `${successCount} song(s) added to playlist successfully!`,
// //           [
// //             {
// //               text: 'OK',
// //               onPress: () => navigation.goBack()
// //             }
// //           ]
// //         );
// //       } else {
// //         Alert.alert(
// //           'Partial Success',
// //           `${successCount} song(s) added successfully, ${failedSongs.length} failed.`,
// //           [
// //             {
// //               text: 'OK',
// //               onPress: () => navigation.goBack()
// //             }
// //           ]
// //         );
// //       }
// //     } catch (error) {
// //       console.error('Add songs error:', error);
// //       Alert.alert('Error', 'Failed to add songs to playlist');
// //     } finally {
// //       setAddingSongs(false);
// //     }
// //   };

// //   // Format duration
// //   const formatDuration = (seconds) => {
// //     if (!seconds) return '0:00';
// //     const mins = Math.floor(seconds / 60);
// //     const secs = Math.floor(seconds % 60);
// //     return `${mins}:${secs.toString().padStart(2, '0')}`;
// //   };

// //   // Get song image URL
// //   const getSongImage = (song) => {
// //     return song.coverImage || 
// //            song.image || 
// //            song.thumbnail || 
// //            song.artwork ||
// //            `${mobile_siteConfig.IMAGE_BASE_URL}${song.coverImage}` ||
// //            'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop';
// //   };

// //   // Get song artist name
// //   const getSongArtist = (song) => {
// //     return song.artist?.name || 
// //            song.artistName || 
// //            song.artist ||
// //            'Unknown Artist';
// //   };

// //   // Get song title
// //   const getSongTitle = (song) => {
// //     return song.title || song.name || 'Unknown Song';
// //   };

// //   // Render song item
// //   const renderSongItem = ({ item }) => (
// //     <TouchableOpacity 
// //       style={[
// //         styles.songItem,
// //         selectedSongs.has(item.id) && styles.songItemSelected
// //       ]}
// //       onPress={() => toggleSongSelection(item.id)}
// //       activeOpacity={0.7}
// //     >
// //       <View style={styles.songImageContainer}>
// //         <Image 
// //           source={{ uri: getSongImage(item) }} 
// //           style={styles.songImage}
// //           resizeMode="cover"
// //         />
// //         {selectedSongs.has(item.id) && (
// //           <View style={styles.selectedOverlay}>
// //             <Icon name="checkmark" size={24} color="#fff" />
// //           </View>
// //         )}
// //       </View>
      
// //       <View style={styles.songInfo}>
// //         <Text style={styles.songTitle} numberOfLines={1}>
// //           {getSongTitle(item)}
// //         </Text>
// //         <Text style={styles.songArtist} numberOfLines={1}>
// //           {getSongArtist(item)}
// //         </Text>
// //       </View>
      
// //       <View style={styles.songMeta}>
// //         <Text style={styles.songDuration}>
// //           {formatDuration(item.duration)}
// //         </Text>
// //         <View style={[
// //           styles.selectionIndicator,
// //           selectedSongs.has(item.id) && styles.selectionIndicatorSelected
// //         ]}>
// //           {selectedSongs.has(item.id) && (
// //             <Icon name="checkmark" size={16} color="#fff" />
// //           )}
// //         </View>
// //       </View>
// //     </TouchableOpacity>
// //   );

// //   if (isLoading) {
// //     return (
// //       <SafeAreaView style={styles.container}>
// //         <StatusBar barStyle="light-content" backgroundColor="#000" />
// //         <View style={styles.loadingContainer}>
// //           <ActivityIndicator size="large" color="#1DB954" />
// //           <Text style={styles.loadingText}>Loading songs...</Text>
// //         </View>
// //       </SafeAreaView>
// //     );
// //   }

// //   return (
// //     <SafeAreaView style={styles.container}>
// //       <StatusBar barStyle="light-content" backgroundColor="#000" />
      
// //       {/* Header */}
// //       <View style={styles.header}>
// //         <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
// //           <Icon name="chevron-back" size={24} color="#fff" />
// //         </TouchableOpacity>
// //         <View style={styles.headerTitleContainer}>
// //           <Text style={styles.headerTitle} numberOfLines={1}>Add Songs</Text>
// //           <Text style={styles.headerSubtitle}>to {playlistName}</Text>
// //         </View>
// //         <TouchableOpacity style={styles.headerButton}>
// //           <Icon name="ellipsis-horizontal" size={24} color="#fff" />
// //         </TouchableOpacity>
// //       </View>

// //       <View style={styles.content}>
// //         {/* Search Bar */}
// //         <View style={styles.searchContainer}>
// //           <Icon name="search" size={20} color="#666" style={styles.searchIcon} />
// //           <TextInput
// //             style={styles.searchInput}
// //             placeholder="Search songs..."
// //             placeholderTextColor="#666"
// //             value={searchQuery}
// //             onChangeText={setSearchQuery}
// //             returnKeyType="search"
// //           />
// //           {searchQuery.length > 0 && (
// //             <TouchableOpacity onPress={() => setSearchQuery('')}>
// //               <Icon name="close-circle" size={20} color="#666" />
// //             </TouchableOpacity>
// //           )}
// //         </View>

// //         {/* Selection Info */}
// //         {selectedSongs.size > 0 && (
// //           <View style={styles.selectionInfo}>
// //             <Text style={styles.selectionText}>
// //               {selectedSongs.size} song(s) selected
// //             </Text>
// //             <TouchableOpacity onPress={() => setSelectedSongs(new Set())}>
// //               <Text style={styles.clearText}>Clear</Text>
// //             </TouchableOpacity>
// //           </View>
// //         )}

// //         {/* Songs List */}
// //         {filteredSongs.length === 0 ? (
// //           <View style={styles.emptyState}>
// //             <Icon name="musical-notes-outline" size={64} color="#666" />
// //             <Text style={styles.emptyStateTitle}>
// //               {searchQuery ? 'No songs found' : 'No songs available'}
// //             </Text>
// //             <Text style={styles.emptyStateText}>
// //               {searchQuery ? 'Try a different search term' : 'Songs will appear here from your listening history and new releases'}
// //             </Text>
// //           </View>
// //         ) : (
// //           <FlatList
// //             data={filteredSongs}
// //             renderItem={renderSongItem}
// //             keyExtractor={(item) => item.id?.toString() || Math.random().toString()}
// //             showsVerticalScrollIndicator={false}
// //             style={styles.songsList}
// //           />
// //         )}

// //         {/* Add Songs Button */}
// //         {selectedSongs.size > 0 && (
// //           <View style={styles.footer}>
// //             <TouchableOpacity
// //               style={styles.addButton}
// //               onPress={handleAddSongs}
// //               disabled={addingSongs}
// //             >
// //               {addingSongs ? (
// //                 <View style={styles.loadingContainerSmall}>
// //                   <ActivityIndicator size="small" color="#fff" />
// //                   <Text style={styles.addButtonText}>Adding {selectedSongs.size} songs...</Text>
// //                 </View>
// //               ) : (
// //                 <Text style={styles.addButtonText}>
// //                   Add {selectedSongs.size} Song(s) to Playlist
// //                 </Text>
// //               )}
// //             </TouchableOpacity>
// //           </View>
// //         )}
// //       </View>
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
// //     paddingHorizontal: 20,
// //     paddingVertical: 16,
// //     borderBottomWidth: 1,
// //     borderBottomColor: '#1a1a1a',
// //   },
// //   backButton: {
// //     padding: 4,
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
// //   },
// //   headerButton: {
// //     padding: 4,
// //   },
// //   content: {
// //     flex: 1,
// //     padding: 20,
// //   },
// //   searchContainer: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     backgroundColor: 'rgba(255,255,255,0.1)',
// //     paddingHorizontal: 16,
// //     paddingVertical: 14,
// //     borderRadius: 12,
// //     borderWidth: 1,
// //     borderColor: '#333',
// //     marginBottom: 16,
// //   },
// //   searchIcon: {
// //     marginRight: 12,
// //   },
// //   searchInput: {
// //     flex: 1,
// //     fontSize: 16,
// //     color: '#fff',
// //     padding: 0,
// //   },
// //   selectionInfo: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     backgroundColor: 'rgba(29, 185, 84, 0.1)',
// //     padding: 12,
// //     borderRadius: 8,
// //     marginBottom: 16,
// //     borderWidth: 1,
// //     borderColor: 'rgba(29, 185, 84, 0.3)',
// //   },
// //   selectionText: {
// //     fontSize: 14,
// //     color: '#1DB954',
// //     fontWeight: '600',
// //   },
// //   clearText: {
// //     fontSize: 14,
// //     color: '#1DB954',
// //     fontWeight: '600',
// //   },
// //   songsList: {
// //     flex: 1,
// //   },
// //   songItem: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     paddingVertical: 12,
// //     paddingHorizontal: 8,
// //     borderRadius: 8,
// //     marginBottom: 8,
// //   },
// //   songItemSelected: {
// //     backgroundColor: 'rgba(29, 185, 84, 0.1)',
// //   },
// //   songImageContainer: {
// //     position: 'relative',
// //     marginRight: 12,
// //   },
// //   songImage: {
// //     width: 50,
// //     height: 50,
// //     borderRadius: 8,
// //   },
// //   selectedOverlay: {
// //     ...StyleSheet.absoluteFillObject,
// //     backgroundColor: 'rgba(29, 185, 84, 0.7)',
// //     borderRadius: 8,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   songInfo: {
// //     flex: 1,
// //   },
// //   songTitle: {
// //     fontSize: 16,
// //     fontWeight: '600',
// //     color: '#fff',
// //     marginBottom: 2,
// //   },
// //   songArtist: {
// //     fontSize: 14,
// //     color: '#b3b3b3',
// //   },
// //   songMeta: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //   },
// //   songDuration: {
// //     fontSize: 14,
// //     color: '#b3b3b3',
// //     marginRight: 12,
// //   },
// //   selectionIndicator: {
// //     width: 22,
// //     height: 22,
// //     borderRadius: 11,
// //     borderWidth: 2,
// //     borderColor: '#b3b3b3',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   selectionIndicatorSelected: {
// //     backgroundColor: '#1DB954',
// //     borderColor: '#1DB954',
// //   },
// //   footer: {
// //     paddingTop: 16,
// //     borderTopWidth: 1,
// //     borderTopColor: '#1a1a1a',
// //   },
// //   addButton: {
// //     backgroundColor: '#1DB954',
// //     paddingVertical: 16,
// //     borderRadius: 30,
// //     alignItems: 'center',
// //   },
// //   addButtonText: {
// //     fontSize: 16,
// //     fontWeight: 'bold',
// //     color: '#fff',
// //   },
// //   loadingContainerSmall: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //   },
// //   emptyState: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   emptyStateTitle: {
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //     color: '#fff',
// //     marginTop: 16,
// //     marginBottom: 8,
// //   },
// //   emptyStateText: {
// //     fontSize: 14,
// //     color: '#b3b3b3',
// //     textAlign: 'center',
// //   },
// //   loadingContainer: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   loadingText: {
// //     color: '#fff',
// //     marginTop: 16,
// //     fontSize: 16,
// //   },
// // });

// // export default AddSongToPlaylistScreen;

// // screens/AddSongToPlaylistScreen.tsx
// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   SafeAreaView,
//   StatusBar,
//   ScrollView,
//   TextInput,
//   Image,
//   Alert,
//   ActivityIndicator,
//   FlatList,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { addSongToPlaylist, getDataWithToken } from '../Services/mobile-api';
// import { mobile_siteConfig } from '../Services/mobile-siteConfig';

// const AddSongToPlaylistScreen = ({ navigation, route }) => {
//   const { playlistId, playlistName } = route.params;
  
//   const [songs, setSongs] = useState([]);
//   const [filteredSongs, setFilteredSongs] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [isLoading, setIsLoading] = useState(true);
//   const [selectedSongs, setSelectedSongs] = useState(new Set());
//   const [addingSongs, setAddingSongs] = useState(false);

//   // ✅ Songs nikalne ka function - Home data se
//   const extractSongsFromHomeData = (homeData) => {
//     let songsList = [];
    
//     console.log('🔍 Home data se songs extract kar rahe hain...');
    
//     if (homeData.data) {
//       const data = homeData.data;
      
//       // Continue Listening songs
//       if (data.continueListening && data.continueListening.songs) {
//         console.log('🎵 ContinueListening songs:', data.continueListening.songs.length);
//         songsList = [...songsList, ...data.continueListening.songs];
//       }
      
//       // New Releases songs
//       if (data.newReleases && data.newReleases.songs) {
//         console.log('🎵 NewReleases songs:', data.newReleases.songs.length);
//         songsList = [...songsList, ...data.newReleases.songs];
//       }
      
//       // Recently Played songs
//       if (data.recentlyPlayed && data.recentlyPlayed.songs) {
//         console.log('🎵 RecentlyPlayed songs:', data.recentlyPlayed.songs.length);
//         songsList = [...songsList, ...data.recentlyPlayed.songs];
//       }
//     }
    
//     console.log('📊 Total songs:', songsList.length);
    
//     // Duplicate songs hatao
//     const uniqueSongs = songsList.filter((song, index, self) =>
//       index === self.findIndex(s => s.id === song.id)
//     );
    
//     console.log('🎯 Unique songs:', uniqueSongs.length);
//     return uniqueSongs;
//   };

//   // ✅ Home data se songs fetch karo
//   const fetchAllSongs = async () => {
//     try {
//       console.log('🔄 Home data se songs fetch kar rahe hain...');
      
//       const homeResponse = await getDataWithToken(mobile_siteConfig.HOME_DATA);
      
//       if (homeResponse && homeResponse.success && homeResponse.data) {
//         const allSongs = extractSongsFromHomeData(homeResponse);
        
//         console.log('🎵 Final songs list:', allSongs.length);
        
//         if (allSongs.length > 0) {
//           setSongs(allSongs);
//           setFilteredSongs(allSongs);
//         } else {
//           console.log('❌ Koi songs nahi mile');
//           setSongs([]);
//           setFilteredSongs([]);
//         }
//       } else {
//         throw new Error('Home data fetch nahi hua');
//       }
//     } catch (error) {
//       console.error('❌ Songs fetch error:', error);
//       Alert.alert('Error', 'Songs load nahi ho paye. Phir try karo.');
//       setSongs([]);
//       setFilteredSongs([]);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchAllSongs();
//   }, []);

//   // Search functionality
//   useEffect(() => {
//     if (searchQuery.trim() === '') {
//       setFilteredSongs(songs);
//     } else {
//       const filtered = songs.filter(song =>
//         song.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         song.artist?.name?.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//       setFilteredSongs(filtered);
//     }
//   }, [searchQuery, songs]);

//   // Song select/deselect karo
//   const toggleSongSelection = (songId) => {
//     const newSelected = new Set(selectedSongs);
//     if (newSelected.has(songId)) {
//       newSelected.delete(songId);
//     } else {
//       newSelected.add(songId);
//     }
//     setSelectedSongs(newSelected);
//   };

//   // ✅ FIXED: Songs playlist mein add karo
//   const handleAddSongs = async () => {
//     if (selectedSongs.size === 0) {
//       Alert.alert('Koi Song Select Nahin Hua', 'Kam se kam ek song select karo.');
//       return;
//     }

//     console.log('🔍 DEBUG - Playlist ID:', playlistId);
//     console.log('🔍 DEBUG - Selected songs:', Array.from(selectedSongs));

//     setAddingSongs(true);
//     try {
//       const songIds = Array.from(selectedSongs);
//       let successCount = 0;
//       let failedSongs = [];

//       // Har song ko individually add karo
//       for (const songId of songIds) {
//         try {
//           console.log(`🔄 Song ${songId} ko playlist mein add kar rahe hain`);
//           const response = await addSongToPlaylist(playlistId, songId);
          
//           if (response.success) {
//             successCount++;
//             console.log(`✅ Song ${songId} successfully add ho gaya`);
//           } else {
//             failedSongs.push({ id: songId, error: response.message });
//             console.log(`❌ Song ${songId} add nahi hua:`, response.message);
//           }
//         } catch (error) {
//           console.error(`❌ Song ${songId} add karne mein error:`, error);
//           failedSongs.push({ id: songId, error: error.message });
//         }
//       }

//       // Success/Error messages
//       if (failedSongs.length === 0) {
//         Alert.alert(
//           'Success 🎉',
//           `${successCount} song(s) successfully add ho gaye!`,
//           [{ text: 'OK', onPress: () => navigation.goBack() }]
//         );
//       } else {
//         Alert.alert(
//           'Partial Success',
//           `${successCount} song(s) add hue, ${failedSongs.length} fail hue.`,
//           [{ text: 'OK', onPress: () => navigation.goBack() }]
//         );
//       }
//     } catch (error) {
//       console.error('Add songs error:', error);
//       Alert.alert('Error', 'Songs add nahi ho paye');
//     } finally {
//       setAddingSongs(false);
//     }
//   };

//   // Duration format karo
//   const formatDuration = (seconds) => {
//     if (!seconds) return '0:00';
//     const mins = Math.floor(seconds / 60);
//     const secs = Math.floor(seconds % 60);
//     return `${mins}:${secs.toString().padStart(2, '0')}`;
//   };

//   // Song image get karo
//   const getSongImage = (song) => {
//     return song.coverImage || song.image || 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop';
//   };

//   // Song artist name get karo
//   const getSongArtist = (song) => {
//     return song.artist?.name || song.artistName || 'Unknown Artist';
//   };

//   // Song title get karo
//   const getSongTitle = (song) => {
//     return song.title || song.name || 'Unknown Song';
//   };

//   // Har song ka UI render karo
//   const renderSongItem = ({ item }) => (
//     <TouchableOpacity 
//       style={[
//         styles.songItem,
//         selectedSongs.has(item.id) && styles.songItemSelected
//       ]}
//       onPress={() => toggleSongSelection(item.id)}
//       activeOpacity={0.7}
//     >
//       <View style={styles.songImageContainer}>
//         <Image 
//           source={{ uri: getSongImage(item) }} 
//           style={styles.songImage}
//           resizeMode="cover"
//         />
//         {selectedSongs.has(item.id) && (
//           <View style={styles.selectedOverlay}>
//             <Icon name="checkmark" size={24} color="#fff" />
//           </View>
//         )}
//       </View>
      
//       <View style={styles.songInfo}>
//         <Text style={styles.songTitle} numberOfLines={1}>
//           {getSongTitle(item)}
//         </Text>
//         <Text style={styles.songArtist} numberOfLines={1}>
//           {getSongArtist(item)}
//         </Text>
//       </View>
      
//       <View style={styles.songMeta}>
//         <Text style={styles.songDuration}>
//           {formatDuration(item.duration)}
//         </Text>
//         <View style={[
//           styles.selectionIndicator,
//           selectedSongs.has(item.id) && styles.selectionIndicatorSelected
//         ]}>
//           {selectedSongs.has(item.id) && (
//             <Icon name="checkmark" size={16} color="#fff" />
//           )}
//         </View>
//       </View>
//     </TouchableOpacity>
//   );

//   // Loading state
//   if (isLoading) {
//     return (
//       <SafeAreaView style={styles.container}>
//         <StatusBar barStyle="light-content" backgroundColor="#000" />
//         <View style={styles.loadingContainer}>
//           <ActivityIndicator size="large" color="#1DB954" />
//           <Text style={styles.loadingText}>Songs load ho rahe hain...</Text>
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
//           <Icon name="chevron-back" size={24} color="#fff" />
//         </TouchableOpacity>
//         <View style={styles.headerTitleContainer}>
//           <Text style={styles.headerTitle} numberOfLines={1}>Add Songs</Text>
//           <Text style={styles.headerSubtitle}>to {playlistName}</Text>
//         </View>
//         <TouchableOpacity style={styles.headerButton}>
//           <Icon name="ellipsis-horizontal" size={24} color="#fff" />
//         </TouchableOpacity>
//       </View>

//       <View style={styles.content}>
//         {/* Search Bar */}
//         <View style={styles.searchContainer}>
//           <Icon name="search" size={20} color="#666" style={styles.searchIcon} />
//           <TextInput
//             style={styles.searchInput}
//             placeholder="Search songs..."
//             placeholderTextColor="#666"
//             value={searchQuery}
//             onChangeText={setSearchQuery}
//             returnKeyType="search"
//           />
//           {searchQuery.length > 0 && (
//             <TouchableOpacity onPress={() => setSearchQuery('')}>
//               <Icon name="close-circle" size={20} color="#666" />
//             </TouchableOpacity>
//           )}
//         </View>

//         {/* Selection Info */}
//         {selectedSongs.size > 0 && (
//           <View style={styles.selectionInfo}>
//             <Text style={styles.selectionText}>
//               {selectedSongs.size} song(s) selected
//             </Text>
//             <TouchableOpacity onPress={() => setSelectedSongs(new Set())}>
//               <Text style={styles.clearText}>Clear</Text>
//             </TouchableOpacity>
//           </View>
//         )}

//         {/* Songs List */}
//         {filteredSongs.length === 0 ? (
//           <View style={styles.emptyState}>
//             <Icon name="musical-notes-outline" size={64} color="#666" />
//             <Text style={styles.emptyStateTitle}>
//               {searchQuery ? 'Koi song nahi mila' : 'Koi song available nahi hai'}
//             </Text>
//             <Text style={styles.emptyStateText}>
//               {searchQuery ? 'Dusra search try karo' : 'Songs yahan listening history se ayenge'}
//             </Text>
//           </View>
//         ) : (
//           <FlatList
//             data={filteredSongs}
//             renderItem={renderSongItem}
//             keyExtractor={(item) => item.id?.toString()}
//             showsVerticalScrollIndicator={false}
//             style={styles.songsList}
//           />
//         )}

//         {/* Add Songs Button */}
//         {selectedSongs.size > 0 && (
//           <View style={styles.footer}>
//             <TouchableOpacity
//               style={styles.addButton}
//               onPress={handleAddSongs}
//               disabled={addingSongs}
//             >
//               {addingSongs ? (
//                 <View style={styles.loadingContainerSmall}>
//                   <ActivityIndicator size="small" color="#fff" />
//                   <Text style={styles.addButtonText}>{selectedSongs.size} songs add ho rahe hain...</Text>
//                 </View>
//               ) : (
//                 <Text style={styles.addButtonText}>
//                   {selectedSongs.size} Song(s) Playlist Mein Add Karo
//                 </Text>
//               )}
//             </TouchableOpacity>
//           </View>
//         )}
//       </View>
//     </SafeAreaView>
//   );
// };

// // Styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingHorizontal: 20,
//     paddingVertical: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#1a1a1a',
//   },
//   backButton: {
//     padding: 4,
//   },
//   headerTitleContainer: {
//     alignItems: 'center',
//     flex: 1,
//   },
//   headerTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#fff',
//     marginBottom: 2,
//   },
//   headerSubtitle: {
//     fontSize: 12,
//     color: '#b3b3b3',
//   },
//   headerButton: {
//     padding: 4,
//   },
//   content: {
//     flex: 1,
//     padding: 20,
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: 'rgba(255,255,255,0.1)',
//     paddingHorizontal: 16,
//     paddingVertical: 14,
//     borderRadius: 12,
//     borderWidth: 1,
//     borderColor: '#333',
//     marginBottom: 16,
//   },
//   searchIcon: {
//     marginRight: 12,
//   },
//   searchInput: {
//     flex: 1,
//     fontSize: 16,
//     color: '#fff',
//     padding: 0,
//   },
//   selectionInfo: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     backgroundColor: 'rgba(29, 185, 84, 0.1)',
//     padding: 12,
//     borderRadius: 8,
//     marginBottom: 16,
//     borderWidth: 1,
//     borderColor: 'rgba(29, 185, 84, 0.3)',
//   },
//   selectionText: {
//     fontSize: 14,
//     color: '#1DB954',
//     fontWeight: '600',
//   },
//   clearText: {
//     fontSize: 14,
//     color: '#1DB954',
//     fontWeight: '600',
//   },
//   songsList: {
//     flex: 1,
//   },
//   songItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 12,
//     paddingHorizontal: 8,
//     borderRadius: 8,
//     marginBottom: 8,
//   },
//   songItemSelected: {
//     backgroundColor: 'rgba(29, 185, 84, 0.1)',
//   },
//   songImageContainer: {
//     position: 'relative',
//     marginRight: 12,
//   },
//   songImage: {
//     width: 50,
//     height: 50,
//     borderRadius: 8,
//   },
//   selectedOverlay: {
//     ...StyleSheet.absoluteFillObject,
//     backgroundColor: 'rgba(29, 185, 84, 0.7)',
//     borderRadius: 8,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   songInfo: {
//     flex: 1,
//   },
//   songTitle: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#fff',
//     marginBottom: 2,
//   },
//   songArtist: {
//     fontSize: 14,
//     color: '#b3b3b3',
//   },
//   songMeta: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   songDuration: {
//     fontSize: 14,
//     color: '#b3b3b3',
//     marginRight: 12,
//   },
//   selectionIndicator: {
//     width: 22,
//     height: 22,
//     borderRadius: 11,
//     borderWidth: 2,
//     borderColor: '#b3b3b3',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   selectionIndicatorSelected: {
//     backgroundColor: '#1DB954',
//     borderColor: '#1DB954',
//   },
//   footer: {
//     paddingTop: 16,
//     borderTopWidth: 1,
//     borderTopColor: '#1a1a1a',
//   },
//   addButton: {
//     backgroundColor: '#1DB954',
//     paddingVertical: 16,
//     borderRadius: 30,
//     alignItems: 'center',
//   },
//   addButtonText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#fff',
//   },
//   loadingContainerSmall: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   emptyState: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   emptyStateTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#fff',
//     marginTop: 16,
//     marginBottom: 8,
//   },
//   emptyStateText: {
//     fontSize: 14,
//     color: '#b3b3b3',
//     textAlign: 'center',
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   loadingText: {
//     color: '#fff',
//     marginTop: 16,
//     fontSize: 16,
//   },
// });

// export default AddSongToPlaylistScreen;

// screens/AddSongToPlaylistScreen.tsx
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TextInput,
  Image,
  Alert,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { addSongToPlaylist, getDataWithToken } from '../Services/mobile-api';
import { mobile_siteConfig } from '../Services/mobile-siteConfig';

// ✅ Alag component banayein image loading ke liye
const SongImageWithLoader = ({ song, isSelected }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);
  
  const IMAGE_BASE_URL = mobile_siteConfig.IMAGE_BASE_URL;

  // ✅ Song image get karo - Response structure ke hisab se
  const getSongImage = (song) => {
    if (!song) {
      return 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop';
    }
    
    // Agar image URL already complete hai
    if (song.coverImage && song.coverImage.startsWith('http')) {
      return song.coverImage;
    }
    
    // Agar image URL relative path hai (jaise response mein hai)
    if (song.coverImage) {
      const imagePath = song.coverImage.startsWith('/') ? song.coverImage.substring(1) : song.coverImage;
      return `${IMAGE_BASE_URL}/${imagePath}`;
    }
    
    // Same for other image fields
    if (song.image) {
      if (song.image.startsWith('http')) {
        return song.image;
      }
      const imagePath = song.image.startsWith('/') ? song.image.substring(1) : song.image;
      return `${IMAGE_BASE_URL}/${imagePath}`;
    }
    
    return 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop';
  };

  const songImage = getSongImage(song);
  
  const handleImageError = () => {
    setImageError(true);
    setImageLoading(false);
  };
  
  const handleImageLoad = () => {
    setImageLoading(false);
  };

  return (
    <View style={styles.songImageContainer}>
      {imageLoading && (
        <View style={styles.imagePlaceholder}>
          <ActivityIndicator size="small" color="#1DB954" />
        </View>
      )}
      <Image 
        source={{ 
          uri: imageError 
            ? 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop'
            : songImage
        }} 
        style={[
          styles.songImage,
          imageLoading && { display: 'none' }
        ]}
        resizeMode="cover"
        onError={handleImageError}
        onLoad={handleImageLoad}
      />
      {isSelected && (
        <View style={styles.selectedOverlay}>
          <Icon name="checkmark" size={24} color="#fff" />
        </View>
      )}
    </View>
  );
};

const AddSongToPlaylistScreen = ({ navigation, route }) => {
  const { playlistId, playlistName } = route.params;
  
  const [songs, setSongs] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [selectedSongs, setSelectedSongs] = useState(new Set());
  const [addingSongs, setAddingSongs] = useState(false);

  // ✅ Songs nikalne ka function - Home data se
  const extractSongsFromHomeData = (homeData) => {
    let songsList = [];
    
    if (homeData.data) {
      const data = homeData.data;
      
      // Continue Listening songs
      if (data.continueListening && data.continueListening.songs) {
        songsList = [...songsList, ...data.continueListening.songs];
      }
      
      // New Releases songs
      if (data.newReleases && data.newReleases.songs) {
        songsList = [...songsList, ...data.newReleases.songs];
      }
      
      // Recently Played songs
      if (data.recentlyPlayed && data.recentlyPlayed.songs) {
        songsList = [...songsList, ...data.recentlyPlayed.songs];
      }
    }
    
    // Duplicate songs hatao
    const uniqueSongs = songsList.filter((song, index, self) =>
      index === self.findIndex(s => s.id === song.id)
    );
    
    return uniqueSongs;
  };

  // ✅ Home data se songs fetch karo
  const fetchAllSongs = async () => {
    try {
      const homeResponse = await getDataWithToken(mobile_siteConfig.HOME_DATA);
      
      if (homeResponse && homeResponse.success && homeResponse.data) {
        const allSongs = extractSongsFromHomeData(homeResponse);
        
        if (allSongs.length > 0) {
          setSongs(allSongs);
          setFilteredSongs(allSongs);
        } else {
          setSongs([]);
          setFilteredSongs([]);
        }
      } else {
        throw new Error('Home data fetch nahi hua');
      }
    } catch (error) {
      console.error('Songs fetch error:', error);
      Alert.alert('Error', 'Songs load nahi ho paye. Phir try karo.');
      setSongs([]);
      setFilteredSongs([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAllSongs();
  }, []);

  // Search functionality
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredSongs(songs);
    } else {
      const filtered = songs.filter(song =>
        song.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        song.artist?.name?.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredSongs(filtered);
    }
  }, [searchQuery, songs]);

  // Song select/deselect karo
  const toggleSongSelection = (songId) => {
    const newSelected = new Set(selectedSongs);
    if (newSelected.has(songId)) {
      newSelected.delete(songId);
    } else {
      newSelected.add(songId);
    }
    setSelectedSongs(newSelected);
  };

  // ✅ FINAL WORKING: Songs playlist mein add karo
  const handleAddSongs = async () => {
    if (selectedSongs.size === 0) {
      Alert.alert('Koi Song Select Nahin Hua', 'Kam se kam ek song select karo.');
      return;
    }

    console.log('🎵 Starting to add songs to playlist...');
    console.log('Playlist ID:', playlistId);
    console.log('Selected Songs:', Array.from(selectedSongs));

    setAddingSongs(true);
    try {
      const songIds = Array.from(selectedSongs);
      let successCount = 0;
      let failedSongs = [];

      // Har song ko individually add karo
      for (const songId of songIds) {
        try {
          console.log(`Adding song ${songId} to playlist...`);
          
          const response = await addSongToPlaylist(playlistId, songId);
          
          console.log(`Song ${songId} response:`, response);
          
          // ✅ Response structure ke hisab se check karo
          if (response.success === true) {
            successCount++;
            console.log(`✅ Song ${songId} successfully added`);
          } else {
            failedSongs.push({ id: songId, error: response.message });
            console.log(`❌ Song ${songId} failed:`, response.message);
          }
        } catch (error) {
          console.error(`Song ${songId} add error:`, error);
          failedSongs.push({ id: songId, error: error.message });
        }
      }

      // Success/Error messages
      if (failedSongs.length === 0) {
        Alert.alert(
          'Success 🎉',
          `${successCount} song(s) successfully add ho gaye!`,
          [{ text: 'OK', onPress: () => navigation.goBack() }]
        );
      } else if (successCount > 0) {
        Alert.alert(
          'Partial Success',
          `${successCount} song(s) add hue, ${failedSongs.length} fail hue.`,
          [{ text: 'OK', onPress: () => navigation.goBack() }]
        );
      } else {
        Alert.alert(
          'Failed ❌',
          `Koi bhi song add nahi ho paya. Phir try karo.`,
          [{ text: 'OK' }]
        );
      }
    } catch (error) {
      console.error('Add songs overall error:', error);
      Alert.alert('Error', 'Songs add nahi ho paye');
    } finally {
      setAddingSongs(false);
    }
  };

  // Duration format karo
  const formatDuration = (seconds) => {
    if (!seconds) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Song artist name get karo - Response structure ke hisab se
  const getSongArtist = (song) => {
    return song.artist?.name || song.artistName || 'Unknown Artist';
  };

  // Song title get karo
  const getSongTitle = (song) => {
    return song.title || song.name || 'Unknown Song';
  };

  // ✅ Har song ka UI render karo
  const renderSongItem = ({ item }) => (
    <TouchableOpacity 
      style={[
        styles.songItem,
        selectedSongs.has(item.id) && styles.songItemSelected
      ]}
      onPress={() => toggleSongSelection(item.id)}
      activeOpacity={0.7}
    >
      <SongImageWithLoader 
        song={item} 
        isSelected={selectedSongs.has(item.id)} 
      />
      
      <View style={styles.songInfo}>
        <Text style={styles.songTitle} numberOfLines={1}>
          {getSongTitle(item)}
        </Text>
        <Text style={styles.songArtist} numberOfLines={1}>
          {getSongArtist(item)}
        </Text>
      </View>
      
      <View style={styles.songMeta}>
        <Text style={styles.songDuration}>
          {formatDuration(item.duration)}
        </Text>
        <View style={[
          styles.selectionIndicator,
          selectedSongs.has(item.id) && styles.selectionIndicatorSelected
        ]}>
          {selectedSongs.has(item.id) && (
            <Icon name="checkmark" size={16} color="#fff" />
          )}
        </View>
      </View>
    </TouchableOpacity>
  );

  // Loading state
  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#000" />
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#1DB954" />
          <Text style={styles.loadingText}>Songs load ho rahe hain...</Text>
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
          <Icon name="chevron-back" size={24} color="#fff" />
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle} numberOfLines={1}>Add Songs</Text>
          <Text style={styles.headerSubtitle}>to {playlistName}</Text>
        </View>
        <TouchableOpacity style={styles.headerButton}>
          <Icon name="ellipsis-horizontal" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Icon name="search" size={20} color="#666" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search songs..."
            placeholderTextColor="#666"
            value={searchQuery}
            onChangeText={setSearchQuery}
            returnKeyType="search"
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => setSearchQuery('')}>
              <Icon name="close-circle" size={20} color="#666" />
            </TouchableOpacity>
          )}
        </View>

        {/* Selection Info */}
        {selectedSongs.size > 0 && (
          <View style={styles.selectionInfo}>
            <Text style={styles.selectionText}>
              {selectedSongs.size} song(s) selected
            </Text>
            <TouchableOpacity onPress={() => setSelectedSongs(new Set())}>
              <Text style={styles.clearText}>Clear</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Songs List */}
        {filteredSongs.length === 0 ? (
          <View style={styles.emptyState}>
            <Icon name="musical-notes-outline" size={64} color="#666" />
            <Text style={styles.emptyStateTitle}>
              {searchQuery ? 'Koi song nahi mila' : 'Koi song available nahi hai'}
            </Text>
            <Text style={styles.emptyStateText}>
              {searchQuery ? 'Dusra search try karo' : 'Songs yahan listening history se ayenge'}
            </Text>
          </View>
        ) : (
          <FlatList
            data={filteredSongs}
            renderItem={renderSongItem}
            keyExtractor={(item) => item.id?.toString()}
            showsVerticalScrollIndicator={false}
            style={styles.songsList}
          />
        )}

        {/* Add Songs Button */}
        {selectedSongs.size > 0 && (
          <View style={styles.footer}>
            <TouchableOpacity
              style={styles.addButton}
              onPress={handleAddSongs}
              disabled={addingSongs}
            >
              {addingSongs ? (
                <View style={styles.loadingContainerSmall}>
                  <ActivityIndicator size="small" color="#fff" />
                  <Text style={styles.addButtonText}>{selectedSongs.size} songs add ho rahe hain...</Text>
                </View>
              ) : (
                <Text style={styles.addButtonText}>
                  {selectedSongs.size} Song(s) Playlist Mein Add Karo
                </Text>
              )}
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

// Styles - Same as before
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#1a1a1a',
  },
  backButton: {
    padding: 4,
  },
  headerTitleContainer: {
    alignItems: 'center',
    flex: 1,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 2,
  },
  headerSubtitle: {
    fontSize: 12,
    color: '#b3b3b3',
  },
  headerButton: {
    padding: 4,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.1)',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#333',
    marginBottom: 16,
  },
  searchIcon: {
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#fff',
    padding: 0,
  },
  selectionInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(29, 185, 84, 0.1)',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'rgba(29, 185, 84, 0.3)',
  },
  selectionText: {
    fontSize: 14,
    color: '#1DB954',
    fontWeight: '600',
  },
  clearText: {
    fontSize: 14,
    color: '#1DB954',
    fontWeight: '600',
  },
  songsList: {
    flex: 1,
  },
  songItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 8,
    marginBottom: 8,
  },
  songItemSelected: {
    backgroundColor: 'rgba(29, 185, 84, 0.1)',
  },
  songImageContainer: {
    position: 'relative',
    marginRight: 12,
    width: 50,
    height: 50,
  },
  songImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  imagePlaceholder: {
    width: 50,
    height: 50,
    borderRadius: 8,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(29, 185, 84, 0.7)',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  songInfo: {
    flex: 1,
  },
  songTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 2,
  },
  songArtist: {
    fontSize: 14,
    color: '#b3b3b3',
  },
  songMeta: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  songDuration: {
    fontSize: 14,
    color: '#b3b3b3',
    marginRight: 12,
  },
  selectionIndicator: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: '#b3b3b3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectionIndicatorSelected: {
    backgroundColor: '#1DB954',
    borderColor: '#1DB954',
  },
  footer: {
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#1a1a1a',
  },
  addButton: {
    backgroundColor: '#1DB954',
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  loadingContainerSmall: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyStateTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 16,
    marginBottom: 8,
  },
  emptyStateText: {
    fontSize: 14,
    color: '#b3b3b3',
    textAlign: 'center',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    color: '#fff',
    marginTop: 16,
    fontSize: 16,
  },
});

export default AddSongToPlaylistScreen;