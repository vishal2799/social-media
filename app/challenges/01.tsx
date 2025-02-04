import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from '@expo/vector-icons/Ionicons';

const FirstChallenge = () => {
  return (
    <SafeAreaView className='bg-orange-300 h-full p-8'>
      <ScrollView contentContainerClassName='min-h-full'>
      <View className='h-full w-full justify-center items-center bg-white rounded-2xl'>
      <View className='w-full flex flex-col items-center justify-center text-center mb-10'>
      <Ionicons name='arrow-back-outline' size={24} color='#000' />
        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default FirstChallenge