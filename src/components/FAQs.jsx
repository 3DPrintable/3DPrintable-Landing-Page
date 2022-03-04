import React from "react";
import ReactNbsp from 'react-nbsp';

// Imported Images (Need to change these images to desired ones)
import background from './images/bg/bg_4.jpg'; // Background image

const FAQs = () => {

	return (
		<body>
		
		{/* Start hero */}
        <section class="bg-half-170 d-table w-100" style={{backgroundImage: "url(" + background + ")"}}>
            <div class="bg-overlay bg-gradient-primary opacity-9"></div>
            <div class="container">
                <div class="row justify-content-center mt-5">
                    <div class="col-12">
                        <div class="section-title text-center">
                            <h4 class="title text-white title-dark fw-medium mb-4">FAQs</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
		{/* End hero */}

        <section class="section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-5 col-12">
                        <div class="card section-title bg-white p-4 shadow rounded border-0">
                            <ul class="nav nav-pills nav-justified flex-column bg-transparent mb-0" id="pills-tab"
                                role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link rounded shadow active" id="pills-buying-tab" data-bs-toggle="pill"
                                        href="#pills-buying" role="tab" aria-controls="pills-buying" aria-selected="false">
                                        <div class="text-start py-1 px-3">
                                            <h6 class="mb-0">About 3DPrintable</h6>
                                        </div>
                                    </a>
                                </li>

                                <li class="nav-item mt-3">
                                    <a class="nav-link rounded shadow" id="pills-general-tab" data-bs-toggle="pill"
                                        href="#pills-general" role="tab" aria-controls="pills-general"
                                        aria-selected="false">
                                        <div class="text-start py-1 px-3">
                                            <h6 class="mb-0">NFTs</h6>
                                        </div>
                                    </a>
                                </li>

                                <li class="nav-item mt-3">
                                    <a class="nav-link rounded shadow" id="pills-payment-tab" data-bs-toggle="pill"
                                        href="#pills-payment" role="tab" aria-controls="pills-payment"
                                        aria-selected="false">
                                        <div class="text-start py-1 px-3">
                                            <h6 class="mb-0">Accounts and Wallets</h6>
                                        </div>
                                    </a>
                                </li>

                                <li class="nav-item mt-3">
                                    <a class="nav-link rounded shadow" id="pills-support-tab" data-bs-toggle="pill"
                                        href="#pills-support" role="tab" aria-controls="pills-support"
                                        aria-selected="false">
                                        <div class="text-start py-1 px-3">
                                            <h6 class="mb-0">3D Printing Resources (Creators)</h6>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-8 col-md-7 col-12 mt-4 pt-2 mt-sm-0 pt-sm-0">
                        <div class="tab-content" id="pills-tabContent">
                            <div class="tab-pane fade show active" id="pills-buying" role="tabpanel"
                                aria-labelledby="pills-buying-tab">
                                <div class="section-title" id="tech">
                                    <h5>About 3DPrintable</h5>
                                </div>

                                <div class="accordion mt-4 pt-2" id="buyingquestion">
                                    <div class="accordion-item rounded border-0 shadow">
                                        <h2 class="accordion-header" id="headingOne">
                                            <button class="accordion-button border-0 bg-white" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                                                aria-controls="collapseOne">
                                                Who is 3DPrintable?
                                            </button>
                                        </h2>
                                        <div id="collapseOne" class="accordion-collapse border-0 collapse show"
                                            aria-labelledby="headingOne" data-bs-parent="#buyingquestion">
                                            <div class="accordion-body text-muted bg-white">
                                                3DPrintable is a Canadian based company aiming to bridge the 
                                                3D printing and blockchain industries. 
                                            </div>
                                        </div>
                                    </div>

                                    <div class="accordion-item rounded border-0 shadow mt-3">
                                        <h2 class="accordion-header" id="headingTwo">
                                            <button class="accordion-button border-0 bg-white collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                                aria-expanded="false" aria-controls="collapseTwo">
                                                How does 3DPrintable work?
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" class="accordion-collapse border-0 collapse"
                                            aria-labelledby="headingTwo" data-bs-parent="#buyingquestion">
                                            <div class="accordion-body text-muted bg-white">
                                                3DPrintable provides a user friendly interface to buy and sell 3d printing files
                                                utilizing public blockchains and decentrailized file storage.
                                            </div>
                                        </div>
                                    </div>

                                    <div class="accordion-item rounded border-0 shadow mt-3">
                                        <h2 class="accordion-header" id="headingThree">
                                            <button class="accordion-button border-0 bg-white collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                                aria-expanded="false" aria-controls="collapseThree">
                                                Why should I trust you?
                                            </button>
                                        </h2>
                                        <div id="collapseThree" class="accordion-collapse border-0 collapse"
                                            aria-labelledby="headingThree" data-bs-parent="#buyingquestion">
                                            <div class="accordion-body text-muted bg-white">
                                                Don't trust, verify! Files are encrypted and stored using a 
                                                decentralized storage protocol called IPFS.The NFTs are stored in each 
                                                users crypto wallet and ownership is record on the blockchain. Users can 
                                                use blockchain scanners (Etherscan, BSCscan, etc.) to verify ownership.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="tab-pane fade" id="pills-general" role="tabpanel"
                                aria-labelledby="pills-general-tab">
                                <div class="section-title" id="general">
                                    <h5>NFTs</h5>
                                </div>

                                <div class="accordion mt-4 pt-2" id="generalquestion">
                                    <div class="accordion-item rounded border-0 shadow">
                                        <h2 class="accordion-header" id="headingfive">
                                            <button class="accordion-button border-0 bg-white" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapsefive"
                                                aria-expanded="true" aria-controls="collapsefive">
                                                What is a NFT?
                                            </button>
                                        </h2>
                                        <div id="collapsefive" class="accordion-collapse border-0 collapse show"
                                            aria-labelledby="headingfive" data-bs-parent="#generalquestion">
                                            <div class="accordion-body text-muted bg-white">
                                                Non-Fungible Token. Essentially unique digital ownership.
                                            </div>
                                        </div>
                                    </div>

                                    <div class="accordion-item rounded border-0 shadow mt-3">
                                        <h2 class="accordion-header" id="headingsix">
                                            <button class="accordion-button border-0 bg-white collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapsesix"
                                                aria-expanded="false" aria-controls="collapsesix">
                                                Why bother mint NFTs for 3D printing files?
                                            </button>
                                        </h2>
                                        <div id="collapsesix" class="accordion-collapse border-0 collapse"
                                            aria-labelledby="headingsix" data-bs-parent="#generalquestion">
                                            <div class="accordion-body text-muted bg-white">
                                                The NFT allows for tracking of ownership of a 3d printing file without the
                                                trust of a 3rd party. Also, since the NFT is recorded on a public 
                                                blockchain, the user can sell the file on any marketplace within the blockchain 
                                                ecosystem. 
                                            </div>
                                        </div>
                                    </div>

                                    <div class="accordion-item rounded border-0 shadow mt-3">
                                        <h2 class="accordion-header" id="headingseven">
                                            <button class="accordion-button border-0 bg-white collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseseven"
                                                aria-expanded="false" aria-controls="collapseseven">
                                                Can I mint multiple NFTs per 3D printing file?
                                            </button>
                                        </h2>
                                        <div id="collapseseven" class="accordion-collapse border-0 collapse"
                                            aria-labelledby="headingseven" data-bs-parent="#generalquestion">
                                            <div class="accordion-body text-muted bg-white">
                                                Yes! The ERC-1155 standard allows to mint as many NFTs per file 
                                                as you would like.
                                            </div>
                                        </div>
                                    </div>

                                    <div class="accordion-item rounded border-0 shadow mt-3">
                                        <h2 class="accordion-header" id="headingeight">
                                            <button class="accordion-button border-0 bg-white collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseseven"
                                                aria-expanded="false" aria-controls="collapseseven">
                                                Are there royalities?
                                            </button>
                                        </h2>
                                        <div id="collapseseven" class="accordion-collapse border-0 collapse"
                                            aria-labelledby="headingeight" data-bs-parent="#generalquestion">
                                            <div class="accordion-body text-muted bg-white">
                                                You bet! That is a key advantage when using blockchain technology for selling 
                                                digital files.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="tab-pane fade" id="pills-payment" role="tabpanel"
                                aria-labelledby="pills-payment-tab">
                                <div class="section-title" id="payment">
                                    <h5>Accounts and Wallets</h5>
                                </div>

                                <div class="accordion mt-4 pt-2" id="paymentquestion">
                                    <div class="accordion-item rounded border-0 shadow">
                                        <h2 class="accordion-header" id="headingnine">
                                            <button class="accordion-button border-0 bg-white" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapsenine"
                                                aria-expanded="true" aria-controls="collapsenine">
                                                Do I have to create an Username and Password?
                                            </button>
                                        </h2>
                                        <div id="collapsenine" class="accordion-collapse border-0 collapse show"
                                            aria-labelledby="headingnine" data-bs-parent="#paymentquestion">
                                            <div class="accordion-body text-muted bg-white">
                                                No, that is lame! Plus, who even remembers their password? All you need is 
                                                a wallet address.
                                            </div>
                                        </div>
                                    </div>

                                    <div class="accordion-item rounded border-0 shadow mt-3">
                                        <h2 class="accordion-header" id="headingten">
                                            <button class="accordion-button border-0 bg-white collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseten"
                                                aria-expanded="false" aria-controls="collapseten">
                                                What’s a wallet address? 
                                            </button>
                                        </h2>
                                        <div id="collapseten" class="accordion-collapse border-0 collapse"
                                            aria-labelledby="headingten" data-bs-parent="#paymentquestion">
                                            <div class="accordion-body text-muted bg-white">
                                                A wallet address is a cryptographic string of letters and numbers that are 
                                                unique to each user.
                                            </div>
                                        </div>
                                    </div>

                                    <div class="accordion-item rounded border-0 shadow mt-3">
                                        <h2 class="accordion-header" id="headingeleven">
                                            <button class="accordion-button border-0 bg-white collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseeleven"
                                                aria-expanded="false" aria-controls="collapseeleven">
                                                How do I get a wallet address?
                                            </button>
                                        </h2>
                                        <div id="collapseeleven" class="accordion-collapse border-0 collapse"
                                            aria-labelledby="headingeleven" data-bs-parent="#paymentquestion">
                                            <div class="accordion-body text-muted bg-white">
                                                There are many wallet address providers. One of the most popular is Metamask.
                                                <ReactNbsp />
                                                <a href="https://metamask.io/" target="_blank" rel="noopener noreferrer">
                                                    Click here to get a Metamask Wallet! 
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="tab-pane fade" id="pills-support" role="tabpanel"
                                aria-labelledby="pills-support-tab">
                                <div class="section-title" id="support">
                                    <h5>3D Printing Resources (Creators)</h5>
                                </div>

                                <div class="accordion mt-4 pt-2" id="supportquestion">
                                    <div class="accordion-item rounded border-0 shadow">
                                        <h2 class="accordion-header" id="headingthirteen">
                                            <button class="accordion-button border-0 bg-white" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapsethirteen"
                                                aria-expanded="true" aria-controls="collapsethirteen">
                                                CAD Software
                                            </button>
                                        </h2>
                                        <div id="collapsethirteen" class="accordion-collapse border-0 collapse show"
                                            aria-labelledby="headingthirteen" data-bs-parent="#supportquestion">
                                            <div class="accordion-body text-muted bg-white">
                                                There are many software applications that can be used to design parts for 
                                                3D printing. Some of the most popular paid and free ones are:
                                                <ReactNbsp />
                                                <a href="https://www.solidworks.com/" target="_blank" rel="noopener noreferrer">
                                                    Solidworks, 
                                                </a>
                                                <ReactNbsp />
                                                <a href="https://www.autodesk.ca/en/products/fusion-360/overview" target="_blank" rel="noopener noreferrer">
                                                    Fusion 360, 
                                                </a>
                                                <ReactNbsp />
                                                <a href="https://www.freecadweb.org/" target="_blank" rel="noopener noreferrer">
                                                    FreeCAD, 
                                                </a>
                                                <ReactNbsp />
                                                <a href="https://www.onshape.com/en/" target="_blank" rel="noopener noreferrer">
                                                    OnShape 
                                                </a>    
                                            </div>
                                        </div>
                                    </div>

                                    <div class="accordion-item rounded border-0 shadow mt-3">
                                        <h2 class="accordion-header" id="headingfourteen">
                                            <button class="accordion-button border-0 bg-white collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapsefourteen"
                                                aria-expanded="false" aria-controls="collapsefourteen">
                                                Design Guidelines for 3D printing
                                            </button>
                                        </h2>
                                        <div id="collapsefourteen" class="accordion-collapse border-0 collapse"
                                            aria-labelledby="headingfourteen" data-bs-parent="#supportquestion">
                                            <div class="accordion-body text-muted bg-white">
                                                Click on the links to learn about 3D printing design guidelines from industry leaders:
                                                <ReactNbsp />
                                                <a href="https://www.materialise.com/en/academy-manufacturing/design-am" target="_blank" rel="noopener noreferrer">
                                                    Materialise, 
                                                </a>
                                                <ReactNbsp />
                                                <a href="https://proto3000.com/service/3d-printing-services/materials/overview/design-guidelines/fdm-design-guideline/" target="_blank" rel="noopener noreferrer">
                                                    Proto3000, 
                                                </a>
                                                <ReactNbsp />
                                                <a href="https://www.stratasysdirect.com/resources/design-guidelines" target="_blank" rel="noopener noreferrer">
                                                    Stratasys 
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="accordion-item rounded border-0 shadow mt-3">
                                        <h2 class="accordion-header" id="headingfifteen">
                                            <button class="accordion-button border-0 bg-white collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapsefifteen"
                                                aria-expanded="false" aria-controls="collapsefifteen">
                                                Design Ideas
                                            </button>
                                        </h2>
                                        <div id="collapsefifteen" class="accordion-collapse border-0 collapse"
                                            aria-labelledby="headingfifteen" data-bs-parent="#supportquestion">
                                            <div class="accordion-body text-muted bg-white">
                                                Click on the links to learn about 3D printing design suggestions:
                                                <ReactNbsp />
                                                <a href="https://fossbytes.com/49-highly-useful-3d-printed-things/" target="_blank" rel="noopener noreferrer">
                                                    Fossbytes, 
                                                </a>
                                                <ReactNbsp />
                                                <a href="https://www.digitaltrends.com/cool-tech/useful-3d-printed-household-items/" target="_blank" rel="noopener noreferrer">
                                                    Digitaltrends, 
                                                </a>
                                                <ReactNbsp />
                                                <a href="https://www.format.com/magazine/resources/design/3d-printer-designs" target="_blank" rel="noopener noreferrer">
                                                    Format 
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
		
    </body>
  );
}

export default FAQs;