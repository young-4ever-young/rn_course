import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';
import ListItem from './src/components/ListItem/ListItem';

class App extends Component {
  state = {
    placeName: '',
    places: [],
  };
  changePlaceNameHandler = val => {
    this.setState({
      placeName: val,
    });
    console.log(this.state.placeName);
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === '') {
      return;
    }
    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName),
      };
    });
  };

  placeDeletedHandler = index => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter((place, i) => {
          return i !== index;
        }),
      };
    });
  };

  render() {
    const placeOutput = this.state.places.map((item, i) => {
      return (
        <ListItem
          key={i}
          placeName={item}
          onItemDeleted={this.placeDeletedHandler}
        />
      );
    });
    return (
      <View style={styles.container}>
        <View style={styles.imputContainer}>
          <TextInput
            style={styles.placeInput}
            value={this.state.placeName}
            placeholder="An awesome place"
            onChangeText={this.changePlaceNameHandler}
          />
          <Button
            style={styles.placeButton}
            title="Add"
            onPress={this.placeSubmitHandler}
          />
        </View>
        <View style={styles.ListItemConteainer}>{placeOutput}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFF',
    marginTop: 50,
    padding: 26,
  },
  imputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  placeInput: {
    width: '70%',
  },
  placeButton: {
    width: '30%',
  },
  ListItemConteainer: {
    width: '100%',
  },
});

export default App;
