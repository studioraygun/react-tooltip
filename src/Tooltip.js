import React, { Component } from 'react';
import './Tooltip-Skeleton.css';
import './Tooltip-Theme.css';

class Tooltip extends Component {
	constructContent(){
		return (
			<span>
				{this.props.text}
				<span className={"tooltip__tip " + this.props.position }>{this.props.tip}</span>
			</span>
		)
	}
	
	constructToolTip(){
		if(this.props.path){
			return (
				<a href={this.props.path} className="tooltip__text" aria-label={this.props.tip}>
					{this.constructContent()}
				</a>
			)
		} else {
			return (
				<span className="tooltip__text" aria-label={this.props.tip}>
					{this.constructContent()}
				</span>
			)
		}
	}

	render() {
		return <span className="tooltip">{this.constructToolTip()}</span>
	}
}

Tooltip.defaultProps = {
	position: 'top'
};

export default Tooltip;
