import React from 'react'
import { View, Text, TextInput, StyleSheet} from 'react-native'
import { Controller } from 'react-hook-form';

const CustomInput = ({control, name, rules= {}, placeholder, secureTextEntry}) => {
  return (

<Controller 
     control= {control}
     name={name}
     rules= {rules}
     render = {({field:{ value, onChange, onBlur}, fieldState: {error}}) => (
<>
<View 
style = {[
  styles.container, 
  {borderColor: error ? 'red' : 'white'},
  ]}>
     <TextInput 
     value= {value} 
     onChangeText= {onChange} 
     onBlur= {onBlur} 
     placeholder={placeholder}
     style= {styles.input}
     secureTextEntry= {secureTextEntry}

     /> 
     </View>
     {error && (
     <Text style = {{color: 'red', alignSelf: 'stretch'}}> {error.message|| 'Error'}</Text>
     )}
     </>
     )}
     />
  );
     };

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'gray',
        width: '100%',

        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 50,

        paddingHorizontal: 10,
        marginVertical: 5,
        flexWrap: 'wrap',
    },
    input: {},
});

export default CustomInput