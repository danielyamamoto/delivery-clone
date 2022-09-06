import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native'

export default function CategoryCard({imgUrl, title, classType}) {
    return (
        <TouchableOpacity className={classType}>
            <Image
                source={{ uri: imgUrl }}
                alt={title} 
                className="h-24 w-24 rounded"/>
            <Text className="absolute bottom-1 left-1 text-white font-bold">{title}</Text>
        </TouchableOpacity>
    ) 
}