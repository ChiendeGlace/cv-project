import React from 'react';
import uniqid from 'uniqid';

const Header = ({photoSource, fullName, position, skills}) => {
    return (
        <section>
            <div className='img-div'>
                <img src={photoSource} alt={`Picture of ${fullName}`} />
            </div>
            <div className='basic-info-div'>
                <div className='name-div'>
                    <h1 className='full-name'>{fullName}</h1>
                    <h3 className='position'>{position}</h3>
                </div>
                <div className='skills-div'>
                    <h2>PROFESSIONAL SKILLS</h2>
                    <ul className='skills-list'>
                        {skills.map(skill => (
                           <li key={uniqid()}>{skill}</li> 
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Header