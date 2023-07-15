import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'components/App';
import './index.css';

import Store from 'components/redux/Store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
          <App />
    </Provider>

  </React.StrictMode>
);
