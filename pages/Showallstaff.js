// Example: Example of SQLite Database in React Native
// https://aboutreact.com/example-of-sqlite-database-in-react-native
// Screen to view all the user*/

import React from 'react';
import { StyleSheet,View,Text,FlatList } from 'react-native';
// import Mybutton from './components/Mybutton';

export default class Showallstaff extends React.Component {

  state={
    data:[]
  }

  fetchData= async()=>{
    const response = await fetch('http://172.16.28.194/MangroveTourApp/Database/Viewallstaff.php'); 
    const testTable = await response.json();
    this.setState({data: testTable});
  }
  componentWillMount(){
    this.fetchData();
}

  render() {
    return (
      <View style={styles.container}>
            
      <FlatList
        data={this.state.data}
        keyExtractor= {(item,index) => index.toString()}
        renderItem={({item})=>

        <View style={{backgroundColor:'#EEB4B4',padding:10,margin:10,borderRadius:10}}>
          <Text style={{color:'#fff', fontWeight:'bold'}}>
            <Text style={{color:'#000000'}}>Staff ID : {item.SID}</Text>{'\t'}Staff Name : {item.SName}</Text>
          
          <Text style={{color:'#fff'}}>Tel : {item.STelephone}</Text>
          <Text style={{color:'#fff'}}>SPhoto : {item.SPhoto}</Text>
        </View>

        } 
      />
  </View>

    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#F5FCFF',
    
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

});