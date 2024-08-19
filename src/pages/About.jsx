import myImage from './../images/photo-of-me.jpg';
import waving from './../images/waving-hello.png';
import '../styles/About.css';
import '../styles/Footer.css';
import '../styles/Portfolio.css';
import '../styles/Resume.css';
import { Link } from 'react-router-dom';
import arrow from '../images/arrow-link.png';
import nomNom from '../images/nom-nom.png';
import seamless from '../images/seamless-booking.png';
import pets from '../images/pets-r-us.png';


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
            {/* resume */}
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

        </div>

        {/*works */}

        <div className="d-flex flex-wrap flex-direction-row justify-content-around p-5">
            <div className="w-75">
                <div className="card-title">
                    <h3>
                        <Link className="work-link" to="https://protected-depths-05907-83495a2b8648.herokuapp.com/home" target="_blank">
                            Nom Nom Navigator <img className="arrow" src={arrow}/>
                        </Link>   
                    </h3>
                </div>
                <div className="card-content d-flex justify-content-center align-items-center">
                <img src={nomNom} className="img-thumbnail"/>                        

                <p className="fs-4">This is a group project I worked on while attending UT at Austin Bootcamp course. My group members and I built
                    a restaurant finder app that helps a user find nearby restaurants. After a user enters a zipcode, state, or city 
                    the top results within close distance will appear on top of the page. The user also has access to an interactable map.</p>                    
                </div>
            </div>

            <div className="w-75">
                <div className="card-title">
                    <h3>
                        <Link className="work-link" to="https://deazymat.github.io/travel-project/"target="_blank">
                            Seamless Booking <img className="arrow" src={arrow}/>
                        </Link>   
                    </h3>
                </div>
                <div className="card-content d-flex justify-content-center align-items-center">
                    <img src={seamless} className="img-thumbnail"/>                        

                    <p className="fs-4">This is a group project I worked on with members of the bootcamp course.
                        We built a travel tool site that helps users book hotels, calculate currency
                        exchange rates, and get inspiration for destinations by viewing city images.
                    </p>   
                </div>
            </div>    

            <div className="w-75">
                <div className="card-title">
                    <h3>
                        <Link className="work-link" to="https://pets-r-us-f569.onrender.com"target="_blank">
                            Pets-R-Us <img className="arrow" src={arrow}/>
                        </Link>   
                    </h3>
                </div>
                <div className="card-content d-flex justify-content-center align-items-center">
                    <img src={pets} className="img-thumbnail"/>                        

                    <p className="fs-4">This is a group project I worked on with members of the bootcamp course.
                        We built a pet finder app that allows the user to find their perfect pet suitable for their 
                        lifestyle. They will take a quiz to find the pet of their dreams. 
                    </p>   
                </div>
            </div>    
        </div>

        {/**contact */}

        <div className="container d-flex justify-content-center align-items-center flex-column vh-100">
            <h1 >Contact Me</h1>
            <form action="" method="get" className="w-50">
                <div className="mb-4">
                    <label className="form-label" for="name">Name: </label>
                    <input className="form-control" type="text" name="name" id="name" required />
                </div>
                <div className="mb-4">
                    <label className="form-label" for="email">Email address: </label>
                    <input className="form-control" type="email" name="email" id="email" required />
                </div>
                <div className="mb-4">
                    <label className="form-label" for="message">Message </label>
                    <textarea className="form-control" type="message" name="message" id="message" required />
                </div>
                <div className="text-center">
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>


        </div>
    );
}