import React from 'react';
import './styles/normolize.css';
import './styles/root.css'
import './styles/App.css'
import './styles/transitionGroupStyle.css'
import Title from './components/UI/Title';
import ToDo from './components/UI/ToDo';

const App:React.FC  = () => {
  return (
    <div className="todo-wrap">
      <Title/> {/* заглавная надпись */}
      <ToDo /> {/* тело приложения*/}
    </div>
  );
}

export default App;
