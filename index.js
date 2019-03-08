'use strict';
/* global $, store */;
const store = {
    pageOne: true,
    pageTwo: false,
    pageThree: false
}


const pageOne = function() {
    //this page will consist of a brief description about me
    //as well as my contact information
}

const pageTwo = function() {
    //this page will consist of my projects
}

const pageThree = function() {
    //this page will consist of my work timeline
}

const renderPortfolio = function() {

}

function main() {
    pageOne();
    pageTwo();
    pageThree();
    pageFour();
    renderPortfolio();
}

$(main);