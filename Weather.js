 import React from "react";
 import PropTypes from "prop-types";//npm install prop-types
 import {View, Text, StyleSheet, StatusBar} from "react-native";
 import { MaterialCommunityIcons } from '@expo/vector-icons';
 import {LinearGradient} from "expo-linear-gradient";

 const weatherOptions={
      Thunderstorm: {
        iconName: "weather-lightning-rainy",
        gradient: ['#141E30', '#5a6783'],
        title: "Thunderstorm⚡",
        subtitle: "Don't be surprised"
      },
      Drizzle: {
        iconName: "weather-rainy",
        gradient: ['#2C3E50', '#4CA1AF'],
        title: "Drizzle",
        subtitle: "Is like rain💦"
      },
      Rain: {
        iconName: "weather-rainy",
        gradient: ['#606c88', '#3f4c6b'],
        title: "Rainy",
        subtitle: "Take your unbrella☔"
      
      },
      Snow: {
        iconName: "weather-snowy",
        gradient: ['#C9D6FF', '#666c70'],
        title: "Snowy☃",
        subtitle: "Do you want to build a snowman?"
      },
      Clear: {
        iconName: "white-balance-sunny",
        gradient: ['#FFE679', '#aabc64'],
        title: "Clear Day :D",
        subtitle: "Go get your vitamin D🌈"
      },
      Clouds: {
        iconName: "weather-cloudy",
        gradient: ['#a4a4a4', '#626262'],
        title: "Cloudy",
        subtitle: "I know, too boring☁"
      },
      Haze: {
        iconName: "weather-fog",
        gradient: ['#8196a5', '#5e7587'],
        title: "Haze",
        subtitle: "Just don't go outside🌫"
      }

 };
 const dayOptions={
  1:{day:"Mon"},
  2:{day:"Tue"},
  3:{day:"Wed"},
  4:{day:"Thu"},
  5:{day:"Fri"},
  6:{day:"Sat"},
  7:{day:"Sun"}

 };
 const monthOptions={
  1:{mon:"Jan"},
  2:{mon:"Feb"},
  3:{mon:"Mar"},
  4:{mon:"Apr"},
  5:{mon:"May"},
  6:{mon:"Jun"},
  7:{mon:"Jul"},
  8:{mon:"Aug"},
  9:{mon:"Sep"},
  10:{mon:"Oct"},
  11:{mon:"Nov"},
  12:{mon:"Dec"}

 };
 function tonight(hour){
   if(hour>=18)return "weather-night";
   return "white-balance-sunny";
 }//daytime, night
 export default function Weather({temp, condition, country, speed, humidity, month, date, day, hour}){
    return (
      
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}
        >
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <View style={styles.dateContainer}> 
                  <Text style={styles.datetext}>{monthOptions[month].mon} . {date}      </Text>
                  <Text style={styles.datetext}>{dayOptions[day].day}   </Text>
                  <MaterialCommunityIcons size={30} name={tonight(hour)} color="white"/>
                </View>
                <Text style={styles.temp}>{country}</Text>
                <MaterialCommunityIcons size={95} name={weatherOptions[condition].iconName} color="white"/>
                <Text style={styles.temp}>{temp}°</Text>              
                <Text style={styles.subtext}>
                  wind:<Text style={styles.maintext}>{speed}</Text> m/s     humidity:<Text style={styles.maintext}>{humidity}</Text>%
                </Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text> 
            </View>
        </LinearGradient>

    );
 }
 Weather.propTypes={
     temp: PropTypes.number.isRequired,
     condition:PropTypes.oneOf([
        "Thunderstorm", 
        "Drizzle",
        "Rain",     
        "Snow", 
        "Clear", 
        "Clouds",
        "Haze"
       
    ]).isRequired,
    country:PropTypes.string.isRequired,
    speed:PropTypes.number.isRequired,
    humidity:PropTypes.number.isRequired,
    month:PropTypes.number.isRequired,
    date:PropTypes.number.isRequired,
    day:PropTypes.number.isRequired,
    hour:PropTypes.number.isRequired
 };

 const styles=StyleSheet.create({
     container:{
         flex:1,  
     },
     dateContainer:{
      flexDirection:"row",
      marginBottom:100
     },
     datetext:{
      fontSize: 30,
      color:"white",
      fontWeight:"500"
     },
     temp:{
         fontSize: 42,
         color:"white",
         fontWeight:"600"
     }, 
     subtext:{
      fontSize: 25,
      color:"white",
      fontWeight:"200"
     },
     maintext:{
      fontSize: 35,
      color:"white",
      fontWeight:"500"
     },
     halfContainer:{
      flex:1,
      paddingVertical:100,
      alignItems:"center"  
     },
     title:{
      color:"white",
      fontSize: 50,
      fontWeight:"600",
      textAlign: "left"
     } ,
     subtitle:{
      color:"white",
      fontSize: 30,
      fontWeight:"300",
      textAlign: "left"
     },
     textContainer:{
      alignItems:"flex-start",
      marginVertical:100,
      marginTop:200,
      paddingHorizontal: 40,
      justifyContent: "center",
      flex: 1,
      backgroundColor:'rgba(255, 255, 255, 0.2)'
        
     }
    });