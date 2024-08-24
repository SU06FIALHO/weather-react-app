import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SearchEngine from './SearchEngine';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="SearchEngine">
      <h1>Weather Search Engine</h1>

      <SearchEngine />
    </div>
    <footer>
      <a href="https://github.com/SU06FIALHO/weather-react-app" target='blank'> Open-source</a>{" "}
      code available, made by
      <a href="https://github.com/SU06FIALHO?tab=repositories" target='blank'> Susana Fialho </a>
      and hosted at
      <a href="https://app.netlify.com/teams/su06fialho/sites" target='blank'> Netlify. </a>
      
    </footer>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
