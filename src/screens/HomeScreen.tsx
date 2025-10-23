

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
  const { currentSong, isPlaying, togglePlayPause, playSong,stopSong } = useAudio();
  
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

  // useEffect(() => {
  //   if (isFocused) {
  //     fetchUserProfile();
  //   }
  // }, [isFocused]);
  
  // Home API Data States
 
  useEffect(() => {
  if (isFocused && currentSong) {
      console.log('🏠 Home focused, current song:', currentSong.title);
      // Audio context already has the current song state
      // Mini player automatically show hoga
    }
  }, [isFocused, currentSong]);


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
          {/* {currentSong && (
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
            </TouchableOpacity> */}
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