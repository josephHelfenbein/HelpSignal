import { Tabs } from 'expo-router';
import React, { useState } from 'react';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [showSpeakScreen, setShowSpeakScreen] = useState(false);
  const isAuthenticated = true;

  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarStyle: {
          display: route.name === 'speak' ? 'none' : 'flex', // Hide tab bar when the Speak screen is active
          backgroundColor: '#f83e3e',
        },
        headerShown: false, // No header
        tabBarLabelStyle:
        {
          color: '#fff',
          fontSize: 12,
        },
      })}>
      <Tabs.Screen
        name="index"
        options={{
          title: "SOS",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'alert' : 'alert-outline'} color={"#FFFF"} />
          ),
        }}
      />
      <Tabs.Screen
        name="getCertifications"
        options={{
          title: 'Certification',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'add' : 'add-outline'} color={"#FFFF"} />
          ),
        }}
      />
       <Tabs.Screen
        name={isAuthenticated ? "user" : "guest"} // Redirect to guest screen if not authenticated
        options={{
          title: isAuthenticated ? "User" : "Guest",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'person-circle' : 'person-circle-outline'} color={"#FFFF"} />
          ),
        }}
      />
      <Tabs.Screen
        name="speak"
        options={{
          title: 'Speak',
          tabBarButton: () => null, // Hiding speak from the tab bar
        }}
      />
      <Tabs.Screen
        name="skills"
        options={{
          title: 'Skills',
          tabBarButton: () => null, // Hiding skills from the tab bar
        }}
      />
      <Tabs.Screen
        name="responders"
        options={{
          title: 'Responders',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'megaphone' : 'megaphone-outline'} color={"#FFFF"} />
          ),
        }}
      />
    </Tabs>
  );
}