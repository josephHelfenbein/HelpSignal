import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Collapsible } from '@/components/Collapsible';
import { ThemedText } from '@/components/ThemedText';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

export default function User() {
    var key = 1;
    const navigation = useNavigation<any>(); // Get the navigation object
    const user = {
        name: 'John Doe',
        role: 'Rescuer',
        saved: '4 Responses',
        certifications: [
            {
                name: 'CPR (Cardiopulmonary Resuscitation)',
                details: 'Life-saving chest compressions and breaths to restart breathing or heartbeats',
                certifiedBy: 'HealthTA'
            },
            {
                name: 'First Aid',
                details: 'Immediate care for injuries or illness before professional help arrives',
                certifiedBy: 'HealthTA'
            },
            {
                name: 'AED (Automated External Defibrillator)',
                details: 'Device delivering electric shocks to restore heart rhythm in cardiac arrest',
                certifiedBy: 'Health'
            }],
        city: 'Boston',
        state: 'MA',
        email: 'helpsignal@gmail.com',
        readiness: [
            { name: 'EPIPen', details: 'Emergency epinephrine injection for severe allergic reactions' },
            { name: 'Inhaler', details: 'Device delivering medication to alleviate breathing issues' },
            { name: 'Portable Oxygen Concentrator', details: 'Portable device providing supplemental oxygen therapy' }],
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.settingsButton} onPress={() => navigation.navigate('skills')}>
                <Ionicons name="settings" size={30} style={styles.settingsIcon}/>
            </TouchableOpacity>
            <ParallaxScrollView
                headerBackgroundColor={{ light: '#f83e3e', dark: '#f83e3e' }}
                headerImage={
                    <View style={styles.headerImageContainer}>
                        <Ionicons size={250} name="person-circle" style={styles.headerImage} />
                    </View>
                }
            >
                <View style={styles.contentContainer}>
                    {/* User Info Section */}
                    <View style={styles.userInfo}>
                        <Text style={styles.userName}>{user.name}</Text>
                        <Text style={styles.userEmail}>{user.email}</Text>
                        <Text style={styles.userLocation}>{user.city}, {user.state}</Text>
                        <Text style={styles.userRole}>{user.role} | {user.saved}</Text>

                        {/* Certifications Section */}
                        <View style={styles.outsideCover}>
                            <Text style={styles.certificationsTitle}>Certifications:</Text>
                            <View style={styles.certificationsList}>
                                {user.certifications.map((certification) => (
                                    <View key={key++} style={styles.bubble}>
                                        <Collapsible title={certification.name}>
                                            <ThemedText>{certification.details}</ThemedText>
                                            <ThemedText>
                                                <ThemedText type="defaultSemiBold">Certified By: </ThemedText>{certification.certifiedBy}
                                            </ThemedText>
                                        </Collapsible>
                                    </View>
                                ))}
                            </View>
                        </View>

                        {/* Medical Equipments Section */}
                        <View style={styles.outsideCover}>
                            <Text style={styles.medicalEquipmentTitle}>Medical Equipments</Text>
                            <View style={styles.medicalEquipmentList}>
                                {user.readiness.map((readiness) => (
                                    <View key={key++} style={styles.bubble}>
                                        <Collapsible title={readiness.name}>
                                            <ThemedText>{readiness.details}</ThemedText>
                                        </Collapsible>
                                    </View>
                                ))}
                            </View>
                        </View>
                    </View>
                </View>
            </ParallaxScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    settingsButton: {
        position: 'absolute',
        top: 50,
        right: 20,
        zIndex: 10,
        color: '#FFFFFF', // White icon
    },
    outsideCover: {
        width: '100%',
        paddingHorizontal: 10,
    },
    headerImageContainer: {
        height: 180,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f83e3e', // Red header background
        position: 'relative',
    },
    bubble: {
        borderWidth: 2,
        borderColor: '#f83e3e', // Red border around the bubble
        borderRadius: 10, // Rounded corners for the bubble effect
        padding: 15,
        marginBottom: 20, // Space between bubbles
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 5, // Android shadow
    },
    container: {
        flex: 1,
        position: 'relative',
    },
    menuIcon: {
        position: 'absolute',
        top: 50,
        left: 20,
        zIndex: 10,
        color: '#ffffff', // White icon
    },
    settingsIcon: {
        color: '#ffffff', // White icon
    },
    headerImage: {
        top: 70,
        color: '#ffffff', // White user icon
    },
    contentContainer: {
        flex: 1,
        paddingHorizontal: 20, // Added padding to avoid edge clipping
    },
    userInfo: {
        alignItems: 'center',
    },
    userName: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#000000',
    },
    userEmail: {
        fontSize: 12,
        color: '#7f7f7f', // Gray text
        marginBottom: 5,
    },
    userRole: {
        fontSize: 18,
        color: '#000000',
        marginBottom: 40,
    },
    userLocation: {
        fontSize: 16,
        color: '#7f7f7f',
        marginBottom: 5,
    },
    certificationsTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#000000', // Black text
    },
    certificationsList: {
        marginBottom: 20,
    },
    medicalEquipmentTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#000000', // Black text
    },
    medicalEquipmentList: {
        marginBottom: 10,
    },
    skillsButton: {
        marginTop: 20, // Space above the button
        padding: 10,
        backgroundColor: '#f83e3e', // Button background color
        borderRadius: 5,
        alignItems: 'center',
    },
    skillsButtonText: {
        color: '#FFFFFF', // White text for the button
        fontSize: 16,
        fontWeight: 'bold',
    },
});
