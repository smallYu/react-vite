import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/views/test/index';
import CustomLayout from '@/components/Layout/CustomLayout';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CustomLayout>
      <App />
    </CustomLayout>
  </React.StrictMode>,
);
