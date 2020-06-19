import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('wrap')/* index.js의 #root에 app.js에 실행된 내용을 집어넣는 기능. */
);