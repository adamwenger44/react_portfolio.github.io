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
                                    <img id="pic" src="https://github.com/adamwenger44/portfolio_bootstrap.github.io/blob/master/images/profile%20pic.jpg?raw=true" alt="profile pic" width="100%" height="auto%" />
                                </div>

                                <div className="col-md-8">

                                    <p>My name is Adam Wenger. I am 21 years old and am currently taking classes at UNCC
                                                for a web
                                                developement bootcamp. I went to a 4 year college but decided it was not the right path for me,
                                                partially for not knowing what I wanted to study or do for the rest of my life.
                                                This time around
                                                is different, I have enjoyed coding very much so far and can see myself pursing a career in the field! I have a few
                                                hobbies outside of
                                                school. One is playing video games, I've been playing video games my entire life
                                                and has always
                                                been a great way to relax after a long day.  A dream job for me would be to develop video games. </p>
                                </div>
                            </div>

                            <p>
                                Once I complete this program I hope to get a good job and be able to provide a good life for myself and my son
                    </p>

                        </blockquote>
                    </div>

                </div>
            </div>

        </div>
    )
}
export default mainPage