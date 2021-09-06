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

const CreateProduct = () => {
  const [name, setName] = React.useState('')

  const createProduct = React.useCallback(()=> {
    if(name.length === 0) {
      Alert.alert('Alerta', 'É necessário um nome para o produto.')
      return
    } else if(name.length <= 2) {
      Alert.alert('Alerta', 'Nome muito pequeno.')
      return
    } else if(name.length >= 50) {
      Alert.alert('Alerta', 'Nome muito grande.')
      return
    }

    (async () => {
      try {
        const payload = { name }
        const response = await fetch(`http://localhost:8000/product`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
          body: JSON.stringify(payload)
        })
        if(response.status === 201) {
          setName('')
          Alert.alert('', 'Produto criado.')
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
      <Text style={styles.text}>Novo produto</Text>
        <TextInput 
          style={styles.input}  
          placeholder='Apple...'
          value={name}
          onChangeText={text => setName(text)}  
          onSubmitEditing={createProduct}
        /> 
        <Pressable style={styles.button} onPress={createProduct} >
            <Text style={styles.textButton}>Criar</Text>
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

export default CreateProduct