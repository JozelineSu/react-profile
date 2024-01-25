import {Link} from 'react-router-dom';
import '../styles/Resume.css';

export default function Resume() {
    return (
        <div class="container d-flex align-items-center flex-column">
            <div class="mb-5 mt-3"> 
                <h1 class="fs-4">Front-End Proficiencies</h1>
                <ul class="list-group text-center fs-3"> 
                    <li class="list-group-item">React</li>
                </ul>
            </div>
            <div>
                <h1 class="fs-4">Back-End Proficiencies</h1>
                <ul class="list-group text-center fs-3"> 
                    <li class="list-group-item">Javascript</li>
                </ul>
            </div>
            <Link to="" class="mt-5">Download Resume</Link>
        </div>
    );
}