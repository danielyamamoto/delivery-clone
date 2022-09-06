import { React, useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import CategoryCard from '../components/CategoryCard';
import SanityClient from '../sanity'; 
import { urlFor } from '../sanity';

export default function Categories() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        SanityClient.fetch(`
            *[_type == 'categories']
        `).then((data) => {
            setCategories(data);
        });
    }, [])

    return (
        <ScrollView
            className="mb-4"
            contentContainerStyle={{paddingHorizontal: 15, paddingTop: 10}}
            horizontal
            showsHorizontalScrollIndicator={false}>
            { categories?.map((category, index) => (
                <CategoryCard
                    key={category._id}
                    imgUrl={urlFor(category.image).width(200).url()} 
                    title={category.name} 
                    classType={index < categories.length - 1 ? "relative mr-3" : "relative"} />
            ))}    
        </ScrollView>
    )     
}