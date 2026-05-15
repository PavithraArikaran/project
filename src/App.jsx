import './App.css'
import { useEffect, useState } from 'react'
import About from './components/About'
import Home from './components/Home'

const getRoute = () => {
  if (window.location.pathname === '/about' || window.location.hash === '#/about') {
    return 'about'
  }

  return 'home'
}

function App() {
  const [route, setRoute] = useState(getRoute)

  useEffect(() => {
    const handleRouteChange = () => setRoute(getRoute())

    window.addEventListener('hashchange', handleRouteChange)
    window.addEventListener('popstate', handleRouteChange)

    return () => {
      window.removeEventListener('hashchange', handleRouteChange)
      window.removeEventListener('popstate', handleRouteChange)
    }
  }, [])

  return route === 'about' ? <About /> : <Home />
}

export default App
