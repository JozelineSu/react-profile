import {Link} from 'react-router-dom';
import '../styles/Resume.css';

export default function Resume() {
    return (
        <div className="container d-flex align-items-center flex-column resume-container">
            <div className="mb-5 mt-3"> 
                <h1 className="fs-4">Front-End Proficiencies</h1>
                <ul className="list-group text-center fs-3"> 
                    <li className="list-group-item">React</li>
                    <li className="list-group-item">HTML</li>
                    <li className="list-group-item">CSS</li>
                    <li className="list-group-item">Wireframe</li>
                </ul>
            </div>
            <div>
                <h1 className="fs-4">Back-End Proficiencies</h1>
                <ul className="list-group text-center fs-3"> 
                    <li className="list-group-item">Javascript</li>
                    <li className="list-group-item">Node</li>
                    <li className="list-group-item">MySQl</li>
                    <li className="list-group-item">mongoDB</li>
                </ul>
            </div>
            <Link to="/MyResume" className="mt-5 resume">Download Resume</Link>
        </div>
    );
}