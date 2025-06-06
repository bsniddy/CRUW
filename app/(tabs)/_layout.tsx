import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          height: 70,
          position: 'absolute',
          left: 10,
          right: 10,
          bottom: 10,
          backgroundColor: '#f2f2f2',
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: 'people' | 'people-outline' | 'add-circle' | 'add-circle-outline' | 'home' | 'home-outline' | 'person' | 'person-outline' | 'calendar' | 'calendar-outline' | undefined;

          let iconColor = focused ? '#444' : '#bbb';
          if (route.name === 'groups') {
            iconName = focused ? 'people' : 'people-outline';
          } else if (route.name === 'add') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          } else if (route.name === 'index') {
            iconName = focused ? 'home' : 'home-outline';
            iconColor = focused ? '#444' : '#bbb';
          } else if (route.name === 'profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'calendar') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          }
          return <Ionicons name={iconName ?? 'home-outline'} size={32} color={iconColor} />;
        },
      })}
    >
      <Tabs.Screen name="groups" options={{headerShown: false}} />
      <Tabs.Screen name="add" options={{headerShown: false}} />
      <Tabs.Screen name="index" options={{headerShown: false}} />
      <Tabs.Screen name="profile" options={{headerShown: false}} />
      <Tabs.Screen name="calendar" options={{headerShown: false}} />
    </Tabs>
  );
}
