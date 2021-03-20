import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, FlatList, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line, Circle } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { useFonts } from 'expo-font';

export default function PlayGame() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={{flex:1, backgroundColor:'#373772'}}>
      <Video
        ref={video}
        style={{width:'100%',height:235}}
        source={{
          uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        useNativeControls
        resizeMode="contain"
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <View style={{position:'absolute', zIndex:3, top:200, right:40}}>
        <Text
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
          style={{backgroundColor:'#FFF', borderRadius:30, padding:'5%'}}
        ><Icon name={status.isPlaying ?'pause':'play'} type="font-awesome" size={30} color='#373772' ></Icon></Text>
      </View>
      <TouchableOpacity><Image source={require('../assets/micwhite.png')} style={{alignSelf:'center', height:'35%', width:'35%', resizeMode:'contain', marginTop:'15%'}}></Image></TouchableOpacity>
      <Text style={{
                    fontFamily: 'ProximaBold', fontWeight: '100', fontSize: 25, textAlign:'center', color:"#FFF", marginHorizontal:'10%', marginTop:'-25%',
                }} >Movieoke this line</Text>
    <Text style={{
        fontFamily: 'Proxima', fontWeight: '100', fontSize: 18, textAlign:'center', color:"#FFF", marginHorizontal:'10%', marginTop:'5%',
    }} >Global high score: 1209</Text>
    </View>
  );
}