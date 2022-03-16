import React from "react";

import NewBanner from "./NewBanner.jsx";
import ScrollToTop from "./ScrollToTop.jsx";

export default class MainPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.onscroll = () => {
            let el = document.getElementById("scroll-button");
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                el.classList.add("visible");
            }
            else {
                el.classList.remove("visible");
            }
        };
    }

    render() {
        return (
            <div>
                <ScrollToTop />
                <NewBanner />
                <main>
                    <div className="picture">
                        <img src="assets/profile.jpg" alt="Profile" />
                    </div>
                    <div className="content">
                        <div className="intro">
                            Hi! I&apos;m Ranjani Ramanathan.
                        </div>
                        <div className="detail">
                            <p>
                                I am a graduate student in Management Information Systems at <a href="https://tamu.edu">Texas A&amp;M University</a>. My interests lie in XYZ.
                            </p>
                            <p>
                                Previously, I worked at Cisco as a Network Engineer for 2.5 years.
                            </p>
                        </div>
                    </div>
                </main>
                <footer>
                    <a href="https://www.linkedin.com/in/ranjani-iyer/"><i className="fab fa-linkedin"></i></a>
                    <a href="mailto:ranjani125@gmail.com"><i className="fa fa-envelope"></i></a>
                    <a href="https://github.com/ranjani125/ranjani125.github.io/blob/main/resume.pdf"><i className="fa fa-file-alt"></i></a>
                    <a href="https://scholar.google.com/citations?user=d7HqEBcAAAAJ&hl=en&oi=ao"><i className="fab fa-google"></i></a>
                </footer>
            </div>
        );
    }
}
