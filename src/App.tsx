import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './styles/AppStyle/App.css'

import MainPage from './components/MainPage'
import Portfolio from './components/Portfolio'
import Overlay from './components/Overlay'
import Footer from './components/Footer'
import Resume from './components/Resume'
import About from './components/About'


function App() {
  const [section, setSection] = useState('main')

  function changeSection(newSection: string) {
    setSection(newSection)
    window.scrollTo(0, 0)
  }
  
  return (
    <>
    <Overlay changeSection={changeSection}/>
    {section === 'main' && <MainPage/>}
    {section === 'portfolio' && <Portfolio/>}
    {section === 'resume' && <Resume/>}
    {section === 'about' && <About/>}
    <Footer/>
    </>
  )
  // return (
  //   <>
  //     <div>
  //       <a href="https://vite.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )
}

export default App
