import React from 'react'
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter'
import AppLoading from 'expo-app-loading'
import { ThemeProvider } from 'styled-components/native'

import theme from './src/theme'

import { SignIn } from '@screens/SignIn'

export default function App() {
 const [ fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold 
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme} >

        <SignIn />
      
    </ThemeProvider>
  );
}

