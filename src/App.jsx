import { useState } from 'react'
import './App.css'

import userImage from './assets/user.jpg'
import container1Image from './assets/container1.jpg'
import profileImage from './assets/profile.png'
import emailIcon from './assets/email.png'
import linkedinIcon from './assets/linkedin.png'
import githubIcon from './assets/github.png'

import servicesIcon from './assets/services.png'
import vaImage from './assets/va.jpg'
import designImage from './assets/design.jpg'
import dataImage from './assets/data.jpg'
import developmentImage from './assets/development.jpg'
import techImage from './assets/tech.png'

import arrowLeft from './assets/arrow-left.png'
import arrowRight from './assets/arrow-right.png'
import expandIcon from './assets/expand.png'
import closeIcon from './assets/close.png'

import rhode1 from './assets/rhode-1.png'
import gap1 from './assets/gap-1.png'
import islaVerde1 from './assets/isla-verde-1.png'

import laag1 from './assets/laag-1.png'
import laag2 from './assets/laag-2.png'

import fastpick1 from './assets/fastpick-1.png'
import fastpick2 from './assets/fastpick-2.png'
import fastpick3 from './assets/fastpick-3.png'

import healthTracker1 from './assets/health-tracker-1.png'
import healthTracker2 from './assets/health-tracker-2.png'
import healthTracker3 from './assets/health-tracker-3.png'

import agrivision1 from './assets/agrivision-1.png'
import agrivision2 from './assets/agrivision-2.png'
import agrivision3 from './assets/agrivision-3.png'

import capsor1 from './assets/capsor-1.png'
import capsor2 from './assets/capsor-2.png'
import capsor3 from './assets/capsor-3.png'

import graphic1 from './assets/sushi-1.png'
import graphic2 from './assets/sushi-2.png'
import graphic3 from './assets/fanta-1.png'
import graphic4 from './assets/burger-1.png'
import graphic5 from './assets/shawarma-1.png'

import sketchguess1 from './assets/sketchguess-1.png'
import sketchguess2 from './assets/sketchguess-2.png'
import sketchguess3 from './assets/sketchguess-3.png'

import bodyImage from './assets/body.jpg'
import educationIcon from './assets/education.png'
import workIcon from './assets/work.png'
import selfIcon from './assets/self.png'

import facebookIcon from './assets/fb.png'
import instagramIcon from './assets/ig.png'
import contactEmailIcon from './assets/email.png'
import phoneIcon from './assets/phone.png'

function App() {
  const services = [
    {
      title: 'Virtual Assistance',
      image: vaImage,
      summary:
        'Reliable administrative and operational support that keeps your business organized, efficient, and running smoothly.',
      tasks: [
        'Email Management',
        'Calendar Scheduling',
        'Data Entry & Organization',
        'Internet Research',
        'Document Organization',
        'Administrative Support',
      ],
    },
    {
      title: 'Graphic Design',
      image: designImage,
      summary:
        'Creative visual solutions that help businesses communicate their ideas clearly and maintain a consistent brand presence.',
      tasks: [
        'Social Media Graphics',
        'Presentation Design',
        'Marketing Materials',
        'Branding Assets',
        'Promotional Content',
        'Visual Content Creation',
      ],
    },
    {
      title: 'Data Analysis',
      image: dataImage,
      summary:
        'Organized and meaningful data solutions that turn information into clear reports, insights, and better decisions.',
      tasks: [
        'Data Cleaning',
        'Spreadsheet Management',
        'Data Organization',
        'Reports & Summaries',
        'Dashboard Preparation',
        'Data Insights',
      ],
    },
    {
      title: 'Web Development',
      image: developmentImage,
      summary:
        'Functional and responsive digital experiences designed to give businesses a strong and professional online presence.',
      tasks: [
        'Responsive Websites',
        'Landing Pages',
        'Frontend Development',
        'UI Implementation',
        'Website Maintenance',
        'Website Updates',
      ],
    },
  ]

  const projects = [
    {
      id: 1,
      title: 'Rhode Skincare',
      category: 'Marketing Design',
      type: 'marketing design',
      image: rhode1,
      description:
        'A clean and minimal skincare marketing design inspired by modern beauty branding and editorial aesthetics.',
      images: [rhode1],
    },
    {
      id: 2,
      title: 'FastPick Campus Preordering System',
      category: 'Mobile Development',
      type: 'mobile',
      image: fastpick1,
      description:
        'A campus food preordering system designed to make ordering faster, more organized, and convenient for students.',
      images: [fastpick1, fastpick2, fastpick3],
    },
    {
      id: 13,
      title: 'Burger Promotional Poster',
      category: 'Poster Design',
      type: 'poster design',
      image: graphic4,
      images: [graphic4],
    },
    {
      id: 5,
      title: 'GAP Denim',
      category: 'Marketing Design',
      type: 'marketing design',
      image: gap1,
      description:
        'A fashion-focused marketing design created to showcase GAP denim through a bold and modern visual direction.',
      images: [gap1],
    },
    {
      id: 3,
      title: 'Sushi Promotional Poster',
      category: 'Poster Design',
      type: 'poster design',
      image: graphic2,
      images: [graphic2],
    },
    {
      id: 4,
      title: 'Fanta Promotional Poster',
      category: 'Poster Design',
      type: 'poster design',
      image: graphic3,
      images: [graphic3],
    },
    {
      id: 6,
      title: 'Isla Verde Hotel',
      category: 'Marketing Design',
      type: 'marketing design',
      image: islaVerde1,
      description:
        'A promotional hotel design focused on presenting a relaxing destination through clean and engaging visuals.',
      images: [islaVerde1],
    },
    {
      id: 7,
      title: 'La-ag CDO Discovery App',
      category: 'Mobile Development',
      type: 'mobile',
      image: laag1,
      description:
        'A mobile discovery application designed to help users explore destinations, attractions, and experiences around Cagayan de Oro.',
      images: [laag1, laag2],
    },
    {
      id: 8,
      title: 'Sushi Promotional Poster',
      category: 'Poster Design',
      type: 'poster design',
      image: graphic1,
      images: [graphic1],
    },
    {
      id: 9,
      title: 'Health & Mobile Tracker App',
      category: 'Mobile Development',
      type: 'mobile',
      image: healthTracker1,
      description:
        'A mobile health tracking application designed to help users monitor personal health information and daily activities.',
      images: [healthTracker1, healthTracker2, healthTracker3],
    },
    {
      id: 10,
      title: 'AgriVision Website',
      category: 'Web Development',
      type: 'web',
      image: agrivision1,
      description:
        'A responsive agricultural website created to present information and digital solutions through an accessible web interface.',
      images: [agrivision1, agrivision2, agrivision3],
    },
    {
      id: 11,
      title: 'CAPSORT Capstone Archiving System',
      category: 'Web Development',
      type: 'web',
      image: capsor1,
      description:
        'A web-based capstone archiving system designed to organize, manage, and access academic project records efficiently.',
      images: [capsor1, capsor2, capsor3],
    },
    {
      id: 12,
      title: 'SketchGuess Game',
      category: 'Web Development',
      type: 'web',
      image: sketchguess1,
      description:
        'An interactive browser-based guessing game that combines drawing and real-time visual recognition for an engaging experience.',
      images: [sketchguess1, sketchguess2, sketchguess3],
    },
    {
      id: 14,
      title: 'Shawarma Promotional Poster',
      category: 'Poster Design',
      type: 'poster design',
      image: graphic5,
      images: [graphic5],
    },
  ]

  const [projectFilter, setProjectFilter] = useState('all')
  const [currentPage, setCurrentPage] = useState(0)
  const [selectedProject, setSelectedProject] = useState(null)
  const [currentImage, setCurrentImage] = useState(0)

  const filteredProjects =
    projectFilter === 'all'
      ? projects
      : projects.filter((project) => project.type === projectFilter)

  const projectsPerPage = 4
  const projectPages = []

  for (let i = 0; i < filteredProjects.length; i += projectsPerPage) {
    projectPages.push(filteredProjects.slice(i, i + projectsPerPage))
  }

  const totalPages = projectPages.length
  const visibleProjects = projectPages[currentPage] || []

  const changeFilter = (filter) => {
    setProjectFilter(filter)
    setCurrentPage(0)
  }

  const openProject = (project) => {
    setSelectedProject(project)
    setCurrentImage(0)
  }

  const closeProject = () => {
    setSelectedProject(null)
    setCurrentImage(0)
  }

  const nextImage = () => {
    if (!selectedProject) return

    setCurrentImage((prev) =>
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    )
  }

  const previousImage = () => {
    if (!selectedProject) return

    setCurrentImage((prev) =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    )
  }

  const nextPage = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0))
  }

  const previousPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1))
  }

  const isDesignProject =
    selectedProject?.type === 'marketing design' ||
    selectedProject?.type === 'poster design'

  return (
    <main>
      <section className="container-one">
        <header className="navbar">
          <nav className="nav-links">
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#about">About</a>

            <a href="#contact" className="contact-btn">
              <span>Let's Connect!</span>
              <img src={userImage} alt="Profile" />
            </a>
          </nav>
        </header>

        <img
          src={container1Image}
          alt=""
          className="container-one-image"
        />

        <img
          src={profileImage}
          alt="Mariel"
          className="center-profile"
        />

        <div className="hero-left-text">
          <p>Hi, I'm Mariel! 👋</p>

          <h1>
            Multimedia
            <br />
            Virtual Assistant
          </h1>

          <p className="hero-roles">
            Designer • Data Analyst • Developer • VA
          </p>

          <div className="hero-contact-cards">
            <a
              href="mailto:laplap.mariel05@gmail.com"
              className="contact-card"
            >
              <img src={emailIcon} alt="Email" />

              <div>
                <p className="contact-card-title">Email</p>
                <p className="contact-card-info">
                  laplap.mariel05@gmail.com
                </p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/mariel-laplap-0b92372b8/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <img src={linkedinIcon} alt="LinkedIn" />

              <div>
                <p className="contact-card-title">LinkedIn</p>
                <p className="contact-card-info">
                  linkedin.com/in/MarielLaplap
                </p>
              </div>
            </a>

            <a
              href="https://github.com/mmxlvsu"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <img src={githubIcon} alt="GitHub" />

              <div>
                <p className="contact-card-title">GitHub</p>
                <p className="contact-card-info">
                  github.com/mmxlvsu
                </p>
              </div>
            </a>
          </div>

          <a
            href="https://drive.google.com/file/d/1DqVI7ZmjHeonpr9iJ1FEvxQhchq7fMYU/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="intro-video-btn"
          >
            Watch My Introduction Video →
          </a>
        </div>

        <div className="hero-right-text">
          <p className="hero-description-bold">
            I help businesses streamline operations and accelerate growth.
          </p>

          <p className="hero-description-normal">
            I create, organize, analyze, and build digital experiences
            that help ideas turn into meaningful results.
          </p>
        </div>
      </section>

      <section className="services-section" id="services">
        <div className="services-header">
          <img
            src={servicesIcon}
            alt="Services"
            className="services-icon"
          />

          <h2>
            My Services <span>|</span> Provide
          </h2>

          <p>
            Practical digital solutions, creative support, and
            organized systems designed to help businesses work
            smarter, stay productive, and grow.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-image-wrapper">
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-image"
                />
              </div>

              <div className="service-card-content">
                <h3>{service.title}</h3>

                <p className="service-summary">{service.summary}</p>

                <div className="service-tasks">
                  {service.tasks.map((task) => (
                    <div className="service-task" key={task}>
                      {task}
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="tech-section" id="tech">
        <div className="tech-header">
          <div className="tech-title-row">
            <img
              src={techImage}
              alt="Tech Stack"
              className="tech-icon"
            />

            <h2>TECH STACK</h2>
          </div>

          <p className="tech-description">
            The tools and technologies I use to organize workflows,
            create visual content, analyze data, and build efficient
            digital solutions.
          </p>
        </div>

        <div className="tech-categories">
          <div className="tech-category">
            <h3>Virtual Assistance</h3>

            <div className="tech-tools">
              <span>Google Workspace</span>
              <span>Microsoft Office</span>
              <span>Notion</span>
              <span>Trello</span>
              <span>Slack</span>
              <span>Calendly</span>
              <span>Zoom</span>
              <span>Gmail</span>
              <span>Google Calendar</span>
            </div>
          </div>

          <div className="tech-category">
            <h3>Graphic Design</h3>

            <div className="tech-tools">
              <span>Canva</span>
              <span>Figma</span>
              <span>Adobe Photoshop</span>
              <span>Adobe Illustrator</span>
              <span>Adobe Express</span>
            </div>
          </div>

          <div className="tech-category">
            <h3>Data Analysis</h3>

            <div className="tech-tools">
              <span>Microsoft Excel</span>
              <span>Google Sheets</span>
              <span>XLOOKUP</span>
              <span>VLOOKUP</span>
              <span>Pivot Tables</span>
              <span>MySQL</span>
              <span>Data Cleaning</span>
              <span>Data Visualization</span>
            </div>
          </div>

          <div className="tech-category">
            <h3>Web Development</h3>

            <div className="tech-tools">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React</span>
              <span>Git</span>
              <span>GitHub</span>
              <span>VS Code</span>
              <span>Responsive Web Design</span>
            </div>
          </div>

          <div className="tech-category">
            <h3>AI &amp; Productivity</h3>

            <div className="tech-tools">
              <span>ChatGPT</span>
              <span>AI-Assisted Research</span>
              <span>AI-Assisted Content Creation</span>
              <span>Basic Workflow Automation</span>
            </div>
          </div>
        </div>
      </section>

      <section className="projects-section" id="projects">
        <div className="projects-container">
          <div className="projects-header">
            <div className="projects-title">
              <h2>
                My <span>Projects</span>
              </h2>

              <p>
                A selection of creative, technical, and digital
                projects showcasing my work across design,
                development, and technology.
              </p>
            </div>

            <div className="project-filter">
              <select
                value={projectFilter}
                onChange={(e) => changeFilter(e.target.value)}
                className="project-filter-select"
              >
                <option value="all">All</option>
                <option value="poster design">Poster Designs</option>
                <option value="marketing design">
                  Marketing Designs
                </option>
                <option value="mobile">Mobile Dev</option>
                <option value="web">Web Dev</option>
              </select>
            </div>
          </div>

          <div className="projects-grid">
            {visibleProjects.map((project) => (
              <article className="project-card" key={project.id}>
                <div className="project-image-wrapper">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                </div>

                <div className="project-content">
                  <span className="project-category">
                    {project.category}
                  </span>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <button
                    className="view-details"
                    onClick={() => openProject(project)}
                  >
                    View Details

                    <img src={expandIcon} alt="" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="project-navigation">
              <button
                className="project-arrow"
                onClick={previousPage}
              >
                <img
                  src={arrowLeft}
                  alt="Previous projects"
                />
              </button>

              <span className="project-page">
                {currentPage + 1} / {totalPages}
              </span>

              <button
                className="project-arrow"
                onClick={nextPage}
              >
                <img
                  src={arrowRight}
                  alt="Next projects"
                />
              </button>
            </div>
          )}
        </div>
      </section>

      {selectedProject && (
        <div
          className="project-modal-overlay"
          onClick={closeProject}
        >
          <div
            className={`project-modal ${
              isDesignProject ? 'design-modal' : ''
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={closeProject}
            >
              <img src={closeIcon} alt="Close" />
            </button>

            <div className="modal-image-wrapper">
              <img
                src={selectedProject.images[currentImage]}
                alt={selectedProject.title}
                className="modal-image"
              />

              {selectedProject.images.length > 1 && (
                <>
                  <button
                    className="modal-arrow modal-arrow-left"
                    onClick={previousImage}
                  >
                    <img
                      src={arrowLeft}
                      alt="Previous image"
                    />
                  </button>

                  <button
                    className="modal-arrow modal-arrow-right"
                    onClick={nextImage}
                  >
                    <img
                      src={arrowRight}
                      alt="Next image"
                    />
                  </button>
                </>
              )}
            </div>

            <div className="modal-content">
              <span className="project-category">
                {selectedProject.category}
              </span>

              <h2>{selectedProject.title}</h2>

              <p>{selectedProject.description}</p>

              {selectedProject.images.length > 1 && (
                <div className="modal-indicators">
                  {selectedProject.images.map((_, index) => (
                    <button
                      key={index}
                      className={
                        index === currentImage ? 'active' : ''
                      }
                      onClick={() => setCurrentImage(index)}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <section className="about-section" id="about">
        <div className="about-container">
          <div className="about-left">
            <div className="about-photo-wrapper">
              <img
                src={bodyImage}
                alt="Mariel"
                className="about-photo"
              />
            </div>
          </div>

          <div className="about-intro">
            <div className="about-title-row">
              <img
                src={selfIcon}
                alt="About Me"
                className="about-icon"
              />

              <h2>ABOUT ME</h2>
            </div>

            <p>
              Hi! I’m Mariel, a 21-year-old based in Cagayan de Oro
              City and currently pursuing my degree in Computer
              Science.
            </p>

            <p>
              I’m a friendly, outgoing, and creative person who
              enjoys working on projects that combine technology,
              design, and problem-solving.
            </p>

            <p>
              I enjoy learning new things, creating digital
              experiences, working with data, and finding practical
              ways to make work more organized and efficient.
            </p>
          </div>

          <div className="education-block">
            <div className="about-section-title">
              <img
                src={educationIcon}
                alt="Education"
                className="about-block-icon"
              />

              <h2>EDUCATION</h2>
            </div>

            <div className="timeline">
              <div className="timeline-item">
                <span className="timeline-dot"></span>

                <div className="timeline-content">
                  <h3>
                    Bachelor of Science in Computer Science
                  </h3>

                  <p className="timeline-school">
                    University of Science and Technology of Southern
                    Philippines - CDO
                  </p>

                  <p className="timeline-date">2023 – 2027</p>
                </div>
              </div>

              <div className="timeline-item">
                <span className="timeline-dot"></span>

                <div className="timeline-content">
                  <h3>Senior High School - STEM Strand</h3>

                  <p className="timeline-school">
                    Arellano University - Malabon
                  </p>

                  <p className="timeline-date">2021 – 2023</p>
                </div>
              </div>

              <div className="timeline-item">
                <span className="timeline-dot"></span>

                <div className="timeline-content">
                  <h3>
                    Junior High School - Special Program in
                    Journalism
                  </h3>

                  <p className="timeline-school">
                    Lagao National High School - GenSan
                  </p>

                  <p className="timeline-date">2017 – 2021</p>
                </div>
              </div>
            </div>
          </div>

          <div className="experience-block">
            <div className="about-section-title">
              <img
                src={workIcon}
                alt="Experience"
                className="about-block-icon"
              />

              <h2>EXPERIENCE</h2>
            </div>

            <div className="timeline">
              <div className="timeline-item">
                <span className="timeline-dot"></span>

                <div className="timeline-content">
                  <h3>
                    Data Analyst, Data Migrator &amp; Front-End
                    Developer
                  </h3>

                  <p className="timeline-school">
                    Wela School Systems - CDO
                  </p>

                  <p className="timeline-date">
                    June 2026 - Aug 2026
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <span className="timeline-dot"></span>

                <div className="timeline-content">
                  <h3>
                    UI/UX Designer &amp; Front-End Developer
                  </h3>

                  <p className="timeline-school">
                    USTP CDO - School Based
                  </p>

                  <p className="timeline-date">
                    2023 – Present
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <span className="timeline-dot"></span>

                <div className="timeline-content">
                  <h3>Hello World!</h3>

                  <p className="timeline-date">Aug 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="social-section" id="contact">
        <div className="social-icons">
          <a
            href="https://www.facebook.com/mariellaplap.05"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <img src={facebookIcon} alt="Facebook" />
          </a>

          <a
            href="https://www.instagram.com/mmxlvsu/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <img src={instagramIcon} alt="Instagram" />
          </a>

          <a
            href="mailto:laplap.mariel05@gmail.com"
            className="social-icon"
          >
            <img src={contactEmailIcon} alt="Email" />
          </a>

          <a
            href="tel:+639653765281"
            className="social-icon"
          >
            <img src={phoneIcon} alt="Phone" />
          </a>
        </div>
      </section>
    </main>
  )
}

export default App