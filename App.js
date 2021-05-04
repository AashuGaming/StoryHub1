import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {createAppContainer} from 'react-navigation';
import WriteStoryScreen from './screens/WriteStoryScreen'
import ReadStoryScreen from './screens/ReadStoryScreen'

export default class ReadStoryScreen extends React.Component{
    render(){
        return(
            <View style={StyleSheet.container}>
                <Text>Read Story</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        
    }
})