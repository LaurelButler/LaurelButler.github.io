'use strict';
/* global $ */;

const techSkills = `<section id="tech-stack">
            <h2 class="tech-title"> < Tech Stack /> </h2>
            <ol>
                <h3>Front-End</h3>
                <li>HTML5</li><br>
                <li>CSS3</li><br>
                <li>JavaScript</li><br>
                <li>jQuery</li><br>
                <li>React</li>
                <h3>Back-End</h3>
                <li>Node.js</li><br>
                <li>Mocha & Chai</li><br>
                <li>PostgreSQL</li><br>
                <li>REST APIs</li>
                <h3>Dev Tools</h3>
                <li>Git</li><br>
                <li>GitHub</li><br>
                <li>Chrome Dev Tools</li><br>
                <li>Heroku</li>
            </ol>
            
        </section>
         <footer role = "content-info">
            <h5>I aspire to be better. I aspire to be great.</h5>
            <p>&copy;Laurel Butler 2019. All Rights Reserved.</p>
        </footer>`;
//did not need to declare a function. could put it as a string
const about = `
            <section id="about-me">
             <header role="banner">
                 <h1 class="name">Laurel Butler</h1> 
                 </header> 
                 <img src = "/IMG_5426.jpg" alt = "A Photo of Me" class="profile-photo">
                 <h4>console.logging('The World!');</h4>
                 <br>
                <div class="about-me-info">
                <p>My name is Laurel Butler. I am a full stack web developer with a focus in front end who pours the milk before the cereal because that is just the way it's done. I am located in Atlanta, GA and I found peace in code.</p>
                <p>I have the grit and determination of a baby learning to walk. Couple that with the energy of one thousand puppies and nothing can go wrong. I pride myself in taking on any challenge presented and not stopping until it is perfect.</p>
                <p>An insatiable desire to have a vision and bring it to life brought me into the world of tech. An affinity for the art and problem solving of it all continues to drive me each day. And the human/collaborative
                element involved in web development is what fuels me. I want to use my skills as a developer to make the dreams for
                myself, clients, employers, entrepreneurs and anyone with a passion a reality.</p>
                <p>My interests include but are not limited to:<br> Cats<br>Food<br>Computers<br>Dad Jokes<br>Puns<br>Memes</p>
                <p>Working with me is seamless, unless you prefer Dunkin' Donuts coffee over Starbucks. That is a deal breaker.</p>
                </div>
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
                <p>&copy;Laurel Butler 2019. All Rights Reserved.</p>
            </footer>`;

//did not need to declare a function. could put it as a string
const projects = 
            `<section id="projects">
                <div>
                <h2 class="work-header">My Homegrown and Made from Scratch Projects</h2>
                <div id="project">
                <a href="https://laurelbutler-nitelyfe.now.sh/" target="_blank" class="project project-title">
                <img class="project-pic" src="nitelyfe.jpeg" alt="project">
                <div class="project-title">NiteLyfe</div>
                </a>
                </div>
                
                <div class="description">
                <p>Enjoy a night out on the town with great deals using this application. Search by day of the week to see what's going on in your city.</p>
                <p>HTML, CSS, JavaScript, React, Node.js, Heroku, PostgreSQL</p>
                <div class="repo-link">
                    <a href="https://github.com/LaurelButler/nitelyfe" target="_blank">Peek at the Code</a>
                </div>
                </div>
               

                <div id="project">
                <a href="https://laurelbutler-spaced-rep.now.sh/" target="_blank" class="project project-title">
                <img class="project-pic" src="spacedrep.jpeg" alt="project">
                <div class="project-title">Spaced Repetition</div>
                </a>
                </div>
                
                <div class="description">
                <p>Learn some basic spanish words using this spaced repetition app.</p>
                <p>HTML, CSS, Javascript, React, Node.JS, Heroku, PostgreSQL, Cypress</p>
                <div class="repo-link">
                <a href="https://github.com/thinkful-ei-bee/spaced-rep-client-laurel-enrique" target="_blank">Peek at the Code</a>
                </div>
                </div>

                <div id="project">
                <a href="https://thinkful-ei-bee.github.io/laurel-scottw-quiz-app/" target="_blank" class="project project-title">
                <img class="project-pic" src="quizapp.jpeg" alt="project">
                <div class="project-title">Oscars Quiz App</div>
                </a>
                </div>
                
                <div class="description">
                <p>A fun quiz to determine how well you know our favorite movie stars.</p>
                <p>HTML, CSS, JavaScript, jQuery</p>
                <div class="repo-link">
                <a href="https://github.com/thinkful-ei-bee/laurel-scottw-quiz-app" target="_blank">Peek at the Code</a>
                </div>
                </div>

                <div id="project">
                <a href="https://star-wars.laurelbutler.now.sh/" target="_blank" class="project project-title">
                <img class="project-pic" src="starwars.jpeg" alt="project">
                <div class="project-title">Star Wars</div>
                </a>
                </div>
                
                <div class="description">
                <p>Search your favorite characters by name.</p>
                <p>HTML, React, JavaScript</p>
                <div class="repo-link">
                <a href="https://github.com/thinkful-ei-bee/laurel-star-wars-deploy" target="_blank">Peek at the Code</a>
                </div>
                </div>
                </div> 
                
            </section>
            <footer role="content-info">
                <h5>I aspire to be better. I aspire to be great.</h5>
                <p>&copy;Laurel Butler 2019. All Rights Reserved.</p>
            </footer>`;

//did not need to declare a function. could put it as a string
const work = 
    `<section id="work-experience">
    <h1>Work Experience</h1>
 
    <div class="work-info">
        <p>Working as a teacher, I fell in love with challenge. I craved more and moved back to the states to find my next endeavor. I became a server and that taught me all of the life skills necessary to work with every type of individual. I interned at a chiropratic office and was in charged of managing social media, emails, etc. and my curiosty began to blossom with wanting to know how everything worked behind the scenes. This brought me to a pivotal moment in my life and career. I took an interest in tech -- after many networking events and trials and errors on Free Code Camp, I knew web engineering was what I wanted to do. I proceeded to enroll in Thinkful and here we are; me making the best career transition I have ever made.</p>
       <h3><strong>Thinkful Web Development Apprenticeship</strong><br>February 2019 - Present<br>Atlanta, GA</h3> 
       <p>Learned industry best practices and practical software development standards with a focus on HTML5, CSS3, JavaScript, jQuery, Node.js, React, Redux, and algorithms & data structures as well as creating and deploying mobile-first applications while learning new languages and frameworks by collaborating several hours every week with senior web developers.</p>
    </div>
    <div class="work-info">
        <h3><strong>Superica</strong><br>December 2016 - Present<br>Atlanta, GA</h3>
        <p>Professional support liaison who acted as the first method of contact and aided in product education and experience for the customer. Maintained quality, accuracy and professionalism in a fast-paced environment. Successfully completed the required training programs offered from the company. Ability to multi - task and adapt to changing environment. Perfected the craft of listening and communicating clearly, professionally, and empathetically. Escalated problems or inquiries from customers as needed. Demonstrated high competency working in a fast - paced, team environment. Motivated colleagues to demonstrate high quality output, and positive work ethic.</p>
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
        <p> Handled inbound calls in a fast paced environment while diligently taking notes on each customers specific case. I provided a remarkable customer experience while communicating in a courteous manner using approved scripts. I met quality standards along with working collaboratively in a team environment. I educated customers on company procedures while maintaining accuracy and professionalism; mastering empathy.</p>
    </div>
    </section>`;

//this function renders results on the page
const bindClickHandlers = function() {
    $('.tech-skills-link').on('click', function (event) {
        $('#container').html(techSkills);
    });
    $('.about-me-link').on('click', function(event){
        $('#container').html(about);
    });
    $('.projects-link').on('click', function(event){
        $('#container').html(projects);
    });
    $('.work-experience-link').on('click', function(event){
        $('#container').html(work);
    });
}
       
//consolidated to one function
function main() {
    bindClickHandlers();
    $('#container').html(about); //this makes sure my pageOne is always rendered first
}
$(main);