import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import RestaurantCard from './RestaurantCard';

export default function FeaturedRow({id, title, description}) {
    return (
        <View className="px-4">
            <View className="flex-row items-center justify-between mt-4">
                <Text className="font-bold text-lg">{title}</Text>
                <ArrowRightIcon color='#00CCBB' />
            </View>
            <Text className="text-xs text-gray-500">{description}</Text>
            <ScrollView 
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{paddingHorizontal: 15}}
                className="pt-4 bg-white">
                    {/* Restaurant cards */}
                    <RestaurantCard 
                        id={1234}
                        imgUrl="http://links.papareact.com/gn7"
                        title="Sushi"
                        rating={5.0}
                        genre="Japanese"
                        address="Casa de Adri"
                        description="La casa de Adri"
                        dishes={[]}
                        long={20}
                        latitude={0} />
                    
                    <RestaurantCard 
                        id={1234}
                        imgUrl="http://links.papareact.com/gn7"
                        title="Sushi"
                        rating={5.0}
                        genre="Japanese"
                        address="Casa de Adri"
                        description="La casa de Adri"
                        dishes={[]}
                        long={20}
                        latitude={0} />

                    <RestaurantCard 
                        id={1234}
                        imgUrl="http://links.papareact.com/gn7"
                        title="Sushi"
                        rating={5.0}
                        genre="Japanese"
                        address="Casa de Adri"
                        description="La casa de Adri"
                        dishes={[]}
                        long={20}
                        latitude={0} />
            </ScrollView>
        </View>
    )         
}