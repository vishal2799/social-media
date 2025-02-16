import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import User from '../../assets/images/user.jpg';
import QR from '../../assets/images/qrcode.png';
import { Ionicons } from '@expo/vector-icons';

const SecondChallenge = () => {
  return (
    <SafeAreaView className='bg-sky-900 h-full'>
      <ScrollView>
      <View className='min-h-full w-full justify-center items-center px-4 my-6'>
      <View className='w-full flex-col gap-y-8 h-full'>
        <View className='flex-row items-center justify-between'>
            <View>
                <Text className='text-green-300 font-psemibold text-xl'>Canada Air</Text>
                <Text className='font-plight text-sm text-white'>A star alliance member</Text>
            </View>
            <Image
                          source={User}
                          className='w-10 h-10 rounded-full'
                          resizeMode='cover'
                        />
        </View>
        <View>
            <Text className='text-4xl font-pbold text-green-300'>Hello Oliva,</Text>
            <Text className='font-plight text-sm text-white'>Your flight is in 16 hours.</Text>
        </View>
        <View className='rounded-md bg-white'>
            <View className='p-5'>
                <View className='flex-row gap-x-2 items-center mb-6'>
                <Ionicons name='calendar' size={14} color='red' />
                <Text className='font-psemibold text-sm text-sky-900'>2025.02.21</Text>
                </View>
            <View className='flex-row justify-between items-center mb-4'>
            <View>
                    <Text className='font-psemibold text-sm text-red-600 uppercase'>Montreal</Text>
                    <Text className='text-sky-900 font-pbold text-5xl tracking-[2px] mt-2'>YUL</Text>
                </View>
                <Ionicons name='airplane' size={24} color='darkblue' />
                <View>
                    <Text className='font-psemibold text-sm text-red-600 uppercase'>Tokyo</Text>
                    <Text className='text-sky-900 font-pbold text-5xl tracking-[2px] mt-2'>NRT</Text>
                </View>
            </View>
            <View className='flex-row gap-x-8 flex-wrap gap-y-5'>
                <View>
                    <Text className='font-pmedium text-sm text-red-600 uppercase'>Flight</Text>
                    <Text className='text-sky-900 font-pmedium text-base'>AC 05</Text>
                </View>
                <View>
                    <Text className='font-pmedium text-sm text-red-600 uppercase'>Date</Text>
                    <Text className='text-sky-900 font-pmedium text-base uppercase'>16 Jul</Text>
                </View>
                <View>
                    <Text className='font-pmedium text-sm text-red-600 uppercase'>Boarding</Text>
                    <Text className='text-sky-900 font-pmedium text-base'>09:40</Text>
                </View>
                <View>
                    <Text className='font-pmedium text-sm text-red-600 uppercase'>Zone</Text>
                    <Text className='text-sky-900 font-pmedium text-base'>2</Text>
                </View>
                <View>
                    <Text className='font-pmedium text-sm text-red-600 uppercase'>Gate</Text>
                    <Text className='text-sky-900 font-pmedium text-base'>38</Text>
                </View>
                <View>
                    <Text className='font-pmedium text-sm text-red-600 uppercase'>Seat</Text>
                    <Text className='text-sky-900 font-pmedium text-base'>14D</Text>
                </View>
            </View>
            </View>
            <View className='border border-dashed border-slate-500 mt-4 w-10/12 mr-auto ml-auto'>
            </View>
            <View className='relative mt-[-10px] flex-row justify-between'>
            <View className='bg-sky-900 w-5 h-5 rounded-full ml-[-10px]'></View>
            <View className='bg-sky-900 w-5 h-5 rounded-full mr-[-10px]'></View>
            </View>
            <View className='p-5'>
            <View className='flex-row justify-between mt-4'>
                <View>
                <View>
                    <Text className='font-pmedium text-sm text-red-600 uppercase'>Passenger</Text>
                    <Text className='text-sky-900 font-pmedium text-base'>Oliva Jenkins</Text>
                </View>
                <View className='mt-5'>
                    <Text className='font-pmedium text-sm text-red-600 uppercase'>Passenger</Text>
                    <Text className='text-sky-900 font-pmedium text-base'>Oliva Jenkins</Text>
                </View>
                </View>
                <Image
                          source={QR}
                          className='w-40 h-40'
                          resizeMode='cover'
                        />
            </View>
            </View>
            
        </View>
        <TouchableOpacity className='bg-green-300 flex-row justify-center items-center p-3 rounded-lg'>
                <Text className='text-lg font-psemibold text-sky-900'>Read More</Text>
            </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SecondChallenge