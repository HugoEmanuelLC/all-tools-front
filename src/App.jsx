// Dependencies
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

// Components
import LoadingPage from './components/loading-component/loading';
import Navbar from './components/navbar-component/navbar';
import Header from './components/header-component/header';
import Footer from './components/footer-component/footer';

//Pages
import HomePage from './pages/home-page/home-page';
import NotFound from './pages/not-found-page/not-found';

// Pages Authentication
import Authentication from './pages/authentication-page/authentication';
import VerifyLink from './pages/authentication-page/components/verify-link';

// Scripts
import { deleteCookie, checkCookie } from './pages/authentication-page/scripts/authentication-scripts';

// Hooks
import AppContext from './hooks/app-context';


function App() {
  const [ checkAuth, setCheckAuth ] = useState(false)
  const [ loading, setLoading ] = useState(true)
  const [urlCurrent, setUrlCurrent] = useState("")

  const handleDeleteCookie = () => {
    deleteCookie("auth")
    setCheckAuth(false)
    setLoading(true)
  }

  const handleLoading = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 800)
  }

  useEffect(() => {
    checkCookie("auth") ? setCheckAuth(true) : setCheckAuth(false)
    const timer = setTimeout(() => {
      loading && setLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [checkAuth])



  return (
    loading ? <LoadingPage /> : 
    <AppContext.Provider value={{setCheckAuth, setLoading}}>
      <header className=''>
        <div className="logo">
            <span>hugoclavinas</span>
        </div>
        <Navbar checkAuth={checkAuth} handleLoading={handleLoading} 
        handleDeleteCookie={handleDeleteCookie} setUrlCurrent={setUrlCurrent} />
        
        <span className='underline'></span>
      </header>

      {/* routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        <Route path="/login" element={ checkAuth == false ? <Authentication url="login" /> : <HomePage />} />
        <Route path="/register" element={ checkAuth == false ? <Authentication url="register" /> : <HomePage />} />
        <Route path="/forgot-password" element={ checkAuth == false ? <Authentication url="forgot-password" /> : <HomePage />} />
        
        <Route path="/verify-link" element={ <VerifyLink /> } />
        <Route path="/page-1" element={ checkAuth ? <h1>page visible seulement avec authentification</h1> : <NotFound /> } />
        
        <Route path="/*" element={ <NotFound /> } />
      </Routes>

      <Footer />
    </AppContext.Provider>
  )
}

export default App
