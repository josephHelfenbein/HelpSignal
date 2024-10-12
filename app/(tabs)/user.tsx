import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Collapsible } from '@/components/Collapsible';
import { ThemedText } from '@/components/ThemedText';

export default function User() {
    var key = 1;
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
            <Ionicons name="menu" size={30} style={styles.menuIcon} />
            <Ionicons name="settings" size={30} style={styles.settingsIcon} />
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
                        <Text style={styles.certificationsTitle}>Certifications:</Text>
                        <View style={styles.certificationsList}>
                            {user.certifications.map((certification) => (
                                <View key={key++} style={styles.box}>
                                    <Ionicons name="chevron-forward" size={20} color="#f83e3e" style={styles.arrowIcon} />
                                    <Collapsible title={certification.name}>
                                        <ThemedText>{certification.details}</ThemedText>
                                        <ThemedText>
                                            <ThemedText type="defaultSemiBold">Certified By</ThemedText>{certification.certifiedBy}
                                        </ThemedText>
                                    </Collapsible>
                                </View>
                            ))}
                        </View>

                        {/* Medical Equipments Section */}
                        <Text style={styles.medicalEquipmentTitle}>Medical Equipments</Text>
                        <View style={styles.medicalEquipmentList}>
                            {user.readiness.map((readiness) => (
                                <View key={key++} style={styles.box}>
                                    <Collapsible title={readiness.name}>
                                        <ThemedText>
                                            {readiness.details}
                                        </ThemedText>
                                    </Collapsible>
                                </View>
                            ))}
                        </View>
                    </View>
                </View>
            </ParallaxScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    headerImageContainer: {
        height: 180,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f83e3e', // Red header background
        position: 'relative',
    },
    box: {
        borderBottomWidth: 2,
        borderBottomColor: '#f83e3e', // Red line at the bottom
        paddingVertical: 10,
        paddingHorizontal: 0,
        marginBottom: 15,
        alignSelf: 'stretch', // Make sure the red line spans full width
    },
    container: {
        flex: 1,
        position: 'relative', // Ensures absolute children are positioned relative to this container
    },
    menuIcon: {
        position: 'absolute',
        top: 50,
        left: 20,
        zIndex: 10, // Ensure it's on top of other elements
        color: '#ffffff', // White icon
    },
    settingsIcon: {
        position: 'absolute',
        top: 50,
        right: 20,
        zIndex: 10, // Ensure it's on top of other elements
        color: '#ffffff', // White icon
    },
    headerImage: {
        top: 70,
        color: '#ffffff', // White user icon
    },
    contentContainer: {
        flex: 1,
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
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#000000', // Black text
    },
    certificationsList: {
        alignSelf: 'flex-start', // Shift the certifications to the left
        marginBottom: 50,
    },
    medicalEquipmentTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#000000', // Black text
    },
    medicalEquipmentList: {
        alignSelf: 'flex-start', // Shift the certifications to the left
        marginBottom: 10,
    },
    certification: {
        fontSize: 16,
        color: '#7f7f7f', // Gray text
        marginBottom: 5,
    },
    arrowIcon: {
        marginRight: 2, // Add space between the arrow and text
    },
});
