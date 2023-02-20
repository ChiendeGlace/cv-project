import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import LeftSection from './components/LeftSection';
import RightSection from './components/RightSection';
import './app.scss';

const EditSwitch = () => {
    const [isEditing, setIsEditing] = useState(true);
    return (
        <div className="wrapper">
            <div className="button-div">
                <button
                    onClick={() => {
                        setIsEditing(false);
                    }}
                >
                    Preview mode
                </button>
                <button
                    onClick={() => {
                        setIsEditing(true);
                    }}
                >
                    Edit mode
                </button>
            </div>
            <App isEditing={isEditing} />
        </div>
    );
};

const App = ({ isEditing }) => {
    const [photoSrc, setPhotoSrc] = useState('./../../public/man-image.jpg');
    return (
        <div className="app">
            <Header
                photoSource={photoSrc}
                setPhotoSrc={setPhotoSrc}
                isEditing={isEditing}
            />
            <LeftSection isEditing={isEditing} />
            <RightSection isEditing={isEditing} />
        </div>
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <EditSwitch />
    </React.StrictMode>
);
