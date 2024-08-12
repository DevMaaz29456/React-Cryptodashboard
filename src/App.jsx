import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './Pages/Dashboard/Dashboard';
import Support from './Pages/Support/Support';
import TransactionPage from './Pages/TransactionPage/TransactionPage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/dashboard',
      element: <Dashboard />,
    },
    {
      path: '/transactionpage',
      element: <TransactionPage />,
    },
    {
      path: '/support',
      element: <Support />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
