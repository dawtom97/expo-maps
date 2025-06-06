import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { Link } from 'expo-router'
import * as Location from 'expo-location'

const Profile = () => {


  useEffect(( ) => {
    (async () => {
      const test = await Location.getCurrentPositionAsync({})
      console.log(test)
    })()
  },[])


  return (
    <View>
      <Text>Profile</Text>
      <Link href="/notifications">
        <Text>Go to notifications</Text>
      </Link>
    </View>
  )
}

export default Profile