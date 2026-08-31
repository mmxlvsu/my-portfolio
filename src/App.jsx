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

import sketchguess1 from './assets/sketchguess-1.png'
import sketchguess2 from './assets/sketchguess-2.png'
import sketchguess3 from './assets/sketchguess-3.png'

function App() {

  /* =========================
     SERVICES DATA
  ========================= */

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


  /* =========================
     PROJECT DATA
  ========================= */

  const projects = [
    {
      title: 'Rhode Skincare',
      category: 'Design',
      type: 'design',
      image: rhode1,
      description:
        'A clean and minimal skincare marketing design inspired by modern beauty branding and editorial aesthetics.',
      images: [rhode1],
    },

    {
      title: 'GAP Denim',
      category: 'Design',
      type: 'design',
      image: gap1,
      description:
        'A fashion-focused marketing design created to showcase GAP denim through a bold and modern visual direction.',
      images: [gap1],
    },

    {
      title: 'Isla Verde Hotel',
      category: 'Design',
      type: 'design',
      image: islaVerde1,
      description:
        'A promotional hotel design focused on presenting a relaxing destination through clean and engaging visuals.',
      images: [islaVerde1],
    },

    {
      title: 'La-ag CDO Discovery App',
      category: 'Mobile Development',
      type: 'mobile',
      image: laag1,
      description:
        'A mobile discovery application designed to help users explore destinations, attractions, and experiences around Cagayan de Oro.',
      images: [laag1, laag2],
    },

    {
      title: 'FastPick Campus Preordering System',
      category: 'Mobile Development',
      type: 'mobile',
      image: fastpick1,
      description:
        'A campus food preordering system designed to make ordering faster, more organized, and convenient for students.',
      images: [fastpick1, fastpick2, fastpick3],
    },

    {
      title: 'Health & Mobile Tracker App',
      category: 'Mobile Development',
      type: 'mobile',
      image: healthTracker1,
      description:
        'A mobile health tracking application designed to help users monitor personal health information and daily activities.',
      images: [healthTracker1, healthTracker2, healthTracker3],
    },

    {
      title: 'AgriVision Website',
      category: 'Web Development',
      type: 'web',
      image: agrivision1,
      description:
        'A responsive agricultural website created to present information and digital solutions through an accessible web interface.',
      images: [agrivision1, agrivision2, agrivision3],
    },

    {
      title: 'CAPSORT Capstone Archiving System',
      category: 'Web Development',
      type: 'web',
      image: capsor1,
      description:
        'A web-based capstone archiving system designed to organize, manage, and access academic project records efficiently.',
      images: [capsor1, capsor2, capsor3],
    },

    {
      title: 'SketchGuess Game',
      category: 'Web Development',
      type: 'web',
      image: sketchguess1,
      description:
        'An interactive browser-based guessing game that combines drawing and real-time visual recognition for an engaging experience.',
      images: [sketchguess1, sketchguess2, sketchguess3],
    },
  ]


  /* =========================
     PROJECT STATES
  ========================= */

  const [projectFilter, setProjectFilter] = useState('all')
  const [currentPage, setCurrentPage] = useState(0)
  const [selectedProject, setSelectedProject] = useState(null)
  const [currentImage, setCurrentImage] = useState(0)


  /* =========================
     PROJECT FILTER
  ========================= */

  const filteredProjects =
    projectFilter === 'all'
      ? projects
      : projects.filter(
          (project) => project.type === projectFilter
        )


  const projectsPerPage = 4

  const totalPages = Math.ceil(
    filteredProjects.length / projectsPerPage
  )


  const visibleProjects = filteredProjects.slice(
    currentPage * projectsPerPage,
    currentPage * projectsPerPage + projectsPerPage
  )


  const changeFilter = (filter) => {
    setProjectFilter(filter)
    setCurrentPage(0)
  }


  /* =========================
     PROJECT MODAL
  ========================= */

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
      prev === selectedProject.images.length - 1
        ? 0
        : prev + 1
    )
  }


  const previousImage = () => {
    if (!selectedProject) return

    setCurrentImage((prev) =>
      prev === 0
        ? selectedProject.images.length - 1
        : prev - 1
    )
  }


  /* =========================
     PROJECT PAGINATION
  ========================= */

  const nextPage = () => {
    setCurrentPage((prev) =>
      prev < totalPages - 1 ? prev + 1 : 0
    )
  }


  const previousPage = () => {
    setCurrentPage((prev) =>
      prev > 0 ? prev - 1 : totalPages - 1
    )
  }


  return (
    <main>

      {/* =====================================================
          CONTAINER ONE — HERO
      ===================================================== */}

      <section className="container-one">

        {/* NAVIGATION */}

        <header className="navbar">

          <nav className="nav-links">

            <a href="#services">
              Services
            </a>

            <a href="#projects">
              Projects
            </a>

            <a href="#about">
              About
            </a>

            <a
              href="#contact"
              className="contact-btn"
            >
              <span>
                Let's Connect!
              </span>

              <img
                src={userImage}
                alt="Profile"
              />
            </a>

          </nav>

        </header>


        {/* BACKGROUND */}

        <img
          src={container1Image}
          alt=""
          className="container-one-image"
        />


        {/* CENTER PROFILE */}

        <img
          src={profileImage}
          alt="Mariel"
          className="center-profile"
        />


        {/* LEFT CONTENT */}

        <div className="hero-left-text">

          <p>
            Hi, I'm Mariel! 👋
          </p>

          <h1>
            Multimedia
            <br />
            Virtual Assistant
          </h1>

          <p className="hero-roles">
            Designer • Data Analyst • Developer • VA
          </p>


          {/* CONTACT CARDS */}

          <div className="hero-contact-cards">

            {/* EMAIL */}

            <a
              href="mailto:laplap.mariel05@gmail.com"
              className="contact-card"
            >
              <img
                src={emailIcon}
                alt="Email"
              />

              <div>

                <p className="contact-card-title">
                  Email
                </p>

                <p className="contact-card-info">
                  laplap.mariel05@gmail.com
                </p>

              </div>

            </a>


            {/* LINKEDIN */}

            <a
              href="https://www.linkedin.com/in/mariel-laplap-0b92372b8/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <img
                src={linkedinIcon}
                alt="LinkedIn"
              />

              <div>

                <p className="contact-card-title">
                  LinkedIn
                </p>

                <p className="contact-card-info">
                  linkedin.com/in/MarielLaplap
                </p>

              </div>

            </a>


            {/* GITHUB */}

            <a
              href="https://github.com/mmxlvsu"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <img
                src={githubIcon}
                alt="GitHub"
              />

              <div>

                <p className="contact-card-title">
                  GitHub
                </p>

                <p className="contact-card-info">
                  github.com/mmxlvsu
                </p>

              </div>

            </a>

          </div>


          {/* INTRODUCTION VIDEO */}

          <a
            href="https://drive.google.com/file/d/1DqVI7ZmjHeonpr9iJ1FEvxQhchq7fMYU/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="intro-video-btn"
          >
            Watch My Introduction Video →
          </a>

        </div>


        {/* RIGHT CONTENT */}

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


      {/* =====================================================
          CONTAINER TWO — SERVICES
      ===================================================== */}

      <section
        className="services-section"
        id="services"
      >

        {/* SERVICES HEADER */}

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


        {/* SERVICES GRID */}

        <div className="services-grid">

          {services.map((service) => (

            <article
              className="service-card"
              key={service.title}
            >

              <div className="service-image-wrapper">

                <img
                  src={service.image}
                  alt={service.title}
                  className="service-image"
                />

              </div>


              <div className="service-card-content">

                <h3>
                  {service.title}
                </h3>

                <p className="service-summary">
                  {service.summary}
                </p>


                <div className="service-tasks">

                  {service.tasks.map((task) => (

                    <div
                      className="service-task"
                      key={task}
                    >
                      {task}
                    </div>

                  ))}

                </div>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* =====================================================
          CONTAINER THREE — TECH STACK
      ===================================================== */}

      <section
        className="tech-section"
        id="tech"
      >

        {/* TECH STACK HEADER */}

        <div className="tech-header">

          <div className="tech-title-row">

            <img
              src={techImage}
              alt="Tech Stack"
              className="tech-icon"
            />

            <h2>
              TECH STACK
            </h2>

          </div>

          <p className="tech-description">
            The tools and technologies I use to organize workflows,
            create visual content, analyze data, and build efficient
            digital solutions.
          </p>

        </div>


        {/* TECH STACK CATEGORIES */}

        <div className="tech-categories">

          {/* VIRTUAL ASSISTANCE */}

          <div className="tech-category">

            <h3>
              Virtual Assistance
            </h3>

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


          {/* GRAPHIC DESIGN */}

          <div className="tech-category">

            <h3>
              Graphic Design
            </h3>

            <div className="tech-tools">

              <span>Canva</span>
              <span>Figma</span>
              <span>Adobe Photoshop</span>
              <span>Adobe Illustrator</span>
              <span>Adobe Express</span>

            </div>

          </div>


          {/* DATA ANALYSIS */}

          <div className="tech-category">

            <h3>
              Data Analysis
            </h3>

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


          {/* WEB DEVELOPMENT */}

          <div className="tech-category">

            <h3>
              Web Development
            </h3>

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


          {/* AI & PRODUCTIVITY */}

          <div className="tech-category">

            <h3>
              AI &amp; Productivity
            </h3>

            <div className="tech-tools">

              <span>ChatGPT</span>
              <span>AI-Assisted Research</span>
              <span>AI-Assisted Content Creation</span>
              <span>Basic Workflow Automation</span>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CONTAINER FOUR — PROJECTS
          THIS IS NOW COMPLETELY SEPARATE FROM TECH STACK
      ===================================================== */}

      <section
        className="projects-section"
        id="projects"
      >

        <div className="projects-container">

          {/* PROJECT HEADER */}

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


            {/* FILTER */}

            <div className="project-filter">

  <select
    value={projectFilter}
    onChange={(e) => changeFilter(e.target.value)}
    className="project-filter-select"
  >
    <option value="all">By Categories</option>
    <option value="design">Designs</option>
    <option value="mobile">Mobile Dev</option>
    <option value="web">Web Dev</option>
  </select>
</div>

          </div>


          {/* PROJECT GRID */}

          <div className="projects-grid">

            {visibleProjects.map((project) => (

              <article
                className="project-card"
                key={project.title}
              >

                {/* PROJECT IMAGE */}

                <div className="project-image-wrapper">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />

                </div>


                {/* PROJECT CONTENT */}

                <div className="project-content">

                  <span className="project-category">
                    {project.category}
                  </span>

                  <h3>
                    {project.title}
                  </h3>

                  <p>
                    {project.description}
                  </p>


                  {/* VIEW DETAILS */}

                  <button
  className="view-details"
  onClick={() => openProject(project)}
>
  View Details

  <img
    src={expandIcon}
    alt=""
  />
</button>

                </div>

              </article>

            ))}

          </div>


          {/* PROJECT NAVIGATION */}

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


      {/* =====================================================
          PROJECT DETAILS MODAL
      ===================================================== */}

      {selectedProject && (

        <div
          className="project-modal-overlay"
          onClick={closeProject}
        >

          <div
            className="project-modal"
            onClick={(e) => e.stopPropagation()}
          >

            {/* CLOSE */}

            <button
              className="modal-close"
              onClick={closeProject}
            >
              <img
                src={closeIcon}
                alt="Close"
              />
            </button>


            {/* IMAGE */}

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


            {/* MODAL CONTENT */}

            <div className="modal-content">

              <span className="project-category">
                {selectedProject.category}
              </span>

              <h2>
                {selectedProject.title}
              </h2>

              <p>
                {selectedProject.description}
              </p>


              {selectedProject.images.length > 1 && (

                <div className="modal-indicators">

                  {selectedProject.images.map((_, index) => (

                    <button
                      key={index}
                      className={
                        index === currentImage
                          ? 'active'
                          : ''
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

    </main>
  )
}

export default App