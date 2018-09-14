import React from 'react';
import { hot } from 'react-hot-loader';
import { Home } from '../Home';

const App = () => <Home />;

export { App as AppUnwrapped };
export default hot(module)(App);
