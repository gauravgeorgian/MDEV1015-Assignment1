import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SignUpPage from './SignUpPage';
import LoginPage from './LoginPage';

const Stack = createNativeStackNavigator();

const LandingPageMain = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.topBox}>
        <Image
          source={{
            uri: 'https://wallpaperaccess.com/full/922681.jpg',
          }}
          style={styles.imageStyle}
        />
        <Text style={styles.textStyle1}>Welcome to Tech Ninjas BookStore App</Text>
      </View>
      <View style={styles.bottomBox}>
        <View style={styles.navButtonWrapper}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              navigation.push('SignUp');
            }}>
            <Text style={styles.textStyle2}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              navigation.push('Login');
            }}>
            <Text style={styles.textStyle2}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const LandingPage = () => {
  return (
   
      <Stack.Navigator initialRouteName="BookStore" screenOptions={{}}>
        <Stack.Screen name="BookStore" component={LandingPageMain} />
        <Stack.Screen name="Login" component={LoginPage} options={{ title: 'Login Account' }} />
        <Stack.Screen name="SignUp" component={SignUpPage} options={{ title: 'Create Account' }} />
      </Stack.Navigator>
   
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  topBox: {
    flex: 1.5,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  bottomBox: {
    flex: 2,
    justifyContent: 'flex-end',
    padding: 30,
  },
  imageStyle: {
    width: 250,
    height: 300,
  },
  navButtonWrapper: {
    height: 100,
  },
  buttonStyle: {
    backgroundColor: 'grey',
    padding: 10,
    alignItems: 'center',
    marginBottom: 2,
  },
  textStyle1: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 60,
  },
  textStyle2: {
    fontWeight: 'bold',
  },
});

export default LandingPage;
