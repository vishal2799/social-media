import { View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View>
      <Link href={'/challenges/01'}>Challenges</Link>
    </View>
  )
}

export default index