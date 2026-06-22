import React from 'react';
import { View, Text, Platform } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const InsetsDemo = () => {
    return (
        <SafeAreaProvider>
        <SafeAreaView>
             { Platform.OS === 'ios' ? <Text>This is an iOS platform</Text> : <Text>This is an Android platform</Text>}
             <Text>Current platForm {Platform.OS}</Text>
        </SafeAreaView>
        </SafeAreaProvider>
    );
};

export default InsetsDemo;
