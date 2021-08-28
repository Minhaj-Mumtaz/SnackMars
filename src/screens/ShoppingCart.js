import React,{Component} from 'react';

import { Text,View, TouchableHighlight,Image,BackHandler} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import {theme} from '../constants';
import * as actions from '../actions'
import {connect} from 'react-redux';


const styles = theme.style;
var Total=0;
var DC = 0;

class ShoppingCart extends Component{

    constructor(props) {
        super(props)
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    }

    
    static navigationOptions = {
        headerLeft: null,
      }
    
    UNSAFE_componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    }
    
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }
    
    handleBackButtonClick() {
        DC = 0
        Total=0
        this.props.navigation.goBack(null);
        return true;
    }
    
    total = (itemTotal) => {
        Total = Total + itemTotal;
    }

    handleSelect= (itemId) =>{
        DC = 0
        Total = 0;
        this.props.removeItem(itemId);
    }

    cartIncrease = (item) => {
        DC = 0
        Total=0
        this.props.addItemToCart(item)
    }
    cartDecrease = (item) => {
        DC = 0
        Total=0
        this.props.DecreaseItemToCart(item)
    }


    CartItem = (products) => {
        
        return products.map((item, index) => {
            let itemTotal = item.price*item.quantity;
            return (
                <View key={item.id} style={styles.box}>
                    <View style={styles.cartBox}>
                        <View style={{width:40}}>
                            <Image style={styles.cartImage} source={{ uri:item.image}} />
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <View style={{alignItems:'flex-start'}}>
                                <Text style={{...styles.cartText,fontWeight:'normal'}}>
                                    {item.name}
                                </Text>
                                <Text style={styles.opt}>
                                    Rs. {item.price}
                                </Text>
                                <Text style={styles.cartText}>
                                    Total: Rs. {itemTotal >0?itemTotal:this.handleSelect(item)}
                                    {this.total(itemTotal)}
                                </Text>
                            </View>
                            
                            <View style={{alignItems:'center',left:30 ,alignSelf:'center' ,justifyContent:'center'}}>
                                <Icon name='circle-with-plus' size={25} color={theme.colors.black} onPress={() => this.cartIncrease(item)}/>
                                <Text style={styles.cartText}>
                                    {item.quantity}
                                </Text>
                                <Icon name='circle-with-minus' size={25} color={theme.colors.black} onPress={() => this.cartDecrease(item)}/>
                            </View>
                        </View>


                        <View>
                            <TouchableHighlight 
                            key={item.id}
                            onPress={() => this.handleSelect(item)}
                            >
                                <View style={styles.cartDel}>
                                    <Text style={styles.textCartCancel}>
                                        x
                                    </Text>
                                </View>
                            </TouchableHighlight>
                        </View>

                    </View>
                    <View  style={{paddingTop:12}} />
                    <View  style={{...styles.bottomLine,
                     elevation:1,shadowOffset:{width:2,height:2},
                     shadowColor:'black',shadowOpacity:0.2,}} 
                    />
                </View>
                
            )
        }
        )
    }


    render(){

        return(
            <View style={styles.container}>
                
                {this.props.cartItems.length>0?
                <View>
                    <View>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View>
                                {this.CartItem(this.props.cartItems)}
                                <View>
                                    <View style={styles.box}>
                                        <View style={styles.cartTotal}>
                                            <Text style={{...styles.cartText,fontWeight:'normal'}}>
                                                Free Delivery on Order above 250
                                            </Text>
                                        </View>
                                        <View style={styles.cartTotal}>
                                            <Text style={{...styles.cartText,fontWeight:'normal'}}>
                                                Delivery Cost
                                            </Text>{Total>250?
                                            <Text style={{...styles.cartText,fontWeight:'normal'}}>
                                                Free
                                            </Text>:
                                            <Text style={{...styles.cartText,fontWeight:'normal'}}>
                                                {DC=100}
                                            </Text>}
                                        </View>
                                        <View style={styles.cartTotal}>
                                            <Text style={{...styles.cartText,fontSize:20}}>
                                                Cart Subtotal
                                            </Text>
                                            <Text style={{...styles.cartText,fontSize:20}}>
                                                Rs. {Total+DC}
                                            </Text>
                                        </View>
                                    </View>
                                    
                                    <TouchableOpacity style={{...styles.placeOrder,position:'relative'}}>
                                        <View>
                                            <Text  style={styles.textpara}>
                                                Place Order
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                    
                                </View>
                            </View>
                        
                        </ScrollView>
                    </View>
                </View>
                
                    
                :<View style={{justifyContent:'center',alignItems:'center',alignContent:'center'}}>
                    <Text>
                        No Items in your Cart
                    </Text>
                </View>
            }
                      
            </View>
            )
        }
    }
    

    const mapStateToProps = (state) => {
        
        return{
            
            cartItems:state.cartItems,
        }
    }

    
    export default connect(mapStateToProps,actions)(ShoppingCart);