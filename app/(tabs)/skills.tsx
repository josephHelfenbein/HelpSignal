import React, { useState } from 'react';
import { View, Button, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook

interface Item {
    name: string;
    details?: string;
}

export default function Skills() {
    const [selectedCertifications, setSelectedCertifications] = useState<Item[]>([]);
    const [selectedMedicalEquipment, setSelectedMedicalEquipment] = useState<Item[]>([]);
    const navigation = useNavigation(); // Hook for navigation

    const certificationList: Item[] = [
        { name: 'CPR (Cardiopulmonary Resuscitation)', details: 'Basic life-saving technique' },
        { name: 'First Aid', details: 'Basic care for injuries and sudden illness' },
        { name: 'Basic Life Support', details: 'Advanced CPR techniques' },
        { name: 'Automated External Defibrillator (AED)', details: 'Using an AED for cardiac arrest' },
        { name: 'Stop the Bleed', details: 'Emergency blood loss control' },
        { name: 'Mental Health First Aid', details: 'Assisting individuals experiencing mental health issues' },
    ];

    const medicalEquipmentList: Item[] = [
        { name: 'EPIPen', details: 'Emergency epinephrine injection for severe allergic reactions' },
        { name: 'Inhaler', details: 'Device delivering medication to alleviate breathing issues' },
        { name: 'Portable Oxygen Concentrator', details: 'Portable device providing supplemental oxygen therapy' },
        { name: 'Emergency Glucagon Kit', details: 'Glucagon injection for severe low blood sugar' },
        { name: 'Blood Pressure Monitor', details: 'Device to measure blood pressure' },
        { name: 'Blood Glucose Monitor', details: 'Device to measure blood sugar levels' }
    ];

    const handleCertificationChange = (isChecked: boolean, item: Item) => {
        if (isChecked) {
            setSelectedCertifications([...selectedCertifications, item]);
        } else {
            setSelectedCertifications(selectedCertifications.filter(i => i.name !== item.name));
        }
    };

    const handleMedicalEquipmentChange = (isChecked: boolean, item: Item) => {
        if (isChecked) {
            setSelectedMedicalEquipment([...selectedMedicalEquipment, item]);
        } else {
            setSelectedMedicalEquipment(selectedMedicalEquipment.filter(i => i.name !== item.name));
        }
    };

    const handleSubmit = () => {
        const data = {
            certifications: selectedCertifications,
            medicalEquipment: selectedMedicalEquipment,
        };
        const jsonString = JSON.stringify(data);
        console.log(jsonString);
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            {/* Fixed header bar */}
            <View>
                <TouchableOpacity 
                    style={styles.backButton} 
                    onPress={() => navigation.goBack()} // Ensure goBack is used for navigation
                >
                    <Ionicons name="arrow-back" size={30} style={styles.backIcon} />
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.title}>Select your Health Certifications and Medical Equipment</Text>
                
                <Text style={styles.headerText}>Certifications</Text>
                {certificationList.map((item, index) => (
                    <BouncyCheckbox
                        key={index}
                        text={item.name}
                        onPress={(isChecked: boolean) => handleCertificationChange(isChecked, item)}
                        fillColor="red"
                        textStyle={styles.checkboxText}
                        style={styles.checkbox}
                    />
                ))}

                <Text style={styles.headerText}>Medical Equipment</Text>
                {medicalEquipmentList.map((item, index) => (
                    <BouncyCheckbox
                        key={index}
                        text={item.name}
                        onPress={(isChecked: boolean) => handleMedicalEquipmentChange(isChecked, item)}
                        fillColor="red"
                        textStyle={styles.checkboxText}
                        style={styles.checkbox}
                    />
                ))}

                <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                    <Text style={styles.submitButtonText}>Submit</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
    },
    backButton: {
        position: 'absolute',
        top: 50,
        left: 20,
        zIndex: 10,
        padding: 10, // Add padding to make the touchable area bigger
    },
    backIcon: {
        color: '#f83e3e', // Red arrow icon
    },
    content: {
        paddingTop: 100, // Ensure content starts below fixed header
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 20,
    },
    checkboxText: {
        textDecorationLine: 'none',
        fontSize: 16,
    },
    checkbox: {
        marginVertical: 10,
    },
    submitButton: {
        marginVertical: 20,
        backgroundColor: '#f83e3e',
        color: '#fff',
        paddingVertical: 12,         
        paddingHorizontal: 30,      
        borderRadius: 30,           
        justifyContent: 'center',   
        elevation: 5,               
        shadowColor: '#000',         
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.3,          
        shadowRadius: 2,             
    },
    submitButtonText:
    {
        color: '*fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    }
    
});
