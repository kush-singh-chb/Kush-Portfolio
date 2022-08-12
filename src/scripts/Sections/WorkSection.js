import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

export const WorkSection = () => (
    <ReactFullpage.Wrapper>
        <div id="work" className="section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 wow bounce">
                        <h2>WHAT I DO</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4 col-xs-11 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="media">
                            <div className="media-object media-left">
                                <i className="fa fa-laptop"></i>
                            </div>
                            <div className="media-body">
                                <h3 className="media-heading">Application Development</h3>
                                <p>Designing multi & cross platform software, with highly interfaced factory and
                                    injection
                                    setup </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-xs-11 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="media">
                            <div className="media-object media-left">
                                <i className="fa fa-database"></i>
                            </div>
                            <div className="media-body">
                                <h3 className="media-heading">Big Data</h3>
                                <p>Making isolated architectures for Data Ingestion, Processing & Transformation. </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-xs-11 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="media">
                            <div className="media-object media-left">
                                <i className="fa fa-cloud"></i>
                            </div>
                            <div className="media-body">
                                <h3 className="media-heading">Cloud Development</h3>
                                <p>Harness the power of Saas and Paas systems for off-sight development and financial
                                    efficiency</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </ReactFullpage.Wrapper>
);
