import React from "react";
import "../../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function body(props) {
    return (
        <div class="container">
            <div class="card">
                <div class="card-header">
                <h3>
                        About Me
                </h3>
                </div>
                <div class="card-body">
                    <blockquote class="blockquote mb-0">
                        <div class="row">
                            <div class="col-md-3">
                                <img id="pic" src="https://github.com/adamwenger44/portfolio_bootstrap.github.io/blob/master/images/profile%20pic.jpg?raw=true" alt="profile pic" width="100%" height="auto%" />
                        </div>

                                <div class="col-md-8">
        
                            <p>My name is Adam Wenger. I am 21 years old and am currently taking classes at UNCC
                                        for a web
                                        developement bootcamp. I went to a 4 year college but wasn't putting in my best
                                        effort,
                                        partially for not knowing what I wanted to study or do for the rest of my life.
                                        This time around
                                        it will be different, I have enjoyed coding very much so far! I have a few
                                        hobbies outside of
                                        school. One is playing video games, I've been playing video games my entire life
                                        and has always
                                        been a great way to relax after a long day. My favorite games are shooters like
                                Call of Duty.</p>
                                </div>
                            </div>
                            <p>
                                On the more active side I LOVE bowling! I used to work at a bowling alley so that really started
                                my passion for it. I would bowl before and after work and on days off. I was there every single
                                day, I wish I could bowl half as much as I used to. Unfortunately it's a bit expensive, and I
                                dont have the time anymore. And last and my most important part of my life is my son Braden, He
                                is 1 year old and is so cute! I love playing with him and making him laugh, he is the best.
                    </p>
                            <p>
                                Once I complete this program I hope to get a good job and be able to provide a good life for my
                                family.
                    </p>

                </blockquote>
            </div>

                </div>
            </div>
            )
        }
export default body