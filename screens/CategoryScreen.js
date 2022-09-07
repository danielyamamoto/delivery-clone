import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity } from 'react-native'
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import RestaurantCard from '../components/RestaurantCard';

export default function CategoryScreen() {
    const navigation = useNavigation();
    
    const {
        params: {
            type,
            restaurants,
        }
    } = useRoute();
    

    return (
        <SafeAreaView className="flex-1 items-center justify-start bg-white">
            <View className="w-full p-2 border-b border-[#00CCBB] bg-white shadow-xs">
                <View>
                    <Text className="text-lg font-bold text-center">Category</Text>
                    <Text className="text-center text-gray-400">{type}</Text>
                </View>
                <TouchableOpacity 
                        onPress={navigation.goBack}
                        className="absolute top-2 left-5 p-2 bg-gray-100 rounded-full">
                        <ArrowLeftIcon size={20} color="#00CCBB" />
                </TouchableOpacity>
            </View>

            { /* Restaurants by category */ }
            <View>
                <ScrollView 
                    vertical
                    showsVerticalScrollIndicator={false}
                    className="bg-white">
                        {/* Restaurant cards */}
                        {restaurants?.map(restaurant => (
                            <RestaurantCard
                            key={restaurant._id}                        
                            id={restaurant._id}
                            imgUrl={restaurant.image}
                            title={restaurant.name}
                            rating={restaurant.rating}
                            genre={type}
                            address={restaurant.address}
                            description={restaurant.short_description}
                                dishes={restaurant.dishes}
                                long={restaurant.long}
                                latitude={restaurant.lat}
                                isCategory={true} />
                                ))}
                </ScrollView>
            </View>

        </SafeAreaView>
    )
}