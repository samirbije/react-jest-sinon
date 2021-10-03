import React, { Component } from 'react';
import ArticleList from './ArticleList';
import axios from 'axios';

export const baseApiUrl = 'http://localhost/backend';

interface State {
	articles: Articles[];
}

export interface Articles {
	id: number;
	title: string;
	description: string;
	created: string;
}

class Article extends Component<{}, State> {
	constructor(props) {
		super(props);
		this.state = {
			articles: [],
		}
	}

	async componentDidMount() {
		try {
			const response: any = await axios.get(`${baseApiUrl}/read_articles.php`);
			this.setState({
				articles: response.data
			});
		} catch (error) {
			console.error(error);
		}
	}

	removeArticle = (index: number) => {
		const arr = this.state.articles;
		arr.splice(index, 1)
		this.setState({ articles: arr })
	}

	add = async (data) => {
		const headers = {
			'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
		};
		try {
			const articles: any = await axios.post(`${baseApiUrl}/create_article.php`,
				data,
				{ headers }
			)
			const arr = this.state.articles
			arr.push(articles.data)
			this.setState({ articles: arr })
		} catch (error) {
			console.log(error)
		}
	}

	render() {
		return (
			<div className="container" >
				<ArticleList articles={this.state.articles} add={this.add} removeArticle={this.removeArticle} />
			</div>
		)
	}
}

export default Article;