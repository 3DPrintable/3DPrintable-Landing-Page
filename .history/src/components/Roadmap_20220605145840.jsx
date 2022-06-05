import React from "react";

// Imported Images (Need to change these images to desired ones)
import background from './images/bg/bg_4.jpg'; // Background image

const Roadmap = () => {

	return (
		<body>
		
		{/* Start hero */}
        <section class="bg-half-170 d-table w-100" style={{backgroundImage: "url(" + background + ")"}}>
            <div class="bg-overlay bg-gradient-primary opacity-9"></div>
            <div class="container">
                <div class="row justify-content-center mt-5">
                    <div class="col-12">
                        <div class="section-title text-center">
                            <h4 class="title text-white title-dark fw-medium mb-4">Roadmap</h4>
                            <p class="text-white-50 para-desc mx-auto mb-0">Below are completed and future milestones for 3DPrintable</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
		{/* End hero */}

		{/* Start Roadmap */}
		<section class="section bg" id="roadmap">
			<div class="container">
				<div class="row">
					<div class="col-12">
							<div class="section-title text-center mb-4 pb-2">
								<h4 class="title mb-4">Success Roadmap</h4>
							</div>
					</div>
				</div>

				<div class="row">
					<div class="col-12 mt-4 pt-2">
						<div class="tiny-four-item tiny-timeline">
							<div class="tiny-slide text-center">
								<div class="card pt-4 border-0 feature key-feature feature-primary item-box">
									<div class="icon text-center rounded-pill mx-auto mb-3 fs-5">
										<i class="iconify" data-icon="ph:brain"></i>
									</div>
									<p class="text-muted mb-0">Q3, 2021</p>
									<h6 class="mb-0 mt-1">Research and Planning</h6>
								</div>
							</div>

							<div class="tiny-slide text-center">
								<div class="card p-4 border-0 feature key-feature feature-primary item-box">
									<div class="icon text-center rounded-pill mx-auto mb-3 fs-5">
										<i class="iconify" data-icon="ic:outline-business-center"></i>
									</div>
									<p class="text-white-50 mb-0">Q4, 2021</p>
									<h6 class="text-light title-dark mb-0 mt-1">Business Incorporation</h6>
									<h6 class="text-light title-dark mb-0 mt-1">App Development</h6>
								</div>
							</div>

							<div class="tiny-slide text-center">
								<div class="card pt-4 border-0 feature key-feature feature-light bg-primary item-box">
									<div class="icon text-center rounded-pill mx-auto mb-3 fs-5">
										<i class="iconify" data-icon="ic:baseline-rocket-launch"></i>
									</div>
									<p class="text-muted mb-0">Q1, 2022</p>
									<h6 class="mb-0 mt-1">Launch Landing Page</h6>
									<h6 class="mb-0 mt-1">Launch "Rariable Lazy Mint" App</h6>
								</div>
							</div>

							{/* <div class="tiny-slide text-center">
								<div class="card pt-4 border-0 feature key-feature feature-primary item-box">
									<div class="icon text-center rounded-pill mx-auto mb-3 fs-5">
										<i class="iconify" data-icon="healthicons:market-stall"></i>
									</div>
									<p class="text-muted mb-0">Q2, 2022</p>
									<h6 class="mb-0 mt-1">Create NFT Minting Drop</h6>
								</div>
							</div>

							<div class="tiny-slide text-center">
								<div class="card pt-4 border-0 feature key-feature feature-primary item-box">
									<div class="icon text-center rounded-pill mx-auto mb-3 fs-5">
										<i class="iconify" data-icon="ant-design:picture-filled"></i>
									</div>
									<p class="text-muted mb-0">Q3, 2022</p>
									<h6 class="mb-0 mt-1">Launch Multi-Chain Marketplace</h6>
								</div>
							</div>

							<div class="tiny-slide text-center">
								<div class="card pt-4 border-0 feature key-feature feature-primary item-box">
									<div class="icon text-center rounded-pill mx-auto mb-3 fs-5">
										<i class="iconify" data-icon="carbon:partnership"></i>
									</div>
									<p class="text-muted mb-0">Q4, 2022</p>
									<h6 class="mb-0 mt-1">Onboard 3D Printing Farms</h6>
								</div>
							</div> */}

							<div class="tiny-slide text-center">
								<div class="card pt-4 border-0 feature key-feature feature-light bg-primary item-box">
									<div class="icon text-center rounded-pill mx-auto mb-3 fs-5">
										<i class="iconify" data-icon="wpf:future"></i>
									</div>
									<p class="text-muted mb-0">Q2, 2022</p>
									<h6 class="mb-0 mt-1">More to come...</h6>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		{/* End Roadmap */}
			
        </body>
    );
}

export default Roadmap;