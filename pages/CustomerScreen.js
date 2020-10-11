import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  Button,
  ImageBackground,
} from 'react-native';
// import Gallery from 'react-native-image-gallery';
export default class CustomerScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }
  componentDidMount() {
    return fetch('http://172.16.156.117/MangroveTourApp/Database/Viewallcustomer.php')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({data: responseJson});
      })
      .catch((error) => {
        console.error(error);
      });
  }
  clickEventListener() {
    Alert.alert('Success', 'Product has beed added to cart');
  }
  render() {
    return (
      <ImageBackground
      source={require('C:/xampp/htdocs/MangroveTourApp/img/back02.png')}
      style={{flex: 1, resizeMode: 'cover'}}>
        <View>
          <ScrollView>
            <View>
            <Text
            style={{
              backgroundColor: 'white',
              textAlign: 'center',
              minHeight: 10,
              minWidth: 50,
              elevation: 50,
              borderRadius: 20,
              fontSize: 20,
              marginTop: 15,
              marginLeft: 15,
              color: 'black',
            }}>
            View All Customer
          </Text>
              <FlatList
                data={this.state.data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                  <View
                    style={{
                      backgroundColor: '#5f7d37',
                      textAlign: 'center',
                      minHeight: 10,
                      minWidth: 10,
                      elevation: 50,
                      borderRadius: 10,
                      fontSize: 20,
                      marginTop: 15,
                      marginLeft: 10,
                      marginRight: 10,
                      color: '#5e3881',
                    }}>
                    <Text style={{fontSize: 16, marginTop: 10, marginLeft: 20,color:'white'}}>
                    CustomerID: {item.CID}
                    </Text>
                    <Text style={{fontSize: 16, marginTop: 10, marginLeft: 50,color:'white'}}>
                    CustomerName: {item.CName}
                    </Text>
                    <Text style={{fontSize: 16, marginTop: 10, marginLeft: 50,color:'white'}}>
                    Telephone: {item.CTelephone}
                    </Text>
                    <Text style={{fontSize: 16, marginTop: 10, marginLeft: 50,color:'white'}}>
                    Sex: {item.CSex}
                    </Text>
                  </View>
                )}
              />
            </View>
          
                    
        
          </ScrollView>
        </View>
        </ImageBackground>
    );
  }
}