import { Text, Button, ScrollView, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
 
const ScrollEventDemo = () => {
    const [showButton, setShowButton] = useState(false);
    function handleScroll(event) {
        const offsetY = event.nativeEvent.contentOffset.y;
        console.log('Scroll offset:', offsetY);
        if (offsetY > 100) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    }
    return (
            <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <ScrollView
                    style={styles.scrollView}
                    onScroll={handleScroll}
                    scrollEventThrottle={16}
                    showsVerticalScrollIndicator={true}
                    persistentScrollbar={true}
                >
                    {[...Array(50).keys()].map((item) => (
                        <Text key={item}>Item {item}</Text>
                    ))}
                </ScrollView>
                {
                    showButton && (
                        <Button title="Scroll to Top" onPress={() =>
                            alert('Scroll to Top button pressed')
                        } />
                    )
                }
            </SafeAreaView>
            </SafeAreaProvider>
    );
 
};
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        flex: 1,
    },
});
 
export default ScrollEventDemo;