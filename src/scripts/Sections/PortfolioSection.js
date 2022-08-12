import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Dearo from '../../images/Dearo.png';
import Ambab from '../../images/augmont.png';
    import Aska from '../../images/aska-logo-1.png';

const PortfolioSection = () => {
    return (
        <ReactFullpage.Wrapper>
        <div id="portfolio" className="section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="wow bounce">Projects/Major Participation</h2>
                    </div>
                    <div className="col-md-4 col-xs-6 wow fadeIn" data-wow-delay="0.6s">
                        <div className="portfolio-thumb">
                            <img src={Dearo} className="img-fluid proj-img" alt="portfolio img"/>
                            <div className="portfolio-overlay"
                                 onClick={() => {
                                     return window.location.href = "https://play.google.com/store/apps/details?id=com.carworkz.dearo";
                                 }}>
                                <h4>Dearo</h4>
                                <h4>Mobile App</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-xs-6 wow fadeIn" data-wow-delay="0.6s">
                        <div className="portfolio-thumb">
                            <img src={Ambab} className="img-fluid proj-img" alt="portfolio img"/>
                            <div className="portfolio-overlay augmont"
                                 onClick={()=>{window.location.href="https://play.google.com/store/apps/details?id=com.ambab.augmont&hl=en_IN"}}>
                                <h4>Augmont - Buy Gold and Silver in India -Live Price </h4>
                                <h5>Mobile App</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-xs-6 wow fadeIn" data-wow-delay="0.6s">
                        <div className="portfolio-thumb aska-thumb">
                            <img src={Aska} className="img-fluid proj-img" alt="portfolio img"/>
                            <div className="portfolio-overlay aska-overlay" onClick={()=>{window.location.href='https://askagroup.com/'}}>
                                <h4>Aska Equipment</h4>
                                <h5>Website</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </ReactFullpage.Wrapper>
    );
};

export default PortfolioSection;
