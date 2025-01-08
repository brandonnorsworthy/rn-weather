import axios from "axios";
import { useEffect, useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { API_KEY } from "../constants";
import * as Location from 'expo-location';
import WeatherForecast from "./WeatherForecast";

export default function Index() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    async function getCurrentLocation() {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;

      const response = await axios(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=imperial`);
      setWeatherData(response.data);
    }

    getCurrentLocation();
  }, [])

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        margin: 20
      }}
    >
      {
        weatherData !== null &&
        <View style={{ flex: 1, justifyContent: "center", alignItems: "flex-start", width: "100%" }}>
          <Text style={{ fontWeight: "bold", fontSize: 40 }}>{weatherData.name}</Text>
          <WeatherForecast {...weatherData.main} />
        </View>
      }
    </SafeAreaView>
  );
}
