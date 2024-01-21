import { Link} from 'react-router-dom';

export default function Portfolio() {
    return (
        <div>
            <div>
                <h3>
                    <Link to="https://jozelinesu.github.io/urban-octo-telegram-hw/" target="_blank">
                        Horiseon Project <image href="arrow-link.png"/>
                    </Link>   
                </h3>

                <image href="Horiseon-Project.png"/>                        

                <p>This is a project I worked on in my bootcamp at UT Austin. We were tasked to review the given code and improve the HTML structure, organization of CSS elements, and creating alternate text for our images.</p>                    
            </div>

            <div>
                <h3>
                    <Link to="https://jozelinesu.github.io/urban-octo-telegram-hw/" target="_blank">
                        Nom Nom Navigator <image href="arrow-link.png"/>
                    </Link>   
                </h3>

                <image href="res_image.png"/>                        

                <p>This is a project I worked on in my bootcamp at UT Austin. We were tasked to review the given code and improve the HTML structure, organization of CSS elements, and creating alternate text for our images.</p>                    
            </div>

            <div>
                <h3>
                    <Link to="https://deazymat.github.io/travel-project/"target="_blank">
                        Seamless Booking <image href="arrow-link.png"/>
                    </Link>   
                </h3>

                <image href="seamlessBooking.png"/>                        

                <p>This is a group project I worked on with members of the bootcamp course.
                    We built a travel tool site that helps users book hotels, calculate currency
                    exchange rates, and get inspiration for destinations by viewing city images.
                </p>                    
            </div>      
        </div>
    )
}