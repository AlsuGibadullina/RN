import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, TouchableHighlight } from 'react-native';

const App = () => {
  const [size, setSize] = useState(0);
  const [color, setColor] = useState(undefined);
  const [align, setAlign] = useState(undefined);
  const [radius, setRadius] = useState(0);
  const [show, setShow] = useState(false);
  const addBox = () => {
    setShow(true)
  }

  return (
  <View style={styles.container}>
    <View style={{ alignItems: 'center' }}>
      <Box color='red' width={100} height={100}/>
      <Box color='green' width={100} height={100}/>
    </View>
    
    {show && 
      <View style={{ alignItems: align }}>
        <Box color={color} width={size} height={size} radius={radius}/>
      </View>
    }
    
    <View style={styles.rows}>
      <Text style={styles.text}>Размер:</Text>
      <TextInput
          style={{ padding: 8, backgroundColor: '#f5f5f5', width: '70%', }}
          onChangeText={text => setSize(parseInt(text))}
        />
    </View>

    <View style={styles.rows}>
      <Text style={styles.text}>Цвет:</Text>
      <Button 
      style={styles.alignButton}
      onPress={()=>setColor('black')}
      title='Черный'
      color={'black'}
      /> 
      <Button 
      style={styles.alignButton}
      onPress={()=>setColor('blue')}
      title='Голубой'
      color={'blue'}
      /> 
      <Button 
      style={styles.alignButton}
      onPress={()=>setColor('orange')}
      title='Оранжевый'
      color={'orange'}
      /> 
    </View>

    {/* поле выбора изображения */}
    <View style={styles.rows}>
      <Text style={styles.text}>Расположение</Text>
      <Button
      style={styles.alignButton}
      onPress={()=>setAlign('flex-start')}
      title='Слева'
      color={'grey'}
      />
      <Button
      style={styles.alignButton}
      onPress={()=>setAlign('center')}
      title='Центр'
      color={'grey'}
      />
      <Button
      style={styles.alignButton}
      onPress={()=>setAlign('flex-end')}
      title='Справа'
      color={'grey'}
      
      />
    </View>

    <View style={styles.rows}>
      <Text style={styles.text}>Скругление</Text>
      <TextInput
          style={{ padding: 8, backgroundColor: '#f5f5f5', width: '60%', }}
          onChangeText={text => setRadius(parseInt(text))}
        />
    </View>
    
    <View style={styles.rows}>
      <Button
        onPress={addBox}
        disabled={!(color && size && align && radius) || show}
        title='Добавить'
      />
      <Button
        onPress={() => {
          setColor(undefined);
          setSize(0);
          setAlign(undefined);
          setRadius(0);
          setShow(false);
        }}
        title='Очистить'
      />
    </View>
    
  </View>
  )
};

export const Box = (props) => (
 <View 
  style={{ 
    width: props.width, 
    height: props.height, 
    backgroundColor: props.color,
    borderRadius: props.radius,
    margin: 10,
    }} 
/>
)

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  rows: {
    flexDirection: 'row',
    paddingLeft: 16,
    margin: 10,
  },
  text: {
    fontSize: 20,
    marginRight: 10,
  },
  alignButton: {
    marginRight: 20,
  }
});


export default App;
