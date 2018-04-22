import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './Counter';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Counter 
  from={10} to={0} />, 
  document.getElementById('root'));
registerServiceWorker();
