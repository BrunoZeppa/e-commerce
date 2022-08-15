
import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home, LogIn, Purchases, ProductDetail, Cart } from "./pages";
import { NavBar, LoadingScreen, Footer, ProtectedRoutes } from "./components";
import { useSelector } from 'react-redux';
import Register from './pages/Register';


function App() {

  const isLoading = useSelector(state => state.isLoading);

  console.log(isLoading)

  return (
    <div className="App">
      <HashRouter>
        <NavBar />
        {isLoading && <LoadingScreen />}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/register' element={<Register />} />
          <Route element={<ProtectedRoutes />} >
            <Route path='/purchases' element={<Purchases />} />
          </Route>
          <Route path='/product/:id' element={<ProductDetail />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  )
}

export default App
