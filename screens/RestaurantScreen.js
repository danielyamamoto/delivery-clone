import { React, useLayoutEffect, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native';
import { ArrowLeftIcon, StarIcon, LocationMarkerIcon, QuestionMarkCircleIcon, ChevronRightIcon } from 'react-native-heroicons/outline';
import { urlFor } from '../sanity';
import { setRestaurant } from '../features/restaurantSlice';
import DishRow from '../components/DishRow';
import BasketIcon from '../components/BasketIcon';

export default function RestaurantScreen() {
    const navigation = useNavigation();
    const dispatch = useDispatch();

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

    useEffect(() => {
        dispatch(
            setRestaurant({
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
            })
        );
    }, [dispatch])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown:false,
        })
    }, [])

    return (
        <>
            <BasketIcon />
            <ScrollView>
                <View>
                    <Image 
                        className="w-full h-56 bg-gray-300 p-4"
                        source={{ uri: urlFor(imgUrl).url(), }}
                    />
                    <TouchableOpacity 
                        onPress={navigation.goBack}
                        className="absolute top-14 left-5 p-2 bg-[#00CCBB] rounded-full">
                            <ArrowLeftIcon size={20} color="black" />
                    </TouchableOpacity>
                </View>

                <View className="bg-white">
                    <View className="px-4 pt-4">
                        <Text className="text-3xl font-bold">{title}</Text>
                        <View className="flex-row items-center space-x-2 my-1">
                            <View className="bg-[#00CCBB] rounded-full p-1">
                                <StarIcon size={18} color="black" />
                            </View>
                            <Text className="font-normal">
                                <Text className="font-bold">{rating} </Text> · {genre}
                            </Text>
                        </View>
                        <View className="flex-row items-center space-x-2">
                            <View className="bg-[#00CCBB] rounded-full p-1">
                                <LocationMarkerIcon size={18} color="black" />
                            </View>
                            <Text className="text-xs text-gray-500 pr-1">Nearby · {address}</Text>
                        </View>
                        <Text className="text-gray-500 mt-2 pb-4">{description}</Text>
                    </View>
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('Allergy')}
                        className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
                        <QuestionMarkCircleIcon size={20} color="black" opacity={0.5} />
                        <Text className='pl-2 flex-1 text-md font-bold'>Have food allergy?</Text>
                        <ChevronRightIcon color ='#00CCBB'strokeWidth={2} />
                    </TouchableOpacity>
                </View>

                <View className="pb-36">
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
        </>
    )
}