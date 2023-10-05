const coffeeMenu = require('./coffee_data');
//print array of all drinks on the menu
//--just the drink names
// --map function

const printName = (item) => {
    return item.name;
}
console.log(coffeeMenu.map(printName));
// const coffeeNames = coffeeMenu.map(printName);
// console.log(coffeeNames)


const underFive = (item) => {
    return item.price <= 5;
}
const itemsUnderFive = coffeeMenu.filter(underFive);
console.table(itemsUnderFive);


const evenPrice = (item) => {
    return item.price % 2 === 0;
}

const itemsEvenPrice = coffeeMenu.filter(evenPrice);
console.table(itemsEvenPrice);


const priceArray = (name) => {
    return name.price;
}
console.log(coffeeMenu.map(priceArray));
const totalPriceArray = coffeeMenu.map(priceArray);

const sumTotalCost = (accumulator, currentValue) => {
    return accumulator + currentValue;
}
const totalPrice = totalPriceArray.reduce(sumTotalCost);
console.log(totalPrice);


const isSeasonl = (item) => {
    return item.seasonal === true;
}
const seasonalItem = coffeeMenu.filter(isSeasonl);
console.table(seasonalItem);

seasonalItem.map((item) => {
    console.log(`${item.name} with imported beans`);
});


