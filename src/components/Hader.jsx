import React from 'react';
import uniqid from 'uniqid';

const Header = ({ photoSource, fullName, position, skills }) => {
    return (
        <section className="header">
            <div className="img-div">
                <img src={photoSource} alt={`Picture of ${fullName}`} />
            </div>
            <div className="basic-info-div">
                <div className="name-div">
                    <h1 className="full-name">{fullName}</h1>
                    <h3 className="position">{position}</h3>
                </div>
                <hr></hr>
                <div className="skills-div">
                    <h2>PROFESSIONAL SKILLS</h2>
                    <div className="skills-list">
                        {skills.map((skill) => (
                            <div key={uniqid()}>
                                <p>{skill}</p>
                                <progress value="95" max="100"></progress>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;
