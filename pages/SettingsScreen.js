/* This is an Login Registration example from https://aboutreact.com/ */
/* https://aboutreact.com/react-native-login-and-signup/ */

//Import React
import React from 'react';
import {Component} from 'react';

//Import all required component
import {
  View,
  Text,
  Picker,
  ImageBackground,
  Button,
  TextInput,
} from 'react-native';

export default class SettingScreen extends Component {
  constructor() {
    super();
    this.state = {selectedLabel: ''};
    this.state = {text: ''};
  }
  Show = (value) => {
    alert(value);
    this.setState({selectedLabel: value});
  };

  render() {
    return (
      <ImageBackground
        source={require('C:/xampp/htdocs/MangroveTourApp/img/back02.png')}
        style={{flex: 1, resizeMode: 'cover'}}>
        <View>
          <Text
            style={{
              backgroundColor: 'white',
              textAlign: 'center',
              minHeight: 10,
              minWidth: 10,
              elevation: 50,
              borderRadius: 20,
              fontSize: 30,
              marginTop: 15,
              marginLeft: 15,
              marginRight: 15,
              color: '#5e3881',
            }}>
            Package booking
          </Text>
          <TextInput
            style={{
              minHeight: 10,
              minWidth: 10,
              elevation: 50,
              borderRadius: 20,
              backgroundColor: 'white',
              fontSize: 20,
              marginTop: 15,
              marginLeft: 15,
              marginRight: 15,
              color: '#5e3881',
            }}
            placeholder="Booking name : "
            onChangeText={(text) => this.setState({text})}
          />
          <View
            style={{
              backgroundColor: 'white',
              textAlign: 'center',
              minHeight: 10,
              minWidth: 10,
              elevation: 50,
              borderRadius: 20,
              fontSize: 20,
              marginTop: 15,
              marginLeft: 15,
              marginRight: 15,
              color: '#5e3881',
            }}>
            <Text
              style={{
                fontSize: 20,
                marginTop: 20,
                paddingBottom: 10,
                color: '#5e3881',
              }}>
              {' '}
              Select Package :{' '}
            </Text>
            <Picker
              selectedValue={this.state.selectedLabel}
              onValueChange={this.Show.bind()}>
              <Picker.Item
                label="Enter Select Package"
                value="Enter Select Package"></Picker.Item>
              <Picker.Item
                label="Community Enterprise of Mangrove Forest Conservati..."
                value="Community Enterprise of Mangrove Forest Conservati..."></Picker.Item>
              <Picker.Item label="Ban Khiriwong group" value="Ban Khiriwong group"></Picker.Item>
              <Picker.Item
                label="krajoodwantana"
                value="krajoodwantana"></Picker.Item>
            </Picker>
            
          </View>
<View>
<TextInput
            style={{
              minHeight: 10,
              minWidth: 10,
              elevation: 50,
              borderRadius: 20,
              backgroundColor: 'white',
              fontSize: 20,
              marginTop: 15,
              marginLeft: 15,
              marginRight: 15,
              color: '#5e3881',
            }}
            placeholder="Password : "
            onChangeText={(text) => this.setState({text})}
          />
</View>
          

          <View
            style={[
              {width: '95%', borderRadius: 30, margin: 10, marginTop: 20},
            ]}>
            <Button
              title="Confirm"
              color="#5f7d37"
              onPress={() => navigation.navigate('')}
            />
          </View>
        </View>
      </ImageBackground>
    );
  }
}