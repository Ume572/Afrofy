


// screens/PlaylistsScreen.tsx
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
  RefreshControl,
  TextInput,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { getUserPlaylists, createPlaylist } from '../Services/mobile-api';

const { width } = Dimensions.get('window');

const PlaylistsScreen = ({ navigation }) => {
  const [sortBy, setSortBy] = useState('recent');
  const [searchQuery, setSearchQuery] = useState('');
  const [playlists, setPlaylists] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  
  // Animation values
  const fadeAnim = useState(new Animated.Value(0))[0];
  const slideAnim = useState(new Animated.Value(50))[0];

  // Default cover images for fallback
  const defaultCovers = [
    'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&h=300&fit=crop'
  ];

  // Fetch playlists from API
  const fetchPlaylists = async () => {
    try {
      console.log('🔄 Fetching playlists from API...');
      const response = await getUserPlaylists();
      
      console.log('📦 Raw API Response:', response);
      
      if (response && response.success) {
        // Handle different response structures
        let playlistsData = [];
        
        if (response.data && Array.isArray(response.data)) {
          playlistsData = response.data;
        } else if (Array.isArray(response)) {
          playlistsData = response;
        } else if (response.playlists && Array.isArray(response.playlists)) {
          playlistsData = response.playlists;
        }
        
        console.log('📊 Playlists Data Found:', playlistsData.length);
        
        if (playlistsData.length > 0) {
          const transformedPlaylists = playlistsData.map((playlist, index) => ({
            id: playlist.id || playlist._id || `playlist-${index}`,
            name: playlist.title || playlist.name || `Playlist ${index + 1}`,
            type: playlist.isPublic ? 'Playlist' : 'Playlist • Private',
            songs: `${playlist.songsCount || playlist.songs?.length || playlist.trackCount || 0} songs`,
            image: playlist.coverImage || playlist.image || playlist.thumbnail || defaultCovers[index % defaultCovers.length],
            creator: playlist.creator || 'You',
            lastPlayed: playlist.updatedAt ? formatDate(playlist.updatedAt) : 'Recently added',
            isDownloaded: false,
            description: playlist.description || '',
            isPublic: playlist.isPublic || false,
            ...playlist
          }));
          
          setPlaylists(transformedPlaylists);
          startAnimations();
        } else {
          console.log('ℹ️ No playlists found, showing empty state');
          setPlaylists([]);
          startAnimations();
        }
      } else {
        console.log('❌ API response not successful');
        setPlaylists([]);
        startAnimations();
      }
    } catch (error) {
      console.error('❌ Fetch playlists error:', error);
      setPlaylists([]);
      startAnimations();
    } finally {
      setIsLoading(false);
      setRefreshing(false);
    }
  };

  // Animation function
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

  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      const now = new Date();
      const diffTime = Math.abs(now - date);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      if (diffDays === 1) return 'Today';
      if (diffDays === 2) return 'Yesterday';
      if (diffDays < 7) return `${diffDays - 1} days ago`;
      if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
      return `${Math.floor(diffDays / 30)} months ago`;
    } catch (error) {
      return 'Recently';
    }
  };

  useEffect(() => {
    fetchPlaylists();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    fetchPlaylists();
  };

  const filteredPlaylists = playlists.filter(playlist =>
    playlist.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    playlist.creator.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handlePlaylistPress = (playlist) => {
    navigation.navigate('PlaylistDetailScreen', { 
      playlistId: playlist.id,
      playlistName: playlist.name,
      playlistImage: playlist.image,
      playlistCreator: playlist.creator,
      songCount: playlist.songs,
      playlistData: playlist
    });
  };

  const handleCreatePlaylist = async () => {
    navigation.navigate('CreatePlaylistScreen', {
      onPlaylistCreated: fetchPlaylists
    });
  };

  const handleSearchPress = () => {
    // Implement search focus if needed
  };

  const renderPlaylistItem = ({ item, index }) => (
    <Animated.View
      style={{
        opacity: fadeAnim,
        transform: [{ translateY: slideAnim }]
      }}
    >
      <TouchableOpacity 
        style={styles.playlistItem}
        onPress={() => handlePlaylistPress(item)}
        activeOpacity={0.7}
      >
        <View style={styles.playlistImageContainer}>
          <Image 
            source={{ uri: item.image }} 
            style={styles.playlistImage}
            resizeMode="cover"
            onError={() => console.log('Image load error for:', item.name)}
          />
          <View style={styles.imageOverlay} />
          {item.isDownloaded && (
            <View style={styles.downloadedBadge}>
              <Icon name="download" size={12} color="#000" />
            </View>
          )}
          <TouchableOpacity style={styles.playButton}>
            <Icon name="play" size={20} color="#000" />
          </TouchableOpacity>
        </View>
        
        <View style={styles.playlistInfo}>
          <Text style={styles.playlistName} numberOfLines={1}>{item.name}</Text>
          <View style={styles.playlistMeta}>
            <Text style={styles.playlistType} numberOfLines={1}>
              {item.type} • {item.songs}
            </Text>
          </View>
          <Text style={styles.playlistCreator} numberOfLines={1}>
            {item.creator} • {item.lastPlayed}
          </Text>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );

  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#000" />
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#FF3B3B" />
          <Text style={styles.loadingText}>Loading your playlists...</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      
      {/* Header */}
      <Animated.View 
        style={[
          styles.header,
          {
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }]
          }
        ]}
      >
        <TouchableOpacity 
          onPress={() => navigation.goBack()} 
          style={styles.backButton}
        >
          <Icon name="chevron-back" size={28} color="#fff" />
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Your Playlists</Text>
          <Text style={styles.headerSubtitle}>{playlists.length} collections</Text>
        </View>
        <View style={styles.headerRight}>
          {/* <TouchableOpacity 
            style={styles.headerButton} 
            onPress={handleSearchPress}
          >
            <Icon name="search-outline" size={24} color="#fff" />
          </TouchableOpacity> */}
          <TouchableOpacity 
            style={styles.headerButton} 
            onPress={handleCreatePlaylist}
          >
            <Icon name="add" size={28} color="#fff" />
          </TouchableOpacity>
        </View>
      </Animated.View>

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
        {/* Stats Section */}
        <Animated.View 
          style={[
            styles.statsSection,
            {
              opacity: fadeAnim,
              transform: [{ translateY: slideAnim }]
            }
          ]}
        >
          <View style={styles.statItem}>
            <View style={styles.statIconContainer}>
              <Icon name="list" size={20} color="#FF3B3B" />
            </View>
            <Text style={styles.statNumber}>{playlists.length}</Text>
            <Text style={styles.statLabel}>Playlists</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <View style={styles.statIconContainer}>
              <Icon name="musical-notes" size={20} color="#FF3B3B" />
            </View>
            <Text style={styles.statNumber}>
              {playlists.reduce((total, playlist) => {
                const songs = parseInt(playlist.songs) || 0;
                return total + songs;
              }, 0)}
            </Text>
            <Text style={styles.statLabel}>Total Songs</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <View style={styles.statIconContainer}>
              <Icon name="time" size={20} color="#FF3B3B" />
            </View>
            <Text style={styles.statNumber}>
              {playlists.filter(p => p.isDownloaded).length}
            </Text>
            <Text style={styles.statLabel}>Downloaded</Text>
          </View>
        </Animated.View>

        {/* Sort Options */}
        {/* <Animated.View 
          style={[
            styles.sortSection,
            {
              opacity: fadeAnim,
            }
          ]}
        >
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity 
              style={[styles.sortButton, sortBy === 'recent' && styles.sortButtonActive]}
              onPress={() => setSortBy('recent')}
            >
              <Icon 
                name="time" 
                size={16} 
                color={sortBy === 'recent' ? '#000' : '#fff'} 
                style={styles.sortIcon}
              />
              <Text style={[styles.sortText, sortBy === 'recent' && styles.sortTextActive]}>
                Recently played
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.sortButton, sortBy === 'title' && styles.sortButtonActive]}
              onPress={() => setSortBy('title')}
            >
              <Icon 
                name="text" 
                size={16} 
                color={sortBy === 'title' ? '#000' : '#fff'} 
                style={styles.sortIcon}
              />
              <Text style={[styles.sortText, sortBy === 'title' && styles.sortTextActive]}>
                Title
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.sortButton, sortBy === 'creator' && styles.sortButtonActive]}
              onPress={() => setSortBy('creator')}
            >
              <Icon 
                name="person" 
                size={16} 
                color={sortBy === 'creator' ? '#000' : '#fff'} 
                style={styles.sortIcon}
              />
              <Text style={[styles.sortText, sortBy === 'creator' && styles.sortTextActive]}>
                Creator
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </Animated.View> */}

        {/* Search Bar */}
        <Animated.View
          style={[
            styles.searchContainer,
            {
              opacity: fadeAnim,
            }
          ]}
        >
          <Icon name="search" size={20} color="#666" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search your playlists..."
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
        </Animated.View>

        {/* Playlists Grid */}
        <View style={styles.playlistsSection}>
          <Animated.View 
            style={[
              styles.sectionHeader,
              {
                opacity: fadeAnim,
              }
            ]}
          >
            <View>
              <Text style={styles.sectionTitle}>Your Collection</Text>
              <Text style={styles.sectionSubtitle}>
                {filteredPlaylists.length} of {playlists.length} playlists
              </Text>
            </View>
            {/* <TouchableOpacity style={styles.filterButton}>
              <Icon name="filter" size={20} color="#fff" />
            </TouchableOpacity> */}
          </Animated.View>
          
          {filteredPlaylists.length === 0 ? (
            <Animated.View 
              style={[
                styles.emptyState,
                {
                  opacity: fadeAnim,
                }
              ]}
            >
              <View style={styles.emptyIcon}>
                <Icon name="musical-notes-outline" size={64} color="#666" />
              </View>
              <Text style={styles.emptyStateTitle}>
                {searchQuery ? 'No playlists found' : 'No playlists yet'}
              </Text>
              <Text style={styles.emptyStateText}>
                {searchQuery ? 'Try a different search term' : 'Create your first playlist to get started'}
              </Text>
              {!searchQuery && (
                <TouchableOpacity style={styles.emptyStateButton} onPress={handleCreatePlaylist}>
                  <Icon name="add" size={20} color="#fff" style={styles.emptyStateButtonIcon} />
                  <Text style={styles.emptyStateButtonText}>Create Playlist</Text>
                </TouchableOpacity>
              )}
            </Animated.View>
          ) : (
            <View style={styles.playlistsGrid}>
              {filteredPlaylists.map((playlist, index) => (
                <Animated.View
                  key={playlist.id}
                  style={{
                    opacity: fadeAnim,
                    transform: [
                      { 
                        translateY: slideAnim.interpolate({
                          inputRange: [0, 50],
                          outputRange: [0, 20 * index]
                        }) 
                      }
                    ]
                  }}
                >
                  <TouchableOpacity 
                    style={styles.playlistItem}
                    onPress={() => handlePlaylistPress(playlist)}
                    activeOpacity={0.7}
                  >
                    <View style={styles.playlistImageContainer}>
                      <Image 
                        source={{ uri: playlist.image }} 
                        style={styles.playlistImage}
                        resizeMode="cover"
                      />
                      <View style={styles.imageOverlay} />
                      {playlist.isDownloaded && (
                        <View style={styles.downloadedBadge}>
                          <Icon name="download" size={12} color="#000" />
                        </View>
                      )}
                      <TouchableOpacity style={styles.playButton}>
                        <Icon name="play" size={16} color="#000" />
                      </TouchableOpacity>
                    </View>
                    
                    <View style={styles.playlistInfo}>
                      <Text style={styles.playlistName} numberOfLines={1}>{playlist.name}</Text>
                      <View style={styles.playlistMeta}>
                        <Text style={styles.playlistType} numberOfLines={1}>
                          {playlist.type} • {playlist.songs}
                        </Text>
                      </View>
                      <Text style={styles.playlistCreator} numberOfLines={1}>
                        {playlist.creator} • {playlist.lastPlayed}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </Animated.View>
              ))}
            </View>
          )}
        </View>

        {/* Create Playlist Card */}
        <Animated.View
          style={{
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }]
          }}
        >
          <TouchableOpacity style={styles.createCard} onPress={handleCreatePlaylist}>
            <View style={styles.createIcon}>
              <Icon name="add" size={32} color="#fff" />
            </View>
            <View style={styles.createText}>
              <Text style={styles.createTitle}>Create new playlist</Text>
              <Text style={styles.createSubtitle}>Start your music collection</Text>
            </View>
            <Icon name="chevron-forward" size={20} color="#666" />
          </TouchableOpacity>
        </Animated.View>

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
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#1a1a1a',
    backgroundColor: '#000',
  },
  backButton: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: '#000',
  },
  headerTitleContainer: {
    alignItems: 'center',
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
    fontWeight: '500',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerButton: {
    padding: 8,
    marginLeft: 8,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  scrollView: {
    flex: 1,
  },
  statsSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#1a1a1a',
    backgroundColor: 'rgba(255,255,255,0.02)',
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(185, 29, 29, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#b3b3b3',
    fontWeight: '500',
  },
  statDivider: {
    width: 1,
    height: 40,
    backgroundColor: '#333',
  },
  sortSection: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#1a1a1a',
  },
  sortButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 12,
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  sortButtonActive: {
    backgroundColor: '#fff',
  },
  sortIcon: {
    marginRight: 6,
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
    backgroundColor: 'rgba(255,255,255,0.1)',
    marginHorizontal: 20,
    marginVertical: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#333',
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
  playlistsSection: {
    padding: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#b3b3b3',
    marginTop: 4,
  },
  filterButton: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  playlistsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  playlistItem: {
    width: (width - 60) / 2,
    marginBottom: 24,
  },
  playlistImageContainer: {
    width: (width - 60) / 2,
    height: (width - 60) / 2,
    borderRadius: 12,
    marginBottom: 12,
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: '#333',
  },
  playlistImage: {
    width: '100%',
    height: '100%',
  },
  imageOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  downloadedBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: '#FF3B3B',
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  playButton: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    backgroundColor: '#FF3B3B',
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  playlistInfo: {
    flex: 1,
  },
  playlistName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  playlistMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  playlistType: {
    fontSize: 14,
    color: '#b3b3b3',
  },
  playlistCreator: {
    fontSize: 12,
    color: '#727272',
  },
  createCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.05)',
    marginHorizontal: 20,
    marginBottom: 20,
    padding: 20,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#333',
    borderStyle: 'dashed',
  },
  createIcon: {
    width: 50,
    height: 50,
    borderRadius: 12,
    backgroundColor: 'rgba(185, 55, 29, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    borderWidth: 2,
    borderColor: '#FF3B3B',
    borderStyle: 'dashed',
  },
  createText: {
    flex: 1,
  },
  createTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  createSubtitle: {
    fontSize: 14,
    color: '#b3b3b3',
  },
  emptyState: {
    alignItems: 'center',
    paddingVertical: 60,
  },
  emptyIcon: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(255,255,255,0.05)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  emptyStateTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  emptyStateText: {
    fontSize: 14,
    color: '#b3b3b3',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 20,
  },
  emptyStateButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FF3B3B',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 25,
    shadowColor: '#FF3B3B',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  emptyStateButtonIcon: {
    marginRight: 8,
  },
  emptyStateButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  loadingText: {
    color: '#fff',
    marginTop: 16,
    fontSize: 16,
  },
  bottomSpacer: {
    height: 30,
  },
});

export default PlaylistsScreen;