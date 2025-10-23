// src/screens/HelpSupportScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  TextInput,
  Alert,
  Linking,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import { wp, hp } from '../assets/Global.Css';

const HelpSupportScreen = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');

  const faqData = [
    {
      question: "How do I reset my password?",
      answer: "Go to Settings > Account > Change Password. You'll receive an OTP on your registered mobile number to reset your password."
    },
    {
      question: "Why can't I play some songs?",
      answer: "Some songs may be restricted in your region due to licensing agreements. Try using VPN or check your internet connection."
    },
    {
      question: "How do I create a playlist?",
      answer: "Go to Library > Create Playlist. Give it a name and start adding songs from your favorite artists."
    },
    {
      question: "Is my payment information secure?",
      answer: "Yes, we use industry-standard encryption to protect your payment information. We never store your credit card details on our servers."
    },
    {
      question: "How do I cancel my subscription?",
      answer: "Go to Profile > Subscription > Manage Subscription. You can cancel anytime and continue using premium features until the end of your billing period."
    }
  ];

  const contactMethods = [
    {
      icon: 'mail',
      title: 'Email Support',
      description: 'Get help via email',
      details: 'support@afrofy.com',
      action: () => Linking.openURL('mailto:support@afrofy.com')
    },
    {
      icon: 'phone',
      title: 'Phone Support',
      description: 'Call our support team',
      details: '+1 (555) 123-AFRO',
      action: () => Linking.openURL('tel:+15551233276')
    },
    {
      icon: 'message-circle',
      title: 'Live Chat',
      description: '24/7 instant support',
      details: 'Available 24 hours',
      action: () => Alert.alert('Live Chat', 'Connecting you with our support team...')
    }
  ];

  const categories = [
    'Account Issues',
    'Payment & Billing',
    'Audio Quality',
    'App Problems',
    'Feature Request',
    'Other'
  ];

  const handleSubmit = () => {
    if (!selectedCategory || !message.trim()) {
      Alert.alert('Error', 'Please select a category and enter your message');
      return;
    }

    Alert.alert(
      'Message Sent',
      'Thank you for contacting us! Our support team will get back to you within 24 hours.',
      [{ text: 'OK', onPress: () => navigation.goBack() }]
    );
  };

  const renderHeader = () => (
    <View style={styles.header}>
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Icon name="arrow-back" size={wp(6)} color="#fff" />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Help & Support</Text>
      <View style={styles.headerPlaceholder} />
    </View>
  );

  const renderContactMethods = () => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Contact Us</Text>
      <View style={styles.contactGrid}>
        {contactMethods.map((method, index) => (
          <TouchableOpacity
            key={index}
            style={styles.contactCard}
            onPress={method.action}
          >
            <View style={styles.contactIcon}>
              <Feather name={method.icon} size={wp(6)} color="#FF3B3B" />
            </View>
            <Text style={styles.contactTitle}>{method.title}</Text>
            <Text style={styles.contactDescription}>{method.description}</Text>
            <Text style={styles.contactDetails}>{method.details}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );

  const renderFAQ = () => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Frequently Asked Questions</Text>
      <View style={styles.faqContainer}>
        {faqData.map((item, index) => (
          <View key={index} style={styles.faqItem}>
            <Text style={styles.faqQuestion}>{item.question}</Text>
            <Text style={styles.faqAnswer}>{item.answer}</Text>
            {index < faqData.length - 1 && <View style={styles.faqDivider} />}
          </View>
        ))}
      </View>
    </View>
  );

  const renderSupportForm = () => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Send us a Message</Text>
      <View style={styles.formCard}>
        <Text style={styles.formLabel}>Category</Text>
        <View style={styles.categoryGrid}>
          {categories.map((category, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.categoryButton,
                selectedCategory === category && styles.categoryButtonSelected
              ]}
              onPress={() => setSelectedCategory(category)}
            >
              <Text style={[
                styles.categoryText,
                selectedCategory === category && styles.categoryTextSelected
              ]}>
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.formLabel}>Your Email</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter your email"
          placeholderTextColor="#666"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.formLabel}>Message</Text>
        <TextInput
          style={[styles.textInput, styles.textArea]}
          placeholder="Describe your issue in detail..."
          placeholderTextColor="#666"
          value={message}
          onChangeText={setMessage}
          multiline
          numberOfLines={6}
          textAlignVertical="top"
        />

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Send Message</Text>
        </TouchableOpacity>
      </View>
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
        {renderContactMethods()}
        {renderSupportForm()}
        {renderFAQ()}
        
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
  section: {
    marginBottom: hp(3),
  },
  sectionTitle: {
    fontSize: wp(4.5),
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: hp(2),
    paddingHorizontal: wp(4),
  },
  contactGrid: {
    flexDirection: 'row',
    paddingHorizontal: wp(4),
    gap: wp(3),
  },
  contactCard: {
    flex: 1,
    backgroundColor: '#181818',
    borderRadius: wp(3),
    padding: wp(4),
    alignItems: 'center',
  },
  contactIcon: {
    width: wp(12),
    height: wp(12),
    borderRadius: wp(6),
    backgroundColor: 'rgba(255, 59, 59, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp(1),
  },
  contactTitle: {
    fontSize: wp(3.8),
    fontWeight: '600',
    color: '#fff',
    marginBottom: hp(0.5),
    textAlign: 'center',
  },
  contactDescription: {
    fontSize: wp(3.2),
    color: '#b3b3b3',
    marginBottom: hp(0.5),
    textAlign: 'center',
  },
  contactDetails: {
    fontSize: wp(3.2),
    color: '#FF3B3B',
    fontWeight: '500',
    textAlign: 'center',
  },
  formCard: {
    backgroundColor: '#181818',
    marginHorizontal: wp(4),
    borderRadius: wp(3),
    padding: wp(5),
  },
  formLabel: {
    fontSize: wp(4),
    fontWeight: '600',
    color: '#fff',
    marginBottom: hp(1),
  },
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: wp(2),
    marginBottom: hp(2),
  },
  categoryButton: {
    paddingHorizontal: wp(3),
    paddingVertical: hp(1),
    backgroundColor: '#282828',
    borderRadius: wp(2),
    borderWidth: 1,
    borderColor: '#333',
  },
  categoryButtonSelected: {
    backgroundColor: '#FF3B3B',
    borderColor: '#FF3B3B',
  },
  categoryText: {
    fontSize: wp(3.2),
    color: '#b3b3b3',
    fontWeight: '500',
  },
  categoryTextSelected: {
    color: '#fff',
  },
  textInput: {
    backgroundColor: '#282828',
    borderRadius: wp(2),
    padding: wp(4),
    color: '#fff',
    fontSize: wp(4),
    borderWidth: 1,
    borderColor: '#333',
    marginBottom: hp(2),
  },
  textArea: {
    height: hp(15),
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#FF3B3B',
    paddingVertical: hp(1.75),
    borderRadius: wp(2),
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: wp(4),
    fontWeight: '600',
  },
  faqContainer: {
    backgroundColor: '#181818',
    marginHorizontal: wp(4),
    borderRadius: wp(3),
    padding: wp(5),
  },
  faqItem: {
    marginBottom: hp(2),
  },
  faqQuestion: {
    fontSize: wp(4),
    fontWeight: '600',
    color: '#fff',
    marginBottom: hp(1),
  },
  faqAnswer: {
    fontSize: wp(3.8),
    color: '#b3b3b3',
    lineHeight: hp(2.5),
  },
  faqDivider: {
    height: 1,
    backgroundColor: '#282828',
    marginVertical: hp(2),
  },
  bottomPadding: {
    height: hp(2),
  },
});

export default HelpSupportScreen;