import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, FlatList, SafeAreaView, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line, Circle } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { Audio } from 'expo-av';
import { useFonts } from 'expo-font';
import YoutubePlayer from "react-native-youtube-iframe";
import * as FileSystem from 'expo-file-system';
import * as Permissions from 'expo-permissions';


export default function PlayGame() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState(false);
  const [movieoke, setMovieoke] = useState(false);
  const [getscore, setGetScore] = useState(false);
  const [score, setScore] = useState(120);
  const [isRecording, setIsRecording] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [recording, setRecording] = useState();
  const [dialogue, setDialogue] = useState('');


//audio record
startRecording = async () => {
  const { status } = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
  if (status !== 'granted') return;

  setIsRecording(true)
  await Audio.setAudioModeAsync({
    allowsRecordingIOS: true,
    interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
    playsInSilentModeIOS: true,
    shouldDuckAndroid: true,
    interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
    playThroughEarpieceAndroid: true,

  });
  const recordingOptions = {
    android: {
        extension: '.m4a',
        outputFormat: Audio.RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_MPEG_4,
        audioEncoder: Audio.RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AAC,
        sampleRate: 44100,
        numberOfChannels: 2,
        bitRate: 128000,
    },
    ios: {
        extension: '.wav',
        audioQuality: Audio.RECORDING_OPTION_IOS_AUDIO_QUALITY_HIGH,
        sampleRate: 44100,
        numberOfChannels: 1,
        bitRate: 128000,
        linearPCMBitDepth: 16,
        linearPCMIsBigEndian: false,
        linearPCMIsFloat: false,
    },
};
  const recording = new Audio.Recording();
  try {
    await recording.prepareToRecordAsync(recordingOptions);
    await recording.startAsync();
  } catch (error) {
    console.log(error);
    stopRecording();
  }
  setRecording(recording);
}
  async function stopRecording() {
    console.log('Stopping recording..');
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    const uri = recording.getURI(); 

    getTranscription(uri);

    console.log('Recording stopped and stored at', uri);
  }

  getTranscription = async (uri) => {
    var options = { method: 'POST',
  url: 'https://us-central1-aiot-fit-xlab.cloudfunctions.net/audioToText',
  headers: 
   { 
     'cache-control': 'no-cache',
     'content-type': 'multipart/form-data'},
  formData: 
   { file: 
      { value: uri,
        options: 
         { filename: 'audio.wav',
           contentType: null } } } };

fetch(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
}


  return (
    <View style={{flex:1, backgroundColor:'#373772'}}>
       <YoutubePlayer
        height={300}
        play={status}
        videoId={"k8Vgk8Nf7v4"}
        
      />
      <View style={{position:'absolute', zIndex:3, top:200, right:40}}>
        <Text
          onPress={() =>
            setStatus(!status)
          }
          style={{backgroundColor:'#FFF', borderRadius:30, padding:'5%'}}
        ><Icon name={status ?'pause':'play'} type="font-awesome" size={30} color='#373772' ></Icon></Text>
      </View>
      {!movieoke && !getscore &&<TouchableOpacity onPress={()=>{setMovieoke(true); startRecording();}}><Image source={require('../assets/micwhite.png')} style={{alignSelf:'center', height:'35%', width:'35%', resizeMode:'contain', marginTop:'15%'}}></Image></TouchableOpacity>}
      
     {!movieoke && !getscore && <>
      <Text style={{
                    fontFamily: 'ProximaBold', fontWeight: '100', fontSize: 25, textAlign:'center', color:"#FFF", marginHorizontal:'10%', marginTop:'-25%',
                }} >Movieoke this line</Text>
    <Text style={{
        fontFamily: 'Proxima', fontWeight: '100', fontSize: 18, textAlign:'center', color:"#FFF", marginHorizontal:'10%', marginTop:'5%',
    }} >Global high score: 1209</Text></>}



{movieoke  &&<Text style={{
        fontFamily: 'SourceCodeBold', fontWeight: '100', fontSize: 24, textAlign:'center', color:"#FFF", marginHorizontal:'10%', marginTop:'25%',
    }} >Recording...
    
    </Text>}

    {movieoke &&<View style={{marginTop:'5%', width:'70%', backgroundColor:'#FFF', alignSelf:'center', borderRadius:50}}>
                <Text style={{fontFamily:'ProximaBold', color:'#373772', fontSize:15, paddingVertical:'7.5%', textAlign:'center'}} onPress={()=>{setGetScore(true); setMovieoke(false); stopRecording();}}>Send</Text>
            </View>}
    
    
    {getscore &&<TouchableOpacity onPress={()=>{setGetScore(false);setMovieoke(false)}}><Image source={require('../assets/again.png')} style={{alignSelf:'center', height:'35%', width:'35%', resizeMode:'contain', marginTop:'15%'}}></Image></TouchableOpacity>}
      
      {getscore && <>
       <Text style={{
                     fontFamily: 'ProximaBold', fontWeight: '100', fontSize: 100, textAlign:'center', color:"#FFF", marginHorizontal:'10%', marginTop:'-25%',
                 }} >{score}</Text>
     <Text style={{
         fontFamily: 'Proxima', fontWeight: '100', fontSize: 18, textAlign:'center', color:"#FFF", marginHorizontal:'10%', marginTop:'5%',
     }} >Global high score: 1209</Text></>}
 
    </View>
  );
}