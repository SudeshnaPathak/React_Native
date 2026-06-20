import { View , Text , TouchableOpacity } from 'react-native';
import { Button , MD3Colors } from 'react-native-paper';
import styles from './Style'
export default function Header({ onPlusPress })
{
  return(
    <View style={styles.header}>
    <Text style={styles.headerTitle}>My Tasks</Text>
    <Button
    icon="plus"
    textColor="white"
    mode="text"
    size={40}
    onPress={onPlusPress}
    style={{ position: 'absolute', right: 5 }}
  />
    </View>
  )
}