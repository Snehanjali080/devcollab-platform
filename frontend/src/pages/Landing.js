import { useNavigate } from "react-router-dom";
import "./Landing.css";
import logo from "./dev-collab_logo.png";

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">

      {/* ── HEADER ── */}
      <header className="landing-header">
        <div className="header-logo">
          <img src={logo} alt="DevCollab" className="header-logo-img" />
          <span className="header-brand">DevCollab</span>
        </div>
        <nav className="header-nav">
          <a href="#about">About</a>
          <a href="#how">How it works</a>
          <a href="#features">Features</a>
          <button className="header-btn" onClick={() => navigate("/login")}>Login</button>
          <button className="header-btn-outline" onClick={() => navigate("/register")}>Sign Up</button>
        </nav>
      </header>

      {/* ── HERO ── */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">🚀 Built for developers, by developers</div>
          <h1 className="hero-title">
            Collaborate. Build.<br />
            <span className="hero-accent">Ship together.</span>
          </h1>
          <p className="hero-subtitle">
            DevCollab is the all-in-one platform where developers find teammates,
            manage projects, and chat in real time — all in one place.
          </p>
          <div className="hero-btns">
            <button className="btn-primary" onClick={() => navigate("/register")}>
              Get Started Free
            </button>
            <button className="btn-secondary" onClick={() => navigate("/login")}>
              Login →
            </button>
          </div>
          <p className="hero-note">Free forever · No credit card required</p>
        </div>
        <div className="hero-visual">
          <div className="hero-card-float card-1">
            <span className="dot green"></span> Project: AI Chatbot
          </div>
          <div className="hero-card-float card-2">
            <span className="dot blue"></span> 3 developers online
          </div>
          <div className="hero-card-float card-3">
            💬 "Let's ship this today!"
          </div>
          <div className="hero-mockup">
            <div className="mockup-bar">
              <span></span><span></span><span></span>
            </div>
            <div className="mockup-body">
              <div className="mockup-sidebar">
                <div className="mockup-item active">📂 Projects</div>
                <div className="mockup-item">💬 Chat</div>
                <div className="mockup-item">🔍 Search</div>
                <div className="mockup-item">📩 Requests</div>
              </div>
              <div className="mockup-main">
                <div className="mockup-msg right">Hey, PR is ready! 🎉</div>
                <div className="mockup-msg left">Reviewing now...</div>
                <div className="mockup-msg right">Merged! Ship it 🚀</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="stats-section">
        <div className="stat-item">
          <div className="stat-num">500+</div>
          <div className="stat-label">Developers</div>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <div className="stat-num">200+</div>
          <div className="stat-label">Projects Created</div>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <div className="stat-num">Real-time</div>
          <div className="stat-label">Chat & Collaboration</div>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <div className="stat-num">Free</div>
          <div className="stat-label">Forever Plan</div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="about-section" id="about">
        <div className="about-text">
          <div className="section-tag">About DevCollab</div>
          <h2>Your developer<br /><span className="hero-accent">collaboration hub</span></h2>
          <p>
            Finding the right teammates for your project is hard. DevCollab makes it easy —
            search for developers by skill, send collaboration requests, and start building
            together in minutes.
          </p>
          <p>
            Whether you're building a weekend hackathon project or a serious startup,
            DevCollab gives you the tools to work as a team — project management,
            real-time chat, and developer discovery, all in one place.
          </p>
          <button className="btn-primary" onClick={() => navigate("/register")}>
            Join DevCollab
          </button>
        </div>
        <div className="about-visual">
          <div className="about-card">
            <div className="about-avatar">S</div>
            <div>
              <div className="about-name">Sneha · Full Stack Dev</div>
              <div className="about-skills">React · Node.js · MongoDB</div>
            </div>
            <div className="about-status">Open to collab</div>
          </div>
          <div className="about-card">
            <div className="about-avatar blue">R</div>
            <div>
              <div className="about-name">Ravi · Backend Dev</div>
              <div className="about-skills">Python · Django · PostgreSQL</div>
            </div>
            <div className="about-status">Open to collab</div>
          </div>
          <div className="about-card">
            <div className="about-avatar purple">A</div>
            <div>
              <div className="about-name">Arjun · ML Engineer</div>
              <div className="about-skills">TensorFlow · PyTorch · FastAPI</div>
            </div>
            <div className="about-status">Open to collab</div>
          </div>
          <div className="connect-line">
            <span>✓ Connected · Building together</span>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="how-section" id="how">
        <div className="section-tag center">How it works</div>
        <h2 className="section-title">Get started in 3 simple steps</h2>
        <div className="steps-row">
          <div className="step-card">
            <div className="step-num">01</div>
            <div className="step-icon">👤</div>
            <h3>Create your profile</h3>
            <p>Sign up and add your skills, experience, and what kind of projects you're looking to work on.</p>
          </div>
          <div className="step-arrow">→</div>
          <div className="step-card">
            <div className="step-num">02</div>
            <div className="step-icon">🔍</div>
            <h3>Find your team</h3>
            <p>Search developers by skill, send collab requests, and build your dream team for your next project.</p>
          </div>
          <div className="step-arrow">→</div>
          <div className="step-card">
            <div className="step-num">03</div>
            <div className="step-icon">🚀</div>
            <h3>Build together</h3>
            <p>Use real-time chat per project, track progress, and ship your ideas together — faster than ever.</p>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="features-section" id="features">
        <div className="section-tag center">Features</div>
        <h2 className="section-title">Everything you need to collaborate</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🔍</div>
            <h3>Developer Search</h3>
            <p>Find developers by skill, stack, or availability. No more posting on Reddit hoping someone sees it.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💬</div>
            <h3>Real-time Chat</h3>
            <p>Every project gets its own chat room. See who's online, send messages, and stay in sync.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📂</div>
            <h3>Project Management</h3>
            <p>Create projects, invite teammates, and keep everything organised in one place.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📩</div>
            <h3>Collab Requests</h3>
            <p>Send and receive collaboration requests. Accept the ones that excite you, skip the rest.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🟢</div>
            <h3>Online Presence</h3>
            <p>See which teammates are online right now. Know who's available before you ping them.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Instant Setup</h3>
            <p>Sign up, create a project, and invite your first teammate in under 2 minutes. No setup needed.</p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <h2>Ready to start building?</h2>
        <p>Join hundreds of developers already collaborating on DevCollab.</p>
        <div className="hero-btns">
          <button className="btn-primary large" onClick={() => navigate("/register")}>
            Create Free Account
          </button>
          <button className="btn-secondary" onClick={() => navigate("/login")}>
            Already have an account? Login →
          </button>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="landing-footer">
        <div className="footer-top">
          <div className="footer-brand">
            <img src={logo} alt="DevCollab" className="footer-logo-img" />
            <span className="header-brand">DevCollab</span>
            <p>The collaboration platform built for developers.</p>
          </div>
          <div className="footer-links">
            <div className="footer-col">
              <h4>Platform</h4>
              <a href="#about">About</a>
              <a href="#features">Features</a>
              <a href="#how">How it works</a>
            </div>
            <div className="footer-col">
              <h4>Account</h4>
              <span onClick={() => navigate("/login")} className="footer-link">Login</span>
              <span onClick={() => navigate("/register")} className="footer-link">Sign Up</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 DevCollab · Built with ❤️ by Snehanjali</span>
        </div>
      </footer>

    </div>
  );
}

export default Landing;