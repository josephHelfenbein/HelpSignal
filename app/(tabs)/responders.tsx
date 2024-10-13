import { StyleSheet, View, Text } from 'react-native';
import MapView from 'react-native-maps';

export default function Responders() {
    return (
        <View style={styles.container}>
            <Text style={styles.sos}>S.O.S Patient</Text>

            <View style={styles.infoContainer}>
                <View style={styles.infoRow}>
                    <Text style={styles.label}>Name:</Text>
                    <Text style={styles.info}>John Doe</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.label}>Medical Need:</Text>
                    <Text style={styles.info}>Immediate CPR</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.label}>Location:</Text>
                    <Text style={styles.info}>Boston, MA</Text>
                </View>
            </View>

            {/* Map with custom dimensions */}
            <MapView
                style={styles.map} // Custom style to control the map size
                initialRegion={{
                    latitude: 42.38312,
                    longitude: -71.12595,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, // Adjust to flex the whole screen
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40,
    },
    sos: {
        fontSize: 40,
        color: '#f83e3e', // Soft red
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    infoContainer: {
        width: '100%',
        borderRadius: 20, // Rounded corners
        borderColor: '#f83e3e',
        padding: 20,
        shadowColor: '#000', // Box shadow for depth
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5, // For Android shadow
        marginBottom: 20,
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    label: {
        fontSize: 18,
        color: '#f83e3e', // Soft purple for labels
        fontWeight: '600',
    },
    info: {
        fontSize: 18,
        color: '#000000', // Black color for info
        fontWeight: '400',
    },
    map: {
        width: '100%', // Set the width of the map
        height: 300, // Set the height of the map
        borderRadius: 10, // Optional: round the corners of the map
    },
});
