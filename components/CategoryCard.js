import { React, useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, Text, Image } from 'react-native';
import SanityClient from '../sanity';

export default function CategoryCard({type, imgUrl, title, classType}) {
    const [restaurants, setRestaurants] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        SanityClient.fetch(`
            *[_type == 'restaurant' && type->name == $type] {
                ...,
                dishes[]->
            }
        `, {type}).then((data) => {
            setRestaurants(data);
        });
    }, [])

    return (
        <TouchableOpacity 
            className={classType}
            onPress={() => { navigation.navigate('Category', {type, restaurants})}}>
            <Image
                source={{ uri: imgUrl }}
                alt={title} 
                className="h-24 w-24 rounded"/>
            <Text className="absolute bottom-1 left-1 text-white font-bold">{title}</Text>
        </TouchableOpacity>
    ) 
}