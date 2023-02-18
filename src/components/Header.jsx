import React, { useState } from 'react';

export const Input = ({
    inputValue,
    setInputValue,
    setEdit,
    setState,
    onChange,
    onClick,
}) => {
    return (
        <form
            className="text-input"
            onSubmit={(e) => {
                e.preventDefault();
                setState(inputValue);
                setInputValue('');
                setEdit(false);
            }}
        >
            <input
                type="text"
                minLength="3"
                value={inputValue}
                onChange={onChange}
                required
            ></input>
            <button type="submit">Submit</button>
            <button
                onClick={() => {
                    onClick();
                    setInputValue('');
                }}
            >
                Cancel
            </button>
        </form>
    );
};

const Header = ({ photoSource, setPhotoSrc, isEditing }) => {
    const [isNameEditing, setIsNameEditing] = useState(false);
    const [isPositionEditing, setIsPositionEditing] = useState(false);
    const [fullName, setFullName] = useState('John Doe');
    const [position, setPosition] = useState('Web dev');
    const [inputValue, setInputValue] = useState('');
    const [skills, setSkills] = useState([
        { id: 1, name: 'HTML', level: '100' },
        { id: 2, name: 'JAVASCRIPT', level: '90' },
    ]);
    const [skillFormDisplayed, setSkillFormDisplayed] = useState(false);
    const [skillProficiency, setSkillProficiency] = useState(0);
    const [hover, setHover] = useState(-1);
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
            setPhotoSrc(event.target.result);
        };

        reader.readAsDataURL(file);
    };
    const handleNameChange = () => {
        if (isNameEditing === false && isEditing) {
            setIsNameEditing(true);
        } else {
            setIsNameEditing(false);
        }
    };
    const handlePositionChange = () => {
        if (isPositionEditing === false && isEditing) {
            setIsPositionEditing(true);
        } else {
            setIsPositionEditing(false);
        }
    };
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };
    const handleSkillClick = (event) => {
        if (skillFormDisplayed === false) {
            setSkillFormDisplayed(true);
        } else {
            setSkillFormDisplayed(false);
        }
    };
    const addSkill = (name, level) => {
        const nextId = Math.max(...skills.map((skill) => skill.id)) + 1;
        setSkills((prev) => [
            ...prev,
            { id: nextId, name: name, level: level },
        ]);
    };
    const handleMouseOver = (id) => {
        setHover(id);
    };
    const handleMouseLeave = (event) => {
        setHover(-1);
    };
    const deleteSkill = (id) => {
        setSkills((prev) => {
            const newArr = prev.filter((skill) => skill.id !== id);
            return newArr.map((skill, index) => ({ ...skill, id: index + 1 }));
        });
    };
    return (
        <section className="header">
            <div className="img-div">
                <img src={photoSource} alt={`Picture of ${fullName}`} />
                {isEditing && (
                    <input
                        type="file"
                        accept="image/jpeg"
                        onChange={handleFileChange}
                    />
                )}
            </div>
            <div className="basic-info-div">
                <div className="name-div">
                    {isNameEditing ? (
                        <Input
                            inputValue={inputValue}
                            setInputValue={setInputValue}
                            setEdit={setIsNameEditing}
                            setState={setFullName}
                            onChange={handleInputChange}
                            onClick={handleNameChange}
                        />
                    ) : (
                        <h1 className="full-name" onClick={handleNameChange}>
                            {fullName}
                        </h1>
                    )}
                    {isPositionEditing ? (
                        <Input
                            inputValue={inputValue}
                            setInputValue={setInputValue}
                            setEdit={setIsPositionEditing}
                            setState={setPosition}
                            onChange={handleInputChange}
                            onClick={handlePositionChange}
                        />
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
                            <div
                                className="border"
                                key={skill.id}
                                onMouseOver={() => handleMouseOver(skill.id)}
                                onMouseLeave={() => handleMouseLeave(skill.id)}
                            >
                                {hover == skill.id && (
                                    <button
                                        className="delete-button"
                                        onClick={() => deleteSkill(skill.id)}
                                    >
                                        Delete
                                    </button>
                                )}
                                <p>{skill.name}</p>
                                <progress
                                    value={skill.level}
                                    max="100"
                                ></progress>
                            </div>
                        ))}
                    </div>
                    {isEditing && !skillFormDisplayed && (
                        <button onClick={handleSkillClick}>Add skill +</button>
                    )}
                    {isEditing && skillFormDisplayed && (
                        <form
                            className="skill-form"
                            onSubmit={(e) => {
                                e.preventDefault();
                                addSkill(inputValue, skillProficiency);
                                setSkillProficiency(0);
                                setInputValue('');
                                setSkillFormDisplayed(false);
                            }}
                        >
                            <label htmlFor="name-field">Skill name</label>
                            <input
                                type="text"
                                id="name-field"
                                minLength="3"
                                value={inputValue}
                                onChange={handleInputChange}
                                required
                            />
                            <label htmlFor="level-field">
                                Proficiency (1-100 range)
                            </label>
                            <input
                                type="number"
                                id="level-field"
                                onChange={(e) =>
                                    setSkillProficiency(e.target.value)
                                }
                                min="1"
                                max="100"
                                required
                            />
                            <button>Submit</button>
                            <button
                                onClick={() => {
                                    handleSkillClick();
                                    setInputValue('');
                                }}
                            >
                                Cancel
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Header;
