// // // src/screens/HomeScreen.js
// // import React from 'react';
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
// //   Dimensions
// // } from 'react-native';
// // import Icon from 'react-native-vector-icons/MaterialIcons';
// // import Feather from 'react-native-vector-icons/Feather';

// // const { width } = Dimensions.get('window');

// // const HomeScreen = () => {
// //   // Recently Played Data
// //   const recentlyPlayed = [
// //     { id: '1', title: 'Inside Out', artist: 'The Chainsmokers' },
// //     { id: '2', title: 'Young', artist: 'The Chainsmokers' },
// //     { id: '3', title: 'Beach House', artist: 'The Chainsmokers' },
// //     { id: '4', title: 'Kills You Slo...', artist: 'The Chainsmokers' },
// //     { id: '5', title: 'Set', artist: 'The Chainsmokers' },
// //   ];

// //   // Continue Listening Data
// //   const continueListening = [
// //     { id: '1', title: 'Coffee & Jazz', type: 'Playlist', color: '#1e3264' },
// //     { id: '2', title: 'Riess Stars', type: 'Playlist', color: '#8d67ab' },
// //     { id: '3', title: 'RELEASED', type: 'Playlist', color: '#477d95' },
// //     { id: '4', title: 'Anything Goes', type: 'Playlist', color: '#ba5d07' },
// //     { id: '5', title: 'Anime OSTs', type: 'Playlist', color: '#e8115b' },
// //     { id: '6', title: "Harry's House", type: 'Album', color: '#1e3264' },
// //     { id: '7', title: 'Lo-Fi Beats', type: 'Playlist', color: '#477d95' },
// //   ];

// //   // Mood Data
// //   const moods = [
// //     { id: '1', title: 'Hollywood', color: '#ff0090' },
// //     { id: '2', title: 'HIP-HOP', color: '#ba5d07' },
// //     { id: '3', title: 'See more', color: '#1e3264' },
// //     { id: '4', title: 'PC', color: '#8d67ab' },
// //   ];

// //   // New Releases Data
// //   const newReleases = [
// //     { id: '1', title: 'Inside Out', artist: 'The Chainsmokers, Charles' },
// //     { id: '2', title: 'See more', artist: '' },
// //     { id: '3', title: 'See more', artist: '' },
// //   ];

// //   const renderRecentlyPlayedItem = ({ item }) => (
// //     <TouchableOpacity style={styles.recentItem}>
// //       <View style={styles.recentImage}>
// //         <Icon name="music-note" size={24} color="#b3b3b3" />
// //       </View>
// //       <View style={styles.recentText}>
// //         <Text style={styles.recentTitle} numberOfLines={1}>{item.title}</Text>
// //         <Text style={styles.recentArtist} numberOfLines={1}>{item.artist}</Text>
// //       </View>
// //     </TouchableOpacity>
// //   );

// //   const renderContinueItem = ({ item }) => (
// //     <TouchableOpacity style={[styles.continueItem, { backgroundColor: item.color }]}>
// //       <Text style={styles.continueTitle} numberOfLines={2}>{item.title}</Text>
// //       <View style={styles.playButton}>
// //         <Icon name="play-arrow" size={24} color="#000" />
// //       </View>
// //     </TouchableOpacity>
// //   );

// //   const renderMoodItem = ({ item }) => (
// //     <TouchableOpacity style={[styles.moodItem, { backgroundColor: item.color }]}>
// //       <Text style={styles.moodTitle}>{item.title}</Text>
// //     </TouchableOpacity>
// //   );

// //   const renderNewReleaseItem = ({ item }) => (
// //     <TouchableOpacity style={styles.newReleaseItem}>
// //       <View style={styles.newReleaseImage}>
// //         <Icon name="album" size={50} color="#b3b3b3" />
// //       </View>
// //       <View style={styles.newReleaseText}>
// //         <Text style={styles.newReleaseTitle} numberOfLines={1}>{item.title}</Text>
// //         {item.artist ? (
// //           <Text style={styles.newReleaseArtist} numberOfLines={1}>{item.artist}</Text>
// //         ) : null}
// //       </View>
// //     </TouchableOpacity>
// //   );

// //   return (
// //     <SafeAreaView style={styles.container}>
// //       <StatusBar barStyle="light-content" backgroundColor="#000" />
      
// //       {/* Header */}
// //       <View style={styles.header}>
// //         <View style={styles.headerLeft}>
// //           <Text style={styles.greeting}>Good evening</Text>
// //         </View>
// //         <View style={styles.headerRight}>
// //           <TouchableOpacity style={styles.iconButton}>
// //             <Feather name="bell" size={24} color="#fff" />
// //           </TouchableOpacity>
// //           <TouchableOpacity style={styles.iconButton}>
// //             <Icon name="access-time" size={24} color="#fff" />
// //           </TouchableOpacity>
// //           <TouchableOpacity style={styles.iconButton}>
// //             <Icon name="settings" size={24} color="#fff" />
// //           </TouchableOpacity>
// //         </View>
// //       </View>

// //       <ScrollView 
// //         style={styles.scrollView}
// //         showsVerticalScrollIndicator={false}
// //       >
// //         {/* Recently Played Section */}
// //         <View style={styles.section}>
// //           <Text style={styles.sectionTitle}>Recently Played</Text>
// //           <FlatList
// //             data={recentlyPlayed}
// //             renderItem={renderRecentlyPlayedItem}
// //             keyExtractor={item => item.id}
// //             horizontal
// //             showsHorizontalScrollIndicator={false}
// //             contentContainerStyle={styles.recentList}
// //           />
// //         </View>

// //         {/* Continue Listening Section */}
// //         <View style={styles.section}>
// //           <Text style={styles.sectionTitle}>Continue Listening</Text>
// //           <FlatList
// //             data={continueListening}
// //             renderItem={renderContinueItem}
// //             keyExtractor={item => item.id}
// //             horizontal
// //             showsHorizontalScrollIndicator={false}
// //             contentContainerStyle={styles.continueList}
// //           />
// //         </View>

// //         {/* Pick Your Mood Section */}
// //         <View style={styles.section}>
// //           <Text style={styles.sectionTitle}>Pick Your Mood</Text>
// //           <View style={styles.moodGrid}>
// //             {moods.map((item) => (
// //               <TouchableOpacity 
// //                 key={item.id} 
// //                 style={[styles.moodItem, { backgroundColor: item.color }]}
// //               >
// //                 <Text style={styles.moodTitle}>{item.title}</Text>
// //               </TouchableOpacity>
// //             ))}
// //           </View>
// //         </View>

// //         {/* New Releases Section */}
// //         <View style={styles.section}>
// //           <Text style={styles.sectionTitle}>New Releases</Text>
// //           <View style={styles.newReleasesGrid}>
// //             {newReleases.map((item) => (
// //               <TouchableOpacity key={item.id} style={styles.newReleaseItem}>
// //                 <View style={styles.newReleaseImage}>
// //                   <Icon name="album" size={50} color="#b3b3b3" />
// //                 </View>
// //                 <View style={styles.newReleaseText}>
// //                   <Text style={styles.newReleaseTitle} numberOfLines={1}>
// //                     {item.title}
// //                   </Text>
// //                   {item.artist ? (
// //                     <Text style={styles.newReleaseArtist} numberOfLines={1}>
// //                       {item.artist}
// //                     </Text>
// //                   ) : null}
// //                 </View>
// //               </TouchableOpacity>
// //             ))}
// //           </View>
// //         </View>

// //         {/* Bottom Padding */}
// //         <View style={styles.bottomPadding} />
// //       </ScrollView>

// //       {/* Mini Player */}
// //       <View style={styles.miniPlayer}>
// //         <View style={styles.miniPlayerLeft}>
// //           <View style={styles.miniPlayerImage}>
// //             <Icon name="music-note" size={24} color="#fff" />
// //           </View>
// //           <View style={styles.miniPlayerText}>
// //             <Text style={styles.miniPlayerTitle} numberOfLines={1}>
// //               Inside Out
// //             </Text>
// //             <Text style={styles.miniPlayerArtist} numberOfLines={1}>
// //               The Chainsmokers
// //             </Text>
// //           </View>
// //         </View>
// //         <View style={styles.miniPlayerRight}>
// //           <TouchableOpacity style={styles.miniPlayerButton}>
// //             <Icon name="favorite-border" size={24} color="#b3b3b3" />
// //           </TouchableOpacity>
// //           <TouchableOpacity style={styles.miniPlayerButton}>
// //             <Icon name="play-arrow" size={30} color="#fff" />
// //           </TouchableOpacity>
// //         </View>
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
// //   },
// //   headerLeft: {
// //     flex: 1,
// //   },
// //   greeting: {
// //     fontSize: 24,
// //     fontWeight: 'bold',
// //     color: '#fff',
// //   },
// //   headerRight: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //   },
// //   iconButton: {
// //     marginLeft: 20,
// //   },
// //   scrollView: {
// //     flex: 1,
// //   },
// //   section: {
// //     marginBottom: 24,
// //   },
// //   sectionTitle: {
// //     fontSize: 22,
// //     fontWeight: 'bold',
// //     color: '#fff',
// //     marginBottom: 16,
// //     paddingHorizontal: 16,
// //   },
// //   recentList: {
// //     paddingHorizontal: 16,
// //   },
// //   recentItem: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     backgroundColor: '#181818',
// //     borderRadius: 4,
// //     marginRight: 12,
// //     padding: 8,
// //     width: 180,
// //   },
// //   recentImage: {
// //     width: 48,
// //     height: 48,
// //     backgroundColor: '#333',
// //     borderRadius: 4,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     marginRight: 12,
// //   },
// //   recentText: {
// //     flex: 1,
// //   },
// //   recentTitle: {
// //     fontSize: 14,
// //     fontWeight: '600',
// //     color: '#fff',
// //     marginBottom: 4,
// //   },
// //   recentArtist: {
// //     fontSize: 12,
// //     color: '#b3b3b3',
// //   },
// //   continueList: {
// //     paddingHorizontal: 16,
// //   },
// //   continueItem: {
// //     width: 140,
// //     height: 140,
// //     borderRadius: 4,
// //     marginRight: 12,
// //     padding: 12,
// //     justifyContent: 'space-between',
// //   },
// //   continueTitle: {
// //     fontSize: 16,
// //     fontWeight: 'bold',
// //     color: '#fff',
// //     flex: 1,
// //   },
// //   playButton: {
// //     width: 40,
// //     height: 40,
// //     backgroundColor: '#1db954',
// //     borderRadius: 20,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     alignSelf: 'flex-end',
// //   },
// //   moodGrid: {
// //     flexDirection: 'row',
// //     flexWrap: 'wrap',
// //     paddingHorizontal: 16,
// //     justifyContent: 'space-between',
// //   },
// //   moodItem: {
// //     width: (width - 48) / 2,
// //     height: 80,
// //     borderRadius: 4,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     marginBottom: 12,
// //   },
// //   moodTitle: {
// //     fontSize: 16,
// //     fontWeight: 'bold',
// //     color: '#fff',
// //   },
// //   newReleasesGrid: {
// //     paddingHorizontal: 16,
// //   },
// //   newReleaseItem: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     marginBottom: 16,
// //   },
// //   newReleaseImage: {
// //     width: 60,
// //     height: 60,
// //     backgroundColor: '#333',
// //     borderRadius: 4,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     marginRight: 12,
// //   },
// //   newReleaseText: {
// //     flex: 1,
// //   },
// //   newReleaseTitle: {
// //     fontSize: 16,
// //     fontWeight: '600',
// //     color: '#fff',
// //     marginBottom: 4,
// //   },
// //   newReleaseArtist: {
// //     fontSize: 14,
// //     color: '#b3b3b3',
// //   },
// //   bottomPadding: {
// //     height: 80,
// //   },
// //   miniPlayer: {
// //     position: 'absolute',
// //     bottom: 0,
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
// //     borderRadius: 2,
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
// // });

// // export default HomeScreen;


// // // // // // src/screens/HomeScreen.js
// // import React from 'react';
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
// //   Dimensions
// // } from 'react-native';
// // import Icon from 'react-native-vector-icons/MaterialIcons';
// // import Feather from 'react-native-vector-icons/Feather';

// // const { width } = Dimensions.get('window');

// // const HomeScreen = () => {
// //   // Recently Played Data
// //   const recentlyPlayed = [
// //     { id: '1', title: 'Inside Out', artist: 'The Chainsmokers' },
// //     { id: '2', title: 'Young', artist: 'The Chainsmokers' },
// //     { id: '3', title: 'Beach House', artist: 'The Chainsmokers' },
// //     { id: '4', title: 'Kills You Slo...', artist: 'The Chainsmokers' },
// //     { id: '5', title: 'Set', artist: 'The Chainsmokers' },
// //   ];

// //   // Continue Listening Data
// //   const continueListening = [
// //     { id: '1', title: 'Coffee & Jazz', type: 'Playlist', color: '#1e3264' },
// //     { id: '2', title: 'Riess Stars', type: 'Playlist', color: '#8d67ab' },
// //     { id: '3', title: 'RELEASED', type: 'Playlist', color: '#477d95' },
// //     { id: '4', title: 'Anything Goes', type: 'Playlist', color: '#ba5d07' },
// //     { id: '5', title: 'Anime OSTs', type: 'Playlist', color: '#e8115b' },
// //     { id: '6', title: "Harry's House", type: 'Album', color: '#1e3264' },
// //     { id: '7', title: 'Lo-Fi Beats', type: 'Playlist', color: '#477d95' },
// //   ];

// //   // Mood Data
// //   const moods = [
// //     { id: '1', title: 'Hollywood', color: '#ff0090' },
// //     { id: '2', title: 'HIP-HOP', color: '#ba5d07' },
// //     { id: '3', title: 'See more', color: '#1e3264' },
// //     { id: '4', title: 'PC', color: '#8d67ab' },
// //   ];

// //   // New Releases Data
// //   const newReleases = [
// //     { id: '1', title: 'Inside Out', artist: 'The Chainsmokers, Charles' },
// //     { id: '2', title: 'See more', artist: '' },
// //     { id: '3', title: 'See more', artist: '' },
// //   ];

// //   const renderRecentlyPlayedItem = ({ item }) => (
// //     <TouchableOpacity style={styles.recentItem}>
// //       <View style={styles.recentImage}>
// //         <Icon name="music-note" size={24} color="#b3b3b3" />
// //       </View>
// //       <View style={styles.recentText}>
// //         <Text style={styles.recentTitle} numberOfLines={1}>{item.title}</Text>
// //         <Text style={styles.recentArtist} numberOfLines={1}>{item.artist}</Text>
// //       </View>
// //     </TouchableOpacity>
// //   );

// //   const renderContinueItem = ({ item }) => (
// //     <TouchableOpacity style={[styles.continueItem, { backgroundColor: item.color }]}>
// //       <Text style={styles.continueTitle} numberOfLines={2}>{item.title}</Text>
// //       <View style={styles.playButton}>
// //         <Icon name="play-arrow" size={24} color="#000" />
// //       </View>
// //     </TouchableOpacity>
// //   );

// //   const renderMoodItem = ({ item }) => (
// //     <TouchableOpacity style={[styles.moodItem, { backgroundColor: item.color }]}>
// //       <Text style={styles.moodTitle}>{item.title}</Text>
// //     </TouchableOpacity>
// //   );

// //   const renderNewReleaseItem = ({ item }) => (
// //     <TouchableOpacity style={styles.newReleaseItem}>
// //       <View style={styles.newReleaseImage}>
// //         <Icon name="album" size={50} color="#b3b3b3" />
// //       </View>
// //       <View style={styles.newReleaseText}>
// //         <Text style={styles.newReleaseTitle} numberOfLines={1}>{item.title}</Text>
// //         {item.artist ? (
// //           <Text style={styles.newReleaseArtist} numberOfLines={1}>{item.artist}</Text>
// //         ) : null}
// //       </View>
// //     </TouchableOpacity>
// //   );

// //   return (
// //     <SafeAreaView style={styles.container}>
// //       <StatusBar barStyle="light-content" backgroundColor="#000" />
      
// //       {/* Updated Header */}
// //       <View style={styles.header}>
// //         <View style={styles.headerLeft}>
// //           <View style={styles.profileSection}>
// //             <View style={styles.profileImage}>
// //               <Image 
// //                 source={{ uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face' }}
// //                 style={styles.profileImage}
// //               />
// //             </View>
// //             <View style={styles.welcomeText}>
// //               <Text style={styles.welcomeBack}>Welcome back !</Text>
// //               <Text style={styles.userName}>Aarav Sharma</Text>
// //             </View>
// //           </View>
// //         </View>
// //         <View style={styles.headerRight}>
// //           <TouchableOpacity style={styles.iconButton}>
// //             <Feather name="bell" size={24} color="#fff" />
// //           </TouchableOpacity>
// //         </View>
// //       </View>

// //       <ScrollView 
// //         style={styles.scrollView}
// //         showsVerticalScrollIndicator={false}
// //       >
// //         {/* Recently Played Section */}
// //         <View style={styles.section}>
// //           <Text style={styles.sectionTitle}>Recently Played</Text>
// //           <FlatList
// //             data={recentlyPlayed}
// //             renderItem={renderRecentlyPlayedItem}
// //             keyExtractor={item => item.id}
// //             horizontal
// //             showsHorizontalScrollIndicator={false}
// //             contentContainerStyle={styles.recentList}
// //           />
// //         </View>

// //         {/* Continue Listening Section */}
// //         <View style={styles.section}>
// //           <Text style={styles.sectionTitle}>Continue Listening</Text>
// //           <FlatList
// //             data={continueListening}
// //             renderItem={renderContinueItem}
// //             keyExtractor={item => item.id}
// //             horizontal
// //             showsHorizontalScrollIndicator={false}
// //             contentContainerStyle={styles.continueList}
// //           />
// //         </View>

// //         {/* Pick Your Mood Section */}
// //         <View style={styles.section}>
// //           <Text style={styles.sectionTitle}>Pick Your Mood</Text>
// //           <View style={styles.moodGrid}>
// //             {moods.map((item) => (
// //               <TouchableOpacity 
// //                 key={item.id} 
// //                 style={[styles.moodItem, { backgroundColor: item.color }]}
// //               >
// //                 <Text style={styles.moodTitle}>{item.title}</Text>
// //               </TouchableOpacity>
// //             ))}
// //           </View>
// //         </View>

// //         {/* New Releases Section */}
// //         <View style={styles.section}>
// //           <Text style={styles.sectionTitle}>New Releases</Text>
// //           <View style={styles.newReleasesGrid}>
// //             {newReleases.map((item) => (
// //               <TouchableOpacity key={item.id} style={styles.newReleaseItem}>
// //                 <View style={styles.newReleaseImage}>
// //                   <Icon name="album" size={50} color="#b3b3b3" />
// //                 </View>
// //                 <View style={styles.newReleaseText}>
// //                   <Text style={styles.newReleaseTitle} numberOfLines={1}>
// //                     {item.title}
// //                   </Text>
// //                   {item.artist ? (
// //                     <Text style={styles.newReleaseArtist} numberOfLines={1}>
// //                       {item.artist}
// //                     </Text>
// //                   ) : null}
// //                 </View>
// //               </TouchableOpacity>
// //             ))}
// //           </View>
// //         </View>

// //         {/* Bottom Padding */}
// //         <View style={styles.bottomPadding} />
// //       </ScrollView>

// //       {/* Mini Player */}
// //       <View style={styles.miniPlayer}>
// //         <View style={styles.miniPlayerLeft}>
// //           <View style={styles.miniPlayerImage}>
// //             <Icon name="music-note" size={24} color="#fff" />
// //           </View>
// //           <View style={styles.miniPlayerText}>
// //             <Text style={styles.miniPlayerTitle} numberOfLines={1}>
// //               Inside Out
// //             </Text>
// //             <Text style={styles.miniPlayerArtist} numberOfLines={1}>
// //               The Chainsmokers
// //             </Text>
// //           </View>
// //         </View>
// //         <View style={styles.miniPlayerRight}>
// //           <TouchableOpacity style={styles.miniPlayerButton}>
// //             <Icon name="favorite-border" size={24} color="#b3b3b3" />
// //           </TouchableOpacity>
// //           <TouchableOpacity style={styles.miniPlayerButton}>
// //             <Icon name="play-arrow" size={30} color="#fff" />
// //           </TouchableOpacity>
// //         </View>
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
// //   },
// //   headerLeft: {
// //     flex: 1,
// //   },
// //   profileSection: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //   },
// //   profileImage: {
// //     width: 50,
// //     height: 50,
// //     borderRadius: 25,
// //     backgroundColor: '#333',
// //     marginRight: 12,
// //   },
// //   welcomeText: {
// //     flex: 1,
// //   },
// //   welcomeBack: {
// //     fontSize: 16,
// //     color: '#b3b3b3',
// //     marginBottom: 2,
// //   },
// //   userName: {
// //     fontSize: 20,
// //     fontWeight: 'bold',
// //     color: '#fff',
// //   },
// //   headerRight: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //   },
// //   iconButton: {
// //     marginLeft: 0,
// //   },
// //   scrollView: {
// //     flex: 1,
// //   },
// //   section: {
// //     marginBottom: 24,
// //   },
// //   sectionTitle: {
// //     fontSize: 22,
// //     fontWeight: 'bold',
// //     color: '#fff',
// //     marginBottom: 16,
// //     paddingHorizontal: 16,
// //   },
// //   recentList: {
// //     paddingHorizontal: 16,
// //   },
// //   recentItem: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     backgroundColor: '#181818',
// //     borderRadius: 4,
// //     marginRight: 12,
// //     padding: 8,
// //     width: 180,
// //   },
// //   recentImage: {
// //     width: 48,
// //     height: 48,
// //     backgroundColor: '#333',
// //     borderRadius: 4,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     marginRight: 12,
// //   },
// //   recentText: {
// //     flex: 1,
// //   },
// //   recentTitle: {
// //     fontSize: 14,
// //     fontWeight: '600',
// //     color: '#fff',
// //     marginBottom: 4,
// //   },
// //   recentArtist: {
// //     fontSize: 12,
// //     color: '#b3b3b3',
// //   },
// //   continueList: {
// //     paddingHorizontal: 16,
// //   },
// //   continueItem: {
// //     width: 140,
// //     height: 140,
// //     borderRadius: 4,
// //     marginRight: 12,
// //     padding: 12,
// //     justifyContent: 'space-between',
// //   },
// //   continueTitle: {
// //     fontSize: 16,
// //     fontWeight: 'bold',
// //     color: '#fff',
// //     flex: 1,
// //   },
// //   playButton: {
// //     width: 40,
// //     height: 40,
// //     backgroundColor: '#1db954',
// //     borderRadius: 20,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     alignSelf: 'flex-end',
// //   },
// //   moodGrid: {
// //     flexDirection: 'row',
// //     flexWrap: 'wrap',
// //     paddingHorizontal: 16,
// //     justifyContent: 'space-between',
// //   },
// //   moodItem: {
// //     width: (width - 48) / 2,
// //     height: 80,
// //     borderRadius: 4,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     marginBottom: 12,
// //   },
// //   moodTitle: {
// //     fontSize: 16,
// //     fontWeight: 'bold',
// //     color: '#fff',
// //   },
// //   newReleasesGrid: {
// //     paddingHorizontal: 16,
// //   },
// //   newReleaseItem: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     marginBottom: 16,
// //   },
// //   newReleaseImage: {
// //     width: 60,
// //     height: 60,
// //     backgroundColor: '#333',
// //     borderRadius: 4,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     marginRight: 12,
// //   },
// //   newReleaseText: {
// //     flex: 1,
// //   },
// //   newReleaseTitle: {
// //     fontSize: 16,
// //     fontWeight: '600',
// //     color: '#fff',
// //     marginBottom: 4,
// //   },
// //   newReleaseArtist: {
// //     fontSize: 14,
// //     color: '#b3b3b3',
// //   },
// //   bottomPadding: {
// //     height: 80,
// //   },
// //   miniPlayer: {
// //     position: 'absolute',
// //     bottom: 0,
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
// //     borderRadius: 2,
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
// // });

// // export default HomeScreen;


// // // // // src/screens/HomeScreen.js
// // import React from 'react';
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
// //   Dimensions
// // } from 'react-native';
// // import Icon from 'react-native-vector-icons/MaterialIcons';
// // import Feather from 'react-native-vector-icons/Feather';

// // const { width } = Dimensions.get('window');

// // const HomeScreen = ({navigation}) => {
// //   // Recently Played Data with Images
// //   const recentlyPlayed = [
// //     { 
// //       id: '1', 
// //       title: 'Inside Out', 
// //       artist: 'The Chainsmokers',
// //       image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop'
// //     },
// //     { 
// //       id: '2', 
// //       title: 'Young', 
// //       artist: 'The Chainsmokers',
// //       image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop'
// //     },
// //     { 
// //       id: '3', 
// //       title: 'Beach House', 
// //       artist: 'The Chainsmokers',
// //       image: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=200&h=200&fit=crop'
// //     },
// //     { 
// //       id: '4', 
// //       title: 'Kills You Slowly', 
// //       artist: 'The Chainsmokers',
// //       image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=200&h=200&fit=crop'
// //     },
// //     { 
// //       id: '5', 
// //       title: 'Set', 
// //       artist: 'The Chainsmokers',
// //       image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=200&h=200&fit=crop'
// //     },
// //   ];

// //   // Continue Listening Data with Images
// //   const continueListening = [
// //     { 
// //       id: '1', 
// //       title: 'Coffee & Jazz', 
// //       type: 'Playlist', 
// //       image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=300&h=300&fit=crop'
// //     },
// //     { 
// //       id: '2', 
// //       title: 'Riess Stars', 
// //       type: 'Playlist', 
// //       image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop'
// //     },
// //     { 
// //       id: '3', 
// //       title: 'RELEASED', 
// //       type: 'Playlist', 
// //       image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop'
// //     },
// //     { 
// //       id: '4', 
// //       title: 'Anything Goes', 
// //       type: 'Playlist', 
// //       image: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=300&h=300&fit=crop'
// //     },
// //     { 
// //       id: '5', 
// //       title: 'Anime OSTs', 
// //       type: 'Playlist', 
// //       image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&h=300&fit=crop'
// //     },
// //     { 
// //       id: '6', 
// //       title: "Harry's House", 
// //       type: 'Album', 
// //       image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=300&h=300&fit=crop'
// //     },
// //     { 
// //       id: '7', 
// //       title: 'Lo-Fi Beats', 
// //       type: 'Playlist', 
// //       image: 'https://images.unsplash.com/photo-1489599809505-fb44932d0e71?w=300&h=300&fit=crop'
// //     },
// //   ];

// //   // Mood Data with Images
// //   const moods = [
// //     { 
// //       id: '1', 
// //       title: 'Hollywood', 
// //       image: 'https://images.unsplash.com/photo-1489599809505-fb44932d0e71?w=300&h=150&fit=crop'
// //     },
// //     { 
// //       id: '2', 
// //       title: 'HIP-HOP', 
// //       image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&h=150&fit=crop'
// //     },
// //     { 
// //       id: '3', 
// //       title: 'POP', 
// //       image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=150&fit=crop'
// //     },
// //     { 
// //       id: '4', 
// //       title: 'ROCK', 
// //       image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=150&fit=crop'
// //     },
// //   ];

// //   // New Releases Data with Images
// //   const newReleases = [
// //     { 
// //       id: '1', 
// //       title: 'Inside Out', 
// //       artist: 'The Chainsmokers, Charles',
// //       image: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=200&h=200&fit=crop'
// //     },
// //     { 
// //       id: '2', 
// //       title: 'Summer Hits', 
// //       artist: 'Various Artists',
// //       image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=200&h=200&fit=crop'
// //     },
// //     { 
// //       id: '3', 
// //       title: 'Midnight Drive', 
// //       artist: 'Weeknd, Drake',
// //       image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200&h=200&fit=crop'
// //     },
// //   ];

// //   const renderRecentlyPlayedItem = ({ item }) => (
// //     <TouchableOpacity style={styles.recentItem}>
// //       <Image 
// //         source={{ uri: item.image }} 
// //         style={styles.recentImage}
// //         resizeMode="cover"
// //       />
// //       <View style={styles.recentText}>
// //         <Text style={styles.recentTitle} numberOfLines={1}>{item.title}</Text>
// //         <Text style={styles.recentArtist} numberOfLines={1}>{item.artist}</Text>
// //       </View>
// //     </TouchableOpacity>
// //   );

// //   const renderContinueItem = ({ item }) => (
// //     <TouchableOpacity style={styles.continueItem}>
// //       <Image 
// //         source={{ uri: item.image }} 
// //         style={styles.continueImage}
// //         resizeMode="cover"
// //       />
// //       <View style={styles.continueOverlay} />
// //       <View style={styles.continueContent}>
// //         <Text style={styles.continueTitle} numberOfLines={2}>{item.title}</Text>
// //         <Text style={styles.continueType}>{item.type}</Text>
// //         <View style={styles.playButton}>
// //           <Icon name="play-arrow" size={24} color="#000" />
// //         </View>
// //       </View>
// //     </TouchableOpacity>
// //   );

// //   const renderMoodItem = ({ item, index }) => (
// //     <TouchableOpacity style={styles.moodItem}>
// //       <Image 
// //         source={{ uri: item.image }} 
// //         style={styles.moodImage}
// //         resizeMode="cover"
// //       />
// //       <View style={styles.moodOverlay} />
// //       <Text style={styles.moodTitle}>{item.title}</Text>
// //     </TouchableOpacity>
// //   );

// //   const renderNewReleaseItem = ({ item }) => (
// //     <TouchableOpacity style={styles.newReleaseItem}>
// //       <Image 
// //         source={{ uri: item.image }} 
// //         style={styles.newReleaseImage}
// //         resizeMode="cover"
// //       />
// //       <View style={styles.newReleaseText}>
// //         <Text style={styles.newReleaseTitle} numberOfLines={1}>{item.title}</Text>
// //         <Text style={styles.newReleaseArtist} numberOfLines={1}>{item.artist}</Text>
// //       </View>
// //     </TouchableOpacity>
// //   );

// //   return (
// //     <SafeAreaView style={styles.container}>
// //       <StatusBar barStyle="light-content" backgroundColor="#000" />
      
// //       {/* Header */}
// //       <View style={styles.header}>
// //         <View style={styles.headerLeft}>
// //           {/* <View style={styles.profileSection}>
// //             <Image 
// //               source={{ uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face' }}
// //               style={styles.profileImage}
// //             />
// //             <View style={styles.welcomeText}>
// //               <Text style={styles.welcomeBack}>Welcome back !</Text>
// //               <Text style={styles.userName}>John Logan</Text>
// //             </View>
// //           </View> */}

// //           <TouchableOpacity 
// //   style={styles.profileSection}
// //   onPress={() => navigation.navigate('ProfileSettingsScreen')}
// // >
// //   <Image 
// //     source={{ uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face' }}
// //     style={styles.profileImage}
// //   />
// //   <View style={styles.welcomeText}>
// //     <Text style={styles.welcomeBack}>Welcome back !</Text>
// //     <Text style={styles.userName}>John Logan</Text>
// //   </View>
// // </TouchableOpacity>

// //         </View>
// //         <View style={styles.headerRight}>
// //           <TouchableOpacity style={styles.iconButton}>
// //             <Feather name="bell" size={24} color="#fff" />
// //           </TouchableOpacity>
// //         </View>
// //       </View>

// //       <ScrollView 
// //         style={styles.scrollView}
// //         showsVerticalScrollIndicator={false}
// //       >
// //         {/* Recently Played Section */}
// //         <View style={styles.section}>
// //           <Text style={styles.sectionTitle}>Recently Played</Text>
// //           <FlatList
// //             data={recentlyPlayed}
// //             renderItem={renderRecentlyPlayedItem}
// //             keyExtractor={item => item.id}
// //             horizontal
// //             showsHorizontalScrollIndicator={false}
// //             contentContainerStyle={styles.recentList}
// //           />
// //         </View>

// //         {/* Continue Listening Section */}
// //         <View style={styles.section}>
// //           <Text style={styles.sectionTitle}>Continue Listening</Text>
// //           <FlatList
// //             data={continueListening}
// //             renderItem={renderContinueItem}
// //             keyExtractor={item => item.id}
// //             horizontal
// //             showsHorizontalScrollIndicator={false}
// //             contentContainerStyle={styles.continueList}
// //           />
// //         </View>

// //         {/* Pick Your Mood Section */}
// //         <View style={styles.section}>
// //           <Text style={styles.sectionTitle}>Pick Your Mood</Text>
// //           <View style={styles.moodGrid}>
// //             {moods.map((item, index) => (
// //               <TouchableOpacity key={item.id} style={styles.moodItem}>
// //                 <Image 
// //                   source={{ uri: item.image }} 
// //                   style={styles.moodImage}
// //                   resizeMode="cover"
// //                 />
// //                 <View style={styles.moodOverlay} />
// //                 <Text style={styles.moodTitle}>{item.title}</Text>
// //               </TouchableOpacity>
// //             ))}
// //           </View>
// //         </View>

// //         {/* New Releases Section */}
// //         <View style={styles.section}>
// //           <Text style={styles.sectionTitle}>New Releases</Text>
// //           <View style={styles.newReleasesGrid}>
// //             {newReleases.map((item) => (
// //               <TouchableOpacity key={item.id} style={styles.newReleaseItem}>
// //                 <Image 
// //                   source={{ uri: item.image }} 
// //                   style={styles.newReleaseImage}
// //                   resizeMode="cover"
// //                 />
// //                 <View style={styles.newReleaseText}>
// //                   <Text style={styles.newReleaseTitle} numberOfLines={1}>
// //                     {item.title}
// //                   </Text>
// //                   <Text style={styles.newReleaseArtist} numberOfLines={1}>
// //                     {item.artist}
// //                   </Text>
// //                 </View>
// //               </TouchableOpacity>
// //             ))}
// //           </View>
// //         </View>

// //         {/* Bottom Padding */}
// //         <View style={styles.bottomPadding} />
// //       </ScrollView>

// //       {/* Mini Player */}
// //       <View style={styles.miniPlayer}>
// //         <View style={styles.miniPlayerLeft}>
// //           <Image 
// //             source={{ uri: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=100&h=100&fit=crop' }}
// //             style={styles.miniPlayerImage}
// //           />
// //           <View style={styles.miniPlayerText}>
// //             <Text style={styles.miniPlayerTitle} numberOfLines={1}>
// //               Inside Out
// //             </Text>
// //             <Text style={styles.miniPlayerArtist} numberOfLines={1}>
// //               The Chainsmokers
// //             </Text>
// //           </View>
// //         </View>
// //         <View style={styles.miniPlayerRight}>
// //           <TouchableOpacity style={styles.miniPlayerButton}>
// //             <Icon name="favorite-border" size={24} color="#b3b3b3" />
// //           </TouchableOpacity>
// //           <TouchableOpacity style={styles.miniPlayerButton}>
// //             <Icon name="play-arrow" size={30} color="#fff" />
// //           </TouchableOpacity>
// //         </View>
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
// //   },
// //   headerLeft: {
// //     flex: 1,
// //   },
// //   profileSection: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //   },
// //   profileImage: {
// //     width: 50,
// //     height: 50,
// //     borderRadius: 25,
// //     backgroundColor: '#333',
// //     marginRight: 12,
// //   },
// //   welcomeText: {
// //     flex: 1,
// //   },
// //   welcomeBack: {
// //     fontSize: 16,
// //     color: '#b3b3b3',
// //     marginBottom: 2,
// //   },
// //   userName: {
// //     fontSize: 20,
// //     fontWeight: 'bold',
// //     color: '#fff',
// //   },
// //   headerRight: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //   },
// //   iconButton: {
// //     marginLeft: 0,
// //   },
// //   scrollView: {
// //     flex: 1,
// //   },
// //   section: {
// //     marginBottom: 24,
// //   },
// //   sectionTitle: {
// //     fontSize: 22,
// //     fontWeight: 'bold',
// //     color: '#fff',
// //     marginBottom: 16,
// //     paddingHorizontal: 16,
// //   },
// //   recentList: {
// //     paddingHorizontal: 16,
// //   },
// //   recentItem: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     backgroundColor: '#181818',
// //     borderRadius: 8,
// //     marginRight: 12,
// //     padding: 8,
// //     width: 180,
// //   },
// //   recentImage: {
// //     width: 48,
// //     height: 48,
// //     borderRadius: 4,
// //     marginRight: 12,
// //   },
// //   recentText: {
// //     flex: 1,
// //   },
// //   recentTitle: {
// //     fontSize: 14,
// //     fontWeight: '600',
// //     color: '#fff',
// //     marginBottom: 4,
// //   },
// //   recentArtist: {
// //     fontSize: 12,
// //     color: '#b3b3b3',
// //   },
// //   continueList: {
// //     paddingHorizontal: 16,
// //   },
// //   continueItem: {
// //     width: 160,
// //     height: 160,
// //     borderRadius: 8,
// //     marginRight: 12,
// //     overflow: 'hidden',
// //     position: 'relative',
// //   },
// //   continueImage: {
// //     width: '100%',
// //     height: '100%',
// //     position: 'absolute',
// //   },
// //   continueOverlay: {
// //     ...StyleSheet.absoluteFillObject,
// //     backgroundColor: 'rgba(0,0,0,0.3)',
// //   },
// //   continueContent: {
// //     flex: 1,
// //     padding: 12,
// //     justifyContent: 'space-between',
// //   },
// //   continueTitle: {
// //     fontSize: 16,
// //     fontWeight: 'bold',
// //     color: '#fff',
// //     textShadowColor: 'rgba(0,0,0,0.8)',
// //     textShadowOffset: { width: 1, height: 1 },
// //     textShadowRadius: 4,
// //   },
// //   continueType: {
// //     fontSize: 12,
// //     color: '#b3b3b3',
// //     textShadowColor: 'rgba(0,0,0,0.8)',
// //     textShadowOffset: { width: 1, height: 1 },
// //     textShadowRadius: 4,
// //   },
// //   playButton: {
// //     width: 40,
// //     height: 40,
// //     backgroundColor: '#FF3B3B',
// //     borderRadius: 20,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     alignSelf: 'flex-end',
// //   },
// //   moodGrid: {
// //     flexDirection: 'row',
// //     flexWrap: 'wrap',
// //     paddingHorizontal: 16,
// //     justifyContent: 'space-between',
// //   },
// //   moodItem: {
// //     width: (width - 48) / 2,
// //     height: 100,
// //     borderRadius: 8,
// //     marginBottom: 12,
// //     overflow: 'hidden',
// //     position: 'relative',
// //   },
// //   moodImage: {
// //     width: '100%',
// //     height: '100%',
// //     position: 'absolute',
// //   },
// //   moodOverlay: {
// //     ...StyleSheet.absoluteFillObject,
// //     backgroundColor: 'rgba(0,0,0,0.4)',
// //   },
// //   moodTitle: {
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //     color: '#fff',
// //     position: 'absolute',
// //     top: '50%',
// //     left: 0,
// //     right: 0,
// //     textAlign: 'center',
// //     transform: [{ translateY: -10 }],
// //     textShadowColor: 'rgba(0,0,0,0.8)',
// //     textShadowOffset: { width: 1, height: 1 },
// //     textShadowRadius: 4,
// //   },
// //   newReleasesGrid: {
// //     paddingHorizontal: 16,
// //   },
// //   newReleaseItem: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     marginBottom: 16,
// //   },
// //   newReleaseImage: {
// //     width: 60,
// //     height: 60,
// //     borderRadius: 4,
// //     marginRight: 12,
// //   },
// //   newReleaseText: {
// //     flex: 1,
// //   },
// //   newReleaseTitle: {
// //     fontSize: 16,
// //     fontWeight: '600',
// //     color: '#fff',
// //     marginBottom: 4,
// //   },
// //   newReleaseArtist: {
// //     fontSize: 14,
// //     color: '#b3b3b3',
// //   },
// //   bottomPadding: {
// //     height: 80,
// //   },
// //   miniPlayer: {
// //     position: 'absolute',
// //     bottom: 0,
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
// //   },
// //   miniPlayerLeft: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     flex: 1,
// //   },
// //   miniPlayerImage: {
// //     width: 40,
// //     height: 40,
// //     borderRadius: 2,
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
// // });

// // export default HomeScreen;


// // // // src/screens/HomeScreen.js

// // // import {
// // //   View,
// // //   Text,
// // //   ScrollView,
// // //   TouchableOpacity,
// // //   StyleSheet,
// // //   StatusBar,
// // //   SafeAreaView,
// // //   Image,
// // //   ActivityIndicator
// // //   FlatList,
// // //   Dimensions
// // // } from 'react-native';
// // // import React, { useState, useEffect } from 'react';
// // // import Icon from 'react-native-vector-icons/MaterialIcons';
// // // import Feather from 'react-native-vector-icons/Feather';
// // // import { wp, hp } from "../assets/Global.Css";
// // // import { getDataFromAsyncStorage } from '../Services/CommonFunction';
// // // import { mobile_siteConfig } from '../Services/mobile-siteConfig';

// // // const { width } = Dimensions.get('window');

// // // const HomeScreen = ({navigation}) => {

// // //     const [userData, setUserData] = useState(null);
// // //   const [loading, setLoading] = useState(true);


// // //     useEffect(() => {
// // //     loadUserData();
// // //   }, []);

// // //   // ✅ YEH FUNCTION ADD KAREIN
// // //   const loadUserData = async () => {
// // //     try {
// // //       const storedUserData = await getDataFromAsyncStorage(mobile_siteConfig.USER_Data);
// // //       console.log('HomeScreen - Stored User Data:', storedUserData);
      
// // //       if (storedUserData) {
// // //         setUserData(storedUserData);
// // //       }
// // //     } catch (error) {
// // //       console.error('Error loading user data:', error);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   // Recently Played Data with Images
// // //   const recentlyPlayed = [
// // //     { 
// // //       id: '1', 
// // //       title: 'Inside Out', 
// // //       artist: 'The Chainsmokers',
// // //       image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop'
// // //     },
// // //     { 
// // //       id: '2', 
// // //       title: 'Young', 
// // //       artist: 'The Chainsmokers',
// // //       image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop'
// // //     },
// // //     { 
// // //       id: '3', 
// // //       title: 'Beach House', 
// // //       artist: 'The Chainsmokers',
// // //       image: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=200&h=200&fit=crop'
// // //     },
// // //     { 
// // //       id: '4', 
// // //       title: 'Kills You Slowly', 
// // //       artist: 'The Chainsmokers',
// // //       image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=200&h=200&fit=crop'
// // //     },
// // //     { 
// // //       id: '5', 
// // //       title: 'Set', 
// // //       artist: 'The Chainsmokers',
// // //       image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=200&h=200&fit=crop'
// // //     },
// // //   ];

// // //   // Continue Listening Data with Images
// // //   const continueListening = [
// // //     { 
// // //       id: '1', 
// // //       title: 'Coffee & Jazz', 
// // //       type: 'Playlist', 
// // //       image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=300&h=300&fit=crop'
// // //     },
// // //     { 
// // //       id: '2', 
// // //       title: 'Riess Stars', 
// // //       type: 'Playlist', 
// // //       image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop'
// // //     },
// // //     { 
// // //       id: '3', 
// // //       title: 'RELEASED', 
// // //       type: 'Playlist', 
// // //       image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop'
// // //     },
// // //     { 
// // //       id: '4', 
// // //       title: 'Anything Goes', 
// // //       type: 'Playlist', 
// // //       image: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=300&h=300&fit=crop'
// // //     },
// // //     { 
// // //       id: '5', 
// // //       title: 'Anime OSTs', 
// // //       type: 'Playlist', 
// // //       image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&h=300&fit=crop'
// // //     },
// // //     { 
// // //       id: '6', 
// // //       title: "Harry's House", 
// // //       type: 'Album', 
// // //       image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=300&h=300&fit=crop'
// // //     },
// // //     { 
// // //       id: '7', 
// // //       title: 'Lo-Fi Beats', 
// // //       type: 'Playlist', 
// // //       image: 'https://images.unsplash.com/photo-1489599809505-fb44932d0e71?w=300&h=300&fit=crop'
// // //     },
// // //   ];

// // //   // Mood Data with Images
// // //   const moods = [
// // //     { 
// // //       id: '1', 
// // //       title: 'Hollywood', 
// // //       image: 'https://images.unsplash.com/photo-1489599809505-fb44932d0e71?w=300&h=150&fit=crop'
// // //     },
// // //     { 
// // //       id: '2', 
// // //       title: 'HIP-HOP', 
// // //       image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&h=150&fit=crop'
// // //     },
// // //     { 
// // //       id: '3', 
// // //       title: 'POP', 
// // //       image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=150&fit=crop'
// // //     },
// // //     { 
// // //       id: '4', 
// // //       title: 'ROCK', 
// // //       image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=150&fit=crop'
// // //     },
// // //   ];

// // //   // New Releases Data with Images
// // //   const newReleases = [
// // //     { 
// // //       id: '1', 
// // //       title: 'Inside Out', 
// // //       artist: 'The Chainsmokers, Charles',
// // //       image: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=200&h=200&fit=crop'
// // //     },
// // //     { 
// // //       id: '2', 
// // //       title: 'Summer Hits', 
// // //       artist: 'Various Artists',
// // //       image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=200&h=200&fit=crop'
// // //     },
// // //     { 
// // //       id: '3', 
// // //       title: 'Midnight Drive', 
// // //       artist: 'Weeknd, Drake',
// // //       image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200&h=200&fit=crop'
// // //     },
// // //   ];

// // //   const renderRecentlyPlayedItem = ({ item }) => (
// // //     <TouchableOpacity style={styles.recentItem}>
// // //       <Image 
// // //         source={{ uri: item.image }} 
// // //         style={styles.recentImage}
// // //         resizeMode="cover"
// // //       />
// // //       <View style={styles.recentText}>
// // //         <Text style={styles.recentTitle} numberOfLines={1}>{item.title}</Text>
// // //         <Text style={styles.recentArtist} numberOfLines={1}>{item.artist}</Text>
// // //       </View>
// // //     </TouchableOpacity>
// // //   );

// // //   const renderContinueItem = ({ item }) => (
// // //     <TouchableOpacity style={styles.continueItem}>
// // //       <Image 
// // //         source={{ uri: item.image }} 
// // //         style={styles.continueImage}
// // //         resizeMode="cover"
// // //       />
// // //       <View style={styles.continueOverlay} />
// // //       <View style={styles.continueContent}>
// // //         <Text style={styles.continueTitle} numberOfLines={2}>{item.title}</Text>
// // //         <Text style={styles.continueType}>{item.type}</Text>
// // //         <View style={styles.playButton}>
// // //           <Icon name="play-arrow" size={wp(5.64)} color="#000" />
// // //         </View>
// // //       </View>
// // //     </TouchableOpacity>
// // //   );

// // //   const renderMoodItem = ({ item, index }) => (
// // //     <TouchableOpacity style={styles.moodItem}>
// // //       <Image 
// // //         source={{ uri: item.image }} 
// // //         style={styles.moodImage}
// // //         resizeMode="cover"
// // //       />
// // //       <View style={styles.moodOverlay} />
// // //       <Text style={styles.moodTitle}>{item.title}</Text>
// // //     </TouchableOpacity>
// // //   );

// // //   const renderNewReleaseItem = ({ item }) => (
// // //     <TouchableOpacity style={styles.newReleaseItem}>
// // //       <Image 
// // //         source={{ uri: item.image }} 
// // //         style={styles.newReleaseImage}
// // //         resizeMode="cover"
// // //       />
// // //       <View style={styles.newReleaseText}>
// // //         <Text style={styles.newReleaseTitle} numberOfLines={1}>{item.title}</Text>
// // //         <Text style={styles.newReleaseArtist} numberOfLines={1}>{item.artist}</Text>
// // //       </View>
// // //     </TouchableOpacity>
// // //   );

// // //   return (
// // //     <SafeAreaView style={styles.container}>
// // //       <StatusBar barStyle="light-content" backgroundColor="#000" />

// // //         {/* ✅ LOADING STATE ADD KAREIN */}
// // //     {loading ? (
// // //       <View style={styles.loadingContainer}>
// // //         <ActivityIndicator size="large" color="#FF3B3B" />
// // //         <Text style={styles.loadingText}>Loading...</Text>
// // //       </View>
// // //     ) : (
// // //       <>
      
// // //       {/* Header */}
// // //       {/* <View style={styles.header}>
// // //         <View style={styles.headerLeft}>
// // //           <TouchableOpacity 
// // //             style={styles.profileSection}
// // //             onPress={() => navigation.navigate('ProfileSettingsScreen')}
// // //           >
// // //             <Image 
// // //               source={{ uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face' }}
// // //               style={styles.profileImage}
// // //             />
// // //             <View style={styles.welcomeText}>
// // //               <Text style={styles.welcomeBack}>Welcome back !</Text>
// // //               <Text style={styles.userName}>John Logan</Text>
// // //             </View>
// // //           </TouchableOpacity>
// // //         </View>
// // //         <View style={styles.headerRight}>
// // //           <TouchableOpacity style={styles.iconButton}>
// // //             <Feather name="bell" size={wp(5.64)} color="#fff" />
// // //           </TouchableOpacity>
// // //         </View>
// // //       </View> */}

// // //       {/* Header */}
// // // <View style={styles.header}>
// // //   <View style={styles.headerLeft}>
// // //     <TouchableOpacity 
// // //       style={styles.profileSection}
// // //       onPress={() => navigation.navigate('ProfileSettingsScreen')}
// // //     >
// // //       <Image 
// // //         source={{ 
// // //           uri: userData?.profileImage || 
// // //                userData?.profilePic ? 
// // //                `http://103.119.171.213:3001${userData.profilePic}` : 
// // //                'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face' 
// // //         }}
// // //         style={styles.profileImage}
// // //       />
// // //       <View style={styles.welcomeText}>
// // //         <Text style={styles.welcomeBack}>Welcome back !</Text>
// // //         <Text style={styles.userName}>
// // //           {userData?.name || 'John Logan'}
// // //         </Text>
// // //       </View>
// // //     </TouchableOpacity>
// // //   </View>
// // //   <View style={styles.headerRight}>
// // //     <TouchableOpacity style={styles.iconButton}>
// // //       <Feather name="bell" size={wp(5.64)} color="#fff" />
// // //     </TouchableOpacity>
// // //   </View>
// // // </View>

// // //       <ScrollView 
// // //         style={styles.scrollView}
// // //         showsVerticalScrollIndicator={false}
// // //       >
// // //         {/* Recently Played Section */}
// // //         <View style={styles.section}>
// // //           <Text style={styles.sectionTitle}>Recently Played</Text>
// // //           <FlatList
// // //             data={recentlyPlayed}
// // //             renderItem={renderRecentlyPlayedItem}
// // //             keyExtractor={item => item.id}
// // //             horizontal
// // //             showsHorizontalScrollIndicator={false}
// // //             contentContainerStyle={styles.recentList}
// // //           />
// // //         </View>

// // //         {/* Continue Listening Section */}
// // //         <View style={styles.section}>
// // //           <Text style={styles.sectionTitle}>Continue Listening</Text>
// // //           <FlatList
// // //             data={continueListening}
// // //             renderItem={renderContinueItem}
// // //             keyExtractor={item => item.id}
// // //             horizontal
// // //             showsHorizontalScrollIndicator={false}
// // //             contentContainerStyle={styles.continueList}
// // //           />
// // //         </View>

// // //         {/* Pick Your Mood Section */}
// // //         <View style={styles.section}>
// // //           <Text style={styles.sectionTitle}>Pick Your Mood</Text>
// // //           <View style={styles.moodGrid}>
// // //             {moods.map((item, index) => (
// // //               <TouchableOpacity key={item.id} style={styles.moodItem}>
// // //                 <Image 
// // //                   source={{ uri: item.image }} 
// // //                   style={styles.moodImage}
// // //                   resizeMode="cover"
// // //                 />
// // //                 <View style={styles.moodOverlay} />
// // //                 <Text style={styles.moodTitle}>{item.title}</Text>
// // //               </TouchableOpacity>
// // //             ))}
// // //           </View>
// // //         </View>

// // //         {/* New Releases Section */}
// // //         <View style={styles.section}>
// // //           <Text style={styles.sectionTitle}>New Releases</Text>
// // //           <View style={styles.newReleasesGrid}>
// // //             {newReleases.map((item) => (
// // //               <TouchableOpacity key={item.id} style={styles.newReleaseItem}>
// // //                 <Image 
// // //                   source={{ uri: item.image }} 
// // //                   style={styles.newReleaseImage}
// // //                   resizeMode="cover"
// // //                 />
// // //                 <View style={styles.newReleaseText}>
// // //                   <Text style={styles.newReleaseTitle} numberOfLines={1}>
// // //                     {item.title}
// // //                   </Text>
// // //                   <Text style={styles.newReleaseArtist} numberOfLines={1}>
// // //                     {item.artist}
// // //                   </Text>
// // //                 </View>
// // //               </TouchableOpacity>
// // //             ))}
// // //           </View>
// // //         </View>

// // //         {/* Bottom Padding */}
// // //         <View style={styles.bottomPadding} />
// // //       </ScrollView>

// // //       {/* Mini Player */}
// // //       <View style={styles.miniPlayer}>
// // //         <View style={styles.miniPlayerLeft}>
// // //           <Image 
// // //             source={{ uri: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=100&h=100&fit=crop' }}
// // //             style={styles.miniPlayerImage}
// // //           />
// // //           <View style={styles.miniPlayerText}>
// // //             <Text style={styles.miniPlayerTitle} numberOfLines={1}>
// // //               Inside Out
// // //             </Text>
// // //             <Text style={styles.miniPlayerArtist} numberOfLines={1}>
// // //               The Chainsmokers
// // //             </Text>
// // //           </View>
// // //         </View>
// // //         <View style={styles.miniPlayerRight}>
// // //           <TouchableOpacity style={styles.miniPlayerButton}>
// // //             <Icon name="favorite-border" size={wp(5.64)} color="#b3b3b3" />
// // //           </TouchableOpacity>
// // //           <TouchableOpacity style={styles.miniPlayerButton}>
// // //             <Icon name="play-arrow" size={wp(7.05)} color="#fff" />
// // //           </TouchableOpacity>
// // //         </View>
// // //       </View>
     
// // //     </SafeAreaView>
// // //   );
// // // };

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     backgroundColor: '#000',
// // //   },
// // //   loadingContainer: {
// // //     flex: 1,
// // //     justifyContent: 'center',
// // //     alignItems: 'center',
// // //     backgroundColor: '#000',
// // //   },
// // //   loadingText: {
// // //     color: '#fff',
// // //     marginTop: 10,
// // //     fontSize: 16,
// // //   },
// // //   header: {
// // //     flexDirection: 'row',
// // //     justifyContent: 'space-between',
// // //     alignItems: 'center',
// // //     paddingHorizontal: wp(3.76),
// // //     paddingVertical: hp(1.5),
// // //   },
// // //   headerLeft: {
// // //     flex: 1,
// // //   },
// // //   profileSection: {
// // //     flexDirection: 'row',
// // //     alignItems: 'center',
// // //   },
// // //   profileImage: {
// // //     width: wp(11.75),
// // //     height: wp(11.75),
// // //     borderRadius: wp(5.875),
// // //     backgroundColor: '#333',
// // //     marginRight: wp(2.82),
// // //   },
// // //   welcomeText: {
// // //     flex: 1,
// // //   },
// // //   welcomeBack: {
// // //     fontSize: wp(3.76),
// // //     color: '#b3b3b3',
// // //     marginBottom: hp(0.25),
// // //   },
// // //   userName: {
// // //     fontSize: wp(4.7),
// // //     fontWeight: 'bold',
// // //     color: '#fff',
// // //   },
// // //   headerRight: {
// // //     flexDirection: 'row',
// // //     alignItems: 'center',
// // //   },
// // //   iconButton: {
// // //     marginLeft: 0,
// // //   },
// // //   scrollView: {
// // //     flex: 1,
// // //   },
// // //   section: {
// // //     marginBottom: hp(3),
// // //   },
// // //   sectionTitle: {
// // //     fontSize: wp(5.17),
// // //     fontWeight: 'bold',
// // //     color: '#fff',
// // //     marginBottom: hp(2),
// // //     paddingHorizontal: wp(3.76),
// // //   },
// // //   recentList: {
// // //     paddingHorizontal: wp(3.76),
// // //   },
// // //   recentItem: {
// // //     flexDirection: 'row',
// // //     alignItems: 'center',
// // //     backgroundColor: '#181818',
// // //     borderRadius: wp(2),
// // //     marginRight: wp(2.82),
// // //     padding: wp(2),
// // //     width: wp(42),
// // //   },
// // //   recentImage: {
// // //     width: wp(11.28),
// // //     height: wp(11.28),
// // //     borderRadius: wp(1),
// // //     marginRight: wp(2.82),
// // //   },
// // //   recentText: {
// // //     flex: 1,
// // //   },
// // //   recentTitle: {
// // //     fontSize: wp(3.29),
// // //     fontWeight: '600',
// // //     color: '#fff',
// // //     marginBottom: hp(0.5),
// // //   },
// // //   recentArtist: {
// // //     fontSize: wp(2.82),
// // //     color: '#b3b3b3',
// // //   },
// // //   continueList: {
// // //     paddingHorizontal: wp(3.76),
// // //   },
// // //   continueItem: {
// // //     width: wp(37.6),
// // //     height: wp(37.6),
// // //     borderRadius: wp(2),
// // //     marginRight: wp(2.82),
// // //     overflow: 'hidden',
// // //     position: 'relative',
// // //   },
// // //   continueImage: {
// // //     width: '100%',
// // //     height: '100%',
// // //     position: 'absolute',
// // //   },
// // //   continueOverlay: {
// // //     ...StyleSheet.absoluteFillObject,
// // //     backgroundColor: 'rgba(0,0,0,0.3)',
// // //   },
// // //   continueContent: {
// // //     flex: 1,
// // //     padding: wp(2.82),
// // //     justifyContent: 'space-between',
// // //   },
// // //   continueTitle: {
// // //     fontSize: wp(3.76),
// // //     fontWeight: 'bold',
// // //     color: '#fff',
// // //     textShadowColor: 'rgba(0,0,0,0.8)',
// // //     textShadowOffset: { width: 1, height: 1 },
// // //     textShadowRadius: 4,
// // //   },
// // //   continueType: {
// // //     fontSize: wp(2.82),
// // //     color: '#b3b3b3',
// // //     textShadowColor: 'rgba(0,0,0,0.8)',
// // //     textShadowOffset: { width: 1, height: 1 },
// // //     textShadowRadius: 4,
// // //   },
// // //   playButton: {
// // //     width: wp(9.4),
// // //     height: wp(9.4),
// // //     backgroundColor: '#FF3B3B',
// // //     borderRadius: wp(4.7),
// // //     justifyContent: 'center',
// // //     alignItems: 'center',
// // //     alignSelf: 'flex-end',
// // //   },
// // //   moodGrid: {
// // //     flexDirection: 'row',
// // //     flexWrap: 'wrap',
// // //     paddingHorizontal: wp(3.76),
// // //     justifyContent: 'space-between',
// // //   },
// // //   moodItem: {
// // //     width: (wp(100) - wp(11.28)) / 2,
// // //     height: hp(12),
// // //     borderRadius: wp(2),
// // //     marginBottom: hp(1.5),
// // //     overflow: 'hidden',
// // //     position: 'relative',
// // //   },
// // //   moodImage: {
// // //     width: '100%',
// // //     height: '100%',
// // //     position: 'absolute',
// // //   },
// // //   moodOverlay: {
// // //     ...StyleSheet.absoluteFillObject,
// // //     backgroundColor: 'rgba(0,0,0,0.4)',
// // //   },
// // //   moodTitle: {
// // //     fontSize: wp(4.23),
// // //     fontWeight: 'bold',
// // //     color: '#fff',
// // //     position: 'absolute',
// // //     top: '50%',
// // //     left: 0,
// // //     right: 0,
// // //     textAlign: 'center',
// // //     transform: [{ translateY: -hp(1) }],
// // //     textShadowColor: 'rgba(0,0,0,0.8)',
// // //     textShadowOffset: { width: 1, height: 1 },
// // //     textShadowRadius: 4,
// // //   },
// // //   newReleasesGrid: {
// // //     paddingHorizontal: wp(3.76),
// // //   },
// // //   newReleaseItem: {
// // //     flexDirection: 'row',
// // //     alignItems: 'center',
// // //     marginBottom: hp(2),
// // //   },
// // //   newReleaseImage: {
// // //     width: wp(14.1),
// // //     height: wp(14.1),
// // //     borderRadius: wp(1),
// // //     marginRight: wp(2.82),
// // //   },
// // //   newReleaseText: {
// // //     flex: 1,
// // //   },
// // //   newReleaseTitle: {
// // //     fontSize: wp(3.76),
// // //     fontWeight: '600',
// // //     color: '#fff',
// // //     marginBottom: hp(0.5),
// // //   },
// // //   newReleaseArtist: {
// // //     fontSize: wp(3.29),
// // //     color: '#b3b3b3',
// // //   },
// // //   bottomPadding: {
// // //     height: hp(10),
// // //   },
// // //   miniPlayer: {
// // //     position: 'absolute',
// // //     bottom: 0,
// // //     left: 0,
// // //     right: 0,
// // //     backgroundColor: '#181818',
// // //     flexDirection: 'row',
// // //     alignItems: 'center',
// // //     justifyContent: 'space-between',
// // //     paddingHorizontal: wp(3.76),
// // //     paddingVertical: hp(1),
// // //     borderTopWidth: 1,
// // //     borderTopColor: '#282828',
// // //   },
// // //   miniPlayerLeft: {
// // //     flexDirection: 'row',
// // //     alignItems: 'center',
// // //     flex: 1,
// // //   },
// // //   miniPlayerImage: {
// // //     width: wp(9.4),
// // //     height: wp(9.4),
// // //     borderRadius: wp(0.5),
// // //     marginRight: wp(2.82),
// // //   },
// // //   miniPlayerText: {
// // //     flex: 1,
// // //   },
// // //   miniPlayerTitle: {
// // //     fontSize: wp(3.29),
// // //     fontWeight: '600',
// // //     color: '#fff',
// // //     marginBottom: hp(0.25),
// // //   },
// // //   miniPlayerArtist: {
// // //     fontSize: wp(2.82),
// // //     color: '#b3b3b3',
// // //   },
// // //   miniPlayerRight: {
// // //     flexDirection: 'row',
// // //     alignItems: 'center',
// // //   },
// // //   miniPlayerButton: {
// // //     marginLeft: wp(3.76),
// // //   },
// // // });

// // // export default HomeScreen;


// // import {
// //   View,
// //   Text,
// //   ScrollView,
// //   TouchableOpacity,
// //   StyleSheet,
// //   StatusBar,
// //   SafeAreaView,
// //   Image,
// //   ActivityIndicator,
// //   FlatList,
// //   Dimensions,
// //   RefreshControl
// // } from 'react-native';
// // import React, { useState, useEffect } from 'react';


// // import Icon from 'react-native-vector-icons/MaterialIcons';
// // import Feather from 'react-native-vector-icons/Feather';
// // import { wp, hp } from "../assets/Global.Css";
// // import { getDataFromAsyncStorage } from '../Services/CommonFunction';
// // import { mobile_siteConfig } from '../Services/mobile-siteConfig';
// // import { getDataWithToken } from '../Services/mobile-api';

// // const { width } = Dimensions.get('window');

// // const HomeScreen = ({navigation}) => {
// //   const [userData, setUserData] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [refreshing, setRefreshing] = useState(false);
  
// //   // Home API Data States
// //   const [homeData, setHomeData] = useState({
// //     recentlyPlayed: [],
// //     continueListening: [],
// //     pickYourMood: [],
// //     newReleases: []
// //   });

// //   useEffect(() => {
// //     loadInitialData();
// //   }, []);

// //   const loadInitialData = async () => {
// //     try {
// //       setLoading(true);
      
// //       // Load user data from storage
// //       const storedUserData = await getDataFromAsyncStorage(mobile_siteConfig.USER_Data);
// //       if (storedUserData) {
// //         setUserData(storedUserData);
// //       }
      
// //       // Load home data from API
// //       await fetchHomeData();
      
// //     } catch (error) {
// //       console.error('Error loading initial data:', error);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // ✅ HOME API INTEGRATION
// //   const fetchHomeData = async () => {
// //     try {
// //       console.log('Fetching home data...');
// //       const response = await getDataWithToken('user/home');
// //       console.log('Home API Response:', response);
      
// //       if (response && response.success && response.data) {
// //         // ✅ CORRECT DATA EXTRACTION FROM API RESPONSE
// //         setHomeData({
// //           recentlyPlayed: Array.isArray(response.data.recentlyPlayed?.songs) 
// //             ? response.data.recentlyPlayed.songs 
// //             : getDefaultRecentlyPlayed(),
// //           continueListening: Array.isArray(response.data.continueListening?.songs) 
// //             ? response.data.continueListening.songs 
// //             : getDefaultContinueListening(),
// //           pickYourMood: Array.isArray(response.data.pickYourMood?.moods) 
// //             ? response.data.pickYourMood.moods 
// //             : getDefaultMoods(),
// //           newReleases: Array.isArray(response.data.newReleases?.songs) 
// //             ? response.data.newReleases.songs 
// //             : getDefaultNewReleases()
// //         });
// //       } else {
// //         // Use default data if API fails
// //         setHomeData({
// //           recentlyPlayed: getDefaultRecentlyPlayed(),
// //           continueListening: getDefaultContinueListening(),
// //           pickYourMood: getDefaultMoods(),
// //           newReleases: getDefaultNewReleases()
// //         });
// //       }
// //     } catch (error) {
// //       console.error('Error fetching home data:', error);
// //       // Use default data on error
// //       setHomeData({
// //         recentlyPlayed: getDefaultRecentlyPlayed(),
// //         continueListening: getDefaultContinueListening(),
// //         pickYourMood: getDefaultMoods(),
// //         newReleases: getDefaultNewReleases()
// //       });
// //     }
// //   };

// //   const onRefresh = async () => {
// //     setRefreshing(true);
// //     await loadInitialData();
// //     await fetchHomeData();
// //     setRefreshing(false);
// //   };

// //   // Default data functions (same as before)
// //   const getDefaultRecentlyPlayed = () => [
// //     { 
// //       id: '1', 
// //       title: 'Inside Out', 
// //       artist: 'The Chainsmokers',
// //       image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop'
// //     },
// //     { 
// //       id: '2', 
// //       title: 'Young', 
// //       artist: 'The Chainsmokers',
// //       image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop'
// //     },
// //     { 
// //       id: '3', 
// //       title: 'Beach House', 
// //       artist: 'The Chainsmokers',
// //       image: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=200&h=200&fit=crop'
// //     },
// //     { 
// //       id: '4', 
// //       title: 'Kills You Slowly', 
// //       artist: 'The Chainsmokers',
// //       image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=200&h=200&fit=crop'
// //     },
// //     { 
// //       id: '5', 
// //       title: 'Set', 
// //       artist: 'The Chainsmokers',
// //       image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=200&h=200&fit=crop'
// //     },
// //   ];

// //   const getDefaultContinueListening = () => [
// //     { 
// //       id: '1', 
// //       title: 'Coffee & Jazz', 
// //       type: 'Playlist', 
// //       image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=300&h=300&fit=crop'
// //     },
// //     { 
// //       id: '2', 
// //       title: 'Riess Stars', 
// //       type: 'Playlist', 
// //       image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop'
// //     },
// //     { 
// //       id: '3', 
// //       title: 'RELEASED', 
// //       type: 'Playlist', 
// //       image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop'
// //     },
// //     { 
// //       id: '4', 
// //       title: 'Anything Goes', 
// //       type: 'Playlist', 
// //       image: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=300&h=300&fit=crop'
// //     },
// //     { 
// //       id: '5', 
// //       title: 'Anime OSTs', 
// //       type: 'Playlist', 
// //       image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&h=300&fit=crop'
// //     },
// //     { 
// //       id: '6', 
// //       title: "Harry's House", 
// //       type: 'Album', 
// //       image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=300&h=300&fit=crop'
// //     },
// //     { 
// //       id: '7', 
// //       title: 'Lo-Fi Beats', 
// //       type: 'Playlist', 
// //       image: 'https://images.unsplash.com/photo-1489599809505-fb44932d0e71?w=300&h=300&fit=crop'
// //     },
// //   ];

// //   const getDefaultMoods = () => [
// //     { 
// //       id: '1', 
// //       title: 'Hollywood', 
// //       image: 'https://images.unsplash.com/photo-1489599809505-fb44932d0e71?w=300&h=150&fit=crop'
// //     },
// //     { 
// //       id: '2', 
// //       title: 'HIP-HOP', 
// //       image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&h=150&fit=crop'
// //     },
// //     { 
// //       id: '3', 
// //       title: 'POP', 
// //       image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=150&fit=crop'
// //     },
// //     { 
// //       id: '4', 
// //       title: 'ROCK', 
// //       image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=150&fit=crop'
// //     },
// //   ];

// //   const getDefaultNewReleases = () => [
// //     { 
// //       id: '1', 
// //       title: 'Inside Out', 
// //       artist: 'The Chainsmokers, Charles',
// //       image: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=200&h=200&fit=crop'
// //     },
// //     { 
// //       id: '2', 
// //       title: 'Summer Hits', 
// //       artist: 'Various Artists',
// //       image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=200&h=200&fit=crop'
// //     },
// //     { 
// //       id: '3', 
// //       title: 'Midnight Drive', 
// //       artist: 'Weeknd, Drake',
// //       image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200&h=200&fit=crop'
// //     },
// //   ];

// //   // ✅ CORRECTED RENDER FUNCTIONS - Handle API data properly
// //   const renderRecentlyPlayedItem = ({ item }) => {
// //     // ✅ Check if item is valid
// //     if (!item || typeof item !== 'object') {
// //       return null;
// //     }
    
// //     return (
// //       // <TouchableOpacity style={styles.recentItem}>
// //       //   <Image 
// //       //     source={{ uri: item.image || item.thumbnail || 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop' }} 
// //       //     style={styles.recentImage}
// //       //     resizeMode="cover"
// //       //   />

// //        <TouchableOpacity 
// //       style={styles.recentItem}
// //       onPress={() => {
// //         console.log('🎵 Clicked song:', item);
// //         // ✅ PROPERLY PASS SONG ID
// //         navigation.navigate('NowPlayingScreen', { 
// //           songId: item.id || item._id || '2' // Fallback to '1' if no ID
// //         });
// //       }}
// //     >
// //       <Image 
// //         source={{ uri: item.image || item.thumbnail || 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop' }} 
// //         style={styles.recentImage}
// //         resizeMode="cover"
// //       />
// //         <View style={styles.recentText}>
// //           <Text style={styles.recentTitle} numberOfLines={1}>
// //             {item.title || item.name || 'Unknown Title'}
// //           </Text>
// //           <Text style={styles.recentArtist} numberOfLines={1}>
// //             {item.artist || 'Unknown Artist'}
// //           </Text>
// //         </View>
// //       </TouchableOpacity>
// //     );
// //   };

// //   const renderContinueItem = ({ item }) => {
// //     if (!item || typeof item !== 'object') {
// //       return null;
// //     }
    
// //     return (
// //       // <TouchableOpacity style={styles.continueItem}>
// //       //   <Image 
// //       //     source={{ uri: item.image || item.thumbnail || 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=300&h=300&fit=crop' }} 
// //       //     style={styles.continueImage}
// //       //     resizeMode="cover"

// //       <TouchableOpacity 
// //       style={styles.continueItem}
// //       onPress={() => {
// //         console.log('🎵 Clicked song:', item);
// //         // ✅ PROPERLY PASS SONG ID
// //         navigation.navigate('NowPlayingScreen', { 
// //           songId: item.id || item._id || '2' // Fallback to '2' if no ID
// //         });
// //       }}
// //     >
// //       <Image 
// //         source={{ uri: item.image || item.thumbnail || 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=300&h=300&fit=crop' }} 
// //         style={styles.continueImage}
// //         resizeMode="cover"
// //       />
        
// //         <View style={styles.continueOverlay} />
// //         <View style={styles.continueContent}>
// //           <Text style={styles.continueTitle} numberOfLines={2}>
// //             {item.title || item.name || 'Unknown Title'}
// //           </Text>
// //           <Text style={styles.continueType}>
// //             {item.type || ''}
// //           </Text>
// //           <View style={styles.playButton}>
// //             <Icon name="play-arrow" size={wp(5.64)} color="#000" />
// //           </View>
// //         </View>
// //       </TouchableOpacity>
// //     );
// //   };

// //   const renderMoodItem = ({ item }) => {
// //     if (!item || typeof item !== 'object') {
// //       return null;
// //     }
    
// //     return (
// //       <TouchableOpacity style={styles.moodItem}>
// //         <Image 
// //           source={{ uri: item.image || item.thumbnail || 'https://images.unsplash.com/photo-1489599809505-fb44932d0e71?w=300&h=150&fit=crop' }} 
// //           style={styles.moodImage}
// //           resizeMode="cover"
// //         />
// //         <View style={styles.moodOverlay} />
// //         <Text style={styles.moodTitle}>
// //           {item.title || item.name || 'Unknown Mood'}
// //         </Text>
// //       </TouchableOpacity>
// //     );
// //   };

// //   const renderNewReleaseItem = ({ item }) => {
// //     if (!item || typeof item !== 'object') {
// //       return null;
// //     }
    
// //     return (
// //       // <TouchableOpacity style={styles.newReleaseItem}>
// //       //   <Image 
// //       //     source={{ uri: item.image || item.thumbnail || 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=200&h=200&fit=crop' }} 
// //       //     style={styles.newReleaseImage}
// //       //     resizeMode="cover"
// //       //   />

// //       <TouchableOpacity 
// //       style={styles.newReleaseItem}
// //       onPress={() => {
// //         console.log('🎵 Clicked song:', item);
// //         // ✅ PROPERLY PASS SONG ID
// //         navigation.navigate('NowPlayingScreen', { 
// //           songId: item.id || item._id || '2' // Fallback to '2' if no ID
// //         });
// //       }}
// //     >
// //       <Image 
// //         source={{ uri: item.image || item.thumbnail || 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=300&h=300&fit=crop' }} 
// //         style={styles.newReleaseImage}
// //         resizeMode="cover"
// //       />
// //         <View style={styles.newReleaseText}>
// //           <Text style={styles.newReleaseTitle} numberOfLines={1}>
// //             {item.title || item.name || 'Unknown Title'}
// //           </Text>
// //           <Text style={styles.newReleaseArtist} numberOfLines={1}>
// //             {item.artist || 'Various Artists'}
// //           </Text>
// //         </View>
// //       </TouchableOpacity>
// //     );
// //   };

// //   return (
// //     <SafeAreaView style={styles.container}>
// //       <StatusBar barStyle="light-content" backgroundColor="#000" />

// //       {loading ? (
// //         <View style={styles.loadingContainer}>
// //           <ActivityIndicator size="large" color="#FF3B3B" />
// //           <Text style={styles.loadingText}>Loading...</Text>
// //         </View>
// //       ) : (
// //         <>
// //           {/* Header - Same as before with dynamic user data */}
// //           <View style={styles.header}>
// //             <View style={styles.headerLeft}>
// //               <TouchableOpacity 
// //                 style={styles.profileSection}
// //                 onPress={() => navigation.navigate('ProfileSettingsScreen')}
// //               >
// //                 <Image 
// //                   source={{ 
// //                     uri: userData?.profileImage || 
// //                          (userData?.profilePic ? 
// //                           `http://103.119.171.213:3001${userData.profilePic}` : 
// //                           'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face')
// //                   }}
// //                   style={styles.profileImage}
// //                 />
// //                 <View style={styles.welcomeText}>
// //                   <Text style={styles.welcomeBack}>Welcome back !</Text>
// //                   <Text style={styles.userName}>
// //                     {userData?.name || 'User'}
// //                   </Text>
// //                 </View>
// //               </TouchableOpacity>
// //             </View>
// //             <View style={styles.headerRight}>
// //               <TouchableOpacity style={styles.iconButton}>
// //                 <Feather name="bell" size={wp(5.64)} color="#fff" />
// //               </TouchableOpacity>
// //             </View>
// //           </View>

// //           <ScrollView 
// //             style={styles.scrollView}
// //             showsVerticalScrollIndicator={false}
// //             refreshControl={
// //               <RefreshControl
// //                 refreshing={refreshing}
// //                 onRefresh={onRefresh}
// //                 colors={['#FF3B3B']}
// //                 tintColor="#FF3B3B"
// //               />
// //             }
// //           >
// //             {/* Recently Played Section - Using API Data */}
// //             <View style={styles.section}>
// //               <Text style={styles.sectionTitle}>Recently Played</Text>
// //               <FlatList
// //                 data={homeData.recentlyPlayed}
// //                 renderItem={renderRecentlyPlayedItem}
// //                 keyExtractor={item => item?.id || item?._id || Math.random().toString()}
// //                 horizontal
// //                 showsHorizontalScrollIndicator={false}
// //                 contentContainerStyle={styles.recentList}
// //               />
// //             </View>

// //             {/* Continue Listening Section - Using API Data */}
// //             <View style={styles.section}>
// //               <Text style={styles.sectionTitle}>Continue Listening</Text>
// //               <FlatList
// //                 data={homeData.continueListening}
// //                 renderItem={renderContinueItem}
// //                 keyExtractor={item => item?.id || item?._id || Math.random().toString()}
// //                 horizontal
// //                 showsHorizontalScrollIndicator={false}
// //                 contentContainerStyle={styles.continueList}
// //               />
// //             </View>

// //             {/* Pick Your Mood Section - Using API Data */}
// //             <View style={styles.section}>
// //               <Text style={styles.sectionTitle}>Pick Your Mood</Text>
// //               <View style={styles.moodGrid}>
// //                 {homeData.pickYourMood.map((item, index) => (
// //                   <React.Fragment key={item?.id || item?._id || index}>
// //                     {renderMoodItem({ item })}
// //                   </React.Fragment>
// //                 ))}
// //               </View>
// //             </View>

// //             {/* New Releases Section - Using API Data */}
// //             <View style={styles.section}>
// //               <Text style={styles.sectionTitle}>New Releases</Text>
// //               <View style={styles.newReleasesGrid}>
// //                 {homeData.newReleases.map((item, index) => (
// //                   <React.Fragment key={item?.id || item?._id || index}>
// //                     {renderNewReleaseItem({ item })}
// //                   </React.Fragment>
// //                 ))}
// //               </View>
// //             </View>

// //             {/* Bottom Padding */}
// //             <View style={styles.bottomPadding} />
// //           </ScrollView>

// //           {/* Mini Player */}
// //           <View style={styles.miniPlayer}>
// //             <View style={styles.miniPlayerLeft}>
// //               <Image 
// //                 source={{ 
// //                   uri: homeData.recentlyPlayed[0]?.image || 
// //                        homeData.recentlyPlayed[0]?.thumbnail || 
// //                        'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=100&h=100&fit=crop' 
// //                 }}
// //                 style={styles.miniPlayerImage}
// //               />
// //               <View style={styles.miniPlayerText}>
// //                 <Text style={styles.miniPlayerTitle} numberOfLines={1}>
// //                   {homeData.recentlyPlayed[0]?.title || homeData.recentlyPlayed[0]?.name || 'Inside Out'}
// //                 </Text>
// //                 <Text style={styles.miniPlayerArtist} numberOfLines={1}>
// //                   {homeData.recentlyPlayed[0]?.artist || 'The Chainsmokers'}
// //                 </Text>
// //               </View>
// //             </View>
// //             <View style={styles.miniPlayerRight}>
// //               <TouchableOpacity style={styles.miniPlayerButton}>
// //                 <Icon name="favorite-border" size={wp(5.64)} color="#b3b3b3" />
// //               </TouchableOpacity>
// //               <TouchableOpacity style={styles.miniPlayerButton}>
// //                 <Icon name="play-arrow" size={wp(7.05)} color="#fff" />
// //               </TouchableOpacity>
// //             </View>
// //           </View>
// //         </>
// //       )}
// //     </SafeAreaView>
// //   );
// // };

// // // Styles remain EXACTLY THE SAME as your original code
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
// //     marginTop: 10,
// //     fontSize: 16,
// //   },
// //   header: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     paddingHorizontal: wp(3.76),
// //     paddingVertical: hp(1.5),
// //   },
// //   headerLeft: {
// //     flex: 1,
// //   },
// //   profileSection: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //   },
// //   profileImage: {
// //     width: wp(11.75),
// //     height: wp(11.75),
// //     borderRadius: wp(5.875),
// //     backgroundColor: '#333',
// //     marginRight: wp(2.82),
// //   },
// //   welcomeText: {
// //     flex: 1,
// //   },
// //   welcomeBack: {
// //     fontSize: wp(3.76),
// //     color: '#b3b3b3',
// //     marginBottom: hp(0.25),
// //   },
// //   userName: {
// //     fontSize: wp(4.7),
// //     fontWeight: 'bold',
// //     color: '#fff',
// //   },
// //   headerRight: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //   },
// //   iconButton: {
// //     marginLeft: 0,
// //   },
// //   scrollView: {
// //     flex: 1,
// //   },
// //   section: {
// //     marginBottom: hp(3),
// //   },
// //   sectionTitle: {
// //     fontSize: wp(5.17),
// //     fontWeight: 'bold',
// //     color: '#fff',
// //     marginBottom: hp(2),
// //     paddingHorizontal: wp(3.76),
// //   },
// //   recentList: {
// //     paddingHorizontal: wp(3.76),
// //   },
// //   recentItem: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     backgroundColor: '#181818',
// //     borderRadius: wp(2),
// //     marginRight: wp(2.82),
// //     padding: wp(2),
// //     width: wp(42),
// //   },
// //   recentImage: {
// //     width: wp(11.28),
// //     height: wp(11.28),
// //     borderRadius: wp(1),
// //     marginRight: wp(2.82),
// //   },
// //   recentText: {
// //     flex: 1,
// //   },
// //   recentTitle: {
// //     fontSize: wp(3.29),
// //     fontWeight: '600',
// //     color: '#fff',
// //     marginBottom: hp(0.5),
// //   },
// //   recentArtist: {
// //     fontSize: wp(2.82),
// //     color: '#b3b3b3',
// //   },
// //   continueList: {
// //     paddingHorizontal: wp(3.76),
// //   },
// //   continueItem: {
// //     width: wp(37.6),
// //     height: wp(37.6),
// //     borderRadius: wp(2),
// //     marginRight: wp(2.82),
// //     overflow: 'hidden',
// //     position: 'relative',
// //   },
// //   continueImage: {
// //     width: '100%',
// //     height: '100%',
// //     position: 'absolute',
// //   },
// //   continueOverlay: {
// //     ...StyleSheet.absoluteFillObject,
// //     backgroundColor: 'rgba(0,0,0,0.3)',
// //   },
// //   continueContent: {
// //     flex: 1,
// //     padding: wp(2.82),
// //     justifyContent: 'space-between',
// //   },
// //   continueTitle: {
// //     fontSize: wp(3.76),
// //     fontWeight: 'bold',
// //     color: '#fff',
// //     textShadowColor: 'rgba(0,0,0,0.8)',
// //     textShadowOffset: { width: 1, height: 1 },
// //     textShadowRadius: 4,
// //   },
// //   continueType: {
// //     fontSize: wp(2.82),
// //     color: '#b3b3b3',
// //     textShadowColor: 'rgba(0,0,0,0.8)',
// //     textShadowOffset: { width: 1, height: 1 },
// //     textShadowRadius: 4,
// //   },
// //   playButton: {
// //     width: wp(9.4),
// //     height: wp(9.4),
// //     backgroundColor: '#FF3B3B',
// //     borderRadius: wp(4.7),
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     alignSelf: 'flex-end',
// //   },
// //   moodGrid: {
// //     flexDirection: 'row',
// //     flexWrap: 'wrap',
// //     paddingHorizontal: wp(3.76),
// //     justifyContent: 'space-between',
// //   },
// //   moodItem: {
// //     width: (wp(100) - wp(11.28)) / 2,
// //     height: hp(12),
// //     borderRadius: wp(2),
// //     marginBottom: hp(1.5),
// //     overflow: 'hidden',
// //     position: 'relative',
// //   },
// //   moodImage: {
// //     width: '100%',
// //     height: '100%',
// //     position: 'absolute',
// //   },
// //   moodOverlay: {
// //     ...StyleSheet.absoluteFillObject,
// //     backgroundColor: 'rgba(0,0,0,0.4)',
// //   },
// //   moodTitle: {
// //     fontSize: wp(4.23),
// //     fontWeight: 'bold',
// //     color: '#fff',
// //     position: 'absolute',
// //     top: '50%',
// //     left: 0,
// //     right: 0,
// //     textAlign: 'center',
// //     transform: [{ translateY: -hp(1) }],
// //     textShadowColor: 'rgba(0,0,0,0.8)',
// //     textShadowOffset: { width: 1, height: 1 },
// //     textShadowRadius: 4,
// //   },
// //   newReleasesGrid: {
// //     paddingHorizontal: wp(3.76),
// //   },
// //   newReleaseItem: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     marginBottom: hp(2),
// //   },
// //   newReleaseImage: {
// //     width: wp(14.1),
// //     height: wp(14.1),
// //     borderRadius: wp(1),
// //     marginRight: wp(2.82),
// //   },
// //   newReleaseText: {
// //     flex: 1,
// //   },
// //   newReleaseTitle: {
// //     fontSize: wp(3.76),
// //     fontWeight: '600',
// //     color: '#fff',
// //     marginBottom: hp(0.5),
// //   },
// //   newReleaseArtist: {
// //     fontSize: wp(3.29),
// //     color: '#b3b3b3',
// //   },
// //   bottomPadding: {
// //     height: hp(10),
// //   },
// //   miniPlayer: {
// //     position: 'absolute',
// //     bottom: 0,
// //     left: 0,
// //     right: 0,
// //     backgroundColor: '#181818',
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     justifyContent: 'space-between',
// //     paddingHorizontal: wp(3.76),
// //     paddingVertical: hp(1),
// //     borderTopWidth: 1,
// //     borderTopColor: '#282828',
// //   },
// //   miniPlayerLeft: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     flex: 1,
// //   },
// //   miniPlayerImage: {
// //     width: wp(9.4),
// //     height: wp(9.4),
// //     borderRadius: wp(0.5),
// //     marginRight: wp(2.82),
// //   },
// //   miniPlayerText: {
// //     flex: 1,
// //   },
// //   miniPlayerTitle: {
// //     fontSize: wp(3.29),
// //     fontWeight: '600',
// //     color: '#fff',
// //     marginBottom: hp(0.25),
// //   },
// //   miniPlayerArtist: {
// //     fontSize: wp(2.82),
// //     color: '#b3b3b3',
// //   },
// //   miniPlayerRight: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //   },
// //   miniPlayerButton: {
// //     marginLeft: wp(3.76),
// //   },
// // });

// // export default HomeScreen;


// import {
//   View,
//   Text,
//   ScrollView,
//   TouchableOpacity,
//   StyleSheet,
//   StatusBar,
//   SafeAreaView,
//   Image,
//   ActivityIndicator,
//   FlatList,
//   Dimensions,
//   RefreshControl
// } from 'react-native';
// import React, { useState, useEffect } from 'react';
// import AsyncStorage from "@react-native-async-storage/async-storage";

// import { useIsFocused } from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import Feather from 'react-native-vector-icons/Feather';
// import { wp, hp } from "../assets/Global.Css";
// import { getDataFromAsyncStorage } from '../Services/CommonFunction';
// import { mobile_siteConfig } from '../Services/mobile-siteConfig';
// import { getDataWithToken } from '../Services/mobile-api';
// import { useAudio } from '../contexts/AudioContext'; // ✅ Audio Context Import

// const { width } = Dimensions.get('window');


// // ✅ IMAGE URL HELPER FUNCTION
// const getImageUrl = (imagePath) => {
//   if (!imagePath) {
//     return 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop';
//   }
  
//   // Agar full URL hai to wahi return karo
//   if (imagePath.startsWith('http')) {
//     return imagePath;
//   }
  
//   // Agar relative path hai to base URL se combine karo
//   if (imagePath.startsWith('/')) {
//     return `${mobile_siteConfig.IMAGE_BASE_URL}${imagePath}`;
//   }
  
//   // Default fallback
//   return 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop';
// };


// const HomeScreen = ({navigation}) => {

//   const isFocused = useIsFocused();
//   // ✅ Global Audio Context
//   const { currentSong, isPlaying, togglePlayPause, playSong } = useAudio();
  
//   const [userData, setUserData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [refreshing, setRefreshing] = useState(false);


//   const fetchUserProfile = async () => {
//   try {
//     const response = await getDataWithToken('user/profile');
//     if (response?.success && response?.user) {
//       console.log('✅ Profile fetched:', response.user);
//       setUserData(response.user);
//       await AsyncStorage.setItem(
//         mobile_siteConfig.USER_Data,
//         JSON.stringify(response.user)
//       );
//     } else {
//       console.warn('⚠️ Failed to fetch user profile:', response);
//     }
//   } catch (error) {
//     console.error('❌ Error fetching profile:', error);
//   }
// };

// useEffect(() => {
//   if (isFocused) {
//     fetchUserProfile();
//   }
// }, [isFocused]);
  
//   // Home API Data States
//   const [homeData, setHomeData] = useState({
//     recentlyPlayed: [],
//     continueListening: [],
//     pickYourMood: [],
//     newReleases: []
//   });

//   useEffect(() => {
//     loadInitialData();
//      fetchUserProfile(); 
//   }, []);

//   const loadInitialData = async () => {
//     try {
//       setLoading(true);
      
//       // Load user data from storage
//       const storedUserData = await getDataFromAsyncStorage(mobile_siteConfig.USER_Data);
//       if (storedUserData) {
//         setUserData(storedUserData);
//       }
      
//       // Load home data from API
//       await fetchHomeData();
      
//     } catch (error) {
//       console.error('Error loading initial data:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ✅ HOME API INTEGRATION
//   const fetchHomeData = async () => {
//     try {
//       console.log('Fetching home data...');
//       const response = await getDataWithToken('user/home');
//       console.log('Home API Response:', response);
      
//       if (response && response.success && response.data) {
//         // ✅ CORRECT DATA EXTRACTION FROM API RESPONSE
//         setHomeData({
//           recentlyPlayed: Array.isArray(response.data.recentlyPlayed?.songs) 
//             ? response.data.recentlyPlayed.songs 
//             : getDefaultRecentlyPlayed(),
//           continueListening: Array.isArray(response.data.continueListening?.songs) 
//             ? response.data.continueListening.songs 
//             : getDefaultContinueListening(),
//           pickYourMood: Array.isArray(response.data.pickYourMood?.moods) 
//             ? response.data.pickYourMood.moods 
//             : getDefaultMoods(),
//           newReleases: Array.isArray(response.data.newReleases?.songs) 
//             ? response.data.newReleases.songs 
//             : getDefaultNewReleases()
//         });
//       } else {
//         // Use default data if API fails
//         setHomeData({
//           recentlyPlayed: getDefaultRecentlyPlayed(),
//           continueListening: getDefaultContinueListening(),
//           pickYourMood: getDefaultMoods(),
//           newReleases: getDefaultNewReleases()
//         });
//       }
//     } catch (error) {
//       console.error('Error fetching home data:', error);
//       // Use default data on error
//       setHomeData({
//         recentlyPlayed: getDefaultRecentlyPlayed(),
//         continueListening: getDefaultContinueListening(),
//         pickYourMood: getDefaultMoods(),
//         newReleases: getDefaultNewReleases()
//       });
//     }
//   };

//   const onRefresh = async () => {
//     setRefreshing(true);
//     await loadInitialData();
//     await fetchHomeData();
//     setRefreshing(false);
//   };

//   // ✅ SONG PLAY FUNCTION - Global Context Use Karega
//   // const handleSongPlay = async (item) => {
//   //   console.log('🎵 Clicked song:', item);
    
//   //   try {
//   //     // ✅ Pehle song info fetch karo
//   //     const songInfo = await getDataWithToken(`user/song/${item.id || item._id}/info`);
//   //     console.log('🎵 Song Info:', songInfo);
      
//   //     if (songInfo && songInfo.success) {
//   //       const songData = {
//   //         id: item.id || item._id,
//   //         title: item.title || item.name || 'Unknown Title',
//   //         artist: item.artist || 'Unknown Artist',
//   //         // ✅ Audio URL build karo
//   //         audioUrl: songInfo.song?.audioFile 
//   //           ? `http://103.119.171.213:3001${songInfo.song.audioFile}`
//   //           : 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', // Fallback
//   //         artwork: item.image || item.thumbnail || songInfo.song?.thumbnail || 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop'
//   //       };
        
//   //       console.log('🎵 Playing song data:', songData);
        
//   //       // ✅ Global context mein play karo
//   //       playSong(songData);
        
//   //       // ✅ NowPlayingScreen pe navigate karo
//   //       navigation.navigate('NowPlayingScreen', { 
//   //         songId: item.id || item._id 
//   //       });
//   //     } else {
//   //       throw new Error('Song info not found');
//   //     }
//   //   } catch (error) {
//   //     console.error('❌ Error playing song:', error);
      
//   //     // ✅ Fallback song data agar API fail ho
//   //     const fallbackSongData = {
//   //       id: item.id || item._id || '1',
//   //       title: item.title || item.name || 'Unknown Title',
//   //       artist: item.artist || 'Unknown Artist',
//   //       audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
//   //       artwork: item.image || item.thumbnail || 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop'
//   //     };
      
//   //     playSong(fallbackSongData);
//   //     navigation.navigate('NowPlayingScreen', { 
//   //       songId: item.id || item._id 
//   //     });
//   //   }
//   // };

//   // ✅ SONG PLAY FUNCTION - Start from beginning
// const handleSongPlay = async (item) => {
//   console.log('🎵 Song clicked from list - starting from beginning');
  
//   try {
//     const songInfo = await getDataWithToken(`user/song/${item.id || item._id}/info`);
//     console.log('🎵 Song Info:', songInfo);
    
//     if (songInfo && songInfo.success) {
//       const songData = {
//         id: item.id || item._id,
//         title: item.title || item.name || 'Unknown Title',
//         artist: item.artist || 'Unknown Artist',
//         audioUrl: songInfo.song?.audioFile 
//           ? `http://103.119.171.213:3001${songInfo.song.audioFile}`
//           : 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
//       //   artwork: item.image || item.thumbnail || songInfo.song?.thumbnail || 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop'
//       // };
//         artwork: getImageUrl(item.image || item.thumbnail || songInfo.song?.thumbnail)
//       };
      
//       console.log('🎵 Playing song from beginning:', songData);
      
//       // ✅ Global context mein play karo (start se)
//       playSong(songData);
      
//       // ✅ NowPlayingScreen pe navigate karo with reset flag
//       navigation.navigate('NowPlayingScreen', { 
//         songId: item.id || item._id,
//         resetToBeginning: true // ✅ Yeh batayega ki start se karna hai
//       });
//     }
//   } catch (error) {
//     console.error('❌ Error playing song:', error);
    
//     const fallbackSongData = {
//       id: item.id || item._id || '1',
//       title: item.title || item.name || 'Unknown Title',
//       artist: item.artist || 'Unknown Artist',
//       audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
//     //   artwork: item.image || item.thumbnail || 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop'
//     // };

//       artwork: getImageUrl(item.image || item.thumbnail)
//     };
    
//     playSong(fallbackSongData);
//     navigation.navigate('NowPlayingScreen', { 
//       songId: item.id || item._id,
//       resetToBeginning: true
//     });
//   }
// };

// // ✅ MINI PLAYER - Continue from current position
// // {currentSong && (
// //   <TouchableOpacity 
// //     style={styles.miniPlayer}
// //     onPress={() => {
// //       console.log('🎵 Mini player clicked - continuing from current position');
// //       // ✅ Mini player se click: Continue from current position
// //       navigation.navigate('NowPlayingScreen', { 
// //         songId: currentSong.id,
// //         resetToBeginning: false // ✅ Continue karna hai
// //       });
// //     }}
// //   >
// //     <View style={styles.miniPlayerLeft}>
// //       <Image 
// //         source={{ uri: currentSong.artwork }} 
// //         style={styles.miniPlayerImage}
// //       />
// //       <View style={styles.miniPlayerText}>
// //         <Text style={styles.miniPlayerTitle} numberOfLines={1}>
// //           {currentSong.title}
// //         </Text>
// //         <Text style={styles.miniPlayerArtist} numberOfLines={1}>
// //           {currentSong.artist}
// //         </Text>
// //       </View>
// //     </View>
// //     <View style={styles.miniPlayerRight}>
// //       <TouchableOpacity style={styles.miniPlayerButton}>
// //         <Icon name="favorite-border" size={wp(5.64)} color="#b3b3b3" />
// //       </TouchableOpacity>
// //       <TouchableOpacity 
// //         style={styles.miniPlayerButton}
// //         onPress={(e) => {
// //           e.stopPropagation();
// //           togglePlayPause();
// //         }}
// //       >
// //         <Icon 
// //           name={isPlaying ? "pause" : "play-arrow"} 
// //           size={wp(7.05)} 
// //           color="#fff" 
// //         />
// //       </TouchableOpacity>
// //     </View>
// //   </TouchableOpacity>
// // )}

// // ✅ UPDATED MINI PLAYER - Global Audio State Show Karega
// // {currentSong && (
// //   <TouchableOpacity 
// //     style={styles.miniPlayer}
// //     onPress={() => navigation.navigate('NowPlayingScreen', { 
// //       songId: currentSong.id,
// //       resetToBeginning: false
// //     })}
// //   >
// //     <View style={styles.miniPlayerLeft}>
// //       <Image 
// //         source={{ 
// //           uri: getImageUrl(currentSong.artwork)
// //         }} 
// //         style={styles.miniPlayerImage}
// //         defaultSource={{ uri: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=100&h=100&fit=crop' }}
// //       />
// //       <View style={styles.miniPlayerText}>
// //         <Text style={styles.miniPlayerTitle} numberOfLines={1}>
// //           {currentSong.title}
// //         </Text>
// //         <Text style={styles.miniPlayerArtist} numberOfLines={1}>
// //           {currentSong.artist}
// //         </Text>
// //       </View>
// //     </View>
// //     <View style={styles.miniPlayerRight}>
// //       <TouchableOpacity style={styles.miniPlayerButton}>
// //         <Icon name="favorite-border" size={wp(5.64)} color="#b3b3b3" />
// //       </TouchableOpacity>
// //       <TouchableOpacity 
// //         style={styles.miniPlayerButton}
// //         onPress={(e) => {
// //           e.stopPropagation(); // Navigation ko prevent karega
// //           togglePlayPause();
// //         }}
// //       >
// //         <Icon 
// //           name={isPlaying ? "pause" : "play-arrow"} 
// //           size={wp(7.05)} 
// //           color="#fff" 
// //         />
// //       </TouchableOpacity>
// //     </View>
// //   </TouchableOpacity>
// // )}

// // ✅ UPDATED MINI PLAYER - Global Audio State Show Karega
// {currentSong && (
//   <TouchableOpacity 
//     style={styles.miniPlayer}
//     onPress={() => {
//       console.log('🎵 Mini player clicked - continuing from current position');
//       navigation.navigate('NowPlayingScreen', { 
//         songId: currentSong.id,
//         resetToBeginning: false
//       });
//     }}
//   >
//     <View style={styles.miniPlayerLeft}>
//       <Image 
//         source={{ 
//           // ✅ FIX: Proper image URL with fallback
//           uri: currentSong.artwork || 
//                getImageUrl(currentSong.image || currentSong.thumbnail) ||
//                'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=100&h=100&fit=crop'
//         }} 
//         style={styles.miniPlayerImage}
//         defaultSource={{ uri: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=100&h=100&fit=crop' }}
//         onError={(e) => {
//           console.log('❌ Mini player image error:', e.nativeEvent.error);
//           // Fallback to default image on error
//           e.currentTarget.source = { 
//             uri: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=100&h=100&fit=crop' 
//           };
//         }}
//       />
//       <View style={styles.miniPlayerText}>
//         <Text style={styles.miniPlayerTitle} numberOfLines={1}>
//           {currentSong.title || 'Unknown Title'}
//         </Text>
//         <Text style={styles.miniPlayerArtist} numberOfLines={1}>
//           {currentSong.artist || 'Unknown Artist'}
//         </Text>
//       </View>
//     </View>
//     <View style={styles.miniPlayerRight}>
//       <TouchableOpacity style={styles.miniPlayerButton}>
//         <Icon name="favorite-border" size={wp(5.64)} color="#b3b3b3" />
//       </TouchableOpacity>
//       <TouchableOpacity 
//         style={styles.miniPlayerButton}
//         onPress={(e) => {
//           e.stopPropagation();
//           togglePlayPause();
//         }}
//       >
//         <Icon 
//           name={isPlaying ? "pause" : "play-arrow"} 
//           size={wp(7.05)} 
//           color="#fff" 
//         />
//       </TouchableOpacity>
//     </View>
//   </TouchableOpacity>
// )}

//   // Default data functions (same as before)
//   const getDefaultRecentlyPlayed = () => [
//     { 
//       id: '1', 
//       title: 'Inside Out', 
//       artist: 'The Chainsmokers',
//       image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop'
//     },
//     // ... rest of default data
//   ];

//   const getDefaultContinueListening = () => [
//     { 
//       id: '1', 
//       title: 'Coffee & Jazz', 
//       type: 'Playlist', 
//       image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=300&h=300&fit=crop'
//     },
//     // ... rest of default data
//   ];

//   const getDefaultMoods = () => [
//     { 
//       id: '1', 
//       title: 'Hollywood', 
//       image: 'https://images.unsplash.com/photo-1489599809505-fb44932d0e71?w=300&h=150&fit=crop'
//     },
//     // ... rest of default data
//   ];

//   const getDefaultNewReleases = () => [
//     { 
//       id: '1', 
//       title: 'Inside Out', 
//       artist: 'The Chainsmokers, Charles',
//       image: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=200&h=200&fit=crop'
//     },
//     // ... rest of default data
//   ];

//   // ✅ UPDATED RENDER FUNCTIONS - Global Audio Use Karega
//   const renderRecentlyPlayedItem = ({ item }) => {
//     if (!item || typeof item !== 'object') {
//       return null;
//     }
    
//     return (
//       // <TouchableOpacity 
//       //   style={styles.recentItem}
//       //   onPress={() => handleSongPlay(item)}
//       // >
//       //   <Image 
//       //     source={{ uri: item.image || item.thumbnail || 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop' }} 
//       //     style={styles.recentImage}
//       //     resizeMode="cover"
//       //   />
//       //   <View style={styles.recentText}>
//       //     <Text style={styles.recentTitle} numberOfLines={1}>
//       //       {item.title || item.name || 'Unknown Title'}
//       //     </Text>
//       //     <Text style={styles.recentArtist} numberOfLines={1}>
//       //       {item.artist || 'Unknown Artist'}
//       //     </Text>
//       //   </View>
//       // </TouchableOpacity>
//       <TouchableOpacity 
//       style={styles.recentItem}
//       onPress={() => handleSongPlay(item)}
//     >
//       <Image 
//         source={{ 
//           uri: getImageUrl(item.image || item.thumbnail || item.artwork)
//         }} 
//         style={styles.recentImage}
//         resizeMode="cover"
//         defaultSource={{ uri: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop' }}
//       />
//       <View style={styles.recentText}>
//         <Text style={styles.recentTitle} numberOfLines={1}>
//           {item.title || item.name || 'Unknown Title'}
//         </Text>
//         <Text style={styles.recentArtist} numberOfLines={1}>
//           {item.artist || 'Unknown Artist'}
//         </Text>
//       </View>
//     </TouchableOpacity>
//     );
//   };

//   const renderContinueItem = ({ item }) => {
//     if (!item || typeof item !== 'object') {
//       return null;
//     }
    
//     return (
//       // <TouchableOpacity 
//       //   style={styles.continueItem}
//       //   onPress={() => handleSongPlay(item)}
//       // >
//       //   <Image 
//       //     source={{ uri: item.image || item.thumbnail || 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=300&h=300&fit=crop' }} 
//       //     style={styles.continueImage}
//       //     resizeMode="cover"
//       //   />
        
//       //   <View style={styles.continueOverlay} />
//       //   <View style={styles.continueContent}>
//       //     <Text style={styles.continueTitle} numberOfLines={2}>
//       //       {item.title || item.name || 'Unknown Title'}
//       //     </Text>
//       //     <Text style={styles.continueType}>
//       //       {item.type || ''}
//       //     </Text>
//       //     <View style={styles.playButton}>
//       //       <Icon name="play-arrow" size={wp(5.64)} color="#000" />
//       //     </View>
//       //   </View>
//       // </TouchableOpacity>
//        <TouchableOpacity 
//       style={styles.continueItem}
//       onPress={() => handleSongPlay(item)}
//     >
//       <Image 
//         source={{ 
//           uri: getImageUrl(item.image || item.thumbnail || item.artwork)
//         }} 
//         style={styles.continueImage}
//         resizeMode="cover"
//         defaultSource={{ uri: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=300&h=300&fit=crop' }}
//       />
      
//       <View style={styles.continueOverlay} />
//       <View style={styles.continueContent}>
//         <Text style={styles.continueTitle} numberOfLines={2}>
//           {item.title || item.name || 'Unknown Title'}
//         </Text>
//         <Text style={styles.continueType}>
//           {item.type || ''}
//         </Text>
//         <View style={styles.playButton}>
//           <Icon name="play-arrow" size={wp(5.64)} color="#000" />
//         </View>
//       </View>
//     </TouchableOpacity>
//     );
//   };

//   // const renderMoodItem = ({ item }) => {
//   //   if (!item || typeof item !== 'object') {
//   //     return null;
//   //   }
    
//   //   return (
//   //     // <TouchableOpacity style={styles.moodItem}>
//   //     //   <Image 
//   //     //     source={{ uri: item.image || item.thumbnail || 'https://images.unsplash.com/photo-1489599809505-fb44932d0e71?w=300&h=150&fit=crop' }} 
//   //     //     style={styles.moodImage}
//   //     //     resizeMode="cover"
//   //     //   />
//   //     //   <View style={styles.moodOverlay} />
//   //     //   <Text style={styles.moodTitle}>
//   //     //     {item.title || item.name || 'Unknown Mood'}
//   //     //   </Text>
//   //     // </TouchableOpacity>
//   //      <TouchableOpacity style={styles.moodItem}>
//   //     <Image 
//   //       source={{ 
//   //         uri: getImageUrl(item.image || item.thumbnail || item.artwork)
//   //       }} 
//   //       style={styles.moodImage}
//   //       resizeMode="cover"
//   //       defaultSource={{ uri: 'https://images.unsplash.com/photo-1489599809505-fb44932d0e71?w=300&h=150&fit=crop' }}
//   //     />
//   //     <View style={styles.moodOverlay} />
//   //     <Text style={styles.moodTitle}>
//   //       {item.title || item.name || 'Unknown Mood'}
//   //     </Text>
//   //   </TouchableOpacity>
//   //   );
//   // };


//   const renderMoodItem = ({ item }) => {
//   if (!item || typeof item !== 'object') {
//     return null;
//   }
  
//   return (
//     <TouchableOpacity 
//       style={styles.moodItem}
//       onPress={() => navigation.navigate('MoodSongsScreen', {
//         moodId: item.id,
//         moodName: item.title || item.name,
//         moodImage: item.image || item.thumbnail
//       })}
//     >
//       <Image 
//         source={{ 
//           uri: getImageUrl(item.image || item.thumbnail || item.artwork)
//         }} 
//         style={styles.moodImage}
//         resizeMode="cover"
//         defaultSource={{ uri: 'https://images.unsplash.com/photo-1489599809505-fb44932d0e71?w=300&h=150&fit=crop' }}
//       />
//       <View style={styles.moodOverlay} />
//       <Text style={styles.moodTitle}>
//         {item.title || item.name || 'Unknown Mood'}
//       </Text>
//     </TouchableOpacity>
//   );
// };
//   const renderNewReleaseItem = ({ item }) => {
//     if (!item || typeof item !== 'object') {
//       return null;
//     }
    
//     return (
//       // <TouchableOpacity 
//       //   style={styles.newReleaseItem}
//       //   onPress={() => handleSongPlay(item)}
//       // >
//       //   <Image 
//       //     source={{ uri: item.image || item.thumbnail || 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=300&h=300&fit=crop' }} 
//       //     style={styles.newReleaseImage}
//       //     resizeMode="cover"
//       //   />
//       //   <View style={styles.newReleaseText}>
//       //     <Text style={styles.newReleaseTitle} numberOfLines={1}>
//       //       {item.title || item.name || 'Unknown Title'}
//       //     </Text>
//       //     <Text style={styles.newReleaseArtist} numberOfLines={1}>
//       //       {item.artist || 'Various Artists'}
//       //     </Text>
//       //   </View>
//       // </TouchableOpacity>

//         <TouchableOpacity 
//       style={styles.newReleaseItem}
//       onPress={() => handleSongPlay(item)}
//     >
//       <Image 
//         source={{ 
//           uri: getImageUrl(item.image || item.thumbnail || item.artwork)
//         }} 
//         style={styles.newReleaseImage}
//         resizeMode="cover"
//         defaultSource={{ uri: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=300&h=300&fit=crop' }}
//       />
//       <View style={styles.newReleaseText}>
//         <Text style={styles.newReleaseTitle} numberOfLines={1}>
//           {item.title || item.name || 'Unknown Title'}
//         </Text>
//         <Text style={styles.newReleaseArtist} numberOfLines={1}>
//           {item.artist || 'Various Artists'}
//         </Text>
//       </View>
//     </TouchableOpacity>
//     );
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="light-content" backgroundColor="#000" />

//       {loading ? (
//         <View style={styles.loadingContainer}>
//           <ActivityIndicator size="large" color="#FF3B3B" />
//           <Text style={styles.loadingText}>Loading...</Text>
//         </View>
//       ) : (
//         <>
//           {/* Header - Same as before with dynamic user data */}
//           <View style={styles.header}>
//             <View style={styles.headerLeft}>
//               <TouchableOpacity 
//                 style={styles.profileSection}
//                 onPress={() => navigation.navigate('ProfileSettingsScreen')}
//               >
//                 <Image 
//                   source={{ 
//                     uri: userData?.profileImage || 
//                          (userData?.profilePic ? 
//                           `http://103.119.171.213:3001${userData.profilePic}` : 
//                           'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face')
//                   }}
//                   style={styles.profileImage}
//                 />
//                 <View style={styles.welcomeText}>
//                   <Text style={styles.welcomeBack}>Welcome back !</Text>
//                   <Text style={styles.userName}>
//                     {userData?.name || 'User'}
//                   </Text>
//                 </View>
//               </TouchableOpacity>
//             </View>
//             <View style={styles.headerRight}>
//               <TouchableOpacity style={styles.iconButton}>
//                 <Feather name="bell" size={wp(5.64)} color="#fff" />
//               </TouchableOpacity>
//             </View>
//           </View>

//           <ScrollView 
//             style={styles.scrollView}
//             showsVerticalScrollIndicator={false}
//             refreshControl={
//               <RefreshControl
//                 refreshing={refreshing}
//                 onRefresh={onRefresh}
//                 colors={['#FF3B3B']}
//                 tintColor="#FF3B3B"
//               />
//             }
//           >
//             {/* Recently Played Section - Using API Data */}
//             <View style={styles.section}>
//               <Text style={styles.sectionTitle}>Recently Played</Text>
//               <FlatList
//                 data={homeData.recentlyPlayed}
//                 renderItem={renderRecentlyPlayedItem}
//                 keyExtractor={item => item?.id || item?._id || Math.random().toString()}
//                 horizontal
//                 showsHorizontalScrollIndicator={false}
//                 contentContainerStyle={styles.recentList}
//               />
//             </View>

//             {/* Continue Listening Section - Using API Data */}
//             <View style={styles.section}>
//               <Text style={styles.sectionTitle}>Continue Listening</Text>
//               <FlatList
//                 data={homeData.continueListening}
//                 renderItem={renderContinueItem}
//                 keyExtractor={item => item?.id || item?._id || Math.random().toString()}
//                 horizontal
//                 showsHorizontalScrollIndicator={false}
//                 contentContainerStyle={styles.continueList}
//               />
//             </View>

//             {/* Pick Your Mood Section - Using API Data */}
//             <View style={styles.section}>
//               <Text style={styles.sectionTitle}>Pick Your Mood</Text>
//               <View style={styles.moodGrid}>
//                 {homeData.pickYourMood.map((item, index) => (
//                   <React.Fragment key={item?.id || item?._id || index}>
//                     {renderMoodItem({ item })}
//                   </React.Fragment>
//                 ))}
//               </View>
//             </View>

//             {/* New Releases Section - Using API Data */}
//             <View style={styles.section}>
//               <Text style={styles.sectionTitle}>New Releases</Text>
//               <View style={styles.newReleasesGrid}>
//                 {homeData.newReleases.map((item, index) => (
//                   <React.Fragment key={item?.id || item?._id || index}>
//                     {renderNewReleaseItem({ item })}
//                   </React.Fragment>
//                 ))}
//               </View>
//             </View>

//             {/* Bottom Padding */}
//             <View style={styles.bottomPadding} />
//           </ScrollView>

//           {/* ✅ UPDATED MINI PLAYER - Global Audio State Show Karega */}
//           {currentSong && (
//             <TouchableOpacity 
//               style={styles.miniPlayer}
//               onPress={() => navigation.navigate('NowPlayingScreen', { 
//                 songId: currentSong.id 
//               })}
//             >
//               <View style={styles.miniPlayerLeft}>
//                 <Image 
//                   source={{ uri: currentSong.artwork }} 
//                   style={styles.miniPlayerImage}
//                 />
//                 <View style={styles.miniPlayerText}>
//                   <Text style={styles.miniPlayerTitle} numberOfLines={1}>
//                     {currentSong.title}
//                   </Text>
//                   <Text style={styles.miniPlayerArtist} numberOfLines={1}>
//                     {currentSong.artist}
//                   </Text>
//                 </View>
//               </View>
//               <View style={styles.miniPlayerRight}>
//                 <TouchableOpacity style={styles.miniPlayerButton}>
//                   <Icon name="favorite-border" size={wp(5.64)} color="#b3b3b3" />
//                 </TouchableOpacity>
//                 <TouchableOpacity 
//                   style={styles.miniPlayerButton}
//                   onPress={(e) => {
//                     e.stopPropagation(); // Navigation ko prevent karega
//                     togglePlayPause();
//                   }}
//                 >
//                   <Icon 
//                     name={isPlaying ? "pause" : "play-arrow"} 
//                     size={wp(7.05)} 
//                     color="#fff" 
//                   />
//                 </TouchableOpacity>
//               </View>
//             </TouchableOpacity>
//           )}
//         </>
//       )}
//     </SafeAreaView>
//   );
// };

// // Styles remain EXACTLY THE SAME as your original code
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
//     marginTop: 10,
//     fontSize: 16,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: wp(3.76),
//     paddingVertical: hp(1.5),
//   },
//   headerLeft: {
//     flex: 1,
//   },
//   profileSection: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   profileImage: {
//     width: wp(11.75),
//     height: wp(11.75),
//     borderRadius: wp(5.875),
//     backgroundColor: '#333',
//     marginRight: wp(2.82),
//   },
//   welcomeText: {
//     flex: 1,
//   },
//   welcomeBack: {
//     fontSize: wp(3.76),
//     color: '#b3b3b3',
//     marginBottom: hp(0.25),
//   },
//   userName: {
//     fontSize: wp(4.7),
//     fontWeight: 'bold',
//     color: '#fff',
//   },
//   headerRight: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   iconButton: {
//     marginLeft: 0,
//   },
//   scrollView: {
//     flex: 1,
//   },
//   section: {
//     marginBottom: hp(3),
//   },
//   sectionTitle: {
//     fontSize: wp(5.17),
//     fontWeight: 'bold',
//     color: '#fff',
//     marginBottom: hp(2),
//     paddingHorizontal: wp(3.76),
//   },
//   recentList: {
//     paddingHorizontal: wp(3.76),
//   },
//   recentItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#181818',
//     borderRadius: wp(2),
//     marginRight: wp(2.82),
//     padding: wp(2),
//     width: wp(42),
//   },
//   recentImage: {
//     width: wp(11.28),
//     height: wp(11.28),
//     borderRadius: wp(1),
//     marginRight: wp(2.82),
//   },
//   recentText: {
//     flex: 1,
//   },
//   recentTitle: {
//     fontSize: wp(3.29),
//     fontWeight: '600',
//     color: '#fff',
//     marginBottom: hp(0.5),
//   },
//   recentArtist: {
//     fontSize: wp(2.82),
//     color: '#b3b3b3',
//   },
//   continueList: {
//     paddingHorizontal: wp(3.76),
//   },
//   continueItem: {
//     width: wp(37.6),
//     height: wp(37.6),
//     borderRadius: wp(2),
//     marginRight: wp(2.82),
//     overflow: 'hidden',
//     position: 'relative',
//   },
//   continueImage: {
//     width: '100%',
//     height: '100%',
//     position: 'absolute',
//   },
//   continueOverlay: {
//     ...StyleSheet.absoluteFillObject,
//     backgroundColor: 'rgba(0,0,0,0.3)',
//   },
//   continueContent: {
//     flex: 1,
//     padding: wp(2.82),
//     justifyContent: 'space-between',
//   },
//   continueTitle: {
//     fontSize: wp(3.76),
//     fontWeight: 'bold',
//     color: '#fff',
//     textShadowColor: 'rgba(0,0,0,0.8)',
//     textShadowOffset: { width: 1, height: 1 },
//     textShadowRadius: 4,
//   },
//   continueType: {
//     fontSize: wp(2.82),
//     color: '#b3b3b3',
//     textShadowColor: 'rgba(0,0,0,0.8)',
//     textShadowOffset: { width: 1, height: 1 },
//     textShadowRadius: 4,
//   },
//   playButton: {
//     width: wp(9.4),
//     height: wp(9.4),
//     backgroundColor: '#FF3B3B',
//     borderRadius: wp(4.7),
//     justifyContent: 'center',
//     alignItems: 'center',
//     alignSelf: 'flex-end',
//   },
//   moodGrid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     paddingHorizontal: wp(3.76),
//     justifyContent: 'space-between',
//   },
//   moodItem: {
//     width: (wp(100) - wp(11.28)) / 2,
//     height: hp(12),
//     borderRadius: wp(2),
//     marginBottom: hp(1.5),
//     overflow: 'hidden',
//     position: 'relative',
//   },
//   moodImage: {
//     width: '100%',
//     height: '100%',
//     position: 'absolute',
//   },
//   moodOverlay: {
//     ...StyleSheet.absoluteFillObject,
//     backgroundColor: 'rgba(0,0,0,0.4)',
//   },
//   moodTitle: {
//     fontSize: wp(4.23),
//     fontWeight: 'bold',
//     color: '#fff',
//     position: 'absolute',
//     top: '50%',
//     left: 0,
//     right: 0,
//     textAlign: 'center',
//     transform: [{ translateY: -hp(1) }],
//     textShadowColor: 'rgba(0,0,0,0.8)',
//     textShadowOffset: { width: 1, height: 1 },
//     textShadowRadius: 4,
//   },
//   newReleasesGrid: {
//     paddingHorizontal: wp(3.76),
//   },
//   newReleaseItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: hp(2),
//   },
//   newReleaseImage: {
//     width: wp(14.1),
//     height: wp(14.1),
//     borderRadius: wp(1),
//     marginRight: wp(2.82),
//   },
//   newReleaseText: {
//     flex: 1,
//   },
//   newReleaseTitle: {
//     fontSize: wp(3.76),
//     fontWeight: '600',
//     color: '#fff',
//     marginBottom: hp(0.5),
//   },
//   newReleaseArtist: {
//     fontSize: wp(3.29),
//     color: '#b3b3b3',
//   },
//   bottomPadding: {
//     height: hp(10),
//   },
//   miniPlayer: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     backgroundColor: '#181818',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingHorizontal: wp(3.76),
//     paddingVertical: hp(1),
//     borderTopWidth: 1,
//     borderTopColor: '#282828',
//   },
//   miniPlayerLeft: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     flex: 1,
//   },
//   miniPlayerImage: {
//     width: wp(9.4),
//     height: wp(9.4),
//     borderRadius: wp(0.5),
//     marginRight: wp(2.82),
//   },
//   miniPlayerText: {
//     flex: 1,
//   },
//   miniPlayerTitle: {
//     fontSize: wp(3.29),
//     fontWeight: '600',
//     color: '#fff',
//     marginBottom: hp(0.25),
//   },
//   miniPlayerArtist: {
//     fontSize: wp(2.82),
//     color: '#b3b3b3',
//   },
//   miniPlayerRight: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   miniPlayerButton: {
//     marginLeft: wp(3.76),
//   },
  
//   // ✅ ADD THIS NEW STYLE
//   defaultMusicIcon: {
//     backgroundColor: '#333',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: '#555',
//   },
// });

// export default HomeScreen;

import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Image,
  ActivityIndicator,
  FlatList,
  Dimensions,
  RefreshControl
} from 'react-native';
import React, { useState, useEffect } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useIsFocused } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import { wp, hp } from "../assets/Global.Css";
import { getDataFromAsyncStorage } from '../Services/CommonFunction';
import { mobile_siteConfig } from '../Services/mobile-siteConfig';
import { getDataWithToken } from '../Services/mobile-api';
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

const HomeScreen = ({navigation}) => {
  const isFocused = useIsFocused();
  const { currentSong, isPlaying, togglePlayPause, playSong } = useAudio();
  
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchUserProfile = async () => {
    try {
      const response = await getDataWithToken('user/profile');
      if (response?.success && response?.user) {
        console.log('✅ Profile fetched:', response.user);
        setUserData(response.user);
        await AsyncStorage.setItem(
          mobile_siteConfig.USER_Data,
          JSON.stringify(response.user)
        );
      } else {
        console.warn('⚠️ Failed to fetch user profile:', response);
      }
    } catch (error) {
      console.error('❌ Error fetching profile:', error);
    }
  };

  useEffect(() => {
    if (isFocused) {
      fetchUserProfile();
    }
  }, [isFocused]);
  
  // Home API Data States
  const [homeData, setHomeData] = useState({
    recentlyPlayed: [],
    continueListening: [],
    pickYourMood: [],
    newReleases: []
  });

  useEffect(() => {
    loadInitialData();
    fetchUserProfile(); 
  }, []);

  const loadInitialData = async () => {
    try {
      setLoading(true);
      
      const storedUserData = await getDataFromAsyncStorage(mobile_siteConfig.USER_Data);
      if (storedUserData) {
        setUserData(storedUserData);
      }
      
      await fetchHomeData();
      
    } catch (error) {
      console.error('Error loading initial data:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchHomeData = async () => {
    try {
      console.log('Fetching home data...');
      const response = await getDataWithToken('user/home');
      console.log('Home API Response:', response);
      
      if (response && response.success && response.data) {
        setHomeData({
          recentlyPlayed: Array.isArray(response.data.recentlyPlayed?.songs) 
            ? response.data.recentlyPlayed.songs 
            : getDefaultRecentlyPlayed(),
          continueListening: Array.isArray(response.data.continueListening?.songs) 
            ? response.data.continueListening.songs 
            : getDefaultContinueListening(),
          pickYourMood: Array.isArray(response.data.pickYourMood?.moods) 
            ? response.data.pickYourMood.moods 
            : getDefaultMoods(),
          newReleases: Array.isArray(response.data.newReleases?.songs) 
            ? response.data.newReleases.songs 
            : getDefaultNewReleases()
        });
      } else {
        setHomeData({
          recentlyPlayed: getDefaultRecentlyPlayed(),
          continueListening: getDefaultContinueListening(),
          pickYourMood: getDefaultMoods(),
          newReleases: getDefaultNewReleases()
        });
      }
    } catch (error) {
      console.error('Error fetching home data:', error);
      setHomeData({
        recentlyPlayed: getDefaultRecentlyPlayed(),
        continueListening: getDefaultContinueListening(),
        pickYourMood: getDefaultMoods(),
        newReleases: getDefaultNewReleases()
      });
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await loadInitialData();
    await fetchHomeData();
    setRefreshing(false);
  };

  // ✅ SONG PLAY FUNCTION - Start from beginning
  const handleSongPlay = async (item) => {
    console.log('🎵 Song clicked from list - starting from beginning');
    
    try {
      const songInfo = await getDataWithToken(`user/song/${item.id || item._id}/info`);
      console.log('🎵 Song Info:', songInfo);
      
      if (songInfo && songInfo.success) {
        const songData = {
          id: item.id || item._id,
          title: item.title || item.name || 'Unknown Title',
          artist: item.artist || 'Unknown Artist',
          audioUrl: songInfo.song?.audioFile 
            ? `http://103.119.171.213:3001${songInfo.song.audioFile}`
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

  // ✅ UPDATED: Pick Your Mood ko pairs mein organize karna
  const organizeMoodsIntoPairs = (moods) => {
    if (!moods || !Array.isArray(moods)) return [];
    
    const pairs = [];
    for (let i = 0; i < moods.length; i += 2) {
      const pair = [moods[i], moods[i + 1]];
      pairs.push(pair);
    }
    
    return pairs;
  };

  // Default data functions
  const getDefaultRecentlyPlayed = () => [
    { 
      id: '1', 
      title: 'Inside Out', 
      artist: 'The Chainsmokers',
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop'
    },
  ];

  const getDefaultContinueListening = () => [
    { 
      id: '1', 
      title: 'Coffee & Jazz', 
      type: 'Playlist', 
      image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=300&h=300&fit=crop'
    },
  ];

  const getDefaultMoods = () => [
    { id: '1', title: 'Happy', image: 'https://images.unsplash.com/photo-1489599809505-fb44932d0e71?w=300&h=150&fit=crop' },
    { id: '2', title: 'Love', image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=300&h=150&fit=crop' },
    { id: '3', title: 'Motivation', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=300&h=150&fit=crop' },
    { id: '4', title: 'Sad', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=150&fit=crop' },
    { id: '5', title: 'Party', image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=300&h=150&fit=crop' },
    { id: '6', title: 'Workout', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=150&fit=crop' },
    { id: '7', title: 'Chill', image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=150&fit=crop' },
    { id: '8', title: 'Focus', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=150&fit=crop' },
    { id: '9', title: 'Romantic', image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=300&h=150&fit=crop' },
    { id: '10', title: 'Energy', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=300&h=150&fit=crop' },
    { id: '11', title: 'Relax', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=150&fit=crop' },
  ];

  const getDefaultNewReleases = () => [
    { 
      id: '1', 
      title: 'Inside Out', 
      artist: 'The Chainsmokers, Charles',
      image: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=200&h=200&fit=crop'
    },
  ];

  // ✅ UPDATED RENDER FUNCTIONS
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

  const renderContinueItem = ({ item }) => {
    if (!item || typeof item !== 'object') return null;
    
    return (
      <TouchableOpacity 
        style={styles.continueItem}
        onPress={() => handleSongPlay(item)}
      >
        <Image 
          source={{ 
            uri: getImageUrl(item.image || item.thumbnail || item.artwork)
          }} 
          style={styles.continueImage}
          resizeMode="cover"
          defaultSource={{ uri: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=300&h=300&fit=crop' }}
        />
        
        <View style={styles.continueOverlay} />
        <View style={styles.continueContent}>
          <Text style={styles.continueTitle} numberOfLines={2}>
            {item.title || item.name || 'Unknown Title'}
          </Text>
          <Text style={styles.continueType}>
            {item.type || ''}
          </Text>
          <View style={styles.playButton}>
            <Icon name="play-arrow" size={wp(5.64)} color="#000" />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  // ✅ UPDATED: Mood pair render function
  const renderMoodPair = ({ item }) => {
    if (!item || !Array.isArray(item)) return null;
    
    const [mood1, mood2] = item;
    
    return (
      <View style={styles.moodPair}>
        {/* First Mood */}
        {mood1 && (
          <TouchableOpacity 
            style={styles.moodItem}
            onPress={() => navigation.navigate('MoodSongsScreen', {
              moodId: mood1.id,
              moodName: mood1.title || mood1.name,
              moodImage: mood1.image || mood1.thumbnail
            })}
          >
            <View style={styles.moodImageContainer}>
              <Image 
                source={{ 
                  uri: getImageUrl(mood1.image || mood1.thumbnail || mood1.artwork)
                }} 
                style={styles.moodImage}
                resizeMode="cover"
                defaultSource={{ uri: 'https://images.unsplash.com/photo-1489599809505-fb44932d0e71?w=300&h=150&fit=crop' }}
              />
              <View style={styles.moodOverlay} />
              <Text style={styles.moodTitle}>
                {mood1.title || mood1.name || 'Unknown Mood'}
              </Text>
            </View>
          </TouchableOpacity>
        )}
        
        {/* Second Mood */}
        {mood2 && (
          <TouchableOpacity 
            style={styles.moodItem}
            onPress={() => navigation.navigate('MoodSongsScreen', {
              moodId: mood2.id,
              moodName: mood2.title || mood2.name,
              moodImage: mood2.image || mood2.thumbnail
            })}
          >
            <View style={styles.moodImageContainer}>
              <Image 
                source={{ 
                  uri: getImageUrl(mood2.image || mood2.thumbnail || mood2.artwork)
                }} 
                style={styles.moodImage}
                resizeMode="cover"
                defaultSource={{ uri: 'https://images.unsplash.com/photo-1489599809505-fb44932d0e71?w=300&h=150&fit=crop' }}
              />
              <View style={styles.moodOverlay} />
              <Text style={styles.moodTitle}>
                {mood2.title || mood2.name || 'Unknown Mood'}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  const renderNewReleaseItem = ({ item }) => {
    if (!item || typeof item !== 'object') return null;
    
    return (
      <TouchableOpacity 
        style={styles.newReleaseItem}
        onPress={() => handleSongPlay(item)}
      >
        <Image 
          source={{ 
            uri: getImageUrl(item.image || item.thumbnail || item.artwork)
          }} 
          style={styles.newReleaseImage}
          resizeMode="cover"
          defaultSource={{ uri: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=300&h=300&fit=crop' }}
        />
        <View style={styles.newReleaseText}>
          <Text style={styles.newReleaseTitle} numberOfLines={1}>
            {item.title || item.name || 'Unknown Title'}
          </Text>
          <Text style={styles.newReleaseArtist} numberOfLines={1}>
            {item.artist || 'Various Artists'}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  // ✅ Moods ko pairs mein organize karo
  const moodPairs = organizeMoodsIntoPairs(homeData.pickYourMood);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />

      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#FF3B3B" />
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      ) : (
        <>
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.headerLeft}>
              <TouchableOpacity 
                style={styles.profileSection}
                onPress={() => navigation.navigate('ProfileSettingsScreen')}
              >
                <Image 
                  source={{ 
                    uri: userData?.profileImage || 
                         (userData?.profilePic ? 
                          `http://103.119.171.213:3001${userData.profilePic}` : 
                          'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face')
                  }}
                  style={styles.profileImage}
                />
                <View style={styles.welcomeText}>
                  <Text style={styles.welcomeBack}>Welcome back !</Text>
                  <Text style={styles.userName}>
                    {userData?.name || 'User'}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.headerRight}>
              <TouchableOpacity style={styles.iconButton}>
                {/* <Feather name="bell" size={wp(5.64)} color="#fff" /> */}
              </TouchableOpacity>
            </View>
          </View>

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
            {/* Recently Played Section */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Recently Played</Text>
              <FlatList
                data={homeData.recentlyPlayed}
                renderItem={renderRecentlyPlayedItem}
                keyExtractor={item => item?.id || item?._id || Math.random().toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.recentList}
              />
            </View>

            {/* Continue Listening Section */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Continue Listening</Text>
              <FlatList
                data={homeData.continueListening}
                renderItem={renderContinueItem}
                keyExtractor={item => item?.id || item?._id || Math.random().toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.continueList}
              />
            </View>

            {/* ✅ UPDATED: Pick Your Mood Section - 2 Rows Ek Saath Horizontal Scroll */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Pick Your Mood</Text>
              
              <FlatList
                data={moodPairs}
                renderItem={renderMoodPair}
                keyExtractor={(item, index) => `mood-pair-${index}`}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.moodList}
              />
            </View>

            {/* New Releases Section */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>New Releases</Text>
              <View style={styles.newReleasesGrid}>
                {homeData.newReleases.map((item, index) => (
                  <React.Fragment key={item?.id || item?._id || index}>
                    {renderNewReleaseItem({ item })}
                  </React.Fragment>
                ))}
              </View>
            </View>

            {/* Bottom Padding */}
            <View style={styles.bottomPadding} />
          </ScrollView>

          {/* Mini Player */}
          {currentSong && (
            <TouchableOpacity 
              style={styles.miniPlayer}
              onPress={() => navigation.navigate('NowPlayingScreen', { 
                songId: currentSong.id,
                resetToBeginning: false
              })}
            >
              <View style={styles.miniPlayerLeft}>
                <Image 
                  source={{ 
                    uri: currentSong.artwork || 
                         getImageUrl(currentSong.image || currentSong.thumbnail) ||
                         'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=100&h=100&fit=crop'
                  }} 
                  style={styles.miniPlayerImage}
                  defaultSource={{ uri: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=100&h=100&fit=crop' }}
                />
                <View style={styles.miniPlayerText}>
                  <Text style={styles.miniPlayerTitle} numberOfLines={1}>
                    {currentSong.title || 'Unknown Title'}
                  </Text>
                  <Text style={styles.miniPlayerArtist} numberOfLines={1}>
                    {currentSong.artist || 'Unknown Artist'}
                  </Text>
                </View>
              </View>
              <View style={styles.miniPlayerRight}>
                <TouchableOpacity style={styles.miniPlayerButton}>
                  <Icon name="favorite-border" size={wp(5.64)} color="#b3b3b3" />
                </TouchableOpacity>
                <TouchableOpacity 
                  style={styles.miniPlayerButton}
                  onPress={(e) => {
                    e.stopPropagation();
                    togglePlayPause();
                  }}
                >
                  <Icon 
                    name={isPlaying ? "pause" : "play-arrow"} 
                    size={wp(7.05)} 
                    color="#fff" 
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )}
        </>
      )}
    </SafeAreaView>
  );
};

// ✅ UPDATED STYLES - 2 ROWS EK SAATH SCROLL
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
    marginTop: 10,
    fontSize: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(3.76),
    paddingVertical: hp(1.5),
  },
  headerLeft: {
    flex: 1,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: wp(11.75),
    height: wp(11.75),
    borderRadius: wp(5.875),
    backgroundColor: '#333',
    marginRight: wp(2.82),
  },
  welcomeText: {
    flex: 1,
  },
  welcomeBack: {
    fontSize: wp(3.76),
    color: '#b3b3b3',
    marginBottom: hp(0.25),
  },
  userName: {
    fontSize: wp(4.7),
    fontWeight: 'bold',
    color: '#fff',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginLeft: 0,
  },
  scrollView: {
    flex: 1,
  },
  section: {
    marginBottom: hp(3),
  },
  sectionTitle: {
    fontSize: wp(5.17),
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: hp(2),
    paddingHorizontal: wp(3.76),
  },
  recentList: {
    paddingHorizontal: wp(3.76),
  },
  recentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#181818',
    borderRadius: wp(2),
    marginRight: wp(2.82),
    padding: wp(2),
    width: wp(42),
  },
  recentImage: {
    width: wp(11.28),
    height: wp(11.28),
    borderRadius: wp(1),
    marginRight: wp(2.82),
  },
  recentText: {
    flex: 1,
  },
  recentTitle: {
    fontSize: wp(3.29),
    fontWeight: '600',
    color: '#fff',
    marginBottom: hp(0.5),
  },
  recentArtist: {
    fontSize: wp(2.82),
    color: '#b3b3b3',
  },
  continueList: {
    paddingHorizontal: wp(3.76),
  },
  continueItem: {
    width: wp(37.6),
    height: wp(37.6),
    borderRadius: wp(2),
    marginRight: wp(2.82),
    overflow: 'hidden',
    position: 'relative',
  },
  continueImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  continueOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  continueContent: {
    flex: 1,
    padding: wp(2.82),
    justifyContent: 'space-between',
  },
  continueTitle: {
    fontSize: wp(3.76),
    fontWeight: 'bold',
    color: '#fff',
    textShadowColor: 'rgba(0,0,0,0.8)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  continueType: {
    fontSize: wp(2.82),
    color: '#b3b3b3',
    textShadowColor: 'rgba(0,0,0,0.8)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  playButton: {
    width: wp(9.4),
    height: wp(9.4),
    backgroundColor: '#FF3B3B',
    borderRadius: wp(4.7),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  // ✅ UPDATED: Mood Section Styles for 2 ROWS EK SAATH SCROLL
  moodList: {
    paddingHorizontal: wp(3.76),
  },
  moodPair: {
    marginRight: wp(2.82),
  },
  moodItem: {
    width: wp(45),
    height: hp(15),
    borderRadius: wp(2),
    marginBottom: hp(1),
    overflow: 'hidden',
  },
  moodImageContainer: {
    width: '100%',
    height: '100%',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  moodImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  moodOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  moodTitle: {
    fontSize: wp(4),
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    textShadowColor: 'rgba(0,0,0,0.8)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
    zIndex: 1,
  },
  newReleasesGrid: {
    paddingHorizontal: wp(3.76),
  },
  newReleaseItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(2),
  },
  newReleaseImage: {
    width: wp(14.1),
    height: wp(14.1),
    borderRadius: wp(1),
    marginRight: wp(2.82),
  },
  newReleaseText: {
    flex: 1,
  },
  newReleaseTitle: {
    fontSize: wp(3.76),
    fontWeight: '600',
    color: '#fff',
    marginBottom: hp(0.5),
  },
  newReleaseArtist: {
    fontSize: wp(3.29),
    color: '#b3b3b3',
  },
  bottomPadding: {
    height: hp(10),
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
    paddingHorizontal: wp(3.76),
    paddingVertical: hp(1),
    borderTopWidth: 1,
    borderTopColor: '#282828',
  },
  miniPlayerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  miniPlayerImage: {
    width: wp(9.4),
    height: wp(9.4),
    borderRadius: wp(0.5),
    marginRight: wp(2.82),
  },
  miniPlayerText: {
    flex: 1,
  },
  miniPlayerTitle: {
    fontSize: wp(3.29),
    fontWeight: '600',
    color: '#fff',
    marginBottom: hp(0.25),
  },
  miniPlayerArtist: {
    fontSize: wp(2.82),
    color: '#b3b3b3',
  },
  miniPlayerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  miniPlayerButton: {
    marginLeft: wp(3.76),
  },
});

export default HomeScreen;