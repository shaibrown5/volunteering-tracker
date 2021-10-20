import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import styles from './home.scss';

const Home = () => {
  const [hours, sethours] = useState(-1);
  const [place, setPlace] = useState('');

  return (
    <View style={{padding: 10}}>
      <Text>place hand here </Text>
      <TextInput
        style={styles.home}
        placeholder="Place of volenteer"
        onChangeText={text => setPlace(text)}
        defaultValue={place}
      />
      <Text style={{padding: 10, fontSize: 42}}>
        {place
          .split(' ')
          .map(word => word && '🍕')
          .join(' ')}
      </Text>
    </View>
  );
};

export default Home;
