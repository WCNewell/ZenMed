import React, {  Component } from 'react'
import axios from 'axios'
import { Flatlist, ActivityIndicator, Text, View, Image, Linking } from 'react-native'
import Card from './Card'
import CardSection from './CardSection'
import Button from './Button'

class DailyQuote extends Component {
    state = { quote } // initializing state
    componentWillMount() {
        axios.get('https://quotes.rest/quote/random.json?api_key=WYIvXbe1f6_RzkfkFPNy6AeF')
            .then(response => this.setState({ quote: response.data }))
    }

    renderQuote() {
        return this.state(quote =>
        <CardSection quote={quote} />)
    }

    render () {
        console.log(this.state)

        return (
            <View>
                {this.renderQuote()}
            </View>
        )
    }
}

export default DailyQuote

// export default class DailyQuote extends React.Component {

// constructor(props){
//     super(props)
//     this.state ={ isLoading: true}
//   }

//   componentDidMount(){
//     return fetch('https://quotes.rest/quote/random.json?api_key=WYIvXbe1f6_RzkfkFPNy6AeF')
//       .then((response) => response.json())
//       .then((responseJson) => {
//           console.log

//         this.setState({
//           isLoading: false,
//           dataSource: responseJson.quote,
//         }, function(){

//         })

//       })
//       .catch((error) =>{
//         console.error(error);
//       })
//   }

//   render(){

//     if(this.state.isLoading){
//       return(
//         <View style={{flex: 1, padding: 20}}>
//           <ActivityIndicator/>
//         </View>
//       )
//     }

//     return(
//       <View style={{flex: 1, paddingTop:20}}>
//         <FlatList
//           data={this.state.dataSource}
//           renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
//           keyExtractor={(item, index) => index}
//         />
//       </View>
//     )
//   }
// }

// class DailyQuote extends Component {
//     state = { quote: [] } // initializing state
//     componentWillMount() {
//         const url = 'http://quotes.rest/quote/random'
//         fetch (url)
//             .then((response) => response.json())
//             .then(result => this.setState({quote: response.data}))
//             console.log(response.data)
//     }

//     renderQuote() {
//         return this.state.quotes.map(quote =>
//             <CardSection key = { quote.title } quote = {quote}/>)
//         }

//         render() {
//             console.log(this.state)

//             return (
//                 <View>
//                     {this.renderQuote()}
//                 </View>
//             )
//         }
// }

// const AlbumDetail = ({ album }) => {
// const { title, artist, thumbnail_image, image, url } = album
// const { thumbnailStyle,
//             headerContentStyle,
//             thumbnailContainerStyle,
//             headerTextStyle,
//             imageStyle
//     } = styles
    
//     return (
//         <Card>
//             <CardSection>
//                 <View style={thumbnailContainerStyle}>
//                     <Image
//                         style={thumbnailStyle}
//                         source={{ uri: thumbnail_image }} />
//                 </View>
//                 <View style={headerContentStyle}></View>
//                 <View>
//                     <Text style={headerTextStyle}>{quote}</Text>
//                     <Text>{quote}</Text>
//                 </View>
//             </CardSection>

//             <CardSection>
//                 <Image
//                     style={imageStyle}
//                     source={{ uri: image }}/>
//             </CardSection>

//             <CardSection>
//                 <Button onPress={() => Linking.openURL(url)}>
//                     Press for Daily Quote
//                 </Button>
//             </CardSection>
//         </Card>
//     )
// }

// const styles = {
//     headerContentStyle: {
//         flexDirection: 'column',
//         justifyContent: 'space-around'

//     },
//     headerTextStyle: {
//         fontSize: 18
//     },
//     thumbnailStyle: {
//         height: 50,
//         width: 50
//     },
//     thumbnailContainerStyle: {
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginLeft: 10,
//         marginRight: 10
//     },
//     imageStyle: {
//         height: 300,
//         flex: 1,
//         width: null
//     }
// }

