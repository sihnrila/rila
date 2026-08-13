import { Link, useNavigate } from 'react-router-dom'
import { CAREER_TIMELINE } from '../data/career'

const KEY_PROJECTS = [
  {
    id: 'viewer', company: '주식회사 크로스티앤씨', period: '2024.11 ~ 현재', title: '장애인도서관 EPUB 웹뷰어',
    oneLine: '접근성이 필요한 EPUB 웹뷰어의 SDK·WebView 연동과 TTS 상태 제어를 담당했습니다.',
    responsibility: '뷰어 구현부터 iOS·Android 연동, 접근성 QA와 시큐어코딩 감리 대응까지 담당',
    problem: 'TTS 비동기 호출이 겹치고, iOS WebView에서 TTS 중단 후 VoiceOver 포커스와 페이지 위치가 어긋나는 문제가 있었습니다.',
    decision: 'TTS 요청을 직렬 큐로 제어하고 재생·페이지 이동·포커스 상태의 전환 순서를 명시했습니다. 앱 SDK와 웹뷰어 사이에는 완료 이벤트를 두어 다음 동작의 기준을 통일했습니다.',
    result: '중복 재생 문제를 해결하고 해당 동작을 QA 시나리오로 고정했습니다. 웹 접근성·시큐어코딩 감리 대응을 완료했습니다.',
    stack: ['JavaScript', 'epub.js', 'WebView Bridge', 'TTS', 'VoiceOver', 'WebSocket'],
  },
  {
    id: 'topik-cms', company: '주식회사 크로스티앤씨', period: '2025.12 ~ 현재', title: 'TOPIK PLAY 한국어 학습 게임 플랫폼',
    oneLine: '운영 CMS와 서비스 화면을 개발하고 게임 데이터·인증·API 계약을 구체화했습니다.',
    responsibility: 'CMS·관리자·랜딩 개발, 게임 데이터 구조 설계, 외부 게임사 API 협의, Android·iOS CBT 검수',
    problem: '게임 정책과 API 목록은 존재했지만 클라이언트 구현·서버 응답 사용 여부·신규 요청 범위가 섞여 책임 범위를 판단하기 어려웠습니다.',
    decision: '초기 API·기획 문서와 실제 APK 동작을 대조해 서버 미구현, 앱 미연동, 신규 구현을 분리했습니다. 인증은 uuid·connect_id·1회용 link_token의 책임을 나눠 흐름을 정리했습니다.',
    result: '외부 개발사와 논의할 수 있는 구현 근거를 만들고, 운영자와 개발사가 같은 데이터·정책 기준을 사용하도록 정리했습니다.',
    stack: ['React', 'Node.js', 'REST API', 'JSON', 'Android/iOS QA'],
  },
  {
    id: 'kyobo-web-viewer', company: '주식회사 북틀', period: '2022.10 ~ 2024.10', title: '상용 전자책 웹뷰어',
    oneLine: '교보문고·알라딘·YES24의 EPUB·PDF·만화·오디오북 뷰어를 구축하고 운영했습니다.',
    responsibility: 'B2B·B2C 웹뷰어 유지보수, 인앱 WebView 구축, 콘텐츠별 UI, 이용 이벤트와 사용자 환경 오류 대응',
    problem: '콘텐츠마다 렌더링과 제어 방식이 다르고, 웹과 앱이 상태를 별도로 관리해 동일한 동작을 일관되게 제공하기 어려웠습니다.',
    decision: '콘텐츠별 렌더러는 분리하고 이동·재생·설정 같은 공통 제어 진입점을 통일했습니다. WebView 메시지와 서버 상태를 기준으로 웹·앱 동기화 흐름을 구성했습니다.',
    result: '콘텐츠 유형을 확장할 수 있는 공통 구조를 유지하면서 상용 B2B·B2C 서비스를 운영했습니다.',
    stack: ['JavaScript', 'EPUB', 'PDF.js', 'DRM', 'WebView', 'Socket.IO'],
  },
]

const CORE_SKILLS = [
  ['서비스 구조화', '불명확한 요구사항을 화면 흐름·상태·데이터·API 계약으로 구체화합니다.'],
  ['SDK·WebView 연동', '웹과 iOS·Android 사이 메시지, 실행 순서와 상태 동기화를 설계합니다.'],
  ['접근성·품질', 'VoiceOver·키보드·고대비 환경을 검증하고 결함을 재현 가능한 QA 항목으로 관리합니다.'],
  ['운영까지의 책임', '기획·백엔드·앱·외부 개발사와 기준을 맞추고 출시 이후 문제까지 추적합니다.'],
]

const Resume = () => {
  const navigate = useNavigate()
  return (
    <main className="resume-page" id="main-content">
      <header className="resume-hero">
        <button className="resume-back" onClick={() => navigate('/')}><i className="fas fa-arrow-left" aria-hidden="true"></i> 포트폴리오로 돌아가기</button>
        <p className="resume-eyebrow">FRONTEND DEVELOPER · 5 YEARS</p>
        <h1>신리라</h1>
        <p className="resume-headline">서비스를 설계하고<br />운영까지 연결하는 프론트엔드 개발자</p>
        <p className="resume-lead">EPUB 웹뷰어, 교육 게임 플랫폼과 운영 CMS를 개발했습니다. 화면 구현에 그치지 않고 서비스 흐름과 데이터 구조를 구체화하며, SDK·WebView·외부 API 연동부터 QA와 운영까지 연결합니다.</p>
        <div className="resume-contact">
          <a href="mailto:oo8923@gmail.com">oo8923@gmail.com</a>
          <a href="https://github.com/sihnrila" target="_blank" rel="noopener noreferrer">github.com/sihnrila</a>
          <span>경기 부천시</span>
        </div>
      </header>

      <section className="resume-block" aria-labelledby="strength-title">
        <div className="resume-block-heading"><p>01</p><h2 id="strength-title">핵심 역량</h2></div>
        <div className="resume-strength-grid">
          {CORE_SKILLS.map(([title, description]) => <article key={title}><h3>{title}</h3><p>{description}</p></article>)}
        </div>
      </section>

      <section className="resume-block" aria-labelledby="experience-title">
        <div className="resume-block-heading"><p>02</p><h2 id="experience-title">경력</h2></div>
        <div className="resume-timeline">
          {CAREER_TIMELINE.map((career) => (
            <article className="resume-company" key={career.company}>
              <div className="resume-company-head"><time>{career.period}</time><h3>{career.company}</h3><p>{career.role}</p></div>
              <div className="resume-company-body">
                <p>{career.summary}</p>
                <ul>{career.projects.map((project) => <li key={project.repo}><Link to={`/repos/${project.repo}`}>{project.name}</Link><span>{project.evidence}</span></li>)}</ul>
              </div>
            </article>
          ))}
          <article className="resume-company resume-company-compact">
            <div className="resume-company-head"><time>2018.06 ~ 2021.05</time><h3>웹디자인·퍼블리싱 경력</h3><p>더텐트 · 에이투제이 · 아부하킴</p></div>
            <div className="resume-company-body"><p>웹디자인과 퍼블리싱 실무를 시작으로 반응형 UI, 웹 표준과 사용자 관점의 화면 설계 기반을 만들었습니다.</p></div>
          </article>
        </div>
      </section>

      <section className="resume-block" aria-labelledby="project-title">
        <div className="resume-block-heading"><p>03</p><h2 id="project-title">대표 문제 해결</h2><span>프로젝트 수보다 실제로 맡은 책임과 기술 판단을 중심으로 정리했습니다.</span></div>
        <div className="resume-case-list">
          {KEY_PROJECTS.map((project, index) => (
            <article className="resume-case" key={project.id}>
              <div className="resume-case-title"><span>CASE {String(index + 1).padStart(2, '0')}</span><h3>{project.title}</h3><p>{project.company} · {project.period}</p><strong>{project.oneLine}</strong></div>
              <dl className="resume-case-detail">
                <div><dt>내 책임</dt><dd>{project.responsibility}</dd></div>
                <div><dt>핵심 문제</dt><dd>{project.problem}</dd></div>
                <div><dt>설계·판단</dt><dd>{project.decision}</dd></div>
                <div><dt>결과</dt><dd>{project.result}</dd></div>
              </dl>
              <div className="resume-stack" aria-label="사용 기술">{project.stack.map((skill) => <span key={skill}>{skill}</span>)}</div>
              <Link className="resume-case-link" to={`/repos/${project.id}`}>상세 프로젝트 보기 <i className="fas fa-arrow-right" aria-hidden="true"></i></Link>
            </article>
          ))}
        </div>
      </section>

      <section className="resume-block resume-education" aria-labelledby="education-title">
        <div className="resume-block-heading"><p>04</p><h2 id="education-title">학력</h2></div>
        <div><time>2021.03 ~ 2023.12</time><h3>숭실사이버대학교 ICT공학과</h3><p>4년제 대학 과정 재학</p></div>
      </section>
    </main>
  )
}

export default Resume
