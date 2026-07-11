import { Link, useNavigate } from 'react-router-dom'
import profileImage from '../assets/img/5f10c3cf-1a72-4049-802e-2a5ef6c7e4bc_removalai_preview.png'

const profileFields = [
  { label: 'Status', value: 'Open to freelance & junior roles' },
  { label: 'Focus', value: 'Front-end engineering & product design' },
  { label: 'Base', value: 'Computer Engineering, University of Cebu – Main Campus' },
]

const strengthDetails = [
  {
    name: 'Adaptable',
    detail:
      'Comfortable moving between hardware and software contexts, or picking up a new stack mid-project.',
  },
  {
    name: 'Detail-focused',
    detail: 'Cares about the small stuff — spacing, edge cases, naming — because it adds up.',
  },
  {
    name: 'Curious',
    detail: 'Default response to "how does this actually work" is to go find out.',
  },
  {
    name: 'Reliable',
    detail: 'Says what will get done and follows through on it.',
  },
  {
    name: 'Resourceful',
    detail: 'Works with what is available and finds a way through blockers.',
  },
]

const toolbox = [
  { category: 'Languages', items: ['HTML', 'CSS', 'JavaScript', 'Python', 'C++'] },
  { category: 'Frameworks & Libraries', items: ['React.JS', 'Bootstrap', 'Flet'] },
  {
    category: 'Platforms & Tools',
    items: ['Git/GitHub', 'GitHub Actions', 'WordPress', 'Firebase', 'Supabase'],
  },
  { category: 'Hardware & Mobile', items: ['Embedded System', 'Mobile App Development'] },
]

function MoreAbout() {
  const navigate = useNavigate()

  return (
    <section className="more-about" id="more-about">
      <button type="button" className="btn-back" onClick={() => navigate(-1)}>
        <i className="bi bi-x-lg arrow-left"></i>
      </button>
      <div className="card">
        <p className="eyebrow">About</p>
        <h2>The Long Version</h2>
        <p className="ma-subtitle">
          A closer look at where I'm coming from, how I like to work, and what I'm
          building toward.
        </p>

        <div className="ma-profile">
          <figure className="ma-picture">
            <img src={profileImage} alt="Argie profile" />
          </figure>

          <dl className="ma-fields">
            {profileFields.map((field) => (
              <div className="ma-field" key={field.label}>
                <dt>{field.label}</dt>
                <dd>{field.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="ma-block">
          <h3>Background</h3>
          <p>
            I'm a Computer Engineering student at the University of Cebu – Main Campus.
            The course covers both hardware and software, but I keep gravitating toward
            the software side — especially building things people actually use.
          </p>
          <p>
            I like turning ideas into working projects, whether that means designing a
            website, writing front-end code, or figuring out how hardware and software
            should talk to each other. Right now I'm sharpening my React, JavaScript,
            Python, and design skills, and looking for freelance or junior opportunities
            where I can contribute, keep learning, and grow with real projects.
          </p>
        </div>

        <div className="ma-block">
          <h3>How I work</h3>
          <div className="ma-strengths">
            {strengthDetails.map((strength) => (
              <div className="ma-strength" key={strength.name}>
                <p className="ma-strength-name">{strength.name}</p>
                <p className="ma-strength-detail">{strength.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="ma-block">
          <h3>Toolbox</h3>
          <div className="ma-toolbox">
            {toolbox.map((group) => (
              <div className="ma-tool-group" key={group.category}>
                <p className="ma-tool-category">{group.category}</p>
                <div className="project-tags" aria-label={`${group.category} skills`}>
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="ma-cta">
          <Link className="ma-primary" to="/#contact">
            Get in touch
            <i className="bi bi-arrow-right arrow-right"></i>
          </Link>
          <a
            className="ma-secondary"
            href="https://github.com/Error-404-me"
            target="_blank"
            rel="noreferrer"
          >
            View GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default MoreAbout