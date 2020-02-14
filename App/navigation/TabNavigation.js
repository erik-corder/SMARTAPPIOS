import { createAppContainer,createBottomTabNavigation } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Icon } from 'react-native-elements';

import appColor from '../src/utils/AppColor';

//screens
import LoginHome from '../screens/LoginHome/LoginHome';
import Home from '../screens/Home/Home';
import Login from '../screens/Login/Login';
import Favorites from '../screens/Favorites/Favorites';
import Catalog from '../screens/Catalog/Catalog';
import Profile from '../screens/Profile/Profile';



const TabNavigator = createMaterialBottomTabNavigator({
    Home: {screen:LoginHome,
        navigationOptions: {
            tabBarLabel: 'Home',
            activeColor: '#ff0000',
            inactiveColor: appColor.red,
            barStyle: {backgroundColor:appColor.yellow},
            tabBarIcon:()=>(
                <View>
                    <Icon name= {'home'} size = {25} style={{color:'#ff0000'}}/>
                </View>
            )
        }
    },
    Favorites: {screen:Favorites,
        navigationOptions: {
            tabBarLabel: 'Favorites',
            activeColor: '#ff0000',
            inactiveColor: '#000000',
            barStyle: {backgroundColor:appColor.yellow},
            tabBarIcon:()=>(
                <View>
                    <Icon name= {'favorite'} size = {25} style={{color:'#ff0000'}}/>
                </View>
            )
        }
    },
    Catalog: {screen:Catalog,
        navigationOptions: {
            tabBarLabel: 'Ctalogaues',
            activeColor: '#ff0000',
            inactiveColor: '#000000',
            barStyle: {backgroundColor:appColor.yellow},
            tabBarIcon:()=>(
                <View>
                    <Icon name= {'book'} size = {25} style={{color:'#ff0000'}}/>
                </View>
            )
        }
    },
    Profile: {screen:Profile,
        navigationOptions: {
            tabBarLabel: 'Profile',
            activeColor: '#ff0000',
            inactiveColor: '#000000',
            barStyle: {backgroundColor:appColor.yellow},
            tabBarIcon:()=>(
                <View>
                    <Icon name= {'verified-user'} size = {25} style={{color:'#ff0000'}}/>
                </View>
            )
        }
    },
});

export default createAppContainer(TabNavigator);