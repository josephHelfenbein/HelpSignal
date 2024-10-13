import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Picker } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function User() {
  const [isLogin, setIsLogin] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false); // New state for Sign Up

  // New state for additional fields
  const [firstName, setFirstName] = useState(''); // First Name state
  const [lastName, setLastName] = useState('');   // Last Name state
  const [dobDay, setDobDay] = useState('');       // Day state
  const [dobMonth, setDobMonth] = useState('');    // Month state
  const [dobYear, setDobYear] = useState('');      // Year state

  const handleLoginPress = () => {
    setIsLogin(true);
    setIsSignUp(false);
  };

  const handleSignUpPress = () => {
    setIsSignUp(true);
    setIsLogin(false);
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#f83e3e', dark: '#f83e3e' }}
      headerImage={
        <View style={styles.headerImageContainer}>
          <Ionicons size={250} name="person-circle" style={styles.headerImage} />
          <Ionicons name="menu" size={30} style={styles.menuIcon} />
          <Ionicons name="settings" size={30} style={styles.settingsIcon} />
        </View>
      }
    >
      <View style={styles.contentContainer}>
        {!isLogin && !isSignUp && (
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.signupButton} onPress={handleSignUpPress}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Login Form */}
        {isLogin && (
          <View style={styles.formContainer}>
            <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
            <TextInput style={styles.input} placeholder="Password" secureTextEntry />
            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <Text style={styles.orText}>OR</Text>
            <TouchableOpacity style={styles.signupButton} onPress={handleSignUpPress}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Sign Up Form */}
        {isSignUp && (
          <View style={styles.formContainer}>
            <View style={styles.nameContainer}>
              <TextInput
                style={styles.input}
                placeholder="First Name"
                value={firstName}
                onChangeText={setFirstName}
              />
              <TextInput
                style={styles.input}
                placeholder="Last Name"
                value={lastName}
                onChangeText={setLastName}
              />
            </View>
            <TextInput
              style={styles.input}
              placeholder="Email"
              keyboardType="email-address"
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
            />
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              secureTextEntry
            />
            <View style={styles.dobContainer}>
              <Picker
                selectedValue={dobDay}
                style={styles.picker}
                onValueChange={(itemValue: React.SetStateAction<string>) => setDobDay(itemValue)}
              >
                <Picker.Item label="DD" value="" />
                {/* Add options for days 1-31 */}
                {[...Array(31)].map((_, i) => (
                  <Picker.Item key={i} label={`${i + 1}`} value={`${i + 1}`} />
                ))}
              </Picker>
              <Picker
                selectedValue={dobMonth}
                style={styles.picker}
                onValueChange={(itemValue: React.SetStateAction<string>) => setDobMonth(itemValue)}
              >
                <Picker.Item label="MM" value="" />
                {/* Add options for months 1-12 */}
                {[...Array(12)].map((_, i) => (
                  <Picker.Item key={i} label={`${i + 1}`} value={`${i + 1}`} />
                ))}
              </Picker>
              <Picker
                selectedValue={dobYear}
                style={styles.picker}
                onValueChange={(itemValue: React.SetStateAction<string>) => setDobYear(itemValue)}
              >
                <Picker.Item label="YYYY" value="" />
                {/* Add options for years, e.g., 1900 to the current year */}
                {Array.from({ length: new Date().getFullYear() - 1900 + 1 }, (_, i) => (
                  <Picker.Item key={i} label={`${new Date().getFullYear() - i}`} value={`${1900 + i}`} />
                ))}
              </Picker>
            </View>
            <TouchableOpacity style={styles.signupButton}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            <Text style={styles.orText}>OR</Text>
            <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </ParallaxScrollView>
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
  menuIcon: {
    position: 'absolute',
    top: 50,
    left: 20,
    color: '#ffffff', // White icon
  },
  settingsIcon: {
    position: 'absolute',
    top: 50,
    right: 20,
    color: '#ffffff', // White icon
  },
  headerImage: {
    top: 70,
    color: '#ffffff', // White user icon
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0, // Adjust margin to move buttons down
  },
  buttonContainer: {
    marginTop: 20, // Adjust margin to move buttons down the page
  },
  loginButton: {
    backgroundColor: '#f83e3e', // Red color for the button
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 5,
    marginBottom: 50,
    justifyContent: 'center', // Center the content vertically
    alignItems: 'center', // Center the content horizontally
  },
  signupButton: {
    backgroundColor: '#00aaff', // Blue color for the button
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 5,
    justifyContent: 'center', // Center the content vertically
    alignItems: 'center', // Center the content horizontally
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center', // Make sure the text itself is centered
  },
  formContainer: {
    width: '80%',
    alignItems: 'center',
    marginTop: 10, // Optional: Add some margin at the top of the form
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 15,
    marginTop: 5,
    borderRadius: 5,
  },
  orText: {
    marginVertical: 20,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#7f7f7f',
  },
  nameContainer: { // New style for the name input fields
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  dobContainer: { // New style for the date of birth fields
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 15, // Optional: Add space below the DOB fields
  },
  picker: {
    height: 40,
    width: '30%', // Adjust width as needed
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
});