import React from "react";

// Imported Images (Need to change these images to desired ones)
import background from './images/bg/bg_4.jpg'; // Background image

const Features = () => {

	return (
		<body>
		
		{/* Start hero */}
        <section class="bg-half-170 d-table w-100" style={{backgroundImage: "url(" + background + ")"}}>
            <div class="bg-overlay bg-gradient-primary opacity-9"></div>
                <div class="container mt-100 mt-60">
                <div class="row justify-content-center">
                    <div class="col-lg-4 col-md-6">
                        <div class="feature feature-primary feature-clean text-center rounded px-4">
                            <div class="icons text-center">
                                <i class="uil uil-shield-check d-block mx-auto rounded h3 mb-0"></i>
                            </div>
                            <div class="content mt-4">
                                <a href="https://ipfs.io/" target="_blank" rel="noopener noreferrer" class="text-dark h5 title">Secure Decentrailized Storage</a>
                                <p class="text-muted mt-3 mb-0">Files stored using IPFS</p>
                                <div class="mt-2">
                                    <a href="https://ipfs.io/" target="_blank" rel="noopener noreferrer" class="link">IPFS Link</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div class="feature feature-primary feature-clean text-center rounded px-4">
                            <div class="icons text-center">
                                <i class="uil uil-newspaper d-block mx-auto rounded h3 mb-0"></i>
                            </div>
                            <div class="content mt-4">
                                <a href="https://moralis.io/" rel="noopener noreferrer" class="text-dark h5 title">Multi-Chain DAPP</a>
                                <p class="text-muted mt-3 mb-0">Built using Moralis SDK</p>
                                <div class="mt-2">
                                    <a href="https://moralis.io/" target="_blank" rel="noopener noreferrer" class="link">Moralis Link</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 mt-4 mt-lg-0 pt-2 pt-lg-0">
                        <div class="feature feature-primary feature-clean text-center rounded px-4">
                            <div class="icons text-center">
                                <i class="uil uil-browser d-block mx-auto rounded h3 mb-0"></i>
                            </div>
                            <div class="content mt-4">
                                <a href="/#" id="a" class="text-dark h5 title">ERC-1155 NFTs</a>
                                <p class="text-muted mt-3 mb-0">NFT Standardization</p>
                                {/* <div class="mt-2">
                                    <a href="http://erc721.org/" target="_blank" rel="noopener noreferrer" class="link">ERC 721 Link</a>
                                </div> */}
                                <div class="mt-2">
                                    <a href="https://enjin.io/erc-1155" target="_blank" rel="noopener noreferrer" class="link">ERC 1155 Link</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
		{/* End hero */}
			
    </body>
  );
}

export default Features;