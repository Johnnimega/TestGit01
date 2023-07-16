const now = new Date();
const ages = [33,12,20,16,5,54,21,44,61,113,15,45,25,64,32];
const names = ['mo','John','Carmi','Momo','Mya','Adrie','john','cos','John','Jo','ed','Zoe'];
const companies = [
    {name: "Company 1", category: "Retail", start: 1981 , end: 2003},
    {name: "Company 2", category: "Auto", start: 1982 , end: 1988},
    {name: "Company 3", category: "Retail", start: 1983 , end: 2003},
    {name: "Company 4", category: "Technology", start: 1984 , end: 1990},
    {name: "Company 5", category: "Retail", start: 1995 , end: 2003},
    {name: "Company 6", category: "Auto", start: 1986 , end: 2003} ,
    {name: "Company 7", category: "Retail", start: 2007 , end: 2013},
    {name: "Company 8", category: "Retail", start: 1980 , end: 1988},
    {name: "Company 9", category: "Retail", start: 2007 , end: 2023},
    {name: "Company 0", category: "Retail", start: 2000 , end: 2003}
];
/// make it work
//names.filter(name => (name[0]>='A' && name[0] <='Z'));
// names.filter(hoofdLetters); // does not work on names.
const captitalNames = names
    .filter(hoofdLetters)
    .sort(); //     .map(convertToElement);
function hoofdLetters (name){
    const aCapital = 'A';
    const zCapital = 'Z';
    return name[0].charCodeAt(0) >= aCapital.charCodeAt(0) && name[0].charCodeAt(0) <= zCapital.charCodeAt(0)
}
//JavaScript objects are mutable.
// Any changes to a copy of an object will also change the original object
// But arrays are not.
console.log(captitalNames);
console.log(names);
// make document function work
function convertToElement(name){
    const el = document.createElement('p');
    el.innerText = name;
    return el;
}
const size12 = fontsizeClickHandler('btn12',12);
const size14 = fontsizeClickHandler('btn14',14);
const size16 = fontsizeClickHandler('btn16',16);
function fontsizeClickHandler(name,size){   
    return function(){
        document.getElementById(name).style.fontSize = `${size}px`;
        document.body.style.fontSize = `${size}px`;
    };
}


function saySomething(){console.log(`something`);};
const sayArrow =() => {
    console.log(`Arrow`)
};
saySomething(); sayArrow();
console.log(`why use === and !==, "5"==5: ${"5"==5} - "5"===5: ${"5"===5} `);
const a = [0]; 
const b= [0];

console.log(`primitives vs objects const a = [0]; const b= [0];a==b: ${a==b} `);
const n = () => 5;
const sum = (num1, num2) => num1 + num2; 
const square = num => num * num; 
console.log(sum(square(n()) , n()));
const mya =  {name:'Mya',talk:function(){return `hi ${this.name}`}};
const you2 = {talk:() => 'hello'}; 
console.log(mya.talk());
const this2 = {
    name:'Mya',
    talk:function(){return this},
    arrowTalk: () => {return this}};
const betterThis = {name:'Mya', talk(){return this}};
console.log(this2.talk());
console.log(this2.arrowTalk());

const mya3 = {
    name:'Mya',
    talk () {
        setTimeout(() => {
        console.log(this.name);
        },100)
    }
};
mya3.talk();
// with arrow function return window , this function returns documn
document.body.addEventListener('click', function(){
    console.log(this) // returns body
})
document.body.addEventListener('click', () => {
    console.log(this)  // returns window
})
function outer (callback){callback()} 
function inner(){console.log(this);}
//outer(inner); // returns window
// bind callback with object {name:'Cosmo'}
function outerCall (callback, obj){callback.call(obj)} 
function innerCall(){console.log(this);}
outerCall(innerCall,{name:'Cosmo'});


// setTimeout(funtion() {
//     console.log(1)
// },100);
// setTimeout(()=> {console.log(1)},100);

// JS Inheritance use classes
// const me = {    talking() {return 'Talk'}}
// class Person { talking() {return 'Talky, Talky'}}
// class SuperHuman extends Person {flies() {return 'Fly...';}}
// const me = new Person(); const he = new SuperHuman();
// console.log(me.talking());console.log(he.flies('xMan'));
// console.log(Person.prototype === me.__proto__ );
// // type F12 goto console, type a + b + c  and you see the value,
// // type a.__proto__ + b.__proto__ + c.__proto__  and you see also the proto members
// // by x and y you see directly the proto members (properties and functions)
// const  a = ''; const b= 0; const c = true; const x = [,,]; const y = {}; class z {}
// function createPerson(name) { return {name:name,
//     talk: () => `Hello i'm ${name} and work in a factory.`}} 
// const joFac = createPerson('John!'); console.log(joFac.talk());
window.name = "Local Live Server";
function Person(name){
    console.log(arguments)
     this.name= name;
     this.talk = () => `Hello i'm ${this.name} and construct things`;
     setTimeout(function() {console.log(this.name)}.bind(this),100) 
     setTimeout(function() {console.log(this.name)},100) //returns "Local Live Server"
 } 
const jo = new Person('John!'); 
console.log(jo.name);
console.log(jo.talk());
// this

console.log("JS interprer (this) left to right can be also window");
function talk(){ // talk becomes a member of window
    return`I am ${this.name}`;}
const me = {name:'John',talk};
const meWithoutName = {talk};
console.log(talk()); // 
console.log(me.talk()); // john
console.log(meWithoutName.talk()); // undefined
const meWithoutFunction = {name:"Mya"};
const meBinding = talk.bind(meWithoutFunction);
console.log(meBinding());
console.log(talk.call(meWithoutFunction)); // without parameter
function talkp(lang) {
    if (lang ==='nl') {
        return `Hoi, ik ben ${this.name}`} 
    else if (lang ==='es') {
        return `Hola, Soy ${this.name}`} 
    else {
        return `Hello, I am ${this.name}`};
    }
console.log(talkp.call(meWithoutFunction, 'es'));
// let pizza;
// let fastpizza;
// function orderPizza(){
//     fastpizza = "margarita 🍕";
// 	setTimeout(function() { 
//         // setTimeout is an asynchronous function
//         //after timeout(all the other code is done)
// 		pizza = "slice 🍕";
// 	}, 100);
// };
// orderPizza();
// console.log(`Eat ${fastpizza} pizza`);
// console.log(`Eat ${pizza} pizza`);  // undefined
// // now with callbacks and ready functions.
// let cbPizza;
// function orderCallbackPizza(callback){
//     //callback is a local name it can also be named bananas, it doesn't matter
// 	setTimeout(function() { 
//         // setTimeout still is an asynchronous function;
// 		cbPizza = "slice"; 		
// 		callback(cbPizza); // also here the callback can be renamed in bananas
// 	}, 1000);
// };
// function readyPizza() {
//     console.log(`Eat callback ${cbPizza} pizza`);  // undefined
// }
// // here is the callback trick, passing a function in another function.
// // the ready pizza function let the orderCallbackPizza wait till it is ready.
// // all the other code below this callback function line is probably done before.
// orderCallbackPizza(readyPizza);
// // listeners
// // window.addEventListener('click', function(){    
// //     console.log(`Clicked`);  
// // });
// // or
// window.addEventListener('click',callback);   
// function callback() {
//     console.log(`Callback Clicked`);  
// }
// // promises
// // we don'know how long it takes to ... i.e.
// //  loading a file, calll an API etc..
// //  result to functions like callAPI, receiveAPI, handleAPI
// // syncFunc()
// // asyncFunc();
// console.log(`Hello`);  
function fetchWeatherData() {
    return new Promise(function(resolve,reject){
        fetch('https://api.weather.gov/gridpoints/OKX/35,35/forecast')
          .then(response => response.json())
          .then(data => resolve(data.properties.periods[1].shortForecast));
    })
}
// async await
async function logWeather(){
    try{
        const data = await fetch('https://api.weather.gov/gridpoints/OKX/35,35/forecast')
        const result = await data.json();
        console.log(`async await fetch ${result.properties.periods[1].shortForecast} `);  
    }catch(error){
        console.log(`Error ${error} `)
    }
    
};
logWeather();
// .then . resolve reject finally
function getWeatherIcon(weather) {
    return new Promise(resolve =>{
        let icon;
        switch(weather){
            case 'Sunny':  
                icon = `${weather} ☀️`;
                break;
            case 'Mostly Clear':  
                icon = `${weather} 🌤`;
                break;
            case 'Cloudy','Mostly Cloudy':
                icon = `${weather} ☁️`;
                break;
            case 'Rainy':
                icon = `${weather} 🌧`;
                break;
            case 'Partly Cloudy':
                icon = `${weather} ⛅️`;
                break;
            default: 
                icon = `${weather} 💦 `;
        }
        resolve(icon); 
    }
)};
function displayWeather(weather){
    console.log(weather);  
}
function onReject(err){
    console.log(`Error  ${err}`);  
}
// first .then functions should be promisses last the resolve.
fetchWeatherData()
    .then(getWeatherIcon)
    .then(displayWeather)
    .catch(onReject);

// //     
// // const options = {
// // 	method: 'POST',
// // 	headers: {
// // 		'content-type': 'application/json',
// // 		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
// // 		'X-RapidAPI-Host': 'rapid-translate-multi-traduction.p.rapidapi.com'
// // 	},
// // 	body: '{"from":"en","to":"ar","e":"","q":["Hello","Whats","<h1>Test</h1>","Translate API","Rapid Translate Multi Traduction"]}'
// // };
// // const options = {
// // 	method: 'GET',
// // 	headers: {
// // 		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
// // 		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
// // 	}
// // };
// // https://api.ipify.org?format=json
// // function fetchAPIData() {
// //     return new Promise(function(resolve,reject){   
// //     // fetch('https://rapid-translate-multi-traduction.p.rapidapi.com/t', options)
// //     // fetch('https://api-football-v1.p.rapidapi.com/v3/timezone', options)
// //     // fetch('https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions', options)
// //     // fetch('https://api64.ipify.org?format=jsonp&callback=getIP')
// //     //     .then(response => response.json())
// //     })
// // }
// console.log(`Date: ${now.getDate()}  ${now} `);
// function promiseData() {
//     return new Promise(function(resolve,reject){   
//         setTimeout(function() { //setTimeout for async test
//             /// only a resolved (icon)value will be past to promiseIcon
//            (now.getDate() < 5) ?  resolve('happy') : resolve('sad');
//         }, 50)
//     })
// }
// // the flow goes down from the upper promise function to the function(s) below
// //  and pass the resolved value
// function promiseIcon(icon) {
//     return new Promise(function(resolve,reject){   
//         setTimeout(function() { //setTimeout for async test
//             switch(icon) {
//                 case 'sad':
//                     reject('🥺')
//                     break;
//                 case 'happy':
//                     resolve('😁')
//                     break;
//             };
//         }, 50)
//     })
// }
// function onSucces(resolve){
//     console.log(`First succes parameter ${resolve}`) ;
// }
// function onFail(reject){
//     console.log(`Second error parameter ${reject}`) ;
// }
// promiseData()
//     .then(promiseIcon)
//  //   .then(onSucces,onFail);
//     .then(onSucces)
//     .catch(onFail);


//     // function displayAPIData(api){
//     //     console.log(api);  
// //const promise = fetchAPIData()
//     // .then(displayAPIData)
//     // .catch(onError);
// //  promise.then(
// //     function(data){
// //         console.log(`First resolve parameter ${data}`) ;
// //     },function(data){
// //         console.log(`Second error parameter ${data}`) ; 
// //     }
// // );
// //promise.then(onSucces,onFail);
// // fetchAPIData()
// //     .then(fetchAPIData)
// //     .then(onSucces,onFail);

// // for loops
// // for (let i=0 ; i < companies.length ; i++){
// //     console.log(companies[i]);
// // }
// // let canDrink = [];
// // for (let i=0 ; i < ages.length ; i++){
// //     if(ages[i]>= 21){
// //         canDrink.push(ages[i])
// //         console.log(ages[i] + ' can drink.') 
// //     } else {
// //         console.log(ages[i] + ' is too young to drink alcohol.')}; 
// // }
// // console.log(canDrink) ;
// // is this nicer ???



// // forEach takes a call back synchronus es5 function or es6 arrow function
// // someValues.forEach((element) => {console.log(element);});
// // someValues.forEach((element, index) => {console.log(`Current index: ${index}`);console.log(element);});
// // function can contain 3 things
// // function(company, index, companies)
// // array.forEach(function(currentValue, index, arr), thisValue)
// const dogs = [,,,"",,"chihuahua","poedel","herder","pitbull","tekkel","", undefined, null,"beagle",""];
// dogs.forEach(dog => console.log(dog), "bastard");
// // Object.values(obj).forEach(function(currentValue, index, arr), thisValue)
// // companies.forEach(function(company){
// //     //console.log(company);
// // });



// // array filter, pass also a function to the filter
// // the filter function can contain 3 things
// // function(age, index, ages)
// // const canDrink = ages.filter(function(age){
// //     if(age >= 21){
// //         return true;
// //     }
// // });
// // console.log(canDrink) ;
// // filter with arrow functions with a simple number array.
// //  in place using the function put the condition
// // const canDrink = ages.filter(age => age >= 21);
// // console.log(canDrink) ;

// // filter with arrow functions with a object array.
// // const retailCompanies  = companies.filter(org => org.category === 'Retail');
// // console.log(retailCompanies) ;

// // filter with arrow functions with a object array.
// // const oldCompanies  = companies.filter(org => org.start > 1980 && org.end <= 1990);
// // const longerOrgs  = companies.filter(org => (org.end - org.start > 10));
// // console.log(oldCompanies) ;
// // console.log(longerOrgs) ;


// // map
// // you can create new arrays with map.
// // const mapOrgNames1 = companies.map(function(company){return company.name});
// // Return an array with `` template strings `${}`
// // const mapOrg1 = companies.map(function(company){
// //     return `Naam: ${company.name}, looptijd [${company.start} tot ${company.end}]`
// // }); 
// // map with es6 => notation, without the function() 
// // const mapOrg2 = companies.map(org =>`${org.name} [${org.start}-${org.end}]`);
// // map to an new array with a math function
// // const ageSquares = ages.map(age => Math.sqrt(age));
// // multiple maps, use multiple lines
// // There aren't naming convention for varibles, pointer variable name can be changes.
// // const jsFailsOnNumbers = ages.
// //   map(age => Math.sqrt(age)).
// //   map(sqrtAge => sqrtAge*sqrtAge); // or map(age => age*age) is the same.
// // map object, add properties only.
// // const mapOrgNames2 = companies.map(org >= org.CompanyNames);
// // console.log(mapOrgNames1) ;
// // console.log(mapOrg1) ;
// // console.log(mapOrg2) ;
// // console.log(ageSquares);
// // console.log(ages);
// // console.log(jsFailsOnNumbers);




// // sort , with sort we compare 2 values and return 1 or -1.
// // sort does not creates an new array but a memory pointer to te original now sorted array
// // convention says use a, b as variable names.
// // const sortedOrgs = companies.sort(function(a, b){
// //     if(a.start > b.start){return 1;}else{return -1}
// // });
// // console.log(sortedOrgs);
// // Or sort not with result 1 and -1 but result < 0 or result < 0
// // companies.sort((a, b) => a.end - b.end);
// // use with sort an es ? turnary operator
// // const esSortedOrgs = companies.sort((a, b) => (a.start > b.start ? -1 : 1));
// // console.log(companies);
// // // sort is alphabetic(UTF-16 strings)
// // const sortUTFAges = ages.sort();
// // // numeric sorting.
// // const sortAges = ages.sort((a,b) => a-b);
// // const mapAges = ages.map(age => (age * 1))
// // const sortUTFMappedAges = mapAges.sort();
// //  // it doesn't matter where you put it because ages change
// // console.log(sortUTFAges);
// // console.log(sortUTFMappedAges);


// // reduce loops through array
// // reduce has 2 parameters and a default, the index and array parmeters are optional.
// // myArray.reduce((total, number, index, array) => {}, default) 
// // myArray.reduce ((totalAccumulator, itemFromArray)) => 
// //             accumulator + (logaritmToAddToTheAccumalator(item )), startValue)
// // startValue can be 0 but also null or an empty array [] or object {}
// // reduce looks like a for or foreach loop
// // forEach(callbackfn: (value: number, index: number, array: number[]) => void, thisArg?: any): void
// // let ageSom =0; ages.forEach(a => ageSom += a);  console.log(ageSom);
// // let ageSum =0; for (let i =0; i < ages.length;i++){ ageSum += ages[i]; }
// // const ageReduce = ages.reduce(function(total, age){     
// //     console.log(`total:${total} + item:${age} = ${total + age}.`);
// //     return total + age;
// // },40);
// // console.log(ageReduce);
// // or the lambda es6 direct return with the (a, b) in brackets
// // const esSum = ages.reduce((total, age) => total + age, -60);
// // console.log(esSum);
// // const totalYears = companies.reduce((total, org) => total + (org.end - org.start), 0);
// // console.log(totalYears);
// // other use case for reduce. Return an array with extra dimension
// const newCompanies = companies.reduce((newGrouped,org) => {
//     const end = org.end; 
//     if (newGrouped[end]==null) newGrouped[end] = [];
//     newGrouped[end].push(org);
//     return newGrouped;
// },
// {});
// console.log(newCompanies) ;
// // loop object with Object.values(obj)
// // Object.values(newCompanies).forEach((a,index) => {
// //     console.log(a);console.log(index);
// //     a.forEach(org => console.log(`${org.name} [${org.start}]`));
// // });

// let person = {
//     firstname: "John",
//     lastname: "Doe",
//     birthday: "8/5/1964",
//     getAge: function() {
//         // use new Date() to make daystrings or dates an object. timezones
//         let now =  new Date();
//         let birth = new Date(this.birthday); 
//         let years = now.getFullYear() - birth.getFullYear();
//         let months = now.getMonth() - birth.getMonth(); // getMonth returns 0-11
//         let days = now.getDate() - birth.getDate();
//         let age = (months > 0 || (months == 0 && days >= 0)) ? years : years - 1;
//         return age;
//     }
// } 
// console.log(person.getAge());

// // combined map, filter, sort and reduce.
// const combined = ages
//   .map(age => (age * 1))
//   .filter(age => age >=18)
//   .sort((a, b) => a- b)
//   .reduce((a, b) => a + b, 0);
// console.log(combined);
// // > (map) [22, 6, 20, 6, 17, 8, 26] > (4) [22, 20, 17, 26] > (4) [17, 20, 22, 26] > 85
// const combines = companies
//     .map(org => (org.end - org.start)) 
//     .filter(duration => duration >=10)
//     .sort((a, b) => a- b)
//     .reduce((a, b) => a + b, 0);
// console.log(combines);