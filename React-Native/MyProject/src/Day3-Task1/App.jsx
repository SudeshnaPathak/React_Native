import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './Header'
import QuoteSection from './QuoteSection'
import ProfileCard from './ProfileCard'
import SummaryCards from './SummaryCards'
import RecentActivity from './RecentActivity'

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.mainContainer}>
        <View style={styles.summary}>
            <ProfileCard />
            <SummaryCards />
            <QuoteSection />
        </View>
        <RecentActivity />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    mainContainer: {
        flex: 1,
        flexDirection: 'row',
        padding: 20,
        gap: 20,
    },
    summary: {
       flex: 5, 
    }
})