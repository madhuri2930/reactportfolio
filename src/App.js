import './App.css';
import Header from './components/header/Header'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'
import Nav from './components/nav/Nav'
import Portfolio from './components/portfolio/Portfolio'
import About from './components/about/About'



function App() {
  return (
    <>
     < Header/>
   <Nav/>
   <About/>
   <Experience/>
   <Portfolio/>
   <Contact/>
   <Footer/>
    </>
  );
}

export default App;
