import { Link } from 'expo-router'
import React from 'react'
import { View, Text } from 'react-native'

function Settings() {
  return (
    <View>
        <Text>Ustawienia widoku</Text>
        <Link href="/(account)/profile">Profil</Link>
    </View>
  )
}

export default Settings