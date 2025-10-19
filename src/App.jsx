import { useState } from 'react'
import './App.css'
import './index.css'
import { LoadingScreen } from './components/LoadingScreen'
import { Navbar } from './components/Navbar'
import { MobileMenu } from './components/MobileMenu'
import { Home } from './components/sections/Home'
import { About } from './components/sections/About'
import { Projects } from './components/sections/Projects'
import { Contact } from './components/sections/Contact'

function App() {
	const [isLoaded, setIsLoaded] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

  return (
		<>
			{!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
			{/*<div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}> */}
			<div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-gradient-to-br from-gray-700 via-gray-500 to-gray-950 -z-45`}>
				<Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />	
				<MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
				<Home />	
				<About />
				<Projects />
				<Contact />

			</div>
		</>
  )
}

export default App
