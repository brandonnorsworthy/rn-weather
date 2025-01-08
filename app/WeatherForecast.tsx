import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function WeatherForecast(props: MainWeatherData) {
  return (
    <View style={Styles.container}>
      <View style={Styles.row}>
        <Text style={Styles.text}>Temp</Text>
        <Text style={Styles.text}>{props.temp}°F</Text>
      </View>
      <View style={Styles.row}>
        <Text style={Styles.text}>Feels Like</Text>
        <Text style={Styles.text}>{props.feels_like}°F</Text>
      </View>
      <View style={Styles.row}>
        <Text style={Styles.text}>Min Temp</Text>
        <Text style={Styles.text}>{props.temp_min}°F</Text>
      </View>
      <View style={Styles.row}>
        <Text style={Styles.text}>Max Temp</Text>
        <Text style={Styles.text}>{props.temp_max}°F</Text>
      </View>
      <View style={Styles.row}>
        <Text style={Styles.text}>Pressure</Text>
        <Text style={Styles.text}>{props.pressure}</Text>
      </View>
      <View style={Styles.row}>
        <Text style={Styles.text}>Humidity</Text>
        <Text style={Styles.text}>{props.humidity}</Text>
      </View>
    </View>
  )
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});