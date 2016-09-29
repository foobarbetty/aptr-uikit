var React = require('react');
var Button = require('../buttons/button');
var classNames = require('classnames') 

var SearchBar = React.createClass({

	getInitialState: function() {
		return {
			value: ''
		}
	},

	getButton: function() {
		var Height = false;

		if (this.props.isSmall === true) {
			var Height = true

		}

		if (this.state.value.length === 0) {
			return (
				<Button icon='magnifier' className='search-bar-button' isSmall={Height}/>
			)
		} else {
			return (
				<Button icon='cross-circle' className='primary search-bar-button' onClick={this.onButtonClicked} isSmall={Height}/>
			)
		}
	},

	getClassName: function() {
		return classNames('search-bar', this.props.className);
	},

	getInputClassName: function() {
		if (this.props.isSmall === true) {
			return classNames('search-bar-input', 'small')
		} else {
			return classNames('search-bar-input')
		}
	},	

	onButtonClicked: function(event) {
		event.preventDefault();
		this.setState({
			value: ''
		})
		this.props.onChange('');
	},

	onChange: function(event) {
		var value = event.target.value;
		this.props.onChange(value);

		this.setState({
			value: value
		})
	},

	render: function() {
		return (
			<div className={this.getClassName()}>
				<input className={this.getInputClassName()} value={this.state.value} onChange={this.onChange} />
				{this.getButton()}
			</div>								
		);
	}
});

module.exports = SearchBar;