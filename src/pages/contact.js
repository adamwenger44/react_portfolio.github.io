import React from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
    return (
        <div className="contactApp">


            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <h3>Contact</h3>
                    </div>
                    <div className="card-body">
                        <div className="gitProfile">
                            <p>GitHub Profile: <a href="https://github.com/adamwenger44">
                                https://github.com/adamwenger44</a> </p>
                            <p>Linkedin Profile: <a href="https://www.linkedin.com/in/adam-wenger-25a73b129/"
                            >https://www.linkedin.com/in/adam-wenger-25a73b129/</a></p>
                            <p>Email Address: adamwenger44@gmail.com</p>
                            <p>Phone Number:(704)-430-8647</p>
                            <a href="https://github.com/adamwenger44/portfolio_bootstrap.github.io/blob/master/resume.pdf"
                            > Resume</a>

                        </div>
                    </div>

                </div>
            </div>




        </div>
    )
}
export default Contact