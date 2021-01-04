import React from 'react';
import {Alert} from "react-native";
import Loading from "./Loading";
import Weather from "./Weather";
import axios from "axios";//npm install axios
import * as Location from "expo-location";//expo install expo-location



const API_KEY = "b3c7b9895f21c817f8ac7042bbdbabe0";
const date_c=new Date();
export default class extends React.Component {
  state ={
    isLoading:true
  };
  getWeather=async (latitude, longitude)=>{
    const {
      data:{
        main:{temp},
        main:{humidity},
        weather,
        wind:{speed},
        sys:{country}
        
      }
    }= await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`);//api로부터 lat, lon이용하여 currentweather get

    this.setState({
      isLoading:false, 
      condition: weather[0].main,
      temp,
      country,
      speed,
      humidity,
      month:date_c.getMonth()+1, 
      date: date_c.getDate(),
      day:date_c.getDay(),
      hour:date_c.getHours()
    });
  };
  getLocation=async () =>{
    try {
      await Location.requestPermissionsAsync();//location permission
    
      const {
        coords:{latitude, longitude}
      } =await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
  }
  componentDidMount(){
    this.getLocation();
  }
  render(){
    const { 
      isLoading , 
      condition, 
      temp, 
      country, 
      speed, 
      humidity,
      month,
      date,
      day,
      hour
    } =this.state;
    return isLoading ? <Loading/>:<Weather 
                                      condition={condition} 
                                      temp={Math.round(temp)} 
                                      country={country} 
                                      speed={speed} 
                                      humidity={humidity}
                                      month={month}
                                      date={date}
                                      day={day}
                                      hour={hour}
                                      />;//isLoading==false, Weather호출
  }
}
