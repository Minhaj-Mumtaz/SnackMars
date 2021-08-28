import React, {Component} from 'react';
import firebase from 'firebase'
import { Text,View, ActivityIndicator ,Dimensions, Image,TextInput, StyleSheet,TouchableOpacity,AsyncStorage} from 'react-native';
import * as Facebook from 'expo-facebook'
import Constants from 'expo-constants'
import {State,TapGestureHandler} from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons'
import Animated,{Easing} from 'react-native-reanimated';

// import { FacebookApi } from '../api/facebook';


const {width,height} = Dimensions.get('window')

const {Value,
  event,
  block,
  cond,
  eq,
  set,
  Clock,
  startClock,
  stopClock,
  debug,
  timing,
  clockRunning,
  interpolate,
  Extrapolate,
  concat
} = Animated

function runTiming(clock, value, dest) {
  const state = {
    finished: new Value(0),
    position: new Value(0),
    time: new Value(0),
    frameTime: new Value(0)
  };

  const config = {
    duration: 1000,
    toValue: new Value(0),
    easing: Easing.inOut(Easing.ease)
  };

  return block([
    cond(clockRunning(clock), 0, [
      set(state.finished, 0),
      set(state.time, 0),
      set(state.position, value),
      set(state.frameTime, 0),
      set(config.toValue, dest),
      startClock(clock)
    ]),
    timing(clock, state, config),
    cond(state.finished, debug('stop clock', stopClock(clock))),
    state.position
  ]);
}

class Welcome extends Component {
  constructor(){
    super()
    this.buttonOpacity = new Value(1)

    this.onStateChange = event([
      {
        nativeEvent:({state})=>block([
          cond(eq(state,State.END),set(this.buttonOpacity,runTiming(new Clock(),1,0)))
        ])
      }
    ]);

    this.onCloseState = event([
      {
        nativeEvent:({state})=>block([
          cond(eq(state,State.END),set(this.buttonOpacity,runTiming(new Clock(),0,1)))
        ])
      }
    ]);

    this.buttonY = interpolate(this.buttonOpacity,{
      inputRange:[0,1],
      outputRange:[100,0],
      extrapolate:Extrapolate.CLAMP
    });
    this.bgY = interpolate(this.buttonOpacity,{
      inputRange:[0,1],
      outputRange:[-height/1.7,0],
      extrapolate:Extrapolate.CLAMP
    });
    this.textInputZindex = interpolate(this.buttonOpacity,{
      inputRange:[0,1],
      outputRange:[1,-1],
      extrapolate:Extrapolate.CLAMP
    });
    this.textInputY = interpolate(this.buttonOpacity,{
      inputRange:[0,1],
      outputRange:[0,100],
      extrapolate:Extrapolate.CLAMP
    });
    this.textInputOpacity = interpolate(this.buttonOpacity,{
      inputRange:[0,1],
      outputRange:[1,0],
      extrapolate:Extrapolate.CLAMP
    });
    this.rotateCross = interpolate(this.buttonOpacity,{
      inputRange:[0,1],
      outputRange:[180,360],
      extrapolate:Extrapolate.CLAMP
    });
  }
  
  static navigationOptions = {
    header: null,
  }

  state = { email: '', password: '', errorMessage: null,loading:false }
  handleLogin = () => {
    this.setState({loading:true})
    const { email, password } = this.state
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('AuthLoading'))
      .catch(error => this.setState({ errorMessage: error.message,loading:false }))
  }
  
  loginWithFacebook = async() =>{
    
    try {
      await Facebook.initializeAsync(Constants.manifest.facebookAppId);
      const {type, token} = await Facebook.logInWithReadPermissionsAsync(
        Constants.manifest.facebookAppId,
        {permissioins: ['email', 'public_profile']}
      )
      if(type === 'success'){
        const credentials = firebase.auth.FacebookAuthProvider.credential(token);
        firebase.auth().signInWithCredential(credentials)
        .then(() => this.props.navigation.navigate('AuthLoading'))
        .catch((error)=>{
          console.log('Error..',error);
        })
      }
    } catch (error) {
      console.log('error',error);
    }
    
  }

  renderLogin(){
    if(this.state.loading){
      return <ActivityIndicator size='large' />
    }
    return(
      <TouchableOpacity onPress={this.handleLogin}>
        <Animated.View style={styles.Button}>
          <Text style={{fontSize:20,fontWeight:'bold'}}>
            SIGN IN
          </Text>
        </Animated.View>
      </TouchableOpacity>
    )
  }
 
  
  render() {

    return (
      <View style={{flex:1,backgroundColor:'white',justifyContent:'flex-end'}}>
        <Animated.View style={{...StyleSheet.absoluteFill,transform:[{translateY:this.bgY}]}}>
          <Image source={(require('../../assets/bg3.jpg'))}
            style={{flex:1,height:null,width:null}}
          />
        </Animated.View>

        <View style={{height:height/2,justifyContent:'center'}}>

          <TapGestureHandler onHandlerStateChange={this.onStateChange}>
            <Animated.View style={{...styles.Button,opacity:this.buttonOpacity,transform:[{translateY:this.buttonY}]}}>
              <Text style={{fontSize:20,fontWeight:'bold'}}>SIGN IN</Text>
            </Animated.View>
          </TapGestureHandler>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}>
            <Animated.View style={{...styles.Button,opacity:this.buttonOpacity,transform:[{translateY:this.buttonY}]}}>
              <Text style={{fontSize:16,fontWeight:'bold'}}>
                SIGN UP
              </Text>
            </Animated.View>
          </TouchableOpacity>

          <Animated.View style={{zIndex:this.textInputZindex,opacity:this.textInputOpacity,
            transform:[{translateY:this.textInputY}] ,
            height:height/1.7,...StyleSheet.absoluteFill,top:null,paddingTop:60}}>

            <TapGestureHandler onHandlerStateChange={this.onCloseState}>
              <Animated.View style={styles.closeButton}>
                <Animated.Text style={{fontSize:15,transform:[{rotate:concat(this.rotateCross,'deg')}]}}>
                  X
                </Animated.Text>
              </Animated.View>
            </TapGestureHandler>
              
            <TextInput placeholder='Email'
              style={styles.textInput}
              placeholderTextColor="black"
              onChangeText={email => this.setState({email})}
              value={this.state.email}
            />
            <TextInput 
              secureTextEntry
              placeholder='PASSWORD'
              style={styles.textInput}
              placeholderTextColor="black"
              onChangeText={password => this.setState({ password,errorMessage: null })}
              value={this.state.password}
            />

              {this.state.errorMessage &&
            <Text style={{ color: 'red',alignSelf:'center' }}>
              {this.state.errorMessage}
            </Text>}


            {this.renderLogin()}

            <Text style={{alignSelf:'center',paddingTop:10,fontWeight:'bold'}}>OR Sign In with</Text>

            <Animated.View style={{flexDirection:'row',
            justifyContent:'center',alignItems:'center'}}
            >
              
                <Animated.View>
                  <Icon onPress={this.loginWithFacebook} name='logo-facebook' size={100} color="#4267b2" />
                  <Text style={{paddingLeft:4}}>Facebook</Text>
                </Animated.View>

                <Animated.View style={{paddingLeft:30}}>
                  <Icon onPress={this.onGooglePress} name='logo-google' size={100} color="#dd4b3e" />
                  <Text style={{paddingLeft:20}}>Google</Text>
                </Animated.View>
          
            </Animated.View>

          </Animated.View>

        </View>
      </View>
    )
  }
}


export default Welcome;

const styles = StyleSheet.create({
  Button:{
    backgroundColor:'white',
    height:70,
    marginHorizontal:20,
    borderRadius:35,
    alignItems:'center',
    justifyContent:'center',
    marginVertical:5,
    shadowOffset:{width:2,height:2},
    shadowColor:'black',
    shadowOpacity:0.2,
    elevation:8,
  },
  closeButton:{
    height:40,
    width:40,
    backgroundColor:'white',
    borderRadius:20,
    alignItems:'center',
    justifyContent:'center',
    position:'absolute',
    top:-20,
    left:width / 2 - 20,
    shadowOffset:{width:2,height:2},
    shadowColor:'black',
    shadowOpacity:0.2,
    elevation:8,
  },
  textInput:{
    height:50,
    borderRadius:25,
    borderWidth:0.5,
    marginHorizontal:20,
    paddingLeft:10,
    marginVertical:5,
    borderColor:'rgba(0,0,0,0.2)'
  },
  errorText:{
    fontSize:20,
    alignSelf:'center',
    color:'red'
  }
});