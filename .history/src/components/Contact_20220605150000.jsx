import React from "react";

// Imported Images (Need to change these images to desired ones)
import background from './images/bg/bg_4.jpg'; // Background image

const Contact = () => {

	return (
		<body>
		
		{/* Start hero */}
        <section class="bg-half-170 d-table w-100" style={{backgroundImage: "url(" + background + ")"}}>
            <div class="bg-overlay bg-gradient-primary opacity-9"></div>
            <div class="container">
                <div class="row justify-content-center mt-5">
                    <div class="col-12">
                        <div class="section-title text-center">
                            <h4 class="title text-white title-dark fw-medium mb-4">Contact Us</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
		{/* End hero */}


        <section class="section">
            {/* <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <div class="features-absolute bg-white p-4 p-md-5 rounded shadow">
                            <div class="custom-form">
                                <form method="post" name="myForm" onSubmit="return validateForm()">
                                    <p id="error-msg"></p>
                                    <div id="simple-msg"></div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-floating mb-3">
                                                <input name="name" id="name" type="text" class="form-control" placeholder="Name :"></input>
                                                <label>Your Name</label>
                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <div class="form-floating mb-3">
                                                <input name="email" id="email" type="email" class="form-control" placeholder="Email :"></input>
                                                <label>Email address</label>
                                            </div>
                                        </div>

                                        <div class="col-12">
                                            <div class="form-floating mb-3">
                                                <input name="subject" id="subject" class="form-control" placeholder="subject :"></input>    
                                                <label>Subject</label>
                                            </div>
                                        </div>

                                        <div class="col-12">
                                            <div class="form-floating mb-3">
                                                <textarea name="comments" id="comments" style={{height: '150px'}}
                                                    class="form-control" placeholder="Leave a comment here"></textarea>
                                                <label>Comments</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="d-grid">
                                                <button type="submit" id="submit" name="send" class="btn btn-primary">Send
                                                    Message</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <div class="container mt-100 mt-60">
                <div class="row">
                    {/* <div class="col-lg-4 col-md-6">
                        <div class="feature feature-primary feature-clean text-center rounded px-4">
                            <div class="icons text-center">
                                <i class="uil uil-phone d-block mx-auto rounded h3 mb-0"></i>
                            </div>

                            <div class="card-body p-0 mt-4">
                                <h5 class="">Phone</h5>
                                <p class="text-muted">Bryce Palichuk</p>
                                <a href="tel:+14038636913" class="link">+1 (403) 863-6913</a>
                                <p class="text-muted">Erik Thornborough</p>
                                <a href="tel:+14037968683" class="link">+1 (403) 796-8683</a>
                            </div>
                        </div>
                    </div> */}

                    <div class="col-lg-4 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div class="feature feature-primary feature-clean text-center rounded px-4">
                            <div class="icons text-center">
                                <i class="uil uil-envelope d-block mx-auto rounded h3 mb-0"></i>
                            </div>

                            <div class="card-body p-0 mt-4">
                                <h5 class="">Email</h5>
                                <p class="text-muted">Bryce Palichuk</p>
                                <a href="mailto:bryce.palichuk@3dprintable.io" class="link">bryce.palichuk@3dprintable.io</a>
                                <p class="text-muted">Erik Thornborough</p>
                                <a href="mailto:erik.thornborough@3dprintable.io" class="link">erik.thornborough@3dprintable.io</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 mt-4 mt-lg-0 pt-2 pt-lg-0">
                        <div class="feature feature-primary feature-clean text-center rounded px-4">
                            <div class="icons text-center">
                                <i class="uil uil-map-marker d-block mx-auto rounded h3 mb-0"></i>
                            </div>

                            <div class="card-body p-0 mt-4">
                                <h5 class="">Location</h5>
                                <p class="text-muted">11650 Elbow Dr SW, Calgary, AB T2W 1H5 </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* <div class="container-fluid">
            <div class="row">
                <div class="col-12 p-0">
                    <div class="card map border-0">
                        <div class="card-body p-0">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2513.6838437159636!2d-114.08647168391458!3d50.94805967954716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537176b25523b687%3A0xa5f5262554f834f2!2s11650%20Elbow%20Dr%20SW%2C%20Calgary%2C%20AB%20T2W%201H5!5e0!3m2!1sen!2sca!4v1645641447326!5m2!1sen!2sca"
                                style={{border: '0'}} allowFullScreen title="Address"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
		
    </body>
  );
}

export default Contact;