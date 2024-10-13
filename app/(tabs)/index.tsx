import React, { useState, useRef, useEffect } from 'react';
import { View, TouchableOpacity, Animated, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const JWTLogin = async () => {
    let token = await AsyncStorage.getItem('token');
    
    const axiosConfig = axios.create({
        baseURL: "https://2024-hackharvard-flask.vercel.app/api/",
        headers: {
            "Content-Type": "application/json",
        }
    })
    
    if (token) {
        axiosConfig.get('/protected', {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        }).then((response) => {
            console.log("Token is valid, " + response.data);
        }).catch((error) => {
            console.error("Token is invalid, " + error);
            AsyncStorage.removeItem('token');
            AsyncStorage.removeItem('user');
        })			
    } else {
        console.error('Token not found');
    }
}

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
        return 3 // Generates a number between 2 and 4
    };

    const startPulsing = (pulseCount: number) => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(pulseAnimation, {
                    toValue: 1.2, // Scale up
                    duration: 400,
                    useNativeDriver: true,
                }),
                Animated.timing(pulseAnimation, {
                    toValue: 1, // Scale down
                    duration: 400,
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
    <View style={styles.container1}>
      <Ionicons name="menu" size={30} style={styles.menuIcon} />
      <Ionicons name="settings" size={30} style={styles.settingsIcon} />
      <View style={styles.container}>
        <Text style={styles.emergency}>EMERGENCY CALL</Text>
        <View style={styles.circleContainer}>
          <TouchableOpacity onPress={handlePress}>
            <Animated.View style={[styles.button, { transform: [{ scale: pulseAnimation }] }]}>
              <Text style={styles.buttonText}>S.O.S</Text>
            </Animated.View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

useEffect(() => {
    JWTLogin();
}, []);

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    position: 'relative', // Ensures absolute children are positioned relative to this container
  },
  emergency: {
    color: '#f83e3e',
    fontWeight: 'bold',
    fontSize: 40,
    marginBottom: 50, // Add space between text and circle
    textAlign: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 325,
    height: 325,
    borderRadius: 200, // Make it circular
    backgroundColor: 'red', // Change to desired background color
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold',
  },
  menuIcon: {
    position: 'absolute',
    top: 50,
    left: 20,
    color: '#f83e3e',
    zIndex: 10,
  },
  settingsIcon: {
    position: 'absolute',
    top: 50,
    right: 20,
    zIndex: 10,
    color: '#f83e3e',
  },
});

export default SOSScreen;