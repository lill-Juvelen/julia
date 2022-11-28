import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './App';
import { version } from 'react';

console.log(version);
ReactDOM.render(<App tab="home" />, document.getElementById("root"))
