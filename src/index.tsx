import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import App from './App';
import { store } from './app/store';
import { GlobalStyle } from './styles/GlobalStyle';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<GlobalStyle />
			<ToastContainer autoClose={3000} className='toast-container' />
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
