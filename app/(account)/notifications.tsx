import { View, Text, Button, TouchableHighlight } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Notifications = () => {
  return (
    <View>
      <Text>Notifications</Text>

      <Link href="/profile">
        <Text>Go to profile</Text>
      </Link>

      <TouchableHighlight>
        <Link href="/(tabs)">
          <Text>Go to dashboard</Text>
        </Link>
      </TouchableHighlight>
    </View>
  );
};

export default Notifications;
