//This is an example code for Bottom Navigation//
import React from 'react';
import {
  Button,
  Text,
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
//import all the basic component we have used
import Ionicons from 'react-native-vector-icons/Ionicons';
//import Ionicons to show the icon for bottom options

//import React Navigation
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './pages/HomeScreen';
import SettingsScreen from './pages/SettingsScreen';
import DetailsScreen from './pages/DetailsScreen';
import StaffScreen from './pages/StaffScreen';
import CustomerScreen from './pages/CustomerScreen';
import PackageScreen from './pages/PackageScreen';


const HomeStack = createStackNavigator(
  {
    //Defination of Navigaton from home screen
    Home: { screen: HomeScreen },
    Details: { screen: DetailsScreen },
    Staff: { screen: StaffScreen },
    
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#5f7d37',
      },
      headerTintColor: '#FFFFFF',
      title: 'Forest Tour',
      //Header title
    },
  }
);
const Search = createStackNavigator(
  {
    //Defination of Navigaton from setting screen
    Search: { screen: SettingsScreen },
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#5f7d37b',
      },
      headerTintColor: '#FFFFFF',
      title: 'Search',
      //Header title
    },
  }
);
const Staff = createStackNavigator(
  {
    //Defination of Navigaton from setting screen
    Staff:{ screen: StaffScreen }, 
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#5f7d37',
      },
      headerTintColor: '#FFFFFF',
      title: 'Staff',
      //Header title
    },
  }
);
const Details = createStackNavigator(
  {
    //Defination of Navigaton from setting screen
    Staff:{ screen: DetailsScreen }, 
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#5f7d37',
      },
      headerTintColor: '#FFFFFF',
      title: 'DetailsScreen',
      //Header title
    },
  }
);
const Customer = createStackNavigator(
  {
    //Defination of Navigaton from setting screen
    Customer: {screen: CustomerScreen},
    
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#5f7d37',
      },
      headerTintColor: '#FFFFFF',
      title: 'Customer',
      //Header title
    },
  }
);

const Package = createStackNavigator(
  {
    //Defination of Navigaton from setting screen
    Search: { screen: Search },
   
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#5f7d37',
      },
      headerTintColor: '#FFFFFF',
      title: 'Staff',
      //Header title
    },
  }
);




const App = createBottomTabNavigator(
  {
    Home: { screen: HomeStack },
    Staff: { screen: StaffScreen },
    Customer: { screen: CustomerScreen },
    Package: { screen: PackageScreen },
    Booking: { screen: SettingsScreen },
   

  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `home${focused ?
            '' : '-outline'
          }`;
        }else if (routeName === 'Staff') {
          iconName = `people${focused ?
            '' : '-outline'
          }`;
        } 
        else if (routeName === 'Customer') {
          iconName = `person-add${focused ?
            '' : '-outline'
          }`;
        }
        else if (routeName === 'Package') {
          iconName = `folder${focused ?
            '' : '-outline'
          }`;
        }  
        else if (routeName === 'Booking') {
          iconName = `calendar${focused ?
            '' : '-outline'
          }`;
        }
        
        return <IconComponent
                 name={iconName}
                 size={25}
                 color={tintColor}
               />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#42f44b',
      inactiveTintColor: 'gray',
    },
  }
);
export default createAppContainer(App);

// //This is an example code for Bottom Navigation//
// import React from 'react';
// import {
//   Button,
//   Text,
//   View,
//   TouchableOpacity,
//   StyleSheet
// } from 'react-native';
// //import all the basic component we have used
// import Ionicons from 'react-native-vector-icons/Ionicons';
// //import Ionicons to show the icon for bottom options

// //import React Navigation
// import {createAppContainer} from 'react-navigation';
// import {createBottomTabNavigator} from 'react-navigation-tabs';
// import {createStackNavigator} from 'react-navigation-stack';

// import HomeScreen from './pages/HomeScreen';
// import StaffScreen from './pages/StaffScreen';
// import CustomerScreen from './pages/CustomerScreen';
// import PackageScreen from './pages/PackageScreen';
// import SettingsScreen from './pages/SettingsScreen';
// import Showallstaff from './pages/Showallstaff';

// const HomeStack = createStackNavigator(
//   {
//     //Defination of Navigaton from home screen
//     Home: { screen: HomeScreen },
//   },
//   {
//     defaultNavigationOptions: {
//       //Header customization of the perticular Screen
//       headerStyle: {
//         backgroundColor: '#5f7d37',
//       },
//       headerTintColor: '#FFFFFF',
//       title: 'Forest Tour',
//       //Header title
//     },
//   }
// );

// const StaffStack = createStackNavigator(
//   {
//     //Defination of Navigaton from home screen
//     Staff: { screen: StaffScreen },
//   },
//   {
//     defaultNavigationOptions: {
//       //Header customization of the perticular Screen
//       headerStyle: {
//         backgroundColor: '#5f7d37',
//       },
//       headerTintColor: '#FFFFFF',
//       title: 'Forest Tour',
//       //Header title
//     },
//   }
// );
// const StaffStack = createStackNavigator(
//   {
//     //Defination of Navigaton from home screen
//     Staff: { screen: StaffScreen },
//   },
//   {
//     defaultNavigationOptions: {
//       //Header customization of the perticular Screen
//       headerStyle: {
//         backgroundColor: '#5f7d37',
//       },
//       headerTintColor: '#FFFFFF',
//       title: 'Forest Tour',
//       //Header title
//     },
//   }
// );
// const Customer = createStackNavigator(
//   {
//     //Defination of Navigaton from home screen
//     Customer: { screen: CustomerScreen },
//   },
//   {
//     defaultNavigationOptions: {
//       //Header customization of the perticular Screen
//       headerStyle: {
//         backgroundColor: '#5f7d37',
//       },
//       headerTintColor: '#FFFFFF',
//       title: 'Forest Tour',
//       //Header title
//     },
//   }
// );
// const Package = createStackNavigator(
//   {
//     //Defination of Navigaton from home screen
//     Customer: { screen: PackageScreen },
//   },
//   {
//     defaultNavigationOptions: {
//       //Header customization of the perticular Screen
//       headerStyle: {
//         backgroundColor: '#5f7d37',
//       },
//       headerTintColor: '#FFFFFF',
//       title: 'Forest Tour',
//       //Header title
//     },
//   }
// );
// const Setting = createStackNavigator(
//   {
//     //Defination of Navigaton from home screen
//     Setting: { screen: SettingsScreen },
//   },
//   {
//     defaultNavigationOptions: {
//       //Header customization of the perticular Screen
//       headerStyle: {
//         backgroundColor: '#5f7d37',
//       },
//       headerTintColor: '#FFFFFF',
//       title: 'Forest Tour',
//       //Header title
//     },
//   }
// );

// const App = createBottomTabNavigator(
//   {
//     Home: { screen: HomeStack },
//     Staff: { screen: Staff },
//     Customer: { screen: Customer },
//     Package: { screen: Package },
//     Setting: { screen: Setting },

//   },
//   {
//     defaultNavigationOptions: ({ navigation }) => ({
//       tabBarIcon: ({ focused, horizontal, tintColor }) => {
//         const { routeName } = navigation.state;
//         let IconComponent = Ionicons;
//         let iconName;
//         if (routeName === 'Home') {
//           iconName = `home${focused ?
//             '' : '-outline'
//           }`;
//         }else if (routeName === 'Staff') {
//           iconName = `people${focused ?
//             '' : '-outline'
//           }`;
//         } 
//         else if (routeName === 'Customer') {
//           iconName = `person-add${focused ?
//             '' : '-outline'
//           }`;
//         }
//         else if (routeName === 'Package') {
//           iconName = `folder${focused ?
//             '' : '-outline'
//           }`;
//         }  
//         else if (routeName === 'Settings') {
//           iconName = `settings${focused ?
//             '' : '-outline'
//           }`;
//         }
//         return <IconComponent
//                  name={iconName}
//                  size={25}
//                  color={tintColor}
//                />;
//       },
//     }),
//     tabBarOptions: {
//       activeTintColor: '#42f44b',
//       inactiveTintColor: 'gray',
//     },
//   }
// );
// export default createAppContainer(App);
