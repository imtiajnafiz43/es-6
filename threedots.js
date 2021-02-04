const ages = [1, 2, 3, 4];
const ages2 = [5, 6, 7];
const ages3 = [8, 9, 10];
// const allAges = ages.concat(ages2).concat(ages3).concat([100]);
const allAges = [...ages, ...ages2, ...ages3, 100]
console.log(allAges);

const a = 500;
const ab = 5300;
const b = 53100;
const all = [502221334330, 53234500, 533434100]
const quantity = Math.max(...all)
console.log(quantity);
