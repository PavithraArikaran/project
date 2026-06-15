import './App.css'
import { useEffect, useState } from 'react'
import About from './components/About'
import Download from './components/Download'
import Features from './components/Features'
import Home from './components/Home'
import Login from './components/Login'
import Pricing from './components/Pricing'
import Trial from './components/Trial'

const getRoute = () => {
  if (window.location.pathname === '/features' || window.location.hash === '#/features') {
    return 'features'
  }

  if (window.location.pathname === '/pricing' || window.location.hash === '#/pricing') {
    return 'pricing'
  }

  if (window.location.pathname === '/download' || window.location.hash === '#/download') {
    return 'download'
  }

  if (window.location.pathname === '/login' || window.location.hash === '#/login') {
    return 'login'
  }

  if (window.location.pathname === '/trial' || window.location.hash === '#/trial') {
    return 'trial'
  }

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

  if (route === 'features') {
    return <Features />
  }

  if (route === 'pricing') {
    return <Pricing />
  }

  if (route === 'download') {
    return <Download />
  }

  if (route === 'login') {
    return <Login />
  }

  if (route === 'trial') {
    return <Trial />
  }

  return route === 'about' ? <About /> : <Home />
}

export default App
