import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AboutUs() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Us</Text>
      <Text style={styles.text}>
        We are a team of passionate software developers. We love to create amazing apps that make people's lives easier and more fun. Our mission is to deliver high-quality software that meets the needs of our users and exceeds their expectations.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
  },
});