import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line, Circle } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { useFonts } from 'expo-font';
import { TextInput } from 'react-native-gesture-handler';





export default function Signin() {
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
            <Image source={require('../assets/authhead.png')} style={styles.header}></Image>
            <View style={{ marginTop: '10%' }}>
                <Text style={{
                    fontFamily: 'Proxima', fontWeight: '100', fontSize: 20, textAlign:'justify', color:"#373772", marginHorizontal:'10%'
                }}><Text style={{fontSize:25, fontFamily:'SourceCodeProBold'}}>Sign in</Text>
                </Text> 
                <TextInput placeholder="email address" style={{fontFamily:'ProximaBold', fontSize:20, alignSelf:'center', color:'#373772',
                paddingLeft:'5%', textAlign:'left', width:'80%', backgroundColor:'#F4F7FF', borderRadius:50, paddingVertical:'5%'}} placeholderTextColor={`rgba(55, 55, 114, 0.3)`}></TextInput>
                <TextInput secureTextEntry placeholder="password" style={{fontFamily:'ProximaBold', fontSize:20, alignSelf:'center', color:'#373772', marginTop:'5%',
                paddingLeft:'5%', textAlign:'left', width:'80%', backgroundColor:'#F4F7FF', borderRadius:50, paddingVertical:'5%'}} placeholderTextColor={`rgba(55, 55, 114, 0.3)`}></TextInput>
            </View>
            <Text style={{fontFamily:'ProximaBold', textAlign:'left', marginLeft:'15%', fontSize:15}}>forgot your password?</Text>
            <View style={{marginTop:'15%', width:'70%', backgroundColor:'#373772', alignSelf:'center', borderRadius:50}}>
                <Text style={{fontFamily:'ProximaBold', color:'#FFF', fontSize:15, paddingVertical:'7.5%', textAlign:'center'}} onPress={()=>navigation.navigate('Home')}>Sign in</Text>
            </View>
           
            

          
            <Text style={{fontFamily:'ProximaBold', textAlign:'center', fontSize:15, marginTop:'5%'}} onPress={()=>navigation.navigate('Signup')}>or create an account</Text>
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