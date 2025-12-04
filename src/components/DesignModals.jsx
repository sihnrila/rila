import React from 'react'

// 이미지 경로 - public 폴더의 이미지는 루트 경로로 접근
// Vite는 public 폴더의 파일을 루트 경로로 제공
const getImagePath = (imageName) => {
  return `/img/${imageName}`
}

const DesignModals = () => {
  return (
    <>
      {/* SNS Design Modal */}
      <div className="modal fade" id="cardmodal01" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">SNS 콘텐츠 디자인</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <h2>UNNNI <span><i className="fas fa-globe"></i> 중동</span></h2>
              <div id="sns_silde_01" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  {Array.from({ length: 6 }, (_, i) => (
                    <div key={i} className={`carousel-item ${i === 0 ? 'active' : ''}`} data-bs-interval={i === 0 ? "10000" : "2000"}>
                      <img src={getImagePath(`sns_${String(i + 1).padStart(2, '0')}.jpg`)} className="d-block w-100" alt={`SNS ${i + 1}`} />
                    </div>
                  ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#sns_silde_01" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#sns_silde_01" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <img src={getImagePath('sns_07.jpg')} className="d-block w-100" alt="SNS 7" />
              <img src={getImagePath('sns_08.jpg')} className="d-block w-100" alt="SNS 8" />

              <div id="sns_silde_02" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  {Array.from({ length: 7 }, (_, i) => (
                    <div key={i} className={`carousel-item ${i === 0 ? 'active' : ''}`} data-bs-interval={i === 0 ? "10000" : "2000"}>
                      <img src={getImagePath(`sns_${String(i + 9).padStart(2, '0')}.jpg`)} className="d-block w-100" alt={`SNS ${i + 9}`} />
                    </div>
                  ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#sns_silde_02" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#sns_silde_02" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>

              <h2>SHIPME <span><i className="fas fa-globe"></i> 한국</span></h2>
              <div id="sns_silde_03" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  {Array.from({ length: 3 }, (_, i) => (
                    <div key={i} className={`carousel-item ${i === 0 ? 'active' : ''}`} data-bs-interval={i === 0 ? "10000" : "2000"}>
                      <img src={getImagePath(`sns_${String(i + 19).padStart(2, '0')}.jpg`)} className="d-block w-100" alt={`SNS ${i + 19}`} />
                    </div>
                  ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#sns_silde_03" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#sns_silde_03" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>

              <img src={getImagePath('sns_16.jpg')} className="d-block w-100" alt="SNS 16" />

              <div id="sns_silde_04" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  {Array.from({ length: 2 }, (_, i) => (
                    <div key={i} className={`carousel-item ${i === 0 ? 'active' : ''}`} data-bs-interval={i === 0 ? "10000" : "2000"}>
                      <img src={getImagePath(`sns_${String(i + 17).padStart(2, '0')}.jpg`)} className="d-block w-100" alt={`SNS ${i + 17}`} />
                    </div>
                  ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#sns_silde_04" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#sns_silde_04" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Web Design Modal */}
      <div className="modal fade" id="cardmodal02" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">웹 디자인</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <h2>SHIPME <span><i className="fas fa-pencil-ruler"></i> PC 레이아웃 디자인</span></h2>
              <div id="web_silde_01" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active" data-bs-interval="10000">
                    <img src={getImagePath('login_w.jpg')} className="d-block w-100" alt="Login" />
                  </div>
                  <div className="carousel-item" data-bs-interval="2000">
                    <img src={getImagePath('sub_login_w.jpg')} className="d-block w-100" alt="Sub Login" />
                  </div>
                  <div className="carousel-item" data-bs-interval="2000">
                    <img src={getImagePath('sub2_w.jpg')} className="d-block w-100" alt="Sub 2" />
                  </div>
                  <div className="carousel-item" data-bs-interval="2000">
                    <img src={getImagePath('sub3_w_1.jpg')} className="d-block w-100" alt="Sub 3" />
                  </div>
                  <div className="carousel-item" data-bs-interval="2000">
                    <img src={getImagePath('sub4_w_1.jpg')} className="d-block w-100" alt="Sub 4" />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#web_silde_01" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#web_silde_01" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>

              <h2>SHIPME <span><i className="fas fa-pencil-ruler"></i> MOBEIL 레이아웃 디자인</span></h2>
              <div id="web_silde_02" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active" data-bs-interval="10000">
                    <img src={getImagePath('logout_m.jpg')} className="d-block w-100" alt="Logout Mobile" />
                  </div>
                  <div className="carousel-item" data-bs-interval="2000">
                    <img src={getImagePath('sub_2_m.jpg')} className="d-block w-100" alt="Sub 2 Mobile" />
                  </div>
                  <div className="carousel-item" data-bs-interval="2000">
                    <img src={getImagePath('sub_3_m_1.jpg')} className="d-block w-100" alt="Sub 3 Mobile" />
                  </div>
                  <div className="carousel-item" data-bs-interval="2000">
                    <img src={getImagePath('sub_4_m_1.jpg')} className="d-block w-100" alt="Sub 4 Mobile" />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#web_silde_02" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#web_silde_02" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Package Design Modal */}
      <div className="modal fade" id="cardmodal03" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">패키지 디자인</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <h2>십일홍 <span><i className="fas fa-pencil-ruler"></i> 파우치 디자인</span></h2>
              <img src={getImagePath('p_01.jpg')} className="d-block w-100" alt="Package 1" />
              <h2>제주맥주 <span><i className="fas fa-pencil-ruler"></i> 사은품 디자인</span></h2>
              <img src={getImagePath('p_02.jpg')} className="d-block w-100" alt="Package 2" />
              <h2>스누독 <span><i className="fas fa-pencil-ruler"></i> 요금표 디자인</span></h2>
              <div id="pek_silde_01" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  {Array.from({ length: 4 }, (_, i) => (
                    <div key={i} className={`carousel-item ${i === 0 ? 'active' : ''}`} data-bs-interval={i === 0 ? "10000" : "2000"}>
                      <img src={getImagePath(`p_${String(i + 3).padStart(2, '0')}.jpg`)} className="d-block w-100" alt={`Package ${i + 3}`} />
                    </div>
                  ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#pek_silde_01" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#pek_silde_01" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DesignModals

