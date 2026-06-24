// RecentActivity.js
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons' // ADDED: Missing import

export default function RecentActivity() {
    const activities = [
      {title: 'Project Alpha Completed', time: '2 hours ago', icon: 'check-circle', color: 'green'},
      {title: 'New Task Added', time: '5 hours ago', icon: 'plus-circle', color: 'blue'},
      {title: 'Design Review Done', time: '1 day ago', icon: 'eye', color: 'purple'},
      {title: 'Meeting with Team', time: '2 days ago', icon: 'users', color: 'orange'},
      {title: 'Bug Fixed', time: '3 days ago', icon: 'bug', color: 'red'},
    ];
  return (
    <View style={styles.activityPanel}>
      <Text style={styles.header}>Recent Activity</Text>
      <View style={styles.listWrapper}>
        {activities.map((activity, index) => (
          <View key={index} style={styles.row}>
            <View style={styles.activity}>
              <FontAwesome name={activity.icon} size={20} color={activity.color} />
              <Text style={styles.activityTitle}>{activity.title}</Text>
            </View>
            <Text style={styles.timeText}>{activity.time}</Text>
          </View>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    activityPanel: {
        flex: 4, // Column size balance
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 24,
        elevation: 2,
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0', // Clean separation lines instead of block boxes
    },
    activity: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    activityTitle: {
        fontSize: 15,
        fontWeight: '500',
    },
    timeText: {
        fontSize: 13,
        color: '#888',
    }
})
