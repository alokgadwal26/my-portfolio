import Header from './Header';
import { profile, skills, services, reviews, lorem, nav } from './data';

const Title = ({ a, b }) => <h2 className="title">{a} <em>{b}</em></h2>;

export default function Page() {
  return (
    <>
      <Header />
      <section className="banner" id="home">
        <h1>About Me</h1>
        <p className="crumb">Home <span>›</span> About Me</p>
      </section>

      <section className="sec about" id="about">
        <div className="wrap about-grid">
          <div className="photo">
            <i className="dot orange" /><i className="dot yellow" />
            <img src="/alok-img.jpg" alt={profile.fullName} />
          </div>
          <div>
            <span className="tag">About Me</span>
            <h2 className="headline">{profile.headline}</h2>
            <p className="muted">{profile.intro}</p>
            <dl className="info">
              <div><dt>Name:</dt><dd>{profile.fullName}</dd></div>
              <div><dt>Phone:</dt><dd>{profile.phone}</dd></div>
              <div><dt>Email:</dt><dd>{profile.email}</dd></div>
              {/* <div><dt>Twitter:</dt><dd>{profile.twitter}</dd></div> */}
            </dl>
            <div className="actions">
              <a href="#contact" className="btn">Contact me ↗</a>
              <a href="#" className="btn ghost">Download my resume ⤓</a>
            </div>
          </div>
        </div>
      </section>

      <section className="sec" id="skills">
        <div className="wrap">
          <Title a="My" b="Skills" />
          {/* <p className="muted center">{profile.intro}</p> */}
          <div className="grid skills">
            {skills.map(([icon, name, pct]) => (
              <div className="card skill" key={name}>
                <span className="icon" aria-hidden="true">{icon}</span>
                <h3>{name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" id="projects">
        <div className="wrap">
          <Title a="My" b="Projects" />
          {/* <p className="muted center">{profile.intro}</p> */}
          <div className="grid three">
            {services.map((s) => (
              <a href="https://alokgadwal26.myshopify.com/" target="_blank" className="card service" key={s}>
                <h3>{s}</h3>
                <div className="thumb"><img src="/work.svg" alt="svg" /><span className="go">↗</span></div>
              </a>
            ))}
          </div>
          <div className="center"><a href="https://alokgadwal26.myshopify.com/" target="_blank" className="btn small">See All ↗</a></div>
        </div>
      </section>

      <footer className="footer" id="contact">
        <div className="wrap foot-grid">
          <div>
            <a href="#" className="logo"><span className="logo-badge">{profile.initials}</span>{profile.name}</a>
            {/* <p className="muted">{profile.intro}</p> */}
          </div>
          <div>
            <h4>Navigation</h4>
            <ul>{nav.map((n) => <li key={n}><a href={`#${n.toLowerCase()}`}>› {n}</a></li>)}</ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>📞 {profile.phone}</li><li>✉ {profile.email}</li>
              <li>📍 {profile.address}</li>
            </ul>
          </div>
          <div>
            <h4>Get the latest information</h4>
            {/* <p className="muted small-t">Subscribe for updates and new projects.</p> */}
            <form className="sub" action="#">
              <label className="sr" htmlFor="em">Email</label>
              <input id="em" type="email" placeholder="Your email" />
              <button type="button" aria-label="Subscribe">↗</button>
            </form>
          </div>
        </div>
        <div className="wrap copy">
          <span>Copyright © 2026 {profile.name}. All Rights Reserved.</span>
          <span><a href="#">Terms &amp; Service</a> | <a href="#">Privacy Policy</a></span>
        </div>
      </footer>
    </>
  );
}
