import React from 'react';
import firebase from 'firebase';
import { createStore,applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk'
import { AppLoading} from 'expo';
import {Asset} from 'expo-asset';
import Navigator from './src/navigation';
import {Provider} from 'react-redux';
import reducers from './src/reducers';

const images = [
  'https://i.imgur.com/tYoYafzm.png',
  'https://i.imgur.com/Qx5wkrHm.png',
  'https://i.imgur.com/BPT316mm.png',
  'https://i.imgur.com/zhNd0w5m.png',
  'https://i.imgur.com/Ft2ys6Tm.jpg',
  'https://i.imgur.com/i2jzOVkm.png',
  'https://i.imgur.com/0eRESsqm.png',
  'https://i.imgur.com/XFS8uA5m.png',
  'https://i.imgur.com/4jSuJTEm.png',
  'https://i.imgur.com/mBVz0XPm.png',
];

const config={
  apiKey: "AIzaSyBrNLCwVul11HmPwR6BZszy9KaqXUiX0aM",
    authDomain: "testing-proj-7d7d7.firebaseapp.com",
    databaseURL: "https://testing-proj-7d7d7.firebaseio.com",
    projectId: "testing-proj-7d7d7",
    storageBucket: "testing-proj-7d7d7.appspot.com",
    messagingSenderId: "767453983271",
    appId: "1:767453983271:web:7a5c5a7cd0f9bad0d0d402",
    measurementId: "G-63XXJB8Q4H"
}

if(!firebase.apps.length){
  firebase.initializeApp(config);
}


export default class App extends React.Component {
  
  
  handleResourcesAsync = async () => {
    // caching all the images.

    const cacheImages = images.map(img => {
      return Asset.fromModule(image).downloadAsync();
    });

    return Promise.all(cacheImages);
  }

  constructor(){
    super()
    this.state={
      isReady:false
    }
  }

  async _loadAssetsAsync(){
    const imageAssets = cacheImages([require('./assets/bg.jpg')]);
    await Promise.all([...imageAssets]);
  }

  render(){
    
    if(this.state.isReady){
      return(
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({ isReady:true })}
          onError={console.warn}
        />
      );
    }
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
  }
}
