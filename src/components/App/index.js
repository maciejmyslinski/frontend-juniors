import React from 'react';
import { hot } from 'react-hot-loader';
import { Home } from '../Home';
import { searchPeople } from '../Home/api';

const App = () => <Home searchPeople={searchPeople} />;

export { App as AppUnwrapped };
export default hot(module)(App);
