import './App.css'

import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Header from './components/Header'
import Menu from './components/Menu'
import Nav from './components/Nav'
import Project from './components/Project'
import Skills from './components/Skills'

function App() {
  return (
    <>
      <Nav/>
      <main>
        <Header/>
        <About/>
        <Experience/>
        <Skills/>
        <Project/>
        <Contact/>
        <Footer/>
        <Menu/>
      </main>
    </>
  )
}

export default App