import React from "react";
import './contactus.css';
import ColorSchemesExample from "../components/navbarBootstrap";




const ContactUs=()=>{



    return(
        <div className="contact">
            <ColorSchemesExample />
            <section class="contact-form">
                <div class="contactForm">
                    <form className="forma" action="#">
                        <h1 class="contact_heading">Contact Us</h1> 
                        <p class="para">Get in touch with the team for any inquiries.</p>
                        <h1 class="sub-heading"> Contact Information</h1>
                        <div class="method">
                            <p class="para2">Email: info@techforward2024.com</p>
                        </div>
                        <div class="method">
                        <p class="para2">Phone: +123 456 7890</p>
                        </div>

                        <div class="method">
                        <p class="para2">Address: Pallati i Kongreseve, Bulevardi Dëshmorët e Kombit, Tiranë, Albania</p>
                        </div>

                            <div class="map-container">
                                <h1>Location</h1>
                            <div class="map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.520885687948!2d19.821749300000004!3d41.3192854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1350311da93e594f%3A0xdacdd7212145b57a!2sPallati%20i%20Kongreseve!5e0!3m2!1ssq!2s!4v1710083838929!5m2!1ssq!2s" width="600" height="450" style={{"border":"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                            </div>
                    </form>        
                </div>
            <div class="klasvogel">
                <h1>Inquiries</h1>
            <form class="inpute">
                <h3>Name</h3>
                <input type="text" class="input" placeholder="your name" />
                <h3>Email</h3>
                <input type="text" class="input" placeholder="your email" />
                <h3>Message</h3>  
                <textarea class="input" cols="30" rows="5" placeholder="Your message..."></textarea>
                <input type="submit" class="input submit" value="Send Message" />
            </form>
            </div>
            </section>

            <footer>
        <div class="cont-footer">
            <h5>Follow us on social media:</h5>
            <a href="www.twitter.com"> <i class="fa-brands fa-twitter"></i>Twitter</a>
            <a href="www.facebook.com"> <i class="fa-brands fa-facebook"></i> Facebook </a>
            <a href="www.instagram,com"> <i class="fa-brands fa-instagram"></i> Instagram </a>
            <a href="www.linkedin.com"> <i class="fa-brands fa-linkedin"></i> Linkedin </a>

            <h5>Quick links:</h5>
            <a href="/html/home.html">Home</a>
            <a href="/html/about.html">About</a>
            <a href="/html/speakers.html">Schedule</a>
            <a href="/html/speakers.html">Speakers</a>
            <a href="/html/registration.html">Register</a>
            <a href="/html/contact.html">Contact Us</a>
            <p>TechForward 2024 © All rights reserved.</p>
            <a href="#" onclick="topFunction()" id="top">Back to top</a>
        </div>
    </footer>
        </div>
        
    )
}

export default ContactUs ;