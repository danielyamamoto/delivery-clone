import React, { useLayoutEffect } from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native';
import { ArrowLeftIcon, StarIcon, LocationMarkerIcon, QuestionMarkCircleIcon } from 'react-native-heroicons/solid';
import { ChevronRightIcon } from 'react-native-heroicons/outline';
import { urlFor } from '../sanity';
import DishRow from '../components/DishRow';

export default function RestaurantScreen() {
    const navigation = useNavigation();

    const {
        params: {
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
        }
    } = useRoute();


    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown:false,
        })
    }, [])

    return (
        <ScrollView>
            <View>
                <Image 
                    className="w-full h-56 bg-gray-300 p-4"
                    source={{ uri: urlFor(imgUrl).url(), }}
                />
                <TouchableOpacity 
                    onPress={navigation.goBack}
                    className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full">
                        <ArrowLeftIcon size={20} color="#00CCBB" />
                </TouchableOpacity>
            </View>

            <View className="bg-white">
                <View className="px-4 pt-4">
                    <Text className="text-3xl font-bold">{title}</Text>
                    <View className="flex-row space-x-2 my-1">
                        <StarIcon size={22} color="#00CCBB" opacity={0.5} />
                        <Text className="font-normal">
                            <Text className="font-bold">{rating} </Text> · {genre}
                        </Text>
                    </View>
                    <View className="flex-row items-center space-x-1">
                        <LocationMarkerIcon size={22} color="#00CCBB" opacity={0.5} />
                        <Text className="text-xs text-gray-500">Nearby · {address}</Text>
                    </View>
                    <Text className="text-gray-500 mt-2 pb-4">{description}</Text>
                </View>
                <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
                    <QuestionMarkCircleIcon size={22} color="#00CCBB" opacity={0.5} />
                    <Text className='pl-2 flex-1 text-md font-bold'>Have food allergy?</Text>
                    <ChevronRightIcon color ='#00ccbb'/>
                </TouchableOpacity>
            </View>

            <View>
                <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>
                { /* DishRow */}
                { dishes?.map(dish => (
                    <DishRow 
                        key={dish._id}
                        id={dish._id}
                        name={dish.name}
                        image={dish.image}
                        price={dish.price}
                        description={dish.short_description}
                    />
                ))}
            </View>
        </ScrollView>
    )
}