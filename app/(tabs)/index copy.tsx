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
        <View style={styles.container}>
            <Text style={styles.emergency}>EMERGENCY CALL</Text>
            <View>
                <TouchableOpacity onPress={handlePress}>
                    <Animated.View style={[styles.button, { transform: [{ scale: pulseAnimation }] }]}>
                        <Text style={styles.buttonText}>S.O.S</Text>
                    </Animated.View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    emergency: {
        color: '#f80000',
        fontWeight: 'bold',
        fontSize: 40,
    },
    container: {
        marginBottom: 200,
        flex: 1,
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
});

export default SOSScreen;
