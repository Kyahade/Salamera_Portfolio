import Image from "next/image";
import Link from "next/link";


const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Flutter",
  "Dart",
  "Git",
  "GitHub",
  "SQL",
];


type Project = {
  number: string;
  category: string;
  title: string;
  description: string;
  technology: string[];
  image: string;
  link?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    number: "01",
    category: "CAPSTONE PROJECT · INDUSTRIAL MANILA FURNITURE",
    title: "TopCraft",
    description:
      "An AI-assisted furniture manufacturing system designed for Industrial Manila Furniture. The project aims to improve furniture production workflows through multi-view product visualization and scrap material optimization.",
    technology: ["React", "PostgreSQL", "Flutter", "Dart", "AI Integration"],
    image: "/topcraft.png",
    link: "https://industrialmanila-furniture.com/",
  },
  {
    number: "02",
    category: "SCHOOL PROJECT",
    title: "Liboria – E-Library System",
    description:
      "A digital library platform developed for a school project, providing users with an accessible way to explore and browse library resources.",
    technology: ["Flutter", "Dart", "Vercel"],
    image: "/liboria.png",
    link: "https://liboria.vercel.app/home",
  },
  {
  number: "03",
  category: "ONGOING ORGANIZATIONAL PROJECT · NU MOA",
  title: "NU MOA Student Election System",
  description:
    "An ongoing project developed for the Commission on Student Elections (CSE) of National University – MOA. The platform is designed exclusively for NU MOA students, providing a digital platform for accessing election information, viewing candidates, and participating in the student electoral process.",
  technology: ["Next.js", "PostgreSQL", "TypeScript", "Tailwind CSS"],
  image: "/numoacse.jpg",
},
];


export default function Home() {
  return (
    <main>
      {/* NAVIGATION */}
      <header className="navbar">
        <div className="nav-container">
          <a href="#home" className="nav-logo">
            DARRYL SALAMERA<span>.</span>
          </a>

          <nav className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="hero section-container" id="home">
        <div className="hero-content">
          <p className="hero-eyebrow">
            INFORMATION TECHNOLOGY · OJT PORTFOLIO
          </p>

          <p className="hero-intro">Hello, I'm</p>

          <h1 className="hero-title">
            Darryl Salamera<span>.</span>
            <br />
            <span className="hero-title-accent">
              Aspiring Developer
            </span>
          </h1>

          <p className="hero-description">
            I’m an aspiring IT professional who enjoys turning ideas into practical solutions through technology. I value continuous learning, critical thinking, and attention to detail, and I’m always willing to take on challenges that help me grow. As I begin my professional journey, I’m eager to apply my knowledge, learn from experienced professionals, and contribute positively to a team through dedication, adaptability, and a strong willingness to improve.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              Explore my work <span>↗</span>
            </a>

            <a href="#contact" className="btn-secondary">
              Get in touch
            </a>
          </div>

          <p className="hero-note">
            Curious mind. Thoughtful work. Continuous growth.
          </p>
        </div>

        <div className="hero-visual">
          <div className="profile-panel">
            <div className="profile-panel-top">
              <span>PERSONAL PORTFOLIO</span>
              <span>01 / 04</span>
            </div>

            <div className="profile-photo">
  <Image
    src="/profile.jpg"
    alt="Portrait of Your Name"
    fill
    priority
    className="profile-image"
    sizes="(max-width: 850px) 90vw, 480px"
  />
</div>

            <div className="profile-panel-bottom">
              <div>
                <span className="profile-label">
                  FIELD OF INTEREST
                </span>
                <h2>Technology &amp; Creativity</h2>
              </div>
              <span className="profile-panel-number">01</span>
            </div>
          </div>

          <p className="profile-caption">
            A little about my journey in technology
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section section-container" id="about">
        <div className="section-heading">
          <p className="section-eyebrow">01 — INTRODUCTION</p>
          <h2>About <span>Me</span></h2>
        </div>

        <div className="about-content">
          <div className="about-side-label">
            <span>GET TO KNOW ME</span>
          </div>

          <div className="about-text">
            <p className="about-lead">
              Learning, creating, and growing through technology.
            </p>

            <p>
              I am an Information Technology student interested
              in software development, web technologies, and
              problem-solving. I enjoy exploring new tools and
              applying what I learn through hands-on projects.
            </p>

            <p>
              As I prepare for my On-the-Job Training, I look
              forward to gaining practical experience, improving
              my technical abilities, and learning from
              professionals in the IT industry.
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section skills-section" id="skills">
        <div className="section-container">
          <div className="section-heading">
            <p className="section-eyebrow">02 — WHAT I WORK WITH</p>
            <h2>Skills &amp; <span>Technologies</span></h2>
            <p className="section-description">
              Technologies and tools I have explored through
              coursework, practice, and personal projects.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-item" key={skill}>
                <span className="skill-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{skill}</span>
                <span className="skill-arrow">↗</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section section-container" id="projects">
        <div className="section-heading">
          <p className="section-eyebrow">03 — SELECTED WORK</p>
          <h2>Projects &amp; <span>Experiences</span></h2>
          <p className="section-description">
            A collection of academic projects and practical
            experiences that reflect my learning journey.
          </p>
        </div>

  
<div className="projects-grid">
  {projects.map((project) => {
    const cardContent = (
      <>
        <div className="project-top">
          <span>{project.category}</span>
          <span>{project.number}</span>
        </div>

        <div className="project-preview">
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            sizes="(max-width: 850px) 100vw, 50vw"
            className="project-image"
          />
        </div>

        <div className="project-info">
          <h3>{project.title}</h3>
          <p>{project.description}</p>

          <div className="project-tags">
            {project.technology.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>

          {project.link && (
            <span className="project-visit">
              Visit project ↗
            </span>
          )}
        </div>
      </>
    );

    return project.link ? (
      <Link
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className={`project-card ${
          project.featured ? "featured-project" : ""
        }`}
        key={project.number}
      >
        {cardContent}
      </Link>
    ) : (
      <article
        className={`project-card ${
          project.featured ? "featured-project" : ""
        }`}
        key={project.number}
      >
        {cardContent}
      </article>
    );
  })}
</div>

      </section>

      {/* EDUCATION */}
      <section className="section education-section" id="education">
        <div className="section-container">
          <div className="section-heading">
            <p className="section-eyebrow">04 — MY BACKGROUND</p>
            <h2>Education &amp; <span>Learning</span></h2>
          </div>

          <div className="education-card">
            <div className="education-date">
              <span>EDUCATION</span>
              <span>2023 — PRESENT</span>
            </div>

            <div className="education-details">
              <h3>Bachelor of Science in Information Technology specialized in Mobile and Web Application (MWA)</h3>
              <p className="education-school">
                National University | Mall of Asia
              </p>
              <p>
                GXJJ+89C, Coral Way, Pasay City, Metro Manila
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section section-container contact-section" id="contact">
        <div className="contact-content">
          <p className="section-eyebrow">05 — LET'S CONNECT</p>

          <h2>
            Let's create something
            <br />
            <span>meaningful together.</span>
          </h2>

          <p>
            I am open to learning opportunities, professional
            connections, and OJT opportunities where I can
            contribute and grow.
          </p>

          <a
            href="mailto:your.email@example.com"
            className="btn-primary"
          >
            Send me an email <span>↗</span>
          </a>
        </div>

        <div className="contact-details">
          <div>
            <span>EMAIL</span>
            <a href="mailto:your.email@example.com">
              adrian.salamera@gmail.com
            </a>
          </div>

          <div>
            <span>GITHUB</span>
            <a
              href="https://github.com/Kyahade"
              target="_blank"
              rel="noreferrer"
            >
              github.com/Kyahade ↗
            </a>
          </div>

          <div>
            <span>LINKEDIN</span>
            <a
              href="www.linkedin.com/in/kyah-ade-4a9195274"
              target="_blank"
              rel="noreferrer"
            >
              www.linkedin.com/in/kyah-ade-4a9195274
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="section-container footer-content">
          <a href="#home" className="nav-logo">
            Darryl Salamera<span>.</span>
          </a>

          <p>
            Designed with intention. Built with curiosity.
          </p>

          <span>© 2026 Darryl Salamera</span>
        </div>
      </footer>
    </main>
  );
}
