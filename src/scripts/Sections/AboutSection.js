import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

export const AboutSection = () => {
    return (
        <ReactFullpage.Wrapper>
        <div id="about" className="section">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-xs-11 wow fadeInLeft text-dark" data-wow-delay="0.9s">
                        <h2>ABOUT KUSH</h2>
                        <h4>SKILL SET</h4>
                        <p>Harness the power of Android on native <a href="https://developer.android.com/studio">SDK</a> and
                            hybrid platform like <a
                                href="src/scripts/App?gclid=Cj0KCQjwzbv7BRDIARIsAM-A6-0u-iYWhaQHdaxeW9hCUcjD7uKRK3BHgPrHqTwtcnS7eozUthEuRzoaAi4SEALw_wcB&gclsrc=aw.ds">Flutter</a>™.
                        </p>
                        <p>Backend API using <a href="src/scripts/App">Flask</a>™/<a
                            href="src/scripts/App">Django</a>™ and <a
                            href="https://spring.io/projects/spring-boot">SpringBoot</a>™.</p>
                        <p>Data Streaming, Processing & Transforming using <a
                            href="src/scripts/App">Amazon EMR</a>™</p>
                        <p>Cloud File Management with <a href="src/scripts/App">S3</a>, <a
                            href="https://cloud.google.com/storage">Google Cloud Storage</a> and Hadoop </p>
                        <p>Patterned Storage Solutions with Cassandra, Hive</p>
                        <p>Strong with Object Oriented Programming like Java, Kotlin, C#</p>
                        <p>DevOps with Jenkins, AWS, GitHub Actions CI</p>
                        <p>Docker and Kubernetes</p>
                        <p>Linux Bash scripting and General Networking</p>
                    </div>
                    <div className="col-md-6 col-xs-11 wow fadeInRight" data-wow-delay="0.9s">
                        <span className="text-top">Mobile Apps <small>95%</small></span>
                        <div className="progress">
                            <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="60"
                                 aria-valuemin="0" aria-valuemax="100" style={{width: '95%'}}></div>
                        </div>
                        <span>Backend APIs <small>80%</small></span>
                        <div className="progress">
                            <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80"
                                 aria-valuemin="0" aria-valuemax="100" style={{width: '80%'}}></div>
                        </div>
                        <span>Big Data <small>70%</small></span>
                        <div className="progress">
                            <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="70"
                                 aria-valuemin="0" aria-valuemax="100" style={{width: "70%"}}></div>
                        </div>
                        <span>Object Oriented <small>90%</small></span>
                        <div className="progress">
                            <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="90"
                                 aria-valuemin="0" aria-valuemax="100" style={{width: "90%"}}></div>
                        </div>
                        <span>Java <small>80%</small></span>
                        <div className="progress">
                            <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80"
                                 aria-valuemin="0" aria-valuemax="100" style={{width: "80%"}}></div>
                        </div>
                        <span>Python <small>80%</small></span>
                        <div className="progress">
                            <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80"
                                 aria-valuemin="0" aria-valuemax="100" style={{width: "80%"}}></div>
                        </div>
                        <span>MySQL <small>75%</small></span>
                        <div className="progress">
                            <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="75"
                                 aria-valuemin="0" aria-valuemax="100" style={{width: "75%"}}></div>
                        </div>
                        <span>DevOps <small>60%</small></span>
                        <div className="progress">
                            <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="60"
                                 aria-valuemin="0" aria-valuemax="100" style={{width: "60%"}}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </ReactFullpage.Wrapper>
    );
};
