import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ExploreMovie from './exploremovie';

const styles = StyleSheet.create({
    container: {
 
    },
});

ExploreMovieList = ({ itemList}) => (
    <View>
        <SafeAreaView>
        <FlatList
                
                scrollEnabled={true}
                data={itemList}
                renderItem={({ item }) => <ExploreMovie
                    title={item.title}
                    image={item.image}
                    dialogue = {item.dialogue} 
            
                    
                />}
            />
</SafeAreaView>
    </View>
);

export default ExploreMovieList;