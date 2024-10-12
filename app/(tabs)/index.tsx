import React, { useState, useRef } from 'react';
import { View, TouchableOpacity, Animated, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const SOSScreen = () => {
  const router = useRouter();
  const [isPulsing, setIsPulsing] = useState(false);
  const pulseAnimation = useRef(new Animated.Value(1)).current;

  const handlePress = () => {
    if (!isPulsing) {
      setIsPulsing(true);
      const randomPulseCount = getRandomPulseCount(); // Get a random pulse count between 2 and 4
      startPulsing(randomPulseCount); // Start pulsing with the random count
    }
  };

  const getRandomPulseCount = () => {
    return 3; // Generates a number between 2 and 4
  };

  const startPulsing = (pulseCount: number) => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnimation, {
          toValue: 1.2, // Scale up
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnimation, {
          toValue: 1, // Scale down
          duration: 300,
          useNativeDriver: true,
        }),
      ]),
      { iterations: pulseCount } // Use the random pulse count
    ).start(() => {
      setIsPulsing(false);
      navigateToSpeakScreen(); // Navigate to SpeakScreen after pulsing
    });
  };

  const navigateToSpeakScreen = () => {
    router.push('/speak'); // Navigate to SpeakScreen after pulsing
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress}>
        <Animated.View style={[styles.button, { transform: [{ scale: pulseAnimation }] }]}>
          <Text style={styles.buttonText}>SOS</Text>
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 150,
    height: 150,
    borderRadius: 75, // Make it circular
    backgroundColor: 'red', // Change to desired background color
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default SOSScreen;
