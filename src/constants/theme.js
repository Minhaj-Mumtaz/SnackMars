import {Dimensions} from 'react-native';


const {width,height} = Dimensions.get('window');

const colors = {
    primary: '#ffa800',
    primary2:'#fdcc6e',
    secondary: "#2BDA8E",
    tertiary: "#FFE358",
    black: "#323643",
    white: "#FFFFFF",
    gray: "#9DA3B4",
    gray2: "#C5CCD6",
    accent: '#f2edea',
    blackC:'#322f36',
    accent2:'#fc766aff',
    orange:'#ef4c23',
    green:'#05ac72'
  };
  
  const style = {
    // global sizes
    text:{
      textAlign:'center',
      color:colors.accent,
      fontWeight:'bold',
      fontSize:15,
      fontFamily:'sans-serif-thin',
  },
  orderView:{
    backgroundColor:colors.primary,borderRadius:20,width:width/3,alignSelf:'center'
  },
  textprice:{
     paddingTop:5,
     textAlign:'center',
     color:colors.accent,
     fontWeight:'bold',
     fontSize:15,
     fontFamily:'sans-serif',
  },
  menu:{
    borderRadius:20,
    backgroundColor:colors.blackC,
    paddingTop:10,
    width:'90%',
    alignItems:'center',
    justifyContent:'center',
    elevation: 8,
    shadowOffset:{width:2,height:2},
      shadowColor:'black',
      shadowOpacity:0.2,
},
circle: {
    width: 160,
    height: 160,
    borderRadius: 160/2,
 },
 circle2: {
    width: 160,
    height: 160,
    borderRadius: 160/2,
    elevation:15,
    shadowOffset:{width:2,height:2},
      shadowColor:'black',
      shadowOpacity:0.2,
    alignItems:'center',
 },
 center:{
     padding:20,
     alignItems:'center',
     justifyContent:'center',
 },

 textprice2:{
    paddingTop:5,
    textAlign:'center',
    color:colors.accent,
    fontWeight:'bold',
    fontSize:10,
    fontFamily:'sans-serif',
 },
 productDesc:{
    textAlign:'center',
    color:colors.accent,
    fontSize:13,
    fontFamily:'sans-serif-light',
 },
 textpara:{
    textAlign:'center',
    color:colors.accent,
    fontWeight:'bold',
    fontSize:15,
    fontFamily:'sans-serif',
 },
 opt:{
    textAlign:'center',
    color:colors.primary,
    fontWeight:'bold',
    fontSize:16,
    fontFamily:'sans-serif',
    padding:5
 },
 optView:{
  backgroundColor:colors.accent,borderRadius:20,width:width/3,alignSelf:'center'
 },
 bottomLine:{
   borderBottomColor:colors.accent,
   borderBottomWidth:0.7,
   width:width/1.1,
   alignSelf:'center',
 },
 menuExtras:{
     height:50,
     flexDirection:'row',
     width:width/1.2,
     alignSelf:'center',
     justifyContent:'space-between'
 },
 order:{
    height:70,
    elevation:8,
    shadowOffset:{width:2,height:2},
      shadowColor:'black',
      shadowOpacity:0.2,
    justifyContent:'center'
},
 meExName:{
     paddingLeft:13,
     justifyContent:'center',
 },
 meExProp:{
     paddingRight:13,
     justifyContent:'center',
 },
 headerTitle:{
   fontSize:30,
   fontFamily:'sans-serif',
   alignSelf:'center',
   fontWeight:'bold',
   color:colors.accent
 },
 screen: {
  width:'100%',
  alignItems:'center',
  
},

firstHeadText:{
  fontWeight:'bold',
  fontSize:15,
  fontFamily:'sans-serif',
},
firstHeadView:{
  fontWeight:'bold',
  fontSize:10,
  color:colors.blackC,
  fontFamily:'sans-serif-thin',
},
firstHead:{
  width:'90%',
  height:60,
  justifyContent:'space-between',
  alignItems:'center',
  flexDirection:'row',
},
cardF:{
  backgroundColor:colors.blackC,
  justifyContent:'space-between',
  width:'100%',
  flexDirection:'row',
  height:70,
  alignItems:'center',
},
textCenter:{
  padding:5,
  color:colors.accent,
  fontWeight:'bold',
  fontSize:20,
  fontFamily:'sans-serif-thin',
},
boxe:{
  width:'100%',
  paddingTop:5,
  elevation:8,
  shadowOffset:{width:2,height:2},
    shadowColor:'black',
    shadowOpacity:0.2,
  
},
cardInner:{
  borderRadius:15,
  backgroundColor:colors.blackC,
  justifyContent:'center',
  width:200,
  elevation: 8,
  shadowOffset:{width:2,height:2},
    shadowColor:'black',
    shadowOpacity:0.2,
},
textTrend:{
  padding:5,
  color:colors.accent,
  fontWeight:'bold',
  fontSize:15,
  fontFamily:'sans-serif-thin',
},
text2:{
  padding:5,
  color:colors.accent,
  fontSize:10,
  fontFamily:'sans-serif-thin',
},
rate:{
  justifyContent:'space-between',
  alignItems:'center',
  flexDirection:'row'
},
trImage:{
  width:200,
  height:170,
  
},
box:{padding:10,elevation:8},

categoryBox:{
  flex:1,width:width/2,height:290,alignItems:'center'
},
typeBox:{
  alignItems:'center',
  justifyContent:'center',
  marginHorizontal:40,
},
typeBoxText:{
  fontSize:15,
  paddingTop:15,
  fontFamily:'sans-serif',
  fontWeight:'bold',
  color:colors.blackC,
},
ButtonCategory:{
  backgroundColor:colors.primary,
  height:40,width:width/3.4,
  borderRadius:20,
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'center',
},
active:{
  borderBottomColor:colors.primary,
  borderBottomWidth:3,
},
activeText:{
  color:colors.primary
},
cartBox:{
  flexDirection:'row',
  backgroundColor:'white',
  justifyContent:'space-between',
  width:'100%',
  

},
cartText:{
  padding:5,
  color:colors.blackC,
  fontWeight:'bold',
  fontSize:15,
  fontFamily:'sans-serif',
},
cartImage:{
  width:110,
  height:100,
},
textCartCancel:{
  color:colors.white,
  fontSize:20,
  fontWeight:'bold'
},
cartDel:{
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:colors.primary,
  width:30,
  height:30,
  borderRadius:15,
  elevation:5
},
cartTotal:{
  flexDirection:'row',
  alignSelf:'flex-end',
  justifyContent:'space-between',
  width:width/1.5
},
placeOrder:{
  justifyContent:'center',
  alignItems:'center',
  alignSelf:'center',
  borderRadius:50,
  backgroundColor:colors.primary,
  width:'60%',
  height:100,
},
ProfileName:{
  fontSize:35,
  fontFamily:'sans-serif',
  fontWeight:'bold',
  color:colors.accent
},
ProfileEmail:{
  fontSize:25,
  fontFamily:'sans-serif',
  color:colors.accent
},

  };
  
  const fonts = {
    
  };
  
  export { colors, style, fonts };