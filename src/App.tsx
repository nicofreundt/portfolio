import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faAward, faBriefcase, faHome, faLaptopCode, faSchool } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useRef, useState } from "react";

function App() {
    const [activeSection, setActiveSection] = useState('');
    const sections = useRef<NodeListOf<HTMLElement>>();

    const handleScroll = () => {
        const pageYOffset = window.pageYOffset;
        let newActiveSection = '';

        sections.current!.forEach((section) => {
            const sectionOffsetTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (pageYOffset >= sectionOffsetTop && pageYOffset < sectionOffsetTop + sectionHeight) {
                newActiveSection = section.id;
            }
        });
        
        setActiveSection(newActiveSection);
    };

    useEffect(() => {
        sections.current = document.querySelectorAll('[data-section]');
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <header className="absolute lg:fixed top-0 bg-black text-gray-200 w-full p-5 flex justify-between items-center">
                <p className="text-xl font-bold">Nico Freundt</p>
                <nav className="sr-only lg:not-sr-only bg-black text-white w-full p-5 gap-5 flex justify-around items-center">
                    <a className={['home', ''].includes(activeSection) ? 'text-cyan-400' : ''} href="#">Home</a>
                    <a className={activeSection === 'work' ? 'text-cyan-400' : ''} href="#work">Work</a>
                    <a className={activeSection === 'education' ? 'text-cyan-400' : ''} href="#education">Education</a>
                    <a className={activeSection === 'projects' ? 'text-cyan-400' : ''} href="#projects">Projects</a>
                    <a className={activeSection === 'certifications' ? 'text-cyan-400' : ''} href="#certifications">Certifications</a>
                </nav>
            </header>
            <nav className="fixed bottom-0 bg-black text-white border-t-[0.01px] border-cyan-400 border-opacity-25 w-full p-5 flex justify-around items-center lg:sr-only">
                <a className={['home', ''].includes(activeSection) ? 'text-cyan-400' : ''} href="#"><FontAwesomeIcon icon={faHome} /></a>
                <a className={activeSection === 'work' ? 'text-cyan-400' : ''} href="#work"><FontAwesomeIcon icon={faBriefcase} /></a>
                <a className={activeSection === 'education' ? 'text-cyan-400' : ''} href="#education"><FontAwesomeIcon icon={faSchool} /></a>
                <a className={activeSection === 'projects' ? 'text-cyan-400' : ''} href="#projects"><FontAwesomeIcon icon={faLaptopCode} /></a>
                <a className={activeSection === 'certifications' ? 'text-cyan-400' : ''} href="#certifications"><FontAwesomeIcon icon={faAward} /></a>
            </nav>
            <main className="text-gray-200 bg-black">
                <section data-section id="home" className="snap-start h-screen flex flex-col justify-center items-center outline-b-1">
                    <img className="w-60 mb-5 rounded-full aspect-square object-cover object-top" src="ich.jpg" />
                    <h1 className="text-2xl font-semibold">Full-Stack Web Developer</h1>
                    <p>React | Express | JavaScript | Python</p>
                    <div className="flex mt-5 gap-5">
                        <a href="https://www.linkedin.com/in/nicofreundt/" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="3x" /></a>
                        <a href="https://github.com/nicofreundt" target="_blank"><FontAwesomeIcon icon={faGithub} size="3x" /></a>
                    </div>
                </section>
                <section data-section id="work" className="snap-start h-screen flex justify-center items-center">
                    <h1 className="text-2xl font-semibold">Working Experience</h1>
                </section>
                <section data-section id="education" className="snap-start h-screen flex justify-center items-center">
                    <h1 className="text-2xl font-semibold">Education</h1>
                </section>
                <section data-section id="projects" className="snap-start h-screen flex justify-center items-center">
                    <h1 className="text-2xl font-semibold">Projects</h1>
                </section>
            </main>
            <footer data-section id="certifications" className="snap-start h-screen flex justify-center items-center bg-black text-gray-200">
                <h1 className="text-2xl font-semibold">Certifications</h1>
            </footer>
        </>
    )
}
export default App