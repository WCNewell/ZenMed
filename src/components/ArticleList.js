import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import axios from 'axios'
import ArticleList from './ArticleList'

class ArticleList extends Component {
    state = {
        articles: []
    } // initializing state
    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({
                albums: response.data
            }))
    }

    renderArticles() {
        return this.state.albums.map(album =>
            <ArticleDetail key = { album.title } album = {album}/>)
        }

        render() {
            console.log(this.state)

            return (
                <ScrollView>
                    {this.renderArticles()}
                </ScrollView>
            )
        }
    }

    export default ArticleList