import React from "react";

// Imported Images (Need to change these images to desired ones)
import background from './images/bg/bg_4.jpg'; // Background image

const Careers = () => {

	return (
		<body>
		
		{/* Start hero */}
        <section class="bg-half-170 d-table w-100" style={{backgroundImage: "url(" + background + ")"}}>
            <div class="bg-overlay bg-gradient-primary opacity-7"></div>
            <div class="container">
                <div class="row justify-content-center mt-5">
                    <div class="col-12">
                        <div class="section-title text-center">
                            <h4 class="title text-white title-dark fw-medium mb-4">Careers</h4>
                            <p class="text-white-50 para-desc mx-auto mb-0">Not hiring at this moment</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
		{/* End hero */}
		
    </body>
  );
}

export default Careers;