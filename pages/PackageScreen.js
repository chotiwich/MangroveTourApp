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

export default class StaffScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    return fetch('http://172.16.156.117/MangroveTourApp/Database/Package.php')
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
            Package
          </Text>
              </View>
            
          <View>
          <Image source = {{uri:'https://static.posttoday.com/media/content/2019/01/06/4F2753D3B17244CEA959C1B1BA724730.jpg'}}
   style = {{ width: 500, height: 200 ,marginTop:20 }}
   />
   <Image source = {{uri:'https://cms.dmpcdn.com/travel/2020/06/24/fecd1900-b604-11ea-b61c-7dd99cb3fb2c_original.jpg'}}
   style = {{ width: 500, height: 200 }}
   />
   <Image source = {{uri:'https://www.meetthinks.com/wp-content/uploads/2018/12/WANNEE-79.jpg?x79439'}}
   style = {{ width: 500, height: 200 }}
   />
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
                    
                    <Text style={{fontSize: 20, marginTop: 10, marginLeft: 20 ,color:'white'}}>
                      Name : {item.Name}
                    </Text>
                    <Text style={{fontSize: 16, marginTop: 10, marginLeft: 20,color:'white'}}>
                      Detail : {item.Detail}
                    </Text>
                    <Text style={{fontSize: 16, marginTop: 10, marginLeft: 20,color:'white'}}>
                      Distinctive_feature: {item.Distinctive_feature}
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