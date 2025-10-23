// // // src/screens/ProfileSettingsScreen.js
// // import React, { useState } from 'react';
// // import {
// //   View,
// //   Text,
// //   ScrollView,
// //   TouchableOpacity,
// //   StyleSheet,
// //   StatusBar,
// //   SafeAreaView,
// //   Switch,
// //   Image,
// //   Alert,
// //   Modal,
// //   TextInput,
// // } from 'react-native';
// // import Icon from 'react-native-vector-icons/MaterialIcons';
// // import Feather from 'react-native-vector-icons/Feather';
// // import { useNavigation } from '@react-navigation/native';

// // const ProfileSettingsScreen = () => {
// //   const navigation = useNavigation();
  
// //   // User data
// //   const [userData, setUserData] = useState({
// //     name: 'John Logan',
// //     email: 'jm_Logan01@gmail.com',
// //     phone: '8644082200',
// //     profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face'
// //   });

// //   // Settings states
// //   const [musicLanguages, setMusicLanguages] = useState(['English', 'Tamil']);
// //   const [streamingQuality, setStreamingQuality] = useState('HD');
// //   const [downloadQuality, setDownloadQuality] = useState('HD');
// //   const [autoPlay, setAutoPlay] = useState(true);
  
// //   // Modal states
// //   const [editModalVisible, setEditModalVisible] = useState(false);
// //   const [qualityModalVisible, setQualityModalVisible] = useState(false);
// //   const [languageModalVisible, setLanguageModalVisible] = useState(false);
// //   const [qualityType, setQualityType] = useState(''); // 'streaming' or 'download'
// //   const [editField, setEditField] = useState(''); // 'name', 'email', 'phone'

// //   // Available options
// //   const qualityOptions = ['Low', 'Normal', 'HD', 'High Quality'];
// //   const languageOptions = [
// //     'English', 'Hindi', 'Tamil', 'Telugu', 'Punjabi', 
// //     'Marathi', 'Gujarati', 'Bengali', 'Kannada', 'Malayalam'
// //   ];

// //   const handleLogout = () => {
// //     Alert.alert(
// //       'Logout',
// //       'Are you sure you want to logout?',
// //       [
// //         {
// //           text: 'Cancel',
// //           style: 'cancel',
// //         },
// //         {
// //           text: 'Logout',
// //           style: 'destructive',
// //           onPress: () => {
// //             // Handle logout logic here
// //             navigation.navigate('LoginOrRegisterScreen');
// //           },
// //         },
// //       ]
// //     );
// //   };

// //   const handleEditProfile = (field) => {
// //     setEditField(field);
// //     setEditModalVisible(true);
// //   };

// //   const handleSaveEdit = () => {
// //     // Here you would typically save to backend
// //     setEditModalVisible(false);
// //     Alert.alert('Success', 'Profile updated successfully!');
// //   };

// //   const handleQualitySelect = (quality, type) => {
// //     if (type === 'streaming') {
// //       setStreamingQuality(quality);
// //     } else {
// //       setDownloadQuality(quality);
// //     }
// //     setQualityModalVisible(false);
// //   };

// //   const handleLanguageToggle = (language) => {
// //     if (musicLanguages.includes(language)) {
// //       if (musicLanguages.length > 1) {
// //         setMusicLanguages(musicLanguages.filter(lang => lang !== language));
// //       } else {
// //         Alert.alert('Minimum one language required');
// //       }
// //     } else {
// //       if (musicLanguages.length < 3) {
// //         setMusicLanguages([...musicLanguages, language]);
// //       } else {
// //         Alert.alert('Maximum 3 languages allowed');
// //       }
// //     }
// //   };

// //   const renderHeader = () => (
// //     <View style={styles.header}>
// //       <TouchableOpacity 
// //         style={styles.backButton}
// //         onPress={() => navigation.goBack()}
// //       >
// //         <Icon name="arrow-back" size={24} color="#fff" />
// //       </TouchableOpacity>
// //       <Text style={styles.headerTitle}>Profile & Settings</Text>
// //       <View style={styles.headerPlaceholder} />
// //     </View>
// //   );

// //   const renderProfileSection = () => (
// //     <View style={styles.section}>
// //       <Text style={styles.sectionTitle}>My Profile</Text>
      
// //       <View style={styles.profileCard}>
// //         <View style={styles.profileHeader}>
// //           <Image 
// //             source={{ uri: userData.profileImage }} 
// //             style={styles.profileImage}
// //           />
// //           <View style={styles.profileInfo}>
// //             <Text style={styles.userName}>{userData.name}</Text>
// //             <Text style={styles.userEmail}>{userData.email}</Text>
// //           </View>
// //           <TouchableOpacity 
// //             style={styles.editButton}
// //             onPress={() => handleEditProfile('name')}
// //           >
// //             <Feather name="edit-2" size={18} color="#FF3B3B" />
// //           </TouchableOpacity>
// //         </View>

// //         <View style={styles.infoRow}>
// //           <View style={styles.infoItem}>
// //             <Feather name="mail" size={18} color="#b3b3b3" />
// //             <View style={styles.infoContent}>
// //               <Text style={styles.infoLabel}>Email</Text>
// //               <Text style={styles.infoValue}>{userData.email}</Text>
// //             </View>
// //             <TouchableOpacity 
// //               style={styles.smallEditButton}
// //               onPress={() => handleEditProfile('email')}
// //             >
// //               <Feather name="edit-2" size={14} color="#FF3B3B" />
// //             </TouchableOpacity>
// //           </View>

// //           <View style={styles.infoItem}>
// //             <Feather name="phone" size={18} color="#b3b3b3" />
// //             <View style={styles.infoContent}>
// //               <Text style={styles.infoLabel}>Phone Number</Text>
// //               <Text style={styles.infoValue}>{userData.phone}</Text>
// //             </View>
// //             <TouchableOpacity 
// //               style={styles.smallEditButton}
// //               onPress={() => handleEditProfile('phone')}
// //             >
// //               <Feather name="edit-2" size={14} color="#FF3B3B" />
// //             </TouchableOpacity>
// //           </View>
// //         </View>
// //       </View>
// //     </View>
// //   );

// //   const renderSettingsSection = () => (
// //     <View style={styles.section}>
// //       <Text style={styles.sectionTitle}>Settings</Text>
      
// //       <View style={styles.settingsCard}>
// //         {/* Music Languages */}
// //         <TouchableOpacity 
// //           style={styles.settingItem}
// //           onPress={() => setLanguageModalVisible(true)}
// //         >
// //           <View style={styles.settingLeft}>
// //             <Feather name="globe" size={20} color="#fff" />
// //             <View style={styles.settingText}>
// //               <Text style={styles.settingTitle}>Music Language(s)</Text>
// //               <Text style={styles.settingSubtitle}>
// //                 {musicLanguages.join(', ')}
// //               </Text>
// //             </View>
// //           </View>
// //           <Icon name="chevron-right" size={24} color="#b3b3b3" />
// //         </TouchableOpacity>

// //         <View style={styles.divider} />

// //         {/* Streaming Quality */}
// //         <TouchableOpacity 
// //           style={styles.settingItem}
// //           onPress={() => {
// //             setQualityType('streaming');
// //             setQualityModalVisible(true);
// //           }}
// //         >
// //           <View style={styles.settingLeft}>
// //             <Feather name="wifi" size={20} color="#fff" />
// //             <View style={styles.settingText}>
// //               <Text style={styles.settingTitle}>Streaming Quality</Text>
// //               <Text style={styles.settingSubtitle}>{streamingQuality}</Text>
// //             </View>
// //           </View>
// //           <Icon name="chevron-right" size={24} color="#b3b3b3" />
// //         </TouchableOpacity>

// //         <View style={styles.divider} />

// //         {/* Download Quality */}
// //         <TouchableOpacity 
// //           style={styles.settingItem}
// //           onPress={() => {
// //             setQualityType('download');
// //             setQualityModalVisible(true);
// //           }}
// //         >
// //           <View style={styles.settingLeft}>
// //             <Feather name="download" size={20} color="#fff" />
// //             <View style={styles.settingText}>
// //               <Text style={styles.settingTitle}>Download Quality</Text>
// //               <Text style={styles.settingSubtitle}>{downloadQuality}</Text>
// //             </View>
// //           </View>
// //           <Icon name="chevron-right" size={24} color="#b3b3b3" />
// //         </TouchableOpacity>

// //         <View style={styles.divider} />

// //         {/* Auto-Play */}
// //         <View style={styles.settingItem}>
// //           <View style={styles.settingLeft}>
// //             <Feather name="play-circle" size={20} color="#fff" />
// //             <View style={styles.settingText}>
// //               <Text style={styles.settingTitle}>Auto-Play</Text>
// //               <Text style={styles.settingSubtitle}>
// //                 Play similar music when your music ends
// //               </Text>
// //             </View>
// //           </View>
// //           <Switch
// //             value={autoPlay}
// //             onValueChange={setAutoPlay}
// //             trackColor={{ false: '#767577', true: '#FF3B3B' }}
// //             thumbColor={autoPlay ? '#fff' : '#f4f3f4'}
// //           />
// //         </View>
// //       </View>
// //     </View>
// //   );

// //   const renderOthersSection = () => (
// //     <View style={styles.section}>
// //       <Text style={styles.sectionTitle}>Others</Text>
      
// //       <View style={styles.othersCard}>
// //         <TouchableOpacity style={styles.otherItem}>
// //           <View style={styles.otherLeft}>
// //             <Feather name="help-circle" size={20} color="#fff" />
// //             <Text style={styles.otherText}>Help & Support</Text>
// //           </View>
// //           <Icon name="chevron-right" size={24} color="#b3b3b3" />
// //         </TouchableOpacity>

// //         <View style={styles.divider} />

// //         <TouchableOpacity 
// //           style={styles.otherItem}
// //           onPress={handleLogout}
// //         >
// //           <View style={styles.otherLeft}>
// //             <Feather name="log-out" size={20} color="#FF3B3B" />
// //             <Text style={[styles.otherText, styles.logoutText]}>Logout</Text>
// //           </View>
// //           <Icon name="chevron-right" size={24} color="#FF3B3B" />
// //         </TouchableOpacity>
// //       </View>
// //     </View>
// //   );

// //   const renderEditModal = () => (
// //     <Modal
// //       visible={editModalVisible}
// //       animationType="slide"
// //       transparent={true}
// //       onRequestClose={() => setEditModalVisible(false)}
// //     >
// //       <View style={styles.modalOverlay}>
// //         <View style={styles.modalContent}>
// //           <View style={styles.modalHeader}>
// //             <Text style={styles.modalTitle}>
// //               Edit {editField === 'name' ? 'Name' : editField === 'email' ? 'Email' : 'Phone'}
// //             </Text>
// //             <TouchableOpacity onPress={() => setEditModalVisible(false)}>
// //               <Icon name="close" size={24} color="#fff" />
// //             </TouchableOpacity>
// //           </View>

// //           <TextInput
// //             style={styles.textInput}
// //             placeholder={`Enter your ${editField}`}
// //             placeholderTextColor="#666"
// //             value={
// //               editField === 'name' ? userData.name :
// //               editField === 'email' ? userData.email :
// //               userData.phone
// //             }
// //             onChangeText={(text) => {
// //               if (editField === 'name') {
// //                 setUserData({...userData, name: text});
// //               } else if (editField === 'email') {
// //                 setUserData({...userData, email: text});
// //               } else {
// //                 setUserData({...userData, phone: text});
// //               }
// //             }}
// //             autoCapitalize="none"
// //             keyboardType={editField === 'email' ? 'email-address' : editField === 'phone' ? 'phone-pad' : 'default'}
// //           />

// //           <View style={styles.modalButtons}>
// //             <TouchableOpacity 
// //               style={styles.cancelButton}
// //               onPress={() => setEditModalVisible(false)}
// //             >
// //               <Text style={styles.cancelButtonText}>Cancel</Text>
// //             </TouchableOpacity>
// //             <TouchableOpacity 
// //               style={styles.saveButton}
// //               onPress={handleSaveEdit}
// //             >
// //               <Text style={styles.saveButtonText}>Save Changes</Text>
// //             </TouchableOpacity>
// //           </View>
// //         </View>
// //       </View>
// //     </Modal>
// //   );

// //   const renderQualityModal = () => (
// //     <Modal
// //       visible={qualityModalVisible}
// //       animationType="slide"
// //       transparent={true}
// //       onRequestClose={() => setQualityModalVisible(false)}
// //     >
// //       <View style={styles.modalOverlay}>
// //         <View style={styles.modalContent}>
// //           <View style={styles.modalHeader}>
// //             <Text style={styles.modalTitle}>
// //               Select {qualityType === 'streaming' ? 'Streaming' : 'Download'} Quality
// //             </Text>
// //             <TouchableOpacity onPress={() => setQualityModalVisible(false)}>
// //               <Icon name="close" size={24} color="#fff" />
// //             </TouchableOpacity>
// //           </View>

// //           {qualityOptions.map((quality, index) => (
// //             <TouchableOpacity
// //               key={quality}
// //               style={[
// //                 styles.optionItem,
// //                 index === qualityOptions.length - 1 && styles.lastOptionItem
// //               ]}
// //               onPress={() => handleQualitySelect(quality, qualityType)}
// //             >
// //               <Text style={styles.optionText}>{quality}</Text>
// //               {(qualityType === 'streaming' ? streamingQuality : downloadQuality) === quality && (
// //                 <Icon name="check" size={20} color="#FF3B3B" />
// //               )}
// //             </TouchableOpacity>
// //           ))}
// //         </View>
// //       </View>
// //     </Modal>
// //   );

// //   const renderLanguageModal = () => (
// //     <Modal
// //       visible={languageModalVisible}
// //       animationType="slide"
// //       transparent={true}
// //       onRequestClose={() => setLanguageModalVisible(false)}
// //     >
// //       <View style={styles.modalOverlay}>
// //         <View style={styles.modalContent}>
// //           <View style={styles.modalHeader}>
// //             <Text style={styles.modalTitle}>Select Music Languages</Text>
// //             <TouchableOpacity onPress={() => setLanguageModalVisible(false)}>
// //               <Icon name="close" size={24} color="#fff" />
// //             </TouchableOpacity>
// //           </View>

// //           <Text style={styles.languageSubtitle}>Select up to 3 languages</Text>

// //           {languageOptions.map((language, index) => (
// //             <TouchableOpacity
// //               key={language}
// //               style={[
// //                 styles.optionItem,
// //                 index === languageOptions.length - 1 && styles.lastOptionItem
// //               ]}
// //               onPress={() => handleLanguageToggle(language)}
// //             >
// //               <Text style={styles.optionText}>{language}</Text>
// //               {musicLanguages.includes(language) && (
// //                 <Icon name="check" size={20} color="#FF3B3B" />
// //               )}
// //             </TouchableOpacity>
// //           ))}
// //         </View>
// //       </View>
// //     </Modal>
// //   );

// //   // const renderBottomNavigation = () => (
// //   //   <View style={styles.bottomNav}>
// //   //     <TouchableOpacity style={styles.navItem}>
// //   //       <Icon name="home" size={24} color="#b3b3b3" />
// //   //       <Text style={styles.navText}>Home</Text>
// //   //     </TouchableOpacity>

// //   //     <TouchableOpacity style={styles.navItem}>
// //   //       <Icon name="search" size={24} color="#b3b3b3" />
// //   //       <Text style={styles.navText}>Search</Text>
// //   //     </TouchableOpacity>

// //   //     <TouchableOpacity style={styles.navItem}>
// //   //       <Icon name="library-music" size={24} color="#b3b3b3" />
// //   //       <Text style={styles.navText}>Your Library</Text>
// //   //     </TouchableOpacity>

// //   //     <TouchableOpacity style={styles.navItem}>
// //   //       <Feather name="user" size={24} color="#FF3B3B" />
// //   //       <Text style={[styles.navText, styles.activeNavText]}>Profile</Text>
// //   //     </TouchableOpacity>
// //   //   </View>
// //   // );

// //   return (
// //     <SafeAreaView style={styles.container}>
// //       <StatusBar barStyle="light-content" backgroundColor="#000" />
      
// //       {renderHeader()}
      
// //       <ScrollView 
// //         style={styles.scrollView}
// //         showsVerticalScrollIndicator={false}
// //         contentContainerStyle={styles.scrollContent}
// //       >
// //         {renderProfileSection()}
// //         {renderSettingsSection()}
// //         {renderOthersSection()}
        
// //         {/* Bottom padding */}
// //         <View style={styles.bottomPadding} />
// //       </ScrollView>

// //       {/* {renderBottomNavigation()} */}

// //       {/* Modals */}
// //       {renderEditModal()}
// //       {renderQualityModal()}
// //       {renderLanguageModal()}
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
// //     paddingHorizontal: 16,
// //     paddingVertical: 12,
// //     borderBottomWidth: 1,
// //     borderBottomColor: '#282828',
// //   },
// //   backButton: {
// //     padding: 8,
// //   },
// //   headerTitle: {
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //     color: '#fff',
// //   },
// //   headerPlaceholder: {
// //     width: 40,
// //   },
// //   scrollView: {
// //     flex: 1,
// //   },
// //   scrollContent: {
// //     paddingBottom: 20,
// //   },
// //   section: {
// //     marginBottom: 24,
// //   },
// //   sectionTitle: {
// //     fontSize: 20,
// //     fontWeight: 'bold',
// //     color: '#fff',
// //     marginBottom: 16,
// //     paddingHorizontal: 16,
// //   },
// //   profileCard: {
// //     backgroundColor: '#181818',
// //     marginHorizontal: 16,
// //     borderRadius: 12,
// //     padding: 16,
// //   },
// //   profileHeader: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     marginBottom: 20,
// //   },
// //   profileImage: {
// //     width: 60,
// //     height: 60,
// //     borderRadius: 30,
// //     marginRight: 12,
// //   },
// //   profileInfo: {
// //     flex: 1,
// //   },
// //   userName: {
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //     color: '#fff',
// //     marginBottom: 4,
// //   },
// //   userEmail: {
// //     fontSize: 14,
// //     color: '#b3b3b3',
// //   },
// //   editButton: {
// //     padding: 8,
// //     backgroundColor: 'rgba(255, 59, 59, 0.1)',
// //     borderRadius: 8,
// //   },
// //   infoRow: {
// //     gap: 12,
// //   },
// //   infoItem: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     paddingVertical: 8,
// //   },
// //   infoContent: {
// //     flex: 1,
// //     marginLeft: 12,
// //   },
// //   infoLabel: {
// //     fontSize: 14,
// //     color: '#b3b3b3',
// //     marginBottom: 2,
// //   },
// //   infoValue: {
// //     fontSize: 16,
// //     color: '#fff',
// //     fontWeight: '500',
// //   },
// //   smallEditButton: {
// //     padding: 6,
// //     backgroundColor: 'rgba(255, 59, 59, 0.1)',
// //     borderRadius: 6,
// //   },
// //   settingsCard: {
// //     backgroundColor: '#181818',
// //     marginHorizontal: 16,
// //     borderRadius: 12,
// //     overflow: 'hidden',
// //   },
// //   settingItem: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     justifyContent: 'space-between',
// //     paddingVertical: 16,
// //     paddingHorizontal: 16,
// //   },
// //   settingLeft: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     flex: 1,
// //   },
// //   settingText: {
// //     flex: 1,
// //     marginLeft: 12,
// //   },
// //   settingTitle: {
// //     fontSize: 16,
// //     fontWeight: '600',
// //     color: '#fff',
// //     marginBottom: 2,
// //   },
// //   settingSubtitle: {
// //     fontSize: 14,
// //     color: '#b3b3b3',
// //   },
// //   divider: {
// //     height: 1,
// //     backgroundColor: '#282828',
// //     marginLeft: 48,
// //   },
// //   othersCard: {
// //     backgroundColor: '#181818',
// //     marginHorizontal: 16,
// //     borderRadius: 12,
// //     overflow: 'hidden',
// //   },
// //   otherItem: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     justifyContent: 'space-between',
// //     paddingVertical: 16,
// //     paddingHorizontal: 16,
// //   },
// //   otherLeft: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     flex: 1,
// //   },
// //   otherText: {
// //     fontSize: 16,
// //     fontWeight: '600',
// //     color: '#fff',
// //     marginLeft: 12,
// //   },
// //   logoutText: {
// //     color: '#FF3B3B',
// //   },
// //   bottomPadding: {
// //     height: 80,
// //   },
// //   bottomNav: {
// //     flexDirection: 'row',
// //     backgroundColor: '#181818',
// //     borderTopWidth: 1,
// //     borderTopColor: '#282828',
// //     paddingVertical: 8,
// //   },
// //   navItem: {
// //     flex: 1,
// //     alignItems: 'center',
// //     paddingVertical: 8,
// //   },
// //   navText: {
// //     fontSize: 12,
// //     color: '#b3b3b3',
// //     marginTop: 4,
// //   },
// //   activeNavText: {
// //     color: '#FF3B3B',
// //   },
// //   // Modal Styles
// //   modalOverlay: {
// //     flex: 1,
// //     backgroundColor: 'rgba(0, 0, 0, 0.8)',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     padding: 20,
// //   },
// //   modalContent: {
// //     backgroundColor: '#181818',
// //     borderRadius: 16,
// //     width: '100%',
// //     maxWidth: 400,
// //     maxHeight: '80%',
// //   },
// //   modalHeader: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     justifyContent: 'space-between',
// //     padding: 20,
// //     borderBottomWidth: 1,
// //     borderBottomColor: '#282828',
// //   },
// //   modalTitle: {
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //     color: '#fff',
// //   },
// //   languageSubtitle: {
// //     fontSize: 14,
// //     color: '#b3b3b3',
// //     paddingHorizontal: 20,
// //     paddingTop: 8,
// //     paddingBottom: 16,
// //   },
// //   textInput: {
// //     backgroundColor: '#282828',
// //     borderRadius: 8,
// //     padding: 16,
// //     margin: 20,
// //     color: '#fff',
// //     fontSize: 16,
// //     borderWidth: 1,
// //     borderColor: '#333',
// //   },
// //   modalButtons: {
// //     flexDirection: 'row',
// //     padding: 20,
// //     gap: 12,
// //   },
// //   cancelButton: {
// //     flex: 1,
// //     backgroundColor: '#282828',
// //     paddingVertical: 14,
// //     borderRadius: 8,
// //     alignItems: 'center',
// //   },
// //   cancelButtonText: {
// //     color: '#fff',
// //     fontSize: 16,
// //     fontWeight: '600',
// //   },
// //   saveButton: {
// //     flex: 1,
// //     backgroundColor: '#FF3B3B',
// //     paddingVertical: 14,
// //     borderRadius: 8,
// //     alignItems: 'center',
// //   },
// //   saveButtonText: {
// //     color: '#fff',
// //     fontSize: 16,
// //     fontWeight: '600',
// //   },
// //   optionItem: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     justifyContent: 'space-between',
// //     paddingVertical: 16,
// //     paddingHorizontal: 20,
// //     borderBottomWidth: 1,
// //     borderBottomColor: '#282828',
// //   },
// //   lastOptionItem: {
// //     borderBottomWidth: 0,
// //   },
// //   optionText: {
// //     fontSize: 16,
// //     color: '#fff',
// //     fontWeight: '500',
// //   },
// // });

// // export default ProfileSettingsScreen;



// // src/screens/ProfileSettingsScreen.js
// // import React, { useState } from 'react';
// // import {
// //   View,
// //   Text,
// //   ScrollView,
// //   TouchableOpacity,
// //   StyleSheet,
// //   StatusBar,
// //   SafeAreaView,
// //   Switch,
// //   Image,
// //   Alert,
// //   Modal,
// //   TextInput,
// // } from 'react-native';
// // import Icon from 'react-native-vector-icons/MaterialIcons';
// // import Feather from 'react-native-vector-icons/Feather';
// // import { useNavigation } from '@react-navigation/native';

// // const ProfileSettingsScreen = () => {
// //   const navigation = useNavigation();
  
// //   // User data
// //   const [userData, setUserData] = useState({
// //     name: 'John Logan',
// //     email: 'jm_Logan01@gmail.com',
// //     phone: '8644082200',
// //     profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face'
// //   });

// //   // Settings states
// //   const [musicLanguages, setMusicLanguages] = useState(['English', 'Tamil']);
// //   const [streamingQuality, setStreamingQuality] = useState('HD');
// //   const [downloadQuality, setDownloadQuality] = useState('HD');
// //   const [autoPlay, setAutoPlay] = useState(true);
// //   const [explicitContent, setExplicitContent] = useState(false);
// //   const [crossfade, setCrossfade] = useState(true);
  
// //   // Modal states
// //   const [editModalVisible, setEditModalVisible] = useState(false);
// //   const [qualityModalVisible, setQualityModalVisible] = useState(false);
// //   const [languageModalVisible, setLanguageModalVisible] = useState(false);
// //   const [qualityType, setQualityType] = useState('');
// //   const [editField, setEditField] = useState('');

// //   // Available options
// //   const qualityOptions = [
// //     { value: 'Low', description: 'Normal quality (64 kbps)' },
// //     { value: 'Normal', description: 'Good quality (128 kbps)' },
// //     { value: 'HD', description: 'High quality (256 kbps)' },
// //     { value: 'High Quality', description: 'Very high quality (320 kbps)' }
// //   ];

// //   const languageOptions = [
// //     'English', 'Hindi', 
// //     'Spanish', 'French', 'German', 'Korean', 'Japanese'
// //   ];

// //   const handleLogout = () => {
// //     Alert.alert(
// //       'Logout',
// //       'Are you sure you want to logout?',
// //       [
// //         {
// //           text: 'Cancel',
// //           style: 'cancel',
// //         },
// //         {
// //           text: 'Logout',
// //           style: 'destructive',
// //           onPress: () => navigation.navigate('LoginOrRegisterScreen'),
// //         },
// //       ]
// //     );
// //   };

// //   const handleEditProfile = (field) => {
// //     setEditField(field);
// //     setEditModalVisible(true);
// //   };

// //   const handleSaveEdit = () => {
// //     setEditModalVisible(false);
// //     Alert.alert('Success', 'Profile updated successfully!');
// //   };

// //   const handleQualitySelect = (quality, type) => {
// //     if (type === 'streaming') {
// //       setStreamingQuality(quality);
// //     } else {
// //       setDownloadQuality(quality);
// //     }
// //     setQualityModalVisible(false);
// //   };

// //   const handleLanguageToggle = (language) => {
// //     if (musicLanguages.includes(language)) {
// //       if (musicLanguages.length > 1) {
// //         setMusicLanguages(musicLanguages.filter(lang => lang !== language));
// //       } else {
// //         Alert.alert('Minimum one language required');
// //       }
// //     } else {
// //       if (musicLanguages.length < 3) {
// //         setMusicLanguages([...musicLanguages, language]);
// //       } else {
// //         Alert.alert('Maximum 3 languages allowed');
// //       }
// //     }
// //   };

// //   const renderHeader = () => (
// //     <View style={styles.header}>
// //       <TouchableOpacity 
// //         style={styles.backButton}
// //         onPress={() => navigation.goBack()}
// //       >
// //         <Icon name="arrow-back" size={24} color="#fff" />
// //       </TouchableOpacity>
// //       <Text style={styles.headerTitle}>Profile & Settings</Text>
// //       <View style={styles.headerPlaceholder} />
// //     </View>
// //   );

// //   const renderProfileSection = () => (
// //     <View style={styles.section}>
// //       <Text style={styles.sectionTitle}>My Profile</Text>
      
// //       <View style={styles.profileCard}>
// //         <View style={styles.profileHeader}>
// //           <View style={styles.profileImageContainer}>
// //             <Image 
// //               source={{ uri: userData.profileImage }} 
// //               style={styles.profileImage}
// //             />
// //             <TouchableOpacity style={styles.editImageButton}>
// //               <Feather name="camera" size={16} color="#fff" />
// //             </TouchableOpacity>
// //           </View>
// //           <View style={styles.profileInfo}>
// //             <Text style={styles.userName}>{userData.name}</Text>
// //             <Text style={styles.userEmail}>Premium Member</Text>
// //           </View>
// //           <TouchableOpacity 
// //             style={styles.editButton}
// //             onPress={() => handleEditProfile('name')}
// //           >
// //             <Feather name="edit-2" size={18} color="#FF3B3B" />
// //           </TouchableOpacity>
// //         </View>

// //         <View style={styles.infoGrid}>
// //           <View style={styles.infoItem}>
// //             <View style={styles.infoIcon}>
// //               <Feather name="mail" size={18} color="#FF3B3B" />
// //             </View>
// //             <View style={styles.infoContent}>
// //               <Text style={styles.infoLabel}>Email</Text>
// //               <Text style={styles.infoValue}>{userData.email}</Text>
// //             </View>
// //             <TouchableOpacity 
// //               style={styles.smallEditButton}
// //               onPress={() => handleEditProfile('email')}
// //             >
// //               <Feather name="edit-2" size={14} color="#FF3B3B" />
// //             </TouchableOpacity>
// //           </View>

// //           <View style={styles.infoItem}>
// //             <View style={styles.infoIcon}>
// //               <Feather name="phone" size={18} color="#FF3B3B" />
// //             </View>
// //             <View style={styles.infoContent}>
// //               <Text style={styles.infoLabel}>Phone Number</Text>
// //               <Text style={styles.infoValue}>{userData.phone}</Text>
// //             </View>
// //             <TouchableOpacity 
// //               style={styles.smallEditButton}
// //               onPress={() => handleEditProfile('phone')}
// //             >
// //               <Feather name="edit-2" size={14} color="#FF3B3B" />
// //             </TouchableOpacity>
// //           </View>
// //         </View>
// //       </View>
// //     </View>
// //   );

// //   const renderSettingsSection = () => (
// //     <View style={styles.section}>
// //       <Text style={styles.sectionTitle}>Settings</Text>
      
// //       <View style={styles.settingsCard}>
// //         {/* Music Languages */}
// //         <TouchableOpacity 
// //           style={styles.settingItem}
// //           onPress={() => setLanguageModalVisible(true)}
// //         >
// //           <View style={styles.settingLeft}>
// //             <View style={styles.settingIcon}>
// //               <Feather name="globe" size={20} color="#FF3B3B" />
// //             </View>
// //             <View style={styles.settingText}>
// //               <Text style={styles.settingTitle}>Music Language(s)</Text>
// //               <Text style={styles.settingSubtitle}>
// //                 {musicLanguages.join(', ')}
// //               </Text>
// //             </View>
// //           </View>
// //           <Icon name="chevron-right" size={24} color="#b3b3b3" />
// //         </TouchableOpacity>

// //         <View style={styles.divider} />

// //         {/* Streaming Quality */}
// //         <TouchableOpacity 
// //           style={styles.settingItem}
// //           onPress={() => {
// //             setQualityType('streaming');
// //             setQualityModalVisible(true);
// //           }}
// //         >
// //           <View style={styles.settingLeft}>
// //             <View style={styles.settingIcon}>
// //               <Feather name="wifi" size={20} color="#FF3B3B" />
// //             </View>
// //             <View style={styles.settingText}>
// //               <Text style={styles.settingTitle}>Streaming Quality</Text>
// //               <Text style={styles.settingSubtitle}>{streamingQuality}</Text>
// //             </View>
// //           </View>
// //           <Icon name="chevron-right" size={24} color="#b3b3b3" />
// //         </TouchableOpacity>

// //         <View style={styles.divider} />

// //         {/* Download Quality */}
// //         <TouchableOpacity 
// //           style={styles.settingItem}
// //           onPress={() => {
// //             setQualityType('download');
// //             setQualityModalVisible(true);
// //           }}
// //         >
// //           <View style={styles.settingLeft}>
// //             <View style={styles.settingIcon}>
// //               <Feather name="download" size={20} color="#FF3B3B" />
// //             </View>
// //             <View style={styles.settingText}>
// //               <Text style={styles.settingTitle}>Download Quality</Text>
// //               <Text style={styles.settingSubtitle}>{downloadQuality}</Text>
// //             </View>
// //           </View>
// //           <Icon name="chevron-right" size={24} color="#b3b3b3" />
// //         </TouchableOpacity>

// //         <View style={styles.divider} />

// //         {/* Auto-Play */}
// //         <View style={styles.settingItem}>
// //           <View style={styles.settingLeft}>
// //             <View style={styles.settingIcon}>
// //               <Feather name="play-circle" size={20} color="#FF3B3B" />
// //             </View>
// //             <View style={styles.settingText}>
// //               <Text style={styles.settingTitle}>Auto-Play</Text>
// //               <Text style={styles.settingSubtitle}>
// //                 Play similar music when your music ends
// //               </Text>
// //             </View>
// //           </View>
// //           <Switch
// //             value={autoPlay}
// //             onValueChange={setAutoPlay}
// //             trackColor={{ false: '#333333', true: '#FF3B3B' }}
// //             thumbColor={autoPlay ? '#fff' : '#f4f3f4'}
// //           />
// //         </View>

// //         <View style={styles.divider} />

// //         {/* Explicit Content */}
// //         <View style={styles.settingItem}>
// //           <View style={styles.settingLeft}>
// //             <View style={styles.settingIcon}>
// //               <Feather name="alert-triangle" size={20} color="#FF3B3B" />
// //             </View>
// //             <View style={styles.settingText}>
// //               <Text style={styles.settingTitle}>Explicit Content</Text>
// //               <Text style={styles.settingSubtitle}>
// //                 Allow explicit content in playlists
// //               </Text>
// //             </View>
// //           </View>
// //           <Switch
// //             value={explicitContent}
// //             onValueChange={setExplicitContent}
// //             trackColor={{ false: '#333333', true: '#FF3B3B' }}
// //             thumbColor={explicitContent ? '#fff' : '#f4f3f4'}
// //           />
// //         </View>

// //         <View style={styles.divider} />

// //         {/* Crossfade */}
// //         <View style={styles.settingItem}>
// //           <View style={styles.settingLeft}>
// //             <View style={styles.settingIcon}>
// //               <Feather name="music" size={20} color="#FF3B3B" />
// //             </View>
// //             <View style={styles.settingText}>
// //               <Text style={styles.settingTitle}>Crossfade</Text>
// //               <Text style={styles.settingSubtitle}>
// //                 Smooth transition between songs
// //               </Text>
// //             </View>
// //           </View>
// //           <Switch
// //             value={crossfade}
// //             onValueChange={setCrossfade}
// //             trackColor={{ false: '#333333', true: '#FF3B3B' }}
// //             thumbColor={crossfade ? '#fff' : '#f4f3f4'}
// //           />
// //         </View>
// //       </View>
// //     </View>
// //   );

// //   const renderOthersSection = () => (
// //     <View style={styles.section}>
// //       <Text style={styles.sectionTitle}>Others</Text>
      
// //       <View style={styles.othersCard}>
// //         <TouchableOpacity style={styles.otherItem}>
// //           <View style={styles.otherLeft}>
// //             <View style={styles.otherIcon}>
// //               <Feather name="help-circle" size={20} color="#FF3B3B" />
// //             </View>
// //             <Text style={styles.otherText}>Help & Support</Text>
// //           </View>
// //           <Icon name="chevron-right" size={24} color="#b3b3b3" />
// //         </TouchableOpacity>

// //         <View style={styles.divider} />

// //         <TouchableOpacity style={styles.otherItem}>
// //           <View style={styles.otherLeft}>
// //             <View style={styles.otherIcon}>
// //               <Feather name="shield" size={20} color="#FF3B3B" />
// //             </View>
// //             <Text style={styles.otherText}>Privacy Policy</Text>
// //           </View>
// //           <Icon name="chevron-right" size={24} color="#b3b3b3" />
// //         </TouchableOpacity>

// //         <View style={styles.divider} />

// //         <TouchableOpacity style={styles.otherItem}>
// //           <View style={styles.otherLeft}>
// //             <View style={styles.otherIcon}>
// //               <Feather name="file-text" size={20} color="#FF3B3B" />
// //             </View>
// //             <Text style={styles.otherText}>Terms of Service</Text>
// //           </View>
// //           <Icon name="chevron-right" size={24} color="#b3b3b3" />
// //         </TouchableOpacity>

// //         <View style={styles.divider} />

// //         <TouchableOpacity 
// //           style={styles.otherItem}
// //           onPress={handleLogout}
// //         >
// //           <View style={styles.otherLeft}>
// //             <View style={styles.otherIcon}>
// //               <Feather name="log-out" size={20} color="#FF3B3B" />
// //             </View>
// //             <Text style={[styles.otherText, styles.logoutText]}>Logout</Text>
// //           </View>
// //           <Icon name="chevron-right" size={24} color="#FF3B3B" />
// //         </TouchableOpacity>
// //       </View>
// //     </View>
// //   );

// //   const renderEditModal = () => (
// //     <Modal
// //       visible={editModalVisible}
// //       animationType="slide"
// //       transparent={true}
// //       onRequestClose={() => setEditModalVisible(false)}
// //     >
// //       <View style={styles.modalOverlay}>
// //         <View style={styles.modalContent}>
// //           <View style={styles.modalHeader}>
// //             <Text style={styles.modalTitle}>
// //               Edit {editField === 'name' ? 'Name' : editField === 'email' ? 'Email' : 'Phone'}
// //             </Text>
// //             <TouchableOpacity onPress={() => setEditModalVisible(false)}>
// //               <Icon name="close" size={24} color="#fff" />
// //             </TouchableOpacity>
// //           </View>

// //           <TextInput
// //             style={styles.textInput}
// //             placeholder={`Enter your ${editField}`}
// //             placeholderTextColor="#666"
// //             value={
// //               editField === 'name' ? userData.name :
// //               editField === 'email' ? userData.email :
// //               userData.phone
// //             }
// //             onChangeText={(text) => {
// //               if (editField === 'name') {
// //                 setUserData({...userData, name: text});
// //               } else if (editField === 'email') {
// //                 setUserData({...userData, email: text});
// //               } else {
// //                 setUserData({...userData, phone: text});
// //               }
// //             }}
// //             autoCapitalize="none"
// //             keyboardType={editField === 'email' ? 'email-address' : editField === 'phone' ? 'phone-pad' : 'default'}
// //           />

// //           <View style={styles.modalButtons}>
// //             <TouchableOpacity 
// //               style={styles.cancelButton}
// //               onPress={() => setEditModalVisible(false)}
// //             >
// //               <Text style={styles.cancelButtonText}>Cancel</Text>
// //             </TouchableOpacity>
// //             <TouchableOpacity 
// //               style={styles.saveButton}
// //               onPress={handleSaveEdit}
// //             >
// //               <Text style={styles.saveButtonText}>Save Changes</Text>
// //             </TouchableOpacity>
// //           </View>
// //         </View>
// //       </View>
// //     </Modal>
// //   );

// //   const renderQualityModal = () => (
// //     <Modal
// //       visible={qualityModalVisible}
// //       animationType="slide"
// //       transparent={true}
// //       onRequestClose={() => setQualityModalVisible(false)}
// //     >
// //       <View style={styles.modalOverlay}>
// //         <View style={styles.modalContent}>
// //           <View style={styles.modalHeader}>
// //             <Text style={styles.modalTitle}>
// //               Select {qualityType === 'streaming' ? 'Streaming' : 'Download'} Quality
// //             </Text>
// //             <TouchableOpacity onPress={() => setQualityModalVisible(false)}>
// //               <Icon name="close" size={24} color="#fff" />
// //             </TouchableOpacity>
// //           </View>

// //           {qualityOptions.map((quality, index) => (
// //             <TouchableOpacity
// //               key={quality.value}
// //               style={[
// //                 styles.optionItem,
// //                 index === qualityOptions.length - 1 && styles.lastOptionItem
// //               ]}
// //               onPress={() => handleQualitySelect(quality.value, qualityType)}
// //             >
// //               <View style={styles.optionContent}>
// //                 <Text style={styles.optionText}>{quality.value}</Text>
// //                 <Text style={styles.optionDescription}>{quality.description}</Text>
// //               </View>
// //               {(qualityType === 'streaming' ? streamingQuality : downloadQuality) === quality.value && (
// //                 <Icon name="check" size={20} color="#FF3B3B" />
// //               )}
// //             </TouchableOpacity>
// //           ))}
// //         </View>
// //       </View>
// //     </Modal>
// //   );

// //   const renderLanguageModal = () => (
// //     <Modal
// //       visible={languageModalVisible}
// //       animationType="slide"
// //       transparent={true}
// //       onRequestClose={() => setLanguageModalVisible(false)}
// //     >
// //       <View style={styles.modalOverlay}>
// //         <View style={styles.modalContent}>
// //           <View style={styles.modalHeader}>
// //             <Text style={styles.modalTitle}>Select Music Languages</Text>
// //             <TouchableOpacity onPress={() => setLanguageModalVisible(false)}>
// //               <Icon name="close" size={24} color="#fff" />
// //             </TouchableOpacity>
// //           </View>

// //           <Text style={styles.languageSubtitle}>Select up to 3 languages</Text>

// //           {languageOptions.map((language, index) => (
// //             <TouchableOpacity
// //               key={language}

// //               style={[
// //                 styles.optionItem,
// //                 index === languageOptions.length - 1 && styles.lastOptionItem
// //               ]}
// //               onPress={() => handleLanguageToggle(language)}
// //             >
// //               <Text style={styles.optionText}>{language}</Text>
// //               {musicLanguages.includes(language) && (
// //                 <Icon name="check" size={20} color="#FF3B3B" />
// //               )}
// //             </TouchableOpacity>
// //           ))}
// //         </View>
// //       </View>
// //     </Modal>
// //   );

// //   return (
// //     <SafeAreaView style={styles.container}>
// //       <StatusBar barStyle="light-content" backgroundColor="#000" />
      
// //       {renderHeader()}
      
// //       <ScrollView 
// //         style={styles.scrollView}
// //         showsVerticalScrollIndicator={false}
// //         contentContainerStyle={styles.scrollContent}
// //       >
// //         {renderProfileSection()}
// //         {renderSettingsSection()}
// //         {renderOthersSection()}
        
// //         <View style={styles.bottomPadding} />
// //       </ScrollView>

// //       {/* Modals */}
// //       {renderEditModal()}
// //       {renderQualityModal()}
// //       {renderLanguageModal()}
// //     </SafeAreaView>
// //   );
// // };


// // src/screens/ProfileSettingsScreen.js
// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   ScrollView,
//   TouchableOpacity,
//   StyleSheet,
//   StatusBar,
//   SafeAreaView,
//   Switch,
//   Image,
//   Alert,
//   Modal,
//   TextInput,
//   ActivityIndicator,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import Feather from 'react-native-vector-icons/Feather';
// import { useNavigation } from '@react-navigation/native';
// import { getDataWithToken, PutDataWithToken } from '../Services/mobile-api';
// import { getDataFromAsyncStorage, storeDataToAsyncStorage } from '../Services/CommonFunction';
// import { mobile_siteConfig } from '../Services/mobile-siteConfig';
// import * as ImagePicker from 'react-native-image-picker';

// const ProfileSettingsScreen = () => {
//   const navigation = useNavigation();
  
//   // User data - API se fetch hoga
//   const [userData, setUserData] = useState({
//     name: '',
//     email: '',
//     mobile: '',
//     profileImage: null
//   });

//   // Settings states - Music App ke liye
//   const [musicLanguages, setMusicLanguages] = useState(['English', 'Hindi']);
//   const [streamingQuality, setStreamingQuality] = useState('HD');
//   const [downloadQuality, setDownloadQuality] = useState('HD');
//   const [autoPlay, setAutoPlay] = useState(true);
//   const [explicitContent, setExplicitContent] = useState(false);
//   const [crossfade, setCrossfade] = useState(true);
  
//   // Modal states
//   const [editModalVisible, setEditModalVisible] = useState(false);
//   const [qualityModalVisible, setQualityModalVisible] = useState(false);
//   const [languageModalVisible, setLanguageModalVisible] = useState(false);
//   const [qualityType, setQualityType] = useState('');
//   const [editField, setEditField] = useState('');
//   const [tempEditValue, setTempEditValue] = useState('');

//   // Loading states
//   const [loading, setLoading] = useState(false);
//   const [uploading, setUploading] = useState(false);

//   // Available options
//   const qualityOptions = [
//     { value: 'Low', description: 'Normal quality (64 kbps)' },
//     { value: 'Normal', description: 'Good quality (128 kbps)' },
//     { value: 'HD', description: 'High quality (256 kbps)' },
//     { value: 'High Quality', description: 'Very high quality (320 kbps)' }
//   ];

//   const languageOptions = [
//     'English', 'Hindi', 
//     'Spanish', 'French', 'German', 'Korean', 'Japanese'
//   ];

//   // Fetch user profile on component mount
//   useEffect(() => {
//     fetchUserProfile();
//   }, []);

//   const fetchUserProfile = async () => {
//     try {
//       setLoading(true);
//       const response = await getDataWithToken(mobile_siteConfig.GET_PROFILE);
//       console.log('Profile API Response:', response);
      
//       if (response && response.success && response.user) {
//         const user = response.user;
//         const profilePicUrl = user.profilePic 
//           ? `http://103.119.171.213:3001/api/${user.profilePic}`
//           : 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face';
        
//         setUserData({
//           name: user.name || '',
//           email: user.email || '',
//           mobile: user.mobile || '',
//           profileImage: profilePicUrl
//         });
//       }
//     } catch (error) {
//       console.error('Error fetching profile:', error);
//       Alert.alert('Error', 'Failed to load profile data');
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Profile Image Upload with Image Picker
//   const handleProfileImageUpload = () => {
//     ImagePicker.launchImageLibrary(
//       {
//         mediaType: 'photo',
//         quality: 0.8,
//         maxWidth: 800,
//         maxHeight: 800,
//       },
//       async (response) => {
//         if (response.didCancel) {
//           console.log('User cancelled image picker');
//           return;
//         }

//         if (response.errorCode) {
//           Alert.alert('Error', response.errorMessage || 'Error picking image');
//           return;
//         }

//         if (response.assets && response.assets.length > 0) {
//           const photo = response.assets[0];
//           setUploading(true);

//           try {
//             // Create form data for image upload
//             const formData = new FormData();
//             formData.append('profilePic', {
//               uri: photo.uri,
//               type: photo.type || 'image/jpeg',
//               name: photo.fileName || `profile_${Date.now()}.jpg`,
//             });
//             formData.append('name', userData.name);
//             formData.append('email', userData.email);

//             console.log('Uploading profile picture...');

//             // Upload profile picture
//             const uploadResponse = await PutDataWithToken(
//               formData, 
//               mobile_siteConfig.UPDATE_PROFILE
//             );

//             console.log('Upload Response:', uploadResponse);

//             if (uploadResponse && uploadResponse.success) {
//               // Update local state with new image
//               setUserData(prev => ({
//                 ...prev,
//                 profileImage: photo.uri
//               }));
//               Alert.alert('Success', 'Profile picture updated successfully!');
//             } else {
//               throw new Error(uploadResponse?.message || 'Upload failed');
//             }

//           } catch (error) {
//             console.error('Upload error:', error);
//             Alert.alert('Error', error.message || 'Failed to upload profile picture');
//           } finally {
//             setUploading(false);
//           }
//         }
//       }
//     );
//   };

//   const updateUserProfile = async (updatedData) => {
//     try {
//       setLoading(true);
      
//       const payload = {
//         name: updatedData.name || userData.name,
//         email: updatedData.email || userData.email,
//       };

//       console.log('Updating profile with:', payload);

//       if (!payload.name || payload.name.trim() === '') {
//         Alert.alert('Error', 'Name is required');
//         return false;
//       }

//       const response = await PutDataWithToken(payload, mobile_siteConfig.UPDATE_PROFILE);
//       console.log('Update Profile Response:', response);

//       if (response && response.success) {
//         setUserData(updatedData);
//         Alert.alert('Success', response.message || 'Profile updated successfully!');
//         return true;
//       } else {
//         throw new Error(response?.message || 'Failed to update profile');
//       }
//     } catch (error) {
//       console.error('Error updating profile:', error);
//       Alert.alert('Error', error.message || 'Failed to update profile');
//       return false;
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleLogout = async () => {
//     Alert.alert(
//       'Logout',
//       'Are you sure you want to logout?',
//       [
//         {
//           text: 'Cancel',
//           style: 'cancel',
//         },
//         {
//           text: 'Logout',
//           style: 'destructive',
//           onPress: async () => {
//             try {
//               await storeDataToAsyncStorage(mobile_siteConfig.MOB_ACCESS_TOKEN_KEY, null);
//               await storeDataToAsyncStorage(mobile_siteConfig.USER_Data, null);
//               navigation.navigate('LoginOrRegisterScreen');
//             } catch (error) {
//               console.error('Logout error:', error);
//             }
//           },
//         },
//       ]
//     );
//   };

//   const handleEditProfile = (field) => {
//     setEditField(field);
//     setTempEditValue(
//       field === 'name' ? userData.name :
//       field === 'email' ? userData.email :
//       userData.mobile
//     );
//     setEditModalVisible(true);
//   };

//   const handleSaveEdit = async () => {
//     if (!tempEditValue.trim()) {
//       Alert.alert('Error', 'Please enter a value');
//       return;
//     }

//     const updatedData = { ...userData };
//     if (editField === 'name') {
//       updatedData.name = tempEditValue;
//     } else if (editField === 'email') {
//       updatedData.email = tempEditValue;
//     }

//     const success = await updateUserProfile(updatedData);
//     if (success) {
//       setEditModalVisible(false);
//     }
//   };

//   const handleQualitySelect = (quality, type) => {
//     if (type === 'streaming') {
//       setStreamingQuality(quality);
//     } else {
//       setDownloadQuality(quality);
//     }
//     setQualityModalVisible(false);
//   };

//   const handleLanguageToggle = (language) => {
//     if (musicLanguages.includes(language)) {
//       if (musicLanguages.length > 1) {
//         setMusicLanguages(musicLanguages.filter(lang => lang !== language));
//       } else {
//         Alert.alert('Minimum one language required');
//       }
//     } else {
//       if (musicLanguages.length < 3) {
//         setMusicLanguages([...musicLanguages, language]);
//       } else {
//         Alert.alert('Maximum 3 languages allowed');
//       }
//     }
//   };

//   const renderHeader = () => (
//     <View style={styles.header}>
//       <TouchableOpacity 
//         style={styles.backButton}
//         onPress={() => navigation.goBack()}
//       >
//         <Icon name="arrow-back" size={24} color="#fff" />
//       </TouchableOpacity>
//       <Text style={styles.headerTitle}>Profile & Settings</Text>
//       <View style={styles.headerPlaceholder} />
//     </View>
//   );

//   const renderProfileSection = () => (
//     <View style={styles.section}>
//       <Text style={styles.sectionTitle}>My Profile</Text>
      
//       <View style={styles.profileCard}>
//         <View style={styles.profileHeader}>
//           <TouchableOpacity 
//             style={styles.profileImageContainer}
//             onPress={handleProfileImageUpload}
//             disabled={uploading}
//           >
//             <Image 
//               source={{ uri: userData.profileImage }} 
//               style={styles.profileImage}
//             />
//             <View style={styles.editImageButton}>
//               {uploading ? (
//                 <ActivityIndicator size="small" color="#fff" />
//               ) : (
//                 <Feather name="camera" size={16} color="#fff" />
//               )}
//             </View>
//           </TouchableOpacity>
//           <View style={styles.profileInfo}>
//             <Text style={styles.userName}>{userData.name || 'Not set'}</Text>
//             <Text style={styles.userEmail}>Premium Member</Text>
//           </View>
//           <TouchableOpacity 
//             style={styles.editButton}
//             onPress={() => handleEditProfile('name')}
//             disabled={loading}
//           >
//             <Feather name="edit-2" size={18} color="#FF3B3B" />
//           </TouchableOpacity>
//         </View>

//         <View style={styles.infoGrid}>
//           <View style={styles.infoItem}>
//             <View style={styles.infoIcon}>
//               <Feather name="mail" size={18} color="#FF3B3B" />
//             </View>
//             <View style={styles.infoContent}>
//               <Text style={styles.infoLabel}>Email</Text>
//               <Text style={styles.infoValue}>{userData.email || 'Not set'}</Text>
//             </View>
//             <TouchableOpacity 
//               style={styles.smallEditButton}
//               onPress={() => handleEditProfile('email')}
//               disabled={loading}
//             >
//               <Feather name="edit-2" size={14} color="#FF3B3B" />
//             </TouchableOpacity>
//           </View>

//           <View style={styles.infoItem}>
//             <View style={styles.infoIcon}>
//               <Feather name="phone" size={18} color="#FF3B3B" />
//             </View>
//             <View style={styles.infoContent}>
//               <Text style={styles.infoLabel}>Phone Number</Text>
//               <Text style={styles.infoValue}>{userData.mobile || 'Not set'}</Text>
//             </View>
//             <TouchableOpacity 
//               style={styles.smallEditButton}
//               onPress={() => handleEditProfile('phone')}
//             >
//               <Feather name="edit-2" size={14} color="#FF3B3B" />
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </View>
//   );

//   const renderSettingsSection = () => (
//     <View style={styles.section}>
//       <Text style={styles.sectionTitle}>Settings</Text>
      
//       <View style={styles.settingsCard}>
//         {/* Music Languages */}
//         <TouchableOpacity 
//           style={styles.settingItem}
//           onPress={() => setLanguageModalVisible(true)}
//         >
//           <View style={styles.settingLeft}>
//             <View style={styles.settingIcon}>
//               <Feather name="globe" size={20} color="#FF3B3B" />
//             </View>
//             <View style={styles.settingText}>
//               <Text style={styles.settingTitle}>Music Language(s)</Text>
//               <Text style={styles.settingSubtitle}>
//                 {musicLanguages.join(', ')}
//               </Text>
//             </View>
//           </View>
//           <Icon name="chevron-right" size={24} color="#b3b3b3" />
//         </TouchableOpacity>

//         <View style={styles.divider} />

//         {/* Streaming Quality */}
//         <TouchableOpacity 
//           style={styles.settingItem}
//           onPress={() => {
//             setQualityType('streaming');
//             setQualityModalVisible(true);
//           }}
//         >
//           <View style={styles.settingLeft}>
//             <View style={styles.settingIcon}>
//               <Feather name="wifi" size={20} color="#FF3B3B" />
//             </View>
//             <View style={styles.settingText}>
//               <Text style={styles.settingTitle}>Streaming Quality</Text>
//               <Text style={styles.settingSubtitle}>{streamingQuality}</Text>
//             </View>
//           </View>
//           <Icon name="chevron-right" size={24} color="#b3b3b3" />
//         </TouchableOpacity>

//         <View style={styles.divider} />

//         {/* Download Quality */}
//         <TouchableOpacity 
//           style={styles.settingItem}
//           onPress={() => {
//             setQualityType('download');
//             setQualityModalVisible(true);
//           }}
//         >
//           <View style={styles.settingLeft}>
//             <View style={styles.settingIcon}>
//               <Feather name="download" size={20} color="#FF3B3B" />
//             </View>
//             <View style={styles.settingText}>
//               <Text style={styles.settingTitle}>Download Quality</Text>
//               <Text style={styles.settingSubtitle}>{downloadQuality}</Text>
//             </View>
//           </View>
//           <Icon name="chevron-right" size={24} color="#b3b3b3" />
//         </TouchableOpacity>

//         <View style={styles.divider} />

//         {/* Auto-Play */}
//         <View style={styles.settingItem}>
//           <View style={styles.settingLeft}>
//             <View style={styles.settingIcon}>
//               <Feather name="play-circle" size={20} color="#FF3B3B" />
//             </View>
//             <View style={styles.settingText}>
//               <Text style={styles.settingTitle}>Auto-Play</Text>
//               <Text style={styles.settingSubtitle}>
//                 Play similar music when your music ends
//               </Text>
//             </View>
//           </View>
//           <Switch
//             value={autoPlay}
//             onValueChange={setAutoPlay}
//             trackColor={{ false: '#333333', true: '#FF3B3B' }}
//             thumbColor={autoPlay ? '#fff' : '#f4f3f4'}
//           />
//         </View>

//         <View style={styles.divider} />

//         {/* Explicit Content */}
//         <View style={styles.settingItem}>
//           <View style={styles.settingLeft}>
//             <View style={styles.settingIcon}>
//               <Feather name="alert-triangle" size={20} color="#FF3B3B" />
//             </View>
//             <View style={styles.settingText}>
//               <Text style={styles.settingTitle}>Explicit Content</Text>
//               <Text style={styles.settingSubtitle}>
//                 Allow explicit content in playlists
//               </Text>
//             </View>
//           </View>
//           <Switch
//             value={explicitContent}
//             onValueChange={setExplicitContent}
//             trackColor={{ false: '#333333', true: '#FF3B3B' }}
//             thumbColor={explicitContent ? '#fff' : '#f4f3f4'}
//           />
//         </View>

//         <View style={styles.divider} />

//         {/* Crossfade */}
//         <View style={styles.settingItem}>
//           <View style={styles.settingLeft}>
//             <View style={styles.settingIcon}>
//               <Feather name="music" size={20} color="#FF3B3B" />
//             </View>
//             <View style={styles.settingText}>
//               <Text style={styles.settingTitle}>Crossfade</Text>
//               <Text style={styles.settingSubtitle}>
//                 Smooth transition between songs
//               </Text>
//             </View>
//           </View>
//           <Switch
//             value={crossfade}
//             onValueChange={setCrossfade}
//             trackColor={{ false: '#333333', true: '#FF3B3B' }}
//             thumbColor={crossfade ? '#fff' : '#f4f3f4'}
//           />
//         </View>
//       </View>
//     </View>
//   );

//   const renderOthersSection = () => (
//     <View style={styles.section}>
//       <Text style={styles.sectionTitle}>Others</Text>
      
//       <View style={styles.othersCard}>
//         <TouchableOpacity style={styles.otherItem}>
//           <View style={styles.otherLeft}>
//             <View style={styles.otherIcon}>
//               <Feather name="help-circle" size={20} color="#FF3B3B" />
//             </View>
//             <Text style={styles.otherText}>Help & Support</Text>
//           </View>
//           <Icon name="chevron-right" size={24} color="#b3b3b3" />
//         </TouchableOpacity>

//         <View style={styles.divider} />

//         <TouchableOpacity style={styles.otherItem}>
//           <View style={styles.otherLeft}>
//             <View style={styles.otherIcon}>
//               <Feather name="shield" size={20} color="#FF3B3B" />
//             </View>
//             <Text style={styles.otherText}>Privacy Policy</Text>
//           </View>
//           <Icon name="chevron-right" size={24} color="#b3b3b3" />
//         </TouchableOpacity>

//         <View style={styles.divider} />

//         <TouchableOpacity style={styles.otherItem}>
//           <View style={styles.otherLeft}>
//             <View style={styles.otherIcon}>
//               <Feather name="file-text" size={20} color="#FF3B3B" />
//             </View>
//             <Text style={styles.otherText}>Terms of Service</Text>
//           </View>
//           <Icon name="chevron-right" size={24} color="#b3b3b3" />
//         </TouchableOpacity>

//         <View style={styles.divider} />

//         <TouchableOpacity 
//           style={styles.otherItem}
//           onPress={handleLogout}
//         >
//           <View style={styles.otherLeft}>
//             <View style={styles.otherIcon}>
//               <Feather name="log-out" size={20} color="#FF3B3B" />
//             </View>
//             <Text style={[styles.otherText, styles.logoutText]}>Logout</Text>
//           </View>
//           <Icon name="chevron-right" size={24} color="#FF3B3B" />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );

//   const renderEditModal = () => (
//     <Modal
//       visible={editModalVisible}
//       animationType="slide"
//       transparent={true}
//       onRequestClose={() => setEditModalVisible(false)}
//     >
//       <View style={styles.modalOverlay}>
//         <View style={styles.modalContent}>
//           <View style={styles.modalHeader}>
//             <Text style={styles.modalTitle}>
//               Edit {editField === 'name' ? 'Name' : editField === 'email' ? 'Email' : 'Phone'}
//             </Text>
//             <TouchableOpacity onPress={() => setEditModalVisible(false)}>
//               <Icon name="close" size={24} color="#fff" />
//             </TouchableOpacity>
//           </View>

//           <TextInput
//             style={styles.textInput}
//             placeholder={`Enter your ${editField}`}
//             placeholderTextColor="#666"
//             value={tempEditValue}
//             onChangeText={setTempEditValue}
//             autoCapitalize="none"
//             keyboardType={editField === 'email' ? 'email-address' : editField === 'phone' ? 'phone-pad' : 'default'}
//           />

//           <View style={styles.modalButtons}>
//             <TouchableOpacity 
//               style={styles.cancelButton}
//               onPress={() => setEditModalVisible(false)}
//             >
//               <Text style={styles.cancelButtonText}>Cancel</Text>
//             </TouchableOpacity>
//             <TouchableOpacity 
//               style={[styles.saveButton, loading && styles.disabledButton]}
//               onPress={handleSaveEdit}
//               disabled={loading}
//             >
//               <Text style={styles.saveButtonText}>
//                 {loading ? 'Saving...' : 'Save Changes'}
//               </Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </Modal>
//   );

//   const renderQualityModal = () => (
//     <Modal
//       visible={qualityModalVisible}
//       animationType="slide"
//       transparent={true}
//       onRequestClose={() => setQualityModalVisible(false)}
//     >
//       <View style={styles.modalOverlay}>
//         <View style={styles.modalContent}>
//           <View style={styles.modalHeader}>
//             <Text style={styles.modalTitle}>
//               Select {qualityType === 'streaming' ? 'Streaming' : 'Download'} Quality
//             </Text>
//             <TouchableOpacity onPress={() => setQualityModalVisible(false)}>
//               <Icon name="close" size={24} color="#fff" />
//             </TouchableOpacity>
//           </View>

//           {qualityOptions.map((quality, index) => (
//             <TouchableOpacity
//               key={quality.value}
//               style={[
//                 styles.optionItem,
//                 index === qualityOptions.length - 1 && styles.lastOptionItem
//               ]}
//               onPress={() => handleQualitySelect(quality.value, qualityType)}
//             >
//               <View style={styles.optionContent}>
//                 <Text style={styles.optionText}>{quality.value}</Text>
//                 <Text style={styles.optionDescription}>{quality.description}</Text>
//               </View>
//               {(qualityType === 'streaming' ? streamingQuality : downloadQuality) === quality.value && (
//                 <Icon name="check" size={20} color="#FF3B3B" />
//               )}
//             </TouchableOpacity>
//           ))}
//         </View>
//       </View>
//     </Modal>
//   );

//   const renderLanguageModal = () => (
//     <Modal
//       visible={languageModalVisible}
//       animationType="slide"
//       transparent={true}
//       onRequestClose={() => setLanguageModalVisible(false)}
//     >
//       <View style={styles.modalOverlay}>
//         <View style={styles.modalContent}>
//           <View style={styles.modalHeader}>
//             <Text style={styles.modalTitle}>Select Music Languages</Text>
//             <TouchableOpacity onPress={() => setLanguageModalVisible(false)}>
//               <Icon name="close" size={24} color="#fff" />
//             </TouchableOpacity>
//           </View>

//           <Text style={styles.languageSubtitle}>Select up to 3 languages</Text>

//           {languageOptions.map((language, index) => (
//             <TouchableOpacity
//               key={language}
//               style={[
//                 styles.optionItem,
//                 index === languageOptions.length - 1 && styles.lastOptionItem
//               ]}
//               onPress={() => handleLanguageToggle(language)}
//             >
//               <Text style={styles.optionText}>{language}</Text>
//               {musicLanguages.includes(language) && (
//                 <Icon name="check" size={20} color="#FF3B3B" />
//               )}
//             </TouchableOpacity>
//           ))}
//         </View>
//       </View>
//     </Modal>
//   );

//   if (loading && !userData.name) {
//     return (
//       <SafeAreaView style={styles.container}>
//         <StatusBar barStyle="light-content" backgroundColor="#000" />
//         {renderHeader()}
//         <View style={styles.loadingContainer}>
//           <ActivityIndicator size="large" color="#FF3B3B" />
//           <Text style={styles.loadingText}>Loading profile...</Text>
//         </View>
//       </SafeAreaView>
//     );
//   }

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="light-content" backgroundColor="#000" />
      
//       {renderHeader()}
      
//       <ScrollView 
//         style={styles.scrollView}
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={styles.scrollContent}
//       >
//         {renderProfileSection()}
//         {renderSettingsSection()}
//         {renderOthersSection()}
        
//         <View style={styles.bottomPadding} />
//       </ScrollView>

//       {/* Modals */}
//       {renderEditModal()}
//       {renderQualityModal()}
//       {renderLanguageModal()}
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
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//     borderBottomWidth: 1,
//     borderBottomColor: '#282828',
//   },
//   backButton: {
//     padding: 8,
//   },
//   headerTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#fff',
//   },
//   headerPlaceholder: {
//     width: 40,
//   },
//   scrollView: {
//     flex: 1,
//   },
//   scrollContent: {
//     paddingBottom: 20,
//   },
//   section: {
//     marginBottom: 24,
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#fff',
//     marginBottom: 16,
//     paddingHorizontal: 16,
//   },
//   profileCard: {
//     backgroundColor: '#181818',
//     marginHorizontal: 16,
//     borderRadius: 12,
//     padding: 20,
//   },
//   profileHeader: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   profileImageContainer: {
//     position: 'relative',
//     marginRight: 16,
//   },
//   profileImage: {
//     width: 70,
//     height: 70,
//     borderRadius: 35,
//   },
//   editImageButton: {
//     position: 'absolute',
//     bottom: 0,
//     right: 0,
//     backgroundColor: '#FF3B3B',
//     width: 24,
//     height: 24,
//     borderRadius: 12,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderWidth: 2,
//     borderColor: '#000',
//   },
//   profileInfo: {
//     flex: 1,
//   },
//   userName: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#fff',
//     marginBottom: 4,
//   },
//   userEmail: {
//     fontSize: 14,
//     color: '#FF3B3B',
//     fontWeight: '600',
//   },
//   editButton: {
//     padding: 10,
//     backgroundColor: 'rgba(255, 59, 59, 0.1)',
//     borderRadius: 8,
//   },
//   infoGrid: {
//     gap: 16,
//   },
//   infoItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 12,
//     paddingHorizontal: 8,
//   },
//   infoIcon: {
//     width: 36,
//     height: 36,
//     borderRadius: 18,
//     backgroundColor: 'rgba(255, 59, 59, 0.1)',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 12,
//   },
//   infoContent: {
//     flex: 1,
//   },
//   infoLabel: {
//     fontSize: 14,
//     color: '#b3b3b3',
//     marginBottom: 4,
//   },
//   infoValue: {
//     fontSize: 16,
//     color: '#fff',
//     fontWeight: '500',
//   },
//   smallEditButton: {
//     padding: 6,
//     backgroundColor: 'rgba(255, 59, 59, 0.1)',
//     borderRadius: 6,
//   },
//   settingsCard: {
//     backgroundColor: '#181818',
//     marginHorizontal: 16,
//     borderRadius: 12,
//     overflow: 'hidden',
//   },
//   settingItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingVertical: 16,
//     paddingHorizontal: 16,
//   },
//   settingLeft: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     flex: 1,
//   },
//   settingIcon: {
//     width: 36,
//     height: 36,
//     borderRadius: 18,
//     backgroundColor: 'rgba(255, 59, 59, 0.1)',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 12,
//   },
//   settingText: {
//     flex: 1,
//   },
//   settingTitle: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#fff',
//     marginBottom: 2,
//   },
//   settingSubtitle: {
//     fontSize: 14,
//     color: '#b3b3b3',
//   },
//   divider: {
//     height: 1,
//     backgroundColor: '#282828',
//     marginLeft: 64,
//   },
//   othersCard: {
//     backgroundColor: '#181818',
//     marginHorizontal: 16,
//     borderRadius: 12,
//     overflow: 'hidden',
//   },
//   otherItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingVertical: 16,
//     paddingHorizontal: 16,
//   },
//   otherLeft: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     flex: 1,
//   },
//   otherIcon: {
//     width: 36,
//     height: 36,
//     borderRadius: 18,
//     backgroundColor: 'rgba(255, 59, 59, 0.1)',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 12,
//   },
//   otherText: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#fff',
//   },
//   logoutText: {
//     color: '#FF3B3B',
//   },
//   bottomPadding: {
//     height: 20,
//   },
//   // Modal Styles
//   modalOverlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.8)',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   modalContent: {
//     backgroundColor: '#181818',
//     borderRadius: 16,
//     width: '100%',
//     maxWidth: 400,
//     maxHeight: '80%',
//   },
//   modalHeader: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     padding: 20,
//     borderBottomWidth: 1,
//     borderBottomColor: '#282828',
//   },
//   modalTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#fff',
//   },
//   languageSubtitle: {
//     fontSize: 14,
//     color: '#b3b3b3',
//     paddingHorizontal: 20,
//     paddingTop: 8,
//     paddingBottom: 16,
//   },
//   textInput: {
//     backgroundColor: '#282828',
//     borderRadius: 8,
//     padding: 16,
//     margin: 20,
//     color: '#fff',
//     fontSize: 16,
//     borderWidth: 1,
//     borderColor: '#333',
//   },
//   modalButtons: {
//     flexDirection: 'row',
//     padding: 20,
//     gap: 12,
//   },
//   cancelButton: {
//     flex: 1,
//     backgroundColor: '#282828',
//     paddingVertical: 14,
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   cancelButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   saveButton: {
//     flex: 1,
//     backgroundColor: '#FF3B3B',
//     paddingVertical: 14,
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   saveButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   optionItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingVertical: 16,
//     paddingHorizontal: 20,
//     borderBottomWidth: 1,
//     borderBottomColor: '#282828',
//   },
//   optionContent: {
//     flex: 1,
//   },
//   optionText: {
//     fontSize: 16,
//     color: '#fff',
//     fontWeight: '500',
//     marginBottom: 2,
//   },
//   optionDescription: {
//     fontSize: 14,
//     color: '#b3b3b3',
//   },
//   lastOptionItem: {
//     borderBottomWidth: 0,
//   },
// });

// export default ProfileSettingsScreen;


// src/screens/ProfileSettingsScreen.js
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Switch,
  Image,
  Alert,
  Modal,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { getDataWithToken, PutDataWithToken, uploadFileWithToken } from '../Services/mobile-api';
import { getDataFromAsyncStorage, storeDataToAsyncStorage } from '../Services/CommonFunction';
import { mobile_siteConfig } from '../Services/mobile-siteConfig';
import * as ImagePicker from 'react-native-image-picker';

const ProfileSettingsScreen = () => {
  const navigation = useNavigation();
  
  // User data
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    mobile: '',
    profileImage: null
  });

  // Settings states
  const [musicLanguages, setMusicLanguages] = useState(['English', 'Hindi']);
  const [streamingQuality, setStreamingQuality] = useState('HD');
  const [downloadQuality, setDownloadQuality] = useState('HD');
  const [autoPlay, setAutoPlay] = useState(true);
  const [explicitContent, setExplicitContent] = useState(false);
  const [crossfade, setCrossfade] = useState(true);
  
  // Modal states
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [qualityModalVisible, setQualityModalVisible] = useState(false);
  const [languageModalVisible, setLanguageModalVisible] = useState(false);
  const [qualityType, setQualityType] = useState('');
  const [editField, setEditField] = useState('');
  const [tempEditValue, setTempEditValue] = useState('');

  // Loading states
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);

  // Available options
  const qualityOptions = [
    { value: 'Low', description: 'Normal quality (64 kbps)' },
    { value: 'Normal', description: 'Good quality (128 kbps)' },
    { value: 'HD', description: 'High quality (256 kbps)' },
    { value: 'High Quality', description: 'Very high quality (320 kbps)' }
  ];

  const languageOptions = [
    'English', 'Hindi', 
    'Spanish', 'French', 'German', 'Korean', 'Japanese'
  ];

  // Fetch user profile on component mount
  useEffect(() => {
    loadInitialData();
  }, []);

  const loadInitialData = async () => {
    try {
      setInitialLoading(true);
      // Try to get data from AsyncStorage first
      const storedUserData = await getDataFromAsyncStorage(mobile_siteConfig.USER_Data);
      if (storedUserData) {
        console.log('Found stored user data:', storedUserData);
        setUserData({
          name: storedUserData.name || '',
          email: storedUserData.email || '',
          mobile: storedUserData.mobile || '',
          profileImage: storedUserData.profilePic 
            ? `http://103.119.171.213:3001${storedUserData.profilePic}`
            : 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face'
        });
      }
      
      // Always fetch fresh data from API
      await fetchUserProfile();
    } catch (error) {
      console.error('Error loading initial data:', error);
      Alert.alert('Error', 'Failed to load profile data');
    } finally {
      setInitialLoading(false);
    }
  };


  // ProfileSettingsScreen.js mein fetchUserProfile function update karein

const fetchUserProfile = async () => {
  try {
    setLoading(true);
    console.log('Fetching user profile...');
    const response = await getDataWithToken(mobile_siteConfig.GET_PROFILE);
    console.log('Profile API Response:', response);
    
    if (response && response.success && response.user) {
      const user = response.user;
      console.log('User data received:', user);
      
      const profilePicUrl = user.profilePic 
        ? `http://103.119.171.213:3001${user.profilePic}`
        : 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face';
      
      // ✅ TEMPORARY FIX: AGAR DATA NULL HAI TOH DEFAULT SET KAREIN
      const updatedUserData = {
        name: user.name || 'User Name', // ✅ DEFAULT NAME
        email: user.email || '', // ✅ DEFAULT EMAIL
        mobile: user.mobile || '',
        profileImage: profilePicUrl
      };
      
      setUserData(updatedUserData);
      
      // ✅ AsyncStorage mein bhi update karein
      await storeDataToAsyncStorage(mobile_siteConfig.USER_Data, {
        id: user.id,
        // name: user.name,
        // email: user.email,
        // mobile: user.mobile,
         name: updatedUserData.name,
        email: updatedUserData.email,
        mobile: updatedUserData.mobile,
        profilePic: user.profilePic,
        profileImage: profilePicUrl,
        isVerified: user.isVerified,
        createdAt: user.createdAt,
        language: user.language,
        subscription: user.subscription
      });
      
      console.log('User data updated successfully with defaults');
    } else {
      throw new Error(response?.message || 'Failed to fetch profile data');
    }
  } catch (error) {
    console.error('Error fetching profile:', error);
    Alert.alert('Error', error.message || 'Failed to load profile data');
  } finally {
    setLoading(false);
  }
};


// Profile picture upload function mein

const handleProfileImageUpload = () => {
  const options = {
    mediaType: 'photo',
    quality: 0.8,
    maxWidth: 800,
    maxHeight: 800,
    includeBase64: false,
  };

  ImagePicker.launchImageLibrary(options, async (response) => {
    if (response.didCancel) return;
    if (response.errorCode) {
      Alert.alert('Error', response.errorMessage || 'Error picking image');
      return;
    }

    if (response.assets && response.assets.length > 0) {
      const photo = response.assets[0];
      setUploading(true);

      try {
        const formData = new FormData();
        formData.append('profilePic', {
          uri: photo.uri,
          type: photo.type || 'image/jpeg',
          name: photo.fileName || `profile_${Date.now()}.jpg`,
        });
        
        // ✅ CRITICAL: AGAR NAME/EMAIL NULL HAI TOH DEFAULT USE KAREIN
        const userName = userData.name || 'New User';
        const userEmail = userData.email || `${userData.mobile}@afrofy.com`;
        
        formData.append('name', userName);
        formData.append('email', userEmail);
        
        if (userData.mobile) {
          formData.append('mobile', userData.mobile);
        }

        console.log('Uploading profile picture with data:', {
          name: userName,
          email: userEmail,
          mobile: userData.mobile
        });

        const uploadResponse = await uploadFileWithToken(
          formData, 
          mobile_siteConfig.UPDATE_PROFILE
        );

        console.log('Upload Response:', uploadResponse);

        if (uploadResponse && uploadResponse.success && uploadResponse.user) {
          const user = uploadResponse.user;
          const newImageUrl = user.profilePic 
            ? `http://103.119.171.213:3001${user.profilePic}`
            : photo.uri;
            
          // Update local state
          const updatedUserData = {
            name: user.name || userName,
            email: user.email || userEmail,
            mobile: user.mobile,
            profileImage: newImageUrl
          };
          
          setUserData(updatedUserData);
          
          // Update AsyncStorage
          await storeDataToAsyncStorage(mobile_siteConfig.USER_Data, {
            ...user,
            name: user.name || userName,
            email: user.email || userEmail,
            profileImage: newImageUrl
          });
          
          Alert.alert('Success', 'Profile picture updated successfully!');
        } else {
          throw new Error(uploadResponse?.message || 'Upload failed');
        }

      } catch (error) {
        console.error('Upload error:', error);
        Alert.alert('Error', error.message || 'Failed to upload profile picture');
      } finally {
        setUploading(false);
      }
    }
  });
};
  // const fetchUserProfile = async () => {
  //   try {
  //     setLoading(true);
  //     console.log('Fetching user profile...');
  //     const response = await getDataWithToken(mobile_siteConfig.GET_PROFILE);
  //     console.log('Profile API Response:', response);
      
  //     if (response && response.success && response.user) {
  //       const user = response.user;
  //       console.log('User data received:', user);
        
  //       const profilePicUrl = user.profilePic 
  //         ? `http://103.119.171.213:3001${user.profilePic}`
  //         : 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face';
        
  //       const updatedUserData = {
  //         name: user.name || '',
  //         email: user.email || '',
  //         mobile: user.mobile || '',
  //         profileImage: profilePicUrl
  //       };
        
  //       setUserData(updatedUserData);
        
  //       // Store updated data in AsyncStorage
  //       await storeDataToAsyncStorage(mobile_siteConfig.USER_Data, {
  //         ...user,
  //         profileImage: profilePicUrl
  //       });
        
  //       console.log('User data updated successfully');
  //     } else {
  //       throw new Error(response?.message || 'Failed to fetch profile data');
  //     }
  //   } catch (error) {
  //     console.error('Error fetching profile:', error);
  //     Alert.alert('Error', error.message || 'Failed to load profile data');
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // Profile Image Upload with Image Picker
  // const handleProfileImageUpload = () => {
  //   const options = {
  //     mediaType: 'photo',
  //     quality: 0.8,
  //     maxWidth: 800,
  //     maxHeight: 800,
  //     includeBase64: false,
  //   };

  //   ImagePicker.launchImageLibrary(options, async (response) => {
  //     if (response.didCancel) {
  //       console.log('User cancelled image picker');
  //       return;
  //     }

  //     if (response.errorCode) {
  //       Alert.alert('Error', response.errorMessage || 'Error picking image');
  //       return;
  //     }

  //     if (response.assets && response.assets.length > 0) {
  //       const photo = response.assets[0];
  //       setUploading(true);

  //       try {
  //         // Create form data for image upload
  //         const formData = new FormData();
  //         formData.append('profilePic', {
  //           uri: photo.uri,
  //           type: photo.type || 'image/jpeg',
  //           name: photo.fileName || `profile_${Date.now()}.jpg`,
  //         });

  //         console.log('Uploading profile picture...', formData);
         
  //         // ✅ Server ko required fields bhejein
  //       formData.append('name', userData.name);
  //       formData.append('email', userData.email);
  //       if (userData.mobile) {
  //         formData.append('mobile', userData.mobile);
  //       }

  //       console.log('Uploading profile picture with data:', {
  //         name: userData.name,
  //         email: userData.email,
  //         mobile: userData.mobile
  //       });
  //         // Upload profile picture using the new function
  //         const uploadResponse = await uploadFileWithToken(
  //           formData, 
  //           mobile_siteConfig.UPDATE_PROFILE
  //         );

  //         console.log('Upload Response:', uploadResponse);

  //         if (uploadResponse && uploadResponse.success && uploadResponse.user) {
  //           const user = uploadResponse.user;
  //           const newImageUrl = user.profilePic 
  //             ? `http://103.119.171.213:3001${user.profilePic}`
  //             : photo.uri;
              
  //           // // Update local state
  //           // setUserData(prev => ({
  //           //   ...prev,
  //           //   profileImage: newImageUrl
  //           // }));

  //            // Update local state
  //         const updatedUserData = {
  //           name: user.name,
  //           email: user.email,
  //           mobile: user.mobile,
  //           profileImage: newImageUrl
  //         };
          
  //         setUserData(updatedUserData);
            
  //           // Update AsyncStorage
  //           await storeDataToAsyncStorage(mobile_siteConfig.USER_Data, {
  //             ...user,
  //             profileImage: newImageUrl
  //           });
            
  //           Alert.alert('Success', 'Profile picture updated successfully!');
  //         } else {
  //           throw new Error(uploadResponse?.message || 'Upload failed');
  //         }

  //       } catch (error) {
  //         console.error('Upload error:', error);
  //         Alert.alert('Error', error.message || 'Failed to upload profile picture');
  //       } finally {
  //         setUploading(false);
  //       }
  //     }
  //   });
  // };

  const updateUserProfile = async (updatedData) => {
    try {
      setLoading(true);
      
      const payload = {
        name: updatedData.name.trim(),
        email: updatedData.email.trim(),
      };

      console.log('Updating profile with:', payload);

      // Validation
      if (!payload.name || payload.name === '') {
        Alert.alert('Error', 'Name is required');
        setLoading(false);
        return false;
      }

      if (!payload.email || payload.email === '') {
        Alert.alert('Error', 'Email is required');
        setLoading(false);
        return false;
      }

      const response = await PutDataWithToken(payload, mobile_siteConfig.UPDATE_PROFILE);
      console.log('Update Profile Response:', response);

      if (response && response.success && response.user) {
        const user = response.user;
        const updatedUserData = {
          name: user.name || 'User',
          email: user.email || 'unknown@gmail.com',
          mobile: user.mobile,
          profileImage: user.profilePic 
            ? `http://103.119.171.213:3001${user.profilePic}`
            : userData.profileImage
        };
        
        setUserData(updatedUserData);
        
        // Update AsyncStorage
        await storeDataToAsyncStorage(mobile_siteConfig.USER_Data, {
          ...user,
          profileImage: updatedUserData.profileImage
        });
        
        Alert.alert('Success', response.message || 'Profile updated successfully!');
        return true;
      } else {
        throw new Error(response?.message || 'Failed to update profile');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      Alert.alert('Error', error.message || 'Failed to update profile');
      return false;
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Logout',
          style: 'destructive',
          onPress: async () => {
            try {
              await storeDataToAsyncStorage(mobile_siteConfig.MOB_ACCESS_TOKEN_KEY, null);
              await storeDataToAsyncStorage(mobile_siteConfig.USER_Data, null);
              await storeDataToAsyncStorage(mobile_siteConfig.IS_LOGIN,false)
              navigation.reset({
                index: 0,
                routes: [{ name: 'LoginOrRegisterScreen' }],
              });
            } catch (error) {
              console.error('Logout error:', error);
              Alert.alert('Error', 'Failed to logout');
            }
          },
        },
      ]
    );
  };

  const handleEditProfile = (field) => {
    setEditField(field);
    setTempEditValue(
      field === 'name' ? userData.name :
      field === 'email' ? userData.email :
      userData.mobile
    );
    setEditModalVisible(true);
  };

  const handleSaveEdit = async () => {
    if (!tempEditValue.trim()) {
      Alert.alert('Error', 'Please enter a value');
      return;
    }

    const updatedData = { ...userData };
    if (editField === 'name') {
      updatedData.name = tempEditValue;
    } else if (editField === 'email') {
      updatedData.email = tempEditValue;
    }

    const success = await updateUserProfile(updatedData);
    if (success) {
      setEditModalVisible(false);
    }
  };

  const handleQualitySelect = (quality, type) => {
    if (type === 'streaming') {
      setStreamingQuality(quality);
    } else {
      setDownloadQuality(quality);
    }
    setQualityModalVisible(false);
  };

  const handleLanguageToggle = (language) => {
    if (musicLanguages.includes(language)) {
      if (musicLanguages.length > 1) {
        setMusicLanguages(musicLanguages.filter(lang => lang !== language));
      } else {
        Alert.alert('Warning', 'Minimum one language required');
      }
    } else {
      if (musicLanguages.length < 3) {
        setMusicLanguages([...musicLanguages, language]);
      } else {
        Alert.alert('Warning', 'Maximum 3 languages allowed');
      }
    }
  };

  const renderHeader = () => (
    <View style={styles.header}>
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Icon name="arrow-back" size={24} color="#fff" />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Profile & Settings</Text>
      <View style={styles.headerPlaceholder} />
    </View>
  );

  const renderProfileSection = () => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>My Profile</Text>
      
      <View style={styles.profileCard}>
        <View style={styles.profileHeader}>
          <TouchableOpacity 
            style={styles.profileImageContainer}
            onPress={handleProfileImageUpload}
            disabled={uploading}
          >
            <Image 
              source={{ uri: userData.profileImage }} 
              style={styles.profileImage}
              defaultSource={{ uri: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face' }}
            />
            <View style={styles.editImageButton}>
              {uploading ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <Feather name="camera" size={16} color="#fff" />
              )}
            </View>
          </TouchableOpacity>
          <View style={styles.profileInfo}>
            <Text style={styles.userName}>{userData.name || 'Not set'}</Text>
            <Text style={styles.userEmail}>Premium Member</Text>
          </View>
          <TouchableOpacity 
            style={styles.editButton}
            onPress={() => handleEditProfile('name')}
            disabled={loading}
          >
            <Feather name="edit-2" size={18} color="#FF3B3B" />
          </TouchableOpacity>
        </View>

        <View style={styles.infoGrid}>
          <View style={styles.infoItem}>
            <View style={styles.infoIcon}>
              <Feather name="mail" size={18} color="#FF3B3B" />
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Email</Text>
              <Text style={styles.infoValue}>{userData.email || 'Not set'}</Text>
            </View>
            <TouchableOpacity 
              style={styles.smallEditButton}
              onPress={() => handleEditProfile('email')}
              disabled={loading}
            >
              <Feather name="edit-2" size={14} color="#FF3B3B" />
            </TouchableOpacity>
          </View>

          <View style={styles.infoItem}>
            <View style={styles.infoIcon}>
              <Feather name="phone" size={18} color="#FF3B3B" />
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Phone Number</Text>
              <Text style={styles.infoValue}>{userData.mobile || 'Not set'}</Text>
            </View>
            <View style={styles.smallEditButtonDisabled}>
              <Feather name="edit-2" size={14} color="#666" />
            </View>
          </View>
        </View>
      </View>
    </View>
  );

  const renderSettingsSection = () => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Settings</Text>
      
      <View style={styles.settingsCard}>
        {/* Music Languages */}
        <TouchableOpacity 
          style={styles.settingItem}
          onPress={() => setLanguageModalVisible(true)}
        >
          <View style={styles.settingLeft}>
            <View style={styles.settingIcon}>
              <Feather name="globe" size={20} color="#FF3B3B" />
            </View>
            <View style={styles.settingText}>
              <Text style={styles.settingTitle}>Music Language(s)</Text>
              <Text style={styles.settingSubtitle}>
                {musicLanguages.join(', ')}
              </Text>
            </View>
          </View>
          <Icon name="chevron-right" size={24} color="#b3b3b3" />
        </TouchableOpacity>

        <View style={styles.divider} />

        {/* Streaming Quality */}
        <TouchableOpacity 
          style={styles.settingItem}
          onPress={() => {
            setQualityType('streaming');
            setQualityModalVisible(true);
          }}
        >
          <View style={styles.settingLeft}>
            <View style={styles.settingIcon}>
              <Feather name="wifi" size={20} color="#FF3B3B" />
            </View>
            <View style={styles.settingText}>
              <Text style={styles.settingTitle}>Streaming Quality</Text>
              <Text style={styles.settingSubtitle}>{streamingQuality}</Text>
            </View>
          </View>
          <Icon name="chevron-right" size={24} color="#b3b3b3" />
        </TouchableOpacity>

        <View style={styles.divider} />

        {/* Download Quality */}
        <TouchableOpacity 
          style={styles.settingItem}
          onPress={() => {
            setQualityType('download');
            setQualityModalVisible(true);
          }}
        >
          <View style={styles.settingLeft}>
            <View style={styles.settingIcon}>
              <Feather name="download" size={20} color="#FF3B3B" />
            </View>
            <View style={styles.settingText}>
              <Text style={styles.settingTitle}>Download Quality</Text>
              <Text style={styles.settingSubtitle}>{downloadQuality}</Text>
            </View>
          </View>
          <Icon name="chevron-right" size={24} color="#b3b3b3" />
        </TouchableOpacity>

        <View style={styles.divider} />

        {/* Auto-Play */}
        <View style={styles.settingItem}>
          <View style={styles.settingLeft}>
            <View style={styles.settingIcon}>
              <Feather name="play-circle" size={20} color="#FF3B3B" />
            </View>
            <View style={styles.settingText}>
              <Text style={styles.settingTitle}>Auto-Play</Text>
              <Text style={styles.settingSubtitle}>
                Play similar music when your music ends
              </Text>
            </View>
          </View>
          <Switch
            value={autoPlay}
            onValueChange={setAutoPlay}
            trackColor={{ false: '#333333', true: '#FF3B3B' }}
            thumbColor={autoPlay ? '#fff' : '#f4f3f4'}
          />
        </View>

        <View style={styles.divider} />

        {/* Explicit Content */}
        <View style={styles.settingItem}>
          <View style={styles.settingLeft}>
            <View style={styles.settingIcon}>
              <Feather name="alert-triangle" size={20} color="#FF3B3B" />
            </View>
            <View style={styles.settingText}>
              <Text style={styles.settingTitle}>Explicit Content</Text>
              <Text style={styles.settingSubtitle}>
                Allow explicit content in playlists
              </Text>
            </View>
          </View>
          <Switch
            value={explicitContent}
            onValueChange={setExplicitContent}
            trackColor={{ false: '#333333', true: '#FF3B3B' }}
            thumbColor={explicitContent ? '#fff' : '#f4f3f4'}
          />
        </View>

        <View style={styles.divider} />

        {/* Crossfade */}
        <View style={styles.settingItem}>
          <View style={styles.settingLeft}>
            <View style={styles.settingIcon}>
              <Feather name="music" size={20} color="#FF3B3B" />
            </View>
            <View style={styles.settingText}>
              <Text style={styles.settingTitle}>Crossfade</Text>
              <Text style={styles.settingSubtitle}>
                Smooth transition between songs
              </Text>
            </View>
          </View>
          <Switch
            value={crossfade}
            onValueChange={setCrossfade}
            trackColor={{ false: '#333333', true: '#FF3B3B' }}
            thumbColor={crossfade ? '#fff' : '#f4f3f4'}
          />
        </View>
      </View>
    </View>
  );

  const renderOthersSection = () => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Others</Text>
      
      <View style={styles.othersCard}>
        <TouchableOpacity style={styles.otherItem}>
          <View style={styles.otherLeft}>
            <View style={styles.otherIcon}>
              <Feather name="help-circle" size={20} color="#FF3B3B" />
            </View>
            <Text style={styles.otherText}>Help & Support</Text>
          </View>
          <Icon name="chevron-right" size={24} color="#b3b3b3" />
        </TouchableOpacity>

        <View style={styles.divider} />

        <TouchableOpacity style={styles.otherItem}>
          <View style={styles.otherLeft}>
            <View style={styles.otherIcon}>
              <Feather name="shield" size={20} color="#FF3B3B" />
            </View>
            <Text style={styles.otherText}>Privacy Policy</Text>
          </View>
          <Icon name="chevron-right" size={24} color="#b3b3b3" />
        </TouchableOpacity>

        <View style={styles.divider} />

        <TouchableOpacity style={styles.otherItem}>
          <View style={styles.otherLeft}>
            <View style={styles.otherIcon}>
              <Feather name="file-text" size={20} color="#FF3B3B" />
            </View>
            <Text style={styles.otherText}>Terms of Service</Text>
          </View>
          <Icon name="chevron-right" size={24} color="#b3b3b3" />
        </TouchableOpacity>

        <View style={styles.divider} />

        <TouchableOpacity 
          style={styles.otherItem}
          onPress={handleLogout}
        >
          <View style={styles.otherLeft}>
            <View style={styles.otherIcon}>
              <Feather name="log-out" size={20} color="#FF3B3B" />
            </View>
            <Text style={[styles.otherText, styles.logoutText]}>Logout</Text>
          </View>
          <Icon name="chevron-right" size={24} color="#FF3B3B" />
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderEditModal = () => (
    <Modal
      visible={editModalVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={() => setEditModalVisible(false)}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>
              Edit {editField === 'name' ? 'Name' : 'Email'}
            </Text>
            <TouchableOpacity onPress={() => setEditModalVisible(false)}>
              <Icon name="close" size={24} color="#fff" />
            </TouchableOpacity>
          </View>

          <TextInput
            style={styles.textInput}
            placeholder={`Enter your ${editField}`}
            placeholderTextColor="#666"
            value={tempEditValue}
            onChangeText={setTempEditValue}
            autoCapitalize="none"
            keyboardType={editField === 'email' ? 'email-address' : 'default'}
            editable={!loading}
          />

          <View style={styles.modalButtons}>
            <TouchableOpacity 
              style={styles.cancelButton}
              onPress={() => setEditModalVisible(false)}
              disabled={loading}
            >
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.saveButton, loading && styles.disabledButton]}
              onPress={handleSaveEdit}
              disabled={loading}
            >
              {loading ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <Text style={styles.saveButtonText}>Save Changes</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );

  const renderQualityModal = () => (
    <Modal
      visible={qualityModalVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={() => setQualityModalVisible(false)}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>
              Select {qualityType === 'streaming' ? 'Streaming' : 'Download'} Quality
            </Text>
            <TouchableOpacity onPress={() => setQualityModalVisible(false)}>
              <Icon name="close" size={24} color="#fff" />
            </TouchableOpacity>
          </View>

          {qualityOptions.map((quality, index) => (
            <TouchableOpacity
              key={quality.value}
              style={[
                styles.optionItem,
                index === qualityOptions.length - 1 && styles.lastOptionItem
              ]}
              onPress={() => handleQualitySelect(quality.value, qualityType)}
            >
              <View style={styles.optionContent}>
                <Text style={styles.optionText}>{quality.value}</Text>
                <Text style={styles.optionDescription}>{quality.description}</Text>
              </View>
              {(qualityType === 'streaming' ? streamingQuality : downloadQuality) === quality.value && (
                <Icon name="check" size={20} color="#FF3B3B" />
              )}
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </Modal>
  );

  const renderLanguageModal = () => (
    <Modal
      visible={languageModalVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={() => setLanguageModalVisible(false)}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Select Music Languages</Text>
            <TouchableOpacity onPress={() => setLanguageModalVisible(false)}>
              <Icon name="close" size={24} color="#fff" />
            </TouchableOpacity>
          </View>

          <Text style={styles.languageSubtitle}>Select up to 3 languages</Text>

          {languageOptions.map((language, index) => (
            <TouchableOpacity
              key={language}
              style={[
                styles.optionItem,
                index === languageOptions.length - 1 && styles.lastOptionItem
              ]}
              onPress={() => handleLanguageToggle(language)}
            >
              <Text style={styles.optionText}>{language}</Text>
              {musicLanguages.includes(language) && (
                <Icon name="check" size={20} color="#FF3B3B" />
              )}
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </Modal>
  );

  if (initialLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#000" />
        {renderHeader()}
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#FF3B3B" />
          <Text style={styles.loadingText}>Loading your profile...</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      
      {renderHeader()}
      
      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {renderProfileSection()}
        {renderSettingsSection()}
        {renderOthersSection()}
        
        <View style={styles.bottomPadding} />
      </ScrollView>

      {/* Modals */}
      {renderEditModal()}
      {renderQualityModal()}
      {renderLanguageModal()}
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
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#282828',
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  headerPlaceholder: {
    width: 40,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  profileCard: {
    backgroundColor: '#181818',
    marginHorizontal: 16,
    borderRadius: 12,
    padding: 20,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImageContainer: {
    position: 'relative',
    marginRight: 16,
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  editImageButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#FF3B3B',
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#000',
  },
  profileInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 14,
    color: '#FF3B3B',
    fontWeight: '600',
  },
  editButton: {
    padding: 10,
    backgroundColor: 'rgba(255, 59, 59, 0.1)',
    borderRadius: 8,
  },
  infoGrid: {
    gap: 16,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  infoIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255, 59, 59, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  infoContent: {
    flex: 1,
  },
  infoLabel: {
    fontSize: 14,
    color: '#b3b3b3',
    marginBottom: 4,
  },
  infoValue: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
  },
  smallEditButton: {
    padding: 6,
    backgroundColor: 'rgba(255, 59, 59, 0.1)',
    borderRadius: 6,
  },
  smallEditButtonDisabled: {
    padding: 6,
    backgroundColor: 'rgba(102, 102, 102, 0.1)',
    borderRadius: 6,
  },
  settingsCard: {
    backgroundColor: '#181818',
    marginHorizontal: 16,
    borderRadius: 12,
    overflow: 'hidden',
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  settingIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255, 59, 59, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  settingText: {
    flex: 1,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 2,
  },
  settingSubtitle: {
    fontSize: 14,
    color: '#b3b3b3',
  },
  divider: {
    height: 1,
    backgroundColor: '#282828',
    marginLeft: 64,
  },
  othersCard: {
    backgroundColor: '#181818',
    marginHorizontal: 16,
    borderRadius: 12,
    overflow: 'hidden',
  },
  otherItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  otherLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  otherIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255, 59, 59, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  otherText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  logoutText: {
    color: '#FF3B3B',
  },
  bottomPadding: {
    height: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    color: '#fff',
    marginTop: 12,
    fontSize: 16,
  },
  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContent: {
    backgroundColor: '#181818',
    borderRadius: 16,
    width: '100%',
    maxWidth: 400,
    maxHeight: '80%',
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#282828',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  languageSubtitle: {
    fontSize: 14,
    color: '#b3b3b3',
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 16,
  },
  textInput: {
    backgroundColor: '#282828',
    borderRadius: 8,
    padding: 16,
    margin: 20,
    color: '#fff',
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#333',
  },
  modalButtons: {
    flexDirection: 'row',
    padding: 20,
    gap: 12,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: '#282828',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  saveButton: {
    flex: 1,
    backgroundColor: '#FF3B3B',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#666',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#282828',
  },
  optionContent: {
    flex: 1,
  },
  optionText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
    marginBottom: 2,
  },
  optionDescription: {
    fontSize: 14,
    color: '#b3b3b3',
  },
  lastOptionItem: {
    borderBottomWidth: 0,
  },
});

export default ProfileSettingsScreen;