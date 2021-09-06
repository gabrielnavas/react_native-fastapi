import React from 'react'

import { 
  Alert, 
  KeyboardAvoidingView, 
  Platform, 
  Pressable, 
  StyleSheet, 
  Text, 
  TextInput, 
} from 'react-native';

type Props = {
  route: any
  navigation: any
}

type Product = {
  id: string
  name: string
}

const UpdateProduct = ({ route, navigation }: Props) => {
  const { product } = route.params as {product: Product}
  const [name, setName] = React.useState(product.name)

  const updateProduct = React.useCallback(()=> {
    if(name.length === 0) {
      return
    }

    (async () => {
      try {
        const payload = { id: product.id, name }
        const response = await fetch(`http://localhost:8000/product`, {
          method: 'PUT',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
          body: JSON.stringify(payload)
        })
        if(response.status === 200) {
          setName('')
          navigation.navigate({
            name: 'SearchProductScreen',
            params: { productUpdated: {id: product.id, name} }
          })
        }
      }
      catch(err) {
        console.log(err);
      }
    })()
  }, [name])

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Text style={styles.text}>Atualizar Nome</Text>
        <TextInput 
          style={styles.input}  
          placeholder='Apple...'
          value={name}
          onChangeText={text => setName(text)}  
          onSubmitEditing={updateProduct}
        /> 
        <Pressable 
          style={styles.button} 
          onPress={updateProduct} >
            <Text style={styles.textButton}>Finalizar</Text>
        </Pressable>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'lightgray'
  },
  text: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 20
  },
  input: {
    marginTop: 20,
    width: '70%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingLeft: 12,
    paddingVertical: 5
  },
  button: {
    marginTop: 20,
    marginBottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    width: '50%',
    height:30,
    backgroundColor: 'black',
    borderRadius: 10,
  },
  textButton: {
    color: 'white',
  }
});

export default UpdateProduct