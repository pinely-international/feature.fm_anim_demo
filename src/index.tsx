import React from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';
import { App } from './app';

const GlobalStyle = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400..500&display=swap');
	
	* {
		user-select: none;
		font-family: "Outfit", sans-serif;
	}
`;

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <App />
      <GlobalStyle />
    </React.StrictMode>,
  );
}
