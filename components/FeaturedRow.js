import { React, useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import RestaurantCard from './RestaurantCard';
import SanityClient from '../sanity';

export default function FeaturedRow({id, title, description}) {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        SanityClient.fetch(`
            *[_type == 'featured' && _id == $id] {
                ...,
                restaurants[]->{
                ...,
                dishes[]->,
                    type->{
                    name
                }
            },
        }[0]
        `, {id}).then((data) => {
            setRestaurants(data?.restaurants);
        });
    }, [])

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
                contentContainerStyle={{paddingHorizontal: 0}}
                className="pt-4 bg-white">
                    {/* Restaurant cards */}
                    {restaurants?.map((restaurant) => (
                        <RestaurantCard 
                            key={restaurant._id}                        
                            id={restaurant._id}
                            imgUrl={restaurant.image}
                            title={restaurant.name}
                            rating={restaurant.rating}
                            genre={restaurant.type?.name}
                            address={restaurant.address}
                            description={restaurant.short_description}
                            dishes={restaurant.dishes}
                            long={restaurant.long}
                            latitude={restaurant.lat} />
                    ))}
            </ScrollView>
        </View>
    )         
}