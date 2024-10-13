import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";

interface Item {
    name: string;
    details?: string;
}

export default function Skills() {
    // State to track the selected certifications and medical equipment
    const [selectedCertifications, setSelectedCertifications] = useState<Item[]>([]);
    const [selectedMedicalEquipment, setSelectedMedicalEquipment] = useState<Item[]>([]);

    // Sample list of certifications
    const certificationList: Item[] = [
        { name: 'CPR (Cardiopulmonary Resuscitation)', details: 'Basic life-saving technique' },
        { name: 'First Aid', details: 'Basic care for injuries and sudden illness' },
        { name: 'Basic Life Support', details: 'Advanced CPR techniques' },
        { name: 'Automated External Defibrillator (AED)', details: 'Using an AED for cardiac arrest' },
        { name: 'Stop the Bleed', details: 'Emergency blood loss control' },
        { name: 'Mental Health First Aid', details: 'Assisting individuals experiencing mental health issues' },
    ];

    // Sample list of medical equipment
    const medicalEquipmentList: Item[] = [
        { name: 'EPIPen', details: 'Emergency epinephrine injection for severe allergic reactions' },
        { name: 'Inhaler', details: 'Device delivering medication to alleviate breathing issues' },
        { name: 'Portable Oxygen Concentrator', details: 'Portable device providing supplemental oxygen therapy' },
        { name: 'Emergency Glucagon Kit', details: 'Glucagon injection for severe low blood sugar' },
        { name: 'Blood Pressure Monitor', details: 'Device to measure blood pressure' },
        { name: 'Blood Glucose Monitor', details: 'Device to measure blood sugar levels' }
    ];

    // Function to handle checkbox selection/deselection for certifications
    const handleCertificationChange = (isChecked: boolean, item: Item) => {
        if (isChecked) {
            setSelectedCertifications([...selectedCertifications, item]);
        } else {
            setSelectedCertifications(selectedCertifications.filter(i => i.name !== item.name));
        }
    };

    // Function to handle checkbox selection/deselection for medical equipment
    const handleMedicalEquipmentChange = (isChecked: boolean, item: Item) => {
        if (isChecked) {
            setSelectedMedicalEquipment([...selectedMedicalEquipment, item]);
        } else {
            setSelectedMedicalEquipment(selectedMedicalEquipment.filter(i => i.name !== item.name));
        }
    };

    // Function to submit the selected certifications and medical equipment as a JSON string
    const handleSubmit = () => {
        const data = {
            certifications: selectedCertifications,
            medicalEquipment: selectedMedicalEquipment,
        };
        const jsonString = JSON.stringify(data);
        console.log(jsonString); // Send jsonString to the backend
        // Example: fetch('/submit', { method: 'POST', body: jsonString });
    };

    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Certifications</Text>
            {certificationList.map((item, index) => (
                <BouncyCheckbox
                    key={index}
                    text={item.name}
                    onPress={(isChecked: boolean) => handleCertificationChange(isChecked, item)}
                    fillColor="red"  // Red tick color
                    disableBuiltInState={true}  // Prevent text cross out
                    unfillColor="#FFFFFF"  // Unselected box background
                    textStyle={{ textDecorationLine: 'none' }}  // Prevent crossing out the text
                />
            ))}

            <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 20 }}>Medical Equipment</Text>
            {medicalEquipmentList.map((item, index) => (
                <BouncyCheckbox
                    key={index}
                    text={item.name}
                    onPress={(isChecked: boolean) => handleMedicalEquipmentChange(isChecked, item)}
                    fillColor="red"  // Red tick color
                    // disableBuiltInState={true}  // Prevent text cross out
                    // unfillColor="#FFFFFF"  // Unselected box background
                    textStyle={{ textDecorationLine: 'none' }}  // Prevent crossing out the text
                />
            ))}

            {/* Submit Button */}
            <Button title="Submit" onPress={handleSubmit} />
        </View>
    );
}
