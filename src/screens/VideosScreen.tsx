// // // // // // // // // screens/VideosScreen.js - FIXED VERSION (No Placeholder Image)
// // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // import {
// // // // // // // //   View,
// // // // // // // //   Text,
// // // // // // // //   StyleSheet,
// // // // // // // //   SafeAreaView,
// // // // // // // //   StatusBar,
// // // // // // // //   FlatList,
// // // // // // // //   TouchableOpacity,
// // // // // // // //   Image,
// // // // // // // //   Dimensions,
// // // // // // // //   ActivityIndicator,
// // // // // // // //   RefreshControl
// // // // // // // // } from 'react-native';
// // // // // // // // import Icon from 'react-native-vector-icons/MaterialIcons';
// // // // // // // // import Feather from 'react-native-vector-icons/Feather';
// // // // // // // // import Ionicons from 'react-native-vector-icons/Ionicons';

// // // // // // // // const { width } = Dimensions.get('window');

// // // // // // // // const VideosScreen = ({ navigation }) => {
// // // // // // // //   const [videos, setVideos] = useState([]);
// // // // // // // //   const [loading, setLoading] = useState(true);
// // // // // // // //   const [refreshing, setRefreshing] = useState(false);

// // // // // // // //   // ✅ REAL VIDEO DATA - Working Video URLs
// // // // // // // //   const videoData = [
// // // // // // // //     {
// // // // // // // //       id: '1',
// // // // // // // //       title: 'Big Buck Bunny - Animation',
// // // // // // // //       channel: 'Blender Foundation',
// // // // // // // //       views: '25M views',
// // // // // // // //       duration: '10:34',
// // // // // // // //       uploadTime: '3 years ago',
// // // // // // // //       thumbnail: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
// // // // // // // //       avatar: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=100&h=100&fit=crop',
// // // // // // // //       videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
// // // // // // // //       likes: '125K',
// // // // // // // //       description: 'Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself.'
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       id: '2',
// // // // // // // //       title: 'Elephants Dream - Short Film',
// // // // // // // //       channel: 'Orange Open Movie',
// // // // // // // //       views: '18M views',
// // // // // // // //       duration: '14:58',
// // // // // // // //       uploadTime: '4 years ago',
// // // // // // // //       thumbnail: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg',
// // // // // // // //       avatar: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=100&h=100&fit=crop',
// // // // // // // //       videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
// // // // // // // //       likes: '98K',
// // // // // // // //       description: 'The story of two strange characters exploring a capricious and seemingly infinite machine.'
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       id: '3',
// // // // // // // //       title: 'For Bigger Blazes',
// // // // // // // //       channel: 'Google Test Videos',
// // // // // // // //       views: '12M views',
// // // // // // // //       duration: '0:15',
// // // // // // // //       uploadTime: '2 years ago',
// // // // // // // //       thumbnail: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
// // // // // // // //       avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop',
// // // // // // // //       videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
// // // // // // // //       likes: '45K',
// // // // // // // //       description: 'A short test video for demonstration purposes.'
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       id: '4',
// // // // // // // //       title: 'For Bigger Escape',
// // // // // // // //       channel: 'Google Test Videos',
// // // // // // // //       views: '8M views',
// // // // // // // //       duration: '0:15',
// // // // // // // //       uploadTime: '1 year ago',
// // // // // // // //       thumbnail: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg',
// // // // // // // //       avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
// // // // // // // //       videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
// // // // // // // //       likes: '32K',
// // // // // // // //       description: 'Another test video showing various scenes.'
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       id: '5',
// // // // // // // //       title: 'For Bigger Fun',
// // // // // // // //       channel: 'Google Test Videos',
// // // // // // // //       views: '15M views',
// // // // // // // //       duration: '0:15',
// // // // // // // //       uploadTime: '2 years ago',
// // // // // // // //       thumbnail: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg',
// // // // // // // //       avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop',
// // // // // // // //       videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
// // // // // // // //       likes: '67K',
// // // // // // // //       description: 'Fun and entertaining test video content.'
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       id: '6',
// // // // // // // //       title: 'For Bigger Joyrides',
// // // // // // // //       channel: 'Google Test Videos',
// // // // // // // //       views: '20M views',
// // // // // // // //       duration: '0:15',
// // // // // // // //       uploadTime: '3 years ago',
// // // // // // // //       thumbnail: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg',
// // // // // // // //       avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
// // // // // // // //       videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
// // // // // // // //       likes: '89K',
// // // // // // // //       description: 'Joyride adventure test video demonstration.'
// // // // // // // //     }
// // // // // // // //   ];

// // // // // // // //   useEffect(() => {
// // // // // // // //     loadVideos();
// // // // // // // //   }, []);

// // // // // // // //   const loadVideos = async () => {
// // // // // // // //     setLoading(true);
    
// // // // // // // //     // Simulate API call
// // // // // // // //     setTimeout(() => {
// // // // // // // //       setVideos(videoData);
// // // // // // // //       setLoading(false);
// // // // // // // //     }, 1000);
// // // // // // // //   };

// // // // // // // //   const onRefresh = async () => {
// // // // // // // //     setRefreshing(true);
// // // // // // // //     await loadVideos();
// // // // // // // //     setRefreshing(false);
// // // // // // // //   };

// // // // // // // //   const handleVideoPress = (video) => {
// // // // // // // //     console.log('🎬 Playing video:', video.title);
// // // // // // // //     console.log('🎬 Video URL:', video.videoUrl);
    
// // // // // // // //     navigation.navigate('VideoPlayerScreen', {
// // // // // // // //       videoData: video
// // // // // // // //     });
// // // // // // // //   };

// // // // // // // //   const renderVideoItem = ({ item }) => (
// // // // // // // //     <TouchableOpacity 
// // // // // // // //       style={styles.videoItem}
// // // // // // // //       onPress={() => handleVideoPress(item)}
// // // // // // // //     >
// // // // // // // //       {/* Thumbnail with Duration */}
// // // // // // // //       <View style={styles.thumbnailContainer}>
// // // // // // // //         <Image 
// // // // // // // //           source={{ uri: item.thumbnail }}
// // // // // // // //           style={styles.thumbnail}
// // // // // // // //           // ✅ REMOVED: defaultSource={require('../assets/placeholder-image.png')}
// // // // // // // //           onError={(error) => {
// // // // // // // //             console.log('❌ Image load error:', error.nativeEvent.error);
// // // // // // // //             // Agar image load nahi hoti toh kuch nahi karenge
// // // // // // // //           }}
// // // // // // // //         />
// // // // // // // //         <View style={styles.durationBadge}>
// // // // // // // //           <Text style={styles.durationText}>{item.duration}</Text>
// // // // // // // //         </View>
        
// // // // // // // //         {/* Play Button Overlay */}
// // // // // // // //         <View style={styles.playButtonOverlay}>
// // // // // // // //           <View style={styles.playIconCircle}>
// // // // // // // //             <Icon name="play-arrow" size={30} color="#fff" />
// // // // // // // //           </View>
// // // // // // // //         </View>
// // // // // // // //       </View>

// // // // // // // //       {/* Video Info */}
// // // // // // // //       <View style={styles.videoInfo}>
// // // // // // // //         <Image 
// // // // // // // //           source={{ uri: item.avatar }}
// // // // // // // //           style={styles.channelAvatar}
// // // // // // // //           onError={(error) => {
// // // // // // // //             console.log('❌ Avatar load error:', error.nativeEvent.error);
// // // // // // // //             // Agar avatar load nahi hoti toh kuch nahi karenge
// // // // // // // //           }}
// // // // // // // //         />
// // // // // // // //         <View style={styles.videoDetails}>
// // // // // // // //           <Text style={styles.videoTitle} numberOfLines={2}>
// // // // // // // //             {item.title}
// // // // // // // //           </Text>
// // // // // // // //           <Text style={styles.channelName}>
// // // // // // // //             {item.channel}
// // // // // // // //           </Text>
// // // // // // // //           <View style={styles.videoStats}>
// // // // // // // //             <Text style={styles.statText}>{item.views}</Text>
// // // // // // // //             <Text style={styles.dot}>•</Text>
// // // // // // // //             <Text style={styles.statText}>{item.uploadTime}</Text>
// // // // // // // //           </View>
// // // // // // // //         </View>
// // // // // // // //         <TouchableOpacity style={styles.moreButton}>
// // // // // // // //           <Ionicons name="ellipsis-vertical" size={16} color="#aaa" />
// // // // // // // //         </TouchableOpacity>
// // // // // // // //       </View>
// // // // // // // //     </TouchableOpacity>
// // // // // // // //   );

// // // // // // // //   return (
// // // // // // // //     <SafeAreaView style={styles.container}>
// // // // // // // //       <StatusBar barStyle="light-content" backgroundColor="#0f0f0f" />
      
// // // // // // // //       {/* Header */}
// // // // // // // //       <View style={styles.header}>
// // // // // // // //         <View style={styles.headerLeft}>
// // // // // // // //           <Text style={styles.headerTitle}>Videos</Text>
// // // // // // // //         </View>
// // // // // // // //         <View style={styles.headerRight}>
// // // // // // // //           <TouchableOpacity style={styles.iconButton}>
// // // // // // // //             <Feather name="cast" size={20} color="#fff" />
// // // // // // // //           </TouchableOpacity>
// // // // // // // //           <TouchableOpacity style={styles.iconButton}>
// // // // // // // //             <Ionicons name="notifications-outline" size={20} color="#fff" />
// // // // // // // //           </TouchableOpacity>
// // // // // // // //           <TouchableOpacity style={styles.iconButton}>
// // // // // // // //             <Feather name="search" size={20} color="#fff" />
// // // // // // // //           </TouchableOpacity>
// // // // // // // //         </View>
// // // // // // // //       </View>

// // // // // // // //       {loading ? (
// // // // // // // //         <View style={styles.loadingContainer}>
// // // // // // // //           <ActivityIndicator size="large" color="#FF0000" />
// // // // // // // //           <Text style={styles.loadingText}>Loading videos...</Text>
// // // // // // // //         </View>
// // // // // // // //       ) : (
// // // // // // // //         <FlatList
// // // // // // // //           data={videos}
// // // // // // // //           renderItem={renderVideoItem}
// // // // // // // //           keyExtractor={item => item.id}
// // // // // // // //           showsVerticalScrollIndicator={false}
// // // // // // // //           contentContainerStyle={styles.videosList}
// // // // // // // //           refreshControl={
// // // // // // // //             <RefreshControl
// // // // // // // //               refreshing={refreshing}
// // // // // // // //               onRefresh={onRefresh}
// // // // // // // //               colors={['#FF0000']}
// // // // // // // //               tintColor="#FF0000"
// // // // // // // //             />
// // // // // // // //           }
// // // // // // // //         />
// // // // // // // //       )}
// // // // // // // //     </SafeAreaView>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // const styles = StyleSheet.create({
// // // // // // // //   container: {
// // // // // // // //     flex: 1,
// // // // // // // //     backgroundColor: '#0f0f0f',
// // // // // // // //   },
// // // // // // // //   header: {
// // // // // // // //     flexDirection: 'row',
// // // // // // // //     justifyContent: 'space-between',
// // // // // // // //     alignItems: 'center',
// // // // // // // //     paddingHorizontal: 16,
// // // // // // // //     paddingVertical: 12,
// // // // // // // //     borderBottomWidth: 1,
// // // // // // // //     borderBottomColor: '#272727',
// // // // // // // //   },
// // // // // // // //   headerLeft: {
// // // // // // // //     flex: 1,
// // // // // // // //   },
// // // // // // // //   headerTitle: {
// // // // // // // //     color: '#fff',
// // // // // // // //     fontSize: 22,
// // // // // // // //     fontWeight: 'bold',
// // // // // // // //   },
// // // // // // // //   headerRight: {
// // // // // // // //     flexDirection: 'row',
// // // // // // // //     alignItems: 'center',
// // // // // // // //   },
// // // // // // // //   iconButton: {
// // // // // // // //     padding: 8,
// // // // // // // //     marginLeft: 8,
// // // // // // // //   },
// // // // // // // //   loadingContainer: {
// // // // // // // //     flex: 1,
// // // // // // // //     justifyContent: 'center',
// // // // // // // //     alignItems: 'center',
// // // // // // // //   },
// // // // // // // //   loadingText: {
// // // // // // // //     color: '#fff',
// // // // // // // //     marginTop: 16,
// // // // // // // //     fontSize: 16,
// // // // // // // //   },
// // // // // // // //   videosList: {
// // // // // // // //     paddingBottom: 16,
// // // // // // // //   },
// // // // // // // //   videoItem: {
// // // // // // // //     marginBottom: 16,
// // // // // // // //   },
// // // // // // // //   thumbnailContainer: {
// // // // // // // //     position: 'relative',
// // // // // // // //   },
// // // // // // // //   thumbnail: {
// // // // // // // //     width: '100%',
// // // // // // // //     height: 200,
// // // // // // // //     backgroundColor: '#272727', // ✅ Fallback background color
// // // // // // // //   },
// // // // // // // //   durationBadge: {
// // // // // // // //     position: 'absolute',
// // // // // // // //     bottom: 8,
// // // // // // // //     right: 8,
// // // // // // // //     backgroundColor: 'rgba(0,0,0,0.8)',
// // // // // // // //     paddingHorizontal: 6,
// // // // // // // //     paddingVertical: 2,
// // // // // // // //     borderRadius: 4,
// // // // // // // //   },
// // // // // // // //   durationText: {
// // // // // // // //     color: '#fff',
// // // // // // // //     fontSize: 12,
// // // // // // // //     fontWeight: '500',
// // // // // // // //   },
// // // // // // // //   playButtonOverlay: {
// // // // // // // //     ...StyleSheet.absoluteFillObject,
// // // // // // // //     justifyContent: 'center',
// // // // // // // //     alignItems: 'center',
// // // // // // // //     backgroundColor: 'rgba(0,0,0,0.3)',
// // // // // // // //   },
// // // // // // // //   playIconCircle: {
// // // // // // // //     width: 60,
// // // // // // // //     height: 60,
// // // // // // // //     borderRadius: 30,
// // // // // // // //     backgroundColor: 'rgba(255,0,0,0.8)',
// // // // // // // //     justifyContent: 'center',
// // // // // // // //     alignItems: 'center',
// // // // // // // //   },
// // // // // // // //   videoInfo: {
// // // // // // // //     flexDirection: 'row',
// // // // // // // //     paddingHorizontal: 16,
// // // // // // // //     paddingTop: 12,
// // // // // // // //   },
// // // // // // // //   channelAvatar: {
// // // // // // // //     width: 36,
// // // // // // // //     height: 36,
// // // // // // // //     borderRadius: 18,
// // // // // // // //     marginRight: 12,
// // // // // // // //     backgroundColor: '#333', // ✅ Fallback background color
// // // // // // // //   },
// // // // // // // //   videoDetails: {
// // // // // // // //     flex: 1,
// // // // // // // //   },
// // // // // // // //   videoTitle: {
// // // // // // // //     color: '#fff',
// // // // // // // //     fontSize: 16,
// // // // // // // //     fontWeight: '500',
// // // // // // // //     marginBottom: 4,
// // // // // // // //     lineHeight: 20,
// // // // // // // //   },
// // // // // // // //   channelName: {
// // // // // // // //     color: '#aaa',
// // // // // // // //     fontSize: 14,
// // // // // // // //     marginBottom: 2,
// // // // // // // //   },
// // // // // // // //   videoStats: {
// // // // // // // //     flexDirection: 'row',
// // // // // // // //     alignItems: 'center',
// // // // // // // //   },
// // // // // // // //   statText: {
// // // // // // // //     color: '#aaa',
// // // // // // // //     fontSize: 14,
// // // // // // // //   },
// // // // // // // //   dot: {
// // // // // // // //     color: '#aaa',
// // // // // // // //     marginHorizontal: 4,
// // // // // // // //   },
// // // // // // // //   moreButton: {
// // // // // // // //     padding: 4,
// // // // // // // //     alignSelf: 'flex-start',
// // // // // // // //   },
// // // // // // // // });

// // // // // // // // export default VideosScreen;


// // // // // // // // screens/VideosScreen.js - COMPLETE DYNAMIC VERSION WITH LIKE
// // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // import {
// // // // // // //   View,
// // // // // // //   Text,
// // // // // // //   StyleSheet,
// // // // // // //   SafeAreaView,
// // // // // // //   StatusBar,
// // // // // // //   FlatList,
// // // // // // //   TouchableOpacity,
// // // // // // //   Image,
// // // // // // //   Dimensions,
// // // // // // //   ActivityIndicator,
// // // // // // //   RefreshControl,
// // // // // // //   Alert
// // // // // // // } from 'react-native';
// // // // // // // import Icon from 'react-native-vector-icons/MaterialIcons';
// // // // // // // import Feather from 'react-native-vector-icons/Feather';
// // // // // // // import Ionicons from 'react-native-vector-icons/Ionicons';
// // // // // // // import { getVideos, toggleVideoLike } from '../Services/mobile-api';
// // // // // // // import { mobile_siteConfig } from '../Services/mobile-siteConfig';

// // // // // // // const { width } = Dimensions.get('window');

// // // // // // // const VideosScreen = ({ navigation }) => {
// // // // // // //   const [videos, setVideos] = useState([]);
// // // // // // //   const [loading, setLoading] = useState(true);
// // // // // // //   const [refreshing, setRefreshing] = useState(false);
// // // // // // //   const [currentPage, setCurrentPage] = useState(1);
// // // // // // //   const [hasMore, setHasMore] = useState(true);
// // // // // // //   const [loadingMore, setLoadingMore] = useState(false);

// // // // // // //   // Helper function to get complete image URL
// // // // // // //   const getImageUrl = (imagePath) => {
// // // // // // //     if (!imagePath) return 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop';
    
// // // // // // //     if (imagePath.startsWith('http')) {
// // // // // // //       return imagePath;
// // // // // // //     } else if (imagePath.startsWith('/')) {
// // // // // // //       return `${mobile_siteConfig.IMAGE_BASE_URL}${imagePath}`;
// // // // // // //     } else {
// // // // // // //       return `${mobile_siteConfig.IMAGE_BASE_URL}/${imagePath}`;
// // // // // // //     }
// // // // // // //   };

// // // // // // //   // Helper function to get complete video URL
// // // // // // //   const getVideoUrl = (videoPath) => {
// // // // // // //     if (!videoPath) return null;
    
// // // // // // //     if (videoPath.startsWith('http')) {
// // // // // // //       return videoPath;
// // // // // // //     } else if (videoPath.startsWith('/')) {
// // // // // // //       return `${mobile_siteConfig.IMAGE_BASE_URL}${videoPath}`;
// // // // // // //     } else {
// // // // // // //       return `${mobile_siteConfig.IMAGE_BASE_URL}/${videoPath}`;
// // // // // // //     }
// // // // // // //   };

// // // // // // //   // Format duration
// // // // // // //   const formatDuration = (seconds) => {
// // // // // // //     if (!seconds) return '0:00';
// // // // // // //     const mins = Math.floor(seconds / 60);
// // // // // // //     const secs = Math.floor(seconds % 60);
// // // // // // //     return `${mins}:${secs.toString().padStart(2, '0')}`;
// // // // // // //   };

// // // // // // //   // Format views
// // // // // // //   const formatViews = (views) => {
// // // // // // //     if (!views) return '0 views';
// // // // // // //     if (views >= 1000000) {
// // // // // // //       return `${(views / 1000000).toFixed(1)}M views`;
// // // // // // //     } else if (views >= 1000) {
// // // // // // //       return `${(views / 1000).toFixed(1)}K views`;
// // // // // // //     }
// // // // // // //     return `${views} views`;
// // // // // // //   };

// // // // // // //   // Format date
// // // // // // //   const formatDate = (dateString) => {
// // // // // // //     if (!dateString) return 'Recently';
    
// // // // // // //     const date = new Date(dateString);
// // // // // // //     const now = new Date();
// // // // // // //     const diffTime = Math.abs(now - date);
// // // // // // //     const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
// // // // // // //     if (diffDays === 1) return '1 day ago';
// // // // // // //     if (diffDays < 7) return `${diffDays} days ago`;
// // // // // // //     if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
// // // // // // //     if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
// // // // // // //     return `${Math.floor(diffDays / 365)} years ago`;
// // // // // // //   };

// // // // // // //   // Load videos from API
// // // // // // //   const loadVideos = async (page = 1, isRefresh = false) => {
// // // // // // //     try {
// // // // // // //       if (isRefresh) {
// // // // // // //         setRefreshing(true);
// // // // // // //       } else if (page === 1) {
// // // // // // //         setLoading(true);
// // // // // // //       } else {
// // // // // // //         setLoadingMore(true);
// // // // // // //       }

// // // // // // //       console.log('🎬 Loading videos, page:', page);
      
// // // // // // //       const response = await getVideos(page, 20, 'smart');
      
// // // // // // //       console.log('🎬 Videos API Response:', response);
      
// // // // // // //       if (response && response.success) {
// // // // // // //         const videosData = response.data?.videos || [];
// // // // // // //         const pagination = response.data?.pagination;
        
// // // // // // //         console.log('🎬 Videos found:', videosData.length);
        
// // // // // // //         // Transform videos data to consistent format
// // // // // // //         const transformedVideos = videosData.map((video, index) => ({
// // // // // // //           id: video.id?.toString() || `video-${index}`,
// // // // // // //           title: video.title || 'Untitled Video',
// // // // // // //           channel: video.artist?.name || 'Unknown Artist',
// // // // // // //           views: video.views || video.stats?.views || 0,
// // // // // // //           duration: video.duration || 0,
// // // // // // //           uploadTime: formatDate(video.createdAt),
// // // // // // //           thumbnail: getImageUrl(video.thumbnail),
// // // // // // //           avatar: getImageUrl(video.artist?.profilePic),
// // // // // // //           videoUrl: getVideoUrl(video.videoFile),
// // // // // // //           likes: video.stats?.likes || 0,
// // // // // // //           description: video.description || 'No description available',
// // // // // // //           isVerified: video.artist?.isVerified || false,
// // // // // // //           followers: video.artist?.followers || 0,
// // // // // // //           isLiked: false, // We'll update this when we implement like status check
// // // // // // //           language: video.language?.name,
// // // // // // //           mood: video.mood?.name,
// // // // // // //           genre: video.genre?.name,
// // // // // // //           ...video
// // // // // // //         }));
        
// // // // // // //         if (page === 1) {
// // // // // // //           setVideos(transformedVideos);
// // // // // // //         } else {
// // // // // // //           setVideos(prevVideos => [...prevVideos, ...transformedVideos]);
// // // // // // //         }
        
// // // // // // //         // Update pagination
// // // // // // //         if (pagination) {
// // // // // // //           setHasMore(pagination.hasNextPage || false);
// // // // // // //           setCurrentPage(pagination.page || page);
// // // // // // //         } else {
// // // // // // //           setHasMore(false);
// // // // // // //         }
        
// // // // // // //       } else {
// // // // // // //         console.log('❌ Videos API not successful');
// // // // // // //         if (page === 1) {
// // // // // // //           setVideos([]);
// // // // // // //         }
// // // // // // //       }
// // // // // // //     } catch (error) {
// // // // // // //       console.error('❌ Load videos error:', error);
// // // // // // //       Alert.alert('Error', 'Failed to load videos');
// // // // // // //       if (page === 1) {
// // // // // // //         setVideos([]);
// // // // // // //       }
// // // // // // //     } finally {
// // // // // // //       setLoading(false);
// // // // // // //       setRefreshing(false);
// // // // // // //       setLoadingMore(false);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   useEffect(() => {
// // // // // // //     loadVideos(1);
// // // // // // //   }, []);

// // // // // // //   const onRefresh = async () => {
// // // // // // //     console.log('🔄 Refreshing videos...');
// // // // // // //     setCurrentPage(1);
// // // // // // //     setHasMore(true);
// // // // // // //     await loadVideos(1, true);
// // // // // // //   };

// // // // // // //   const loadMoreVideos = () => {
// // // // // // //     if (hasMore && !loadingMore) {
// // // // // // //       console.log('📥 Loading more videos, page:', currentPage + 1);
// // // // // // //       loadVideos(currentPage + 1);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   // ✅ Handle video like/unlike
// // // // // // //   const handleToggleLike = async (videoId, index) => {
// // // // // // //     try {
// // // // // // //       console.log('❤️ Toggling like for video:', videoId);
      
// // // // // // //       const response = await toggleVideoLike(videoId);
      
// // // // // // //       if (response.success) {
// // // // // // //         // Update local state
// // // // // // //         setVideos(prevVideos => 
// // // // // // //           prevVideos.map((video, i) => 
// // // // // // //             i === index 
// // // // // // //               ? { 
// // // // // // //                   ...video, 
// // // // // // //                   isLiked: !video.isLiked,
// // // // // // //                   likes: video.isLiked ? video.likes - 1 : video.likes + 1
// // // // // // //                 }
// // // // // // //               : video
// // // // // // //           )
// // // // // // //         );
        
// // // // // // //         console.log('✅ Like toggled successfully');
// // // // // // //       } else {
// // // // // // //         Alert.alert('Error', response.message || 'Failed to toggle like');
// // // // // // //       }
// // // // // // //     } catch (error) {
// // // // // // //       console.error('❌ Toggle like error:', error);
// // // // // // //       Alert.alert('Error', 'Failed to toggle like');
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const handleVideoPress = (video) => {
// // // // // // //     console.log('🎬 Playing video:', video.title);
// // // // // // //     console.log('🎬 Video URL:', video.videoUrl);
    
// // // // // // //     if (!video.videoUrl) {
// // // // // // //       Alert.alert('Error', 'Video URL not available');
// // // // // // //       return;
// // // // // // //     }
    
// // // // // // //     navigation.navigate('VideoPlayerScreen', {
// // // // // // //       videoData: video
// // // // // // //     });
// // // // // // //   };

// // // // // // //   const renderVideoItem = ({ item, index }) => (
// // // // // // //     <TouchableOpacity 
// // // // // // //       style={styles.videoItem}
// // // // // // //       onPress={() => handleVideoPress(item)}
// // // // // // //     >
// // // // // // //       {/* Thumbnail with Duration */}
// // // // // // //       <View style={styles.thumbnailContainer}>
// // // // // // //         <Image 
// // // // // // //           source={{ uri: item.thumbnail }}
// // // // // // //           style={styles.thumbnail}
// // // // // // //           onError={(error) => {
// // // // // // //             console.log('❌ Thumbnail load error:', error.nativeEvent.error);
// // // // // // //           }}
// // // // // // //         />
// // // // // // //         <View style={styles.durationBadge}>
// // // // // // //           <Text style={styles.durationText}>{formatDuration(item.duration)}</Text>
// // // // // // //         </View>
        
// // // // // // //         {/* Play Button Overlay */}
// // // // // // //         <View style={styles.playButtonOverlay}>
// // // // // // //           <View style={styles.playIconCircle}>
// // // // // // //             <Icon name="play-arrow" size={30} color="#fff" />
// // // // // // //           </View>
// // // // // // //         </View>
// // // // // // //       </View>

// // // // // // //       {/* Video Info */}
// // // // // // //       <View style={styles.videoInfo}>
// // // // // // //         <Image 
// // // // // // //           source={{ uri: item.avatar }}
// // // // // // //           style={styles.channelAvatar}
// // // // // // //           onError={(error) => {
// // // // // // //             console.log('❌ Avatar load error:', error.nativeEvent.error);
// // // // // // //           }}
// // // // // // //         />
// // // // // // //         <View style={styles.videoDetails}>
// // // // // // //           <Text style={styles.videoTitle} numberOfLines={2}>
// // // // // // //             {item.title}
// // // // // // //           </Text>
// // // // // // //           <View style={styles.channelInfo}>
// // // // // // //             <Text style={styles.channelName}>
// // // // // // //               {item.channel}
// // // // // // //             </Text>
// // // // // // //             {item.isVerified && (
// // // // // // //               <Ionicons name="checkmark-circle" size={14} color="#3EA6FF" style={styles.verifiedIcon} />
// // // // // // //             )}
// // // // // // //           </View>
// // // // // // //           <View style={styles.videoStats}>
// // // // // // //             <Text style={styles.statText}>{formatViews(item.views)}</Text>
// // // // // // //             <Text style={styles.dot}>•</Text>
// // // // // // //             <Text style={styles.statText}>{item.uploadTime}</Text>
// // // // // // //           </View>
// // // // // // //         </View>
        
// // // // // // //         {/* Like Button */}
// // // // // // //         <TouchableOpacity 
// // // // // // //           style={styles.likeButton}
// // // // // // //           onPress={() => handleToggleLike(item.id, index)}
// // // // // // //         >
// // // // // // //           <Ionicons 
// // // // // // //             name={item.isLiked ? "heart" : "heart-outline"} 
// // // // // // //             size={20} 
// // // // // // //             color={item.isLiked ? "#FF0000" : "#aaa"} 
// // // // // // //           />
// // // // // // //           {item.likes > 0 && (
// // // // // // //             <Text style={styles.likeCount}>{item.likes}</Text>
// // // // // // //           )}
// // // // // // //         </TouchableOpacity>
// // // // // // //       </View>
// // // // // // //     </TouchableOpacity>
// // // // // // //   );

// // // // // // //   const renderFooter = () => {
// // // // // // //     if (!loadingMore) return null;
    
// // // // // // //     return (
// // // // // // //       <View style={styles.loadingMoreContainer}>
// // // // // // //         <ActivityIndicator size="small" color="#FF0000" />
// // // // // // //         <Text style={styles.loadingMoreText}>Loading more videos...</Text>
// // // // // // //       </View>
// // // // // // //     );
// // // // // // //   };

// // // // // // //   const renderEmptyState = () => (
// // // // // // //     <View style={styles.emptyState}>
// // // // // // //       <View style={styles.emptyIcon}>
// // // // // // //         <Icon name="videocam-off" size={64} color="#666" />
// // // // // // //       </View>
// // // // // // //       <Text style={styles.emptyStateTitle}>No videos available</Text>
// // // // // // //       <Text style={styles.emptyStateText}>
// // // // // // //         Check back later for new video content
// // // // // // //       </Text>
// // // // // // //       <TouchableOpacity 
// // // // // // //         style={styles.retryButton}
// // // // // // //         onPress={onRefresh}
// // // // // // //       >
// // // // // // //         <Text style={styles.retryButtonText}>Try Again</Text>
// // // // // // //       </TouchableOpacity>
// // // // // // //     </View>
// // // // // // //   );

// // // // // // //   return (
// // // // // // //     <SafeAreaView style={styles.container}>
// // // // // // //       <StatusBar barStyle="light-content" backgroundColor="#0f0f0f" />
      
// // // // // // //       {/* Header */}
// // // // // // //       <View style={styles.header}>
// // // // // // //         <View style={styles.headerLeft}>
// // // // // // //           <Text style={styles.headerTitle}>Videos</Text>
// // // // // // //         </View>
// // // // // // //         <View style={styles.headerRight}>
// // // // // // //           <TouchableOpacity style={styles.iconButton}>
// // // // // // //             <Feather name="cast" size={20} color="#fff" />
// // // // // // //           </TouchableOpacity>
// // // // // // //           <TouchableOpacity style={styles.iconButton}>
// // // // // // //             <Ionicons name="notifications-outline" size={20} color="#fff" />
// // // // // // //           </TouchableOpacity>
// // // // // // //           <TouchableOpacity style={styles.iconButton}>
// // // // // // //             <Feather name="search" size={20} color="#fff" />
// // // // // // //           </TouchableOpacity>
// // // // // // //         </View>
// // // // // // //       </View>

// // // // // // //       {loading ? (
// // // // // // //         <View style={styles.loadingContainer}>
// // // // // // //           <ActivityIndicator size="large" color="#FF0000" />
// // // // // // //           <Text style={styles.loadingText}>Loading videos...</Text>
// // // // // // //         </View>
// // // // // // //       ) : (
// // // // // // //         <FlatList
// // // // // // //           data={videos}
// // // // // // //           renderItem={renderVideoItem}
// // // // // // //           keyExtractor={item => item.id}
// // // // // // //           showsVerticalScrollIndicator={false}
// // // // // // //           contentContainerStyle={styles.videosList}
// // // // // // //           refreshControl={
// // // // // // //             <RefreshControl
// // // // // // //               refreshing={refreshing}
// // // // // // //               onRefresh={onRefresh}
// // // // // // //               colors={['#FF0000']}
// // // // // // //               tintColor="#FF0000"
// // // // // // //             />
// // // // // // //           }
// // // // // // //           ListEmptyComponent={renderEmptyState}
// // // // // // //           ListFooterComponent={renderFooter}
// // // // // // //           onEndReached={loadMoreVideos}
// // // // // // //           onEndReachedThreshold={0.5}
// // // // // // //         />
// // // // // // //       )}
// // // // // // //     </SafeAreaView>
// // // // // // //   );
// // // // // // // };

// // // // // // // const styles = StyleSheet.create({
// // // // // // //   container: {
// // // // // // //     flex: 1,
// // // // // // //     backgroundColor: '#0f0f0f',
// // // // // // //   },
// // // // // // //   header: {
// // // // // // //     flexDirection: 'row',
// // // // // // //     justifyContent: 'space-between',
// // // // // // //     alignItems: 'center',
// // // // // // //     paddingHorizontal: 16,
// // // // // // //     paddingVertical: 12,
// // // // // // //     borderBottomWidth: 1,
// // // // // // //     borderBottomColor: '#272727',
// // // // // // //   },
// // // // // // //   headerLeft: {
// // // // // // //     flex: 1,
// // // // // // //   },
// // // // // // //   headerTitle: {
// // // // // // //     color: '#fff',
// // // // // // //     fontSize: 22,
// // // // // // //     fontWeight: 'bold',
// // // // // // //   },
// // // // // // //   headerRight: {
// // // // // // //     flexDirection: 'row',
// // // // // // //     alignItems: 'center',
// // // // // // //   },
// // // // // // //   iconButton: {
// // // // // // //     padding: 8,
// // // // // // //     marginLeft: 8,
// // // // // // //   },
// // // // // // //   loadingContainer: {
// // // // // // //     flex: 1,
// // // // // // //     justifyContent: 'center',
// // // // // // //     alignItems: 'center',
// // // // // // //   },
// // // // // // //   loadingText: {
// // // // // // //     color: '#fff',
// // // // // // //     marginTop: 16,
// // // // // // //     fontSize: 16,
// // // // // // //   },
// // // // // // //   videosList: {
// // // // // // //     paddingBottom: 16,
// // // // // // //   },
// // // // // // //   videoItem: {
// // // // // // //     marginBottom: 16,
// // // // // // //   },
// // // // // // //   thumbnailContainer: {
// // // // // // //     position: 'relative',
// // // // // // //   },
// // // // // // //   thumbnail: {
// // // // // // //     width: '100%',
// // // // // // //     height: 200,
// // // // // // //     backgroundColor: '#272727',
// // // // // // //   },
// // // // // // //   durationBadge: {
// // // // // // //     position: 'absolute',
// // // // // // //     bottom: 8,
// // // // // // //     right: 8,
// // // // // // //     backgroundColor: 'rgba(0,0,0,0.8)',
// // // // // // //     paddingHorizontal: 6,
// // // // // // //     paddingVertical: 2,
// // // // // // //     borderRadius: 4,
// // // // // // //   },
// // // // // // //   durationText: {
// // // // // // //     color: '#fff',
// // // // // // //     fontSize: 12,
// // // // // // //     fontWeight: '500',
// // // // // // //   },
// // // // // // //   playButtonOverlay: {
// // // // // // //     ...StyleSheet.absoluteFillObject,
// // // // // // //     justifyContent: 'center',
// // // // // // //     alignItems: 'center',
// // // // // // //     backgroundColor: 'rgba(0,0,0,0.3)',
// // // // // // //   },
// // // // // // //   playIconCircle: {
// // // // // // //     width: 60,
// // // // // // //     height: 60,
// // // // // // //     borderRadius: 30,
// // // // // // //     backgroundColor: 'rgba(255,0,0,0.8)',
// // // // // // //     justifyContent: 'center',
// // // // // // //     alignItems: 'center',
// // // // // // //   },
// // // // // // //   videoInfo: {
// // // // // // //     flexDirection: 'row',
// // // // // // //     paddingHorizontal: 16,
// // // // // // //     paddingTop: 12,
// // // // // // //   },
// // // // // // //   channelAvatar: {
// // // // // // //     width: 36,
// // // // // // //     height: 36,
// // // // // // //     borderRadius: 18,
// // // // // // //     marginRight: 12,
// // // // // // //     backgroundColor: '#333',
// // // // // // //   },
// // // // // // //   videoDetails: {
// // // // // // //     flex: 1,
// // // // // // //   },
// // // // // // //   videoTitle: {
// // // // // // //     color: '#fff',
// // // // // // //     fontSize: 16,
// // // // // // //     fontWeight: '500',
// // // // // // //     marginBottom: 4,
// // // // // // //     lineHeight: 20,
// // // // // // //   },
// // // // // // //   channelInfo: {
// // // // // // //     flexDirection: 'row',
// // // // // // //     alignItems: 'center',
// // // // // // //     marginBottom: 2,
// // // // // // //   },
// // // // // // //   channelName: {
// // // // // // //     color: '#aaa',
// // // // // // //     fontSize: 14,
// // // // // // //   },
// // // // // // //   verifiedIcon: {
// // // // // // //     marginLeft: 4,
// // // // // // //   },
// // // // // // //   videoStats: {
// // // // // // //     flexDirection: 'row',
// // // // // // //     alignItems: 'center',
// // // // // // //   },
// // // // // // //   statText: {
// // // // // // //     color: '#aaa',
// // // // // // //     fontSize: 14,
// // // // // // //   },
// // // // // // //   dot: {
// // // // // // //     color: '#aaa',
// // // // // // //     marginHorizontal: 4,
// // // // // // //   },
// // // // // // //   likeButton: {
// // // // // // //     padding: 4,
// // // // // // //     alignItems: 'center',
// // // // // // //     minWidth: 40,
// // // // // // //   },
// // // // // // //   likeCount: {
// // // // // // //     color: '#aaa',
// // // // // // //     fontSize: 12,
// // // // // // //     marginTop: 2,
// // // // // // //   },
// // // // // // //   loadingMoreContainer: {
// // // // // // //     flexDirection: 'row',
// // // // // // //     justifyContent: 'center',
// // // // // // //     alignItems: 'center',
// // // // // // //     padding: 20,
// // // // // // //   },
// // // // // // //   loadingMoreText: {
// // // // // // //     color: '#aaa',
// // // // // // //     marginLeft: 10,
// // // // // // //     fontSize: 14,
// // // // // // //   },
// // // // // // //   emptyState: {
// // // // // // //     alignItems: 'center',
// // // // // // //     paddingVertical: 60,
// // // // // // //     paddingHorizontal: 20,
// // // // // // //   },
// // // // // // //   emptyIcon: {
// // // // // // //     width: 100,
// // // // // // //     height: 100,
// // // // // // //     borderRadius: 50,
// // // // // // //     backgroundColor: 'rgba(255,255,255,0.05)',
// // // // // // //     justifyContent: 'center',
// // // // // // //     alignItems: 'center',
// // // // // // //     marginBottom: 20,
// // // // // // //   },
// // // // // // //   emptyStateTitle: {
// // // // // // //     fontSize: 18,
// // // // // // //     fontWeight: 'bold',
// // // // // // //     color: '#fff',
// // // // // // //     marginBottom: 8,
// // // // // // //     textAlign: 'center',
// // // // // // //   },
// // // // // // //   emptyStateText: {
// // // // // // //     fontSize: 14,
// // // // // // //     color: '#b3b3b3',
// // // // // // //     textAlign: 'center',
// // // // // // //     lineHeight: 20,
// // // // // // //     marginBottom: 20,
// // // // // // //   },
// // // // // // //   retryButton: {
// // // // // // //     backgroundColor: '#FF0000',
// // // // // // //     paddingHorizontal: 20,
// // // // // // //     paddingVertical: 10,
// // // // // // //     borderRadius: 8,
// // // // // // //   },
// // // // // // //   retryButtonText: {
// // // // // // //     color: '#fff',
// // // // // // //     fontSize: 16,
// // // // // // //     fontWeight: '500',
// // // // // // //   },
// // // // // // // });

// // // // // // // export default VideosScreen;

// // // // screens/VideosScreen.js - UPDATED PROFESSIONAL VERSION
// // // import React, { useState, useEffect } from 'react';
// // // import {
// // //   View,
// // //   Text,
// // //   StyleSheet,
// // //   SafeAreaView,
// // //   StatusBar,
// // //   FlatList,
// // //   TouchableOpacity,
// // //   Image,
// // //   Dimensions,
// // //   ActivityIndicator,
// // //   RefreshControl,
// // //   Alert
// // // } from 'react-native';
// // // import Icon from 'react-native-vector-icons/MaterialIcons';
// // // import Feather from 'react-native-vector-icons/Feather';
// // // import Ionicons from 'react-native-vector-icons/Ionicons';
// // // import { getVideos } from '../Services/mobile-api';
// // // import { mobile_siteConfig } from '../Services/mobile-siteConfig';

// // // const { width } = Dimensions.get('window');

// // // const VideosScreen = ({ navigation }) => {
// // //   const [videos, setVideos] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [refreshing, setRefreshing] = useState(false);
// // //   const [currentPage, setCurrentPage] = useState(1);
// // //   const [hasMore, setHasMore] = useState(true);
// // //   const [loadingMore, setLoadingMore] = useState(false);

// // //   // Helper function to get complete image URL
// // //   // const getImageUrl = (imagePath) => {
// // //   //   if (!imagePath) return 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop';
    
// // //   //   if (imagePath.startsWith('http')) {
// // //   //     return imagePath;
// // //   //   } else if (imagePath.startsWith('/')) {
// // //   //     return `${mobile_siteConfig.IMAGE_BASE_URL}${imagePath}`;
// // //   //   } else {
// // //   //     return `${mobile_siteConfig.IMAGE_BASE_URL}/${imagePath}`;
// // //   //   }
// // //   // };

// // //   const getImageUrl = (imagePath) => {
// // //     if (!imagePath) {
// // //       return null;
// // //     }
    
// // //     if (imagePath.startsWith('http')) {
// // //       return imagePath;
// // //     }
    
// // //     let fullUrl;
// // //     if (imagePath.startsWith('/')) {
// // //       fullUrl = `${mobile_siteConfig.IMAGE_BASE_URL}${imagePath}`;
// // //     } else {
// // //       fullUrl = `${mobile_siteConfig.IMAGE_BASE_URL}/${imagePath}`;
// // //     }
    
// // //     return fullUrl;
// // //   };


// // //   // Helper function to get complete video URL
// // //   const getVideoUrl = (videoPath) => {
// // //     if (!videoPath) return null;
    
// // //     if (videoPath.startsWith('http')) {
// // //       return videoPath;
// // //     } else if (videoPath.startsWith('/')) {
// // //       return `${mobile_siteConfig.IMAGE_BASE_URL}${videoPath}`;
// // //     } else {
// // //       return `${mobile_siteConfig.IMAGE_BASE_URL}/${videoPath}`;
// // //     }
// // //   };

// // //   // Format duration
// // //   const formatDuration = (seconds) => {
// // //     if (!seconds) return '0:00';
// // //     const mins = Math.floor(seconds / 60);
// // //     const secs = Math.floor(seconds % 60);
// // //     return `${mins}:${secs.toString().padStart(2, '0')}`;
// // //   };

// // //   // Format views
// // //   const formatViews = (views) => {
// // //     if (!views) return '0 views';
// // //     if (views >= 1000000) {
// // //       return `${(views / 1000000).toFixed(1)}M views`;
// // //     } else if (views >= 1000) {
// // //       return `${(views / 1000).toFixed(1)}K views`;
// // //     }
// // //     return `${views} views`;
// // //   };

// // //   // Format date
// // //   const formatDate = (dateString) => {
// // //     if (!dateString) return 'Recently';
    
// // //     const date = new Date(dateString);
// // //     const now = new Date();
// // //     const diffTime = Math.abs(now - date);
// // //     const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
// // //     if (diffDays === 1) return '1 day ago';
// // //     if (diffDays < 7) return `${diffDays} days ago`;
// // //     if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
// // //     if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
// // //     return `${Math.floor(diffDays / 365)} years ago`;
// // //   };

// // //   // Load videos from API
// // //   const loadVideos = async (page = 1, isRefresh = false) => {
// // //     try {
// // //       if (isRefresh) {
// // //         setRefreshing(true);
// // //       } else if (page === 1) {
// // //         setLoading(true);
// // //       } else {
// // //         setLoadingMore(true);
// // //       }

// // //       console.log('🎬 Loading videos, page:', page);
      
// // //       const response = await getVideos(page, 20, 'smart');
      
// // //       console.log('🎬 Videos API Response:', response);
      
// // //       if (response && response.success) {
// // //         const videosData = response.data?.videos || [];
// // //         const pagination = response.data?.pagination;
        
// // //         console.log('🎬 Videos found:', videosData.length);
// // //         console.log('🎬 First video thumbnail:', videosData[0]?.thumbnail);
        
// // //         // Transform videos data to consistent format
// // //         const transformedVideos = videosData.map((video, index) => {
// // //           const thumbnailUrl = getImageUrl(video.thumbnail);
// // //           console.log(`🎬 Video ${index} thumbnail:`, thumbnailUrl);
          
// // //           return {
// // //             id: video.id?.toString() || `video-${index}`,
// // //             title: video.title || 'Untitled Video',
// // //             channel: video.artist?.name || 'Unknown Artist',
// // //             views: video.views || video.stats?.views || 0,
// // //             duration: video.duration || 0,
// // //             uploadTime: formatDate(video.createdAt),
// // //             thumbnail: thumbnailUrl,
// // //             avatar: getImageUrl(video.artist?.profilePic),
// // //             videoUrl: getVideoUrl(video.videoFile),
// // //             likes: video.stats?.likes || 0,
// // //             description: video.description || 'No description available',
// // //             isVerified: video.artist?.isVerified || false,
// // //             followers: video.artist?.followers || 0,
// // //             language: video.language?.name,
// // //             mood: video.mood?.name,
// // //             genre: video.genre?.name,
// // //             artist: video.artist, // Keep original artist data for follow functionality
// // //             ...video
// // //           };
// // //         });
        
// // //         if (page === 1) {
// // //           setVideos(transformedVideos);
// // //         } else {
// // //           setVideos(prevVideos => [...prevVideos, ...transformedVideos]);
// // //         }
        
// // //         // Update pagination
// // //         if (pagination) {
// // //           setHasMore(pagination.hasNextPage || false);
// // //           setCurrentPage(pagination.page || page);
// // //         } else {
// // //           setHasMore(false);
// // //         }
        
// // //       } else {
// // //         console.log('❌ Videos API not successful');
// // //         if (page === 1) {
// // //           setVideos([]);
// // //         }
// // //       }
// // //     } catch (error) {
// // //       console.error('❌ Load videos error:', error);
// // //       Alert.alert('Error', 'Failed to load videos');
// // //       if (page === 1) {
// // //         setVideos([]);
// // //       }
// // //     } finally {
// // //       setLoading(false);
// // //       setRefreshing(false);
// // //       setLoadingMore(false);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     loadVideos(1);
// // //   }, []);

// // //   const onRefresh = async () => {
// // //     console.log('🔄 Refreshing videos...');
// // //     setCurrentPage(1);
// // //     setHasMore(true);
// // //     await loadVideos(1, true);
// // //   };

// // //   const loadMoreVideos = () => {
// // //     if (hasMore && !loadingMore) {
// // //       console.log('📥 Loading more videos, page:', currentPage + 1);
// // //       loadVideos(currentPage + 1);
// // //     }
// // //   };

// // //   const handleVideoPress = (video) => {
// // //     console.log('🎬 Playing video:', video.title);
// // //     console.log('🎬 Video URL:', video.videoUrl);
// // //     console.log('🎬 Thumbnail URL:', video.thumbnail);
    
// // //     if (!video.videoUrl) {
// // //       Alert.alert('Error', 'Video URL not available');
// // //       return;
// // //     }
    
// // //     navigation.navigate('VideoPlayerScreen', {
// // //       videoData: video
// // //     });
// // //   };

// // //   const renderVideoItem = ({ item, index }) => (
// // //     <TouchableOpacity 
// // //       style={styles.videoItem}
// // //       onPress={() => handleVideoPress(item)}
// // //       activeOpacity={0.8}
// // //     >
// // //       {/* Thumbnail with Duration */}
// // //       <View style={styles.thumbnailContainer}>
// // //         <Image 
// // //           source={{ uri: item.thumbnail }}
// // //           style={styles.thumbnail}
// // //           resizeMode="cover"
// // //           onError={(error) => {
// // //             console.log('❌ Thumbnail load error for video:', item.title, error.nativeEvent.error);
// // //           }}
// // //           onLoad={() => {
// // //             console.log('✅ Thumbnail loaded successfully for video:', item.title);
// // //           }}
// // //         />
// // //         <View style={styles.durationBadge}>
// // //           <Text style={styles.durationText}>{formatDuration(item.duration)}</Text>
// // //         </View>
        
// // //         {/* Play Button Overlay */}
// // //         <View style={styles.playButtonOverlay}>
// // //           <View style={styles.playIconCircle}>
// // //             <Icon name="play-arrow" size={30} color="#fff" />
// // //           </View>
// // //         </View>
// // //       </View>

// // //       {/* Video Info */}
// // //       <View style={styles.videoInfo}>
// // //         <Image 
// // //           source={{ uri: item.avatar }}
// // //           style={styles.channelAvatar}
// // //           resizeMode="cover"
// // //           onError={(error) => {
// // //             console.log('❌ Avatar load error:', error.nativeEvent.error);
// // //           }}
// // //         />
// // //         <View style={styles.videoDetails}>
// // //           <Text style={styles.videoTitle} numberOfLines={2}>
// // //             {item.title}
// // //           </Text>
// // //           <View style={styles.channelInfo}>
// // //             <Text style={styles.channelName}>
// // //               {item.channel}
// // //             </Text>
// // //             {item.isVerified && (
// // //               <Ionicons name="checkmark-circle" size={14} color="#3EA6FF" style={styles.verifiedIcon} />
// // //             )}
// // //           </View>
// // //           {/* ✅ UPDATED: Views with icon and date in right corner */}
// // //           <View style={styles.videoMeta}>
// // //             <View style={styles.viewsContainer}>
// // //               <Ionicons name="eye" size={14} color="#aaa" />
// // //               <Text style={styles.viewsText}>{formatViews(item.views)}</Text>
// // //             </View>
            
// // //             <Text style={styles.uploadTime}>
// // //               {item.uploadTime}
// // //             </Text>
// // //           </View>
// // //         </View>
        
// // //         {/* ✅ REMOVED: Like button from VideosScreen */}
// // //       </View>
// // //     </TouchableOpacity>
// // //   );

// // //   const renderFooter = () => {
// // //     if (!loadingMore) return null;
    
// // //     return (
// // //       <View style={styles.loadingMoreContainer}>
// // //         <ActivityIndicator size="small" color="#FF0000" />
// // //         <Text style={styles.loadingMoreText}>Loading more videos...</Text>
// // //       </View>
// // //     );
// // //   };

// // //   const renderEmptyState = () => (
// // //     <View style={styles.emptyState}>
// // //       <View style={styles.emptyIcon}>
// // //         <Icon name="videocam-off" size={64} color="#666" />
// // //       </View>
// // //       <Text style={styles.emptyStateTitle}>No videos available</Text>
// // //       <Text style={styles.emptyStateText}>
// // //         Check back later for new video content
// // //       </Text>
// // //       <TouchableOpacity 
// // //         style={styles.retryButton}
// // //         onPress={onRefresh}
// // //       >
// // //         <Text style={styles.retryButtonText}>Try Again</Text>
// // //       </TouchableOpacity>
// // //     </View>
// // //   );

// // //   return (
// // //     <SafeAreaView style={styles.container}>
// // //       <StatusBar barStyle="light-content" backgroundColor="#0f0f0f" />
      
// // //       {/* ✅ UPDATED: Professional Header - Removed cast and notifications */}
// // //       <View style={styles.header}>
// // //         <View style={styles.headerLeft}>
// // //           <Text style={styles.headerTitle}>Videos</Text>
// // //         </View>
// // //         <View style={styles.headerRight}>
// // //           <TouchableOpacity 
// // //             style={styles.iconButton}
// // //             onPress={() => navigation.navigate('SearchScreen')}
// // //           >
// // //             <Feather name="search" size={22} color="#fff" />
// // //           </TouchableOpacity>
// // //         </View>
// // //       </View>

// // //       {loading ? (
// // //         <View style={styles.loadingContainer}>
// // //           <ActivityIndicator size="large" color="#FF0000" />
// // //           <Text style={styles.loadingText}>Loading videos...</Text>
// // //         </View>
// // //       ) : (
// // //         <FlatList
// // //           data={videos}
// // //           renderItem={renderVideoItem}
// // //           keyExtractor={item => item.id}
// // //           showsVerticalScrollIndicator={false}
// // //           contentContainerStyle={styles.videosList}
// // //           refreshControl={
// // //             <RefreshControl
// // //               refreshing={refreshing}
// // //               onRefresh={onRefresh}
// // //               colors={['#FF0000']}
// // //               tintColor="#FF0000"
// // //             />
// // //           }
// // //           ListEmptyComponent={renderEmptyState}
// // //           ListFooterComponent={renderFooter}
// // //           onEndReached={loadMoreVideos}
// // //           onEndReachedThreshold={0.5}
// // //         />
// // //       )}
// // //     </SafeAreaView>
// // //   );
// // // };

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     backgroundColor: '#0f0f0f',
// // //   },
// // //   header: {
// // //     flexDirection: 'row',
// // //     justifyContent: 'space-between',
// // //     alignItems: 'center',
// // //     paddingHorizontal: 16,
// // //     paddingVertical: 12,
// // //     borderBottomWidth: 1,
// // //     borderBottomColor: '#272727',
// // //   },
// // //   headerLeft: {
// // //     flex: 1,
// // //   },
// // //   headerTitle: {
// // //     color: '#fff',
// // //     fontSize: 22,
// // //     fontWeight: 'bold',
// // //   },
// // //   headerRight: {
// // //     flexDirection: 'row',
// // //     alignItems: 'center',
// // //   },
// // //   iconButton: {
// // //     padding: 8,
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
// // //   videosList: {
// // //     paddingBottom: 16,
// // //   },
// // //   videoItem: {
// // //     marginBottom: 16,
// // //   },
// // //   thumbnailContainer: {
// // //     position: 'relative',
// // //   },
// // //   thumbnail: {
// // //     width: '100%',
// // //     height: 200,
// // //     backgroundColor: '#272727',
// // //   },
// // //   durationBadge: {
// // //     position: 'absolute',
// // //     bottom: 8,
// // //     right: 8,
// // //     backgroundColor: 'rgba(0,0,0,0.8)',
// // //     paddingHorizontal: 6,
// // //     paddingVertical: 2,
// // //     borderRadius: 4,
// // //   },
// // //   durationText: {
// // //     color: '#fff',
// // //     fontSize: 12,
// // //     fontWeight: '500',
// // //   },
// // //   playButtonOverlay: {
// // //     ...StyleSheet.absoluteFillObject,
// // //     justifyContent: 'center',
// // //     alignItems: 'center',
// // //     backgroundColor: 'rgba(0,0,0,0.3)',
// // //   },
// // //   playIconCircle: {
// // //     width: 60,
// // //     height: 60,
// // //     borderRadius: 30,
// // //     backgroundColor: 'rgba(255,0,0,0.8)',
// // //     justifyContent: 'center',
// // //     alignItems: 'center',
// // //   },
// // //   videoInfo: {
// // //     flexDirection: 'row',
// // //     paddingHorizontal: 16,
// // //     paddingTop: 12,
// // //   },
// // //   channelAvatar: {
// // //     width: 36,
// // //     height: 36,
// // //     borderRadius: 18,
// // //     marginRight: 12,
// // //     backgroundColor: '#333',
// // //   },
// // //   videoDetails: {
// // //     flex: 1,
// // //   },
// // //   videoTitle: {
// // //     color: '#fff',
// // //     fontSize: 16,
// // //     fontWeight: '500',
// // //     marginBottom: 6,
// // //     lineHeight: 20,
// // //   },
// // //   channelInfo: {
// // //     flexDirection: 'row',
// // //     alignItems: 'center',
// // //     marginBottom: 6,
// // //   },
// // //   channelName: {
// // //     color: '#aaa',
// // //     fontSize: 14,
// // //   },
// // //   verifiedIcon: {
// // //     marginLeft: 4,
// // //   },
// // //   // ✅ NEW: Professional video meta layout
// // //   videoMeta: {
// // //     flexDirection: 'row',
// // //     justifyContent: 'space-between',
// // //     alignItems: 'center',
// // //   },
// // //   viewsContainer: {
// // //     flexDirection: 'row',
// // //     alignItems: 'center',
// // //   },
// // //   viewsText: {
// // //     color: '#aaa',
// // //     fontSize: 13,
// // //     marginLeft: 4,
// // //   },
// // //   uploadTime: {
// // //     color: '#aaa',
// // //     fontSize: 13,
// // //   },
// // //   loadingMoreContainer: {
// // //     flexDirection: 'row',
// // //     justifyContent: 'center',
// // //     alignItems: 'center',
// // //     padding: 20,
// // //   },
// // //   loadingMoreText: {
// // //     color: '#aaa',
// // //     marginLeft: 10,
// // //     fontSize: 14,
// // //   },
// // //   emptyState: {
// // //     alignItems: 'center',
// // //     paddingVertical: 60,
// // //     paddingHorizontal: 20,
// // //   },
// // //   emptyIcon: {
// // //     width: 100,
// // //     height: 100,
// // //     borderRadius: 50,
// // //     backgroundColor: 'rgba(255,255,255,0.05)',
// // //     justifyContent: 'center',
// // //     alignItems: 'center',
// // //     marginBottom: 20,
// // //   },
// // //   emptyStateTitle: {
// // //     fontSize: 18,
// // //     fontWeight: 'bold',
// // //     color: '#fff',
// // //     marginBottom: 8,
// // //     textAlign: 'center',
// // //   },
// // //   emptyStateText: {
// // //     fontSize: 14,
// // //     color: '#b3b3b3',
// // //     textAlign: 'center',
// // //     lineHeight: 20,
// // //     marginBottom: 20,
// // //   },
// // //   retryButton: {
// // //     backgroundColor: '#FF0000',
// // //     paddingHorizontal: 20,
// // //     paddingVertical: 10,
// // //     borderRadius: 8,
// // //   },
// // //   retryButtonText: {
// // //     color: '#fff',
// // //     fontSize: 16,
// // //     fontWeight: '500',
// // //   },
// // // });

// // // export default VideosScreen;



// // // // // screens/VideosScreen.js - FIXED VERSION (No default-avatar error)
// // // // import React, { useState, useEffect } from 'react';
// // // // import {
// // // //   View,
// // // //   Text,
// // // //   StyleSheet,
// // // //   SafeAreaView,
// // // //   StatusBar,
// // // //   FlatList,
// // // //   TouchableOpacity,
// // // //   Image,
// // // //   Dimensions,
// // // //   ActivityIndicator,
// // // //   RefreshControl,
// // // //   Alert
// // // // } from 'react-native';
// // // // import Icon from 'react-native-vector-icons/MaterialIcons';
// // // // import Feather from 'react-native-vector-icons/Feather';
// // // // import Ionicons from 'react-native-vector-icons/Ionicons';
// // // // import { getVideos } from '../Services/mobile-api';
// // // // import { mobile_siteConfig } from '../Services/mobile-siteConfig';

// // // // const { width } = Dimensions.get('window');

// // // // const VideosScreen = ({ navigation }) => {
// // // //   const [videos, setVideos] = useState([]);
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [refreshing, setRefreshing] = useState(false);
// // // //   const [currentPage, setCurrentPage] = useState(1);
// // // //   const [hasMore, setHasMore] = useState(true);
// // // //   const [loadingMore, setLoadingMore] = useState(false);

// // // //   // ✅ FIXED: Improved image URL helper function
// // // //   const getImageUrl = (imagePath) => {
// // // //     console.log('🖼️ Original image path:', imagePath);
    
// // // //     if (!imagePath) {
// // // //       console.log('🖼️ No image path provided, using fallback');
// // // //       return 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop';
// // // //     }
    
// // // //     // If already a full URL, return as is
// // // //     if (imagePath.startsWith('http')) {
// // // //       console.log('🖼️ Already full URL:', imagePath);
// // // //       return imagePath;
// // // //     }
    
// // // //     // ✅ FIXED: Properly construct URL with base
// // // //     let fullUrl;
// // // //     if (imagePath.startsWith('/')) {
// // // //       fullUrl = `${mobile_siteConfig.IMAGE_BASE_URL}${imagePath}`;
// // // //     } else {
// // // //       fullUrl = `${mobile_siteConfig.IMAGE_BASE_URL}/${imagePath}`;
// // // //     }
    
// // // //     console.log('🖼️ Constructed URL:', fullUrl);
// // // //     return fullUrl;
// // // //   };

// // // //   // ✅ FIXED: Improved video URL helper function
// // // //   const getVideoUrl = (videoPath) => {
// // // //     if (!videoPath) return null;
    
// // // //     if (videoPath.startsWith('http')) {
// // // //       return videoPath;
// // // //     }
    
// // // //     // ✅ FIXED: Properly construct video URL
// // // //     if (videoPath.startsWith('/')) {
// // // //       return `${mobile_siteConfig.IMAGE_BASE_URL}${videoPath}`;
// // // //     } else {
// // // //       return `${mobile_siteConfig.IMAGE_BASE_URL}/${videoPath}`;
// // // //     }
// // // //   };

// // // //   // Format duration
// // // //   const formatDuration = (seconds) => {
// // // //     if (!seconds) return '0:00';
// // // //     const mins = Math.floor(seconds / 60);
// // // //     const secs = Math.floor(seconds % 60);
// // // //     return `${mins}:${secs.toString().padStart(2, '0')}`;
// // // //   };

// // // //   // Format views
// // // //   const formatViews = (views) => {
// // // //     if (!views) return '0 views';
// // // //     if (views >= 1000000) {
// // // //       return `${(views / 1000000).toFixed(1)}M views`;
// // // //     } else if (views >= 1000) {
// // // //       return `${(views / 1000).toFixed(1)}K views`;
// // // //     }
// // // //     return `${views} views`;
// // // //   };

// // // //   // Format date
// // // //   const formatDate = (dateString) => {
// // // //     if (!dateString) return 'Recently';
    
// // // //     const date = new Date(dateString);
// // // //     const now = new Date();
// // // //     const diffTime = Math.abs(now - date);
// // // //     const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
// // // //     if (diffDays === 1) return '1 day ago';
// // // //     if (diffDays < 7) return `${diffDays} days ago`;
// // // //     if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
// // // //     if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
// // // //     return `${Math.floor(diffDays / 365)} years ago`;
// // // //   };

// // // //   // ✅ FIXED: Improved load videos function with better logging
// // // //   const loadVideos = async (page = 1, isRefresh = false) => {
// // // //     try {
// // // //       if (isRefresh) {
// // // //         setRefreshing(true);
// // // //       } else if (page === 1) {
// // // //         setLoading(true);
// // // //       } else {
// // // //         setLoadingMore(true);
// // // //       }

// // // //       console.log('🎬 Loading videos, page:', page);
      
// // // //       const response = await getVideos(page, 20, 'smart');
      
// // // //       console.log('🎬 Videos API Response:', JSON.stringify(response, null, 2));
      
// // // //       if (response && response.success) {
// // // //         const videosData = response.data?.videos || [];
// // // //         const pagination = response.data?.pagination;
        
// // // //         console.log('🎬 Videos found:', videosData.length);
        
// // // //         // ✅ FIXED: Better data transformation with thumbnail debugging
// // // //         const transformedVideos = videosData.map((video, index) => {
// // // //           console.log(`🎬 Video ${index} original thumbnail:`, video.thumbnail);
          
// // // //           const thumbnailUrl = getImageUrl(video.thumbnail);
// // // //           const avatarUrl = getImageUrl(video.artist?.profilePic);
// // // //           const videoUrl = getVideoUrl(video.videoFile);
          
// // // //           console.log(`🎬 Video ${index} final thumbnail URL:`, thumbnailUrl);
// // // //           console.log(`🎬 Video ${index} final avatar URL:`, avatarUrl);
// // // //           console.log(`🎬 Video ${index} final video URL:`, videoUrl);
          
// // // //           return {
// // // //             id: video.id?.toString() || `video-${index}`,
// // // //             title: video.title || 'Untitled Video',
// // // //             channel: video.artist?.name || 'Unknown Artist',
// // // //             views: video.views || video.stats?.views || 0,
// // // //             duration: video.duration || 0,
// // // //             uploadTime: formatDate(video.createdAt),
// // // //             thumbnail: thumbnailUrl,
// // // //             avatar: avatarUrl,
// // // //             videoUrl: videoUrl,
// // // //             likes: video.stats?.likes || 0,
// // // //             description: video.description || 'No description available',
// // // //             isVerified: video.artist?.isVerified || false,
// // // //             followers: video.artist?.followers || 0,
// // // //             language: video.language?.name,
// // // //             mood: video.mood?.name,
// // // //             genre: video.genre?.name,
// // // //             artist: video.artist,
// // // //             originalData: video // Keep original for debugging
// // // //           };
// // // //         });
        
// // // //         if (page === 1) {
// // // //           setVideos(transformedVideos);
// // // //         } else {
// // // //           setVideos(prevVideos => [...prevVideos, ...transformedVideos]);
// // // //         }
        
// // // //         // Update pagination
// // // //         if (pagination) {
// // // //           setHasMore(pagination.hasNextPage || false);
// // // //           setCurrentPage(pagination.page || page);
// // // //         } else {
// // // //           setHasMore(false);
// // // //         }
        
// // // //       } else {
// // // //         console.log('❌ Videos API not successful');
// // // //         if (page === 1) {
// // // //           setVideos([]);
// // // //         }
// // // //       }
// // // //     } catch (error) {
// // // //       console.error('❌ Load videos error:', error);
// // // //       Alert.alert('Error', 'Failed to load videos');
// // // //       if (page === 1) {
// // // //         setVideos([]);
// // // //       }
// // // //     } finally {
// // // //       setLoading(false);
// // // //       setRefreshing(false);
// // // //       setLoadingMore(false);
// // // //     }
// // // //   };

// // // //   useEffect(() => {
// // // //     loadVideos(1);
// // // //   }, []);

// // // //   const onRefresh = async () => {
// // // //     console.log('🔄 Refreshing videos...');
// // // //     setCurrentPage(1);
// // // //     setHasMore(true);
// // // //     await loadVideos(1, true);
// // // //   };

// // // //   const loadMoreVideos = () => {
// // // //     if (hasMore && !loadingMore) {
// // // //       console.log('📥 Loading more videos, page:', currentPage + 1);
// // // //       loadVideos(currentPage + 1);
// // // //     }
// // // //   };

// // // //   // ✅ FIXED: Improved image error handling
// // // //   const handleImageError = (error, imageType, videoTitle) => {
// // // //     console.log(`❌ ${imageType} load error for:`, videoTitle);
// // // //     console.log('Error details:', error.nativeEvent);
// // // //   };

// // // //   const handleVideoPress = (video) => {
// // // //     console.log('🎬 Playing video:', video.title);
// // // //     console.log('🎬 Video URL:', video.videoUrl);
// // // //     console.log('🎬 Thumbnail URL:', video.thumbnail);
    
// // // //     if (!video.videoUrl) {
// // // //       Alert.alert('Error', 'Video URL not available');
// // // //       return;
// // // //     }
    
// // // //     navigation.navigate('VideoPlayerScreen', {
// // // //       videoData: video
// // // //     });
// // // //   };

// // // //   const renderVideoItem = ({ item, index }) => (
// // // //     <TouchableOpacity 
// // // //       style={styles.videoItem}
// // // //       onPress={() => handleVideoPress(item)}
// // // //       activeOpacity={0.8}
// // // //     >
// // // //       {/* Thumbnail with Duration */}
// // // //       <View style={styles.thumbnailContainer}>
// // // //         <Image 
// // // //           source={{ uri: item.thumbnail }}
// // // //           style={styles.thumbnail}
// // // //           resizeMode="cover"
// // // //           onError={(error) => handleImageError(error, 'Thumbnail', item.title)}
// // // //           onLoadStart={() => console.log('🔄 Thumbnail loading started:', item.title)}
// // // //           onLoadEnd={() => console.log('✅ Thumbnail loading ended:', item.title)}
// // // //           onLoad={() => console.log('🎉 Thumbnail loaded successfully:', item.title)}
// // // //         />
        
// // // //         {/* Fallback if thumbnail fails to load */}
// // // //         <View style={styles.thumbnailFallback}>
// // // //           <Icon name="videocam" size={40} color="#666" />
// // // //           <Text style={styles.fallbackText}>No Thumbnail</Text>
// // // //         </View>
        
// // // //         <View style={styles.durationBadge}>
// // // //           <Text style={styles.durationText}>{formatDuration(item.duration)}</Text>
// // // //         </View>
        
// // // //         {/* Play Button Overlay */}
// // // //         <View style={styles.playButtonOverlay}>
// // // //           <View style={styles.playIconCircle}>
// // // //             <Icon name="play-arrow" size={30} color="#fff" />
// // // //           </View>
// // // //         </View>
// // // //       </View>

// // // //       {/* Video Info */}
// // // //       <View style={styles.videoInfo}>
// // // //         <View style={styles.avatarContainer}>
// // // //           <Image 
// // // //             source={{ uri: item.avatar }}
// // // //             style={styles.channelAvatar}
// // // //             resizeMode="cover"
// // // //             onError={(error) => handleImageError(error, 'Avatar', item.channel)}
// // // //           />
// // // //           {/* Avatar fallback */}
// // // //           <View style={styles.avatarFallback}>
// // // //             <Text style={styles.avatarFallbackText}>
// // // //               {item.channel ? item.channel.charAt(0).toUpperCase() : 'U'}
// // // //             </Text>
// // // //           </View>
// // // //         </View>
// // // //         <View style={styles.videoDetails}>
// // // //           <Text style={styles.videoTitle} numberOfLines={2}>
// // // //             {item.title}
// // // //           </Text>
// // // //           <View style={styles.channelInfo}>
// // // //             <Text style={styles.channelName}>
// // // //               {item.channel}
// // // //             </Text>
// // // //             {item.isVerified && (
// // // //               <Ionicons name="checkmark-circle" size={14} color="#3EA6FF" style={styles.verifiedIcon} />
// // // //             )}
// // // //           </View>
// // // //           <View style={styles.videoMeta}>
// // // //             <View style={styles.viewsContainer}>
// // // //               <Ionicons name="eye" size={14} color="#aaa" />
// // // //               <Text style={styles.viewsText}>{formatViews(item.views)}</Text>
// // // //             </View>
            
// // // //             <Text style={styles.uploadTime}>
// // // //               {item.uploadTime}
// // // //             </Text>
// // // //           </View>
// // // //         </View>
// // // //       </View>
// // // //     </TouchableOpacity>
// // // //   );

// // // //   const renderFooter = () => {
// // // //     if (!loadingMore) return null;
    
// // // //     return (
// // // //       <View style={styles.loadingMoreContainer}>
// // // //         <ActivityIndicator size="small" color="#FF0000" />
// // // //         <Text style={styles.loadingMoreText}>Loading more videos...</Text>
// // // //       </View>
// // // //     );
// // // //   };

// // // //   const renderEmptyState = () => (
// // // //     <View style={styles.emptyState}>
// // // //       <View style={styles.emptyIcon}>
// // // //         <Icon name="videocam-off" size={64} color="#666" />
// // // //       </View>
// // // //       <Text style={styles.emptyStateTitle}>No videos available</Text>
// // // //       <Text style={styles.emptyStateText}>
// // // //         Check back later for new video content
// // // //       </Text>
// // // //       <TouchableOpacity 
// // // //         style={styles.retryButton}
// // // //         onPress={onRefresh}
// // // //       >
// // // //         <Text style={styles.retryButtonText}>Try Again</Text>
// // // //       </TouchableOpacity>
// // // //     </View>
// // // //   );

// // // //   // ✅ ADDED: Debug component to show current URLs
// // // //   const DebugInfo = () => (
// // // //     <View style={styles.debugContainer}>
// // // //       <Text style={styles.debugTitle}>Debug Info:</Text>
// // // //       <Text style={styles.debugText}>Base URL: {mobile_siteConfig.IMAGE_BASE_URL}</Text>
// // // //       <Text style={styles.debugText}>Videos Count: {videos.length}</Text>
// // // //       {videos.length > 0 && (
// // // //         <>
// // // //           <Text style={styles.debugText}>First Video Thumbnail: {videos[0].thumbnail}</Text>
// // // //           <Text style={styles.debugText}>First Video Avatar: {videos[0].avatar}</Text>
// // // //         </>
// // // //       )}
// // // //     </View>
// // // //   );

// // // //   return (
// // // //     <SafeAreaView style={styles.container}>
// // // //       <StatusBar barStyle="light-content" backgroundColor="#0f0f0f" />
      
// // // //       {/* Header */}
// // // //       <View style={styles.header}>
// // // //         <View style={styles.headerLeft}>
// // // //           <Text style={styles.headerTitle}>Videos</Text>
// // // //         </View>
// // // //         <View style={styles.headerRight}>
// // // //           <TouchableOpacity 
// // // //             style={styles.iconButton}
// // // //             onPress={() => navigation.navigate('SearchScreen')}
// // // //           >
// // // //             <Feather name="search" size={22} color="#fff" />
// // // //           </TouchableOpacity>
// // // //         </View>
// // // //       </View>

// // // //       {/* Debug Info - Remove in production */}
// // // //       {__DEV__ && <DebugInfo />}

// // // //       {loading ? (
// // // //         <View style={styles.loadingContainer}>
// // // //           <ActivityIndicator size="large" color="#FF0000" />
// // // //           <Text style={styles.loadingText}>Loading videos...</Text>
// // // //         </View>
// // // //       ) : (
// // // //         <FlatList
// // // //           data={videos}
// // // //           renderItem={renderVideoItem}
// // // //           keyExtractor={item => item.id}
// // // //           showsVerticalScrollIndicator={false}
// // // //           contentContainerStyle={styles.videosList}
// // // //           refreshControl={
// // // //             <RefreshControl
// // // //               refreshing={refreshing}
// // // //               onRefresh={onRefresh}
// // // //               colors={['#FF0000']}
// // // //               tintColor="#FF0000"
// // // //             />
// // // //           }
// // // //           ListEmptyComponent={renderEmptyState}
// // // //           ListFooterComponent={renderFooter}
// // // //           onEndReached={loadMoreVideos}
// // // //           onEndReachedThreshold={0.5}
// // // //         />
// // // //       )}
// // // //     </SafeAreaView>
// // // //   );
// // // // };

// // // // const styles = StyleSheet.create({
// // // //   container: {
// // // //     flex: 1,
// // // //     backgroundColor: '#0f0f0f',
// // // //   },
// // // //   header: {
// // // //     flexDirection: 'row',
// // // //     justifyContent: 'space-between',
// // // //     alignItems: 'center',
// // // //     paddingHorizontal: 16,
// // // //     paddingVertical: 12,
// // // //     borderBottomWidth: 1,
// // // //     borderBottomColor: '#272727',
// // // //   },
// // // //   headerLeft: {
// // // //     flex: 1,
// // // //   },
// // // //   headerTitle: {
// // // //     color: '#fff',
// // // //     fontSize: 22,
// // // //     fontWeight: 'bold',
// // // //   },
// // // //   headerRight: {
// // // //     flexDirection: 'row',
// // // //     alignItems: 'center',
// // // //   },
// // // //   iconButton: {
// // // //     padding: 8,
// // // //   },
// // // //   loadingContainer: {
// // // //     flex: 1,
// // // //     justifyContent: 'center',
// // // //     alignItems: 'center',
// // // //   },
// // // //   loadingText: {
// // // //     color: '#fff',
// // // //     marginTop: 16,
// // // //     fontSize: 16,
// // // //   },
// // // //   videosList: {
// // // //     paddingBottom: 16,
// // // //   },
// // // //   videoItem: {
// // // //     marginBottom: 16,
// // // //   },
// // // //   thumbnailContainer: {
// // // //     position: 'relative',
// // // //   },
// // // //   thumbnail: {
// // // //     width: '100%',
// // // //     height: 200,
// // // //     backgroundColor: '#272727',
// // // //   },
// // // //   // ✅ ADDED: Thumbnail fallback styles
// // // //   thumbnailFallback: {
// // // //     position: 'absolute',
// // // //     top: 0,
// // // //     left: 0,
// // // //     right: 0,
// // // //     bottom: 0,
// // // //     backgroundColor: '#272727',
// // // //     justifyContent: 'center',
// // // //     alignItems: 'center',
// // // //     zIndex: -1, // Behind the actual image
// // // //   },
// // // //   fallbackText: {
// // // //     color: '#666',
// // // //     marginTop: 8,
// // // //     fontSize: 14,
// // // //   },
// // // //   durationBadge: {
// // // //     position: 'absolute',
// // // //     bottom: 8,
// // // //     right: 8,
// // // //     backgroundColor: 'rgba(0,0,0,0.8)',
// // // //     paddingHorizontal: 6,
// // // //     paddingVertical: 2,
// // // //     borderRadius: 4,
// // // //     zIndex: 2,
// // // //   },
// // // //   durationText: {
// // // //     color: '#fff',
// // // //     fontSize: 12,
// // // //     fontWeight: '500',
// // // //   },
// // // //   playButtonOverlay: {
// // // //     ...StyleSheet.absoluteFillObject,
// // // //     justifyContent: 'center',
// // // //     alignItems: 'center',
// // // //     backgroundColor: 'rgba(0,0,0,0.3)',
// // // //     zIndex: 1,
// // // //   },
// // // //   playIconCircle: {
// // // //     width: 60,
// // // //     height: 60,
// // // //     borderRadius: 30,
// // // //     backgroundColor: 'rgba(255,0,0,0.8)',
// // // //     justifyContent: 'center',
// // // //     alignItems: 'center',
// // // //   },
// // // //   videoInfo: {
// // // //     flexDirection: 'row',
// // // //     paddingHorizontal: 16,
// // // //     paddingTop: 12,
// // // //   },
// // // //   // ✅ ADDED: Avatar container for fallback
// // // //   avatarContainer: {
// // // //     position: 'relative',
// // // //     marginRight: 12,
// // // //   },
// // // //   channelAvatar: {
// // // //     width: 36,
// // // //     height: 36,
// // // //     borderRadius: 18,
// // // //     backgroundColor: '#333',
// // // //   },
// // // //   // ✅ ADDED: Avatar fallback
// // // //   avatarFallback: {
// // // //     position: 'absolute',
// // // //     top: 0,
// // // //     left: 0,
// // // //     width: 36,
// // // //     height: 36,
// // // //     borderRadius: 18,
// // // //     backgroundColor: '#FF0000',
// // // //     justifyContent: 'center',
// // // //     alignItems: 'center',
// // // //     zIndex: -1,
// // // //   },
// // // //   avatarFallbackText: {
// // // //     color: '#fff',
// // // //     fontSize: 16,
// // // //     fontWeight: 'bold',
// // // //   },
// // // //   videoDetails: {
// // // //     flex: 1,
// // // //   },
// // // //   videoTitle: {
// // // //     color: '#fff',
// // // //     fontSize: 16,
// // // //     fontWeight: '500',
// // // //     marginBottom: 6,
// // // //     lineHeight: 20,
// // // //   },
// // // //   channelInfo: {
// // // //     flexDirection: 'row',
// // // //     alignItems: 'center',
// // // //     marginBottom: 6,
// // // //   },
// // // //   channelName: {
// // // //     color: '#aaa',
// // // //     fontSize: 14,
// // // //   },
// // // //   verifiedIcon: {
// // // //     marginLeft: 4,
// // // //   },
// // // //   videoMeta: {
// // // //     flexDirection: 'row',
// // // //     justifyContent: 'space-between',
// // // //     alignItems: 'center',
// // // //   },
// // // //   viewsContainer: {
// // // //     flexDirection: 'row',
// // // //     alignItems: 'center',
// // // //   },
// // // //   viewsText: {
// // // //     color: '#aaa',
// // // //     fontSize: 13,
// // // //     marginLeft: 4,
// // // //   },
// // // //   uploadTime: {
// // // //     color: '#aaa',
// // // //     fontSize: 13,
// // // //   },
// // // //   loadingMoreContainer: {
// // // //     flexDirection: 'row',
// // // //     justifyContent: 'center',
// // // //     alignItems: 'center',
// // // //     padding: 20,
// // // //   },
// // // //   loadingMoreText: {
// // // //     color: '#aaa',
// // // //     marginLeft: 10,
// // // //     fontSize: 14,
// // // //   },
// // // //   emptyState: {
// // // //     alignItems: 'center',
// // // //     paddingVertical: 60,
// // // //     paddingHorizontal: 20,
// // // //   },
// // // //   emptyIcon: {
// // // //     width: 100,
// // // //     height: 100,
// // // //     borderRadius: 50,
// // // //     backgroundColor: 'rgba(255,255,255,0.05)',
// // // //     justifyContent: 'center',
// // // //     alignItems: 'center',
// // // //     marginBottom: 20,
// // // //   },
// // // //   emptyStateTitle: {
// // // //     fontSize: 18,
// // // //     fontWeight: 'bold',
// // // //     color: '#fff',
// // // //     marginBottom: 8,
// // // //     textAlign: 'center',
// // // //   },
// // // //   emptyStateText: {
// // // //     fontSize: 14,
// // // //     color: '#b3b3b3',
// // // //     textAlign: 'center',
// // // //     lineHeight: 20,
// // // //     marginBottom: 20,
// // // //   },
// // // //   retryButton: {
// // // //     backgroundColor: '#FF0000',
// // // //     paddingHorizontal: 20,
// // // //     paddingVertical: 10,
// // // //     borderRadius: 8,
// // // //   },
// // // //   retryButtonText: {
// // // //     color: '#fff',
// // // //     fontSize: 16,
// // // //     fontWeight: '500',
// // // //   },
// // // //   // ✅ ADDED: Debug styles
// // // //   debugContainer: {
// // // //     backgroundColor: '#1a1a1a',
// // // //     padding: 10,
// // // //     margin: 10,
// // // //     borderRadius: 8,
// // // //     borderLeftWidth: 4,
// // // //     borderLeftColor: '#FF0000',
// // // //   },
// // // //   debugTitle: {
// // // //     color: '#FF0000',
// // // //     fontWeight: 'bold',
// // // //     marginBottom: 5,
// // // //   },
// // // //   debugText: {
// // // //     color: '#fff',
// // // //     fontSize: 12,
// // // //     marginBottom: 2,
// // // //   },
// // // // });

// // // // export default VideosScreen;

// // // // // screens/VideosScreen.js - FINAL CLEAN VERSION
// // // // import React, { useState, useEffect } from 'react';
// // // // import {
// // // //   View,
// // // //   Text,
// // // //   StyleSheet,
// // // //   SafeAreaView,
// // // //   StatusBar,
// // // //   FlatList,
// // // //   TouchableOpacity,
// // // //   Image,
// // // //   Dimensions,
// // // //   ActivityIndicator,
// // // //   RefreshControl,
// // // //   Alert
// // // // } from 'react-native';
// // // // import Icon from 'react-native-vector-icons/MaterialIcons';
// // // // import Feather from 'react-native-vector-icons/Feather';
// // // // import Ionicons from 'react-native-vector-icons/Ionicons';
// // // // import { getVideos } from '../Services/mobile-api';
// // // // import { mobile_siteConfig } from '../Services/mobile-siteConfig';

// // // // const { width } = Dimensions.get('window');

// // // // const VideosScreen = ({ navigation }) => {
// // // //   const [videos, setVideos] = useState([]);
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [refreshing, setRefreshing] = useState(false);
// // // //   const [currentPage, setCurrentPage] = useState(1);
// // // //   const [hasMore, setHasMore] = useState(true);
// // // //   const [loadingMore, setLoadingMore] = useState(false);

// // // //   // Image URL helper function
// // // //   const getImageUrl = (imagePath) => {
// // // //     if (!imagePath) {
// // // //       return null;
// // // //     }
    
// // // //     if (imagePath.startsWith('http')) {
// // // //       return imagePath;
// // // //     }
    
// // // //     let fullUrl;
// // // //     if (imagePath.startsWith('/')) {
// // // //       fullUrl = `${mobile_siteConfig.IMAGE_BASE_URL}${imagePath}`;
// // // //     } else {
// // // //       fullUrl = `${mobile_siteConfig.IMAGE_BASE_URL}/${imagePath}`;
// // // //     }
    
// // // //     return fullUrl;
// // // //   };

// // // //   // Video URL helper function
// // // //   const getVideoUrl = (videoPath) => {
// // // //     if (!videoPath) return null;
    
// // // //     if (videoPath.startsWith('http')) {
// // // //       return videoPath;
// // // //     }
    
// // // //     if (videoPath.startsWith('/')) {
// // // //       return `${mobile_siteConfig.IMAGE_BASE_URL}${videoPath}`;
// // // //     } else {
// // // //       return `${mobile_siteConfig.IMAGE_BASE_URL}/${videoPath}`;
// // // //     }
// // // //   };

// // // //   // Format duration
// // // //   const formatDuration = (seconds) => {
// // // //     if (!seconds) return '0:00';
// // // //     const mins = Math.floor(seconds / 60);
// // // //     const secs = Math.floor(seconds % 60);
// // // //     return `${mins}:${secs.toString().padStart(2, '0')}`;
// // // //   };

// // // //   // Format views
// // // //   const formatViews = (views) => {
// // // //     if (!views) return '0 views';
// // // //     if (views >= 1000000) {
// // // //       return `${(views / 1000000).toFixed(1)}M views`;
// // // //     } else if (views >= 1000) {
// // // //       return `${(views / 1000).toFixed(1)}K views`;
// // // //     }
// // // //     return `${views} views`;
// // // //   };

// // // //   // Format date
// // // //   const formatDate = (dateString) => {
// // // //     if (!dateString) return 'Recently';
    
// // // //     const date = new Date(dateString);
// // // //     const now = new Date();
// // // //     const diffTime = Math.abs(now - date);
// // // //     const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
// // // //     if (diffDays === 1) return '1 day ago';
// // // //     if (diffDays < 7) return `${diffDays} days ago`;
// // // //     if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
// // // //     if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
// // // //     return `${Math.floor(diffDays / 365)} years ago`;
// // // //   };

// // // //   // Load videos from API
// // // //   const loadVideos = async (page = 1, isRefresh = false) => {
// // // //     try {
// // // //       if (isRefresh) {
// // // //         setRefreshing(true);
// // // //       } else if (page === 1) {
// // // //         setLoading(true);
// // // //       } else {
// // // //         setLoadingMore(true);
// // // //       }

// // // //       const response = await getVideos(page, 20, 'smart');
      
// // // //       if (response && response.success) {
// // // //         const videosData = response.data?.videos || [];
// // // //         const pagination = response.data?.pagination;
        
// // // //         const transformedVideos = videosData.map((video) => {
// // // //           const thumbnailUrl = getImageUrl(video.thumbnail);
// // // //           const avatarUrl = getImageUrl(video.artist?.profilePic);
// // // //           const videoUrl = getVideoUrl(video.videoFile);
          
// // // //           return {
// // // //             id: video.id?.toString() || `video-${Math.random()}`,
// // // //             title: video.title || 'Untitled Video',
// // // //             channel: video.artist?.name || 'Unknown Artist',
// // // //             views: video.views || video.stats?.views || 0,
// // // //             duration: video.duration || 0,
// // // //             uploadTime: formatDate(video.createdAt),
// // // //             thumbnail: thumbnailUrl,
// // // //             avatar: avatarUrl,
// // // //             videoUrl: videoUrl,
// // // //             likes: video.stats?.likes || 0,
// // // //             description: video.description || 'No description available',
// // // //             isVerified: video.artist?.isVerified || false,
// // // //             followers: video.artist?.followers || 0,
// // // //             language: video.language?.name,
// // // //             mood: video.mood?.name,
// // // //             genre: video.genre?.name,
// // // //             artist: video.artist,
// // // //           };
// // // //         });
        
// // // //         if (page === 1) {
// // // //           setVideos(transformedVideos);
// // // //         } else {
// // // //           setVideos(prevVideos => [...prevVideos, ...transformedVideos]);
// // // //         }
        
// // // //         if (pagination) {
// // // //           setHasMore(pagination.hasNextPage || false);
// // // //           setCurrentPage(pagination.page || page);
// // // //         } else {
// // // //           setHasMore(false);
// // // //         }
        
// // // //       } else {
// // // //         throw new Error(response?.message || 'Failed to load videos');
// // // //       }
// // // //     } catch (error) {
// // // //       console.error('Load videos error:', error);
// // // //       if (page === 1) {
// // // //         setVideos([]);
// // // //       }
// // // //     } finally {
// // // //       setLoading(false);
// // // //       setRefreshing(false);
// // // //       setLoadingMore(false);
// // // //     }
// // // //   };

// // // //   useEffect(() => {
// // // //     loadVideos(1);
// // // //   }, []);

// // // //   const onRefresh = async () => {
// // // //     setCurrentPage(1);
// // // //     setHasMore(true);
// // // //     await loadVideos(1, true);
// // // //   };

// // // //   const loadMoreVideos = () => {
// // // //     if (hasMore && !loadingMore) {
// // // //       loadVideos(currentPage + 1);
// // // //     }
// // // //   };

// // // //   const handleVideoPress = (video) => {
// // // //     if (!video.videoUrl) {
// // // //       Alert.alert('Error', 'Video URL not available');
// // // //       return;
// // // //     }
    
// // // //     navigation.navigate('VideoPlayerScreen', {
// // // //       videoData: video
// // // //     });
// // // //   };

// // // //   const renderVideoItem = ({ item }) => (
// // // //     <TouchableOpacity 
// // // //       style={styles.videoItem}
// // // //       onPress={() => handleVideoPress(item)}
// // // //       activeOpacity={0.8}
// // // //     >
// // // //       {/* Thumbnail with Duration */}
// // // //       <View style={styles.thumbnailContainer}>
// // // //         <Image 
// // // //           source={{ uri: item.thumbnail }}
// // // //           style={styles.thumbnail}
// // // //           resizeMode="cover"
// // // //         />
        
// // // //         {/* Fallback if thumbnail fails to load */}
// // // //         <View style={styles.thumbnailFallback}>
// // // //           <Icon name="videocam" size={40} color="#666" />
// // // //           <Text style={styles.fallbackText}>No Thumbnail</Text>
// // // //         </View>
        
// // // //         <View style={styles.durationBadge}>
// // // //           <Text style={styles.durationText}>{formatDuration(item.duration)}</Text>
// // // //         </View>
        
// // // //         {/* Play Button Overlay */}
// // // //         <View style={styles.playButtonOverlay}>
// // // //           <View style={styles.playIconCircle}>
// // // //             <Icon name="play-arrow" size={30} color="#fff" />
// // // //           </View>
// // // //         </View>
// // // //       </View>

// // // //       {/* Video Info */}
// // // //       <View style={styles.videoInfo}>
// // // //         <View style={styles.avatarContainer}>
// // // //           <Image 
// // // //             source={{ uri: item.avatar }}
// // // //             style={styles.channelAvatar}
// // // //             resizeMode="cover"
// // // //           />
// // // //           {/* Avatar fallback */}
// // // //           <View style={styles.avatarFallback}>
// // // //             <Text style={styles.avatarFallbackText}>
// // // //               {item.channel ? item.channel.charAt(0).toUpperCase() : 'U'}
// // // //             </Text>
// // // //           </View>
// // // //         </View>
// // // //         <View style={styles.videoDetails}>
// // // //           <Text style={styles.videoTitle} numberOfLines={2}>
// // // //             {item.title}
// // // //           </Text>
// // // //           <View style={styles.channelInfo}>
// // // //             <Text style={styles.channelName}>
// // // //               {item.channel}
// // // //             </Text>
// // // //             {item.isVerified && (
// // // //               <Ionicons name="checkmark-circle" size={14} color="#3EA6FF" style={styles.verifiedIcon} />
// // // //             )}
// // // //           </View>
// // // //           <View style={styles.videoMeta}>
// // // //             <View style={styles.viewsContainer}>
// // // //               <Ionicons name="eye" size={14} color="#aaa" />
// // // //               <Text style={styles.viewsText}>{formatViews(item.views)}</Text>
// // // //             </View>
            
// // // //             <Text style={styles.uploadTime}>
// // // //               {item.uploadTime}
// // // //             </Text>
// // // //           </View>
// // // //         </View>
// // // //       </View>
// // // //     </TouchableOpacity>
// // // //   );

// // // //   const renderFooter = () => {
// // // //     if (!loadingMore) return null;
    
// // // //     return (
// // // //       <View style={styles.loadingMoreContainer}>
// // // //         <ActivityIndicator size="small" color="#FF0000" />
// // // //         <Text style={styles.loadingMoreText}>Loading more videos...</Text>
// // // //       </View>
// // // //     );
// // // //   };

// // // //   const renderEmptyState = () => (
// // // //     <View style={styles.emptyState}>
// // // //       <View style={styles.emptyIcon}>
// // // //         <Icon name="videocam-off" size={64} color="#666" />
// // // //       </View>
// // // //       <Text style={styles.emptyStateTitle}>No videos available</Text>
// // // //       <Text style={styles.emptyStateText}>
// // // //         Check back later for new video content
// // // //       </Text>
// // // //       <TouchableOpacity 
// // // //         style={styles.retryButton}
// // // //         onPress={onRefresh}
// // // //       >
// // // //         <Text style={styles.retryButtonText}>Try Again</Text>
// // // //       </TouchableOpacity>
// // // //     </View>
// // // //   );

// // // //   return (
// // // //     <SafeAreaView style={styles.container}>
// // // //       <StatusBar barStyle="light-content" backgroundColor="#0f0f0f" />
      
// // // //       {/* Header */}
// // // //       <View style={styles.header}>
// // // //         <View style={styles.headerLeft}>
// // // //           <Text style={styles.headerTitle}>Videos</Text>
// // // //         </View>
// // // //         <View style={styles.headerRight}>
// // // //           <TouchableOpacity 
// // // //             style={styles.iconButton}
// // // //             onPress={() => navigation.navigate('SearchScreen')}
// // // //           >
// // // //             <Feather name="search" size={22} color="#fff" />
// // // //           </TouchableOpacity>
// // // //         </View>
// // // //       </View>

// // // //       {loading ? (
// // // //         <View style={styles.loadingContainer}>
// // // //           <ActivityIndicator size="large" color="#FF0000" />
// // // //           <Text style={styles.loadingText}>Loading videos...</Text>
// // // //         </View>
// // // //       ) : (
// // // //         <FlatList
// // // //           data={videos}
// // // //           renderItem={renderVideoItem}
// // // //           keyExtractor={item => item.id}
// // // //           showsVerticalScrollIndicator={false}
// // // //           contentContainerStyle={styles.videosList}
// // // //           refreshControl={
// // // //             <RefreshControl
// // // //               refreshing={refreshing}
// // // //               onRefresh={onRefresh}
// // // //               colors={['#FF0000']}
// // // //               tintColor="#FF0000"
// // // //             />
// // // //           }
// // // //           ListEmptyComponent={renderEmptyState}
// // // //           ListFooterComponent={renderFooter}
// // // //           onEndReached={loadMoreVideos}
// // // //           onEndReachedThreshold={0.5}
// // // //         />
// // // //       )}
// // // //     </SafeAreaView>
// // // //   );
// // // // };

// // // // const styles = StyleSheet.create({
// // // //   container: {
// // // //     flex: 1,
// // // //     backgroundColor: '#0f0f0f',
// // // //   },
// // // //   header: {
// // // //     flexDirection: 'row',
// // // //     justifyContent: 'space-between',
// // // //     alignItems: 'center',
// // // //     paddingHorizontal: 16,
// // // //     paddingVertical: 12,
// // // //     borderBottomWidth: 1,
// // // //     borderBottomColor: '#272727',
// // // //   },
// // // //   headerLeft: {
// // // //     flex: 1,
// // // //   },
// // // //   headerTitle: {
// // // //     color: '#fff',
// // // //     fontSize: 22,
// // // //     fontWeight: 'bold',
// // // //   },
// // // //   headerRight: {
// // // //     flexDirection: 'row',
// // // //     alignItems: 'center',
// // // //   },
// // // //   iconButton: {
// // // //     padding: 8,
// // // //   },
// // // //   loadingContainer: {
// // // //     flex: 1,
// // // //     justifyContent: 'center',
// // // //     alignItems: 'center',
// // // //   },
// // // //   loadingText: {
// // // //     color: '#fff',
// // // //     marginTop: 16,
// // // //     fontSize: 16,
// // // //   },
// // // //   videosList: {
// // // //     paddingBottom: 16,
// // // //   },
// // // //   videoItem: {
// // // //     marginBottom: 16,
// // // //   },
// // // //   thumbnailContainer: {
// // // //     position: 'relative',
// // // //   },
// // // //   thumbnail: {
// // // //     width: '100%',
// // // //     height: 200,
// // // //     backgroundColor: '#272727',
// // // //   },
// // // //   thumbnailFallback: {
// // // //     position: 'absolute',
// // // //     top: 0,
// // // //     left: 0,
// // // //     right: 0,
// // // //     bottom: 0,
// // // //     backgroundColor: '#272727',
// // // //     justifyContent: 'center',
// // // //     alignItems: 'center',
// // // //     zIndex: -1,
// // // //   },
// // // //   fallbackText: {
// // // //     color: '#666',
// // // //     marginTop: 8,
// // // //     fontSize: 14,
// // // //   },
// // // //   durationBadge: {
// // // //     position: 'absolute',
// // // //     bottom: 8,
// // // //     right: 8,
// // // //     backgroundColor: 'rgba(0,0,0,0.8)',
// // // //     paddingHorizontal: 6,
// // // //     paddingVertical: 2,
// // // //     borderRadius: 4,
// // // //     zIndex: 2,
// // // //   },
// // // //   durationText: {
// // // //     color: '#fff',
// // // //     fontSize: 12,
// // // //     fontWeight: '500',
// // // //   },
// // // //   playButtonOverlay: {
// // // //     ...StyleSheet.absoluteFillObject,
// // // //     justifyContent: 'center',
// // // //     alignItems: 'center',
// // // //     backgroundColor: 'rgba(0,0,0,0.3)',
// // // //     zIndex: 1,
// // // //   },
// // // //   playIconCircle: {
// // // //     width: 60,
// // // //     height: 60,
// // // //     borderRadius: 30,
// // // //     backgroundColor: 'rgba(255,0,0,0.8)',
// // // //     justifyContent: 'center',
// // // //     alignItems: 'center',
// // // //   },
// // // //   videoInfo: {
// // // //     flexDirection: 'row',
// // // //     paddingHorizontal: 16,
// // // //     paddingTop: 12,
// // // //   },
// // // //   avatarContainer: {
// // // //     position: 'relative',
// // // //     marginRight: 12,
// // // //   },
// // // //   channelAvatar: {
// // // //     width: 36,
// // // //     height: 36,
// // // //     borderRadius: 18,
// // // //     backgroundColor: '#333',
// // // //   },
// // // //   avatarFallback: {
// // // //     position: 'absolute',
// // // //     top: 0,
// // // //     left: 0,
// // // //     width: 36,
// // // //     height: 36,
// // // //     borderRadius: 18,
// // // //     backgroundColor: '#FF0000',
// // // //     justifyContent: 'center',
// // // //     alignItems: 'center',
// // // //     zIndex: -1,
// // // //   },
// // // //   avatarFallbackText: {
// // // //     color: '#fff',
// // // //     fontSize: 16,
// // // //     fontWeight: 'bold',
// // // //   },
// // // //   videoDetails: {
// // // //     flex: 1,
// // // //   },
// // // //   videoTitle: {
// // // //     color: '#fff',
// // // //     fontSize: 16,
// // // //     fontWeight: '500',
// // // //     marginBottom: 6,
// // // //     lineHeight: 20,
// // // //   },
// // // //   channelInfo: {
// // // //     flexDirection: 'row',
// // // //     alignItems: 'center',
// // // //     marginBottom: 6,
// // // //   },
// // // //   channelName: {
// // // //     color: '#aaa',
// // // //     fontSize: 14,
// // // //   },
// // // //   verifiedIcon: {
// // // //     marginLeft: 4,
// // // //   },
// // // //   videoMeta: {
// // // //     flexDirection: 'row',
// // // //     justifyContent: 'space-between',
// // // //     alignItems: 'center',
// // // //   },
// // // //   viewsContainer: {
// // // //     flexDirection: 'row',
// // // //     alignItems: 'center',
// // // //   },
// // // //   viewsText: {
// // // //     color: '#aaa',
// // // //     fontSize: 13,
// // // //     marginLeft: 4,
// // // //   },
// // // //   uploadTime: {
// // // //     color: '#aaa',
// // // //     fontSize: 13,
// // // //   },
// // // //   loadingMoreContainer: {
// // // //     flexDirection: 'row',
// // // //     justifyContent: 'center',
// // // //     alignItems: 'center',
// // // //     padding: 20,
// // // //   },
// // // //   loadingMoreText: {
// // // //     color: '#aaa',
// // // //     marginLeft: 10,
// // // //     fontSize: 14,
// // // //   },
// // // //   emptyState: {
// // // //     alignItems: 'center',
// // // //     paddingVertical: 60,
// // // //     paddingHorizontal: 20,
// // // //   },
// // // //   emptyIcon: {
// // // //     width: 100,
// // // //     height: 100,
// // // //     borderRadius: 50,
// // // //     backgroundColor: 'rgba(255,255,255,0.05)',
// // // //     justifyContent: 'center',
// // // //     alignItems: 'center',
// // // //     marginBottom: 20,
// // // //   },
// // // //   emptyStateTitle: {
// // // //     fontSize: 18,
// // // //     fontWeight: 'bold',
// // // //     color: '#fff',
// // // //     marginBottom: 8,
// // // //     textAlign: 'center',
// // // //   },
// // // //   emptyStateText: {
// // // //     fontSize: 14,
// // // //     color: '#b3b3b3',
// // // //     textAlign: 'center',
// // // //     lineHeight: 20,
// // // //     marginBottom: 20,
// // // //   },
// // // //   retryButton: {
// // // //     backgroundColor: '#FF0000',
// // // //     paddingHorizontal: 20,
// // // //     paddingVertical: 10,
// // // //     borderRadius: 8,
// // // //   },
// // // //   retryButtonText: {
// // // //     color: '#fff',
// // // //     fontSize: 16,
// // // //     fontWeight: '500',
// // // //   },
// // // // });

// // // // export default VideosScreen;


// // // screens/VideosScreen.js - FINAL CLEAN VERSION
// // import React, { useState, useEffect } from 'react';
// // import {
// //   View,
// //   Text,
// //   StyleSheet,
// //   SafeAreaView,
// //   StatusBar,
// //   FlatList,
// //   TouchableOpacity,
// //   Image,
// //   Dimensions,
// //   ActivityIndicator,
// //   RefreshControl,
// //   Alert
// // } from 'react-native';
// // import Icon from 'react-native-vector-icons/MaterialIcons';
// // import Feather from 'react-native-vector-icons/Feather';
// // import Ionicons from 'react-native-vector-icons/Ionicons';
// // import { getVideos } from '../Services/mobile-api';
// // import { mobile_siteConfig } from '../Services/mobile-siteConfig';

// // const { width } = Dimensions.get('window');

// // const VideosScreen = ({ navigation }) => {
// //   const [videos, setVideos] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [refreshing, setRefreshing] = useState(false);
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const [hasMore, setHasMore] = useState(true);
// //   const [loadingMore, setLoadingMore] = useState(false);

// //   // Image URL helper function
// //   const getImageUrl = (imagePath) => {
// //     if (!imagePath) {
// //       return null;
// //     }
    
// //     if (imagePath.startsWith('http')) {
// //       return imagePath;
// //     }
    
// //     let fullUrl;
// //     if (imagePath.startsWith('/')) {
// //       fullUrl = `${mobile_siteConfig.IMAGE_BASE_URL}${imagePath}`;
// //     } else {
// //       fullUrl = `${mobile_siteConfig.IMAGE_BASE_URL}/${imagePath}`;
// //     }
    
// //     return fullUrl;
// //   };

// //   // Video URL helper function
// //   const getVideoUrl = (videoPath) => {
// //     if (!videoPath) return null;
    
// //     if (videoPath.startsWith('http')) {
// //       return videoPath;
// //     }
    
// //     if (videoPath.startsWith('/')) {
// //       return `${mobile_siteConfig.IMAGE_BASE_URL}${videoPath}`;
// //     } else {
// //       return `${mobile_siteConfig.IMAGE_BASE_URL}/${videoPath}`;
// //     }
// //   };

// //   // Format duration
// //   const formatDuration = (seconds) => {
// //     if (!seconds) return '0:00';
// //     const mins = Math.floor(seconds / 60);
// //     const secs = Math.floor(seconds % 60);
// //     return `${mins}:${secs.toString().padStart(2, '0')}`;
// //   };

// //   // Format views
// //   const formatViews = (views) => {
// //     if (!views) return '0 views';
// //     if (views >= 1000000) {
// //       return `${(views / 1000000).toFixed(1)}M views`;
// //     } else if (views >= 1000) {
// //       return `${(views / 1000).toFixed(1)}K views`;
// //     }
// //     return `${views} views`;
// //   };

// //   // Format date
// //   const formatDate = (dateString) => {
// //     if (!dateString) return 'Recently';
    
// //     const date = new Date(dateString);
// //     const now = new Date();
// //     const diffTime = Math.abs(now - date);
// //     const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
// //     if (diffDays === 1) return '1 day ago';
// //     if (diffDays < 7) return `${diffDays} days ago`;
// //     if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
// //     if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
// //     return `${Math.floor(diffDays / 365)} years ago`;
// //   };

// //   // Load videos from API
// //   const loadVideos = async (page = 1, isRefresh = false) => {
// //     try {
// //       if (isRefresh) {
// //         setRefreshing(true);
// //       } else if (page === 1) {
// //         setLoading(true);
// //       } else {
// //         setLoadingMore(true);
// //       }

// //       const response = await getVideos(page, 20, 'smart');
      
// //       if (response && response.success) {
// //         const videosData = response.data?.videos || [];
// //         const pagination = response.data?.pagination;
        
// //         const transformedVideos = videosData.map((video) => {
// //           const thumbnailUrl = getImageUrl(video.thumbnail);
// //           const avatarUrl = getImageUrl(video.artist?.profilePic);
// //           const videoUrl = getVideoUrl(video.videoFile);
          
// //           return {
// //             id: video.id?.toString() || `video-${Math.random()}`,
// //             title: video.title || 'Untitled Video',
// //             channel: video.artist?.name || 'Unknown Artist',
// //             views: video.views || video.stats?.views || 0,
// //             duration: video.duration || 0,
// //             uploadTime: formatDate(video.createdAt),
// //             thumbnail: thumbnailUrl,
// //             avatar: avatarUrl,
// //             videoUrl: videoUrl,
// //             likes: video.stats?.likes || 0,
// //             description: video.description || 'No description available',
// //             isVerified: video.artist?.isVerified || false,
// //             followers: video.artist?.followers || 0,
// //             language: video.language?.name,
// //             mood: video.mood?.name,
// //             genre: video.genre?.name,
// //             artist: video.artist,
// //           };
// //         });
        
// //         if (page === 1) {
// //           setVideos(transformedVideos);
// //         } else {
// //           setVideos(prevVideos => [...prevVideos, ...transformedVideos]);
// //         }
        
// //         if (pagination) {
// //           setHasMore(pagination.hasNextPage || false);
// //           setCurrentPage(pagination.page || page);
// //         } else {
// //           setHasMore(false);
// //         }
        
// //       } else {
// //         throw new Error(response?.message || 'Failed to load videos');
// //       }
// //     } catch (error) {
// //       console.error('Load videos error:', error);
// //       if (page === 1) {
// //         setVideos([]);
// //       }
// //     } finally {
// //       setLoading(false);
// //       setRefreshing(false);
// //       setLoadingMore(false);
// //     }
// //   };

// //   useEffect(() => {
// //     loadVideos(1);
// //   }, []);

// //   const onRefresh = async () => {
// //     setCurrentPage(1);
// //     setHasMore(true);
// //     await loadVideos(1, true);
// //   };

// //   const loadMoreVideos = () => {
// //     if (hasMore && !loadingMore) {
// //       loadVideos(currentPage + 1);
// //     }
// //   };

// //   const handleVideoPress = (video) => {
// //     if (!video.videoUrl) {
// //       Alert.alert('Error', 'Video URL not available');
// //       return;
// //     }
    
// //     navigation.navigate('VideoPlayerScreen', {
// //       videoData: video
// //     });
// //   };

// //   const renderVideoItem = ({ item }) => (
// //     <TouchableOpacity 
// //       style={styles.videoItem}
// //       onPress={() => handleVideoPress(item)}
// //       activeOpacity={0.8}
// //     >
// //       {/* Thumbnail with Duration */}
// //       <View style={styles.thumbnailContainer}>
// //         <Image 
// //           source={{ uri: item.thumbnail }}
// //           style={styles.thumbnail}
// //           resizeMode="cover"
// //         />
        
// //         {/* Fallback if thumbnail fails to load */}
// //         <View style={styles.thumbnailFallback}>
// //           <Icon name="videocam" size={40} color="#666" />
// //           <Text style={styles.fallbackText}>No Thumbnail</Text>
// //         </View>
        
// //         <View style={styles.durationBadge}>
// //           <Text style={styles.durationText}>{formatDuration(item.duration)}</Text>
// //         </View>
        
// //         {/* Play Button Overlay */}
// //         <View style={styles.playButtonOverlay}>
// //           <View style={styles.playIconCircle}>
// //             <Icon name="play-arrow" size={30} color="#fff" />
// //           </View>
// //         </View>
// //       </View>

// //       {/* Video Info */}
// //       <View style={styles.videoInfo}>
// //         <View style={styles.avatarContainer}>
// //           <Image 
// //             source={{ uri: item.avatar }}
// //             style={styles.channelAvatar}
// //             resizeMode="cover"
// //           />
// //           {/* Avatar fallback */}
// //           <View style={styles.avatarFallback}>
// //             <Text style={styles.avatarFallbackText}>
// //               {item.channel ? item.channel.charAt(0).toUpperCase() : 'U'}
// //             </Text>
// //           </View>
// //         </View>
// //         <View style={styles.videoDetails}>
// //           <Text style={styles.videoTitle} numberOfLines={2}>
// //             {item.title}
// //           </Text>
// //           <View style={styles.channelInfo}>
// //             <Text style={styles.channelName}>
// //               {item.channel}
// //             </Text>
// //             {item.isVerified && (
// //               <Ionicons name="checkmark-circle" size={14} color="#1DB954" style={styles.verifiedIcon} />
// //             )}
// //           </View>
// //           <View style={styles.videoMeta}>
// //             <View style={styles.viewsContainer}>
// //               <Ionicons name="eye" size={14} color="#aaa" />
// //               <Text style={styles.viewsText}>{formatViews(item.views)}</Text>
// //             </View>
            
// //             <Text style={styles.uploadTime}>
// //               {item.uploadTime}
// //             </Text>
// //           </View>
// //         </View>
// //       </View>
// //     </TouchableOpacity>
// //   );

// //   const renderFooter = () => {
// //     if (!loadingMore) return null;
    
// //     return (
// //       <View style={styles.loadingMoreContainer}>
// //         <ActivityIndicator size="small" color="#FF0000" />
// //         <Text style={styles.loadingMoreText}>Loading more videos...</Text>
// //       </View>
// //     );
// //   };

// //   const renderEmptyState = () => (
// //     <View style={styles.emptyState}>
// //       <View style={styles.emptyIcon}>
// //         <Icon name="videocam-off" size={64} color="#666" />
// //       </View>
// //       <Text style={styles.emptyStateTitle}>No videos available</Text>
// //       <Text style={styles.emptyStateText}>
// //         Check back later for new video content
// //       </Text>
// //       <TouchableOpacity 
// //         style={styles.retryButton}
// //         onPress={onRefresh}
// //       >
// //         <Text style={styles.retryButtonText}>Try Again</Text>
// //       </TouchableOpacity>
// //     </View>
// //   );

// //   return (
// //     <SafeAreaView style={styles.container}>
// //       <StatusBar barStyle="light-content" backgroundColor="#0f0f0f" />
      
// //       {/* Header */}
// //       <View style={styles.header}>
// //         <View style={styles.headerLeft}>
// //           <Text style={styles.headerTitle}>Videos</Text>
// //         </View>
// //         <View style={styles.headerRight}>
// //           <TouchableOpacity 
// //             style={styles.iconButton}
// //             onPress={() => navigation.navigate('SearchScreen')}
// //           >
// //             <Feather name="search" size={22} color="#fff" />
// //           </TouchableOpacity>
// //         </View>
// //       </View>

// //       {loading ? (
// //         <View style={styles.loadingContainer}>
// //           <ActivityIndicator size="large" color="#FF0000" />
// //           <Text style={styles.loadingText}>Loading videos...</Text>
// //         </View>
// //       ) : (
// //         <FlatList
// //           data={videos}
// //           renderItem={renderVideoItem}
// //           keyExtractor={item => item.id}
// //           showsVerticalScrollIndicator={false}
// //           contentContainerStyle={styles.videosList}
// //           refreshControl={
// //             <RefreshControl
// //               refreshing={refreshing}
// //               onRefresh={onRefresh}
// //               colors={['#FF0000']}
// //               tintColor="#FF0000"
// //             />
// //           }
// //           ListEmptyComponent={renderEmptyState}
// //           ListFooterComponent={renderFooter}
// //           onEndReached={loadMoreVideos}
// //           onEndReachedThreshold={0.5}
// //         />
// //       )}
// //     </SafeAreaView>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#0f0f0f',
// //   },
// //   header: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     paddingHorizontal: 16,
// //     paddingVertical: 12,
// //     borderBottomWidth: 1,
// //     borderBottomColor: '#272727',
// //   },
// //   headerLeft: {
// //     flex: 1,
// //   },
// //   headerTitle: {
// //     color: '#fff',
// //     fontSize: 22,
// //     fontWeight: 'bold',
// //   },
// //   headerRight: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //   },
// //   iconButton: {
// //     padding: 8,
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
// //   videosList: {
// //     paddingBottom: 16,
// //   },
// //   videoItem: {
// //     marginBottom: 16,
// //   },
// //   thumbnailContainer: {
// //     position: 'relative',
// //   },
// //   thumbnail: {
// //     width: '100%',
// //     height: 200,
// //     backgroundColor: '#272727',
// //   },
// //   thumbnailFallback: {
// //     position: 'absolute',
// //     top: 0,
// //     left: 0,
// //     right: 0,
// //     bottom: 0,
// //     backgroundColor: '#272727',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     zIndex: -1,
// //   },
// //   fallbackText: {
// //     color: '#666',
// //     marginTop: 8,
// //     fontSize: 14,
// //   },
// //   durationBadge: {
// //     position: 'absolute',
// //     bottom: 8,
// //     right: 8,
// //     backgroundColor: 'rgba(0,0,0,0.8)',
// //     paddingHorizontal: 6,
// //     paddingVertical: 2,
// //     borderRadius: 4,
// //     zIndex: 2,
// //   },
// //   durationText: {
// //     color: '#fff',
// //     fontSize: 12,
// //     fontWeight: '500',
// //   },
// //   playButtonOverlay: {
// //     ...StyleSheet.absoluteFillObject,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     backgroundColor: 'rgba(0,0,0,0.3)',
// //     zIndex: 1,
// //   },
// //   playIconCircle: {
// //     width: 60,
// //     height: 60,
// //     borderRadius: 30,
// //     backgroundColor: 'rgba(255,0,0,0.8)',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   videoInfo: {
// //     flexDirection: 'row',
// //     paddingHorizontal: 16,
// //     paddingTop: 12,
// //   },
// //   avatarContainer: {
// //     position: 'relative',
// //     marginRight: 12,
// //   },
// //   channelAvatar: {
// //     width: 36,
// //     height: 36,
// //     borderRadius: 18,
// //     backgroundColor: '#333',
// //   },
// //   avatarFallback: {
// //     position: 'absolute',
// //     top: 0,
// //     left: 0,
// //     width: 36,
// //     height: 36,
// //     borderRadius: 18,
// //     backgroundColor: '#FF0000',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     zIndex: -1,
// //   },
// //   avatarFallbackText: {
// //     color: '#fff',
// //     fontSize: 16,
// //     fontWeight: 'bold',
// //   },
// //   videoDetails: {
// //     flex: 1,
// //   },
// //   videoTitle: {
// //     color: '#fff',
// //     fontSize: 16,
// //     fontWeight: '500',
// //     marginBottom: 6,
// //     lineHeight: 20,
// //   },
// //   channelInfo: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     marginBottom: 6,
// //   },
// //   channelName: {
// //     color: '#aaa',
// //     fontSize: 14,
// //   },
// //   verifiedIcon: {
// //     marginLeft: 4,
// //   },
// //   videoMeta: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //   },
// //   viewsContainer: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //   },
// //   viewsText: {
// //     color: '#aaa',
// //     fontSize: 13,
// //     marginLeft: 4,
// //   },
// //   uploadTime: {
// //     color: '#aaa',
// //     fontSize: 13,
// //   },
// //   loadingMoreContainer: {
// //     flexDirection: 'row',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     padding: 20,
// //   },
// //   loadingMoreText: {
// //     color: '#aaa',
// //     marginLeft: 10,
// //     fontSize: 14,
// //   },
// //   emptyState: {
// //     alignItems: 'center',
// //     paddingVertical: 60,
// //     paddingHorizontal: 20,
// //   },
// //   emptyIcon: {
// //     width: 100,
// //     height: 100,
// //     borderRadius: 50,
// //     backgroundColor: 'rgba(255,255,255,0.05)',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     marginBottom: 20,
// //   },
// //   emptyStateTitle: {
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //     color: '#fff',
// //     marginBottom: 8,
// //     textAlign: 'center',
// //   },
// //   emptyStateText: {
// //     fontSize: 14,
// //     color: '#b3b3b3',
// //     textAlign: 'center',
// //     lineHeight: 20,
// //     marginBottom: 20,
// //   },
// //   retryButton: {
// //     backgroundColor: '#FF0000',
// //     paddingHorizontal: 20,
// //     paddingVertical: 10,
// //     borderRadius: 8,
// //   },
// //   retryButtonText: {
// //     color: '#fff',
// //     fontSize: 16,
// //     fontWeight: '500',
// //   },
// // });

// // export default VideosScreen;

// // screens/VideosScreen.js - UPDATED WITH LOCAL VIEWS SYNC
// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   SafeAreaView,
//   StatusBar,
//   FlatList,
//   TouchableOpacity,
//   Image,
//   Dimensions,
//   ActivityIndicator,
//   RefreshControl,
//   Alert
// } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import Feather from 'react-native-vector-icons/Feather';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import { getVideos } from '../Services/mobile-api';
// import { mobile_siteConfig } from '../Services/mobile-siteConfig';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const { width } = Dimensions.get('window');

// const VideosScreen = ({ navigation }) => {
//   const [videos, setVideos] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [refreshing, setRefreshing] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [hasMore, setHasMore] = useState(true);
//   const [loadingMore, setLoadingMore] = useState(false);

//   // ✅ GET LOCAL VIEWS COUNT
//   const getLocalViewsCount = async (videoId) => {
//     try {
//       const storedViews = await AsyncStorage.getItem('video_views_count');
//       if (storedViews) {
//         const viewsMap = JSON.parse(storedViews);
//         return viewsMap[videoId] !== undefined ? viewsMap[videoId] : null;
//       }
//       return null;
//     } catch (error) {
//       console.log('❌ Local views count check error:', error);
//       return null;
//     }
//   };

//   // ✅ GET LOCAL LIKE STATUS
//   const getLocalLikeStatus = async (videoId) => {
//     try {
//       const storedLikes = await AsyncStorage.getItem('video_likes_status');
//       if (storedLikes) {
//         const likesMap = JSON.parse(storedLikes);
//         return likesMap[videoId] || false;
//       }
//       return false;
//     } catch (error) {
//       console.log('❌ Local like status check error:', error);
//       return false;
//     }
//   };

//   // ✅ GET LOCAL LIKES COUNT
//   const getLocalLikesCount = async (videoId) => {
//     try {
//       const storedCount = await AsyncStorage.getItem('video_likes_count');
//       if (storedCount) {
//         const likesCountMap = JSON.parse(storedCount);
//         return likesCountMap[videoId] !== undefined ? likesCountMap[videoId] : null;
//       }
//       return null;
//     } catch (error) {
//       console.log('❌ Local likes count check error:', error);
//       return null;
//     }
//   };

//   // Image URL helper function
//   const getImageUrl = (imagePath) => {
//     if (!imagePath) {
//       return null;
//     }
    
//     if (imagePath.startsWith('http')) {
//       return imagePath;
//     }
    
//     let fullUrl;
//     if (imagePath.startsWith('/')) {
//       fullUrl = `${mobile_siteConfig.IMAGE_BASE_URL}${imagePath}`;
//     } else {
//       fullUrl = `${mobile_siteConfig.IMAGE_BASE_URL}/${imagePath}`;
//     }
    
//     return fullUrl;
//   };

//   // Video URL helper function
//   const getVideoUrl = (videoPath) => {
//     if (!videoPath) return null;
    
//     if (videoPath.startsWith('http')) {
//       return videoPath;
//     }
    
//     if (videoPath.startsWith('/')) {
//       return `${mobile_siteConfig.IMAGE_BASE_URL}${videoPath}`;
//     } else {
//       return `${mobile_siteConfig.IMAGE_BASE_URL}/${videoPath}`;
//     }
//   };

//   // Format duration
//   const formatDuration = (seconds) => {
//     if (!seconds) return '0:00';
//     const mins = Math.floor(seconds / 60);
//     const secs = Math.floor(seconds % 60);
//     return `${mins}:${secs.toString().padStart(2, '0')}`;
//   };

//   // Format views
//   const formatViews = (views) => {
//     if (!views) return '0 views';
//     if (views >= 1000000) {
//       return `${(views / 1000000).toFixed(1)}M views`;
//     } else if (views >= 1000) {
//       return `${(views / 1000).toFixed(1)}K views`;
//     }
//     return `${views} views`;
//   };

//   // Format date
//   const formatDate = (dateString) => {
//     if (!dateString) return 'Recently';
    
//     const date = new Date(dateString);
//     const now = new Date();
//     const diffTime = Math.abs(now - date);
//     const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
//     if (diffDays === 1) return '1 day ago';
//     if (diffDays < 7) return `${diffDays} days ago`;
//     if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
//     if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
//     return `${Math.floor(diffDays / 365)} years ago`;
//   };

//   // ✅ LOAD LOCAL DATA FOR VIDEOS
//   const loadLocalDataForVideos = async (videosData) => {
//     try {
//       const videosWithLocalData = await Promise.all(
//         videosData.map(async (video) => {
//           const videoId = video.id?.toString();
          
//           // ✅ Get local views count
//           const localViews = await getLocalViewsCount(videoId);
//           const finalViews = localViews !== null ? localViews : (video.views || video.stats?.views || 0);
          
//           // ✅ Get local like status
//           const localLikeStatus = await getLocalLikeStatus(videoId);
//           const finalIsLiked = localLikeStatus !== null ? localLikeStatus : (video.isLiked || false);
          
//           // ✅ Get local likes count
//           const localLikesCount = await getLocalLikesCount(videoId);
//           const finalLikesCount = localLikesCount !== null ? localLikesCount : (video.stats?.likes || 0);
          
//           const thumbnailUrl = getImageUrl(video.thumbnail);
//           const avatarUrl = getImageUrl(video.artist?.profilePic);
//           const videoUrl = getVideoUrl(video.videoFile);
          
//           return {
//             id: videoId || `video-${Math.random()}`,
//             title: video.title || 'Untitled Video',
//             channel: video.artist?.name || 'Unknown Artist',
//             views: finalViews, // ✅ Use local views count
//             duration: video.duration || 0,
//             uploadTime: formatDate(video.createdAt),
//             thumbnail: thumbnailUrl,
//             avatar: avatarUrl,
//             videoUrl: videoUrl,
//             likes: finalLikesCount, // ✅ Use local likes count
//             isLiked: finalIsLiked, // ✅ Use local like status
//             description: video.description || 'No description available',
//             isVerified: video.artist?.isVerified || false,
//             followers: video.artist?.followers || 0,
//             language: video.language?.name,
//             mood: video.mood?.name,
//             genre: video.genre?.name,
//             artist: video.artist,
//           };
//         })
//       );
      
//       return videosWithLocalData;
//     } catch (error) {
//       console.log('❌ Error loading local data:', error);
//       return videosData;
//     }
//   };

//   // Load videos from API
//   const loadVideos = async (page = 1, isRefresh = false) => {
//     try {
//       if (isRefresh) {
//         setRefreshing(true);
//       } else if (page === 1) {
//         setLoading(true);
//       } else {
//         setLoadingMore(true);
//       }

//       const response = await getVideos(page, 20, 'smart');
      
//       if (response && response.success) {
//         const videosData = response.data?.videos || [];
//         const pagination = response.data?.pagination;
        
//         // ✅ Load local data for each video
//         const transformedVideos = await loadLocalDataForVideos(videosData);
        
//         if (page === 1) {
//           setVideos(transformedVideos);
//         } else {
//           setVideos(prevVideos => [...prevVideos, ...transformedVideos]);
//         }
        
//         if (pagination) {
//           setHasMore(pagination.hasNextPage || false);
//           setCurrentPage(pagination.page || page);
//         } else {
//           setHasMore(false);
//         }
        
//         console.log(`✅ Loaded ${transformedVideos.length} videos with local data`);
        
//       } else {
//         throw new Error(response?.message || 'Failed to load videos');
//       }
//     } catch (error) {
//       console.error('Load videos error:', error);
//       if (page === 1) {
//         setVideos([]);
//       }
//     } finally {
//       setLoading(false);
//       setRefreshing(false);
//       setLoadingMore(false);
//     }
//   };

//   // ✅ ADD: Focus listener to refresh data when coming back from video player
//   useEffect(() => {
//     const unsubscribe = navigation.addListener('focus', () => {
//       console.log('🔄 VideosScreen focused - refreshing data');
//       loadVideos(1, true);
//     });

//     return unsubscribe;
//   }, [navigation]);

//   useEffect(() => {
//     loadVideos(1);
//   }, []);

//   const onRefresh = async () => {
//     setCurrentPage(1);
//     setHasMore(true);
//     await loadVideos(1, true);
//   };

//   const loadMoreVideos = () => {
//     if (hasMore && !loadingMore) {
//       loadVideos(currentPage + 1);
//     }
//   };

//   const handleVideoPress = (video) => {
//     if (!video.videoUrl) {
//       Alert.alert('Error', 'Video URL not available');
//       return;
//     }
    
//     console.log('🎬 Playing video:', {
//       id: video.id,
//       title: video.title,
//       currentViews: video.views
//     });
    
//     navigation.navigate('VideoPlayerScreen', {
//       videoData: video
//     });
//   };

//   const renderVideoItem = ({ item }) => (
//     <TouchableOpacity 
//       style={styles.videoItem}
//       onPress={() => handleVideoPress(item)}
//       activeOpacity={0.8}
//     >
//       {/* Thumbnail with Duration */}
//       <View style={styles.thumbnailContainer}>
//         <Image 
//           source={{ uri: item.thumbnail }}
//           style={styles.thumbnail}
//           resizeMode="cover"
//         />
        
//         {/* Fallback if thumbnail fails to load */}
//         <View style={styles.thumbnailFallback}>
//           <Icon name="videocam" size={40} color="#666" />
//           <Text style={styles.fallbackText}>No Thumbnail</Text>
//         </View>
        
//         <View style={styles.durationBadge}>
//           <Text style={styles.durationText}>{formatDuration(item.duration)}</Text>
//         </View>
        
//         {/* Play Button Overlay */}
//         <View style={styles.playButtonOverlay}>
//           <View style={styles.playIconCircle}>
//             <Icon name="play-arrow" size={30} color="#fff" />
//           </View>
//         </View>

//         {/* ✅ Views Count Badge */}
//         <View style={styles.viewsBadge}>
//           <Ionicons name="eye" size={12} color="#fff" />
//           <Text style={styles.viewsBadgeText}>{item.views}</Text>
//         </View>
//       </View>

//       {/* Video Info */}
//       <View style={styles.videoInfo}>
//         <View style={styles.avatarContainer}>
//           <Image 
//             source={{ uri: item.avatar }}
//             style={styles.channelAvatar}
//             resizeMode="cover"
//           />
//           {/* Avatar fallback */}
//           <View style={styles.avatarFallback}>
//             <Text style={styles.avatarFallbackText}>
//               {item.channel ? item.channel.charAt(0).toUpperCase() : 'U'}
//             </Text>
//           </View>
//         </View>
//         <View style={styles.videoDetails}>
//           <Text style={styles.videoTitle} numberOfLines={2}>
//             {item.title}
//           </Text>
//           <View style={styles.channelInfo}>
//             <Text style={styles.channelName}>
//               {item.channel}
//             </Text>
//             {item.isVerified && (
//               <Ionicons name="checkmark-circle" size={14} color="#1DB954" style={styles.verifiedIcon} />
//             )}
//           </View>
//           <View style={styles.videoMeta}>
//             <View style={styles.viewsContainer}>
//               <Ionicons name="eye" size={14} color="#aaa" />
//               <Text style={styles.viewsText}>{formatViews(item.views)}</Text>
//             </View>
            
//             <Text style={styles.uploadTime}>
//               {item.uploadTime}
//             </Text>
//           </View>
//         </View>

//         {/* ✅ Like Button */}
//         <TouchableOpacity style={styles.likeButton}>
//           <Ionicons 
//             name={item.isLiked ? "heart" : "heart-outline"} 
//             size={18} 
//             color={item.isLiked ? "#FF0000" : "#aaa"} 
//           />
//         </TouchableOpacity>
//       </View>
//     </TouchableOpacity>
//   );

//   const renderFooter = () => {
//     if (!loadingMore) return null;
    
//     return (
//       <View style={styles.loadingMoreContainer}>
//         <ActivityIndicator size="small" color="#FF0000" />
//         <Text style={styles.loadingMoreText}>Loading more videos...</Text>
//       </View>
//     );
//   };

//   const renderEmptyState = () => (
//     <View style={styles.emptyState}>
//       <View style={styles.emptyIcon}>
//         <Icon name="videocam-off" size={64} color="#666" />
//       </View>
//       <Text style={styles.emptyStateTitle}>No videos available</Text>
//       <Text style={styles.emptyStateText}>
//         Check back later for new video content
//       </Text>
//       <TouchableOpacity 
//         style={styles.retryButton}
//         onPress={onRefresh}
//       >
//         <Text style={styles.retryButtonText}>Try Again</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="light-content" backgroundColor="#0f0f0f" />
      
//       {/* Header */}
//       <View style={styles.header}>
//         <View style={styles.headerLeft}>
//           <Text style={styles.headerTitle}>Videos</Text>
//         </View>
//         <View style={styles.headerRight}>
//           <TouchableOpacity 
//             style={styles.iconButton}
//             onPress={() => navigation.navigate('SearchScreen')}
//           >
//             <Feather name="search" size={22} color="#fff" />
//           </TouchableOpacity>
//         </View>
//       </View>

//       {loading ? (
//         <View style={styles.loadingContainer}>
//           <ActivityIndicator size="large" color="#FF0000" />
//           <Text style={styles.loadingText}>Loading videos...</Text>
//         </View>
//       ) : (
//         <FlatList
//           data={videos}
//           renderItem={renderVideoItem}
//           keyExtractor={item => item.id}
//           showsVerticalScrollIndicator={false}
//           contentContainerStyle={styles.videosList}
//           refreshControl={
//             <RefreshControl
//               refreshing={refreshing}
//               onRefresh={onRefresh}
//               colors={['#FF0000']}
//               tintColor="#FF0000"
//             />
//           }
//           ListEmptyComponent={renderEmptyState}
//           ListFooterComponent={renderFooter}
//           onEndReached={loadMoreVideos}
//           onEndReachedThreshold={0.5}
//         />
//       )}
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#0f0f0f',
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//     borderBottomWidth: 1,
//     borderBottomColor: '#272727',
//   },
//   headerLeft: {
//     flex: 1,
//   },
//   headerTitle: {
//     color: '#fff',
//     fontSize: 22,
//     fontWeight: 'bold',
//   },
//   headerRight: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   iconButton: {
//     padding: 8,
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
//   videosList: {
//     paddingBottom: 16,
//   },
//   videoItem: {
//     marginBottom: 16,
//   },
//   thumbnailContainer: {
//     position: 'relative',
//   },
//   thumbnail: {
//     width: '100%',
//     height: 200,
//     backgroundColor: '#272727',
//   },
//   thumbnailFallback: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: '#272727',
//     justifyContent: 'center',
//     alignItems: 'center',
//     zIndex: -1,
//   },
//   fallbackText: {
//     color: '#666',
//     marginTop: 8,
//     fontSize: 14,
//   },
//   durationBadge: {
//     position: 'absolute',
//     bottom: 8,
//     right: 8,
//     backgroundColor: 'rgba(0,0,0,0.8)',
//     paddingHorizontal: 6,
//     paddingVertical: 2,
//     borderRadius: 4,
//     zIndex: 2,
//   },
//   durationText: {
//     color: '#fff',
//     fontSize: 12,
//     fontWeight: '500',
//   },
//   // ✅ NEW: Views Badge
//   viewsBadge: {
//     position: 'absolute',
//     top: 8,
//     left: 8,
//     backgroundColor: 'rgba(0,0,0,0.8)',
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 6,
//     paddingVertical: 2,
//     borderRadius: 4,
//     zIndex: 2,
//   },
//   viewsBadgeText: {
//     color: '#fff',
//     fontSize: 11,
//     fontWeight: '500',
//     marginLeft: 2,
//   },
//   playButtonOverlay: {
//     ...StyleSheet.absoluteFillObject,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0,0,0,0.3)',
//     zIndex: 1,
//   },
//   playIconCircle: {
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     backgroundColor: 'rgba(255,0,0,0.8)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   videoInfo: {
//     flexDirection: 'row',
//     paddingHorizontal: 16,
//     paddingTop: 12,
//   },
//   avatarContainer: {
//     position: 'relative',
//     marginRight: 12,
//   },
//   channelAvatar: {
//     width: 36,
//     height: 36,
//     borderRadius: 18,
//     backgroundColor: '#333',
//   },
//   avatarFallback: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: 36,
//     height: 36,
//     borderRadius: 18,
//     backgroundColor: '#FF0000',
//     justifyContent: 'center',
//     alignItems: 'center',
//     zIndex: -1,
//   },
//   avatarFallbackText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   videoDetails: {
//     flex: 1,
//   },
//   videoTitle: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '500',
//     marginBottom: 6,
//     lineHeight: 20,
//   },
//   channelInfo: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 6,
//   },
//   channelName: {
//     color: '#aaa',
//     fontSize: 14,
//   },
//   verifiedIcon: {
//     marginLeft: 4,
//   },
//   videoMeta: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   viewsContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   viewsText: {
//     color: '#aaa',
//     fontSize: 13,
//     marginLeft: 4,
//   },
//   uploadTime: {
//     color: '#aaa',
//     fontSize: 13,
//   },
//   // ✅ NEW: Like Button
//   likeButton: {
//     padding: 4,
//     marginLeft: 8,
//   },
//   loadingMoreContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   loadingMoreText: {
//     color: '#aaa',
//     marginLeft: 10,
//     fontSize: 14,
//   },
//   emptyState: {
//     alignItems: 'center',
//     paddingVertical: 60,
//     paddingHorizontal: 20,
//   },
//   emptyIcon: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     backgroundColor: 'rgba(255,255,255,0.05)',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   emptyStateTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#fff',
//     marginBottom: 8,
//     textAlign: 'center',
//   },
//   emptyStateText: {
//     fontSize: 14,
//     color: '#b3b3b3',
//     textAlign: 'center',
//     lineHeight: 20,
//     marginBottom: 20,
//   },
//   retryButton: {
//     backgroundColor: '#FF0000',
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     borderRadius: 8,
//   },
//   retryButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '500',
//   },
// });

// export default VideosScreen;


// screens/VideosScreen.js - UPDATED RESPONSIVE VERSION
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
  ActivityIndicator,
  RefreshControl,
  Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { getVideos } from '../Services/mobile-api';
import { mobile_siteConfig } from '../Services/mobile-siteConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { wp, hp } from "../assets/Global.Css";

const { width } = Dimensions.get('window');

const VideosScreen = ({ navigation }) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

  // ✅ GET LOCAL VIEWS COUNT
  const getLocalViewsCount = async (videoId) => {
    try {
      const storedViews = await AsyncStorage.getItem('video_views_count');
      if (storedViews) {
        const viewsMap = JSON.parse(storedViews);
        return viewsMap[videoId] !== undefined ? viewsMap[videoId] : null;
      }
      return null;
    } catch (error) {
      console.log('❌ Local views count check error:', error);
      return null;
    }
  };

  // ✅ GET LOCAL LIKE STATUS
  const getLocalLikeStatus = async (videoId) => {
    try {
      const storedLikes = await AsyncStorage.getItem('video_likes_status');
      if (storedLikes) {
        const likesMap = JSON.parse(storedLikes);
        return likesMap[videoId] || false;
      }
      return false;
    } catch (error) {
      console.log('❌ Local like status check error:', error);
      return false;
    }
  };

  // ✅ GET LOCAL LIKES COUNT
  const getLocalLikesCount = async (videoId) => {
    try {
      const storedCount = await AsyncStorage.getItem('video_likes_count');
      if (storedCount) {
        const likesCountMap = JSON.parse(storedCount);
        return likesCountMap[videoId] !== undefined ? likesCountMap[videoId] : null;
      }
      return null;
    } catch (error) {
      console.log('❌ Local likes count check error:', error);
      return null;
    }
  };

  // Image URL helper function
  const getImageUrl = (imagePath) => {
    if (!imagePath) {
      return null;
    }
    
    if (imagePath.startsWith('http')) {
      return imagePath;
    }
    
    let fullUrl;
    if (imagePath.startsWith('/')) {
      fullUrl = `${mobile_siteConfig.IMAGE_BASE_URL}${imagePath}`;
    } else {
      fullUrl = `${mobile_siteConfig.IMAGE_BASE_URL}/${imagePath}`;
    }
    
    return fullUrl;
  };

  // Video URL helper function
  const getVideoUrl = (videoPath) => {
    if (!videoPath) return null;
    
    if (videoPath.startsWith('http')) {
      return videoPath;
    }
    
    if (videoPath.startsWith('/')) {
      return `${mobile_siteConfig.IMAGE_BASE_URL}${videoPath}`;
    } else {
      return `${mobile_siteConfig.IMAGE_BASE_URL}/${videoPath}`;
    }
  };

  // Format views
  const formatViews = (views) => {
    if (!views) return '0 views';
    if (views >= 1000000) {
      return `${(views / 1000000).toFixed(1)}M views`;
    } else if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}K views`;
    }
    return `${views} views`;
  };

  // Format date
  const formatDate = (dateString) => {
    if (!dateString) return 'Recently';
    
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return '1 day ago';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
    return `${Math.floor(diffDays / 365)} years ago`;
  };

  // ✅ LOAD LOCAL DATA FOR VIDEOS
  const loadLocalDataForVideos = async (videosData) => {
    try {
      const videosWithLocalData = await Promise.all(
        videosData.map(async (video) => {
          const videoId = video.id?.toString();
          
          // ✅ Get local views count
          const localViews = await getLocalViewsCount(videoId);
          const finalViews = localViews !== null ? localViews : (video.views || video.stats?.views || 0);
          
          // ✅ Get local like status
          const localLikeStatus = await getLocalLikeStatus(videoId);
          const finalIsLiked = localLikeStatus !== null ? localLikeStatus : (video.isLiked || false);
          
          // ✅ Get local likes count
          const localLikesCount = await getLocalLikesCount(videoId);
          const finalLikesCount = localLikesCount !== null ? localLikesCount : (video.stats?.likes || 0);
          
          const thumbnailUrl = getImageUrl(video.thumbnail);
          const avatarUrl = getImageUrl(video.artist?.profilePic);
          const videoUrl = getVideoUrl(video.videoFile);
          
          return {
            id: videoId || `video-${Math.random()}`,
            title: video.title || 'Untitled Video',
            channel: video.artist?.name || 'Unknown Artist',
            views: finalViews, // ✅ Use local views count
            duration: video.duration || 0,
            uploadTime: formatDate(video.createdAt),
            thumbnail: thumbnailUrl,
            avatar: avatarUrl,
            videoUrl: videoUrl,
            likes: finalLikesCount, // ✅ Use local likes count
            isLiked: finalIsLiked, // ✅ Use local like status
            description: video.description || 'No description available',
            isVerified: video.artist?.isVerified || false,
            followers: video.artist?.followers || 0,
            language: video.language?.name,
            mood: video.mood?.name,
            genre: video.genre?.name,
            artist: video.artist,
          };
        })
      );
      
      return videosWithLocalData;
    } catch (error) {
      console.log('❌ Error loading local data:', error);
      return videosData;
    }
  };

  // Load videos from API
  const loadVideos = async (page = 1, isRefresh = false) => {
    try {
      if (isRefresh) {
        setRefreshing(true);
      } else if (page === 1) {
        setLoading(true);
      } else {
        setLoadingMore(true);
      }

      const response = await getVideos(page, 20, 'smart');
      
      if (response && response.success) {
        const videosData = response.data?.videos || [];
        const pagination = response.data?.pagination;
        
        // ✅ Load local data for each video
        const transformedVideos = await loadLocalDataForVideos(videosData);
        
        if (page === 1) {
          setVideos(transformedVideos);
        } else {
          setVideos(prevVideos => [...prevVideos, ...transformedVideos]);
        }
        
        if (pagination) {
          setHasMore(pagination.hasNextPage || false);
          setCurrentPage(pagination.page || page);
        } else {
          setHasMore(false);
        }
        
        console.log(`✅ Loaded ${transformedVideos.length} videos with local data`);
        
      } else {
        throw new Error(response?.message || 'Failed to load videos');
      }
    } catch (error) {
      console.error('Load videos error:', error);
      if (page === 1) {
        setVideos([]);
      }
    } finally {
      setLoading(false);
      setRefreshing(false);
      setLoadingMore(false);
    }
  };

  // ✅ ADD: Focus listener to refresh data when coming back from video player
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      console.log('🔄 VideosScreen focused - refreshing data');
      loadVideos(1, true);
    });

    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    loadVideos(1);
  }, []);

  const onRefresh = async () => {
    setCurrentPage(1);
    setHasMore(true);
    await loadVideos(1, true);
  };

  const loadMoreVideos = () => {
    if (hasMore && !loadingMore) {
      loadVideos(currentPage + 1);
    }
  };

  const handleVideoPress = (video) => {
    if (!video.videoUrl) {
      Alert.alert('Error', 'Video URL not available');
      return;
    }
    
    console.log('🎬 Playing video:', {
      id: video.id,
      title: video.title,
      currentViews: video.views
    });
    
    navigation.navigate('VideoPlayerScreen', {
      videoData: video
    });
  };

  const renderVideoItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.videoItem}
      onPress={() => handleVideoPress(item)}
      activeOpacity={0.8}
    >
      {/* Thumbnail Container */}
      <View style={styles.thumbnailContainer}>
        <Image 
          source={{ uri: item.thumbnail }}
          style={styles.thumbnail}
          resizeMode="cover"
        />
        
        {/* Fallback if thumbnail fails to load */}
        <View style={styles.thumbnailFallback}>
          <Icon name="videocam" size={wp(10)} color="#666" />
          <Text style={styles.fallbackText}>No Thumbnail</Text>
        </View>
        
        {/* ✅ REMOVED: Duration Badge */}
        
        {/* Play Button Overlay */}
        <View style={styles.playButtonOverlay}>
          <View style={styles.playIconCircle}>
            <Icon name="play-arrow" size={wp(7)} color="#fff" />
          </View>
        </View>

        {/* ✅ Views Count Badge - Moved to top right */}
        <View style={styles.viewsBadge}>
          <Ionicons name="eye" size={wp(3)} color="#fff" />
          <Text style={styles.viewsBadgeText}>{item.views}</Text>
        </View>
      </View>

      {/* Video Info */}
      <View style={styles.videoInfo}>
        <View style={styles.avatarContainer}>
          <Image 
            source={{ uri: item.avatar }}
            style={styles.channelAvatar}
            resizeMode="cover"
          />
          {/* Avatar fallback */}
          <View style={styles.avatarFallback}>
            <Text style={styles.avatarFallbackText}>
              {item.channel ? item.channel.charAt(0).toUpperCase() : 'U'}
            </Text>
          </View>
        </View>
        <View style={styles.videoDetails}>
          <Text style={styles.videoTitle} numberOfLines={2}>
            {item.title}
          </Text>
          <View style={styles.channelInfo}>
            <Text style={styles.channelName}>
              {item.channel}
            </Text>
            {item.isVerified && (
              <Ionicons name="checkmark-circle" size={wp(3.5)} color="#1DB954" style={styles.verifiedIcon} />
            )}
          </View>
          <View style={styles.videoMeta}>
            <View style={styles.viewsContainer}>
              <Ionicons name="eye" size={wp(3.5)} color="#aaa" />
              <Text style={styles.viewsText}>{formatViews(item.views)}</Text>
            </View>
            
            <Text style={styles.uploadTime}>
              {item.uploadTime}
            </Text>
          </View>
        </View>

        {/* ✅ Like Button */}
        <TouchableOpacity style={styles.likeButton}>
          <Ionicons 
            name={item.isLiked ? "heart" : "heart-outline"} 
            size={wp(4.5)} 
            color={item.isLiked ? "#FF0000" : "#aaa"} 
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  const renderFooter = () => {
    if (!loadingMore) return null;
    
    return (
      <View style={styles.loadingMoreContainer}>
        <ActivityIndicator size="small" color="#FF0000" />
        <Text style={styles.loadingMoreText}>Loading more videos...</Text>
      </View>
    );
  };

  const renderEmptyState = () => (
    <View style={styles.emptyState}>
      <View style={styles.emptyIcon}>
        <Icon name="videocam-off" size={wp(16)} color="#666" />
      </View>
      <Text style={styles.emptyStateTitle}>No videos available</Text>
      <Text style={styles.emptyStateText}>
        Check back later for new video content
      </Text>
      <TouchableOpacity 
        style={styles.retryButton}
        onPress={onRefresh}
      >
        <Text style={styles.retryButtonText}>Try Again</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0f0f0f" />
      
      {/* ✅ UPDATED: Header - Search Removed */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>Videos</Text>
        </View>
      </View>

      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#FF0000" />
          <Text style={styles.loadingText}>Loading videos...</Text>
        </View>
      ) : (
        <FlatList
          data={videos}
          renderItem={renderVideoItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.videosList}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              colors={['#FF0000']}
              tintColor="#FF0000"
            />
          }
          ListEmptyComponent={renderEmptyState}
          ListFooterComponent={renderFooter}
          onEndReached={loadMoreVideos}
          onEndReachedThreshold={0.5}
        />
      )}
    </SafeAreaView>
  );
};

// ✅ RESPONSIVE STYLES
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f0f',
  },
  header: {
    paddingHorizontal: wp(4),
    paddingVertical: hp(1.5),
    borderBottomWidth: 1,
    borderBottomColor: '#272727',
  },
  headerContent: {
    alignItems: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: wp(6),
    fontWeight: 'bold',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    color: '#fff',
    marginTop: hp(2),
    fontSize: wp(4),
  },
  videosList: {
    paddingBottom: hp(2),
  },
  videoItem: {
    marginBottom: hp(2),
  },
  thumbnailContainer: {
    position: 'relative',
  },
  thumbnail: {
    width: '100%',
    height: hp(25),
    backgroundColor: '#272727',
  },
  thumbnailFallback: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#272727',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: -1,
  },
  fallbackText: {
    color: '#666',
    marginTop: hp(1),
    fontSize: wp(3.5),
  },
  // ✅ REMOVED: durationBadge styles
  
  // ✅ UPDATED: Views Badge - Top Right
  viewsBadge: {
    position: 'absolute',
    top: hp(1),
    right: wp(2),
    backgroundColor: 'rgba(0,0,0,0.8)',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(2),
    paddingVertical: hp(0.5),
    borderRadius: wp(1),
    zIndex: 2,
  },
  viewsBadgeText: {
    color: '#fff',
    fontSize: wp(3),
    fontWeight: '500',
    marginLeft: wp(0.5),
  },
  playButtonOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
    zIndex: 1,
  },
  playIconCircle: {
    width: wp(15),
    height: wp(15),
    borderRadius: wp(7.5),
    backgroundColor: 'rgba(255,0,0,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoInfo: {
    flexDirection: 'row',
    paddingHorizontal: wp(4),
    paddingTop: hp(1.5),
  },
  avatarContainer: {
    position: 'relative',
    marginRight: wp(3),
  },
  channelAvatar: {
    width: wp(9),
    height: wp(9),
    borderRadius: wp(4.5),
    backgroundColor: '#333',
  },
  avatarFallback: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: wp(9),
    height: wp(9),
    borderRadius: wp(4.5),
    backgroundColor: '#FF0000',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: -1,
  },
  avatarFallbackText: {
    color: '#fff',
    fontSize: wp(4),
    fontWeight: 'bold',
  },
  videoDetails: {
    flex: 1,
  },
  videoTitle: {
    color: '#fff',
    fontSize: wp(4.2),
    fontWeight: '500',
    marginBottom: hp(0.5),
    lineHeight: hp(2.5),
  },
  channelInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(0.5),
  },
  channelName: {
    color: '#aaa',
    fontSize: wp(3.5),
  },
  verifiedIcon: {
    marginLeft: wp(1),
  },
  videoMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewsText: {
    color: '#aaa',
    fontSize: wp(3.2),
    marginLeft: wp(1),
  },
  uploadTime: {
    color: '#aaa',
    fontSize: wp(3.2),
  },
  // ✅ Like Button
  likeButton: {
    padding: wp(1),
    marginLeft: wp(2),
  },
  loadingMoreContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: hp(2.5),
  },
  loadingMoreText: {
    color: '#aaa',
    marginLeft: wp(2.5),
    fontSize: wp(3.5),
  },
  emptyState: {
    alignItems: 'center',
    paddingVertical: hp(15),
    paddingHorizontal: wp(5),
  },
  emptyIcon: {
    width: wp(25),
    height: wp(25),
    borderRadius: wp(12.5),
    backgroundColor: 'rgba(255,255,255,0.05)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp(2.5),
  },
  emptyStateTitle: {
    fontSize: wp(4.5),
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: hp(1),
    textAlign: 'center',
  },
  emptyStateText: {
    fontSize: wp(3.5),
    color: '#b3b3b3',
    textAlign: 'center',
    lineHeight: hp(2.5),
    marginBottom: hp(2.5),
  },
  retryButton: {
    backgroundColor: '#FF0000',
    paddingHorizontal: wp(5),
    paddingVertical: hp(1.2),
    borderRadius: wp(2),
  },
  retryButtonText: {
    color: '#fff',
    fontSize: wp(4),
    fontWeight: '500',
  },
});

export default VideosScreen;