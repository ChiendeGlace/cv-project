import React from 'react';

const LeftSection = () => {
    return (
        <section className="left">
            <div className="about">
                <div className="header-div">
                    <h2>ABOUT ME</h2>
                </div>
                <p className="about-info">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent dignissim nisi vitae dictum vehicula. Praesent
                    placerat leo at libero posuere finibus.
                </p>
            </div>
            <div className="education">
                <div className="header-div">
                    <h2>EDUCATION</h2>
                </div>
                <div className="content-div">
                    <h3>College of MIT</h3>
                    <h4>
                        <em>Department of informatics</em>
                    </h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Pariatur sapiente labore soluta consequuntur!
                        Suscipit excepturi quaerat repellendus nemo dignissimos
                        accusamus! Sed, nobis?
                    </p>
                </div>
            </div>
            <div className="contact-us">
                <div className="header-div">
                    <h2>CONTACT US</h2>
                </div>
                <div className="contact-div">
                    <div className="icon-div">
                        <i className="fa-solid fa-phone"></i>
                    </div>
                    <div className="text-div">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </p>
                    </div>
                </div>
                <div className="contact-div">
                    <div className="icon-div">
                        <i className="fa-solid fa-envelope"></i>
                    </div>
                    <div className="text-div">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </p>
                    </div>
                </div>
                <div className="contact-div">
                    <div className="icon-div">
                        <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <div className="text-div">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LeftSection;
