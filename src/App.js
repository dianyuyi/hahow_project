import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import React from 'react';
import ListScreen from './screens/ListScreen'
import ProfileScreen from './screens/ProfileScreen';

import {
  ResetStyle,
  GlobalStyle,
} from "./styles/common/globalStyle";

function App() {
  return (
    <>
      <ResetStyle />
      <GlobalStyle />
      <Router>
        <Route exact path='/' render={() => <Redirect to='/heroes' />} />
        <Route path='/heroes' component={ListScreen} />
        <Route path='/heroes/:heroId' component={ProfileScreen} />
      </Router>
    </>
  );
}

export default App;
