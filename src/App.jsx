import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'
import Nav from './components/Nav/Nav'
import Projects from './components/Projects/Projects'
const App = () => {
  return (
    <div className='w-screen h-full text-white bg-[rgb(17,20,23)]'>
      <Nav />
      <Home />
      <Projects />
      <About />
      <Contact />
    </div>
  )
}

export default App