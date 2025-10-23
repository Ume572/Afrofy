
// // // // // // // // src/screens/EnterOTPScreen.tsx
// // // // // // // import React, { useState, useEffect, useRef } from 'react';
// // // // // // // import {
// // // // // // //   View,
// // // // // // //   Text,
// // // // // // //   TouchableOpacity,
// // // // // // //   StyleSheet,
// // // // // // //   Alert,
// // // // // // //   TextInput,
// // // // // // //   Platform,
// // // // // // // } from 'react-native';
// // // // // // // import { useNavigation, useRoute } from '@react-navigation/native';

// // // // // // // const EnterOtpScreen = () => {
// // // // // // //   const navigation = useNavigation();
// // // // // // //   const route = useRoute();
// // // // // // //   const { phoneNumber } = route.params as { phoneNumber: string };

// // // // // // //   const [otp, setOtp] = useState<string[]>(['', '', '', '', '', '']);
// // // // // // //   const [timer, setTimer] = useState<number>(58);

// // // // // // //   // Create refs for each OTP input
// // // // // // //   const inputRefs = useRef<Array<TextInput | null>>([]);



// // // // // // //   const handleContinue = () => {
// // // // // // //     // Aap chahe to yahan OTP verify logic bhi laga sakte ho
// // // // // // //     navigation.navigate('SignInScreen'); // 👈 yahan apni screen ka name likhna
// // // // // // //   };
// // // // // // //   useEffect(() => {
// // // // // // //     if (timer === 0) return;
// // // // // // //     const interval = setInterval(() => {
// // // // // // //       setTimer((prev) => (prev > 0 ? prev - 1 : 0));
// // // // // // //     }, 1000);
// // // // // // //     return () => clearInterval(interval);
// // // // // // //   }, []);

// // // // // // //   const handleChange = (text: string, index: number) => {
// // // // // // //     if (/^\d*$/.test(text) && text.length <= 1) {
// // // // // // //       const newOtp = [...otp];
// // // // // // //       newOtp[index] = text;
// // // // // // //       setOtp(newOtp);

// // // // // // //       // Move to next input if digit entered
// // // // // // //       if (text && index < 5) {
// // // // // // //         inputRefs.current[index + 1]?.focus();
// // // // // // //       }
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const handleKeyPress = (e: any, index: number) => {
// // // // // // //     if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
// // // // // // //       // Go back to previous input if current is empty and backspace pressed
// // // // // // //       inputRefs.current[index - 1]?.focus();
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const handleResend = () => {
// // // // // // //     setTimer(58);
// // // // // // //     setOtp(['', '', '', '', '', '']);
// // // // // // //     inputRefs.current[0]?.focus();
// // // // // // //     Alert.alert('OTP Resent', `New OTP sent to ${phoneNumber}`);
// // // // // // //   };

// // // // // // //   const handleContinue = () => {
// // // // // // //     const fullOtp = otp.join('');
// // // // // // //     if (fullOtp.length !== 6) {
// // // // // // //       Alert.alert('Error', 'Please enter all 6 digits');
// // // // // // //       return;
// // // // // // //     }
// // // // // // //     Alert.alert('Success', 'Phone verified! 🎉');
// // // // // // //     // navigation.replace('MainTabs'); // Uncomment when ready
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <View style={styles.container}>
// // // // // // //       {/* Header with Back Button */}
// // // // // // //       <View style={styles.header}>
// // // // // // //         <TouchableOpacity onPress={() => navigation.goBack()}>
// // // // // // //           <Text style={styles.backButton}>←</Text>
// // // // // // //         </TouchableOpacity>
// // // // // // //         <Text style={styles.title}>Enter OTP</Text>
// // // // // // //         <View style={{ width: 24 }} /> {/* Spacer for alignment */}
// // // // // // //       </View>

// // // // // // //       {/* Info Text */}
// // // // // // //       <Text style={styles.infoText}>
// // // // // // //         We have sent an OTP to{' '}
// // // // // // //         <Text style={styles.phoneNumber}>{phoneNumber}</Text>{' '}
// // // // // // //         <Text style={styles.editIcon}>✏️</Text>
// // // // // // //       </Text>

// // // // // // //       {/* OTP Input Boxes */}
// // // // // // //       <View style={styles.otpContainer}>
// // // // // // //         {otp.map((digit, index) => (
// // // // // // //           <TextInput
// // // // // // //             key={index}
// // // // // // //             ref={(el) => (inputRefs.current[index] = el)}
// // // // // // //             style={styles.otpInput}
// // // // // // //             value={digit}
// // // // // // //             onChangeText={(text) => handleChange(text, index)}
// // // // // // //             onKeyPress={(e) => handleKeyPress(e, index)}
// // // // // // //             keyboardType="number-pad"
// // // // // // //             maxLength={1}
// // // // // // //             textAlign="center"
// // // // // // //             autoFocus={index === 0}
// // // // // // //             selectionColor="#fff"
// // // // // // //           />
// // // // // // //         ))}
// // // // // // //       </View>

// // // // // // //       {/* Resend Timer or Link */}
// // // // // // //       {timer > 0 ? (
// // // // // // //         <Text style={styles.resendText}>
// // // // // // //           Resend OTP in {String(timer).padStart(2, '0')}
// // // // // // //         </Text>
// // // // // // //       ) : (
// // // // // // //         <TouchableOpacity onPress={handleResend}>
// // // // // // //           <Text style={styles.resendLink}>Resend OTP</Text>
// // // // // // //         </TouchableOpacity>
// // // // // // //       )}

// // // // // // //       {/* Continue Button */}
// // // // // // //       <TouchableOpacity
// // // // // // //         style={[
// // // // // // //           styles.continueButton,
// // // // // // //           { opacity: otp.join('').length === 6 ? 1 : 0.6 },
// // // // // // //         ]}
// // // // // // //         onPress={handleContinue}
// // // // // // //         disabled={otp.join('').length !== 6}
// // // // // // //       >
// // // // // // //         <Text style={styles.continueButtonText}>Continue</Text>
// // // // // // //       </TouchableOpacity>
// // // // // // //     </View>
// // // // // // //   );
// // // // // // // };

// // // // // // // src/screens/EnterOTPScreen.tsx
// // // // // // import React, { useState, useEffect, useRef } from 'react';
// // // // // // import {
// // // // // //   View,
// // // // // //   Text,
// // // // // //   TouchableOpacity,
// // // // // //   StyleSheet,
// // // // // //   Alert,
// // // // // //   TextInput,
// // // // // //   Platform,
// // // // // // } from 'react-native';
// // // // // // import { useNavigation, useRoute } from '@react-navigation/native';

// // // // // // const EnterOtpScreen = () => {
// // // // // //   const navigation = useNavigation();
// // // // // //   const route = useRoute();
// // // // // //   const { phoneNumber } = route.params as { phoneNumber: string };

// // // // // //   const [otp, setOtp] = useState<string[]>(['', '', '', '', '', '']);
// // // // // //   const [timer, setTimer] = useState<number>(58);

// // // // // //   const inputRefs = useRef<Array<TextInput | null>>([]);

// // // // // //   useEffect(() => {
// // // // // //     if (timer === 0) return;
// // // // // //     const interval = setInterval(() => {
// // // // // //       setTimer((prev) => (prev > 0 ? prev - 1 : 0));
// // // // // //     }, 1000);
// // // // // //     return () => clearInterval(interval);
// // // // // //   }, [timer]);

// // // // // //   const handleChange = (text: string, index: number) => {
// // // // // //     if (/^\d*$/.test(text) && text.length <= 1) {
// // // // // //       const newOtp = [...otp];
// // // // // //       newOtp[index] = text;
// // // // // //       setOtp(newOtp);
// // // // // //       if (text && index < 5) inputRefs.current[index + 1]?.focus();
// // // // // //     }
// // // // // //   };

// // // // // //   const handleKeyPress = (e: any, index: number) => {
// // // // // //     if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
// // // // // //       inputRefs.current[index - 1]?.focus();
// // // // // //     }
// // // // // //   };

// // // // // //   const handleResend = () => {
// // // // // //     setTimer(58);
// // // // // //     setOtp(['', '', '', '', '', '']);
// // // // // //     inputRefs.current[0]?.focus();
// // // // // //     Alert.alert('OTP Resent', `New OTP sent to ${phoneNumber}`);
// // // // // //   };

// // // // // //   // ✅ UPDATED FUNCTION
// // // // // //   const handleContinue = () => {
// // // // // //     const fullOtp = otp.join('');
// // // // // //     if (fullOtp.length !== 6) {
// // // // // //       Alert.alert('Error', 'Please enter all 6 digits');
// // // // // //       return;
// // // // // //     }

// // // // // //     Alert.alert('Success', 'Phone verified! 🎉');
// // // // // //     navigation.navigate('SingerSelectionScreen'); // 👈 navigate to next screen
// // // // // //   };

// // // // // //   return (
// // // // // //     <View style={styles.container}>
// // // // // //       <View style={styles.header}>
// // // // // //         <TouchableOpacity onPress={() => navigation.goBack()}>
// // // // // //           <Text style={styles.backButton}>←</Text>
// // // // // //         </TouchableOpacity>
// // // // // //         <Text style={styles.title}>Enter OTP</Text>
// // // // // //         <View style={{ width: 24 }} />
// // // // // //       </View>

// // // // // //       <Text style={styles.infoText}>
// // // // // //         We have sent an OTP to{' '}
// // // // // //         <Text style={styles.phoneNumber}>{phoneNumber}</Text>{' '}
// // // // // //         <Text style={styles.editIcon}>✏️</Text>
// // // // // //       </Text>

// // // // // //       <View style={styles.otpContainer}>
// // // // // //         {otp.map((digit, index) => (
// // // // // //           <TextInput
// // // // // //             key={index}
// // // // // //             ref={(el) => (inputRefs.current[index] = el)}
// // // // // //             style={styles.otpInput}
// // // // // //             value={digit}
// // // // // //             onChangeText={(text) => handleChange(text, index)}
// // // // // //             onKeyPress={(e) => handleKeyPress(e, index)}
// // // // // //             keyboardType="number-pad"
// // // // // //             maxLength={1}
// // // // // //             textAlign="center"
// // // // // //             autoFocus={index === 0}
// // // // // //             selectionColor="#fff"
// // // // // //           />
// // // // // //         ))}
// // // // // //       </View>

// // // // // //       {timer > 0 ? (
// // // // // //         <Text style={styles.resendText}>
// // // // // //           Resend OTP in {String(timer).padStart(2, '0')}
// // // // // //         </Text>
// // // // // //       ) : (
// // // // // //         <TouchableOpacity onPress={handleResend}>
// // // // // //           <Text style={styles.resendLink}>Resend OTP</Text>
// // // // // //         </TouchableOpacity>
// // // // // //       )}

// // // // // //       <TouchableOpacity
// // // // // //         style={[
// // // // // //           styles.continueButton,
// // // // // //           { opacity: otp.join('').length === 6 ? 1 : 0.6 },
// // // // // //         ]}
// // // // // //         onPress={handleContinue}
// // // // // //         disabled={otp.join('').length !== 6}
// // // // // //       >
// // // // // //         <Text style={styles.continueButtonText}>Continue</Text>
// // // // // //       </TouchableOpacity>
// // // // // //     </View>
// // // // // //   );
// // // // // // };

// // // // // // // styles same as before


// // // // // // const styles = StyleSheet.create({
// // // // // //   container: {
// // // // // //     flex: 1,
// // // // // //     backgroundColor: '#000',
// // // // // //     paddingHorizontal: 24,
// // // // // //     paddingTop: Platform.OS === 'android' ? 40 : 60,
// // // // // //   },
// // // // // //   header: {
// // // // // //     flexDirection: 'row',
// // // // // //     alignItems: 'center',
// // // // // //     justifyContent: 'space-between',
// // // // // //     marginBottom: 40,
// // // // // //   },
// // // // // //   backButton: {
// // // // // //     fontSize: 24,
// // // // // //     color: '#fff',
// // // // // //   },
// // // // // //   title: {
// // // // // //     fontSize: 20,
// // // // // //     fontWeight: 'bold',
// // // // // //     color: '#fff',
// // // // // //     flex: 1,
// // // // // //     textAlign: 'center',
// // // // // //   },
// // // // // //   infoText: {
// // // // // //     color: '#aaa',
// // // // // //     fontSize: 14,
// // // // // //     marginBottom: 30,
// // // // // //     textAlign: 'center',
// // // // // //     lineHeight: 20,
// // // // // //   },
// // // // // //   phoneNumber: {
// // // // // //     color: '#fff',
// // // // // //     fontWeight: '600',
// // // // // //   },
// // // // // //   editIcon: {
// // // // // //     color: '#888',
// // // // // //   },
// // // // // //   otpContainer: {
// // // // // //     flexDirection: 'row',
// // // // // //     justifyContent: 'space-between',
// // // // // //     marginBottom: 30,
// // // // // //   },
// // // // // //   otpInput: {
// // // // // //     width: 50,
// // // // // //     height: 56,
// // // // // //     backgroundColor: '#222',
// // // // // //     borderRadius: 12,
// // // // // //     color: '#fff',
// // // // // //     fontSize: 22,
// // // // // //     textAlign: 'center',
// // // // // //     borderWidth: 1,
// // // // // //     borderColor: '#333',
// // // // // //   },
// // // // // //   resendText: {
// // // // // //     color: '#aaa',
// // // // // //     fontSize: 14,
// // // // // //     textAlign: 'center',
// // // // // //     marginBottom: 20,
// // // // // //   },
// // // // // //   resendLink: {
// // // // // //     color: '#fff',
// // // // // //     textDecorationLine: 'underline',
// // // // // //     textAlign: 'center',
// // // // // //     fontSize: 14,
// // // // // //     marginBottom: 30,
// // // // // //   },
// // // // // //   continueButton: {
// // // // // //     backgroundColor: '#fff',
// // // // // //     paddingVertical: 16,
// // // // // //     borderRadius: 12,
// // // // // //     alignItems: 'center',
// // // // // //   },
// // // // // //   continueButtonText: {
// // // // // //     fontSize: 16,
// // // // // //     fontWeight: '600',
// // // // // //     color: '#000',
// // // // // //   },
// // // // // // });

// // // // // // export default EnterOtpScreen;



// // // // // import React, { useState, useEffect, useRef } from 'react';
// // // // // import {
// // // // //   View,
// // // // //   Text,
// // // // //   TouchableOpacity,
// // // // //   StyleSheet,
// // // // //   Alert,
// // // // //   TextInput,
// // // // //   Platform,
// // // // //   Animated,
// // // // //   Dimensions,
// // // // //   KeyboardAvoidingView,
// // // // // } from 'react-native';
// // // // // import { useNavigation, useRoute } from '@react-navigation/native';
// // // // // import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// // // // // const { width, height } = Dimensions.get('window');

// // // // // const EnterOtpScreen = () => {
// // // // //   const navigation = useNavigation();
// // // // //   const route = useRoute();
// // // // //   const { phoneNumber } = route.params as { phoneNumber: string };

// // // // //   const [otp, setOtp] = useState<string[]>(['', '', '', '', '', '']);
// // // // //   const [timer, setTimer] = useState<number>(58);
// // // // //   const [isLoading, setIsLoading] = useState(false);

// // // // //   const inputRefs = useRef<Array<TextInput | null>>([]);
// // // // //   const fadeAnim = useRef(new Animated.Value(0)).current;
// // // // //   const slideAnim = useRef(new Animated.Value(30)).current;

// // // // //   useEffect(() => {
// // // // //     // Start animations
// // // // //     Animated.parallel([
// // // // //       Animated.timing(fadeAnim, {
// // // // //         toValue: 1,
// // // // //         duration: 800,
// // // // //         useNativeDriver: true,
// // // // //       }),
// // // // //       Animated.timing(slideAnim, {
// // // // //         toValue: 0,
// // // // //         duration: 600,
// // // // //         useNativeDriver: true,
// // // // //       }),
// // // // //     ]).start();

// // // // //     // Timer
// // // // //     if (timer === 0) return;
// // // // //     const interval = setInterval(() => {
// // // // //       setTimer((prev) => (prev > 0 ? prev - 1 : 0));
// // // // //     }, 1000);
// // // // //     return () => clearInterval(interval);
// // // // //   }, [timer]);

// // // // //   const handleChange = (text: string, index: number) => {
// // // // //     if (/^\d*$/.test(text) && text.length <= 1) {
// // // // //       const newOtp = [...otp];
// // // // //       newOtp[index] = text;
// // // // //       setOtp(newOtp);

// // // // //       // Auto focus next input
// // // // //       if (text && index < 5) {
// // // // //         setTimeout(() => inputRefs.current[index + 1]?.focus(), 50);
// // // // //       }

// // // // //       // Auto submit when last digit entered
// // // // //       if (text && index === 5) {
// // // // //         const fullOtp = [...newOtp].join('');
// // // // //         if (fullOtp.length === 6) {
// // // // //           handleSubmit(fullOtp);
// // // // //         }
// // // // //       }
// // // // //     }
// // // // //   };

// // // // //   const handleKeyPress = (e: any, index: number) => {
// // // // //     if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
// // // // //       inputRefs.current[index - 1]?.focus();
// // // // //     }
// // // // //   };

// // // // //   const handleResend = () => {
// // // // //     setTimer(58);
// // // // //     setOtp(['', '', '', '', '', '']);
// // // // //     inputRefs.current[0]?.focus();
// // // // //     Alert.alert('OTP Resent', `New OTP sent to ${phoneNumber}`);
// // // // //   };

// // // // //   const handleSubmit = async (fullOtp?: string) => {
// // // // //     const otpCode = fullOtp || otp.join('');

// // // // //     if (otpCode.length !== 6) {
// // // // //       Alert.alert('Error', 'Please enter all 6 digits');
// // // // //       return;
// // // // //     }

// // // // //     setIsLoading(true);

// // // // //     // Simulate API call
// // // // //     setTimeout(() => {
// // // // //       setIsLoading(false);
// // // // //       Alert.alert('Success', 'Phone verified successfully! 🎉', [
// // // // //         {
// // // // //           text: 'Continue',
// // // // //           onPress: () => navigation.navigate('SingerSelectionScreen'),
// // // // //         },
// // // // //       ]);
// // // // //     }, 1500);
// // // // //   };

// // // // //   const formatPhoneNumber = (phone: string) => {
// // // // //     return `+91 ${phone.slice(0, 5)} ${phone.slice(5)}`;
// // // // //   };

// // // // //   return (
// // // // //     <KeyboardAvoidingView 
// // // // //       style={styles.container}
// // // // //       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
// // // // //     >
// // // // //       {/* Background */}
// // // // //       <View style={styles.background}>
// // // // //         <View style={styles.circle1} />
// // // // //         <View style={styles.circle2} />
// // // // //       </View>

// // // // //       {/* Header */}
// // // // //       <Animated.View 
// // // // //         style={[
// // // // //           styles.header,
// // // // //           {
// // // // //             opacity: fadeAnim,
// // // // //             transform: [{ translateY: slideAnim }],
// // // // //           },
// // // // //         ]}
// // // // //       >
// // // // //         <TouchableOpacity 
// // // // //           onPress={() => navigation.goBack()} 
// // // // //           style={styles.backButton}
// // // // //         >
// // // // //           <Icon name="chevron-left" size={28} color="#fff" />
// // // // //         </TouchableOpacity>
// // // // //         <Text style={styles.title}>Verify Phone</Text>
// // // // //         <View style={styles.placeholder} />
// // // // //       </Animated.View>

// // // // //       {/* Content */}
// // // // //       <Animated.View 
// // // // //         style={[
// // // // //           styles.content,
// // // // //           {
// // // // //             opacity: fadeAnim,
// // // // //             transform: [{ translateY: slideAnim }],
// // // // //           },
// // // // //         ]}
// // // // //       >
// // // // //         {/* Phone Info */}
// // // // //         <View style={styles.phoneInfo}>
// // // // //           <View style={styles.phoneIcon}>
// // // // //             <Icon name="cellphone" size={24} color="#1DB954" />
// // // // //           </View>
// // // // //           <Text style={styles.infoText}>
// // // // //             Enter the 6-digit code sent to{'\n'}
// // // // //             <Text style={styles.phoneNumber}>
// // // // //               {formatPhoneNumber(phoneNumber)}
// // // // //             </Text>
// // // // //           </Text>
// // // // //         </View>

// // // // //         {/* OTP Inputs */}
// // // // //         <View style={styles.otpContainer}>
// // // // //           {otp.map((digit, index) => (
// // // // //             <TextInput
// // // // //               key={index}
// // // // //               ref={(el) => (inputRefs.current[index] = el)}
// // // // //               style={[
// // // // //                 styles.otpInput,
// // // // //                 digit && styles.otpInputFilled,
// // // // //                 index === 0 && styles.otpInputFirst,
// // // // //                 index === 5 && styles.otpInputLast,
// // // // //               ]}
// // // // //               value={digit}
// // // // //               onChangeText={(text) => handleChange(text, index)}
// // // // //               onKeyPress={(e) => handleKeyPress(e, index)}
// // // // //               keyboardType="number-pad"
// // // // //               maxLength={1}
// // // // //               textAlign="center"
// // // // //               autoFocus={index === 0}
// // // // //               selectionColor="#1DB954"
// // // // //               placeholder="•"
// // // // //               placeholderTextColor="#444"
// // // // //               editable={!isLoading}
// // // // //             />
// // // // //           ))}
// // // // //         </View>

// // // // //         {/* Timer/Resend */}
// // // // //         <View style={styles.resendSection}>
// // // // //           {timer > 0 ? (
// // // // //             <View style={styles.timerContainer}>
// // // // //               <Icon name="timer-outline" size={16} color="#666" />
// // // // //               <Text style={styles.timerText}>
// // // // //                 Resend code in 00:{String(timer).padStart(2, '0')}
// // // // //               </Text>
// // // // //             </View>
// // // // //           ) : (
// // // // //             <TouchableOpacity onPress={handleResend} style={styles.resendButton}>
// // // // //               <Icon name="refresh" size={16} color="#1DB954" />
// // // // //               <Text style={styles.resendText}>Resend OTP</Text>
// // // // //             </TouchableOpacity>
// // // // //           )}
// // // // //         </View>

// // // // //         {/* Continue Button */}
// // // // //         <TouchableOpacity
// // // // //           style={[
// // // // //             styles.continueButton,
// // // // //             { 
// // // // //               opacity: otp.join('').length === 6 && !isLoading ? 1 : 0.6,
// // // // //               transform: [{ scale: otp.join('').length === 6 ? 1 : 0.98 }]
// // // // //             },
// // // // //           ]}
// // // // //           onPress={() => handleSubmit()}
// // // // //           disabled={otp.join('').length !== 6 || isLoading}
// // // // //           activeOpacity={0.9}
// // // // //         >
// // // // //           {isLoading ? (
// // // // //             <View style={styles.loadingContainer}>
// // // // //               <Animated.View style={styles.loadingSpinner} />
// // // // //               <Text style={styles.continueButtonText}>Verifying...</Text>
// // // // //             </View>
// // // // //           ) : (
// // // // //             <>
// // // // //               <Text style={styles.continueButtonText}>Verify & Continue</Text>
// // // // //               <Icon name="arrow-right" size={20} color="#000" />
// // // // //             </>
// // // // //           )}
// // // // //         </TouchableOpacity>

// // // // //         {/* Help Text */}
// // // // //         <Text style={styles.helpText}>
// // // // //           Didn't receive the code? Check your SMS messages or {' '}
// // // // //           <Text style={styles.helpLink} onPress={handleResend}>
// // // // //             request a new code
// // // // //           </Text>
// // // // //         </Text>
// // // // //       </Animated.View>
// // // // //     </KeyboardAvoidingView>
// // // // //   );
// // // // // };

// // // // // const styles = StyleSheet.create({
// // // // //   container: {
// // // // //     flex: 1,
// // // // //     backgroundColor: '#000',
// // // // //   },
// // // // //   background: {
// // // // //     position: 'absolute',
// // // // //     width: '100%',
// // // // //     height: '100%',
// // // // //   },
// // // // //   circle1: {
// // // // //     position: 'absolute',
// // // // //     top: -100,
// // // // //     right: -100,
// // // // //     width: 300,
// // // // //     height: 300,
// // // // //     borderRadius: 150,
// // // // //     backgroundColor: 'rgba(29, 185, 84, 0.05)',
// // // // //   },
// // // // //   circle2: {
// // // // //     position: 'absolute',
// // // // //     bottom: -150,
// // // // //     left: -100,
// // // // //     width: 400,
// // // // //     height: 400,
// // // // //     borderRadius: 200,
// // // // //     backgroundColor: 'rgba(29, 185, 84, 0.03)',
// // // // //   },
// // // // //   header: {
// // // // //     flexDirection: 'row',
// // // // //     alignItems: 'center',
// // // // //     justifyContent: 'space-between',
// // // // //     paddingHorizontal: 24,
// // // // //     paddingTop: Platform.OS === 'ios' ? 60 : 40,
// // // // //     paddingBottom: 20,
// // // // //   },
// // // // //   backButton: {
// // // // //     padding: 8,
// // // // //   },
// // // // //   title: {
// // // // //     fontSize: 18,
// // // // //     fontWeight: 'bold',
// // // // //     color: '#fff',
// // // // //     textAlign: 'center',
// // // // //   },
// // // // //   placeholder: {
// // // // //     width: 40,
// // // // //   },
// // // // //   content: {
// // // // //     flex: 1,
// // // // //     paddingHorizontal: 24,
// // // // //     paddingTop: 40,
// // // // //   },
// // // // //   phoneInfo: {
// // // // //     alignItems: 'center',
// // // // //     marginBottom: 50,
// // // // //   },
// // // // //   phoneIcon: {
// // // // //     width: 60,
// // // // //     height: 60,
// // // // //     borderRadius: 30,
// // // // //     backgroundColor: 'rgba(29, 185, 84, 0.1)',
// // // // //     justifyContent: 'center',
// // // // //     alignItems: 'center',
// // // // //     marginBottom: 20,
// // // // //     borderWidth: 1,
// // // // //     borderColor: 'rgba(29, 185, 84, 0.2)',
// // // // //   },
// // // // //   infoText: {
// // // // //     color: '#b3b3b3',
// // // // //     fontSize: 16,
// // // // //     textAlign: 'center',
// // // // //     lineHeight: 24,
// // // // //   },
// // // // //   phoneNumber: {
// // // // //     color: '#fff',
// // // // //     fontWeight: '600',
// // // // //     fontSize: 18,
// // // // //   },
// // // // //   otpContainer: {
// // // // //     flexDirection: 'row',
// // // // //     justifyContent: 'space-between',
// // // // //     marginBottom: 40,
// // // // //   },
// // // // //   otpInput: {
// // // // //     width: 52,
// // // // //     height: 62,
// // // // //     backgroundColor: 'rgba(255, 255, 255, 0.05)',
// // // // //     borderRadius: 12,
// // // // //     color: '#fff',
// // // // //     fontSize: 24,
// // // // //     fontWeight: '600',
// // // // //     textAlign: 'center',
// // // // //     borderWidth: 1,
// // // // //     borderColor: 'rgba(255, 255, 255, 0.1)',
// // // // //   },
// // // // //   otpInputFilled: {
// // // // //     backgroundColor: 'rgba(29, 185, 84, 0.1)',
// // // // //     borderColor: 'rgba(29, 185, 84, 0.3)',
// // // // //     color: '#1DB954',
// // // // //   },
// // // // //   otpInputFirst: {
// // // // //     marginLeft: 0,
// // // // //   },
// // // // //   otpInputLast: {
// // // // //     marginRight: 0,
// // // // //   },
// // // // //   resendSection: {
// // // // //     alignItems: 'center',
// // // // //     marginBottom: 30,
// // // // //   },
// // // // //   timerContainer: {
// // // // //     flexDirection: 'row',
// // // // //     alignItems: 'center',
// // // // //     backgroundColor: 'rgba(255, 255, 255, 0.05)',
// // // // //     paddingHorizontal: 16,
// // // // //     paddingVertical: 8,
// // // // //     borderRadius: 20,
// // // // //   },
// // // // //   timerText: {
// // // // //     color: '#666',
// // // // //     fontSize: 14,
// // // // //     marginLeft: 6,
// // // // //     fontWeight: '500',
// // // // //   },
// // // // //   resendButton: {
// // // // //     flexDirection: 'row',
// // // // //     alignItems: 'center',
// // // // //     backgroundColor: 'rgba(29, 185, 84, 0.1)',
// // // // //     paddingHorizontal: 20,
// // // // //     paddingVertical: 10,
// // // // //     borderRadius: 20,
// // // // //     borderWidth: 1,
// // // // //     borderColor: 'rgba(29, 185, 84, 0.3)',
// // // // //   },
// // // // //   resendText: {
// // // // //     color: '#1DB954',
// // // // //     fontSize: 14,
// // // // //     fontWeight: '600',
// // // // //     marginLeft: 6,
// // // // //   },
// // // // //   continueButton: {
// // // // //     flexDirection: 'row',
// // // // //     alignItems: 'center',
// // // // //     justifyContent: 'center',
// // // // //     backgroundColor: '#1DB954',
// // // // //     paddingVertical: 18,
// // // // //     borderRadius: 16,
// // // // //     marginBottom: 20,
// // // // //     shadowColor: '#1DB954',
// // // // //     shadowOffset: { width: 0, height: 4 },
// // // // //     shadowOpacity: 0.3,
// // // // //     shadowRadius: 12,
// // // // //     elevation: 8,
// // // // //   },
// // // // //   loadingContainer: {
// // // // //     flexDirection: 'row',
// // // // //     alignItems: 'center',
// // // // //   },
// // // // //   loadingSpinner: {
// // // // //     width: 20,
// // // // //     height: 20,
// // // // //     borderRadius: 10,
// // // // //     borderWidth: 2,
// // // // //     borderColor: '#000',
// // // // //     borderTopColor: 'transparent',
// // // // //     marginRight: 8,
// // // // //   },
// // // // //   continueButtonText: {
// // // // //     fontSize: 16,
// // // // //     fontWeight: 'bold',
// // // // //     color: '#000',
// // // // //     marginRight: 8,
// // // // //   },
// // // // //   helpText: {
// // // // //     color: '#666',
// // // // //     fontSize: 12,
// // // // //     textAlign: 'center',
// // // // //     lineHeight: 18,
// // // // //   },
// // // // //   helpLink: {
// // // // //     color: '#1DB954',
// // // // //     fontWeight: '500',
// // // // //   },
// // // // // });

// // // // // export default EnterOtpScreen;


// // // // import React, { useState, useEffect, useRef } from 'react';
// // // // import {
// // // //   View,
// // // //   Text,
// // // //   TouchableOpacity,
// // // //   StyleSheet,
// // // //   Alert,
// // // //   TextInput,
// // // //   Platform,
// // // //   Animated,
// // // //   Dimensions,
// // // //   KeyboardAvoidingView,
// // // //   Easing,
// // // // } from 'react-native';
// // // // import { useNavigation, useRoute } from '@react-navigation/native';
// // // // import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// // // // const { width, height } = Dimensions.get('window');

// // // // const EnterOtpScreen = () => {
// // // //   const navigation = useNavigation();
// // // //   const route = useRoute();
// // // //   const { phoneNumber } = route.params as { phoneNumber: string };

// // // //   const [otp, setOtp] = useState<string[]>(['', '', '', '', '', '']);
// // // //   const [timer, setTimer] = useState<number>(58);
// // // //   const [isLoading, setIsLoading] = useState(false);

// // // //   // Animation refs
// // // //   const inputRefs = useRef<Array<TextInput | null>>([]);
// // // //   const fadeAnim = useRef(new Animated.Value(0)).current;
// // // //   const slideAnim = useRef(new Animated.Value(50)).current;
// // // //   const pulseAnim = useRef(new Animated.Value(1)).current;
// // // //   const shakeAnim = useRef(new Animated.Value(0)).current;
// // // //   const glowAnim = useRef(new Animated.Value(0)).current;
// // // //   const digitAnim1 = useRef(new Animated.Value(0)).current;
// // // //   const digitAnim2 = useRef(new Animated.Value(0)).current;
// // // //   const digitAnim3 = useRef(new Animated.Value(0)).current;
// // // //   const digitAnim4 = useRef(new Animated.Value(0)).current;
// // // //   const digitAnim5 = useRef(new Animated.Value(0)).current;
// // // //   const digitAnim6 = useRef(new Animated.Value(0)).current;
// // // //   const backgroundAnim = useRef(new Animated.Value(0)).current;

// // // //   useEffect(() => {
// // // //     // Background animation
// // // //     Animated.loop(
// // // //       Animated.sequence([
// // // //         Animated.timing(backgroundAnim, {
// // // //           toValue: 1,
// // // //           duration: 10000,
// // // //           useNativeDriver: false,
// // // //           easing: Easing.inOut(Easing.sin),
// // // //         }),
// // // //         Animated.timing(backgroundAnim, {
// // // //           toValue: 0,
// // // //           duration: 10000,
// // // //           useNativeDriver: false,
// // // //           easing: Easing.inOut(Easing.sin),
// // // //         }),
// // // //       ])
// // // //     ).start();

// // // //     // Pulse animation
// // // //     Animated.loop(
// // // //       Animated.sequence([
// // // //         Animated.timing(pulseAnim, {
// // // //           toValue: 1.05,
// // // //           duration: 2000,
// // // //           useNativeDriver: true,
// // // //         }),
// // // //         Animated.timing(pulseAnim, {
// // // //           toValue: 1,
// // // //           duration: 2000,
// // // //           useNativeDriver: true,
// // // //         }),
// // // //       ])
// // // //     ).start();

// // // //     // Glow animation
// // // //     Animated.loop(
// // // //       Animated.sequence([
// // // //         Animated.timing(glowAnim, {
// // // //           toValue: 1,
// // // //           duration: 2500,
// // // //           useNativeDriver: true,
// // // //         }),
// // // //         Animated.timing(glowAnim, {
// // // //           toValue: 0.3,
// // // //           duration: 2500,
// // // //           useNativeDriver: true,
// // // //         }),
// // // //       ])
// // // //     ).start();

// // // //     // Main entrance animations
// // // //     Animated.parallel([
// // // //       Animated.timing(fadeAnim, {
// // // //         toValue: 1,
// // // //         duration: 1000,
// // // //         useNativeDriver: true,
// // // //         easing: Easing.out(Easing.cubic),
// // // //       }),
// // // //       Animated.timing(slideAnim, {
// // // //         toValue: 0,
// // // //         duration: 800,
// // // //         useNativeDriver: true,
// // // //         easing: Easing.out(Easing.back(1.5)),
// // // //       }),
// // // //     ]).start();

// // // //     // Staggered OTP inputs animation
// // // //     Animated.stagger(100, [
// // // //       Animated.timing(digitAnim1, {
// // // //         toValue: 1,
// // // //         duration: 600,
// // // //         useNativeDriver: true,
// // // //         easing: Easing.out(Easing.back(1.2)),
// // // //       }),
// // // //       Animated.timing(digitAnim2, {
// // // //         toValue: 1,
// // // //         duration: 600,
// // // //         useNativeDriver: true,
// // // //         easing: Easing.out(Easing.back(1.2)),
// // // //       }),
// // // //       Animated.timing(digitAnim3, {
// // // //         toValue: 1,
// // // //         duration: 600,
// // // //         useNativeDriver: true,
// // // //         easing: Easing.out(Easing.back(1.2)),
// // // //       }),
// // // //       Animated.timing(digitAnim4, {
// // // //         toValue: 1,
// // // //         duration: 600,
// // // //         useNativeDriver: true,
// // // //         easing: Easing.out(Easing.back(1.2)),
// // // //       }),
// // // //       Animated.timing(digitAnim5, {
// // // //         toValue: 1,
// // // //         duration: 600,
// // // //         useNativeDriver: true,
// // // //         easing: Easing.out(Easing.back(1.2)),
// // // //       }),
// // // //       Animated.timing(digitAnim6, {
// // // //         toValue: 1,
// // // //         duration: 600,
// // // //         useNativeDriver: true,
// // // //         easing: Easing.out(Easing.back(1.2)),
// // // //       }),
// // // //     ]).start();

// // // //     // Timer
// // // //     if (timer === 0) return;
// // // //     const interval = setInterval(() => {
// // // //       setTimer((prev) => (prev > 0 ? prev - 1 : 0));
// // // //     }, 1000);
// // // //     return () => clearInterval(interval);
// // // //   }, [timer]);

// // // //   const handleChange = (text: string, index: number) => {
// // // //     if (/^\d*$/.test(text) && text.length <= 1) {
// // // //       const newOtp = [...otp];
// // // //       newOtp[index] = text;
// // // //       setOtp(newOtp);

// // // //       // Input fill animation
// // // //       if (text) {
// // // //         Animated.sequence([
// // // //           Animated.timing(shakeAnim, {
// // // //             toValue: 10,
// // // //             duration: 50,
// // // //             useNativeDriver: true,
// // // //           }),
// // // //           Animated.timing(shakeAnim, {
// // // //             toValue: -10,
// // // //             duration: 50,
// // // //             useNativeDriver: true,
// // // //           }),
// // // //           Animated.timing(shakeAnim, {
// // // //             toValue: 0,
// // // //             duration: 50,
// // // //             useNativeDriver: true,
// // // //           }),
// // // //         ]).start();
// // // //       }

// // // //       // Auto focus next input
// // // //       if (text && index < 5) {
// // // //         setTimeout(() => inputRefs.current[index + 1]?.focus(), 50);
// // // //       }

// // // //       // Auto submit when last digit entered
// // // //       if (text && index === 5) {
// // // //         const fullOtp = [...newOtp].join('');
// // // //         if (fullOtp.length === 6) {
// // // //           handleSubmit(fullOtp);
// // // //         }
// // // //       }
// // // //     }
// // // //   };

// // // //   const handleKeyPress = (e: any, index: number) => {
// // // //     if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
// // // //       inputRefs.current[index - 1]?.focus();
// // // //     }
// // // //   };

// // // //   const handleResend = () => {
// // // //     setTimer(58);
// // // //     setOtp(['', '', '', '', '', '']);
// // // //     inputRefs.current[0]?.focus();

// // // //     // Resend animation
// // // //     Animated.sequence([
// // // //       Animated.timing(glowAnim, {
// // // //         toValue: 2,
// // // //         duration: 300,
// // // //         useNativeDriver: true,
// // // //       }),
// // // //       Animated.timing(glowAnim, {
// // // //         toValue: 0.3,
// // // //         duration: 300,
// // // //         useNativeDriver: true,
// // // //       }),
// // // //     ]).start();

// // // //     Alert.alert('OTP Resent', `New OTP sent to ${phoneNumber}`);
// // // //   };

// // // //   const handleSubmit = async (fullOtp?: string) => {
// // // //     const otpCode = fullOtp || otp.join('');

// // // //     if (otpCode.length !== 6) {
// // // //       // Shake animation for error
// // // //       Animated.sequence([
// // // //         Animated.timing(shakeAnim, {
// // // //           toValue: 20,
// // // //           duration: 60,
// // // //           useNativeDriver: true,
// // // //         }),
// // // //         Animated.timing(shakeAnim, {
// // // //           toValue: -20,
// // // //           duration: 60,
// // // //           useNativeDriver: true,
// // // //         }),
// // // //         Animated.timing(shakeAnim, {
// // // //           toValue: 15,
// // // //           duration: 60,
// // // //           useNativeDriver: true,
// // // //         }),
// // // //         Animated.timing(shakeAnim, {
// // // //           toValue: -15,
// // // //           duration: 60,
// // // //           useNativeDriver: true,
// // // //         }),
// // // //         Animated.timing(shakeAnim, {
// // // //           toValue: 0,
// // // //           duration: 60,
// // // //           useNativeDriver: true,
// // // //         }),
// // // //       ]).start();

// // // //       Alert.alert('Error', 'Please enter all 6 digits');
// // // //       return;
// // // //     }

// // // //     setIsLoading(true);

// // // //     // Success animation before API call
// // // //     Animated.parallel([
// // // //       Animated.timing(glowAnim, {
// // // //         toValue: 2,
// // // //         duration: 500,
// // // //         useNativeDriver: true,
// // // //       }),
// // // //       Animated.spring(pulseAnim, {
// // // //         toValue: 1.1,
// // // //         tension: 200,
// // // //         friction: 3,
// // // //         useNativeDriver: true,
// // // //       }),
// // // //     ]).start();

// // // //     // Simulate API call
// // // //     setTimeout(() => {
// // // //       setIsLoading(false);
// // // //       Alert.alert('Success', 'Phone verified successfully! 🎉', [
// // // //         {
// // // //           text: 'Continue',
// // // //           onPress: () => navigation.navigate('SingerSelectionScreen' as never),
// // // //         },
// // // //       ]);
// // // //     }, 1500);
// // // //   };

// // // //   const formatPhoneNumber = (phone: string) => {
// // // //     return `+91 ${phone.slice(0, 5)} ${phone.slice(5)}`;
// // // //   };

// // // //   // Interpolations
// // // //   const backgroundInterpolate = backgroundAnim.interpolate({
// // // //     inputRange: [0, 1],
// // // //     outputRange: ['#1a0a0a', '#2a0a0a'],
// // // //   });

// // // //   const glowInterpolate = glowAnim.interpolate({
// // // //     inputRange: [0, 1, 2],
// // // //     outputRange: [0, 0.5, 1],
// // // //   });

// // // //   // Digit animations
// // // //   const digitScale1 = digitAnim1.interpolate({
// // // //     inputRange: [0, 1],
// // // //     outputRange: [0.5, 1]
// // // //   });

// // // //   const digitScale2 = digitAnim2.interpolate({
// // // //     inputRange: [0, 1],
// // // //     outputRange: [0.5, 1]
// // // //   });

// // // //   const digitScale3 = digitAnim3.interpolate({
// // // //     inputRange: [0, 1],
// // // //     outputRange: [0.5, 1]
// // // //   });

// // // //   const digitScale4 = digitAnim4.interpolate({
// // // //     inputRange: [0, 1],
// // // //     outputRange: [0.5, 1]
// // // //   });

// // // //   const digitScale5 = digitAnim5.interpolate({
// // // //     inputRange: [0, 1],
// // // //     outputRange: [0.5, 1]
// // // //   });

// // // //   const digitScale6 = digitAnim6.interpolate({
// // // //     inputRange: [0, 1],
// // // //     outputRange: [0.5, 1]
// // // //   });

// // // //   return (
// // // //     <KeyboardAvoidingView 
// // // //       style={styles.container}
// // // //       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
// // // //     >
// // // //       {/* Animated Background */}
// // // //       <Animated.View 
// // // //         style={[
// // // //           styles.background,
// // // //           {
// // // //             backgroundColor: backgroundInterpolate,
// // // //           }
// // // //         ]}
// // // //       >
// // // //         <View style={styles.circle1} />
// // // //         <View style={styles.circle2} />
// // // //         <Animated.View 
// // // //           style={[
// // // //             styles.glowEffect,
// // // //             {
// // // //               opacity: glowInterpolate,
// // // //             }
// // // //           ]} 
// // // //         />
// // // //       </Animated.View>

// // // //       {/* Header */}
// // // //       <Animated.View 
// // // //         style={[
// // // //           styles.header,
// // // //           {
// // // //             opacity: fadeAnim,
// // // //             transform: [{ translateY: slideAnim }],
// // // //           },
// // // //         ]}
// // // //       >
// // // //         <TouchableOpacity 
// // // //           onPress={() => navigation.goBack()} 
// // // //           style={styles.backButton}
// // // //         >
// // // //           <Icon name="chevron-left" size={28} color="#fff" />
// // // //         </TouchableOpacity>
// // // //         <Animated.Text 
// // // //           style={[
// // // //             styles.title,
// // // //             {
// // // //               transform: [{ scale: pulseAnim }]
// // // //             }
// // // //           ]}
// // // //         >
// // // //           Verify Phone
// // // //         </Animated.Text>
// // // //         <View style={styles.placeholder} />
// // // //       </Animated.View>

// // // //       {/* Content */}
// // // //       <Animated.View 
// // // //         style={[
// // // //           styles.content,
// // // //           {
// // // //             opacity: fadeAnim,
// // // //             transform: [{ translateY: slideAnim }],
// // // //           },
// // // //         ]}
// // // //       >
// // // //         {/* Phone Info */}
// // // //         <Animated.View 
// // // //           style={[
// // // //             styles.phoneInfo,
// // // //             {
// // // //               transform: [{ scale: pulseAnim }]
// // // //             }
// // // //           ]}
// // // //         >
// // // //           <Animated.View 
// // // //             style={[
// // // //               styles.phoneIcon,
// // // //               {
// // // //                 transform: [{ scale: pulseAnim }]
// // // //               }
// // // //             ]}
// // // //           >
// // // //             <Icon name="cellphone" size={24} color="#F44242" />
// // // //             <Animated.View 
// // // //               style={[
// // // //                 styles.iconGlow,
// // // //                 {
// // // //                   opacity: glowInterpolate,
// // // //                 }
// // // //               ]} 
// // // //             />
// // // //           </Animated.View>
// // // //           <Text style={styles.infoText}>
// // // //             Enter the 6-digit code sent to{'\n'}
// // // //             <Text style={styles.phoneNumber}>
// // // //               {formatPhoneNumber(phoneNumber)}
// // // //             </Text>
// // // //           </Text>
// // // //         </Animated.View>

// // // //         {/* OTP Inputs */}
// // // //         <Animated.View 
// // // //           style={[
// // // //             styles.otpContainer,
// // // //             {
// // // //               transform: [{ translateX: shakeAnim }]
// // // //             }
// // // //           ]}
// // // //         >
// // // //           <Animated.View style={{ transform: [{ scale: digitScale1 }] }}>
// // // //             <TextInput
// // // //               ref={(el) => (inputRefs.current[0] = el)}
// // // //               style={[
// // // //                 styles.otpInput,
// // // //                 otp[0] && styles.otpInputFilled,
// // // //               ]}
// // // //               value={otp[0]}
// // // //               onChangeText={(text) => handleChange(text, 0)}
// // // //               onKeyPress={(e) => handleKeyPress(e, 0)}
// // // //               keyboardType="number-pad"
// // // //               maxLength={1}
// // // //               textAlign="center"
// // // //               autoFocus={true}
// // // //               selectionColor="#F44242"
// // // //               placeholder="•"
// // // //               placeholderTextColor="#444"
// // // //               editable={!isLoading}
// // // //             />
// // // //           </Animated.View>

// // // //           <Animated.View style={{ transform: [{ scale: digitScale2 }] }}>
// // // //             <TextInput
// // // //               ref={(el) => (inputRefs.current[1] = el)}
// // // //               style={[
// // // //                 styles.otpInput,
// // // //                 otp[1] && styles.otpInputFilled,
// // // //               ]}
// // // //               value={otp[1]}
// // // //               onChangeText={(text) => handleChange(text, 1)}
// // // //               onKeyPress={(e) => handleKeyPress(e, 1)}
// // // //               keyboardType="number-pad"
// // // //               maxLength={1}
// // // //               textAlign="center"
// // // //               selectionColor="#F44242"
// // // //               placeholder="•"
// // // //               placeholderTextColor="#444"
// // // //               editable={!isLoading}
// // // //             />
// // // //           </Animated.View>

// // // //           <Animated.View style={{ transform: [{ scale: digitScale3 }] }}>
// // // //             <TextInput
// // // //               ref={(el) => (inputRefs.current[2] = el)}
// // // //               style={[
// // // //                 styles.otpInput,
// // // //                 otp[2] && styles.otpInputFilled,
// // // //               ]}
// // // //               value={otp[2]}
// // // //               onChangeText={(text) => handleChange(text, 2)}
// // // //               onKeyPress={(e) => handleKeyPress(e, 2)}
// // // //               keyboardType="number-pad"
// // // //               maxLength={1}
// // // //               textAlign="center"
// // // //               selectionColor="#F44242"
// // // //               placeholder="•"
// // // //               placeholderTextColor="#444"
// // // //               editable={!isLoading}
// // // //             />
// // // //           </Animated.View>

// // // //           <Animated.View style={{ transform: [{ scale: digitScale4 }] }}>
// // // //             <TextInput
// // // //               ref={(el) => (inputRefs.current[3] = el)}
// // // //               style={[
// // // //                 styles.otpInput,
// // // //                 otp[3] && styles.otpInputFilled,
// // // //               ]}
// // // //               value={otp[3]}
// // // //               onChangeText={(text) => handleChange(text, 3)}
// // // //               onKeyPress={(e) => handleKeyPress(e, 3)}
// // // //               keyboardType="number-pad"
// // // //               maxLength={1}
// // // //               textAlign="center"
// // // //               selectionColor="#F44242"
// // // //               placeholder="•"
// // // //               placeholderTextColor="#444"
// // // //               editable={!isLoading}
// // // //             />
// // // //           </Animated.View>

// // // //           <Animated.View style={{ transform: [{ scale: digitScale5 }] }}>
// // // //             <TextInput
// // // //               ref={(el) => (inputRefs.current[4] = el)}
// // // //               style={[
// // // //                 styles.otpInput,
// // // //                 otp[4] && styles.otpInputFilled,
// // // //               ]}
// // // //               value={otp[4]}
// // // //               onChangeText={(text) => handleChange(text, 4)}
// // // //               onKeyPress={(e) => handleKeyPress(e, 4)}
// // // //               keyboardType="number-pad"
// // // //               maxLength={1}
// // // //               textAlign="center"
// // // //               selectionColor="#F44242"
// // // //               placeholder="•"
// // // //               placeholderTextColor="#444"
// // // //               editable={!isLoading}
// // // //             />
// // // //           </Animated.View>

// // // //           <Animated.View style={{ transform: [{ scale: digitScale6 }] }}>
// // // //             <TextInput
// // // //               ref={(el) => (inputRefs.current[5] = el)}
// // // //               style={[
// // // //                 styles.otpInput,
// // // //                 otp[5] && styles.otpInputFilled,
// // // //               ]}
// // // //               value={otp[5]}
// // // //               onChangeText={(text) => handleChange(text, 5)}
// // // //               onKeyPress={(e) => handleKeyPress(e, 5)}
// // // //               keyboardType="number-pad"
// // // //               maxLength={1}
// // // //               textAlign="center"
// // // //               selectionColor="#F44242"
// // // //               placeholder="•"
// // // //               placeholderTextColor="#444"
// // // //               editable={!isLoading}
// // // //             />
// // // //           </Animated.View>
// // // //         </Animated.View>

// // // //         {/* Timer/Resend */}
// // // //         <Animated.View 
// // // //           style={[
// // // //             styles.resendSection,
// // // //             {
// // // //               transform: [{ scale: pulseAnim }]
// // // //             }
// // // //           ]}
// // // //         >
// // // //           {timer > 0 ? (
// // // //             <View style={styles.timerContainer}>
// // // //               <Animated.View style={{ transform: [{ rotate: pulseAnim.interpolate({
// // // //                 inputRange: [1, 1.05],
// // // //                 outputRange: ['0deg', '360deg']
// // // //               })}] }}>
// // // //                 <Icon name="timer-outline" size={16} color="#666" />
// // // //               </Animated.View>
// // // //               <Text style={styles.timerText}>
// // // //                 Resend code in 00:{String(timer).padStart(2, '0')}
// // // //               </Text>
// // // //             </View>
// // // //           ) : (
// // // //             <TouchableOpacity onPress={handleResend} style={styles.resendButton}>
// // // //               <Animated.View style={{ transform: [{ scale: pulseAnim }] }}>
// // // //                 <Icon name="refresh" size={16} color="#F44242" />
// // // //               </Animated.View>
// // // //               <Text style={styles.resendText}>Resend OTP</Text>
// // // //             </TouchableOpacity>
// // // //           )}
// // // //         </Animated.View>

// // // //         {/* Continue Button */}
// // // //         <Animated.View style={{ transform: [{ scale: pulseAnim }] }}>
// // // //           <TouchableOpacity
// // // //             style={[
// // // //               styles.continueButton,
// // // //               { 
// // // //                 opacity: otp.join('').length === 6 && !isLoading ? 1 : 0.6,
// // // //               },
// // // //             ]}
// // // //             onPress={() => handleSubmit()}
// // // //             disabled={otp.join('').length !== 6 || isLoading}
// // // //             activeOpacity={0.9}
// // // //           >
// // // //             <Animated.View 
// // // //               style={[
// // // //                 styles.buttonGlow,
// // // //                 {
// // // //                   opacity: glowInterpolate,
// // // //                 }
// // // //               ]} 
// // // //             />
// // // //             {isLoading ? (
// // // //               <View style={styles.loadingContainer}>
// // // //                 <Animated.View 
// // // //                   style={[
// // // //                     styles.loadingSpinner,
// // // //                     {
// // // //                       transform: [{ rotate: pulseAnim.interpolate({
// // // //                         inputRange: [1, 1.05],
// // // //                         outputRange: ['0deg', '360deg']
// // // //                       })}]
// // // //                     }
// // // //                   ]} 
// // // //                 />
// // // //                 <Text style={styles.continueButtonText}>Verifying...</Text>
// // // //               </View>
// // // //             ) : (
// // // //               <>
// // // //                 <Text style={styles.continueButtonText}>Verify & Continue</Text>
// // // //                 <Animated.View
// // // //                   style={{
// // // //                     transform: [{ translateX: pulseAnim.interpolate({
// // // //                       inputRange: [1, 1.05],
// // // //                       outputRange: [0, 5]
// // // //                     })}]
// // // //                   }}
// // // //                 >
// // // //                   <Icon name="arrow-right" size={20} color="#fff" />
// // // //                 </Animated.View>
// // // //               </>
// // // //             )}
// // // //           </TouchableOpacity>
// // // //         </Animated.View>

// // // //         {/* Help Text */}
// // // //         <Animated.Text 
// // // //           style={[
// // // //             styles.helpText,
// // // //             {
// // // //               opacity: fadeAnim,
// // // //             }
// // // //           ]}
// // // //         >
// // // //           Didn't receive the code? Check your SMS messages or {' '}
// // // //           <Text style={styles.helpLink} onPress={handleResend}>
// // // //             request a new code
// // // //           </Text>
// // // //         </Animated.Text>
// // // //       </Animated.View>
// // // //     </KeyboardAvoidingView>
// // // //   );
// // // // };

// // // // const styles = StyleSheet.create({
// // // //   container: {
// // // //     flex: 1,
// // // //     backgroundColor: '#0A0A0A',
// // // //   },
// // // //   background: {
// // // //     position: 'absolute',
// // // //     width: '100%',
// // // //     height: '100%',
// // // //   },
// // // //   glowEffect: {
// // // //     ...StyleSheet.absoluteFillObject,
// // // //     backgroundColor: 'rgba(244, 66, 66, 0.1)',
// // // //   },
// // // //   circle1: {
// // // //     position: 'absolute',
// // // //     top: -100,
// // // //     right: -100,
// // // //     width: 300,
// // // //     height: 300,
// // // //     borderRadius: 150,
// // // //     backgroundColor: 'rgba(244, 66, 66, 0.05)',
// // // //   },
// // // //   circle2: {
// // // //     position: 'absolute',
// // // //     bottom: -150,
// // // //     left: -100,
// // // //     width: 400,
// // // //     height: 400,
// // // //     borderRadius: 200,
// // // //     backgroundColor: 'rgba(244, 66, 66, 0.03)',
// // // //   },
// // // //   header: {
// // // //     flexDirection: 'row',
// // // //     alignItems: 'center',
// // // //     justifyContent: 'space-between',
// // // //     paddingHorizontal: 24,
// // // //     paddingTop: Platform.OS === 'ios' ? 60 : 40,
// // // //     paddingBottom: 20,
// // // //   },
// // // //   backButton: {
// // // //     padding: 8,
// // // //   },
// // // //   title: {
// // // //     fontSize: 18,
// // // //     fontWeight: 'bold',
// // // //     color: '#fff',
// // // //     textAlign: 'center',
// // // //     textShadowColor: 'rgba(244, 66, 66, 0.3)',
// // // //     textShadowOffset: { width: 0, height: 2 },
// // // //     textShadowRadius: 10,
// // // //   },
// // // //   placeholder: {
// // // //     width: 40,
// // // //   },
// // // //   content: {
// // // //     flex: 1,
// // // //     paddingHorizontal: 24,
// // // //     paddingTop: 40,
// // // //   },
// // // //   phoneInfo: {
// // // //     alignItems: 'center',
// // // //     marginBottom: 50,
// // // //   },
// // // //   phoneIcon: {
// // // //     width: 60,
// // // //     height: 60,
// // // //     borderRadius: 30,
// // // //     backgroundColor: 'rgba(244, 66, 66, 0.1)',
// // // //     justifyContent: 'center',
// // // //     alignItems: 'center',
// // // //     marginBottom: 20,
// // // //     borderWidth: 1,
// // // //     borderColor: 'rgba(244, 66, 66, 0.2)',
// // // //     position: 'relative',
// // // //   },
// // // //   iconGlow: {
// // // //     position: 'absolute',
// // // //     width: 80,
// // // //     height: 80,
// // // //     borderRadius: 40,
// // // //     backgroundColor: 'rgba(244, 66, 66, 0.2)',
// // // //     zIndex: -1,
// // // //   },
// // // //   infoText: {
// // // //     color: 'rgba(255, 255, 255, 0.7)',
// // // //     fontSize: 16,
// // // //     textAlign: 'center',
// // // //     lineHeight: 24,
// // // //   },
// // // //   phoneNumber: {
// // // //     color: '#fff',
// // // //     fontWeight: '600',
// // // //     fontSize: 18,
// // // //     textShadowColor: 'rgba(244, 66, 66, 0.3)',
// // // //     textShadowOffset: { width: 0, height: 1 },
// // // //     textShadowRadius: 5,
// // // //   },
// // // //   otpContainer: {
// // // //     flexDirection: 'row',
// // // //     justifyContent: 'space-between',
// // // //     marginBottom: 40,
// // // //   },
// // // //   otpInput: {
// // // //     width: 52,
// // // //     height: 62,
// // // //     backgroundColor: 'rgba(255, 255, 255, 0.05)',
// // // //     borderRadius: 16,
// // // //     color: '#fff',
// // // //     fontSize: 24,
// // // //     fontWeight: '600',
// // // //     textAlign: 'center',
// // // //     borderWidth: 2,
// // // //     borderColor: 'rgba(255, 255, 255, 0.1)',
// // // //     shadowColor: '#000',
// // // //     shadowOffset: { width: 0, height: 2 },
// // // //     shadowOpacity: 0.1,
// // // //     shadowRadius: 8,
// // // //     elevation: 4,
// // // //   },
// // // //   otpInputFilled: {
// // // //     backgroundColor: 'rgba(244, 66, 66, 0.1)',
// // // //     borderColor: 'rgba(244, 66, 66, 0.5)',
// // // //     color: '#F44242',
// // // //     shadowColor: '#F44242',
// // // //     shadowOffset: { width: 0, height: 0 },
// // // //     shadowOpacity: 0.3,
// // // //     shadowRadius: 10,
// // // //     elevation: 6,
// // // //   },
// // // //   resendSection: {
// // // //     alignItems: 'center',
// // // //     marginBottom: 30,
// // // //   },
// // // //   timerContainer: {
// // // //     flexDirection: 'row',
// // // //     alignItems: 'center',
// // // //     backgroundColor: 'rgba(255, 255, 255, 0.05)',
// // // //     paddingHorizontal: 16,
// // // //     paddingVertical: 8,
// // // //     borderRadius: 20,
// // // //   },
// // // //   timerText: {
// // // //     color: '#666',
// // // //     fontSize: 14,
// // // //     marginLeft: 6,
// // // //     fontWeight: '500',
// // // //   },
// // // //   resendButton: {
// // // //     flexDirection: 'row',
// // // //     alignItems: 'center',
// // // //     backgroundColor: 'rgba(244, 66, 66, 0.1)',
// // // //     paddingHorizontal: 20,
// // // //     paddingVertical: 10,
// // // //     borderRadius: 20,
// // // //     borderWidth: 1,
// // // //     borderColor: 'rgba(244, 66, 66, 0.3)',
// // // //     shadowColor: '#F44242',
// // // //     shadowOffset: { width: 0, height: 0 },
// // // //     shadowOpacity: 0.3,
// // // //     shadowRadius: 8,
// // // //     elevation: 4,
// // // //   },
// // // //   resendText: {
// // // //     color: '#F44242',
// // // //     fontSize: 14,
// // // //     fontWeight: '600',
// // // //     marginLeft: 6,
// // // //   },
// // // //   continueButton: {
// // // //     flexDirection: 'row',
// // // //     alignItems: 'center',
// // // //     justifyContent: 'center',
// // // //     backgroundColor: '#F44242',
// // // //     paddingVertical: 18,
// // // //     borderRadius: 16,
// // // //     marginBottom: 20,
// // // //     shadowColor: '#F44242',
// // // //     shadowOffset: { width: 0, height: 4 },
// // // //     shadowOpacity: 0.4,
// // // //     shadowRadius: 15,
// // // //     elevation: 10,
// // // //     position: 'relative',
// // // //     overflow: 'hidden',
// // // //   },
// // // //   buttonGlow: {
// // // //     position: 'absolute',
// // // //     top: 0,
// // // //     left: 0,
// // // //     right: 0,
// // // //     bottom: 0,
// // // //     backgroundColor: 'rgba(255, 255, 255, 0.2)',
// // // //   },
// // // //   loadingContainer: {
// // // //     flexDirection: 'row',
// // // //     alignItems: 'center',
// // // //   },
// // // //   loadingSpinner: {
// // // //     width: 20,
// // // //     height: 20,
// // // //     borderRadius: 10,
// // // //     borderWidth: 2,
// // // //     borderColor: '#fff',
// // // //     borderTopColor: 'transparent',
// // // //     marginRight: 8,
// // // //   },
// // // //   continueButtonText: {
// // // //     fontSize: 16,
// // // //     fontWeight: 'bold',
// // // //     color: '#fff',
// // // //     marginRight: 8,
// // // //     textShadowColor: 'rgba(0, 0, 0, 0.3)',
// // // //     textShadowOffset: { width: 0, height: 1 },
// // // //     textShadowRadius: 3,
// // // //   },
// // // //   helpText: {
// // // //     color: 'rgba(255, 255, 255, 0.5)',
// // // //     fontSize: 12,
// // // //     textAlign: 'center',
// // // //     lineHeight: 18,
// // // //   },
// // // //   helpLink: {
// // // //     color: '#F44242',
// // // //     fontWeight: '500',
// // // //   },
// // // // });

// // // // export default EnterOtpScreen;


// // // import React, { useState, useEffect, useRef } from 'react';
// // // import {
// // //   View,
// // //   Text,
// // //   TouchableOpacity,
// // //   StyleSheet,
// // //   Alert,
// // //   TextInput,
// // //   Platform,
// // //   Animated,
// // //   Dimensions,
// // //   KeyboardAvoidingView,
// // //   Easing,
// // // } from 'react-native';
// // // import { useNavigation, useRoute } from '@react-navigation/native';
// // // import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


// // // const { width, height } = Dimensions.get('window');

// // // const EnterOtpScreen = () => {
// // //   const navigation = useNavigation();
// // //   const route = useRoute();
// // //   const { phoneNumber } = route.params as { phoneNumber: string };

// // //   const [otp, setOtp] = useState<string[]>(['', '', '', '', '', '']);
// // //   const [timer, setTimer] = useState<number>(58);
// // //   const [isLoading, setIsLoading] = useState(false);

// // //   // Animation refs
// // //   const inputRefs = useRef<Array<TextInput | null>>([]);
// // //   const fadeAnim = useRef(new Animated.Value(0)).current;
// // //   const slideAnim = useRef(new Animated.Value(80)).current;
// // //   const pulseAnim = useRef(new Animated.Value(1)).current;
// // //   const shakeAnim = useRef(new Animated.Value(0)).current;
// // //   const glowAnim = useRef(new Animated.Value(0)).current;
// // //   const backgroundAnim = useRef(new Animated.Value(0)).current;
// // //   const buttonScale = useRef(new Animated.Value(1)).current;
// // //   const inputScale = useRef(new Animated.Value(0.8)).current;
// // //   const successAnim = useRef(new Animated.Value(0)).current;

// // //   // Individual OTP input animations
// // //   const digitAnims = useRef(
// // //     Array(6).fill(0).map(() => new Animated.Value(0))
// // //   ).current;

// // //   useEffect(() => {
// // //     // Smooth background gradient animation
// // //     Animated.loop(
// // //       Animated.sequence([
// // //         Animated.timing(backgroundAnim, {
// // //           toValue: 1,
// // //           duration: 12000,
// // //           useNativeDriver: false,
// // //           easing: Easing.inOut(Easing.sin),
// // //         }),
// // //         Animated.timing(backgroundAnim, {
// // //           toValue: 0,
// // //           duration: 12000,
// // //           useNativeDriver: false,
// // //           easing: Easing.inOut(Easing.sin),
// // //         }),
// // //       ])
// // //     ).start();

// // //     // Gentle continuous pulse
// // //     Animated.loop(
// // //       Animated.sequence([
// // //         Animated.timing(pulseAnim, {
// // //           toValue: 1.02,
// // //           duration: 3000,
// // //           useNativeDriver: true,
// // //           easing: Easing.inOut(Easing.sin),
// // //         }),
// // //         Animated.timing(pulseAnim, {
// // //           toValue: 1,
// // //           duration: 3000,
// // //           useNativeDriver: true,
// // //           easing: Easing.inOut(Easing.sin),
// // //         }),
// // //       ])
// // //     ).start();

// // //     // Subtle glow animation
// // //     Animated.loop(
// // //       Animated.sequence([
// // //         Animated.timing(glowAnim, {
// // //           toValue: 0.8,
// // //           duration: 4000,
// // //           useNativeDriver: true,
// // //           easing: Easing.inOut(Easing.sin),
// // //         }),
// // //         Animated.timing(glowAnim, {
// // //           toValue: 0.3,
// // //           duration: 4000,
// // //           useNativeDriver: true,
// // //           easing: Easing.inOut(Easing.sin),
// // //         }),
// // //       ])
// // //     ).start();

// // //     // Main content entrance - smoother timing
// // //     Animated.parallel([
// // //       Animated.timing(fadeAnim, {
// // //         toValue: 1,
// // //         duration: 1200,
// // //         useNativeDriver: true,
// // //         easing: Easing.out(Easing.cubic),
// // //       }),
// // //       Animated.timing(slideAnim, {
// // //         toValue: 0,
// // //         duration: 1000,
// // //         useNativeDriver: true,
// // //         easing: Easing.out(Easing.back(1)),
// // //       }),
// // //       Animated.timing(inputScale, {
// // //         toValue: 1,
// // //         duration: 800,
// // //         useNativeDriver: true,
// // //         easing: Easing.out(Easing.back(1.5)),
// // //       }),
// // //     ]).start();

// // //     // Staggered OTP inputs with better flow
// // //     Animated.stagger(80, digitAnims.map(anim => 
// // //       Animated.timing(anim, {
// // //         toValue: 1,
// // //         duration: 600,
// // //         useNativeDriver: true,
// // //         easing: Easing.out(Easing.back(1)),
// // //       })
// // //     )).start();

// // //     // Timer
// // //     if (timer === 0) return;
// // //     const interval = setInterval(() => {
// // //       setTimer((prev) => (prev > 0 ? prev - 1 : 0));
// // //     }, 1000);
// // //     return () => clearInterval(interval);
// // //   }, [timer]);

// // //   const handleButtonPress = () => {
// // //     Animated.sequence([
// // //       Animated.timing(buttonScale, {
// // //         toValue: 0.95,
// // //         duration: 100,
// // //         useNativeDriver: true,
// // //       }),
// // //       Animated.timing(buttonScale, {
// // //         toValue: 1,
// // //         duration: 100,
// // //         useNativeDriver: true,
// // //       }),
// // //     ]).start();
// // //   };

// // //   const handleChange = (text: string, index: number) => {
// // //     if (/^\d*$/.test(text) && text.length <= 1) {
// // //       const newOtp = [...otp];
// // //       newOtp[index] = text;
// // //       setOtp(newOtp);

// // //       // Smooth input fill animation
// // //       if (text) {
// // //         Animated.sequence([
// // //           Animated.timing(digitAnims[index], {
// // //             toValue: 1.1,
// // //             duration: 100,
// // //             useNativeDriver: true,
// // //           }),
// // //           Animated.timing(digitAnims[index], {
// // //             toValue: 1,
// // //             duration: 100,
// // //             useNativeDriver: true,
// // //           }),
// // //         ]).start();
// // //       }

// // //       // Auto focus next input with smooth transition
// // //       if (text && index < 5) {
// // //         setTimeout(() => {
// // //           inputRefs.current[index + 1]?.focus();
// // //           // Gentle focus animation for next input
// // //           Animated.sequence([
// // //             Animated.timing(digitAnims[index + 1], {
// // //               toValue: 1.05,
// // //               duration: 150,
// // //               useNativeDriver: true,
// // //             }),
// // //             Animated.timing(digitAnims[index + 1], {
// // //               toValue: 1,
// // //               duration: 150,
// // //               useNativeDriver: true,
// // //             }),
// // //           ]).start();
// // //         }, 80);
// // //       }

// // //       // Auto submit when last digit entered
// // //       if (text && index === 5) {
// // //         const fullOtp = [...newOtp].join('');
// // //         if (fullOtp.length === 6) {
// // //           setTimeout(() => handleSubmit(fullOtp), 300);
// // //         }
// // //       }
// // //     }
// // //   };

// // //   const handleKeyPress = (e: any, index: number) => {
// // //     if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
// // //       // Smooth backspace navigation
// // //       setTimeout(() => {
// // //         inputRefs.current[index - 1]?.focus();
// // //         Animated.sequence([
// // //           Animated.timing(digitAnims[index - 1], {
// // //             toValue: 1.05,
// // //             duration: 150,
// // //             useNativeDriver: true,
// // //           }),
// // //           Animated.timing(digitAnims[index - 1], {
// // //             toValue: 1,
// // //             duration: 150,
// // //             useNativeDriver: true,
// // //           }),
// // //         ]).start();
// // //       }, 50);
// // //     }
// // //   };

// // //   const handleResend = () => {
// // //     handleButtonPress();
// // //     setTimer(58);
// // //     setOtp(['', '', '', '', '', '']);

// // //     // Reset animations for OTP inputs
// // //     digitAnims.forEach((anim, index) => {
// // //       Animated.timing(anim, {
// // //         toValue: 1,
// // //         duration: 400,
// // //         useNativeDriver: true,
// // //         easing: Easing.out(Easing.back(1)),
// // //       }).start();
// // //     });

// // //     setTimeout(() => inputRefs.current[0]?.focus(), 200);

// // //     // Resend confirmation animation
// // //     Animated.sequence([
// // //       Animated.timing(glowAnim, {
// // //         toValue: 1.5,
// // //         duration: 300,
// // //         useNativeDriver: true,
// // //       }),
// // //       Animated.timing(glowAnim, {
// // //         toValue: 0.3,
// // //         duration: 300,
// // //         useNativeDriver: true,
// // //       }),
// // //     ]).start();

// // //     Alert.alert('OTP Resent', `New OTP sent to ${phoneNumber}`);
// // //   };

// // //   const handleSubmit = async (fullOtp?: string) => {
// // //     const otpCode = fullOtp || otp.join('');

// // //     if (otpCode.length !== 6) {
// // //       // Smooth shake animation for error
// // //       Animated.sequence([
// // //         Animated.timing(shakeAnim, {
// // //           toValue: 15,
// // //           duration: 80,
// // //           useNativeDriver: true,
// // //         }),
// // //         Animated.timing(shakeAnim, {
// // //           toValue: -15,
// // //           duration: 80,
// // //           useNativeDriver: true,
// // //         }),
// // //         Animated.timing(shakeAnim, {
// // //           toValue: 10,
// // //           duration: 80,
// // //           useNativeDriver: true,
// // //         }),
// // //         Animated.timing(shakeAnim, {
// // //           toValue: -10,
// // //           duration: 80,
// // //           useNativeDriver: true,
// // //         }),
// // //         Animated.timing(shakeAnim, {
// // //           toValue: 0,
// // //           duration: 80,
// // //           useNativeDriver: true,
// // //         }),
// // //       ]).start();

// // //       Alert.alert('Error', 'Please enter all 6 digits');
// // //       return;
// // //     }

// // //     setIsLoading(true);

// // //     // Success animation sequence
// // //     Animated.parallel([
// // //       Animated.timing(successAnim, {
// // //         toValue: 1,
// // //         duration: 600,
// // //         useNativeDriver: true,
// // //       }),
// // //       Animated.timing(glowAnim, {
// // //         toValue: 1.2,
// // //         duration: 600,
// // //         useNativeDriver: true,
// // //       }),
// // //     ]).start();

// // //     // Simulate API call with better timing
// // //     setTimeout(() => {
// // //       setIsLoading(false);
// // //       // Success celebration before navigation
// // //       Animated.sequence([
// // //         Animated.timing(successAnim, {
// // //           toValue: 2,
// // //           duration: 400,
// // //           useNativeDriver: true,
// // //         }),
// // //         Animated.delay(500),
// // //       ]).start(() => {
// // //         Alert.alert('Success', 'Phone verified successfully! 🎉', [
// // //           {
// // //             text: 'Continue',
// // //             onPress: () => navigation.navigate('SingerSelectionScreen' as never),
// // //           },
// // //         ]);
// // //       });
// // //     }, 1800);
// // //   };

// // //   const formatPhoneNumber = (phone: string) => {
// // //     return `+91 ${phone.slice(0, 5)} ${phone.slice(5)}`;
// // //   };

// // //   // Interpolations
// // //   const backgroundInterpolate = backgroundAnim.interpolate({
// // //     inputRange: [0, 1],
// // //     outputRange: ['#0A0A0A', '#1A0A0A'],
// // //   });

// // //   const glowInterpolate = glowAnim.interpolate({
// // //     inputRange: [0, 0.3, 0.8, 1.2, 1.5, 2],
// // //     outputRange: [0, 0.2, 0.4, 0.7, 0.9, 1],
// // //   });

// // //   const successScale = successAnim.interpolate({
// // //     inputRange: [0, 1, 2],
// // //     outputRange: [1, 1.05, 1.1],
// // //   });

// // //   const successOpacity = successAnim.interpolate({
// // //     inputRange: [0, 1, 2],
// // //     outputRange: [0, 0.5, 1],
// // //   });

// // //   return (
// // //     <KeyboardAvoidingView 
// // //       style={styles.container}
// // //       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
// // //     >
// // //       {/* Smooth Animated Background */}
// // //       <Animated.View 
// // //         style={[
// // //           styles.background,
// // //           {
// // //             backgroundColor: backgroundInterpolate,
// // //           }
// // //         ]}
// // //       >
// // //         <Animated.View 
// // //           style={[
// // //             styles.circle1,
// // //             {
// // //               transform: [
// // //                 { scale: pulseAnim },
// // //                 { translateY: pulseAnim.interpolate({
// // //                   inputRange: [1, 1.02],
// // //                   outputRange: [0, -5]
// // //                 })}
// // //               ]
// // //             }
// // //           ]} 
// // //         />
// // //         <Animated.View 
// // //           style={[
// // //             styles.circle2,
// // //             {
// // //               transform: [
// // //                 { scale: pulseAnim },
// // //                 { translateY: pulseAnim.interpolate({
// // //                   inputRange: [1, 1.02],
// // //                   outputRange: [0, 8]
// // //                 })}
// // //               ]
// // //             }
// // //           ]} 
// // //         />
// // //         <Animated.View 
// // //           style={[
// // //             styles.glowEffect,
// // //             {
// // //               opacity: glowInterpolate,
// // //             }
// // //           ]} 
// // //         />
// // //       </Animated.View>

// // //       {/* Header with smooth entrance */}
// // //       <Animated.View 
// // //         style={[
// // //           styles.header,
// // //           {
// // //             opacity: fadeAnim,
// // //             transform: [
// // //               { translateY: slideAnim },
// // //               { scale: pulseAnim }
// // //             ],
// // //           },
// // //         ]}
// // //       >
// // //         <TouchableOpacity 
// // //           onPress={() => navigation.goBack()} 
// // //           style={styles.backButton}
// // //         >
// // //           <Icon name="chevron-left" size={28} color="#fff" />
// // //         </TouchableOpacity>
// // //         <Animated.Text 
// // //           style={[
// // //             styles.title,
// // //             {
// // //               transform: [{ scale: pulseAnim }]
// // //             }
// // //           ]}
// // //         >
// // //           Verify Phone
// // //         </Animated.Text>
// // //         <View style={styles.placeholder} />
// // //       </Animated.View>

// // //       {/* Main Content */}
// // //       <Animated.View 
// // //         style={[
// // //           styles.content,
// // //           {
// // //             opacity: fadeAnim,
// // //             transform: [
// // //               { translateY: slideAnim },
// // //               { scale: inputScale }
// // //             ],
// // //           },
// // //         ]}
// // //       >
// // //         {/* Phone Info with smooth animations */}
// // //         <Animated.View 
// // //           style={[
// // //             styles.phoneInfo,
// // //             {
// // //               transform: [{ scale: pulseAnim }]
// // //             }
// // //           ]}
// // //         >
// // //           <Animated.View 
// // //             style={[
// // //               styles.phoneIcon,
// // //               {
// // //                 transform: [
// // //                   { scale: pulseAnim },
// // //                   { rotate: pulseAnim.interpolate({
// // //                     inputRange: [1, 1.02],
// // //                     outputRange: ['0deg', '5deg']
// // //                   })}
// // //                 ]
// // //               }
// // //             ]}
// // //           >
// // //             <Icon name="cellphone" size={24} color="#F44242" />
// // //             <Animated.View 
// // //               style={[
// // //                 styles.iconGlow,
// // //                 {
// // //                   opacity: glowInterpolate,
// // //                 }
// // //               ]} 
// // //             />
// // //           </Animated.View>
// // //           <Text style={styles.infoText}>
// // //             Enter the 6-digit code sent to{'\n'}
// // //             <Text style={styles.phoneNumber}>
// // //               {formatPhoneNumber(phoneNumber)}
// // //             </Text>
// // //           </Text>
// // //         </Animated.View>

// // //         {/* OTP Inputs with individual animations */}
// // //         <Animated.View 
// // //           style={[
// // //             styles.otpContainer,
// // //             {
// // //               transform: [
// // //                 { translateX: shakeAnim },
// // //                 { scale: successScale }
// // //               ]
// // //             }
// // //           ]}
// // //         >
// // //           {otp.map((digit, index) => (
// // //             <Animated.View 
// // //               key={index}
// // //               style={{
// // //                 transform: [
// // //                   { scale: digitAnims[index] },
// // //                   { translateY: digitAnims[index].interpolate({
// // //                     inputRange: [0, 1, 1.1],
// // //                     outputRange: [20, 0, -5]
// // //                   })}
// // //                 ]
// // //               }}
// // //             >
// // //               <TextInput
// // //                 ref={(el) => (inputRefs.current[index] = el)}
// // //                 style={[
// // //                   styles.otpInput,
// // //                   digit && styles.otpInputFilled,
// // //                 ]}
// // //                 value={digit}
// // //                 onChangeText={(text) => handleChange(text, index)}
// // //                 onKeyPress={(e) => handleKeyPress(e, index)}
// // //                 keyboardType="number-pad"
// // //                 maxLength={1}
// // //                 textAlign="center"
// // //                 autoFocus={index === 0}
// // //                 selectionColor="#F44242"
// // //                 placeholder="•"
// // //                 placeholderTextColor="#444"
// // //                 editable={!isLoading}
// // //               />
// // //             </Animated.View>
// // //           ))}
// // //         </Animated.View>

// // //         {/* Timer/Resend Section */}
// // //         <Animated.View 
// // //           style={[
// // //             styles.resendSection,
// // //             {
// // //               transform: [{ scale: pulseAnim }]
// // //             }
// // //           ]}
// // //         >
// // //           {timer > 0 ? (
// // //             <View style={styles.timerContainer}>
// // //               <Animated.View style={{ 
// // //                 transform: [{ 
// // //                   rotate: pulseAnim.interpolate({
// // //                     inputRange: [1, 1.02],
// // //                     outputRange: ['0deg', '180deg']
// // //                   })
// // //                 }] 
// // //               }}>
// // //                 <Icon name="timer-outline" size={16} color="#666" />
// // //               </Animated.View>
// // //               <Text style={styles.timerText}>
// // //                 Resend code in 00:{String(timer).padStart(2, '0')}
// // //               </Text>
// // //             </View>
// // //           ) : (
// // //             <TouchableOpacity onPress={handleResend} style={styles.resendButton}>
// // //               <Animated.View style={{ transform: [{ scale: pulseAnim }] }}>
// // //                 <Icon name="refresh" size={16} color="#F44242" />
// // //               </Animated.View>
// // //               <Text style={styles.resendText}>Resend OTP</Text>
// // //             </TouchableOpacity>
// // //           )}
// // //         </Animated.View>

// // //         {/* Continue Button with smooth interactions */}
// // //         <Animated.View style={{ transform: [{ scale: buttonScale }] }}>
// // //           <TouchableOpacity
// // //             style={[
// // //               styles.continueButton,
// // //               { 
// // //                 opacity: otp.join('').length === 6 && !isLoading ? 1 : 0.7,
// // //               },
// // //             ]}
// // //             onPress={() => {
// // //               handleButtonPress();
// // //               handleSubmit();
// // //             }}
// // //             disabled={otp.join('').length !== 6 || isLoading}
// // //             activeOpacity={0.9}
// // //           >
// // //             <Animated.View 
// // //               style={[
// // //                 styles.buttonGlow,
// // //                 {
// // //                   opacity: successOpacity,
// // //                 }
// // //               ]} 
// // //             />
// // //             {isLoading ? (
// // //               <View style={styles.loadingContainer}>
// // //                 <Animated.View 
// // //                   style={[
// // //                     styles.loadingSpinner,
// // //                     {
// // //                       transform: [{ 
// // //                         rotate: pulseAnim.interpolate({
// // //                           inputRange: [1, 1.02],
// // //                           outputRange: ['0deg', '360deg']
// // //                         })
// // //                       }]
// // //                     }
// // //                   ]} 
// // //                 />
// // //                 <Text style={styles.continueButtonText}>Verifying...</Text>
// // //               </View>
// // //             ) : (
// // //               <>
// // //                 <Text style={styles.continueButtonText}>Verify & Continue</Text>
// // //                 <Animated.View
// // //                   style={{
// // //                     transform: [{ 
// // //                       translateX: pulseAnim.interpolate({
// // //                         inputRange: [1, 1.02],
// // //                         outputRange: [0, 3]
// // //                       })
// // //                     }]
// // //                   }}
// // //                 >
// // //                   <Icon name="arrow-right" size={20} color="#fff" />
// // //                 </Animated.View>
// // //               </>
// // //             )}
// // //           </TouchableOpacity>
// // //         </Animated.View>

// // //         {/* Help Text */}
// // //         <Animated.Text 
// // //           style={[
// // //             styles.helpText,
// // //             {
// // //               opacity: fadeAnim,
// // //               transform: [{ translateY: pulseAnim.interpolate({
// // //                 inputRange: [1, 1.02],
// // //                 outputRange: [0, 2]
// // //               })}]
// // //             }
// // //           ]}
// // //         >
// // //           Didn't receive the code? Check your SMS messages or {' '}
// // //           <Text style={styles.helpLink} onPress={handleResend}>
// // //             request a new code
// // //           </Text>
// // //         </Animated.Text>
// // //       </Animated.View>

// // //       {/* Success Overlay */}
// // //       <Animated.View 
// // //         style={[
// // //           styles.successOverlay,
// // //           {
// // //             opacity: successOpacity,
// // //             transform: [{ scale: successScale }]
// // //           }
// // //         ]}
// // //         pointerEvents="none"
// // //       />
// // //     </KeyboardAvoidingView>
// // //   );
// // // };

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     backgroundColor: '#0A0A0A',
// // //   },
// // //   background: {
// // //     position: 'absolute',
// // //     width: '100%',
// // //     height: '100%',
// // //   },
// // //   glowEffect: {
// // //     ...StyleSheet.absoluteFillObject,
// // //     backgroundColor: 'rgba(244, 66, 66, 0.08)',
// // //   },
// // //   circle1: {
// // //     position: 'absolute',
// // //     top: -100,
// // //     right: -100,
// // //     width: 300,
// // //     height: 300,
// // //     borderRadius: 150,
// // //     backgroundColor: 'rgba(244, 66, 66, 0.03)',
// // //   },
// // //   circle2: {
// // //     position: 'absolute',
// // //     bottom: -150,
// // //     left: -100,
// // //     width: 400,
// // //     height: 400,
// // //     borderRadius: 200,
// // //     backgroundColor: 'rgba(244, 66, 66, 0.02)',
// // //   },
// // //   header: {
// // //     flexDirection: 'row',
// // //     alignItems: 'center',
// // //     justifyContent: 'space-between',
// // //     paddingHorizontal: 24,
// // //     paddingTop: Platform.OS === 'ios' ? 60 : 40,
// // //     paddingBottom: 20,
// // //   },
// // //   backButton: {
// // //     padding: 8,
// // //   },
// // //   title: {
// // //     fontSize: 18,
// // //     fontWeight: 'bold',
// // //     color: '#fff',
// // //     textAlign: 'center',
// // //     textShadowColor: 'rgba(244, 66, 66, 0.3)',
// // //     textShadowOffset: { width: 0, height: 2 },
// // //     textShadowRadius: 10,
// // //   },
// // //   placeholder: {
// // //     width: 40,
// // //   },
// // //   content: {
// // //     flex: 1,
// // //     paddingHorizontal: 24,
// // //     paddingTop: 40,
// // //   },
// // //   phoneInfo: {
// // //     alignItems: 'center',
// // //     marginBottom: 50,
// // //   },
// // //   phoneIcon: {
// // //     width: 60,
// // //     height: 60,
// // //     borderRadius: 30,
// // //     backgroundColor: 'rgba(244, 66, 66, 0.1)',
// // //     justifyContent: 'center',
// // //     alignItems: 'center',
// // //     marginBottom: 20,
// // //     borderWidth: 1,
// // //     borderColor: 'rgba(244, 66, 66, 0.2)',
// // //     position: 'relative',
// // //   },
// // //   iconGlow: {
// // //     position: 'absolute',
// // //     width: 80,
// // //     height: 80,
// // //     borderRadius: 40,
// // //     backgroundColor: 'rgba(244, 66, 66, 0.15)',
// // //     zIndex: -1,
// // //   },
// // //   infoText: {
// // //     color: 'rgba(255, 255, 255, 0.7)',
// // //     fontSize: 16,
// // //     textAlign: 'center',
// // //     lineHeight: 24,
// // //   },
// // //   phoneNumber: {
// // //     color: '#fff',
// // //     fontWeight: '600',
// // //     fontSize: 18,
// // //     textShadowColor: 'rgba(244, 66, 66, 0.3)',
// // //     textShadowOffset: { width: 0, height: 1 },
// // //     textShadowRadius: 5,
// // //   },
// // //   otpContainer: {
// // //     flexDirection: 'row',
// // //     justifyContent: 'space-between',
// // //     marginBottom: 40,
// // //   },
// // //   otpInput: {
// // //     width: 52,
// // //     height: 62,
// // //     backgroundColor: 'rgba(255, 255, 255, 0.05)',
// // //     borderRadius: 16,
// // //     color: '#fff',
// // //     fontSize: 24,
// // //     fontWeight: '600',
// // //     textAlign: 'center',
// // //     borderWidth: 2,
// // //     borderColor: 'rgba(255, 255, 255, 0.1)',
// // //     shadowColor: '#000',
// // //     shadowOffset: { width: 0, height: 2 },
// // //     shadowOpacity: 0.1,
// // //     shadowRadius: 8,
// // //     elevation: 4,
// // //   },
// // //   otpInputFilled: {
// // //     backgroundColor: 'rgba(244, 66, 66, 0.1)',
// // //     borderColor: 'rgba(244, 66, 66, 0.5)',
// // //     color: '#F44242',
// // //     shadowColor: '#F44242',
// // //     shadowOffset: { width: 0, height: 0 },
// // //     shadowOpacity: 0.3,
// // //     shadowRadius: 10,
// // //     elevation: 6,
// // //   },
// // //   resendSection: {
// // //     alignItems: 'center',
// // //     marginBottom: 30,
// // //   },
// // //   timerContainer: {
// // //     flexDirection: 'row',
// // //     alignItems: 'center',
// // //     backgroundColor: 'rgba(255, 255, 255, 0.05)',
// // //     paddingHorizontal: 16,
// // //     paddingVertical: 8,
// // //     borderRadius: 20,
// // //   },
// // //   timerText: {
// // //     color: '#666',
// // //     fontSize: 14,
// // //     marginLeft: 6,
// // //     fontWeight: '500',
// // //   },
// // //   resendButton: {
// // //     flexDirection: 'row',
// // //     alignItems: 'center',
// // //     backgroundColor: 'rgba(244, 66, 66, 0.1)',
// // //     paddingHorizontal: 20,
// // //     paddingVertical: 10,
// // //     borderRadius: 20,
// // //     borderWidth: 1,
// // //     borderColor: 'rgba(244, 66, 66, 0.3)',
// // //     shadowColor: '#F44242',
// // //     shadowOffset: { width: 0, height: 0 },
// // //     shadowOpacity: 0.3,
// // //     shadowRadius: 8,
// // //     elevation: 4,
// // //   },
// // //   resendText: {
// // //     color: '#F44242',
// // //     fontSize: 14,
// // //     fontWeight: '600',
// // //     marginLeft: 6,
// // //   },
// // //   continueButton: {
// // //     flexDirection: 'row',
// // //     alignItems: 'center',
// // //     justifyContent: 'center',
// // //     backgroundColor: '#F44242',
// // //     paddingVertical: 18,
// // //     borderRadius: 16,
// // //     marginBottom: 20,
// // //     shadowColor: '#F44242',
// // //     shadowOffset: { width: 0, height: 4 },
// // //     shadowOpacity: 0.4,
// // //     shadowRadius: 15,
// // //     elevation: 10,
// // //     position: 'relative',
// // //     overflow: 'hidden',
// // //   },
// // //   buttonGlow: {
// // //     position: 'absolute',
// // //     top: 0,
// // //     left: 0,
// // //     right: 0,
// // //     bottom: 0,
// // //     backgroundColor: 'rgba(255, 255, 255, 0.2)',
// // //   },
// // //   loadingContainer: {
// // //     flexDirection: 'row',
// // //     alignItems: 'center',
// // //   },
// // //   loadingSpinner: {
// // //     width: 20,
// // //     height: 20,
// // //     borderRadius: 10,
// // //     borderWidth: 2,
// // //     borderColor: '#fff',
// // //     borderTopColor: 'transparent',
// // //     marginRight: 8,
// // //   },
// // //   continueButtonText: {
// // //     fontSize: 16,
// // //     fontWeight: 'bold',
// // //     color: '#fff',
// // //     marginRight: 8,
// // //     textShadowColor: 'rgba(0, 0, 0, 0.3)',
// // //     textShadowOffset: { width: 0, height: 1 },
// // //     textShadowRadius: 3,
// // //   },
// // //   helpText: {
// // //     color: 'rgba(255, 255, 255, 0.5)',
// // //     fontSize: 12,
// // //     textAlign: 'center',
// // //     lineHeight: 18,
// // //   },
// // //   helpLink: {
// // //     color: '#F44242',
// // //     fontWeight: '500',
// // //   },
// // //   successOverlay: {
// // //     ...StyleSheet.absoluteFillObject,
// // //     backgroundColor: 'rgba(244, 66, 66, 0.1)',
// // //   },
// // // });

// // // export default EnterOtpScreen;

// // import React, { useState, useEffect, useRef } from 'react';
// // import {
// //   View,
// //   Text,
// //   TouchableOpacity,
// //   StyleSheet,
// //   Alert,
// //   TextInput,
// //   Platform,
// //   Animated,
// //   Dimensions,
// //   KeyboardAvoidingView,
// //   Easing,
// // } from 'react-native';
// // import { useNavigation, useRoute } from '@react-navigation/native';
// // import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// // import { postDataWithToken } from '../Services/mobile-api';
// // import { mobile_siteConfig } from '../Services/mobile-siteConfig';
// // import { storeDataToAsyncStorage } from '../Services/CommonFunction';

// // const { width, height } = Dimensions.get('window');

// // const EnterOtpScreen = () => {
// //   const navigation = useNavigation();
// //   const route = useRoute();
// //   const { phoneNumber } = route.params as { phoneNumber: string };

// //   const [otp, setOtp] = useState<string[]>(['', '', '', '']); // Changed to 4 digits
// //   const [timer, setTimer] = useState<number>(58);
// //   const [isLoading, setIsLoading] = useState(false);

// //   // Animation refs
// //   const inputRefs = useRef<Array<TextInput | null>>([]);
// //   const fadeAnim = useRef(new Animated.Value(0)).current;
// //   const slideAnim = useRef(new Animated.Value(80)).current;
// //   const pulseAnim = useRef(new Animated.Value(1)).current;
// //   const shakeAnim = useRef(new Animated.Value(0)).current;
// //   const glowAnim = useRef(new Animated.Value(0)).current;
// //   const backgroundAnim = useRef(new Animated.Value(0)).current;
// //   const buttonScale = useRef(new Animated.Value(1)).current;
// //   const inputScale = useRef(new Animated.Value(0.8)).current;
// //   const successAnim = useRef(new Animated.Value(0)).current;

// //   // Individual OTP input animations - changed to 4
// //   const digitAnims = useRef(
// //     Array(4).fill(0).map(() => new Animated.Value(0))
// //   ).current;

// //   useEffect(() => {
// //     // Smooth background gradient animation
// //     Animated.loop(
// //       Animated.sequence([
// //         Animated.timing(backgroundAnim, {
// //           toValue: 1,
// //           duration: 12000,
// //           useNativeDriver: false,
// //           easing: Easing.inOut(Easing.sin),
// //         }),
// //         Animated.timing(backgroundAnim, {
// //           toValue: 0,
// //           duration: 12000,
// //           useNativeDriver: false,
// //           easing: Easing.inOut(Easing.sin),
// //         }),
// //       ])
// //     ).start();

// //     // Gentle continuous pulse
// //     Animated.loop(
// //       Animated.sequence([
// //         Animated.timing(pulseAnim, {
// //           toValue: 1.02,
// //           duration: 3000,
// //           useNativeDriver: true,
// //           easing: Easing.inOut(Easing.sin),
// //         }),
// //         Animated.timing(pulseAnim, {
// //           toValue: 1,
// //           duration: 3000,
// //           useNativeDriver: true,
// //           easing: Easing.inOut(Easing.sin),
// //         }),
// //       ])
// //     ).start();

// //     // Subtle glow animation
// //     Animated.loop(
// //       Animated.sequence([
// //         Animated.timing(glowAnim, {
// //           toValue: 0.8,
// //           duration: 4000,
// //           useNativeDriver: true,
// //           easing: Easing.inOut(Easing.sin),
// //         }),
// //         Animated.timing(glowAnim, {
// //           toValue: 0.3,
// //           duration: 4000,
// //           useNativeDriver: true,
// //           easing: Easing.inOut(Easing.sin),
// //         }),
// //       ])
// //     ).start();

// //     // Main content entrance - smoother timing
// //     Animated.parallel([
// //       Animated.timing(fadeAnim, {
// //         toValue: 1,
// //         duration: 1200,
// //         useNativeDriver: true,
// //         easing: Easing.out(Easing.cubic),
// //       }),
// //       Animated.timing(slideAnim, {
// //         toValue: 0,
// //         duration: 1000,
// //         useNativeDriver: true,
// //         easing: Easing.out(Easing.back(1)),
// //       }),
// //       Animated.timing(inputScale, {
// //         toValue: 1,
// //         duration: 800,
// //         useNativeDriver: true,
// //         easing: Easing.out(Easing.back(1.5)),
// //       }),
// //     ]).start();

// //     // Staggered OTP inputs with better flow
// //     Animated.stagger(80, digitAnims.map(anim =>
// //       Animated.timing(anim, {
// //         toValue: 1,
// //         duration: 600,
// //         useNativeDriver: true,
// //         easing: Easing.out(Easing.back(1)),
// //       })
// //     )).start();

// //     // Timer
// //     if (timer === 0) return;
// //     const interval = setInterval(() => {
// //       setTimer((prev) => (prev > 0 ? prev - 1 : 0));
// //     }, 1000);
// //     return () => clearInterval(interval);
// //   }, [timer]);

// //   const handleButtonPress = () => {
// //     Animated.sequence([
// //       Animated.timing(buttonScale, {
// //         toValue: 0.95,
// //         duration: 100,
// //         useNativeDriver: true,
// //       }),
// //       Animated.timing(buttonScale, {
// //         toValue: 1,
// //         duration: 100,
// //         useNativeDriver: true,
// //       }),
// //     ]).start();
// //   };

// //   const handleChange = (text: string, index: number) => {
// //     if (/^\d*$/.test(text) && text.length <= 1) {
// //       const newOtp = [...otp];
// //       newOtp[index] = text;
// //       setOtp(newOtp);

// //       // Smooth input fill animation
// //       if (text) {
// //         Animated.sequence([
// //           Animated.timing(digitAnims[index], {
// //             toValue: 1.1,
// //             duration: 100,
// //             useNativeDriver: true,
// //           }),
// //           Animated.timing(digitAnims[index], {
// //             toValue: 1,
// //             duration: 100,
// //             useNativeDriver: true,
// //           }),
// //         ]).start();
// //       }

// //       // Auto focus next input with smooth transition
// //       if (text && index < 3) { // Changed to 3 (0-3 for 4 digits)
// //         setTimeout(() => {
// //           inputRefs.current[index + 1]?.focus();
// //           // Gentle focus animation for next input
// //           Animated.sequence([
// //             Animated.timing(digitAnims[index + 1], {
// //               toValue: 1.05,
// //               duration: 150,
// //               useNativeDriver: true,
// //             }),
// //             Animated.timing(digitAnims[index + 1], {
// //               toValue: 1,
// //               duration: 150,
// //               useNativeDriver: true,
// //             }),
// //           ]).start();
// //         }, 80);
// //       }

// //       // Auto submit when last digit entered
// //       if (text && index === 3) { // Changed to 3 (last index for 4 digits)
// //         const fullOtp = [...newOtp].join('');
// //         if (fullOtp.length === 4) { // Changed to 4
// //           setTimeout(() => handleSubmit(fullOtp), 300);
// //         }
// //       }
// //     }
// //   };

// //   const handleKeyPress = (e: any, index: number) => {
// //     if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
// //       // Smooth backspace navigation
// //       setTimeout(() => {
// //         inputRefs.current[index - 1]?.focus();
// //         Animated.sequence([
// //           Animated.timing(digitAnims[index - 1], {
// //             toValue: 1.05,
// //             duration: 150,
// //             useNativeDriver: true,
// //           }),
// //           Animated.timing(digitAnims[index - 1], {
// //             toValue: 1,
// //             duration: 150,
// //             useNativeDriver: true,
// //           }),
// //         ]).start();
// //       }, 50);
// //     }
// //   };

// //   const handleResend = () => {
// //     handleButtonPress();
// //     setTimer(58);
// //     setOtp(['', '', '', '']); // Reset to 4 empty strings

// //     // Reset animations for OTP inputs
// //     digitAnims.forEach((anim, index) => {
// //       Animated.timing(anim, {
// //         toValue: 1,
// //         duration: 400,
// //         useNativeDriver: true,
// //         easing: Easing.out(Easing.back(1)),
// //       }).start();
// //     });

// //     setTimeout(() => inputRefs.current[0]?.focus(), 200);

// //     // Resend confirmation animation
// //     Animated.sequence([
// //       Animated.timing(glowAnim, {
// //         toValue: 1.5,
// //         duration: 300,
// //         useNativeDriver: true,
// //       }),
// //       Animated.timing(glowAnim, {
// //         toValue: 0.3,
// //         duration: 300,
// //         useNativeDriver: true,
// //       }),
// //     ]).start();

// //     Alert.alert('OTP Resent', `New OTP sent to ${phoneNumber}`);
// //   };

// //   const handleSubmit = async (fullOtp?: string) => {
// //     const otpCode = fullOtp || otp.join('');

// //     if (otpCode.length !== 4) { // Changed to 4
// //       // Smooth shake animation for error
// //       Animated.sequence([
// //         Animated.timing(shakeAnim, {
// //           toValue: 15,
// //           duration: 80,
// //           useNativeDriver: true,
// //         }),
// //         Animated.timing(shakeAnim, {
// //           toValue: -15,
// //           duration: 80,
// //           useNativeDriver: true,
// //         }),
// //         Animated.timing(shakeAnim, {
// //           toValue: 10,
// //           duration: 80,
// //           useNativeDriver: true,
// //         }),
// //         Animated.timing(shakeAnim, {
// //           toValue: -10,
// //           duration: 80,
// //           useNativeDriver: true,
// //         }),
// //         Animated.timing(shakeAnim, {
// //           toValue: 0,
// //           duration: 80,
// //           useNativeDriver: true,
// //         }),
// //       ]).start();

// //       Alert.alert('Error', 'Please enter all 4 digits'); // Changed message
// //       return;
// //     }

// //     setIsLoading(true);

// //     try {
// //       // ✅ API call to verify OTP
// //       const response = await postDataWithToken(
// //         { mobile: phoneNumber, otp: otpCode },
// //         mobile_siteConfig.USER_OTP_VERIFY
// //       );

// //       console.log('OTP Verify Response:', response);

// //       // Success animation sequence
// //       if (response?.success) {
// //         await storeDataToAsyncStorage(mobile_siteConfig.IS_LOGIN, true)

// //         if (response.token) {
// //           await storeDataToAsyncStorage(
// //             mobile_siteConfig.MOB_ACCESS_TOKEN_KEY,
// //             response.token
// //           );
// //           console.log('😍Token saved successfully!');
// //         }

// //         // ✅ CRITICAL FIX: USER DATA PROPERLY HANDLE KAREIN
// //         const userData = response.user || {};

// //         // ✅ DEFAULT VALUES SET KAREIN AGAR DATA NAHI HAI
// //         const userDataToStore = {
// //           id: userData.id || 0,
// //           name: userData.name || 'User', // ✅ DEFAULT NAME
// //           email: userData.email || '', // ✅ DEFAULT EMAIL
// //           mobile: userData.mobile || phoneNumber,
// //           profilePic: userData.profilePic || null,
// //           profileImage: userData.profilePic
// //             ? `http://103.119.171.213:3001${userData.profilePic}`
// //             : 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
// //           isVerified: userData.isVerified || true,
// //           createdAt: userData.createdAt || new Date().toISOString(),
// //           language: userData.language || null,
// //           subscription: userData.subscription || null
// //         };

// //         await storeDataToAsyncStorage(mobile_siteConfig.USER_Data, userDataToStore);
// //         console.log('✅ User data saved to AsyncStorage:', userDataToStore);
// //         Animated.parallel([
// //           Animated.timing(successAnim, {
// //             toValue: 1,
// //             duration: 600,
// //             useNativeDriver: true,
// //           }),
// //           Animated.timing(glowAnim, {
// //             toValue: 1.2,
// //             duration: 600,
// //             useNativeDriver: true,
// //           }),
// //         ]).start();

// //         // Simulate API call with better timing
// //         setTimeout(() => {
// //           setIsLoading(false);
// //           // Success celebration before navigation
// //           Animated.sequence([
// //             Animated.timing(successAnim, {
// //               toValue: 2,
// //               duration: 400,
// //               useNativeDriver: true,
// //             }),
// //             Animated.delay(500),
// //           ]).start(() => {
// //             Alert.alert('Success', 'Phone verified successfully! 🎉', [
// //               {
// //                 text: 'Continue',
// //                 onPress: () => navigation.navigate('SingerSelectionScreen' as never),
// //               },
// //             ]);
// //             //     onPress: () => {
// //             //       // ✅ SOLUTION 4: Navigation reset use karo
// //             //       navigation.reset({
// //             //         index: 0,
// //             //         routes: [{ name: 'SingerSelectionScreen' }],
// //             //       });
// //             //     },
// //             //   },
// //             // ]);
// //           });
// //         }, 1800);


// //       } else {
// //         // OTP invalid
// //         setIsLoading(false);
// //         Animated.sequence([
// //           Animated.timing(shakeAnim, { toValue: 15, duration: 80, useNativeDriver: true }),
// //           Animated.timing(shakeAnim, { toValue: -15, duration: 80, useNativeDriver: true }),
// //           Animated.timing(shakeAnim, { toValue: 0, duration: 80, useNativeDriver: true }),
// //         ]).start();

// //         Alert.alert('Invalid OTP', response?.message || 'Please enter the correct OTP');
// //       }
// //     } catch (error) {
// //       setIsLoading(false);
// //       console.error('OTP Verify Error:', error);
// //       Alert.alert('Network Error', 'Something went wrong. Please try again.');
// //     }
// //   };

// //   const formatPhoneNumber = (phone: string) => {
// //     return `+91 ${phone.slice(0, 5)} ${phone.slice(5)}`;
// //   };

// //   // Interpolations
// //   const backgroundInterpolate = backgroundAnim.interpolate({
// //     inputRange: [0, 1],
// //     outputRange: ['#0A0A0A', '#1A0A0A'],
// //   });

// //   const glowInterpolate = glowAnim.interpolate({
// //     inputRange: [0, 0.3, 0.8, 1.2, 1.5, 2],
// //     outputRange: [0, 0.2, 0.4, 0.7, 0.9, 1],
// //   });

// //   const successScale = successAnim.interpolate({
// //     inputRange: [0, 1, 2],
// //     outputRange: [1, 1.05, 1.1],
// //   });

// //   const successOpacity = successAnim.interpolate({
// //     inputRange: [0, 1, 2],
// //     outputRange: [0, 0.5, 1],
// //   });

// //   return (
// //     <KeyboardAvoidingView
// //       style={styles.container}
// //       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
// //     >
// //       {/* Smooth Animated Background */}
// //       <Animated.View
// //         style={[
// //           styles.background,
// //           {
// //             backgroundColor: backgroundInterpolate,
// //           }
// //         ]}
// //       >
// //         <Animated.View
// //           style={[
// //             styles.circle1,
// //             {
// //               transform: [
// //                 { scale: pulseAnim },
// //                 {
// //                   translateY: pulseAnim.interpolate({
// //                     inputRange: [1, 1.02],
// //                     outputRange: [0, -5]
// //                   })
// //                 }
// //               ]
// //             }
// //           ]}
// //         />
// //         <Animated.View
// //           style={[
// //             styles.circle2,
// //             {
// //               transform: [
// //                 { scale: pulseAnim },
// //                 {
// //                   translateY: pulseAnim.interpolate({
// //                     inputRange: [1, 1.02],
// //                     outputRange: [0, 8]
// //                   })
// //                 }
// //               ]
// //             }
// //           ]}
// //         />
// //         <Animated.View
// //           style={[
// //             styles.glowEffect,
// //             {
// //               opacity: glowInterpolate,
// //             }
// //           ]}
// //         />
// //       </Animated.View>

// //       {/* Header with smooth entrance */}
// //       <Animated.View
// //         style={[
// //           styles.header,
// //           {
// //             opacity: fadeAnim,
// //             transform: [
// //               { translateY: slideAnim },
// //               { scale: pulseAnim }
// //             ],
// //           },
// //         ]}
// //       >
// //         <TouchableOpacity
// //           onPress={() => navigation.goBack()}
// //           style={styles.backButton}
// //         >
// //           <Icon name="chevron-left" size={28} color="#fff" />
// //         </TouchableOpacity>
// //         <Animated.Text
// //           style={[
// //             styles.title,
// //             {
// //               transform: [{ scale: pulseAnim }]
// //             }
// //           ]}
// //         >
// //           Verify Phone
// //         </Animated.Text>
// //         <View style={styles.placeholder} />
// //       </Animated.View>

// //       {/* Main Content */}
// //       <Animated.View
// //         style={[
// //           styles.content,
// //           {
// //             opacity: fadeAnim,
// //             transform: [
// //               { translateY: slideAnim },
// //               { scale: inputScale }
// //             ],
// //           },
// //         ]}
// //       >
// //         {/* Phone Info with smooth animations */}
// //         <Animated.View
// //           style={[
// //             styles.phoneInfo,
// //             {
// //               transform: [{ scale: pulseAnim }]
// //             }
// //           ]}
// //         >
// //           <Animated.View
// //             style={[
// //               styles.phoneIcon,
// //               {
// //                 transform: [
// //                   { scale: pulseAnim },
// //                   {
// //                     rotate: pulseAnim.interpolate({
// //                       inputRange: [1, 1.02],
// //                       outputRange: ['0deg', '5deg']
// //                     })
// //                   }
// //                 ]
// //               }
// //             ]}
// //           >
// //             <Icon name="cellphone" size={24} color="#F44242" />
// //             <Animated.View
// //               style={[
// //                 styles.iconGlow,
// //                 {
// //                   opacity: glowInterpolate,
// //                 }
// //               ]}
// //             />
// //           </Animated.View>
// //           <Text style={styles.infoText}>
// //             Enter the 4-digit code sent to{'\n'} {/* Changed to 4-digit */}
// //             <Text style={styles.phoneNumber}>
// //               {formatPhoneNumber(phoneNumber)}
// //             </Text>
// //           </Text>
// //         </Animated.View>

// //         {/* OTP Inputs with individual animations - Now 4 inputs */}
// //         <Animated.View
// //           style={[
// //             styles.otpContainer,
// //             {
// //               transform: [
// //                 { translateX: shakeAnim },
// //                 { scale: successScale }
// //               ]
// //             }
// //           ]}
// //         >
// //           {otp.map((digit, index) => (
// //             <Animated.View
// //               key={index}
// //               style={{
// //                 transform: [
// //                   { scale: digitAnims[index] },
// //                   {
// //                     translateY: digitAnims[index].interpolate({
// //                       inputRange: [0, 1, 1.1],
// //                       outputRange: [20, 0, -5]
// //                     })
// //                   }
// //                 ]
// //               }}
// //             >
// //               <TextInput
// //                 ref={(el) => (inputRefs.current[index] = el)}
// //                 style={[
// //                   styles.otpInput,
// //                   digit && styles.otpInputFilled,
// //                 ]}
// //                 value={digit}
// //                 onChangeText={(text) => handleChange(text, index)}
// //                 onKeyPress={(e) => handleKeyPress(e, index)}
// //                 keyboardType="number-pad"
// //                 maxLength={1}
// //                 textAlign="center"
// //                 autoFocus={index === 0}
// //                 selectionColor="#F44242"
// //                 placeholder="•"
// //                 placeholderTextColor="#444"
// //                 editable={!isLoading}
// //               />
// //             </Animated.View>
// //           ))}
// //         </Animated.View>

// //         {/* Timer/Resend Section */}
// //         <Animated.View
// //           style={[
// //             styles.resendSection,
// //             {
// //               transform: [{ scale: pulseAnim }]
// //             }
// //           ]}
// //         >
// //           {timer > 0 ? (
// //             <View style={styles.timerContainer}>
// //               <Animated.View style={{
// //                 transform: [{
// //                   rotate: pulseAnim.interpolate({
// //                     inputRange: [1, 1.02],
// //                     outputRange: ['0deg', '180deg']
// //                   })
// //                 }]
// //               }}>
// //                 <Icon name="timer-outline" size={16} color="#666" />
// //               </Animated.View>
// //               <Text style={styles.timerText}>
// //                 Resend code in 00:{String(timer).padStart(2, '0')}
// //               </Text>
// //             </View>
// //           ) : (
// //             <TouchableOpacity onPress={handleResend} style={styles.resendButton}>
// //               <Animated.View style={{ transform: [{ scale: pulseAnim }] }}>
// //                 <Icon name="refresh" size={16} color="#F44242" />
// //               </Animated.View>
// //               <Text style={styles.resendText}>Resend OTP</Text>
// //             </TouchableOpacity>
// //           )}
// //         </Animated.View>

// //         {/* Continue Button with smooth interactions */}
// //         <Animated.View style={{ transform: [{ scale: buttonScale }] }}>
// //           <TouchableOpacity
// //             style={[
// //               styles.continueButton,
// //               {
// //                 opacity: otp.join('').length === 4 && !isLoading ? 1 : 0.7, // Changed to 4
// //               },
// //             ]}
// //             onPress={() => {
// //               handleButtonPress();
// //               handleSubmit();
// //             }}
// //             disabled={otp.join('').length !== 4 || isLoading} // Changed to 4
// //             activeOpacity={0.9}
// //           >
// //             <Animated.View
// //               style={[
// //                 styles.buttonGlow,
// //                 {
// //                   opacity: successOpacity,
// //                 }
// //               ]}
// //             />
// //             {isLoading ? (
// //               <View style={styles.loadingContainer}>
// //                 <Animated.View
// //                   style={[
// //                     styles.loadingSpinner,
// //                     {
// //                       transform: [{
// //                         rotate: pulseAnim.interpolate({
// //                           inputRange: [1, 1.02],
// //                           outputRange: ['0deg', '360deg']
// //                         })
// //                       }]
// //                     }
// //                   ]}
// //                 />
// //                 <Text style={styles.continueButtonText}>Verifying...</Text>
// //               </View>
// //             ) : (
// //               <>
// //                 <Text style={styles.continueButtonText}>Verify & Continue</Text>
// //                 <Animated.View
// //                   style={{
// //                     transform: [{
// //                       translateX: pulseAnim.interpolate({
// //                         inputRange: [1, 1.02],
// //                         outputRange: [0, 3]
// //                       })
// //                     }]
// //                   }}
// //                 >
// //                   <Icon name="arrow-right" size={20} color="#fff" />
// //                 </Animated.View>
// //               </>
// //             )}
// //           </TouchableOpacity>
// //         </Animated.View>

// //         {/* Help Text */}
// //         <Animated.Text
// //           style={[
// //             styles.helpText,
// //             {
// //               opacity: fadeAnim,
// //               transform: [{
// //                 translateY: pulseAnim.interpolate({
// //                   inputRange: [1, 1.02],
// //                   outputRange: [0, 2]
// //                 })
// //               }]
// //             }
// //           ]}
// //         >
// //           Didn't receive the code? Check your SMS messages or {' '}
// //           <Text style={styles.helpLink} onPress={handleResend}>
// //             request a new code
// //           </Text>
// //         </Animated.Text>
// //       </Animated.View>

// //       {/* Success Overlay */}
// //       <Animated.View
// //         style={[
// //           styles.successOverlay,
// //           {
// //             opacity: successOpacity,
// //             transform: [{ scale: successScale }]
// //           }
// //         ]}
// //         pointerEvents="none"
// //       />
// //     </KeyboardAvoidingView>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#0A0A0A',
// //   },
// //   background: {
// //     position: 'absolute',
// //     width: '100%',
// //     height: '100%',
// //   },
// //   glowEffect: {
// //     ...StyleSheet.absoluteFillObject,
// //     backgroundColor: 'rgba(244, 66, 66, 0.08)',
// //   },
// //   circle1: {
// //     position: 'absolute',
// //     top: -100,
// //     right: -100,
// //     width: 300,
// //     height: 300,
// //     borderRadius: 150,
// //     backgroundColor: 'rgba(244, 66, 66, 0.03)',
// //   },
// //   circle2: {
// //     position: 'absolute',
// //     bottom: -150,
// //     left: -100,
// //     width: 400,
// //     height: 400,
// //     borderRadius: 200,
// //     backgroundColor: 'rgba(244, 66, 66, 0.02)',
// //   },
// //   header: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     justifyContent: 'space-between',
// //     paddingHorizontal: 24,
// //     paddingTop: Platform.OS === 'ios' ? 60 : 40,
// //     paddingBottom: 20,
// //   },
// //   backButton: {
// //     padding: 8,
// //   },
// //   title: {
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //     color: '#fff',
// //     textAlign: 'center',
// //     textShadowColor: 'rgba(244, 66, 66, 0.3)',
// //     textShadowOffset: { width: 0, height: 2 },
// //     textShadowRadius: 10,
// //   },
// //   placeholder: {
// //     width: 40,
// //   },
// //   content: {
// //     flex: 1,
// //     paddingHorizontal: 24,
// //     paddingTop: 40,
// //   },
// //   phoneInfo: {
// //     alignItems: 'center',
// //     marginBottom: 50,
// //   },
// //   phoneIcon: {
// //     width: 60,
// //     height: 60,
// //     borderRadius: 30,
// //     backgroundColor: 'rgba(244, 66, 66, 0.1)',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     marginBottom: 20,
// //     borderWidth: 1,
// //     borderColor: 'rgba(244, 66, 66, 0.2)',
// //     position: 'relative',
// //   },
// //   iconGlow: {
// //     position: 'absolute',
// //     width: 80,
// //     height: 80,
// //     borderRadius: 40,
// //     backgroundColor: 'rgba(244, 66, 66, 0.15)',
// //     zIndex: -1,
// //   },
// //   infoText: {
// //     color: 'rgba(255, 255, 255, 0.7)',
// //     fontSize: 16,
// //     textAlign: 'center',
// //     lineHeight: 24,
// //   },
// //   phoneNumber: {
// //     color: '#fff',
// //     fontWeight: '600',
// //     fontSize: 18,
// //     textShadowColor: 'rgba(244, 66, 66, 0.3)',
// //     textShadowOffset: { width: 0, height: 1 },
// //     textShadowRadius: 5,
// //   },
// //   otpContainer: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     marginBottom: 40,
// //   },
// //   otpInput: {
// //     width: 65, // Slightly wider for better appearance with 4 inputs
// //     height: 70, // Slightly taller
// //     backgroundColor: 'rgba(255, 255, 255, 0.05)',
// //     borderRadius: 16,
// //     color: '#fff',
// //     fontSize: 24,
// //     fontWeight: '600',
// //     textAlign: 'center',
// //     borderWidth: 2,
// //     borderColor: 'rgba(255, 255, 255, 0.1)',
// //     shadowColor: '#000',
// //     shadowOffset: { width: 0, height: 2 },
// //     shadowOpacity: 0.1,
// //     shadowRadius: 8,
// //     elevation: 4,
// //   },
// //   otpInputFilled: {
// //     backgroundColor: 'rgba(244, 66, 66, 0.1)',
// //     borderColor: 'rgba(244, 66, 66, 0.5)',
// //     color: '#F44242',
// //     shadowColor: '#F44242',
// //     shadowOffset: { width: 0, height: 0 },
// //     shadowOpacity: 0.3,
// //     shadowRadius: 10,
// //     elevation: 6,
// //   },
// //   resendSection: {
// //     alignItems: 'center',
// //     marginBottom: 30,
// //   },
// //   timerContainer: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     backgroundColor: 'rgba(255, 255, 255, 0.05)',
// //     paddingHorizontal: 16,
// //     paddingVertical: 8,
// //     borderRadius: 20,
// //   },
// //   timerText: {
// //     color: '#666',
// //     fontSize: 14,
// //     marginLeft: 6,
// //     fontWeight: '500',
// //   },
// //   resendButton: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     backgroundColor: 'rgba(244, 66, 66, 0.1)',
// //     paddingHorizontal: 20,
// //     paddingVertical: 10,
// //     borderRadius: 20,
// //     borderWidth: 1,
// //     borderColor: 'rgba(244, 66, 66, 0.3)',
// //     shadowColor: '#F44242',
// //     shadowOffset: { width: 0, height: 0 },
// //     shadowOpacity: 0.3,
// //     shadowRadius: 8,
// //     elevation: 4,
// //   },
// //   resendText: {
// //     color: '#F44242',
// //     fontSize: 14,
// //     fontWeight: '600',
// //     marginLeft: 6,
// //   },
// //   continueButton: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     backgroundColor: '#F44242',
// //     paddingVertical: 18,
// //     borderRadius: 16,
// //     marginBottom: 20,
// //     shadowColor: '#F44242',
// //     shadowOffset: { width: 0, height: 4 },
// //     shadowOpacity: 0.4,
// //     shadowRadius: 15,
// //     elevation: 10,
// //     position: 'relative',
// //     overflow: 'hidden',
// //   },
// //   buttonGlow: {
// //     position: 'absolute',
// //     top: 0,
// //     left: 0,
// //     right: 0,
// //     bottom: 0,
// //     backgroundColor: 'rgba(255, 255, 255, 0.2)',
// //   },
// //   loadingContainer: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //   },
// //   loadingSpinner: {
// //     width: 20,
// //     height: 20,
// //     borderRadius: 10,
// //     borderWidth: 2,
// //     borderColor: '#fff',
// //     borderTopColor: 'transparent',
// //     marginRight: 8,
// //   },
// //   continueButtonText: {
// //     fontSize: 16,
// //     fontWeight: 'bold',
// //     color: '#fff',
// //     marginRight: 8,
// //     textShadowColor: 'rgba(0, 0, 0, 0.3)',
// //     textShadowOffset: { width: 0, height: 1 },
// //     textShadowRadius: 3,
// //   },
// //   helpText: {
// //     color: 'rgba(255, 255, 255, 0.5)',
// //     fontSize: 12,
// //     textAlign: 'center',
// //     lineHeight: 18,
// //   },
// //   helpLink: {
// //     color: '#F44242',
// //     fontWeight: '500',
// //   },
// //   successOverlay: {
// //     ...StyleSheet.absoluteFillObject,
// //     backgroundColor: 'rgba(244, 66, 66, 0.1)',
// //   },
// // });

// // export default EnterOtpScreen;


// import React, { useState, useEffect, useRef } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   Alert,
//   TextInput,
//   Platform,
//   KeyboardAvoidingView,
//   ActivityIndicator,
// } from 'react-native';
// import { useNavigation, useRoute } from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import { postDataWithToken } from '../Services/mobile-api';
// import { mobile_siteConfig } from '../Services/mobile-siteConfig';
// import { storeDataToAsyncStorage } from '../Services/CommonFunction';
// import { wp, hp } from "../assets/Global.Css";

// const EnterOtpScreen = () => {
//   const navigation = useNavigation();
//   const route = useRoute();
//   const { phoneNumber } = route.params as { phoneNumber: string };

//   const [otp, setOtp] = useState<string[]>(['', '', '', '']);
//   const [timer, setTimer] = useState<number>(58);
//   const [isLoading, setIsLoading] = useState(false);

//   const inputRefs = useRef<Array<TextInput | null>>([]);

//   useEffect(() => {
//     // Timer
//     if (timer === 0) return;
//     const interval = setInterval(() => {
//       setTimer((prev) => (prev > 0 ? prev - 1 : 0));
//     }, 1000);
//     return () => clearInterval(interval);
//   }, [timer]);

//   const handleChange = (text: string, index: number) => {
//     if (/^\d*$/.test(text) && text.length <= 1) {
//       const newOtp = [...otp];
//       newOtp[index] = text;
//       setOtp(newOtp);

//       // Auto focus next input
//       if (text && index < 3) {
//         setTimeout(() => {
//           inputRefs.current[index + 1]?.focus();
//         }, 50);
//       }

//       // Auto submit when last digit entered
//       if (text && index === 3) {
//         const fullOtp = [...newOtp].join('');
//         if (fullOtp.length === 4) {
//           setTimeout(() => handleSubmit(fullOtp), 300);
//         }
//       }
//     }
//   };

//   const handleKeyPress = (e: any, index: number) => {
//     if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
//       setTimeout(() => {
//         inputRefs.current[index - 1]?.focus();
//       }, 50);
//     }
//   };

//   const handleResend = () => {
//     setTimer(58);
//     setOtp(['', '', '', '']);
//     setTimeout(() => inputRefs.current[0]?.focus(), 200);
//     Alert.alert('OTP Resent', `New OTP sent to ${phoneNumber}`);
//   };

//   const handleSubmit = async (fullOtp?: string) => {
//     const otpCode = fullOtp || otp.join('');

//     if (otpCode.length !== 4) {
//       Alert.alert('Error', 'Please enter all 4 digits');
//       return;
//     }

//     setIsLoading(true);

//     try {
//       const response = await postDataWithToken(
//         { mobile: phoneNumber, otp: otpCode },
//         mobile_siteConfig.USER_OTP_VERIFY
//       );

//       console.log('OTP Verify Response:', response);

//       if (response?.success) {
//         await storeDataToAsyncStorage(mobile_siteConfig.IS_LOGIN, true)

//         if (response.token) {
//           await storeDataToAsyncStorage(
//             mobile_siteConfig.MOB_ACCESS_TOKEN_KEY,
//             response.token
//           );
//           console.log('Token saved successfully!');
//         }

//         // User data handling
//         const userData = response.user || {};
//         const userDataToStore = {
//           id: userData.id || 0,
//           name: userData.name || 'User',
//           email: userData.email || '',
//           mobile: userData.mobile || phoneNumber,
//           profilePic: userData.profilePic || null,
//           profileImage: userData.profilePic
//             ? `http://103.119.171.213:3001${userData.profilePic}`
//             : 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
//           isVerified: userData.isVerified || true,
//           createdAt: userData.createdAt || new Date().toISOString(),
//           language: userData.language || null,
//           subscription: userData.subscription || null
//         };

//         await storeDataToAsyncStorage(mobile_siteConfig.USER_Data, userDataToStore);
//         console.log('User data saved to AsyncStorage:', userDataToStore);

//         // ✅ DIRECT NAVIGATION WITHOUT POPUP
//         setIsLoading(false);
//         navigation.navigate('SingerSelectionScreen' as never);

//       } else {
//         setIsLoading(false);
//         Alert.alert('Invalid OTP', response?.message || 'Please enter the correct OTP');
//       }
//     } catch (error) {
//       setIsLoading(false);
//       console.error('OTP Verify Error:', error);
//       Alert.alert('Network Error', 'Something went wrong. Please try again.');
//     }
//   };

//   const formatPhoneNumber = (phone: string) => {
//     // International format - show as is
//     return `+${phone}`;
//   };

//   return (
//     <KeyboardAvoidingView
//       style={styles.container}
//       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//     >
//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity
//           onPress={() => navigation.goBack()}
//           style={styles.backButton}
//         >
//           <Icon name="chevron-left" size={wp(7)} color="#fff" />
//         </TouchableOpacity>
//         <Text style={styles.title}>
//           Verify Phone
//         </Text>
//         <View style={styles.placeholder} />
//       </View>

//       {/* Main Content */}
//       <View style={styles.content}>
//         {/* Phone Info */}
//         <View style={styles.phoneInfo}>
//           <View style={styles.phoneIcon}>
//             <Icon name="cellphone" size={wp(6)} color="#F44242" />
//           </View>
//           <Text style={styles.infoText}>
//             Enter the 4-digit code sent to{'\n'}
//             <Text style={styles.phoneNumber}>
//               {formatPhoneNumber(phoneNumber)}
//             </Text>
//           </Text>
//         </View>

//         {/* OTP Inputs */}
//         <View style={styles.otpContainer}>
//           {otp.map((digit, index) => (
//             <TextInput
//               key={index}
//               ref={(el) => (inputRefs.current[index] = el)}
//               style={[
//                 styles.otpInput,
//                 digit && styles.otpInputFilled,
//               ]}
//               value={digit}
//               onChangeText={(text) => handleChange(text, index)}
//               onKeyPress={(e) => handleKeyPress(e, index)}
//               keyboardType="number-pad"
//               maxLength={1}
//               textAlign="center"
//               autoFocus={index === 0}
//               selectionColor="#F44242"
//               placeholder="•"
//               placeholderTextColor="#444"
//               editable={!isLoading}
//             />
//           ))}
//         </View>

//         {/* Timer/Resend Section */}
//         <View style={styles.resendSection}>
//           {timer > 0 ? (
//             <View style={styles.timerContainer}>
//               <Icon name="timer-outline" size={wp(4)} color="#666" />
//               <Text style={styles.timerText}>
//                 Resend code in 00:{String(timer).padStart(2, '0')}
//               </Text>
//             </View>
//           ) : (
//             <TouchableOpacity onPress={handleResend} style={styles.resendButton}>
//               <Icon name="refresh" size={wp(4)} color="#F44242" />
//               <Text style={styles.resendText}>Resend OTP</Text>
//             </TouchableOpacity>
//           )}
//         </View>

//         {/* Continue Button */}
//         <TouchableOpacity
//           style={[
//             styles.continueButton,
//             {
//               opacity: otp.join('').length === 4 && !isLoading ? 1 : 0.6,
//             },
//           ]}
//           onPress={() => handleSubmit()}
//           disabled={otp.join('').length !== 4 || isLoading}
//           activeOpacity={0.8}
//         >
//           {isLoading ? (
//             <View style={styles.loadingContainer}>
//               <ActivityIndicator size="small" color="#fff" />
//               <Text style={styles.continueButtonText}>Verifying...</Text>
//             </View>
//           ) : (
//             <>
//               <Text style={styles.continueButtonText}>Verify & Continue</Text>
//               <Icon name="arrow-right" size={wp(5)} color="#fff" />
//             </>
//           )}
//         </TouchableOpacity>

//         {/* Help Text */}
//         <Text style={styles.helpText}>
//           Didn't receive the code? Check your SMS messages or {' '}
//           <Text style={styles.helpLink} onPress={handleResend}>
//             request a new code
//           </Text>
//         </Text>
//       </View>
//     </KeyboardAvoidingView>
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
//     paddingHorizontal: wp(5),
//     paddingTop: Platform.OS === 'ios' ? hp(8) : hp(5),
//     paddingBottom: hp(2),
//   },
//   backButton: {
//     padding: wp(1),
//   },
//   title: {
//     fontSize: wp(4.5),
//     fontWeight: 'bold',
//     color: '#fff',
//     textAlign: 'center',
//   },
//   placeholder: {
//     width: wp(10),
//   },
//   content: {
//     flex: 1,
//     paddingHorizontal: wp(5),
//     paddingTop: hp(5),
//   },
//   phoneInfo: {
//     alignItems: 'center',
//     marginBottom: hp(6),
//   },
//   phoneIcon: {
//     width: wp(15),
//     height: wp(15),
//     borderRadius: wp(7.5),
//     backgroundColor: 'rgba(244, 66, 66, 0.1)',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: hp(2),
//     borderWidth: 1,
//     borderColor: 'rgba(244, 66, 66, 0.2)',
//   },
//   infoText: {
//     color: 'rgba(255, 255, 255, 0.7)',
//     fontSize: wp(4),
//     textAlign: 'center',
//     lineHeight: hp(3),
//   },
//   phoneNumber: {
//     color: '#fff',
//     fontWeight: '600',
//     fontSize: wp(4.5),
//   },
//   otpContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: hp(5),
//     paddingHorizontal: wp(2),
//   },
//   otpInput: {
//     width: wp(18),
//     height: wp(18),
//     backgroundColor: 'rgba(255, 255, 255, 0.05)',
//     borderRadius: wp(4),
//     color: '#fff',
//     fontSize: wp(6),
//     fontWeight: '600',
//     textAlign: 'center',
//     borderWidth: 2,
//     borderColor: 'rgba(255, 255, 255, 0.1)',
//   },
//   otpInputFilled: {
//     backgroundColor: 'rgba(244, 66, 66, 0.1)',
//     borderColor: 'rgba(244, 66, 66, 0.5)',
//     color: '#F44242',
//   },
//   resendSection: {
//     alignItems: 'center',
//     marginBottom: hp(4),
//   },
//   timerContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: 'rgba(255, 255, 255, 0.05)',
//     paddingHorizontal: wp(4),
//     paddingVertical: hp(1),
//     borderRadius: wp(5),
//   },
//   timerText: {
//     color: '#666',
//     fontSize: wp(3.5),
//     marginLeft: wp(1.5),
//     fontWeight: '500',
//   },
//   resendButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: 'rgba(244, 66, 66, 0.1)',
//     paddingHorizontal: wp(5),
//     paddingVertical: hp(1.5),
//     borderRadius: wp(5),
//     borderWidth: 1,
//     borderColor: 'rgba(244, 66, 66, 0.3)',
//   },
//   resendText: {
//     color: '#F44242',
//     fontSize: wp(3.5),
//     fontWeight: '600',
//     marginLeft: wp(1.5),
//   },
//   continueButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#F44242',
//     paddingVertical: hp(2.5),
//     borderRadius: wp(8),
//     marginBottom: hp(3),
//     shadowColor: '#F44242',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 12,
//     elevation: 8,
//   },
//   loadingContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   continueButtonText: {
//     fontSize: wp(4.5),
//     fontWeight: 'bold',
//     color: '#fff',
//     marginRight: wp(2),
//   },
//   helpText: {
//     color: 'rgba(255, 255, 255, 0.5)',
//     fontSize: wp(3),
//     textAlign: 'center',
//     lineHeight: hp(2.5),
//   },
//   helpLink: {
//     color: '#F44242',
//     fontWeight: '500',
//   },
// });

// export default EnterOtpScreen; 

import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  TextInput,
  Platform,
  KeyboardAvoidingView,
  ActivityIndicator,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { postDataWithToken } from '../Services/mobile-api';
import { mobile_siteConfig } from '../Services/mobile-siteConfig';
import { storeDataToAsyncStorage } from '../Services/CommonFunction';
import { wp, hp } from "../assets/Global.Css";

const EnterOtpScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { phoneNumber } = route.params as { phoneNumber: string };

  const [otp, setOtp] = useState<string[]>(['', '', '', '']);
  const [timer, setTimer] = useState<number>(58);
  const [isLoading, setIsLoading] = useState(false);

  const inputRefs = useRef<Array<TextInput | null>>([]);

  useEffect(() => {
    // Timer
    if (timer === 0) return;
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const handleChange = (text: string, index: number) => {
    if (/^\d*$/.test(text) && text.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);

      // Auto focus next input
      if (text && index < 3) {
        setTimeout(() => {
          inputRefs.current[index + 1]?.focus();
        }, 50);
      }

      // Auto submit when last digit entered
      if (text && index === 3) {
        const fullOtp = [...newOtp].join('');
        if (fullOtp.length === 4) {
          setTimeout(() => handleSubmit(fullOtp), 300);
        }
      }
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      setTimeout(() => {
        inputRefs.current[index - 1]?.focus();
      }, 50);
    }
  };

  const handleResend = () => {
    setTimer(58);
    setOtp(['', '', '', '']);
    setTimeout(() => inputRefs.current[0]?.focus(), 200);
    Alert.alert('OTP Resent', `New OTP sent to ${phoneNumber}`);
  };

  const handleSubmit = async (fullOtp?: string) => {
    const otpCode = fullOtp || otp.join('');

    if (otpCode.length !== 4) {
      Alert.alert('Error', 'Please enter all 4 digits');
      return;
    }

    setIsLoading(true);

    try {
      const response = await postDataWithToken(
        { mobile: phoneNumber, otp: otpCode },
        mobile_siteConfig.USER_OTP_VERIFY
      );

      console.log('OTP Verify Response:', response);

      if (response?.success) {
        await storeDataToAsyncStorage(mobile_siteConfig.IS_LOGIN, true)

        if (response.token) {
          await storeDataToAsyncStorage(
            mobile_siteConfig.MOB_ACCESS_TOKEN_KEY,
            response.token
          );
          console.log('Token saved successfully!');
        }

        // User data handling
        const userData = response.user || {};
        const userDataToStore = {
          id: userData.id || 0,
          name: userData.name || 'User',
          email: userData.email || '',
          mobile: userData.mobile || phoneNumber,
          profilePic: userData.profilePic || null,
          profileImage: userData.profilePic
            ? `http://103.119.171.213:3001${userData.profilePic}`
            : 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
          isVerified: userData.isVerified || true,
          createdAt: userData.createdAt || new Date().toISOString(),
          language: userData.language || null,
          subscription: userData.subscription || null
        };

        await storeDataToAsyncStorage(mobile_siteConfig.USER_Data, userDataToStore);
        console.log('User data saved to AsyncStorage:', userDataToStore);

        // ✅ DIRECT NAVIGATION WITHOUT POPUP
        setIsLoading(false);
        navigation.navigate('SingerSelectionScreen' as never);

      } else {
        setIsLoading(false);
        Alert.alert('Invalid OTP', response?.message || 'Please enter the correct OTP');
      }
    } catch (error) {
      setIsLoading(false);
      console.error('OTP Verify Error:', error);
      Alert.alert('Network Error', 'Something went wrong. Please try again.');
    }
  };

  const formatPhoneNumber = (phone: string) => {
    // International format - show as is
    return `+${phone}`;
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Icon name="chevron-left" size={wp(7)} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.title}>
          Verify Phone
        </Text>
        <View style={styles.placeholder} />
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        {/* Phone Info */}
        <View style={styles.phoneInfo}>
          <View style={styles.phoneIcon}>
            <Icon name="cellphone" size={wp(6)} color="#F44242" />
          </View>
          <Text style={styles.infoText}>
            Enter the 4-digit code sent to{'\n'}
            <Text style={styles.phoneNumber}>
              {formatPhoneNumber(phoneNumber)}
            </Text>
          </Text>
        </View>

        {/* OTP Inputs */}
        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <View key={index} style={styles.otpInputWrapper}>
              <TextInput
                ref={(el) => (inputRefs.current[index] = el)}
                style={[
                  styles.otpInput,
                  digit && styles.otpInputFilled,
                ]}
                value={digit}
                onChangeText={(text) => handleChange(text, index)}
                onKeyPress={(e) => handleKeyPress(e, index)}
                keyboardType="number-pad"
                maxLength={1}
                textAlign="center"
                autoFocus={index === 0}
                selectionColor="#F44242"
                placeholder="•"
                placeholderTextColor="#666"
                editable={!isLoading}
              />
            </View>
          ))}
        </View>

        {/* Timer/Resend Section */}
        <View style={styles.resendSection}>
          {timer > 0 ? (
            <View style={styles.timerContainer}>
              <Icon name="timer-outline" size={wp(4)} color="#666" />
              <Text style={styles.timerText}>
                Resend code in 00:{String(timer).padStart(2, '0')}
              </Text>
            </View>
          ) : (
            <TouchableOpacity onPress={handleResend} style={styles.resendButton}>
              <Icon name="refresh" size={wp(4)} color="#F44242" />
              <Text style={styles.resendText}>Resend OTP</Text>
            </TouchableOpacity>
          )}
        </View>

        {/* Continue Button */}
        <TouchableOpacity
          style={[
            styles.continueButton,
            {
              opacity: otp.join('').length === 4 && !isLoading ? 1 : 0.6,
            },
          ]}
          onPress={() => handleSubmit()}
          disabled={otp.join('').length !== 4 || isLoading}
          activeOpacity={0.8}
        >
          {isLoading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="small" color="#fff" />
              <Text style={styles.continueButtonText}>Verifying...</Text>
            </View>
          ) : (
            <>
              <Text style={styles.continueButtonText}>Verify & Continue</Text>
              <Icon name="arrow-right" size={wp(5)} color="#fff" />
            </>
          )}
        </TouchableOpacity>

        {/* Help Text */}
        <Text style={styles.helpText}>
          Didn't receive the code? Check your SMS messages or {' '}
          <Text style={styles.helpLink} onPress={handleResend}>
            request a new code
          </Text>
        </Text>
      </View>
    </KeyboardAvoidingView>
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
    paddingHorizontal: wp(5),
    paddingTop: Platform.OS === 'ios' ? hp(8) : hp(5),
    paddingBottom: hp(2),
  },
  backButton: {
    padding: wp(1),
  },
  title: {
    fontSize: wp(4.5),
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  placeholder: {
    width: wp(10),
  },
  content: {
    flex: 1,
    paddingHorizontal: wp(5),
    paddingTop: hp(5),
  },
  phoneInfo: {
    alignItems: 'center',
    marginBottom: hp(6),
  },
  phoneIcon: {
    width: wp(15),
    height: wp(15),
    borderRadius: wp(7.5),
    backgroundColor: 'rgba(244, 66, 66, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp(2),
    borderWidth: 1,
    borderColor: 'rgba(244, 66, 66, 0.2)',
  },
  infoText: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: wp(4),
    textAlign: 'center',
    lineHeight: hp(3),
  },
  phoneNumber: {
    color: '#fff',
    fontWeight: '600',
    fontSize: wp(4.5),
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp(5),
    paddingHorizontal: wp(2),
  },
  otpInputWrapper: {
    // Wrapper to ensure consistent styling
  },
  otpInput: {
    width: wp(18),
    height: wp(18),
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: wp(4),
    color: '#fff',
    fontSize: wp(6),
    fontWeight: '600',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    // Ensure placeholder is always centered
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  otpInputFilled: {
    backgroundColor: 'rgba(244, 66, 66, 0.1)',
    borderColor: 'rgba(244, 66, 66, 0.5)',
    color: '#F44242',
  },
  resendSection: {
    alignItems: 'center',
    marginBottom: hp(4),
  },
  timerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    paddingHorizontal: wp(4),
    paddingVertical: hp(1),
    borderRadius: wp(5),
  },
  timerText: {
    color: '#666',
    fontSize: wp(3.5),
    marginLeft: wp(1.5),
    fontWeight: '500',
  },
  resendButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(244, 66, 66, 0.1)',
    paddingHorizontal: wp(5),
    paddingVertical: hp(1.5),
    borderRadius: wp(5),
    borderWidth: 1,
    borderColor: 'rgba(244, 66, 66, 0.3)',
  },
  resendText: {
    color: '#F44242',
    fontSize: wp(3.5),
    fontWeight: '600',
    marginLeft: wp(1.5),
  },
  continueButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F44242',
    paddingVertical: hp(2.5),
    borderRadius: wp(8),
    marginBottom: hp(3),
    shadowColor: '#F44242',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
  loadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  continueButtonText: {
    fontSize: wp(4.5),
    fontWeight: 'bold',
    color: '#fff',
    marginRight: wp(2),
  },
  helpText: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: wp(3),
    textAlign: 'center',
    lineHeight: hp(2.5),
  },
  helpLink: {
    color: '#F44242',
    fontWeight: '500',
  },
});

export default EnterOtpScreen;