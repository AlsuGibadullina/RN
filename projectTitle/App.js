import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

const App = () => {
  const [pressedCount, setPressedCount] = useState(0);

  const handlePress = () => {
      setPressedCount(pressedCount+1);
    };

  const handleReset = () => {
      setPressedCount(0);
    };
  
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={{ margin: 16 }}>
          {pressedCount > 0
            ? `The button was pressed ${pressedCount} times!`
            : 'The button isn\'t pressed yet'
          }
        </Text>
        <Button
          title='Press me'
          onPress={handlePress}
          disabled={pressedCount>=3 ? true : false}
        />

        <Button
          color='orange'
          title='Reset counter'
          onPress={handleReset}
        />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});


export default App;
