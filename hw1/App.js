import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const App = () => {
  const [name, setName] = useState('');
  const [showName, setShowName] = useState(false);

  const handleClick = () => {
    setShowName(true);
  }
  
  return (
   <View style={styles.container}>
    <Text style={{ marginVertical: 16 }}>
      {showName ? `Hi ${name}!` : 'What is your name?'}
    </Text>
    <TextInput
      style={{ padding: 8, backgroundColor: '#f5f5f5' }}
      onChangeText={text => setName(text)}
    />
    <Button
      onPress={handleClick}
      title='Send'
    />
   </View>
   );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    padding: 16,
  }
});


export default App;
