import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Hader';
import LeftSection from './LeftSection';
import RightSection from './RightSection';

const App = () => {
    return (
        <div>
            <Header
                photoSource={'./../../public/man.jpg'}
                fullName="John Doe"
                position="Front-end web developer"
                skills={[
                    'HTML/CSS',
                    'Python',
                    'JavaScript',
                    'React',
                    'Photoshop',
                    'MongoDB',
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
