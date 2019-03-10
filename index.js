'use strict';
/* global $ */;
//did not need to declare a function. could put it as a string
const pageOne = `
            <section id="about-me">
                <p>My name is Laurel Butler. I am a web developer with a focus in front end. But worry not because there is no fear dabbling with a little back end action here and there lying in my heart. I am located in Atlanta, GA and I found peace in code at the ripe age of 24 years old.</p>
                <p>My interests include but are not limited to:</p>
                <ol>
                    <li>Cats</li>
                    <li>Food</li>
                    <li>Computers</li>
                    <li>Reading/Writing/Coding</li>
                    <li>More cats</li>
                    <li>More food</li>
                </ol>
                <p>An insatiable desire to have a vision and bring it to life brought me into the world of tech. The human/collaborative
                element involved in web development is what fuels me. I want to use my skills as a developer to make the dreams for
                myself, clients, employers, entrepreneurs and anyone with a passion a reality.</p>
                <p>Working with me is seamless, unless you prefer Dunkin' Donuts coffee over Starbucks. That is a deal breaker.</p>
            </section>
            <footer role="content-info">
                <h3>Contact Me:</h3>
                <a href = "https://github.com/LaurelButler" target = "_blank"
                class ="contact-details" >GitHub</a>
                <a href="mailto:laurelbutler126@gmail.com" class="contact-details">Email</a>
                <a href="tel:4049649207" class="contact-details">Call</a>
                <h5>I aspire to be better. I aspire to be great.</h5>
            </footer>`;

//did not need to declare a function. could put it as a string
const pageTwo = 
            `<section id="projects">
                <h1>My Homegrown and Made from Scratch Projects</h1>
                <p>Oscars Quiz App</p><br>
                <p>A fun quiz to determine how well you know our favorite movie stars.</p><br>
                <p>HTML, CSS, JavaScript</p><br>
                <a href="https://thinkful-ei-bee.github.io/laurel-scottw-quiz-app/"</a>
                <a href="https://github.com/thinkful-ei-bee/laurel-scottw-quiz-app.git"</a>   
            </section>`;

//did not need to declare a function. could put it as a string
const pageThree = 
    `<section id="work-experience">
        My work timeline/experience
    </section>`;

//this function renders results on the page
const bindClickHandlers = function() {
    $('.about-me-link').on('click', function(event){
        $('#container').html(pageOne);
    });
    $('.projects-link').on('click', function(event){
        $('#container').html(pageTwo);
    });
    $('.work-experience-link').on('click', function(event){
        $('#container').html(pageThree);
    });
}
       
//consolidated to one function
function main() {
    bindClickHandlers();
    $('#container').html(pageOne); //this makes sure my pageOne is always rendered first
}
$(main);