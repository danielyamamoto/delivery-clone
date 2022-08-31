import { React, useState, useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text } from 'react-native';
import { selectRestaurant } from '../features/restaurantSlice';
import { selectBasketItems } from '../features/basketSlice';

export default function BasketScreen() {
    const navigation = useNavigation();
    const restaurants = useSelector(selectRestaurant);
    const items = useSelector(selectBasketItems);
    const [groupItemsInBasket, setGroupItemsInBasket] = useState([]);
    const dispatch = useDispatch();

    useMemo(() => {
        const groupItems = items.reduce((results, item) => {
            (results[item.id] = results[item.id] || []).push(item);
        }, {})
        setGroupItemsInBasket(groupItems);
    }, [items]);

    return (
        <View>
            <Text>BasketScreen</Text>
        </View>
    )
}