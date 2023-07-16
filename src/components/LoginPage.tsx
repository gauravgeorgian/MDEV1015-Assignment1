import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Button, TextInput, TouchableOpacity, Alert, Dimensions, SafeAreaView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import PrivacyPolicy from './PrivacyPolicyPage';
import PrivacyPolicyPage from './PrivacyPolicyPage';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthController } from '../controllers/AuthController';  // Update this with the correct path

const Stack = createNativeStackNavigator();

type RootStackParamList = {
  LandingPage: undefined;
  LoginPage: undefined;
  // Define other screens here
};

type LoginPageProps = {
  navigation: StackNavigationProp<RootStackParamList, 'LoginPage'>;
};

const LoginPage: React.FC<LoginPageProps> = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const authController = new AuthController();

  const handleLogin = async () => {
    try {
     let test = await authController.signIn(email, password);
      console.log('Auth successful' + test);
      //navigation.navigate();  // navigate to a different screen after successful login
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.topBox}>               
        <Text style={styles.textStyle2}>Welcome To Login Page</Text>
      </View>
      <View style={styles.topBox1}>               
        <TextInput placeholder="Username" onChangeText={setEmail}/>
      </View>
      <View style={styles.middleBox}>               
        <TextInput placeholder="Password" onChangeText={setPassword} secureTextEntry/>
      </View>           
      <View style={styles.bottomBox}>
        <TouchableOpacity 
          style={styles.buttonStyle}
          onPress={handleLogin}
        >
          <Text>Login</Text>
        </TouchableOpacity>
      </View>  
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
    wrapper: {
        flex:1,   
        backgroundColor:"white"    
      },
    topBox:{
        flex:3,
        backgroundColor:"#aad5bb",
        justifyContent:"space-evenly",
        alignItems:"center",
        
    },
    topBox1:{
        flex:0.7,
        backgroundColor:"white",
        justifyContent:"space-evenly",
        alignItems:"center",
       
    },
    middleBox:{
        flex:0.7,
       backgroundColor:"white" ,
    
       justifyContent:"space-evenly",
        alignItems:"center",
      

    },
    bottomBox:{
        flex:2,
        backgroundColor:"#aad5bb",
    
       justifyContent:"space-evenly",
        padding:100,
    },
    buttonStyle:{
        backgroundColor:"white",
        padding:10,
        alignItems:"center",
        marginBottom:50
       // marginBottom:6

    },
    textStyle2:{
    //backgroundColor:"white",
        fontWeight:"bold",
        fontSize:25
     
    },

})

export default LoginPage;