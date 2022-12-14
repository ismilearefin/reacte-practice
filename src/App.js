
import {  createContext, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Country from './components/Country/Country';
import Main from './components/Layout/Main/Main';

import Service from './components/Service/Service';

import { Header } from './Header/Header';



export  const newContext = createContext();
function App() {
  const [con,setcon] = useState([])
    const setData =(x)=>{
    setcon ((prev) => [...prev,x] )
};
  const router = createBrowserRouter([
    {
      path:'/',
        element:<Main></Main>,
      children:[
        {
          path: '/home',
          element: <Header></Header>
        },
          {
            path:'about',
            element:<About></About>
          },
          {
            path:'service',
            loader:async()=>{
              return  fetch('https://restcountries.com/v3.1/all')
              },
            element:<newContext.Provider value={con}><Service setData={setData}></Service></newContext.Provider>
          },
          // con={con}
          {
            path: 'countrys',
            element: <Country con={con}></Country>
          }
      ]
    },
    {
      path:'*',
      element: <p>404 Error</p>
    }
    
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
