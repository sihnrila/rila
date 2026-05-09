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
                서비스의 동작 구조를 프론트엔드 관점에서 설계합니다.
              </p>
              <p className="resume-intro-text">
                약 8년간 웹 에이전시, 스타트업, 전자책 뷰어 전문사에서 일했습니다.<br />
                웹뷰 연동, 상태 동기화, SDK 모듈화, 에디터 개발을 다뤘습니다.
              </p>
              <p className="resume-intro-text">
                화면 구현보다 실서비스에서 구조가 버티는지를 먼저 봅니다.<br />
                현재는 국립장애인도서관 EPUB 웹뷰어 SDK 개발 중입니다.
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
              <p className="career-total">총 7년 9개월</p>
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
                <span className="resume-item-date">2022. 10 ~ 2024. 10</span>
              </div>
              <p className="resume-item-role">대리 · 팀원</p>
              <p className="resume-item-description">주요직무: 프론트엔드개발자</p>
            </div>

            <div className="resume-item">
              <div className="resume-item-header">
                <h4 className="resume-item-title">주식회사 용산집</h4>
                <span className="resume-item-date">2021. 06 ~ 2022. 07</span>
              </div>
              <p className="resume-item-role">사원 · 팀원 · 1년 2개월</p>
              <p className="resume-item-description">주요직무: 프론트엔드개발자</p>
            </div>

            <div className="resume-item">
              <div className="resume-item-header">
                <h4 className="resume-item-title">아부하킴 주식회사</h4>
                <span className="resume-item-date">2020. 06 ~ 2021. 05</span>
              </div>
              <p className="resume-item-role">과장 · 팀장 · 1년</p>
              <p className="resume-item-description">주요직무: 웹디자이너</p>
            </div>

            <div className="resume-item">
              <div className="resume-item-header">
                <h4 className="resume-item-title">주식회사에이투제이</h4>
                <span className="resume-item-date">2019. 06 ~ 2020. 05</span>
              </div>
              <p className="resume-item-role">사원 · 팀원 · 1년</p>
              <p className="resume-item-description">주요직무: 웹디자이너</p>
            </div>

            <div className="resume-item">
              <div className="resume-item-header">
                <h4 className="resume-item-title">더텐트</h4>
                <span className="resume-item-date">2018. 06 ~ 2019. 05</span>
              </div>
              <p className="resume-item-role">사원 · 팀원 · 1년</p>
              <p className="resume-item-description">주요직무: 웹디자이너</p>
            </div>
          </div>

          {/* 경력기술서 */}
          <div className="resume-section">
            <h3 className="resume-section-title">경력기술서</h3>

            <div className="resume-project">
              <h4 className="resume-project-title">국립장애인도서관 EPUB 웹뷰어 SDK 개발</h4>
              <div className="resume-project-meta">
                <span className="project-period">2024. 11 ~</span>
                <span className="project-skills">JS · CSS · EJS · SDK</span>
              </div>
              <p className="resume-project-description">
                외부 서비스에서 뷰어 기능을 재사용할 수 있도록 SDK 구조로 모듈화.<br />
                초기화 / 이벤트 / 상태 관리를 분리하여 기능 확장 비용 최소화.
              </p>
            </div>

            <div className="resume-project">
              <h4 className="resume-project-title">교보문고 EPUB 뷰어 — 웹-앱 동기화 구축</h4>
              <div className="resume-project-meta">
                <span className="project-period">2024. 01 ~ 2024. 09</span>
                <span className="project-skills">JS · EJS · Redis · S3 · Webpack</span>
              </div>
              <p className="resume-project-description">
                문제 · 웹과 앱 WebView 간 사용자 상태 불일치<br />
                해결 · Redis로 상태 저장 구조 설계, 이벤트 기반 동기화 흐름 구현<br />
                결과 · 웹/앱 데이터 일관성 확보, 세션 단절 없는 흐름 유지
              </p>
            </div>

            <div className="resume-project">
              <h4 className="resume-project-title">교보문고 EPUB 뷰어 — 인앱 WebView 연동</h4>
              <div className="resume-project-meta">
                <span className="project-period">2024. 01 ~ 2024. 09</span>
                <span className="project-skills">JS · EJS · CSS</span>
              </div>
              <p className="resume-project-description">
                기존 웹뷰어를 앱 WebView에서 동일하게 동작하도록 환경별 분기 처리.<br />
                iOS / Android 각 네이티브 브릿지와 연동하여 앱 내 UX 흐름 유지.
              </p>
            </div>

            <div className="resume-project">
              <h4 className="resume-project-title">알라딘 EPUB 뷰어 B2C 구축 · B2B 유지보수</h4>
              <div className="resume-project-meta">
                <span className="project-period">2022. 10 ~ 2024. 10</span>
                <span className="project-skills">JS · CSS · EJS · Webpack</span>
              </div>
              <p className="resume-project-description">
                문제 · 뷰어 기능 재사용 불가, 콘텐츠 제어 수단 부재<br />
                해결 · 초기화·이벤트·상태를 SDK 단위로 분리, 에디터 UI와 제어 로직 구현<br />
                결과 · 기능 단위 재사용 구조 확보, 확장 비용 최소화
              </p>
            </div>

            <div className="resume-project">
              <h4 className="resume-project-title">YES24 EPUB 뷰어 B2B 유지보수</h4>
              <div className="resume-project-meta">
                <span className="project-period">2022. 10 ~ 2024. 10</span>
                <span className="project-skills">JS · CSS · EJS</span>
              </div>
              <p className="resume-project-description">
                CS 이슈 분석 및 긴급 패치, 기능 개선 대응.
              </p>
            </div>

            <div className="resume-project">
              <h4 className="resume-project-title">에스원 WAS — 실시간 영역 지정 · 스냅샷 기능</h4>
              <div className="resume-project-meta">
                <span className="project-period">2022. 05 ~ 2022. 06</span>
                <span className="project-skills">JS · CSS · Azure · Python</span>
              </div>
              <p className="resume-project-description">
                실시간 카메라 화면 위에 Canvas 기반 다각형 그리기 도구 구현.<br />
                이벤트 감지 시 자동 스냅샷 캡처 기능 개발.
              </p>
            </div>

            <div className="resume-project">
              <h4 className="resume-project-title">지구랭 반응형 쇼핑몰</h4>
              <div className="resume-project-meta">
                <span className="project-period">2021. 10 ~ 2022. 04</span>
                <span className="project-skills">HTML · CSS · JS · PHP</span>
              </div>
              <p className="resume-project-description">
                디자이너·백엔드와 동시 작업 환경에서 비동기 API 연동으로 페이지 리로드 없는 UI 구현.<br />
                <a href="https://jigoorang.com/" target="_blank" rel="noopener noreferrer">jigoorang.com</a>
              </p>
            </div>

            <div className="resume-project">
              <h4 className="resume-project-title">서울 빛초롱 축제 — AI 전시관 이벤트 페이지</h4>
              <div className="resume-project-meta">
                <span className="project-period">2021. 07 ~ 2021. 09</span>
                <span className="project-skills">JS · CSS · Three.js · Geolocation · model-viewer</span>
              </div>
              <p className="resume-project-description">
                문제 · 위치·3D·실시간이 혼재하는 인터랙션 요구<br />
                해결 · Geolocation 진입 이벤트 → 모델 뷰어 트리거, 실시간 상태를 단일 흐름으로 처리<br />
                결과 · 복합 인터랙션을 구조적으로 통합, 참여형 UX 구현
              </p>
            </div>

            <div className="resume-project">
              <h4 className="resume-project-title">같이줍깅 — 커뮤니티 웹앱</h4>
              <div className="resume-project-meta">
                <span className="project-period">2021. 06 ~</span>
                <span className="project-skills">Vue.js · AWS S3</span>
              </div>
              <p className="resume-project-description">
                Vue.js로 사용자 참여형 커뮤니티 모바일 웹앱 구축. S3에 정적 배포.
              </p>
            </div>

            <div className="resume-project">
              <h4 className="resume-project-title">스누독 케어센터 · 십일홍 · 비에프랩</h4>
              <div className="resume-project-meta">
                <span className="project-period">2019 ~ 2022</span>
                <span className="project-skills">HTML · CSS · JS · Bootstrap · 카페24</span>
              </div>
              <p className="resume-project-description">
                반응형 브랜드 사이트 및 쇼핑몰 구축. 카페24 솔루션 커스터마이징 포함.
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
                  <span className="skill-tag">HTML5</span>
                  <span className="skill-tag">CSS3</span>
                  <span className="skill-tag">SCSS</span>
                  <span className="skill-tag">JavaScript</span>
                  <span className="skill-tag">Vue.js</span>
                  <span className="skill-tag">React</span>
                  <span className="skill-tag">Webpack</span>
                  <span className="skill-tag">jQuery</span>
                </div>
              </div>
              <div className="skill-category">
                <h4 className="skill-category-title">Infrastructure & Backend</h4>
                <div className="skill-tags">
                  <span className="skill-tag">Node.js</span>
                  <span className="skill-tag">Python</span>
                  <span className="skill-tag">REST API</span>
                  <span className="skill-tag">Redis</span>
                  <span className="skill-tag">AWS S3</span>
                  <span className="skill-tag">MySQL</span>
                </div>
              </div>
              <div className="skill-category">
                <h4 className="skill-category-title">Tooling & Collaboration</h4>
                <div className="skill-tags">
                  <span className="skill-tag">Git</span>
                  <span className="skill-tag">GitHub</span>
                  <span className="skill-tag">Jira</span>
                  <span className="skill-tag">Zeplin</span>
                  <span className="skill-tag">Slack</span>
                  <span className="skill-tag">Photoshop</span>
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
