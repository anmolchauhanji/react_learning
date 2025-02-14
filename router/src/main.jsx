import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './layout.jsx'
import Home from './components/home/home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/contact/Contact.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import User from './components/User/User.jsx'
import { Github ,loader } from './components/Github/Github.jsx'

// const router = createBrowserRouter([
//   { 
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path:"",
//         element:<Home />,
//       },
//       {
//         path:"about",//why path is about  why not blank
//         element:<About/>,
//       },
//       {
//         path:"contact",
//         element:<Contact/>
//       }
//     ]
//   }
//   ])
const router =  createBrowserRouter(createRoutesFromElements(

    <Route path='/' element={<Layout/>}>
  <Route path='/' element={<Home/>}/>
  <Route path='about' element={<About/>}/>
  <Route path='contact' element={<Contact/>}/>
  <Route path='user/:userid' element={<User/>}/>
  <Route path='github' loader={loader} element={<Github/>}/>
  </Route>
))
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
