import React from "react";

// Imported Images (Need to change these images to desired ones)
import background from './images/bg/bg_4.jpg'; // Background image
import './Style.css'

const About = () => {

	return (
		<body>
		
        {/* Start hero */}
        <section class="bg-half-170 d-table w-100" style={{backgroundImage: "url(" + background + ")"}}>
            <div class="bg-overlay bg-gradient-primary opacity-9"></div>
                <div class="container">
                <div class="row justify-content-center mt-5">
                    <div class="col-12">
                        <div class="section-title text-center">
                            <h4 class="title text-white title-dark fw-medium mb-4">About 3DPrintable</h4>
                            <p class="text-white-50 para-desc mx-auto mb-0" align="justify">
                                3DPrintable is a Web3 gateway for 3D Printing. This means that we provide 
                                the tools for users to create NFTs from files used for 3D printing. 
                                NFTs are minted for every file uploaded to our platform and recorded to a public blockchain. 
                                The file is then stored and encrypted using a decentrailized storage protocol called IPFS.
                                Crypto currencies are used as the medium of exchange for the files. This could be a native 
                                blockchain currency (such as ETH) or a stablecoin (such as USDC). The choice is up to the 
                                creator on what medium exchange and value they desire. Once the NFT token has been
                                minted to a public blockchain, the NFT owner can list the file for sale on any third party 
                                marketplace built within that blockchain ecosystem. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
		{/* End hero */}
		
        </body>
    );
}

export default About;