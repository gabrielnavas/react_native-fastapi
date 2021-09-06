import React from "react"

import { 
  StyleSheet, 
  View, 
  TextInput,
  Text, 
  KeyboardAvoidingView,
  Keyboard,
  Alert,
} from "react-native"

import List from "./List"
import { Product } from "./Item"
import ButtonSearch from "./ButtonSearch"

type Props = {
  navigation: any
  route: any
}

const SearchProduct = ({ navigation, route }: Props) => {

  const [name, setName] = React.useState('')
  const [products, setProducts] = React.useState<Product[]>([])
  const [isLoading, setIsLoading] = React.useState(false)

  React.useEffect(() => {
    if(route.params) {
      updateListWithParams()
    }
  }, [route.params])

  const updateListWithParams = React.useCallback(() => {
    setProducts(oldProducts => oldProducts.filter(
      oldProduct => oldProduct.id !== route.params.product.id
    ))
  }, [route.params, products, setProducts])

  const searchProduct = React.useCallback(()=> {
    if(!name) {
      return
    }
    
    (async () => {
      try {
        setIsLoading(true)
        const response = await fetch(`http://localhost:8000/product?name=${name}`, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
        })
        if(response.status === 200) {
          const products = await response.json()
          if(products.length === 0) {
            Alert.alert('Produtos não encontrados', 'Tente com outro nome.')
            Keyboard.dismiss()
            return    
          }
          setProducts(products)
        }
      }
      catch(err) {
        console.log(err);
      }
      finally {
        setIsLoading(false)
      }
    })()
  }, [products, name])


  return (
    <KeyboardAvoidingView
      style={styles.container}
    >
      <List 
        products={products}  
        navigation={navigation}
        isLoading={isLoading}
        nameInput={name}
      />     
      <View  style={styles.searchContainer} >
        <TextInput  style={styles.searchInput}
          onChangeText={name => setName(name)}
          value={name}
          placeholder='Nome do produto...'
          onSubmitEditing={searchProduct}
        />
        <ButtonSearch
          isLoading={isLoading}
          onPressButton={searchProduct}
        />
      </View>
    </KeyboardAvoidingView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray'
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: '100%',
  },
  searchInput: {
    backgroundColor: 'white',
    width: '75%',
    fontSize: 18,
    paddingHorizontal: 10,
    fontWeight: '400',
    padding: 5,
    borderRadius: 10
  }
});

export default SearchProduct