import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Store from 'components/redux/Store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from 'components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
      <BrowserRouter>
          <App/>
      </BrowserRouter>
          
    </Provider>

  </React.StrictMode>
);
