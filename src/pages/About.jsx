import myImage from './../images/photo-of-me.jpg';
import waving from './../images/waving-hello.png';
import '../styles/About.css';

export default function About() {
    return (
        <div className="about-container d-flex align-items-center flex-column">
            <div className="greeting text-center mt-5 mb-5 w-50">
                Hello<img className="hand-wave" src={waving} height="60" width="60"></img>
            </div>

            <div className="text-center d-flex p-5 m-5">
                <img className="my-image" src={myImage}/>
                <div>
                    <h2 className="mt-5">I am Jozeline Suarez</h2>
                    <p className="fs-1 p-5 text-center">I am interested in Front-End Web development and design.
                    In my free time, I enjoy drawing and painting.</p>  
                </div>
            </div>
        </div>
    );
}