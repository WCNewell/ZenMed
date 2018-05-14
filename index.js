import React from 'react'
import { AppRegistry, View} from 'react-native';
// import App from './App';
import Header from '.src/components/Header'

const APP = () => (
    <View style= {{ flex: 1 }}>
        <Header headerText={'ZenMed'} />
    </View>
)

AppRegistry.registerComponent('ZenMed', () => App);
