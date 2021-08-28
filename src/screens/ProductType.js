import React,{Component} from 'react';
import {connect} from 'react-redux';
import { Text,View,StyleSheet, Image,FlatList, TouchableWithoutFeedback,TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import * as actions from '../actions'
import {theme,mocks} from '../constants';
import SafeAreaView from 'react-native-safe-area-view';
import Payment from './Payment';

const styles = theme.style;



const numColumns = 2;

class ProductType extends Component {

    state={
        active : 'COFFEE',
    }
    
    cartHandle = (item) => {
        this.props.addItemToCart(item)
    }

    handleSelect= (itemId) =>{
        this.props.selectProduct(itemId)
        this.props.navigation.navigate('Product')
      }

    renderCategory(category){
        const {active} = this.state;
        const isActive = active === category;
        
        return(
          <TouchableOpacity key={`category-${category}`}
          onPress={() => this.setState({active:category})}

          style={[{backgroundColor:theme.colors.blackC},
          isActive ? styles.active : null
          ]}>
          <View style={styles.typeBox}>
              <Text style={[{...styles.typeBoxText,color:theme.colors.accent},
                  isActive? styles.activeText :null
                  ]}>
                  {category}
              </Text>
          </View>
          </TouchableOpacity>
        )
    }

renderProductTypes = ({ item, index }) => {
    const {id,name,price} = item
    return (
        <SafeAreaView>
            <View style={styles.categoryBox}>
                <TouchableWithoutFeedback onPress={() => this.handleSelect(item)}>
                    <View style={styles.center}>
                        <View style={styles.circle2}>
                            <Image style={styles.circle} source={{uri:item.image}} />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
                <View>
                    <Text style={{...styles.text,color:theme.colors.blackC}}>
                        {name}
                    </Text>
                    <Text style={{...styles.textprice,color:theme.colors.blackC}}>
                        Rs. {price}
                    </Text>
                </View>
                <View>
                    <TouchableOpacity onPress={() => this.cartHandle(item)}>
                        <View style={styles.ButtonCategory}>
                            <Icon name='ios-add' style={{fontSize:20,color:'white',marginHorizontal:6}} />
                            <Text style={styles.text}>
                                Add to Cart
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};



render() {
    
    const categories = ['CAKE','COFFEE','COCKTAILS','TEA','CORN'] ;
    return (
        <View>
            <View style ={styles.screen}>
                <View>
                    <View>
                        <ScrollView horizontal style={{height:50}} showsHorizontalScrollIndicator={false} >
                                    {categories.map(category => this.renderCategory(category))}  
                        </ScrollView>

                        <ScrollView horizontal={true}
                            pagingEnabled={true}
                            showsHorizontalScrollIndicator={false}
                        >
                            <FlatList
                            keyExtractor={(item)=> item.id} 
                                data={this.props.coffeeTypes}
                                renderItem={this.renderProductTypes}
                                numColumns={numColumns}
                                showsVerticalScrollIndicator={false}
                            />
                        </ScrollView>
                    </View>
                </View>
            </View>
            
            <Payment />
                                    
        </View>
    );
}
}
ProductType.defaultProps = {
    coffeeTypes: mocks.coffeeTypes,
}

export default connect(null, actions)(ProductType);

// export default ProductType