import React from 'react';
import {Button} from 'react-bootstrap';

export default class Search extends React.Component {
	constructor() {
		super();
		this.state = {
			queryObject:{},
			currentCategory:''
		};
	}

	render() {
		return <div>
			<Button >Test</Button>
		</div>;
	}
}
