
// // src/navigation/AuthStack.tsx
// import React from 'react';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';


// import LoginOrRegisterScreen from './src/screens/LoginOrRegisterScreen';
// import EnterOTPScreen from './screens/EnterOTPScreen';



// const Stack = createNativeStackNavigator();

// const AuthStack = () => {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       {/* 🔸 User Auth Flow */}


//       <Stack.Screen name="LoginOrRegister" component={LoginOrRegisterScreen} />
//       <Stack.Screen name="EnterOtpScreen" component={EnterOTPScreen} />


//     </Stack.Navigator>
//   );
// };


import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginOrRegisterScreen from '../screens/LoginOrRegisterScreen';

import EnterOtpScreen from '../screens/EnterOtpScreen';
import SingerSelectionScreen from '../screens/SingerSelectionScreen';
import HomeScreen from '../screens/HomeScreen';
import UserBottomTab from '../components/UserBottomTab';
import SearchScreen from '../screens/SearchScreen';
import LibraryScreen from '../screens/LibraryScreen';
import ArtistProfileScreen from '../screens/ArtistProfileScreen';
import ArtistSongsScreen from '../screens/ArtistSongsScreen';
import PlaylistScreen from '../screens/ArtistPlaylistScreen';
import NowPlayingScreen from '../screens/NowPlayingScreen';
import LikedSongsScreen from '../screens/LikedSongsScreen';
import DownloadsScreen from '../screens/DownloadsScreen';
import PlaylistsScreen from '../screens/PlaylistsScreen';
import ArtistsScreen from '../screens/ArtistsScreen';
import ArtistPlaylistScreen from '../screens/ArtistPlaylistScreen';
import ProfileSettingsScreen from '../screens/ProfileSettingsScreen';
import MoodSongsScreen from '../screens/MoodSongsScreen';
import VideosScreen from '../screens/VideosScreen';
import VideoPlayerScreen from '../screens/VideoPlayerScreen';
import CreatePlaylistScreen from '../screens/CreatePlaylistScreen';
import PlaylistDetailScreen from '../screens/PlaylistDetailScreen';
import AddSongToPlaylistScreen from '../screens/AddSongToPlaylistScreen';



const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LoginOrRegisterScreen" component={LoginOrRegisterScreen} />
      <Stack.Screen name="EnterOtpScreen" component={EnterOtpScreen} />
      <Stack.Screen name="SingerSelectionScreen" component={SingerSelectionScreen} />
      {/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
      <Stack.Screen name="UserBottomTab" component={UserBottomTab} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="LibraryScreen" component={LibraryScreen} />
      <Stack.Screen name="ArtistProfileScreen" component={ArtistProfileScreen} />
      <Stack.Screen name="ArtistSongsScreen" component={ArtistSongsScreen} />
      <Stack.Screen name="ArtistPlaylistScreen" component={ArtistPlaylistScreen} />
      <Stack.Screen name="NowPlayingScreen" component={NowPlayingScreen} />
      <Stack.Screen name="LikedSongsScreen" component={LikedSongsScreen} />
      <Stack.Screen name="DownloadsScreen" component={DownloadsScreen} />
      <Stack.Screen name="PlaylistsScreen" component={PlaylistsScreen} />
      <Stack.Screen name="ArtistsScreen" component={ArtistsScreen} />
      <Stack.Screen name="MoodSongsScreen" component={MoodSongsScreen} />
      <Stack.Screen name="ProfileSettingsScreen" component={ProfileSettingsScreen} />
      <Stack.Screen name="VideosScreen" component={VideosScreen} />
      <Stack.Screen name="VideoPlayerScreen" component={VideoPlayerScreen} />
      <Stack.Screen name="CreatePlaylistScreen" component={CreatePlaylistScreen} />
      <Stack.Screen name="PlaylistDetailScreen" component={PlaylistDetailScreen} />
      <Stack.Screen name="AddSongToPlaylistScreen" component={AddSongToPlaylistScreen} />



    </Stack.Navigator>
  );
};

export default AuthStack;

export const AuthStackLogin = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>

      <Stack.Screen name="UserBottomTab" component={UserBottomTab} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="LibraryScreen" component={LibraryScreen} />
      <Stack.Screen name="LoginOrRegisterScreen" component={LoginOrRegisterScreen} />
      <Stack.Screen name="EnterOtpScreen" component={EnterOtpScreen} />
      <Stack.Screen name="SingerSelectionScreen" component={SingerSelectionScreen} />
      <Stack.Screen name="ArtistProfileScreen" component={ArtistProfileScreen} />
      <Stack.Screen name="ArtistSongsScreen" component={ArtistSongsScreen} />
      <Stack.Screen name="ArtistPlaylistScreen" component={ArtistPlaylistScreen} />
      <Stack.Screen name="NowPlayingScreen" component={NowPlayingScreen} />
      <Stack.Screen name="LikedSongsScreen" component={LikedSongsScreen} />
      <Stack.Screen name="DownloadsScreen" component={DownloadsScreen} />
      <Stack.Screen name="PlaylistsScreen" component={PlaylistsScreen} />
      <Stack.Screen name="ArtistsScreen" component={ArtistsScreen} />
      <Stack.Screen name="MoodSongsScreen" component={MoodSongsScreen} />
      <Stack.Screen name="ProfileSettingsScreen" component={ProfileSettingsScreen} />
      <Stack.Screen name="VideosScreen" component={VideosScreen} />
      <Stack.Screen name="VideoPlayerScreen" component={VideoPlayerScreen} />
      <Stack.Screen name="CreatePlaylistScreen" component={CreatePlaylistScreen} />
      <Stack.Screen name="PlaylistDetailScreen" component={PlaylistDetailScreen} />
      <Stack.Screen name="AddSongToPlaylistScreen" component={AddSongToPlaylistScreen} />



    </Stack.Navigator>
  );
};
