import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Hader';

const App = () => {
    return <Header photoSource={'./../../public/man.jpg'} fullName = 'John Doe' position = 'Front-end web developer' skills = {['HTML/CSS', 'Python', 'JavaScript', 'React', 'Photoshop', 'MongoDB' ]}/>;
};

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
