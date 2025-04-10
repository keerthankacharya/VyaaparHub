import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './components/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Root.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import FruitsVegetables from './components/Shop/fruitsVegetables/fruitsVegetables.jsx'
import DairyBread from './components/Shop/dairyBread/dairyBread.jsx'
import ProvisionalItems from './components/Shop/provisionalItems/provisionalItems.jsx'
import HomeEssentials from './components/Shop/homeEssentials/homeEssentials.jsx'
import Login from './components/Login/Login.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
      path: '',
      element: <Home />
    },
    {
      path: 'about',
      element: <About />
    },
    {
      path: 'contact',
      element: <Contact />
    },
    {
      path: 'fruitsVegetables',
      element: <FruitsVegetables />
    },
    {
      path: 'dairyBread',
      element: <DairyBread />
    },
    {
      path: 'provisionalItems',
      element: <ProvisionalItems />
    },
    {
      path: 'homeEssentials',
      element: <HomeEssentials />
    },
    {
      path: 'login',
      element: <Login />
    }
]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
