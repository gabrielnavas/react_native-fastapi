import React from "react"
import { Text, StyleSheet, Button, View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"

import AntDesign from 'react-native-vector-icons/AntDesign';


type Props=  {
  onPressButton: () => void
  isLoading: boolean
}

const ButtonSearch = ({ onPressButton, isLoading }: Props) => 
  <TouchableOpacity 
    disabled={isLoading}
    style={styles.container}
    onPress={onPressButton}>
      <View 
        style={styles.button}>
        <AntDesign name='search1' style={styles.icon}  size={18}/>
      </View>
  </TouchableOpacity>

const styles = StyleSheet.create({
  container: {
    width: 80,
  },
  button: {
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginLeft: 8,
    borderRadius: 10,
    backgroundColor: 'black',
    borderColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    color: 'white'
    
  },
})

export default ButtonSearch