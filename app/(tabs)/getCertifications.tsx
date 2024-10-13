import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, ActivityIndicator, Dimensions } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const { width } = Dimensions.get('window');  // Get device screen width for card sizing

const COURSERA_API_KEY = 'kEVtN1LrKW6pL82lQsyBoDl45tW1WLRWqKyITfrXAvFUKvuc';
const COURSERA_API_URL = 'https://api.coursera.org/api/courses.v1?q=search&query=health';

// Define the Course type
type Course = {
    id: string;
    name: string;
    description: string;
};

export default function GetCertifications() {
    const [courses, setCourses] = useState<Course[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    // Fetch Coursera Health-Related Courses
    const fetchCourses = async () => {
        try {
            const response = await fetch(COURSERA_API_URL, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${COURSERA_API_KEY}`,
                },
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log('API Response:', data);  // Log the full response to inspect structure

            // Map over the courses (without filtering initially)
            const coursesData: Course[] = data.elements.map((item: any) => ({
                id: item.id,
                name: item.name || 'No title available',
                description: item.description || 'No description available',
            }));

            setCourses(coursesData);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching Coursera courses:', error);
            setError(true);  // Set error flag if API call fails
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCourses();
    }, []);

    // Display Loading Spinner while fetching data
    if (loading) {
        return (
            <View style={styles.centered}>
                <ActivityIndicator size="large" color="#f83e3e" />
                <Text style={styles.errorText}>Loading courses...</Text>
            </View>
        );
    }

    // If there's an error, display an error message
    if (error) {
        return (
            <View style={styles.centered}>
                <Text style={styles.errorText}>Failed to load courses. Please try again later.</Text>
            </View>
        );
    }

    // If no courses are found, display a fallback message
    if (courses.length === 0 && !loading) {
        return (
            <View style={styles.centered}>
                <Text style={styles.errorText}>No health-related courses found.</Text>
            </View>
        );
    }

    // Render health-related Coursera courses
    return (
        <View>
            <Ionicons name="menu" size={30} style={styles.menuIcon} />
            <Ionicons name="settings" size={30} style={styles.settingsIcon} />
            <View style={styles.redBox}>
                <Text style={styles.become}>Become A</Text>
            </View>
            <Text style={styles.responder}>Responder</Text>
            <View style={styles.box}>
                <Text style={styles.marketing}>Gain your own certification</Text>
                <Text style={styles.marketing}>by studying the health-related courses below!</Text>
            </View>

            <FlatList
                data={courses}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => console.log(`Course clicked: ${item.name}`)}>
                        <View style={styles.courseCard}>
                            <Text style={styles.courseTitle}>{item.name}</Text>
                            <Text style={styles.courseDescription}>{item.description}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                horizontal  // Makes the list horizontal
                showsHorizontalScrollIndicator={false}  // Hides the scroll bar
                snapToAlignment="center"  // Snaps each card to center
                decelerationRate="fast"  // Faster swiping motion
                snapToInterval={width * 0.8 + 20}  // Snap each card to screen width
                contentContainerStyle={styles.horizontalFlatList}  // Additional styling for spacing
            />
        </View>
    );
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: '#f83e3e',
        top: 100,
        height: 57,
    },
    marketing: {
        color: '#FFFFFF',
        left: 20,
        fontSize: 15,
        top: 10,
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
    courseCard: {
        top: 80,
        width: width * 0.8,  // 80% of screen width for card size
        height: 400,  // Set height for the card
        marginRight: 20,
        padding: 20,
        backgroundColor: '#FFF',
        borderRadius: 16,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        justifyContent: 'center',  // Center content
        alignItems: 'center',
    },
    courseTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',  // Center title
    },
    courseDescription: {
        fontSize: 16,
        color: '#555',
        textAlign: 'center',  // Center description
    },
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorText: {
        fontSize: 16,
        color: 'red',
    },
    horizontalFlatList: {
        paddingLeft: 40,  // Adjusted paddingLeft for more horizontal centering
        paddingRight: 40,  // Add padding to the right for better horizontal centering
        paddingTop: 50,  // Add padding to move the list down
        paddingBottom: 20,  // Optional, for better spacing vertically
    },
});
