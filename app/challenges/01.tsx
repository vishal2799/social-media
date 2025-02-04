import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from '@expo/vector-icons/Ionicons';
import Shirt from '../../assets/images/shirt.jpg';

const FirstChallenge = () => {
  return (
    <SafeAreaView className='bg-purple-400 h-full p-8'>
      <ScrollView>
      <View className='min-h-full justify-center items-center'>
      <View className='flex-col h-full justify-between w-full p-6 bg-white rounded-2xl'>
      <Ionicons name='arrow-back-outline' size={24} color='#000' />
      <View>
      <Text className='text-4xl font-psemibold'>Shopping{"\n"}Cart</Text>
      <Text className='text-lg font-pmedium mt-1'>3 items</Text>
      </View>
      <View className='flex-col gap-y-2 justify-center'>
        {[1,2,3,4].map((item, index) => 
        (
          <View className='flex-row p-1 rounded-md bg-purple-50' key={index}>
            <Image
              source={Shirt}
              className='w-[80px] h-[80px] rounded-md'
              resizeMode='cover'
            />
            <View className='flex-grow h-full px-3 flex-row justify-between items-center'>
              <View className='flex-col'>
                <Text className='text-lg font-pmedium'>Better Than</Text>
                <Text className='text-base font-pregular'>Mascara</Text>
              </View>
              <Text className='text-2xl font-pregular text-purple-500'>$31</Text>
            </View>
          </View>
        )
        )}
      </View>
      <View className='flex-row justify-between items-center'>
        <TouchableOpacity className='bg-purple-600 px-8 py-4 rounded-full'>
          <Text className='text-white text-base font-pmedium'>Check out</Text>
        </TouchableOpacity>
        <Text className='text-2xl font-pregular'>$31</Text>
      </View>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default FirstChallenge