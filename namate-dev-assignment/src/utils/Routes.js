import App from '../App';
import { createBrowserRouter } from 'react-router-dom';
import RouteError from '../Components/RouteError';
import MateInfo from '../Components/MateInfo';
import MyTeam from '../Components/MyTeam';
import About from '../Components/About';
import Profile from '../Components/Profile';

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <RouteError />,
    children: [
      {
        path: '',
        element: <MyTeam />
      },
      {
        path: 'mate/:id',
        element: <MateInfo />
      }
    ]
  },
  {
    path: '/about',
    element: <About />,
    children: [
      {
        path: '/about/profile',
        element: <Profile />
      }
    ]
  }
]);
