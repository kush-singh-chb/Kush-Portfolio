import React from 'react';
import ReactFullpage from "@fullpage/react-fullpage";
import Work from '../../images/Work.gif'

const ProfessionalSection = () => {
    return (
        <ReactFullpage.Wrapper>
        <div id="Professional" className="section">
            <h2 className="text-center wow bounce">Professional Timeline
                <img className={"timeline-icon--main"} src={Work} width="150px" height="120px" alt={"work-dance-icon"}/>
            </h2>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12" style={{height: "800px", marginTop: "10px"}}>
                        <div className="main-timeline">
                            <a className="timeline">
                                <div className="timeline-icon"><i className="fa fa-globe"></i></div>
                                <div className="timeline-content">
                                    <h3 className="title">Freelancer</h3>
                                    <h4 className="card-subtitle text-white">2020-2021</h4>
                                    <p className="description">
                                        Develop/Architect Multi-frontal Software Solutions based on clients request from Fiverr™ & Freelancer.com™.
                                        Worked with SpringBoot, Event Driven Architecture, MicroServices and automating build processes using CI/CD technologies.
                                    </p>
                                </div>
                            </a>
                            <a className="timeline">
                                <div className="timeline-icon"><i className="fa fa-mobile"></i></div>
                                <div className="timeline-content">
                                    <h3 className="title">Ambab Infotech : Android Engineer</h3>
                                    <h4 className="card-subtitle text-white">2017-2018</h4>
                                    <p className="description">
                                        Worked on 5 Projects,2 major & 3 Minor contributions. Since the client was a product
                                        based company, got to experience
                                        a lot of new technologies. Some of which are Retrofit, MVVM Design pattern, Reactive
                                        Programming, Node js API server, Kotlin, Dagger Dependency Injection,
                                        Real-time monetary based API for Live Trading, XMPP protocol for support.
                                    </p>
                                </div>
                            </a>
                            <a className="timeline">
                                <div className="timeline-icon"><i className="fa fa-globe"></i></div>
                                <div className="timeline-content">
                                    <h3 className="title">Web Developer</h3>
                                    <p className="description">
                                        Worked on 1 Software Project and Hardware Technical Troubleshooting. Built website
                                        modules using Symfony,PHP5 and JavaScript.
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </ReactFullpage.Wrapper>
    );
};

export default ProfessionalSection;
