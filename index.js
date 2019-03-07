'use strict';
/* global $, store */;
const store = {
    pageOne: true,
    pageTwo: false,
    pageThree: false,
    pageFour: false
}


const pageOne = function() {
    //this page will consist of a brief description about me
}

const pageTwo = function() {
    //this page will consist of my projects
}

const pageThree = function() {
    //this page will consist of my work timeline
}

const pageFour = function() {
    //this page will consist of my footer info
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