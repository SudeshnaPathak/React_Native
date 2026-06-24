import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import React from 'react'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function SummaryCards() {
  const summaries = [
  { label: 'Total Tasks', value: '120', subLabel: 'All Tasks', color: '#EEF2FF', iconColor: '#4F46E5', iconName: 'clipboard-list' },
  { label: 'Completed Tasks', value: '85', subLabel: 'This Month', color: '#ECFDF5', iconColor: 'green', iconName: 'check-circle' },
  { label: 'Reward Points', value: '540', subLabel: 'Total Points', color: '#FFF7ED', iconColor: '#F59E0B', iconName: 'trophy' },
];
  return (
    <View style={styles.container}>
     <Text variant='headlineMedium'>Summary</Text>
    <View style={styles.cardcontainer}>
      {summaries.map((summary) => (
        <View key={summary.label} style={[styles.cardItem,
            {
            backgroundColor: summary.color
            }]}>
         <FontAwesome5 name={summary.iconName} size={24} color={summary.iconColor} />
          <Text style={{ fontSize: 14}}>{summary.label}</Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold'}}>{summary.value}</Text>
          <Text style={{ fontSize: 12}}>{summary.subLabel}</Text>
        </View>
      ))}
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
     container: {
        flex: 1,
        padding: 10,
        margin: 10,
        boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
        borderRadius: 5,
    },
    cardcontainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    cardItem: {
        flex: 1,
        flexDirection: 'column',
        gap: 5,
        padding: 15,
        margin: 5,
        alignItems: 'center',
        borderRadius: 10,
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    }
})