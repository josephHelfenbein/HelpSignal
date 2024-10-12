import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router'; // Import router

const SpeakScreen = () => {
  const handlePress = () => {
    console.log('Microphone pressed!');
  };

  const handleBackPress = () => {
    // Use router.push() to navigate back to the SOS screen
    router.push('/index'); // Ensure that the SOS screen's file path is correct
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Text style={styles.text}>Press the microphone to speak:</Text>
      <TouchableOpacity onPress={handlePress} style={styles.microphoneButton}>
        <Ionicons name="mic" size={100} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  microphoneButton: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    padding: 10,
  },
});

export default SpeakScreen;
