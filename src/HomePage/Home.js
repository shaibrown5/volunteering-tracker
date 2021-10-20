import React, {useState} from 'react';
import {Text, TextInput, View, StyleSheet} from 'react-native';

const Home = () => {
  const [hours, setHours] = useState(-1);
  const [place, setPlace] = useState('');

  return (
    <View style={styles.homeContainer}>
      <Text>
        <Text style={styles.homeText}>Place hand here</Text>
      </Text>
      <TextInput
        style={styles.inputText}
        placeholder="Place of volenteer"
        onChangeText={text => setPlace(text)}
        defaultValue={place}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    padding: 20,
  },
  homeText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'purple',
  },
  inputText: {
    fontSize: 20,
  },
});

export default Home;
