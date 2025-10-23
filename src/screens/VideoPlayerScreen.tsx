// // // // screens/VideoPlayerScreen.js - FIXED VERSION
// // // import React, { useState, useRef, useEffect } from 'react';
// // // import {
// // //   View,
// // //   Text,
// // //   StyleSheet,
// // //   SafeAreaView,
// // //   StatusBar,
// // //   TouchableOpacity,
// // //   Dimensions,
// // //   ActivityIndicator,
// // //   ScrollView,
// // //   Image,
// // //   Animated
// // // } from 'react-native';
// // // import { Video } from 'react-native-video';
// // // import Icon from 'react-native-vector-icons/MaterialIcons';
// // // import Feather from 'react-native-vector-icons/Feather';
// // // import Ionicons from 'react-native-vector-icons/Ionicons';

// // // const { width, height } = Dimensions.get('window');

// // // const VideoPlayerScreen = ({ route, navigation }) => {
// // //   const { videoData } = route.params;
  
// // //   const videoRef = useRef(null);
// // //   const [isLoading, setIsLoading] = useState(true);
// // //   const [isPlaying, setIsPlaying] = useState(true);
// // //   const [showControls, setShowControls] = useState(true); // ✅ Variable
// // //   const [currentTime, setCurrentTime] = useState(0);
// // //   const [duration, setDuration] = useState(0);
// // //   const [isBuffering, setIsBuffering] = useState(false);
// // //   const [isFullscreen, setIsFullscreen] = useState(false);
  
// // //   const controlsOpacity = useRef(new Animated.Value(1)).current;

// // //   // ✅ FIX: Function ka naam change karo - showControlsFunc
// // //   const showControlsFunc = () => {
// // //     setShowControls(true);
// // //     Animated.timing(controlsOpacity, {
// // //       toValue: 1,
// // //       duration: 300,
// // //       useNativeDriver: true,
// // //     }).start();
// // //   };

// // //   // ✅ FIX: Function ka naam change karo - hideControlsFunc
// // //   const hideControlsFunc = () => {
// // //     Animated.timing(controlsOpacity, {
// // //       toValue: 0,
// // //       duration: 300,
// // //       useNativeDriver: true,
// // //     }).start(() => {
// // //       setShowControls(false);
// // //     });
// // //   };

// // //   // Controls hide karne ka timer
// // //   useEffect(() => {
// // //     if (showControls && isPlaying) {
// // //       const timer = setTimeout(() => {
// // //         hideControlsFunc(); // ✅ Updated function name
// // //       }, 3000);
// // //       return () => clearTimeout(timer);
// // //     }
// // //   }, [showControls, isPlaying]);

// // //   const togglePlayPause = () => {
// // //     setIsPlaying(!isPlaying);
// // //   };

// // //   const seekForward = () => {
// // //     if (videoRef.current) {
// // //       videoRef.current.seek(currentTime + 10);
// // //     }
// // //   };

// // //   const seekBackward = () => {
// // //     if (videoRef.current) {
// // //       videoRef.current.seek(Math.max(0, currentTime - 10));
// // //     }
// // //   };

// // //   const toggleFullscreen = () => {
// // //     setIsFullscreen(!isFullscreen);
// // //   };

// // //   const formatTime = (seconds) => {
// // //     if (!seconds) return '0:00';
// // //     const mins = Math.floor(seconds / 60);
// // //     const secs = Math.floor(seconds % 60);
// // //     return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
// // //   };

// // //   const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

// // //   return (
// // //     <SafeAreaView style={styles.container}>
// // //       <StatusBar barStyle="light-content" backgroundColor="#000" />
      
// // //       {/* Video Player Container */}
// // //       <View style={[styles.videoContainer, isFullscreen && styles.fullscreenVideoContainer]}>
// // //         <Video
// // //           ref={videoRef}
// // //           source={{ uri: videoData.videoUrl }}
// // //           style={styles.video}
// // //           paused={!isPlaying}
// // //           resizeMode="contain"
// // //           onLoadStart={() => setIsLoading(true)}
// // //           onLoad={(data) => {
// // //             setIsLoading(false);
// // //             setDuration(data.duration);
// // //             console.log('✅ Video loaded successfully');
// // //           }}
// // //           onProgress={(data) => {
// // //             setCurrentTime(data.currentTime);
// // //           }}
// // //           onBuffer={({ isBuffering: buffering }) => {
// // //             setIsBuffering(buffering);
// // //             console.log(buffering ? '🔄 Buffering...' : '✅ Buffering complete');
// // //           }}
// // //           onError={(error) => {
// // //             console.log('❌ Video error:', error);
// // //             setIsLoading(false);
// // //           }}
// // //           onEnd={() => {
// // //             console.log('🎬 Video ended');
// // //             setIsPlaying(false);
// // //           }}
// // //           repeat={false}
// // //           controls={false}
// // //         />
        
// // //         {/* Loading/Buffering Indicator */}
// // //         {(isLoading || isBuffering) && (
// // //           <View style={styles.loadingContainer}>
// // //             <ActivityIndicator size="large" color="#FF0000" />
// // //             <Text style={styles.loadingText}>
// // //               {isBuffering ? 'Buffering...' : 'Loading video...'}
// // //             </Text>
// // //           </View>
// // //         )}
        
// // //         {/* Video Controls Overlay */}
// // //         <TouchableOpacity 
// // //           style={styles.controlsOverlay}
// // //           activeOpacity={1}
// // //           onPress={() => {
// // //             if (showControls) {
// // //               hideControlsFunc(); // ✅ Updated function name
// // //             } else {
// // //               showControlsFunc(); // ✅ Updated function name
// // //             }
// // //           }}
// // //         >
// // //           <Animated.View 
// // //             style={[
// // //               styles.controlsContainer,
// // //               { opacity: controlsOpacity }
// // //             ]}
// // //           >
// // //             {/* Top Controls */}
// // //             <View style={styles.topControls}>
// // //               <TouchableOpacity 
// // //                 style={styles.controlButton}
// // //                 onPress={() => navigation.goBack()}
// // //               >
// // //                 <Icon name="arrow-back" size={24} color="#fff" />
// // //               </TouchableOpacity>
              
// // //               <Text style={styles.videoTitle} numberOfLines={1}>
// // //                 {videoData.title}
// // //               </Text>
              
// // //               <TouchableOpacity 
// // //                 style={styles.controlButton}
// // //                 onPress={toggleFullscreen}
// // //               >
// // //                 <Icon 
// // //                   name={isFullscreen ? "fullscreen-exit" : "fullscreen"} 
// // //                   size={24} 
// // //                   color="#fff" 
// // //                 />
// // //               </TouchableOpacity>
// // //             </View>
            
// // //             {/* Middle Controls */}
// // //             <View style={styles.middleControls}>
// // //               <TouchableOpacity 
// // //                 style={styles.seekButton}
// // //                 onPress={seekBackward}
// // //               >
// // //                 <Icon name="replay-10" size={30} color="#fff" />
// // //               </TouchableOpacity>
              
// // //               <TouchableOpacity 
// // //                 style={styles.playPauseButton}
// // //                 onPress={togglePlayPause}
// // //               >
// // //                 <Icon 
// // //                   name={isPlaying ? "pause" : "play-arrow"} 
// // //                   size={40} 
// // //                   color="#fff" 
// // //                 />
// // //               </TouchableOpacity>
              
// // //               <TouchableOpacity 
// // //                 style={styles.seekButton}
// // //                 onPress={seekForward}
// // //               >
// // //                 <Icon name="forward-10" size={30} color="#fff" />
// // //               </TouchableOpacity>
// // //             </View>
            
// // //             {/* Bottom Controls */}
// // //             <View style={styles.bottomControls}>
// // //               <Text style={styles.timeText}>
// // //                 {formatTime(currentTime)}
// // //               </Text>
              
// // //               {/* Progress Bar */}
// // //               <View style={styles.progressBarContainer}>
// // //                 <View style={styles.progressBarBackground}>
// // //                   <View 
// // //                     style={[
// // //                       styles.progressBarFill,
// // //                       { width: `${progress}%` }
// // //                     ]} 
// // //                   />
// // //                 </View>
// // //               </View>
              
// // //               <Text style={styles.timeText}>
// // //                 {formatTime(duration)}
// // //               </Text>
// // //             </View>
// // //           </Animated.View>
// // //         </TouchableOpacity>
// // //       </View>
      
// // //       {/* Video Info Section (Only show when not in fullscreen) */}
// // //       {!isFullscreen && (
// // //         <ScrollView style={styles.infoContainer}>
// // //           {/* Video Title and Channel Info */}
// // //           <View style={styles.videoInfo}>
// // //             <Text style={styles.title}>
// // //               {videoData.title}
// // //             </Text>
            
// // //             <View style={styles.channelInfo}>
// // //               <Image 
// // //                 source={{ uri: videoData.avatar }}
// // //                 style={styles.channelAvatar}
// // //               />
// // //               <View style={styles.channelDetails}>
// // //                 <Text style={styles.channelName}>
// // //                   {videoData.channel}
// // //                 </Text>
// // //                 <Text style={styles.subscribers}>
// // //                   1.2M subscribers
// // //                 </Text>
// // //               </View>
// // //               <TouchableOpacity style={styles.subscribeButton}>
// // //                 <Text style={styles.subscribeText}>SUBSCRIBE</Text>
// // //               </TouchableOpacity>
// // //             </View>
// // //           </View>
          
// // //           {/* Video Stats */}
// // //           <View style={styles.videoStats}>
// // //             <Text style={styles.views}>{videoData.views}</Text>
// // //             <Text style={styles.dot}>•</Text>
// // //             <Text style={styles.date}>{videoData.uploadTime}</Text>
// // //           </View>
          
// // //           {/* Action Buttons */}
// // //           <View style={styles.actionButtons}>
// // //             <TouchableOpacity style={styles.actionButton}>
// // //               <Ionicons name="thumbs-up-outline" size={20} color="#fff" />
// // //               <Text style={styles.actionText}>{videoData.likes}</Text>
// // //             </TouchableOpacity>
            
// // //             <TouchableOpacity style={styles.actionButton}>
// // //               <Ionicons name="thumbs-down-outline" size={20} color="#fff" />
// // //               <Text style={styles.actionText}>Dislike</Text>
// // //             </TouchableOpacity>
            
// // //             <TouchableOpacity style={styles.actionButton}>
// // //               <Ionicons name="share-social-outline" size={20} color="#fff" />
// // //               <Text style={styles.actionText}>Share</Text>
// // //             </TouchableOpacity>
            
// // //             <TouchableOpacity style={styles.actionButton}>
// // //               <Ionicons name="download-outline" size={20} color="#fff" />
// // //               <Text style={styles.actionText}>Download</Text>
// // //             </TouchableOpacity>
// // //           </View>
          
// // //           {/* Description */}
// // //           <View style={styles.description}>
// // //             <Text style={styles.descriptionText}>
// // //               {videoData.description}
// // //             </Text>
// // //           </View>
// // //         </ScrollView>
// // //       )}
// // //     </SafeAreaView>
// // //   );
// // // };

// // // // Styles same rahenge...
// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     backgroundColor: '#0f0f0f',
// // //   },
// // //   videoContainer: {
// // //     width: '100%',
// // //     height: height * 0.3,
// // //     backgroundColor: '#000',
// // //     position: 'relative',
// // //   },
// // //   fullscreenVideoContainer: {
// // //     height: height,
// // //   },
// // //   video: {
// // //     width: '100%',
// // //     height: '100%',
// // //   },
// // //   loadingContainer: {
// // //     ...StyleSheet.absoluteFillObject,
// // //     backgroundColor: '#000',
// // //     justifyContent: 'center',
// // //     alignItems: 'center',
// // //   },
// // //   loadingText: {
// // //     color: '#fff',
// // //     marginTop: 10,
// // //     fontSize: 16,
// // //   },
// // //   controlsOverlay: {
// // //     ...StyleSheet.absoluteFillObject,
// // //   },
// // //   controlsContainer: {
// // //     flex: 1,
// // //     justifyContent: 'space-between',
// // //     backgroundColor: 'rgba(0,0,0,0.5)',
// // //   },
// // //   topControls: {
// // //     flexDirection: 'row',
// // //     alignItems: 'center',
// // //     justifyContent: 'space-between',
// // //     paddingHorizontal: 16,
// // //     paddingTop: 16,
// // //   },
// // //   controlButton: {
// // //     padding: 8,
// // //   },
// // //   videoTitle: {
// // //     color: '#fff',
// // //     fontSize: 16,
// // //     fontWeight: '500',
// // //     flex: 1,
// // //     textAlign: 'center',
// // //     marginHorizontal: 16,
// // //   },
// // //   middleControls: {
// // //     flexDirection: 'row',
// // //     justifyContent: 'center',
// // //     alignItems: 'center',
// // //     paddingHorizontal: 16,
// // //   },
// // //   seekButton: {
// // //     padding: 16,
// // //   },
// // //   playPauseButton: {
// // //     backgroundColor: 'rgba(0,0,0,0.7)',
// // //     width: 60,
// // //     height: 60,
// // //     borderRadius: 30,
// // //     justifyContent: 'center',
// // //     alignItems: 'center',
// // //     marginHorizontal: 20,
// // //   },
// // //   bottomControls: {
// // //     flexDirection: 'row',
// // //     alignItems: 'center',
// // //     paddingHorizontal: 16,
// // //     paddingBottom: 16,
// // //   },
// // //   timeText: {
// // //     color: '#fff',
// // //     fontSize: 12,
// // //     minWidth: 40,
// // //   },
// // //   progressBarContainer: {
// // //     flex: 1,
// // //     marginHorizontal: 8,
// // //   },
// // //   progressBarBackground: {
// // //     height: 4,
// // //     backgroundColor: 'rgba(255,255,255,0.3)',
// // //     borderRadius: 2,
// // //     overflow: 'hidden',
// // //   },
// // //   progressBarFill: {
// // //     height: '100%',
// // //     backgroundColor: '#FF0000',
// // //     borderRadius: 2,
// // //   },
// // //   infoContainer: {
// // //     flex: 1,
// // //     backgroundColor: '#0f0f0f',
// // //   },
// // //   videoInfo: {
// // //     padding: 16,
// // //     borderBottomWidth: 1,
// // //     borderBottomColor: '#272727',
// // //   },
// // //   title: {
// // //     color: '#fff',
// // //     fontSize: 18,
// // //     fontWeight: 'bold',
// // //     marginBottom: 12,
// // //     lineHeight: 24,
// // //   },
// // //   channelInfo: {
// // //     flexDirection: 'row',
// // //     alignItems: 'center',
// // //   },
// // //   channelAvatar: {
// // //     width: 40,
// // //     height: 40,
// // //     borderRadius: 20,
// // //     marginRight: 12,
// // //   },
// // //   channelDetails: {
// // //     flex: 1,
// // //   },
// // //   channelName: {
// // //     color: '#fff',
// // //     fontSize: 16,
// // //     fontWeight: '500',
// // //   },
// // //   subscribers: {
// // //     color: '#aaa',
// // //     fontSize: 12,
// // //   },
// // //   subscribeButton: {
// // //     backgroundColor: '#cc0000',
// // //     paddingHorizontal: 16,
// // //     paddingVertical: 8,
// // //     borderRadius: 18,
// // //   },
// // //   subscribeText: {
// // //     color: '#fff',
// // //     fontSize: 14,
// // //     fontWeight: 'bold',
// // //   },
// // //   videoStats: {
// // //     flexDirection: 'row',
// // //     alignItems: 'center',
// // //     paddingHorizontal: 16,
// // //     paddingVertical: 8,
// // //     borderBottomWidth: 1,
// // //     borderBottomColor: '#272727',
// // //   },
// // //   views: {
// // //     color: '#aaa',
// // //     fontSize: 14,
// // //   },
// // //   dot: {
// // //     color: '#aaa',
// // //     marginHorizontal: 8,
// // //   },
// // //   date: {
// // //     color: '#aaa',
// // //     fontSize: 14,
// // //   },
// // //   actionButtons: {
// // //     flexDirection: 'row',
// // //     justifyContent: 'space-around',
// // //     paddingVertical: 16,
// // //     borderBottomWidth: 1,
// // //     borderBottomColor: '#272727',
// // //   },
// // //   actionButton: {
// // //     alignItems: 'center',
// // //   },
// // //   actionText: {
// // //     color: '#aaa',
// // //     fontSize: 12,
// // //     marginTop: 4,
// // //   },
// // //   description: {
// // //     padding: 16,
// // //   },
// // //   descriptionText: {
// // //     color: '#fff',
// // //     fontSize: 14,
// // //     lineHeight: 20,
// // //   },
// // // });

// // // export default VideoPlayerScreen;

// // // screens/VideoPlayerScreen.js - FIXED VERSION WITH DYNAMIC DATA
// // import React, { useState, useRef, useEffect } from 'react';
// // import {
// //   View,
// //   Text,
// //   StyleSheet,
// //   SafeAreaView,
// //   StatusBar,
// //   TouchableOpacity,
// //   Dimensions,
// //   ActivityIndicator,
// //   ScrollView,
// //   Image,
// //   Animated,
// //   Alert
// // } from 'react-native';
// // import { Video } from 'react-native-video';
// // import Icon from 'react-native-vector-icons/MaterialIcons';
// // import Feather from 'react-native-vector-icons/Feather';
// // import Ionicons from 'react-native-vector-icons/Ionicons';
// // import { toggleVideoLike, followArtist, unfollowArtist } from '../Services/mobile-api';
// // import { mobile_siteConfig } from '../Services/mobile-siteConfig';

// // const { width, height } = Dimensions.get('window');

// // const VideoPlayerScreen = ({ route, navigation }) => {
// //   const { videoData } = route.params;
  
// //   const videoRef = useRef(null);
// //   const [isLoading, setIsLoading] = useState(true);
// //   const [isPlaying, setIsPlaying] = useState(true);
// //   const [showControls, setShowControls] = useState(true);
// //   const [currentTime, setCurrentTime] = useState(0);
// //   const [duration, setDuration] = useState(0);
// //   const [isBuffering, setIsBuffering] = useState(false);
// //   const [isFullscreen, setIsFullscreen] = useState(false);
// //   const [isLiked, setIsLiked] = useState(videoData.isLiked || false);
// //   const [isFollowing, setIsFollowing] = useState(videoData.artist?.isFavorite || false);
// //   const [likesCount, setLikesCount] = useState(videoData.likes || 0);
// //   const [isFollowLoading, setIsFollowLoading] = useState(false);
  
// //   const controlsOpacity = useRef(new Animated.Value(1)).current;

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

// //   // Format numbers
// //   const formatNumber = (num) => {
// //     if (!num) return '0';
// //     if (num >= 1000000) {
// //       return `${(num / 1000000).toFixed(1)}M`;
// //     } else if (num >= 1000) {
// //       return `${(num / 1000).toFixed(1)}K`;
// //     }
// //     return `${num}`;
// //   };

// //   // Format followers
// //   const formatFollowers = (followers) => {
// //     if (!followers) return '0 followers';
// //     if (followers >= 1000000) {
// //       return `${(followers / 1000000).toFixed(1)}M followers`;
// //     } else if (followers >= 1000) {
// //       return `${(followers / 1000).toFixed(1)}K followers`;
// //     }
// //     return `${followers} followers`;
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

// //   // Handle like/unlike
// //   const handleToggleLike = async () => {
// //     try {
// //       console.log('❤️ Toggling like for video:', videoData.id);
      
// //       const response = await toggleVideoLike(videoData.id);
      
// //       if (response.success) {
// //         setIsLiked(!isLiked);
// //         setLikesCount(prev => isLiked ? prev - 1 : prev + 1);
// //         console.log('✅ Like toggled successfully');
// //       } else {
// //         Alert.alert('Error', response.message || 'Failed to toggle like');
// //       }
// //     } catch (error) {
// //       console.error('❌ Toggle like error:', error);
// //       Alert.alert('Error', 'Failed to toggle like');
// //     }
// //   };

// //   // Handle follow/unfollow
// //   const handleFollowToggle = async () => {
// //     if (isFollowLoading) return;
    
// //     try {
// //       setIsFollowLoading(true);
// //       const artistId = videoData.artist?.id;
      
// //       if (!artistId) {
// //         Alert.alert('Error', 'Artist information not available');
// //         return;
// //       }

// //       if (isFollowing) {
// //         // Unfollow artist
// //         console.log('👤 Unfollowing artist:', artistId);
// //         const response = await unfollowArtist(artistId);
        
// //         if (response.success) {
// //           setIsFollowing(false);
// //           console.log('✅ Artist unfollowed successfully');
// //         } else {
// //           Alert.alert('Error', response.message || 'Failed to unfollow artist');
// //         }
// //       } else {
// //         // Follow artist
// //         console.log('👤 Following artist:', artistId);
// //         const response = await followArtist(artistId);
        
// //         if (response.success) {
// //           setIsFollowing(true);
// //           console.log('✅ Artist followed successfully');
// //         } else {
// //           Alert.alert('Error', response.message || 'Failed to follow artist');
// //         }
// //       }
// //     } catch (error) {
// //       console.error('❌ Follow toggle error:', error);
// //       Alert.alert('Error', 'Something went wrong');
// //     } finally {
// //       setIsFollowLoading(false);
// //     }
// //   };

// //   // Controls functions
// //   const showControlsFunc = () => {
// //     setShowControls(true);
// //     Animated.timing(controlsOpacity, {
// //       toValue: 1,
// //       duration: 300,
// //       useNativeDriver: true,
// //     }).start();
// //   };

// //   const hideControlsFunc = () => {
// //     Animated.timing(controlsOpacity, {
// //       toValue: 0,
// //       duration: 300,
// //       useNativeDriver: true,
// //     }).start(() => {
// //       setShowControls(false);
// //     });
// //   };

// //   // Controls hide karne ka timer
// //   useEffect(() => {
// //     if (showControls && isPlaying) {
// //       const timer = setTimeout(() => {
// //         hideControlsFunc();
// //       }, 3000);
// //       return () => clearTimeout(timer);
// //     }
// //   }, [showControls, isPlaying]);

// //   const togglePlayPause = () => {
// //     setIsPlaying(!isPlaying);
// //   };

// //   const seekForward = () => {
// //     if (videoRef.current) {
// //       videoRef.current.seek(currentTime + 10);
// //     }
// //   };

// //   const seekBackward = () => {
// //     if (videoRef.current) {
// //       videoRef.current.seek(Math.max(0, currentTime - 10));
// //     }
// //   };

// //   const toggleFullscreen = () => {
// //     setIsFullscreen(!isFullscreen);
// //   };

// //   const formatTime = (seconds) => {
// //     if (!seconds) return '0:00';
// //     const mins = Math.floor(seconds / 60);
// //     const secs = Math.floor(seconds % 60);
// //     return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
// //   };

// //   const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

// //   return (
// //     <SafeAreaView style={styles.container}>
// //       <StatusBar barStyle="light-content" backgroundColor="#000" />
      
// //       {/* Video Player Container */}
// //       <View style={[styles.videoContainer, isFullscreen && styles.fullscreenVideoContainer]}>
// //         <Video
// //           ref={videoRef}
// //           source={{ uri: videoData.videoUrl }}
// //           style={styles.video}
// //           paused={!isPlaying}
// //           resizeMode="contain"
// //           onLoadStart={() => setIsLoading(true)}
// //           onLoad={(data) => {
// //             setIsLoading(false);
// //             setDuration(data.duration);
// //             console.log('✅ Video loaded successfully');
// //           }}
// //           onProgress={(data) => {
// //             setCurrentTime(data.currentTime);
// //           }}
// //           onBuffer={({ isBuffering: buffering }) => {
// //             setIsBuffering(buffering);
// //             console.log(buffering ? '🔄 Buffering...' : '✅ Buffering complete');
// //           }}
// //           onError={(error) => {
// //             console.log('❌ Video error:', error);
// //             setIsLoading(false);
// //           }}
// //           onEnd={() => {
// //             console.log('🎬 Video ended');
// //             setIsPlaying(false);
// //           }}
// //           repeat={false}
// //           controls={false}
// //         />
        
// //         {/* Loading/Buffering Indicator */}
// //         {(isLoading || isBuffering) && (
// //           <View style={styles.loadingContainer}>
// //             <ActivityIndicator size="large" color="#FF0000" />
// //             <Text style={styles.loadingText}>
// //               {isBuffering ? 'Buffering...' : 'Loading video...'}
// //             </Text>
// //           </View>
// //         )}
        
// //         {/* Video Controls Overlay */}
// //         <TouchableOpacity 
// //           style={styles.controlsOverlay}
// //           activeOpacity={1}
// //           onPress={() => {
// //             if (showControls) {
// //               hideControlsFunc();
// //             } else {
// //               showControlsFunc();
// //             }
// //           }}
// //         >
// //           <Animated.View 
// //             style={[
// //               styles.controlsContainer,
// //               { opacity: controlsOpacity }
// //             ]}
// //           >
// //             {/* Top Controls */}
// //             <View style={styles.topControls}>
// //               <TouchableOpacity 
// //                 style={styles.controlButton}
// //                 onPress={() => navigation.goBack()}
// //               >
// //                 <Icon name="arrow-back" size={24} color="#fff" />
// //               </TouchableOpacity>
              
// //               <Text style={styles.videoTitle} numberOfLines={1}>
// //                 {videoData.title}
// //               </Text>
              
// //               <TouchableOpacity 
// //                 style={styles.controlButton}
// //                 onPress={toggleFullscreen}
// //               >
// //                 <Icon 
// //                   name={isFullscreen ? "fullscreen-exit" : "fullscreen"} 
// //                   size={24} 
// //                   color="#fff" 
// //                 />
// //               </TouchableOpacity>
// //             </View>
            
// //             {/* Middle Controls */}
// //             <View style={styles.middleControls}>
// //               <TouchableOpacity 
// //                 style={styles.seekButton}
// //                 onPress={seekBackward}
// //               >
// //                 <Icon name="replay-10" size={30} color="#fff" />
// //               </TouchableOpacity>
              
// //               <TouchableOpacity 
// //                 style={styles.playPauseButton}
// //                 onPress={togglePlayPause}
// //               >
// //                 <Icon 
// //                   name={isPlaying ? "pause" : "play-arrow"} 
// //                   size={40} 
// //                   color="#fff" 
// //                 />
// //               </TouchableOpacity>
              
// //               <TouchableOpacity 
// //                 style={styles.seekButton}
// //                 onPress={seekForward}
// //               >
// //                 <Icon name="forward-10" size={30} color="#fff" />
// //               </TouchableOpacity>
// //             </View>
            
// //             {/* Bottom Controls */}
// //             <View style={styles.bottomControls}>
// //               <Text style={styles.timeText}>
// //                 {formatTime(currentTime)}
// //               </Text>
              
// //               {/* Progress Bar */}
// //               <View style={styles.progressBarContainer}>
// //                 <View style={styles.progressBarBackground}>
// //                   <View 
// //                     style={[
// //                       styles.progressBarFill,
// //                       { width: `${progress}%` }
// //                     ]} 
// //                   />
// //                 </View>
// //               </View>
              
// //               <Text style={styles.timeText}>
// //                 {formatTime(duration)}
// //               </Text>
// //             </View>
// //           </Animated.View>
// //         </TouchableOpacity>
// //       </View>
      
// //       {/* Video Info Section (Only show when not in fullscreen) */}
// //       {!isFullscreen && (
// //         <ScrollView style={styles.infoContainer} showsVerticalScrollIndicator={false}>
// //           {/* Video Title and Channel Info */}
// //           <View style={styles.videoInfo}>
// //             <Text style={styles.title}>
// //               {videoData.title}
// //             </Text>
            
// //             {/* ✅ UPDATED: Dynamic Video Stats */}
// //             <View style={styles.videoStats}>
// //               <View style={styles.viewsContainer}>
// //                 <Ionicons name="eye" size={14} color="#aaa" />
// //                 <Text style={styles.viewsText}>{formatNumber(videoData.views)} views</Text>
// //               </View>
              
// //               <Text style={styles.dot}>•</Text>
              
// //               <Text style={styles.date}>
// //                 {formatDate(videoData.createdAt)}
// //               </Text>
// //             </View>

// //             {/* ✅ UPDATED: Artist Info with Follow Button */}
// //             <View style={styles.artistContainer}>
// //               <View style={styles.avatarContainer}>
// //                 <Image 
// //                   source={{ uri: getImageUrl(videoData.artist?.profilePic) }}
// //                   style={styles.artistAvatar}
// //                 />
// //                 <View style={styles.avatarFallback}>
// //                   <Text style={styles.avatarFallbackText}>
// //                     {videoData.artist?.name ? videoData.artist.name.charAt(0).toUpperCase() : 'A'}
// //                   </Text>
// //                 </View>
// //               </View>
              
// //               <View style={styles.artistDetails}>
// //                 <View style={styles.artistNameContainer}>
// //                   <Text style={styles.artistName}>{videoData.artist?.name}</Text>
// //                   {videoData.artist?.isVerified && (
// //                     <Ionicons name="checkmark-circle" size={16} color="#1DB954" style={styles.verifiedIcon} />
// //                   )}
// //                 </View>
// //                 <Text style={styles.followersText}>
// //                   {formatFollowers(videoData.artist?.followers)}
// //                 </Text>
// //               </View>
              
// //               {/* ✅ FOLLOW BUTTON */}
// //               <TouchableOpacity 
// //                 style={[
// //                   styles.followButton,
// //                   isFollowing ? styles.followingButton : styles.notFollowingButton
// //                 ]}
// //                 onPress={handleFollowToggle}
// //                 disabled={isFollowLoading}
// //               >
// //                 {isFollowLoading ? (
// //                   <ActivityIndicator size="small" color={isFollowing ? "#FF0000" : "#fff"} />
// //                 ) : (
// //                   <Text style={[
// //                     styles.followButtonText,
// //                     isFollowing ? styles.followingButtonText : styles.notFollowingButtonText
// //                   ]}>
// //                     {isFollowing ? 'Following' : 'Follow'}
// //                   </Text>
// //                 )}
// //               </TouchableOpacity>
// //             </View>
// //           </View>
          
// //           {/* ✅ UPDATED: Action Buttons with Dynamic Data */}
// //           <View style={styles.actionButtons}>
// //             <TouchableOpacity 
// //               style={styles.actionButton}
// //               onPress={handleToggleLike}
// //             >
// //               <Ionicons 
// //                 name={isLiked ? "heart" : "heart-outline"} 
// //                 size={24} 
// //                 color={isLiked ? "#FF0000" : "#fff"} 
// //               />
// //               <Text style={styles.actionText}>{formatNumber(likesCount)}</Text>
// //             </TouchableOpacity>
            
// //             <TouchableOpacity style={styles.actionButton}>
// //               <Ionicons name="share-social-outline" size={24} color="#fff" />
// //               <Text style={styles.actionText}>Share</Text>
// //             </TouchableOpacity>
            
// //             <TouchableOpacity style={styles.actionButton}>
// //               <Ionicons name="download-outline" size={24} color="#fff" />
// //               <Text style={styles.actionText}>Download</Text>
// //             </TouchableOpacity>
// //           </View>
          
// //           {/* ✅ UPDATED: Dynamic Description */}
// //           {videoData.description && (
// //             <View style={styles.description}>
// //               <Text style={styles.descriptionTitle}>Description</Text>
// //               <Text style={styles.descriptionText}>
// //                 {videoData.description}
// //               </Text>
// //             </View>
// //           )}

// //           {/* Additional Video Info */}
// //           <View style={styles.additionalInfo}>
// //             {videoData.language && (
// //               <View style={styles.infoRow}>
// //                 <Text style={styles.infoLabel}>Language:</Text>
// //                 <Text style={styles.infoValue}>{videoData.language}</Text>
// //               </View>
// //             )}
            
// //             {videoData.mood && (
// //               <View style={styles.infoRow}>
// //                 <Text style={styles.infoLabel}>Category:</Text>
// //                 <Text style={styles.infoValue}>{videoData.mood}</Text>
// //               </View>
// //             )}
            
// //             {videoData.genre && (
// //               <View style={styles.infoRow}>
// //                 <Text style={styles.infoLabel}>Genre:</Text>
// //                 <Text style={styles.infoValue}>{videoData.genre}</Text>
// //               </View>
// //             )}
// //           </View>
// //         </ScrollView>
// //       )}
// //     </SafeAreaView>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#0f0f0f',
// //   },
// //   videoContainer: {
// //     width: '100%',
// //     height: height * 0.3,
// //     backgroundColor: '#000',
// //     position: 'relative',
// //   },
// //   fullscreenVideoContainer: {
// //     height: height,
// //   },
// //   video: {
// //     width: '100%',
// //     height: '100%',
// //   },
// //   loadingContainer: {
// //     ...StyleSheet.absoluteFillObject,
// //     backgroundColor: '#000',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   loadingText: {
// //     color: '#fff',
// //     marginTop: 10,
// //     fontSize: 16,
// //   },
// //   controlsOverlay: {
// //     ...StyleSheet.absoluteFillObject,
// //   },
// //   controlsContainer: {
// //     flex: 1,
// //     justifyContent: 'space-between',
// //     backgroundColor: 'rgba(0,0,0,0.5)',
// //   },
// //   topControls: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     justifyContent: 'space-between',
// //     paddingHorizontal: 16,
// //     paddingTop: 16,
// //   },
// //   controlButton: {
// //     padding: 8,
// //   },
// //   videoTitle: {
// //     color: '#fff',
// //     fontSize: 16,
// //     fontWeight: '500',
// //     flex: 1,
// //     textAlign: 'center',
// //     marginHorizontal: 16,
// //   },
// //   middleControls: {
// //     flexDirection: 'row',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     paddingHorizontal: 16,
// //   },
// //   seekButton: {
// //     padding: 16,
// //   },
// //   playPauseButton: {
// //     backgroundColor: 'rgba(0,0,0,0.7)',
// //     width: 60,
// //     height: 60,
// //     borderRadius: 30,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     marginHorizontal: 20,
// //   },
// //   bottomControls: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     paddingHorizontal: 16,
// //     paddingBottom: 16,
// //   },
// //   timeText: {
// //     color: '#fff',
// //     fontSize: 12,
// //     minWidth: 40,
// //   },
// //   progressBarContainer: {
// //     flex: 1,
// //     marginHorizontal: 8,
// //   },
// //   progressBarBackground: {
// //     height: 4,
// //     backgroundColor: 'rgba(255,255,255,0.3)',
// //     borderRadius: 2,
// //     overflow: 'hidden',
// //   },
// //   progressBarFill: {
// //     height: '100%',
// //     backgroundColor: '#FF0000',
// //     borderRadius: 2,
// //   },
// //   infoContainer: {
// //     flex: 1,
// //     backgroundColor: '#0f0f0f',
// //   },
// //   videoInfo: {
// //     padding: 16,
// //     borderBottomWidth: 1,
// //     borderBottomColor: '#272727',
// //   },
// //   title: {
// //     color: '#fff',
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //     marginBottom: 12,
// //     lineHeight: 24,
// //   },
// //   // ✅ UPDATED: Video Stats
// //   videoStats: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     marginBottom: 16,
// //   },
// //   viewsContainer: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //   },
// //   viewsText: {
// //     color: '#aaa',
// //     fontSize: 14,
// //     marginLeft: 4,
// //   },
// //   dot: {
// //     color: '#aaa',
// //     marginHorizontal: 8,
// //   },
// //   date: {
// //     color: '#aaa',
// //     fontSize: 14,
// //   },
// //   // ✅ UPDATED: Artist Container
// //   artistContainer: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     marginTop: 12,
// //   },
// //   avatarContainer: {
// //     position: 'relative',
// //     marginRight: 12,
// //   },
// //   artistAvatar: {
// //     width: 50,
// //     height: 50,
// //     borderRadius: 25,
// //     backgroundColor: '#333',
// //   },
// //   avatarFallback: {
// //     position: 'absolute',
// //     top: 0,
// //     left: 0,
// //     width: 50,
// //     height: 50,
// //     borderRadius: 25,
// //     backgroundColor: '#FF0000',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     zIndex: -1,
// //   },
// //   avatarFallbackText: {
// //     color: '#fff',
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //   },
// //   artistDetails: {
// //     flex: 1,
// //   },
// //   artistNameContainer: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     marginBottom: 4,
// //   },
// //   artistName: {
// //     color: '#fff',
// //     fontSize: 16,
// //     fontWeight: 'bold',
// //   },
// //   verifiedIcon: {
// //     marginLeft: 6,
// //   },
// //   followersText: {
// //     color: '#aaa',
// //     fontSize: 14,
// //   },
// //   // ✅ FOLLOW BUTTON STYLES
// //   followButton: {
// //     paddingHorizontal: 20,
// //     paddingVertical: 8,
// //     borderRadius: 20,
// //     minWidth: 80,
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// //   notFollowingButton: {
// //     backgroundColor: '#FF0000',
// //   },
// //   followingButton: {
// //     backgroundColor: 'rgba(255, 255, 255, 0.1)',
// //     borderWidth: 1,
// //     borderColor: '#FF0000',
// //   },
// //   followButtonText: {
// //     fontSize: 14,
// //     fontWeight: 'bold',
// //   },
// //   notFollowingButtonText: {
// //     color: '#fff',
// //   },
// //   followingButtonText: {
// //     color: '#FF0000',
// //   },
// //   actionButtons: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-around',
// //     paddingVertical: 16,
// //     borderBottomWidth: 1,
// //     borderBottomColor: '#272727',
// //   },
// //   actionButton: {
// //     alignItems: 'center',
// //     padding: 8,
// //   },
// //   actionText: {
// //     color: '#aaa',
// //     fontSize: 12,
// //     marginTop: 4,
// //   },
// //   description: {
// //     padding: 16,
// //     borderBottomWidth: 1,
// //     borderBottomColor: '#272727',
// //   },
// //   descriptionTitle: {
// //     color: '#fff',
// //     fontSize: 16,
// //     fontWeight: 'bold',
// //     marginBottom: 8,
// //   },
// //   descriptionText: {
// //     color: '#aaa',
// //     fontSize: 14,
// //     lineHeight: 20,
// //   },
// //   additionalInfo: {
// //     padding: 16,
// //   },
// //   infoRow: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     paddingVertical: 8,
// //     borderBottomWidth: 1,
// //     borderBottomColor: '#272727',
// //   },
// //   infoLabel: {
// //     color: '#fff',
// //     fontSize: 14,
// //     fontWeight: '500',
// //   },
// //   infoValue: {
// //     color: '#aaa',
// //     fontSize: 14,
// //   },
// // });

// // export default VideoPlayerScreen;

// // screens/VideoPlayerScreen.js - FIXED VERSION WITH DYNAMIC FOLLOWERS & VIEWS
// import React, { useState, useRef, useEffect } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   SafeAreaView,
//   StatusBar,
//   TouchableOpacity,
//   Dimensions,
//   ActivityIndicator,
//   ScrollView,
//   Image,
//   Animated,
//   Alert,
//   RefreshControl
// } from 'react-native';
// import { Video } from 'react-native-video';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import Feather from 'react-native-vector-icons/Feather';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import { toggleVideoLike, followArtist, unfollowArtist } from '../Services/mobile-api';
// import { mobile_siteConfig } from '../Services/mobile-siteConfig';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { wp, hp } from "../assets/Global.Css";

// const { width, height } = Dimensions.get('window');

// const VideoPlayerScreen = ({ route, navigation }) => {
//   const { videoData } = route.params;
  
//   const videoRef = useRef(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isPlaying, setIsPlaying] = useState(true);
//   const [showControls, setShowControls] = useState(true);
//   const [currentTime, setCurrentTime] = useState(0);
//   const [duration, setDuration] = useState(0);
//   const [isBuffering, setIsBuffering] = useState(false);
//   const [isFullscreen, setIsFullscreen] = useState(false);
//   const [isLiked, setIsLiked] = useState(videoData.isLiked || false);
//   const [isFollowing, setIsFollowing] = useState(videoData.artist?.isFavorite || false);
//   const [likesCount, setLikesCount] = useState(videoData.likes || 0);
//   const [isFollowLoading, setIsFollowLoading] = useState(false);
//   const [refreshing, setRefreshing] = useState(false);
  
//   // ✅ DYNAMIC STATE FOR FOLLOWERS AND VIEWS
//   const [followersCount, setFollowersCount] = useState(videoData.artist?.followers || 0);
//   const [viewsCount, setViewsCount] = useState(videoData.views || 0);
  
//   const controlsOpacity = useRef(new Animated.Value(1)).current;

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

//   // ✅ GET LOCAL FOLLOW STATUS FOR FOLLOWERS COUNT
//   const getLocalFollowStatus = async (artistId) => {
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

//   // ✅ GET LOCAL FOLLOWERS COUNT
//   const getLocalFollowersCount = async (artistId) => {
//     try {
//       const storedCount = await AsyncStorage.getItem('artist_followers_count');
//       if (storedCount) {
//         const followersCountMap = JSON.parse(storedCount);
//         return followersCountMap[artistId] !== undefined ? followersCountMap[artistId] : null;
//       }
//       return null;
//     } catch (error) {
//       console.log('❌ Local followers count check error:', error);
//       return null;
//     }
//   };

//   // ✅ LOAD DYNAMIC DATA ON MOUNT
//   useEffect(() => {
//     loadDynamicData();
//   }, []);

//   const loadDynamicData = async () => {
//     try {
//       const artistId = videoData.artist?.id;
      
//       if (artistId) {
//         // ✅ Check local follow status first
//         const localFollowStatus = await getLocalFollowStatus(artistId);
//         if (localFollowStatus !== null) {
//           setIsFollowing(localFollowStatus);
//         }
        
//         // ✅ Check local followers count
//         const localFollowersCount = await getLocalFollowersCount(artistId);
//         if (localFollowersCount !== null) {
//           setFollowersCount(localFollowersCount);
//         } else {
//           // Agar local count nahi hai to API data use karo
//           setFollowersCount(videoData.artist?.followers || 0);
//         }
//       }
      
//       // ✅ Views count set karo
//       setViewsCount(videoData.views || 0);
      
//     } catch (error) {
//       console.log('❌ Error loading dynamic data:', error);
//     }
//   };

//   // Format numbers
//   const formatNumber = (num) => {
//     if (!num) return '0';
//     if (num >= 1000000) {
//       return `${(num / 1000000).toFixed(1)}M`;
//     } else if (num >= 1000) {
//       return `${(num / 1000).toFixed(1)}K`;
//     }
//     return `${num}`;
//   };

//   // Format followers
//   const formatFollowers = (followers) => {
//     if (!followers) return '0 followers';
//     if (followers >= 1000000) {
//       return `${(followers / 1000000).toFixed(1)}M followers`;
//     } else if (followers >= 1000) {
//       return `${(followers / 1000).toFixed(1)}K followers`;
//     }
//     return `${followers} ${followers === 1 ? 'follower' : 'followers'}`;
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

//   // Handle like/unlike
//   const handleToggleLike = async () => {
//     try {
//       console.log('❤️ Toggling like for video:', videoData.id);
      
//       const response = await toggleVideoLike(videoData.id);
      
//       if (response.success) {
//         setIsLiked(!isLiked);
//         setLikesCount(prev => isLiked ? prev - 1 : prev + 1);
//         console.log('✅ Like toggled successfully');
//       } else {
//         Alert.alert('Error', response.message || 'Failed to toggle like');
//       }
//     } catch (error) {
//       console.error('❌ Toggle like error:', error);
//       Alert.alert('Error', 'Failed to toggle like');
//     }
//   };

//   // ✅ UPDATED: Handle follow/unfollow with DYNAMIC FOLLOWERS COUNT
//   const handleFollowToggle = async () => {
//     if (isFollowLoading) return;
    
//     try {
//       setIsFollowLoading(true);
//       const artistId = videoData.artist?.id;
      
//       if (!artistId) {
//         Alert.alert('Error', 'Artist information not available');
//         return;
//       }

//       // ✅ OPTIMISTIC UPDATE for followers count
//       const currentFollowers = followersCount;
//       let newFollowersCount = currentFollowers;
      
//       if (isFollowing) {
//         // Unfollow artist - followers count decrease
//         newFollowersCount = Math.max(0, currentFollowers - 1);
//       } else {
//         // Follow artist - followers count increase
//         newFollowersCount = currentFollowers + 1;
//       }
      
//       setFollowersCount(newFollowersCount);
//       setIsFollowing(!isFollowing);
      
//       // ✅ Save to local storage immediately
//       await saveLocalFollowStatus(artistId, !isFollowing);
//       await saveLocalFollowersCount(artistId, newFollowersCount);

//       if (isFollowing) {
//         // Unfollow artist
//         console.log('👤 Unfollowing artist:', artistId);
//         const response = await unfollowArtist(artistId);
        
//         if (response.success) {
//           console.log('✅ Artist unfollowed successfully');
//         } else {
//           // Revert on failure
//           console.log('❌ Unfollow failed, reverting UI');
//           setIsFollowing(true);
//           setFollowersCount(currentFollowers);
//           await saveLocalFollowStatus(artistId, true);
//           await saveLocalFollowersCount(artistId, currentFollowers);
//           Alert.alert('Error', response.message || 'Failed to unfollow artist');
//         }
//       } else {
//         // Follow artist
//         console.log('👤 Following artist:', artistId);
//         const response = await followArtist(artistId);
        
//         if (response.success) {
//           console.log('✅ Artist followed successfully');
//         } else {
//           // Revert on failure
//           console.log('❌ Follow failed, reverting UI');
//           setIsFollowing(false);
//           setFollowersCount(currentFollowers);
//           await saveLocalFollowStatus(artistId, false);
//           await saveLocalFollowersCount(artistId, currentFollowers);
//           Alert.alert('Error', response.message || 'Failed to follow artist');
//         }
//       }
//     } catch (error) {
//       console.error('❌ Follow toggle error:', error);
//       // Revert on error
//       const currentFollowers = followersCount;
//       setIsFollowing(!isFollowing);
//       setFollowersCount(isFollowing ? currentFollowers + 1 : currentFollowers - 1);
//       Alert.alert('Error', 'Something went wrong');
//     } finally {
//       setIsFollowLoading(false);
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

//   // ✅ SAVE LOCAL FOLLOWERS COUNT
//   const saveLocalFollowersCount = async (artistId, count) => {
//     try {
//       const storedCount = await AsyncStorage.getItem('artist_followers_count');
//       let followersCountMap = storedCount ? JSON.parse(storedCount) : {};
//       followersCountMap[artistId] = count;
//       await AsyncStorage.setItem('artist_followers_count', JSON.stringify(followersCountMap));
//       console.log(`💾 Local followers count saved: Artist ${artistId} -> ${count}`);
//     } catch (error) {
//       console.log('❌ Local followers count save error:', error);
//     }
//   };

//   // Controls functions
//   const showControlsFunc = () => {
//     setShowControls(true);
//     Animated.timing(controlsOpacity, {
//       toValue: 1,
//       duration: 300,
//       useNativeDriver: true,
//     }).start();
//   };

//   const hideControlsFunc = () => {
//     Animated.timing(controlsOpacity, {
//       toValue: 0,
//       duration: 300,
//       useNativeDriver: true,
//     }).start(() => {
//       setShowControls(false);
//     });
//   };

//   // Controls hide karne ka timer
//   useEffect(() => {
//     if (showControls && isPlaying) {
//       const timer = setTimeout(() => {
//         hideControlsFunc();
//       }, 3000);
//       return () => clearTimeout(timer);
//     }
//   }, [showControls, isPlaying]);

//   const togglePlayPause = () => {
//     setIsPlaying(!isPlaying);
//   };

//   const seekForward = () => {
//     if (videoRef.current) {
//       videoRef.current.seek(currentTime + 10);
//     }
//   };

//   const seekBackward = () => {
//     if (videoRef.current) {
//       videoRef.current.seek(Math.max(0, currentTime - 10));
//     }
//   };

//   const toggleFullscreen = () => {
//     setIsFullscreen(!isFullscreen);
//   };

//   const formatTime = (seconds) => {
//     if (!seconds) return '0:00';
//     const mins = Math.floor(seconds / 60);
//     const secs = Math.floor(seconds % 60);
//     return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
//   };

//   // ✅ REFRESH FUNCTION
//   const onRefresh = async () => {
//     setRefreshing(true);
//     await loadDynamicData();
//     setRefreshing(false);
//   };

//   const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="light-content" backgroundColor="#000" />
      
//       {/* Video Player Container */}
//       <View style={[styles.videoContainer, isFullscreen && styles.fullscreenVideoContainer]}>
//         <Video
//           ref={videoRef}
//           source={{ uri: videoData.videoUrl }}
//           style={styles.video}
//           paused={!isPlaying}
//           resizeMode="contain"
//           onLoadStart={() => setIsLoading(true)}
//           onLoad={(data) => {
//             setIsLoading(false);
//             setDuration(data.duration);
//             console.log('✅ Video loaded successfully');
//           }}
//           onProgress={(data) => {
//             setCurrentTime(data.currentTime);
//           }}
//           onBuffer={({ isBuffering: buffering }) => {
//             setIsBuffering(buffering);
//             console.log(buffering ? '🔄 Buffering...' : '✅ Buffering complete');
//           }}
//           onError={(error) => {
//             console.log('❌ Video error:', error);
//             setIsLoading(false);
//           }}
//           onEnd={() => {
//             console.log('🎬 Video ended');
//             setIsPlaying(false);
//           }}
//           repeat={false}
//           controls={false}
//         />
        
//         {/* Loading/Buffering Indicator */}
//         {(isLoading || isBuffering) && (
//           <View style={styles.loadingContainer}>
//             <ActivityIndicator size="large" color="#FF0000" />
//             <Text style={styles.loadingText}>
//               {isBuffering ? 'Buffering...' : 'Loading video...'}
//             </Text>
//           </View>
//         )}
        
//         {/* Video Controls Overlay */}
//         <TouchableOpacity 
//           style={styles.controlsOverlay}
//           activeOpacity={1}
//           onPress={() => {
//             if (showControls) {
//               hideControlsFunc();
//             } else {
//               showControlsFunc();
//             }
//           }}
//         >
//           <Animated.View 
//             style={[
//               styles.controlsContainer,
//               { opacity: controlsOpacity }
//             ]}
//           >
//             {/* Top Controls */}
//             <View style={styles.topControls}>
//               <TouchableOpacity 
//                 style={styles.controlButton}
//                 onPress={() => navigation.goBack()}
//               >
//                 <Icon name="arrow-back" size={wp(6)} color="#fff" />
//               </TouchableOpacity>
              
//               <Text style={styles.videoTitle} numberOfLines={1}>
//                 {videoData.title}
//               </Text>
              
//               <TouchableOpacity 
//                 style={styles.controlButton}
//                 onPress={toggleFullscreen}
//               >
//                 <Icon 
//                   name={isFullscreen ? "fullscreen-exit" : "fullscreen"} 
//                   size={wp(6)} 
//                   color="#fff" 
//                 />
//               </TouchableOpacity>
//             </View>
            
//             {/* Middle Controls */}
//             <View style={styles.middleControls}>
//               <TouchableOpacity 
//                 style={styles.seekButton}
//                 onPress={seekBackward}
//               >
//                 <Icon name="replay-10" size={wp(8)} color="#fff" />
//               </TouchableOpacity>
              
//               <TouchableOpacity 
//                 style={styles.playPauseButton}
//                 onPress={togglePlayPause}
//               >
//                 <Icon 
//                   name={isPlaying ? "pause" : "play-arrow"} 
//                   size={wp(10)} 
//                   color="#fff" 
//                 />
//               </TouchableOpacity>
              
//               <TouchableOpacity 
//                 style={styles.seekButton}
//                 onPress={seekForward}
//               >
//                 <Icon name="forward-10" size={wp(8)} color="#fff" />
//               </TouchableOpacity>
//             </View>
            
//             {/* Bottom Controls */}
//             <View style={styles.bottomControls}>
//               <Text style={styles.timeText}>
//                 {formatTime(currentTime)}
//               </Text>
              
//               {/* Progress Bar */}
//               <View style={styles.progressBarContainer}>
//                 <View style={styles.progressBarBackground}>
//                   <View 
//                     style={[
//                       styles.progressBarFill,
//                       { width: `${progress}%` }
//                     ]} 
//                   />
//                 </View>
//               </View>
              
//               <Text style={styles.timeText}>
//                 {formatTime(duration)}
//               </Text>
//             </View>
//           </Animated.View>
//         </TouchableOpacity>
//       </View>
      
//       {/* Video Info Section (Only show when not in fullscreen) */}
//       {!isFullscreen && (
//         <ScrollView 
//           style={styles.infoContainer} 
//           showsVerticalScrollIndicator={false}
//           refreshControl={
//             <RefreshControl
//               refreshing={refreshing}
//               onRefresh={onRefresh}
//               colors={['#FF3B3B']}
//               tintColor="#FF3B3B"
//             />
//           }
//         >
//           {/* Video Title and Channel Info */}
//           <View style={styles.videoInfo}>
//             <Text style={styles.title}>
//               {videoData.title}
//             </Text>
            
//             {/* ✅ UPDATED: Dynamic Video Stats with REAL VIEWS COUNT */}
//             <View style={styles.videoStats}>
//               <View style={styles.viewsContainer}>
//                 <Ionicons name="eye" size={wp(3.5)} color="#aaa" />
//                 <Text style={styles.viewsText}>
//                   {formatNumber(viewsCount)} {viewsCount === 1 ? 'view' : 'views'}
//                 </Text>
//               </View>
              
//               <Text style={styles.dot}>•</Text>
              
//               <Text style={styles.date}>
//                 {formatDate(videoData.createdAt)}
//               </Text>
//             </View>

//             {/* ✅ UPDATED: Artist Info with DYNAMIC FOLLOWERS COUNT */}
//             <View style={styles.artistContainer}>
//               <View style={styles.avatarContainer}>
//                 <Image 
//                   source={{ uri: getImageUrl(videoData.artist?.profilePic) }}
//                   style={styles.artistAvatar}
//                 />
//                 <View style={styles.avatarFallback}>
//                   <Text style={styles.avatarFallbackText}>
//                     {videoData.artist?.name ? videoData.artist.name.charAt(0).toUpperCase() : 'A'}
//                   </Text>
//                 </View>
//               </View>
              
//               <View style={styles.artistDetails}>
//                 <View style={styles.artistNameContainer}>
//                   <Text style={styles.artistName}>{videoData.artist?.name}</Text>
//                   {videoData.artist?.isVerified && (
//                     <Ionicons name="checkmark-circle" size={wp(4)} color="#1DB954" style={styles.verifiedIcon} />
//                   )}
//                 </View>
//                 <Text style={styles.followersText}>
//                   {formatFollowers(followersCount)}
//                 </Text>
//               </View>
              
//               {/* ✅ FOLLOW BUTTON WITH DYNAMIC COUNT */}
//               <TouchableOpacity 
//                 style={[
//                   styles.followButton,
//                   isFollowing ? styles.followingButton : styles.notFollowingButton
//                 ]}
//                 onPress={handleFollowToggle}
//                 disabled={isFollowLoading}
//               >
//                 {isFollowLoading ? (
//                   <ActivityIndicator size="small" color={isFollowing ? "#FF0000" : "#fff"} />
//                 ) : (
//                   <Text style={[
//                     styles.followButtonText,
//                     isFollowing ? styles.followingButtonText : styles.notFollowingButtonText
//                   ]}>
//                     {isFollowing ? 'Following' : 'Follow'}
//                   </Text>
//                 )}
//               </TouchableOpacity>
//             </View>
//           </View>
          
//           {/* ✅ UPDATED: Action Buttons with Dynamic Data */}
//           <View style={styles.actionButtons}>
//             <TouchableOpacity 
//               style={styles.actionButton}
//               onPress={handleToggleLike}
//             >
//               <Ionicons 
//                 name={isLiked ? "heart" : "heart-outline"} 
//                 size={wp(6)} 
//                 color={isLiked ? "#FF0000" : "#fff"} 
//               />
//               <Text style={styles.actionText}>{formatNumber(likesCount)}</Text>
//             </TouchableOpacity>
            
//             <TouchableOpacity style={styles.actionButton}>
//               <Ionicons name="share-social-outline" size={wp(6)} color="#fff" />
//               <Text style={styles.actionText}>Share</Text>
//             </TouchableOpacity>
            
//             <TouchableOpacity style={styles.actionButton}>
//               <Ionicons name="download-outline" size={wp(6)} color="#fff" />
//               <Text style={styles.actionText}>Download</Text>
//             </TouchableOpacity>
//           </View>
          
//           {/* ✅ UPDATED: Dynamic Description */}
//           {videoData.description && (
//             <View style={styles.description}>
//               <Text style={styles.descriptionTitle}>Description</Text>
//               <Text style={styles.descriptionText}>
//                 {videoData.description}
//               </Text>
//             </View>
//           )}

//           {/* Additional Video Info */}
//           <View style={styles.additionalInfo}>
//             {videoData.language && (
//               <View style={styles.infoRow}>
//                 <Text style={styles.infoLabel}>Language:</Text>
//                 <Text style={styles.infoValue}>{videoData.language}</Text>
//               </View>
//             )}
            
//             {videoData.mood && (
//               <View style={styles.infoRow}>
//                 <Text style={styles.infoLabel}>Category:</Text>
//                 <Text style={styles.infoValue}>{videoData.mood}</Text>
//               </View>
//             )}
            
//             {videoData.genre && (
//               <View style={styles.infoRow}>
//                 <Text style={styles.infoLabel}>Genre:</Text>
//                 <Text style={styles.infoValue}>{videoData.genre}</Text>
//               </View>
//             )}
//           </View>

//           {/* Bottom Padding */}
//           <View style={styles.bottomPadding} />
//         </ScrollView>
//       )}
//     </SafeAreaView>
//   );
// };

// // ✅ RESPONSIVE STYLES
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#0f0f0f',
//   },
//   videoContainer: {
//     width: '100%',
//     height: hp(30),
//     backgroundColor: '#000',
//     position: 'relative',
//   },
//   fullscreenVideoContainer: {
//     height: hp(100),
//   },
//   video: {
//     width: '100%',
//     height: '100%',
//   },
//   loadingContainer: {
//     ...StyleSheet.absoluteFillObject,
//     backgroundColor: '#000',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   loadingText: {
//     color: '#fff',
//     marginTop: hp(1),
//     fontSize: wp(4),
//   },
//   controlsOverlay: {
//     ...StyleSheet.absoluteFillObject,
//   },
//   controlsContainer: {
//     flex: 1,
//     justifyContent: 'space-between',
//     backgroundColor: 'rgba(0,0,0,0.5)',
//   },
//   topControls: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingHorizontal: wp(4),
//     paddingTop: hp(2),
//   },
//   controlButton: {
//     padding: wp(2),
//   },
//   videoTitle: {
//     color: '#fff',
//     fontSize: wp(4),
//     fontWeight: '500',
//     flex: 1,
//     textAlign: 'center',
//     marginHorizontal: wp(4),
//   },
//   middleControls: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: wp(4),
//   },
//   seekButton: {
//     padding: wp(4),
//   },
//   playPauseButton: {
//     backgroundColor: 'rgba(0,0,0,0.7)',
//     width: wp(15),
//     height: wp(15),
//     borderRadius: wp(7.5),
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginHorizontal: wp(5),
//   },
//   bottomControls: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: wp(4),
//     paddingBottom: hp(2),
//   },
//   timeText: {
//     color: '#fff',
//     fontSize: wp(3),
//     minWidth: wp(10),
//   },
//   progressBarContainer: {
//     flex: 1,
//     marginHorizontal: wp(2),
//   },
//   progressBarBackground: {
//     height: hp(0.5),
//     backgroundColor: 'rgba(255,255,255,0.3)',
//     borderRadius: wp(0.5),
//     overflow: 'hidden',
//   },
//   progressBarFill: {
//     height: '100%',
//     backgroundColor: '#FF0000',
//     borderRadius: wp(0.5),
//   },
//   infoContainer: {
//     flex: 1,
//     backgroundColor: '#0f0f0f',
//   },
//   videoInfo: {
//     padding: wp(4),
//     borderBottomWidth: 1,
//     borderBottomColor: '#272727',
//   },
//   title: {
//     color: '#fff',
//     fontSize: wp(5),
//     fontWeight: 'bold',
//     marginBottom: hp(1.5),
//     lineHeight: hp(3),
//   },
//   // ✅ UPDATED: Video Stats
//   videoStats: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: hp(2),
//   },
//   viewsContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   viewsText: {
//     color: '#aaa',
//     fontSize: wp(3.5),
//     marginLeft: wp(1),
//   },
//   dot: {
//     color: '#aaa',
//     marginHorizontal: wp(2),
//   },
//   date: {
//     color: '#aaa',
//     fontSize: wp(3.5),
//   },
//   // ✅ UPDATED: Artist Container
//   artistContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: hp(1.5),
//   },
//   avatarContainer: {
//     position: 'relative',
//     marginRight: wp(3),
//   },
//   artistAvatar: {
//     width: wp(12),
//     height: wp(12),
//     borderRadius: wp(6),
//     backgroundColor: '#333',
//   },
//   avatarFallback: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: wp(12),
//     height: wp(12),
//     borderRadius: wp(6),
//     backgroundColor: '#FF0000',
//     justifyContent: 'center',
//     alignItems: 'center',
//     zIndex: -1,
//   },
//   avatarFallbackText: {
//     color: '#fff',
//     fontSize: wp(4.5),
//     fontWeight: 'bold',
//   },
//   artistDetails: {
//     flex: 1,
//   },
//   artistNameContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: hp(0.5),
//   },
//   artistName: {
//     color: '#fff',
//     fontSize: wp(4),
//     fontWeight: 'bold',
//   },
//   verifiedIcon: {
//     marginLeft: wp(1.5),
//   },
//   followersText: {
//     color: '#aaa',
//     fontSize: wp(3.5),
//   },
//   // ✅ FOLLOW BUTTON STYLES
//   followButton: {
//     paddingHorizontal: wp(5),
//     paddingVertical: hp(1),
//     borderRadius: wp(5),
//     minWidth: wp(20),
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   notFollowingButton: {
//     backgroundColor: '#FF0000',
//   },
//   followingButton: {
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     borderWidth: 1,
//     borderColor: '#FF0000',
//   },
//   followButtonText: {
//     fontSize: wp(3.5),
//     fontWeight: 'bold',
//   },
//   notFollowingButtonText: {
//     color: '#fff',
//   },
//   followingButtonText: {
//     color: '#FF0000',
//   },
//   actionButtons: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     paddingVertical: hp(2),
//     borderBottomWidth: 1,
//     borderBottomColor: '#272727',
//   },
//   actionButton: {
//     alignItems: 'center',
//     padding: wp(2),
//   },
//   actionText: {
//     color: '#aaa',
//     fontSize: wp(3),
//     marginTop: hp(0.5),
//   },
//   description: {
//     padding: wp(4),
//     borderBottomWidth: 1,
//     borderBottomColor: '#272727',
//   },
//   descriptionTitle: {
//     color: '#fff',
//     fontSize: wp(4.5),
//     fontWeight: 'bold',
//     marginBottom: hp(1),
//   },
//   descriptionText: {
//     color: '#aaa',
//     fontSize: wp(3.8),
//     lineHeight: hp(2.5),
//   },
//   additionalInfo: {
//     padding: wp(4),
//   },
//   infoRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingVertical: hp(1),
//     borderBottomWidth: 1,
//     borderBottomColor: '#272727',
//   },
//   infoLabel: {
//     color: '#fff',
//     fontSize: wp(3.8),
//     fontWeight: '500',
//   },
//   infoValue: {
//     color: '#aaa',
//     fontSize: wp(3.8),
//   },
//   bottomPadding: {
//     height: hp(3),
//   },
// });

// export default VideoPlayerScreen;

// screens/VideoPlayerScreen.js - CORRECTED VERSION
import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
  ScrollView,
  Image,
  Animated,
  Alert,
  RefreshControl
} from 'react-native';
import { Video } from 'react-native-video';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { 
  toggleVideoLike, 
  followArtist, 
  unfollowArtist, 
  trackVideoView 
} from '../Services/mobile-api';
import { mobile_siteConfig } from '../Services/mobile-siteConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { wp, hp } from "../assets/Global.Css";

const { width, height } = Dimensions.get('window');

const VideoPlayerScreen = ({ route, navigation }) => {
  const { videoData } = route.params;
  
  const videoRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showControls, setShowControls] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isBuffering, setIsBuffering] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  // ✅ FIXED: Like state with proper persistence
  const [isLiked, setIsLiked] = useState(videoData.isLiked || false);
  const [likesCount, setLikesCount] = useState(videoData.likes || 0);
  
  const [isFollowing, setIsFollowing] = useState(videoData.artist?.isFavorite || false);
  const [isFollowLoading, setIsFollowLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  
  // ✅ DYNAMIC STATE FOR FOLLOWERS AND VIEWS
  const [followersCount, setFollowersCount] = useState(videoData.artist?.followers || 0);
  const [viewsCount, setViewsCount] = useState(videoData.views || 0);
  const [hasTrackedView, setHasTrackedView] = useState(false);
  
  const controlsOpacity = useRef(new Animated.Value(1)).current;

  // Helper function to get complete video URL
  const getVideoUrl = (videoPath) => {
    if (!videoPath) {
      console.log('❌ Video path is null or undefined');
      return null;
    }
    
    if (videoPath.startsWith('http')) {
      console.log('✅ Using direct video URL:', videoPath);
      return videoPath;
    } else if (videoPath.startsWith('/')) {
      const fullUrl = `${mobile_siteConfig.IMAGE_BASE_URL}${videoPath}`;
      console.log('✅ Constructed video URL:', fullUrl);
      return fullUrl;
    } else {
      const fullUrl = `${mobile_siteConfig.IMAGE_BASE_URL}/${videoPath}`;
      console.log('✅ Constructed video URL with slash:', fullUrl);
      return fullUrl;
    }
  };


  // VideoPlayerScreen.js mein yeh function add karein

// ✅ SAVE LOCAL VIEWS COUNT
const saveLocalViewsCount = async (videoId, count) => {
  try {
    const storedViews = await AsyncStorage.getItem('video_views_count');
    let viewsMap = storedViews ? JSON.parse(storedViews) : {};
    viewsMap[videoId] = count;
    await AsyncStorage.setItem('video_views_count', JSON.stringify(viewsMap));
    console.log(`💾 Local views count saved: Video ${videoId} -> ${count}`);
  } catch (error) {
    console.log('❌ Local views count save error:', error);
  }
};

// ✅ TRACK VIDEO VIEW function mein yeh line add karein
// const handleTrackView = async () => {
//   try {
//     if (hasTrackedView) return;
    
//     console.log('👀 Tracking view for video:', videoData.id);
//     const response = await trackVideoView(videoData.id);
    
//     if (response.success) {
//       setHasTrackedView(true);
//       const newViewsCount = viewsCount + 1;
//       setViewsCount(newViewsCount);
      
//       // ✅ Save to local storage
//       await saveLocalViewsCount(videoData.id, newViewsCount);
      
//       console.log('✅ View tracked successfully');
//     }
//   } catch (error) {
//     console.error('❌ View tracking error:', error);
//     // Fallback: Still increment view count locally
//     setHasTrackedView(true);
//     const newViewsCount = viewsCount + 1;
//     setViewsCount(newViewsCount);
//     await saveLocalViewsCount(videoData.id, newViewsCount);
//   }
// };
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

  // ✅ GET LOCAL FOLLOW STATUS FOR FOLLOWERS COUNT
  const getLocalFollowStatus = async (artistId) => {
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

  // ✅ TRACK VIDEO VIEW
  // const handleTrackView = async () => {
  //   try {
  //     if (hasTrackedView) return; // Prevent multiple counts
      
  //     console.log('👀 Tracking view for video:', videoData.id);
  //     const response = await trackVideoView(videoData.id);
      
  //     if (response.success) {
  //       setHasTrackedView(true);
  //       setViewsCount(prev => prev + 1); // Optimistic update
  //       console.log('✅ View tracked successfully');
  //     }
  //   } catch (error) {
  //     console.error('❌ View tracking error:', error);
  //     // Fallback: Still increment view count locally
  //     setHasTrackedView(true);
  //     setViewsCount(prev => prev + 1);
  //   }
  // };
  // VideoPlayerScreen.js - TEMPORARY FIX WITHOUT TRACK VIEW API

// ✅ MODIFIED: Track video view without API (temporary solution)
const handleTrackView = async () => {
  try {
    if (hasTrackedView) return; // Prevent multiple counts
    
    console.log('👀 Tracking view for video:', videoData.id);
    
    // ✅ TEMPORARY: Direct increment without API call
    setHasTrackedView(true);
    const newViewsCount = viewsCount + 1;
    setViewsCount(newViewsCount);
    
    // ✅ Save to local storage
    await saveLocalViewsCount(videoData.id, newViewsCount);
    
    console.log('✅ View tracked locally');
    
    // ✅ Optional: Try API call if available, but don't fail if it doesn't exist
    try {
      const response = await trackVideoView(videoData.id);
      if (response.success) {
        console.log('✅ View tracked on server');
      }
    } catch (apiError) {
      console.log('⚠️ Track view API not available, using local storage only');
    }
    
  } catch (error) {
    console.error('❌ View tracking error:', error);
    // Fallback: Still increment view count locally
    setHasTrackedView(true);
    const newViewsCount = viewsCount + 1;
    setViewsCount(newViewsCount);
    await saveLocalViewsCount(videoData.id, newViewsCount);
  }
};

  // ✅ LOAD DYNAMIC DATA ON MOUNT
  useEffect(() => {
    loadDynamicData();
  }, []);

  const loadDynamicData = async () => {
    try {
      const videoId = videoData.id;
      const artistId = videoData.artist?.id;
      
      // ✅ Load like data
      const localLikeStatus = await getLocalLikeStatus(videoId);
      if (localLikeStatus !== null) {
        setIsLiked(localLikeStatus);
      }
      
      const localLikesCount = await getLocalLikesCount(videoId);
      if (localLikesCount !== null) {
        setLikesCount(localLikesCount);
      } else {
        setLikesCount(videoData.likes || 0);
      }
      
      if (artistId) {
        // ✅ Check local follow status first
        const localFollowStatus = await getLocalFollowStatus(artistId);
        if (localFollowStatus !== null) {
          setIsFollowing(localFollowStatus);
        }
        
        // ✅ Check local followers count
        const localFollowersCount = await getLocalFollowersCount(artistId);
        if (localFollowersCount !== null) {
          setFollowersCount(localFollowersCount);
        } else {
          setFollowersCount(videoData.artist?.followers || 0);
        }
      }
      
      // ✅ Views count set karo
      setViewsCount(videoData.views || 0);
      
    } catch (error) {
      console.log('❌ Error loading dynamic data:', error);
    }
  };

  // ✅ VIEW TRACKING TRIGGERS
  useEffect(() => {
    // Track view when user watches minimum 10 seconds or 30% of video
    if (duration > 0 && currentTime > 0 && !hasTrackedView) {
      const watchPercentage = (currentTime / duration) * 100;
      
      // Track if watched 10 seconds OR 30% of video
      if (currentTime >= 10 || watchPercentage >= 30) {
        handleTrackView();
      }
    }
  }, [currentTime, duration, hasTrackedView]);

  // Format numbers
  const formatNumber = (num) => {
    if (!num) return '0';
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    } else if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`;
    }
    return `${num}`;
  };

  // Format followers
  const formatFollowers = (followers) => {
    if (!followers) return '0 followers';
    if (followers >= 1000000) {
      return `${(followers / 1000000).toFixed(1)}M followers`;
    } else if (followers >= 1000) {
      return `${(followers / 1000).toFixed(1)}K followers`;
    }
    return `${followers} ${followers === 1 ? 'follower' : 'followers'}`;
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

  // ✅ FIXED: Handle like/unlike with PROPER PERSISTENCE
  const handleToggleLike = async () => {
    try {
      console.log('❤️ Toggling like for video:', videoData.id);
      
      // ✅ OPTIMISTIC UPDATE
      const newIsLiked = !isLiked;
      const newLikesCount = newIsLiked ? likesCount + 1 : Math.max(0, likesCount - 1);
      
      setIsLiked(newIsLiked);
      setLikesCount(newLikesCount);
      
      // ✅ Save to local storage immediately
      await saveLocalLikeStatus(videoData.id, newIsLiked);
      await saveLocalLikesCount(videoData.id, newLikesCount);
      
      const response = await toggleVideoLike(videoData.id);
      
      if (response.success) {
        console.log('✅ Like toggled successfully');
      } else {
        // Revert on failure
        console.log('❌ Like toggle failed, reverting UI');
        setIsLiked(!newIsLiked);
        setLikesCount(likesCount);
        await saveLocalLikeStatus(videoData.id, !newIsLiked);
        await saveLocalLikesCount(videoData.id, likesCount);
        Alert.alert('Error', response.message || 'Failed to toggle like');
      }
    } catch (error) {
      console.error('❌ Toggle like error:', error);
      // Revert on error
      setIsLiked(!isLiked);
      setLikesCount(likesCount);
      Alert.alert('Error', 'Failed to toggle like');
    }
  };

  // ✅ SAVE LOCAL LIKE STATUS
  const saveLocalLikeStatus = async (videoId, status) => {
    try {
      const storedLikes = await AsyncStorage.getItem('video_likes_status');
      let likesMap = storedLikes ? JSON.parse(storedLikes) : {};
      likesMap[videoId] = status;
      await AsyncStorage.setItem('video_likes_status', JSON.stringify(likesMap));
      console.log(`💾 Local like status saved: Video ${videoId} -> ${status}`);
    } catch (error) {
      console.log('❌ Local like status save error:', error);
    }
  };

  // ✅ SAVE LOCAL LIKES COUNT
  const saveLocalLikesCount = async (videoId, count) => {
    try {
      const storedCount = await AsyncStorage.getItem('video_likes_count');
      let likesCountMap = storedCount ? JSON.parse(storedCount) : {};
      likesCountMap[videoId] = count;
      await AsyncStorage.setItem('video_likes_count', JSON.stringify(likesCountMap));
      console.log(`💾 Local likes count saved: Video ${videoId} -> ${count}`);
    } catch (error) {
      console.log('❌ Local likes count save error:', error);
    }
  };

  // ✅ UPDATED: Handle follow/unfollow with DYNAMIC FOLLOWERS COUNT
  const handleFollowToggle = async () => {
    if (isFollowLoading) return;
    
    try {
      setIsFollowLoading(true);
      const artistId = videoData.artist?.id;
      
      if (!artistId) {
        Alert.alert('Error', 'Artist information not available');
        return;
      }

      // ✅ OPTIMISTIC UPDATE for followers count
      const currentFollowers = followersCount;
      let newFollowersCount = currentFollowers;
      
      if (isFollowing) {
        // Unfollow artist - followers count decrease
        newFollowersCount = Math.max(0, currentFollowers - 1);
      } else {
        // Follow artist - followers count increase
        newFollowersCount = currentFollowers + 1;
      }
      
      setFollowersCount(newFollowersCount);
      setIsFollowing(!isFollowing);
      
      // ✅ Save to local storage immediately
      await saveLocalFollowStatus(artistId, !isFollowing);
      await saveLocalFollowersCount(artistId, newFollowersCount);

      if (isFollowing) {
        // Unfollow artist
        console.log('👤 Unfollowing artist:', artistId);
        const response = await unfollowArtist(artistId);
        
        if (response.success) {
          console.log('✅ Artist unfollowed successfully');
        } else {
          // Revert on failure
          console.log('❌ Unfollow failed, reverting UI');
          setIsFollowing(true);
          setFollowersCount(currentFollowers);
          await saveLocalFollowStatus(artistId, true);
          await saveLocalFollowersCount(artistId, currentFollowers);
          Alert.alert('Error', response.message || 'Failed to unfollow artist');
        }
      } else {
        // Follow artist
        console.log('👤 Following artist:', artistId);
        const response = await followArtist(artistId);
        
        if (response.success) {
          console.log('✅ Artist followed successfully');
        } else {
          // Revert on failure
          console.log('❌ Follow failed, reverting UI');
          setIsFollowing(false);
          setFollowersCount(currentFollowers);
          await saveLocalFollowStatus(artistId, false);
          await saveLocalFollowersCount(artistId, currentFollowers);
          Alert.alert('Error', response.message || 'Failed to follow artist');
        }
      }
    } catch (error) {
      console.error('❌ Follow toggle error:', error);
      // Revert on error
      const currentFollowers = followersCount;
      setIsFollowing(!isFollowing);
      setFollowersCount(isFollowing ? currentFollowers + 1 : currentFollowers - 1);
      Alert.alert('Error', 'Something went wrong');
    } finally {
      setIsFollowLoading(false);
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

  // Controls functions
  const showControlsFunc = () => {
    setShowControls(true);
    Animated.timing(controlsOpacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const hideControlsFunc = () => {
    Animated.timing(controlsOpacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setShowControls(false);
    });
  };

  // Controls hide karne ka timer
  useEffect(() => {
    if (showControls && isPlaying) {
      const timer = setTimeout(() => {
        hideControlsFunc();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showControls, isPlaying]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const seekForward = () => {
    if (videoRef.current) {
      videoRef.current.seek(currentTime + 10);
    }
  };

  const seekBackward = () => {
    if (videoRef.current) {
      videoRef.current.seek(Math.max(0, currentTime - 10));
    }
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const formatTime = (seconds) => {
    if (!seconds) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // ✅ REFRESH FUNCTION
  const onRefresh = async () => {
    setRefreshing(true);
    await loadDynamicData();
    setRefreshing(false);
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  // ✅ DEBUG: Video URL check
  useEffect(() => {
    const videoUrl = getVideoUrl(videoData.videoFile || videoData.videoUrl);
    console.log('🎬 Video Data:', {
      id: videoData.id,
      title: videoData.title,
      videoFile: videoData.videoFile,
      videoUrl: videoData.videoUrl,
      finalVideoUrl: videoUrl
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      
      {/* Video Player Container */}
      <View style={[styles.videoContainer, isFullscreen && styles.fullscreenVideoContainer]}>
        <Video
          ref={videoRef}
          source={{ 
            uri: getVideoUrl(videoData.videoFile || videoData.videoUrl) 
          }}
          style={styles.video}
          paused={!isPlaying}
          resizeMode="contain"
          onLoadStart={() => {
            console.log('🔄 Video load started');
            setIsLoading(true);
          }}
          onLoad={(data) => {
            setIsLoading(false);
            setDuration(data.duration);
            console.log('✅ Video loaded successfully, duration:', data.duration);
          }}
          onProgress={(data) => {
            setCurrentTime(data.currentTime);
          }}
          onBuffer={({ isBuffering: buffering }) => {
            setIsBuffering(buffering);
            console.log(buffering ? '🔄 Buffering...' : '✅ Buffering complete');
          }}
          onError={(error) => {
            console.log('❌ Video error:', error);
            setIsLoading(false);
            Alert.alert('Error', 'Video load failed. Please try again.');
          }}
          onEnd={() => {
            console.log('🎬 Video ended');
            setIsPlaying(false);
          }}
          repeat={false}
          controls={false}
        />
        
        {/* Loading/Buffering Indicator */}
        {(isLoading || isBuffering) && (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#FF0000" />
            <Text style={styles.loadingText}>
              {isBuffering ? 'Buffering...' : 'Loading video...'}
            </Text>
          </View>
        )}
        
        {/* Video Controls Overlay */}
        <TouchableOpacity 
          style={styles.controlsOverlay}
          activeOpacity={1}
          onPress={() => {
            if (showControls) {
              hideControlsFunc();
            } else {
              showControlsFunc();
            }
          }}
        >
          <Animated.View 
            style={[
              styles.controlsContainer,
              { opacity: controlsOpacity }
            ]}
          >
            {/* Top Controls */}
            <View style={styles.topControls}>
              <TouchableOpacity 
                style={styles.controlButton}
                onPress={() => navigation.goBack()}
              >
                <Icon name="arrow-back" size={wp(6)} color="#fff" />
              </TouchableOpacity>
              
              <Text style={styles.videoTitle} numberOfLines={1}>
                {videoData.title}
              </Text>
              
              <TouchableOpacity 
                style={styles.controlButton}
                onPress={toggleFullscreen}
              >
                <Icon 
                  name={isFullscreen ? "fullscreen-exit" : "fullscreen"} 
                  size={wp(6)} 
                  color="#fff" 
                />
              </TouchableOpacity>
            </View>
            
            {/* Middle Controls */}
            <View style={styles.middleControls}>
              <TouchableOpacity 
                style={styles.seekButton}
                onPress={seekBackward}
              >
                <Icon name="replay-10" size={wp(8)} color="#fff" />
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={styles.playPauseButton}
                onPress={togglePlayPause}
              >
                <Icon 
                  name={isPlaying ? "pause" : "play-arrow"} 
                  size={wp(10)} 
                  color="#fff" 
                />
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={styles.seekButton}
                onPress={seekForward}
              >
                <Icon name="forward-10" size={wp(8)} color="#fff" />
              </TouchableOpacity>
            </View>
            
            {/* Bottom Controls */}
            <View style={styles.bottomControls}>
              <Text style={styles.timeText}>
                {formatTime(currentTime)}
              </Text>
              
              {/* Progress Bar */}
              <View style={styles.progressBarContainer}>
                <View style={styles.progressBarBackground}>
                  <View 
                    style={[
                      styles.progressBarFill,
                      { width: `${progress}%` }
                    ]} 
                  />
                </View>
              </View>
              
              <Text style={styles.timeText}>
                {formatTime(duration)}
              </Text>
            </View>
          </Animated.View>
        </TouchableOpacity>
      </View>
      
      {/* Video Info Section (Only show when not in fullscreen) */}
      {!isFullscreen && (
        <ScrollView 
          style={styles.infoContainer} 
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
          {/* Video Title and Channel Info */}
          <View style={styles.videoInfo}>
            <Text style={styles.title}>
              {videoData.title}
            </Text>
            
            {/* ✅ UPDATED: Dynamic Video Stats with REAL VIEWS COUNT */}
            <View style={styles.videoStats}>
              <View style={styles.viewsContainer}>
                <Ionicons name="eye" size={wp(3.5)} color="#aaa" />
                <Text style={styles.viewsText}>
                  {formatNumber(viewsCount)} {viewsCount === 1 ? 'view' : 'views'}
                </Text>
              </View>
              
              <Text style={styles.dot}>•</Text>
              
              <Text style={styles.date}>
                {formatDate(videoData.createdAt)}
              </Text>
            </View>

            {/* ✅ UPDATED: Artist Info with DYNAMIC FOLLOWERS COUNT */}
            <View style={styles.artistContainer}>
              <View style={styles.avatarContainer}>
                <Image 
                  source={{ uri: getImageUrl(videoData.artist?.profilePic) }}
                  style={styles.artistAvatar}
                />
                <View style={styles.avatarFallback}>
                  <Text style={styles.avatarFallbackText}>
                    {videoData.artist?.name ? videoData.artist.name.charAt(0).toUpperCase() : 'A'}
                  </Text>
                </View>
              </View>
              
              <View style={styles.artistDetails}>
                <View style={styles.artistNameContainer}>
                  <Text style={styles.artistName}>{videoData.artist?.name}</Text>
                  {videoData.artist?.isVerified && (
                    <Ionicons name="checkmark-circle" size={wp(4)} color="#1DB954" style={styles.verifiedIcon} />
                  )}
                </View>
                <Text style={styles.followersText}>
                  {formatFollowers(followersCount)}
                </Text>
              </View>
              
              {/* ✅ FOLLOW BUTTON WITH DYNAMIC COUNT */}
              <TouchableOpacity 
                style={[
                  styles.followButton,
                  isFollowing ? styles.followingButton : styles.notFollowingButton
                ]}
                onPress={handleFollowToggle}
                disabled={isFollowLoading}
              >
                {isFollowLoading ? (
                  <ActivityIndicator size="small" color={isFollowing ? "#FF0000" : "#fff"} />
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
          
          {/* ✅ UPDATED: Action Buttons with Dynamic Data */}
          <View style={styles.actionButtons}>
            <TouchableOpacity 
              style={styles.actionButton}
              onPress={handleToggleLike}
            >
              <Ionicons 
                name={isLiked ? "heart" : "heart-outline"} 
                size={wp(6)} 
                color={isLiked ? "#FF0000" : "#fff"} 
              />
              <Text style={styles.actionText}>{formatNumber(likesCount)}</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.actionButton}>
              <Ionicons name="share-social-outline" size={wp(6)} color="#fff" />
              <Text style={styles.actionText}>Share</Text>
            </TouchableOpacity>
            
            {/* <TouchableOpacity style={styles.actionButton}>
              <Ionicons name="download-outline" size={wp(6)} color="#fff" />
              <Text style={styles.actionText}>Download</Text>
            </TouchableOpacity> */}
          </View>
          
          {/* ✅ UPDATED: Dynamic Description */}
          {videoData.description && (
            <View style={styles.description}>
              <Text style={styles.descriptionTitle}>Description</Text>
              <Text style={styles.descriptionText}>
                {videoData.description}
              </Text>
            </View>
          )}

           

          {/* Bottom Padding */}
          <View style={styles.bottomPadding} />
        </ScrollView>
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
  videoContainer: {
    width: '100%',
    height: hp(30),
    backgroundColor: '#000',
    position: 'relative',
  },
  fullscreenVideoContainer: {
    height: hp(100),
  },
  video: {
    width: '100%',
    height: '100%',
  },
  loadingContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    color: '#fff',
    marginTop: hp(1),
    fontSize: wp(4),
  },
  controlsOverlay: {
    ...StyleSheet.absoluteFillObject,
  },
  controlsContainer: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  topControls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(4),
    paddingTop: hp(2),
  },
  controlButton: {
    padding: wp(2),
  },
  videoTitle: {
    color: '#fff',
    fontSize: wp(4),
    fontWeight: '500',
    flex: 1,
    textArray: 'center',
    marginHorizontal: wp(4),
  },
  middleControls: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: wp(4),
  },
  seekButton: {
    padding: wp(4),
  },
  playPauseButton: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    width: wp(15),
    height: wp(15),
    borderRadius: wp(7.5),
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: wp(5),
  },
  bottomControls: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(4),
    paddingBottom: hp(2),
  },
  timeText: {
    color: '#fff',
    fontSize: wp(3),
    minWidth: wp(10),
  },
  progressBarContainer: {
    flex: 1,
    marginHorizontal: wp(2),
  },
  progressBarBackground: {
    height: hp(0.5),
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: wp(0.5),
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#FF0000',
    borderRadius: wp(0.5),
  },
  infoContainer: {
    flex: 1,
    backgroundColor: '#0f0f0f',
  },
  videoInfo: {
    padding: wp(4),
    borderBottomWidth: 1,
    borderBottomColor: '#272727',
  },
  title: {
    color: '#fff',
    fontSize: wp(5),
    fontWeight: 'bold',
    marginBottom: hp(1.5),
    lineHeight: hp(3),
  },
  videoStats: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(2),
  },
  viewsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewsText: {
    color: '#aaa',
    fontSize: wp(3.5),
    marginLeft: wp(1),
  },
  dot: {
    color: '#aaa',
    marginHorizontal: wp(2),
  },
  date: {
    color: '#aaa',
    fontSize: wp(3.5),
  },
  artistContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(1.5),
  },
  avatarContainer: {
    position: 'relative',
    marginRight: wp(3),
  },
  artistAvatar: {
    width: wp(12),
    height: wp(12),
    borderRadius: wp(6),
    backgroundColor: '#333',
  },
  avatarFallback: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: wp(12),
    height: wp(12),
    borderRadius: wp(6),
    backgroundColor: '#FF0000',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: -1,
  },
  avatarFallbackText: {
    color: '#fff',
    fontSize: wp(4.5),
    fontWeight: 'bold',
  },
  artistDetails: {
    flex: 1,
  },
  artistNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(0.5),
  },
  artistName: {
    color: '#fff',
    fontSize: wp(4),
    fontWeight: 'bold',
  },
  verifiedIcon: {
    marginLeft: wp(1.5),
  },
  followersText: {
    color: '#aaa',
    fontSize: wp(3.5),
  },
  followButton: {
    paddingHorizontal: wp(5),
    paddingVertical: hp(1),
    borderRadius: wp(5),
    minWidth: wp(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  notFollowingButton: {
    backgroundColor: '#FF0000',
  },
  followingButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
    borderColor: '#FF0000',
  },
  followButtonText: {
    fontSize: wp(3.5),
    fontWeight: 'bold',
  },
  notFollowingButtonText: {
    color: '#fff',
  },
  followingButtonText: {
    color: '#FF0000',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: hp(2),
    borderBottomWidth: 1,
    borderBottomColor: '#272727',
  },
  actionButton: {
    alignItems: 'center',
    padding: wp(2),
  },
  actionText: {
    color: '#aaa',
    fontSize: wp(3),
    marginTop: hp(0.5),
  },
  description: {
    padding: wp(4),
    borderBottomWidth: 1,
    borderBottomColor: '#272727',
  },
  descriptionTitle: {
    color: '#fff',
    fontSize: wp(4.5),
    fontWeight: 'bold',
    marginBottom: hp(1),
  },
  descriptionText: {
    color: '#aaa',
    fontSize: wp(3.8),
    lineHeight: hp(2.5),
  },
  additionalInfo: {
    padding: wp(4),
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: hp(1),
    borderBottomWidth: 1,
    borderBottomColor: '#272727',
  },
  infoLabel: {
    color: '#fff',
    fontSize: wp(3.8),
    fontWeight: '500',
  },
  infoValue: {
    color: '#aaa',
    fontSize: wp(3.8),
  },
  bottomPadding: {
    height: hp(3),
  },
});

export default VideoPlayerScreen;