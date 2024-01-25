import myImage from './../images/photo-of-me.jpg';
import waving from './../images/waving-hello.png';
import '../styles/About.css';

export default function About() {
    return (
        <div class="about-container d-flex align-items-center flex-column">
            <div class="greeting text-center mt-5 mb-5 w-50">
                Hello<img class="hand-wave" src={waving} height="60" width="60"></img>
            </div>

            <div class="text-center">
                <img src={myImage}/>
                <h1>I am Jozeline Suarez</h1>
                <p>I am interested in Front-End Web development and design.
                In my free time, I enjoy drawing and painting.</p>  
            </div>
        </div>
    );
}