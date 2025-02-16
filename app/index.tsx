import { View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View>
      <Link href={'/challenges/01'}>Challenge 1</Link>
      <Link href={'/challenges/02'}>Challenge 2</Link>
    </View>
  )
}

export default index