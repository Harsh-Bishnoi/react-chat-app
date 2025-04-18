import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Hero from './components/Hero'
import Instant from './components/Instant';
import Perfect from './components/Perfect';
import { Suspense } from 'react';
import Footer from './components/footer';
function App() {
  return (
    <>
      <Suspense>
        <Header />
        <Hero />
        <Instant />
        <Perfect />
        <Footer/>
      </Suspense>

    </>
  )
}

export default App
