// // // // App.tsx
// // // import React from 'react';
// // // import { SafeAreaProvider } from 'react-native-safe-area-context';
// // // import { NavigationContainer } from '@react-navigation/native';
// // // import AuthStack from './src/navigation/AuthStack';

// // // const App = () => {
// // //   return (
// // //     <SafeAreaProvider>
// // //       <NavigationContainer>
// // //         <AuthStack />
// // //       </NavigationContainer>
// // //     </SafeAreaProvider>
// // //   );
// // // };

// // // export default App;

// import React, { useState,useEffect } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { StatusBar } from 'react-native';


// import AuthStack from './src/navigation/AuthStack';
// import SplashScreen from './src/screens/SplashScreen';

// const App = () => {
//   // useEffect(() => {
//   //   // TrackPlayer setup
//   //   TrackPlayer.setupPlayer().then(() => {
//   //     console.log('Player is ready');
//   //   });
//   // }, []);
//   const [isSplashVisible, setIsSplashVisible] = useState(true);

//   const handleSplashComplete = () => {
//     setIsSplashVisible(false);
//   };

//   if (isSplashVisible) {
//     return <SplashScreen onAnimationComplete={handleSplashComplete} />;
//   }

//   return (
//     <NavigationContainer>
//       <StatusBar 
//         backgroundColor="#1a1a1a" 
//         barStyle="light-content" 
//       />
//       <AuthStack/>
//     </NavigationContainer>
//   );
// };

// export default App;



import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import Sound from 'react-native-sound';
// ✅ Audio Context Import Karo
import { AudioProvider } from '../Afrofy/src/contexts/AudioContext';
import AuthStack, { AuthStackLogin } from './src/navigation/AuthStack';
import SplashScreen from './src/screens/SplashScreen';
import { getDataFromAsyncStorage } from './src/Services/CommonFunction';
import { mobile_siteConfig } from './src/Services/mobile-siteConfig';

const App = () => {
  const [isLogin, setIsLogin] = useState(false)

  const isLoginStatus = async () => {
    const login = await getDataFromAsyncStorage(mobile_siteConfig.IS_LOGIN)
   
    setIsLogin(login)
  }
  useEffect(() => {
    // ✅ Sound category set karo for background audio
     Sound.setCategory('Playback', false);
    isLoginStatus()
  }, []);

  const [isSplashVisible, setIsSplashVisible] = useState(true);

  const handleSplashComplete = () => {
    setIsSplashVisible(false);
  };

  if (isSplashVisible) {
    return <SplashScreen onAnimationComplete={handleSplashComplete} />;
  }


  return (
    // ✅ AudioProvider se wrap karo poore app ko
    <AudioProvider>
      <NavigationContainer>
        <StatusBar
          backgroundColor="#1a1a1a"
          barStyle="light-content"
        />
        {
          isLogin ? <AuthStackLogin /> : <AuthStack />
        }

      </NavigationContainer>
    </AudioProvider>
  );
};

export default App;

