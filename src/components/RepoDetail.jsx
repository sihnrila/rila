import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { getLanguageColor, resolveRepoDemoUrl } from '../services/github'
import axios from 'axios'

const GITHUB_USERNAME = 'sihnrila'
const GITHUB_API_BASE = 'https://api.github.com'

const RepoDetail = () => {
  const { repoName } = useParams()
  const navigate = useNavigate()
  const [repo, setRepo] = useState(null)
  const [loading, setLoading] = useState(true)
  const [readme, setReadme] = useState('')
  const [demoUrl, setDemoUrl] = useState('')

  useEffect(() => {
    const loadRepo = async () => {
      setLoading(true)
      try {
        // 저장소 정보 가져오기
        const response = await axios.get(`${GITHUB_API_BASE}/repos/${GITHUB_USERNAME}/${repoName}`, {
          headers: {
            'Accept': 'application/vnd.github.v3+json'
          }
        })
        
        const resolvedDemo = resolveRepoDemoUrl(repoName, response.data.homepage)

        setRepo({
          id: response.data.id,
          name: response.data.name,
          description: response.data.description || '',
          url: response.data.html_url,
          homepage: resolvedDemo,
          language: response.data.language || 'Other',
          stars: response.data.stargazers_count,
          forks: response.data.forks_count,
          updated: response.data.updated_at,
          created: response.data.created_at,
          topics: response.data.topics || [],
          default_branch: response.data.default_branch,
          size: response.data.size,
          open_issues: response.data.open_issues_count,
          license: response.data.license?.name || 'None'
        })

        setDemoUrl(resolvedDemo)

        // README 가져오기 시도
        try {
          const readmeResponse = await axios.get(
            `${GITHUB_API_BASE}/repos/${GITHUB_USERNAME}/${repoName}/readme`,
            {
              headers: {
                'Accept': 'application/vnd.github.v3.raw'
              }
            }
          )
          setReadme(readmeResponse.data)
        } catch (readmeError) {
          console.log('README를 가져올 수 없습니다:', readmeError)
        }
      } catch (error) {
        console.error('저장소 정보를 가져오는데 실패했습니다:', error)
        navigate('/')
      } finally {
        setLoading(false)
      }
    }

    if (repoName) {
      loadRepo()
    }
  }, [repoName, navigate])

  if (loading) {
    return (
      <div className="container" style={{ paddingTop: '100px', textAlign: 'center' }}>
        <p>로딩 중...</p>
      </div>
    )
  }

  if (!repo) {
    return (
      <div className="container" style={{ paddingTop: '100px', textAlign: 'center' }}>
        <p>저장소를 찾을 수 없습니다.</p>
        <Link to="/">홈으로 돌아가기</Link>
      </div>
    )
  }

  return (
    <div className="project-detail">
      <div className="container">
        <div className="project-header">
          <button className="back-button" onClick={() => navigate('/')}>
            <i className="fas fa-arrow-left"></i> BACK
          </button>
          <div 
            className="project-hero-image"
            style={{ 
              backgroundColor: getLanguageColor(repo.language),
              width: '100%',
              height: '20rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              fontWeight: 900,
              marginBottom: '3rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase'
            }}
          >
            <i className="fas fa-code"></i> {repo.language || 'CODE'}
          </div>
          <h1 className="project-title">{repo.name}</h1>
          {repo.description && (
            <p className="project-subtitle">{repo.description}</p>
          )}
          <p className="project-tools">
            <i className="fas fa-code"></i> {repo.language || 'Other'} 
            {repo.topics.length > 0 && ` • ${repo.topics.slice(0, 3).join(', ')}`}
          </p>
        </div>

        <div className="project-info">
          <div className="project-stats">
            <div className="stat-item">
              <div className="stat-label">STARS</div>
              <div className="stat-value">{repo.stars}</div>
            </div>
            <div className="stat-item">
              <div className="stat-label">FORKS</div>
              <div className="stat-value">{repo.forks}</div>
            </div>
            <div className="stat-item">
              <div className="stat-label">SIZE</div>
              <div className="stat-value">{repo.size} KB</div>
            </div>
            <div className="stat-item">
              <div className="stat-label">ISSUES</div>
              <div className="stat-value">{repo.open_issues}</div>
            </div>
          </div>

          <div className="project-links">
            <a 
              href={repo.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link-button"
            >
              <i className="fab fa-github"></i> GITHUB
            </a>
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link-button"
            >
              <i className="fas fa-external-link-alt"></i> LIVE DEMO
            </a>
          </div>

          {repo.topics.length > 0 && (
            <div className="project-topics">
              <h3 className="topics-title">TOPICS</h3>
              <div className="topics-list">
                {repo.topics.map((topic) => (
                  <span key={topic} className="topic-tag">
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="project-meta">
            <div className="meta-item">
              <span className="meta-label">CREATED</span>
              <span className="meta-value">{new Date(repo.created).toLocaleDateString('ko-KR')}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">UPDATED</span>
              <span className="meta-value">{new Date(repo.updated).toLocaleDateString('ko-KR')}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">LICENSE</span>
              <span className="meta-value">{repo.license}</span>
            </div>
          </div>
        </div>

        {/* 데모 페이지 (URL은 항상 추정·homepage·수동매핑으로 설정) */}
        {demoUrl ? (
          <div className="project-demo">
            <div className="demo-header">
              <h3 className="demo-title">DEMO</h3>
              <a 
                href={demoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="demo-link"
              >
                <i className="fas fa-external-link-alt"></i> OPEN IN NEW TAB
              </a>
            </div>
            <div className="demo-container">
              <iframe
                src={demoUrl}
                className="demo-iframe"
                title={`${repo.name} 데모`}
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                onError={() => {
                  console.error('데모 페이지를 로드할 수 없습니다')
                }}
              />
            </div>
            <p className="demo-note">
              데모 페이지가 로드되지 않으면 <a href={demoUrl} target="_blank" rel="noopener noreferrer">여기</a>를 클릭하여 직접 확인하세요.
            </p>
          </div>
        ) : null}

        {readme && (
          <div className="project-readme">
            <h3 className="readme-title">README</h3>
            <div className="readme-content" dangerouslySetInnerHTML={{ __html: readme.replace(/\n/g, '<br/>') }} />
          </div>
        )}
      </div>
    </div>
  )
}

export default RepoDetail

