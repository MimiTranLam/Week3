const programmers = [
  "Dennis Ritchie",
  "Brian Kernighan",
  "Ken Thompson",
  "Linus Torvalds",
  "Bjarne Stroustrup",
  "Tim Berners-Lee",
  "Donald Knuth",
  "Alan Turing",
  "Mark Zuckerberg",
  "Bill Gates",
  "Larry Page",
  "Elon Musk",
  "Jack Dorsey",
  "Satoshi Nakamoto",
  "Ada Lovelace",
  "Grace Hopper",
  "Dan Ambramov",
  "Jordan Walke",
  "Ryan Dahl",
  "David Heinemeier Hansson",
  "Guido van Rossum",
  "Yukihiro Matsumoto",
  "Sergey Brin",
  "Lyndsey Scott",
  "Abhinav Asthana",
  "Abhijit Kane",
  "Ankit Sobti",
  "Loi Tran",
  "Charles Lee",
  "Tuan Nguyen",
  "Tan Vo",
];

/* For loops */
for (let i = 0; i < programmers.length; i++) {
  let fullName = programmers[i];
  let names = fullName.split(" ");
  // F
  let firstName = names[0];
  console.log("First name: " + firstName);
  // L
  let lastName = names[1];
  console.log("Last name: " + lastName);
  // Fc
  let charsFirst = firstName.length;
  // Lc
  let charsLast = lastName.length;
  // Allc
  let charsFull = fullName.replace(" ", "").length;
  console.log(`CHARS: first = ${charsFirst}, last = ${charsLast}, full = ${charsFull} \n`)
};
/*
var result = 0;
programmers.forEach((x) => {
  result += Number(x.length);
  let chars = x.length;
  console.log(`Fullname chars: ${chars}, Sum chars: ${result}`);
});
*/

/* Sort */
//orderedFirsts = programmers.sort();
//console.log(orderedFirsts);

// P7
orderedLasts = [];
programmers.forEach((x) => {
let names = x.split(" ");
let lastName = names[names.length-1];
orderedLasts.push(lastName);
console.log(orderedLasts);
//let orderdLasts = lastName.sort()
//console.log(orderedLasts);
})

orderedLasts = [];
for (let i = 0; i < programmers.length; i++){
  let fullName = programmers[i];
  let names = fullName.split(" ");
  let reverse = names.reverse();
  orderedLasts.push(reverse);
}
console.log(orderedLasts);
console.log(orderedLasts[0][0]);

const usingSort = () => {
  console.log(programmers.sort((a,b) => {
    const lastA = a.split(" ")[a.split(" ").length -1];
    const lastB = b.split(" ")[b.split(" ").length -1];

    if (lastA > lastB){
      return 1;
    } else if (lastA < lastB){
      return -1;
    } else if (lastA === lastB){
      return 0;
    }
  }))
};

usingSort();

// P8 
console.log(
  programmers.sort((a,b) => {

    const firstA = a.split(" ")[0];
    const firstB = b.split(" ")[0];
    const firstAlength = firstA.length;
    const firstBlength = firstB.length;

    if (firstAlength > firstBlength){
      return 1;
    } else if (firstAlength < firstBlength){
      return -1;
    } else if (firstAlength === firstBlength){
      return 0;
    }

  })
);

// P8
console.log(
  programmers.sort((a,b) => {

    const lastA = a.split(" ")[a.split(" ").length -1];
    const lastB = b.split(" ")[b.split(" ").length -1];
    const lastAlength = lastA.length;
    const lastBlength = lastB.length;

    if (lastAlength > lastBlength){
      return 1;
    } else if (lastAlength < lastBlength){
      return -1;
    } else if (lastAlength === lastBlength){
      return 0;
    }

  })
);

/* Filter */
const filter = () => {
  const betterProgrammersL = programmers.filter(x => x[0] === "L");
  console.log(betterProgrammersL);

  const betterProgrammersT = programmers.filter(x => x.split(" ")[x.split(" ").length - 1][0] === "T");
  console.log(betterProgrammersT);

  const betterProgrammers4 = programmers.filter(x => x.split(" ")[0].length === 4);
  console.log(betterProgrammers4);

  const betterProgrammers4Plus = programmers.filter(x => x.split(" ")[0].length > 4);
  console.log(betterProgrammers4Plus);

  const betterProgrammers8Plus = programmers.filter(x => x.replace(" ", "").length > 8);
  console.log(betterProgrammers8Plus);

  const betterProgrammers8Less = programmers.filter(x => x.replace(" ", "").length < 8);
  console.log(betterProgrammers8Less);

  const betterProgrammersKn = programmers.filter(x => 
  x.split(" ")[x.split(" ").length - 1][0] === "K" 
  &&
  x.split(" ")[x.split(" ").length - 1][x.split(" ")[x.split(" ").length - 1].length - 1] === "n");
  console.log(betterProgrammersKn);

  const betterProgrammers3 = programmers.filter(x => x.split(" ")[0].length === 3);
  console.log(betterProgrammers3);

  const betterProgrammersA = programmers.filter(x => x[0] === "A");
  console.log(betterProgrammersA);
  // OR
  //const betterProgrammersA = programmers.filter((x) => //x.startsWith("A")); //true ,false);
  //console.log(betterProgrammersA);

  const betterProgrammersSame = programmers.filter(x => x[0] === x.split(" ")[x.split(" ").length - 1][0]
  );
  console.log(betterProgrammersSame);
};

filter();

/* Map */
// P1
let betterProgrammersFull = programmers.map((x) => {
  return {fullname: x};
});
console.log(betterProgrammersFull);

// P2
let betterProgrammersAbv = programmers.map((x) => {
  names = x.split(" ");
  abv = "";
  for (let i = 0; i < names.length; i++){
    initials = names[i][0];
    abv += initials;
  }
  return {abv};
});
console.log(betterProgrammersAbv);

/* OR
let betterProgrammersAbv = betterProgrammersFull.map((el) => {
  const arrNameParts = el.fullname.split(" ");
  const abv = arrNameParts.reduce(
    (final, oneNamePart) => final + oneNamePart[0],
    ""
  );
  return { ...el, abv };
});
*/

// P3
let betterProgrammersScramble = programmers.map((x) => {
  const chars = x.split("");
  const reverseChars = chars.reverse().join("");
  return reverseChars;
});

console.log(betterProgrammersScramble);

// P4
let betterProgrammersAge = programmers.map((name) => {
  var today = new Date();
  var currentYear = today.getFullYear();
  let randYear = currentYear - Math.round(Math.random() * (150 - 18) + 18);
  let randMonth = Math.round(Math.random() * (12 - 1) + 1);
  let randDay = Math.round(Math.random() * (30 - 1) + 1);
  if (randMonth === 2) {
    let randDay = Math.round(Math.random * (28 - 1) + 1)
  };
  date = `${randDay} / ${randMonth} / ${randYear}`;
  return {name, birthDate: date};
});
console.log(betterProgrammersAge);

/* Reduce */
// P1
const firstNamesString = programmers.reduce((total, current) => {
  return total + current.split(" ")[0] + ", ";
}, "");
console.log(firstNamesString);

// P2
const sumFirstChars = programmers.reduce((total, current) => {
  return total + current.split(" ")[0].length;
}, 0);
console.log(sumFirstChars);

// P3
const sumChars = programmers.reduce((total, current) => {
  return total + current.replace(" ", "").length;
}, 0);
console.log(sumChars);

// P4
const firstLChars = programmers.reduce((total, current) => {
  firstName = current.split(" ")[0];
  if (firstName[0] === "L") {
    return total + firstName.length;
  } else {
    return total;
  }
}, 0);
console.log(firstLChars);