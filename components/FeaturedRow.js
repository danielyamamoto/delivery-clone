import { React, useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { ArrowNarrowRightIcon } from 'react-native-heroicons/outline';
import RestaurantCard from './RestaurantCard';
import SanityClient from '../sanity';

export default function FeaturedRow({id, title, description, classType}) {
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
        <View className={classType}>
            <View className="flex-row items-center justify-between mt-4">
                <Text className="font-bold text-lg">{title}</Text>
                <View className="bg-[#00CCBB] rounded-full p-1">
                    <ArrowNarrowRightIcon size={22} color='black' />
                </View>
            </View>
            <Text className="text-xs text-gray-500">{description}</Text>
            <ScrollView 
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{paddingHorizontal: 0}}
                className="pt-4 bg-white">
                    {/* Restaurant cards */}
                    {restaurants?.map((restaurant, index) => (
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
                            latitude={restaurant.lat}
                            classType={index < restaurants.length - 1 ? "bg-gray-100 rounded-2xl mr-5" : "bg-gray-100 rounded-2xl"} />
                    ))}
            </ScrollView>
        </View>
    )         
}