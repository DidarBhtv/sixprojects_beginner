import React from 'react';
import { Success } from './componets/Success';
import User from './componets/Users/User';
import './index.css';


// Тут список пользователей: https://reqres.in/api/users

function App() {
  return (
    <div className="App">
      <User/>
      <Success />
    </div>  
  );
}    


export default App;
