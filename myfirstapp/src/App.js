import React from 'react';
class App extends React.Component {
	constructor(props) {
		super(props);
		this.compStyle = {
			color: props.color,
			fontSize: props.size + "px"
		};
		this.currDate = new Date();
		// Note that re-rendering the App from index.js does not change the state or the currDate,
		// (which is why the state:counter can keep its value across render() calls)
		// the below setInterval updates the date.
		setInterval(this.refreshDate, 1000);
	}

	state = {counter: "0"};
	clickMethod = ()=> {
		this.setState({counter:parseInt(this.state.counter)+1});
		this.props.clickEvent();
	}
	refreshDate = ()=> {
		this.currDate = new Date();
	}
	// Override render method. Can only return 1 component, but with children.
	render() {
		return <div>
					<h1>Hello World!</h1>
					<h2 style={this.compStyle}>The time now is {this.currDate.toLocaleTimeString()}.</h2>
					<button onClick={this.clickMethod}>ClickMe!</button>
					<br/>
					Button clicks: {this.state.counter}
			</div>

	}
}




/*
function App() {
	const currDate = new Date();

    return (
        <div>
            <h1>Hello World</h1>
            <h2>The time now is {currDate.toLocaleTimeString()}.</h2>
        </div>
    );
}*/

export default App;
