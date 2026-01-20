import React from 'react'
import { useNavigate } from 'react-router-dom'

const Resume = () => {
  const navigate = useNavigate()

  return (
    <div className="project-detail">
      <div className="container">
        <div className="project-header">
          <button className="back-button" onClick={() => navigate('/')}>
            <i className="fas fa-arrow-left"></i> BACK
          </button>
          <h1 className="project-title">RESUME</h1>
          <p className="project-subtitle">Creative Technologist</p>
          <p className="project-tools">
            <i className="fas fa-user"></i> 신리라 (Rila Shin)
          </p>
        </div>

        <div className="project-info">
          {/* 자기소개서 */}
          <div className="resume-section">
            <h3 className="resume-section-title">자기소개서</h3>
            <div className="resume-intro">
              <p className="resume-intro-text">
                열정으로 무장한 프론트앤드 신리라입니다.
              </p>
              <p className="resume-intro-text">
                저는 개발사와 초기 스타트업에서 마크업 및 웹 프론트엔드로 일한 경험이 있습니다. 다양한 개발 환경 속에서 튼튼하게 코드를 작성하는 방법을 배우고, 원활한 협업을 바탕으로 주도적으로 업무를 진행하는 방법을 익혔습니다.
              </p>
              <p className="resume-intro-text">
                제가 프론트앤드 직무를 잘 수행할 수 있다고 생각하는 이유는 아래와 같습니다.
              </p>
              <p className="resume-intro-text">
                저는 일을 할때 항상 더 나은 방법을 찾습니다. 배워야 할점은 배우고, 고쳐야할점은 빠르게 개선해 나아갑니다. 웹 에이전시 회사를 다니며 반응형 쇼핑몰 프로젝트를 만든 경험이 있습니다. 기간이 촉박해, 디자이너와 프론트 백 앤드 개발자가 동시에 작업을 진행하는 프로젝트였습니다. 백 앤드 개발자와 협업을 하며 API를 통한 비동기 방식으로 데이터를 주고받아 사용자단 에서의 새로고침을 하지 않아 편한 Ul를 제공 하였습니다. 이후의 작업은 더 빠르고 안정적으로 진행할 수 있었습니다.
              </p>
              <p className="resume-intro-text">
                또한, 현재 재직 중인 회사에서는 전자책 뷰어를 만들며, b2b와 b2c 를 제작한 경험이 있습니다. b2c를 제작하며 webpack 작업과 자바스크립트를 이용한 프레임 워크화를 하며 코드의 가독성을 줄이는 작업을 하였습니다. 이때의 경험을 바탕으로 코드는 항상 유지보수를 고려하여 작업하고 있습니다. 빠르고 안정적인 작업을 위해 지금도 다양한 기술과 툴을 공부하며 더 좋은 방향을 찾고 있습니다.
              </p>
              <p className="resume-intro-text">
                또한, 항상 원활한 협업을 끌어내려고 노력합니다. 기획자, 디자이너, 마크업 개발자, 백앤드 개발자와 가깝게 일하며, 그들의 의도를 존중하면서 개발 성능을 높이고자 했습니다. 예를 들면, 용량 문제로 웹 폰트의 수를 줄이고 싶을 때는 우선 기획 의도를 들은 뒤, 폰트의 두께 종류를 줄이거나 경량화 폰트를 사용하는 식의 대안을 찾아 제안했습니다. 디자인 단에서 요청한 움직임을 구현하는 데 시간이 오래 걸릴 것으로 생각되면, 비슷한 효과를 낼 수 있는 라이브러리를 개발단에 제안하는 식으로 절충안을 통해 완성도를 높였습니다. 이외에도 기존의 소통의 불편함을 해소하고 싶어, 자료를 준비해 새로운 툴 도입을 제안해 더 높은 생산성을 끌어낸 경험도 있습니다.
              </p>
              <p className="resume-intro-text">
                한편, 디자이너와 개발자 사이에서 파일을 전달할 때 일어나는 문제를 해결하고자, Zeplin과 Git을 익혀 협업 속도를 높이기도 했습니다.
              </p>
              <p className="resume-intro-text">
                이렇게 전문 웹 프론트앤드로 업무를 진행하지만, 저는 동시에 사용자 입장에서 생각하기도 합니다. 이 버튼이 사용자의 동선을 고려해 배치된 건지, 사용된 문구가 우리 브랜드에 어울리는지를 계속 고민하고, 더 나은 방향에 대해 사람들과 얘기 나누곤 합니다. 특히 저는 사용자에게 편하고 즐거운 사용자 경험(UI/UX)을 만드는 데 관심이 많습니다. 그래서 기획부터 디자인, 개발 등 다양한 직무의 관점에서 서비스를 바라보고, 구성원들과 공유하며, 거기서 얻은 것을 활용해 제 업무를 발전시켜 나가고 있습니다.
              </p>
            </div>
          </div>

          {/* 학력 */}
          <div className="resume-section">
            <h3 className="resume-section-title">학력</h3>
            <div className="resume-item">
              <div className="resume-item-header">
                <h4 className="resume-item-title">숭실사이버대학교 (숭실) ICT공학과</h4>
                <span className="resume-item-date">2021. 03 ~ 2023. 12</span>
              </div>
              <p className="resume-item-description">대학교(4년)</p>
            </div>
          </div>

          {/* 경력 */}
          <div className="resume-section">
            <h3 className="resume-section-title">경력</h3>
            <div className="resume-career-summary">
              <p className="career-total">총 5년 10개월</p>
            </div>
            
            <div className="resume-item">
              <div className="resume-item-header">
                <h4 className="resume-item-title">주식회사크로스티앤씨</h4>
                <span className="resume-item-date">2024. 11 ~ 재직중</span>
              </div>
              <p className="resume-item-role">대리 · 팀원</p>
              <p className="resume-item-description">주요직무: 프론트엔드개발자</p>
            </div>

            <div className="resume-item">
              <div className="resume-item-header">
                <h4 className="resume-item-title">주식회사북틀</h4>
                <span className="resume-item-date">2022. 10 ~ 재직중</span>
              </div>
              <p className="resume-item-role">개발팀</p>
              <p className="resume-item-description">주요직무: 프론트엔드개발자</p>
            </div>

            <div className="resume-item">
              <div className="resume-item-header">
                <h4 className="resume-item-title">주식회사 용산집</h4>
                <span className="resume-item-date">2022. 02 ~ 2022. 07</span>
              </div>
              <p className="resume-item-role">대리 · 팀원 · 6개월</p>
              <p className="resume-item-description">주요직무: 프론트엔드개발자</p>
            </div>

            <div className="resume-item">
              <div className="resume-item-header">
                <h4 className="resume-item-title">용산집</h4>
                <span className="resume-item-date">2021. 06 ~ 2022. 02</span>
              </div>
              <p className="resume-item-role">대리 · 팀원 · 9개월</p>
              <p className="resume-item-description">주요직무: 프론트엔드개발자</p>
            </div>

            <div className="resume-item">
              <div className="resume-item-header">
                <h4 className="resume-item-title">아부하킴 주식회사</h4>
                <span className="resume-item-date">2020. 12 ~ 2021. 05</span>
              </div>
              <p className="resume-item-role">과장 · 팀장 · 6개월</p>
              <p className="resume-item-description">주요직무: 웹디자이너</p>
            </div>

            <div className="resume-item">
              <div className="resume-item-header">
                <h4 className="resume-item-title">주식회사에이투제이</h4>
                <span className="resume-item-date">2020. 02 ~ 2020. 07</span>
              </div>
              <p className="resume-item-role">사원 · 팀원 · 6개월</p>
              <p className="resume-item-description">주요직무: 웹디자이너</p>
            </div>

            <div className="resume-item">
              <div className="resume-item-header">
                <h4 className="resume-item-title">뚝섬텐트대여 더텐트 뚝섬점</h4>
                <span className="resume-item-date">2019. 03 ~ 2019. 07</span>
              </div>
              <p className="resume-item-role">사원 · 팀원 · 5개월</p>
              <p className="resume-item-description">주요직무: 웹디자이너</p>
            </div>
          </div>

          {/* 경력기술서 */}
          <div className="resume-section">
            <h3 className="resume-section-title">경력기술서</h3>
            <p className="resume-philosophy">
              웹 표준에 맞춰 의미 있는 구조를 가지며, 다양한 환경에 반응하도록 디자인과 UI/UX를 구현하고,(검색엔진을 포함하여) 모두가 접근 가능한 웹사이트를 만들기 위해 노력하고있습니다.
            </p>

            <div className="resume-project">
              <h4 className="resume-project-title">국립 장애인 도서관 EPUB 웹뷰어</h4>
              <div className="resume-project-meta">
                <span className="project-period">2024년 11월 ~</span>
                <span className="project-skills">스킬: js, css, ejs, html, sdk</span>
              </div>
            </div>

            <div className="resume-project">
              <h4 className="resume-project-title">yes24 EBOOK 웹뷰어 B2B 유지보수</h4>
              <div className="resume-project-meta">
                <span className="project-period">2022년 10월 ~ 2024년 10월</span>
                <span className="project-skills">스킬: js, css, ejs</span>
              </div>
            </div>

            <div className="resume-project">
              <h4 className="resume-project-title">알라딘 EBOOK 웹뷰어 B2C/ B2B 유지보수</h4>
              <div className="resume-project-meta">
                <span className="project-period">2022년 10월 ~ 2024년 10월</span>
                <span className="project-skills">스킬: js, css, ejs</span>
              </div>
            </div>

            <div className="resume-project">
              <h4 className="resume-project-title">알라딘 EBOOK 웹뷰어 B2C 구축</h4>
              <div className="resume-project-meta">
                <span className="project-period">2022년 10월 ~ 2024년 10월</span>
                <span className="project-skills">스킬: js, css, ejs</span>
              </div>
            </div>

            <div className="resume-project">
              <h4 className="resume-project-title">교보문고 EBOOK 웹뷰어 B2C/ B2B 유지보수</h4>
              <div className="resume-project-meta">
                <span className="project-period">2022년 10월 ~ 2024년 10월</span>
                <span className="project-skills">스킬: js, css, ejs, 배포</span>
              </div>
              <p className="resume-project-description">B2C의 CS건 및 신규 기능 추가</p>
            </div>

            <div className="resume-project">
              <h4 className="resume-project-title">교보문고 EBOOK 인앱 구축</h4>
              <div className="resume-project-meta">
                <span className="project-period">2024년 1월 ~ 2024년 9월</span>
                <span className="project-skills">스킬: js, css, ejs, 배포</span>
              </div>
              <p className="resume-project-description">기존 웹뷰어를 앱의 웹뷰로 띄워 사용 가능 하겠금 구축</p>
            </div>

            <div className="resume-project">
              <h4 className="resume-project-title">교보문고 EBOOK 웹뷰어 동기화</h4>
              <div className="resume-project-meta">
                <span className="project-period">2024년 1월 ~ 2024년 9월</span>
                <span className="project-skills">스킬: js, css, ejs, redis, s3, webpack, 배포</span>
              </div>
              <p className="resume-project-description">웹 to 하이브리드 앱(ios, ad) 간 동기화</p>
            </div>

            <div className="resume-project">
              <h4 className="resume-project-title">교보문고 EBOOK GA 기능 추가</h4>
              <div className="resume-project-meta">
                <span className="project-period">2024년 1월 ~ 2024년 9월</span>
                <span className="project-skills">스킬: js, css, ejs, 배포</span>
              </div>
              <p className="resume-project-description">전자책 뷰어로 EPUB뷰어 담당을 하였습니다.</p>
            </div>

            <div className="resume-project">
              <h4 className="resume-project-title">지구랭 반응형 랭킹 쇼핑몰</h4>
              <div className="resume-project-meta">
                <span className="project-period">2021년 10월 ~ 2022년 4월</span>
                <span className="project-skills">스킬: html5, css, js, php, 배포</span>
              </div>
              <p className="resume-project-description">
                지구랭의 반응형 쇼핑몰입니다. 프론트엔드 중 웹 접근성을 갖춘 HTML구조와 반응형 스타일, 사용자 인터렉션 위주의 웹사이트의 프론트엔드를 담당하였습니다.
                <br />모바일 우선 반응형 / 웹접근성
                <br /><a href="https://jigoorang.com/" target="_blank" rel="noopener noreferrer">https://jigoorang.com/</a>
              </p>
            </div>

            <div className="resume-project">
              <h4 className="resume-project-title">2021 서울 청계천 빛초롱 축제 - AI 전시관 페이지</h4>
              <div className="resume-project-meta">
                <span className="project-period">2021년 7월 ~ 2021년 9월</span>
                <span className="project-skills">스킬: html5, css, js, tree.js</span>
              </div>
              <p className="resume-project-description">
                웹 모델 뷰어를 이용해 실시간 AI전시관을 구축하였습니다. 반응형 이벤트 페이지로 3d모델을 넣어 일정 구역에 진입 하면 모델뷰어를 실행 시키고, 모달을 띄워 한지등을 모을수 있게 해주는 이벤트 페이지 입니다.
                <br />모바일 우선 반응형 / 웹 접근성 / 다국어 / geolocation / model_viewer
              </p>
            </div>

            <div className="resume-project">
              <h4 className="resume-project-title">같이줍깅</h4>
              <div className="resume-project-meta">
                <span className="project-period">2021년 6월 ~</span>
                <span className="project-skills">스킬: html5, css3, js, vue.js, aws s3</span>
              </div>
              <p className="resume-project-description">
                쓰레기를 같이줍는 커뮤니티로 간단한 웹앱을 제작하였습니다.
                <br />사용자 커뮤니티 / 모바일 웹앱
              </p>
            </div>

            <div className="resume-project">
              <h4 className="resume-project-title">에스원 WAS - 다각형 / 스냅샷 기능 개발</h4>
              <div className="resume-project-meta">
                <span className="project-period">2022년 5월 ~ 2022년 6월</span>
                <span className="project-skills">스킬: html5, css, js, azure, python</span>
              </div>
              <p className="resume-project-description">
                실시간 카메라 화면에 그리기 도구 기능을 개발 하였고, 실시간 이벤트가 감지되면 스냅샷을 찍어 주는 기능을 개발 하였습니다.
                <br />PC / 웹 접근성
              </p>
            </div>

            <div className="resume-project">
              <h4 className="resume-project-title">스누독 케어센터</h4>
              <div className="resume-project-meta">
                <span className="project-period">2019년 5월 ~ 2022년 7월</span>
                <span className="project-skills">스킬: html5, css, js, bootstrap</span>
              </div>
              <p className="resume-project-description">
                반응형 강아지 유치원 원페이지 사이트를 구축 하였습니다.
                <br />모바일 우선 반응형 / 웹 접근성
              </p>
            </div>

            <div className="resume-project">
              <h4 className="resume-project-title">십일홍</h4>
              <div className="resume-project-meta">
                <span className="project-period">2019년 1월 ~ 2022년 6월</span>
                <span className="project-skills">스킬: html5, css, js</span>
              </div>
              <p className="resume-project-description">
                카페24 솔루션을 사용해 PC와 모바일이 따로 있는 사이트를 구축하였습니다.
              </p>
            </div>

            <div className="resume-project">
              <h4 className="resume-project-title">비에프랩</h4>
              <div className="resume-project-meta">
                <span className="project-period">2019년 1월 ~ 2022년 6월</span>
                <span className="project-skills">스킬: html5, css, js</span>
              </div>
              <p className="resume-project-description">
                카페24 솔루션을 사용해 PC와 모바일이 따로 있는 사이트를 구축하였습니다.
              </p>
            </div>
          </div>

          {/* 스킬 */}
          <div className="resume-section">
            <h3 className="resume-section-title">SKILLS</h3>
            <div className="resume-skills">
              <div className="skill-category">
                <h4 className="skill-category-title">Frontend</h4>
                <div className="skill-tags">
                  <span className="skill-tag">HTML</span>
                  <span className="skill-tag">HTML5</span>
                  <span className="skill-tag">CSS</span>
                  <span className="skill-tag">CSS3</span>
                  <span className="skill-tag">SCSS</span>
                  <span className="skill-tag">Javascript</span>
                  <span className="skill-tag">Vue.js</span>
                  <span className="skill-tag">Jquery</span>
                  <span className="skill-tag">Ajax</span>
                </div>
              </div>
              <div className="skill-category">
                <h4 className="skill-category-title">Backend & Tools</h4>
                <div className="skill-tags">
                  <span className="skill-tag">Node.js</span>
                  <span className="skill-tag">Python</span>
                  <span className="skill-tag">API</span>
                  <span className="skill-tag">RestAPI</span>
                  <span className="skill-tag">MySQL</span>
                </div>
              </div>
              <div className="skill-category">
                <h4 className="skill-category-title">Design & Others</h4>
                <div className="skill-tags">
                  <span className="skill-tag">Photoshop</span>
                  <span className="skill-tag">GitHub</span>
                  <span className="skill-tag">AWS</span>
                  <span className="skill-tag">Slack</span>
                  <span className="skill-tag">VSCode</span>
                  <span className="skill-tag">Jira</span>
                </div>
              </div>
            </div>
          </div>

          {/* 연락처 */}
          <div className="resume-section">
            <h3 className="resume-section-title">CONTACT</h3>
            <div className="resume-contact">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <a href="mailto:oo8923@gmail.com">oo8923@gmail.com</a>
              </div>
              <div className="contact-item">
                <i className="fab fa-github"></i>
                <a href="https://github.com/sihnrila" target="_blank" rel="noopener noreferrer">
                  github.com/sihnrila
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
