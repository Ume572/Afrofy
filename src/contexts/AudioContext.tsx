


// // contexts/AudioContext.js - UPDATED WITH TRACKING
// import React, { createContext, useContext, useState, useRef, useEffect } from 'react';
// import Sound from 'react-native-sound';
// import { trackSongPlay } from '../Services/mobile-api';

// const AudioContext = createContext();

// export const AudioProvider = ({ children }) => {
//   const [currentSong, setCurrentSong] = useState(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [currentTime, setCurrentTime] = useState(0);
//   const [duration, setDuration] = useState(0);
//   const soundRef = useRef(null);

//   // Tracking state
//   const [trackingData, setTrackingData] = useState({
//     startTime: null,
//     totalPlayed: 0,
//     isTracking: false
//   });

//   // ✅ Track song play API call
//   const sendPlayTracking = async (songId, playDuration, completed = false) => {
//     try {
//       const response = await trackSongPlay(songId, playDuration, completed);
//       console.log('🎯 Play tracking response:', response);
//       return response;
//     } catch (error) {
//       console.error('❌ Play tracking error:', error);
//     }
//   };

//   const playSong = async (songData) => {
//     try {
//       // Stop current song if playing
//       if (soundRef.current) {
//         // Pehle existing song ki tracking complete karo
//         if (currentSong && trackingData.isTracking) {
//           const playedTime = Math.floor((Date.now() - trackingData.startTime) / 1000);
//           const newTotalPlayed = trackingData.totalPlayed + playedTime;
//           sendPlayTracking(currentSong.id, newTotalPlayed, false);
//         }
        
//         soundRef.current.stop();
//         soundRef.current.release();
//         soundRef.current = null;
//       }

//       setCurrentSong(songData);
//       setIsPlaying(false);
      
//       // Create new sound instance
//       soundRef.current = new Sound(songData.audioUrl, null, (error) => {
//         if (error) {
//           console.log('Failed to load the sound', error);
//           return;
//         }
        
//         const songDuration = soundRef.current.getDuration();
//         setDuration(songDuration);
        
//         // Naye song ki tracking start karo
//         setTrackingData({
//           startTime: Date.now(),
//           totalPlayed: 0,
//           isTracking: true
//         });
//         sendPlayTracking(songData.id, 0, false);
        
//         // Auto play after loading
//         soundRef.current.play((success) => {
//           if (success) {
//             console.log('Successfully finished playing');
//             setIsPlaying(false);
//             setCurrentTime(0);
            
//             // Song complete hone par tracking
//             if (currentSong) {
//               const finalPlayedTime = trackingData.totalPlayed + 
//                 Math.floor((Date.now() - trackingData.startTime) / 1000);
//               sendPlayTracking(currentSong.id, finalPlayedTime, true);
              
//               setTrackingData({
//                 startTime: null,
//                 totalPlayed: 0,
//                 isTracking: false
//               });
//             }
//           } else {
//             console.log('Playback failed');
//             setIsPlaying(false);
//           }
//         });
        
//         setIsPlaying(true);
//       });
      
//     } catch (error) {
//       console.log('Error playing song:', error);
//     }
//   };

//   const togglePlayPause = () => {
//     if (!soundRef.current) return;

//     if (isPlaying) {
//       // Pause karo
//       soundRef.current.pause();
//       setIsPlaying(false);
      
//       // Tracking pause karo
//       if (trackingData.isTracking && trackingData.startTime) {
//         const playedTime = Math.floor((Date.now() - trackingData.startTime) / 1000);
//         const newTotalPlayed = trackingData.totalPlayed + playedTime;
        
//         setTrackingData(prev => ({
//           ...prev,
//           totalPlayed: newTotalPlayed,
//           isTracking: false
//         }));
        
//         if (newTotalPlayed > 0) {
//           sendPlayTracking(currentSong.id, newTotalPlayed, false);
//         }
//       }
//     } else {
//       // Play karo
//       soundRef.current.play((success) => {
//         if (success) {
//           setIsPlaying(false);
//           setCurrentTime(0);
          
//           // Song complete hone par tracking
//           if (currentSong) {
//             const finalPlayedTime = trackingData.totalPlayed + 
//               Math.floor((Date.now() - trackingData.startTime) / 1000);
//             sendPlayTracking(currentSong.id, finalPlayedTime, true);
            
//             setTrackingData({
//               startTime: null,
//               totalPlayed: 0,
//               isTracking: false
//             });
//           }
//         } else {
//           console.log('Playback failed');
//           setIsPlaying(false);
//         }
//       });
//       setIsPlaying(true);
      
//       // Tracking resume karo
//       setTrackingData(prev => ({
//         ...prev,
//         startTime: Date.now(),
//         isTracking: true
//       }));
//     }
//   };

//   const stopSong = () => {
//     if (soundRef.current) {
//       // Stop par tracking complete karo
//       if (currentSong && trackingData.isTracking) {
//         const playedTime = Math.floor((Date.now() - trackingData.startTime) / 1000);
//         const newTotalPlayed = trackingData.totalPlayed + playedTime;
//         sendPlayTracking(currentSong.id, newTotalPlayed, false);
//       }
      
//       soundRef.current.stop();
//       soundRef.current.release();
//       soundRef.current = null;
//     }
//     setIsPlaying(false);
//     setCurrentTime(0);
//     setCurrentSong(null);
    
//     // Tracking reset karo
//     setTrackingData({
//       startTime: null,
//       totalPlayed: 0,
//       isTracking: false
//     });
//   };

//   const seekTo = (seconds) => {
//     if (soundRef.current && typeof soundRef.current.setCurrentTime === 'function') {
//       soundRef.current.setCurrentTime(seconds);
//       setCurrentTime(seconds);
//     }
//   };

//   // Progress tracking
//   useEffect(() => {
//     let interval;
//     if (isPlaying && soundRef.current) {
//       interval = setInterval(() => {
//         if (soundRef.current && typeof soundRef.current.getCurrentTime === 'function') {
//           soundRef.current.getCurrentTime((seconds) => {
//             setCurrentTime(seconds);
            
//             // Check if song ended
//             if (seconds >= duration - 0.5) {
//               handleSongEnd();
//             }
//           });
//         }
//       }, 1000);
//     }
//     return () => clearInterval(interval);
//   }, [isPlaying, duration]);

//   const handleSongEnd = () => {
//     // Song end par tracking complete karo
//     if (currentSong && trackingData.isTracking) {
//       const finalPlayedTime = trackingData.totalPlayed + 
//         Math.floor((Date.now() - trackingData.startTime) / 1000);
//       sendPlayTracking(currentSong.id, finalPlayedTime, true);
      
//       setTrackingData({
//         startTime: null,
//         totalPlayed: 0,
//         isTracking: false
//       });
//     }
    
//     setIsPlaying(false);
//     setCurrentTime(0);
//     if (soundRef.current) {
//       soundRef.current.setCurrentTime(0);
//     }
//   };

//   return (
//     <AudioContext.Provider value={{
//       currentSong,
//       isPlaying,
//       currentTime,
//       duration,
//       playSong,
//       togglePlayPause,
//       stopSong,
//       seekTo,
//       trackingData // Optional: agar debug mein dikhana ho
//     }}>
//       {children}
//     </AudioContext.Provider>
//   );
// };

// export const useAudio = () => {
//   const context = useContext(AudioContext);
//   if (!context) {
//     throw new Error('useAudio must be used within an AudioProvider');
//   }
//   return context;
// };

// contexts/AudioContext.js - COMPLETE FIXED VERSION
import React, { createContext, useContext, useState, useRef, useEffect } from 'react';
import { AppState } from 'react-native';
import Sound from 'react-native-sound';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { trackSongPlay } from '../Services/mobile-api';

const AudioContext = createContext();

// Storage keys
const STORAGE_KEYS = {
  CURRENT_SONG: 'current_song',
  IS_PLAYING: 'is_playing',
  CURRENT_TIME: 'current_time'
};

export const AudioProvider = ({ children }) => {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const soundRef = useRef(null);
  const [appState, setAppState] = useState(AppState.currentState);

  // ✅ Load saved state when app starts
  useEffect(() => {
    loadPersistedState();
    
    const subscription = AppState.addEventListener('change', handleAppStateChange);
    return () => {
      subscription.remove();
      // Cleanup sound
      if (soundRef.current) {
        soundRef.current.release();
      }
    };
  }, []);

  const loadPersistedState = async () => {
    try {
      const [savedSong, savedIsPlaying] = await Promise.all([
        AsyncStorage.getItem(STORAGE_KEYS.CURRENT_SONG),
        AsyncStorage.getItem(STORAGE_KEYS.IS_PLAYING),
      ]);

      if (savedSong) {
        const songData = JSON.parse(savedSong);
        setCurrentSong(songData);
        console.log('🎵 Loaded persisted song:', songData.title);
        
        // Auto-reload song if it was playing
        if (savedIsPlaying === 'true') {
          console.log('🔄 Auto-reloading song that was playing...');
          // You can auto-play here if you want, but better to let user decide
          setIsPlaying(false); // Start in paused state
        }
      }
    } catch (error) {
      console.log('❌ Error loading persisted state:', error);
    }
  };

  const savePersistedState = async () => {
    try {
      await Promise.all([
        AsyncStorage.setItem(STORAGE_KEYS.CURRENT_SONG, JSON.stringify(currentSong)),
        AsyncStorage.setItem(STORAGE_KEYS.IS_PLAYING, isPlaying.toString()),
        AsyncStorage.setItem(STORAGE_KEYS.CURRENT_TIME, currentTime.toString()),
      ]);
    } catch (error) {
      console.log('❌ Error saving persisted state:', error);
    }
  };

  const handleAppStateChange = (nextAppState) => {
    console.log('🔄 App state:', appState, '→', nextAppState);
    
    if (nextAppState === 'background') {
      // App background mein ja raha hai - state save karo
      savePersistedState();
    } else if (nextAppState === 'active' && appState === 'background') {
      // App wapas foreground mein aaya hai - state load karo
      loadPersistedState();
    }
    
    setAppState(nextAppState);
  };

  // ✅ Save state whenever it changes
  useEffect(() => {
    if (currentSong) {
      savePersistedState();
    }
  }, [currentSong, isPlaying, currentTime]);

  const playSong = async (songData) => {
    try {
      // Stop current song if playing
      if (soundRef.current) {
        soundRef.current.stop();
        soundRef.current.release();
        soundRef.current = null;
      }

      setCurrentSong(songData);
      setIsPlaying(false);
      
      // Create new sound instance
      soundRef.current = new Sound(songData.audioUrl, null, (error) => {
        if (error) {
          console.log('❌ Failed to load sound:', error);
          return;
        }
        
        const songDuration = soundRef.current.getDuration();
        setDuration(songDuration);
        
        // Auto play after loading
        soundRef.current.play((success) => {
          if (success) {
            console.log('✅ Song finished playing');
            setIsPlaying(false);
            setCurrentTime(0);
          } else {
            console.log('❌ Playback failed');
            setIsPlaying(false);
          }
        });
        
        setIsPlaying(true);
      });
      
    } catch (error) {
      console.log('❌ Error playing song:', error);
    }
  };

  const togglePlayPause = () => {
    if (!soundRef.current) return;

    if (isPlaying) {
      soundRef.current.pause();
      setIsPlaying(false);
    } else {
      soundRef.current.play((success) => {
        if (success) {
          setIsPlaying(false);
          setCurrentTime(0);
        } else {
          console.log('❌ Playback failed');
          setIsPlaying(false);
        }
      });
      setIsPlaying(true);
    }
  };

  const stopSong = () => {
    if (soundRef.current) {
      soundRef.current.stop();
      soundRef.current.release();
      soundRef.current = null;
    }
    setIsPlaying(false);
    setCurrentTime(0);
    setCurrentSong(null);
    
    // Clear persisted state
    AsyncStorage.multiRemove([
      STORAGE_KEYS.CURRENT_SONG,
      STORAGE_KEYS.IS_PLAYING,
      STORAGE_KEYS.CURRENT_TIME
    ]);
  };

  const seekTo = (seconds) => {
    if (soundRef.current && soundRef.current.setCurrentTime) {
      soundRef.current.setCurrentTime(seconds);
      setCurrentTime(seconds);
    }
  };

  // Progress tracking
  useEffect(() => {
    let interval;
    if (isPlaying && soundRef.current) {
      interval = setInterval(() => {
        if (soundRef.current && soundRef.current.getCurrentTime) {
          soundRef.current.getCurrentTime((seconds) => {
            setCurrentTime(seconds);
          });
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <AudioContext.Provider value={{
      currentSong,
      isPlaying,
      currentTime,
      duration,
      playSong,
      togglePlayPause,
      stopSong,
      seekTo
    }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};