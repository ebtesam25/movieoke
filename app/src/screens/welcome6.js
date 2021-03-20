import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line, Circle } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { useFonts } from 'expo-font';





export default function Welcome6() {
    const navigation = useNavigation();
    const [loaded] = useFonts({
        Proxima: require('../assets/fonts/PN.ttf'),
        ProximaBold: require('../assets/fonts/PNB.ttf'),
        SourceCode: require('../assets/fonts/SCP.ttf'),
        SourceCodeBold: require('../assets/fonts/SCPB.ttf'),

      });
      if (!loaded) {
        return null;
      }
   
    return (
        <View style={styles.container}>
            <Image source={require('../assets/welcomeop.png')} style={styles.header}></Image>
            <View style={{ marginTop: '10%' }}>
                <Text style={{
                    fontFamily: 'Proxima', fontWeight: '100', fontSize: 20, textAlign:'center', color:"#373772", marginHorizontal:'10%'
                }}><Text style={{fontFamily:'SourceCodeBold', fontSize:35}}>movieoke</Text></Text>
                
            </View>
            <View style={{marginTop:'5%', width:'70%', backgroundColor:'#373772', alignSelf:'center', borderRadius:50}}>
                <Text style={{fontFamily:'ProximaBold', color:'#FFF', fontSize:20, paddingVertical:'7.5%', textAlign:'center'}} onPress={()=>navigation.navigate('Signin')}>Sign in</Text>
            </View>
            <View style={{marginTop:'5%', width:'70%', backgroundColor:'#E1EAFF', alignSelf:'center', borderRadius:50}}>
                <Text style={{fontFamily:'ProximaBold', color:'#373772', fontSize:20, paddingVertical:'7.5%', textAlign:'center'}} onPress={()=>navigation.navigate('Welcome2')}>Create an account</Text>
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
        height: '55%',
        width: '100%',
        marginTop: '-5%',
        resizeMode: 'contain',
        alignSelf: 'center'
    },

});