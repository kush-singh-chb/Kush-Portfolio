import '../css/index.css'
import {useEffect} from "react";
import ReactFullpage from '@fullpage/react-fullpage';
import {HomeSection} from "./Sections/HomeSection";
import {WorkSection} from "./Sections/WorkSection";
import {AboutSection} from "./Sections/AboutSection";
import PortfolioSection from "./Sections/PortfolioSection";
import ProfessionalSection from "./Sections/ProfessionalSection";

function App() {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = "";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);
  return (
  <ReactFullpage
      scrollingSpeed = {500}
      scrollHorizontally = {true}
      render={({state,fullpageApi})=>{
        return (
            <ReactFullpage.Wrapper>
              <div id="fullpagefullpage">
              <HomeSection/>
              <WorkSection/>
              <AboutSection/>
              <PortfolioSection/>
              <ProfessionalSection/>




                <div id="Education" className="section">
                  <h2 className="text-center wow bounce">My Academia<img src="src/images/education.gif" width="100px" height="80px"/>
                  </h2>
                  <div className="container wow fadeInUp" data-wow-delay="0.6s">
                    <div className="row">
                      <div className="col-sm-12 card-group text-center">
                        <div className="card rounded">
                          <div className="face face1 rounded-top">
                            <div className="content">
                              <div className="icon">
                                <img src="https://www.griffith.ie/sites/all/themes/griffith/images/griffith-title-logo.png"
                                     width="300px" alt="college"/>
                              </div>
                            </div>
                          </div>
                          <div className="face face2 rounded-bottom">
                            <div className="content">
                              <h3>
                                <a href="https://www.griffith.ie/faculties/computing/courses/msc-big-data-management-and-analytics"
                                   target="_blank">Griffith College Dublin</a>
                              </h3>
                              <h4>2019-2020</h4>
                              <p>Masters in Science of Big Data Analytics and Management</p>
                              <p>Graduated with 2:1</p>
                            </div>
                          </div>
                        </div>
                        <div className="card rounded-0">
                          <div className="face face1">
                            <div className="content">
                              <div className="icon">
                                <img src="https://www.griffith.ie/sites/all/themes/griffith/images/griffith-title-logo.png"
                                     width="300px" alt="college"/>
                              </div>
                            </div>
                          </div>
                          <div className="face face2">
                            <div className="content">
                              <h3>
                                <a href="https://www.griffith.ie/faculties/computing/courses/higher-diploma-science-computing"
                                   target="_blank">Griffith College Dublin</a>
                              </h3>
                              <h4>2018-2019</h4>
                              <p>Higher Diploma in Computing Sciences</p>
                              <p>Graduated with 1:1</p>
                            </div>
                          </div>
                        </div>
                        <div className="card rounded-0">
                          <div className="face face1">
                            <div className="content">
                              <div className="icon">
                                <img src="https://rdnational.ac.in/img/logo.png"
                                     width="200px" alt="college"/>
                              </div>
                            </div>
                          </div>
                          <div className="face face2">
                            <div className="content">
                              <h3>
                                <a href="src/scripts/App#!" target="_blank">R.D. National College
                                  Mumbai</a>
                              </h3>
                              <h4>2014-2017</h4>
                              <p>Bachelor's in Science of Information Technology.</p>
                              <p>Graduated with 2:1</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="contact" className="section fp-auto-height contact overflow-auto">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-5 col-lg-offset-1 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                        <address>
                          <p className="contact-title">CONTACT ME</p>
                          <p><i className="fa fa-phone"></i> 089-429-3970</p>
                          <p><i className="fa fa-envelope-o"></i> singh.kush100@gmail.com</p>
                          <p><i className="fa fa-map-marker"></i>Apartment 10,Crostick Court, 64 Meath Street,
                            St. Catherine's, D08 CK71, Dublin 8</p>
                        </address>
                      </div>
                      <div className="col-lg-6 col-md-6 col-xs-10 wow fadeInUp" data-wow-delay="0.6s">
                        <form role="form" method="post" action="/contactForm">
                          <input name="name" type="text" className="form-control" id="name" placeholder="Your Name" required/>
                          <input name="email" type="email" className="form-control" id="email" placeholder="Your Email"
                                 required></input>
                          <textarea name="message" rows="5" className="form-control" id="message"
                                    placeholder="Your Message" required></textarea>
                          <input name="send" type="submit" className="form-control" id="send" value="SEND ME"></input>
                        </form>
                      </div>
                      <div className="col-md-1 col-sm-1"></div>
                    </div>
                  </div>
                </div>

              </div>

              <footer>
                <div className="container">
                  <div className="row">
                    <div className="col-md-12 wow fadeIn" data-wow-delay="0.9s">
                      <p>Copyright &copy; 2020 Kush Singh Chibber</p>
                      <hr></hr>
                      <ul className="social-icon">
                        <li><a href="https://www.facebook.com/singh.kush100" className="fa fa-facebook"></a></li>
                        <li><a href="https://twitter.com/kushsinghchb" className="fa fa-twitter"></a></li>
                        <li><a href="https://github.com/kush-blah?tab=repositories" className="fa fa-github"></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </footer>
            </ReactFullpage.Wrapper>
        );
  }}
  />
  )
}

export default App;
