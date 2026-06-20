import { Text, View } from 'react-native'
import EmployeeCard from './EmployeeCard'
import { StyleSheet } from 'react-native'

export default function App() {
  return (
    <View style = { styles.container }>
      <EmployeeCard name="Sudeshna" salary={50000} />
      <EmployeeCard name="John" salary={60000} />
      <EmployeeCard name="Jane" salary={55000} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
