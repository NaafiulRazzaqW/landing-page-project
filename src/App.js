import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Nav from './components/Nav';
import Banner from './components/Banner';
import Projects from './components/Projects';
import { Suspense } from 'react';
import Createaccount from './Createaccount';
import Login from './Loginaccount';
import Perpustakaan from './form/Formperpustakaan';
import Register from './form/Registermember';
import Todo from './form/todo';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Nav/>,
      children: [
        {
          path: '/',
          element: <Banner/>
        },
        {
          path: '/project',
          element: <Projects/>
        }
      ]
    },
    {
      path: '/create-account',
      element: <Createaccount/>
    },
    {
      path: '/login',
      element: <Login/>
    },
    {
      path: '/form-perpustakaan',
      element: <Perpustakaan/>
    },
    {
      path: '/form-pendaftaran',
      element: <Register/>
    },
    {
      path: '/todo',
      element: <Todo/>
    }
  ])
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <RouterProvider router={router}/>
    </Suspense>
  );
}

export default App;
