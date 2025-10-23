// // // // // import React from 'react';
// // // // // import {
// // // // //   View,
// // // // //   Text,
// // // // //   TouchableOpacity,
// // // // //   StyleSheet,
// // // // //   SafeAreaView,
// // // // //   StatusBar,
// // // // //   ScrollView,
// // // // // } from 'react-native';
// // // // // import Icon from 'react-native-vector-icons/Ionicons';

// // // // // const ArtistsScreen = ({ navigation }) => {
// // // // //   const artists = [
// // // // //     { id: 1, name: 'One Republic' },
// // // // //     { id: 2, name: 'Coldplay' },
// // // // //     { id: 3, name: 'The Chimera' },
// // // // //     { id: 4, name: 'Linden Park' },
// // // // //     { id: 5, name: 'Six' },
// // // // //     { id: 6, name: 'Elite Counting' },
// // // // //     { id: 7, name: 'Katy Perry' },
// // // // //     { id: 8, name: 'Maroon 5' },
// // // // //   ];

// // // // //   return (
// // // // //     <SafeAreaView style={styles.container}>
// // // // //       <StatusBar barStyle="light-content" backgroundColor="#000" />
      
// // // // //       <View style={styles.header}>
// // // // //         <TouchableOpacity onPress={() => navigation.goBack()}>
// // // // //           <Icon name="chevron-back" size={24} color="#fff" />
// // // // //         </TouchableOpacity>
// // // // //         <Text style={styles.headerTitle}>Artists Following</Text>
// // // // //         <TouchableOpacity>
// // // // //           {/* <Icon name="search" size={24} color="#fff" /> */}
// // // // //         </TouchableOpacity>
// // // // //       </View>

// // // // //       <ScrollView style={styles.scrollView}>
// // // // //         <Text style={styles.subtitle}>8 artists following</Text>
        
// // // // //         <View style={styles.searchContainer}>
// // // // //           <Icon name="search" size={20} color="#000" />
// // // // //           <Text style={styles.searchText}>Search</Text>
// // // // //         </View>

// // // // //         <View style={styles.artistsGrid}>
// // // // //           {artists.map((artist) => (
// // // // //             <TouchableOpacity key={artist.id} style={styles.artistItem}>
// // // // //               <View style={styles.artistImage}>
// // // // //                 <Text style={styles.artistInitials}>
// // // // //                   {artist.name.split(' ').map(n => n[0]).join('')}
// // // // //                 </Text>
// // // // //               </View>
// // // // //               <Text style={styles.artistName}>{artist.name}</Text>
// // // // //             </TouchableOpacity>
// // // // //           ))}
          
// // // // //           {/* Add More Button */}
// // // // //           <TouchableOpacity style={styles.addMoreItem}>
// // // // //             <View style={[styles.artistImage, styles.addMoreImage]}>
// // // // //               <Icon name="add" size={24} color="#fff" />
// // // // //             </View>
// // // // //             <Text style={styles.addMoreText}>Add More</Text>
// // // // //           </TouchableOpacity>
// // // // //         </View>
// // // // //       </ScrollView>
// // // // //     </SafeAreaView>
// // // // //   );
// // // // // };

// // // // // const styles = StyleSheet.create({
// // // // //   container: {
// // // // //     flex: 1,
// // // // //     backgroundColor: '#000',
// // // // //   },
// // // // //   header: {
// // // // //     flexDirection: 'row',
// // // // //     alignItems: 'center',
// // // // //     justifyContent: 'space-between',
// // // // //     paddingHorizontal: 20,
// // // // //     paddingVertical: 15,
// // // // //     borderBottomWidth: 1,
// // // // //     borderBottomColor: '#282828',
// // // // //   },
// // // // //   headerTitle: {
// // // // //     fontSize: 24,
// // // // //     fontWeight: 'bold',
// // // // //     color: '#fff',
// // // // //   },
// // // // //   scrollView: {
// // // // //     flex: 1,
// // // // //     paddingHorizontal: 20,
// // // // //   },
// // // // //   subtitle: {
// // // // //     fontSize: 16,
// // // // //     color: '#b3b3b3',
// // // // //     marginTop: 20,
// // // // //     marginBottom: 15,
// // // // //   },
// // // // //   searchContainer: {
// // // // //     flexDirection: 'row',
// // // // //     alignItems: 'center',
// // // // //     backgroundColor: '#fff',
// // // // //     paddingHorizontal: 15,
// // // // //     paddingVertical: 12,
// // // // //     borderRadius: 30,
// // // // //     marginBottom: 20,
// // // // //   },
// // // // //   searchText: {
// // // // //     fontSize: 16,
// // // // //     color: '#000',
// // // // //     marginLeft: 10,
// // // // //   },
// // // // //   artistsGrid: {
// // // // //     flexDirection: 'row',
// // // // //     flexWrap: 'wrap',
// // // // //     justifyContent: 'space-between',
// // // // //   },
// // // // //   artistItem: {
// // // // //     alignItems: 'center',
// // // // //     width: '30%',
// // // // //     marginBottom: 20,
// // // // //   },
// // // // //   artistImage: {
// // // // //     width: 80,
// // // // //     height: 80,
// // // // //     borderRadius: 40,
// // // // //     backgroundColor: '#1e3264',
// // // // //     justifyContent: 'center',
// // // // //     alignItems: 'center',
// // // // //     marginBottom: 8,
// // // // //   },
// // // // //   artistInitials: {
// // // // //     fontSize: 18,
// // // // //     fontWeight: 'bold',
// // // // //     color: '#fff',
// // // // //   },
// // // // //   artistName: {
// // // // //     fontSize: 14,
// // // // //     fontWeight: '600',
// // // // //     color: '#fff',
// // // // //     textAlign: 'center',
// // // // //   },
// // // // //   addMoreItem: {
// // // // //     alignItems: 'center',
// // // // //     width: '30%',
// // // // //     marginBottom: 20,
// // // // //   },
// // // // //   addMoreImage: {
// // // // //     backgroundColor: '#333',
// // // // //   },
// // // // //   addMoreText: {
// // // // //     fontSize: 14,
// // // // //     fontWeight: '600',
// // // // //     color: '#b3b3b3',
// // // // //     textAlign: 'center',
// // // // //   },
// // // // // });

// // // // // export default ArtistsScreen;


// // // // import React from 'react';
// // // // import {
// // // //   View,
// // // //   Text,
// // // //   TouchableOpacity,
// // // //   StyleSheet,
// // // //   SafeAreaView,
// // // //   StatusBar,
// // // //   ScrollView,
// // // //   Image
// // // // } from 'react-native';
// // // // import Icon from 'react-native-vector-icons/Ionicons';

// // // // const ArtistsScreen = ({ navigation }) => {
// // // //   const artists = [
// // // //     { 
// // // //       id: 1, 
// // // //       name: 'One Republic',
// // // //       image: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=400&h=400&fit=crop&crop=face'
// // // //     },
// // // //     { 
// // // //       id: 2, 
// // // //       name: 'Coldplay',
// // // //       image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop&crop=face'
// // // //     },
// // // //     { 
// // // //       id: 3, 
// // // //       name: 'The Weeknd',
// // // //       image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400&h=400&fit=crop&crop=face'
// // // //     },
// // // //     { 
// // // //       id: 4, 
// // // //       name: 'Linden Park',
// // // //       image: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=400&h=400&fit=crop&crop=face'
// // // //     },
// // // //     { 
// // // //       id: 5, 
// // // //       name: 'Six',
// // // //       image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face'
// // // //     },
// // // //     { 
// // // //       id: 6, 
// // // //       name: 'Elite Counting',
// // // //       image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop&crop=face'
// // // //     },
// // // //     { 
// // // //       id: 7, 
// // // //       name: 'Katy Perry',
// // // //      image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=400&fit=crop&crop=face'
// // // // },
// // // //     { 
// // // //       id: 8, 
// // // //       name: 'Maroon 5',
// // // //       image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=400&fit=crop&crop=face'
// // // //     },
// // // //   ];

// // // //   return (
// // // //     <SafeAreaView style={styles.container}>
// // // //       <StatusBar barStyle="light-content" backgroundColor="#000" />
      
// // // //       <View style={styles.header}>
// // // //         <TouchableOpacity onPress={() => navigation.goBack()}>
// // // //           <Icon name="chevron-back" size={24} color="#fff" />
// // // //         </TouchableOpacity>
// // // //         <Text style={styles.headerTitle}>Artists Following</Text>
// // // //         <TouchableOpacity>
// // // //           {/* <Icon name="search" size={24} color="#fff" /> */}
// // // //         </TouchableOpacity>
// // // //       </View>

// // // //       <ScrollView style={styles.scrollView}>
// // // //         <Text style={styles.subtitle}>8 artists following</Text>
        
// // // //         <View style={styles.searchContainer}>
// // // //           <Icon name="search" size={20} color="#000" />
// // // //           <Text style={styles.searchText}>Search</Text>
// // // //         </View>

// // // //         <View style={styles.artistsGrid}>
// // // //           {artists.map((artist) => (
// // // //             <TouchableOpacity key={artist.id} style={styles.artistItem}>
// // // //               <View style={styles.artistImageContainer}>
// // // //                 <Image 
// // // //                   source={{ uri: artist.image }} 
// // // //                   style={styles.artistImage}
// // // //                   resizeMode="cover"
// // // //                 />
// // // //                 {/* Verified Badge */}
// // // //                 <View style={styles.verifiedBadge}>
// // // //                   <Icon name="checkmark-circle" size={16} color="#1DB954" />
// // // //                 </View>
// // // //               </View>
// // // //               <Text style={styles.artistName}>{artist.name}</Text>
// // // //               <Text style={styles.artistType}>Artist</Text>
// // // //             </TouchableOpacity>
// // // //           ))}
          
// // // //           {/* Add More Button */}
// // // //           <TouchableOpacity style={styles.addMoreItem}>
// // // //             <View style={[styles.artistImageContainer, styles.addMoreImage]}>
// // // //               <View style={styles.addMoreIcon}>
// // // //                 <Icon name="add" size={24} color="#fff" />
// // // //               </View>
// // // //             </View>
// // // //             <Text style={styles.addMoreText}>Add More</Text>
// // // //           </TouchableOpacity>
// // // //         </View>
// // // //       </ScrollView>
// // // //     </SafeAreaView>
// // // //   );
// // // // };

// // // // const styles = StyleSheet.create({
// // // //   container: {
// // // //     flex: 1,
// // // //     backgroundColor: '#000',
// // // //   },
// // // //   header: {
// // // //     flexDirection: 'row',
// // // //     alignItems: 'center',
// // // //     justifyContent: 'space-between',
// // // //     paddingHorizontal: 20,
// // // //     paddingVertical: 15,
// // // //     borderBottomWidth: 1,
// // // //     borderBottomColor: '#282828',
// // // //   },
// // // //   headerTitle: {
// // // //     fontSize: 24,
// // // //     fontWeight: 'bold',
// // // //     color: '#fff',
// // // //   },
// // // //   scrollView: {
// // // //     flex: 1,
// // // //     paddingHorizontal: 20,
// // // //   },
// // // //   subtitle: {
// // // //     fontSize: 16,
// // // //     color: '#b3b3b3',
// // // //     marginTop: 20,
// // // //     marginBottom: 15,
// // // //   },
// // // //   searchContainer: {
// // // //     flexDirection: 'row',
// // // //     alignItems: 'center',
// // // //     backgroundColor: '#fff',
// // // //     paddingHorizontal: 15,
// // // //     paddingVertical: 12,
// // // //     borderRadius: 30,
// // // //     marginBottom: 20,
// // // //   },
// // // //   searchText: {
// // // //     fontSize: 16,
// // // //     color: '#000',
// // // //     marginLeft: 10,
// // // //   },
// // // //   artistsGrid: {
// // // //     flexDirection: 'row',
// // // //     flexWrap: 'wrap',
// // // //     justifyContent: 'space-between',
// // // //   },
// // // //   artistItem: {
// // // //     alignItems: 'center',
// // // //     width: '30%',
// // // //     marginBottom: 25,
// // // //   },
// // // //   artistImageContainer: {
// // // //     width: 90,
// // // //     height: 90,
// // // //     borderRadius: 45,
// // // //     marginBottom: 12,
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
// // // //     borderRadius: 45,
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
// // // //     marginBottom: 4,
// // // //   },
// // // //   artistType: {
// // // //     fontSize: 12,
// // // //     color: '#b3b3b3',
// // // //     textAlign: 'center',
// // // //   },
// // // //   addMoreItem: {
// // // //     alignItems: 'center',
// // // //     width: '30%',
// // // //     marginBottom: 25,
// // // //   },
// // // //   addMoreImage: {
// // // //     backgroundColor: '#333',
// // // //     borderWidth: 2,
// // // //     borderColor: '#444',
// // // //     borderStyle: 'dashed',
// // // //     justifyContent: 'center',
// // // //     alignItems: 'center',
// // // //   },
// // // //   addMoreIcon: {
// // // //     width: 32,
// // // //     height: 32,
// // // //     borderRadius: 16,
// // // //     backgroundColor: 'rgba(255,255,255,0.2)',
// // // //     justifyContent: 'center',
// // // //     alignItems: 'center',
// // // //   },
// // // //   addMoreText: {
// // // //     fontSize: 14,
// // // //     fontWeight: '600',
// // // //     color: '#b3b3b3',
// // // //     textAlign: 'center',
// // // //     marginTop: 8,
// // // //   },
// // // // });

// // // // export default ArtistsScreen;

// // // // screens/ArtistsScreen.js - FIXED VERSION WITH API
// // // import React, { useState, useEffect } from 'react';
// // // import {
// // //   View,
// // //   Text,
// // //   TouchableOpacity,
// // //   StyleSheet,
// // //   SafeAreaView,
// // //   StatusBar,
// // //   ScrollView,
// // //   Image,
// // //   RefreshControl,
// // //   ActivityIndicator,
// // //   Alert
// // // } from 'react-native';
// // // import Icon from 'react-native-vector-icons/Ionicons';
// // // import { getFavoriteArtists } from '../Services/mobile-api';
// // // import { mobile_siteConfig } from '../Services/mobile-siteConfig';

// // // const ArtistsScreen = ({ navigation }) => {
// // //   const [artists, setArtists] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [refreshing, setRefreshing] = useState(false);

// // //   // Helper function to get complete image URL
// // //   const getImageUrl = (imagePath) => {
// // //     if (!imagePath) return null;
    
// // //     if (imagePath.startsWith('http')) {
// // //       return imagePath;
// // //     } else if (imagePath.startsWith('/')) {
// // //       return `${mobile_siteConfig.IMAGE_BASE_URL}${imagePath}`;
// // //     } else {
// // //       return `${mobile_siteConfig.IMAGE_BASE_URL}/${imagePath}`;
// // //     }
// // //   };

// // //   // Load favorite artists from API
// // //   const loadFavoriteArtists = async (isRefresh = false) => {
// // //     try {
// // //       if (isRefresh) {
// // //         setRefreshing(true);
// // //       } else {
// // //         setLoading(true);
// // //       }

// // //       console.log('🎵 Loading favorite artists...');
      
// // //       const response = await getFavoriteArtists();
      
// // //       console.log('🎵 Favorite artists API response:', response);
      
// // //       if (response && response.success) {
// // //         const artistsData = response.data?.artists || [];
        
// // //         console.log('🎵 Artists found:', artistsData.length);
        
// // //         // Transform artists data
// // //         const transformedArtists = artistsData.map((artist) => ({
// // //           id: artist.id?.toString(),
// // //           name: artist.name || 'Unknown Artist',
// // //           image: getImageUrl(artist.profilePic),
// // //           isVerified: artist.isVerified || false,
// // //           followers: artist.followers || 0,
// // //           type: 'Artist'
// // //         }));
        
// // //         setArtists(transformedArtists);
// // //       } else {
// // //         console.log('❌ Failed to load favorite artists');
// // //         setArtists([]);
// // //       }
// // //     } catch (error) {
// // //       console.error('❌ Load favorite artists error:', error);
// // //       Alert.alert('Error', 'Failed to load followed artists');
// // //       setArtists([]);
// // //     } finally {
// // //       setLoading(false);
// // //       setRefreshing(false);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     loadFavoriteArtists();
// // //   }, []);

// // //   const onRefresh = async () => {
// // //     await loadFavoriteArtists(true);
// // //   };

// // //   const formatNumber = (num) => {
// // //     if (!num) return '0';
// // //     if (num >= 1000000) {
// // //       return `${(num / 1000000).toFixed(1)}M`;
// // //     } else if (num >= 1000) {
// // //       return `${(num / 1000).toFixed(1)}K`;
// // //     }
// // //     return `${num}`;
// // //   };

// // //   if (loading) {
// // //     return (
// // //       <SafeAreaView style={styles.container}>
// // //         <StatusBar barStyle="light-content" backgroundColor="#000" />
        
// // //         <View style={styles.header}>
// // //           <TouchableOpacity onPress={() => navigation.goBack()}>
// // //             <Icon name="chevron-back" size={24} color="#fff" />
// // //           </TouchableOpacity>
// // //           <Text style={styles.headerTitle}>Artists Following</Text>
// // //           <View style={styles.headerRight} />
// // //         </View>

// // //         <View style={styles.loadingContainer}>
// // //           <ActivityIndicator size="large" color="#FF0000" />
// // //           <Text style={styles.loadingText}>Loading artists...</Text>
// // //         </View>
// // //       </SafeAreaView>
// // //     );
// // //   }

// // //   return (
// // //     <SafeAreaView style={styles.container}>
// // //       <StatusBar barStyle="light-content" backgroundColor="#000" />
      
// // //       <View style={styles.header}>
// // //         <TouchableOpacity onPress={() => navigation.goBack()}>
// // //           <Icon name="chevron-back" size={24} color="#fff" />
// // //         </TouchableOpacity>
// // //         <Text style={styles.headerTitle}>Artists Following</Text>
// // //         <View style={styles.headerRight} />
// // //       </View>

// // //       <ScrollView 
// // //         style={styles.scrollView}
// // //         refreshControl={
// // //           <RefreshControl
// // //             refreshing={refreshing}
// // //             onRefresh={onRefresh}
// // //             colors={['#FF0000']}
// // //             tintColor="#FF0000"
// // //           />
// // //         }
// // //       >
// // //         <Text style={styles.subtitle}>
// // //           {artists.length} {artists.length === 1 ? 'artist' : 'artists'} following
// // //         </Text>

// // //         {/* ✅ REMOVED: Search Container */}

// // //         {artists.length === 0 ? (
// // //           <View style={styles.emptyState}>
// // //             <Icon name="people-outline" size={80} color="#666" />
// // //             <Text style={styles.emptyStateTitle}>No Artists Followed</Text>
// // //             <Text style={styles.emptyStateText}>
// // //               Artists you follow will appear here
// // //             </Text>
// // //             <TouchableOpacity 
// // //               style={styles.exploreButton}
// // //               onPress={() => navigation.navigate('Home')}
// // //             >
// // //               <Text style={styles.exploreButtonText}>Explore Artists</Text>
// // //             </TouchableOpacity>
// // //           </View>
// // //         ) : (
// // //           <View style={styles.artistsGrid}>
// // //             {artists.map((artist) => (
// // //               <TouchableOpacity 
// // //                 key={artist.id} 
// // //                 style={styles.artistItem}
// // //                 onPress={() => {
// // //                   // Navigate to artist profile if needed
// // //                   console.log('🎵 Artist pressed:', artist.name);
// // //                 }}
// // //               >
// // //                 <View style={styles.artistImageContainer}>
// // //                   <Image 
// // //                     source={{ uri: artist.image }} 
// // //                     style={styles.artistImage}
// // //                     resizeMode="cover"
// // //                     onError={(error) => {
// // //                       console.log('❌ Artist image load error:', error.nativeEvent.error);
// // //                     }}
// // //                   />
                  
// // //                   {/* Fallback for missing image */}
// // //                   {!artist.image && (
// // //                     <View style={styles.artistImageFallback}>
// // //                       <Text style={styles.artistImageFallbackText}>
// // //                         {artist.name ? artist.name.charAt(0).toUpperCase() : 'A'}
// // //                       </Text>
// // //                     </View>
// // //                   )}
                  
// // //                   {/* Verified Badge */}
// // //                   {artist.isVerified && (
// // //                     <View style={styles.verifiedBadge}>
// // //                       <Icon name="checkmark-circle" size={16} color="#1DB954" />
// // //                     </View>
// // //                   )}
// // //                 </View>
                
// // //                 <Text style={styles.artistName} numberOfLines={1}>
// // //                   {artist.name}
// // //                 </Text>
                
// // //                 <Text style={styles.artistType}>Artist</Text>
                
// // //                 {artist.followers > 0 && (
// // //                   <Text style={styles.artistFollowers}>
// // //                     {formatNumber(artist.followers)} followers
// // //                   </Text>
// // //                 )}
// // //               </TouchableOpacity>
// // //             ))}
            
// // //             {/* Add More Button */}
// // //             <TouchableOpacity 
// // //               style={styles.addMoreItem}
// // //               onPress={() => navigation.navigate('Home')}
// // //             >
// // //               <View style={[styles.artistImageContainer, styles.addMoreImage]}>
// // //                 <View style={styles.addMoreIcon}>
// // //                   <Icon name="add" size={24} color="#fff" />
// // //                 </View>
// // //               </View>
// // //               <Text style={styles.addMoreText}>Add More</Text>
// // //             </TouchableOpacity>
// // //           </View>
// // //         )}
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
// // //     flexDirection: 'row',
// // //     alignItems: 'center',
// // //     justifyContent: 'space-between',
// // //     paddingHorizontal: 20,
// // //     paddingVertical: 15,
// // //     borderBottomWidth: 1,
// // //     borderBottomColor: '#282828',
// // //   },
// // //   headerTitle: {
// // //     fontSize: 24,
// // //     fontWeight: 'bold',
// // //     color: '#fff',
// // //   },
// // //   headerRight: {
// // //     width: 24, // For balance
// // //   },
// // //   scrollView: {
// // //     flex: 1,
// // //     paddingHorizontal: 20,
// // //   },
// // //   subtitle: {
// // //     fontSize: 16,
// // //     color: '#b3b3b3',
// // //     marginTop: 20,
// // //     marginBottom: 20,
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
// // //   emptyState: {
// // //     alignItems: 'center',
// // //     justifyContent: 'center',
// // //     paddingVertical: 60,
// // //   },
// // //   emptyStateTitle: {
// // //     fontSize: 20,
// // //     fontWeight: 'bold',
// // //     color: '#fff',
// // //     marginTop: 20,
// // //     marginBottom: 8,
// // //   },
// // //   emptyStateText: {
// // //     fontSize: 16,
// // //     color: '#b3b3b3',
// // //     textAlign: 'center',
// // //     marginBottom: 24,
// // //     lineHeight: 22,
// // //   },
// // //   exploreButton: {
// // //     backgroundColor: '#FF0000',
// // //     paddingHorizontal: 24,
// // //     paddingVertical: 12,
// // //     borderRadius: 25,
// // //   },
// // //   exploreButtonText: {
// // //     color: '#fff',
// // //     fontSize: 16,
// // //     fontWeight: 'bold',
// // //   },
// // //   artistsGrid: {
// // //     flexDirection: 'row',
// // //     flexWrap: 'wrap',
// // //     justifyContent: 'space-between',
// // //   },
// // //   artistItem: {
// // //     alignItems: 'center',
// // //     width: '30%',
// // //     marginBottom: 25,
// // //   },
// // //   artistImageContainer: {
// // //     width: 90,
// // //     height: 90,
// // //     borderRadius: 45,
// // //     marginBottom: 12,
// // //     position: 'relative',
// // //     shadowColor: '#000',
// // //     shadowOffset: {
// // //       width: 0,
// // //       height: 4,
// // //     },
// // //     shadowOpacity: 0.3,
// // //     shadowRadius: 8,
// // //     elevation: 8,
// // //     backgroundColor: '#333',
// // //   },
// // //   artistImage: {
// // //     width: '100%',
// // //     height: '100%',
// // //     borderRadius: 45,
// // //   },
// // //   artistImageFallback: {
// // //     ...StyleSheet.absoluteFillObject,
// // //     backgroundColor: '#FF0000',
// // //     borderRadius: 45,
// // //     justifyContent: 'center',
// // //     alignItems: 'center',
// // //   },
// // //   artistImageFallbackText: {
// // //     color: '#fff',
// // //     fontSize: 24,
// // //     fontWeight: 'bold',
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
// // //     marginBottom: 4,
// // //     width: '100%',
// // //   },
// // //   artistType: {
// // //     fontSize: 12,
// // //     color: '#b3b3b3',
// // //     textAlign: 'center',
// // //     marginBottom: 2,
// // //   },
// // //   artistFollowers: {
// // //     fontSize: 10,
// // //     color: '#666',
// // //     textAlign: 'center',
// // //   },
// // //   addMoreItem: {
// // //     alignItems: 'center',
// // //     width: '30%',
// // //     marginBottom: 25,
// // //   },
// // //   addMoreImage: {
// // //     backgroundColor: '#333',
// // //     borderWidth: 2,
// // //     borderColor: '#444',
// // //     borderStyle: 'dashed',
// // //     justifyContent: 'center',
// // //     alignItems: 'center',
// // //   },
// // //   addMoreIcon: {
// // //     width: 32,
// // //     height: 32,
// // //     borderRadius: 16,
// // //     backgroundColor: 'rgba(255,255,255,0.2)',
// // //     justifyContent: 'center',
// // //     alignItems: 'center',
// // //   },
// // //   addMoreText: {
// // //     fontSize: 14,
// // //     fontWeight: '600',
// // //     color: '#b3b3b3',
// // //     textAlign: 'center',
// // //     marginTop: 8,
// // //   },
// // // });

// // // export default ArtistsScreen;


// // // screens/ArtistsScreen.js - FIXED VERSION
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
// //   ActivityIndicator,
// //   Alert,
// //   RefreshControl
// // } from 'react-native';
// // import { useFocusEffect } from '@react-navigation/native';
// // import Icon from 'react-native-vector-icons/Ionicons';
// // import { getFavoriteArtists } from '../Services/mobile-api';
// // import { mobile_siteConfig } from '../Services/mobile-siteConfig';

// // const ArtistsScreen = ({ navigation }) => {
// //   const [artists, setArtists] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [refreshing, setRefreshing] = useState(false);

// //   // Helper function to get complete image URL
// //   const getImageUrl = (imagePath) => {
// //     if (!imagePath) return null;
    
// //     if (imagePath.startsWith('http')) {
// //       return imagePath;
// //     } else if (imagePath.startsWith('/')) {
// //       return `${mobile_siteConfig.IMAGE_BASE_URL}${imagePath}`;
// //     } else {
// //       return `${mobile_siteConfig.IMAGE_BASE_URL}/${imagePath}`;
// //     }
// //   };

// //   // Load favorite artists from API
// //   const loadFavoriteArtists = async (isRefresh = false) => {
// //     try {
// //       if (isRefresh) {
// //         setRefreshing(true);
// //       } else {
// //         setLoading(true);
// //       }

// //       console.log('🎵 Loading favorite artists...');
      
// //       const response = await getFavoriteArtists();
      
// //       console.log('🎵 Favorite artists API response:', response);
// //       console.log('🎵 Response data structure:', response.data);
      
// //       if (response && response.success) {
// //         // ✅ FIXED: Use favoriteArtists instead of artists
// //         const artistsData = response.data?.favoriteArtists || [];
        
// //         console.log('🎵 Artists found:', artistsData.length);
// //         console.log('🎵 Artists data:', artistsData);
        
// //         // Transform artists data
// //         const transformedArtists = artistsData.map((artist) => ({
// //           id: artist.id?.toString(),
// //           name: artist.name || 'Unknown Artist',
// //           image: getImageUrl(artist.profilePic),
// //           isVerified: artist.isVerified || false,
// //           followers: artist.followers || 0,
// //           type: 'Artist'
// //         }));
        
// //         setArtists(transformedArtists);
// //       } else {
// //         console.log('❌ Failed to load favorite artists');
// //         setArtists([]);
// //       }
// //     } catch (error) {
// //       console.error('❌ Load favorite artists error:', error);
// //       Alert.alert('Error', 'Failed to load followed artists');
// //       setArtists([]);
// //     } finally {
// //       setLoading(false);
// //       setRefreshing(false);
// //     }
// //   };

// //   // ✅ FIX: Load data when screen comes into focus
// //   useFocusEffect(
// //     React.useCallback(() => {
// //       console.log('🔄 ArtistsScreen focused - refreshing data');
// //       loadFavoriteArtists();
// //     }, [])
// //   );

// //   // Initial load
// //   useEffect(() => {
// //     loadFavoriteArtists();
// //   }, []);

// //   const onRefresh = async () => {
// //     await loadFavoriteArtists(true);
// //   };

// //   const formatNumber = (num) => {
// //     if (!num) return '0';
// //     if (num >= 1000000) {
// //       return `${(num / 1000000).toFixed(1)}M`;
// //     } else if (num >= 1000) {
// //       return `${(num / 1000).toFixed(1)}K`;
// //     }
// //     return `${num}`;
// //   };

// //   if (loading) {
// //     return (
// //       <SafeAreaView style={styles.container}>
// //         <StatusBar barStyle="light-content" backgroundColor="#000" />
        
// //         <View style={styles.header}>
// //           <TouchableOpacity onPress={() => navigation.goBack()}>
// //             <Icon name="chevron-back" size={24} color="#fff" />
// //           </TouchableOpacity>
// //           <Text style={styles.headerTitle}>Artists Following</Text>
// //           <View style={styles.headerRight} />
// //         </View>

// //         <View style={styles.loadingContainer}>
// //           <ActivityIndicator size="large" color="#FF0000" />
// //           <Text style={styles.loadingText}>Loading artists...</Text>
// //         </View>
// //       </SafeAreaView>
// //     );
// //   }

// //   return (
// //     <SafeAreaView style={styles.container}>
// //       <StatusBar barStyle="light-content" backgroundColor="#000" />
      
// //       <View style={styles.header}>
// //         <TouchableOpacity onPress={() => navigation.goBack()}>
// //           <Icon name="chevron-back" size={24} color="#fff" />
// //         </TouchableOpacity>
// //         <Text style={styles.headerTitle}>Artists Following</Text>
// //         <View style={styles.headerRight} />
// //       </View>

// //       <ScrollView 
// //         style={styles.scrollView}
// //         refreshControl={
// //           <RefreshControl
// //             refreshing={refreshing}
// //             onRefresh={onRefresh}
// //             colors={['#FF0000']}
// //             tintColor="#FF0000"
// //           />
// //         }
// //       >
// //         <Text style={styles.subtitle}>
// //           {artists.length} {artists.length === 1 ? 'artist' : 'artists'} following
// //         </Text>

// //         {artists.length === 0 ? (
// //           <View style={styles.emptyState}>
// //             <Icon name="people-outline" size={80} color="#666" />
// //             <Text style={styles.emptyStateTitle}>No Artists Followed</Text>
// //             <Text style={styles.emptyStateText}>
// //               Artists you follow will appear here
// //             </Text>
// //             <TouchableOpacity 
// //               style={styles.exploreButton}
// //               onPress={() => navigation.navigate('UserBottomTab')}
// //             >
// //               <Text style={styles.exploreButtonText}>Explore Artists</Text>
// //             </TouchableOpacity>
// //           </View>
// //         ) : (
// //           <View style={styles.artistsGrid}>
// //             {artists.map((artist) => (
// //               <TouchableOpacity 
// //                 key={artist.id} 
// //                 style={styles.artistItem}
// //                 onPress={() => {
// //                   // Navigate to artist profile if needed
// //                   console.log('🎵 Artist pressed:', artist.name);
// //                 }}
// //               >
// //                 <View style={styles.artistImageContainer}>
// //                   <Image 
// //                     source={{ uri: artist.image }} 
// //                     style={styles.artistImage}
// //                     resizeMode="cover"
// //                     onError={(error) => {
// //                       console.log('❌ Artist image load error:', error.nativeEvent.error);
// //                     }}
// //                   />
                  
// //                   {/* Fallback for missing image */}
// //                   {!artist.image && (
// //                     <View style={styles.artistImageFallback}>
// //                       <Text style={styles.artistImageFallbackText}>
// //                         {artist.name ? artist.name.charAt(0).toUpperCase() : 'A'}
// //                       </Text>
// //                     </View>
// //                   )}
                  
// //                   {/* Verified Badge */}
// //                   {artist.isVerified && (
// //                     <View style={styles.verifiedBadge}>
// //                       <Icon name="checkmark-circle" size={16} color="#1DB954" />
// //                     </View>
// //                   )}
// //                 </View>
                
// //                 <Text style={styles.artistName} numberOfLines={1}>
// //                   {artist.name}
// //                 </Text>
                
// //                 <Text style={styles.artistType}>Artist</Text>
                
// //                 {artist.followers > 0 && (
// //                   <Text style={styles.artistFollowers}>
// //                     {formatNumber(artist.followers)} followers
// //                   </Text>
// //                 )}
// //               </TouchableOpacity>
// //             ))}
            
// //             {/* Add More Button */}
// //             {/* <TouchableOpacity 
// //               style={styles.addMoreItem}
// //               onPress={() => navigation.navigate('Home')}
// //             >
// //               <View style={[styles.artistImageContainer, styles.addMoreImage]}>
// //                 <View style={styles.addMoreIcon}>
// //                   <Icon name="add" size={24} color="#fff" />
// //                 </View>
// //               </View>
// //               <Text style={styles.addMoreText}>Add More</Text>
// //             </TouchableOpacity> */}
// //           </View>
// //         )}
// //       </ScrollView>
// //     </SafeAreaView>
// //   );
// // };

// // // Styles remain the same as previous version...
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
// //     paddingVertical: 15,
// //     borderBottomWidth: 1,
// //     borderBottomColor: '#282828',
// //   },
// //   headerTitle: {
// //     fontSize: 24,
// //     fontWeight: 'bold',
// //     color: '#fff',
// //   },
// //   headerRight: {
// //     width: 24,
// //   },
// //   scrollView: {
// //     flex: 1,
// //     paddingHorizontal: 20,
// //   },
// //   subtitle: {
// //     fontSize: 16,
// //     color: '#b3b3b3',
// //     marginTop: 20,
// //     marginBottom: 20,
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
// //   emptyState: {
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     paddingVertical: 60,
// //   },
// //   emptyStateTitle: {
// //     fontSize: 20,
// //     fontWeight: 'bold',
// //     color: '#fff',
// //     marginTop: 20,
// //     marginBottom: 8,
// //   },
// //   emptyStateText: {
// //     fontSize: 16,
// //     color: '#b3b3b3',
// //     textAlign: 'center',
// //     marginBottom: 24,
// //     lineHeight: 22,
// //   },
// //   exploreButton: {
// //     backgroundColor: '#FF0000',
// //     paddingHorizontal: 24,
// //     paddingVertical: 12,
// //     borderRadius: 25,
// //   },
// //   exploreButtonText: {
// //     color: '#fff',
// //     fontSize: 16,
// //     fontWeight: 'bold',
// //   },
// //   artistsGrid: {
// //     flexDirection: 'row',
// //     flexWrap: 'wrap',
// //     justifyContent: 'space-between',
// //   },
// //   artistItem: {
// //     alignItems: 'center',
// //     width: '30%',
// //     marginBottom: 25,
// //   },
// //   artistImageContainer: {
// //     width: 90,
// //     height: 90,
// //     borderRadius: 45,
// //     marginBottom: 12,
// //     position: 'relative',
// //     shadowColor: '#000',
// //     shadowOffset: {
// //       width: 0,
// //       height: 4,
// //     },
// //     shadowOpacity: 0.3,
// //     shadowRadius: 8,
// //     elevation: 8,
// //     backgroundColor: '#333',
// //   },
// //   artistImage: {
// //     width: '100%',
// //     height: '100%',
// //     borderRadius: 45,
// //   },
// //   artistImageFallback: {
// //     ...StyleSheet.absoluteFillObject,
// //     backgroundColor: '#FF0000',
// //     borderRadius: 45,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   artistImageFallbackText: {
// //     color: '#fff',
// //     fontSize: 24,
// //     fontWeight: 'bold',
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
// //     marginBottom: 4,
// //     width: '100%',
// //   },
// //   artistType: {
// //     fontSize: 12,
// //     color: '#b3b3b3',
// //     textAlign: 'center',
// //     marginBottom: 2,
// //   },
// //   artistFollowers: {
// //     fontSize: 10,
// //     color: '#666',
// //     textAlign: 'center',
// //   },
// //   addMoreItem: {
// //     alignItems: 'center',
// //     width: '30%',
// //     marginBottom: 25,
// //   },
// //   addMoreImage: {
// //     backgroundColor: '#333',
// //     borderWidth: 2,
// //     borderColor: '#444',
// //     borderStyle: 'dashed',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   addMoreIcon: {
// //     width: 32,
// //     height: 32,
// //     borderRadius: 16,
// //     backgroundColor: 'rgba(255,255,255,0.2)',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   addMoreText: {
// //     fontSize: 14,
// //     fontWeight: '600',
// //     color: '#b3b3b3',
// //     textAlign: 'center',
// //     marginTop: 8,
// //   },
// // });

// // export default ArtistsScreen;

// // screens/ArtistsScreen.js - CLIENT-SIDE FILTERING VERSION
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
//   ActivityIndicator,
//   Alert,
//   RefreshControl
// } from 'react-native';
// import { useFocusEffect } from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { getFavoriteArtists } from '../Services/mobile-api';
// import { mobile_siteConfig } from '../Services/mobile-siteConfig';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const ArtistsScreen = ({ navigation }) => {
//   const [artists, setArtists] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [refreshing, setRefreshing] = useState(false);

//   // Helper function to get complete image URL
//   const getImageUrl = (imagePath) => {
//     if (!imagePath) return null;
    
//     if (imagePath.startsWith('http')) {
//       return imagePath;
//     } else if (imagePath.startsWith('/')) {
//       return `${mobile_siteConfig.IMAGE_BASE_URL}${imagePath}`;
//     } else {
//       return `${mobile_siteConfig.IMAGE_BASE_URL}/${imagePath}`;
//     }
//   };

//   // ✅ GET LOCAL FOLLOWED ARTISTS FROM STORAGE
//   const getLocalFollowedArtists = async () => {
//     try {
//       const storedStatus = await AsyncStorage.getItem('artist_follow_status');
//       if (storedStatus) {
//         const followStatusMap = JSON.parse(storedStatus);
//         // Return array of artist IDs that are followed (true)
//         const followedArtistIds = Object.keys(followStatusMap).filter(artistId => followStatusMap[artistId] === true);
//         console.log('🎵 Local followed artist IDs:', followedArtistIds);
//         return followedArtistIds;
//       }
//       return [];
//     } catch (error) {
//       console.log('❌ Error getting local followed artists:', error);
//       return [];
//     }
//   };

//   // Load favorite artists from API WITH CLIENT-SIDE FILTERING
//   const loadFavoriteArtists = async (isRefresh = false) => {
//     try {
//       if (isRefresh) {
//         setRefreshing(true);
//       } else {
//         setLoading(true);
//       }

//       console.log('🎵 Loading favorite artists...');
      
//       const response = await getFavoriteArtists();
      
//       console.log('🎵 Favorite artists API FULL response:', response);
//       console.log('🎵 Response data:', response.data);
      
//       if (response && response.success) {
//         let artistsData = [];
        
//         if (response.data?.favoriteArtists && Array.isArray(response.data.favoriteArtists)) {
//           artistsData = response.data.favoriteArtists;
//           console.log('🎵 Using favoriteArtists array, count:', artistsData.length);
//         } 
//         else if (response.data?.artists && Array.isArray(response.data.artists)) {
//           artistsData = response.data.artists;
//           console.log('🎵 Using artists array, count:', artistsData.length);
//         }
//         else {
//           console.log('❌ No artists array found in response');
//           artistsData = [];
//         }
        
//         // ✅ CRITICAL FIX: CLIENT-SIDE FILTERING
//         // Get locally followed artist IDs
//         const localFollowedArtistIds = await getLocalFollowedArtists();
//         console.log('🎵 Local followed artist IDs:', localFollowedArtistIds);
        
//         // Filter artists - only show those that are followed locally
//         const filteredArtists = artistsData.filter(artist => 
//           artist && artist.id && localFollowedArtistIds.includes(artist.id.toString())
//         );
        
//         console.log('🎵 After filtering - artists to display:', filteredArtists.length);
//         console.log('🎵 Filtered artists:', filteredArtists.map(a => ({id: a.id, name: a.name})));
        
//         // Transform artists data
//         const transformedArtists = filteredArtists.map((artist) => ({
//           id: artist.id?.toString(),
//           name: artist.name || 'Unknown Artist',
//           image: getImageUrl(artist.profilePic || artist.image),
//           isVerified: artist.isVerified || false,
//           followers: artist.followers || 0,
//           type: 'Artist'
//         }));
        
//         console.log('🎵 Final transformed artists:', transformedArtists.length);
//         setArtists(transformedArtists);
//       } else {
//         console.log('❌ API response not successful');
//         setArtists([]);
//       }
//     } catch (error) {
//       console.error('❌ Load favorite artists error:', error);
//       Alert.alert('Error', 'Failed to load followed artists');
//       setArtists([]);
//     } finally {
//       setLoading(false);
//       setRefreshing(false);
//     }
//   };

//   // ✅ FIX: Load data when screen comes into focus
//   useFocusEffect(
//     React.useCallback(() => {
//       console.log('🔄 ArtistsScreen focused - refreshing data');
//       loadFavoriteArtists();
//     }, [])
//   );

//   // Initial load
//   useEffect(() => {
//     loadFavoriteArtists();
//   }, []);

//   const onRefresh = async () => {
//     await loadFavoriteArtists(true);
//   };

//   const formatNumber = (num) => {
//     if (!num) return '0';
//     if (num >= 1000000) {
//       return `${(num / 1000000).toFixed(1)}M`;
//     } else if (num >= 1000) {
//       return `${(num / 1000).toFixed(1)}K`;
//     }
//     return `${num}`;
//   };

//   // ✅ Handle artist press - navigate to artist profile
//   const handleArtistPress = (artist) => {
//     console.log('🎵 Artist pressed:', artist.name, artist.id);
//     navigation.navigate('ArtistProfileScreen', { 
//       artistId: artist.id,
//       artistName: artist.name 
//     });
//   };

//   if (loading) {
//     return (
//       <SafeAreaView style={styles.container}>
//         <StatusBar barStyle="light-content" backgroundColor="#000" />
        
//         <View style={styles.header}>
//           <TouchableOpacity onPress={() => navigation.goBack()}>
//             <Icon name="chevron-back" size={24} color="#fff" />
//           </TouchableOpacity>
//           <Text style={styles.headerTitle}>Artists Following</Text>
//           <View style={styles.headerRight} />
//         </View>

//         <View style={styles.loadingContainer}>
//           <ActivityIndicator size="large" color="#FF0000" />
//           <Text style={styles.loadingText}>Loading artists...</Text>
//         </View>
//       </SafeAreaView>
//     );
//   }

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="light-content" backgroundColor="#000" />
      
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Icon name="chevron-back" size={24} color="#fff" />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Artists Following</Text>
//         <View style={styles.headerRight} />
//       </View>

//       <ScrollView 
//         style={styles.scrollView}
//         refreshControl={
//           <RefreshControl
//             refreshing={refreshing}
//             onRefresh={onRefresh}
//             colors={['#FF0000']}
//             tintColor="#FF0000"
//           />
//         }
//       >
//         <Text style={styles.subtitle}>
//           {artists.length} {artists.length === 1 ? 'artist' : 'artists'} following
//         </Text>

//         {artists.length === 0 ? (
//           <View style={styles.emptyState}>
//             <Icon name="people-outline" size={80} color="#666" />
//             <Text style={styles.emptyStateTitle}>No Artists Followed</Text>
//             <Text style={styles.emptyStateText}>
//               Artists you follow will appear here
//             </Text>
//             <TouchableOpacity 
//               style={styles.exploreButton}
//               onPress={() => navigation.navigate('Home')}
//             >
//               <Text style={styles.exploreButtonText}>Explore Artists</Text>
//             </TouchableOpacity>
//           </View>
//         ) : (
//           <View style={styles.artistsGrid}>
//             {artists.map((artist) => (
//               <TouchableOpacity 
//                 key={artist.id} 
//                 style={styles.artistItem}
//                 onPress={() => handleArtistPress(artist)}
//               >
//                 <View style={styles.artistImageContainer}>
//                   <Image 
//                     source={{ uri: artist.image }} 
//                     style={styles.artistImage}
//                     resizeMode="cover"
//                     onError={(error) => {
//                       console.log('❌ Artist image load error:', artist.name, error.nativeEvent.error);
//                     }}
//                   />
                  
//                   {/* Fallback for missing image */}
//                   {!artist.image && (
//                     <View style={styles.artistImageFallback}>
//                       <Text style={styles.artistImageFallbackText}>
//                         {artist.name ? artist.name.charAt(0).toUpperCase() : 'A'}
//                       </Text>
//                     </View>
//                   )}
                  
//                   {/* Verified Badge */}
//                   {artist.isVerified && (
//                     <View style={styles.verifiedBadge}>
//                       <Icon name="checkmark-circle" size={16} color="#1DB954" />
//                     </View>
//                   )}
//                 </View>
                
//                 <Text style={styles.artistName} numberOfLines={1}>
//                   {artist.name}
//                 </Text>
                
//                 <Text style={styles.artistType}>Artist</Text>
                
//                 {artist.followers > 0 && (
//                   <Text style={styles.artistFollowers}>
//                     {formatNumber(artist.followers)} followers
//                   </Text>
//                 )}
//               </TouchableOpacity>
//             ))}
//           </View>
//         )}
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// // Styles remain the same as previous version...
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
//     paddingVertical: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#282828',
//   },
//   headerTitle: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#fff',
//   },
//   headerRight: {
//     width: 24,
//   },
//   scrollView: {
//     flex: 1,
//     paddingHorizontal: 20,
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#b3b3b3',
//     marginTop: 20,
//     marginBottom: 20,
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
//   emptyState: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 60,
//   },
//   emptyStateTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#fff',
//     marginTop: 20,
//     marginBottom: 8,
//   },
//   emptyStateText: {
//     fontSize: 16,
//     color: '#b3b3b3',
//     textAlign: 'center',
//     marginBottom: 24,
//     lineHeight: 22,
//   },
//   exploreButton: {
//     backgroundColor: '#FF0000',
//     paddingHorizontal: 24,
//     paddingVertical: 12,
//     borderRadius: 25,
//   },
//   exploreButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   artistsGrid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//   },
//   artistItem: {
//     alignItems: 'center',
//     width: '30%',
//     marginBottom: 25,
//   },
//   artistImageContainer: {
//     width: 90,
//     height: 90,
//     borderRadius: 45,
//     marginBottom: 12,
//     position: 'relative',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 4,
//     },
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     elevation: 8,
//     backgroundColor: '#333',
//   },
//   artistImage: {
//     width: '100%',
//     height: '100%',
//     borderRadius: 45,
//   },
//   artistImageFallback: {
//     ...StyleSheet.absoluteFillObject,
//     backgroundColor: '#FF0000',
//     borderRadius: 45,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   artistImageFallbackText: {
//     color: '#fff',
//     fontSize: 24,
//     fontWeight: 'bold',
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
//     marginBottom: 4,
//     width: '100%',
//   },
//   artistType: {
//     fontSize: 12,
//     color: '#b3b3b3',
//     textAlign: 'center',
//     marginBottom: 2,
//   },
//   artistFollowers: {
//     fontSize: 10,
//     color: '#666',
//     textAlign: 'center',
//   },
// });

// export default ArtistsScreen;

// screens/ArtistsScreen.js - RESPONSIVE VERSION
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
  ActivityIndicator,
  Alert,
  RefreshControl,
  Dimensions
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { getFavoriteArtists } from '../Services/mobile-api';
import { mobile_siteConfig } from '../Services/mobile-siteConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { wp, hp } from "../assets/Global.Css";

const { width, height } = Dimensions.get('window');

const ArtistsScreen = ({ navigation }) => {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  // Helper function to get complete image URL
  const getImageUrl = (imagePath) => {
    if (!imagePath) return null;
    
    if (imagePath.startsWith('http')) {
      return imagePath;
    } else if (imagePath.startsWith('/')) {
      return `${mobile_siteConfig.IMAGE_BASE_URL}${imagePath}`;
    } else {
      return `${mobile_siteConfig.IMAGE_BASE_URL}/${imagePath}`;
    }
  };

  // ✅ GET LOCAL FOLLOWED ARTISTS FROM STORAGE
  const getLocalFollowedArtists = async () => {
    try {
      const storedStatus = await AsyncStorage.getItem('artist_follow_status');
      if (storedStatus) {
        const followStatusMap = JSON.parse(storedStatus);
        // Return array of artist IDs that are followed (true)
        const followedArtistIds = Object.keys(followStatusMap).filter(artistId => followStatusMap[artistId] === true);
        console.log('🎵 Local followed artist IDs:', followedArtistIds);
        return followedArtistIds;
      }
      return [];
    } catch (error) {
      console.log('❌ Error getting local followed artists:', error);
      return [];
    }
  };

  // Load favorite artists from API WITH CLIENT-SIDE FILTERING
  const loadFavoriteArtists = async (isRefresh = false) => {
    try {
      if (isRefresh) {
        setRefreshing(true);
      } else {
        setLoading(true);
      }

      console.log('🎵 Loading favorite artists...');
      
      const response = await getFavoriteArtists();
      
      console.log('🎵 Favorite artists API FULL response:', response);
      console.log('🎵 Response data:', response.data);
      
      if (response && response.success) {
        let artistsData = [];
        
        if (response.data?.favoriteArtists && Array.isArray(response.data.favoriteArtists)) {
          artistsData = response.data.favoriteArtists;
          console.log('🎵 Using favoriteArtists array, count:', artistsData.length);
        } 
        else if (response.data?.artists && Array.isArray(response.data.artists)) {
          artistsData = response.data.artists;
          console.log('🎵 Using artists array, count:', artistsData.length);
        }
        else {
          console.log('❌ No artists array found in response');
          artistsData = [];
        }
        
        // ✅ CRITICAL FIX: CLIENT-SIDE FILTERING
        // Get locally followed artist IDs
        const localFollowedArtistIds = await getLocalFollowedArtists();
        console.log('🎵 Local followed artist IDs:', localFollowedArtistIds);
        
        // Filter artists - only show those that are followed locally
        const filteredArtists = artistsData.filter(artist => 
          artist && artist.id && localFollowedArtistIds.includes(artist.id.toString())
        );
        
        console.log('🎵 After filtering - artists to display:', filteredArtists.length);
        console.log('🎵 Filtered artists:', filteredArtists.map(a => ({id: a.id, name: a.name})));
        
        // Transform artists data
        const transformedArtists = filteredArtists.map((artist) => ({
          id: artist.id?.toString(),
          name: artist.name || 'Unknown Artist',
          image: getImageUrl(artist.profilePic || artist.image),
          isVerified: artist.isVerified || false,
          followers: artist.followers || 0,
          type: 'Artist'
        }));
        
        console.log('🎵 Final transformed artists:', transformedArtists.length);
        setArtists(transformedArtists);
      } else {
        console.log('❌ API response not successful');
        setArtists([]);
      }
    } catch (error) {
      console.error('❌ Load favorite artists error:', error);
      Alert.alert('Error', 'Failed to load followed artists');
      setArtists([]);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  // ✅ FIX: Load data when screen comes into focus
  useFocusEffect(
    React.useCallback(() => {
      console.log('🔄 ArtistsScreen focused - refreshing data');
      loadFavoriteArtists();
    }, [])
  );

  // Initial load
  useEffect(() => {
    loadFavoriteArtists();
  }, []);

  const onRefresh = async () => {
    await loadFavoriteArtists(true);
  };

  const formatNumber = (num) => {
    if (!num) return '0';
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    } else if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`;
    }
    return `${num}`;
  };

  // ✅ Handle artist press - navigate to artist profile
  const handleArtistPress = (artist) => {
    console.log('🎵 Artist pressed:', artist.name, artist.id);
    navigation.navigate('ArtistProfileScreen', { 
      artistId: artist.id,
      artistName: artist.name 
    });
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#000" />
        
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Icon name="chevron-back" size={wp(6)} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Artists Following</Text>
          <View style={styles.headerRight} />
        </View>

        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#FF0000" />
          <Text style={styles.loadingText}>Loading artists...</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="chevron-back" size={wp(6)} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Artists Following</Text>
        <View style={styles.headerRight} />
      </View>

      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={['#FF0000']}
            tintColor="#FF0000"
          />
        }
      >
        <Text style={styles.subtitle}>
          {artists.length} {artists.length === 1 ? 'artist' : 'artists'} following
        </Text>

        {artists.length === 0 ? (
          <View style={styles.emptyState}>
            <Icon name="people-outline" size={wp(20)} color="#666" />
            <Text style={styles.emptyStateTitle}>No Artists Followed</Text>
            <Text style={styles.emptyStateText}>
              Artists you follow will appear here
            </Text>
            <TouchableOpacity 
              style={styles.exploreButton}
              onPress={() => navigation.navigate('Home')}
            >
              <Text style={styles.exploreButtonText}>Explore Artists</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.artistsGrid}>
            {artists.map((artist) => (
              <TouchableOpacity 
                key={artist.id} 
                style={styles.artistItem}
                onPress={() => handleArtistPress(artist)}
              >
                <View style={styles.artistImageContainer}>
                  <Image 
                    source={{ uri: artist.image }} 
                    style={styles.artistImage}
                    resizeMode="cover"
                    onError={(error) => {
                      console.log('❌ Artist image load error:', artist.name, error.nativeEvent.error);
                    }}
                  />
                  
                  {/* Fallback for missing image */}
                  {!artist.image && (
                    <View style={styles.artistImageFallback}>
                      <Text style={styles.artistImageFallbackText}>
                        {artist.name ? artist.name.charAt(0).toUpperCase() : 'A'}
                      </Text>
                    </View>
                  )}
                  
                  {/* Verified Badge */}
                  {artist.isVerified && (
                    <View style={styles.verifiedBadge}>
                      <Icon name="checkmark-circle" size={wp(3.5)} color="#1DB954" />
                    </View>
                  )}
                </View>
                
                <Text style={styles.artistName} numberOfLines={1}>
                  {artist.name}
                </Text>
                
                <Text style={styles.artistType}>Artist</Text>
                
                {artist.followers > 0 && (
                  <Text style={styles.artistFollowers}>
                    {formatNumber(artist.followers)} followers
                  </Text>
                )}
              </TouchableOpacity>
            ))}
          </View>
        )}
        
        {/* Bottom padding for better scrolling */}
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
    paddingHorizontal: wp(5),
    paddingVertical: hp(2),
    borderBottomWidth: 1,
    borderBottomColor: '#282828',
  },
  backButton: {
    padding: wp(1),
  },
  headerTitle: {
    fontSize: wp(6),
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  headerRight: {
    width: wp(6),
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: wp(5),
  },
  subtitle: {
    fontSize: wp(4),
    color: '#b3b3b3',
    marginTop: hp(3),
    marginBottom: hp(3),
    textAlign: 'center',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: hp(5),
  },
  loadingText: {
    color: '#fff',
    marginTop: hp(2),
    fontSize: wp(4),
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: hp(15),
    paddingHorizontal: wp(10),
  },
  emptyStateTitle: {
    fontSize: wp(5.5),
    fontWeight: 'bold',
    color: '#fff',
    marginTop: hp(3),
    marginBottom: hp(1),
    textAlign: 'center',
  },
  emptyStateText: {
    fontSize: wp(4),
    color: '#b3b3b3',
    textAlign: 'center',
    marginBottom: hp(4),
    lineHeight: hp(3),
  },
  exploreButton: {
    backgroundColor: '#FF0000',
    paddingHorizontal: wp(8),
    paddingVertical: hp(1.5),
    borderRadius: wp(8),
    shadowColor: '#FF0000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  exploreButtonText: {
    color: '#fff',
    fontSize: wp(4),
    fontWeight: 'bold',
  },
  artistsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingBottom: hp(3),
  },
  artistItem: {
    alignItems: 'center',
    width: (wp(100) - wp(15)) / 3, // 3 columns with spacing
    marginBottom: hp(3),
  },
  artistImageContainer: {
    width: wp(25),
    height: wp(25),
    borderRadius: wp(12.5),
    marginBottom: hp(1.5),
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
    backgroundColor: '#333',
  },
  artistImage: {
    width: '100%',
    height: '100%',
    borderRadius: wp(12.5),
  },
  artistImageFallback: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#FF0000',
    borderRadius: wp(12.5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  artistImageFallbackText: {
    color: '#fff',
    fontSize: wp(7),
    fontWeight: 'bold',
  },
  verifiedBadge: {
    position: 'absolute',
    bottom: wp(1),
    right: wp(1),
    backgroundColor: '#000',
    borderRadius: wp(2.5),
    padding: wp(0.5),
  },
  artistName: {
    fontSize: wp(3.5),
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: hp(0.5),
    width: '100%',
  },
  artistType: {
    fontSize: wp(3),
    color: '#b3b3b3',
    textAlign: 'center',
    marginBottom: hp(0.3),
  },
  artistFollowers: {
    fontSize: wp(2.5),
    color: '#666',
    textAlign: 'center',
  },
  bottomPadding: {
    height: hp(3),
  },
});

export default ArtistsScreen;