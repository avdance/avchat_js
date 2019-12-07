import React from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom';
import HomeComponet from './pages/home';
import LoginComponet from './pages/login';
/**
 * 使用 react-router 作为路由功能
 */

const App: React.FC = () => {
  return (
    <Router>
      <Route exact path="/" component={LoginComponet} />
      <Route exact path="/login" component={LoginComponet} />
      <Route exact path="/home" component={HomeComponet} />
    </Router>
  );
}

export default App;
