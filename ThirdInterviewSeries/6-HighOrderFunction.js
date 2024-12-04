const companies = [
  { name: "Apple", category: "product based", start: 1981, end: 2004 },
  { name: "Google", category: "product based", start: 1991, end: 2003 },
  { name: "Amazon", category: "product based", start: 1988, end: 2001 },
  { name: "Paytm", category: "Service based", start: 1991, end: 2012 },
  { name: "Coforge", category: "Service based", start: 1992, end: 2008 },
];

const ages = [33, 25, 47, 85, 45, 35, 26, 35, 45, 29, 5, 3, 2];

// // ##############-->>    1.forEach ||################

// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

// companies.forEach(function (company, index) {/
//   console.log(company);
// });
// companies.forEach((company, index) => console.log(company));

// // ##############-->>    2.filter ||################

// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] >= 20) {
//     console.log(ages[i]);
//   }
// }

// const finalAge = ages.filter((age) => {
//   if (age >= 20) {
//     return true;
//   }
// });
// console.log(finalAge);

// const serviseBasedCompany = companies.filter((company) => {
//   if (company.category === "Service based") {
//     return true;
//   }
// });
// console.log(serviseBasedCompany);

// // ##############-->>    3.map function ||################
// const dummy = companies.map((company, index) => {
//   return `${company.name} ${company.category}`;
// });
// console.log(dummy);

// // ##############-->>    4.sort function ||################
// const sorted = companies.sort((c1, c2) => {
//   if (c1.start > c2.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });
// console.log(sorted);
// const sorted2 = companies.sort((c1, c2) => (c1.name > c2.name ? 1 : -1));

// console.log(sorted2);

// // ##############-->>    5.reduce function ||################
// let total = 0;
// for (let i = 0; i < ages.length; i++) {
//   total += ages[i];
// }
// console.log(total);

// const sumAge = ages.reduce((total, age) => {
//   return total + age;
// }, 0);
// console.log(sumAge);
