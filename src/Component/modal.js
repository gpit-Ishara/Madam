import React from "react";
import App from "../App.css";
import services from './services';

function Modal({ setModalOpen }){
    return(
        <div className="modal-background">
            <div className="modal-container">
                <button onClick={() => {setModalOpen(false);}}><i class="fa fa-times" aria-hidden="true"></i></button>
                <div className="title">

                </div>
                <div className="body">
                    <a href="../App.js">Home</a>
                    <a href="./services.js">Services</a>
                    <a href="#">Experience</a>
                    <a href="#">Awards</a>
                    <a href="#">Testimonials</a>
                    <a href="#">Certification</a>
                </div>
            </div>
        </div>
    );
}

export default Modal;