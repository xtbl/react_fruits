import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import _ from 'lodash';
import { queryHelpers } from '@testing-library/react';
import {choice, remove} from './helpers';
import fruits from './foods';

ReactDOM.render(<App />, document.getElementById('root'));

console.log(fruits);

const RANDOMFRUIT = choice(fruits);

console.log(`I'd like one ${RANDOMFRUIT}, please`);

console.log(`Here you go: ${RANDOMFRUIT}`);

console.log(`Delicious! May I have another?`);

const updatedFruits = remove(fruits, RANDOMFRUIT);

console.log(`I'm sorry, we're all out. We have ${updatedFruits.length} left.`);

console.log(updatedFruits);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();