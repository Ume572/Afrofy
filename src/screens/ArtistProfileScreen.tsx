

// ArtistProfileScreen.js - COMPLETE FIX FOR FOLLOWERS COUNT
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Image,
  FlatList,
  Dimensions,
  ActivityIndicator,
  Alert
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { getDataWithToken } from '../Services/mobile-api';
import { mobile_siteConfig } from '../Services/mobile-siteConfig';
import { useAudio } from '../contexts/AudioContext';
import { followArtist, unfollowArtist } from '../Services/mobile-api';
import { wp, hp } from "../assets/Global.Css";

const { width } = Dimensions.get('window');

const getImageUrl = (imagePath) => {
  if (!imagePath || imagePath === 'null' || imagePath === 'undefined') {
    return 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop&crop=face';
  }
  if (imagePath.startsWith('http')) return imagePath;
  if (imagePath.startsWith('/')) return `${mobile_siteConfig.IMAGE_BASE_URL}${imagePath}`;
  return 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop&crop=face';
};

const ArtistProfileScreen = ({ route }) => {
  const navigation = useNavigation();
  const { artistId, artistName = 'Artist' } = route.params || {};

  const { playSong } = useAudio();
  const [artistData, setArtistData] = useState(null);
  const [songs, setSongs] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFollowing, setIsFollowing] = useState(false);
  const [isFollowLoading, setIsFollowLoading] = useState(false);

  // ✅ Fetch Artist Data
  const fetchArtistData = async () => {
    try {
      setIsLoading(true);
      console.log('🎵 Fetching artist data for ID:', artistId);

      const response = await getDataWithToken(`user/artist/${artistId}`);
      console.log('🎵 Artist Profile API Response:', response);

      if (response && response.success) {
        const data = response.data;
        setArtistData(data.artist);
        
        // ✅ PEHLE LOCAL STORAGE CHECK KARO FOLLOWERS COUNT KE LIYE
        const localFollowersCount = await getLocalFollowersCount(artistId);
        const apiFollowers = data.artist?.followers || 0;
        
        console.log('🎵 API Followers:', apiFollowers, 'Local Followers:', localFollowersCount);
        
        // ✅ FINAL FOLLOWERS COUNT: Local storage ko priority do
        const finalFollowersCount = localFollowersCount !== null ? localFollowersCount : apiFollowers;
        
        // ✅ Follow status check
        let followStatus = false;
        
        if (data.artist?.isFavorite !== undefined) {
          followStatus = data.artist.isFavorite;
        } else if (data.artist?.isFollowing !== undefined) {
          followStatus = data.artist.isFollowing;
        } else if (data.artist?.followStatus !== undefined) {
          followStatus = data.artist.followStatus;
        }
        
        // ✅ EXTRA CHECK: Agar API false de raha hai to local storage check karo
        if (!followStatus) {
          const localStatus = await checkLocalFollowStatus(artistId);
          if (localStatus) {
            followStatus = true;
            console.log('🎵 Using local storage status: true');
          }
        }
        
        setIsFollowing(followStatus);
        console.log('✅ Final follow status set to:', followStatus);
        console.log('✅ Final followers count:', finalFollowersCount);
        
        // ✅ Update artist data with correct followers count
        setArtistData(prev => ({
          ...prev,
          followers: finalFollowersCount
        }));
        
        if (data.songs && Array.isArray(data.songs)) {
          setSongs(data.songs);
        }
        if (data.publicPlaylists && Array.isArray(data.publicPlaylists)) {
          setPlaylists(data.publicPlaylists);
        }

      } else {
        console.log('❌ API response not successful');
      }
    } catch (error) {
      console.error('❌ Artist profile fetch error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // ✅ LOCAL FOLLOW STATUS CHECK
  const checkLocalFollowStatus = async (artistId) => {
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

  // ✅ Follow/Unfollow Handler
  const handleFollowToggle = async () => {
    if (isFollowLoading) return;
    
    try {
      setIsFollowLoading(true);
      
      // ✅ OPTIMISTIC UPDATE
      const newFollowStatus = !isFollowing;
      setIsFollowing(newFollowStatus);
      
      // ✅ UPDATE FOLLOWERS COUNT
      const currentFollowers = artistData?.followers || 0;
      let newFollowersCount = currentFollowers;
      
      if (newFollowStatus) {
        newFollowersCount = currentFollowers + 1; // Follow karne pe +1
      } else {
        newFollowersCount = Math.max(0, currentFollowers - 1); // Unfollow karne pe -1
      }
      
      // ✅ Update local storage and UI
      await saveLocalFollowStatus(artistId, newFollowStatus);
      await saveLocalFollowersCount(artistId, newFollowersCount);
      
      // ✅ Update UI immediately
      setArtistData(prev => ({
        ...prev,
        followers: newFollowersCount
      }));
      
      if (newFollowStatus) {
        // Follow artist
        console.log('👤 Following artist:', artistId);
        const response = await followArtist(artistId);
        
        if (response.success) {
          console.log('✅ Artist followed successfully');
          // ✅ Refresh data to sync with API
          await fetchArtistData();
        } else {
          // Revert on failure
          console.log('❌ Follow failed, reverting UI');
          setIsFollowing(false);
          setArtistData(prev => ({
            ...prev,
            followers: currentFollowers
          }));
          await saveLocalFollowStatus(artistId, false);
          await saveLocalFollowersCount(artistId, currentFollowers);
          Alert.alert('Error', response.message || 'Failed to follow artist');
        }
      } else {
        // Unfollow artist
        console.log('👤 Unfollowing artist:', artistId);
        const response = await unfollowArtist(artistId);
        
        if (response.success) {
          console.log('✅ Artist unfollowed successfully');
          // ✅ Refresh data to sync with API
          await fetchArtistData();
        } else {
          // Revert on failure
          console.log('❌ Unfollow failed, reverting UI');
          setIsFollowing(true);
          setArtistData(prev => ({
            ...prev,
            followers: currentFollowers
          }));
          await saveLocalFollowStatus(artistId, true);
          await saveLocalFollowersCount(artistId, currentFollowers);
          Alert.alert('Error', response.message || 'Failed to unfollow artist');
        }
      }
    } catch (error) {
      console.error('❌ Follow toggle error:', error);
      // Revert on error
      setIsFollowing(!isFollowing);
      const currentFollowers = artistData?.followers || 0;
      setArtistData(prev => ({
        ...prev,
        followers: isFollowing ? currentFollowers - 1 : currentFollowers + 1
      }));
      await saveLocalFollowStatus(artistId, !isFollowing);
      await saveLocalFollowersCount(artistId, isFollowing ? currentFollowers - 1 : currentFollowers + 1);
      Alert.alert('Error', 'Something went wrong');
    } finally {
      setIsFollowLoading(false);
    }
  };

  useEffect(() => {
    if (artistId) {
      fetchArtistData();
    }
  }, [artistId]);

  // ✅ Rest of the code remains same...
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSongPress = async (song) => {
    console.log('🎵 Song pressed:', song);
    try {
      const songInfo = await getDataWithToken(`user/song/${song.id}/info`);
      if (songInfo && songInfo.success) {
        const songData = {
          id: song.id,
          title: song.title || 'Unknown Title',
          artist: artistData?.name || 'Unknown Artist',
          audioUrl: songInfo.song?.audioFile 
            ? `${mobile_siteConfig.IMAGE_BASE_URL}${songInfo.song.audioFile}`
            : 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
          artwork: getImageUrl(song.coverImage || songInfo.song?.thumbnail)
        };
        playSong(songData);
        navigation.navigate('NowPlayingScreen', { 
          songId: song.id,
          resetToBeginning: true 
        });
      }
    } catch (error) {
      console.error('❌ Error playing song:', error);
      const fallbackSongData = {
        id: song.id,
        title: song.title || 'Unknown Title',
        artist: artistData?.name || 'Unknown Artist',
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
        artwork: getImageUrl(song.coverImage)
      };
      playSong(fallbackSongData);
      navigation.navigate('NowPlayingScreen', { 
        songId: song.id,
        resetToBeginning: true
      });
    }
  };

  const renderSongItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.songItem}
      onPress={() => handleSongPress(item)}
    >
      <Image 
        source={{ uri: getImageUrl(item.coverImage) }} 
        style={styles.songImage}
        resizeMode="cover"
        defaultSource={{ uri: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop' }}
      />
      <View style={styles.songInfo}>
        <Text style={styles.songTitle} numberOfLines={1}>
          {item.title || 'Unknown Title'}
        </Text>
        <Text style={styles.songArtist} numberOfLines={1}>
          {item.artist?.name || artistData?.name || 'Unknown Artist'}
        </Text>
        <Text style={styles.songMeta}>
          {formatTime(item.duration)} • {item.playCount || 0} plays
        </Text>
      </View>
    </TouchableOpacity>
  );

  const renderPlaylistItem = ({ item }) => (
    <TouchableOpacity style={styles.playlistItem}>
      <View style={styles.playlistImageContainer}>
        <Image 
          source={{ uri: getImageUrl(item.artistSongs?.[0]?.coverImage) }} 
          style={styles.playlistImage}
          resizeMode="cover"
          defaultSource={{ uri: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop' }}
        />
        <View style={styles.playlistOverlay}>
          <Icon name="play-arrow" size={wp(7)} color="#fff" />
        </View>
      </View>
      <Text style={styles.playlistTitle} numberOfLines={2}>
        {item.title}
      </Text>
      <Text style={styles.playlistInfo}>
        {item.totalSongs || 0} songs • {item.description || 'No description'}
      </Text>
    </TouchableOpacity>
  );

  // ✅ Loading State
  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#000" />
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#FF3B3B" />
          <Text style={styles.loadingText}>Loading artist profile...</Text>
        </View>
      </SafeAreaView>
    );
  }

  if (!artistData) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#000" />
        <View style={styles.errorContainer}>
          <Icon name="error-outline" size={wp(16)} color="#b3b3b3" />
          <Text style={styles.errorText}>Artist not found</Text>
          <TouchableOpacity 
            style={styles.retryButton}
            onPress={fetchArtistData}
          >
            <Text style={styles.retryButtonText}>Retry</Text>
          </TouchableOpacity>
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
          <Icon name="arrow-back" size={wp(6)} color="#fff" />
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle} numberOfLines={1}>
            {artistData.name}
          </Text>
          <Text style={styles.headerSubtitle}>Artist</Text>
        </View>
        <View style={styles.headerRight} />
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Artist Header */}
        <View style={styles.artistHeader}>
          <View style={styles.artistImageContainer}>
            <Image 
              source={{ uri: getImageUrl(artistData.profilePic) }}
              style={styles.artistImage}
              resizeMode="cover"
              defaultSource={{ uri: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop&crop=face' }}
            />
            {artistData.isVerified && (
              <View style={styles.verifiedBadgeLarge}>
                <Icon name="verified" size={wp(7)} color="#1DB954" />
              </View>
            )}
          </View>
          
          <View style={styles.artistInfo}>
            <Text style={styles.artistName}>{artistData.name}</Text>
            <Text style={styles.artistStageName}>{artistData.stageName}</Text>
            {artistData.bio && (
              <Text style={styles.artistBio}>{artistData.bio}</Text>
            )}
          </View>

          <View style={styles.statsSection}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>{artistData.totalSongs || 0}</Text>
              <Text style={styles.statLabel}>Songs</Text>
            </View>
            <View style={styles.statItem}>
              {/* ✅ FIXED: Use updated followers count from artistData */}
              <Text style={styles.statNumber}>{artistData.followers || 0}</Text>
              <Text style={styles.statLabel}>Followers</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>{artistData.totalPlaylists || 0}</Text>
              <Text style={styles.statLabel}>Playlists</Text>
            </View>
          </View>

          <View style={styles.actionButtons}>
            <TouchableOpacity 
              style={[
                styles.followButton,
                isFollowing ? styles.followingButton : styles.notFollowingButton
              ]}
              onPress={handleFollowToggle}
              disabled={isFollowLoading}
            >
              {isFollowLoading ? (
                <ActivityIndicator size="small" color={isFollowing ? "#FF3B3B" : "#fff"} />
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

        {/* Rest of the code remains same... */}
        {songs.length > 0 && (
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Popular Songs</Text>
              <Text style={styles.sectionCount}>{songs.length} songs</Text>
            </View>
            <FlatList
              data={songs}
              renderItem={renderSongItem}
              keyExtractor={item => `song-${item.id}`}
              scrollEnabled={false}
            />
          </View>
        )}

        {playlists.length > 0 && (
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Public Playlists</Text>
              <Text style={styles.sectionCount}>{playlists.length} playlists</Text>
            </View>
            <FlatList
              data={playlists}
              renderItem={renderPlaylistItem}
              keyExtractor={item => `playlist-${item.id}`}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.playlistsList}
            />
          </View>
        )}

        {songs.length === 0 && playlists.length === 0 && (
          <View style={styles.noContent}>
            <Icon name="music-off" size={wp(16)} color="#b3b3b3" />
            <Text style={styles.noContentText}>No content available</Text>
            <Text style={styles.noContentSubtext}>
              This artist hasn't uploaded any songs or playlists yet.
            </Text>
          </View>
        )}

        <View style={styles.bottomPadding} />
      </ScrollView>
    </SafeAreaView>
  );
};

// ✅ STYLES (SAME AS BEFORE)
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  songArtist: { fontSize: wp(3.5), color: '#b3b3b3', marginBottom: hp(0.5) },
  loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' },
  loadingText: { color: '#fff', marginTop: hp(1), fontSize: wp(4) },
  errorContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000', paddingHorizontal: wp(5) },
  errorText: { color: '#fff', fontSize: wp(4.5), fontWeight: 'bold', marginTop: hp(2), marginBottom: hp(1) },
  retryButton: { backgroundColor: '#FF3B3B', paddingHorizontal: wp(6), paddingVertical: hp(1.5), borderRadius: wp(6), marginTop: hp(2) },
  retryButtonText: { color: '#fff', fontSize: wp(4), fontWeight: 'bold' },
  header: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: wp(4), paddingVertical: hp(1.5), borderBottomWidth: 1, borderBottomColor: '#282828' },
  backButton: { padding: wp(1) },
  headerTitleContainer: { flex: 1, alignItems: 'center' },
  headerTitle: { fontSize: wp(4.5), fontWeight: 'bold', color: '#fff' },
  headerSubtitle: { fontSize: wp(3), color: '#b3b3b3' },
  headerRight: { flexDirection: 'row', alignItems: 'center' },
  scrollView: { flex: 1 },
  artistHeader: { paddingHorizontal: wp(6), paddingVertical: hp(3), alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#282828' },
  artistImageContainer: { marginBottom: hp(2.5), position: 'relative' },
  artistImage: { width: wp(35), height: wp(35), borderRadius: wp(17.5) },
  verifiedBadgeLarge: { position: 'absolute', bottom: wp(1), right: wp(1), backgroundColor: '#000', borderRadius: wp(4), padding: wp(1) },
  artistInfo: { alignItems: 'center', marginBottom: hp(2.5) },
  artistName: { fontSize: wp(7), fontWeight: 'bold', color: '#fff', marginBottom: hp(0.5), textAlign: 'center' },
  artistStageName: { fontSize: wp(4), color: '#b3b3b3', marginBottom: hp(1), fontStyle: 'italic' },
  artistBio: { fontSize: wp(3.5), color: '#b3b3b3', textAlign: 'center', lineHeight: hp(2.5), maxWidth: '80%' },
  statsSection: { flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginBottom: hp(2.5) },
  statItem: { alignItems: 'center', flex: 1 },
  statNumber: { fontSize: wp(4.5), fontWeight: 'bold', color: '#fff', marginBottom: hp(0.5) },
  statLabel: { fontSize: wp(3), color: '#b3b3b3', textAlign: 'center' },
  actionButtons: { flexDirection: 'row', justifyContent: 'center', width: '100%', gap: wp(3) },
  followButton: { paddingHorizontal: wp(8), paddingVertical: hp(1.5), borderRadius: wp(6), minWidth: wp(25), alignItems: 'center', justifyContent: 'center' },
  notFollowingButton: { backgroundColor: '#FF3B3B' },
  followingButton: { backgroundColor: 'transparent', borderWidth: 1, borderColor: '#FF3B3B' },
  followButtonText: { fontSize: wp(3.5), fontWeight: 'bold' },
  notFollowingButtonText: { color: '#fff' },
  followingButtonText: { color: '#FF3B3B' },
  section: { paddingHorizontal: wp(5), paddingVertical: hp(2.5), borderBottomWidth: 1, borderBottomColor: '#282828' },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: hp(2) },
  sectionTitle: { fontSize: wp(5.5), fontWeight: 'bold', color: '#fff' },
  sectionCount: { fontSize: wp(3.5), color: '#b3b3b3' },
  songItem: { flexDirection: 'row', alignItems: 'center', marginBottom: hp(2), backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: wp(2), padding: wp(3) },
  songImage: { width: wp(15), height: wp(15), borderRadius: wp(1), marginRight: wp(3) },
  songInfo: { flex: 1 },
  songTitle: { fontSize: wp(4), fontWeight: '600', color: '#fff', marginBottom: hp(0.5) },
  songMeta: { fontSize: wp(3), color: '#666' },
  playlistsList: { paddingRight: wp(4) },
  playlistItem: { width: wp(40), marginRight: wp(4) },
  playlistImageContainer: { width: wp(40), height: wp(40), borderRadius: wp(2), marginBottom: hp(1.5), position: 'relative', overflow: 'hidden' },
  playlistImage: { width: '100%', height: '100%' },
  playlistOverlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center', opacity: 0 },
  playlistTitle: { fontSize: wp(3.5), fontWeight: '600', color: '#fff', marginBottom: hp(0.5) },
  playlistInfo: { fontSize: wp(3), color: '#b3b3b3' },
  noContent: { alignItems: 'center', justifyContent: 'center', paddingVertical: hp(8), paddingHorizontal: wp(5) },
  noContentText: { fontSize: wp(4.5), color: '#fff', fontWeight: 'bold', marginTop: hp(2), marginBottom: hp(1), textAlign: 'center' },
  noContentSubtext: { fontSize: wp(3.5), color: '#b3b3b3', textAlign: 'center', lineHeight: hp(2.5) },
  bottomPadding: { height: hp(3) },
});

export default ArtistProfileScreen;