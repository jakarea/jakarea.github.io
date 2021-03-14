const About = (props) => {
    return (
        <section className="section">
        <div className="container" id="about">
          <div className="row">
            <div className="col-xs-12 col-lg-5">
              <div className="personal-pic">
                <img src="./static/img/jakarea-parvez-full-stack-developer.jpg" alt="Jakarea Parvez Fullstact developer" />
              </div>
            </div>
            <div className="col-xs-12 col-lg-7">
              <div className="personal-info">
                <div className="section-title left">
                  <h2>
                    About <span>Me</span>
                  </h2>
                </div>
                <h3>Hello! i'm Jakarea Parvez</h3>
                <p>
                  A fullstack engineer,living in Dhaka. Over the years I am
                  working as a lead engineer in a software company. A good
                  architecture, security and performance is my concern. I play
                  with <b>Nodejs</b>, <b>React</b>, Vuejs, JavaScript, jQuery,
                  WordPress, HTML, CSS, PHP, <b>MongoDB</b>, MySQL Database,
                  <b>Firebase</b>, Firestore, CodeIgniter and Laravel also.
                  <b>Laravel is my loving framework.</b> I am tech enthusiast
                  and passionate to learn new technology. Nowadays I am learning
                  Swift and Unity.
                </p>
                <p>
                  Anyway, I encourage you to <b>say ‘Hello’</b>. I love talking
                  with smart people and would welcome the opportunity to amaze
                  your audience.
                </p>
                <div className="social-link">
                  <ul>
                    <li>
                      <a href="http://github.com/jakarea" target="_blank">
                        <i className="fa fa-github" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://stackoverflow.com/users/2499356/jakarea-parvez" target="_blank">
                        <i className="fa fa-stack-overflow" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/c/JakareaParvez" target="_blank">
                        <i className="fa fa-youtube-play" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://medium.com/@jakareaparvez" target="_blank">
                        <i className="fa fa-medium" aria-hidden="true"></i>
                      </a>
                    </li>
    
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="about-actions">
                  <button className="m-btn lets-talk">contact me</button>
                  <button className="m-btn">download cv</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    
        <div className="container" id="straingth">
          <div className="row">
            <div className="clients">
              <h5>
                <span>My Strength</span>
              </h5>
              <div className="row">
                <div className="col-lg-3">
                  <div className="service-box">
                    <img src="./static/img/tech/laravel.jpg" />
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="service-box">
                    <img src="./static/img/tech/JS.jpg" />
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="service-box">
                    <img src="./static/img/tech/vuejs.jpg" />
                  </div>
                </div>
    
                <div className="col-lg-3">
                  <div className="service-box">
                    <img src="./static/img/tech/react.jpg" />
                  </div>
                </div>
    
                <div className="col-lg-3">
                  <div className="service-box">
                    <img src="./static/img/tech/express.jpg" />
                  </div>
                </div>
    
                <div className="col-lg-3">
                  <div className="service-box">
                    <img src="./static/img/tech/nodejs.jpg" />
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="service-box">
                    <img src="./static/img/tech/mongodb.jpg" />
                  </div>
                </div>
    
                <div className="col-lg-3">
                  <div className="service-box">
                    <img src="./static/img/tech/nextjs.jpg" />
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="service-box">
                    <img src="./static/img/tech/codeigniter.jpg" />
                  </div>
                </div>
              </div>
              <p>&amp; many more ...</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;