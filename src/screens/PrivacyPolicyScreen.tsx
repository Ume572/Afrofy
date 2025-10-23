// src/screens/PrivacyPolicyScreen.js
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

const PrivacyPolicyScreen = ({ navigation }) => {
  const policySections = [
    {
      title: "Information We Collect",
      content: `We collect information to provide better services to all our users. This includes:

• Personal Information: When you create an account, we collect your name, email address, and mobile number.

• Usage Data: We collect information about how you interact with our services, including songs played, playlists created, and features used.

• Device Information: We collect device-specific information such as your device model, operating system, and mobile network.

• Location Data: With your permission, we may collect and process information about your actual location to provide location-based services.`
    },
    {
      title: "How We Use Your Information",
      content: `We use the information we collect for the following purposes:

• Service Provision: To provide, maintain, and improve our music streaming services.

• Personalization: To personalize your experience and recommend music based on your preferences.

• Communication: To send you important updates about our services, security alerts, and support messages.

• Analytics: To understand how our services are used and to develop new features and improvements.

• Security: To detect, prevent, and address technical issues and fraudulent activities.`
    },
    {
      title: "Information Sharing",
      content: `We do not sell your personal information to third parties. We may share your information in the following circumstances:

• With Your Consent: We will share personal information with companies, organizations, or individuals outside of Afrofy when we have your consent.

• For Legal Reasons: We will share personal information if we believe that access, use, preservation, or disclosure of the information is reasonably necessary to meet any applicable law, regulation, legal process, or enforceable governmental request.

• Business Transfers: If Afrofy is involved in a merger, acquisition, or sale of assets, we will continue to ensure the confidentiality of your personal information.`
    },
    {
      title: "Data Security",
      content: `We work hard to protect Afrofy and our users from unauthorized access to or unauthorized alteration, disclosure, or destruction of information we hold. We implement:

• Encryption: All data transmitted between your device and our servers is encrypted using SSL/TLS protocols.

• Access Controls: Strict access controls limit which employees can access user data.

• Regular Audits: We regularly review our information collection, storage, and processing practices.

While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.`
    },
    {
      title: "Your Rights",
      content: `You have the right to:

• Access and correct your personal information
• Delete your personal information
• Object to processing of your personal information
• Data portability
• Withdraw consent at any time

To exercise these rights, please contact us at privacy@afrofy.com.`
    },
    {
      title: "Children's Privacy",
      content: `Our service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us.`
    },
    {
      title: "Changes to This Policy",
      content: `We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "last updated" date. You are advised to review this Privacy Policy periodically for any changes.`
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
      <Text style={styles.headerTitle}>Privacy Policy</Text>
      <View style={styles.headerPlaceholder} />
    </View>
  );

  const renderPolicySection = (section, index) => (
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
          <Text style={styles.heroTitle}>Privacy Policy</Text>
          <Text style={styles.heroSubtitle}>
            Last updated: {new Date().toLocaleDateString()}
          </Text>
          <Text style={styles.heroDescription}>
            At Afrofy, we take your privacy seriously. This policy describes how we collect, use, and protect your personal information.
          </Text>
        </View>

        {policySections.map(renderPolicySection)}
        
        <View style={styles.contactSection}>
          <Text style={styles.contactTitle}>Contact Us</Text>
          <Text style={styles.contactText}>
            If you have any questions about this Privacy Policy, please contact us at:
          </Text>
          <Text style={styles.contactEmail}>privacy@afrofy.com</Text>
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
    fontSize: wp(4.5),
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: hp(1.5),
  },
  sectionContent: {
    fontSize: wp(3.8),
    color: '#b3b3b3',
    lineHeight: hp(2.8),
  },
  contactSection: {
    backgroundColor: '#181818',
    marginHorizontal: wp(4),
    marginTop: hp(1),
    borderRadius: wp(3),
    padding: wp(5),
    alignItems: 'center',
  },
  contactTitle: {
    fontSize: wp(4.5),
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: hp(1),
  },
  contactText: {
    fontSize: wp(3.8),
    color: '#b3b3b3',
    textAlign: 'center',
    marginBottom: hp(1),
    lineHeight: hp(2.8),
  },
  contactEmail: {
    fontSize: wp(4),
    color: '#FF3B3B',
    fontWeight: '600',
  },
  bottomPadding: {
    height: hp(2),
  },
});

export default PrivacyPolicyScreen;