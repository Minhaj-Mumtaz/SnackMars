import React from 'react';

import { Text,View, StyleSheet,} from 'react-native';
import { withNavigation } from 'react-navigation'
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';

const ShoppingCartIcon = (props) => (
    <View style={{padding:5}}>
        <View style={styles.cartNum}>
            <Text style={{color:'white',fontWeight:'bold'}}>
                {props.cartItems.length}
            </Text>
        </View>
        <Icon onPress={() => props.navigation.navigate('ShoppingCart')} name='ios-cart' size={30} color="white" />
    </View>
)
const mapStateToProps = (state) => {
    return{
        cartItems:state.cartItems
    }
}

export default connect(mapStateToProps)(withNavigation(ShoppingCartIcon));

const styles =StyleSheet.create({
    cartNum:{
        position:'absolute',
        height:25,
        width:25,
        borderRadius:12.5,
        backgroundColor:'orange',
        opacity:0.8,
        right:15,
        bottom:15,
        alignItems:'center',
        justifyContent:'center',
        zIndex:2000
    }
})