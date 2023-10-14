import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faAward, faBriefcase, faChevronDown, faChevronLeft, faChevronRight, faCodeFork, faHome, faLaptopCode, faSchool } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useRef, useState } from "react";
import portfolio from "./assets/portfolio.json";

type Project = {
    "id": Number,
    "node_id": String,
    "name": String,
    "full_name": String,
    "private": Boolean,
    "owner": {
      "login": String,
      "id": Number,
      "node_id": String,
      "avatar_url": String,
      "gravatar_id": String,
      "url": String,
      "html_url": String,
      "followers_url": String,
      "following_url": String,
      "gists_url": String,
      "starred_url": String,
      "subscriptions_url": String,
      "organizations_url": String,
      "repos_url": String,
      "events_url": String,
      "received_events_url": String,
      "type": String,
      "site_admin": Boolean
    },
    "html_url": String,
    "description": null,
    "fork": Boolean,
    "url": String,
    "forks_url": String,
    "keys_url": String,
    "collaborators_url": String,
    "teams_url": String,
    "hooks_url": String,
    "issue_events_url": String,
    "events_url": String,
    "assignees_url": String,
    "branches_url": String,
    "tags_url": String,
    "blobs_url": String,
    "git_tags_url": String,
    "git_refs_url": String,
    "trees_url": String,
    "statuses_url": String,
    "languages_url": String,
    "stargazers_url": String,
    "contributors_url": String,
    "subscribers_url": String,
    "subscription_url": String,
    "commits_url": String,
    "git_commits_url": String,
    "comments_url": String,
    "issue_comment_url": String,
    "contents_url": String,
    "compare_url": String,
    "merges_url": String,
    "archive_url": String,
    "downloads_url": String,
    "issues_url": String,
    "pulls_url": String,
    "milestones_url": String,
    "notifications_url": String,
    "labels_url": String,
    "releases_url": String,
    "deployments_url": String,
    "created_at": String,
    "updated_at": String,
    "pushed_at": String,
    "git_url": String,
    "ssh_url": String,
    "clone_url": String,
    "svn_url": String,
    "homepage": null,
    "size": Number,
    "stargazers_count": Number,
    "watchers_count": Number,
    "language": String,
    "has_issues": Boolean,
    "has_projects": Boolean,
    "has_downloads": Boolean,
    "has_wiki": Boolean,
    "has_pages": Boolean,
    "has_discussions": Boolean,
    "forks_count": Number,
    "mirror_url": null,
    "archived": Boolean,
    "disabled": Boolean,
    "open_issues_count": Number,
    "license": null,
    "allow_forking": Boolean,
    "is_template": Boolean,
    "web_commit_signoff_required": Boolean,
    "topics": [],
    "visibility": String,
    "forks": Number,
    "open_issues": Number,
    "watchers": Number,
    "default_branch": String,
    "permissions": {
      "admin": Boolean,
      "maintain": Boolean,
      "push": Boolean,
      "triage": Boolean,
      "pull": Boolean
    }
  }

function App() {
    const [activeSection, setActiveSection] = useState('home');
    const [projects, setProjects] = useState<Project[]>();
    const [page, setPage] = useState(0);
    const sections = useRef<NodeListOf<HTMLElement>>();

    const handleScroll = () => {
        const pageYOffset = window.pageYOffset;
        let newActiveSection = '';

        sections.current!.forEach((section) => {
            const sectionOffsetTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (pageYOffset >= sectionOffsetTop-10 && pageYOffset < sectionOffsetTop + sectionHeight) {
                newActiveSection = section.id;
            }
        });
        
        setActiveSection(newActiveSection);
    };

    history.replaceState({}, '', `#${activeSection}`)

    useEffect(() => {
        sections.current = document.querySelectorAll('[data-section]');
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        fetch('https://api.github.com/users/nicofreundt/repos', {
            headers: {
                Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`
            }
        }).then(res => res.json()).then(prjcts => setProjects(prjcts))
    }, [])

    return (
        <>
            <header className="fixed lg:fixed top-0 text-gray-200 w-full p-5 flex justify-between items-center bg-gradient-to-b from-gray-900">
                <h1 className="text-xl font-bold">{['', 'home'].includes(activeSection) ? 'Nico Freundt' : activeSection[0].toUpperCase() + activeSection.slice(1)}</h1>
                <nav className="sr-only lg:not-sr-only text-white w-full p-5 gap-5 flex justify-around items-center">
                    <a className={['home', ''].includes(activeSection) ? 'text-cyan-400' : ''} href="#">Home</a>
                    <a className={activeSection === 'jobs' ? 'text-cyan-400' : ''} href="#jobs">Jobs</a>
                    <a className={activeSection === 'skills' ? 'text-cyan-400' : ''} href="#skills">Skills</a>
                    <a className={activeSection === 'projects' ? 'text-cyan-400' : ''} href="#projects">Projects</a>
                    <a className={activeSection === 'certifications' ? 'text-cyan-400' : ''} href="#certifications">Certifications</a>
                </nav>
            </header>
            <nav className="fixed bottom-0 text-white border-t-[0.01px] border-cyan-400 border-opacity-25 w-full p-5 flex justify-around items-center lg:sr-only">
                <a className={['home'].includes(activeSection) ? 'text-cyan-400' : ''} href="#"><FontAwesomeIcon icon={faHome} size="xl"/></a>
                <a className={activeSection === 'jobs' ? 'text-cyan-400' : ''} href="#jobs"><FontAwesomeIcon icon={faBriefcase} size="xl"/></a>
                <a className={activeSection === 'skills' ? 'text-cyan-400' : ''} href="#skills"><FontAwesomeIcon icon={faSchool} size="xl"/></a>
                <a className={activeSection === 'projects' ? 'text-cyan-400' : ''} href="#projects"><FontAwesomeIcon icon={faLaptopCode} size="xl"/></a>
                <a className={activeSection === 'certifications' ? 'text-cyan-400' : ''} href="#certifications"><FontAwesomeIcon icon={faAward} size="xl"/></a>
            </nav>
            <main className="text-gray-200">
                <section data-section id="home" className="snap-start h-[100dvh] flex flex-col justify-center items-center outline-b-1">
                    <img className="w-60 mb-5 rounded-full aspect-square object-cover object-top" src="ich.jpg" />
                    <h2 className="text-2xl font-semibold">Full-Stack Web Developer</h2>
                    <p>React | Express | JavaScript | Python</p>
                    <div className="flex mt-5 gap-5">
                        <a className="hover:text-cyan-400" href="https://www.linkedin.com/in/nicofreundt/" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="3x" /></a>
                        <a className="hover:text-cyan-400" href="https://github.com/nicofreundt" target="_blank"><FontAwesomeIcon icon={faGithub} size="3x" /></a>
                    </div>
                    <button className="absolute animate-bounce bottom-20 border-solid border-2 p-3 flex rounded-full aspect-square justify-center" onClick={() => window.scrollBy(0, window.screenY)}><FontAwesomeIcon icon={faChevronDown} /></button>
                </section>
                <section data-section id="jobs" className="snap-start h-[100dvh] flex flex-col gap-16 justify-center">
                    {portfolio.job_experience
                    .sort((a, b) => (
                        b.roles.reduce((acc, r) => Math.max(Number(r.start.split('.')[1]), acc), 0) 
                        - 
                        a.roles.reduce((acc, r) => Math.max(Number(r.start.split('.')[1]), acc), 0)
                    ))
                    .map(v => (
                        <div className="flex flex-col self-center w-[300px] md:w-[400px]">
                            <h2 className="text-lg mb-4 whitespace-nowrap font-semibold flex gap-5 items-center"><img height="32" width="32" src={`https://cdn.simpleicons.org/${v.icon}`} />{v.employer}</h2>
                            {v.roles.sort((a, b) => Number((b.end ? b.end : '12.9999').split('.')[1]) - Number((a.end ? a.end : '12.9999').split('.')[1])).map(r => <div className="ml-[15px] pl-10 border-l-2 border-solid flex flex-col py-2">
                                <span className="text-lg lg:whitespace-nowrap font-bold">{r.title}</span>
                                <span className="font-semibold italic">{r.type}</span>
                                <span>{r.start} - {r.end ? r.end : "Today"}</span>
                            </div>)}
                        </div>
                    ))}
                </section>
                <section data-section id="skills" className="snap-start h-[100dvh] flex flex-col justify-center items-center gap-5">
                    <div className="flex gap-8 flex-col">
                        {Object.entries(portfolio.skills).sort(([, b], [, d]) => d.length - b.length).map(([k, v]) => <div className="flex flex-col gap-2">
                            <h2 className="text-xl font-semibold text-center">{k}</h2>
                            <div className="flex gap-5 justify-center">
                                {v.map(e => <img key={e} height="32" width="32" src={`https://cdn.simpleicons.org/${e}/AAFFFF`} /> )}
                            </div> 
                        </div>)}
                    </div>
                </section>
                <section data-section id="projects" className="snap-start h-[100dvh] flex flex-col gap-5 justify-center items-center">
                    {projects?.sort((a, b) => new Date(`${b.updated_at}`).getTime() - new Date(`${a.updated_at}`).getTime()).slice(page*3, page*3+3).map(project => <article className="bg-black bg-opacity-25 p-5 w-[300px] rounded-lg">
                        <a href={`${project.html_url}`} target="_blank"><h2 className="text-xl font-semibold">{project.name}</h2></a>
                        <p>{project.description}</p>
                        <div className="flex justify-between mt-5">
                            <span>{project.language}</span>
                            <div className="flex gap-10">
                                <span>{`${project.stargazers_count}`} <FontAwesomeIcon icon={faStar} /></span>
                                <span>{`${project.forks}`} <FontAwesomeIcon icon={faCodeFork} /></span>
                            </div>
                        </div>
                    </article>)}
                    {typeof projects !== 'undefined' && projects?.length > 3 && activeSection === 'projects' && <div className="fixed flex items-center gap-8 bottom-20">
                        <button disabled={page <= 0} className="disabled:border-gray-600 disabled:text-gray-600 border-solid border-2 p-3 flex rounded-full aspect-square items-center" onClick={() => setPage((num) => num - 1)}><FontAwesomeIcon icon={faChevronLeft} /></button>
                        <span className="text-xl">{page + 1}</span>
                        <button disabled={page >= projects.length / 3 - 1} className="disabled:border-gray-600 disabled:text-gray-600 border-solid border-2 p-3 flex rounded-full aspect-square items-center" onClick={() => setPage((num) => num + 1)}><FontAwesomeIcon icon={faChevronRight} /></button>
                    </div>}
                </section>
            </main>
            <footer data-section id="certifications" className="snap-start h-[100dvh] flex flex-col gap-5 justify-center items-center text-gray-200">
                {portfolio.certifications.map(cert => <div className="w-[300px] lg:w-[600px] flex flex-col gap-2 bg-black bg-opacity-25 p-5 rounded-lg">
                    <a href={cert.url} target="_blank" className="hover:text-cyan-400"><span className="text-md font-bold">{cert.title}</span></a>
                    <div className="flex justify-between items-center">
                        <span className="font-semibold italic flex gap-2 items-center"><img height="32" width="32" src={`https://cdn.simpleicons.org/${cert.authority_slug}/AAFFFF`} />{cert.authority}</span>
                        <span>{cert.date}</span>
                    </div>
                </div>)}
            </footer>
        </>
    )
}
export default App