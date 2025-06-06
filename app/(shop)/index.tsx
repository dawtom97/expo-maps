import React from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';

// Przykładowe dane krajów
const countries = [
  { id: '1', name: 'Polska', capital: 'Warszawa' },
  { id: '2', name: 'Niemcy', capital: 'Berlin' },
  { id: '3', name: 'Francja', capital: 'Paryż' },
  { id: '4', name: 'Włochy', capital: 'Rzym' },
  { id: '5', name: 'Hiszpania', capital: 'Madryt' },
  { id: '6', name: 'Kanada', capital: 'Ottawa' },
  { id: '7', name: 'Japonia', capital: 'Tokio' },
  { id: '8', name: 'Brazylia', capital: 'Brasilia' },
  { id: '9', name: 'Australia', capital: 'Canberra' },
  { id: '10', name: 'Egipt', capital: 'Kair' },
];

const screenWidth = Dimensions.get('window').width;

export default function Shop() {

  console.log("TEST TEST")


  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lista Krajów</Text>
       <FlatList
        data={countries}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10 }}
        renderItem={({ item }) => (
          <View style={[styles.itemContainer, { width: screenWidth / 2 - 20 }]}>
            <Text style={styles.countryName}>{item.name}</Text>
            <Text style={styles.capital}>Stolica: {item.capital}</Text>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: '#f0f0f0',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#4CAF50',
  },
  itemContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
    width: '100%',
  },
  countryName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  capital: {
    fontSize: 14,
    color: '#666',
  },
  separator: {
    height: 10,
  },
});
