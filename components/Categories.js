import React from 'react';
import { ScrollView, Text } from 'react-native';
import CategoryCard from '../components/CategoryCard';

export default function Categories() {
    return (
        <ScrollView
            className="mb-4"
            contentContainerStyle={{paddingHorizontal: 15, paddingTop: 10}}
            horizontal
            showsHorizontalScrollIndicator={false}>
            <CategoryCard imgUrl='http://links.papareact.com/gn7' title='testing1' />
            <CategoryCard imgUrl='http://links.papareact.com/gn7' title='testing2' />
            <CategoryCard imgUrl='http://links.papareact.com/gn7' title='testing3' />
            <CategoryCard imgUrl='http://links.papareact.com/gn7' title='testing1' />
            <CategoryCard imgUrl='http://links.papareact.com/gn7' title='testing2' />
            <CategoryCard imgUrl='http://links.papareact.com/gn7' title='testing3' />
            <CategoryCard imgUrl='http://links.papareact.com/gn7' title='testing1' />
            <CategoryCard imgUrl='http://links.papareact.com/gn7' title='testing2' />
            <CategoryCard imgUrl='http://links.papareact.com/gn7' title='testing3' />
            <CategoryCard imgUrl='http://links.papareact.com/gn7' title='testing1' />
            <CategoryCard imgUrl='http://links.papareact.com/gn7' title='testing2' />
            <CategoryCard imgUrl='http://links.papareact.com/gn7' title='testing3' />
        </ScrollView>
    )     
}