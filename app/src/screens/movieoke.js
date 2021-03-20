import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, FlatList, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line, Circle } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { useFonts } from 'expo-font';
import ExploreMovie from '../components/exploremovie';




export default function Movieoke() {
    const navigation = useNavigation();
    const [loaded] = useFonts({
        Proxima: require('../assets/fonts/PN.ttf'),
        ProximaBold: require('../assets/fonts/PNB.ttf'),
        SourceCodePro: require('../assets/fonts/SCP.ttf'),
        SourceCodeProBold: require('../assets/fonts/SCPB.ttf'),


      });
      const [loadlist, setLoad] = useState(false);
      if (!loaded) {
        return null;
      }

      
    
   
    return (
        <View style={styles.container}>
            <Image source={require('../assets/splash2.png')} style={styles.header}></Image>
            <View style={{ marginTop: '5%', flexDirection:'row', display:'flex' }}>
                <Text style={{
                    fontFamily: 'Proxima', fontWeight: '100', fontSize: 32, textAlign:'justify', color:"#373772", marginHorizontal:'10%'
                }}><Text style={{fontSize:30, fontFamily:'SourceCodeProBold'}}>Movieoke</Text>
                </Text>
                <Text style={{textAlign:'right'}}>                                                <Icon name='trophy' type='font-awesome' color='#FFC107' size={32}></Icon></Text> 
            </View>
            <View style={{height:375, width:'80%', alignSelf:'center'}}>
                <View style={{flexDirection:'row', display:'flex', marginTop:'10%'}}>
                    <Image source={require('../assets/normal.png')} style={{}}></Image>
                    <Text style={{
                    fontFamily: 'Proxima', fontWeight: '100', fontSize: 26, textAlign:'justify', color:"#373772", marginHorizontal:'10%', marginTop:'5%',
                }} onPress={()=>navigation.navigate('Playgame')}><Text style={{fontSize:26, fontFamily:'ProximaBold'}}>Normal {'\n'}Mode</Text>
                </Text>
                </View>
                <View style={{flexDirection:'row', display:'flex', marginTop:'10%'}}>
                    <Image source={require('../assets/competitive.png')} style={{}}></Image>
                    <Text style={{
                    fontFamily: 'Proxima', fontWeight: '100', fontSize: 26, textAlign:'justify', color:"#373772", marginHorizontal:'10%', marginTop:'5%',
                }}><Text style={{fontSize:26, fontFamily:'ProximaBold'}}>Competitive {'\n'}Mode</Text>
                </Text>
                </View>
               

               

                
       
          </View>
            <View style={{marginTop:'1%', backgroundColor:'transparent'}}>
                <View style={{display:'flex', flexDirection:'row',width:425, height:170,}}><ImageBackground source={require('../assets/nav.png')} style={{width:425, height:170,}} imageStyle={{resizeMode:'contain'}}>
                <View style={{display:'flex', flexDirection:'row',width:425, height:170,marginTop:'5%'}}>
                        <Text style={{ marginLeft:'16%', marginTop:'10%'}}><Icon name="home" color="#373772" size={30}></Icon></Text>
                        <TouchableOpacity><Image source={require('../assets/navmike.png')} style={{width:50, height:50, resizeMode:'contain', marginLeft:80}}></Image></TouchableOpacity>
                        <Text style={{ marginLeft:'20%', marginTop:'10%'}}><Icon name="user" type="font-awesome" color="#373772" size={30}></Icon></Text>
                        </View>
                </ImageBackground></View>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        position: 'relative',
        backgroundColor: '#FFF'
    },
    header: {
        height: '29%',
        width: '100%',
        marginTop: '-1%',
        resizeMode: 'contain',
        alignSelf: 'center'
    },

});