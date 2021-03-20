import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line, Circle } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { useFonts } from 'expo-font';





export default function Welcome2() {
    const navigation = useNavigation();
    const [loaded] = useFonts({
        Proxima: require('../assets/fonts/PN.ttf'),
        ProximaBold: require('../assets/fonts/PNB.ttf'),
        SourceCodePro: require('../assets/fonts/SCP.ttf'),
        SourceCodeProBold: require('../assets/fonts/SCPB.ttf'),


      });
      if (!loaded) {
        return null;
      }
   
    return (
        <View style={styles.container}>
            <Image source={require('../assets/splash2.png')} style={styles.header}></Image>
            <View style={{ marginTop: '10%' }}>
                <Image source={require('../assets/netflix.png')} style={{alignSelf:'center'}}></Image>
                <Text style={{
                    fontFamily: 'Proxima', fontWeight: '100', fontSize: 20, textAlign:'justify', color:"#373772", marginHorizontal:'10%'
                }}><Text style={{fontSize:30, fontFamily:'SourceCodeProBold'}}>Show your skills off</Text>
                {'\n'}{'\n'}
                While you can rewatch that same 007 movie for the nineteenth time, it’s time you showcase the James Bond inside you! </Text>
                
            </View>
            <View style={{marginTop:'5%', width:'70%', backgroundColor:'#373772', alignSelf:'center', borderRadius:50}}>
                <Text style={{fontFamily:'ProximaBold', color:'#FFF', fontSize:15, paddingVertical:'5%', textAlign:'center'}} onPress={()=>navigation.navigate('Welcome3')}>Okay, and?</Text>
            </View>
            <View style={{display:'flex', flexDirection:'row', alignSelf:'center'}}>
            <Svg height="30" width="200"
                    style={{
                        alignSelf: 'center', marginTop: '5%'
                    }}>
                          <Circle cx="30" cy="10" r="5"  fill="#C4C4C4" />
                          <Circle cx="60" cy="10" r="5"  fill="#373772" />
                          <Circle cx="90" cy="10" r="5"  fill="#C4C4C4" />
                          <Circle cx="120" cy="10" r="5"  fill="#C4C4C4" />
                          <Circle cx="150" cy="10" r="5"  fill="#C4C4C4" />




                </Svg>
                
            </View>
            <Text style={{fontFamily:'ProximaBold', textAlign:'center', fontSize:15}}>or skip</Text>
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