import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";

interface MedicalEquipment {
    name: string;
    details: string;
}

export default function Skills() {
    // State to track the selected checkboxes
    const [selectedItems, setSelectedItems] = useState<MedicalEquipment[]>([]);

    // Sample list of medical equipment items (checkbox labels)
    const medicalEquipmentList: MedicalEquipment[] = [
        { name: 'EPIPen', details: 'Emergency epinephrine injection for severe allergic reactions' },
        { name: 'Inhaler', details: 'Device delivering medication to alleviate breathing issues' },
        { name: 'Portable Oxygen Concentrator', details: 'Portable device providing supplemental oxygen therapy' }
    ];

    // Function to handle checkbox selection/deselection
    const handleCheckboxChange = (isChecked: boolean, item: MedicalEquipment) => {
        if (isChecked) {
            // Add selected item to the state
            setSelectedItems([...selectedItems, item]);
        } else {
            // Remove unselected item from the state
            setSelectedItems(selectedItems.filter(i => i.name !== item.name));
        }
    };

    // Function to submit the selected items as a JSON string
    const handleSubmit = () => {
        const jsonString = JSON.stringify(selectedItems);
        console.log(jsonString); // Here you can send the jsonString to the backend
        // Example: make a POST request to the server with the jsonString
        // fetch('/submit', { method: 'POST', body: jsonString });
    };

    return (
        <View style={{ padding: 20 }}>
            <Text>Select your medical equipment:</Text>

            {medicalEquipmentList.map((item, index) => (
                <BouncyCheckbox
                    key={index}
                    text={item.name}
                    onPress={(isChecked: boolean) => handleCheckboxChange(isChecked, item)} // Add explicit type for isChecked
                />
            ))}

            {/* Submit Button */}
            <Button title="Submit" onPress={handleSubmit} />
        </View>
    );
}
