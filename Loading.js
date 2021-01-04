import React from "react";
import {View, Text, StyleSheet, StatusBar} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Loading(){
    return   (
            <View style={styles.container}>
        
                <StatusBar barStyle="dark-content" /> 
                <View style={styles.iconContainer}>
                    <MaterialCommunityIcons 
                        name="emoticon-happy" 
                        size={100} 
                        color="#FFEAA0"
                    />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.subtext}>Getting the Current</Text>
                    <Text style={styles.text}>Weather</Text>
                    <Text style={styles.by}>by runru1030</Text>
                </View>
            </View>
            );
}
const styles =StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#7498b1"
    },
    iconContainer:{
        flex:1,
        paddingTop:250,
        alignItems:"center"
    },
    textContainer:{
        paddingHorizontal:30,
        paddingVertical:30,
        alignItems:"center",
        flex:1
    },
    subtext:{
        color:"#242f46",
        fontSize:40,
        fontWeight:"200"
    },
    text:{
        color:"#242f46",
        fontSize:50,
        fontWeight:"600"
    },
    by:{
        color:"#242f46",
        fontSize:20,
        paddingTop:50,
        textAlign:"right"

    }
    
});