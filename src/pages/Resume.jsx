import {Link} from 'react-router-dom';

export default function Resume() {
    return (
        <div>
            <h1>Front-End Proficiencies</h1>
            <ul> 
                <li>React</li>
            </ul>

            <h1>Back-End Proficiencies</h1>
            <ul> 
                <li>Javascript</li>
            </ul>

            <Link to="">Download Resume</Link>
        </div>
    );
}