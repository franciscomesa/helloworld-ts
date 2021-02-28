"use strict";
class Customer {
    constructor(name) {
        this.name = name;
        //this.isActive = true;
    }
    announce() {
        return `Hello, my name is ${this.name}`;
    }
}
// Create a new instance
let firstCustmer = new Customer("Alice");
let newMessage = firstCustmer.announce();
let webHeading = document.querySelector('h1');
webHeading.textContent = newMessage;
