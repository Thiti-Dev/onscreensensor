import React, { Component } from 'react';
import * as Func from './utils/Functions';

export class OnScreenSensor extends Component {
	constructor(props) {
		super(props);
		this.canvas = React.createRef();
		this.state = {
			isOnscreen: false
		};
	}
	componentDidMount() {
		//Custom scroll event
		window.addEventListener('scroll', this.handleScroll.bind(this));

		//Trigger once when mounted
		this.handleScroll();
	}

	componentWillUnmount() {
		//Unregister Listener
		window.Events.scrollEvent.remove('scroll');
	}

	handleScroll(event) {
		if (this.canvas.current) {
			if (this.state.isOnscreen) {
				if (!Func.visibleY(this.canvas.current)) {
					this.setState({ isOnscreen: false }, () => {
						//Calling a callback function that passed into prop
						if (this.props.onChange) this.props.onChange(false);
					});
				}
			} else {
				if (Func.visibleY(this.canvas.current)) {
					this.setState({ isOnscreen: true }, () => {
						//Calling a callback function that passed into prop
						if (this.props.onChange) this.props.onChange(false);
					});
				}
			}
		}
	}

	render() {
		return (
			<React.Fragment>
				<div ref={this.canvas}>{this.props.children}</div>
			</React.Fragment>
		);
	}
}

export default OnScreenSensor;
