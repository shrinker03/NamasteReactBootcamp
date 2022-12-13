import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Router } from '../src/utils/Routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={Router} />);
