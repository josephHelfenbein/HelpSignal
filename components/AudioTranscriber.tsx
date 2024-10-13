import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ExpoSpeechRecognitionModule, useSpeechRecognitionEvent } from 'expo-speech-recognition';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    text: {
      fontSize: 24,
      marginBottom: 20,
    },
    microphoneButton: {
      width: 100,
      height: 100,
      borderRadius: 50,
      backgroundColor: 'red',
      justifyContent: 'center',
      alignItems: 'center',
    },
    backButton: {
      position: 'absolute',
      top: 10,
      left: 10,
      padding: 10,
    },
  });  

export default function AudioTranscriber () {
  const [recognizing, setRecognizing] = useState(false);
  const [transcript, setTranscript] = useState("");
  useSpeechRecognitionEvent("start", () => setRecognizing(true));
  useSpeechRecognitionEvent("end", () => setRecognizing(false));
  useSpeechRecognitionEvent("result", (event) => {
    setTranscript(event.results[0]?.transcript);
  });
  useSpeechRecognitionEvent("error", (event) => {
    console.log("error code:", event.error, "error messsage:", event.message);
  });
  const handleStart = async () =>{
    const result = await ExpoSpeechRecognitionModule.requestPermissionsAsync();
    if (!result.granted) {
      console.warn("Permissions not granted", result);
      return;
    }
    ExpoSpeechRecognitionModule.start({
      lang: "en-US",
      interimResults: true,
      maxAlternatives: 1,
      continuous: false,
      requiresOnDeviceRecognition: false,
      addsPunctuation: false
    });
  };
  const sendTranscriptionToCloudflare = async (transcription: string) => {
    try {
      const response = await fetch('https://helpsignal-vectors.josephhelfenbein.workers.dev/transcribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: transcription }),
      });
      const result = await response.json();
      console.log('Response from Cloudflare: ', result);
    } catch (error) {
      console.error('Error sending transcription to Cloudflare: ', error);
    }
  };
  const stopAndSendTranscription = async () => {
    ExpoSpeechRecognitionModule.stop();
    await sendTranscriptionToCloudflare(transcript);
    setRecognizing(false);
  };
  useEffect(() => {
    ExpoSpeechRecognitionModule.getPermissionsAsync().then((result) => {
      console.log("Initial Permissions status:", result.status);
    });
  }, []);

  return (
    <View>
        <TouchableOpacity onPress={recognizing? stopAndSendTranscription : handleStart} style={styles.microphoneButton}>
          <Ionicons name="mic" size={recognizing?75:100} color="white" />
        </TouchableOpacity>
        <Text>{transcript}</Text>
    </View>
  );
}