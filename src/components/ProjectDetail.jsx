import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const getImagePath = (imageName) => {
  return `/img/${imageName}`
}

const ProjectDetail = () => {
  const { projectId } = useParams()
  const navigate = useNavigate()

  const projects = {
    '1': {
      id: 1,
      title: 'SNS 콘텐츠 디자인',
      icon: 'fab fa-instagram',
      description: '인스타그램을 위한 다양한 SNS 콘텐츠 디자인 작업',
      tools: 'PHOTOSHOP / ILLUSTRATOR',
      sections: [
        {
          title: 'UNNNI',
          subtitle: '중동',
          images: Array.from({ length: 6 }, (_, i) => `sns_${String(i + 1).padStart(2, '0')}.jpg`),
          singleImages: ['sns_07.jpg', 'sns_08.jpg']
        },
        {
          title: 'UNNNI',
          subtitle: '중동',
          images: Array.from({ length: 7 }, (_, i) => `sns_${String(i + 9).padStart(2, '0')}.jpg`)
        },
        {
          title: 'SHIPME',
          subtitle: '한국',
          images: Array.from({ length: 3 }, (_, i) => `sns_${String(i + 19).padStart(2, '0')}.jpg`),
          singleImages: ['sns_16.jpg']
        },
        {
          title: 'SHIPME',
          subtitle: '한국',
          images: Array.from({ length: 2 }, (_, i) => `sns_${String(i + 17).padStart(2, '0')}.jpg`)
        }
      ]
    },
    '2': {
      id: 2,
      title: '웹 디자인',
      icon: 'fas fa-code',
      description: '웹사이트 UI/UX 디자인 및 프로토타입 제작',
      tools: 'PHOTOSHOP / ILLUSTRATOR',
      sections: [
        {
          title: 'SHIPME',
          subtitle: 'PC 레이아웃 디자인',
          images: ['login_w.jpg', 'sub_login_w.jpg', 'sub2_w.jpg', 'sub3_w_1.jpg', 'sub4_w_1.jpg']
        },
        {
          title: 'SHIPME',
          subtitle: 'MOBILE 레이아웃 디자인',
          images: ['logout_m.jpg', 'sub_2_m.jpg', 'sub_3_m_1.jpg', 'sub_4_m_1.jpg']
        }
      ]
    },
    '3': {
      id: 3,
      title: '패키지 디자인',
      icon: 'fas fa-pen-nib',
      description: '제품 패키지 디자인 및 브랜딩 작업',
      tools: 'PHOTOSHOP / ILLUSTRATOR',
      sections: [
        {
          title: '십일홍',
          subtitle: '파우치 디자인',
          images: ['p_01.jpg']
        },
        {
          title: '제주맥주',
          subtitle: '사은품 디자인',
          images: ['p_02.jpg']
        },
        {
          title: '스누독',
          subtitle: '요금표 디자인',
          images: Array.from({ length: 4 }, (_, i) => `p_${String(i + 3).padStart(2, '0')}.jpg`)
        }
      ]
    }
  }

  const project = projects[projectId]

  if (!project) {
    return (
      <div className="project-detail">
        <div className="container">
          <div className="project-not-found">
            <h1>프로젝트를 찾을 수 없습니다</h1>
            <button onClick={() => navigate('/')}>홈으로 돌아가기</button>
          </div>
        </div>
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
          <h1 className="project-title">{project.title}</h1>
          <p className="project-subtitle">{project.description}</p>
          <p className="project-tools">{project.tools}</p>
        </div>

        <div className="project-gallery-list">
          {project.sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="gallery-section">
              <div className="gallery-section-header">
                <h3 className="gallery-section-title">
                  {section.title}
                  {section.subtitle && (
                    <span className="gallery-section-subtitle">
                      <i className="fas fa-globe"></i> {section.subtitle}
                    </span>
                  )}
                </h3>
              </div>
              <div className="gallery-images">
                {section.images && section.images.map((image, imageIndex) => (
                  <div key={imageIndex} className="gallery-image-item">
                    <img 
                      src={getImagePath(image)} 
                      alt={`${section.title} ${imageIndex + 1}`}
                      loading="lazy"
                    />
                  </div>
                ))}
                {section.singleImages && section.singleImages.map((image, imageIndex) => (
                  <div key={`single-${imageIndex}`} className="gallery-image-item">
                    <img 
                      src={getImagePath(image)} 
                      alt={`${section.title} ${image}`}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail
