import heroPortrait from '../assets/resume-profile.png'

function Home() {

  function downloadResume(){
    const cv = document.createElement('a')
    cv.href = '../resume.pdf'
    cv.download = 'Argie_Pasuquin_Resume.pdf'
    cv.click()
  }

  return (
    <section className="section hero" id="home" aria-labelledby="home-title">
      <div className="info-sec">
        <p className="eyebrow">Computer Engineering Student</p>
        <h1 id="home-title">Argie C. Pasuquin</h1>
        <p className="hero-copy">
          I build practical, responsive web experiences and enjoy connecting software ideas
          with hardware thinking.
        </p>

        <div className="role" aria-label="Core roles">
          <span>Software Developer</span>
          <span>Designer</span>
          <span>Freelancer</span>
        </div>

        <div className="hero-actions">
          <a className="learn-more" href="#projects">
            View Projects
            <i className='bi bi-arrow-up-right arrow-right-up'></i>
          </a>
          <button type="button" className="btn-resume" onClick={downloadResume}>
            Download Resume
            <i className='bi bi-download d-resume'></i>
          </button>
        </div>
      </div>

      <div className="home hero-visual">
        <div className="portrait-shell">
          <img src={heroPortrait} alt="Portrait of Argie C. Pasuquin" />
        </div>
        <div className="availability" aria-label="Availability">
          <strong>Open for Full-time / freelance</strong>
          <span>Web interfaces, class projects, and small business sites</span>
        </div>
      </div>
    </section>
  )
}

export default Home
