import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View, Image, Button, Vibration } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import GoogleFit, { Scopes } from 'react-native-google-fit'
import {ButtonGroup, Input, Icon} from 'react-native-elements';
import { Audio } from 'expo-av';
import { TouchableOpacity } from 'react-native';



export default function Record() {
    const navigation = useNavigation();
    const [recording, setRecording] = useState();
    const [sound, setSound] = React.useState();

   

    async function startRecording() {
        try {
          console.log('Requesting permissions..');
          await Audio.requestPermissionsAsync();
          await Audio.setAudioModeAsync({
            allowsRecordingIOS: true,
            playsInSilentModeIOS: true,
            staysActiveInBackground: true,
          }); 
          console.log('Starting recording..');
          const recording = new Audio.Recording();
          await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
          await recording.startAsync(); 
          setRecording(recording);
          console.log('Recording started');
        } catch (err) {
          console.error('Failed to start recording', err);
        }
      }
    
    async function stopRecording() {
        console.log('Stopping recording..');
        setRecording(undefined);
        await recording.stopAndUnloadAsync();
        const uri = recording.getURI(); 
        _sendAudio(uri);
        playSound(uri);
        console.log('Recording stopped and stored at', uri);
      }

    async function playSound(uri) {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(
           {uri:uri}
        );
        setSound(sound);
    
        console.log('Playing Sound');
        await sound.playAsync(); }

    const _sendAudio = (uri) =>{
      const requestOptions = {
        method: 'POST',
        headers: {
          'Accept': "multipart/form-data",
          'Content-Type': 'multipart/form-data',
      },
        body: ({file:uri})
    };
    fetch('https://upload.box.com/api/2.0/files/content/', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));
    }

      
    
    

    
      

       

   
    return (
        <View style={styles.container}>
            <Text style={{backgroundColor:'#73B941', height:100, color:'#FFF', fontWeight:'bold', 
            textAlign:'center', paddingTop:'10%', fontSize:20}}>Home</Text>

       
            <View style={{paddingHorizontal:'10%', marginTop:'10%',paddingTop:'5%', height:100}}>
            
            
            </View>



            <View style={{alignSelf:'center', marginTop:'10%'}}>
              <Text style={{textAlign:'center'}}><Icon name={recording ? 'mic':'mic-off'} size={60} color='#FFF' style={{borderRadius:50, backgroundColor:'#36A044', alignSelf:'center'}}></Icon></Text>
           <Text onPress={recording ? stopRecording : startRecording} style={{backgroundColor:'#36A044', color:'#FFF', textAlignVertical:'center', fontWeight:'bold', 
           fontSize:15, textAlign:'center', paddingVertical:'2.5%', paddingHorizontal:'10%', borderRadius:20, marginTop:'25%'}}>{recording ? 'Stop Recording' : 'Start Recording'}</Text>
            </View>
    
            <View style={{backgroundColor:'#FFF', height:50, position:'absolute', bottom:0, borderTopRightRadius:10, 
            borderTopLeftRadius:10, width:'100%', paddingHorizontal:'15%', flexDirection:'row', paddingVertical:'2.5%'}}>
              <TouchableOpacity onPress={()=>{navigation.navigate('Record')}}><Text style={{marginRight:'20%'}}><Icon name="home" type="feather" color={'#36A044'}></Icon></Text></TouchableOpacity>
              <TouchableOpacity onPress={()=>{navigation.navigate('Emotion')}}><Text style={{marginRight:'20%'}}><Icon name="smile-o" type="font-awesome" color={'#A9A5A5'}></Icon></Text></TouchableOpacity>
              <TouchableOpacity onPress={()=>{navigation.navigate('Health')}}><Text style={{marginRight:'20%'}}><Icon name="barschart" type="ant-design" color={'#A9A5A5'}></Icon></Text></TouchableOpacity>
              <TouchableOpacity><Text style={{marginRight:'20%'}}><Icon name="settings" type="feather" color={'#A9A5A5'}></Icon></Text></TouchableOpacity>

            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        position: 'relative',
        backgroundColor: '#FFF8F1'
    },
    header: {
        height: '50%',
        width: '60%',
        marginTop: '10%',
        resizeMode: 'contain',
        alignSelf: 'center'
    },

});