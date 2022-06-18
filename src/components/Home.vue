<template>

   <!-- content start -->
        <div class="container">
           <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" data-bs-smooth-scroll="true" class="scrollspy-example" tabindex="0">

           <!-- content01 start -->
           <section class="section01" id="myName">
             <h2 class="title">RILA SIN'S PORTFOLIO</h2>
             <div data-aos="fade-up">
                <img src="../assets/img/img01.jpeg" alt="">
                <p>안녕하세요 <label class="waving">👋</label>  Markup and Developer 신리라입니다.<br>
                제 포트폴리오 페이지에 오신걸 환영합니다.</p>
              </div>
           </section>
           <!-- content01 end -->

            <!-- content02 start -->
            <section class="section02" id="aboutMe">
                 <h2 class="title">ABOUT ME</h2>
                 <img src="../assets/img/img02.jpeg" alt="" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                 <h2 class="left">열정으로 무장한 신리라입니다:)</h2>
                 <p>숭실사이버대학교 재학중이며, 퍼블리셔로 4년가량 일을 하며 HTML,CSS,JS를 배웠습니다
                    프론트앤드가 된건 1년 이지만, 다른 누구보다 열정적이게 "중고신입" 이란 말이 부끄럽지 않도록 노력 중입니다.
                    숭실사이버대학교 재학중이며, 퍼블리셔로 4년가량 일을 하며 HTML,CSS,JS를 배웠습니다
                    프론트앤드가 된건 1년 이지만, 다른 누구보다 열정적이게 "중고신입" 이란 말이 부끄럽지 않도록 노력 중입니다.
                    숭실사이버대학교 재학중이며, 퍼블리셔로 4년가량 일을 하며 HTML,CSS,JS를 배웠습니다
                    프론트앤드가 된건 1년 이지만, 다른 누구보다 열정적이게 "중고신입" 이란 말이 부끄럽지 않도록 노력 중입니다.
                    숭실사이버대학교 재학중이며, 퍼블리셔로 4년가량 일을 하며 HTML,CSS,JS를 배웠습니다
                    프론트앤드가 된건 1년 이지만, 다른 누구보다 열정적이게 "중고신입" 이란 말이 부끄럽지 않도록 노력 중입니다.
                 </p>
            </section>
            <!-- content02 end -->

            <!-- content03 start -->
            <section class="section03" id="skill">
                <h2 class="title">SKILLS</h2>
                <div class="flex_container">
                    <ul>
                      <li data-aos="zoom-in">
                        <i class="fab fa-html5 fa-7x"></i>
                        <p>HTML5</p>
                        <P>마크업,페이지 콘텐츠 구조화,폼요소,테이블 등 사용</P>
                      </li>
                      <li data-aos="zoom-in">
                        <i class="fab fa-css3-alt fa-7x"></i>
                        <p>CSS3</p>
                        <P>콘텐츠 요소 스타일링</P>
                      </li>
                      <li data-aos="zoom-in">
                        <i class="fab fa-sass"></i>
                        <p>SCSS</p>
                        <P>콘텐츠 요소 스타일링</P>
                      </li>
                      <li data-aos="zoom-in">
                        <i class="fab fa-js-square fa-7x"></i>
                        <p>Javascript</p>
                        <P>사이트의 동적요소 구현</P>
                      </li>
                      <li data-aos="zoom-in">
                        <i class="fab fa-bootstrap fa-7x"></i>
                        <p>Bootstrap</p>
                        <P>html 프레임 워크</P>
                      </li>
                      <li data-aos="zoom-in">
                        <i class="fab fa-vuejs"></i>
                        <p>vue.js</p>
                        <P>Javascript 프레임 워크</P>
                      </li>
                      <li data-aos="zoom-in">
                        <i class="fab fa-python"></i>                      
                        <p>Python</p>
                        <P>서버간 원활한 소통</P>
                      </li>
                      <li data-aos="zoom-in">
                        <i class="fab fa-git fa-7x"></i>
                        <p>Git</p>
                        <P>프로젝트 코드관리 , add,commit,pull,branch 사용</P>
                      </li>
                    </ul>
                </div>
            </section>
            <!-- content03 end -->

    
            <!-- content04 start -->
            <section class="section04" id="work">
                <h2 class="title">WORK</h2>

                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <a class="active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Design</a>
                  </li>
                  <li class="nav-item" role="presentation">
                    <a id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Markup / Frontend</a>
                  </li>
    
                </ul>
                <div class="tab-content" id="pills-tabContent">
                  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                    <div class="card_cont">
                        <div class="card" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                          <div class="card_img"><i class="fab fa-instagram"></i> SNS</div>
                          <a type="button" data-bs-toggle="modal" data-bs-target="#cardmodal01">SNS 콘텐츠 디자인 <p><i class="fas fa-pencil-ruler"></i> PHOTOSHOP / 일러스트레이터</p></a>
                        </div>  

                        <!-- Modal -->
                        <div class="modal fade" id="cardmodal01" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                          <div class="modal-dialog modal-dialog-scrollable">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5 class="modal-title" id="staticBackdropLabel">SNS 콘텐츠 디자인</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div class="modal-body">
                                <h2>UNNNI <span><i class="fas fa-globe"></i> 중동</span></h2>
                                <div id="sns_silde_01" class="carousel slide" data-bs-ride="carousel">
                                  <div class="carousel-inner">
                                    <div class="carousel-item active" data-bs-interval="10000">
                                      <img src="../assets/img/sns_01.jpg" class="d-block w-100" alt="...">
                                    </div>
                                    <div class="carousel-item" data-bs-interval="2000">
                                      <img src="../assets/img/sns_02.jpg" class="d-block w-100" alt="...">
                                    </div>
                                    <div class="carousel-item">
                                      <img src="../assets/img/sns_03.jpg" class="d-block w-100" alt="...">
                                    </div>
                                    <div class="carousel-item">
                                      <img src="../assets/img/sns_04.jpg" class="d-block w-100" alt="...">
                                    </div>
                                    <div class="carousel-item">
                                      <img src="../assets/img/sns_05.jpg" class="d-block w-100" alt="...">
                                    </div>
                                    <div class="carousel-item">
                                      <img src="../assets/img/sns_06.jpg" class="d-block w-100" alt="...">
                                    </div>
                                  </div>
                                  <button class="carousel-control-prev" type="button" data-bs-target="#sns_silde_01" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                  </button>
                                  <button class="carousel-control-next" type="button" data-bs-target="#sns_silde_01" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                  </button>
                                </div>
                                <img src="../assets/img/sns_07.jpg" class="d-block w-100" alt="...">
                                <img src="../assets/img/sns_08.jpg" class="d-block w-100" alt="...">

                                <div id="sns_silde_02" class="carousel slide" data-bs-ride="carousel">
                                  <div class="carousel-inner">
                                    <div class="carousel-item active" data-bs-interval="10000">
                                      <img src="../assets/img/sns_09.jpg" class="d-block w-100" alt="...">
                                    </div>
                                    <div class="carousel-item" data-bs-interval="2000">
                                      <img src="../assets/img/sns_10.jpg" class="d-block w-100" alt="...">
                                    </div>
                                    <div class="carousel-item">
                                      <img src="../assets/img/sns_11.jpg" class="d-block w-100" alt="...">
                                    </div>
                                    <div class="carousel-item">
                                      <img src="../assets/img/sns_12.jpg" class="d-block w-100" alt="...">
                                    </div>
                                    <div class="carousel-item">
                                      <img src="../assets/img/sns_13.jpg" class="d-block w-100" alt="...">
                                    </div>
                                    <div class="carousel-item">
                                      <img src="../assets/img/sns_14.jpg" class="d-block w-100" alt="...">
                                    </div>
                                    <div class="carousel-item">
                                      <img src="../assets/img/sns_15.jpg" class="d-block w-100" alt="...">
                                    </div>
                                  </div>
                                  <button class="carousel-control-prev" type="button" data-bs-target="#sns_silde_02" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                  </button>
                                  <button class="carousel-control-next" type="button" data-bs-target="#sns_silde_02" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                  </button>
                                </div>

                                <h2>SHIPME <span><i class="fas fa-globe"></i> 한국</span></h2>
                                  <div id="sns_silde_03" class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-inner">
                                      <div class="carousel-item active" data-bs-interval="10000">
                                        <img src="../assets/img/sns_19.jpg" class="d-block w-100" alt="...">
                                      </div>
                                      <div class="carousel-item" data-bs-interval="2000">
                                        <img src="../assets/img/sns_20.jpg" class="d-block w-100" alt="...">
                                      </div>
                                      <div class="carousel-item">
                                        <img src="../assets/img/sns_21.jpg" class="d-block w-100" alt="...">
                                      </div>
                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#sns_silde_03" data-bs-slide="prev">
                                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                      <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#sns_silde_03" data-bs-slide="next">
                                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                      <span class="visually-hidden">Next</span>
                                    </button>
                                  </div>

                                  <img src="../assets/img/sns_16.jpg" class="d-block w-100" alt="...">

                                  <div id="sns_silde_04" class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-inner">
                                      <div class="carousel-item active" data-bs-interval="10000">
                                        <img src="../assets/img/sns_17.jpg" class="d-block w-100" alt="...">
                                      </div>
                                      <div class="carousel-item" data-bs-interval="2000">
                                        <img src="../assets/img/sns_18.jpg" class="d-block w-100" alt="...">
                                      </div>
                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#sns_silde_04" data-bs-slide="prev">
                                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                      <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#sns_silde_04" data-bs-slide="next">
                                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                      <span class="visually-hidden">Next</span>
                                    </button>
                                  </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div class="card" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                          <div class="card_img"><i class="fas fa-code"></i> WED</div>
                          <a type="button" data-bs-toggle="modal" data-bs-target="#cardmodal02">웹 디자인 <p><i class="fas fa-pencil-ruler"></i> PHOTOSHOP / 일러스트레이터</p></a>
                        </div>
                        
                        <!-- Modal -->
                        <div class="modal fade" id="cardmodal02" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                          <div class="modal-dialog modal-dialog-scrollable">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5 class="modal-title" id="staticBackdropLabel">웹 디자인</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div class="modal-body">
                                <h2>SHIPME <span><i class="fas fa-pencil-ruler"></i> PC 레이아웃 디자인</span></h2>
                                <div id="web_silde_01" class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-inner">
                                      <div class="carousel-item active" data-bs-interval="10000">
                                        <img src="../assets/img/login_w.jpg" class="d-block w-100" alt="...">
                                      </div>
                                      <div class="carousel-item" data-bs-interval="2000">
                                        <img src="../assets/img/sub_login_w.jpg" class="d-block w-100" alt="...">
                                      </div>
                                      <div class="carousel-item" data-bs-interval="2000">
                                        <img src="../assets/img/sub2_w.jpg" class="d-block w-100" alt="...">
                                      </div>
                                      <div class="carousel-item" data-bs-interval="2000">
                                        <img src="../assets/img/sub3_w_1.jpg" class="d-block w-100" alt="...">
                                      </div>
                                      <div class="carousel-item" data-bs-interval="2000">
                                        <img src="../assets/img/sub4_w_1.jpg" class="d-block w-100" alt="...">
                                      </div>
                                    
                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#web_silde_01" data-bs-slide="prev">
                                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                      <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#web_silde_01" data-bs-slide="next">
                                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                      <span class="visually-hidden">Next</span>
                                    </button>
                                </div>

                                <h2>SHIPME <span><i class="fas fa-pencil-ruler"></i> MOBEIL 레이아웃 디자인</span></h2>

                                <div id="web_silde_02" class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-inner">
                                      <div class="carousel-item active" data-bs-interval="10000">
                                        <img src="../assets/img/logout_m.jpg" class="d-block w-100" alt="...">
                                      </div>
                                      <div class="carousel-item" data-bs-interval="2000">
                                        <img src="../assets/img/sub_2_m.jpg" class="d-block w-100" alt="...">
                                      </div>
                                       <div class="carousel-item" data-bs-interval="2000">
                                        <img src="../assets/img/sub_3_m_1.jpg" class="d-block w-100" alt="...">
                                      </div>
                                       <div class="carousel-item" data-bs-interval="2000">
                                        <img src="../assets/img/sub_4_m_1.jpg" class="d-block w-100" alt="...">
                                      </div>
                                    </div>

                                    <button class="carousel-control-prev" type="button" data-bs-target="#web_silde_02" data-bs-slide="prev">
                                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                      <span class="visually-hidden">Previous</span>
                                    </button>

                                    <button class="carousel-control-next" type="button" data-bs-target="#web_silde_02" data-bs-slide="next">
                                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                      <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="card bg" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                          <div class="card_img"><i class="fas fa-pen-nib"></i> package</div>
                          <a type="button" data-bs-toggle="modal" data-bs-target="#cardmodal03">패키지 디자인<p><i class="fas fa-pencil-ruler"></i> PHOTOSHOP / 일러스트레이터</p></a>
                        </div>

                         <!-- Modal -->
                        <div class="modal fade" id="cardmodal03" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                          <div class="modal-dialog modal-dialog-scrollable">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5 class="modal-title" id="staticBackdropLabel">패키지 디자인</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div class="modal-body">
                                <h2>십일홍 <span><i class="fas fa-pencil-ruler"></i> 파우치 디자인</span></h2>
                                  <img src="../assets/img/p_01.jpg" class="d-block w-100" alt="...">
                                <h2>제주맥주 <span><i class="fas fa-pencil-ruler"></i> 사은품 디자인</span></h2>
                                  <img src="../assets/img/p_02.jpg" class="d-block w-100" alt="...">
                                <h2>스누독 <span><i class="fas fa-pencil-ruler"></i> 요금표 디자인</span></h2>
                                <div id="pek_silde_01" class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-inner">
                                      <div class="carousel-item active" data-bs-interval="10000">
                                        <img src="../assets/img/p_03.jpg" class="d-block w-100" alt="...">
                                      </div>
                                      <div class="carousel-item" data-bs-interval="2000">
                                        <img src="../assets/img/p_04.jpg" class="d-block w-100" alt="...">
                                      </div>
                                       <div class="carousel-item" data-bs-interval="2000">
                                        <img src="../assets/img/p_05.jpg" class="d-block w-100" alt="...">
                                      </div>
                                       <div class="carousel-item" data-bs-interval="2000">
                                        <img src="../assets/img/p_06.jpg" class="d-block w-100" alt="...">
                                      </div>
                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#pek_silde_01" data-bs-slide="prev">
                                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                      <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#pek_silde_01" data-bs-slide="next">
                                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                      <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                    </div>
                  </div>
                  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                    <div class="card_cont">
                        <div class="card" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                          <img src="../assets/img/demo01.jpeg" alt="">
                          <a href="https://jigoorang.com/#">
                              지구랭 친환경 랭킹 쇼핑몰 
                              <p><i class="fas fa-code"></i> HTML5 / CSS3 / JS</p>
                          </a> 
                        </div>
                        <div class="card" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                          <img src="../assets/img/demo03.jpeg" alt="">
                          <a href="#">
                            2021 서울 빛초롱 축제
                            <p><i class="fas fa-code"></i> HTML5 / CSS3 / JS</p>
                          </a>
                        </div>                
                        <div class="card" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                          <img src="../assets/img/demo04.jpeg" alt="">
                          <a href="#">
                            같이줍깅
                            <p><i class="fas fa-code"></i> HTML5 / CSS3 / VUE.JS</p>
                          </a>
                        </div>
                        <div class="card bg" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                          <img src="../assets/img/demo06.jpeg" alt="" class="snudog">
                          <a href="#">
                            스누독 케어센터
                            <p><i class="fas fa-code"></i> HTML5 / Bootstrap / CSS3 / JS</p>
                          </a>
                        </div>
                        <div class="card" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                          <img src="../assets/img/demo05.gif" alt="">
                          <a href="https://shipme.kr/">
                            쉽미 역직구 쇼핑몰 리뉴얼
                            <p><i class="fas fa-code"></i> HTML5 / CSS3 / JS</p>
                          </a>
                        </div>

                        <div class="card" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                          <img src="../assets/img/demo08.jpeg" alt="" class="rila">
                          <a href="https://shipme.kr/">
                            신리라 포트폴리오
                            <p><i class="fas fa-code"></i> HTML5 / SCSS / Bootstrap / VUE.JS</p>
                          </a>
                        </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                    <div class="card_cont">
                        <div class="card" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                          <img src="../assets/img/demo01.jpeg" alt="">
                          <a href="https://jigoorang.com/#">Demo</a> 
                        </div>
                        <div class="card" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                          <img src="../assets/img/demo03.jpeg" alt="">
                          <a href="#">Demo</a>
                        </div>                
                        <div class="card" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                          <img src="../assets/img/demo04.jpeg" alt="">
                          <a href="#">Demo</a>
                        </div>
                        <div class="card bg" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                          <img src="../assets/img/demo06.jpeg" alt="" class="snudog">
                          <a href="#">Demo</a>
                        </div>
                        <div class="card" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                          <img src="../assets/img/demo08.jpeg" alt="">
                          <a href="https://shipme.kr/">Demo</a>
                        </div>
                    </div>
                  </div>
                </div>
            </section>
            <!-- content04 end -->


             <!-- content05 start -->
             <section class="section05" id="contact">
                  <h2 class="title">CONTACT</h2>
                  <ul data-aos="zoom-in">
                    <li>Contact me on..</li>
                    <li><a href="malito:oo8923@gmail.com"><i class="fas fa-envelope"></i> oo8923@gmail.com</a></li>
                    <li>@Shinrila<a href="https://github.com/sihnrila?tab=repositories"><i class="fab fa-github"></i> Github</a></li>
                  </ul>
            </section>
            <!-- content05 end -->

            <footer>
                <a href="#"><i class="fas fa-angle-up"></i></a><br>
              code by rila<br>
              you can see this code
            </footer>
            </div>
        </div><!-- content start -->
</template>
<script>
export default {
  //eslint-disable-next-line
  name: 'Home',
}
  
</script>