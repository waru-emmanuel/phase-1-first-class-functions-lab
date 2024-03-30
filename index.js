// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']; // defined the array

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2);
  }
  console.log(drivers.slice(0,2)); // this slice array method, it will only slice the first two names,hence the process will not go beyond index 2

  const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
  }
  console.log(drivers.slice(-2));

  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


function createFareMultiplier(int) {
    return function(fare=5) {
        return fare * int;
    }
}

const fareDoubler = function(fare) {
    return createFareMultiplier(2)(fare);
}
const fareTripler = function(fare) {
    return createFareMultiplier(3)(fare);
}

function selectDifferentDrivers(driversArray, fn) {
    return fn(driversArray);
}