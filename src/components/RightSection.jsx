import React, { useState } from 'react';
import { TriInputForm } from './LeftSection';

const DiInputForm = ({
    addProperty,
    input1,
    setInput1,
    input2,
    setInput2,
    formDisplayed,
    setFormDisplayed,
    state,
    setState,
    label1,
    label2,
    handleInput,
    handleClick,
}) => {
    return (
        <form
            className="skill-form"
            onSubmit={(e) => {
                e.preventDefault();
                addProperty(state, input1, input2, setState);
                setInput1('');
                setInput2('');
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
            <button>Submit</button>
            <button
                onClick={() => {
                    handleClick(formDisplayed, setFormDisplayed);
                    setInput1('');
                    setInput2('');
                }}
            >
                Cancel
            </button>
        </form>
    );
};

const RightSection = ({ isEditing }) => {
    const [workInput1, setWorkInput1] = useState('');
    const [workInput2, setWorkInput2] = useState('');
    const [workInput3, setWorkInput3] = useState('');
    const [experienceFormDisplayed, setExperienceFormDisplayed] =
        useState(false);
    const [workExperience, setWorkExperience] = useState([
        {
            id: 1,
            title: 'IT Company',
            subtitle: 'CEO 2013-2016',
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        },
        {
            id: 2,
            title: 'Cool Tech Company CTC',
            subtitle: 'Manager 2016-2022',
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        },
    ]);
    const [referanceInput1, setReferanceInput1] = useState('');
    const [referanceInput2, setReferanceInput2] = useState('');
    const [referanceFormDisplayed, setReferanceFormDisplayed] = useState(false);
    const [referance, setReferance] = useState([
        {
            id: 1,
            title: 'John Doe / CEO',
            text: 'Former CEO of Pineapple 222-4444-8888 ceo.pineapple@email.com',
        },
        {
            id: 2,
            title: 'Michael Smith / Manager',
            text: 'Manager at SomeTechCompany 111-4444-8888 manager.stc@email.com',
        },
    ]);
    const [awardsInput1, setAwardsInput1] = useState('');
    const [awardsInput2, setAwardsInput2] = useState('');
    const [awardsFormDisplayed, setAwardsFormDisplayed] = useState(false);
    const [awards, setAwards] = useState([
        {
            id: 1,
            title: 'IT Company best web developer 2015',
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        },
        {
            id: 2,
            title: 'CTC 2nd best web developer 2019',
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        },
        {
            id: 3,
            title: 'CTC best web developer 2020',
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        },
    ]);
    const [hover, setHover] = useState(-1);
    const handleInput = (event, setState) => {
        setState(event.target.value);
    };
    const handleClick = (state, setState) => {
        if (state === false) {
            setState(true);
        } else {
            setState(false);
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
    const addTwoInputProperty = (state, titleValue, textValue, func) => {
        const nextId = state.length + 1;
        func((prev) => [
            ...prev,
            {
                id: nextId,
                title: titleValue,
                text: textValue,
            },
        ]);
    };
    const handleMouseOver = (state, id) => {
        setHover([state, id]);
    };
    const handleMouseLeave = (event) => {
        setHover(-1);
    };
    const deleteProperty = (setState, id) => {
        setState((prev) => {
            const newArr = prev.filter((item) => item.id !== id);
            return newArr.map((item, index) => ({
                ...item,
                id: index + 1,
            }));
        });
    };
    return (
        <section className="right">
            <div className="work-experience">
                <div className="header-div">
                    <h2>WORK EXPERIENCE</h2>
                </div>
                {workExperience.map((work) => (
                    <div
                        key={work.id}
                        onMouseOver={() =>
                            handleMouseOver(workExperience, work.id)
                        }
                        onMouseLeave={() => handleMouseLeave(work.id)}
                        className="content-div"
                    >
                        {hover[0] == workExperience && hover[1] == work.id && isEditing && (
                            <button
                                className="delete-button"
                                onClick={() =>
                                    deleteProperty(setWorkExperience, work.id)
                                }
                            >
                                Delete
                            </button>
                        )}
                        <h3>{work.title}</h3>
                        <h4>
                            <em>{work.subtitle}</em>
                        </h4>
                        <p>{work.text}</p>
                    </div>
                ))}
                {isEditing && !experienceFormDisplayed && (
                    <button
                        onClick={() =>
                            handleClick(
                                experienceFormDisplayed,
                                setExperienceFormDisplayed
                            )
                        }
                    >
                        Add experience +
                    </button>
                )}
                {isEditing && experienceFormDisplayed && (
                    <TriInputForm
                        addProperty={addProperty}
                        input1={workInput1}
                        setInput1={setWorkInput1}
                        input2={workInput2}
                        setInput2={setWorkInput2}
                        input3={workInput3}
                        setInput3={setWorkInput3}
                        formDisplayed={experienceFormDisplayed}
                        setFormDisplayed={setExperienceFormDisplayed}
                        state={workExperience}
                        setState={setWorkExperience}
                        label1="School name"
                        label2="Additional info"
                        label3="Description"
                        handleInput={handleInput}
                        handleClick={handleClick}
                    />
                )}
            </div>
            <div className="referance">
                <div className="header-div">
                    <h2>REFEREANCE</h2>
                </div>
                {referance.map((item) => (
                    <div
                        key={item.id}
                        onMouseOver={() => handleMouseOver(referance, item.id)}
                        onMouseLeave={() => handleMouseLeave(item.id)}
                        className="content-div"
                    >
                        {hover[0] == referance && hover[1] == item.id && isEditing &&(
                            <button
                                className="delete-button"
                                onClick={() =>
                                    deleteProperty(setReferance, item.id)
                                }
                            >
                                Delete
                            </button>
                        )}
                        <h4>{item.title}</h4>
                        <p>{item.text}</p>
                    </div>
                ))}
                {isEditing && !referanceFormDisplayed && (
                    <button
                        onClick={() =>
                            handleClick(
                                referanceFormDisplayed,
                                setReferanceFormDisplayed
                            )
                        }
                    >
                        Add referance +
                    </button>
                )}
                {isEditing && referanceFormDisplayed && (
                    <DiInputForm
                        addProperty={addTwoInputProperty}
                        input1={referanceInput1}
                        setInput1={setReferanceInput1}
                        input2={referanceInput2}
                        setInput2={setReferanceInput2}
                        formDisplayed={referanceFormDisplayed}
                        setFormDisplayed={setReferanceFormDisplayed}
                        state={referance}
                        setState={setReferance}
                        label1="School name"
                        label2="Additional info"
                        handleInput={handleInput}
                        handleClick={handleClick}
                    />
                )}
            </div>
            <div className="awards">
                <div className="header-div">
                    <h2>AWARDS</h2>
                </div>
                {awards.map((item) => (
                    <div
                        key={item.id}
                        onMouseOver={() => handleMouseOver(awards, item.id)}
                        onMouseLeave={() => handleMouseLeave(item.id)}
                        className="content-div"
                    >
                        {hover[0] == awards && hover[1] == item.id && isEditing && (
                            <button
                                className="delete-button"
                                onClick={() =>
                                    deleteProperty(setAwards, item.id)
                                }
                            >
                                Delete
                            </button>
                        )}
                        <h3>{item.title}</h3>
                        <h4>{item.text}</h4>
                    </div>
                ))}
                {isEditing && !awardsFormDisplayed && (
                    <button
                        onClick={() =>
                            handleClick(
                                awardsFormDisplayed,
                                setAwardsFormDisplayed
                            )
                        }
                    >
                        Add awards +
                    </button>
                )}
                {isEditing && awardsFormDisplayed && (
                    <DiInputForm
                        addProperty={addTwoInputProperty}
                        input1={awardsInput1}
                        setInput1={setAwardsInput1}
                        input2={awardsInput2}
                        setInput2={setAwardsInput2}
                        formDisplayed={awardsFormDisplayed}
                        setFormDisplayed={setAwardsFormDisplayed}
                        state={awards}
                        setState={setAwards}
                        label1="School name"
                        label2="Additional info"
                        handleInput={handleInput}
                        handleClick={handleClick}
                    />
                )}
            </div>
        </section>
    );
};

export default RightSection;
