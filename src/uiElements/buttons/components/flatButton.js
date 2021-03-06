var React = require('react');
var classNames = require('classnames');
var ToolTip = require('./toolTip');

//## Flat Button

// @PROPS:
// ClassName: String,
// Icon: String,
// onClick: Function, 

var FlatButton = React.createClass({

	//The flat button component has a set className of button and what ever className has been passed
    //in will be added on too the end.
	getButtonClassName: function() {
        return classNames('button-flat', this.props.type, this.props.className, {
			"tool-tip-button" : this.props.toolTip
		});
	},

	//Similar to the button className function, this takes in an icon prop. Make sure that the icon you pass in is
    //part of the linear icon pack.
	getIcon: function() {
		return (
			<i className={' icon icon-' + this.props.icon} style={this.getStyle()}></i>
		)
	},

	getText: function() {
		if (this.props.text) {	
			return (
				<span className="flat-button-text">	
					{this.props.text}
				</span>
			)
		}
	},

	getStyle: function() {
		if (this.props.text && this.props.icon) {
			return ({
				marginRight: 5
			})
		}
	},

	renderButton: function(button) {
		if(this.props.toolTip) {
			return (
				<ToolTip toolTip={this.props.toolTip} toolTipPosition={this.props.toolTipPosition}>
					{button}
				</ToolTip>
			)
		}
		return button
	},

	//Renders the entire flat button.
	render: function() {
		return this.renderButton(
			<button disabled={this.props.disabled} className={this.getButtonClassName()} onClick={this.props.onClick}>
				{this.getIcon()}
				{this.getText()}				
			</button>
		);
	}

});

module.exports = FlatButton;