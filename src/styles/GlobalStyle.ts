import 'react-toastify/dist/ReactToastify.css';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle` 
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  :root {
    --white: #F0F6FF;
    --white-gray: #CFD0D1;
    --dark: #343434;
    --orange: #FA9C7F;
    --blue: #7AAFFF;
    --green: #C4F684;
    --green-light: #ECF7EA;
    
    --brown-gradient: linear-gradient(175.16deg, rgba(184, 191, 167, 0.61) 0%, rgba(111, 89, 77, 0.71) 80.95%);
    --gray-gradient: linear-gradient(128.61deg, rgba(192, 188, 185, 0.71) 6.15%, #232633 72%);
    --boomerang: all 500ms cubic-bezier(0.18, 0.89, 0.32, 1.28);
    --shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  }
  
  html {
    font-size: 62.5%;
    box-sizing: border-box;
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    // ---
    body .Toastify .Toastify__toast-container .Toastify__toast--success {
      & .Toastify__progress-bar--success {
        background-color: #92df7b;
      }

      background: rgba(255, 255, 255, 0.9);
      font-size: 1.7rem;
      
      svg {
        fill: #92df7b;
      }
    }
    
    body .Toastify .Toastify__toast-container .Toastify__toast--warning {
      font-size: 1.7rem;
      /* background: #d73743; */
      
    }
    
    body .Toastify .Toastify__toast-container .Toastify__toast--error {
      & .Toastify__progress-bar--error {
        background-color: var(--orange);
      }
      font-size: 1.7rem;
      svg {
        fill: var(--orange);
      }
      /* background: var(--orange); */
    }
    // ---

    ul {
      li {
        list-style: none;
      }
    }

    button {
      border: none;
    }

    input {
      outline: none;
			border: none;
    }

    code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
  }
`;
