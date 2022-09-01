import { React, useState, useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { SafeAreaView, View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { selectRestaurant } from '../features/restaurantSlice';
import { removeFromBasket, selectBasketTotal, selectBasketItems } from '../features/basketSlice';
import { XCircleIcon } from 'react-native-heroicons/solid';
import { urlFor } from '../sanity';

export default function BasketScreen() {
    const [groupItemsInBasket, setGroupItemsInBasket] = useState([]);
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const restaurant = useSelector(selectRestaurant);
    const items = useSelector(selectBasketItems);
    const basketTotal = useSelector(selectBasketTotal);

    useMemo(() => {
        const groupItems = items.reduce((results, item) => {
            (results[item.id] = results[item.id] || []).push(item);
            return results;
        }, {})
        setGroupItemsInBasket(groupItems);
    }, [items]);

    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="flex-1 bg-gray-100">
                <View className="p-5 border-b border-[#00CCBB] bg-white shadow-xs">
                    <View>
                        <Text className="text-lg font-bold text-center">Basket</Text>
                        <Text className="text-center text-gray-400">{restaurant.title}</Text>
                    </View>
                    <TouchableOpacity
                        onPress={navigation.goBack}
                        className="rounded-full bg-gray-100 absolute top-3 right-3">
                        <XCircleIcon size={50} color="#00CCBB" />
                    </TouchableOpacity>
                </View>

                <View className="flex-row items-center space-x-4 px-4 py-4 bg-white my-5">
                    <Image 
                        source={{ uri: 'https://links.papareact.com/wru'}}
                        className="h-7 w-7 bg-gray-300 p-4 rounded-full" />
                    <Text className="flex-1">Deliver in 50-75 min</Text>
                    <TouchableOpacity>
                        <Text className="text-[#00CCBB]">Change</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView className="divide-y divide-gray-200">
                    {Object.entries(groupItemsInBasket).map(([key, items]) => (
                        <View 
                            key={key}
                            className="flex-row items-center space-x-3 bg-white py-2 px-5">
                            <Text>{items.length} X </Text>
                            <Image 
                                source={{ uri: urlFor(items[0]?.image).url() }}
                                className="h-12 w-12 rounded-full" />
                            <Text className="flex-1">{items[0]?.name}</Text>
                            <Text className="text-gray-600">$ {items[0]?.price}</Text>
                            <TouchableOpacity>
                                <Text 
                                    className="text-[#00CCBB] text-xs"
                                    onPress={() => dispatch(removeFromBasket({id: key}))}>
                                        REMOVE
                                    </Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>

                <View className="p-5 bg-white mt-5 space-y-4">
                    <View className="flex-row justify-between">
                        <Text className="text-gray-400">Subtotal</Text>
                        <Text className="text-gray-400">$ {basketTotal}</Text>
                    </View>
                    <View className="flex-row justify-between">
                        <Text className="text-gray-400">Delivery Fee</Text>
                        <Text className="text-gray-400">$ 75</Text>
                    </View>
                    <View className="flex-row justify-between">
                        <Text className="text-black">Total</Text>
                        <Text className="font-extrabold">$ {basketTotal + 75}</Text>
                    </View>
                    <TouchableOpacity 
                        className="rounded-lg bg-[#00CCBB] p-4"
                        onPress={() => navigation.navigate('PreparingOrder')}>
                        <Text className="text-center text-white text-lg font-bold">Place Order</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}