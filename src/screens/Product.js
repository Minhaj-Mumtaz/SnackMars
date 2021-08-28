import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Dimensions,
} from "react-native";
import {connect} from 'react-redux';
import {colors,style} from '../constants/theme';
import * as actions from '../actions'
import Payment from "./Payment";
import { ScrollView } from "react-native-gesture-handler";

const {width,height} = Dimensions.get('window');


class Product extends Component{

    
    state={notification:true}

    cartHandle = (item) => {
        this.props.addItemToCart(item)
    }


    render(){

        const item = this.props.selectProductId
        
        return(
            <View>
                <View>
                    <View>
                        <View>
                            <ScrollView showsVerticalScrollIndicator={false}>
                                <View>
                                    <View>
                                        <View style={{flex:1,backgroundColor:colors.blackC,justifyContent:'flex-end'}}>
                                            
                                            <View style={{...StyleSheet.absoluteFill}}>
                                                <Image source={{uri:item.image}}
                                                    style={{flex:1,height:null,width:null}}
                                                />
                                            </View>
                                            <View style={{height:height/3,width:width/1.25,justifyContent:'flex-end',padding:10}} />
                                                
                                        </View>
                                        <View style={{backgroundColor:colors.blackC}}>
                                            <View style={{width:width/1.2,alignSelf:'center'}}>
                                                <View  style={{
                                                    alignSelf:'center',
                                                    borderBottomColor:colors.primary,
                                                    padding:12,
                                                    borderBottomWidth:5,
                                                    width:30}} 
                                                />
                                                <Text style={style.headerTitle}>
                                                    {item.name}
                                                </Text>
                                                    
                                                <View style={{paddingTop:20}}>
                                                    <Text style={style.productDesc} >
                                                    {item.description}
                                                    </Text>
                                                </View>
                                                
                                                <Text style={{...style.textprice,fontSize:22,paddingTop:20,color:colors.primary}} >
                                                    Rs. {item.price}
                                                </Text>
                                            </View>
                                            <View style={{paddingTop:20}}> 
                                                <View  style={style.bottomLine} />
                                                <View  style={{paddingBottom:10}} />
                                                <View style={style.optView}>
                                                    <Text style={style.opt} >
                                                        Customizations
                                                    </Text>
                                                </View>
                                                <View> 
                                                    <View  style={style.menuExtras}>
                                                        <View style={style.meExName}>
                                                            <Text style={style.textpara}>
                                                                Size 
                                                            </Text>
                                                        </View>
                                                        <View style={style.meExProp}>
                                                            <Text style={style.textpara}>
                                                                Medium 
                                                            </Text>
                                                        </View>
                                                    </View>

                                                    <View  style={style.bottomLine} />

                                                    <View  style={style.menuExtras}>
                                                        <View style={style.meExName}>
                                                            <Text style={style.textpara}>
                                                                Milk 
                                                            </Text>
                                                        </View>
                                                        <View style={style.meExProp}>
                                                            {item.milk?
                                                            <Text style={style.textpara}>
                                                                Included
                                                            </Text>:
                                                            <Text style={style.textpara}>
                                                                Not Included
                                                            </Text>}
                                                        </View>
                                                    </View>
                                                    <View  style={style.bottomLine} />

                                                    <View  style={style.menuExtras}>
                                                        <View style={style.meExName}>
                                                            <Text style={style.textpara}>
                                                                Total
                                                            </Text>
                                                        </View>
                                                        <View style={style.meExProp}>
                                                            <Text style={style.textprice}>
                                                                Rs. {item.price}
                                                            </Text>
                                                        </View>
                                                    </View>
                                                    
                                                    <View  style={style.bottomLine} />

                                                    
                                                        <View style={style.order}>
                                                            
                                                                <View style={style.orderView}>
                                                                    <TouchableOpacity onPress={() => this.cartHandle(item)}>
                                                                        <Text style={{...style.opt,color:colors.accent}}>
                                                                            ORDER NOW
                                                                        </Text>
                                                                    </TouchableOpacity>
                                                                </View>
                                                            
                                                        </View>
                                                </View>
                                            </View>
                                        </View>
                                    </View>

                                </View>
                            </ScrollView>
                        </View>
                    </View>
                </View>
                <Payment />
            </View>
   
        )
    }
}

const mapStateToProps = (state) => {
    return{
        selectProductId:state.selectProductId
    }
}



export default connect(mapStateToProps, actions)(Product);
