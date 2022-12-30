import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from './Components/Login/Login';
import Register from './Components/Login/Register';
import Home from './Components/Home/Home';
import Logreg from './Components/Login/Logreg';
import Footer from './Components/Footer';
import Search from './Components/Search/Search';
import Profile from './Components/Profile/Profile';
import Artikel from './Components/Artikel/Artikel';
import Kpop from './Components/Artikel/Kpop';
import Yoasobi from './Components/Artikel/yoasobi';
import Gkpop from './Components/Artikel/Gkpop';
import Gjpop from './Components/Artikel/Gjpop';
import Createartl from './Components/Artikel/Createartl';
import Gjazz from './Components/Artikel/Gjazz';
import Grock from './Components/Artikel/Grock';
import Gpop from './Components/Artikel/Gpop';
import Gitar from './Components/Artikel/Gitar';
import Violin from './Components/Artikel/Violin';
import Piano from './Components/Artikel/Piano';
import Happy from './Components/Artikel/Happy';
import Sad from './Components/Artikel/Sad';
import Study from './Components/Artikel/Study';
import Otw from './Components/Artikel/Otw';



const router = createBrowserRouter([
  {
    path:"/",
    element:<Logreg/>
  },
  {
    path:"login",
    element:<Login/>
  },
  {
    path:"/register",
    element:<Register/>
  },
  {
    path:"/home",
    element:<Home/>
  },
  {
    path:"/footer",
    element:<Footer/>
  },
  {
    path:"/search",
    element:<Search/>
  },
  {
    path:"/profile",
    element:<Profile/>
  },
  {
    path:"/artikel",
    element:<Artikel/>
  },
  {
    path:"/kpop",
    element:<Kpop/>
  },
  {
    path:"/yoasobi",
    element:<Yoasobi/>
  },
  {
    path:"/gkpop",
    element:<Gkpop/>
  },
  {
    path:"/gjpop",
    element:<Gjpop/>
  },
  {
    path:"/createartl",
    element:<Createartl/>
  },
  {
    path:"/gjazz",
    element:<Gjazz/>
  },
  {
    path:"/grock",
    element:<Grock/>
  },
  {
    path:"/gpop",
    element:<Gpop/>
  },
  {
    path:"/gitar",
    element:<Gitar/>
  },
  {
    path:"/violin",
    element:<Violin/>
  },
  {
    path:"/piano",
    element:<Piano/>
  },
  {
    path:"/happy",
    element:<Happy/>
  },
  {
    path:"/sad",
    element:<Sad/>
  },
  {
    path:"/study",
    element:<Study/>
  },
  {
    path:"/otw",
    element:<Otw/>
  }
])
function App() {
  return (
    <div className='flex bg-black h-full'>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App;