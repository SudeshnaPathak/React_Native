import { StyleSheet, View } from 'react-native'
import { Text, Card } from 'react-native-paper';
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SafeAreaView, ScrollView } from 'react-native-web';

export default function DailyTips() {
  const [scrollPosition, setScrollPosition] = React.useState(0);
  const tips = [
    'Drink more water', 
    'Take regular breaks', 
    'Exercise daily', 
    'Eat healthy food', 
    'Sleep well', 
    'Reduce screen time', 
    'Practice meditation', 
    'Stay positive', 
    'Walk 10 minutes daily', 
    'Maintain proper posture'
  ];
  return (
    <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
        <Text variant="headlineMedium">Daily Wellness Tips</Text>
        <Text variant="titleLarge">Scroll Position: {scrollPosition}</Text>
        <ScrollView
        style={styles.scrollView}
        scrollEventThrottle={16}
        onScroll={(event) => {setScrollPosition(event.nativeEvent.contentOffset.y)}}>
         {tips.map((tip) => (
          <Card 
          mode="elevated"
          style={styles.card}>
            <Card.Content>
              <Text variant="titleMedium">{tip}</Text>
            </Card.Content>
          </Card>
        ))}
        </ScrollView>
        </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginTop: 20,
    },
    card: {
        padding: 10,
        margin: 10,
        backgroundColor: '#fae1f5',
        alignItems: 'center',
    },
    scrollView: {
        flex: 1,
        marginTop: 20,
    }
})