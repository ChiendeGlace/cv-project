import React, { useState } from 'react';
import { Input } from './Header';

export const TriInputForm = ({
    addProperty,
    input1,
    setInput1,
    input2,
    setInput2,
    input3,
    setInput3,
    formDisplayed,
    setFormDisplayed,
    state,
    setState,
    label1,
    label2,
    label3,
    handleInput,
    handleClick,
}) => {
    return (
        <form
            className="skill-form"
            onSubmit={(e) => {
                e.preventDefault();
                addProperty(state, input1, input2, input3, setState);
                setInput1('');
                setInput2('');
                setInput3('');
                setFormDisplayed(false);
            }}
        >
            <label htmlFor="title-field">{label1}</label>
            <input
                type="text"
                id="title-field"
                minLength="3"
                value={input1}
                onChange={(e) => handleInput(e, setInput1)}
                required
            />
            <label htmlFor="subtitle-field">{label2}</label>
            <input
                type="text"
                id="subtitle-field"
                minLength="3"
                value={input2}
                onChange={(e) => handleInput(e, setInput2)}
                required
            />
            <label htmlFor="text-field">{label3}</label>
            <input
                type="text"
                id="text-field"
                minLength="3"
                value={input3}
                onChange={(e) => handleInput(e, setInput3)}
                required
            />
            <button>Submit</button>
            <button
                onClick={() => {
                    handleClick(formDisplayed, setFormDisplayed);
                    setInput1('');
                    setInput2('');
                    setInput3('');
                }}
            >
                Cancel
            </button>
        </form>
    );
};

const LeftSection = ({ isEditing }) => {
    const [about, setAbout] = useState(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dignissim nisi vitae dictum vehicula. Praesent placerat leo at libero posuere finibus.'
    );
    const [isAboutEditing, setIsAboutEditing] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [isPhoneEditing, setIsPhoneEditing] = useState(false);
    const [titleValue, setTitleValue] = useState('');
    const [subtitleValue, setSubtitleValue] = useState('');
    const [textValue, setTextValue] = useState('');
    const [phone, setPhone] = useState('999-9999-9999');
    const [isMailEditing, setIsMailEditing] = useState(false);
    const [mail, setMail] = useState('email@email.email.com');
    const [isAdressEditing, setIsAdressEditing] = useState(false);
    const [adress, setAdress] = useState('27th Street NYC');
    const [education, setEducation] = useState([
        {
            id: 1,
            title: 'High school',
            subtitle: 'Informatics group 2009-2012',
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        },
        {
            id: 2,
            title: 'MIT',
            subtitle: 'Department of Informatics',
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        },
    ]);
    const [educationFormDisplayed, setEducationFormDisplayed] = useState(false);
    const [hover, setHover] = useState(-1);
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };
    const handleInput = (event, setState) => {
        setState(event.target.value);
    };
    const handleChange = (isAboutEditing, setIsAboutEditing) => {
        if (isAboutEditing === false && isEditing) {
            setIsAboutEditing(true);
        } else {
            setIsAboutEditing(false);
        }
    };
    const addProperty = (state, titleValue, subtitleValue, textValue, func) => {
        const nextId = state.length + 1;
        func((prev) => [
            ...prev,
            {
                id: nextId,
                title: titleValue,
                subtitle: subtitleValue,
                text: textValue,
            },
        ]);
    };
    const handleClick = (state, setState) => {
        if (state === false) {
            setState(true);
        } else {
            setState(false);
        }
    };
    const handleMouseOver = (id) => {
        setHover(id);
    };
    const handleMouseLeave = (event) => {
        setHover(-1);
    };
    const deleteProperty = (id) => {
        setEducation((prev) => {
            const newArr = prev.filter((school) => school.id !== id);
            return newArr.map((school, index) => ({
                ...school,
                id: index + 1,
            }));
        });
    };
    return (
        <section className="left">
            <div className="about">
                <div className="header-div">
                    <h2>ABOUT ME</h2>
                </div>
                {isAboutEditing ? (
                    <Input
                        inputValue={inputValue}
                        setInputValue={setInputValue}
                        setEdit={setIsAboutEditing}
                        setState={setAbout}
                        onChange={handleInputChange}
                        onClick={() =>
                            handleChange(isAboutEditing, setIsAboutEditing)
                        }
                    />
                ) : (
                    <p
                        className="about-info"
                        onClick={() =>
                            handleChange(isAboutEditing, setIsAboutEditing)
                        }
                    >
                        {about}
                    </p>
                )}
            </div>
            <div className="education">
                <div className="header-div">
                    <h2>EDUCATION</h2>
                </div>
                {education.map((school) => (
                    <div
                        key={school.id}
                        className="content-div"
                        onMouseOver={() => handleMouseOver(school.id)}
                        onMouseLeave={() => handleMouseLeave(school.id)}
                    >
                        {hover == school.id && isEditing && (
                            <button
                                className="delete-button"
                                onClick={() => deleteProperty(school.id)}
                            >
                                Delete
                            </button>
                        )}
                        <h3>{school.title}</h3>
                        <h4>
                            <em>{school.subtitle}</em>
                        </h4>
                        <p>{school.text}</p>
                    </div>
                ))}
                {isEditing && !educationFormDisplayed && (
                    <button
                        onClick={() => {
                            handleClick(
                                educationFormDisplayed,
                                setEducationFormDisplayed
                            );
                            setHover(-1);
                        }}
                    >
                        Add education +
                    </button>
                )}
                {isEditing && educationFormDisplayed && (
                    <TriInputForm
                        addProperty={addProperty}
                        input1={titleValue}
                        setInput1={setTitleValue}
                        input2={subtitleValue}
                        setInput2={setSubtitleValue}
                        input3={textValue}
                        setInput3={setTextValue}
                        formDisplayed={educationFormDisplayed}
                        setFormDisplayed={setEducationFormDisplayed}
                        state={education}
                        setState={setEducation}
                        label1="School name"
                        label2="Additional info"
                        label3="Description"
                        handleInput={handleInput}
                        handleClick={handleClick}
                    />
                )}
            </div>
            <div className="contact-us">
                <div className="header-div">
                    <h2>CONTACT</h2>
                </div>
                <div className="contact-div">
                    <div className="icon-div">
                        <i className="fa-solid fa-phone"></i>
                    </div>
                    <div className="text-div">
                        {isPhoneEditing ? (
                            <Input
                                inputValue={inputValue}
                                setInputValue={setInputValue}
                                setEdit={setIsPhoneEditing}
                                setState={setPhone}
                                onChange={handleInputChange}
                                onClick={() =>
                                    handleChange(
                                        isPhoneEditing,
                                        setIsPhoneEditing
                                    )
                                }
                            />
                        ) : (
                            <p
                                className="about-info"
                                onClick={() =>
                                    handleChange(
                                        isPhoneEditing,
                                        setIsPhoneEditing
                                    )
                                }
                            >
                                {phone}
                            </p>
                        )}
                    </div>
                </div>
                <div className="contact-div">
                    <div className="icon-div">
                        <i className="fa-solid fa-envelope"></i>
                    </div>
                    <div className="text-div">
                        {isMailEditing ? (
                            <Input
                                inputValue={inputValue}
                                setInputValue={setInputValue}
                                setEdit={setIsMailEditing}
                                setState={setMail}
                                onChange={handleInputChange}
                                onClick={() =>
                                    handleChange(
                                        isMailEditing,
                                        setIsMailEditing
                                    )
                                }
                            />
                        ) : (
                            <p
                                className="about-info"
                                onClick={() =>
                                    handleChange(
                                        isMailEditing,
                                        setIsMailEditing
                                    )
                                }
                            >
                                {mail}
                            </p>
                        )}
                    </div>
                </div>
                <div className="contact-div">
                    <div className="icon-div">
                        <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <div className="text-div">
                        {isAdressEditing ? (
                            <Input
                                inputValue={inputValue}
                                setInputValue={setInputValue}
                                setEdit={setIsAdressEditing}
                                setState={setAdress}
                                onChange={handleInputChange}
                                onClick={() =>
                                    handleChange(
                                        isAdressEditing,
                                        setIsAdressEditing
                                    )
                                }
                            />
                        ) : (
                            <p
                                className="about-info"
                                onClick={() =>
                                    handleChange(
                                        isAdressEditing,
                                        setIsAdressEditing
                                    )
                                }
                            >
                                {adress}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LeftSection;
