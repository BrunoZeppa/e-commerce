
import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home, LogIn, Purchases, ProductDetail, Cart } from "./pages";
import { NavBar, LoadingScreen, Footer } from "./components";
import { useSelector } from 'react-redux';


function App() {

const isLoading = useSelector(state => state.isLoading);

console.log(isLoading)

  return (
    <div className="App">
      <NavBar />
      {isLoading  && <LoadingScreen />}
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/purchases' element={<Purchases />} />
          <Route path='/product/:id' element={<ProductDetail />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </HashRouter>
      <Footer />
    </div>
  )
}

export default App
