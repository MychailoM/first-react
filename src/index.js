// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// const img =
//   "https://content1.rozetka.com.ua/goods/images/preview/297049203.jpg";

// const productPrice = 1000;

// const card = (
//   <div>
//     <img alt="coffe machine" src={img} />
//     <h2>coffe machine</h2>
//     <h2>Price: {500+500}</h2>
//     <button type="button">buy</button>
//   </div>
// );

import React from "react";
import ReactDOM from "react-dom/client";

const users = [
  { name: "Іван", age: 25 },
  { name: "Олена", age: 30 },
  { name: "Петро", age: 22 },
];

const daysOfWeek = [
  "неділя",
  "понеділок",
  "вівторок",
  "середа",
  "четвер",
  "п’ятниця",
  "субота",
];

const now = new Date();
const dayName = daysOfWeek[now.getDay()];
const dayNumber = now.getDate();

const card = (
  <div>
    <ul>
      {users.map((user, index) => (
        <li key={index}>
          Ім'я: {user.name}, Вік: {user.age} років
        </li>
      ))}
    </ul>

    <p>
      Сьогодні {dayName}, {dayNumber}
    </p>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(card);








ReactDOM.createRoot(document.getElementById('root')).render(card)