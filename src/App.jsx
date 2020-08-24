import React from 'react';
import { useRoutes } from 'react-router-dom';
import Whoops404 from './component/whoops404';
import Products from './component/products';
import Events from './component/events';
import About from './component/about';
import Home from './component/home';
import Contact from './component/contact';
import './stylesheets/pages.scss';
import Services from './component/about/services';
import History from './component/about/history';
import Location from './component/about/location';

function App() {
  return useRoutes([
    { path: '/', element: <Home /> },
    {
      path: 'about',
      exact: true,
      element: <About />,
      children: [
        {
          path: 'services',
          element: <Services />,
        },
        { path: 'history', element: <History /> },
        {
          path: 'location',
          element: <Location />,
        },
      ],
    },
    { path: 'events', element: <Events /> },
    { path: 'products', element: <Products /> },
    { path: 'contact', element: <Contact /> },
    { path: '*', element: <Whoops404 /> },
    {
      path: 'services',
      redirectTo: 'about/services',
    },
  ]);
}

export default App;
