'use strict';
/* global $ */;

// const landingPage = `<section id="landing-page">
//             <p></p>
//             <h2>Tech Stack</h2>
//             <ol>
//                 <h2>Front-End</h2>
//                 <li>HTML5</li>
//                 <li>CSS3</li>
//                 <li>JavaScript</li>
//                 <li>jQuery</li>
//                 <li>React</li>
//                 <h2>Back-End</h2>
//                 <li>Node.js</li>
//                 <li>Mocha & Chai</li>
//                 <li>PostgreSQL</li>
//                 <li>REST APIs</li>
//                 <h2>Dev Tools</h2>
//                 <li>Git</li>
//                 <li>GitHub</li>
//                 <li>Chrome Dev Tools</li>
//                 <li>Heroku</li>
//             </ol>
            
//         </section>`
//did not need to declare a function. could put it as a string
const pageOne = `
            <section id="about-me">
             <header role="banner">
                 <h1>Oh! Hello There and Welcome!</h1> 
                 </header> 
                 <img src = "/IMG_5426.jpg" alt = "A Photo of Me" class="profile-photo">
                 <h3>console.logging('The World!');</h3>
                 <br>
                <p>My name is Laurel Butler. I am a full stack web developer with a focus in front end who pours the milk before the cereal because that is just the way it's done. I am located in Atlanta, GA and I found peace in code at the ripe age of 24 years old.</p>
                <p>I have the grit and determination of a baby learning to walk. Couple that with the energy of one thousand puppies and nothing can go wrong. I pride myself in taking on any challenge presented and not stopping until it is perfect.</p>
                <p>My interests include but are not limited to:<br> Cats<br>Food<br>Computers<br>Dad Jokes<br>Puns<br>Memes</p>
                <p>An insatiable desire to have a vision and bring it to life brought me into the world of tech. An affinity for the art and problem solving of it all continues to drive me each day. And the human/collaborative
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
            <div>
              <h2 class="work-header">My Homegrown and Made from Scratch Projects</h2>
          
              <div id="project">
          
                <div class="project-image">
                  <a href="https://thinkful-ei-bee.github.io/laurel-scottw-quiz-app/" target="_blank" class=" project-title">
                    <img class="project-pic" src="/Screen Shot 2019-03-07 at 3.33.54 PM (1).png" alt="project">
                    <div class="project-title">Oscars Quiz App</div>
                  </a>
                </div>
          
                <div class="project-info">
          
                  <div class="description">
                    <p>A fun quiz to determine how well you know our favorite movie stars.</p>
                  </div>
          
                  <div class="stack">
                    <p>HTML, CSS, JavaScript, jQuery</p>
                  </div>
          
                  <div class="repo-link">
                    <a href="https://github.com/thinkful-ei-bee/laurel-scottw-quiz-app" target="_blank">GitHub Repo</a>
                  </div>
          
                </div>
              </div>
          
              <div id="project">
          
                <div class="project-image">
                  <a href="https://star-wars.laurelbutler.now.sh/" target="_blank" class="project project-title">
                    <img class="project-pic" src="/Screen Shot 2019-04-08 at 5.26.48 PM.png" alt="project">
                    <div class="project-title">Star Wars</div>
                  </a>
                </div>
          
                <div class="project-info">
          
                  <div class="description">
                    <p>Search your favorite characters by name.</p>
                  </div>
          
                  <div class="stack">
                    <p>HTML, React, JSX</p>
                  </div>
          
                  <div class="repo-link">
                    <a href="https://github.com/thinkful-ei-bee/laurel-star-wars-deploy" target="_blank">GitHub Repo</a>
                  </div>
          
                </div>
              </div>
          
              <div id="project">
                <div class="project-img">
                  <a href="https://thinkful-ei-bee.github.io/Farah-Laurel-Bookmark-app/" target="_blank"
                    class="project project-title">
                    <img class="project-pic" src="/Screen Shot 2019-04-08 at 5.44.17 PM.png" alt="project">
                    <div class="project-title">Bookmark App</div>
                  </a>
                </div>
          
                <div class="project-info">
          
                  <div class="description">
                    <p>Search by rating and add bookmarks.</p>
                  </div>
          
                  <div class="stack">
                    <p>HTML, CSS, JavaScript, jQuery</p>
                  </div>
          
                  <div class="repo-link">
                    <a href="https://github.com/thinkful-ei-bee/Farah-Laurel-Bookmark-app" target="_blank">GitHub Repo</a>
                  </div>
          
                </div>
              </div>
          
          </section>`;

//did not need to declare a function. could put it as a string
const pageThree = 
    `<section id="work-experience">
    <h1>Work Experience</h1>
    <div class="work-info">
       <h3><strong>Thinkful Web Development Apprenticeship</strong><br>February 2019 - Present<br>Atlanta, GA</h3> 
       <p>Learned industry best practices and practical software development standards with a focus on HTML5, CSS3, JavaScript, jQuery, Node.js, React, Redux, and algorithms & data structures as well as creating and deploying mobile-first applications while learning new languages and frameworks by collaborating several hours every week with senior web developers.</p>
    </div>
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
    // $('.home-link').on('click', function (event) {
    //     $('#container').html(landingPage);
    // });
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