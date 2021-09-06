import React from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import ListMessage from "./ListMessage";
import Item, { Product } from "./Item";


type Props = {
  products: Product[]
  navigation: object,
  isLoading: boolean
  nameInput: string
}

type LIST_EMPTY_MESSAGE = 'Lista vazia.' | 'Carregando...'

const ListProduct = ({ products, navigation, }: Props) => 
  <FlatList 
    ListEmptyComponent={<ListMessage message='Nenhum produto listado' />}
    style={styles.container}
    data={products}
    renderItem={({ item }: any) => <Item product={item} navigation={navigation} />}
    keyExtractor={(product: Product) => product.id}
  />
    

const styles= StyleSheet.create({
  container: { }
})

export default ListProduct