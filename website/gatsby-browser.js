// Importing the necessary dependencies
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/store';

// Wrapping the root element with the Redux provider
export const wrapRootElement = ({ element }) => {
  return (
    <Provider store={store}>
      {element}
    </Provider>
  );
};