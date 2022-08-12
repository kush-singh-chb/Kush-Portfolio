import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
export const HomeSection = () => {
    return (
        <ReactFullpage.Wrapper>
        <div id="home" className="section">
            <div className="container">
                <div className="row text-right">
                    <div className="col-md-3"></div>
                    <div className="col-md-8 wow fadeIn" data-wow-delay="0.9s">
                        <h1>Kush Singh Chibber</h1>
                        <h2>Software Engineer</h2>
                        <h2 className="rotate">BIG DATA, WEB APPLICATIONS, ANDROID,AWS/GCE, MACHINE LEARNING</h2>
                        <p className="h4 text-dark">Technology Enthusiast with <b>3 Years</b> of robust industrial
                            experience.<br/>
                            I like to see myself as a 'Jack of all Trades'.<br/>
                            Love to Build Complex and Secure Architectures.<br/>
                            Always in pursuit to get hand-on with new Technology.
                        </p>
                        <p className="h4">
                            <b>'Distributed Systems and Massive Computations'</b> feels like my future path.<br/>Aspire to
                            be a Solutions Architect.
                        </p>

                        <a href={"#work"} className="btn btn-default flex smoothScroll wow fadeInUp float-left"
                           data-wow-delay="1s">View My Skills</a>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        </div>
        </ReactFullpage.Wrapper>
    );
}
