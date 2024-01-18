import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/views/list/index';
import CustomLayout from '@/components/Layout/CustomLayout';

ReactDOM.createRoot(document.getElementById('root')).render(
  <CustomLayout>
    <App />
  </CustomLayout>,
);
