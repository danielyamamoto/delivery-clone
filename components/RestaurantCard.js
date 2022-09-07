import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native'
import { StarIcon, LocationMarkerIcon } from 'react-native-heroicons/outline';
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
    classType=null,
}) {
    const navigation = useNavigation()

    return (
        <TouchableOpacity 
            className="bg-white p-0"
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
            <View className={classType}>
                <Image 
                    source={{ uri: urlFor(imgUrl).url() }} 
                    className={isCategory ? "h-36 w-full overflow-hidden bg-white" : "h-36 w-64 rounded-t-lg bg-white"} />
                <View className={isCategory ? "w-full px-1 pb-4 rounded-lg" : "w-64 px-1 pb-4"}>
                    <Text className="font-bold text-lg pt-2 text-center">{description}</Text>
                    <View className="flex-row items-center space-x-2 pb-2 ml-1" >
                        <View className="bg-[#00CCBB] rounded-full p-1">
                            <StarIcon size={16} color="black" />
                        </View>
                        <Text className="font-normal">
                            <Text className="font-bold">{rating} </Text> · {genre}
                        </Text>
                    </View> 
                    <View className="flex-row items-start space-x-2 ml-1">
                        <View className="bg-[#00CCBB] rounded-full p-1">
                            <LocationMarkerIcon size={16} color="black" />
                        </View>
                        <Text className="font-normal pr-10">
                            <Text className="font-bold">Nearby</Text>· {address}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}