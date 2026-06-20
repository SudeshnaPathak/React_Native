import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Checkbox, Text} from 'react-native-paper';
import MaterialIcon from '@react-native-vector-icons/material-design-icons'

export default function TaskItem({item, onToggleTask, onDeleteTask}) {
  return (
    <View style = {[styles.taskItem, item.completed && styles.activeTask]}>
        <View style={styles.taskdesc}>
        <Checkbox
            status={item.completed ? 'checked' : 'unchecked'}
            onPress={() => onToggleTask(item.id)}
            color='#4CAF50'
            uncheckedColor='#72088d'
            ></Checkbox>
            <View>
                <Text
                variant="titleMedium"
                style={[item.completed && styles.activeTaskText]}>
                    {item.title}
                </Text>
                <View style={styles.dateRow}>
                    <MaterialIcon name="calendar-blank" color="grey" size={20} />
                    <Text
                        variant="bodySmall"
                        style={{ color: 'grey' }}
                    >
                        {item.date}
                    </Text>
                </View>
            </View>
        </View>
        <MaterialIcon name="trash-can-outline" size={25} color={'red'} onPress={() => onDeleteTask(item.id)} />
    </View>
  )
}

const styles = StyleSheet.create({
    taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#F5F2FC',
    padding: 10,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    },
    dateRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        marginTop: 8
    },
    taskdesc: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    activeTaskText: {
        textDecorationLine: 'line-through',
        color: 'grey'
    },
    activeTask: {
        backgroundColor: '#e4fce4'
    }
})