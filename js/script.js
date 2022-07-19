'use strict'
const onePotatoWeight = 75;
const borschVolume = 48;
const priceKgPotato = 13;
const priceBorsch = () => {
    const borschPotatoQuantity = borschVolume * 4; //192 картошки для приготовления 48л борща
    const needPotatoWeight = (onePotatoWeight * borschPotatoQuantity) / 1000; // вес картошки для приготовления 48л борща
    const cost = needPotatoWeight * priceKgPotato;
    return Math.ceil(cost);
}
console.log(priceBorsch())