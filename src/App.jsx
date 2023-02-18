import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Hader';
import LeftSection from './components/LeftSection';
import RightSection from './components/RightSection';
import './app.scss';

const App = () => {
    const [photoSrc, setPhotoSrc] = useState('./../../public/man-image.jpg');
    const [isEditing, setIsEditing] = useState(true);
    if (isEditing) {
        return (
            <div className="app">
                <Header
                    photoSource={photoSrc}
                    setPhotoSrc={setPhotoSrc}
                    skills={[
                        'HTML/CSS',
                        'PYTHON',
                        'JAVASCRIPT',
                        'REACT',
                        'PHOTOSHOP',
                        'MONGODB',
                        'pies',
                        'kot',
                    ]}
                    isEditing = {isEditing}
                />
                <LeftSection />
                <RightSection />
            </div>
        );
    }
};

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
