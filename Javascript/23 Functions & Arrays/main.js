const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];

  const ages = [81,33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//   for(let i = 0 ; i< companies.length; i++){
//       console.log(companies[i]);
//   }

companies.forEach( function(company){

   console.log(company.name);
});

// ages from 21  or older

// let canDrive=[];
// for(let i =0 ; i<ages.length;i++){
//     if(ages[i]>= 21){
//         // console.log(ages[i]);
//         canDrive.push(ages[i]);
//     }
// }
// console.log(canDrive);

// let canDrive = ages.filter(function(age){
//     if(age >= 21){
//         return true;
//     }
// });
// console.log(canDrive);

// let canDrive = ages.filter(  (age) => age>=21 );
// console.log(canDrive);

// let canDrive = ages.filter((age) => { return age >=21 });
// let canDrive = ages.filter( age => { return age >=21 });

let canDrive = ages.filter( age =>  age >= 21 );
console.log(canDrive);

// get all Retail Companies 
let retailCompanies = companies.filter(function(company){
    // if(company.category=="Retail"){
    //     return true;
    // }
    return company.category=="Retail";
});
console.log(retailCompanies);

 retailCompanies =companies.filter( (company) => company.category =="Retail" );
console.log(retailCompanies);

// get 80s companies 

const eigtiesCompanies = companies.filter( company => company.start >=1980  && company.end <1990 );
// array of company names 

// map
// const companyNames=companies.map(function(company){
//     return company.name+"  "  + [company.end - company.start]+ " years"; 
// });
// console.log(companyNames);
const companyNames = companies.map(company => `${company.name}  ${company.end-company.start} years`);
console.log(companyNames);


//get the sqrt of ages then multiply with 2

const agesMap = ages.map(age => Math.sqrt(age))

                    .map(age => age * 2 );
console.log(agesMap);


////////////////////////////////////////////////////

//sorting is not correct
let ageSort = ages.sort();
console.log(ageSort);

// sorting is correct
ageSort = ages.sort(function(a,b){
    return b-a;
});

console.log(ageSort);

// sorting the companies according to the start year
// const sortedCompanies =companies.sort(function(c1,c2){
//     if(c1.start > c2.start){
//         return 1;
//     }
//     else {
//         return -1;
//     }
  
// });
// console.log(sortedCompanies);

// with arrow function 
const sortedCompanies = companies.sort((c1,c2) => (c1.start > c2.start ? 1 : -1));
console.log(sortedCompanies);

// sum Ages 
// let ageSum=0;
// for (let i = 0 ;i< ages.length ; i++){
//     ageSum= ageSum + ages[i];  
// }
// console.log(`the sum of ages is  ${ageSum}`);

let ageSum = ages.reduce(function(total,age){
    return total + age;
});
console.log(`the sum of ages is  ${ageSum}`);

ageSum = ages.reduce( (total,age) => total + age );

// the total of companies years 
const totalYears = companies.reduce((total,company) => total + (company.end- company.start),0);

console.log(`the total  of companies Years is  ${totalYears}`);
