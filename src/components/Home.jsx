import React from "react";

// Imported Images (Need to change these images to desired ones)
import background from './images/bg/bg_3.png'; // Background image

const Home = () => {

	return (
		<body>
		
		{/* Start Hero */}
		<section class="bg-half-260  w-100 " style={{backgroundImage: "url(" + background + ")"}}>
		<div class="bg-overlay bg-gradient-primary opacity-6"></div>	
			<div class="container">
				<div class="row align-items-center mt-5">
					<div class="col-lg-5 col-md-6">
						<div class="title-heading">
							<h4 class="display-4 fw-bold text-white title-dark mb-4">3DPrintable:</h4> 
							<p class="text-white-50 para-desc">A Web3 Gateway for 3D Printing</p>
						</div>
					</div>
				</div>
			</div>
    	</section>
		{/* End Hero */}

	</body>
	);
}

export default Home;