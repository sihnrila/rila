import React, { useState, useEffect } from 'react'
import { fetchGitHubRepos, getLanguageColor } from '../services/github'
import DesignModals from './DesignModals'
import img01 from '../assets/img/img01.jpeg'
import img02 from '../assets/img/img02.jpeg'

const Home = () => {
  const [activeTab, setActiveTab] = useState('design')
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadRepos = async () => {
      setLoading(true)
      const data = await fetchGitHubRepos()
      setRepos(data)
      setLoading(false)
    }
    loadRepos()
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

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
    <div className="container">
      <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" data-bs-smooth-scroll="true" className="scrollspy-example" tabIndex="0">
        
        {/* Section 01 - Introduction */}
        <section className="section01" id="myName">
          <h2 className="title">RILA SIN'S PORTFOLIO</h2>
          <div data-aos="fade-up">
            <img src={img01} alt="Rila" />
            <p>
              안녕하세요 <label className="waving">👋</label> Markup and Developer 신리라입니다.<br />
              제 포트폴리오 페이지에 오신걸 환영합니다.
            </p>
          </div>
        </section>

        {/* Section 02 - About Me */}
        <section className="section02 container860" id="aboutMe">
          <h2 className="title">ABOUT ME</h2>
          <div className="about">
            <img src={img02} alt="About" data-aos="fade-up" data-aos-anchor-placement="top-bottom" />
            <h2 className="left">열정으로 무장한 신리라입니다 😁</h2>
            <p>
              🙋‍♀️ 숭실사이버대학교 ICT 공학부에 재학 중이며, 웹 아카데미에서 웹퍼블리셔 전문가 과정을 통해 HTML, CSS, JavaScript 등을 이수하였습니다.
              이후 스타트업과 웹 에이전시에서 프리랜서로 일하며 독학으로 Vue.js, SCSS, Python을 배웠습니다.

              <br /><br />🧑‍🦰 프론트엔드 개발자로 일하며, 다양한 언어를 배움으로써 웹에 대한 이해도를 지속적으로 쌓아가고 있습니다.
              열심히 하는 것도 좋지만, 일을 할 때만큼은 "잘하자"는 마인드로 임하고 있습니다.

              <br /><br />👂 빠르게 개발하고 배포하여 사용자들의 의견을 적극 수용하며, 사용자 중심의 사고를 기르기 위해 노력합니다.
              또한 혼자 하는 것이 아니라 팀원들과 협업하고 의견을 나누는 것을 좋아하여, 구성원들과 적극적으로 커뮤니케이션하며 개발하는 것을 즐깁니다.

              <br /><br />👀 웹 트렌드에 민감합니다. 빠르게 변화하는 트렌드인 만큼 꼼꼼히 관찰하고 학습합니다.

              <br /><br />👊 반복되는 일을 자동화하고 비효율적인 프로세스를 개선하는 일을 좋아합니다.
              팀 구성원들의 단순하고 루틴한 업무 시간을 줄여주기 위해 지속적으로 의견을 공유하고, 버그 리포팅 방법 등을 구상하며 개선하려 노력하고 있습니다.

              <br /><br />비록 아직 많이 부족하지만, 꾸준히 노력하며 앞으로의 발전을 위해 부족한 점을 채워 나가며 성장하는 개발자가 되겠습니다!
            </p>
          </div>
        </section>

        {/* Section 03 - Skills */}
        <section className="section03 container860" id="skill">
          <h2 className="title">SKILLS</h2>
          <div className="flex_container">
            <ul>
              <li data-aos="zoom-in">
                <i className="fab fa-html5 fa-7x"></i>
                <p>HTML5</p>
                <p>마크업,페이지 콘텐츠 구조화,폼요소,테이블 등 사용</p>
              </li>
              <li data-aos="zoom-in">
                <i className="fab fa-css3-alt fa-7x"></i>
                <p>CSS3</p>
                <p>콘텐츠 요소 스타일링</p>
              </li>
              <li data-aos="zoom-in">
                <i className="fab fa-sass"></i>
                <p>SCSS</p>
                <p>콘텐츠 요소 스타일링</p>
              </li>
              <li data-aos="zoom-in">
                <i className="fab fa-js-square fa-7x"></i>
                <p>Javascript</p>
                <p>사이트의 동적요소 구현</p>
              </li>
              <li data-aos="zoom-in">
                <i className="fab fa-bootstrap fa-7x"></i>
                <p>Bootstrap</p>
                <p>html 프레임 워크</p>
              </li>
              <li data-aos="zoom-in">
                <i className="fab fa-react"></i>
                <p>React</p>
                <p>Javascript 프레임 워크</p>
              </li>
              <li data-aos="zoom-in">
                <i className="fab fa-vuejs"></i>
                <p>vue.js</p>
                <p>Javascript 프레임 워크</p>
              </li>
              <li data-aos="zoom-in">
                <i className="fab fa-python"></i>                      
                <p>Python</p>
                <p>서버간 원활한 소통</p>
              </li>
              <li data-aos="zoom-in">
                <i className="fab fa-git fa-7x"></i>
                <p>Git</p>
                <p>프로젝트 코드관리 , add,commit,pull,branch 사용</p>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 04 - Works */}
        <section className="section04 container860" id="work">
          <h2 className="title">WORK</h2>

          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
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
            <li 
              className={`nav-item ${activeTab === 'frontend' ? 'active' : ''}`} 
              role="presentation"
            >
              <button 
                className="nav-link"
                onClick={() => setActiveTab('frontend')}
                type="button"
              >
                Markup / Frontend
              </button>
            </li>
          </ul>

          <div className="tab-content" id="pills-tabContent">
            {/* Design Tab */}
            {activeTab === 'design' && (
              <div className="tab-pane fade show active">
                <div className="card_cont">
                  {designProjects.map((project) => (
                    <div key={project.id} className="card pdr_1 w_50" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                      <button 
                        className="card_img" 
                        data-bs-toggle="modal" 
                        data-bs-target={`#${project.modalId}`}
                      >
                        <i className={project.icon}></i> {project.title.split(' ')[0]}
                      </button>
                      <button 
                        data-bs-toggle="modal" 
                        data-bs-target={`#${project.modalId}`}
                      >
                        {project.title} 
                        <p><i className="fas fa-pencil-ruler"></i> PHOTOSHOP / ILLUSTRATOR</p>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Frontend Tab */}
            {activeTab === 'frontend' && (
              <div className="tab-pane fade show active">
                <div className="card_cont">
                  {loading ? (
                    <div className="text-center p-5">
                      <p>프로젝트를 불러오는 중...</p>
                    </div>
                  ) : (
                    repos.map((repo) => (
                      <div 
                        key={repo.id} 
                        className="card w_50 pdr_1" 
                        data-aos="fade-up" 
                        data-aos-anchor-placement="top-bottom"
                      >
                        <div 
                          className="card_img"
                          style={{ backgroundColor: getLanguageColor(repo.language) }}
                        >
                          <i className="fas fa-code"></i> {repo.language || 'CODE'}
                        </div>
                        <a href={repo.homepage || repo.url} target="_blank" rel="noopener noreferrer">
                          {repo.name}
                          <p>
                            <i className="fas fa-code"></i> {repo.language || 'Other'} 
                            {repo.description && ` - ${repo.description}`}
                          </p>
                          <p style={{ fontSize: '0.6rem', color: '#707070' }}>
                            ⭐ {repo.stars} | 🍴 {repo.forks}
                          </p>
                        </a>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 05 - Contact */}
        <section className="section05" id="contact">
          <h2 className="title">CONTACT</h2>
          <ul data-aos="zoom-in">
            <li>Contact me on..</li>
            <li>
              <a href="mailto:oo8923@gmail.com">
                <i className="fas fa-envelope"></i> oo8923@gmail.com
              </a>
            </li>
            <li>
              @Shinrila
              <a href="https://github.com/sihnrila?tab=repositories" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i> Github
              </a>
            </li>
          </ul>
        </section>

        {/* Footer */}
        <footer>
          <a href="#" onClick={(e) => { e.preventDefault(); scrollToTop() }}>
            <i className="fas fa-angle-up"></i>
          </a>
          <br />
          code by rila❤️‍🔥<br />
          you can see this code
        </footer>
      </div>
      
      {/* Design Modals */}
      <DesignModals />
    </div>
  )
}

export default Home

