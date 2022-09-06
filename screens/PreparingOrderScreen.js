import { React, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native'
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';

export default function PreparingOrderScreen() {
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Delivery');
        }, 3000);
    }, [])

    return (
        <SafeAreaView className="flex-1 justify-center items-center">
            <Animatable.Image
                source={ require('../assets/siu-siu-siu.gif') }
                animation='slideInUp'
                iterationCount={1}
                className="h-96 w-96" />
            <Animatable.Text
                animation='slideInUp'
                iterationCount={1}
                className="text-lg my-10 text-black font-bold text-center">
                    Waiting for Restaurant to accept the request
                </Animatable.Text>
            <Progress.Circle size={60} indeterminate={true} color="#00CCBB" />
        </SafeAreaView>
    )
}