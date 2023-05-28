import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

function refresh() {
  root.render(
	<React.StrictMode>
		<App color="blue" size="25" 
			clickEvent={()=>{alert("You clicked me!")}} 
		/>
	</React.StrictMode>);
}

// This refresh() redraws the App. The App itself has a setInterval that refreshes the date in its state.
setInterval(refresh, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
