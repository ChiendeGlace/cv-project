import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Hader';
import LeftSection from './components/LeftSection';
import RightSection from './components/RightSection';
import './app.scss';

const App = () => {
    return (
        <div className='app'>
            <Header
                photoSource={'./../../public/man-image.jpg'}
                fullName="JOHN DOE"
                position="FRONT-END DEVELOPER"
                skills={[
                    'HTML/CSS',
                    'PYTHON',
                    'JAVASCRIPT',
                    'REACT',
                    'PHOTOSHOP',
                    'MONGODB',
                ]}
            />
            <LeftSection />
            <RightSection />
        </div>
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
