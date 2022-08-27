import React, { useLayoutEffect } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native';

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
            
        </ScrollView>
    )
}