import { StyleSheet, Image, Platform, View, Text } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function getCertifications() {
    return (
        <View>
            <Ionicons name="menu" size={30} style={styles.menuIcon} />
            <Ionicons name="settings" size={30} style={styles.settingsIcon} />
            <View style={styles.redBox}>
                <Text style={styles.become}>Become A</Text>
            </View> 
            <Text style={styles.responder}>Responder</Text>
            <Text style={styles.marketing}>Gain your own certification by studying the class certified by us below!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    marketing: {
        color: '#000000',
        fontSize: 10,
        top: 120,
    },
    responder: {
        color: '#f83e3e',
        fontSize: 70,
        top: 97,
        fontWeight: 'bold',
        left: 20,
    },
    redBox: {
        backgroundColor: '#f83e3e',
        top: 100,
        height: 130,
    },
    become: {
        fontSize: 45,
        color: '#FFFFFF',
        left: 20,
        top: 73,
        marginBottom: 5,
    },
    menuIcon: {
        position: 'absolute',
        top: 50,
        left: 20,
        color:'#f83e3e',
        zIndex: 10, // Ensure it's on top of other elements
    },
    settingsIcon: {
        position: 'absolute',
        top: 50,
        right: 20,
        zIndex: 10, // Ensure it's on top of other elements
        color: '#f83e3e', // White icon
    },
});
