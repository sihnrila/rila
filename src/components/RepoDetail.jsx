import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { REPO_STATIC_SCREENSHOTS } from '../services/github'
import { PROJECT_META } from '../data/projects'

const RepoDetail = () => {
  const { repoName } = useParams()
  const navigate = useNavigate()
  const meta = PROJECT_META[repoName]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [repoName])

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1)
    } else {
      navigate('/')
      setTimeout(() => {
        const el = document.getElementById('work')
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 200)
    }
  }

  if (!meta) {
    return (
      <div className="repo-detail-page">
        <div className="repo-detail-container">
          <button className="repo-back-btn" onClick={handleBack}>
            <i className="fas fa-arrow-left" aria-hidden="true"></i> 목록으로
          </button>
          <p style={{ color: '#666', marginTop: '4rem' }}>프로젝트 정보를 찾을 수 없습니다.</p>
        </div>
      </div>
    )
  }

  const screenshot = REPO_STATIC_SCREENSHOTS[repoName]
  const hasChallenge = meta.challenges?.some(c => c.problem)
  const hasResponsibilities = meta.responsibilities?.length > 0
  const hasTechStack = meta.techStack?.length > 0
  const showDemoBtn = meta.hasRealDemo && meta.demoUrl
  const showGitHubBtn = !!meta.githubUrl

  return (
    <div className="repo-detail-page">
      <div className="repo-detail-container">
        <button
          className="repo-back-btn"
          onClick={handleBack}
          aria-label="프로젝트 목록으로 돌아가기"
        >
          <i className="fas fa-arrow-left" aria-hidden="true"></i> 목록으로
        </button>

        {screenshot && (
          <figure className="repo-hero-figure">
            <img
              src={screenshot}
              alt={meta.screenshotAlt || `${repoName} 화면`}
              className="repo-hero-img"
              onError={(e) => { e.currentTarget.closest('figure').style.display = 'none' }}
            />
            {meta.screenshotCaption && (
              <figcaption className="repo-hero-caption">{meta.screenshotCaption}</figcaption>
            )}
          </figure>
        )}

        <header className="repo-detail-header">
          {meta.projectFamily && (
            <p className="repo-project-family" aria-label="프로젝트 소속">
              {meta.projectFamily}
            </p>
          )}
          <h1 className="repo-detail-title">{meta.title || repoName}</h1>
          <div className="repo-detail-meta">
            {meta.period && (
              <span className="repo-meta-period">
                <i className="fas fa-calendar-alt" aria-hidden="true"></i> {meta.period}
              </span>
            )}
            {meta.role && <span className="repo-meta-role">{meta.role}</span>}
          </div>
          {meta.tags?.length > 0 && (
            <ul className="repo-detail-tags" aria-label="분류 태그">
              {meta.tags.map(tag => (
                <li key={tag} className="repo-tag-item">{tag}</li>
              ))}
            </ul>
          )}
        </header>

        <div className="repo-detail-body">
          {meta.summary && (
            <section className="repo-section" aria-labelledby="rd-summary">
              <h2 id="rd-summary" className="repo-section-title">개요</h2>
              <p className="repo-section-text">{meta.summary}</p>
            </section>
          )}

          {hasResponsibilities && (
            <section className="repo-section" aria-labelledby="rd-responsibilities">
              <h2 id="rd-responsibilities" className="repo-section-title">담당 업무</h2>
              <ul className="repo-list">
                {meta.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>
          )}

          {hasChallenge && (
            <section className="repo-section" aria-labelledby="rd-challenges">
              <h2 id="rd-challenges" className="repo-section-title">기술적 도전</h2>
              {meta.challenges.filter(c => c.problem).map((c, i) => (
                <div key={i} className="repo-challenge">
                  <div className="challenge-row">
                    <span className="challenge-label">문제</span>
                    <p className="challenge-text">{c.problem}</p>
                  </div>
                  {c.solution && (
                    <div className="challenge-row">
                      <span className="challenge-label">해결</span>
                      <p className="challenge-text">{c.solution}</p>
                    </div>
                  )}
                  {c.result && (
                    <div className="challenge-row">
                      <span className="challenge-label">결과</span>
                      <p className="challenge-text">{c.result}</p>
                    </div>
                  )}
                </div>
              ))}
            </section>
          )}

          {hasTechStack && (
            <section className="repo-section" aria-labelledby="rd-techstack">
              <h2 id="rd-techstack" className="repo-section-title">기술 스택</h2>
              <ul className="repo-techstack-list" aria-label="사용 기술">
                {meta.techStack.map(tech => (
                  <li key={tech} className="repo-tech-item">{tech}</li>
                ))}
              </ul>
            </section>
          )}
        </div>

        {(showGitHubBtn || showDemoBtn) && (
          <footer className="repo-detail-footer">
            {showGitHubBtn && (
              <a
                href={meta.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="repo-link-btn repo-link-github"
                aria-label={`${meta.title || repoName} GitHub 저장소 (새 탭에서 열림)`}
              >
                <i className="fab fa-github" aria-hidden="true"></i> GITHUB
              </a>
            )}
            {showDemoBtn && (
              <a
                href={meta.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="repo-link-btn repo-link-demo"
                aria-label={`${meta.title || repoName} 라이브 데모 (새 탭에서 열림)`}
              >
                <i className="fas fa-external-link-alt" aria-hidden="true"></i> LIVE DEMO
              </a>
            )}
          </footer>
        )}
      </div>
    </div>
  )
}

export default RepoDetail
