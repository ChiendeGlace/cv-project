import React, { useState } from 'react';
import uniqid from 'uniqid';

const Header = ({ photoSource, setPhotoSrc, skills, isEditing }) => {
    const [isNameEditing, setIsNameEditing] = useState(false);
    const [isPositionEditing, setIsPositionEditing] = useState(false);
    const [fullName, setFullName] = useState('John Doe');
    const [position, setPosition] = useState('Web dev');
    const [inputValue, setInputValue] = useState('');
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
            setPhotoSrc(event.target.result);
        };

        reader.readAsDataURL(file);
    };
    const handleNameChange = (event) => {
        if (isNameEditing) {
            setIsNameEditing(false);
        } else {
            setIsNameEditing(true);
        }
    };
    const handlePositionChange = (event) => {
        if (isPositionEditing) {
            setIsPositionEditing(false);
        } else {
            setIsPositionEditing(true);
        }
    };
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };
    return (
        <section className="header">
            <div className="img-div">
                <img src={photoSource} alt={`Picture of ${fullName}`} />
                {isEditing ? (
                    <input
                        type="file"
                        accept="image/jpeg"
                        onChange={handleFileChange}
                    />
                ) : null}
            </div>
            <div className="basic-info-div">
                <div className="name-div">
                    {isNameEditing ? (
                        <div className="text-input">
                            <input
                                type="text"
                                min="3"
                                value={inputValue}
                                onChange={handleInputChange}
                            ></input>
                            <button
                                onClick={() => {
                                    setFullName(inputValue);
                                    setIsNameEditing(false);
                                }}
                            >
                                Submit
                            </button>
                            <button onClick={handleNameChange}>Cancel</button>
                        </div>
                    ) : (
                        <h1 className="full-name" onClick={handleNameChange}>
                            {fullName}
                        </h1>
                    )}
                    {isPositionEditing ? (
                        <div className="text-input">
                            <input
                                type="text"
                                min="3"
                                value={inputValue}
                                onChange={handleInputChange}
                            ></input>
                            <button
                                onClick={() => {
                                    setPosition(inputValue);
                                    setIsPositionEditing(false);
                                }}
                            >
                                Submit
                            </button>
                            <button onClick={handlePositionChange}>
                                Cancel
                            </button>
                        </div>
                    ) : (
                        <h3 className="position" onClick={handlePositionChange}>
                            {position}
                        </h3>
                    )}
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
