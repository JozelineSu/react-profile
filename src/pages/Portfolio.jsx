import { Link } from 'react-router-dom';

import arrow from '../images/arrow-link.png';
import horiseon from '../images/horiseon-project.png';
import nomNom from '../images/nom-nom.png';
import seamless from '../images/seamless-booking.png';

import '../styles/Portfolio.css';

export default function Portfolio() {
    return (
        <div className="d-flex flex-wrap flex-direction-row justify-content-around p-5">
            <div className="w-75">
                <div className="card-title">
                    <h3>
                        <Link className="work-link" to="https://jozelinesu.github.io/urban-octo-telegram-hw/" target="_blank">
                            Horiseon Project <img className="arrow" src={arrow}/>
                        </Link>   
                    </h3>
                </div>

                <div className="card-content d-flex justify-content-center align-items-center">
                    <img src={horiseon} className="img-thumbnail"/>                        

                    <p className="fs-4">This is a project I worked on in my bootcamp at UT Austin. 
                    We were tasked to review the given code and improve the HTML structure, organization of CSS elements, 
                    and creating alternate text for our images.</p>                    
                </div>
            </div>

            <div className="w-75">
                <div className="card-title">
                    <h3>
                        <Link className="work-link" to="https://jozelinesu.github.io/urban-octo-telegram-hw/" target="_blank">
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
        </div>
    )
}