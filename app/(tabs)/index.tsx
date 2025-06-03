import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, StatusBar, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Stars Row */}
      <View style={styles.starsRow}>
        <Ionicons name="star-outline" size={40} color="#888" />
        <Ionicons name="star" size={40} color="#444" />
        <Ionicons name="star-outline" size={40} color="#888" />
        <Ionicons name="star" size={40} color="#444" />
        <Ionicons name="star" size={40} color="#444" />
      </View>

      {/* Date Navigation */}
      <View style={styles.dateNav}>
        <TouchableOpacity>
          <Ionicons name="chevron-back" size={28} color="#222" />
        </TouchableOpacity>
        <Text style={styles.todayText}>TODAY</Text>
        <TouchableOpacity>
          <Ionicons name="chevron-forward" size={28} color="#222" />
        </TouchableOpacity>
      </View>

      {/* Sections */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>PERSONAL</Text>
        <View style={styles.tasks}>
          <Text style={styles.task}>Run five miles</Text>
          <Text style={styles.task}>Run five miles</Text>
          <Text style={styles.task}>Run five miles</Text>
          <Text style={[styles.task, styles.taskDone]}>Run five miles</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>VALPALS</Text>
      <Text style={styles.sectionTitle}>UNITED</Text>
      <Text style={styles.sectionTitle}>GRIT</Text>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  menuButton: {
    padding: 5,
  },
  content: {
    flex: 1,
  },
  featuredSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 15,
    color: '#000',
  },
  featuredCard: {
    backgroundColor: '#f8f9fa',
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  featuredTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    color: '#000',
  },
  featuredDescription: {
    fontSize: 14,
    color: '#666',
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  actionButton: {
    alignItems: 'center',
  },
  actionText: {
    marginTop: 5,
    color: '#007AFF',
    fontSize: 12,
  },
  recentSection: {
    padding: 20,
  },
  recentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  recentItemIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  recentItemContent: {
    flex: 1,
  },
  recentItemTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
    marginBottom: 4,
  },
  recentItemDescription: {
    fontSize: 14,
    color: '#666',
  },
  starsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
    gap: 8,
  },
  dateNav: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    gap: 16,
  },
  todayText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginHorizontal: 10,
    letterSpacing: 1,
  },
  section: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 30,
  },
  tasks: {
    marginTop: 8,
    width: '80%',
  },
  task: {
    fontSize: 20,
    marginVertical: 4,
    textAlign: 'left',
  },
  taskDone: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
});
