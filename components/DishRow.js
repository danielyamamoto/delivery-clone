import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, TouchableOpacity, Text, Image  } from 'react-native';
import { urlFor } from '../sanity';
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid';
import { addToBasket, removeFromBasket, selectBasketItems, selectBasketItemsWithId } from '../features/basketSlice';

export default function DishRow({id, name, image, description, price}) {
    const [isPressed, setPressed] = useState(false);
    
    const dispatch = useDispatch();
    const items = useSelector((state)=>selectBasketItemsWithId(state, id));

    const addItemToBasket = () => {
        dispatch(addToBasket({id, name, image, description, price}));
    }

    const removeItemFromBasket = () => {
        dispatch(removeFromBasket({id}));
    }

    return (
        <>
        <TouchableOpacity 
            className="bg-white border p-4 border-gray-200"
            onPress={() => setPressed(!isPressed)}>
            <View className="flex-row">
                <View className="flex-1 ">
                    <Text className="text-lg mb-1">{name}</Text>
                    <Text className="text-gray-400">{description}</Text>
                    <Text className="text-gray-400 mt-2">$ {price}</Text>
                </View>
                <View className="">
                    <Image 
                        className="h-20 w-20 bg-gray-300 p-4"
                        source={{ uri: urlFor(image).url() }}
                        style={{ borderWidth: 1, borderColor: 'black' }}
                        />
                </View>
            </View>
        </TouchableOpacity>
        {isPressed && (
            <View className="bg-white px-4">
                <View clasName="flex-row">
                    <TouchableOpacity>
                        <MinusCircleIcon 
                            onPress={removeItemFromBasket}
                            size={40} 
                            color={items.length > 0 ? '#00ccbb' : 'gray'} />
                    </TouchableOpacity>
                    <Text>{items.length}</Text>
                    <TouchableOpacity>
                        <PlusCircleIcon 
                        onPress={addItemToBasket}
                        size={40} 
                        color={items.length > 0 ? '#00ccbb' : 'gray'} />
                    </TouchableOpacity>
                </View>
            </View>
        )}
        </>
    )
}