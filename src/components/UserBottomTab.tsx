// // import React from 'react';
// // import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// // import Icon from 'react-native-vector-icons/MaterialIcons';
// // import Feather from 'react-native-vector-icons/Feather';

// // // 👇 Apni screens import karo
// // import HomeScreen from '../screens/HomeScreen';
// // import SearchScreen from '../screens/SearchScreen';
// // import LibraryScreen from '../screens/LibraryScreen';

// // const Tab = createBottomTabNavigator();

// // const UserBottomTab = () => {
// //   return (
// //     <Tab.Navigator
// //       screenOptions={({ route }) => ({
// //         headerShown: false,
// //         tabBarStyle: {
// //           backgroundColor: '#000', // 👈 same as miniPlayer background
// //           borderTopWidth: 0,
// //           height: 70,
// //           paddingBottom: 10,
// //         },
// //         tabBarActiveTintColor: '#fff',
// //         tabBarInactiveTintColor: '#b3b3b3',
// //         tabBarIcon: ({ color, size }) => {
// //           let iconName: string | undefined;

// //           if (route.name === 'Home') {
// //             iconName = 'home-filled';
// //             return <Icon name={iconName} size={26} color={color} />;
// //           } else if (route.name === 'Search') {
// //             return <Feather name="search" size={24} color={color} />;
// //           } else if (route.name === 'Your Library') {
// //             iconName = 'library-music';
// //             return <Icon name={iconName} size={26} color={color} />;
// //           }
// //         },
// //         tabBarLabelStyle: {
// //           fontSize: 12,
// //           fontWeight: '600',
// //           marginTop: 2,
// //         },
// //       })}
// //     >
// //       <Tab.Screen name="Home" component={HomeScreen} />
// //       <Tab.Screen name="Search" component={SearchScreen} />
// //       <Tab.Screen name="Your Library" component={LibraryScreen} />
// //     </Tab.Navigator>
// //   );
// // };

// // export default UserBottomTab;

// // navigation/UserBottomTab.js - COMPLETE FIXED VERSION
// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import Feather from 'react-native-vector-icons/Feather';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// // 👇 Apni screens import karo
// import HomeScreen from '../screens/HomeScreen';
// import SearchScreen from '../screens/SearchScreen';
// import LibraryScreen from '../screens/LibraryScreen';
// import VideosScreen from '../screens/VideosScreen'; // ✅ Naya Videos Screen

// const Tab = createBottomTabNavigator();

// const UserBottomTab = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         headerShown: false,
//         tabBarStyle: {
//           backgroundColor: '#000',
//           borderTopWidth: 0,
//           height: 70,
//           paddingBottom: 10,
//         },
//         tabBarActiveTintColor: '#fff',
//         tabBarInactiveTintColor: '#b3b3b3',
//         tabBarIcon: ({ color, size, focused }) => {
//           let iconName;
//           let IconComponent = Icon;

//           if (route.name === 'Home') {
//             iconName = 'home';
//             return <IconComponent name={iconName} size={26} color={color} />;
//           } else if (route.name === 'Search') {
//             return <Feather name="search" size={24} color={color} />;
//           } else if (route.name === 'Videos') {
//             IconComponent = Ionicons;
//             iconName = focused ? 'play-circle' : 'play-circle-outline';
//             return <IconComponent name={iconName} size={26} color={color} />;
//           } else if (route.name === 'Library') {
//             iconName = 'library-music';
//             return <IconComponent name={iconName} size={26} color={color} />;
//           }
//         },
//         tabBarLabelStyle: {
//           fontSize: 12,
//           fontWeight: '600',
//           marginTop: 2,
//         },
//       })}
//     >
//       <Tab.Screen 
//         name="Home" 
//         component={HomeScreen}
//         options={{
//           tabBarLabel: 'Home'
//         }}
//       />
//       <Tab.Screen 
//         name="Search" 
//         component={SearchScreen}
//         options={{
//           tabBarLabel: 'Search'
//         }}
//       />
//       <Tab.Screen 
//         name="Videos" 
//         component={VideosScreen}
//         options={{
//           tabBarLabel: 'Videos'
//         }}
//       />
//       <Tab.Screen 
//         name="Library" 
//         component={LibraryScreen}
//         options={{
//           tabBarLabel: 'Library'
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

// export default UserBottomTab;

// navigation/UserBottomTab.js - COMPLETE RESPONSIVE VERSION
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

// 👇 Apni screens import karo
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import LibraryScreen from '../screens/LibraryScreen';
import VideosScreen from '../screens/VideosScreen';

// 👇 Responsive functions import karo
import { wp, hp } from "../assets/Global.Css";

const Tab = createBottomTabNavigator();

const UserBottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#000',
          borderTopWidth: 0,
          height: hp(9), // ✅ Responsive height
          paddingBottom: hp(1.5), // ✅ Responsive padding
          paddingTop: hp(1),
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: -wp(1),
          },
          shadowOpacity: 0.8,
          shadowRadius: wp(2),
          elevation: 10,
        },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#b3b3b3',
        tabBarIcon: ({ color, size, focused }) => {
          let iconName;
          let IconComponent = Icon;

          if (route.name === 'Home') {
            iconName = 'home';
            return (
              <IconComponent 
                name={iconName} 
                size={wp(8)} // ✅ Responsive icon size
                color={color} 
              />
            );
          } else if (route.name === 'Search') {
            return (
              <Feather 
                name="search" 
                size={wp(8)} // ✅ Responsive icon size
                color={color} 
              />
            );
          } else if (route.name === 'Videos') {
            IconComponent = Ionicons;
            iconName = focused ? 'play-circle' : 'play-circle-outline';
            return (
              <IconComponent 
                name={iconName} 
                size={wp(8)} // ✅ Responsive icon size
                color={color} 
              />
            );
          } else if (route.name === 'Library') {
            iconName = 'library-music';
            return (
              <IconComponent 
                name={iconName} 
                size={wp(8)}   // ✅ Responsive icon size
                color={color} 
              />
            );
          }
        },
        tabBarLabelStyle: {
          fontSize: wp(3), // ✅ Responsive font size
          fontWeight: '600',
          marginTop: hp(0.5), // ✅ Responsive margin
        },
        tabBarItemStyle: {
          paddingVertical: hp(0.5), // ✅ Responsive item padding
        },
      })}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home'
        }}
      />
      <Tab.Screen 
        name="Search" 
        component={SearchScreen}
        options={{
          tabBarLabel: 'Search'
        }}
      />
      <Tab.Screen 
        name="Videos" 
        component={VideosScreen}
        options={{
          tabBarLabel: 'Videos'
        }}
      />
      <Tab.Screen 
        name="Library" 
        component={LibraryScreen}
        options={{
          tabBarLabel: 'Library'
        }}
      />
    </Tab.Navigator>
  );
};

export default UserBottomTab;
