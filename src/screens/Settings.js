import React,{Component} from 'react';
import firebase from 'firebase'
import { Text,View, StyleSheet,Button,AsyncStorage,Image,Dimensions,ScrollView, ViewBase} from 'react-native';
import {theme} from '../constants';
import { TouchableHighlight } from 'react-native-gesture-handler';

const {width,height} = Dimensions.get('window');


class Settings extends Component{

    static navigationOptions = {
        headerTitle: 'Settings',
        headerTintColor: theme.colors.accent,
      headerStyle: {
        backgroundColor:'transparent'
      }
    }
    state = { currentUser: null }
    componentDidMount() {
        const { currentUser } = firebase.auth()
        this.setState({ currentUser })
    }

    // fetchUserInfo =()=> {
        
    // }

    // databaseUser=()=>{
    //     var that = this;
    //     firebase.database().ref('users').orderByChild('email').once('vale').then(function(snapshot){
    //         const exists = (snapshot.val() !== null);
    //         if(exists) data = snapshot.val();
    //             var 
    //     });
    // }

    signOut = ()=> {
        firebase.auth().signOut()
        this.props.navigation.navigate('Auth')
    }

    render(){
        const { currentUser } = this.state
        return(
            <View style={styles.container}>

                <View  style={{flex:1,backgroundColor:'black',justifyContent:'flex-end'
                ,position:'absolute',width:width}}>
                                            
                    <View style={{...StyleSheet.absoluteFill}}>
                        <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRSVzOLBwTI_AmkJ8OMolzsUMaRVBeR1UJ6aXQf0qVNdJuRacm6'}}
                            style={{flex:1,height:null,width:null,opacity:0.5}}
                        />
                    </View>
                    <View style={{height:height,width:width/1.25,justifyContent:'flex-end',padding:10}} />
                    <View style={{height:height/4,width:width/2,justifyContent:'flex-end',padding:10}} />
                </View>

                <View style={{alignItems:'flex-end',justifyContent:'flex-end'}}>

                    <View style={{alignSelf:'flex-start',padding:10}}>
                        <Text style={theme.style.ProfileName}>
                            Hi,
                        </Text>
                    </View>
                    
                    <View style={{alignSelf:'flex-start',padding:10}}>
                        <Text style={theme.style.ProfileName}>
                            @MaxSoul
                        </Text>
                    </View>
                    <View  style={theme.style.bottomLine} /><View  style={{paddingBottom:10}} />
                    

                    <View style={{alignSelf:'flex-start',padding:10}}>
                        <Text style={theme.style.ProfileEmail}>
                            {currentUser && currentUser.email}
                        </Text>
                    </View>
                    <View  style={theme.style.bottomLine} /><View  style={{paddingBottom:10}} />

                    
                    <View style={{alignSelf:'flex-start',padding:10}}>
                        <Text style={theme.style.ProfileEmail}>
                            03323778452
                        </Text>
                    </View>
                    <View  style={theme.style.bottomLine} />
                                                <View  style={{paddingBottom:10}} />
                    <View style={{alignSelf:'flex-start',padding:10}}>
                        <Text style={theme.style.ProfileEmail}>
                            Karachi, Malir
                        </Text>
                    </View>
                    <View  style={theme.style.bottomLine} />
                                                <View  style={{paddingBottom:10}} />
                </View>


                <Text>
                    
                </Text>
                <TouchableHighlight onPress={this.signOut}>
                    <View style={styles.SigOutButton}>
                        <Text style={theme.style.ProfileEmail}>
                            Sign Out
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
}
export default Settings;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    SigOutButton:{alignSelf:'center',alignItems:'center',
    justifyContent:'center',
    borderWidth:2,
    borderColor:theme.colors.accent,
    width:150,height:50,
    borderRadius:50
    }
})