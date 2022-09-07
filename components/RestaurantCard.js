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
    isCategory=false,
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
                className={isCategory ? "h-36 w-full overflow-hidden bg-white" : "h-36 w-64 rounded bg-white"} />
            <View className={isCategory ? "w-full px-1 pb-4 bg-white" : "w-64 px-1 pb-4 bg-white"}>
                <Text className="font-bold text-lg pt-2 text-center">{description}</Text>
                <View className="flex-row items-center space-x-2 pb-1" >
                    <StarIcon size={25} color="#00CCBB" opacity={0.5} />
                    <Text className="font-normal">
                        <Text className="font-bold">{rating} </Text> · {genre}
                    </Text>
                </View> 
                <View className="flex-row space-x-2">
                    <LocationMarkerIcon size={22} color="#00CCBB" opacity={0.5} />
                    <Text className="font-normal pr-10">
                        <Text className="font-bold">Nearby</Text>· {address}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}