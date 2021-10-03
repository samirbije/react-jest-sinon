import React, { Component } from 'react';
import ArticleChild from './ArticleChild';
import { Articles } from './Article';


interface propsArticles {
	articles: Articles[];
	add?: (data: { title: string; description: string; }) => void;
	removeArticle?: (index: number) => void;
}

interface State {
	title: string;
	description: string;
	addModal: boolean;
}

class ArticleList extends Component<propsArticles, State>{
	constructor(props) {
		super(props);
		this.state = {
			description: "",
			title: "",
			addModal: false
		}
	}

	add = async () => {
		const { title, description } = this.state;
		this.props.add({
			title,
			description
		});
		this.setState({ addModal: false });
	}

	handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		this.setState({ title: value });
	}

	handleDesChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		this.setState({ description: event.target.value });
	}

	removeArticle = (index: number) => {
		this.props.removeArticle(index);
	}

	addNew = () => {
		this.setState({ addModal: true });

	}


	render() {
		const { articles } = this.props;

		return (
			<div className="well">
				<table id="userTable" className="table table-bordered table-stripped results">
					<thead>
						<tr>
							<th>ID</th>
							<th>Title</th>
							<th>Description</th>
							<th>Created Date</th>
							<th></th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{articles && articles.length > 0 ? articles.map((item, idx) => {
							return (
								<ArticleChild
									key={idx}
									index={idx}
									id={item.id}
									title={item.title}
									description={item.description}
									created={item.created}
									deleteArticleBoard={this.removeArticle}
								/>
							)
						}
						)
							: null}
					</tbody>
				</table>

				<fieldset>
					<p>
						<div style={{ width: '100%', margin: '0 auto' }}>
							<button
								type="button"
								className="btn btn-primary mt-10 pull-right"
								data-toggle="modal"
								data-target=".bs-example-modal-lg"
								onClick={this.addNew}
							>
								Add New
							</button>
						</div>
					</p>
				</fieldset>
				{this.state.addModal && (
					<div
						className="modal fade bs-example-modal-lg"
						id="ModalForm"
						role="dialog"
						aria-labelledby="myLargeModalLabel">
						<div className="modal-dialog modal-lg" role="document">
							<div className="modal-content panel panel-default">

								<p>
									<h3>Add New</h3>
								</p>
								<div className="row line-1">
									<div className="form-group col-md-8">
										<h5>Title</h5>
										<input
											type="text"
											name="title"
											className="form-control"
											id="title"
											value={this.state.title} onChange={this.handleChange}
										/>
									</div>

									<div className="form-group col-md-6">
										<h5>Description</h5>
										<textarea name='description' onChange={this.handleDesChange} placeholder="Type description here..."></textarea>
									</div>
								</div>
								<div className="center">
									<button
										type="button"
										className="btn btn-lg button-medium"
										onClick={this.add}
									>
										Submit
									</button>
									<button
										type="button"
										className="btn btn-lg button-medium second"
										data-dismiss="modal"
									>
										Close
									</button>
								</div>
							</div>
						</div>
					</div>
				)}
			</div >

		);
	}

}

export default ArticleList;
