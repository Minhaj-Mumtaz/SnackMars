import React,{Component} from 'react';
import firebase from 'firebase'
import { Text,View, StyleSheet,Dimensions, Image, TouchableHighlight, Animated, Button} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler'
import * as actions from '../actions'
import Icon from 'react-native-vector-icons/Ionicons';
import {mocks,theme} from '../constants';
import { connect } from 'react-redux';

// const database = firebase.database();

// const AnimatedButton = Animated.createAnimatedComponent(Button)

const {width,height} = Dimensions.get('window')
const styles = theme.style;

class HomeScreen extends Component{

    state = { currentUser: null }
    componentDidMount() {
      const { currentUser } = firebase.auth()
      this.setState({ currentUser })
      
  }

  // action const selectLibrary = (libraryId)

  handleSelect= (itemId) =>{
    this.props.selectProduct(itemId)
    this.props.navigation.navigate('Product')
  }

    render(){
        const {coffeeTypes,categories} = this.props;
        return(
            <View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style ={styles.screen}>
            
                        <View style={styles.firstHead}>
                            <Text style={styles.firstHeadText}>
                                Seasonal
                            </Text>
                            <View style={styles.order}>  
                                <View style={styles.orderView}>
                                    <TouchableHighlight onPress={() => 
                                        this.props.navigation.navigate('ProductType')}>
                                        <Text style={{...styles.opt,color:theme.colors.white}}>
                                            View all &gt;
                                        </Text>
                                    </TouchableHighlight>
                                </View>
                            </View>
                        </View>

                        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{height:270}}>

                            {coffeeTypes.map(trend => (
                            <View key={trend.id} style={styles.box}>
                                <TouchableHighlight 
                                onPress={() =>this.handleSelect(trend)}
                                >
                                    <View style={styles.cardInner}>
                                        <View>
                                            <Image style={styles.trImage} source={{uri:trend.image}} />
                                        </View>
                                        <View style={{alignItems:'flex-start'}}>
                                            <Text style={styles.textTrend}>
                                                {trend.name}
                                            </Text>
                                            {/* <Text style={styles.text2}>
                                                Toppings : {trend.toppings}
                                            </Text> */}
                                            <View style={styles.rate}>
                                                <View style={styles.meExName}>
                                                    <Text style={styles.textTrend}>
                                                        Medium
                                                    </Text>
                                                </View>
                                                <View style={styles.meExName}>
                                                    <Text style={styles.textprice}>
                                                        Rs. {trend.price}
                                                    </Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableHighlight>
                            </View>
                            ))}

                            
                        </ScrollView>

                        <View style={{height:5,width:'100%'}} />
                        <View style={styles.firstHead}>
                            <Text style={styles.firstHeadText}>
                                Categories
                            </Text>
                        </View>
                        {categories.map(category => (
                        <View key={category.id} style={styles.boxe}>
                            <TouchableHighlight
                            onPress={() => this.props.navigation.navigate('ProductType') }
                            >
                            
                                <View style={{flex:1,backgroundColor:theme.colors.blackC,justifyContent:'flex-end'}}>
                                    <View style={{...StyleSheet.absoluteFill,opacity:0.7}}>
                                        <Image source={{uri:category.image}}
                                            style={{flex:1,height:null,width:null}}
                                            blurRadius={2}
                                        />
                                    </View>
                                    <View style={{height:height/4,width:width/1.25,justifyContent:'center',alignItems:'center'}}>
                                        <Text style={theme.style.headerTitle}>
                                            {category.name}
                                        </Text>
                                    </View>
                                
                                </View>
                            </TouchableHighlight>
                        </View>
                        ))}

                    </View>
                </ScrollView>
                {/* <TouchableHighlight style={styles.customButton} >
                    <Text style={styles.text}>+ Custom</Text>
                </TouchableHighlight> */}
            </View>
        )
    }
}



HomeScreen.defaultProps = {
    categories: mocks.categories,
    trending: mocks.trending,
    product: mocks.products,
    coffeeTypes: mocks.coffeeTypes,

}



export default connect(null,actions)(HomeScreen);

