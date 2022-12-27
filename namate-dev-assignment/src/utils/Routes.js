import App from '../App';
import { createBrowserRouter } from 'react-router-dom';
import RouteError from '../Components/RouteError';
const MateInfo = lazy(() => import('../Components/MateInfo'));
const MyTeam = lazy(() => import('../Components/MyTeam'));
import { lazy, Suspense } from 'react';
import Loading from '../Components/Loading.jsx';
import LandingPage from '../Components/LandingPage';

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    errorElement: <RouteError />
  },
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'mates',
        element: (
          <Suspense fallback={<Loading />}>
            <MyTeam />
          </Suspense>
        )
      },
      {
        path: 'mates/:id',
        element: (
          <Suspense fallback={<Loading />}>
            <MateInfo />
          </Suspense>
        )
      }
    ]
  }
]);
