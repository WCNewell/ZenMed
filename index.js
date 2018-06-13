import React from 'react'
import { AppRegistry, View} from 'react-native';
import Header from './src/components/Header'
import DailyQuote from './src/components/DailyQuote'

const App = () => (
    <View style= {{ flex: 1 }}>
        <Header headerText={'ZenMed'}/>
        <DailyQuote />
    </View>
)

AppRegistry.registerComponent('ZenMed', () => App)
