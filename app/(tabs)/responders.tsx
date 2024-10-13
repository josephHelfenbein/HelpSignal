import { StyleSheet, View, Text } from 'react-native';

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

            <View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
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
        color: '#5D4037', // Brownish color for info
        fontWeight: '400',
    },
});
