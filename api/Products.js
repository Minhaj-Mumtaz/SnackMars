import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Dimensions
} from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import {theme} from '../constants';
import {connect} from 'react-redux';
import {sampleProduct} from '../constants/mocks';

const {width,height} = Dimensions.get('window');


class Product extends Component{

    // constructor(props){
    //     super(props)

    //     this.state = {
    //         trend: this.props.navigation.state.params.trend
    //     };
    // }

    renderProducts = (products) => {
        
        return products.map((item, index) => {
            return (
                <View>
                    <ScrollView>
                        <View key={item.id}>
                            <View style={{flex:1,backgroundColor:'white',justifyContent:'flex-end'}}>
                                <View style={{...StyleSheet.absoluteFill}}>
                                    <Image source={item.image}
                                        style={{flex:1,height:null,width:null}}
                                    />
                                </View>
                                <View style={{height:height/3,width:width/1.25,justifyContent:'flex-end',padding:10}}>
                                    <Text style={theme.style.headerTitle}>
                                        {item.name}
                                    </Text>
                                </View>
                        
                            </View>
                            <View style={{backgroundColor:theme.colors.blackC}}>
                                <Text style={theme.style.text} >
                                    About
                                </Text>
                                <Text style={theme.style.textprice} >
                                    ${item.price}
                                </Text>
                                <View style={{paddingTop:20}}>
                                    <Text style={theme.style.textpara} >
                                    {item.description}
                                    </Text>
                                </View>
                                <View style={{paddingTop:20}}>
                                    <Text style={theme.style.opt} >
                                        SELECT OPTIONS
                                    </Text>
                                    <View  style={{borderBottomColor:theme.colors.primary,borderBottomWidth: 2,}} />
    
                                    <View>
                                    {item.toppings.map(topping =>(
                                    <TouchableOpacity key={topping.id}>
                                        
                                        <View key={topping.name}  style={theme.style.menuExtras}>
                                            <View style={theme.style.meExName}>
                                                <Text style={theme.style.textpara}>
                                                    Add {topping.name} 
                                                </Text>
                                            </View>
                                            <View style={theme.style.meExProp}>
                                                <Text style={theme.style.textprice2}>
                                                    ${topping.price}
                                                </Text>
                                            </View>
                                        </View>
                                        
                                    </TouchableOpacity>
                                    )
                                    )}
    
                                    <View  style={{borderBottomColor:theme.colors.primary,borderBottomWidth: 2,}} />
    
                                        <View  style={theme.style.menuExtras}>
                                            <View style={theme.style.meExName}>
                                                <Text style={theme.style.total}>
                                                    Total
                                                </Text>
                                            </View>
                                            <View style={theme.style.meExProp}>
                                                <Text style={theme.style.textprice2}>
                                                    {item.price}+{item.toppings.price}
                                                </Text>
                                            </View>
                                        </View>
    
                                        <TouchableOpacity onPress={() => this.props.onPress(item)}>
                                            <View style={theme.style.order}>
                                                <View style={theme.style.meExProp}>
                                                    <Text style={theme.style.textprice2}>
                                                        ORDER NOW
                                                    </Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
    
                                    </View>
                            </View>
                        </View>
                    </View>

                </ScrollView>
            </View>
            )
        })
    }

    render(){
        
        return(
            <View>
                {this.renderProducts(this.props.products)}
            </View>
   
        )
    }
}


export default products;
