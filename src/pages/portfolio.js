import React from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const portfolio = () => {
    return (
        <div className="portfolioApp">
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <h3>
                            Portfolio
                    </h3>
                    </div>
                    

                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-1">
                            </div>

                            <div className="col-md-3">
                                <a href="https://adamwenger44.github.io/Weather_dashboard.github.io/">
                                    <img src="https://github.com/adamwenger44/portfolio_bootstrap.github.io/blob/master/images/2019-12-11.png?raw=true"
                                        className="card-img-top" alt="img-one" />
                                </a>
                                <p className="card-text">Weather Dashboard</p>
                                <p id="repo"><a href="https://github.com/adamwenger44/Weather_dashboard.github.io">https://github.com/adamwenger44/Weather_dashboard.github.io</a></p>
                            </div>
                            <div className="col-md-1"></div>

                            <div className="col-md-3">
                                <a href="https://adamwenger44.github.io/day_planner.github.io/">
                                    <img src="https://github.com/adamwenger44/portfolio_bootstrap.github.io/blob/master/images/2019-11-25%20(2).png?raw=true"
                                        className="card-img-top" alt="img-two" />
                                </a>
                                <p className="card-text">Day Planner</p>
                                <p id="repo"><a href="https://github.com/adamwenger44/day_planner.github.io"
                                >https://github.com/adamwenger44/day_planner.github.io</a></p>
                            </div>
                        </div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <div className="row">
                            <div className="col-md-1">

                            </div>
                            <div className="col-md-3">
                                <a href="https://adamwenger44.github.io/jsQuiz.github.io/">
                                    <img src="https://github.com/adamwenger44/portfolio_bootstrap.github.io/blob/master/images/2019-11-25%20(3).png?raw=true"
                                        className="card-img-top" alt="img-one" />
                                </a>
                                <p className="card-text">JS Quiz</p>
                                <p id="repo"><a href="https://github.com/adamwenger44/jsQuiz.github.io"
                                >https://github.com/adamwenger44/jsQuiz.github.io</a></p>
                            </div>
                            <div className="col-md-1">

                            </div>
                            <div className="col-md-3">
                                <a href="https://drbailey13.github.io/IntuitiveBanana/index.html">
                                    <img src="https://github.com/DrBailey13/IntuitiveBanana/blob/master/assets/images/featured_artist/featured_artist2.png?raw=true"
                                        className="card-img-top" alt="img-one" />
                                </a>
                                <p className="card-text">Music Search App PROJECT</p>
                                <p id="repo"><a href="https://github.com/DrBailey13/IntuitiveBanana"
                                >https://github.com/DrBailey13/IntuitiveBanana</a></p>
                                <div className="col-md-1"></div>
                            </div>
                        </div>
                        <br></br>
                        <br></br>
                        <div className="row">
                            <div className="col-md-1"></div>
                            <div className="col-md-3">
                                <a href="https://warm-badlands-88710.herokuapp.com/">
                                    <img src="https://github.com/adamwenger44/portfolio_bootstrap.github.io/blob/master/images/2020-01-31%20(1).png?raw=true"
                                        className="card-img-top" alt="img-one" />
                                </a>
                                <p className="card-text">Eat-da_Burger</p>
                                <p id="repo"><a href="https://github.com/adamwenger44/burger.github.io"
                                >https://github.com/adamwenger44/burger.github.io</a></p>

                            </div>

                            <div className="col-md-1"></div>

                            <div className="col-md-3">
                                <a href="https://project2bc.herokuapp.com/">
                                    <img src="https://github.com/adamwenger44/portfolio_bootstrap.github.io/blob/master/images/2020-02-17.png?raw=true"
                                        className="card-img-top" alt="img-one" />
                                </a>
                                <p className="card-text">Project 2: Whats-cooking</p>
                                <p id="repo"><a href="https://github.com/adamwenger44/project2.github.io"
                                >https://github.com/adamwenger44/project2.github.io</a></p>

                            </div>
                        </div>
                        <br></br>
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
export default portfolio