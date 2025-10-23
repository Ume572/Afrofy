
// // import React, { useState } from 'react';
// // import {
// //   View,
// //   Text,
// //   TextInput,
// //   TouchableOpacity,
// //   StyleSheet,
// //   Alert,
// //   Platform,
// //   KeyboardAvoidingView,
// //   ScrollView,
// //   ActivityIndicator
// // } from 'react-native';
// // import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// // import { useNavigation } from '@react-navigation/native';
// // import { postData } from '../Services/mobile-api';
// // import { mobile_siteConfig } from '../Services/mobile-siteConfig';
// // import { wp, hp } from "../assets/Global.Css";

// // const LoginOrRegisterScreen = () => {
// //   const navigation = useNavigation();
// //   const [phone, setPhone] = useState('');
// //   const [loading, setLoading] = useState(false);

// //   const handlePhoneChange = (text) => {
// //     // Allow only numbers - no length restriction for international numbers
// //     if (/^\d*$/.test(text)) {
// //       setPhone(text);
// //     }
// //   };

// //   const handleGoogleLogin = () => {
// //     Alert.alert('Google Login', 'Google sign-in not implemented yet');
// //   };

// //   const handlePhoneContinue = async () => {
// //     // Basic validation - just check if phone is not empty
// //     if (!phone.trim()) {
// //       Alert.alert('Invalid Number', 'Please enter your phone number');
// //       return;
// //     }

// //     setLoading(true);
// //     try {
// //       const response = await postData(
// //         { mobile: phone },
// //         mobile_siteConfig.USER_OTP_REQUEST
// //       );

// //       console.log("OTP API Response:", response);
      
// //       if (response?.success) {
// //         navigation.navigate('EnterOtpScreen' as never, { phoneNumber: phone } as never);
// //       } else {
// //         Alert.alert('Error', response?.message || 'Failed to send OTP');
// //       }
// //     } catch (error) {
// //       console.error("OTP Send Error:", error);
// //       Alert.alert('Network Error', 'Something went wrong. Please try again.');
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <KeyboardAvoidingView 
// //       style={styles.container}
// //       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
// //     >
// //       <ScrollView 
// //         contentContainerStyle={styles.scrollContent}
// //         showsVerticalScrollIndicator={false}
// //         keyboardShouldPersistTaps="handled"
// //       >
// //         {/* Header Section */}
// //         <View style={styles.headerSection}>
// //           <View style={styles.logoContainer}>
// //             <View style={styles.logoCircle}>
// //               <Icon name="music" size={wp(8)} color="#F44242" />
// //             </View>
// //             <Text style={styles.appName}>Afrofy</Text>
// //           </View>
// //           <Text style={styles.welcomeText}>
// //             Welcome to Afrofy
// //           </Text>
// //           <Text style={styles.subtitle}>
// //             Sign in to continue your musical journey
// //           </Text>
// //         </View>

// //         {/* Login Options */}
// //         <View style={styles.loginSection}>
// //           {/* Google Sign-In Button */}
// //           <TouchableOpacity 
// //             style={styles.socialButton} 
// //             onPress={handleGoogleLogin}
// //             activeOpacity={0.8}
// //           >
// //             <View style={styles.socialIconContainer}>
// //               <Icon name="google" size={wp(5)} color="#DB4437" />
// //             </View>
// //             <Text style={styles.socialButtonText}>Continue with Google</Text>
// //             <Icon name="chevron-right" size={wp(5)} color="#666" />
// //           </TouchableOpacity>

// //           {/* Divider */}
// //           <View style={styles.dividerContainer}>
// //             <View style={styles.dividerLine} />
// //             <Text style={styles.dividerText}>or continue with phone</Text>
// //             <View style={styles.dividerLine} />
// //           </View>

// //           {/* Phone Input Section */}
// //           <View style={styles.phoneSection}>
// //             <View style={styles.phoneInputContainer}>
// //               <View style={styles.countryCodeContainer}>
// //                 <Text style={styles.countryFlag}>NG</Text>
// //                 <Text style={styles.countryCode}>+234</Text>
// //               </View>
// //               <TextInput
// //                 placeholder="Enter your phone number"
// //                 placeholderTextColor="#888"
// //                 keyboardType="phone-pad"
// //                 value={phone}
// //                 onChangeText={handlePhoneChange}
// //                 style={styles.phoneInput}
// //                 selectionColor="#F44242"
// //               />
// //             </View>

// //             {/* Simple instruction message */}
// //             {phone.length > 0 && (
// //               <Text style={styles.instructionText}>
// //                 {/* Enter your complete phone number with country code */}
// //               </Text>
// //             )}
// //           </View>

// //           {/* Terms & Privacy */}
// //           <Text style={styles.termsText}>
// //             By continuing, you agree to our{' '}
// //             <Text style={styles.linkText}>Terms of Service</Text> and{' '}
// //             <Text style={styles.linkText}>Privacy Policy</Text>
// //           </Text>

// //           {/* Continue Button */}
// //           <TouchableOpacity
// //             style={[
// //               styles.continueButton,
// //               { 
// //                 opacity: phone.length > 0 ? 1 : 0.6,
// //               },
// //             ]}
// //             onPress={handlePhoneContinue}
// //             disabled={!phone.trim() || loading}
// //             activeOpacity={0.8}
// //           >
// //             {loading ? (
// //               <ActivityIndicator size="small" color="#fff" />
// //             ) : (
// //               <>
// //                 <Text style={styles.continueButtonText}>Continue with Phone</Text>
// //                 <Icon name="arrow-right" size={wp(5)} color="#fff" style={styles.buttonIcon} />
// //               </>
// //             )}
// //           </TouchableOpacity>
// //         </View>

// //         {/* Footer */}
       
// //       </ScrollView>
// //     </KeyboardAvoidingView>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#000',
// //   },
// //   scrollContent: {
// //     flexGrow: 1,
// //     paddingHorizontal: wp(5),
// //     paddingTop: Platform.OS === 'ios' ? hp(8) : hp(5),
// //     paddingBottom: hp(5),
// //   },
// //   headerSection: {
// //     alignItems: 'center',
// //     marginBottom: hp(6),
// //     marginTop: hp(2),
// //   },
// //   logoContainer: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     marginBottom: hp(3),
// //   },
// //   logoCircle: {
// //     width: wp(15),
// //     height: wp(15),
// //     borderRadius: wp(7.5),
// //     backgroundColor: 'rgba(244, 66, 66, 0.1)',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     marginRight: wp(3),
// //     borderWidth: 1,
// //     borderColor: 'rgba(244, 66, 66, 0.3)',
// //   },
// //   appName: {
// //     fontSize: wp(8),
// //     fontWeight: 'bold',
// //     color: '#fff',
// //     letterSpacing: 0.5,
// //   },
// //   welcomeText: {
// //     fontSize: wp(7),
// //     fontWeight: '600',
// //     color: '#fff',
// //     textAlign: 'center',
// //     marginBottom: hp(1),
// //   },
// //   subtitle: {
// //     fontSize: wp(4),
// //     color: '#b3b3b3',
// //     textAlign: 'center',
// //     lineHeight: hp(2.8),
// //   },
// //   loginSection: {
// //     flex: 1,
// //   },
// //   socialButton: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     backgroundColor: 'rgba(255, 255, 255, 0.95)',
// //     paddingVertical: hp(2),
// //     paddingHorizontal: wp(4),
// //     borderRadius: wp(8),
// //     marginBottom: hp(2),
// //     shadowColor: '#000',
// //     shadowOffset: { width: 0, height: 2 },
// //     shadowOpacity: 0.1,
// //     shadowRadius: 8,
// //     elevation: 4,
// //   },
// //   socialIconContainer: {
// //     width: wp(10),
// //     height: wp(10),
// //     borderRadius: wp(5),
// //     backgroundColor: 'rgba(255, 255, 255, 0.9)',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     marginRight: wp(3),
// //     shadowColor: '#000',
// //     shadowOffset: { width: 0, height: 1 },
// //     shadowOpacity: 0.1,
// //     shadowRadius: 4,
// //     elevation: 2,
// //   },
// //   socialButtonText: {
// //     flex: 1,
// //     fontSize: wp(4),
// //     fontWeight: '600',
// //     color: '#000',
// //   },
// //   dividerContainer: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     marginVertical: hp(4),
// //   },
// //   dividerLine: {
// //     flex: 1,
// //     height: 1,
// //     backgroundColor: 'rgba(255, 255, 255, 0.1)',
// //   },
// //   dividerText: {
// //     color: '#888',
// //     marginHorizontal: wp(4),
// //     fontSize: wp(3.5),
// //     fontWeight: '500',
// //   },
// //   phoneSection: {
// //     marginBottom: hp(4),
// //   },
// //   phoneInputContainer: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     backgroundColor: 'rgba(255, 255, 255, 0.05)',
// //     borderRadius: wp(8),
// //     paddingHorizontal: wp(4),
// //     paddingVertical: hp(1),
// //     borderWidth: 1,
// //     borderColor: 'rgba(255, 255, 255, 0.1)',
// //   },
// //   countryCodeContainer: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     backgroundColor: 'rgba(244, 66, 66, 0.1)',
// //     paddingHorizontal: wp(3),
// //     paddingVertical: hp(1.5),
// //     borderRadius: wp(6),
// //     marginRight: wp(3),
// //   },
// //   countryFlag: {
// //     fontSize: wp(4),
// //     marginRight: wp(1.5),
// //      color: '#fff',
// //   },
// //   countryCode: {
// //     color: '#F44242',
// //     fontSize: wp(4),
// //     fontWeight: '600',
// //   },
// //   phoneInput: {
// //     flex: 1,
// //     color: '#fff',
// //     fontSize: wp(4),
// //     fontWeight: '500',
// //     paddingVertical: hp(1.5),
// //   },
// //   instructionText: {
// //     fontSize: wp(3),
// //     color: '#666',
// //     marginTop: hp(1),
// //     marginLeft: wp(1),
// //     fontStyle: 'italic',
// //   },
// //   termsText: {
// //     color: '#888',
// //     fontSize: wp(3),
// //     textAlign: 'center',
// //     lineHeight: hp(2.2),
// //     marginBottom: hp(4),
// //   },
// //   linkText: {
// //     color: '#F44242',
// //     fontWeight: '500',
// //   },
// //   continueButton: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     backgroundColor: '#F44242',
// //     paddingVertical: hp(2.5),
// //     borderRadius: wp(8),
// //     shadowColor: '#F44242',
// //     shadowOffset: { width: 0, height: 4 },
// //     shadowOpacity: 0.3,
// //     shadowRadius: 12,
// //     elevation: 8,
// //   },
// //   continueButtonText: {
// //     fontSize: wp(4.5),
// //     fontWeight: 'bold',
// //     color: '#fff',
// //     marginRight: wp(2),
// //   },
// //   buttonIcon: {
// //     fontWeight: 'bold',
// //   },
// //   footer: {
// //     marginTop: hp(6),
// //     alignItems: 'center',
// //   },
// //   footerText: {
// //     color: '#666',
// //     fontSize: wp(3.5),
// //   },
// //   footerLink: {
// //     color: '#F44242',
// //     fontWeight: '600',
// //   },
// // });

// // export default LoginOrRegisterScreen;

// // // import React, { useState, useRef } from 'react';
// // // import {
// // //   View,
// // //   Text,
// // //   TextInput,
// // //   TouchableOpacity,
// // //   StyleSheet,
// // //   Alert,
// // //   Platform,
// // //   KeyboardAvoidingView,
// // //   ScrollView,
// // //   ActivityIndicator,
// // //   Modal
// // // } from 'react-native';
// // // import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// // // import { useNavigation } from '@react-navigation/native';
// // // import { postData } from '../Services/mobile-api';
// // // import { mobile_siteConfig } from '../Services/mobile-siteConfig';
// // // import { wp, hp } from "../assets/Global.Css";
// // // import {CountryPicker } from 'react-native-country-codes-picker';

// // // const LoginOrRegisterScreen = () => {
// // //   const navigation = useNavigation();
// // //   const [phone, setPhone] = useState('');
// // //   const [loading, setLoading] = useState(false);
// // //   const [showCountryPicker, setShowCountryPicker] = useState(false);
// // //   const [countryCode, setCountryCode] = useState({
// // //     code: 'NG',
// // //     dial_code: '+234',
// // //     name: 'Nigeria'
// // //   });
  
// // //   const phoneInputRef = useRef<TextInput>(null);

// // //   const handlePhoneChange = (text: string) => {
// // //     // Allow only numbers - no length restriction for international numbers
// // //     if (/^\d*$/.test(text)) {
// // //       setPhone(text);
// // //     }
// // //   };

// // //   const handleCountrySelect = (country: any) => {
// // //     setCountryCode({
// // //       code: country.code,
// // //       dial_code: country.dial_code,
// // //       name: country.name
// // //     });
// // //     setShowCountryPicker(false);
// // //     // Focus on phone input after country selection
// // //     setTimeout(() => {
// // //       phoneInputRef.current?.focus();
// // //     }, 100);
// // //   };

// // //   const handleGoogleLogin = () => {
// // //     Alert.alert('Google Login', 'Google sign-in not implemented yet');
// // //   };

// // //   const handlePhoneContinue = async () => {
// // //     // Basic validation - just check if phone is not empty
// // //     if (!phone.trim()) {
// // //       Alert.alert('Invalid Number', 'Please enter your phone number');
// // //       return;
// // //     }

// // //     // Combine country code and phone number
// // //     const fullPhoneNumber = countryCode.dial_code + phone;

// // //     setLoading(true);
// // //     try {
// // //       const response = await postData(
// // //         { mobile: fullPhoneNumber },
// // //         mobile_siteConfig.USER_OTP_REQUEST
// // //       );

// // //       console.log("OTP API Response:", response);
      
// // //       if (response?.success) {
// // //         navigation.navigate('EnterOtpScreen' as never, { 
// // //           phoneNumber: fullPhoneNumber,
// // //           countryCode: countryCode.dial_code,
// // //           countryName: countryCode.name
// // //         } as never);
// // //       } else {
// // //         Alert.alert('Error', response?.message || 'Failed to send OTP');
// // //       }
// // //     } catch (error) {
// // //       console.error("OTP Send Error:", error);
// // //       Alert.alert('Network Error', 'Something went wrong. Please try again.');
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   return (
// // //     <KeyboardAvoidingView 
// // //       style={styles.container}
// // //       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
// // //     >
// // //       <ScrollView 
// // //         contentContainerStyle={styles.scrollContent}
// // //         showsVerticalScrollIndicator={false}
// // //         keyboardShouldPersistTaps="handled"
// // //       >
// // //         {/* Header Section */}
// // //         <View style={styles.headerSection}>
// // //           <View style={styles.logoContainer}>
// // //             <View style={styles.logoCircle}>
// // //               <Icon name="music" size={wp(8)} color="#F44242" />
// // //             </View>
// // //             <Text style={styles.appName}>Afrofy</Text>
// // //           </View>
// // //           <Text style={styles.welcomeText}>
// // //             Welcome to Afrofy
// // //           </Text>
// // //           <Text style={styles.subtitle}>
// // //             Sign in to continue your musical journey
// // //           </Text>
// // //         </View>

// // //         {/* Login Options */}
// // //         <View style={styles.loginSection}>
// // //           {/* Google Sign-In Button */}
// // //           <TouchableOpacity 
// // //             style={styles.socialButton} 
// // //             onPress={handleGoogleLogin}
// // //             activeOpacity={0.8}
// // //           >
// // //             <View style={styles.socialIconContainer}>
// // //               <Icon name="google" size={wp(5)} color="#DB4437" />
// // //             </View>
// // //             <Text style={styles.socialButtonText}>Continue with Google</Text>
// // //             <Icon name="chevron-right" size={wp(5)} color="#666" />
// // //           </TouchableOpacity>

// // //           {/* Divider */}
// // //           <View style={styles.dividerContainer}>
// // //             <View style={styles.dividerLine} />
// // //             <Text style={styles.dividerText}>or continue with phone</Text>
// // //             <View style={styles.dividerLine} />
// // //           </View>

// // //           {/* Phone Input Section */}
// // //           <View style={styles.phoneSection}>
// // //             <View style={styles.phoneInputContainer}>
// // //               {/* Country Code Picker */}
// // //               <TouchableOpacity 
// // //                 style={styles.countryCodeContainer}
// // //                 onPress={() => setShowCountryPicker(true)}
// // //                 activeOpacity={0.8}
// // //               >
// // //                 <Text style={styles.countryFlag}>{countryCode.code}</Text>
// // //                 <Text style={styles.countryCode}>{countryCode.dial_code}</Text>
// // //                 <Icon name="chevron-down" size={wp(4)} color="#F44242" style={styles.dropdownIcon} />
// // //               </TouchableOpacity>
              
// // //               <TextInput
// // //                 ref={phoneInputRef}
// // //                 placeholder="Enter your phone number"
// // //                 placeholderTextColor="#888"
// // //                 keyboardType="phone-pad"
// // //                 value={phone}
// // //                 onChangeText={handlePhoneChange}
// // //                 style={styles.phoneInput}
// // //                 selectionColor="#F44242"
// // //               />
// // //             </View>

// // //             {/* Selected country info */}
// // //             <Text style={styles.countryInfoText}>
// // //               Selected: {countryCode.name} ({countryCode.dial_code})
// // //             </Text>
// // //           </View>

// // //           {/* Terms & Privacy */}
// // //           <Text style={styles.termsText}>
// // //             By continuing, you agree to our{' '}
// // //             <Text style={styles.linkText}>Terms of Service</Text> and{' '}
// // //             <Text style={styles.linkText}>Privacy Policy</Text>
// // //           </Text>

// // //           {/* Continue Button */}
// // //           <TouchableOpacity
// // //             style={[
// // //               styles.continueButton,
// // //               { 
// // //                 opacity: phone.length > 0 ? 1 : 0.6,
// // //               },
// // //             ]}
// // //             onPress={handlePhoneContinue}
// // //             disabled={!phone.trim() || loading}
// // //             activeOpacity={0.8}
// // //           >
// // //             {loading ? (
// // //               <ActivityIndicator size="small" color="#fff" />
// // //             ) : (
// // //               <>
// // //                 <Text style={styles.continueButtonText}>Continue with Phone</Text>
// // //                 <Icon name="arrow-right" size={wp(5)} color="#fff" style={styles.buttonIcon} />
// // //               </>
// // //             )}
// // //           </TouchableOpacity>
// // //         </View>

// // //         {/* Country Picker Modal */}
// // //         <Modal
// // //           visible={showCountryPicker}
// // //           animationType="slide"
// // //           presentationStyle="pageSheet"
// // //           onRequestClose={() => setShowCountryPicker(false)}
// // //         >
// // //           <View style={styles.modalContainer}>
// // //             <View style={styles.modalHeader}>
// // //               <Text style={styles.modalTitle}>Select Country</Text>
// // //               <TouchableOpacity 
// // //                 onPress={() => setShowCountryPicker(false)}
// // //                 style={styles.closeButton}
// // //               >
// // //                 <Icon name="close" size={wp(6)} color="#000" />
// // //               </TouchableOpacity>
// // //             </View>
// // //             <CountryPicker
// // //               show={showCountryPicker}
// // //               pickerButtonOnPress={(item) => {
// // //                 handleCountrySelect(item);
// // //               }}
// // //               lang="en"
// // //               style={{
// // //                 modal: {
// // //                   height: hp(80),
// // //                 },
// // //                 textInput: {
// // //                   height: hp(6),
// // //                   borderRadius: wp(2),
// // //                   paddingHorizontal: wp(4),
// // //                   fontSize: wp(4),
// // //                 },
// // //                 countryButtonStyles: {
// // //                   height: hp(7),
// // //                 },
// // //                 countryName: {
// // //                   fontSize: wp(4),
// // //                   color: '#000',
// // //                 },
// // //                 countryCode: {
// // //                   fontSize: wp(3.5),
// // //                   color: '#666',
// // //                 },
// // //                 dialCode: {
// // //                   fontSize: wp(3.5),
// // //                   color: '#666',
// // //                 }
// // //               }}
// // //               onBackdropPress={() => setShowCountryPicker(false)}
// // //             />
// // //           </View>
// // //         </Modal>
// // //       </ScrollView>
// // //     </KeyboardAvoidingView>
// // //   );
// // // };

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     backgroundColor: '#000',
// // //   },
// // //   scrollContent: {
// // //     flexGrow: 1,
// // //     paddingHorizontal: wp(5),
// // //     paddingTop: Platform.OS === 'ios' ? hp(8) : hp(5),
// // //     paddingBottom: hp(5),
// // //   },
// // //   headerSection: {
// // //     alignItems: 'center',
// // //     marginBottom: hp(6),
// // //     marginTop: hp(2),
// // //   },
// // //   logoContainer: {
// // //     flexDirection: 'row',
// // //     alignItems: 'center',
// // //     marginBottom: hp(3),
// // //   },
// // //   logoCircle: {
// // //     width: wp(15),
// // //     height: wp(15),
// // //     borderRadius: wp(7.5),
// // //     backgroundColor: 'rgba(244, 66, 66, 0.1)',
// // //     justifyContent: 'center',
// // //     alignItems: 'center',
// // //     marginRight: wp(3),
// // //     borderWidth: 1,
// // //     borderColor: 'rgba(244, 66, 66, 0.3)',
// // //   },
// // //   appName: {
// // //     fontSize: wp(8),
// // //     fontWeight: 'bold',
// // //     color: '#fff',
// // //     letterSpacing: 0.5,
// // //   },
// // //   welcomeText: {
// // //     fontSize: wp(7),
// // //     fontWeight: '600',
// // //     color: '#fff',
// // //     textAlign: 'center',
// // //     marginBottom: hp(1),
// // //   },
// // //   subtitle: {
// // //     fontSize: wp(4),
// // //     color: '#b3b3b3',
// // //     textAlign: 'center',
// // //     lineHeight: hp(2.8),
// // //   },
// // //   loginSection: {
// // //     flex: 1,
// // //   },
// // //   socialButton: {
// // //     flexDirection: 'row',
// // //     alignItems: 'center',
// // //     backgroundColor: 'rgba(255, 255, 255, 0.95)',
// // //     paddingVertical: hp(2),
// // //     paddingHorizontal: wp(4),
// // //     borderRadius: wp(8),
// // //     marginBottom: hp(2),
// // //     shadowColor: '#000',
// // //     shadowOffset: { width: 0, height: 2 },
// // //     shadowOpacity: 0.1,
// // //     shadowRadius: 8,
// // //     elevation: 4,
// // //   },
// // //   socialIconContainer: {
// // //     width: wp(10),
// // //     height: wp(10),
// // //     borderRadius: wp(5),
// // //     backgroundColor: 'rgba(255, 255, 255, 0.9)',
// // //     justifyContent: 'center',
// // //     alignItems: 'center',
// // //     marginRight: wp(3),
// // //     shadowColor: '#000',
// // //     shadowOffset: { width: 0, height: 1 },
// // //     shadowOpacity: 0.1,
// // //     shadowRadius: 4,
// // //     elevation: 2,
// // //   },
// // //   socialButtonText: {
// // //     flex: 1,
// // //     fontSize: wp(4),
// // //     fontWeight: '600',
// // //     color: '#000',
// // //   },
// // //   dividerContainer: {
// // //     flexDirection: 'row',
// // //     alignItems: 'center',
// // //     marginVertical: hp(4),
// // //   },
// // //   dividerLine: {
// // //     flex: 1,
// // //     height: 1,
// // //     backgroundColor: 'rgba(255, 255, 255, 0.1)',
// // //   },
// // //   dividerText: {
// // //     color: '#888',
// // //     marginHorizontal: wp(4),
// // //     fontSize: wp(3.5),
// // //     fontWeight: '500',
// // //   },
// // //   phoneSection: {
// // //     marginBottom: hp(4),
// // //   },
// // //   phoneInputContainer: {
// // //     flexDirection: 'row',
// // //     alignItems: 'center',
// // //     backgroundColor: 'rgba(255, 255, 255, 0.05)',
// // //     borderRadius: wp(8),
// // //     paddingHorizontal: wp(4),
// // //     paddingVertical: hp(1),
// // //     borderWidth: 1,
// // //     borderColor: 'rgba(255, 255, 255, 0.1)',
// // //   },
// // //   countryCodeContainer: {
// // //     flexDirection: 'row',
// // //     alignItems: 'center',
// // //     backgroundColor: 'rgba(244, 66, 66, 0.1)',
// // //     paddingHorizontal: wp(3),
// // //     paddingVertical: hp(1.5),
// // //     borderRadius: wp(6),
// // //     marginRight: wp(3),
// // //   },
// // //   countryFlag: {
// // //     fontSize: wp(4),
// // //     marginRight: wp(1.5),
// // //     color: '#fff',
// // //     fontWeight: '600',
// // //   },
// // //   countryCode: {
// // //     color: '#F44242',
// // //     fontSize: wp(4),
// // //     fontWeight: '600',
// // //     marginRight: wp(1),
// // //   },
// // //   dropdownIcon: {
// // //     marginLeft: wp(1),
// // //   },
// // //   phoneInput: {
// // //     flex: 1,
// // //     color: '#fff',
// // //     fontSize: wp(4),
// // //     fontWeight: '500',
// // //     paddingVertical: hp(1.5),
// // //   },
// // //   countryInfoText: {
// // //     fontSize: wp(3),
// // //     color: '#666',
// // //     marginTop: hp(1),
// // //     marginLeft: wp(1),
// // //     fontStyle: 'italic',
// // //   },
// // //   termsText: {
// // //     color: '#888',
// // //     fontSize: wp(3),
// // //     textAlign: 'center',
// // //     lineHeight: hp(2.2),
// // //     marginBottom: hp(4),
// // //   },
// // //   linkText: {
// // //     color: '#F44242',
// // //     fontWeight: '500',
// // //   },
// // //   continueButton: {
// // //     flexDirection: 'row',
// // //     alignItems: 'center',
// // //     justifyContent: 'center',
// // //     backgroundColor: '#F44242',
// // //     paddingVertical: hp(2.5),
// // //     borderRadius: wp(8),
// // //     shadowColor: '#F44242',
// // //     shadowOffset: { width: 0, height: 4 },
// // //     shadowOpacity: 0.3,
// // //     shadowRadius: 12,
// // //     elevation: 8,
// // //   },
// // //   continueButtonText: {
// // //     fontSize: wp(4.5),
// // //     fontWeight: 'bold',
// // //     color: '#fff',
// // //     marginRight: wp(2),
// // //   },
// // //   buttonIcon: {
// // //     fontWeight: 'bold',
// // //   },
// // //   modalContainer: {
// // //     flex: 1,
// // //     backgroundColor: '#fff',
// // //   },
// // //   modalHeader: {
// // //     flexDirection: 'row',
// // //     justifyContent: 'space-between',
// // //     alignItems: 'center',
// // //     paddingHorizontal: wp(5),
// // //     paddingVertical: hp(2),
// // //     borderBottomWidth: 1,
// // //     borderBottomColor: '#eee',
// // //   },
// // //   modalTitle: {
// // //     fontSize: wp(5),
// // //     fontWeight: 'bold',
// // //     color: '#000',
// // //   },
// // //   closeButton: {
// // //     padding: wp(1),
// // //   },
// // // });

// // // export default LoginOrRegisterScreen;

// // // // import React, { useState, useRef } from 'react';
// // // // import {
// // // //   View,
// // // //   Text,
// // // //   TextInput,
// // // //   TouchableOpacity,
// // // //   StyleSheet,
// // // //   Alert,
// // // //   Platform,
// // // //   KeyboardAvoidingView,
// // // //   ScrollView,
// // // //   ActivityIndicator,
// // // //   Modal
// // // // } from 'react-native';
// // // // import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// // // // import { wp, hp } from "../assets/Global.Css";
// // // // import { useNavigation } from '@react-navigation/native';

// // // // // Simple country picker implementation without the problematic package
// // // // const COUNTRY_DATA = [
// // // //   { code: 'NG', dial_code: '+234', name: 'Nigeria', flag: '🇳🇬' },
// // // //   { code: 'IN', dial_code: '+91', name: 'India', flag: '🇮🇳' },
// // // //   { code: 'US', dial_code: '+1', name: 'United States', flag: '🇺🇸' },
// // // //   { code: 'GB', dial_code: '+44', name: 'United Kingdom', flag: '🇬🇧' },
// // // //   { code: 'CA', dial_code: '+1', name: 'Canada', flag: '🇨🇦' },
// // // //   { code: 'AU', dial_code: '+61', name: 'Australia', flag: '🇦🇺' },
// // // //   { code: 'ZA', dial_code: '+27', name: 'South Africa', flag: '🇿🇦' },
// // // //   { code: 'KE', dial_code: '+254', name: 'Kenya', flag: '🇰🇪' },
// // // //   { code: 'GH', dial_code: '+233', name: 'Ghana', flag: '🇬🇭' },
// // // //   { code: 'EG', dial_code: '+20', name: 'Egypt', flag: '🇪🇬' },
// // // // ];

// // // // const LoginOrRegisterScreen = () => {
// // // //   const navigation = useNavigation();
// // // //   const [phone, setPhone] = useState('');
// // // //   const [loading, setLoading] = useState(false);
// // // //   const [showCountryPicker, setShowCountryPicker] = useState(false);
// // // //   const [searchQuery, setSearchQuery] = useState('');
// // // //   const [countryCode, setCountryCode] = useState({
// // // //     code: 'NG',
// // // //     dial_code: '+234',
// // // //     name: 'Nigeria',
// // // //     flag: '🇳🇬'
// // // //   });
  
// // // //   const phoneInputRef = useRef<TextInput>(null);

// // // //   const handlePhoneChange = (text: string) => {
// // // //     if (/^\d*$/.test(text)) {
// // // //       setPhone(text);
// // // //     }
// // // //   };

// // // //   const handleCountrySelect = (country: any) => {
// // // //     setCountryCode({
// // // //       code: country.code,
// // // //       dial_code: country.dial_code,
// // // //       name: country.name,
// // // //       flag: country.flag
// // // //     });
// // // //     setShowCountryPicker(false);
// // // //     setSearchQuery('');
// // // //     setTimeout(() => {
// // // //       phoneInputRef.current?.focus();
// // // //     }, 100);
// // // //   };

// // // //   const handleGoogleLogin = () => {
// // // //     Alert.alert('Google Login', 'Google sign-in not implemented yet');
// // // //   };

// // // //   const handlePhoneContinue = async () => {
// // // //     if (!phone.trim()) {
// // // //       Alert.alert('Invalid Number', 'Please enter your phone number');
// // // //       return;
// // // //     }

// // // //     const fullPhoneNumber = countryCode.dial_code + phone;

// // // //     setLoading(true);
// // // //     try {
// // // //       // Your API call here
// // // //       // const response = await postData(...);
      
// // // //       // For now, simulate API call
// // // //       setTimeout(() => {
// // // //         setLoading(false);
// // // //         navigation.navigate('EnterOtpScreen' as never, { 
// // // //           phoneNumber: fullPhoneNumber 
// // // //         } as never);
// // // //       }, 1500);
      
// // // //     } catch (error) {
// // // //       console.error("OTP Send Error:", error);
// // // //       Alert.alert('Network Error', 'Something went wrong. Please try again.');
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   const filteredCountries = COUNTRY_DATA.filter(country =>
// // // //     country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // // //     country.dial_code.includes(searchQuery) ||
// // // //     country.code.toLowerCase().includes(searchQuery.toLowerCase())
// // // //   );

// // // //   const renderCountryPicker = () => (
// // // //     <Modal
// // // //       visible={showCountryPicker}
// // // //       animationType="slide"
// // // //       presentationStyle="pageSheet"
// // // //       onRequestClose={() => setShowCountryPicker(false)}
// // // //     >
// // // //       <View style={styles.modalContainer}>
// // // //         <View style={styles.modalHeader}>
// // // //           <Text style={styles.modalTitle}>Select Country</Text>
// // // //           <TouchableOpacity 
// // // //             onPress={() => setShowCountryPicker(false)}
// // // //             style={styles.closeButton}
// // // //           >
// // // //             <Icon name="close" size={wp(6)} color="#000" />
// // // //           </TouchableOpacity>
// // // //         </View>

// // // //         {/* Search Bar */}
// // // //         <View style={styles.searchContainer}>
// // // //           <Icon name="magnify" size={wp(5)} color="#666" style={styles.searchIcon} />
// // // //           <TextInput
// // // //             placeholder="Search country..."
// // // //             value={searchQuery}
// // // //             onChangeText={setSearchQuery}
// // // //             style={styles.searchInput}
// // // //             placeholderTextColor="#666"
// // // //           />
// // // //           {searchQuery.length > 0 && (
// // // //             <TouchableOpacity onPress={() => setSearchQuery('')}>
// // // //               <Icon name="close-circle" size={wp(5)} color="#666" />
// // // //             </TouchableOpacity>
// // // //           )}
// // // //         </View>

// // // //         {/* Countries List */}
// // // //         <ScrollView style={styles.countriesList}>
// // // //           {filteredCountries.map((country) => (
// // // //             <TouchableOpacity
// // // //               key={country.code}
// // // //               style={[
// // // //                 styles.countryItem,
// // // //                 countryCode.code === country.code && styles.selectedCountryItem
// // // //               ]}
// // // //               onPress={() => handleCountrySelect(country)}
// // // //             >
// // // //               <View style={styles.countryFlagContainer}>
// // // //                 <Text style={styles.countryFlagText}>{country.flag}</Text>
// // // //               </View>
// // // //               <View style={styles.countryInfo}>
// // // //                 <Text style={styles.countryName}>{country.name}</Text>
// // // //                 <Text style={styles.countryDialCode}>{country.dial_code}</Text>
// // // //               </View>
// // // //               {countryCode.code === country.code && (
// // // //                 <Icon name="check" size={wp(5)} color="#F44242" />
// // // //               )}
// // // //             </TouchableOpacity>
// // // //           ))}
// // // //         </ScrollView>
// // // //       </View>
// // // //     </Modal>
// // // //   );

// // // //   return (
// // // //     <KeyboardAvoidingView 
// // // //       style={styles.container}
// // // //       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
// // // //     >
// // // //       <ScrollView 
// // // //         contentContainerStyle={styles.scrollContent}
// // // //         showsVerticalScrollIndicator={false}
// // // //         keyboardShouldPersistTaps="handled"
// // // //       >
// // // //         {/* Header Section */}
// // // //         <View style={styles.headerSection}>
// // // //           <View style={styles.logoContainer}>
// // // //             <View style={styles.logoCircle}>
// // // //               <Icon name="music" size={wp(8)} color="#F44242" />
// // // //             </View>
// // // //             <Text style={styles.appName}>Afrofy</Text>
// // // //           </View>
// // // //           <Text style={styles.welcomeText}>
// // // //             Welcome to Afrofy
// // // //           </Text>
// // // //           <Text style={styles.subtitle}>
// // // //             Sign in to continue your musical journey
// // // //           </Text>
// // // //         </View>

// // // //         {/* Login Options */}
// // // //         <View style={styles.loginSection}>
// // // //           {/* Google Sign-In Button */}
// // // //           <TouchableOpacity 
// // // //             style={styles.socialButton} 
// // // //             onPress={handleGoogleLogin}
// // // //             activeOpacity={0.8}
// // // //           >
// // // //             <View style={styles.socialIconContainer}>
// // // //               <Icon name="google" size={wp(5)} color="#DB4437" />
// // // //             </View>
// // // //             <Text style={styles.socialButtonText}>Continue with Google</Text>
// // // //             <Icon name="chevron-right" size={wp(5)} color="#666" />
// // // //           </TouchableOpacity>

// // // //           {/* Divider */}
// // // //           <View style={styles.dividerContainer}>
// // // //             <View style={styles.dividerLine} />
// // // //             <Text style={styles.dividerText}>or continue with phone</Text>
// // // //             <View style={styles.dividerLine} />
// // // //           </View>

// // // //           {/* Phone Input Section */}
// // // //           <View style={styles.phoneSection}>
// // // //             <View style={styles.phoneInputContainer}>
// // // //               {/* Country Code Picker Button */}
// // // //               <TouchableOpacity 
// // // //                 style={styles.countryCodeContainer}
// // // //                 onPress={() => setShowCountryPicker(true)}
// // // //                 activeOpacity={0.8}
// // // //               >
// // // //                 <Text style={styles.countryFlag}>{countryCode.flag}</Text>
// // // //                 <Text style={styles.countryCodeText}>{countryCode.dial_code}</Text>
// // // //                 <Icon name="chevron-down" size={wp(4)} color="#F44242" style={styles.dropdownIcon} />
// // // //               </TouchableOpacity>
              
// // // //               <TextInput
// // // //                 ref={phoneInputRef}
// // // //                 placeholder="Enter your phone number"
// // // //                 placeholderTextColor="#888"
// // // //                 keyboardType="phone-pad"
// // // //                 value={phone}
// // // //                 onChangeText={handlePhoneChange}
// // // //                 style={styles.phoneInput}
// // // //                 selectionColor="#F44242"
// // // //               />
// // // //             </View>

// // // //             <Text style={styles.countryInfoText}>
// // // //               Selected: {countryCode.name} ({countryCode.dial_code})
// // // //             </Text>
// // // //           </View>

// // // //           {/* Terms & Privacy */}
// // // //           <Text style={styles.termsText}>
// // // //             By continuing, you agree to our{' '}
// // // //             <Text style={styles.linkText}>Terms of Service</Text> and{' '}
// // // //             <Text style={styles.linkText}>Privacy Policy</Text>
// // // //           </Text>

// // // //           {/* Continue Button */}
// // // //           <TouchableOpacity
// // // //             style={[
// // // //               styles.continueButton,
// // // //               { opacity: phone.length > 0 ? 1 : 0.6 },
// // // //             ]}
// // // //             onPress={handlePhoneContinue}
// // // //             disabled={!phone.trim() || loading}
// // // //             activeOpacity={0.8}
// // // //           >
// // // //             {loading ? (
// // // //               <ActivityIndicator size="small" color="#fff" />
// // // //             ) : (
// // // //               <>
// // // //                 <Text style={styles.continueButtonText}>Continue with Phone</Text>
// // // //                 <Icon name="arrow-right" size={wp(5)} color="#fff" style={styles.buttonIcon} />
// // // //               </>
// // // //             )}
// // // //           </TouchableOpacity>
// // // //         </View>

// // // //         {/* Country Picker Modal */}
// // // //         {renderCountryPicker()}
// // // //       </ScrollView>
// // // //     </KeyboardAvoidingView>
// // // //   );
// // // // };

// // // // const styles = StyleSheet.create({
// // // //   container: {
// // // //     flex: 1,
// // // //     backgroundColor: '#000',
// // // //   },
// // // //   scrollContent: {
// // // //     flexGrow: 1,
// // // //     paddingHorizontal: wp(5),
// // // //     paddingTop: Platform.OS === 'ios' ? hp(8) : hp(5),
// // // //     paddingBottom: hp(5),
// // // //   },
// // // //   headerSection: {
// // // //     alignItems: 'center',
// // // //     marginBottom: hp(6),
// // // //     marginTop: hp(2),
// // // //   },
// // // //   logoContainer: {
// // // //     flexDirection: 'row',
// // // //     alignItems: 'center',
// // // //     marginBottom: hp(3),
// // // //   },
// // // //   logoCircle: {
// // // //     width: wp(15),
// // // //     height: wp(15),
// // // //     borderRadius: wp(7.5),
// // // //     backgroundColor: 'rgba(244, 66, 66, 0.1)',
// // // //     justifyContent: 'center',
// // // //     alignItems: 'center',
// // // //     marginRight: wp(3),
// // // //     borderWidth: 1,
// // // //     borderColor: 'rgba(244, 66, 66, 0.3)',
// // // //   },
// // // //   appName: {
// // // //     fontSize: wp(8),
// // // //     fontWeight: 'bold',
// // // //     color: '#fff',
// // // //     letterSpacing: 0.5,
// // // //   },
// // // //   welcomeText: {
// // // //     fontSize: wp(7),
// // // //     fontWeight: '600',
// // // //     color: '#fff',
// // // //     textAlign: 'center',
// // // //     marginBottom: hp(1),
// // // //   },
// // // //   subtitle: {
// // // //     fontSize: wp(4),
// // // //     color: '#b3b3b3',
// // // //     textAlign: 'center',
// // // //     lineHeight: hp(2.8),
// // // //   },
// // // //   loginSection: {
// // // //     flex: 1,
// // // //   },
// // // //   socialButton: {
// // // //     flexDirection: 'row',
// // // //     alignItems: 'center',
// // // //     backgroundColor: 'rgba(255, 255, 255, 0.95)',
// // // //     paddingVertical: hp(2),
// // // //     paddingHorizontal: wp(4),
// // // //     borderRadius: wp(8),
// // // //     marginBottom: hp(2),
// // // //     shadowColor: '#000',
// // // //     shadowOffset: { width: 0, height: 2 },
// // // //     shadowOpacity: 0.1,
// // // //     shadowRadius: 8,
// // // //     elevation: 4,
// // // //   },
// // // //   socialIconContainer: {
// // // //     width: wp(10),
// // // //     height: wp(10),
// // // //     borderRadius: wp(5),
// // // //     backgroundColor: 'rgba(255, 255, 255, 0.9)',
// // // //     justifyContent: 'center',
// // // //     alignItems: 'center',
// // // //     marginRight: wp(3),
// // // //     shadowColor: '#000',
// // // //     shadowOffset: { width: 0, height: 1 },
// // // //     shadowOpacity: 0.1,
// // // //     shadowRadius: 4,
// // // //     elevation: 2,
// // // //   },
// // // //   socialButtonText: {
// // // //     flex: 1,
// // // //     fontSize: wp(4),
// // // //     fontWeight: '600',
// // // //     color: '#000',
// // // //   },
// // // //   dividerContainer: {
// // // //     flexDirection: 'row',
// // // //     alignItems: 'center',
// // // //     marginVertical: hp(4),
// // // //   },
// // // //   dividerLine: {
// // // //     flex: 1,
// // // //     height: 1,
// // // //     backgroundColor: 'rgba(255, 255, 255, 0.1)',
// // // //   },
// // // //   dividerText: {
// // // //     color: '#888',
// // // //     marginHorizontal: wp(4),
// // // //     fontSize: wp(3.5),
// // // //     fontWeight: '500',
// // // //   },
// // // //   phoneSection: {
// // // //     marginBottom: hp(4),
// // // //   },
// // // //   phoneInputContainer: {
// // // //     flexDirection: 'row',
// // // //     alignItems: 'center',
// // // //     backgroundColor: 'rgba(255, 255, 255, 0.05)',
// // // //     borderRadius: wp(8),
// // // //     paddingHorizontal: wp(4),
// // // //     paddingVertical: hp(1),
// // // //     borderWidth: 1,
// // // //     borderColor: 'rgba(255, 255, 255, 0.1)',
// // // //   },
// // // //   countryCodeContainer: {
// // // //     flexDirection: 'row',
// // // //     alignItems: 'center',
// // // //     backgroundColor: 'rgba(244, 66, 66, 0.1)',
// // // //     paddingHorizontal: wp(3),
// // // //     paddingVertical: hp(1.5),
// // // //     borderRadius: wp(6),
// // // //     marginRight: wp(3),
// // // //   },
// // // //   countryFlag: {
// // // //     fontSize: wp(5),
// // // //     marginRight: wp(1.5),
// // // //   },
// // // //   countryCodeText: {
// // // //     color: '#F44242',
// // // //     fontSize: wp(4),
// // // //     fontWeight: '600',
// // // //     marginRight: wp(1),
// // // //   },
// // // //   dropdownIcon: {
// // // //     marginLeft: wp(1),
// // // //   },
// // // //   phoneInput: {
// // // //     flex: 1,
// // // //     color: '#fff',
// // // //     fontSize: wp(4),
// // // //     fontWeight: '500',
// // // //     paddingVertical: hp(1.5),
// // // //   },
// // // //   countryInfoText: {
// // // //     fontSize: wp(3),
// // // //     color: '#666',
// // // //     marginTop: hp(1),
// // // //     marginLeft: wp(1),
// // // //     fontStyle: 'italic',
// // // //   },
// // // //   termsText: {
// // // //     color: '#888',
// // // //     fontSize: wp(3),
// // // //     textAlign: 'center',
// // // //     lineHeight: hp(2.2),
// // // //     marginBottom: hp(4),
// // // //   },
// // // //   linkText: {
// // // //     color: '#F44242',
// // // //     fontWeight: '500',
// // // //   },
// // // //   continueButton: {
// // // //     flexDirection: 'row',
// // // //     alignItems: 'center',
// // // //     justifyContent: 'center',
// // // //     backgroundColor: '#F44242',
// // // //     paddingVertical: hp(2.5),
// // // //     borderRadius: wp(8),
// // // //     shadowColor: '#F44242',
// // // //     shadowOffset: { width: 0, height: 4 },
// // // //     shadowOpacity: 0.3,
// // // //     shadowRadius: 12,
// // // //     elevation: 8,
// // // //   },
// // // //   continueButtonText: {
// // // //     fontSize: wp(4.5),
// // // //     fontWeight: 'bold',
// // // //     color: '#fff',
// // // //     marginRight: wp(2),
// // // //   },
// // // //   buttonIcon: {
// // // //     fontWeight: 'bold',
// // // //   },
// // // //   modalContainer: {
// // // //     flex: 1,
// // // //     backgroundColor: '#fff',
// // // //   },
// // // //   modalHeader: {
// // // //     flexDirection: 'row',
// // // //     justifyContent: 'space-between',
// // // //     alignItems: 'center',
// // // //     paddingHorizontal: wp(5),
// // // //     paddingVertical: hp(2),
// // // //     borderBottomWidth: 1,
// // // //     borderBottomColor: '#eee',
// // // //   },
// // // //   modalTitle: {
// // // //     fontSize: wp(5),
// // // //     fontWeight: 'bold',
// // // //     color: '#000',
// // // //   },
// // // //   closeButton: {
// // // //     padding: wp(1),
// // // //   },
// // // //   searchContainer: {
// // // //     flexDirection: 'row',
// // // //     alignItems: 'center',
// // // //     margin: wp(4),
// // // //     paddingHorizontal: wp(3),
// // // //     backgroundColor: '#f5f5f5',
// // // //     borderRadius: wp(2),
// // // //     height: hp(6),
// // // //   },
// // // //   searchIcon: {
// // // //     marginRight: wp(2),
// // // //   },
// // // //   searchInput: {
// // // //     flex: 1,
// // // //     fontSize: wp(4),
// // // //     color: '#000',
// // // //     paddingVertical: 0,
// // // //   },
// // // //   countriesList: {
// // // //     flex: 1,
// // // //   },
// // // //   countryItem: {
// // // //     flexDirection: 'row',
// // // //     alignItems: 'center',
// // // //     paddingHorizontal: wp(5),
// // // //     paddingVertical: hp(1.5),
// // // //     borderBottomWidth: 1,
// // // //     borderBottomColor: '#f0f0f0',
// // // //   },
// // // //   selectedCountryItem: {
// // // //     backgroundColor: 'rgba(244, 66, 66, 0.05)',
// // // //   },
// // // //   countryFlagContainer: {
// // // //     width: wp(8),
// // // //     alignItems: 'center',
// // // //   },
// // // //   countryFlagText: {
// // // //     fontSize: wp(5),
// // // //   },
// // // //   countryInfo: {
// // // //     flex: 1,
// // // //     marginLeft: wp(3),
// // // //   },
// // // //   countryName: {
// // // //     fontSize: wp(4),
// // // //     color: '#000',
// // // //     fontWeight: '500',
// // // //   },
// // // //   countryDialCode: {
// // // //     fontSize: wp(3.5),
// // // //     color: '#666',
// // // //     marginTop: hp(0.5),
// // // //   },
// // // // });

// // // // export default LoginOrRegisterScreen;

// import React, { useState, useRef } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Alert,
//   Platform,
//   KeyboardAvoidingView,
//   ScrollView,
//   ActivityIndicator,
//   Modal
// } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import { useNavigation } from '@react-navigation/native';
// import { postData } from '../Services/mobile-api';
// import { mobile_siteConfig } from '../Services/mobile-siteConfig';
// import { wp, hp } from "../assets/Global.Css";

// // Complete country data with flags
// const COUNTRY_DATA = [
//   { code: 'NG', dial_code: '+234', name: 'Nigeria', flag: '🇳🇬' },
//   { code: 'IN', dial_code: '+91', name: 'India', flag: '🇮🇳' },
//   { code: 'US', dial_code: '+1', name: 'United States', flag: '🇺🇸' },
//   { code: 'GB', dial_code: '+44', name: 'United Kingdom', flag: '🇬🇧' },
//   { code: 'CA', dial_code: '+1', name: 'Canada', flag: '🇨🇦' },
//   { code: 'AU', dial_code: '+61', name: 'Australia', flag: '🇦🇺' },
//   { code: 'ZA', dial_code: '+27', name: 'South Africa', flag: '🇿🇦' },
//   { code: 'KE', dial_code: '+254', name: 'Kenya', flag: '🇰🇪' },
//   { code: 'GH', dial_code: '+233', name: 'Ghana', flag: '🇬🇭' },
//   { code: 'EG', dial_code: '+20', name: 'Egypt', flag: '🇪🇬' },
//   { code: 'AE', dial_code: '+971', name: 'UAE', flag: '🇦🇪' },
//   { code: 'SA', dial_code: '+966', name: 'Saudi Arabia', flag: '🇸🇦' },
//   { code: 'PK', dial_code: '+92', name: 'Pakistan', flag: '🇵🇰' },
//   { code: 'BD', dial_code: '+880', name: 'Bangladesh', flag: '🇧🇩' },
//   { code: 'CN', dial_code: '+86', name: 'China', flag: '🇨🇳' },
//   { code: 'JP', dial_code: '+81', name: 'Japan', flag: '🇯🇵' },
//   { code: 'KR', dial_code: '+82', name: 'South Korea', flag: '🇰🇷' },
//   { code: 'SG', dial_code: '+65', name: 'Singapore', flag: '🇸🇬' },
//   { code: 'MY', dial_code: '+60', name: 'Malaysia', flag: '🇲🇾' },
//   { code: 'FR', dial_code: '+33', name: 'France', flag: '🇫🇷' },
//   { code: 'DE', dial_code: '+49', name: 'Germany', flag: '🇩🇪' },
//   { code: 'IT', dial_code: '+39', name: 'Italy', flag: '🇮🇹' },
//   { code: 'ES', dial_code: '+34', name: 'Spain', flag: '🇪🇸' },
//   { code: 'PT', dial_code: '+351', name: 'Portugal', flag: '🇵🇹' },
//   { code: 'NL', dial_code: '+31', name: 'Netherlands', flag: '🇳🇱' },
//   { code: 'BE', dial_code: '+32', name: 'Belgium', flag: '🇧🇪' },
//   { code: 'CH', dial_code: '+41', name: 'Switzerland', flag: '🇨🇭' },
//   { code: 'SE', dial_code: '+46', name: 'Sweden', flag: '🇸🇪' },
//   { code: 'NO', dial_code: '+47', name: 'Norway', flag: '🇳🇴' },
//   { code: 'DK', dial_code: '+45', name: 'Denmark', flag: '🇩🇰' },
//   { code: 'FI', dial_code: '+358', name: 'Finland', flag: '🇫🇮' },
//   { code: 'RU', dial_code: '+7', name: 'Russia', flag: '🇷🇺' },
//   { code: 'BR', dial_code: '+55', name: 'Brazil', flag: '🇧🇷' },
//   { code: 'AR', dial_code: '+54', name: 'Argentina', flag: '🇦🇷' },
//   { code: 'MX', dial_code: '+52', name: 'Mexico', flag: '🇲🇽' },
// ];

// const LoginOrRegisterScreen = () => {
//   const navigation = useNavigation();
//   const [phone, setPhone] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [showCountryPicker, setShowCountryPicker] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [countryCode, setCountryCode] = useState({
//     code: 'NG',
//     dial_code: '+234',
//     name: 'Nigeria',
//     flag: '🇳🇬'
//   });

//   const phoneInputRef = useRef<TextInput>(null);

//   // ✅ Removed digit length restriction
//   const handlePhoneChange = (text: string) => {
//     const cleaned = text.replace(/\s+/g, '');
//     setPhone(cleaned);
//   };

//   const handleCountrySelect = (country: any) => {
//     setCountryCode({
//       code: country.code,
//       dial_code: country.dial_code,
//       name: country.name,
//       flag: country.flag
//     });
//     setShowCountryPicker(false);
//     setSearchQuery('');
//     setTimeout(() => {
//       phoneInputRef.current?.focus();
//     }, 100);
//   };

//   const handleGoogleLogin = () => {
//     Alert.alert('Google Login', 'Google sign-in not implemented yet');
//   };

//   const handlePhoneContinue = async () => {
//     if (!phone.trim()) {
//       Alert.alert('Invalid Number', 'Please enter your phone number');
//       return;
//     }

//     const fullPhoneNumber = countryCode.dial_code + phone;

//     setLoading(true);
//     try {
//       const response = await postData(
//         { mobile: fullPhoneNumber },
//         mobile_siteConfig.USER_OTP_REQUEST
//       );

//       console.log("OTP API Response:", response);

//       if (response?.success) {
//         navigation.navigate('EnterOtpScreen' as never, { 
//           phoneNumber: fullPhoneNumber,
//           countryCode: countryCode.dial_code,
//           countryName: countryCode.name
//         } as never);
//       } else {
//         Alert.alert('Error', response?.message || 'Failed to send OTP');
//       }
//     } catch (error) {
//       console.error("OTP Send Error:", error);
//       Alert.alert('Network Error', 'Something went wrong. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const filteredCountries = COUNTRY_DATA.filter(country =>
//     country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     country.dial_code.includes(searchQuery) ||
//     country.code.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <KeyboardAvoidingView 
//       style={styles.container}
//       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//     >
//       <ScrollView 
//         contentContainerStyle={styles.scrollContent}
//         showsVerticalScrollIndicator={false}
//         keyboardShouldPersistTaps="handled"
//       >
//         {/* Header Section */}
//         <View style={styles.headerSection}>
//           <View style={styles.logoContainer}>
//             <View style={styles.logoCircle}>
//               <Icon name="music" size={wp(8)} color="#F44242" />
//             </View>
//             <Text style={styles.appName}>Afrofy</Text>
//           </View>
//           <Text style={styles.welcomeText}>Welcome to Afrofy</Text>
//           <Text style={styles.subtitle}>Sign in to continue your musical journey</Text>
//         </View>

//         {/* Login Section */}
//         <View style={styles.loginSection}>
//           <TouchableOpacity 
//             style={styles.socialButton} 
//             onPress={handleGoogleLogin}
//             activeOpacity={0.8}
//           >
//             <View style={styles.socialIconContainer}>
//               <Icon name="google" size={wp(5)} color="#DB4437" />
//             </View>
//             <Text style={styles.socialButtonText}>Continue with Google</Text>
//             <Icon name="chevron-right" size={wp(5)} color="#666" />
//           </TouchableOpacity>

//           <View style={styles.dividerContainer}>
//             <View style={styles.dividerLine} />
//             <Text style={styles.dividerText}>or continue with phone</Text>
//             <View style={styles.dividerLine} />
//           </View>

//           {/* Phone Input */}
//           <View style={styles.phoneSection}>
//             <View style={styles.phoneInputContainer}>
//               <TouchableOpacity 
//                 style={styles.countryCodeContainer}
//                 onPress={() => setShowCountryPicker(true)}
//                 activeOpacity={0.8}
//               >
//                 <Text style={styles.countryFlag}>{countryCode.flag}</Text>
//                 <Text style={styles.countryCode}>{countryCode.dial_code}</Text>
//                 <Icon name="chevron-down" size={wp(4)} color="#F44242" />
//               </TouchableOpacity>
              
//               <TextInput
//                 ref={phoneInputRef}
//                 placeholder="Enter your phone number"
//                 placeholderTextColor="#888"
//                 keyboardType="phone-pad"
//                 value={phone}
//                 onChangeText={handlePhoneChange}
//                 style={styles.phoneInput}
//                 selectionColor="#F44242"
//                 maxLength={20} // ✅ allow flexible length
//               />
//             </View>

//             <Text style={styles.countryInfoText}>
//               Selected: {countryCode.name} ({countryCode.dial_code})
//             </Text>
//           </View>

//           <Text style={styles.termsText}>
//             By continuing, you agree to our{' '}
//             <Text style={styles.linkText}>Terms of Service</Text> and{' '}
//             <Text style={styles.linkText}>Privacy Policy</Text>
//           </Text>

//           <TouchableOpacity
//             style={[
//               styles.continueButton,
//               { opacity: phone.length > 0 ? 1 : 0.6 },
//             ]}
//             onPress={handlePhoneContinue}
//             disabled={!phone.trim() || loading}
//             activeOpacity={0.8}
//           >
//             {loading ? (
//               <ActivityIndicator size="small" color="#fff" />
//             ) : (
//               <>
//                 <Text style={styles.continueButtonText}>Continue with Phone</Text>
//                 <Icon name="arrow-right" size={wp(5)} color="#fff" style={styles.buttonIcon} />
//               </>
//             )}
//           </TouchableOpacity>
//         </View>

//         {/* Country Picker Modal */}
//         <Modal
//           visible={showCountryPicker}
//           animationType="slide"
//           presentationStyle="pageSheet"
//           onRequestClose={() => setShowCountryPicker(false)}
//         >
//           <View style={styles.modalContainer}>
//             <View style={styles.modalHeader}>
//               <Text style={styles.modalTitle}>Select Country</Text>
//               <TouchableOpacity 
//                 onPress={() => setShowCountryPicker(false)}
//                 style={styles.closeButton}
//               >
//                 <Icon name="close" size={wp(6)} color="#000" />
//               </TouchableOpacity>
//             </View>

//             <View style={styles.searchContainer}>
//               <Icon name="magnify" size={wp(5)} color="#666" style={styles.searchIcon} />
//               <TextInput
//                 placeholder="Search country..."
//                 value={searchQuery}
//                 onChangeText={setSearchQuery}
//                 style={styles.searchInput}
//                 placeholderTextColor="#666"
//               />
//               {searchQuery.length > 0 && (
//                 <TouchableOpacity onPress={() => setSearchQuery('')}>
//                   <Icon name="close-circle" size={wp(5)} color="#666" />
//                 </TouchableOpacity>
//               )}
//             </View>

//             <ScrollView style={styles.countriesList}>
//               {filteredCountries.map((country) => (
//                 <TouchableOpacity
//                   key={country.code}
//                   style={[
//                     styles.countryItem,
//                     countryCode.code === country.code && styles.selectedCountryItem
//                   ]}
//                   onPress={() => handleCountrySelect(country)}
//                 >
//                   <Text style={styles.countryFlagText}>{country.flag}</Text>
//                   <View style={styles.countryInfo}>
//                     <Text style={styles.countryName}>{country.name}</Text>
//                     <Text style={styles.countryDialCode}>{country.dial_code}</Text>
//                   </View>
//                   {countryCode.code === country.code && (
//                     <Icon name="check" size={wp(5)} color="#F44242" />
//                   )}
//                 </TouchableOpacity>
//               ))}
//             </ScrollView>
//           </View>
//         </Modal>
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// };

// // ✅ Styles unchanged
// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#000' },
//   scrollContent: {
//     flexGrow: 1,
//     paddingHorizontal: wp(5),
//     paddingTop: Platform.OS === 'ios' ? hp(8) : hp(5),
//     paddingBottom: hp(5),
//   },
//   headerSection: {
//     alignItems: 'center',
//     marginBottom: hp(6),
//     marginTop: hp(2),
//   },
//   logoContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: hp(3) },
//   logoCircle: {
//     width: wp(15),
//     height: wp(15),
//     borderRadius: wp(7.5),
//     backgroundColor: 'rgba(244, 66, 66, 0.1)',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: wp(3),
//     borderWidth: 1,
//     borderColor: 'rgba(244, 66, 66, 0.3)',
//   },
//   appName: { fontSize: wp(8), fontWeight: 'bold', color: '#fff', letterSpacing: 0.5 },
//   welcomeText: { fontSize: wp(7), fontWeight: '600', color: '#fff', textAlign: 'center' },
//   subtitle: { fontSize: wp(4), color: '#b3b3b3', textAlign: 'center', lineHeight: hp(2.8) },
//   loginSection: { flex: 1 },
//   socialButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: 'rgba(255,255,255,0.95)',
//     paddingVertical: hp(2),
//     paddingHorizontal: wp(4),
//     borderRadius: wp(8),
//     marginBottom: hp(2),
//     elevation: 4,
//   },
//   socialIconContainer: {
//     width: wp(10),
//     height: wp(10),
//     borderRadius: wp(5),
//     backgroundColor: 'rgba(255,255,255,0.9)',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: wp(3),
//   },
//   socialButtonText: { flex: 1, fontSize: wp(4), fontWeight: '600', color: '#000' },
//   dividerContainer: { flexDirection: 'row', alignItems: 'center', marginVertical: hp(4) },
//   dividerLine: { flex: 1, height: 1, backgroundColor: 'rgba(255,255,255,0.1)' },
//   dividerText: { color: '#888', marginHorizontal: wp(4), fontSize: wp(3.5) },
//   phoneSection: { marginBottom: hp(4) },
//   phoneInputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: 'rgba(255,255,255,0.05)',
//     borderRadius: wp(8),
//     paddingHorizontal: wp(4),
//     paddingVertical: hp(1),
//     borderWidth: 1,
//     borderColor: 'rgba(255,255,255,0.1)',
//   },
//   countryCodeContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: 'rgba(244,66,66,0.1)',
//     paddingHorizontal: wp(3),
//     paddingVertical: hp(1.5),
//     borderRadius: wp(6),
//     marginRight: wp(3),
//   },
//   countryFlag: { fontSize: wp(5), marginRight: wp(2) },
//   countryCode: { color: '#F44242', fontSize: wp(4), fontWeight: '600', marginRight: wp(1) },
//   phoneInput: { flex: 1, color: '#fff', fontSize: wp(4), fontWeight: '500' },
//   countryInfoText: { fontSize: wp(3), color: '#666', marginTop: hp(1), marginLeft: wp(1) },
//   termsText: { color: '#888', fontSize: wp(3), textAlign: 'center', marginBottom: hp(4) },
//   linkText: { color: '#F44242', fontWeight: '500' },
//   continueButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#F44242',
//     paddingVertical: hp(2.5),
//     borderRadius: wp(8),
//     elevation: 8,
//   },
//   continueButtonText: { fontSize: wp(4.5), fontWeight: 'bold', color: '#fff', marginRight: wp(2) },
//   modalContainer: { flex: 1, backgroundColor: '#fff' },
//   modalHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: wp(5),
//     paddingVertical: hp(2),
//     borderBottomWidth: 1,
//     borderBottomColor: '#eee',
//   },
//   modalTitle: { fontSize: wp(5), fontWeight: 'bold', color: '#000' },
//   closeButton: { padding: wp(1) },
//   searchContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#f2f2f2',
//     marginHorizontal: wp(5),
//     marginVertical: hp(2),
//     borderRadius: wp(6),
//     paddingHorizontal: wp(4),
//     height: hp(6),
//   },
//   searchIcon: { marginRight: wp(2) },
//   searchInput: { flex: 1, fontSize: wp(4), color: '#000' },
//   countriesList: { paddingHorizontal: wp(4) },
//   countryItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: hp(1.5),
//     borderBottomWidth: 1,
//     borderBottomColor: '#f0f0f0',
//   },
//   selectedCountryItem: { backgroundColor: 'rgba(244,66,66,0.05)' },
//   countryFlagText: { fontSize: wp(6), marginRight: wp(4) },
//   countryInfo: { flex: 1 },
//   countryName: { fontSize: wp(4), color: '#000' },
//   countryDialCode: { fontSize: wp(3.5), color: '#888' },
// });

// export default LoginOrRegisterScreen;


import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
  ActivityIndicator,
  Modal
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { postData } from '../Services/mobile-api';
import { mobile_siteConfig } from '../Services/mobile-siteConfig';
import { wp, hp } from "../assets/Global.Css";

// Complete country data with flags
const COUNTRY_DATA = [
  
  { "code": "AF", "dial_code": "+93", "name": "Afghanistan", "flag": "🇦🇫" },
  { "code": "AL", "dial_code": "+355", "name": "Albania", "flag": "🇦🇱" },
  { "code": "DZ", "dial_code": "+213", "name": "Algeria", "flag": "🇩🇿" },
  { "code": "AS", "dial_code": "+1684", "name": "American Samoa", "flag": "🇦🇸" },
  { "code": "AD", "dial_code": "+376", "name": "Andorra", "flag": "🇦🇩" },
  { "code": "AO", "dial_code": "+244", "name": "Angola", "flag": "🇦🇴" },
  { "code": "AI", "dial_code": "+1264", "name": "Anguilla", "flag": "🇦🇮" },
  { "code": "AQ", "dial_code": "+672", "name": "Antarctica", "flag": "🇦🇶" },
  { "code": "AG", "dial_code": "+1268", "name": "Antigua and Barbuda", "flag": "🇦🇬" },
  { "code": "AR", "dial_code": "+54", "name": "Argentina", "flag": "🇦🇷" },
  { "code": "AM", "dial_code": "+374", "name": "Armenia", "flag": "🇦🇲" },
  { "code": "AW", "dial_code": "+297", "name": "Aruba", "flag": "🇦🇼" },
  { "code": "AU", "dial_code": "+61", "name": "Australia", "flag": "🇦🇺" },
  { "code": "AT", "dial_code": "+43", "name": "Austria", "flag": "🇦🇹" },
  { "code": "AZ", "dial_code": "+994", "name": "Azerbaijan", "flag": "🇦🇿" },
  { "code": "BS", "dial_code": "+1242", "name": "Bahamas", "flag": "🇧🇸" },
  { "code": "BH", "dial_code": "+973", "name": "Bahrain", "flag": "🇧🇭" },
  { "code": "BD", "dial_code": "+880", "name": "Bangladesh", "flag": "🇧🇩" },
  { "code": "BB", "dial_code": "+1246", "name": "Barbados", "flag": "🇧🇧" },
  { "code": "BY", "dial_code": "+375", "name": "Belarus", "flag": "🇧🇾" },
  { "code": "BE", "dial_code": "+32", "name": "Belgium", "flag": "🇧🇪" },
  { "code": "BZ", "dial_code": "+501", "name": "Belize", "flag": "🇧🇿" },
  { "code": "BJ", "dial_code": "+229", "name": "Benin", "flag": "🇧🇯" },
  { "code": "BM", "dial_code": "+1441", "name": "Bermuda", "flag": "🇧🇲" },
  { "code": "BT", "dial_code": "+975", "name": "Bhutan", "flag": "🇧🇹" },
  { "code": "BO", "dial_code": "+591", "name": "Bolivia", "flag": "🇧🇴" },
  { "code": "BA", "dial_code": "+387", "name": "Bosnia and Herzegovina", "flag": "🇧🇦" },
  { "code": "BW", "dial_code": "+267", "name": "Botswana", "flag": "🇧🇼" },
  { "code": "BV", "dial_code": "+47", "name": "Bouvet Island", "flag": "🇧🇻" },
  { "code": "BR", "dial_code": "+55", "name": "Brazil", "flag": "🇧🇷" },
  { "code": "IO", "dial_code": "+246", "name": "British Indian Ocean Territory", "flag": "🇮🇴" },
  { "code": "BN", "dial_code": "+673", "name": "Brunei Darussalam", "flag": "🇧🇳" },
  { "code": "BG", "dial_code": "+359", "name": "Bulgaria", "flag": "🇧🇬" },
  { "code": "BF", "dial_code": "+226", "name": "Burkina Faso", "flag": "🇧🇫" },
  { "code": "BI", "dial_code": "+257", "name": "Burundi", "flag": "🇧🇮" },
  { "code": "CV", "dial_code": "+238", "name": "Cabo Verde", "flag": "🇨🇻" },
  { "code": "KH", "dial_code": "+855", "name": "Cambodia", "flag": "🇰🇭" },
  { "code": "CM", "dial_code": "+237", "name": "Cameroon", "flag": "🇨🇲" },
  { "code": "CA", "dial_code": "+1", "name": "Canada", "flag": "🇨🇦" },
  { "code": "KY", "dial_code": "+1345", "name": "Cayman Islands", "flag": "🇰🇾" },
  { "code": "CF", "dial_code": "+236", "name": "Central African Republic", "flag": "🇨🇫" },
  { "code": "TD", "dial_code": "+235", "name": "Chad", "flag": "🇹🇩" },
  { "code": "CL", "dial_code": "+56", "name": "Chile", "flag": "🇨🇱" },
  { "code": "CN", "dial_code": "+86", "name": "China", "flag": "🇨🇳" },
  { "code": "CX", "dial_code": "+61", "name": "Christmas Island", "flag": "🇨🇽" },
  { "code": "CC", "dial_code": "+61", "name": "Cocos (Keeling) Islands", "flag": "🇨🇨" },
  { "code": "CO", "dial_code": "+57", "name": "Colombia", "flag": "🇨🇴" },
  { "code": "KM", "dial_code": "+269", "name": "Comoros", "flag": "🇰🇲" },
  { "code": "CG", "dial_code": "+242", "name": "Congo (Congo-Brazzaville)", "flag": "🇨🇬" },
  { "code": "CD", "dial_code": "+243", "name": "Congo (Democratic Republic)", "flag": "🇨🇩" },
  { "code": "CK", "dial_code": "+682", "name": "Cook Islands", "flag": "🇨🇰" },
  { "code": "CR", "dial_code": "+506", "name": "Costa Rica", "flag": "🇨🇷" },
  { "code": "CI", "dial_code": "+225", "name": "Côte d'Ivoire", "flag": "🇨🇮" },
  { "code": "HR", "dial_code": "+385", "name": "Croatia", "flag": "🇭🇷" },
  { "code": "CU", "dial_code": "+53", "name": "Cuba", "flag": "🇨🇺" },
  { "code": "CW", "dial_code": "+599", "name": "Curaçao", "flag": "🇨🇼" },
  { "code": "CY", "dial_code": "+357", "name": "Cyprus", "flag": "🇨🇾" },
  { "code": "CZ", "dial_code": "+420", "name": "Czech Republic", "flag": "🇨🇿" },
  { "code": "DK", "dial_code": "+45", "name": "Denmark", "flag": "🇩🇰" },
  { "code": "DJ", "dial_code": "+253", "name": "Djibouti", "flag": "🇩🇯" },
  { "code": "DM", "dial_code": "+1767", "name": "Dominica", "flag": "🇩🇲" },
  { "code": "DO", "dial_code": "+1809", "name": "Dominican Republic", "flag": "🇩🇴" },
  { "code": "EC", "dial_code": "+593", "name": "Ecuador", "flag": "🇪🇨" },
  { "code": "EG", "dial_code": "+20", "name": "Egypt", "flag": "🇪🇬" },
  { "code": "SV", "dial_code": "+503", "name": "El Salvador", "flag": "🇸🇻" },
  { "code": "GQ", "dial_code": "+240", "name": "Equatorial Guinea", "flag": "🇬🇶" },
  { "code": "ER", "dial_code": "+291", "name": "Eritrea", "flag": "🇪🇷" },
  { "code": "EE", "dial_code": "+372", "name": "Estonia", "flag": "🇪🇪" },
  { "code": "SZ", "dial_code": "+268", "name": "Eswatini", "flag": "🇸🇿" },
  { "code": "ET", "dial_code": "+251", "name": "Ethiopia", "flag": "🇪🇹" },
  { "code": "FK", "dial_code": "+500", "name": "Falkland Islands", "flag": "🇫🇰" },
  { "code": "FO", "dial_code": "+298", "name": "Faroe Islands", "flag": "🇫🇴" },
  { "code": "FJ", "dial_code": "+679", "name": "Fiji", "flag": "🇫🇯" },
  { "code": "FI", "dial_code": "+358", "name": "Finland", "flag": "🇫🇮" },
  { "code": "FR", "dial_code": "+33", "name": "France", "flag": "🇫🇷" },
  { "code": "GF", "dial_code": "+594", "name": "French Guiana", "flag": "🇬🇫" },
  { "code": "PF", "dial_code": "+689", "name": "French Polynesia", "flag": "🇵🇫" },
  { "code": "TF", "dial_code": "+262", "name": "French Southern Territories", "flag": "🇹🇫" },
  { "code": "GA", "dial_code": "+241", "name": "Gabon", "flag": "🇬🇦" },
  { "code": "GM", "dial_code": "+220", "name": "Gambia", "flag": "🇬🇲" },
  { "code": "GE", "dial_code": "+995", "name": "Georgia", "flag": "🇬🇪" },
  { "code": "DE", "dial_code": "+49", "name": "Germany", "flag": "🇩🇪" },
  { "code": "GH", "dial_code": "+233", "name": "Ghana", "flag": "🇬🇭" },
  { "code": "GI", "dial_code": "+350", "name": "Gibraltar", "flag": "🇬🇮" },
  { "code": "GR", "dial_code": "+30", "name": "Greece", "flag": "🇬🇷" },
  { "code": "GL", "dial_code": "+299", "name": "Greenland", "flag": "🇬🇱" },
  { "code": "GD", "dial_code": "+1473", "name": "Grenada", "flag": "🇬🇩" },
  { "code": "GP", "dial_code": "+590", "name": "Guadeloupe", "flag": "🇬🇵" },
  { "code": "GU", "dial_code": "+1671", "name": "Guam", "flag": "🇬🇺" },
  { "code": "GT", "dial_code": "+502", "name": "Guatemala", "flag": "🇬🇹" },
  { "code": "GG", "dial_code": "+44", "name": "Guernsey", "flag": "🇬🇬" },
  { "code": "GN", "dial_code": "+224", "name": "Guinea", "flag": "🇬🇳" },
  { "code": "GW", "dial_code": "+245", "name": "Guinea-Bissau", "flag": "🇬🇼" },
  { "code": "GY", "dial_code": "+592", "name": "Guyana", "flag": "🇬🇾" },
  { "code": "HT", "dial_code": "+509", "name": "Haiti", "flag": "🇭🇹" },
  { "code": "HM", "dial_code": "+672", "name": "Heard Island and McDonald Islands", "flag": "🇭🇲" },
  { "code": "VA", "dial_code": "+379", "name": "Holy See", "flag": "🇻🇦" },
  { "code": "HN", "dial_code": "+504", "name": "Honduras", "flag": "🇭🇳" },
  { "code": "HK", "dial_code": "+852", "name": "Hong Kong", "flag": "🇭🇰" },
  { "code": "HU", "dial_code": "+36", "name": "Hungary", "flag": "🇭🇺" },
  { "code": "IS", "dial_code": "+354", "name": "Iceland", "flag": "🇮🇸" },
  { "code": "IN", "dial_code": "+91", "name": "India", "flag": "🇮🇳" },
  { "code": "ID", "dial_code": "+62", "name": "Indonesia", "flag": "🇮🇩" },
  { "code": "IR", "dial_code": "+98", "name": "Iran", "flag": "🇮🇷" },
  { "code": "IQ", "dial_code": "+964", "name": "Iraq", "flag": "🇮🇶" },
  { "code": "IE", "dial_code": "+353", "name": "Ireland", "flag": "🇮🇪" },
  { "code": "IM", "dial_code": "+44", "name": "Isle of Man", "flag": "🇮🇲" },
  { "code": "IL", "dial_code": "+972", "name": "Israel", "flag": "🇮🇱" },
  { "code": "IT", "dial_code": "+39", "name": "Italy", "flag": "🇮🇹" },
  { "code": "JM", "dial_code": "+1876", "name": "Jamaica", "flag": "🇯🇲" },
  { "code": "JP", "dial_code": "+81", "name": "Japan", "flag": "🇯🇵" },
  { "code": "JE", "dial_code": "+44", "name": "Jersey", "flag": "🇯🇪" },
  { "code": "JO", "dial_code": "+962", "name": "Jordan", "flag": "🇯🇴" },
  { "code": "KZ", "dial_code": "+7", "name": "Kazakhstan", "flag": "🇰🇿" },
  { "code": "KE", "dial_code": "+254", "name": "Kenya", "flag": "🇰🇪" },
  { "code": "KI", "dial_code": "+686", "name": "Kiribati", "flag": "🇰🇮" },
  { "code": "KP", "dial_code": "+850", "name": "Korea (North)", "flag": "🇰🇵" },
  { "code": "KR", "dial_code": "+82", "name": "Korea (South)", "flag": "🇰🇷" },
  { "code": "KW", "dial_code": "+965", "name": "Kuwait", "flag": "🇰🇼" },
  { "code": "KG", "dial_code": "+996", "name": "Kyrgyzstan", "flag": "🇰🇬" },
  { "code": "LA", "dial_code": "+856", "name": "Laos", "flag": "🇱🇦" },
  { "code": "LV", "dial_code": "+371", "name": "Latvia", "flag": "🇱🇻" },
  { "code": "LB", "dial_code": "+961", "name": "Lebanon", "flag": "🇱🇧" },
  { "code": "LS", "dial_code": "+266", "name": "Lesotho", "flag": "🇱🇸" },
  { "code": "LR", "dial_code": "+231", "name": "Liberia", "flag": "🇱🇷" },
  { "code": "LY", "dial_code": "+218", "name": "Libya", "flag": "🇱🇾" },
  { "code": "LI", "dial_code": "+423", "name": "Liechtenstein", "flag": "🇱🇮" },
  { "code": "LT", "dial_code": "+370", "name": "Lithuania", "flag": "🇱🇹" },
  { "code": "LU", "dial_code": "+352", "name": "Luxembourg", "flag": "🇱🇺" },
  { "code": "MO", "dial_code": "+853", "name": "Macao", "flag": "🇲🇴" },
  { "code": "MG", "dial_code": "+261", "name": "Madagascar", "flag": "🇲🇬" },
  { "code": "MW", "dial_code": "+265", "name": "Malawi", "flag": "🇲🇼" },
  { "code": "MY", "dial_code": "+60", "name": "Malaysia", "flag": "🇲🇾" },
  { "code": "MV", "dial_code": "+960", "name": "Maldives", "flag": "🇲🇻" },
  { "code": "ML", "dial_code": "+223", "name": "Mali", "flag": "🇲🇱" },
  { "code": "MT", "dial_code": "+356", "name": "Malta", "flag": "🇲🇹" },
  { "code": "MH", "dial_code": "+692", "name": "Marshall Islands", "flag": "🇲🇭" },
  { "code": "MQ", "dial_code": "+596", "name": "Martinique", "flag": "🇲🇶" },
  { "code": "MR", "dial_code": "+222", "name": "Mauritania", "flag": "🇲🇷" },
  { "code": "MU", "dial_code": "+230", "name": "Mauritius", "flag": "🇲🇺" },
  { "code": "YT", "dial_code": "+262", "name": "Mayotte", "flag": "🇾🇹" },
  { "code": "MX", "dial_code": "+52", "name": "Mexico", "flag": "🇲🇽" },
  { "code": "FM", "dial_code": "+691", "name": "Micronesia", "flag": "🇫🇲" },
  { "code": "MD", "dial_code": "+373", "name": "Moldova", "flag": "🇲🇩" },
  { "code": "MC", "dial_code": "+377", "name": "Monaco", "flag": "🇲🇨" },
  { "code": "MN", "dial_code": "+976", "name": "Mongolia", "flag": "🇲🇳" },
  { "code": "ME", "dial_code": "+382", "name": "Montenegro", "flag": "🇲🇪" },
  { "code": "MS", "dial_code": "+1664", "name": "Montserrat", "flag": "🇲🇸" },
  { "code": "MA", "dial_code": "+212", "name": "Morocco", "flag": "🇲🇦" },
  { "code": "MZ", "dial_code": "+258", "name": "Mozambique", "flag": "🇲🇿" },
  { "code": "MM", "dial_code": "+95", "name": "Myanmar", "flag": "🇲🇲" },
  { "code": "NA", "dial_code": "+264", "name": "Namibia", "flag": "🇳🇦" },
  { "code": "NR", "dial_code": "+674", "name": "Nauru", "flag": "🇳🇷" },
  { "code": "NP", "dial_code": "+977", "name": "Nepal", "flag": "🇳🇵" },
  { "code": "NL", "dial_code": "+31", "name": "Netherlands", "flag": "🇳🇱" },
  { "code": "NC", "dial_code": "+687", "name": "New Caledonia", "flag": "🇳🇨" },
  { "code": "NZ", "dial_code": "+64", "name": "New Zealand", "flag": "🇳🇿" },
  { "code": "NI", "dial_code": "+505", "name": "Nicaragua", "flag": "🇳🇮" },
  { "code": "NE", "dial_code": "+227", "name": "Niger", "flag": "🇳🇪" },
  { "code": "NG", "dial_code": "+234", "name": "Nigeria", "flag": "🇳🇬" },
  { "code": "NU", "dial_code": "+683", "name": "Niue", "flag": "🇳🇺" },
  { "code": "NF", "dial_code": "+672", "name": "Norfolk Island", "flag": "🇳🇫" },
  { "code": "MK", "dial_code": "+389", "name": "North Macedonia", "flag": "🇲🇰" },
  { "code": "MP", "dial_code": "+1670", "name": "Northern Mariana Islands", "flag": "🇲🇵" },
  { "code": "NO", "dial_code": "+47", "name": "Norway", "flag": "🇳🇴" },
  { "code": "OM", "dial_code": "+968", "name": "Oman", "flag": "🇴🇲" },
  { "code": "PK", "dial_code": "+92", "name": "Pakistan", "flag": "🇵🇰" },
  { "code": "PW", "dial_code": "+680", "name": "Palau", "flag": "🇵🇼" },
  { "code": "PS", "dial_code": "+970", "name": "Palestine", "flag": "🇵🇸" },
  { "code": "PA", "dial_code": "+507", "name": "Panama", "flag": "🇵🇦" },
  { "code": "PG", "dial_code": "+675", "name": "Papua New Guinea", "flag": "🇵🇬" },
  { "code": "PY", "dial_code": "+595", "name": "Paraguay", "flag": "🇵🇾" },
  { "code": "PE", "dial_code": "+51", "name": "Peru", "flag": "🇵🇪" },
  { "code": "PH", "dial_code": "+63", "name": "Philippines", "flag": "🇵🇭" },
  { "code": "PN", "dial_code": "+64", "name": "Pitcairn", "flag": "🇵🇳" },
  { "code": "PL", "dial_code": "+48", "name": "Poland", "flag": "🇵🇱" },
  { "code": "PT", "dial_code": "+351", "name": "Portugal", "flag": "🇵🇹" },
  { "code": "PR", "dial_code": "+1787", "name": "Puerto Rico", "flag": "🇵🇷" },
  { "code": "QA", "dial_code": "+974", "name": "Qatar", "flag": "🇶🇦" },
  { "code": "RE", "dial_code": "+262", "name": "Réunion", "flag": "🇷🇪" },
  { "code": "RO", "dial_code": "+40", "name": "Romania", "flag": "🇷🇴" },
  { "code": "RU", "dial_code": "+7", "name": "Russia", "flag": "🇷🇺" },
  { "code": "RW", "dial_code": "+250", "name": "Rwanda", "flag": "🇷🇼" },
  { "code": "BL", "dial_code": "+590", "name": "Saint Barthélemy", "flag": "🇧🇱" },
  { "code": "SH", "dial_code": "+290", "name": "Saint Helena, Ascension and Tristan da Cunha", "flag": "🇸🇭" },
  { "code": "KN", "dial_code": "+1869", "name": "Saint Kitts and Nevis", "flag": "🇰🇳" },
  { "code": "LC", "dial_code": "+1758", "name": "Saint Lucia", "flag": "🇱🇨" },
  { "code": "MF", "dial_code": "+590", "name": "Saint Martin", "flag": "🇲🇫" },
  { "code": "PM", "dial_code": "+508", "name": "Saint Pierre and Miquelon", "flag": "🇵🇲" },
  { "code": "VC", "dial_code": "+1784", "name": "Saint Vincent and the Grenadines", "flag": "🇻🇨" },
  { "code": "WS", "dial_code": "+685", "name": "Samoa", "flag": "🇼🇸" },
  { "code": "SM", "dial_code": "+378", "name": "San Marino", "flag": "🇸🇲" },
  { "code": "ST", "dial_code": "+239", "name": "Sao Tome and Principe", "flag": "🇸🇹" },
  { "code": "SA", "dial_code": "+966", "name": "Saudi Arabia", "flag": "🇸🇦" },
  { "code": "SN", "dial_code": "+221", "name": "Senegal", "flag": "🇸🇳" },
  { "code": "RS", "dial_code": "+381", "name": "Serbia", "flag": "🇷🇸" },
  { "code": "SC", "dial_code": "+248", "name": "Seychelles", "flag": "🇸🇨" },
  { "code": "SL", "dial_code": "+232", "name": "Sierra Leone", "flag": "🇸🇱" },
  { "code": "SG", "dial_code": "+65", "name": "Singapore", "flag": "🇸🇬" },
  { "code": "SX", "dial_code": "+1721", "name": "Sint Maarten", "flag": "🇸🇽" },
  { "code": "SK", "dial_code": "+421", "name": "Slovakia", "flag": "🇸🇰" },
  { "code": "SI", "dial_code": "+386", "name": "Slovenia", "flag": "🇸🇮" },
  { "code": "SB", "dial_code": "+677", "name": "Solomon Islands", "flag": "🇸🇧" },
  { "code": "SO", "dial_code": "+252", "name": "Somalia", "flag": "🇸🇴" },
  { "code": "ZA", "dial_code": "+27", "name": "South Africa", "flag": "🇿🇦" },
  { "code": "GS", "dial_code": "+500", "name": "South Georgia and the South Sandwich Islands", "flag": "🇬🇸" },
  { "code": "SS", "dial_code": "+211", "name": "South Sudan", "flag": "🇸🇸" },
  { "code": "ES", "dial_code": "+34", "name": "Spain", "flag": "🇪🇸" },
  { "code": "LK", "dial_code": "+94", "name": "Sri Lanka", "flag": "🇱🇰" },
  { "code": "SD", "dial_code": "+249", "name": "Sudan", "flag": "🇸🇩" },
  { "code": "SR", "dial_code": "+597", "name": "Suriname", "flag": "🇸🇷" },
  { "code": "SJ", "dial_code": "+47", "name": "Svalbard and Jan Mayen", "flag": "🇸🇯" },
  { "code": "SE", "dial_code": "+46", "name": "Sweden", "flag": "🇸🇪" },
  { "code": "CH", "dial_code": "+41", "name": "Switzerland", "flag": "🇨🇭" },
  { "code": "SY", "dial_code": "+963", "name": "Syria", "flag": "🇸🇾" },
  { "code": "TW", "dial_code": "+886", "name": "Taiwan", "flag": "🇹🇼" },
  { "code": "TJ", "dial_code": "+992", "name": "Tajikistan", "flag": "🇹🇯" },
  { "code": "TZ", "dial_code": "+255", "name": "Tanzania", "flag": "🇹🇿" },
  { "code": "TH", "dial_code": "+66", "name": "Thailand", "flag": "🇹🇭" },
  { "code": "TL", "dial_code": "+670", "name": "Timor-Leste", "flag": "🇹🇱" },
  { "code": "TG", "dial_code": "+228", "name": "Togo", "flag": "🇹🇬" },
  { "code": "TK", "dial_code": "+690", "name": "Tokelau", "flag": "🇹🇰" },
  { "code": "TO", "dial_code": "+676", "name": "Tonga", "flag": "🇹🇴" },
  { "code": "TT", "dial_code": "+1868", "name": "Trinidad and Tobago", "flag": "🇹🇹" },
  { "code": "TN", "dial_code": "+216", "name": "Tunisia", "flag": "🇹🇳" },
  { "code": "TR", "dial_code": "+90", "name": "Turkey", "flag": "🇹🇷" },
  { "code": "TM", "dial_code": "+993", "name": "Turkmenistan", "flag": "🇹🇲" },
  { "code": "TC", "dial_code": "+1649", "name": "Turks and Caicos Islands", "flag": "🇹🇨" },
  { "code": "TV", "dial_code": "+688", "name": "Tuvalu", "flag": "🇹🇻" },
  { "code": "UG", "dial_code": "+256", "name": "Uganda", "flag": "🇺🇬" },
  { "code": "UA", "dial_code": "+380", "name": "Ukraine", "flag": "🇺🇦" },
  { "code": "AE", "dial_code": "+971", "name": "United Arab Emirates", "flag": "🇦🇪" },
  { "code": "GB", "dial_code": "+44", "name": "United Kingdom", "flag": "🇬🇧" },
  { "code": "US", "dial_code": "+1", "name": "United States", "flag": "🇺🇸" },
  { "code": "UM", "dial_code": "+1", "name": "United States Minor Outlying Islands", "flag": "🇺🇲" },
  { "code": "UY", "dial_code": "+598", "name": "Uruguay", "flag": "🇺🇾" },
  { "code": "UZ", "dial_code": "+998", "name": "Uzbekistan", "flag": "🇺🇿" },
  { "code": "VU", "dial_code": "+678", "name": "Vanuatu", "flag": "🇻🇺" },
  { "code": "VE", "dial_code": "+58", "name": "Venezuela", "flag": "🇻🇪" },
  { "code": "VN", "dial_code": "+84", "name": "Vietnam", "flag": "🇻🇳" },
  { "code": "VG", "dial_code": "+1284", "name": "Virgin Islands (British)", "flag": "🇻🇬" },
  { "code": "VI", "dial_code": "+1340", "name": "Virgin Islands (U.S.)", "flag": "🇻🇮" },
  { "code": "WF", "dial_code": "+681", "name": "Wallis and Futuna", "flag": "🇼🇫" },
  { "code": "EH", "dial_code": "+212", "name": "Western Sahara", "flag": "🇪🇭" },
  { "code": "YE", "dial_code": "+967", "name": "Yemen", "flag": "🇾🇪" },
  { "code": "ZM", "dial_code": "+260", "name": "Zambia", "flag": "🇿🇲" },
  { "code": "ZW", "dial_code": "+263", "name": "Zimbabwe", "flag": "🇿🇼" }
]
const LoginOrRegisterScreen = () => {
  const navigation = useNavigation();
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [showCountryPicker, setShowCountryPicker] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [countryCode, setCountryCode] = useState({
    code: 'NG',
    dial_code: '+234',
    name: 'Nigeria',
    flag: '🇳🇬'
  });

  const phoneInputRef = useRef<TextInput>(null);

  // ✅ Allow only numbers without length restriction
  const handlePhoneChange = (text: string) => {
    // Remove any non-digit characters
    const cleaned = text.replace(/[^\d]/g, '');
    setPhone(cleaned);
  };

  const handleCountrySelect = (country: any) => {
    setCountryCode({
      code: country.code,
      dial_code: country.dial_code,
      name: country.name,
      flag: country.flag
    });
    setShowCountryPicker(false);
    setSearchQuery('');
    setTimeout(() => {
      phoneInputRef.current?.focus();
    }, 100);
  };

  const handleGoogleLogin = () => {
    Alert.alert('Google Login', 'Google sign-in not implemented yet');
  };

  const handlePhoneContinue = async () => {
    if (!phone.trim()) {
      Alert.alert('Invalid Number', 'Please enter your phone number');
      return;
    }

    // ✅ FIX: Remove country code from the phone number before sending
    // The API expects just the local number without country code
    const localPhoneNumber = phone;

    setLoading(true);
    try {
      const response = await postData(
        { mobile: localPhoneNumber }, // ✅ Send only local number without country code
        mobile_siteConfig.USER_OTP_REQUEST
      );

      console.log("OTP API Response:", response);

      if (response?.success) {
        // ✅ Pass both full number and local number to next screen
        navigation.navigate('EnterOtpScreen' as never, { 
          phoneNumber: localPhoneNumber, // Local number for OTP verification
          fullPhoneNumber: countryCode.dial_code + localPhoneNumber, // Full number for display
          countryCode: countryCode.dial_code,
          countryName: countryCode.name
        } as never);
      } else {
        Alert.alert('Error', response?.message || 'Failed to send OTP');
      }
    } catch (error) {
      console.error("OTP Send Error:", error);
      Alert.alert('Network Error', 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const filteredCountries = COUNTRY_DATA.filter(country =>
    country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    country.dial_code.includes(searchQuery) ||
    country.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* Header Section */}
        <View style={styles.headerSection}>
          <View style={styles.logoContainer}>
            <View style={styles.logoCircle}>
              <Icon name="music" size={wp(8)} color="#F44242" />
            </View>
            <Text style={styles.appName}>Afrofy</Text>
          </View>
          <Text style={styles.welcomeText}>Welcome to Afrofy</Text>
          <Text style={styles.subtitle}>Sign in to continue your musical journey</Text>
        </View>

        {/* Login Section */}
        <View style={styles.loginSection}>
          <TouchableOpacity 
            style={styles.socialButton} 
            onPress={handleGoogleLogin}
            activeOpacity={0.8}
          >
            <View style={styles.socialIconContainer}>
              <Icon name="google" size={wp(5)} color="#DB4437" />
            </View>
            <Text style={styles.socialButtonText}>Continue with Google</Text>
            <Icon name="chevron-right" size={wp(5)} color="#666" />
          </TouchableOpacity>

          <View style={styles.dividerContainer}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>or continue with phone</Text>
            <View style={styles.dividerLine} />
          </View>

          {/* Phone Input */}
          <View style={styles.phoneSection}>
            <View style={styles.phoneInputContainer}>
              <TouchableOpacity 
                style={styles.countryCodeContainer}
                onPress={() => setShowCountryPicker(true)}
                activeOpacity={0.8}
              >
                <Text style={styles.countryFlag}>{countryCode.flag}</Text>
                <Text style={styles.countryCode}>{countryCode.dial_code}</Text>
                <Icon name="chevron-down" size={wp(4)} color="#F44242" />
              </TouchableOpacity>
              
              <TextInput
                ref={phoneInputRef}
                placeholder="Enter your phone number"
                placeholderTextColor="#888"
                keyboardType="phone-pad"
                value={phone}
                onChangeText={handlePhoneChange}
                style={styles.phoneInput}
                selectionColor="#F44242"
                maxLength={15} // Reasonable max length for phone numbers
              />
            </View>

            <Text style={styles.countryInfoText}>
              Selected: {countryCode.name} ({countryCode.dial_code})
            </Text>
            
            {/* Show full number preview */}
            {phone.length > 0 && (
              <Text style={styles.fullNumberText}>
                Full number: {countryCode.dial_code} {phone}
              </Text>
            )}
          </View>

          <Text style={styles.termsText}>
            By continuing, you agree to our{' '}
            <Text style={styles.linkText}>Terms of Service</Text> and{' '}
            <Text style={styles.linkText}>Privacy Policy</Text>
          </Text>

          <TouchableOpacity
            style={[
              styles.continueButton,
              { opacity: phone.length > 0 ? 1 : 0.6 },
            ]}
            onPress={handlePhoneContinue}
            disabled={!phone.trim() || loading}
            activeOpacity={0.8}
          >
            {loading ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <>
                <Text style={styles.continueButtonText}>Continue with Phone</Text>
                <Icon name="arrow-right" size={wp(5)} color="#fff" style={styles.buttonIcon} />
              </>
            )}
          </TouchableOpacity>
        </View>

        {/* Country Picker Modal */}
        <Modal
          visible={showCountryPicker}
          animationType="slide"
          presentationStyle="pageSheet"
          onRequestClose={() => setShowCountryPicker(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Select Country</Text>
              <TouchableOpacity 
                onPress={() => setShowCountryPicker(false)}
                style={styles.closeButton}
              >
                <Icon name="close" size={wp(6)} color="#000" />
              </TouchableOpacity>
            </View>

            <View style={styles.searchContainer}>
              <Icon name="magnify" size={wp(5)} color="#666" style={styles.searchIcon} />
              <TextInput
                placeholder="Search country..."
                value={searchQuery}
                onChangeText={setSearchQuery}
                style={styles.searchInput}
                placeholderTextColor="#666"
              />
              {searchQuery.length > 0 && (
                <TouchableOpacity onPress={() => setSearchQuery('')}>
                  <Icon name="close-circle" size={wp(5)} color="#666" />
                </TouchableOpacity>
              )}
            </View>

            <ScrollView style={styles.countriesList}>
              {filteredCountries.map((country) => (
                <TouchableOpacity
                  key={country.code}
                  style={[
                    styles.countryItem,
                    countryCode.code === country.code && styles.selectedCountryItem
                  ]}
                  onPress={() => handleCountrySelect(country)}
                >
                  <Text style={styles.countryFlagText}>{country.flag}</Text>
                  <View style={styles.countryInfo}>
                    <Text style={styles.countryName}>{country.name}</Text>
                    <Text style={styles.countryDialCode}>{country.dial_code}</Text>
                  </View>
                  {countryCode.code === country.code && (
                    <Icon name="check" size={wp(5)} color="#F44242" />
                  )}
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </Modal>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: wp(5),
    paddingTop: Platform.OS === 'ios' ? hp(8) : hp(5),
    paddingBottom: hp(5),
  },
  headerSection: {
    alignItems: 'center',
    marginBottom: hp(6),
    marginTop: hp(2),
  },
  logoContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: hp(3) },
  logoCircle: {
    width: wp(15),
    height: wp(15),
    borderRadius: wp(7.5),
    backgroundColor: 'rgba(244, 66, 66, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: wp(3),
    borderWidth: 1,
    borderColor: 'rgba(244, 66, 66, 0.3)',
  },
  appName: { fontSize: wp(8), fontWeight: 'bold', color: '#fff', letterSpacing: 0.5 },
  welcomeText: { 
    fontSize: wp(7), 
    fontWeight: '600', 
    color: '#fff', 
    textAlign: 'center',
    marginBottom: hp(1),
  },
  subtitle: { 
    fontSize: wp(4), 
    color: '#b3b3b3', 
    textAlign: 'center', 
    lineHeight: hp(2.8) 
  },
  loginSection: { flex: 1 },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.95)',
    paddingVertical: hp(2),
    paddingHorizontal: wp(4),
    borderRadius: wp(8),
    marginBottom: hp(2),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  socialIconContainer: {
    width: wp(10),
    height: wp(10),
    borderRadius: wp(5),
    backgroundColor: 'rgba(255,255,255,0.9)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: wp(3),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  socialButtonText: { flex: 1, fontSize: wp(4), fontWeight: '600', color: '#000' },
  dividerContainer: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginVertical: hp(4) 
  },
  dividerLine: { 
    flex: 1, 
    height: 1, 
    backgroundColor: 'rgba(255,255,255,0.1)' 
  },
  dividerText: { 
    color: '#888', 
    marginHorizontal: wp(4), 
    fontSize: wp(3.5),
    fontWeight: '500',
  },
  phoneSection: { marginBottom: hp(4) },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: wp(8),
    paddingHorizontal: wp(4),
    paddingVertical: hp(1),
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  countryCodeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(244,66,66,0.1)',
    paddingHorizontal: wp(3),
    paddingVertical: hp(1.5),
    borderRadius: wp(6),
    marginRight: wp(3),
  },
  countryFlag: { fontSize: wp(5), marginRight: wp(2) },
  countryCode: { 
    color: '#F44242', 
    fontSize: wp(4), 
    fontWeight: '600', 
    marginRight: wp(1) 
  },
  phoneInput: { 
    flex: 1, 
    color: '#fff', 
    fontSize: wp(4), 
    fontWeight: '500',
    paddingVertical: hp(1.5),
  },
  countryInfoText: { 
    fontSize: wp(3), 
    color: '#666', 
    marginTop: hp(1), 
    marginLeft: wp(1) 
  },
  fullNumberText: {
    fontSize: wp(3),
    color: '#888',
    marginTop: hp(0.5),
    marginLeft: wp(1),
    fontStyle: 'italic',
  },
  termsText: { 
    color: '#888', 
    fontSize: wp(3), 
    textAlign: 'center', 
    lineHeight: hp(2.2),
    marginBottom: hp(4) 
  },
  linkText: { color: '#F44242', fontWeight: '500' },
  continueButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F44242',
    paddingVertical: hp(2.5),
    borderRadius: wp(8),
    shadowColor: '#F44242',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
  continueButtonText: { 
    fontSize: wp(4.5), 
    fontWeight: 'bold', 
    color: '#fff', 
    marginRight: wp(2) 
  },
  buttonIcon: {
    fontWeight: 'bold',
  },
  modalContainer: { flex: 1, backgroundColor: '#fff' },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(5),
    paddingVertical: hp(2),
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  modalTitle: { fontSize: wp(5), fontWeight: 'bold', color: '#000' },
  closeButton: { padding: wp(1) },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    marginHorizontal: wp(5),
    marginVertical: hp(2),
    borderRadius: wp(6),
    paddingHorizontal: wp(4),
    height: hp(6),
  },
  searchIcon: { marginRight: wp(2) },
  searchInput: { flex: 1, fontSize: wp(4), color: '#000' },
  countriesList: { paddingHorizontal: wp(4) },
  countryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: hp(1.5),
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  selectedCountryItem: { backgroundColor: 'rgba(244,66,66,0.05)' },
  countryFlagText: { fontSize: wp(6), marginRight: wp(4) },
  countryInfo: { flex: 1 },
  countryName: { fontSize: wp(4), color: '#000' },
  countryDialCode: { fontSize: wp(3.5), color: '#888' },
});

export default LoginOrRegisterScreen;