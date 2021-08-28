
import React from 'react';
import { TouchableOpacity,View,SafeAreaView,ScrollView,Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {createSwitchNavigator, createAppContainer, ThemeColors } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator,DrawerItems} from 'react-navigation-drawer';
import {createBottomTabNavigator} from 'react-navigation-tabs'

import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import WelcomeScreen from '../screens/Welcome';
import SignupScreen from '../screens/Signup';
import Product from '../screens/Product';
// import Browse from '../screens/Browse';
import HomeScreen from '../screens/HomeScreen'
import Settings from '../screens/Settings';
import ShoppingCart from '../screens/ShoppingCart';
import ShoppingCartIcon from '../screens/ShoppingCartIcon';
import ProductType from '../screens/ProductType';
import {theme} from '../constants';

const AuthStackNavigator = createStackNavigator({
    Welcome:{screen: WelcomeScreen},
    SignUp:{screen: SignupScreen},
})

// const AppTabNavigator = createBottomTabNavigator({
//   HomeScreen:{
//     screen: HomeScreen
//   },
//   Settings: {
//     screen:Settings
//   }
// })

const customDrawerComponent = (props) => (
    <SafeAreaView style={{flex:1,paddingTop:20}}>
        <View style={{height:150,backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
            <Image source={require('../../assets/icon.png')} style={{height:120,width:120,borderRadius:60}} />
        </View>
        <ScrollView>
            <DrawerItems {...props} />
        </ScrollView>
    </SafeAreaView>
)

const SettingNavigator = createStackNavigator(
  {
    Settings:Settings
  },
  {
    defaultNavigationOptions:({navigation}) =>{
      return{
        headerTitle: 'Settings',
        headerTintColor: theme.colors.accent,
      headerStyle: {
        backgroundColor: theme.colors.blackC
      },
      headerLeft: (
        <TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
          <View style={{paddingHorizontal:10}}>
            <Icon name="md-menu" size={24} color={theme.colors.accent}/>
          </View>
        </TouchableOpacity>
      ),
      headerRight:(
        <ShoppingCartIcon />
      ),
      
      }
    }
  }
)

const AppStackNavigator = createStackNavigator({
  Home:{
    screen:HomeScreen,
    
    navigationOptions:({navigation}) => ({
      title: 'Snack Mars',
      headerStyle: {
        backgroundColor: theme.colors.blackC,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerLeft: (
        <TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
          <View style={{paddingHorizontal:10}}>
            <Icon name="md-menu" size={24} color={theme.colors.accent}/>
          </View>
        </TouchableOpacity>
      ),
      headerRight:(
        <ShoppingCartIcon />
      )
    })
  },
  ProductType:{
    screen:ProductType,

    navigationOptions:({navigation}) => ({
      title: 'Categories',
      headerStyle: {
        backgroundColor: theme.colors.blackC,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerRight:(
        <ShoppingCartIcon />
      )
    })
  },
  Product:{
    screen: Product,

    navigationOptions:({navigation}) => ({
      title: 'Product',
      headerStyle: {
        backgroundColor: theme.colors.blackC,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerRight:(
        <ShoppingCartIcon />
      )
    })
  },
  ShoppingCart:{
    screen: ShoppingCart,

    navigationOptions:({navigation}) => ({
      title: 'Cart',
      headerStyle: {
        backgroundColor: theme.colors.blackC,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    })
  },
  
})

const AppDrawerNavigator = createDrawerNavigator({
    Home:AppStackNavigator,
    Settings:SettingNavigator,
},
{
    contentComponent:customDrawerComponent,
    contentOptions:{
        activeTintColor:theme.colors.accent,
        activeBackgroundColor:theme.colors.primary,
    }
})

const first = createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  Auth: AuthStackNavigator,
  App:AppDrawerNavigator,
})

const Navigator = createAppContainer(first)

export default Navigator;
