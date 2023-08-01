import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { store, persistor } from 'components/redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from 'components/App';

import { PersistGate } from 'redux-persist/lib/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
