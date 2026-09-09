import { useEffect, useState } from "react";
import { profile, projects, experiences, skills } from "./data";

function Icon({ name = "arrow", size = 20, ...props }) {
  const paths = {
    arrow: (
      <>
        <path d="M5 12h14M13 6l6 6-6 6" />
      </>
    ),
    diagonal: (
      <>
        <path d="M6 18 18 6M6 6h12v12" />
      </>
    ),
    code: (
      <>
        <path d="m8 7-5 5 5 5m8-10 5 5-5 5m-3-14-2 18" />
      </>
    ),
    terminal: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="3" />
        <path d="m7 9 3 3-3 3m6 0h4" />
      </>
    ),
    window: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="3" />
        <path d="M3 9h18M7 6.5h.01M10 6.5h.01" />
      </>
    ),
    cloud: <path d="M7 18a5 5 0 0 1-1-9.9A6 6 0 0 1 17.8 8 5 5 0 0 1 0 10Z" />,
    database: (
      <>
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v14c0 4 16 4 16 0V5M4 12c0 4 16 4 16 0" />
      </>
    ),
    spark: (
      <>
        <path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5ZM20 2v4m-2-2h4" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="3" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    github: (
      <>
        <path d="M9 19c-4 1-4-2-6-2m12 5v-4c0-1 .1-2-1-2.5 4-.5 6-2 6-5a5 5 0 0 0-1-3.5 5 5 0 0 0-.2-4S17 3 15 4a13 13 0 0 0-6 0C7 3 5.2 3 5.2 3A5 5 0 0 0 5 7a5 5 0 0 0-1 3.5c0 3 2 4.5 6 5-1 .5-1 1.5-1 2.5v4" />
      </>
    ),
    linkedin: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M7 10v7m0-10v.01M11 17v-7m0 3a3 3 0 0 1 6 0v4" />
      </>
    ),
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    close: <path d="m6 6 12 12M6 18 18 6" />,
    check: <path d="m5 12 4 4L19 6" />,
    down: <path d="M12 4v16m-6-6 6 6 6-6" />,
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name] || paths.code}
    </svg>
  );
}
const navItems = [
  ["About", "about"],
  ["Experience", "experience"],
  ["Projects", "projects"],
  ["Skills", "skills"],
];
function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        }),
      { rootMargin: "-15% 0px -60% 0px" },
    );
    document
      .querySelectorAll("main section[id]")
      .forEach((el) => observer.observe(el));
    const escape = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", escape);
    return () => {
      observer.disconnect();
      document.removeEventListener("keydown", escape);
    };
  }, []);
  return (
    <header className="nav-shell">
      <nav className="nav container" aria-label="Main navigation">
        <a
          href="#home"
          className="logo"
          aria-label="Tee home"
          onClick={() => setOpen(false)}
        >
          tee<span>.</span>
          <span className="logo-slash">/</span>
        </a>
        <div className="desktop-links">
          {navItems.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? "active" : ""}
              aria-current={active === id ? "location" : undefined}
            >
              {label}
            </a>
          ))}
        </div>
        <a
          className="nav-contact"
          href="#contact"
          onClick={() => setOpen(false)}
        >
          Let’s talk <Icon name="diagonal" size={15} />
        </a>
        <button
          className="menu-button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close navigation" : "Open navigation"}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
        {open && (
          <div id="mobile-menu" className="mobile-menu">
            {navItems.map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
                {label}
                <Icon name="diagonal" size={16} />
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
function SectionHeading({ number, eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <div>
        <div className="eyebrow">
          <span>{number}</span> / {eyebrow}
        </div>
        <h2>{title}</h2>
      </div>
      {description && <p>{description}</p>}
    </div>
  );
}
function Terminal() {
  return (
    <div className="terminal-scene">
      <div className="terminal">
        <div className="terminal-bar">
          <div className="window-dots">
            <i />
            <i />
            <i />
          </div>
          <span>tee@dev: ~</span>
          <Icon name="terminal" size={15} />
        </div>
        <div className="terminal-content">
          <div className="command">
            <span>➜</span> <span className="path">~</span> whoami
          </div>
          <p className="terminal-answer">Tee / Full Stack Developer</p>
          <div className="command">
            <span>➜</span> <span className="path">~</span> cat developer.json
          </div>
          <div className="code-lines" aria-label="Developer profile">
            <div className="bracket">{"{"}</div>
            <div>
              {" "}
              <span className="key">"name"</span>:{" "}
              <span className="string">"Tee"</span>,
            </div>
            <div>
              {" "}
              <span className="key">"role"</span>:{" "}
              <span className="string">"Full Stack Developer"</span>,
            </div>
            <div>
              {" "}
              <span className="key">"focus"</span>: [
            </div>
            <div>
              {" "}
              <span className="string">"Web"</span>,{" "}
              <span className="string">"Cloud"</span>,{" "}
              <span className="string">"AI"</span>
            </div>
            <div> ],</div>
            <div>
              {" "}
              <span className="key">"stack"</span>: [
              <span className="string">"React"</span>,{" "}
              <span className="string">"Python"</span>,{" "}
              <span className="string">"AWS"</span>],
            </div>
            <div>
              {" "}
              <span className="key">"mindset"</span>:{" "}
              <span className="string">"Keep building."</span>
            </div>
            <div className="bracket">{"}"}</div>
          </div>
          <div className="command last-command">
            <span>➜</span> <span className="path">~</span>{" "}
            <span className="cursor" />
          </div>
        </div>
        <div className="terminal-footer">
          <span>
            <span className="branch-symbol">⑂</span> main
          </span>
          <span>
            UTF-8 <span className="terminal-language">JSON</span>
          </span>
        </div>
      </div>
      <div className="terminal-caption">
        <span className="caption-line" /> A little about me, in my native
        language.
      </div>
    </div>
  );
}
function Hero() {
  return (
    <section id="home" className="hero container">
      <div className="hero-layout">
        <div className="hero-copy">
          <div className="hero-intro mono">
            <span className="intro-line" /> HELLO, WORLD.
          </div>
          <h1>
            Hi, I’m Tee<span className="blue">.</span>
            <br />
            <span className="hero-role">
              Full Stack
              <br className="desktop-break" /> Developer.
            </span>
          </h1>
          <p>
            Building for the web.
            <br />
            Thinking in systems. Exploring what’s next.
          </p>
          <p className="hero-subtext">
            Web, Cloud & AI — from the interface to the infrastructure.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="button primary">
              View projects <Icon name="arrow" size={18} />
            </a>
            <a href="#contact" className="button secondary">
              Contact me <Icon name="diagonal" size={17} />
            </a>
          </div>
          <div className="hero-tags mono">
            <span>Web</span>
            <i />
            <span>Cloud</span>
            <i />
            <span>AI</span>
            <i />
            <span>Backend</span>
          </div>
        </div>
        <Terminal />
      </div>
      <div className="hero-bottom mono">
        <a href="#about">
          <Icon name="down" size={15} /> SCROLL TO EXPLORE
        </a>
        <span>THOUGHTFUL CODE. USEFUL SOFTWARE.</span>
      </div>
    </section>
  );
}
function About() {
  return (
    <section id="about" className="section container">
      <SectionHeading
        number="01"
        eyebrow="ABOUT ME"
        title={
          <>
            Curious by nature.
            <br />
            Developer by craft.
          </>
        }
      />
      <div className="about-layout">
        <p className="about-copy">{profile.about}</p>
        <div className="focus-grid">
          {[
            ["window", "Web development", "Interfaces that make sense."],
            ["cloud", "Cloud & backend", "The systems behind the screen."],
            ["spark", "Applied AI", "Exploring new possibilities."],
          ].map(([icon, title, text]) => (
            <div className="focus-item" key={title}>
              <span className="icon-box">
                <Icon name={icon} />
              </span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
function Experience() {
  return (
    <section id="experience" className="section container">
      <SectionHeading
        number="02"
        eyebrow="EXPERIENCE"
        title="The journey so far."
        description="The work, the learning, and the next chapter."
      />
      <div className="timeline">
        {experiences.length ? (
          experiences.map((entry, i) => (
            <article className="timeline-item" key={i}>
              <span className="timeline-dot" />
              <div className="mono period">{entry.period}</div>
              <div>
                <h3>{entry.role}</h3>
                <p className="company">{entry.company}</p>
                <ul>
                  {entry.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))
        ) : (
          <div className="timeline-item">
            <span className="timeline-dot" />
            <div className="mono period">THE STORY SO FAR</div>
            <div>
              <h3>A little more context, soon.</h3>
              <p className="empty-text">
                Professional experience and the work behind it will be added
                here.
              </p>
              <span className="quiet-badge mono">Details coming soon</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
function PortfolioPreview() {
  return (
    <div className="project-visual" aria-hidden="true">
      <div className="preview-browser">
        <div className="preview-toolbar">
          <div className="window-dots">
            <i />
            <i />
            <i />
          </div>
          <span>tee / portfolio</span>
        </div>
        <div className="preview-page">
          <div className="preview-nav">
            <strong>
              tee<span>.</span>
            </strong>
            <span>About　 Projects　 Contact</span>
          </div>
          <div className="preview-hero">
            <div>
              <span className="preview-kicker mono">HELLO, WORLD.</span>
              <h4>
                Hi, I’m Tee<span>.</span>
                <br />
                <em>
                  Full Stack
                  <br />
                  Developer.
                </em>
              </h4>
              <div className="preview-small-text">Web, Cloud & AI.</div>
              <span className="preview-button">View projects ↗</span>
            </div>
            <div className="preview-terminal mono">
              <div className="preview-terminal-top">
                ● ● ● <span>developer.json</span>
              </div>
              <div>
                <span className="key">const</span> developer = {"{"}
                <br />
                &nbsp; name: <span className="string">"Tee"</span>,<br />
                &nbsp; focus: [<br />
                &nbsp;&nbsp; <span className="string">"Web"</span>,<br />
                &nbsp;&nbsp; <span className="string">"Cloud"</span>,<br />
                &nbsp;&nbsp; <span className="string">"AI"</span>
                <br />
                &nbsp; ]<br />
                {"}"};
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="visual-index mono">01 / PERSONAL PORTFOLIO</div>
    </div>
  );
}
function Projects() {
  const [expanded, setExpanded] = useState(false);
  const project = projects[0];
  return (
    <section id="projects" className="section container">
      <SectionHeading
        number="03"
        eyebrow="SELECTED WORK"
        title="Ideas, made real."
        description="A closer look at what I build — and how it comes together."
      />
      <div className="projects-grid">
        <article className="project-card featured">
          <PortfolioPreview />
          <div className="project-body">
            <div className="project-type mono">
              <span>01</span> / {project.type}
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="badges">
              {project.technologies.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <button
              className="project-toggle"
              aria-expanded={expanded}
              aria-controls="portfolio-details"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? "Close case study" : "Explore the case study"}
              <Icon name={expanded ? "close" : "arrow"} size={18} />
            </button>
            {expanded && (
              <div id="portfolio-details" className="case-details">
                {[
                  ["The purpose", project.purpose],
                  ["The solution", project.solution],
                  ["Contribution", project.contribution],
                ].map(([label, text]) => (
                  <div key={label}>
                    <h4>{label}</h4>
                    <p>{text}</p>
                  </div>
                ))}
                <a href="#home" className="text-link">
                  Explore this website <Icon name="diagonal" size={16} />
                </a>
              </div>
            )}
          </div>
        </article>
        <article className="project-card next-project">
          <div className="next-graphic">
            <span className="mono">
              {"{"}
              <span className="next-ellipsis">...</span>
              {"}"}
            </span>
          </div>
          <div className="project-body">
            <div className="project-type mono">
              <span>02</span> / NEXT CHAPTER
            </div>
            <h3>More behind the code.</h3>
            <p>
              More projects will live here, with the problem, the approach, and
              the part I played.
            </p>
            <span className="quiet-badge mono">Case studies coming soon</span>
            <div className="next-footer mono">
              Always a work in progress.<span>_</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
function Skills() {
  return (
    <section id="skills" className="section container">
      <SectionHeading
        number="04"
        eyebrow="THE TOOLKIT"
        title="Built with the right tools."
        description="Technologies and areas I focus on. No percentages. Just the stack."
      />
      <div className="skills-grid">
        {skills.map((skill) => (
          <article className="skill-card" key={skill.name}>
            <div className="skill-title">
              <Icon name={skill.icon} />
              <h3>{skill.name}</h3>
            </div>
            <p>{skill.note}</p>
            <div className="badges">
              {skill.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
function Contact() {
  const [feedback, setFeedback] = useState("");
  function submit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `Portfolio inquiry from ${data.get("name")}`;
    const body = `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`;
    if (profile.email) {
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setFeedback(
        "Your email app will open with this draft. Send it there to complete your message.",
      );
    } else {
      const url = URL.createObjectURL(
        new Blob([`${subject}\n\n${body}`], {
          type: "text/plain;charset=utf-8",
        }),
      );
      const a = document.createElement("a");
      a.href = url;
      a.download = "message-to-tee.txt";
      a.click();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      setFeedback(
        "Draft downloaded. No message has been sent — contact details are not connected yet.",
      );
    }
  }
  return (
    <section id="contact" className="section container contact">
      <div className="contact-copy">
        <div className="eyebrow">
          <span>05</span> / WHAT’S NEXT?
        </div>
        <h2>
          Let’s build
          <br />
          something
          <br />
          <span>together.</span>
        </h2>
        <p>
          Have an idea, an interesting challenge,
          <br className="desktop-break" /> or just want to say hello?
        </p>
        <div className="contact-links">
          {[
            ["mail", "Email", profile.email ? `mailto:${profile.email}` : null],
            ["github", "GitHub", profile.github],
            ["linkedin", "LinkedIn", profile.linkedin],
          ].map(([icon, label, url]) =>
            url ? (
              <a
                key={label}
                href={url}
                target={icon !== "mail" ? "_blank" : undefined}
                rel="noreferrer"
              >
                <Icon name={icon} />
                <span>{label}</span>
                <Icon name="diagonal" size={16} />
              </a>
            ) : (
              <div key={label} className="contact-unset">
                <Icon name={icon} />
                <span>{label}</span>
                <small>Coming soon</small>
              </div>
            ),
          )}
        </div>
      </div>
      <form className="contact-form" onSubmit={submit}>
        <div className="form-heading mono">
          <Icon name="terminal" size={17} />
          <span>start_a_conversation</span>
          <span className="form-extension">.txt</span>
        </div>
        <div className="form-fields">
          <div className="form-row">
            <label htmlFor="name">
              Your name
              <input
                id="name"
                name="name"
                placeholder="What should I call you?"
                autoComplete="name"
                required
                maxLength={100}
              />
            </label>
            <label htmlFor="email">
              Email address
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
                maxLength={254}
              />
            </label>
          </div>
          <label htmlFor="message">
            What’s on your mind?
            <textarea
              id="message"
              name="message"
              placeholder="Tell me a little about your idea…"
              rows={5}
              required
              minLength={10}
              maxLength={5000}
            />
          </label>
          <p className="form-note">
            {profile.email
              ? "Opens your email app with a ready-to-send draft."
              : "Contact details are being added. For now, you can save your message as a draft."}
          </p>
          <button className="button primary submit-button" type="submit">
            {profile.email ? "Prepare email" : "Save message draft"}
            <Icon name="arrow" size={18} />
          </button>
          <p className="form-feedback" role="status">
            {feedback}
          </p>
        </div>
      </form>
    </section>
  );
}
export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="footer container">
        <a href="#home" className="logo" aria-label="Back to top">
          tee<span>.</span>
          <span className="logo-slash">/</span>
        </a>
        <span>© {new Date().getFullYear()} Tee</span>
        <a href="#home" className="mono">
          BACK TO TOP <Icon name="arrow" size={14} className="up-arrow" />
        </a>
      </footer>
    </>
  );
}
