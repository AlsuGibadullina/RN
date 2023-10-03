import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const App = () => {
  const login = 'Login';
  const password = 'Password';
  const [log, setLog] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState(false);
  const [showForm, setShowForm] = useState(true);

  const handleClick = () => {
    if (log===login && pass===password) {
      setError(false);
      setShowForm(false);
    }
    else {
      setError(true)
    }
  }
  
  return (
   <View style={styles.container}>
    {showForm ? (
      <>
      <Text style={{ marginVertical: 16, color: 'red' }}>
        {error && 'Wrong login or password'}
      </Text>
      <TextInput
        style={{ padding: 8, backgroundColor: '#f5f5f5' }}
        placeholder='Login'
        onChangeText={text => setLog(text)}
      />
      <TextInput
        style={{ padding: 8, backgroundColor: '#f5f5f5' }}
        placeholder="Password"
        onChangeText={text => setPass(text)}
      />
      <Button
        onPress={handleClick}
        title='Log in'
      />
      </>
    ) : (
      <Text style={styles.text}>
        Welcome!
      </Text>
    )}

    
   </View>
   );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  text: {
    alignSelf: 'center',
    justifyContent: 'center',
    fontSize: 60,
  }
});


export default App;
