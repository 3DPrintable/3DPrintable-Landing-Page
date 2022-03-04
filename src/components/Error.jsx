import React from "react";

// Imported Images (Need to change these images to desired ones)
import ErrorImage from './images/illustration/error.svg'; // Error image


const Error = () => {

	return (
		<body>

        {/* Start Error Page */}
        <section class="bg-home d-flex align-items-center">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8 col-md-12 text-center">
                        <img src={ErrorImage} alt="Error"></img>
                        <div class="display-6 fw-medium text-capitalize text-dark mb-4">Page Not Found</div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12 text-center">  
                        <a href="HomeNFT" class="btn btn-primary mt-4">Go Back Home</a>
                    </div>
                </div>
            </div>
        </section>
        
	  </body>
	);
}

export default Error;