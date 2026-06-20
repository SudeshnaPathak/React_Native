import { View , TouchableOpacity, Text } from 'react-native';
import styles from './Style'
import { Button } from 'react-native-paper';
export default function FilterTabs({ selectedFilter, setSelectedFilter, counts })
{
  const tabs = ['All', 'Pending', 'Completed'];
  return (
    <View style={styles.tabRow}>
      {tabs.map((tab) => (
        <Button 
          key={tab}
          mode={selectedFilter === tab ? 'contained' : 'elevated'}
          onPress={() => setSelectedFilter(tab)}
          labelStyle={{ fontSize: 12, fontWeight: 'bold' , marginHorizontal: 0}}
          style={{ width: 100 }}
        >
          {tab} ({counts[tab]})
        </Button>
      ))}
    </View>
  );
}