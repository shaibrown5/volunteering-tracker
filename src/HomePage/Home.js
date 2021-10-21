import React, {useState} from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Dimensions,
  Button,
  Platform,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const Home = () => {
  const [hours, setHours] = useState('');
  const [place, setPlace] = useState('');
  // const [startTime, setstartTime] = useState(new Date(1622576040000));
  // const [endTime, setendTime] = useState(new Date(1622576040000));
  const [date, setDate] = useState(new Date(1622576040000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <View style={styles.homeContainer}>
      <Text style={styles.homeText}>Place of volunteer</Text>
      <TextInput
        style={styles.inputText}
        placeholder="e.g כלבייה / נע״שׁ"
        onChangeText={text => setPlace(text)}
        defaultValue={place}
      />
      <Text style={styles.homeText}>Hours of volunteer</Text>
      <TextInput
        style={styles.inputText}
        placeholder="e.g 1.4"
        onChangeText={text => setHours(text)}
        defaultValue={hours}
      />
      <View style={styles.homeContainer}>
        <Button onPress={showDatepicker} title="Show date picker!" />
      </View>
      <View style={styles.homeContainer}>
        <Button onPress={showTimepicker} title="Show time picker!" />
      </View>
      <View>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onDateChange}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    padding: 20,
    alignItems: 'center',
  },
  homeText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'purple',
    padding: 8,
  },
  inputText: {
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#777',
    width: Dimensions.get('window').width - 10,
  },
});

export default Home;
