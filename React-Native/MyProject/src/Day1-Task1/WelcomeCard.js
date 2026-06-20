import { View, Text } from 'react-native';
import styles from './Style'
import { Avatar } from 'react-native-paper';

export default function WelcomeCard({ userName, pendingCount })
{
  return(
    <View style={styles.welcomeBanner}>
     <Avatar.Text size={40} label={userName[0]} />
    <View>
        <Text style={styles.welcomeTitle}>Hello, {userName}!</Text>
        <Text style={styles.welcomeSub}>You have {pendingCount} tasks left to complete.</Text>
      </View>
    </View>
  )
}