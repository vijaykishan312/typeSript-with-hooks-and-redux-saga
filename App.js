/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { SafeAreaView } from 'react-native';
import {Provider} from "react-redux";
import Store from './Store/configureStore';
const store = Store()
import Hello from "./Pages/hello";

const App = () => {
  return (
      
    <Provider store={store}>
        <SafeAreaView>
          <Hello/>
      </SafeAreaView>
      </Provider>
  );
};

export default App;
