// // import React from 'react';
// // import {
// //   View,
// //   Text,
// //   TouchableOpacity,
// //   StyleSheet,
// //   SafeAreaView,
// //   StatusBar,
// //   ScrollView,
// // } from 'react-native';
// // import Icon from 'react-native-vector-icons/Ionicons';

// // const DownloadsScreen = ({ navigation }) => {
// //   const downloadedSongs = [
// //     { id: 1, title: 'Trade Out', artist: 'The Chainsmokers, Charles' },
// //     { id: 2, title: 'Young', artist: 'The Chainsmokers' },
// //     { id: 3, title: 'Baked Music', artist: 'The Chainsmokers - Sick' },
// //     { id: 4, title: 'Kite Kee Slowly', artist: 'The Chainsmokers - World' },
// //     { id: 5, title: 'Setting Files', artist: 'The Chainsmokers, XYLO -' },
// //     { id: 6, title: 'Sensitively', artist: 'The Chainsmokers, Drew' },
// //     { id: 7, title: 'Thunder', artist: 'Trappie Dragons - Summer' },
// //     { id: 8, title: 'High On Life', artist: 'Martin Gunn, Seem - High On' },
// //     { id: 9, title: 'FEBROS', artist: 'Machinesky, Anne-Marie' },
// //     { id: 10, title: 'Carry On', artist: 'Bill-Oan - 1st Flooring' },
// //   ];

// //   return (
// //     <SafeAreaView style={styles.container}>
// //       <StatusBar barStyle="light-content" backgroundColor="#000" />
      
// //       <View style={styles.header}>
// //         <TouchableOpacity onPress={() => navigation.goBack()}>
// //           <Icon name="chevron-back" size={24} color="#fff" />
// //         </TouchableOpacity>
// //         <Text style={styles.headerTitle}>Downloads</Text>
// //         <TouchableOpacity>
// //           <Icon name="search" size={24} color="#fff" />
// //         </TouchableOpacity>
// //       </View>

// //       <ScrollView style={styles.scrollView}>
// //         <Text style={styles.subtitle}>210 songs downloaded</Text>
        
// //         <View style={styles.searchContainer}>
// //           <Icon name="search" size={20} color="#b3b3b3" />
// //           <Text style={styles.searchText}>Search</Text>
// //         </View>

// //         <View style={styles.songsList}>
// //           {downloadedSongs.map((song) => (
// //             <TouchableOpacity key={song.id} style={styles.songItem}>
// //               <View style={styles.songInfo}>
// //                 <Text style={styles.songTitle}>{song.title}</Text>
// //                 <Text style={styles.songArtist}>{song.artist}</Text>
// //               </View>
// //               <TouchableOpacity>
// //                 <Icon name="ellipsis-vertical" size={16} color="#b3b3b3" />
// //               </TouchableOpacity>
// //             </TouchableOpacity>
// //           ))}
// //         </View>
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
// //   scrollView: {
// //     flex: 1,
// //     paddingHorizontal: 20,
// //   },
// //   subtitle: {
// //     fontSize: 16,
// //     color: '#b3b3b3',
// //     marginTop: 20,
// //     marginBottom: 15,
// //   },
// //   searchContainer: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     backgroundColor: 'rgba(255,255,255,0.1)',
// //     paddingHorizontal: 15,
// //     paddingVertical: 12,
// //     borderRadius: 8,
// //     marginBottom: 20,
// //   },
// //   searchText: {
// //     fontSize: 16,
// //     color: '#b3b3b3',
// //     marginLeft: 10,
// //   },
// //   songsList: {
// //     backgroundColor: 'rgba(255,255,255,0.02)',
// //     borderRadius: 8,
// //     overflow: 'hidden',
// //   },
// //   songItem: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     justifyContent: 'space-between',
// //     paddingVertical: 12,
// //     paddingHorizontal: 15,
// //     borderBottomWidth: 1,
// //     borderBottomColor: '#282828',
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
// // });

// // export default DownloadsScreen;

// import React from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   SafeAreaView,
//   StatusBar,
//   ScrollView,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// const DownloadsScreen = ({ navigation }) => {
//   const downloadedSongs = [
//     { id: 1, title: 'Inside Out', artist: 'The Chainsmokers, Charles', hasLike: false, hasDownload: true },
//     { id: 2, title: 'Young', artist: 'The Chainsmokers', hasLike: true, hasDownload: true },
//     { id: 3, title: 'Beach House', artist: 'The Chainsmokers - Sick', hasLike: false, hasDownload: true },
//     { id: 4, title: 'Kills You Slowly', artist: 'The Chainsmokers - World', hasLike: true, hasDownload: true },
//     { id: 5, title: 'Setting Fires', artist: 'The Chainsmokers, XYLO -', hasLike: false, hasDownload: true },
//     { id: 6, title: 'Somebody', artist: 'The Chainsmokers, Drew', hasLike: true, hasDownload: true },
//     { id: 7, title: 'Thunder', artist: 'Imagine Dragons - Summer', hasLike: false, hasDownload: true },
//     { id: 8, title: 'High On Life', artist: 'Martin Garrix, Bonn - High On', hasLike: true, hasDownload: true },
//     { id: 9, title: 'FRENDS', artist: 'Meatments, Anne-Marie', hasLike: false, hasDownload: true },
//     { id: 10, title: 'Carry On', artist: 'Hime On - Dove the Placebo', hasLike: true, hasDownload: true },
//   ];

//   const toggleLike = (songId) => {
//     console.log('Toggle like for song:', songId);
//   };

//   const toggleDownload = (songId) => {
//     console.log('Toggle download for song:', songId);
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="light-content" backgroundColor="#000" />
      
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Icon name="chevron-back" size={24} color="#fff" />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Downloads</Text>
//         <TouchableOpacity>
//           {/* <Icon name="search" size={24} color="#fff" /> */}
//         </TouchableOpacity>
//       </View>

//       <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
//         <Text style={styles.subtitle}>210 songs downloaded</Text>
        
//         <View style={styles.searchContainer}>
//           <Icon name="search" size={20} color="#000" />
//           <Text style={styles.searchText}>Search</Text>
//         </View>

//         <View style={styles.songsList}>
//           {downloadedSongs.map((song) => (
//             <TouchableOpacity key={song.id} style={styles.songItem}>
//               <View style={styles.songIconContainer}>
//                 <MaterialIcons name="music-note" size={24} color="#b3b3b3" />
//               </View>
              
//               <View style={styles.songInfo}>
//                 <Text style={styles.songTitle}>{song.title}</Text>
//                 <Text style={styles.songArtist}>{song.artist}</Text>
//               </View>
              
//               <View style={styles.actionButtons}>
//                 {song.hasLike ? (
//                   // Like Button
//                   <TouchableOpacity 
//                     style={styles.actionButton}
//                     onPress={() => toggleLike(song.id)}
//                   >
//                     <Icon name="heart" size={20} color="#777" />
//                   </TouchableOpacity>
//                 ) : (
//                   // Download Button (always filled in Downloads screen)
//                   <TouchableOpacity 
//                     style={styles.actionButton}
//                     onPress={() => toggleDownload(song.id)}
//                   >
//                     <Icon name="download" size={20} color="#1DB954" />
//                   </TouchableOpacity>
//                 )}
                
//                 {/* More Button */}
//                 <TouchableOpacity style={styles.actionButton}>
//                   <Icon name="ellipsis-vertical" size={16} color="#b3b3b3" />
//                 </TouchableOpacity>
//               </View>
//             </TouchableOpacity>
//           ))}
//         </View>

//         <View style={styles.bottomSpacer} />
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// // Same styles as LikedSongsScreen
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
//   scrollView: {
//     flex: 1,
//     paddingHorizontal: 20,
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#b3b3b3',
//     marginTop: 20,
//     marginBottom: 15,
//     textAlign: 'center',
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     paddingHorizontal: 15,
//     paddingVertical: 12,
//     borderRadius: 30,
//     marginBottom: 20,
//   },
//   searchText: {
//     fontSize: 16,
//     color: '#000',
//     marginLeft: 10,
//   },
//   songsList: {
//     backgroundColor: 'rgba(255,255,255,0.02)',
//     borderRadius: 8,
//     overflow: 'hidden',
//   },
//   songItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 12,
//     paddingHorizontal: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#282828',
//   },
//   songIconContainer: {
//     width: 40,
//     height: 40,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(255,255,255,0.1)',
//     borderRadius: 4,
//     marginRight: 15,
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
//   actionButtons: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   actionButton: {
//     padding: 5,
//     marginLeft: 10,
//   },
//   bottomSpacer: {
//     height: 20,
//   },
// });

// export default DownloadsScreen;


import React, { useState } from 'react';
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
  FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const { width, height } = Dimensions.get('window');

const DownloadsScreen = ({ navigation }) => {
  const [sortBy, setSortBy] = useState('recent');
  const [searchQuery, setSearchQuery] = useState('');
  const [storageInfo, setStorageInfo] = useState({
    used: '4.2 GB',
    total: '8 GB',
    percentage: 52
  });

  const downloadedSongs = [
    { 
      id: 1, 
      title: 'Inside Out', 
      artist: 'The Chainsmokers, Charles', 
      duration: '3:45',
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop',
      size: '8.2 MB',
      quality: 'High',
      isLiked: false,
      dateDownloaded: '2 days ago'
    },
    { 
      id: 2, 
      title: 'Young', 
      artist: 'The Chainsmokers', 
      duration: '4:12',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop',
      size: '9.1 MB',
      quality: 'High',
      isLiked: true,
      dateDownloaded: '1 week ago'
    },
    { 
      id: 3, 
      title: 'Beach House', 
      artist: 'The Chainsmokers - Sick', 
      duration: '3:28',
      image: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=200&h=200&fit=crop',
      size: '7.8 MB',
      quality: 'Normal',
      isLiked: false,
      dateDownloaded: '3 days ago'
    },
    { 
      id: 4, 
      title: 'Kills You Slowly', 
      artist: 'The Chainsmokers - World', 
      duration: '3:15',
      image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=200&h=200&fit=crop',
      size: '8.5 MB',
      quality: 'High',
      isLiked: true,
      dateDownloaded: '2 weeks ago'
    },
    { 
      id: 5, 
      title: 'Setting Fires', 
      artist: 'The Chainsmokers, XYLO', 
      duration: '4:02',
      image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=200&h=200&fit=crop',
      size: '9.3 MB',
      quality: 'High',
      isLiked: false,
      dateDownloaded: '5 days ago'
    },
    { 
      id: 6, 
      title: 'Somebody', 
      artist: 'The Chainsmokers, Drew', 
      duration: '3:42',
      image: 'https://images.unsplash.com/photo-1489599809505-fb44932d0e71?w=200&h=200&fit=crop',
      size: '8.7 MB',
      quality: 'Normal',
      isLiked: true,
      dateDownloaded: '1 day ago'
    },
    { 
      id: 7, 
      title: 'Thunder', 
      artist: 'Imagine Dragons - Summer', 
      duration: '3:24',
      image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200&h=200&fit=crop',
      size: '8.9 MB',
      quality: 'High',
      isLiked: false,
      dateDownloaded: '3 weeks ago'
    },
    { 
      id: 8, 
      title: 'High On Life', 
      artist: 'Martin Garrix, Bonn', 
      duration: '3:50',
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop',
      size: '9.5 MB',
      quality: 'High',
      isLiked: true,
      dateDownloaded: '4 days ago'
    },
    { 
      id: 9, 
      title: 'FRENDS', 
      artist: 'Meatments, Anne-Marie', 
      duration: '3:18',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop',
      size: '7.6 MB',
      quality: 'Normal',
      isLiked: false,
      dateDownloaded: '1 week ago'
    },
    { 
      id: 10, 
      title: 'Carry On', 
      artist: 'Hime On - Dove the Placebo', 
      duration: '4:15',
      image: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=200&h=200&fit=crop',
      size: '9.8 MB',
      quality: 'High',
      isLiked: true,
      dateDownloaded: '2 days ago'
    },
  ];

  const filteredSongs = downloadedSongs.filter(song =>
    song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    song.artist.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleLike = (songId) => {
    console.log('Toggle like for song:', songId);
  };

  const removeDownload = (songId) => {
    console.log('Remove download for song:', songId);
  };

  const handlePlayAll = () => {
    navigation.navigate('NowPlayingScreen', { song: downloadedSongs[0] });
  };

  const handleShuffle = () => {
    const randomSong = downloadedSongs[Math.floor(Math.random() * downloadedSongs.length)];
    navigation.navigate('NowPlayingScreen', { song: randomSong });
  };

  const renderSongItem = ({ item, index }) => (
    <TouchableOpacity 
      style={styles.songItem}
      onPress={() => navigation.navigate('NowPlayingScreen', { song: item })}
    >
      <View style={styles.songLeft}>
        <View style={styles.songNumber}>
          <Text style={styles.songNumberText}>{index + 1}</Text>
        </View>
        <Image 
          source={{ uri: item.image }} 
          style={styles.songImage}
          resizeMode="cover"
        />
        <View style={styles.songInfo}>
          <Text style={styles.songTitle} numberOfLines={1}>{item.title}</Text>
          <View style={styles.songMeta}>
            <Icon name="download" size={12} color="#FF3B3B" />
            <Text style={styles.songArtist} numberOfLines={1}>{item.artist}</Text>
            <Text style={styles.songQuality}>• {item.quality}</Text>
          </View>
        </View>
      </View>
      
      <View style={styles.songRight}>
        <View style={styles.songDetails}>
          <Text style={styles.songSize}>{item.size}</Text>
          <Text style={styles.songDuration}>{item.duration}</Text>
        </View>
        <View style={styles.actionButtons}>
          <TouchableOpacity 
            style={styles.actionButton}
            onPress={() => toggleLike(item.id)}
          >
            <Icon 
              name={item.isLiked ? "heart" : "heart-outline"} 
              size={18} 
              color={item.isLiked ? "#FF3B3B" : "#b3b3b3"} 
            />
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.actionButton}
            onPress={() => removeDownload(item.id)}
          >
            <Icon name="trash-outline" size={18} color="#b3b3b3" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Icon name="ellipsis-vertical" size={16} color="#b3b3b3" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="chevron-back" size={24} color="#fff" />
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Downloads</Text>
          <Text style={styles.headerSubtitle}>Offline music</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.headerButton}>
            <Icon name="settings-outline" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Storage Info */}
        <View style={styles.storageSection}>
          <View style={styles.storageHeader}>
            <Text style={styles.storageTitle}>Storage</Text>
            <Text style={styles.storageUsed}>{storageInfo.used} of {storageInfo.total}</Text>
          </View>
          <View style={styles.storageBar}>
            <View 
              style={[
                styles.storageFill,
                { width: `${storageInfo.percentage}%` }
              ]} 
            />
          </View>
          <View style={styles.storageStats}>
            <View style={styles.storageStat}>
              <Text style={styles.storageStatNumber}>210</Text>
              <Text style={styles.storageStatLabel}>Songs</Text>
            </View>
            <View style={styles.storageStat}>
              <Text style={styles.storageStatNumber}>4.2 GB</Text>
              <Text style={styles.storageStatLabel}>Used</Text>
            </View>
            <View style={styles.storageStat}>
              <Text style={styles.storageStatNumber}>3.8 GB</Text>
              <Text style={styles.storageStatLabel}>Free</Text>
            </View>
          </View>
        </View>

        {/* Play Controls */}
        <View style={styles.playControls}>
          <TouchableOpacity style={styles.playButton} onPress={handlePlayAll}>
            <Icon name="play" size={28} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.shuffleButton} onPress={handleShuffle}>
            <Icon name="shuffle" size={24} color="#FF3B3B" />
            <Text style={styles.shuffleText}>Shuffle</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.downloadsButton}>
            <Icon name="wifi" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Sort Options */}
        <View style={styles.sortSection}>
          <TouchableOpacity 
            style={[styles.sortButton, sortBy === 'recent' && styles.sortButtonActive]}
            onPress={() => setSortBy('recent')}
          >
            <Text style={[styles.sortText, sortBy === 'recent' && styles.sortTextActive]}>
              Recently added
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.sortButton, sortBy === 'title' && styles.sortButtonActive]}
            onPress={() => setSortBy('title')}
          >
            <Text style={[styles.sortText, sortBy === 'title' && styles.sortTextActive]}>
              Title
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.sortButton, sortBy === 'size' && styles.sortButtonActive]}
            onPress={() => setSortBy('size')}
          >
            <Text style={[styles.sortText, sortBy === 'size' && styles.sortTextActive]}>
              Size
            </Text>
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Icon name="search" size={20} color="#000" style={styles.searchIcon} />
          <Text style={styles.searchText}>Search in downloads</Text>
        </View>

        {/* Downloads List Header */}
        <View style={styles.songsHeader}>
          <Text style={styles.songsHeaderTitle}>Downloaded Songs</Text>
          <Text style={styles.songsHeaderCount}>{downloadedSongs.length}</Text>
        </View>

        {/* Downloads List */}
        <View style={styles.songsList}>
          <FlatList
            data={filteredSongs}
            renderItem={renderSongItem}
            keyExtractor={item => item.id.toString()}
            scrollEnabled={false}
          />
        </View>

        {/* Download Settings */}
        <View style={styles.settingsSection}>
          <Text style={styles.settingsTitle}>Download Settings</Text>
          <View style={styles.settingsGrid}>
            <TouchableOpacity style={styles.settingItem}>
              <Icon name="cellular" size={24} color="#1DB954" />
              <Text style={styles.settingText}>Audio Quality</Text>
              <Text style={styles.settingValue}>High</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.settingItem}>
              <Icon name="wifi" size={24} color="#1DB954" />
              <Text style={styles.settingText}>Download using</Text>
              <Text style={styles.settingValue}>Wi-Fi only</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Bottom Spacer */}
        <View style={styles.bottomSpacer} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#282828',
  },
  backButton: {
    padding: 4,
  },
  headerTitleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 2,
  },
  headerSubtitle: {
    fontSize: 12,
    color: '#b3b3b3',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerButton: {
    padding: 8,
  },
  scrollView: {
    flex: 1,
  },
  storageSection: {
    padding: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#282828',
  },
  storageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  storageTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  storageUsed: {
    fontSize: 14,
    color: '#b3b3b3',
  },
  storageBar: {
    height: 6,
    backgroundColor: '#333',
    borderRadius: 3,
    marginBottom: 16,
    overflow: 'hidden',
  },
  storageFill: {
    height: '100%',
    backgroundColor: '#FF3B3B',
    borderRadius: 3,
  },
  storageStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  storageStat: {
    alignItems: 'center',
  },
  storageStatNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  storageStatLabel: {
    fontSize: 12,
    color: '#b3b3b3',
  },
  playControls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#282828',
  },
  playButton: {
    width: 60,
    height: 60,
    backgroundColor: '#FF3B3B',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#FF3B3B',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  shuffleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#727272',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  shuffleText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
    marginLeft: 6,
  },
  downloadsButton: {
    padding: 8,
  },
  sortSection: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#282828',
  },
  sortButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
    marginRight: 12,
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  sortButtonActive: {
    backgroundColor: '#fff',
  },
  sortText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
  },
  sortTextActive: {
    color: '#000',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 24,
    marginVertical: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 30,
  },
  searchIcon: {
    marginRight: 12,
  },
  searchText: {
    fontSize: 16,
    color: '#000',
  },
  songsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  songsHeaderTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  songsHeaderCount: {
    fontSize: 14,
    color: '#b3b3b3',
  },
  songsList: {
    paddingHorizontal: 16,
  },
  songItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 8,
    marginBottom: 1,
    backgroundColor: 'transparent',
  },
  songLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  songNumber: {
    width: 30,
    alignItems: 'center',
    marginRight: 12,
  },
  songNumberText: {
    fontSize: 14,
    color: '#b3b3b3',
    fontWeight: '500',
  },
  songImage: {
    width: 50,
    height: 50,
    borderRadius: 4,
    marginRight: 12,
  },
  songInfo: {
    flex: 1,
  },
  songTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 4,
  },
  songMeta: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  songArtist: {
    fontSize: 14,
    color: '#b3b3b3',
    marginLeft: 6,
  },
  songQuality: {
    fontSize: 12,
    color: '#727272',
    marginLeft: 6,
  },
  songRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  songDetails: {
    alignItems: 'flex-end',
    marginRight: 12,
  },
  songSize: {
    fontSize: 12,
    color: '#b3b3b3',
    marginBottom: 2,
  },
  songDuration: {
    fontSize: 14,
    color: '#b3b3b3',
  },
  actionButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButton: {
    padding: 4,
    marginLeft: 8,
  },
  settingsSection: {
    padding: 24,
    borderTopWidth: 1,
    borderTopColor: '#282828',
    marginTop: 16,
  },
  settingsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
  },
  settingsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  settingItem: {
    width: (width - 72) / 2,
    backgroundColor: 'rgba(255,255,255,0.05)',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  settingText: {
    fontSize: 14,
    color: '#fff',
    marginTop: 8,
    marginBottom: 4,
    textAlign: 'center',
  },
  settingValue: {
    fontSize: 12,
    color: '#FF3B3B',
    textAlign: 'center',
  },
  bottomSpacer: {
    height: 20,
  },
});

export default DownloadsScreen;