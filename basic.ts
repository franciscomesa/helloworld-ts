export class Customer {
    name: string;
    isActive: boolean;

    constructor(name: string) {
        this.name = name;
         this.isActive = true;
    }

    announce():string {
        return `Hello, my name is ${this.name}`;
    }
    

} 

class SpecialCustomer extends Customer {
    // public > por defecto
    // private > desde la propia clase
    // protected > esta clase, o cualquier que la herede
    
}

// Create a new instance
let firstCustomer = new Customer("Alice");
let newMessage:  string  = firstCustomer.announce();

let webHeading = document.querySelector('h1');
webHeading!.textContent = newMessage;

let secondCustomer = new SpecialCustomer("Brian");
webHeading!.textContent = secondCustomer.announce();