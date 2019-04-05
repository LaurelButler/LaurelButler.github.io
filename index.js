'use strict';
/* global $ */;
//did not need to declare a function. could put it as a string
const pageOne = `
            <section id="about-me">
             <header role="banner">
                 <h1>Oh! Hello There and Welcome!</h1> 
                 </header> 
                 <img src = "/IMG_5296.jpg" alt = "A Photo of Me">
                <p>My name is Laurel Butler. I am a web developer with a focus in front end. But worry not because there is no fear dabbling with a little back end action here and there lying in my heart. I am located in Atlanta, GA and I found peace in code at the ripe age of 24 years old.</p>
                <p>My interests include but are not limited to:<br> Cats<br>Food<br>Computers<br>More Cats<br>More Food</p>
                <p>An insatiable desire to have a vision and bring it to life brought me into the world of tech. The human/collaborative
                element involved in web development is what fuels me. I want to use my skills as a developer to make the dreams for
                myself, clients, employers, entrepreneurs and anyone with a passion a reality.</p>
                <p>Working with me is seamless, unless you prefer Dunkin' Donuts coffee over Starbucks. That is a deal breaker.</p>
            </section>
            <footer role="content-info">
                <h3>Contact Me:</h3>
                <a href = "https://github.com/LaurelButler" target = "_blank"
                class ="contact-details" >GitHub</a>
                <a href = "https://linkedin.com/in/laurel-butler-a85205b1" target = "_blank"
                class ="contact-details" >LinkedIn</a>
                <a href="mailto:laurelbutler126@gmail.com" class="contact-details">Email</a>
                <a href="tel:4049649207" class="contact-details">Call</a>
                <h5>I aspire to be better. I aspire to be great.</h5>
                <p>&copy;rest_onyour_laurels 2018. All Rights Reserved.</p>
            </footer>`;

//did not need to declare a function. could put it as a string
const pageTwo = 
            `<section id="projects">
                <div id="projects" class="work">
                <h2 class="work-header">My Homegrown and Made from Scratch Projects</h2>
                <div id="project">
                <a href="https://thinkful-ei-bee.github.io/laurel-scottw-quiz-app/" target="_blank" class="project project-title">
                <img class="project-pic" src="/Screen Shot 2019-03-07 at 3.33.54 PM (1).png" alt="project">
                <div class="project-title">Oscars Quiz App</div>
                </a>
                <p>A fun quiz to determine how well you know our favorite movie stars.</p>
                <br>
                <p>HTML, CSS, JavaScript</p>
                 </div>

                </div> 
            </section>`;

//did not need to declare a function. could put it as a string
const pageThree = 
    `<section id="work-experience">
    <h1>Work Experience</h1>
    <div class="work-info">
        <h3><strong>Superica</strong><br>December 2016 - Present<br>Atlanta, GA</h3>
        <p>Professional support liaison who acted as the first method of contact and aided in product education and experience for the customer. Maintained quality, accuracy and professionalism in a fast-paced environment. Successfully completed the required training programs offered from the company. Ability to multi - task and adapt to changing environment. Perfected the craft of listening and communicating clearly, professionally, and empathetically. Escalated problems or inquiries from customers as needed. Provided a remarkable customer experience. Demonstrated high competency working in a fast - paced, team environment. Motivated colleagues to demonstrate high quality output, and positive work ethic.</p>
    </div>
    <div class="work-info">
        <h3><strong>Administrative Assistant Internship</strong><br>January 2017 - February 2017<br>Atlanta, GA</h3>
        <p>Managed and marketed social media websites.
        Answered emails timely and efficiently as well as phone calls.
        Daily responsibilities consisted of accounts receivable, mail management, and maintaining patient records, patient scheduling, and notifying them of upcoming appointments via email and telephone.</p>
    </div>
    <div class="work-info">
        <h3><strong>Kindergarten Teacher</strong><br>August 2014 - March 2016<br>Cairo, Egypt</h3>
        <p>Taught english as a foreign language in addition to math, science, and social studies.
        96 % graduation rate.
        Innovator of afterschool programs and individualized summer learning programs.
        Conducted new student assessments, created quarterly exams, and developed the curriculum based upon American Standards.</p>
    </div>
    <div class="work-info>
    <h3><strong>Customer Service Representative</strong><br>December 2011 - September 2012<br>Cairo, Egypt</h3>
    <p> Handled inbound calls in a fast paced environment while diligently taking notes on each customers specific case. I provided a remarkable customer experience while communicating in a courteous manner using approved scripts. I met quality standards along with working collaboratively in a team environment. I educated customers on the company 's procedures while maintaining accuracy and professionalism; mastering empathy.</p>
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