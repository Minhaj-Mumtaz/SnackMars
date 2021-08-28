import React,{Component} from 'react';
import firebase from 'firebase'

import { Text,View, StyleSheet,ActivityIndicator,AsyncStorage} from 'react-native';

class AuthLoadingScreen extends Component{

    
    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
              this.setState({ loggedIn: true })
              this.props.navigation.navigate('App')
            } else {
              this.setState({ loggedIn: false })
              this.props.navigation.navigate('Auth')
            }
          })
      }
    render(){
        return(
            <View style={styles.container}>
                <ActivityIndicator />
            </View>
        )
    }
}

export default AuthLoadingScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})