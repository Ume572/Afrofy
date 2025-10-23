// // // // // App.tsx
// // // // import React from 'react';
// // // // import { SafeAreaProvider } from 'react-native-safe-area-context';
// // // // import { NavigationContainer } from '@react-navigation/native';
// // // // import AuthStack from './src/navigation/AuthStack';

// // // // const App = () => {
// // // //   return (
// // // //     <SafeAreaProvider>
// // // //       <NavigationContainer>
// // // //         <AuthStack />
// // // //       </NavigationContainer>
// // // //     </SafeAreaProvider>
// // // //   );
// // // // };

// // // // export default App;

// // import React, { useState,useEffect } from 'react';
// // import { NavigationContainer } from '@react-navigation/native';
// // import { StatusBar } from 'react-native';


// // import AuthStack from './src/navigation/AuthStack';
// // import SplashScreen from './src/screens/SplashScreen';

// // const App = () => {
// //   // useEffect(() => {
// //   //   // TrackPlayer setup
// //   //   TrackPlayer.setupPlayer().then(() => {
// //   //     console.log('Player is ready');
// //   //   });
// //   // }, []);
// //   const [isSplashVisible, setIsSplashVisible] = useState(true);

// //   const handleSplashComplete = () => {
// //     setIsSplashVisible(false);
// //   };

// //   if (isSplashVisible) {
// //     return <SplashScreen onAnimationComplete={handleSplashComplete} />;
// //   }

// //   return (
// //     <NavigationContainer>
// //       <StatusBar 
// //         backgroundColor="#1a1a1a" 
// //         barStyle="light-content" 
// //       />
// //       <AuthStack/>
// //     </NavigationContainer>
// //   );
// // };

// // export default App;



// import React, { useState, useEffect } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { StatusBar } from 'react-native';
// import Sound from 'react-native-sound';
// // ✅ Audio Context Import Karo
// import { AudioProvider } from '../Afrofy/src/contexts/AudioContext';
// import AuthStack, { AuthStackLogin } from './src/navigation/AuthStack';
// import SplashScreen from './src/screens/SplashScreen';
// import { getDataFromAsyncStorage } from './src/Services/CommonFunction';
// import { mobile_siteConfig } from './src/Services/mobile-siteConfig';

// const App = () => {
//   const [isLogin, setIsLogin] = useState(false)

//   const isLoginStatus = async () => {
//     const login = await getDataFromAsyncStorage(mobile_siteConfig.IS_LOGIN)
   
//     setIsLogin(login)
//   }
//   useEffect(() => {
//     // ✅ Sound category set karo for background audio
//      Sound.setCategory('Playback', false);
//     isLoginStatus()
//   }, []);

//   const [isSplashVisible, setIsSplashVisible] = useState(true);

//   const handleSplashComplete = () => {
//     setIsSplashVisible(false);
//   };

//   if (isSplashVisible) {
//     return <SplashScreen onAnimationComplete={handleSplashComplete} />;
//   }


//   return (
//     // ✅ AudioProvider se wrap karo poore app ko
//     <AudioProvider>
//       <NavigationContainer>
//         <StatusBar
//           backgroundColor="#1a1a1a"
//           barStyle="light-content"
//         />
//         {
//           isLogin ? <AuthStackLogin /> : <AuthStack />
//         }

//       </NavigationContainer>
//     </AudioProvider>
//   );
// };

// export default App;

// App.js - UPDATED
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text ,ActivityIndicator} from 'react-native';

import SplashScreen from './src/screens/SplashScreen';
import AuthStack from '../Afrofy/src/navigation/AuthStack';
import { AuthStackLogin }  from '../Afrofy/src/navigation/AuthStack';
import { AudioProvider } from './src/contexts/AudioContext';
import { mobile_siteConfig } from './src/Services/mobile-siteConfig';

const Stack = createNativeStackNavigator();


const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);
  const [showSplash, setShowSplash] = useState(true); 

  useEffect(() => {
    checkAuthentication();
  }, []);

  // const checkAuthentication = async () => {
  //   try {
  //     console.log('🔐 Checking authentication...');
      
  //     // ✅ Safe way to get token - handle null cases
  //     let token = null;
      
  //     try {
  //       // Try different possible token keys
  //       token = await AsyncStorage.getItem('userToken');
  //       if (!token) {
  //         token = await AsyncStorage.getItem('token');
  //       }
  //       if (!token) {
  //         token = await AsyncStorage.getItem('authToken');
  //       }
        
  //       console.log('🔐 Token found:', !!token);
  //     } catch (storageError) {
  //       console.log('⚠️ Storage error, continuing without token:', storageError);
  //       token = null;
  //     }
      
  //     setUserToken(token);
  //   } catch (error) {
  //     console.log('❌ Auth check error:', error);
  //     setUserToken(null);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // ✅ Simple loading component
  // if (isLoading) {
  //   return (
  //     <View style={{ flex: 1, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center' }}>
  //       <Text style={{ color: '#fff' }}>Loading...</Text>
  //     </View>
  //   );
  // }

//   return (
//     <AudioProvider>
//       <NavigationContainer>
//         <Stack.Navigator screenOptions={{ headerShown: false }}>
//           {userToken ? (
//             // ✅ User is logged in - go directly to main app
//             <Stack.Screen name="MainApp" component={AuthStackLogin} />
//           ) : (
//             // ✅ User is not logged in - go to auth flow
//             <Stack.Screen name="Auth" component={AuthStack} />
//           )}
//         </Stack.Navigator>
//       </NavigationContainer>
//     </AudioProvider>
//   );
// };

// export default App;


  const checkAuthentication = async () => {
    try {
      console.log('🔐 Checking authentication status...');
      
      // ✅ Brief splash screen timing
      setTimeout(async () => {
        let token = null;
        
        try {
          // Check all possible token storage keys
          const tokenKeys = ['userToken', 'token', 'authToken'];
          
          for (let key of tokenKeys) {
            const value = await AsyncStorage.getItem(key);
            if (value && value !== 'null' && value !== 'undefined') {
              token = value;
              console.log(`✅ Token found in: ${key}`);
              break;
            }
          }
          
          if (!token) {
            console.log('❌ No valid token found - showing login');
          }
          
        } catch (storageError) {
          console.log('⚠️ Storage check error:', storageError);
          token = null;
        }
        
        setUserToken(token);
        setShowSplash(false); // ✅ Hide splash after check
        setIsLoading(false);
      }, 2000); // ✅ 2 seconds splash screen
      
    } catch (error) {
      console.log('❌ Auth check failed:', error);
      setUserToken(null);
      setShowSplash(false);
      setIsLoading(false);
    }
  };

  // ✅ Show Splash Screen first
  if (showSplash) {
    return <SplashScreen />;
  }

  // ✅ Show loading while checking auth
  if (isLoading) {
    return (
      <View style={{ 
        flex: 1, 
        backgroundColor: '#000', 
        justifyContent: 'center', 
        alignItems: 'center' 
      }}>
        <ActivityIndicator size="large" color="#FF3B3B" />
        <Text style={{ color: '#fff', marginTop: 10 }}>Loading...</Text>
      </View>
    );
  }

  console.log('🎯 App rendering - User token:', !!userToken);

  return (
    <AudioProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {userToken ? (
            // ✅ User logged in - Main app
            <Stack.Screen 
              name="MainApp" 
              component={AuthStackLogin}
            />
          ) : (
            // ✅ User not logged in - Auth flow (Splash already shown)
            <Stack.Screen 
              name="Auth" 
              component={AuthStack}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AudioProvider>
  );
};

export default App;