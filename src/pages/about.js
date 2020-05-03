import React from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const mainPage = () => {
    return (
        <div className="aboutApp">

            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <h3>
                            About Me
                </h3>
                    </div>
                    <div className="card-body">
                        <blockquote className="blockquote mb-0">
                            <div className="row">
                                <div className="col-md-3">
                                    <img id="pic" src="https://github.com/adamwenger44/react_portfolio.github.io/blob/master/images/IMG_2470.jpg?raw=true" alt="profile pic" width="100%" height="auto%" />
                                </div>

                                <div className="col-md-8">

                                    <p>My name is Adam Wenger. I am a graduate from the coding bootcamp for web developement at the University of North Carolina at Charlotte. I went to a 4 year college but decided it was not the right path for me,
                                                partially for not knowing what I wanted to study or do for the rest of my life.
                                                After completing the program I believe I have found the path for me, I find coding rewarding, challenging and fun and am now pursing a career in the field! Coding has become a new found hobby of mine, yet I have a few others. One is playing video games, I've been playing video games my entire life, as well as being intrigued by the process that goes into creating a game.  A dream job for me would be to be on a team to develop video games. </p>
                                </div>
                            </div>

                            <p>
                                With currently a certificate under my belt in this field, I hope to find a job and be able to provide a good life for myself and my son.
                    </p>

                        </blockquote>
                    </div>

                </div>
            </div>

        </div>
    )
}
export default mainPage