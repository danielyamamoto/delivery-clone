import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native'
import { StarIcon, LocationMarkerIcon } from 'react-native-heroicons/solid';
import { urlFor } from '../sanity';
import { useNavigation } from '@react-navigation/native';

export default function RestaurantCard({
    id, 
    imgUrl, 
    title, 
    rating, 
    genre, 
    address, 
    description, 
    dishes, 
    long, 
    latitude,
}) {
    const navigation = useNavigation()

    return (
        <TouchableOpacity 
            className="bg-gray-100"
            onPress={() => {
                navigation.navigate('Restaurant', {
                    id, 
                    imgUrl, 
                    title, 
                    rating, 
                    genre, 
                    address, 
                    description, 
                    dishes, 
                    long, 
                    latitude,
                });
            }}>
            <Image 
                source={{ uri: urlFor(imgUrl).url(), }} 
                className="h-36 w-64 rounded" />
            <View className="pb-4">
                <Text className="font-bold text-lg pt-2">{description}</Text>
                <View className="flex-row items-center space-x-2" >
                    <StarIcon size={25} color="#00CCBB" opacity={0.5} />
                    <Text className="font-normal">
                        <Text className="font-bold">{rating} </Text> · {genre}
                    </Text>
                </View> 
                <View className="flex-row items-center space-x-1">
                    <LocationMarkerIcon size={22} color="#00CCBB" opacity={0.5} />
                    <Text>Nearby · {address}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}