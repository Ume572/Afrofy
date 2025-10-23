

import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Alert,
  ActivityIndicator,
  Image,
  Dimensions,
  RefreshControl,
  Modal
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { getDataWithToken } from '../Services/mobile-api';
import { mobile_siteConfig } from '../Services/mobile-siteConfig';
import { followArtist } from '../Services/mobile-api';
import { wp, hp } from "../assets/Global.Css";

const { width } = Dimensions.get('window');

const SingerSelectionScreen = () => {
  const navigation = useNavigation();

  const [artists, setArtists] = useState([]);
  const [filteredArtists, setFilteredArtists] = useState([]);
  const [selectedArtists, setSelectedArtists] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [addingFavorites, setAddingFavorites] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  console.log("SelectedArtist:::", selectedArtists)

  // ✅ FIXED: Better Image URL helper function
  const getImageUrl = (imagePath) => {
    console.log('🖼️ Original image path:', imagePath);
    
    if (!imagePath || imagePath === 'null' || imagePath === 'undefined') {
      console.log('🖼️ No image path, using default');
      return 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop&crop=face';
    }
    
    // ✅ Check if already a full URL
    if (imagePath.startsWith('http')) {
      console.log('🖼️ Already full URL:', imagePath);
      return imagePath;
    }
    
    // ✅ Handle relative paths starting with /
    if (imagePath.startsWith('/')) {
      const fullUrl = `${mobile_siteConfig.IMAGE_BASE_URL}${imagePath}`;
      console.log('🖼️ Converted relative to full URL:', fullUrl);
      return fullUrl;
    }
    
    // ✅ Handle case where path might already include base URL but missing protocol
    if (imagePath.startsWith('www.') || imagePath.includes('localhost')) {
      const fullUrl = imagePath.startsWith('www.') ? `https://${imagePath}` : `http://${imagePath}`;
      console.log('🖼️ Added protocol to URL:', fullUrl);
      return fullUrl;
    }
    
    // ✅ Agar koi aur format hai to directly base URL ke saath combine karo
    const fullUrl = `${mobile_siteConfig.IMAGE_BASE_URL}/${imagePath}`;
    console.log('🖼️ Using combined URL:', fullUrl);
    return fullUrl;
  };

  // ✅ FIXED: Fetch artists with proper image field checking
  const fetchArtists = async () => {
    setLoading(true);
    try {
      const response = await getDataWithToken('user/artists?page=1&limit=20');
      console.log('🎵 Artists API Response:', JSON.stringify(response, null, 2));

      let artistsData = [];
      
      // ✅ Check different response structures
      if (response.artists && Array.isArray(response.artists)) {
        artistsData = response.artists;
      } else if (response.data && Array.isArray(response.data)) {
        artistsData = response.data;
      } else if (Array.isArray(response)) {
        artistsData = response;
      } else if (response.success && response.data?.artists) {
        artistsData = response.data.artists;
      } else if (response.success && response.data) {
        artistsData = response.data;
      }
      
      console.log('🎵 Extracted Artists Data:', artistsData);

      if (artistsData && artistsData.length > 0) {
        // ✅ FIXED: Process artists with CORRECT image field priority
        const processedArtists = artistsData.map(artist => {
          // ✅ CORRECT PRIORITY: profilePic pehle check karo (API response ke hisaab se)
          const imageFields = [
            artist.profilePic,  // ✅ Ye primary field hai API response mein
            artist.image,       // ✅ Secondary field
            artist.profileImage,
            artist.avatar,
            artist.thumbnail,
            artist.picture,
            artist.photo
          ];
          
          // ✅ Find first valid image field
          let artistImage = null;
          for (const field of imageFields) {
            if (field && field !== 'null' && field !== 'undefined') {
              artistImage = field;
              break;
            }
          }
          
          // ✅ Get final image URL
          const finalImageUrl = getImageUrl(artistImage);
          
          console.log(`🖼️ Artist: ${artist.name || 'Unknown'}, Raw Image: ${artistImage}, Final URL: ${finalImageUrl}`);
          
          return {
            ...artist,
            image: finalImageUrl,
            name: artist.name || artist.stageName || artist.username || 'Unknown Artist',
            id: artist.id || artist._id || Math.random().toString()
          };
        });
        
        setArtists(processedArtists);
        setFilteredArtists(processedArtists);
        console.log('✅ Processed artists with dynamic images');
      } else {
        console.log('❌ No artists found in response, using fallback');
        const fallbackArtists = getDefaultArtists();
        setArtists(fallbackArtists);
        setFilteredArtists(fallbackArtists);
      }
    } catch (error) {
      console.log('❌ Artist Fetch Error:', error);
      const fallbackArtists = getDefaultArtists();
      setArtists(fallbackArtists);
      setFilteredArtists(fallbackArtists);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Default artists for fallback
  const getDefaultArtists = () => [
    { 
      id: 1, 
      name: 'DJ John',
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop&crop=face'
    },
    { 
      id: 2, 
      name: 'Neha Kakkar',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face'
    },
    { 
      id: 3, 
      name: 'Arijit Singh',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face'
    },
    { 
      id: 4, 
      name: 'Taylor Swift', 
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face'
    },
    { 
      id: 5, 
      name: 'The Weeknd',
      image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=200&h=200&fit=crop&crop=face'
    }
  ];

  useEffect(() => {
    fetchArtists();
  }, []);

  // Filter artists based on search query
  useEffect(() => {
    if (searchQuery) {
      const filtered = artists.filter((artist) =>
        artist.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredArtists(filtered);
    } else {
      setFilteredArtists(artists);
    }
  }, [searchQuery, artists]);

  const toggleArtistSelection = (artist) => {
    if (selectedArtists.find((a) => a.id === artist.id)) {
      setSelectedArtists(selectedArtists.filter((a) => a.id !== artist.id));
    } else {
      setSelectedArtists([...selectedArtists, artist]);
    }
  };

  // ✅ UPDATED: handleDone function with PROFESSIONAL MODAL
  // const handleDone = async () => {
  //   if (selectedArtists.length >= 1) {
  //     try {
  //       setAddingFavorites(true);
        
  //       console.log('🎵 Starting to add favorite artists:', selectedArtists);
        
  //       // ✅ Ek ek karke artists ko favorite mein add karo
  //       let successCount = 0;
  //       let failedCount = 0;
        
  //       for (const artist of selectedArtists) {
  //         try {
  //           console.log(`🎵 Adding artist to favorites:`, artist);
            
  //           // ✅ FOLLOW ARTIST API CALL
  //           const response = await followArtist(artist.id);
            
  //           if (response.success) {
  //             successCount++;
  //             console.log(`✅ Successfully added to favorites: ${artist.name}`);
  //           } else {
  //             failedCount++;
  //             console.log(`❌ Failed to add: ${artist.name}`, response.message);
  //           }
  //         } catch (error) {
  //           failedCount++;
  //           console.log(`❌ Error adding: ${artist.name}`, error);
  //         }
  //       }
        
  //       // ✅ Professional success message
  //       let message = `You selected ${selectedArtists.length} artists`;
  //       if (successCount > 0) {
  //         message += `\n${successCount} added to favorites`;
  //       }
  //       if (failedCount > 0) {
  //         message += `\n${failedCount} failed to add`;
  //       }
        
  //       setSuccessMessage(message);
  //       setShowSuccessModal(true);
        
  //     } catch (error) {
  //       console.log('❌ Error in selection process:', error);
        
  //       // ✅ Fallback modal
  //       setSuccessMessage(`You selected ${selectedArtists.length} artists`);
  //       setShowSuccessModal(true);
  //     } finally {
  //       setAddingFavorites(false);
  //     }
  //   } else {
  //     // ✅ Professional alert for minimum selection
  //     Alert.alert(
  //       'Selection Required',
  //       'Please select at least 1 artist before continuing!',
  //       [{ text: 'OK', style: 'default' }],
  //       { cancelable: true }
  //     );
  //   }
  // };
// ✅ SingerSelectionScreen.tsx - handleDone function mein yeh add karo
// const handleDone = async () => {
//   if (selectedArtists.length >= 1) {
//     try {
//       setAddingFavorites(true);
      
//       console.log('🎵 Starting to add favorite artists:', selectedArtists);
      
//       // ✅ CRITICAL FIX: Pehle LOCAL STORAGE mein follow status save karo
//       const followStatusMap = {};
//       selectedArtists.forEach(artist => {
//         followStatusMap[artist.id] = true;
//       });
      
//       // ✅ Local storage mein save karo
//       await AsyncStorage.setItem('artist_follow_status', JSON.stringify(followStatusMap));
//       console.log('💾 Local follow status saved for artists:', Object.keys(followStatusMap));
      
//       // ✅ Phir API calls karo
//       let successCount = 0;
//       let failedCount = 0;
      
//       for (const artist of selectedArtists) {
//         try {
//           console.log(`🎵 Adding artist to favorites:`, artist);
          
//           const response = await followArtist(artist.id);
          
//           if (response.success) {
//             successCount++;
//             console.log(`✅ Successfully added to favorites: ${artist.name}`);
//           } else {
//             failedCount++;
//             console.log(`❌ Failed to add: ${artist.name}`, response.message);
//           }
//         } catch (error) {
//           failedCount++;
//           console.log(`❌ Error adding: ${artist.name}`, error);
//         }
//       }
      
//       // ✅ Success message
//       let message = `You selected ${selectedArtists.length} artists`;
//       if (successCount > 0) {
//         message += `\n${successCount} added to favorites`;
//       }
//       if (failedCount > 0) {
//         message += `\n${failedCount} failed to add`;
//       }
      
//       setSuccessMessage(message);
//       setShowSuccessModal(true);
      
//     } catch (error) {
//       console.log('❌ Error in selection process:', error);
//       setSuccessMessage(`You selected ${selectedArtists.length} artists`);
//       setShowSuccessModal(true);
//     } finally {
//       setAddingFavorites(false);
//     }
//   } else {
//     Alert.alert(
//       'Selection Required',
//       'Please select at least 1 artist before continuing!',
//       [{ text: 'OK', style: 'default' }],
//       { cancelable: true }
//     );
//   }
// };
// SingerSelectionScreen.tsx - handleDone function mein yeh add karo
const handleDone = async () => {
  if (selectedArtists.length >= 1) {
    try {
      setAddingFavorites(true);
      
      console.log('🎵 Starting to add favorite artists:', selectedArtists);
      
      // ✅ CRITICAL FIX: Pehle LOCAL STORAGE mein follow status AUR followers count save karo
      const followStatusMap = {};
      const followersCountMap = {};
      
      selectedArtists.forEach(artist => {
        followStatusMap[artist.id] = true;
        // ✅ Current followers count + 1 karo (kyunki tum follow kar rahe ho)
        followersCountMap[artist.id] = (artist.followers || 0) + 1;
      });
      
      // ✅ Local storage mein save karo
      await AsyncStorage.setItem('artist_follow_status', JSON.stringify(followStatusMap));
      await AsyncStorage.setItem('artist_followers_count', JSON.stringify(followersCountMap));
      
      console.log('💾 Local follow status saved for artists:', Object.keys(followStatusMap));
      console.log('💾 Local followers count saved:', followersCountMap);
      
      // ✅ Phir API calls karo
      let successCount = 0;
      let failedCount = 0;
      
      for (const artist of selectedArtists) {
        try {
          console.log(`🎵 Adding artist to favorites:`, artist);
          
          const response = await followArtist(artist.id);
          
          if (response.success) {
            successCount++;
            console.log(`✅ Successfully added to favorites: ${artist.name}`);
          } else {
            failedCount++;
            console.log(`❌ Failed to add: ${artist.name}`, response.message);
          }
        } catch (error) {
          failedCount++;
          console.log(`❌ Error adding: ${artist.name}`, error);
        }
      }
      
      // ✅ Success message
      let message = `You selected ${selectedArtists.length} artists`;
      if (successCount > 0) {
        message += `\n${successCount} added to favorites`;
      }
      if (failedCount > 0) {
        message += `\n${failedCount} failed to add`;
      }
      
      setSuccessMessage(message);
      setShowSuccessModal(true);
      
    } catch (error) {
      console.log('❌ Error in selection process:', error);
      setSuccessMessage(`You selected ${selectedArtists.length} artists`);
      setShowSuccessModal(true);
    } finally {
      setAddingFavorites(false);
    }
  } else {
    Alert.alert(
      'Selection Required',
      'Please select at least 1 artist before continuing!',
      [{ text: 'OK', style: 'default' }],
      { cancelable: true }
    );
  }
};
  // ✅ PROFESSIONAL MODAL COMPONENT
  const SuccessModal = () => (
    <Modal
      visible={showSuccessModal}
      transparent={true}
      animationType="fade"
      onRequestClose={() => setShowSuccessModal(false)}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          {/* Success Icon */}
          <View style={styles.successIcon}>
            <Icon name="check-circle" size={wp(15)} color="#FF3B3B" />
          </View>
          
          {/* Title */}
          <Text style={styles.modalTitle}>Selection Complete</Text>
          
          {/* Message */}
          <Text style={styles.modalMessage}>{successMessage}</Text>
          
          {/* Continue Button */}
          <TouchableOpacity
            style={styles.modalButton}
            onPress={() => {
              setShowSuccessModal(false);
              navigation.reset({
                index: 0,
                routes: [{ name: 'UserBottomTab' }],
              });
            }}
          >
            <Text style={styles.modalButtonText}>Continue to App</Text>
            <Icon name="arrow-forward" size={wp(4)} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );

  // ✅ IMPROVED: Better renderArtistItem with image error handling
  const renderArtistItem = ({ item }) => {
    const isSelected = selectedArtists.find((a) => a.id === item.id);
    
    return (
      <TouchableOpacity
        style={[styles.artistCard, isSelected && styles.artistCardSelected]}
        onPress={() => toggleArtistSelection(item)}
      >
        <View style={styles.artistImageContainer}>
          <Image
            source={{ 
              uri: item.image
            }}
            style={styles.artistImage}
            resizeMode="cover"
            onError={(e) => {
              console.log('❌ Image load error for artist:', item.name, 'URL:', item.image);
              // Fallback to default image
              e.currentTarget.setNativeProps({
                source: { 
                  uri: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop&crop=face' 
                }
              });
            }}
            onLoad={() => {
              console.log('✅ Image loaded successfully:', item.image);
            }}
          />
          {isSelected && (
            <View style={styles.selectedOverlay}>
              <Icon name="check-circle" size={wp(6)} color="#FF3B3B" />
            </View>
          )}
        </View>
        <Text style={[styles.artistName, isSelected && styles.artistNameSelected]} numberOfLines={1}>
          {item.name}
        </Text>
        <Text style={styles.artistType}>Artist</Text>
      </TouchableOpacity>
    );
  };

  // ✅ Pull to Refresh
  const onRefresh = async () => {
    setRefreshing(true);
    await fetchArtists();
    setRefreshing(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Pick Artists You Like</Text>
        <Text style={styles.subtitle}>Your experience will improve the more you listen</Text>

        {/* Progress Indicator */}
        <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: `${(selectedArtists.length / 5) * 100}%` }]} />
          </View>
          <Text style={styles.progressText}>
            {selectedArtists.length} selected {selectedArtists.length < 5 ? `(${5 - selectedArtists.length} more needed)` : ''}
          </Text>
        </View>
      </View>

      {/* Search Section */}
      <View style={styles.searchSection}>
        <View style={styles.searchContainer}>
          <Icon name="search" size={wp(6)} color="#000" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search artists..."
            placeholderTextColor="#000"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          {searchQuery ? (
            <TouchableOpacity onPress={() => setSearchQuery('')}>
              <Icon name="close" size={wp(5)} color="#b3b3b3" />
            </TouchableOpacity>
          ) : null}
        </View>

        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#FF3B3B" />
            <Text style={styles.loadingText}>Loading artists...</Text>
          </View>
        ) : (
          <FlatList
            data={filteredArtists}
            renderItem={renderArtistItem}
            keyExtractor={(item) => item.id.toString()}
            numColumns={3}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.artistsContainer}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
                tintColor="#FF3B3B"
                colors={['#FF3B3B']}
              />
            }
            ListEmptyComponent={
              <View style={styles.emptyContainer}>
                <Icon name="people-outline" size={wp(16)} color="#b3b3b3" />
                <Text style={styles.emptyText}>No artists found</Text>
                <Text style={styles.emptySubtext}>
                  {searchQuery ? 'Try a different search' : 'Unable to load artists'}
                </Text>
              </View>
            }
          />
        )}
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={[
            styles.doneButton, 
            selectedArtists.length >= 1 && styles.doneButtonActive,
            addingFavorites && styles.doneButtonDisabled
          ]}
          onPress={handleDone}
          disabled={selectedArtists.length < 1 || addingFavorites}
        >
          {addingFavorites ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <>
              <Text style={styles.doneButtonText}>Continue</Text>
              <Icon name="arrow-forward" size={wp(5)} color="#fff" />
            </>
          )}
        </TouchableOpacity>

        {selectedArtists.length < 1 && (
          <Text style={styles.counter}>
            Select at least 1 artist to continue
          </Text>
        )}
        
        {selectedArtists.length >= 1 && selectedArtists.length < 5 && (
          <Text style={styles.counter}>
            You can select up to 5 artists
          </Text>
        )}

        {addingFavorites && (
          <Text style={styles.addingText}>
            Adding to favorites...
          </Text>
        )}
      </View>

      {/* Professional Success Modal */}
      <SuccessModal />
    </SafeAreaView>
  );
};

// ✅ UPDATED RESPONSIVE STYLES
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  header: {
    paddingHorizontal: wp(5),
    paddingVertical: hp(2),
    borderBottomWidth: 1,
    borderBottomColor: '#282828',
    alignItems: 'center',
  },
  title: {
    fontSize: wp(7),
    fontWeight: 'bold',
    color: 'white',
    marginBottom: hp(1),
    textAlign: 'center',
  },
  subtitle: {
    fontSize: wp(4),
    color: '#b3b3b3',
    textAlign: 'center',
    marginBottom: hp(2),
    lineHeight: hp(2.5),
  },
  progressContainer: {
    width: '100%',
    alignItems: 'center',
  },
  progressBar: {
    width: '80%',
    height: hp(0.5),
    backgroundColor: '#282828',
    borderRadius: wp(1),
    marginBottom: hp(1),
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#FF3B3B',
    borderRadius: wp(1),
  },
  progressText: {
    fontSize: wp(3.5),
    color: '#b3b3b3',
    fontWeight: '600',
  },
  searchSection: {
    flex: 1,
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: wp(8),
    marginBottom: hp(2),
    paddingHorizontal: wp(4),
    height: hp(7),
  },
  searchIcon: {
    marginRight: wp(3),
  },
  searchInput: {
    flex: 1,
    color: '#000',
    fontSize: wp(4),
    paddingVertical: hp(1),
  },
  artistsContainer: {
    paddingBottom: hp(3),
  },
  artistCard: {
    width: (wp(100) - wp(24)) / 3,
    alignItems: 'center',
    marginBottom: hp(3),
    marginHorizontal: wp(2.8),
  },
  artistCardSelected: {
    opacity: 0.9,
  },
  artistImageContainer: {
    width: wp(22),
    height: wp(22),
    borderRadius: wp(11),
    marginBottom: hp(1),
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  artistImage: {
    width: '100%',
    height: '100%',
    borderRadius: wp(11),
  },
  selectedOverlay: {
    position: 'absolute',
    bottom: wp(1),
    right: wp(1),
    backgroundColor: '#000',
    borderRadius: wp(3),
    padding: wp(0.5),
  },
  artistName: {
    fontSize: wp(3.5),
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
    marginBottom: hp(0.5),
  },
  artistNameSelected: {
    color: '#FF3B3B',
  },
  artistType: {
    fontSize: wp(3),
    color: '#b3b3b3',
    textAlign: 'center',
  },
  footer: {
    paddingHorizontal: wp(5),
    paddingVertical: hp(3),
    borderTopWidth: 1,
    borderTopColor: '#282828',
    alignItems: 'center',
  },
  doneButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#535353',
    borderRadius: wp(6),
    paddingVertical: hp(2),
    paddingHorizontal: wp(8),
    marginBottom: hp(1.5),
    width: '100%',
    justifyContent: 'center',
  },
  doneButtonActive: {
    backgroundColor: '#FF3B3B',
  },
  doneButtonDisabled: {
    backgroundColor: '#333',
    opacity: 0.7,
  },
  doneButtonText: {
    color: 'white',
    fontSize: wp(4.5),
    fontWeight: 'bold',
    marginRight: wp(2),
  },
  counter: {
    color: '#b3b3b3',
    fontSize: wp(3.5),
    textAlign: 'center',
  },
  addingText: {
    color: '#FF3B3B',
    fontSize: wp(3),
    textAlign: 'center',
    marginTop: hp(1),
  },
  loadingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: hp(5),
  },
  loadingText: {
    color: '#b3b3b3',
    marginTop: hp(1.5),
    fontSize: wp(4),
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: hp(8),
  },
  emptyText: {
    color: '#fff',
    fontSize: wp(4.5),
    fontWeight: '600',
    marginTop: hp(2),
    marginBottom: hp(1),
  },
  emptySubtext: {
    color: '#b3b3b3',
    fontSize: wp(3.8),
    textAlign: 'center',
  },
  // ✅ PROFESSIONAL MODAL STYLES
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: wp(5),
  },
  modalContainer: {
    backgroundColor: '#1E1E1E',
    borderRadius: wp(5),
    paddingHorizontal: wp(6),
    paddingVertical: hp(4),
    alignItems: 'center',
    width: '100%',
    maxWidth: wp(85),
    borderWidth: 1,
    borderColor: '#333',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 10,
  },
  successIcon: {
    marginBottom: hp(2),
  },
  modalTitle: {
    fontSize: wp(5.5),
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: hp(1.5),
  },
  modalMessage: {
    fontSize: wp(4),
    color: '#b3b3b3',
    textAlign: 'center',
    marginBottom: hp(3),
    lineHeight: hp(2.8),
  },
  modalButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FF3B3B',
    borderRadius: wp(6),
    paddingVertical: hp(2),
    paddingHorizontal: wp(8),
    width: '100%',
    justifyContent: 'center',
    shadowColor: '#FF3B3B',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  modalButtonText: {
    color: 'white',
    fontSize: wp(4.5),
    fontWeight: 'bold',
    marginRight: wp(2),
  },
});

export default SingerSelectionScreen;

