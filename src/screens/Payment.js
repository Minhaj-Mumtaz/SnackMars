import React,{Component} from 'react';
import {connect} from 'react-redux';
import { Text,View,Animated,StyleSheet, TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {withNavigation} from 'react-navigation'
import {theme,mocks} from '../constants';


class Payment extends Component {
    
    state={
        animation: new Animated.Value(0)
    }

    toggleOpen =() => {
        const toValue = this._open ? 0:1

        Animated.timing(this.state.animation,{
            toValue,
            duration:200
        }).start();

        this._open = !this._open;
    }


render() {

    const bgStyle = {
        transform:[{
            scale:this.state.animation.interpolate({
                inputRange:[0,1],
                outputRange:[0,30]
            })
        }]
    }

    const payStyle ={
        transform:[{
            translateY: this.state.animation.interpolate({
                inputRange:[0,1],
                outputRange:[0,1]
            })
        }]
    }

    const reloadStyle ={
        transform:[{
            translateY: this.state.animation.interpolate({
                inputRange:[0,1],
                outputRange:[0,-70]
            })
        }]
    }

    const orderStyle ={
        transform:[{
            translateY: this.state.animation.interpolate({
                inputRange:[0,1],
                outputRange:[0,-140]
            })
        }]
    }

    const labelPositionInterpolate = 
        this.state.animation.interpolate({
            inputRange:[0,1],
            outputRange:[-30,-90]
        })

    const opacityInterpolate = 
        this.state.animation.interpolate({
            inputRange:[0,.8,1],
            outputRange:[0,0,1]
        })
    const labelStyle = {
        opacity:opacityInterpolate,
        transform:[{
            translateX:labelPositionInterpolate
        }]
    }


    return (
        <View style={styles.container}>

            <Animated.View style={[styles.background, orderStyle,bgStyle]} />

            <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('ShoppingCart')}>
                <Animated.View style={[styles.button2,styles.other,orderStyle]}>
                    <Animated.Text style={[styles.label,labelStyle]}>
                        Order
                    </Animated.Text>
                    <Icon name='food-fork-drink' size={20} color='#555' />
                </Animated.View>
            </TouchableWithoutFeedback>


            <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Settings')}>
                <Animated.View style={[styles.button2,styles.other, reloadStyle]}>
                    <Animated.Text style={[styles.label,labelStyle]}>
                        Setting
                    </Animated.Text>
                    <Icon name='settings' size={20} color='#555' />
                </Animated.View>
            </TouchableWithoutFeedback>

            
            <TouchableWithoutFeedback onPress={this.toggleOpen}>
                <Animated.View style={[styles.button,styles.CBpay, payStyle]}>
                    <Animated.Text style={[styles.label,labelStyle]}>
                        Dismiss
                    </Animated.Text>
                    <Icon name='home' size={20} color='#fff' />
                </Animated.View>
            </TouchableWithoutFeedback>
                                    
        </View>
    );
}
}

export default withNavigation(Payment);

const styles= StyleSheet.create({
  container:{
    flex:1
  },
  background:{
    backgroundColor:'rgba(0,0,0,.6)',
    position:'absolute',
    right:20,
    bottom:20,
    width:60,
    height:60,
    borderRadius:30,
  },
  button:{
    position:'absolute',
    right:20,
    bottom:20,
    width:60,
    height:60,
    borderRadius:30,
    alignItems:'center',
    justifyContent:'center',
    elevation:8,
    shadowColor:'#333',
    shadowOpacity:.1,
    shadowOffset:{x:2,y:0},
    shadowRadius:2
  },
  button2:{
    position:'absolute',
    right:30,
    bottom:20,
    width:40,
    height:40,
    borderRadius:20,
    alignItems:'center',
    justifyContent:'center',
    elevation:8,
    shadowColor:'#333',
    shadowOpacity:.1,
    shadowOffset:{x:2,y:0},
    shadowRadius:2
  },
  CBpay:{
    backgroundColor:theme.colors.primary
  },
  CBpayText:{
    color:'#fff'
  },
  other:{
    backgroundColor:'#fff'
  },
  label:{
      color:'#fff',
      position:'absolute',
      fontSize:12,
      backgroundColor:'transparent'
  }
})

// export default ProductType