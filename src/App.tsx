import { createBrowserRouter, RouterProvider } from 'react-router';
import './App.css'
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Resume from './pages/Resume';


const routes = [{
  path : '/',
  element : <MainLayout />,
  children : [
    {path : '', element : <Home />},
    {path : 'contact' , element : <Contact />},
    {path : 'projects' , element : <Projects />},
    {path : 'resume' , element : <Resume />},
  ]
  
}];

const router = createBrowserRouter(routes);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
