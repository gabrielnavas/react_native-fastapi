import React from "react"
import { TextInput, Text, View, StyleSheet, KeyboardAvoidingView, Platform } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"

type Props = {
  navigation: any
}

const SignIn = ({navigation}: Props) => {

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  return (
    <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Email</Text>
        <TextInput 
          style={styles.input}
          value={email} 
          onChangeText={text => setEmail(text)} 
          onSubmitEditing={() => ({})} 
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Senha</Text>
        <TextInput 
          style={styles.input}
          value={password} 
          onChangeText={text => setPassword(text)} 
          onSubmitEditing={() => ({})} 
        />
      </View>
      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Logar</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.buttonSecondary}
          onPress={() => navigation.push('SignIn')}>
          <Text style={styles.buttonTextSecondary}>Já tenho conta</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
  }, 
  inputGroup: {
    width: '70%',
    marginBottom: 20,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 10,
    marginBottom: 5,
  },
  input: {
    backgroundColor: 'white',
    fontSize: 16,
    borderRadius: 15,
    paddingHorizontal: 15,
  },
  buttonGroup: {
    width: '50%',
  },
  button: {
    marginBottom: 10,
    paddingVertical: 8,
    paddingHorizontal: 15,
    minWidth: 150,
    alignItems: 'center',
    backgroundColor: 'black' 
  },
  buttonSecondary: {
    marginBottom: 10,
    paddingVertical: 8,
    paddingHorizontal: 15,
    minWidth: 150,
    alignItems: 'center',
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: 'transparent' 
  },
  buttonText: {
    color: 'white',
    fontWeight: '400',
    fontSize: 16,
  },
  buttonTextSecondary: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  }
})

export default SignIn