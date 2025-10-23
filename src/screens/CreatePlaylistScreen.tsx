// // screens/CreatePlaylistScreen.js
// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   SafeAreaView,
//   StatusBar,
//   ScrollView,
//   Alert,
//   KeyboardAvoidingView,
//   Platform,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { createPlaylist } from '../Services/mobile-api';

// const CreatePlaylistScreen = ({ navigation, route }) => {
//   const [playlistName, setPlaylistName] = useState('');
//   const [description, setDescription] = useState('');
//   const [isPublic, setIsPublic] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleCreatePlaylist = async () => {
//     if (!playlistName.trim()) {
//       Alert.alert('Error', 'Please enter playlist name');
//       return;
//     }

//     setIsLoading(true);
//     try {
//       const response = await createPlaylist(
//         playlistName.trim(),
//         description.trim(),
//         isPublic
//       );

//       if (response.success) {
//         Alert.alert(
//           'Success', 
//           'Playlist created successfully!',
//           [
//             {
//               text: 'OK',
//               onPress: () => navigation.goBack()
//             }
//           ]
//         );
//       } else {
//         Alert.alert('Error', response.message || 'Failed to create playlist');
//       }
//     } catch (error) {
//       console.error('Create playlist error:', error);
//       Alert.alert('Error', error.message || 'Something went wrong');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="light-content" backgroundColor="#000" />
      
//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//           <Icon name="chevron-back" size={24} color="#fff" />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Create Playlist</Text>
//         <View style={styles.placeholder} />
//       </View>

//       <KeyboardAvoidingView 
//         style={styles.content}
//         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//       >
//         <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          
//           {/* Playlist Icon */}
//           <View style={styles.playlistIconContainer}>
//             <View style={styles.playlistIcon}>
//               <Icon name="musical-notes" size={40} color="#fff" />
//             </View>
//           </View>

//           {/* Playlist Name Input */}
//           <View style={styles.inputContainer}>
//             <Text style={styles.inputLabel}>Playlist Name</Text>
//             <TextInput
//               style={styles.textInput}
//               placeholder="Enter playlist name"
//               placeholderTextColor="#666"
//               value={playlistName}
//               onChangeText={setPlaylistName}
//               maxLength={100}
//               autoFocus
//             />
//             <Text style={styles.charCount}>{playlistName.length}/100</Text>
//           </View>

//           {/* Description Input */}
//           <View style={styles.inputContainer}>
//             <Text style={styles.inputLabel}>Description (Optional)</Text>
//             <TextInput
//               style={[styles.textInput, styles.textArea]}
//               placeholder="Add description"
//               placeholderTextColor="#666"
//               value={description}
//               onChangeText={setDescription}
//               multiline
//               numberOfLines={3}
//               maxLength={200}
//             />
//             <Text style={styles.charCount}>{description.length}/200</Text>
//           </View>

//           {/* Privacy Setting */}
//           <View style={styles.privacyContainer}>
//             <Text style={styles.inputLabel}>Privacy</Text>
//             <TouchableOpacity 
//               style={styles.privacyOption}
//               onPress={() => setIsPublic(false)}
//             >
//               <View style={styles.radioContainer}>
//                 <View style={[styles.radio, !isPublic && styles.radioSelected]} />
//               </View>
//               <View style={styles.privacyText}>
//                 <Text style={styles.privacyTitle}>Private</Text>
//                 <Text style={styles.privacySubtitle}>Only you can see this playlist</Text>
//               </View>
//             </TouchableOpacity>

//             <TouchableOpacity 
//               style={styles.privacyOption}
//               onPress={() => setIsPublic(true)}
//             >
//               <View style={styles.radioContainer}>
//                 <View style={[styles.radio, isPublic && styles.radioSelected]} />
//               </View>
//               <View style={styles.privacyText}>
//                 <Text style={styles.privacyTitle}>Public</Text>
//                 <Text style={styles.privacySubtitle}>Anyone can see this playlist</Text>
//               </View>
//             </TouchableOpacity>
//           </View>

//           {/* Create Button */}
//           <TouchableOpacity
//             style={[
//               styles.createButton,
//               (!playlistName.trim() || isLoading) && styles.createButtonDisabled
//             ]}
//             onPress={handleCreatePlaylist}
//             disabled={!playlistName.trim() || isLoading}
//           >
//             {isLoading ? (
//               <View style={styles.loadingContainer}>
//                 <Icon name="refresh" size={20} color="#fff" style={styles.loadingSpinner} />
//                 <Text style={styles.createButtonText}>Creating...</Text>
//               </View>
//             ) : (
//               <Text style={styles.createButtonText}>Create Playlist</Text>
//             )}
//           </TouchableOpacity>

//           <View style={styles.bottomSpacer} />
//         </ScrollView>
//       </KeyboardAvoidingView>
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
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingHorizontal: 20,
//     paddingVertical: 12,
//     borderBottomWidth: 1,
//     borderBottomColor: '#282828',
//   },
//   backButton: {
//     padding: 4,
//   },
//   headerTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#fff',
//   },
//   placeholder: {
//     width: 32,
//   },
//   content: {
//     flex: 1,
//   },
//   scrollView: {
//     flex: 1,
//     paddingHorizontal: 20,
//   },
//   playlistIconContainer: {
//     alignItems: 'center',
//     marginVertical: 30,
//   },
//   playlistIcon: {
//     width: 120,
//     height: 120,
//     borderRadius: 12,
//     backgroundColor: 'rgba(255,255,255,0.1)',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderWidth: 2,
//     borderColor: '#333',
//     borderStyle: 'dashed',
//   },
//   inputContainer: {
//     marginBottom: 24,
//   },
//   inputLabel: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#fff',
//     marginBottom: 8,
//   },
//   textInput: {
//     backgroundColor: 'rgba(255,255,255,0.05)',
//     borderWidth: 1,
//     borderColor: '#333',
//     borderRadius: 8,
//     padding: 16,
//     color: '#fff',
//     fontSize: 16,
//   },
//   textArea: {
//     height: 100,
//     textAlignVertical: 'top',
//   },
//   charCount: {
//     fontSize: 12,
//     color: '#666',
//     textAlign: 'right',
//     marginTop: 4,
//   },
//   privacyContainer: {
//     marginBottom: 30,
//   },
//   privacyOption: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#282828',
//   },
//   radioContainer: {
//     width: 24,
//     height: 24,
//     borderRadius: 12,
//     borderWidth: 2,
//     borderColor: '#fff',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 12,
//   },
//   radio: {
//     width: 12,
//     height: 12,
//     borderRadius: 6,
//     backgroundColor: 'transparent',
//   },
//   radioSelected: {
//     backgroundColor: '#1DB954',
//   },
//   privacyText: {
//     flex: 1,
//   },
//   privacyTitle: {
//     fontSize: 16,
//     color: '#fff',
//     marginBottom: 2,
//   },
//   privacySubtitle: {
//     fontSize: 14,
//     color: '#b3b3b3',
//   },
//   createButton: {
//     backgroundColor: '#1DB954',
//     paddingVertical: 16,
//     borderRadius: 30,
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   createButtonDisabled: {
//     backgroundColor: '#1ed760',
//     opacity: 0.6,
//   },
//   createButtonText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#fff',
//   },
//   loadingContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   loadingSpinner: {
//     marginRight: 8,
//   },
//   bottomSpacer: {
//     height: 30,
//   },
// });

// export default CreatePlaylistScreen;

// screens/CreatePlaylistScreen.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
  Platform,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createPlaylist } from '../Services/mobile-api';

const CreatePlaylistScreen = ({ navigation, route }) => {
  const [playlistName, setPlaylistName] = useState('');
  const [description, setDescription] = useState('');
  const [isPublic, setIsPublic] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  // Animation values
  const fadeAnim = useState(new Animated.Value(0))[0];
  const slideAnim = useState(new Animated.Value(50))[0];

  // Get callback from params
  const { onPlaylistCreated } = route.params || {};

  // Start animations
  React.useEffect(() => {
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
  }, []);

  const handleCreatePlaylist = async () => {
    if (!playlistName.trim()) {
      Alert.alert('Error', 'Please enter playlist name');
      return;
    }

    if (playlistName.trim().length < 2) {
      Alert.alert('Error', 'Playlist name must be at least 2 characters long');
      return;
    }

    setIsLoading(true);
    try {
      console.log('🔄 Creating playlist...', {
        title: playlistName.trim(),
        description: description.trim(),
        isPublic
      });

      const response = await createPlaylist(
        playlistName.trim(),
        description.trim(),
        isPublic
      );

      console.log('📦 Create playlist response:', response);

      if (response.success) {
        Alert.alert(
          'Success 🎉', 
          'Playlist created successfully!',
          [
            {
              text: 'OK',
              onPress: () => {
                // Callback to refresh playlists
                if (onPlaylistCreated) {
                  onPlaylistCreated();
                }
                navigation.goBack();
              }
            }
          ]
        );
      } else {
        Alert.alert('Error', response.message || 'Failed to create playlist');
      }
    } catch (error) {
      console.error('Create playlist error:', error);
      Alert.alert('Error', error.message || 'Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

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
        <Text style={styles.headerTitle}>Create Playlist</Text>
        <View style={styles.placeholder} />
      </Animated.View>

      <KeyboardAvoidingView 
        style={styles.content}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          
          {/* Playlist Icon */}
          <Animated.View 
            style={[
              styles.playlistIconContainer,
              {
                opacity: fadeAnim,
                transform: [{ translateY: slideAnim }]
              }
            ]}
          >
            <View style={styles.playlistIcon}>
              <Icon name="musical-notes" size={40} color="#fff" />
            </View>
            <Text style={styles.playlistIconText}>Playlist Cover</Text>
          </Animated.View>

          {/* Playlist Name Input */}
          <Animated.View 
            style={[
              styles.inputContainer,
              {
                opacity: fadeAnim,
              }
            ]}
          >
            <Text style={styles.inputLabel}>Playlist Name *</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter playlist name"
              placeholderTextColor="#666"
              value={playlistName}
              onChangeText={setPlaylistName}
              maxLength={100}
              autoFocus
              selectionColor="#FF3B3B"
            />
            <View style={styles.charCountContainer}>
              <Text style={styles.charCount}>{playlistName.length}/100</Text>
              {playlistName.length < 2 && playlistName.length > 0 && (
                <Text style={styles.warningText}>Minimum 2 characters</Text>
              )}
            </View>
          </Animated.View>

          {/* Description Input */}
          <Animated.View 
            style={[
              styles.inputContainer,
              {
                opacity: fadeAnim,
              }
            ]}
          >
            <Text style={styles.inputLabel}>Description (Optional)</Text>
            <TextInput
              style={[styles.textInput, styles.textArea]}
              placeholder="Add description"
              placeholderTextColor="#666"
              value={description}
              onChangeText={setDescription}
              multiline
              numberOfLines={3}
              maxLength={200}
              textAlignVertical="top"
            />
            <View style={styles.charCountContainer}>
              <Text style={styles.charCount}>{description.length}/200</Text>
            </View>
          </Animated.View>

          {/* Privacy Setting */}
          <Animated.View 
            style={[
              styles.privacyContainer,
              {
                opacity: fadeAnim,
              }
            ]}
          >
            <Text style={styles.inputLabel}>Privacy Settings</Text>
            
            <TouchableOpacity 
              style={styles.privacyOption}
              onPress={() => setIsPublic(false)}
            >
              <View style={styles.radioContainer}>
                <View style={[styles.radio, !isPublic && styles.radioSelected]} />
              </View>
              <View style={styles.privacyText}>
                <Text style={styles.privacyTitle}>Private</Text>
                <Text style={styles.privacySubtitle}>Only you can see this playlist</Text>
              </View>
              {!isPublic && (
                <Icon name="checkmark" size={20} color="#FF3B3B" />
              )}
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.privacyOption}
              onPress={() => setIsPublic(true)}
            >
              <View style={styles.radioContainer}>
                <View style={[styles.radio, isPublic && styles.radioSelected]} />
              </View>
              <View style={styles.privacyText}>
                <Text style={styles.privacyTitle}>Public</Text>
                <Text style={styles.privacySubtitle}>Anyone can see this playlist</Text>
              </View>
              {isPublic && (
                <Icon name="checkmark" size={20} color="#FF3B3B" />
              )}
            </TouchableOpacity>
          </Animated.View>

          {/* Info Section */}
          <Animated.View 
            style={[
              styles.infoSection,
              {
                opacity: fadeAnim,
              }
            ]}
          >
            <View style={styles.infoItem}>
              <Icon name="information-circle" size={20} color="#FF3B3B" />
              <Text style={styles.infoText}>
                You can add songs to this playlist after creation
              </Text>
            </View>
            <View style={styles.infoItem}>
              <Icon name="pencil" size={20} color="#FF3B3B" />
              <Text style={styles.infoText}>
                You can edit playlist details anytime
              </Text>
            </View>
          </Animated.View>

          {/* Create Button */}
          <Animated.View
            style={{
              opacity: fadeAnim,
              transform: [{ translateY: slideAnim }]
            }}
          >
            <TouchableOpacity
              style={[
                styles.createButton,
                (!playlistName.trim() || playlistName.trim().length < 2 || isLoading) && styles.createButtonDisabled
              ]}
              onPress={handleCreatePlaylist}
              disabled={!playlistName.trim() || playlistName.trim().length < 2 || isLoading}
            >
              {isLoading ? (
                <View style={styles.loadingContainer}>
                  <Icon name="refresh" size={20} color="#fff" style={styles.loadingSpinner} />
                  <Text style={styles.createButtonText}>Creating...</Text>
                </View>
              ) : (
                <Text style={styles.createButtonText}>Create Playlist</Text>
              )}
            </TouchableOpacity>
          </Animated.View>

          <View style={styles.bottomSpacer} />
        </ScrollView>
      </KeyboardAvoidingView>
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
  },
  backButton: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: '#000',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  placeholder: {
    width: 40,
  },
  content: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
  },
  playlistIconContainer: {
    alignItems: 'center',
    marginVertical: 30,
  },
  playlistIcon: {
    width: 120,
    height: 120,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#333',
    borderStyle: 'dashed',
    marginBottom: 12,
  },
  playlistIconText: {
    fontSize: 14,
    color: '#b3b3b3',
  },
  inputContainer: {
    marginBottom: 24,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 8,
  },
  textInput: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 12,
    padding: 16,
    color: '#fff',
    fontSize: 16,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  charCountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  charCount: {
    fontSize: 12,
    color: '#666',
  },
  warningText: {
    fontSize: 12,
    color: '#ff6b6b',
  },
  privacyContainer: {
    marginBottom: 30,
  },
  privacyOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#282828',
  },
  radioContainer: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  radio: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: 'transparent',
  },
  radioSelected: {
    backgroundColor: '#FF3B3B',
  },
  privacyText: {
    flex: 1,
  },
  privacyTitle: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 2,
  },
  privacySubtitle: {
    fontSize: 14,
    color: '#b3b3b3',
  },
  infoSection: {
    backgroundColor: 'rgba(225, 127, 127, 0.1)',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: 'rgba(185, 94, 29, 0.3)',
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  infoText: {
    flex: 1,
    fontSize: 14,
    color: '#b3b3b3',
    marginLeft: 12,
    lineHeight: 20,
  },
  createButton: {
    backgroundColor: '#FF3B3B',
    paddingVertical: 18,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#FF3B3B',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  createButtonDisabled: {
    backgroundColor: '#FF3B3B',
     opacity: 0.8,
  },
  createButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  loadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  loadingSpinner: {
    marginRight: 8,
  },
  bottomSpacer: {
    height: 30,
  },
});

export default CreatePlaylistScreen;