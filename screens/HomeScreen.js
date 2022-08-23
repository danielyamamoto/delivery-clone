import { React, useLayoutEffect } from 'react'
import { View,Text, SafeAreaView, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [])

    return (
        <SafeAreaView>
            {/* Header */}
            <View className="flex-row pb-3 items-center mx-4 space-x-2">
                <Image 
                    source={{
                        uri: 'http://links.papareact.com/wru'
                    }} 
                    className="h-20 w-20 bg-gray-300 p-4 rounded-full"
                />
                <View className="pl-3">
                    <Text className="font-bold text-xl">Deliver now</Text>
                    <Text className="text-gray-400">Current location</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}