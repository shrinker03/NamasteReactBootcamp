import { createBrowserRouter } from "react-router-dom";
import App from "./Pages/App";
import History from "./Pages/History";
import Home from "./Pages/Home";
import Library from "./Pages/Library";
import Shorts from "./Pages/Shorts";
import Subscription from "./Pages/Subscription";
import WatchLater from "./Pages/WatchLater";
import WatchVideo from "./Pages/WatchVideo";
import YourVideos from "./Pages/YourVideos";

const Router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/shorts',
          element: <Shorts />
        },
        {
          path: '/subscription',
          element: <Subscription />
        },
        {
          path: '/library',
          element: <Library />
        },
        {
          path: '/history',
          element: <History />
        },
        {
          path: '/yourvideos',
          element: <YourVideos />
        },
        {
          path: '/watchlater',
          element: <WatchLater />
        },
        {
          path: '/watch/:id',
          element: <WatchVideo />
        },
      ]
    },
])

export default Router;