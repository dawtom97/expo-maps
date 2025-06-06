import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Link } from 'expo-router'
import * as Location from 'expo-location'
import MapView, { PROVIDER_DEFAULT, UrlTile } from 'react-native-maps'

const Categories = () => {
  const [loading, setLoading] = useState(true)
  const [location, setLocation] = useState<Location.LocationObjectCoords | null>(null)

  useEffect(( ) => {
    (async () => {
      const info = await Location.requestForegroundPermissionsAsync();
      if (info.status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }
      const curentPosition = await Location.getCurrentPositionAsync({});
      setLocation(curentPosition.coords);
      setLoading(false)
    })()
  },[])

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    )
  }


  return (
    <View style={styles.container}>

      <MapView
        style={{ width: '100%', height: 400 }}
        provider={PROVIDER_DEFAULT}
        initialRegion={{
          latitude: location?.latitude || 0,
          longitude: location?.longitude || 0,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
          <UrlTile
          /**
           * OpenStreetMap tile server URL
           * Zobacz: https://wiki.openstreetmap.org/wiki/Slippy_map_tilenames
           */
          urlTemplate="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          maximumZ={19}
          flipY={false}
        />
      
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: '#f0f0f0',
  },
})

export default Categories
