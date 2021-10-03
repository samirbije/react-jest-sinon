import React, { Component } from 'react';
import axios from 'axios';
import { baseApiUrl } from './Article';


interface ArticlesChildProps {
	key: number;
	index: number;
	id: number;
	title: string;
	description: string;
	created: string;
	deleteArticleBoard: (index: number) => void;
}


class ArticleChild extends Component<ArticlesChildProps> {
	deleteArticle = async () => {
		const headers = {
			'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
		};
		const data = { "id": this.props.id };
		try {
			await axios.delete(`${baseApiUrl}/delete_article.php`,
				{
					data: data,
					headers
				},
			)
			this.props.deleteArticleBoard(this.props.index);
		} catch (error) {
			console.log(error)
		}
	}

	render() {
		const { title, description, created, index } = this.props;
		const ind = index + 1;
		return (
			<tr key={ind}>
				<td>{ind}</td>
				<td>{title}</td>
				<td>{description}</td>
				<td>{created}</td>
				<td>
					<button onClick={this.deleteArticle}>
						Delete
					</button>
				</td>
			</tr>
		)
	}

}

export default ArticleChild;