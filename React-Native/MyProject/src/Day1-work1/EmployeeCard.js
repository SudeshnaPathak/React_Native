import { Text, View , StyleSheet } from 'react-native'

export default function EmployeeCard({ name, salary }) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}> 🥸Name: {name} </Text>
      <Text> 💰Salary: {salary} </Text>
    </View>
    )
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'column',
        alignItems: 'start',
        justifyContent: 'center',
        backgroundColor: 'lightpink',
        padding: 10,
        margin: 10,
        borderRadius: 20
    },
    name : {
        fontWeight: 'bold',
        fontSize: 15
    }})
