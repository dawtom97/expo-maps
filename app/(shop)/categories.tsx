import {
  View,
  Text,
  StyleSheet,
  NativeSyntheticEvent,
  Modal,
  TextInput,
  Button,
} from "react-native";
import React, { use, useEffect, useState } from "react";
import { Link } from "expo-router";
import * as Location from "expo-location";
import { LocationObjectCoords } from "expo-location";
import MapView, {
  PROVIDER_DEFAULT,
  UrlTile,
  Marker,
  ClickEvent,
} from "react-native-maps";

const initialCafes = [
  { id: "1", name: "Cafe A", latitude: 37.28825, longitude: -122.4324 },
  { id: "2", name: "Cafe B", latitude: 37.18825, longitude: -121.4324 },
  { id: "3", name: "Cafe C", latitude: 37.68825, longitude: -122.4324 },
];

const Categories = () => {
  const [cafes, setCafes] = useState(initialCafes);
  const [loading, setLoading] = useState(true);
  const [location, setLocation] =
    useState<Location.LocationObjectCoords | null>(null);
  const [newPinName, setNewPinName] = useState<string>("");
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [newPinCoords, setNewPinCoords] = useState<Partial<LocationObjectCoords> | null>(null);

  useEffect(() => {
    (async () => {
      const info = await Location.requestForegroundPermissionsAsync();
      if (info.status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }
      const curentPosition = await Location.getCurrentPositionAsync({});
      setLocation(curentPosition.coords);
      setLoading(false);
    })();
  }, []);

  const handleMapPress = (event: NativeSyntheticEvent<any>) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    setNewPinCoords({ latitude, longitude });
    setModalVisible(true);
  };

  const handleAddPin = () => {
    if (!newPinCoords?.latitude || !newPinCoords?.longitude) return;
    const newCafe = {
      id: Date.now().toString(),
      name: newPinName || `Cafe ${cafes.length + 1}`,
      latitude: newPinCoords.latitude,
      longitude: newPinCoords.longitude,
    };
    setCafes((prevCafes) => [...prevCafes, newCafe]);
    setModalVisible(false);
    setNewPinName("");
    setNewPinCoords(null);
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Modal visible={modalVisible} animationType="slide" transparent>
        <View>
          <Text>Dodaj nowy punkt</Text>
          <TextInput
            value={newPinName}
            onChangeText={setNewPinName}
            placeholder="Nazwa punktu"
          />
          <Button title="Anuluj" onPress={() => setModalVisible(false)} />
          <Button title="Dodaj" onPress={handleAddPin} />
        </View>
      </Modal>

      <MapView
        onPress={handleMapPress}
        style={{ width: "100%", height: "100%" }}
        provider={PROVIDER_DEFAULT}
        initialRegion={{
          latitude: location?.latitude || 0,
          longitude: location?.longitude || 0,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {cafes.map((cafe) => (
          <Marker
            key={cafe.id}
            coordinate={{
              latitude: cafe.latitude,
              longitude: cafe.longitude,
            }}
            title={cafe.name}
            description={`This is ${cafe.name}.`}
          />
        ))}
        <Marker
          coordinate={{
            latitude: (location?.latitude ?? 0) + 0.05,
            longitude: location?.longitude || 0,
          }}
          title="Your Location"
          description="This is where you are currently located."
        />
      </MapView>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#f0f0f0",
  },
});

export default Categories;
