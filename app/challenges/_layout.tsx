import React from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

const ChallengesLayout = () => {
  return (
    <>
    <Stack>
      <Stack.Screen name='index' options={{ headerShown: false }} />
      <Stack.Screen name='01' options={{ headerShown: false }} />
      <Stack.Screen name='02' options={{ headerShown: false }} />
    </Stack>
     <StatusBar backgroundColor="#F8F9FA" style="dark" />
     </>
  );
};

export default ChallengesLayout;
