// // src/screens/ArtistSongsScreen.js
// import React from 'react';
// import {
//   View,
//   Text,
//   ScrollView,
//   TouchableOpacity,
//   StyleSheet,
//   StatusBar,
//   SafeAreaView,
//   FlatList
// } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import { useNavigation } from '@react-navigation/native';

// const ArtistSongsScreen = ({ route }) => {
//   const navigation = useNavigation();
//   const { artistName = 'MAROON 5' } = route.params || {};

//   // Songs data organized by albums/sections
//   const songsData = [
//     {
//       id: '1',
//       sectionTitle: 'But My Heart',
//       songs: [
//         { id: '1-1', title: 'Mason: 5 - Red Fill Blue Deluxe', songName: 'Micary' },
//         { id: '1-2', title: 'Mason: 6 - Micery', songName: 'Pustic Rose' },
//         { id: '1-3', title: 'Mason: 5 - Red Fill Blue Deluxe', songName: 'Shoot Love' },
//         { id: '1-4', title: 'Mason: 3 - Y Asia Tour Edition', songName: 'Lost Stars' },
//         { id: '1-5', title: 'Mason: 5 - Y Asia Tour Edition', songName: 'Wise Up Call' },
//         { id: '1-6', title: 'Mason: 5 - It Won\'t Be Soon Before Long', songName: 'Dentin Jacket' },
//         { id: '1-7', title: 'Mason: 5 - Red Fill Blue', songName: 'Beautiful Goodbye' },
//         { id: '1-8', title: 'Mason: 6 - Overexposed Deluxe', songName: 'Payphone' },
//         { id: '1-9', title: 'Mason: 5 - Overexposed', songName: 'Payphone' },
//       ]
//     },
//     {
//       id: '2',
//       sectionTitle: 'In Your Pocket',
//       songs: [
//         { id: '2-1', title: 'Mason: 5 - Y', songName: 'Mason:' },
//         { id: '2-2', title: 'York Library', songName: '' },
//       ]
//     }
//   ];

//   const renderSongItem = ({ item, section }) => (
//     <TouchableOpacity style={styles.songItem}
//      onPress={() => navigation.navigate('NowPlayingScreen', { song: item })}
//   >
//       <View style={styles.songNumber}>
//         <Text style={styles.songNumberText}>
//           {section.songs.findIndex(song => song.id === item.id) + 1}
//         </Text>
//       </View>
//       <View style={styles.songInfo}>
//         <Text style={styles.songName} numberOfLines={1}>
//           {item.songName || item.title}
//         </Text>
//         <Text style={styles.songAlbum} numberOfLines={1}>
//           {item.songName ? item.title : ''}
//         </Text>
//       </View>
//       <View style={styles.songActions}>
//         <TouchableOpacity style={styles.actionButton}>
//           <Icon name="favorite-border" size={20} color="#b3b3b3" />
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.actionButton}>
//           <Icon name="more-horiz" size={20} color="#b3b3b3" />
//         </TouchableOpacity>
//       </View>
//     </TouchableOpacity>
//   );

//   const renderSection = ({ item: section }) => (
//     <View style={styles.section}>
//       <Text style={styles.sectionTitle}>{section.sectionTitle}</Text>
//       <FlatList
//         data={section.songs}
//         renderItem={({ item }) => renderSongItem({ item, section })}
//         keyExtractor={item => item.id}
//         scrollEnabled={false}
//       />
//     </View>
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="light-content" backgroundColor="#000" />
      
//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//           <Icon name="arrow-back" size={24} color="#fff" />
//         </TouchableOpacity>
//         <View style={styles.headerCenter}>
//           <Text style={styles.artistName}>{artistName}</Text>
//           <Text style={styles.songsCount}>20 songs</Text>
//         </View>
//         <TouchableOpacity style={styles.headerButton}>
//           <Icon name="shuffle" size={24} color="#1db954" />
//         </TouchableOpacity>
//       </View>

//       <ScrollView 
//         style={styles.scrollView}
//         showsVerticalScrollIndicator={false}
//       >
//         {/* Play All Button */}
//         <TouchableOpacity style={styles.playAllButton}>
//           <View style={styles.playAllIcon}>
//             <Icon name="play-arrow" size={30} color="#000" />
//           </View>
//           <Text style={styles.playAllText}>Play all</Text>
//         </TouchableOpacity>

//         {/* Songs List */}
//         <FlatList
//           data={songsData}
//           renderItem={renderSection}
//           keyExtractor={item => item.id}
//           scrollEnabled={false}
//         />

//         {/* Bottom Padding */}
//         <View style={styles.bottomPadding} />
//       </ScrollView>

//       {/* Mini Player */}
//       <View style={styles.miniPlayer}>
//         <View style={styles.miniPlayerLeft}>
//           <View style={styles.miniPlayerImage}>
//             <Icon name="music-note" size={20} color="#fff" />
//           </View>
//           <View style={styles.miniPlayerText}>
//             <Text style={styles.miniPlayerTitle} numberOfLines={1}>
//               Micary
//             </Text>
//             <Text style={styles.miniPlayerArtist} numberOfLines={1}>
//               {artistName}
//             </Text>
//           </View>
//         </View>
//         <View style={styles.miniPlayerRight}>
//           <TouchableOpacity style={styles.miniPlayerButton}>
//             <Icon name="favorite-border" size={20} color="#b3b3b3" />
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.miniPlayerButton}>
//             <Icon name="play-arrow" size={28} color="#fff" />
//           </TouchableOpacity>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//     borderBottomWidth: 1,
//     borderBottomColor: '#282828',
//   },
//   backButton: {
//     padding: 4,
//   },
//   headerCenter: {
//     alignItems: 'center',
//     flex: 1,
//   },
//   artistName: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#fff',
//     marginBottom: 2,
//   },
//   songsCount: {
//     fontSize: 12,
//     color: '#b3b3b3',
//   },
//   headerButton: {
//     padding: 4,
//   },
//   scrollView: {
//     flex: 1,
//   },
//   playAllButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#282828',
//   },
//   playAllIcon: {
//     width: 48,
//     height: 48,
//     backgroundColor: '#1db954',
//     borderRadius: 24,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 16,
//   },
//   playAllText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#fff',
//   },
//   section: {
//     marginBottom: 8,
//   },
//   sectionTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#fff',
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//     backgroundColor: '#181818',
//     marginBottom: 1,
//   },
//   songItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//     backgroundColor: '#181818',
//     marginBottom: 1,
//   },
//   songNumber: {
//     width: 30,
//     alignItems: 'center',
//     marginRight: 12,
//   },
//   songNumberText: {
//     fontSize: 14,
//     color: '#b3b3b3',
//   },
//   songInfo: {
//     flex: 1,
//   },
//   songName: {
//     fontSize: 16,
//     color: '#fff',
//     marginBottom: 4,
//   },
//   songAlbum: {
//     fontSize: 12,
//     color: '#b3b3b3',
//   },
//   songActions: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   actionButton: {
//     padding: 8,
//     marginLeft: 8,
//   },
//   bottomPadding: {
//     height: 80,
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
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     borderTopWidth: 1,
//     borderTopColor: '#282828',
//   },
//   miniPlayerLeft: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     flex: 1,
//   },
//   miniPlayerImage: {
//     width: 40,
//     height: 40,
//     backgroundColor: '#333',
//     borderRadius: 2,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 12,
//   },
//   miniPlayerText: {
//     flex: 1,
//   },
//   miniPlayerTitle: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#fff',
//     marginBottom: 2,
//   },
//   miniPlayerArtist: {
//     fontSize: 12,
//     color: '#b3b3b3',
//   },
//   miniPlayerRight: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   miniPlayerButton: {
//     marginLeft: 16,
//   },
// });

// export default ArtistSongsScreen;

// src/screens/ArtistSongsScreen.js
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  FlatList,
  Image,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const ArtistSongsScreen = ({ route }) => {
  const navigation = useNavigation();
  const { artistName = 'MAROON 5' } = route.params || {};

  // Songs data organized by albums/sections with images
  const songsData = [
    {
      id: '1',
      sectionTitle: 'But My Heart',
      albumArt: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop',
      songs: [
        { 
          id: '1-1', 
          title: 'Mason: 5 - Red Fill Blue Deluxe', 
          songName: 'Micary',
          duration: '3:45',
          plays: '12.5M',
          image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop'
        },
        { 
          id: '1-2', 
          title: 'Mason: 6 - Micery', 
          songName: 'Pustic Rose',
          duration: '4:12',
          plays: '8.7M',
          image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop'
        },
        { 
          id: '1-3', 
          title: 'Mason: 5 - Red Fill Blue Deluxe', 
          songName: 'Shoot Love',
          duration: '3:28',
          plays: '15.2M',
          image: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=200&h=200&fit=crop'
        },
        { 
          id: '1-4', 
          title: 'Mason: 3 - Y Asia Tour Edition', 
          songName: 'Lost Stars',
          duration: '4:27',
          plays: '45.8M',
          image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=200&h=200&fit=crop'
        },
        { 
          id: '1-5', 
          title: 'Mason: 5 - Y Asia Tour Edition', 
          songName: 'Wise Up Call',
          duration: '3:15',
          plays: '6.3M',
          image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=200&h=200&fit=crop'
        },
      ]
    },
    {
      id: '2',
      sectionTitle: 'In Your Pocket',
      albumArt: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
      songs: [
        { 
          id: '2-1', 
          title: 'Mason: 5 - Y', 
          songName: 'Mason',
          duration: '3:52',
          plays: '9.1M',
          image: 'https://images.unsplash.com/photo-1489599809505-fb44932d0e71?w=200&h=200&fit=crop'
        },
        { 
          id: '2-2', 
          title: 'York Library', 
          songName: 'Midnight Drive',
          duration: '4:08',
          plays: '7.4M',
          image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200&h=200&fit=crop'
        },
      ]
    }
  ];

  const renderSongItem = ({ item, section }) => (
    <TouchableOpacity style={styles.songItem}
      onPress={() => navigation.navigate('NowPlayingScreen', { song: item })}
    >
      <Image 
        source={{ uri: item.image }} 
        style={styles.songImage}
        resizeMode="cover"
      />
      <View style={styles.songInfo}>
        <Text style={styles.songName} numberOfLines={1}>
          {item.songName || item.title}
        </Text>
        <Text style={styles.songAlbum} numberOfLines={1}>
          {item.songName ? item.title : ''}
        </Text>
        <Text style={styles.songPlays}>{item.plays} plays</Text>
      </View>
      <View style={styles.songMeta}>
        <Text style={styles.songDuration}>{item.duration}</Text>
        <View style={styles.songActions}>
          <TouchableOpacity style={styles.actionButton}>
            <Icon name="favorite-border" size={20} color="#b3b3b3" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Icon name="more-horiz" size={20} color="#b3b3b3" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderSection = ({ item: section }) => (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Image 
          source={{ uri: section.albumArt }} 
          style={styles.sectionImage}
          resizeMode="cover"
        />
        <View style={styles.sectionInfo}>
          <Text style={styles.sectionTitle}>{section.sectionTitle}</Text>
          <Text style={styles.sectionSongs}>{section.songs.length} songs</Text>
        </View>
      </View>
      <FlatList
        data={section.songs}
        renderItem={({ item }) => renderSongItem({ item, section })}
        keyExtractor={item => item.id}
        scrollEnabled={false}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <View style={styles.headerCenter}>
          <Text style={styles.artistName} numberOfLines={1}>{artistName}</Text>
          <Text style={styles.songsCount}>20 songs • 1hr 24min</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.headerButton}>
            <Icon name="search" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerButton}>
            <Icon name="sort" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Play All Button */}
        <View style={styles.playAllSection}>
          <TouchableOpacity style={styles.playAllButton}>
            <View style={styles.playAllIcon}>
              <Icon name="play-arrow" size={30} color="#000" />
            </View>
            <View style={styles.playAllTextContainer}>
              <Text style={styles.playAllText}>Play all</Text>
              <Text style={styles.playAllSubtext}>Shuffle • 20 songs</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.shuffleButton}>
            <Icon name="shuffle" size={24} color="#FF3B3B" />
          </TouchableOpacity>
        </View>

        {/* Popular Songs Header */}
        <View style={styles.popularHeader}>
          <Text style={styles.popularTitle}>Popular</Text>
          <Text style={styles.popularSubtitle}>Most played tracks</Text>
        </View>

        {/* Songs List */}
        <FlatList
          data={songsData}
          renderItem={renderSection}
          keyExtractor={item => item.id}
          scrollEnabled={false}
        />

        {/* Bottom Padding */}
        <View style={styles.bottomPadding} />
      </ScrollView>

      {/* Mini Player */}
      <View style={styles.miniPlayer}>
        <View style={styles.miniPlayerLeft}>
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=100&h=100&fit=crop' }}
            style={styles.miniPlayerImage}
            resizeMode="cover"
          />
          <View style={styles.miniPlayerText}>
            <Text style={styles.miniPlayerTitle} numberOfLines={1}>
              Micary
            </Text>
            <Text style={styles.miniPlayerArtist} numberOfLines={1}>
              {artistName}
            </Text>
          </View>
        </View>
        <View style={styles.miniPlayerRight}>
          <TouchableOpacity style={styles.miniPlayerButton}>
            <Icon name="favorite" size={20} color="#FF3B3B" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.miniPlayerButton}>
            <Icon name="play-arrow" size={28} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#282828',
  },
  backButton: {
    padding: 4,
  },
  headerCenter: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 12,
  },
  artistName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 2,
    textAlign: 'center',
  },
  songsCount: {
    fontSize: 12,
    color: '#b3b3b3',
    textAlign: 'center',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerButton: {
    padding: 8,
    marginLeft: 8,
  },
  scrollView: {
    flex: 1,
  },
  playAllSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#282828',
  },
  playAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  playAllIcon: {
    width: 56,
    height: 56,
    backgroundColor: '#FF3B3B',
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    shadowColor: '#FF3B3B',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  playAllTextContainer: {
    flex: 1,
  },
  playAllText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 2,
  },
  playAllSubtext: {
    fontSize: 14,
    color: '#b3b3b3',
  },
  shuffleButton: {
    padding: 12,
    marginLeft: 12,
  },
  popularHeader: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#282828',
  },
  popularTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  popularSubtitle: {
    fontSize: 14,
    color: '#b3b3b3',
  },
  section: {
    marginBottom: 8,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#181818',
    borderBottomWidth: 1,
    borderBottomColor: '#282828',
  },
  sectionImage: {
    width: 60,
    height: 60,
    borderRadius: 4,
    marginRight: 16,
  },
  sectionInfo: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  sectionSongs: {
    fontSize: 14,
    color: '#b3b3b3',
  },
  songItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#181818',
    marginBottom: 1,
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
  songName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 4,
  },
  songAlbum: {
    fontSize: 14,
    color: '#b3b3b3',
    marginBottom: 2,
  },
  songPlays: {
    fontSize: 12,
    color: '#b3b3b3',
  },
  songMeta: {
    alignItems: 'flex-end',
  },
  songDuration: {
    fontSize: 14,
    color: '#b3b3b3',
    marginBottom: 8,
  },
  songActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButton: {
    padding: 4,
    marginLeft: 8,
  },
  bottomPadding: {
    height: 80,
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
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#282828',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.8,
    shadowRadius: 8,
    elevation: 16,
  },
  miniPlayerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  miniPlayerImage: {
    width: 40,
    height: 40,
    borderRadius: 2,
    marginRight: 12,
  },
  miniPlayerText: {
    flex: 1,
  },
  miniPlayerTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 2,
  },
  miniPlayerArtist: {
    fontSize: 12,
    color: '#b3b3b3',
  },
  miniPlayerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  miniPlayerButton: {
    marginLeft: 16,
  },
});

export default ArtistSongsScreen;