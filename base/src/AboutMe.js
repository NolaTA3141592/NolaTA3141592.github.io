import React from "react";
import './AboutMe.css'
function AboutMe() {
    return (
        <section id="AboutMe-wrapper">
            <h1 id="AboutMe-title">
                AboutMe
            </h1>
            <div id="AboutMe-profile-wrapper">
                {/* name, college, age */}
                <div className="AboutMe-profile">
                    <h3 className="AboutMe-profile-title">
                        name
                    </h3>
                    <p className="AboutMe-profile-content">
                        Ashizawa Rei
                    </p>
                </div>
                <div className="AboutMe-profile">
                    <h3 className="AboutMe-profile-title">
                        college
                    </h3>
                    <p className="AboutMe-profile-content">
                        University of Tsukuba | College of Information Science
                    </p>
                </div>
                <div className="AboutMe-profile">
                    <h3 className="AboutMe-profile-title">
                        age
                    </h3>
                    <p className="AboutMe-profile-content">
                        18
                    </p>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;