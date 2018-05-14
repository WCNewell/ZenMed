import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import axios from 'axios'
import ArticleDetail from './ArticleDetail'

class ArticleList extends Component {
    state = { articles: [] } // initializing state
    componentWillMount() {
        axios.get('')
            .then(response => this.setState({articles: response.data}))
    }

    renderArticles() {
        return this.state.articles.map(article =>
            <ArticleDetail key = { article.title } article = {article}/>)
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