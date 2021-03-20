import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ExploreMovie({ route,title,image, dialogue}) {
    const navigation = useNavigation();
    return (
    <View style={styles.container}>
        <ImageBackground source={{uri:image}} imageStyle={styles.photo} style={{width:200, height:120}}>
        <View style={styles.details}>  
        <Text style={styles.description}>
                {dialogue}
            </Text>
        <Text style={styles.name}>{title}</Text>
        </View>
        </ImageBackground>
   
        
    </View>
)}



const styles = StyleSheet.create({
    container: {
        margin:'2%',
        borderRadius: 10,
        alignSelf:'center',
        justifyContent:'center',
        width:200,
        height:120,
        marginTop:'1%',
        backgroundColor:'#000',
        
    },
    name: {
        fontSize: 20,
        color:'#FFF',
        fontFamily:'Proxima',
        marginTop: '5%',
        marginBottom:'5%',
        textAlignVertical:'center',

    },
     photo: {
        height: '100%',
        width: '100%',
        justifyContent:'center',
        resizeMode:'contain',
        opacity:0.4,
        borderRadius:10,
        
        
    },
    details: {
        marginLeft: 20,
        marginRight: 20,
        justifyContent: 'center',
        
    },
    description: {
        fontSize: 18,
        fontFamily:'ProximaBold',
        color:'#FFF',
        marginTop:'5%',
    },

});