'use strict';
/* global $ */;

const pageOne = `
            <section id="about-me">
                <p>My name is Laurel Butler. I am a web developer with a focus in front end. But worry not because there is no fear dabbling with a little back end action here and there lying in my heart. I am located in Atlanta, GA and I found peace in code at the ripe age of 24 years old.</p>
                <p>My interests include but are not limited to:</p>
                <ul>
                    <li>Cats</li>
                    <li>Food</li>
                    <li>Computers</li>
                    <li>Reading/Writing/Coding</li>
                    <li>More cats</li>
                    <li>More food</li>
                </ul>
                <p>An insatiable desire to have a vision and bring it to life brought me into the world of tech. The human/collaborative
                element involved in web development is what fuels me. I want to use my skills as a developer to make the dreams for
                myself, clients, employers, entrepreneurs and anyone with a passion a reality.</p>
                <p>Working with me is seamless, unless you prefer Dunkin' Donuts coffee over Starbucks. That is a deal breaker.</p>
            </section>
            <button>Click Me to Discover More!</button>
            <footer role="content-info">
                <h3>Contact Me:</h3>
                <a href="https://www.facebook.com/laurel.butler.3" target="_blank" class="contact-details">Facebook</a>
                <a id='profile-link' href="www.linkedin.com/in/laurel-butler-a85205b1" target="_blank"
                    class="contact-details">LinkedIn</a>
                <a href="mailto:laurelbutler126@gmail.com" class="contact-details">Email Me!</a>
                <a href="tel:4049649207" class="contact-details">Call?</a>
                <h5>I aspire to be better. I aspire to be great.</h5>
            </footer>`;

const pageTwo = `<section id="projects">
                My Homegrown and Made from Scratch Projects
                
            </section>`;

const pageThree = `<section id="work-experience">
        My work timeline/experience
    </section>`;

const bindClickHandlers = function() {
    $('.work-experience-link').on('click', function(event){
        $('#container').html(pageOne);
    });
    $('.projects-link').on('click', function(event){
        $('#container').html(pageTwo);
    });
    $('.about-me-link').on('click', function (event) {
        $('#container').html(pageThree);
    });
}
       

function main() {
    bindClickHandlers();
    $('#container').html(pageOne);
}
$(main);