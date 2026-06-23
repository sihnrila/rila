import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

// 이미지 에셋 임포트 (올바른 프로젝트 에셋 매핑)
import accessibility_dashboard from '../assets/img/accessibility_dashboard.jpg'
import light_festival_1 from '../assets/img/light_festival_1.png'
import light_festival_2 from '../assets/img/light_festival_2.png'
import demo01 from '../assets/img/demo01.jpeg'
import demo03 from '../assets/img/demo03.jpeg'

const Resume = () => {
  const navigate = useNavigate()
  const [activeScreenshots, setActiveScreenshots] = useState({})

  const toggleScreenshot = (id) => {
    setActiveScreenshots(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  const handlePrint = () => {
    window.print()
  }

  // 실제 연동 가능한 프로젝트별 캡처 이미지 매핑 데이터
  const projectScreenshots = {
    'accessibility-platform': {
      title: '전자문서 접근성 변환 플랫폼 대시보드 UI 캡처',
      images: [accessibility_dashboard]
    },
    'jigoorang': {
      title: '지구랭 반응형 쇼핑몰 캐릭터 및 로고 캡처',
      images: [demo01]
    },
    'light-festival': {
      title: '청계천 빛초롱축제 AI 전시관 실제 구동 화면 및 로고 캡처',
      images: [light_festival_1, light_festival_2, demo03]
    }
  }

  return (
    <div className="project-detail resume-container-wrapper">
      <div className="container">
        {/* 헤더 및 컨트롤 영역 (인쇄 시 숨김) */}
        <div className="project-header resume-header-actions no-print">
          <div className="header-nav-left">
            <button className="back-button" onClick={() => navigate('/')}>
              <i className="fas fa-arrow-left"></i> BACK
            </button>
          </div>
          <div className="header-nav-right">
            <button className="print-button" onClick={handlePrint}>
              <i className="fas fa-print"></i> PDF 저장 / 인쇄
            </button>
          </div>
        </div>

        {/* 이력서 본문 */}
        <div className="project-info resume-main-content">
          
          {/* 타이틀 영역 */}
          <div className="resume-main-header">
            <h1 className="resume-name">SIN RILA</h1>
            <p className="resume-title">Senior Frontend Engineer | Platform Engineer</p>
            <p className="resume-tags">
              React · TypeScript · Web Platform · WebView SDK · Accessibility · Service Architecture
            </p>
            
            <div className="resume-top-contact">
              <span className="contact-meta">
                <i className="fas fa-envelope"></i> oo8923@gmail.com
              </span>
              <span className="contact-meta">
                <i className="fab fa-github"></i> <a href="https://github.com/sihnrila" target="_blank" rel="noopener noreferrer">github.com/sihnrila</a>
              </span>
            </div>
          </div>

          <hr className="resume-divider" />

          {/* PROFILE */}
          <div className="resume-section">
            <h3 className="resume-section-title">PROFILE</h3>
            <div className="resume-intro">
              <p className="resume-intro-text">
                7년 9개월 이상의 웹 서비스 개발 경험을 보유한 Frontend Engineer입니다.
              </p>
              <p className="resume-intro-text">
                초기에는 웹디자인 및 퍼블리싱 업무를 수행했으며, 이후 프론트엔드 개발자로 전환하여 플랫폼 구축, WebView SDK 개발, 접근성 대응, 서비스 연동 설계, 관리자 시스템 구축 업무를 수행하고 있습니다.
              </p>
              <p className="resume-intro-text">
                특히 공공기관 전자책 플랫폼 구축, 모바일 앱 연동, 계정 연동 시스템 설계, 접근성 서비스 구축 경험을 보유하고 있으며 대부분의 프로젝트에서 설계부터 개발, 배포, 운영까지 전 과정에 참여했습니다.
              </p>
              <p className="resume-intro-text">
                단순 UI 구현보다 서비스 구조 설계, 운영 효율성 향상, 사용자 경험 개선에 집중하며 문제를 해결하는 개발자입니다.
              </p>
            </div>
          </div>

          {/* TECH STACK */}
          <div className="resume-section">
            <h3 className="resume-section-title">TECH STACK</h3>
            <div className="resume-skills">
              <div className="skill-category">
                <h4 className="skill-category-title">Frontend</h4>
                <div className="skill-tags">
                  <span className="skill-tag">React</span>
                  <span className="skill-tag">TypeScript</span>
                  <span className="skill-tag">JavaScript</span>
                  <span className="skill-tag">Next.js</span>
                  <span className="skill-tag">Vue.js</span>
                  <span className="skill-tag">jQuery</span>
                  <span className="skill-tag">HTML5</span>
                  <span className="skill-tag">CSS3</span>
                  <span className="skill-tag">SCSS</span>
                  <span className="skill-tag">TailwindCSS</span>
                </div>
              </div>
              <div className="skill-category">
                <h4 className="skill-category-title">Platform</h4>
                <div className="skill-tags">
                  <span className="skill-tag">WebView</span>
                  <span className="skill-tag">SDK</span>
                  <span className="skill-tag">EPUB</span>
                  <span className="skill-tag">TTS</span>
                  <span className="skill-tag">Accessibility</span>
                  <span className="skill-tag">Hybrid App</span>
                </div>
              </div>
              <div className="skill-category">
                <h4 className="skill-category-title">Backend & Database</h4>
                <div className="skill-tags">
                  <span className="skill-tag">Node.js</span>
                  <span className="skill-tag">Python</span>
                  <span className="skill-tag">REST API</span>
                  <span className="skill-tag">MySQL</span>
                  <span className="skill-tag">Redis</span>
                </div>
              </div>
              <div className="skill-category">
                <h4 className="skill-category-title">Cloud / Infra / Collaboration</h4>
                <div className="skill-tags">
                  <span className="skill-tag">AWS</span>
                  <span className="skill-tag">Azure</span>
                  <span className="skill-tag">S3</span>
                  <span className="skill-tag">Webpack</span>
                  <span className="skill-tag">Git</span>
                  <span className="skill-tag">GitHub</span>
                  <span className="skill-tag">Jira</span>
                  <span className="skill-tag">Confluence</span>
                  <span className="skill-tag">Notion</span>
                </div>
              </div>
            </div>
          </div>

          {/* CAREER */}
          <div className="resume-section">
            <h3 className="resume-section-title">CAREER</h3>
            
            {/* 회사 1: 크로스티앤씨 */}
            <div className="career-company-block">
              <div className="resume-item-header company-header">
                <h4 className="company-name">주식회사 크로스티앤씨</h4>
                <span className="resume-item-date">2024.11 ~ Present</span>
              </div>
              <p className="resume-item-role">Frontend Engineer</p>

              {/* 프로젝트 1-1 */}
              <div className="resume-project-detail-block">
                <div className="project-title-wrapper">
                  <h5 className="resume-project-sub-title">국립장애인도서관 EPUB WebViewer SDK 구축</h5>
                  <div className="project-actions-wrapper no-print">
                    <Link to="/repos/detailpage-editor" className="project-link-btn-inline">
                      <i className="fas fa-external-link-alt"></i> 프로젝트 상세 보기
                    </Link>
                  </div>
                </div>
                
                <div className="project-detail-content">
                  <p className="project-meta-desc"><strong>프로젝트 개요:</strong> 국립장애인도서관 전자책 서비스를 위한 EPUB 기반 웹뷰어 SDK 구축 프로젝트</p>
                  <p className="project-meta-desc"><strong>역할:</strong> Frontend Engineer (주도 개발)</p>
                  
                  <div className="project-tasks-list">
                    <strong>담당 업무:</strong>
                    <ul>
                      <li>EPUB 웹뷰어 아키텍처 설계 및 개발</li>
                      <li>iOS / Android WebView SDK 구조 설계 및 구현</li>
                      <li>TTS (Text-To-Speech) 기능 개발</li>
                      <li>하이라이트 및 메모 기능 개발</li>
                      <li>전자책 상태 저장 및 복원 기능 개발</li>
                      <li>스크린 리더(VoiceOver, TalkBack) 대응 및 접근성 기능 개선</li>
                      <li>키보드 내비게이션 및 고대비 모드 구현</li>
                      <li>품질 검수 및 접근성 검수 대응</li>
                    </ul>
                  </div>

                  <div className="project-outcomes">
                    <strong>주요 성과:</strong>
                    <ul>
                      <li>모바일 앱 공통 SDK 구조 구축 및 웹뷰 연동 구조 표준화</li>
                      <li>국가 표준 및 공공기관 웹 접근성 요구사항(KWCAG) 완벽 충족</li>
                      <li>WebView 환경별 예외 처리 체계 수립 및 뷰어 핵심 기능 모듈화</li>
                      <li>향후 재사용 가능한 전자책 플랫폼 기반 구축</li>
                    </ul>
                  </div>
                  
                  <p className="project-tech-tags">
                    <strong>기술 스택:</strong> <span>JavaScript · EPUB.js · WebView · SDK</span>
                  </p>
                </div>
              </div>

              {/* 프로젝트 1-2 */}
              <div className="resume-project-detail-block">
                <div className="project-title-wrapper">
                  <h5 className="resume-project-sub-title">전자문서 접근성 변환 플랫폼 구축</h5>
                  <div className="project-actions-wrapper no-print">
                    <Link to="/repos/Flieupload_FE" className="project-link-btn-inline">
                      <i className="fas fa-external-link-alt"></i> 프로젝트 상세 보기
                    </Link>
                    {projectScreenshots['accessibility-platform'] && (
                      <button 
                        className="view-screenshot-btn"
                        onClick={() => toggleScreenshot('accessibility-platform')}
                        aria-expanded={!!activeScreenshots['accessibility-platform']}
                      >
                        <i className={`fas ${activeScreenshots['accessibility-platform'] ? 'fa-eye-slash' : 'fa-image'}`}></i> 
                        {activeScreenshots['accessibility-platform'] ? ' 캡처 닫기' : ' 화면 캡처 보기'}
                      </button>
                    )}
                  </div>
                </div>
                
                <div className="project-detail-content">
                  <p className="project-meta-desc"><strong>프로젝트 개요:</strong> 공공기관 대상 전자문서 접근성 변환 SaaS 구축</p>
                  <p className="project-meta-desc"><strong>역할:</strong> Frontend Engineer</p>

                  <div className="project-tasks-list">
                    <strong>담당 업무:</strong>
                    <ul>
                      <li>React 기반 프론트엔드 아키텍처 설계 및 MVP 구축</li>
                      <li>파일 업로드 프로세스 개발 및 권한 관리 기능 개발</li>
                      <li>작업 현황 모니터링 및 대시보드 UI 개발</li>
                      <li>관리자 시스템 구축</li>
                    </ul>
                  </div>

                  <div className="project-outcomes">
                    <strong>주요 성과:</strong>
                    <ul>
                      <li>관리자 기능 통합 구축을 통해 운영 프로세스 단순화</li>
                      <li>실시간 작업 진행 현황 가시성 확보 및 대용량 파일 핸들링 최적화</li>
                      <li>지속 가능하고 유지보수 가능한 컴포넌트 구조 설계</li>
                    </ul>
                  </div>

                  <p className="project-tech-tags">
                    <strong>기술 스택:</strong> <span>React · TypeScript · Vite · TailwindCSS</span>
                  </p>

                  {/* 시각적 증거 (스크린샷 영역) */}
                  {activeScreenshots['accessibility-platform'] && projectScreenshots['accessibility-platform'] && (
                    <div className="screenshot-gallery-container animate-fade-in">
                      <p className="gallery-caption"><i className="fas fa-info-circle"></i> {projectScreenshots['accessibility-platform'].title}</p>
                      <div className="gallery-images">
                        {projectScreenshots['accessibility-platform'].images.map((img, idx) => (
                          <img key={idx} src={img} alt="Accessibility Platform Screenshot" className="screenshot-img" />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* 프로젝트 1-3 */}
              <div className="resume-project-detail-block">
                <div className="project-title-wrapper">
                  <h5 className="resume-project-sub-title">TOPIK PLAY 플랫폼 구축</h5>
                  <div className="project-actions-wrapper no-print">
                    <Link to="/repos/topichi_App" className="project-link-btn-inline">
                      <i className="fas fa-external-link-alt"></i> 프로젝트 상세 보기
                    </Link>
                  </div>
                </div>

                <div className="project-detail-content">
                  <p className="project-meta-desc"><strong>프로젝트 개요:</strong> 외국인 대상 한국어 학습 게임 플랫폼 구축</p>
                  <p className="project-meta-desc"><strong>역할:</strong> Frontend Engineer / Service Designer</p>

                  <div className="project-tasks-list">
                    <strong>담당 업무:</strong>
                    <ul>
                      <li>game ↔ service 계정 연동 구조 설계</li>
                      <li>UUID 기반 사용자 식별 정책 수립 및 Connect ID 기반 계정 매핑 설계</li>
                      <li>API 명세 조율 협업 및 서비스 플로우 설계</li>
                      <li>운영 정책 정의 및 관리자 기능 설계</li>
                    </ul>
                  </div>

                  <div className="project-outcomes">
                    <strong>주요 성과:</strong>
                    <ul>
                      <li>이종 플랫폼 간 계정 연동 프로세스 표준화 및 사용자 식별 정책 수립</li>
                      <li>체계적인 서비스 운영 시나리오 문서화 및 연동 구조 설계</li>
                      <li>개발·운영 조직 간 원활한 커뮤니케이션을 위한 공통 정책 문서 구축</li>
                    </ul>
                  </div>

                  <p className="project-tech-tags">
                    <strong>기술 스택:</strong> <span>React · TypeScript · REST API</span>
                  </p>
                </div>
              </div>
            </div>

            <hr className="resume-dividersub" />

            {/* 회사 2: 북틀 */}
            <div className="career-company-block">
              <div className="resume-item-header company-header">
                <h4 className="company-name">주식회사 북틀</h4>
                <span className="resume-item-date">2022.10 ~ 2024.10</span>
              </div>
              <p className="resume-item-role">Frontend Engineer</p>

              {/* 프로젝트 2-1 */}
              <div className="resume-project-detail-block">
                <div className="project-title-wrapper">
                  <h5 className="resume-project-sub-title">교보문고 eBook 플랫폼 구축 및 고도화</h5>
                  <div className="project-actions-wrapper no-print">
                    <Link to="/repos/wedding-editor" className="project-link-btn-inline">
                      <i className="fas fa-external-link-alt"></i> 프로젝트 상세 보기
                    </Link>
                  </div>
                </div>

                <div className="project-detail-content">
                  <p className="project-meta-desc"><strong>프로젝트 개요:</strong> 교보문고 전자책 플랫폼 구축 및 운영</p>
                  <p className="project-meta-desc"><strong>역할:</strong> Frontend Engineer (주도 개발)</p>

                  <div className="project-tasks-list">
                    <strong>담당 업무:</strong>
                    <ul>
                      <li>B2B / B2C 전자책 웹뷰어 기능 개발</li>
                      <li>WebView 기반 인앱 독서 환경 및 웹 ↔ 앱 독서 상태 동기화 개발</li>
                      <li>Google Analytics 연동 및 마케팅 추적 모듈 구현</li>
                      <li>서비스 운영, 핫픽스 대응 및 배포 프로세스 관리</li>
                    </ul>
                  </div>

                  <div className="project-outcomes">
                    <strong>주요 성과:</strong>
                    <ul>
                      <li>WebView 기반 인앱 독서 환경을 구축하여 네이티브 앱 수준의 웹뷰 인터랙션 확보</li>
                      <li>Redis 기반 상태 동기화 구조를 활용해 웹 ↔ 앱 간 하이브리드 독서 상태 실시간 동기화 구현</li>
                      <li>플랫폼 핵심 기능 고도화를 통해 대규모 트래픽 하에서의 서비스 운영 안정성 크게 개선</li>
                    </ul>
                  </div>

                  <p className="project-tech-tags">
                    <strong>기술 스택:</strong> <span>JavaScript · Redis · AWS S3 · Webpack · EJS</span>
                  </p>
                </div>
              </div>

              {/* 프로젝트 2-2 */}
              <div className="resume-project-detail-block">
                <h5 className="resume-project-sub-title">알라딘 eBook 플랫폼 구축 및 운영</h5>
                <div className="project-detail-content">
                  <p className="project-meta-desc"><strong>프로젝트 개요:</strong> 알라딘 전자책 서비스 B2B/B2C 플랫폼 구축 및 운영</p>
                  <div className="project-tasks-list">
                    <strong>담당 업무 및 성과:</strong>
                    <ul>
                      <li>전자책 웹뷰어 B2C 서비스 신규 구축 참여 및 UI 개선</li>
                      <li>B2B 서비스 운영 및 CS 요구사항 반영, 사용자 기능 유지보수 수행</li>
                    </ul>
                  </div>
                  <p className="project-tech-tags">
                    <strong>기술 스택:</strong> <span>JavaScript · EJS</span>
                  </p>
                </div>
              </div>

              {/* 프로젝트 2-3 */}
              <div className="resume-project-detail-block">
                <h5 className="resume-project-sub-title">YES24 eBook 플랫폼 운영</h5>
                <div className="project-detail-content">
                  <p className="project-meta-desc"><strong>프로젝트 개요:</strong> YES24 전자책 서비스 운영 및 유지보수</p>
                  <div className="project-tasks-list">
                    <strong>담당 업무 및 성과:</strong>
                    <ul>
                      <li>전자책 웹뷰어 핵심 렌더링 성능 및 폰트 로딩 기능 개선</li>
                      <li>크로스 브라우징 이슈 대응, 유지보수 및 긴급 버그 수정</li>
                    </ul>
                  </div>
                  <p className="project-tech-tags">
                    <strong>기술 스택:</strong> <span>JavaScript · EJS</span>
                  </p>
                </div>
              </div>
            </div>

            <hr className="resume-dividersub" />

            {/* 회사 3: 용산집 */}
            <div className="career-company-block">
              <div className="resume-item-header company-header">
                <h4 className="company-name">주식회사 용산집</h4>
                <span className="resume-item-date">2021.06 ~ 2022.07</span>
              </div>
              <p className="resume-item-role">Frontend Developer</p>

              {/* 프로젝트 3-1 */}
              <div className="resume-project-detail-block">
                <div className="project-title-wrapper">
                  <h5 className="resume-project-sub-title">지구랭 반응형 쇼핑몰 구축</h5>
                  <div className="project-actions-wrapper no-print">
                    <Link to="/repos/JigooFe" className="project-link-btn-inline">
                      <i className="fas fa-external-link-alt"></i> 프로젝트 상세 보기
                    </Link>
                    {projectScreenshots['jigoorang'] && (
                      <button 
                        className="view-screenshot-btn"
                        onClick={() => toggleScreenshot('jigoorang')}
                        aria-expanded={!!activeScreenshots['jigoorang']}
                      >
                        <i className={`fas ${activeScreenshots['jigoorang'] ? 'fa-eye-slash' : 'fa-image'}`}></i> 
                        {activeScreenshots['jigoorang'] ? ' 캡처 닫기' : ' 화면 캡처 보기'}
                      </button>
                    )}
                  </div>
                </div>

                <div className="project-detail-content">
                  <p className="project-meta-desc"><strong>프로젝트 개요:</strong> 랭킹 기반 반응형 친환경 커머스 쇼핑몰 구축</p>
                  <div className="project-tasks-list">
                    <strong>담당 업무 및 성과:</strong>
                    <ul>
                      <li>모바일 우선 반응형 UI/UX 개발 및 인터랙션 구현</li>
                      <li>스크린 리더 사용자를 고려한 웹 접근성 표준 마크업 대응</li>
                      <li>REST API 연동을 통한 비동기식 사용자 인터페이스 구축</li>
                    </ul>
                  </div>
                  <p className="project-tech-tags">
                    <strong>기술 스택:</strong> <span>HTML5 · CSS3 · JavaScript · PHP</span>
                  </p>

                  {/* 시각적 증거 (스크린샷 영역) */}
                  {activeScreenshots['jigoorang'] && projectScreenshots['jigoorang'] && (
                    <div className="screenshot-gallery-container animate-fade-in">
                      <p className="gallery-caption"><i className="fas fa-info-circle"></i> {projectScreenshots['jigoorang'].title}</p>
                      <div className="gallery-images">
                        {projectScreenshots['jigoorang'].images.map((img, idx) => (
                          <img key={idx} src={img} alt="Jigoorang Screenshot" className="screenshot-img" />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* 프로젝트 3-2 */}
              <div className="resume-project-detail-block">
                <div className="project-title-wrapper">
                  <h5 className="resume-project-sub-title">청계천 빛초롱축제 AI 전시관 구축</h5>
                  <div className="project-actions-wrapper no-print">
                    <Link to="/repos/PickUpDemo" className="project-link-btn-inline">
                      <i className="fas fa-external-link-alt"></i> 프로젝트 상세 보기
                    </Link>
                    {projectScreenshots['light-festival'] && (
                      <button 
                        className="view-screenshot-btn"
                        onClick={() => toggleScreenshot('light-festival')}
                        aria-expanded={!!activeScreenshots['light-festival']}
                      >
                        <i className={`fas ${activeScreenshots['light-festival'] ? 'fa-eye-slash' : 'fa-image'}`}></i> 
                        {activeScreenshots['light-festival'] ? ' 캡처 닫기' : ' 화면 캡처 보기'}
                      </button>
                    )}
                  </div>
                </div>

                <div className="project-detail-content">
                  <p className="project-meta-desc"><strong>프로젝트 개요:</strong> 3D 모델 기반 온라인 전시관 구축</p>
                  <div className="project-tasks-list">
                    <strong>담당 업무 및 성과:</strong>
                    <ul>
                      <li>Web 3D Model Viewer 연동 및 모바일 환경 최적화</li>
                      <li>GPS(Geolocation) API 기반의 위치 식별 및 구역 진입 이벤트 연동 기능 구현</li>
                      <li>글로벌 사용자를 위한 다국어 페이지 인프라 구축</li>
                    </ul>
                  </div>
                  <p className="project-tech-tags">
                    <strong>기술 스택:</strong> <span>JavaScript · Model Viewer · Geolocation</span>
                  </p>

                  {/* 시각적 증거 (스크린샷 영역) */}
                  {activeScreenshots['light-festival'] && projectScreenshots['light-festival'] && (
                    <div className="screenshot-gallery-container animate-fade-in">
                      <p className="gallery-caption"><i className="fas fa-info-circle"></i> {projectScreenshots['light-festival'].title}</p>
                      <div className="gallery-images">
                        {projectScreenshots['light-festival'].images.map((img, idx) => (
                          <img key={idx} src={img} alt="Light Festival Screenshot" className="screenshot-img" />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* 프로젝트 3-3 */}
              <div className="resume-project-detail-block">
                <div className="project-title-wrapper">
                  <h5 className="resume-project-sub-title">에스원 WAS 기능 개발</h5>
                  <div className="project-actions-wrapper no-print">
                    <Link to="/repos/SoneFe" className="project-link-btn-inline">
                      <i className="fas fa-external-link-alt"></i> 프로젝트 상세 보기
                    </Link>
                  </div>
                </div>

                <div className="project-detail-content">
                  <p className="project-meta-desc"><strong>프로젝트 개요:</strong> 실시간 카메라 관제 기능 개발</p>
                  <div className="project-tasks-list">
                    <strong>담당 업무 및 성과:</strong>
                    <ul>
                      <li>HTML5 Canvas 기반 실시간 카메라 화면 상 다각형 지정 및 그리기 기능 구현</li>
                      <li>모니터링 이벤트 감지 시 실시간 스냅샷 캡처 및 이미지 다운로드 기능 구현</li>
                      <li>Python 기반 백엔드 연동 및 관제 기능 고도화</li>
                    </ul>
                  </div>
                  <p className="project-tech-tags">
                    <strong>기술 스택:</strong> <span>JavaScript · Python · Azure</span>
                  </p>
                </div>
              </div>
            </div>

            <hr className="resume-dividersub" />

            {/* 초기 커리어 */}
            <div className="career-company-block">
              <h4 className="company-name section-subtitle">Early Career (Web Design & Publishing)</h4>
              
              <div className="early-career-item">
                <div className="resume-item-header">
                  <span className="early-title"><strong>아부하킴 주식회사</strong> | 웹디자이너 / 팀장</span>
                  <span className="resume-item-date">2020.06 ~ 2021.05</span>
                </div>
              </div>

              <div className="early-career-item">
                <div className="resume-item-header">
                  <span className="early-title"><strong>주식회사 에이투제이</strong> | 웹디자이너</span>
                  <span className="resume-item-date">2019.06 ~ 2020.05</span>
                </div>
              </div>

              <div className="early-career-item">
                <div className="resume-item-header">
                  <span className="early-title"><strong>더텐트</strong> | 웹디자이너</span>
                  <span className="resume-item-date">2018.06 ~ 2019.05</span>
                </div>
              </div>

              <div className="early-career-desc">
                <strong>주요 업무:</strong> 반응형 웹사이트 구축, 쇼핑몰 디자인 및 테마 개발, UI/UX 디자인, HTML/CSS 퍼블리싱 및 웹 접근성(KWCAG) 기초 마크업 수립
              </div>
            </div>

          </div>

          {/* STRENGTHS */}
          <div className="resume-section">
            <h3 className="resume-section-title">STRENGTHS</h3>
            <div className="strengths-grid">
              <div className="strength-card">
                <h5>Web Platform Engineering</h5>
                <ul>
                  <li>WebView SDK 개발 및 하이브리드 앱 연동</li>
                  <li>플랫폼 공통 기능 설계 및 유지보수 효율화</li>
                  <li>전자책 플랫폼(EPUB, TTS) 구축 역량</li>
                </ul>
              </div>
              <div className="strength-card">
                <h5>Accessibility</h5>
                <ul>
                  <li>스크린 리더(VoiceOver, TalkBack) 완벽 대응</li>
                  <li>키보드 인터랙션 내비게이션 완벽 지원</li>
                  <li>고대비 모드 등 웹 접근성(KWCAG) 표준 충족</li>
                </ul>
              </div>
              <div className="strength-card">
                <h5>Service Architecture</h5>
                <ul>
                  <li>이종 서비스 간 계정 연동 및 인증 흐름 설계</li>
                  <li>UUID/Connect ID 활용 사용자 식별 정책 정의</li>
                  <li>어드민/백오피스 대시보드 시스템 최적화</li>
                </ul>
              </div>
              <div className="strength-card">
                <h5>Product Mindset & Collaboration</h5>
                <ul>
                  <li>비즈니스 목표와 기획 의도를 고려한 프론트엔드 조율</li>
                  <li>UI/UX 개선 및 개발 효율성 향상을 위한 적극적 협업</li>
                  <li>디자인과 개발 사이의 가교 역할 수행</li>
                </ul>
              </div>
            </div>
          </div>

          {/* EDUCATION */}
          <div className="resume-section">
            <h3 className="resume-section-title">EDUCATION</h3>
            <div className="resume-item">
              <div className="resume-item-header">
                <h4 className="resume-item-title">숭실사이버대학교 ICT공학과</h4>
                <span className="resume-item-date">2021.03 ~ 2023.12</span>
              </div>
              <p className="resume-item-description">공학사 학사 졸업</p>
            </div>
          </div>

          {/* CONTACT */}
          <div className="resume-section last-section">
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
