import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, FlatList, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line, Circle } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { useFonts } from 'expo-font';
import ExploreMovie from '../components/exploremovie';




export default function Home() {
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

      const getData = [
        {
        id:'0',  
        title:"Star Wars, 1977",
        image:"https://cdn.onebauer.media/one/media/5ddc/ffc7/0a4e/c494/e8f7/62f2/star-wars-rise-skywalker-kylo-rey.jpg?format=jpg&quality=80&width=850&ratio=16-9&resize=aspectfill", 
        dialogue:"“May The Force Be With You”",
      },
      {
        id:'1',  
        title:"Star Wars, 1977",
        image:"https://cdn.onebauer.media/one/media/5ddc/ffc7/0a4e/c494/e8f7/62f2/star-wars-rise-skywalker-kylo-rey.jpg?format=jpg&quality=80&width=850&ratio=16-9&resize=aspectfill", 
        dialogue:"“May The Force Be With You”",
      },
      {
        id:'2',  
        title:"Star Wars, 1977",
        image:"https://cdn.onebauer.media/one/media/5ddc/ffc7/0a4e/c494/e8f7/62f2/star-wars-rise-skywalker-kylo-rey.jpg?format=jpg&quality=80&width=850&ratio=16-9&resize=aspectfill", 
        dialogue:"“May The Force Be With You”",
      },
      {
        id:'3',  
        title:"Star Wars, 1977",
        image:"https://cdn.onebauer.media/one/media/5ddc/ffc7/0a4e/c494/e8f7/62f2/star-wars-rise-skywalker-kylo-rey.jpg?format=jpg&quality=80&width=850&ratio=16-9&resize=aspectfill", 
        dialogue:"“May The Force Be With You”",
      }
      
      ]
      
    
   
    return (
        <View style={styles.container}>
            <Image source={require('../assets/splash2.png')} style={styles.header}></Image>
            <View style={{ marginTop: '5%', flexDirection:'row', display:'flex' }}>
                <Text style={{
                    fontFamily: 'Proxima', fontWeight: '100', fontSize: 32, textAlign:'justify', color:"#373772", marginHorizontal:'10%'
                }}><Text style={{fontSize:30, fontFamily:'SourceCodeProBold'}}>Explore</Text>
                </Text>
                <Text style={{textAlign:'right'}}>                                                <Icon name='trophy' type='font-awesome' color='#FFC107' size={32}></Icon></Text> 
            </View>
            <View style={{height:375}}>
            <ScrollView >
            <Text style={{
                    fontFamily: 'ProximaBold', fontWeight: '100', fontSize: 20, textAlign:'left', color:"#373772", marginHorizontal:'10%',
                }} >Dialogues that defined hollywood</Text>
                <View>
                    <ImageBackground source={require('../assets/film.png')} style={{width:'100%', height:180}} imageStyle={{resizeMode:'contain'}}>
                    <SafeAreaView style={{ position:'relative', flex:1,  width:550, height:150}}> 
                  <View style={{height:130, marginTop:'5%'}}>
                   <FlatList
                        numColumns={2}
                        style={{width:500, height:500, position:'relative'}}
                        scrollEnabled={true}
                        data={getData}
                        renderItem={({ item }) => <ExploreMovie
                            title={item.title}
                            image={item.image}
                            dialogue = {item.dialogue} 
                            keyExtractor={item => item.id}
                    
                            
                        />}
                    /></View></SafeAreaView>
                    </ImageBackground>
                </View>

                <Text style={{
                    fontFamily: 'ProximaBold', fontWeight: '100', fontSize: 20, textAlign:'left', color:"#373772", marginHorizontal:'10%',
                }} >Top Star Wars lines</Text>
                <View>
                    <ImageBackground source={require('../assets/film.png')} style={{width:'100%', height:180}} imageStyle={{resizeMode:'contain'}}>
                    <SafeAreaView style={{ position:'relative', flex:1,  width:550, height:150}}> 
                  <View style={{height:130, marginTop:'5%'}}>
                   <FlatList
                        numColumns={2}
                        scrollEnabled={true}
                        data={getData}
                        renderItem={({ item }) => <ExploreMovie
                            title={item.title}
                            image={item.image}
                            dialogue = {item.dialogue} 
                            keyExtractor={item => item.id}
                    
                            
                        />}
                    /></View></SafeAreaView>
                    </ImageBackground>
                </View>

                
       
           </ScrollView></View>
            <View style={{marginTop:'1%', backgroundColor:'transparent'}}>
                <View style={{display:'flex', flexDirection:'row',width:425, height:170,}}><ImageBackground source={require('../assets/nav.png')} style={{width:425, height:170,}} imageStyle={{resizeMode:'contain'}}>
                <View style={{display:'flex', flexDirection:'row',width:425, height:170,marginTop:'5%'}}>
                        <Text style={{ marginLeft:'16%', marginTop:'10%'}}><Icon name="home" color="#373772" size={30}></Icon></Text>
                        <TouchableOpacity onPress={()=>navigation.navigate('Movieoke')}><Image source={require('../assets/navmike.png')} style={{width:50, height:50, resizeMode:'contain', marginLeft:80}}></Image></TouchableOpacity>
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