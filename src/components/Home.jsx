import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { fetchGitHubRepos, getLanguageColor, REPO_STATIC_SCREENSHOTS, PROFESSIONAL_REPOS, HIDDEN_REPOS } from '../services/github'
import { fetchTistoryPosts, getTistoryBlogUrl } from '../services/tistory'
import DesignModals from './DesignModals'
import profile01 from '../assets/img/profile01.jpeg'
import img02 from '../assets/img/img02.jpeg'
import { PROJECT_META } from '../data/projects'

const Home = () => {
  const [activeTab, setActiveTab] = useState('work')
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [tistoryPosts, setTistoryPosts] = useState([])
  const [tistoryLoading, setTistoryLoading] = useState(true)

  useEffect(() => {
    const loadRepos = async () => {
      setLoading(true)
      const data = await fetchGitHubRepos()
      setRepos(data)
      setLoading(false)
    }
    loadRepos()
  }, [])

  useEffect(() => {
    const loadTistoryPosts = async () => {
      setTistoryLoading(true)
      const data = await fetchTistoryPosts()
      setTistoryPosts(data)
      setTistoryLoading(false)
    }
    loadTistoryPosts()
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // 마우스 움직임에 따른 타이포그래피 인터랙션
  useEffect(() => {
    const heroTitle = document.querySelector('.hero-title')
    if (!heroTitle) return
    if (window.matchMedia('(hover: none)').matches) return

    const handleMouseMove = (e) => {
      const rect = heroTitle.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      
      const moveX = (x - centerX) / centerX
      const moveY = (y - centerY) / centerY
      
      const lines = heroTitle.querySelectorAll('.line')
      lines.forEach((line, index) => {
        const intensity = (index + 1) * 0.3
        const translateX = moveX * 20 * intensity
        const translateY = moveY * 10 * intensity
        const rotate = moveX * 2 * intensity
        
        line.style.transform = `translate(${translateX}px, ${translateY}px) rotate(${rotate}deg)`
      })
    }

    const handleMouseLeave = () => {
      const lines = heroTitle.querySelectorAll('.line')
      lines.forEach((line) => {
        line.style.transform = ''
      })
    }

    heroTitle.addEventListener('mousemove', handleMouseMove)
    heroTitle.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      heroTitle.removeEventListener('mousemove', handleMouseMove)
      heroTitle.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  const designProjects = [
    {
      id: 1,
      title: 'SNS 콘텐츠 디자인',
      icon: 'fab fa-instagram',
      images: Array.from({ length: 21 }, (_, i) => `sns_${String(i + 1).padStart(2, '0')}.jpg`),
      modalId: 'cardmodal01'
    },
    {
      id: 2,
      title: '웹 디자인',
      icon: 'fas fa-code',
      images: ['login_w.jpg', 'sub_login_w.jpg', 'sub2_w.jpg', 'sub3_w_1.jpg', 'sub4_w_1.jpg'],
      modalId: 'cardmodal02'
    },
    {
      id: 3,
      title: '패키지 디자인',
      icon: 'fas fa-pen-nib',
      images: Array.from({ length: 6 }, (_, i) => `p_${String(i + 1).padStart(2, '0')}.jpg`),
      modalId: 'cardmodal03'
    }
  ]

  return (
    <div className="container" id="main-content">
      <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" data-bs-smooth-scroll="true" className="scrollspy-example" tabIndex="0">
        
        {/* Section 01 - Hero Typography */}
        <section className="section01" id="myName">
          <div className="hero-content">
            <h1 className="hero-title" aria-label="신리라 포트폴리오">
              <span className="line line-1" aria-hidden="true">RILA</span>
              <span className="line line-2" aria-hidden="true">SIN</span>
              <span className="line line-3" aria-hidden="true">PORTFOLIO</span>
            </h1>
            <p className="hero-tagline">EPUB Viewer · SDK · CMS · WebView</p>
            <div className="hero-cta">
              <a href="#work" className="cta-btn cta-primary" onClick={(e) => { e.preventDefault(); scrollToSection('work') }}>
                프로젝트 보기
              </a>
              <a href="/resume" className="cta-btn cta-secondary">
                이력서 보기
              </a>
              <div className="hero-links">
                <a href="https://github.com/sihnrila" target="_blank" rel="noopener noreferrer" className="hero-icon-link" aria-label="GitHub 프로필">
                  <i className="fab fa-github" aria-hidden="true"></i>
                </a>
                <a href="mailto:oo8923@gmail.com" className="hero-icon-link" aria-label="이메일 보내기">
                  <i className="fas fa-envelope" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="scroll-indicator" aria-hidden="true">
            <span>Scroll</span>
            <div className="scroll-line"></div>
          </div>
        </section>

        {/* Section 02 - About Me */}
        <section className="section02" id="aboutMe">
          <div className="about-container">
            <div className="about-header">
              <h2 className="about-title">
                <span className="title-line">ABOUT ME</span>
              </h2>
            </div>

            <div className="about-content">
              <div className="about-text">
                <div className="about-intro">
                  <p className="intro-large">Frontend</p>
                  <p className="intro-large">Developer</p>
                </div>

                <div className="about-description">
                  <div className="desc-item">
                    <span className="desc-number">01</span>
                    <div className="desc-text">
                      <h3 className="desc-title">Education</h3>
                      <p>숭실사이버대학교 ICT 공학부 재학 중<br />
                      웹퍼블리셔 전문가 과정 이수</p>
                    </div>
                  </div>
                  <div className="desc-item">
                    <span className="desc-number">02</span>
                    <div className="desc-text">
                      <h3 className="desc-title">Experience</h3>
                      <p>EPUB 웹뷰어, 교육 게임 플랫폼, 운영 CMS 개발<br />
                      SDK 설계·WebView 연동·접근성 구현 경험</p>
                    </div>
                  </div>
                  <div className="desc-item">
                    <span className="desc-number">03</span>
                    <div className="desc-text">
                      <h3 className="desc-title">Approach</h3>
                      <p>화면 구현을 넘어 서비스 흐름과 데이터 구조를 함께 이해하고<br />
                      백엔드·API·CMS·인프라 영역까지 확장해 기능을 구현합니다.</p>
                    </div>
                  </div>
                  <div className="desc-item">
                    <span className="desc-number">04</span>
                    <div className="desc-text">
                      <h3 className="desc-title">AI Workflow</h3>
                      <p>생성형 AI를 데이터 생성, 검수, 문서화와<br />
                      반복 업무 자동화 과정에 실무 활용 중</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="about-image">
                <img src={profile01} alt="Rila" />
                <Link to="/resume" className="resume-button">
                  <span>이력서 보기</span>
                  <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>

            <div className="about-capabilities">
              <h3 className="about-cap-heading">핵심 역량</h3>
              <div className="cap-grid">
                <div className="cap-card">
                  <div className="cap-icon" aria-hidden="true"><i className="fas fa-code"></i></div>
                  <h4 className="cap-title">Frontend Development</h4>
                  <p className="cap-desc">웹 표준 기반의 구조적인 마크업, 반응형 UI, 상태 및 이벤트 기반 인터페이스 구현</p>
                </div>
                <div className="cap-card">
                  <div className="cap-icon" aria-hidden="true"><i className="fas fa-sitemap"></i></div>
                  <h4 className="cap-title">Service Architecture</h4>
                  <p className="cap-desc">서비스 흐름, 데이터 구조, API 연동 방식과 운영 구조를 함께 고려한 설계</p>
                </div>
                <div className="cap-card">
                  <div className="cap-icon" aria-hidden="true"><i className="fas fa-mobile-alt"></i></div>
                  <h4 className="cap-title">SDK & WebView</h4>
                  <p className="cap-desc">외부 서비스에서 재사용할 수 있는 JavaScript SDK와 iOS·Android WebView 연동 경험</p>
                </div>
                <div className="cap-card">
                  <div className="cap-icon" aria-hidden="true"><i className="fas fa-robot"></i></div>
                  <h4 className="cap-title">AI-assisted Workflow</h4>
                  <p className="cap-desc">생성형 AI를 활용한 데이터 생성, 검수, 문서화 및 반복 개발 업무 자동화</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 03 - Skills */}
        <section className="section03" id="skill">
          <div className="skills-container">
            <div className="skills-header">
              <h2 className="skills-title">
                <span className="title-line">SKILLS</span>
              </h2>
            </div>
            <div className="skills-content">
              <div className="skills-slider">
                <button 
                  className="skills-nav-btn skills-nav-prev" 
                  onClick={() => {
                    const track = document.querySelector('.skills-track')
                    if (track) {
                      track.classList.add('manual-scroll')
                      track.scrollBy({ left: -300, behavior: 'smooth' })
                      setTimeout(() => {
                        track.classList.remove('manual-scroll')
                      }, 1000)
                    }
                  }}
                  aria-label="Previous skills"
                >
                  <i className="fas fa-chevron-left"></i>
                </button>
                <div className="skills-track-wrapper">
                  <div 
                    className="skills-track"
                    onMouseEnter={() => {
                      const track = document.querySelector('.skills-track')
                      if (track) track.classList.add('manual-scroll')
                    }}
                    onMouseLeave={() => {
                      const track = document.querySelector('.skills-track')
                      if (track) track.classList.remove('manual-scroll')
                    }}
                  >
                    <div className="skill-item">
                      <i className="fab fa-html5"></i>
                      <span>HTML5</span>
                    </div>
                    <div className="skill-item">
                      <i className="fab fa-css3-alt"></i>
                      <span>CSS3</span>
                    </div>
                    <div className="skill-item">
                <i className="fab fa-sass"></i>
                      <span>SCSS</span>
                    </div>
                    <div className="skill-item">
                      <i className="fab fa-js-square"></i>
                      <span>Javascript</span>
                    </div>
                    <div className="skill-item">
                      <i className="fab fa-vuejs"></i>
                      <span>Vue.js</span>
                    </div>
                    <div className="skill-item">
                <i className="fab fa-react"></i>
                      <span>React</span>
                    </div>
                    <div className="skill-item">
                      <i className="fab fa-bootstrap"></i>
                      <span>Bootstrap</span>
                    </div>
                    <div className="skill-item">
                      <i className="fab fa-node-js"></i>
                      <span>Node.js</span>
                    </div>
                    <div className="skill-item">
                      <i className="fab fa-python"></i>
                      <span>Python</span>
                    </div>
                    <div className="skill-item">
                      <i className="fab fa-git-alt"></i>
                      <span>Git</span>
                    </div>
                    <div className="skill-item">
                      <i className="fab fa-github"></i>
                      <span>GitHub</span>
                    </div>
                    <div className="skill-item">
                      <i className="fas fa-code"></i>
                      <span>jQuery</span>
                    </div>
                    <div className="skill-item">
                      <i className="fas fa-exchange-alt"></i>
                      <span>Ajax</span>
                    </div>
                    <div className="skill-item">
                      <i className="fas fa-plug"></i>
                      <span>API</span>
                    </div>
                    <div className="skill-item">
                      <i className="fas fa-exchange-alt"></i>
                      <span>RestAPI</span>
                    </div>
                    <div className="skill-item">
                      <i className="fas fa-database"></i>
                      <span>MySQL</span>
                    </div>
                    <div className="skill-item">
                      <i className="fab fa-aws"></i>
                      <span>AWS</span>
                    </div>
                    <div className="skill-item">
                      <i className="fab fa-slack"></i>
                      <span>Slack</span>
                    </div>
                    <div className="skill-item">
                      <i className="fas fa-code"></i>
                      <span>VSCode</span>
                    </div>
                    <div className="skill-item">
                      <i className="fab fa-jira"></i>
                      <span>Jira</span>
                    </div>
                    <div className="skill-item">
                      <i className="fab fa-adobe"></i>
                      <span>Photoshop</span>
                    </div>
                    {/* Duplicate for seamless loop */}
                    <div className="skill-item">
                      <i className="fab fa-html5"></i>
                      <span>HTML5</span>
                    </div>
                    <div className="skill-item">
                      <i className="fab fa-css3-alt"></i>
                      <span>CSS3</span>
                    </div>
                    <div className="skill-item">
                      <i className="fab fa-sass"></i>
                      <span>SCSS</span>
                    </div>
                    <div className="skill-item">
                      <i className="fab fa-js-square"></i>
                      <span>Javascript</span>
                    </div>
                    <div className="skill-item">
                <i className="fab fa-vuejs"></i>
                      <span>Vue.js</span>
                    </div>
                    <div className="skill-item">
                      <i className="fab fa-react"></i>
                      <span>React</span>
                    </div>
                    <div className="skill-item">
                      <i className="fab fa-bootstrap"></i>
                      <span>Bootstrap</span>
                    </div>
                    <div className="skill-item">
                      <i className="fab fa-node-js"></i>
                      <span>Node.js</span>
                    </div>
                    <div className="skill-item">
                <i className="fab fa-python"></i>                      
                      <span>Python</span>
                    </div>
                    <div className="skill-item">
                      <i className="fab fa-git-alt"></i>
                      <span>Git</span>
                    </div>
                    <div className="skill-item">
                      <i className="fab fa-github"></i>
                      <span>GitHub</span>
                    </div>
                    <div className="skill-item">
                      <i className="fas fa-code"></i>
                      <span>jQuery</span>
                    </div>
                    <div className="skill-item">
                      <i className="fas fa-exchange-alt"></i>
                      <span>Ajax</span>
                    </div>
                    <div className="skill-item">
                      <i className="fas fa-plug"></i>
                      <span>API</span>
                    </div>
                    <div className="skill-item">
                      <i className="fas fa-exchange-alt"></i>
                      <span>RestAPI</span>
                    </div>
                    <div className="skill-item">
                      <i className="fas fa-database"></i>
                      <span>MySQL</span>
                    </div>
                    <div className="skill-item">
                      <i className="fab fa-aws"></i>
                      <span>AWS</span>
                    </div>
                    <div className="skill-item">
                      <i className="fab fa-slack"></i>
                      <span>Slack</span>
                    </div>
                    <div className="skill-item">
                      <i className="fas fa-code"></i>
                      <span>VSCode</span>
                    </div>
                    <div className="skill-item">
                      <i className="fab fa-jira"></i>
                      <span>Jira</span>
                    </div>
                    <div className="skill-item">
                      <i className="fab fa-adobe"></i>
                      <span>Photoshop</span>
                    </div>
                  </div>
                </div>
                <button 
                  className="skills-nav-btn skills-nav-next" 
                  onClick={() => {
                    const track = document.querySelector('.skills-track')
                    if (track) {
                      track.classList.add('manual-scroll')
                      track.scrollBy({ left: 300, behavior: 'smooth' })
                      setTimeout(() => {
                        track.classList.remove('manual-scroll')
                      }, 1000)
                    }
                  }}
                  aria-label="Next skills"
                >
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 04 - Works */}
        <section className="section04" id="work">
          <div className="work-container">
            <div className="work-header">
          <h2 className="title">WORK</h2>
            </div>
            <div className="work-content">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li
              className={`nav-item ${activeTab === 'work' ? 'active' : ''}`}
              role="presentation"
            >
              <button
                className="nav-link"
                onClick={() => setActiveTab('work')}
                type="button"
              >
                Work
              </button>
            </li>
            <li
              className={`nav-item ${activeTab === 'personal' ? 'active' : ''}`}
              role="presentation"
            >
              <button
                className="nav-link"
                onClick={() => setActiveTab('personal')}
                type="button"
              >
                Personal
              </button>
            </li>
            <li
              className={`nav-item ${activeTab === 'design' ? 'active' : ''}`}
              role="presentation"
            >
              <button
                className="nav-link"
                onClick={() => setActiveTab('design')}
                type="button"
              >
                Design
              </button>
            </li>
          </ul>

          <div className="tab-content" id="pills-tabContent">
            {/* Design Tab */}
            {activeTab === 'design' && (
              <div className="tab-pane fade show active">
                <div className="card_cont">
                  {designProjects.map((project) => (
                    <Link 
                      key={project.id} 
                      to={`/projects/${project.id}`}
                      className="card pdr_1 w_50" 
                      data-aos="fade-up" 
                      data-aos-anchor-placement="top-bottom"
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      <div className="card_img">
                        <i className={project.icon}></i> {project.title.split(' ')[0]}
                      </div>
                      <div className="card-content">
                        <h3 className="card-title">{project.title}</h3>
                        <p className="card-tools"><i className="fas fa-pencil-ruler"></i> PHOTOSHOP / ILLUSTRATOR</p>
                    </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* 실무 Tab */}
            {(activeTab === 'work' || activeTab === 'personal') && (
              <div className="tab-pane fade show active">
                <div className="card_cont">
                  {loading ? (
                    <div className="text-center p-5">
                      <p>프로젝트를 불러오는 중...</p>
                    </div>
                  ) : repos.length === 0 ? (
                    <div className="text-center p-5">
                      <p>표시할 프로젝트가 없습니다.</p>
                    </div>
                  ) : (
                    repos
                      .filter((repo) => !repo.fork && !HIDDEN_REPOS.has(repo.name) && (
                        activeTab === 'work'
                          ? PROFESSIONAL_REPOS.has(repo.name)
                          : !PROFESSIONAL_REPOS.has(repo.name)
                      ))
                      .map((repo) => (
                        <Link 
                          key={repo.id} 
                          to={`/repos/${repo.name}`}
                          className="card w_50 pdr_1" 
                          data-aos="fade-up" 
                          data-aos-anchor-placement="top-bottom"
                            style={{ textDecoration: 'none', color: 'inherit' }}
                          >
                            <div
                              className="card_img"
                              style={!REPO_STATIC_SCREENSHOTS[repo.name] ? { backgroundColor: '#111' } : {}}
                            >
                              {REPO_STATIC_SCREENSHOTS[repo.name] ? (
                                <img
                                  src={REPO_STATIC_SCREENSHOTS[repo.name]}
                                  alt={repo.name}
                                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
                                  onError={(e) => {
                                    e.target.style.display = 'none'
                                    e.target.parentElement.style.backgroundColor = '#111'
                                    e.target.parentElement.innerHTML = `<i class="fas fa-code"></i> ${repo.language || 'CODE'}`
                                  }}
                                />
                              ) : (
                                <><i className="fas fa-code"></i> {repo.language || 'CODE'}</>
                              )}
                            </div>
                          <div className="card-content">
                            <h3 className="card-title">{repo.name}</h3>
                            {PROJECT_META[repo.name]?.period && (
                              <p className="card-period">
                                <i className="fas fa-calendar-alt" aria-hidden="true"></i> {PROJECT_META[repo.name].period}
                                {PROJECT_META[repo.name]?.role && <span className="card-role">{PROJECT_META[repo.name].role}</span>}
                              </p>
                            )}
                            {repo.description && (
                              <p className="card-tools">
                                {repo.description.substring(0, 60)}{repo.description.length > 60 ? '...' : ''}
                              </p>
                            )}
                            {PROJECT_META[repo.name]?.tags && (
                              <div className="card-tags" aria-label="역할 및 기술">
                                {PROJECT_META[repo.name].tags.slice(0, 3).map(tag => (
                                  <span key={tag} className="role-tag">{tag}</span>
                                ))}
                              </div>
                            )}
                            {PROJECT_META[repo.name]?.summary && (
                              <p className="card-highlight">
                                {PROJECT_META[repo.name].summary}
                              </p>
                            )}
                            <div className="card-cta">
                              <span className="card-cta-text">상세 보기 <i className="fas fa-arrow-right" aria-hidden="true"></i></span>
                            </div>
                            </div>
                          </Link>
                      ))
                  )}
                </div>
              </div>
            )}
              </div>
            </div>
          </div>
        </section>

        {/* Section 05 - Blog */}
        <section className="section05" id="blog">
          <div className="blog-container">
            <div className="blog-header">
              <h2 className="title">BLOG</h2>
            </div>
            <div className="blog-content">
          {tistoryLoading ? (
            <div className="text-center p-5">
              <p>블로그 포스트를 불러오는 중...</p>
            </div>
          ) : tistoryPosts.length === 0 ? (
            <div className="text-center p-5">
              <p>표시할 블로그 포스트가 없습니다.</p>
              <a 
                href={getTistoryBlogUrl()} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: '#2c3e50', textDecoration: 'underline' }}
              >
                티스토리 블로그 바로가기
              </a>
            </div>
          ) : (
            <div className="card_cont">
              {tistoryPosts.map((post, index) => (
                <a
                  key={index}
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card w_50 pdr_1 blog-card"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                >
                  {post.thumbnail && !post.thumbnail.includes('no-image') && (
                    <div 
                      className="card_img blog-img"
                      style={{
                        backgroundImage: `url(${post.thumbnail})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    >
                      <div className="blog-overlay">
                        <i className="fas fa-blog"></i>
                        <span>BLOG</span>
                      </div>
                    </div>
                  )}
                  <div className="card-content">
                    <h3 className="card-title">{post.title}</h3>
                    <p className="card-description">{post.description}</p>
                    <div className="card-meta">
                      {post.date && (
                        <span className="meta-item meta-date">
                          {post.date}
                        </span>
                      )}
                    </div>
                    {post.category && (
                      <span className="meta-item meta-tags">
                        {post.category}
                      </span>
                    )}
                    <div className="card-link">
                      <span>VIEW POST</span>
                      <i className="fas fa-arrow-right"></i>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}
            </div>
          </div>
        </section>

        {/* Section 06 - Contact */}
        <section className="section05" id="contact">
          <div className="contact-container">
            <div className="contact-header">
          <h2 className="title">CONTACT</h2>
            </div>
            <div className="contact-content">
              <ul className="contact-list" data-aos="zoom-in">
                <li>
                  <span className="contact-label">Contact me on..</span>
                </li>
            <li>
              <a href="mailto:oo8923@gmail.com">
                <i className="fas fa-envelope"></i> oo8923@gmail.com
              </a>
            </li>
            <li>
                  <span>@Shinrila</span>
              <a href="https://github.com/sihnrila?tab=repositories" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i> Github
              </a>
            </li>
          </ul>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer>
          <a href="#" onClick={(e) => { e.preventDefault(); scrollToTop() }}>
            <i className="fas fa-angle-up"></i>
          </a>
          <br />
          code by rila❤️‍🔥<br />
          <a href="https://github.com/sihnrila/rila" target="_blank" rel="noopener noreferrer">you can see this code</a>
        </footer>
      </div>
      
      {/* Design Modals */}
      <DesignModals />
    </div>
  )
}

export default Home

