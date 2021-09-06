import React from "react"
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native"

export type Product = {
  id: string
  name: string
}

type Props = {
  product: Product
  navigation: any
}


const ItemProduct = ({product, navigation }: Props) => {
  
  const handleDeleteProduct = React.useCallback(() => {
    (async () => {
      try {
        await fetch(`http://localhost:8000/product?id=${product.id}`, {
          method: 'DELETE',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          }
        })
      } catch(err) {
        console.log(err);
      }
      navigation.navigate({
        name: 'SearchProductScreen',
        params: { product },
      })
    })()
  }, [product])


  const handleUpdateProduct = React.useCallback(() => {
    navigation.navigate({
      name: 'UpdateProduct',
      params: { product },
    })
  }, [product])

  const handleOnPressItem = React.useCallback(() => {
    Alert.alert(
      "Delete produto do estoque",
      "Deseja realmente remover esse produto?",[{
          text: "Não",
          onPress: () => ({}),
          style: "cancel"
        }, { 
          text: "Sim", 
          onPress: handleDeleteProduct 
        }
      ]
    );
  }, [])

  return (
    <TouchableOpacity 
      onPress={handleUpdateProduct}
      onLongPress={handleOnPressItem}>
      <View  style={styles.item}>
        <Text  style={styles.title}>{product.name}</Text>
      </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  item: {
    backgroundColor: 'black',
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 8,
    borderRadius: 10,
  },
  title: {
    fontSize: 27,
    color: 'white'
  }
})

export default ItemProduct