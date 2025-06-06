import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import 'react-native-reanimated';

export default function ShopLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerStyle: {
            backgroundColor: '#4CAF50', // Kolor nagłówka
          },
          headerTintColor: '#fff', // Kolor tekstu nagłówka
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          drawerStyle: {
            backgroundColor: '#f0f0f0', // Tło szuflady
            width: 240,
          },
          drawerActiveTintColor: '#4CAF50', // Kolor aktywnego elementu w szufladzie
          drawerInactiveTintColor: '#333', // Kolor nieaktywnego elementu
          drawerLabelStyle: {
            fontSize: 16,
            marginLeft: 0,
          },
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: 'Home',
            title: 'Overview',
          }}
        />
        <Drawer.Screen
          name="categories"
          options={{
            drawerLabel: 'Kategorie',
            title: 'Tytuł: Kategorie',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}

