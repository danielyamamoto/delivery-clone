import { View, Text } from 'react-native'
import React from 'react'

export default function AllergyText({text}) {
    return (
        <View className="bg-[#00CCBB] p-2 pl-4 pr-4 rounded-2xl m-2">
            <Text className="text-white text-lg font-bold text-center">{text}</Text>
        </View>
    )
}