import React from 'react';

import {BrowserRouter as Router} from 'react-router-dom';
import MainComponet from './components/main';
/**
 * 使用 react-router 作为路由功能
 */

const App: React.FC = () => {
  return (
    <Router>
      <MainComponet />
    </Router>
  );
}

export default App;
