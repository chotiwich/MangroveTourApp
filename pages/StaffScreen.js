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
import SearchInput, { createFilter } from 'react-native-search-filter';
export default class StaffScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    return fetch('http://172.16.156.117/MangroveTourApp/Database/Viewallstaff.php')
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
            <View style={styles.container}>
            <SearchInput 
          onChangeText={(term) => { this.searchUpdated(term) }} 
          style={styles.searchInput}
          placeholder="Type a message to search "
          />
            </View>
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
              color: '#5e3881',
            }}>
            View All Staff
          </Text>
          <View>
          
          </View>
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
                      color: 'white',
                    }}>
                    <Image source = {{uri:'https://icons-for-free.com/iconfiles/png/512/business+face+people+icon-1320086457520622872.png'}}
   style = {{ width: 100, height: 100 , marginLeft:130 }}
   />
                    <Text style={{fontSize: 16, marginTop: 10, marginLeft: 10,color:'white'}}>
                      SID : {item.SID}
                    </Text>
                    <Text style={{fontSize: 16, marginTop: 10, marginLeft: 50,color:'white'}}>
                      SName : {item.SName}
                    </Text>
                    <Text style={{fontSize: 16, marginTop: 10, marginLeft: 50,color:'white'}}>
                      STelephone: {item.STelephone}
                    </Text>
                    <Text style={{fontSize: 16, marginTop: 10, marginLeft: 50,color:'white'}}>
                      SPhoto: {item.SPhoto}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start'
  },
  emailItem:{
    borderBottomWidth: 0.5,
    borderColor: 'rgba(0,0,0,0.3)',
    padding: 10
  },
  emailSubject: {
    color: 'rgba(0,0,0,0.5)'
  },
  searchInput:{
    padding: 10,
    borderColor: '#CCC',
    borderWidth: 1
  }
});
