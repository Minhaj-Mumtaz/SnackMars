import React, { Component} from 'react';
import firebase from 'firebase'
import { StyleSheet, Text, Button,ScrollView, TextInput, View, Image, TouchableOpacity,ActivityIndicator } from 'react-native';

import {theme} from '../constants';


class SignUp extends Component {

    static navigationOptions = {
        headerTitle: 'Sign Up',
          headerTintColor: theme.colors.accent,
        headerStyle: {
          backgroundColor: theme.colors.blackC
        }
      }
    

    state = { email: '', password: '', errorMessage: null,loading:false,phoneNumber:null, 
                name:'',address:''
            }

    createUserObj = (userObj,email) =>{
        var uObj = {
            name: name,
            address: address,
            phoneNumber: phoneNumber,
            email:email
        }
        firebase.database().ref('users').child(userObj.uid).set(uObj)
        .then(() => this.props.navigation.navigate('AuthLoading'))
    }

        handleSignUp = async() => {
            this.setState({loading:true})
            let user = await firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then((userObj) =>this.createUserObj(userObj.user,email))
            .catch(error => this.setState({ errorMessage: error.message,loading:false  }))
        }

        renderSignUp(){
            if(this.state.loading){
                return <ActivityIndicator size='large' />
            }
            return(
                <View style={styles.button}>
                    <Button title="SIGN IN" onPress={this.handleSignUp} color={theme.colors.blackC} />
                </View>
            )
        }
    render(){

        return(
            <ScrollView>
                <View style={styles.screen}>
                    <Image style={styles.MainImage} source={require('../../assets/images/SnackWeasel2.png')} />
                    <View style={{height:10,width:'100%'}} />
                    <TextInput placeholder="User Name" style={styles.inputC} 
                        maxLength={15}
                        onChangeText={name => this.setState({ name })}
                        value={this.state.name}
                    />
                    <View style={{height:10,width:'100%'}} />
                    
                    <TextInput placeholder="Email" style={styles.inputC} 
                        onChangeText={email => this.setState({ email })}
                        value={this.state.email}
                    />
                    <View style={{height:10,width:'100%'}} />
                    <TextInput secureTextEntry placeholder="Password" style={styles.inputC} 
                        onChangeText={password => this.setState({ password })}
                        value={this.state.password}
                    />
                    <View style={{height:10,width:'100%'}} />
                    
                    <TextInput placeholder="Address" style={styles.inputC} 
                        onChangeText={address => this.setState({ address })}
                        value={this.state.address}
                    />
                    <View style={{height:10,width:'100%'}} />
                    
                    <TextInput placeholder="Phone Number" style={styles.inputC} 
                        keyboardType="numeric" 
                        maxLength={11}
                        onChangeText={phoneNumber => this.setState({ phoneNumber })}
                        value={this.state.phoneNumber}
                    />
                    <View style={{height:10,width:'100%'}} />
                    
                        {this.state.errorMessage &&
                    <Text style={{ color: 'red',alignSelf:'center' }}>
                        {this.state.errorMessage}
                    </Text>}
                    
                    {this.renderSignUp()}
                    
                    <View style={{height:20,width:'100%'}} />
                    
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    screen: {
        width:'100%',
        alignItems:'center',

    },
    textpa:{
        color:theme.colors.blackC,
        fontSize:15,
    },
    MainImage:{
        width:200,
        height:200,
    },
    inputC:{
        borderColor:theme.colors.blackC,
        borderWidth:1,
        borderRadius:9,
        padding:10,
        width:'80%',
        color:theme.colors.blackC,
    },
    button:{
        width:'40%',
        borderWidth:1,
        borderColor:theme.colors.blackC,
    },
    button2:{
        width:'25%',
        borderWidth:1,
        borderColor:theme.colors.blackC,
    },
    socialMedia:{
        flexDirection:'row',
    },
    social:{
        height:50,
        width:50,
    }

});

export default SignUp;