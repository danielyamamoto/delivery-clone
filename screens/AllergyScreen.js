import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, View, TouchableOpacity, Text, Image, TextInput } from 'react-native';
import { SearchIcon } from 'react-native-heroicons/outline';
import AllergyText from '../components/AllergyText';

export default function AllergyScreen() {
    const navigation = useNavigation();

    const allergies = [
        "Nuez", "Maní", "Trigo", 
        "Camarones", "Aguacate", 
        "Gluten", "Fresas", "Huevo",
        "Leche", "Langosta"
    ]

    return (
        <SafeAreaView className="flex-1 items-center justify-start space-y-5 bg-white">
            <View className="w-full p-5 border-b border-[#00CCBB] bg-white shadow-xs">
                <View>
                    <Text className="text-lg font-bold text-center">Allergies?</Text>
                    <Text className="text-center text-gray-400">Update your info</Text>
                </View>
            </View>

            <Image 
                source={ require('../assets/allergy.png') }
                className="h-48 w-48 p-4 rounded-full" />

            {/* Search */}
            <View className="flex-row items-center space-x-2 mx-4">
                <View className="flex-row flex-1 space-x-2 p-2 bg-gray-100" style={{borderRadius: 20}}>
                    <SearchIcon size={25} color='#C3C3C3' />
                    <TextInput 
                        className="ml-4 mr-4 flex-1" 
                        placeholder='Allergies' 
                        keyboardType='default' 
                    />
                </View>
            </View>

            <View className="flex-1 flex-row flex-wrap items-center justify-center px-5">
                {
                    allergies.sort().map((allergy, index) => (
                        <AllergyText key={index} text={allergy} />
                    ))
                }
            </View>

            <TouchableOpacity 
                onPress={navigation.goBack}
                className="bg-[#00CCBB] py-4 rounded-full"
                style={{ width: '90%' }}>
                    <Text className="text-white text-lg font-bold text-center">Send!</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}