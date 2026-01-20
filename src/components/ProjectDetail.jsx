import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import DesignModals from './DesignModals'

const ProjectDetail = () => {
  const { projectId } = useParams()
  const navigate = useNavigate()

  const projects = {
    '1': {
      id: 1,
      title: 'SNS 콘텐츠 디자인',
      icon: 'fab fa-instagram',
      images: Array.from({ length: 21 }, (_, i) => `sns_${String(i + 1).padStart(2, '0')}.jpg`),
      modalId: 'cardmodal01',
      description: '인스타그램을 위한 다양한 SNS 콘텐츠 디자인 작업',
      tools: 'PHOTOSHOP / ILLUSTRATOR'
    },
    '2': {
      id: 2,
      title: '웹 디자인',
      icon: 'fas fa-code',
      images: ['login_w.jpg', 'sub_login_w.jpg', 'sub2_w.jpg', 'sub3_w_1.jpg', 'sub4_w_1.jpg'],
      modalId: 'cardmodal02',
      description: '웹사이트 UI/UX 디자인 및 프로토타입 제작',
      tools: 'PHOTOSHOP / ILLUSTRATOR'
    },
    '3': {
      id: 3,
      title: '패키지 디자인',
      icon: 'fas fa-pen-nib',
      images: Array.from({ length: 6 }, (_, i) => `p_${String(i + 1).padStart(2, '0')}.jpg`),
      modalId: 'cardmodal03',
      description: '제품 패키지 디자인 및 브랜딩 작업',
      tools: 'PHOTOSHOP / ILLUSTRATOR'
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

        <div className="project-gallery">
          <button 
            className="gallery-button"
            data-bs-toggle="modal" 
            data-bs-target={`#${project.modalId}`}
          >
            <i className={project.icon}></i>
            <span>VIEW GALLERY</span>
          </button>
        </div>
      </div>
      <DesignModals />
    </div>
  )
}

export default ProjectDetail
