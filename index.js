// Write your solution in this file!

var customerName = 'bob';
const leastFavoriteCustomer = "Jyaboi";

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
    return customerName;
};

function setBestCustomer() {
    window.bestCustomer = 'not bob';
    return bestCustomer;
};

function overwriteBestCustomer(new_best_customer) {
    bestCustomer = new_best_customer;
    return bestCustomer;
};

function changeLeastFavoriteCustomer () {
    leastFavoriteCustomer = "commander";
};