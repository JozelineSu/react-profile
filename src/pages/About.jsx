import myImage from './../images/photo-of-me.jpg';

export default function About() {
    return (
        <div>
            <img src={myImage}/>
            <p>I am interested in Front-End Web development and design.
            In my free time, I enjoy drawing and painting.</p>
        </div>
    );
}