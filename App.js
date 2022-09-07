import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { store } from './store';
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import BasketScreen from './screens/BasketScreen';
import PreparingOrderScreen from './screens/PreparingOrderScreen';
import DeliveryScreen from './screens/DeliveryScreen';
import ProfileScreen from './screens/ProfileScreen';
import CategoryScreen from './screens/CategoryScreen';
import AllergyScreen from './screens/AllergyScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <TailwindProvider>
          <Stack.Navigator>
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='Restaurant' component={RestaurantScreen} />
            <Stack.Screen name='Basket' component={BasketScreen} 
              options={{ presentation: 'modal', headerShown: false }} />
            <Stack.Screen name='PreparingOrder' component={PreparingOrderScreen} 
              options={{ presentation: 'fullScreenModal', headerShown: false }} />
            <Stack.Screen name='Delivery' component={DeliveryScreen} 
              options={{ presentation: 'fullScreenModal', headerShown: false }} />
            <Stack.Screen name='Profile' component={ProfileScreen} 
              options={{ presentation: 'modal', headerShown: false }} />
            <Stack.Screen name='Category' component={CategoryScreen} 
              options={{ headerShown: false }} />
            <Stack.Screen name='Allergy' component={AllergyScreen} 
              options={{ presentation: 'modal', headerShown: false }} />
          </Stack.Navigator>
        </TailwindProvider>
      </Provider>
    </NavigationContainer>
  );
}
