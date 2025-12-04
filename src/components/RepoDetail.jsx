import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { fetchGitHubRepos, getLanguageColor } from '../services/github'
import axios from 'axios'

const GITHUB_USERNAME = 'sihnrila'
const GITHUB_API_BASE = 'https://api.github.com'

const RepoDetail = () => {
  const { repoName } = useParams()
  const navigate = useNavigate()
  const [repo, setRepo] = useState(null)
  const [loading, setLoading] = useState(true)
  const [readme, setReadme] = useState('')

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
        
        setRepo({
          id: response.data.id,
          name: response.data.name,
          description: response.data.description || '',
          url: response.data.html_url,
          homepage: response.data.homepage,
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
    <div className="container" style={{ paddingTop: '100px' }}>
      <div className="container860" style={{ padding: '2rem' }}>
        <Link to="/" style={{ color: '#000', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
          ← 홈으로 돌아가기
        </Link>
        
        <div style={{ marginBottom: '2rem' }}>
          <div 
            className="card_img"
            style={{ 
              backgroundColor: getLanguageColor(repo.language),
              width: '100%',
              height: '200px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontSize: '2rem',
              fontWeight: 'bold',
              marginBottom: '2rem'
            }}
          >
            <i className="fas fa-code"></i> {repo.language || 'CODE'}
          </div>
          
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{repo.name}</h1>
          
          {repo.description && (
            <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '2rem' }}>
              {repo.description}
            </p>
          )}

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
            <a 
              href={repo.url} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: '#000',
                color: '#fff',
                textDecoration: 'none',
                borderRadius: '4px',
                fontWeight: 'bold'
              }}
            >
              <i className="fab fa-github"></i> GitHub에서 보기
            </a>
            {repo.homepage && (
              <a 
                href={repo.homepage} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#2c3e50',
                  color: '#fff',
                  textDecoration: 'none',
                  borderRadius: '4px',
                  fontWeight: 'bold'
                }}
              >
                <i className="fas fa-external-link-alt"></i> 라이브 사이트
              </a>
            )}
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '1rem',
            marginBottom: '2rem'
          }}>
            <div style={{ padding: '1rem', backgroundColor: '#f8f8f8', borderRadius: '8px' }}>
              <div style={{ fontSize: '0.9rem', color: '#666', marginBottom: '0.5rem' }}>⭐ Stars</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{repo.stars}</div>
            </div>
            <div style={{ padding: '1rem', backgroundColor: '#f8f8f8', borderRadius: '8px' }}>
              <div style={{ fontSize: '0.9rem', color: '#666', marginBottom: '0.5rem' }}>🍴 Forks</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{repo.forks}</div>
            </div>
            <div style={{ padding: '1rem', backgroundColor: '#f8f8f8', borderRadius: '8px' }}>
              <div style={{ fontSize: '0.9rem', color: '#666', marginBottom: '0.5rem' }}>📦 Size</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{repo.size} KB</div>
            </div>
            <div style={{ padding: '1rem', backgroundColor: '#f8f8f8', borderRadius: '8px' }}>
              <div style={{ fontSize: '0.9rem', color: '#666', marginBottom: '0.5rem' }}>🔧 Issues</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{repo.open_issues}</div>
            </div>
          </div>

          {repo.topics.length > 0 && (
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ marginBottom: '1rem' }}>Topics</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {repo.topics.map((topic) => (
                  <span
                    key={topic}
                    style={{
                      padding: '0.5rem 1rem',
                      backgroundColor: '#e3f2fd',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      color: '#1976d2'
                    }}
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div style={{ marginBottom: '2rem', color: '#666', fontSize: '0.9rem' }}>
            <p>생성일: {new Date(repo.created).toLocaleDateString('ko-KR')}</p>
            <p>최종 업데이트: {new Date(repo.updated).toLocaleDateString('ko-KR')}</p>
            <p>라이선스: {repo.license}</p>
          </div>

          {readme && (
            <div style={{ 
              marginTop: '3rem', 
              padding: '2rem', 
              backgroundColor: '#f8f8f8', 
              borderRadius: '8px',
              whiteSpace: 'pre-wrap',
              fontFamily: 'monospace',
              fontSize: '0.9rem'
            }}>
              <h3 style={{ marginBottom: '1rem' }}>README</h3>
              <div dangerouslySetInnerHTML={{ __html: readme.replace(/\n/g, '<br/>') }} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default RepoDetail

