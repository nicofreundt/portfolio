import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faAward, faBriefcase, faHome, faLaptopCode, faSchool } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function App() {
  return (
    <>
        <header className="absolute top-0 bg-black text-gray-200 w-full p-5 flex justify-between items-center">
            <p className="text-xl font-bold">Nico Freundt</p>
        </header>
        <nav className="fixed bottom-0 bg-black text-white border-t-[0.01px] border-cyan-400 border-opacity-25 w-full p-5 flex justify-around items-center">
            <a className="hover:text-cyan-400" href="#home"><FontAwesomeIcon icon={faHome} /></a>
            <a className="hover:text-cyan-400" href="#work"><FontAwesomeIcon icon={faBriefcase} /></a>
            <a className="hover:text-cyan-400" href="#education"><FontAwesomeIcon icon={faSchool} /></a>
            <a className="hover:text-cyan-400" href="#projects"><FontAwesomeIcon icon={faLaptopCode} /></a>
            <a className="hover:text-cyan-400" href="#certifications"><FontAwesomeIcon icon={faAward} /></a>
        </nav>
        <main className="text-gray-200 bg-black">
            <section id="home" className="snap-start h-screen flex flex-col justify-center items-center outline-b-1">
                <img className="w-60 mb-5 rounded-full aspect-square object-cover object-top" src="ich.jpg"/>
                <h1 className="text-2xl font-semibold">Full-Stack Web Developer</h1>
                <p>React | Express | JavaScript | Python</p>
                <div className="flex mt-5 gap-5">
                    <FontAwesomeIcon icon={faLinkedin} size="3x"/>
                    <FontAwesomeIcon icon={faGithub} size="3x"/>
                </div>
            </section>
            <section id="work" className="snap-start h-screen flex justify-center items-center">Nico Freundt</section>
            <section id="education" className="snap-start h-screen flex justify-center items-center">Nico Freundt</section>
            <section id="projects" className="snap-start h-screen flex justify-center items-center">Nico Freundt</section>
        </main>
        <footer id="certifications" className="snap-start h-screen"></footer>
    </>
  )
}
export default App