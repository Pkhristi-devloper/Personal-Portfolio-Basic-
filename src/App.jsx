import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'
import Nav from './components/Nav/Nav'
import Projects from './components/Projects/Projects'
const App = () => {
  return (
    <div className='w-full overflow-x-hidden h-full text-white flex flex-col bg-[rgb(17,20,23)]'>
      <Nav />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default App