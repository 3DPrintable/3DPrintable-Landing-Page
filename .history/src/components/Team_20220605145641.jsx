import React from "react";

// Imported Images (Need to change these images to desired ones)
import background from './images/bg/bg_4.jpg'; // Background image
import bryce from './images/profile_pics/bryce.jpg'; // Bryce profile pic
import erik from './images/profile_pics/erik.png'; //Erik profile pic

const Team = () => {

	return (
		<body>
		
		{/* Start hero */}
        <section class="bg-half-170 d-table w-100" style={{backgroundImage: "url(" + background + ")"}}>
            <div class="bg-overlay bg-gradient-primary opacity-9"></div>
            <div class="container">
                <div class="justify-content-center mt-5">
                    <div class="col-12">
                        <div class="section-title text-center row">
                            <h4 class="title text-white title-dark fw-medium mb-4">Team</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
		{/* End hero */}
        
        <div class="container">
            <div class="justify-content-center mt-5" >
                <div class="col-12 row">
                    <div className="cardprofile">
                        <a href="#/"><img alt="bryce" src={bryce}></img></a>
                        <h1>Bryce Palichuk</h1>
                        <p class="title">Co-Founder</p>
                        <p>Bryce Palichuk is a Mechanical Engineer, who is a 3D printing and blockchain technology enthusiast</p>
                        {/* <a href="#/"><i class="fa fa-dribbble"></i></a>
                        <a href="#/"><i class="fa fa-twitter"></i></a>
                        <a href="#/"><i class="fa fa-linkedin"></i></a>
                        <a href="#/"><i class="fa fa-facebook"></i></a>
                        <p><button>Contact</button></p> */}
                    </div>
                    <div className="cardprofile">
                        <a href="#/" ><img alt="bryce" src={erik} height="400px" width="315px" style={{marginTop: '25px'}}></img></a>
                        <h1>Erik Thornborough</h1>
                        <p class="title">Co-Founder</p>
                        <p>Erik Thornborough is a Finance Professional who has a passion for emerging technology and their applications in a fast paced market</p>
                        {/* <a href="#/"><i class="fa fa-dribbble"></i></a>
                        <a href="#/"><i class="fa fa-twitter"></i></a>
                        <a href="#/"><i class="fa fa-linkedin"></i></a>
                        <a href="#/"><i class="fa fa-facebook"></i></a>
                        <p><button>Contact</button></p> */}
                    </div>
                </div>
            </div>
        </div>
        </body>
    );
}

export default Team;