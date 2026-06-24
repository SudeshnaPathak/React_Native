import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function ProfileCard() {
  const userData = 
  {
  name: 'John Doe',
  email: 'john.doe@email.com',
  stats: { projects: 28, tasks: 120, awards: 12 },
};
  return (
    <View style={styles.card}>
      <View style={styles.profileHeader}>
        <Image 
          source={require('../../assets/avatar.png')} 
          style={styles.avatar} 
        />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>{userData.name}</Text>
          <Text style={styles.email}>{userData.email}</Text>
        </View>
      </View>
      <View style={styles.statsContainer}>
        <View style={styles.stat}>
           <Entypo name="folder" size={24} color="#5a61f5" />
           <View>
                <Text style={styles.statValue}>{userData.stats.projects}</Text>
                <Text style={styles.statLabel}>Projects</Text>
            </View>
        </View>
        <View style={styles.stat}>
            <FontAwesome5 name="calendar-check" size={24} color="green" />
            <View>
                <Text style={styles.statValue}>{userData.stats.tasks}</Text>
                <Text style={styles.statLabel}>Tasks</Text>
            </View>
        </View>
        <View style={styles.stat}>
          <FontAwesome5 name="trophy" size={24} color="#F59E0B" />
          <View>
            <Text style={styles.statValue}>{userData.stats.awards}</Text>
            <Text style={styles.statLabel}>Awards</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 24,
        marginBottom: 20,
        boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
    },
    profileHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    profileInfo: {
        marginLeft: 20,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    email: {
        fontSize: 14,
        color: '#666',
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 15,
    },
    stat: {
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10,
    },
    statValue: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    statLabel: {
        fontSize: 12,
        color: '#666',
        fontWeight: 'bold',
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
    }
})