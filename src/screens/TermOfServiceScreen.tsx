// src/screens/TermsOfServiceScreen.js
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { wp, hp } from '../assets/Global.Css';

const TermsOfServiceScreen = ({ navigation }) => {
  const termsSections = [
    {
      title: "1. Acceptance of Terms",
      content: `By accessing or using the Afrofy music streaming service, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our services.`
    },
    {
      title: "2. Service Description",
      content: `Afrofy provides a music streaming service that allows users to:
• Stream music from our extensive catalog
• Create and share playlists
• Discover new music based on preferences
• Download music for offline listening (premium feature)

We reserve the right to modify, suspend, or discontinue any aspect of the service at any time.`
    },
    {
      title: "3. User Accounts",
      content: `To access certain features, you must create an account. You agree to:
• Provide accurate and complete information
• Maintain the security of your password
• Notify us immediately of any unauthorized use
• Be responsible for all activities under your account

You must be at least 13 years old to use our service.`
    },
    {
      title: "4. Subscription and Payments",
      content: `• Free Tier: Access to basic features with advertisements
• Premium Subscription: Ad-free experience with offline downloads and higher audio quality

Subscription fees are billed in advance on a recurring basis. You can cancel your subscription at any time, but no refunds will be provided for partial subscription periods.`
    },
    {
      title: "5. User Conduct",
      content: `You agree not to:
• Use the service for any illegal purpose
• Share your account with others
• Attempt to circumvent any content protection systems
• Upload or distribute viruses or malicious code
• Use automated systems to access the service

Violation of these rules may result in termination of your account.`
    },
    {
      title: "6. Intellectual Property",
      content: `All content available through Afrofy, including music, artwork, and software, is protected by copyright and other intellectual property laws. You may not:
• Copy, distribute, or modify any content
• Use content for commercial purposes without permission
• Reverse engineer or decompile our software

The Afrofy service and its original content are owned by Afrofy Inc.`
    },
    {
      title: "7. Termination",
      content: `We may terminate or suspend your account immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties, or for any other reason.`
    },
    {
      title: "8. Disclaimer of Warranties",
      content: `The service is provided "as is" and "as available" without warranties of any kind, either express or implied. We do not warrant that:
• The service will be uninterrupted or error-free
• The quality will meet your expectations
• Any errors will be corrected`
    },
    {
      title: "9. Limitation of Liability",
      content: `To the fullest extent permitted by law, Afrofy shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or use, whether in an action in contract, tort, or otherwise.`
    },
    {
      title: "10. Governing Law",
      content: `These Terms shall be governed by the laws of Nigeria without regard to its conflict of law provisions. Any disputes shall be resolved in the courts of Lagos, Nigeria.`
    },
    {
      title: "11. Changes to Terms",
      content: `We reserve the right to modify these terms at any time. We will notify you of significant changes through the service or by email. Continued use of the service after changes constitutes acceptance of the new terms.`
    }
  ];

  const renderHeader = () => (
    <View style={styles.header}>
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Icon name="arrow-back" size={wp(6)} color="#fff" />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Terms of Service</Text>
      <View style={styles.headerPlaceholder} />
    </View>
  );

  const renderTermSection = (section, index) => (
    <View key={index} style={styles.section}>
      <Text style={styles.sectionTitle}>{section.title}</Text>
      <Text style={styles.sectionContent}>{section.content}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      
      {renderHeader()}
      
      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.heroSection}>
          <Text style={styles.heroTitle}>Terms of Service</Text>
          <Text style={styles.heroSubtitle}>
            Effective Date: {new Date().toLocaleDateString()}
          </Text>
          <Text style={styles.heroDescription}>
            Please read these Terms of Service carefully before using the Afrofy music streaming service.
          </Text>
        </View>

        {termsSections.map(renderTermSection)}
        
        <View style={styles.agreementSection}>
          <Text style={styles.agreementText}>
            By using Afrofy, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
          </Text>
        </View>
        
        <View style={styles.bottomPadding} />
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
    paddingHorizontal: wp(4),
    paddingVertical: hp(1.5),
    borderBottomWidth: 1,
    borderBottomColor: '#282828',
  },
  backButton: {
    padding: wp(2),
  },
  headerTitle: {
    fontSize: wp(4.5),
    fontWeight: 'bold',
    color: '#fff',
  },
  headerPlaceholder: {
    width: wp(10),
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: hp(2),
  },
  heroSection: {
    backgroundColor: '#181818',
    marginHorizontal: wp(4),
    marginBottom: hp(3),
    borderRadius: wp(3),
    padding: wp(5),
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: wp(5),
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: hp(1),
  },
  heroSubtitle: {
    fontSize: wp(3.8),
    color: '#FF3B3B',
    marginBottom: hp(1.5),
    fontWeight: '500',
  },
  heroDescription: {
    fontSize: wp(4),
    color: '#b3b3b3',
    textAlign: 'center',
    lineHeight: hp(2.8),
  },
  section: {
    backgroundColor: '#181818',
    marginHorizontal: wp(4),
    marginBottom: hp(2),
    borderRadius: wp(3),
    padding: wp(5),
  },
  sectionTitle: {
    fontSize: wp(4.2),
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: hp(1.5),
  },
  sectionContent: {
    fontSize: wp(3.8),
    color: '#b3b3b3',
    lineHeight: hp(2.8),
  },
  agreementSection: {
    backgroundColor: 'rgba(255, 59, 59, 0.1)',
    marginHorizontal: wp(4),
    marginTop: hp(1),
    borderRadius: wp(3),
    padding: wp(5),
    borderWidth: 1,
    borderColor: '#FF3B3B',
  },
  agreementText: {
    fontSize: wp(4),
    color: '#fff',
    textAlign: 'center',
    fontWeight: '500',
    lineHeight: hp(2.8),
  },
  bottomPadding: {
    height: hp(2),
  },
});

export default TermsOfServiceScreen;