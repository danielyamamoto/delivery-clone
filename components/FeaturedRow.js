import React from 'react';
import { View, Text } from 'react-native';
import { ArrowRightIcon } from 'react-native-heroicons/outline';

export default function FeaturedRow({id, title, description}) {
    return (
        <View>
            <View className="flex-row items-center justify-between mt-4 px-4">
                <Text className="font-bold text-lg">{title}</Text>
                <ArrowRightIcon />
            </View>
        </View>
    )         
}