import React from 'react'
import { AppRegistry, View} from 'react-native';
import Header from './src/components/Header'
import ArticleList from './src/components/ArticleList'

const App = () => (
    <View style= {{ flex: 1 }}>
        <Header headerText={'ZenMed'}/>
        <ArticleList />
    </View>
)

AppRegistry.registerComponent('ZenMed', () => App);
