import React, {Component} from 'react';
import {
  View,
  Image,
  StatusBar,
  Dimensions,
  ScrollView,
  Text,
  ImageBackground,
  Button,
} from 'react-native';
import Swiper from 'react-native-swiper';

const {width, height} = Dimensions.get('window');

const styles = {
  wrapper: {
    // backgroundColor: '#f00'
  },

  slide: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  container: {
    flex: 1,
    marginTop :10,
  },

  imgBackground: {
    width,
    height,
    backgroundColor: 'transparent',
    position: 'absolute',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },

  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },

  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },

  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },

  image: {
    width,
    flex: 1,
  },
};

var styles1 = {
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
};

export default class extends Component {
  render() {
    return (
      <ImageBackground
        source={require('C:/xampp/htdocs/MangroveTourApp/img/back02.png')}
        style={{flex: 1, resizeMode: 'cover'}}>
      <View style={styles.container}>
        <ScrollView>
          <StatusBar barStyle="light-content" />
          {/* <Image
            source={require('C:/xampp/htdocs/MangroveTourApp/img/2.jpg')}
            style={styles.imgBackground}
          /> */}
          <View style={styles.container}>

            <Swiper
              style={styles.wrapper}
              height={240}
              onMomentumScrollEnd={(e, state, context) =>
                console.log('index:', state.index)
              }
              dot={
                <View
                  style={{
                    backgroundColor: 'rgba(0,0,0,.2)',
                    width: 5,
                    height: 5,
                    borderRadius: 4,
                    marginLeft: 3,
                    marginRight: 3,
                    marginTop: 3,
                    marginBottom: 3,
                  }}
                />
              }
              activeDot={
                <View
                  style={{
                    backgroundColor: '#000',
                    width: 8,
                    height: 8,
                    borderRadius: 4,
                    marginLeft: 3,
                    marginRight: 3,
                    marginTop: 3,
                    marginBottom: 3,
                  }}
                />
              }
              paginationStyle={{
                bottom: -23,
                left: null,
                right: 10,
              }}
              loop>
              <View
                style={styles.slide}
                title={
                  <Text numberOfLines={1}>
                    Aussie tourist dies at Bali hotel
                  </Text>
                }>
                <Image
                  resizeMode="stretch"
                  style={styles.image}
                  source={require('C:/xampp/htdocs/MangroveTourApp/img/1.jpg')}
                />
              </View>
              <View
                style={styles.slide}
                title={
                  <Text numberOfLines={1}>Big lie behind Nine’s new show</Text>
                }>
                <Image
                  resizeMode="stretch"
                  style={styles.image}
                  source={require('C:/xampp/htdocs/MangroveTourApp/img/2.jpg')}
                />
              </View>
              <View
                style={styles.slide}
                title={
                  <Text numberOfLines={1}>Big lie behind Nine’s new show</Text>
                }>
                <Image
                  resizeMode="stretch"
                  style={styles.image}
                  source={require('C:/xampp/htdocs/MangroveTourApp/img/3.jpg')}
                />
              </View>
              <View
                style={styles.slide}
                title={
                  <Text numberOfLines={1}>Big lie behind Nine’s new show</Text>
                }>
                <Image
                  resizeMode="stretch"
                  style={styles.image}
                  source={require('C:/xampp/htdocs/MangroveTourApp/img/4.jpg')}
                />
              </View>
              <View
                style={styles.slide}
                title={
                  <Text numberOfLines={1}>Big lie behind Nine’s new show</Text>
                }>
                <Image
                  resizeMode="stretch"
                  style={styles.image}
                  source={require('C:/xampp/htdocs/MangroveTourApp/img/5.jpg')}
                />
              </View>
              
            </Swiper>
            
          </View>
          <View style={[{width: '95%', margin: 10}]}>
          <Button
            title="Book a package"
            color="#5f7d37"
            onPress={() => navigation.navigate('DetailsScreen', {
              params: this.state.Details,
            })
          }
          />
        </View>
        <View style={[{width: '95%', margin: 10}]}>
          <Button
            title="Edit package reservation"
            color="#5f7d37"
            onPress={() => navigation.navigate('')}
          />
        </View>
        <View style={[{width: '95%', margin: 10}]}>
          <Button
            title="Booking summary"
            color="#5f7d37"
            onPress={() => navigation.navigate('')}
          />
        </View>
        <View style={[{width: '95%', margin: 10}]}>
          <Button
            title="Graph plan summary"
            color="#5f7d37"
            onPress={() => navigation.navigate('')}
          />
        </View>
        <View style={[{width: '95%', margin: 10}]}>
          <Button
            title="Scan QRCODE"
            color="#5f7d37"
            onPress={() => navigation.navigate('Qrcode')}
          />
        </View>
          
        </ScrollView>
        
      </View>
      </ImageBackground>
    );
  }
}