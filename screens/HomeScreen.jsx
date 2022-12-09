import {
	View,
	Text,
	SafeAreaView,
	Image,
	TouchableOpacity,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import cedricImg from '../assets/cedric.png';

const HomeScreen = () => {
	const navigation = useNavigation();

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	}, []);
	return (
		<SafeAreaView className='flex-1  bg-slate-100 relative pt-8'>
			<View className=' flex-row items-center px-6 pt-12 gap-2'>
				<View className='bg-slate-600 w-16 h-16 rounded-full items-center justify-center'>
					<Text className='text-red-400 font-bold text-3xl'>Go</Text>
				</View>
				<Text className='text-4xl font-extrabold'>Travel</Text>
			</View>
			<View className='px-6 py-4 space-y-3'>
				<Text className='text-4xl font-medium text-blue-600'>
					Enjoy the trip with
				</Text>
				<Text className='text-3xl font-extrabold text-red-400'>
					Google moment
				</Text>
				<Text className='font-medium text-sm'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
					delectus unde debitis eligendi aspernatur consequuntur dolores.
				</Text>
			</View>
			<View className='w-80 h-80 bg-red-300 rounded-full absolute bottom-0 -right-32 -z-40'></View>
			<View className='w-80 h-80 bg-blue-200 rounded-full absolute bottom-32 -left-32 -z-40'></View>
			<View className='relative flex-1 items-center justify-center mt-8'>
				<Animatable.Image
					animation='fadeIn'
					easing='ease-in-out'
					source={cedricImg}
					className='mt-8 z-30'
				/>
				<TouchableOpacity
					onPress={() => navigation.navigate('Travel')}
					className='absolute bottom-5 mx-auto   border-2 border-t-4 rounded-full border-red-500 flex items-center justify-center z-50'
				>
					<Animatable.View
						animation='pulse'
						easing='ease-in-out'
						iterationCount={'infinite'}
						className=' bg-red-400 rounded-full w-16 h-16 m-1 mb-0 flex justify-center items-center '
					>
						<Text className='text-2xl font-extrabold text-blue-100'>Go</Text>
					</Animatable.View>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

export default HomeScreen;
