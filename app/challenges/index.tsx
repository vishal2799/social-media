import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router'

const ChallengeIndex = () => {
  return (
    <SafeAreaView>
        <ScrollView>
            <View>
                <Text>Challenge Index</Text>
                <Link href={'/challenges'}>Netflix Intro</Link>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default ChallengeIndex