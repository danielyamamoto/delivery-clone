import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, View, Text, Image, TouchableOpacity } from 'react-native';
import { LocationMarkerIcon, MailIcon, PhoneIcon, XCircleIcon } from 'react-native-heroicons/solid';

export default function ProfileScreen() {
    navigation = useNavigation();

    return (
        <SafeAreaView className="flex-1 items-center justify-start space-y-10">
            <View className="w-full p-5 border-b border-[#00CCBB] bg-white shadow-xs">
                <View>
                    <Text className="text-lg font-bold text-center">Profile</Text>
                    <Text className="text-center text-gray-400">Karla Elías</Text>
                </View>
                <TouchableOpacity
                    onPress={navigation.goBack}
                    className="rounded-full bg-gray-100 absolute top-3 right-3">
                    <XCircleIcon size={50} color="#00CCBB" />
                </TouchableOpacity>
            </View>

            <Image 
                source={ require('../assets/doggy.jpg') }
                className="h-48 w-48 p-4 rounded-full" />

            <View className="flex-row w-full px-6 space-x-4">
                <LocationMarkerIcon color="#00CCBB" />
                <Text className="text-black">Coapa, San Bartolo el Chico, 14380 Ciudad de México, CDMX</Text>
            </View>

            <View className="flex-row w-full px-6 space-x-4">
                <PhoneIcon color="#00CCBB" />
                <Text className="text-black">+55 744 131 6531</Text>
            </View>

            <View className="flex-row w-full px-6 space-x-4">
                <MailIcon color="#00CCBB" />
                <Text className="text-black">A01658318@tec.mx</Text>
            </View>

        </SafeAreaView>
    )
}