import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


/*
async function delete_data() {
  let url = 'http://localhost:3003/plans/';

  await fetch(url)
     .then(response => response.json())
     .then(async(main) => {
        for(let i = 0; i < main.length + 1; i++) {

          await fetch(`http://localhost:3003/plans/${i}`, {
             method: 'DELETE'
          })

        }
     })


}

delete_data();
*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
