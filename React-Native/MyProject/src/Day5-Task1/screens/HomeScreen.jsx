import { StyleSheet, Text, View, Button } from 'react-native'; 
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import SummaryCard from '../components/SummaryCard';
import SectionHeader from '../components/SectionHeader'; // Removed unused react-native-paper import

export default function HomeScreen({ navigation }) {
    const { user, requests, announcements } = useContext(AppContext);
    
    const pendingCount = requests.filter(request => request.status === 'Pending').length;
    
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, {user.name}!</Text>
      <Text style={styles.subtitle}>Flat No: {user.flatNo}</Text>
      
      <View style={styles.summaryRow}>
        <SummaryCard title="Pending Requests" count={pendingCount} color="#fdd59e" />
        <SummaryCard title="Active Notices" count={announcements.length} color="#f49e9a" />
      </View>
      
      <SectionHeader title="Quick Actions" />

      <Button 
          title="Add New Request" 
          onPress={() => navigation.navigate('Add Request')} 
        />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#F2F2F7', 
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#1C1C1E',
    },
    subtitle: {
        fontSize: 18,
        color: '#666',
        marginBottom: 20,
    },
    summaryRow: {
        flexDirection: 'row',
        marginBottom: 20,
    }
});
