
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