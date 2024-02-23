import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx';
import HotelDetails from "./HotelDetails.jsx";
import GuideDetails from "./components/GuideDetails.jsx";
import './index.css';
import '@fontsource/firago';

if (import.meta.hot) {
  import.meta.hot.on(
    "vite:beforeUpdate",
    /* eslint-disable-next-line no-console */
    () => console.clear()
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "hotels/:hotelId",
    element: <HotelDetails />
  },
  {
    path: "guides/:guideId",
    element: <GuideDetails />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
