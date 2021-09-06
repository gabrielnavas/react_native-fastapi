import React from "react"
import { StyleSheet, View, Text } from "react-native"


type Props = {
  message: string
}

const ListMessage = ({message}: Props) => 
  <View style={styles.container}>
    <Text style={styles.message}>{message}</Text>
  </View>


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  message: {
    backgroundColor: 'gray',
    paddingVertical: 7,
    marginVertical: 20,
    paddingHorizontal: 60,
    borderRadius: 20,
    fontWeight: '400',
    fontSize: 17,
    color: 'white',
  }
});

export default ListMessage