import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Modal } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import Ionicons from '@expo/vector-icons/Ionicons';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

export default function Guest() {
<<<<<<< HEAD
  const [isLogin, setIsLogin] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [firstName, setFirstName] = useState(''); // First Name state
  const [lastName, setLastName] = useState('');   // Last Name state
=======
    const [isLogin, setIsLogin] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);
	const [email, setUsername] = useState('');
	const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    let doubleClick = -1;
>>>>>>> 655172fb245775bf7495144af648727be3520697

  const axiosConfig = axios.create({
    baseURL: "https://2024-hackharvard-flask.vercel.app/api/",
    headers: {
      "Content-Type": "application/json",
    }
  });

  const navigation = useNavigation(); // Get the navigation object

  const handleLoginPress = () => {
    setIsLogin(true);
    setIsSignUp(false);
    // Handle login logic here...
  };

<<<<<<< HEAD
  const handleSignUpPress = () => {
    setIsSignUp(true);
    setIsLogin(false);
    // Handle signup logic here...
  };

  return (
    <View style={styles.container}>
      {/* <TouchableOpacity style={styles.settingsButton} onPress={() => navigation.navigate('skills')}>
                <Ionicons name="settings" size={30} style={styles.settingsIcon} />
            </TouchableOpacity> */}

      <ParallaxScrollView
        headerBackgroundColor={{ light: '#f83e3e', dark: '#f83e3e' }}
        headerImage={
          <View style={styles.headerImageContainer}>
            <Ionicons size={250} name="person-circle" style={styles.headerImage} />
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
=======
        if (doubleClick != 0) {
            doubleClick = 0;
            return;
        }

        if (!email.includes('@')) {
            alert("Invalid email\n")
            return;
        }
        
        axiosConfig.post('/login', {
            "email": email,
            "password": SHA256(password).toString()
        }).then((response) => {
            let token = response.data.token;
            let user = response.data.user;
            AsyncStorage.setItem('token', token);
            AsyncStorage.setItem('user', user);
        }).catch((error) => {
            console.log(error);
        })
    };

    const handleSignUpPress = () => {
        setIsSignUp(true);
        setIsLogin(false);

        if (doubleClick != 1) {
            doubleClick = 1;
            return;
        }

        let msg = "";
        let invalid = false;
        if (email.includes('@') === false) {
            invalid = true;
            msg += "Invalid email\n";
        }

        let passwordMessage = "";
        let firstPasswordInvalid = false;

        if (password.length < 8) {
            invalid = true;
            if (firstPasswordInvalid === false) {
                passwordMessage += "Password must be at least 8 characters long";
                firstPasswordInvalid = true;
            }
        }

        if (password.search(/[a-z]/) < 0) {
            invalid = true;
            if (firstPasswordInvalid === false) {
                passwordMessage += "Password must contain at least one lowercase letter";
                firstPasswordInvalid = true;
            }
            else {
                passwordMessage += ", one lowercase letter";
            }
        }

        if (password.search(/[A-Z]/) < 0) {
            invalid = true;
            if (firstPasswordInvalid === false) {
                passwordMessage += "Password must contain at least one uppercase letter";
                firstPasswordInvalid = true;
            }
            else {
                passwordMessage += ", one uppercase letter";
            }
        }

        if (password.search(/[0-9]/) < 0) {
            invalid = true;
            if (firstPasswordInvalid === false) {
                passwordMessage += "Password must contain at least one number";
                firstPasswordInvalid = true;
            }
            else {
                passwordMessage += ", one number";
            }
        }

        if (password.search(/[^a-zA-Z0-9]/) < 0) {
            invalid = true;
            if (firstPasswordInvalid === false) {
                passwordMessage += "Password must contain at least one special character";
                firstPasswordInvalid = true;
            }
            else {
                passwordMessage += ", one special character";
            }
        }
        
        if (!invalid && password !== password2) {
            invalid = true;
            msg += "Passwords do not match\n";
        }

        if (invalid) {
            alert(msg + "\n" + passwordMessage);
            return;
        }

        axiosConfig.post('/signup', {
            "email": email,
            "password": SHA256(password).toString(),
        }).then((response) => {
            let token = response.data.token;
            let id = response.data.id;
            AsyncStorage.setItem('token', token);
            AsyncStorage.setItem('id', id);
        }).catch((error) => {
            console.log(error);
        });
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
                            value={email}
                            onChangeText={setUsername}
                            keyboardType="email-address"
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Confirm Password"
                            value={password2}
                            onChangeText={setPassword2}
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
>>>>>>> 655172fb245775bf7495144af648727be3520697
            </View>
          )}
          {/* Log In Form */}
          {isLogin && (
            <View style={styles.formContainer}>
              <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setUsername}
                keyboardType="email-address"
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
              <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
              <Text style={styles.orText}>OR</Text>
              <TouchableOpacity style={styles.signupButton} onPress={() => setIsSignUp(true)}>
                <Text style={styles.buttonText}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          )}
          {/* Sign Up Form */}
          {isSignUp && (
            <View style={styles.formContainer}>

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
              <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setUsername}
                keyboardType="email-address"
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
              <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                value={password2}
                onChangeText={setPassword2}
                secureTextEntry
              />

              <TouchableOpacity style={styles.signupButton}>
                <Text style={styles.buttonText}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </ParallaxScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  headerImageContainer: {
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f83e3e',
  },
  settingsIcon: {
    color: '#ffffff',
  },
  settingsButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    zIndex: 10,
    color: '#ffffff',
  },
  headerImage: {
    top: 70,
    color: '#ffffff',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
  },
  buttonContainer: {
    marginTop: 20,
  },
  loginButton: {
    backgroundColor: '#f83e3e',
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 5,
    marginBottom: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupButton: {
    backgroundColor: '#00aaff',
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  formContainer: {
    width: '80%',
    alignItems: 'center',
    marginTop: 10,
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
    justifyContent: 'center',
  },
  calendarModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  closeButton: {
    backgroundColor: '#f83e3e',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  orText: { marginVertical: 20, fontSize: 16, fontWeight: 'bold', color: '#7f7f7f' },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  label: { fontSize: 16, fontWeight: 'bold', marginBottom: 10 },
});
