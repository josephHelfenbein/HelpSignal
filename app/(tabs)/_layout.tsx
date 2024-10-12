import { Tabs } from 'expo-router';
import React, { useState } from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [showSpeakScreen, setShowSpeakScreen] = useState(false);

  return (
    <Tabs
    screenOptions={({ route }) => ({
      tabBarStyle: {
        display: route.name === 'speak' ? 'none' : 'flex', // Hide tab bar when the Speak screen is active
      },
      headerShown: false, // No header
      })}>
      <Tabs.Screen
        name="index"
        options={{
          title: "SOS",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'alert' : 'alert-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="getCertifications"
        options={{
          title: 'Certification',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="user"
        options={{
          title: "User",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'person-circle' : 'person-circle-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="speak"
        options={{
          title:'Speak',
          tabBarButton: () => null, // Hiding speak from the tab bar
        }}
      />
    </Tabs>
  );
}