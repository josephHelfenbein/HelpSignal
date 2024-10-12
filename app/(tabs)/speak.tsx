import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SpeakScreen = () => {
  const handlePress = () => {
    // Handle the microphone button press
    console.log('Microphone pressed!'); // Add functionality here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Press the microphone to speak:</Text> {/* Keep original text */}
      <TouchableOpacity onPress={handlePress} style={styles.microphoneButton}>
        <Ionicons name="mic" size={100} color="white" /> {/* Microphone icon */}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Adjust the background color as needed
  },
  text: {
    fontSize: 24,
    marginBottom: 20, // Spacing between text and microphone button
  },
  microphoneButton: {
    width: 100,
    height: 100,
    borderRadius: 50, // Make it circular
    backgroundColor: 'red', // Background color of the button
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SpeakScreen;
