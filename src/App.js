import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import MainPage from './Features/mainpage';
import './App.css';
import React from 'react';

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainPage />} />
  )
);

export const context = React.createContext();

export default function App() {
  return (
    <React.StrictMode>
      <context.Provider value={{}}>
        <RouterProvider router={ route } />
      </context.Provider>
    </React.StrictMode>
  )
}
