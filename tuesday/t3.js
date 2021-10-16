const order = {
    orderItems: [
    { id: "M40", item: "T-shirt", price: 29.9, quantity: 5, gender: 'm', category: 'Summer' },
    { id: "M32", item: "Hoodie", price: 99.9, quantity: 2, gender: 'm', category: 'Winter' },
    { id: "M11", item: "Sandals", price: 19.9, quantity: 1, gender: 'm', category: 'Summer' },
    { id: "M12", item: "Shorts", price: 29.9, quantity: 1, gender: 'm', category: 'Summer' },
    { id: "M13", item: "Exercise Shorts", price: 29.9, quantity: 5, gender: 'm', category: 'Exercise' },
    { id: "M41", item: "Shoes", price: 19.9, quantity: 1, gender: 'm', category: 'Summer' },
    { id: "M49", item: "Socks", price: 5.9, quantity: 10, gender: 'm', category: 'Undergarment' },
    { id: "M01", item: "Belt", price: 15.9, quantity: 1, gender: 'm', category: 'Accessory' },
    { id: "M42", item: "Underwear", price: 19.9, quantity: 10, gender: 'm', category: 'Undergarment' },
    { id: "F71", item: "T-shirt", price: 39.9, quantity: 5, gender: 'f', category: 'Summer' },
    { id: "F81", item: "Dress", price: 49.9, quantity: 5, gender: 'f', category: 'Summer' },
    { id: "F91", item: "Skirt", price: 39.9, quantity: 5, gender: 'f', category: 'Summer' },
    { id: "F01", item: "Shoes", price: 19.9, quantity: 10, gender: 'f', category: 'Summer' },
    { id: "F32", item: "Hoodie", price: 99.9, quantity: 2, gender: 'f', category: 'Winter' },
    { id: "F34", item: "Sandals", price: 19.9, quantity: 2, gender: 'f', category: 'Summer' },
    { id: "F36", item: "Shorts", price: 39.9, quantity: 3, gender: 'f', category: 'Summer' },
    { id: "F12", item: "Exercise Shorts", price: 29.9, quantity: 5, gender: 'f', category: 'Exercise' },
    { id: "F19", item: "Sleeping", price: 39.9, quantity: 3, gender: 'f', category: 'Undergarment' },
    { id: "F42", item: "Socks", price: 5.9, quantity: 10, gender: 'f', category: 'Undergarment' },
    { id: "F43", item: "Underwear", price: 39.9, quantity: 10, gender: 'f', category: 'Undergarment' },
    { id: "F44", item: "Bra", price: 29.9, quantity: 10, gender: 'f', category: 'Undergarment' },
    { id: "F01", item: "Belt", price: 15.9, quantity: 1, gender: 'f', category: 'Accessory' },
  ]
  }

// P1 - Define a function that returns the sum number of items in the order.
function items(){
    console.log(order.orderItems.length);
};

items();

// P2 - Define a function that returns the total number of unique items in the order.
let allItems = [];
for (let i = 0; i < order.orderItems.length; i++) {
  item = order.orderItems[i].item;
  allItems.push(item);
};

let totalUniques = allItems.filter((item) => allItems.indexOf(item) === allItems.lastIndexOf(item));

console.log(`Total number of unique items in the order = ${totalUniques.length} (${totalUniques})`);

// P3 - Define a function that returns the number of male items in the order.
function maleItems(){
    let num = 0;
    for (let i = 0; i < order.orderItems.length; i++) {
        if (order.orderItems[i].gender == "m") {
            num ++;
        }
    };
    console.log("# of male items: " + num);
};

maleItems();

// P4 - Define a function that returns the number of female items in the order.
function femaleItems(){
    let num = 0;
    for (let i = 0; i < order.orderItems.length; i++) {
        if (order.orderItems[i].gender == "f") {
            num ++;
        }
    };
    console.log("# of female items: " + num);
};

femaleItems();

// P5 - Define a function that returns the number of summer items in the order.
function summerItems(){
    let num = 0;
    for (let i = 0; i < order.orderItems.length; i++) {
        if (order.orderItems[i].category == "Summer") {
            num ++;
        }
    };
    console.log("# of summer items: " + num);
};

summerItems();

// P6 - Define a function that returns the number of under garment items in the order.
function undergarments(){
    let num = 0;
    for (let i = 0; i < order.orderItems.length; i++) {
        if (order.orderItems[i].category == "Undergarment") {
            num ++;
        }
    };
    console.log("# of under garments items: " + num);
};

undergarments();

// P7 - Define a function that returns the number of female under garment items in the order.
function fUndergarments(){
    let num = 0;
    for (let i = 0; i < order.orderItems.length; i++) {
        if (order.orderItems[i].gender == "f" && order.orderItems[i].category == "Undergarment") {
            num ++;
        }
    };
    console.log("# of female under garments items: " + num);
};

fUndergarments();

// P8 - Define a function that returns the sum of all the unique items summer in the order.
let summerItemsArr = [];
for (let i = 0; i < order.orderItems.length; i++) {
  if (order.orderItems[i].category == "Summer") {
    summerItemsArr.push(order.orderItems[i].item)
  }
};

let summerUniques = summerItemsArr.filter((item) => summerItemsArr.indexOf(item) === summerItemsArr.lastIndexOf(item));

console.log(`Sum of all unique summer items in the order = ${summerUniques.length} (${summerUniques})`);

// P9 - Define a function that returns the sum of all the summer items in the order.
function summerSum() {
    let quantity = 0;
    order.orderItems.forEach((x) => {
        if (x.category == "Summer") {
            quantity += x.quantity;
        }
    });
    console.log("Quantity of summer items: " + quantity);
}

summerSum();

// P10 - Define a function that returns the sum of all the unique items male in the order.
let maleItemsArr = [];
for (let i = 0; i < order.orderItems.length; i++) {
  if (order.orderItems[i].gender == "m") {
    maleItemsArr.push(order.orderItems[i].item)
  }
};

let maleUniques = maleItemsArr.filter((item) => maleItemsArr.indexOf(item) === maleItemsArr.lastIndexOf(item));

console.log(`Sum of all unique items male in the order = ${maleUniques.length} (${maleUniques})`);

// P11 - Define a function that returns the sum of all the male items in the order.
function maleSum() {
    let quantity = 0;
    order.orderItems.forEach((x) => {
        if (x.gender == "m") {
            quantity += x.quantity;
        }
    });
    console.log("Quantity of male items: " + quantity);
}

maleSum();

// P12 - Define a function that returns the sum of all the unique items female in the order.
let femaleItemsArr = [];
for (let i = 0; i < order.orderItems.length; i++) {
  if (order.orderItems[i].gender == "f") {
    femaleItemsArr.push(order.orderItems[i].item)
  }
};

let femaleUniques = femaleItemsArr.filter((item) => femaleItemsArr.indexOf(item) === femaleItemsArr.lastIndexOf(item));

console.log(`Sum of all unique items female in the order = ${femaleUniques.length} (${femaleUniques})`);

// P13 - Define a function that returns the sum of all the female items in the cart.
function femaleSum() {
    let quantity = 0;
    order.orderItems.forEach((x) => {
        if (x.gender == "f") {
            quantity += x.quantity;
        }
    });
    console.log("Quantity of male items: " + quantity);
}

femaleSum();

// P14 - Define a function that mutates the object, adding an originalDate property as the current date.
let dateTime = new Date();

let addDate = () => {
  order.originalDate = dateTime;
  console.log(order)
};

addDate();

// P15 - Define a function that mutates the object, adding a delivered property as false.
let deliveryStatus = () => {
  order.delivered = "false";
  console.log(order)
};

deliveryStatus();

// P16 - Define a function that mutates the object, adding subtotal property, the sum of all the items in the order.
let orderSubtotal = () => {
    let subtotal = 0;
    order.orderItems.forEach((x) => {
      x.itemSubtotal = x.price * x.quantity;
      subtotal += x.itemSubtotal;
      return subtotal;
    });
    order.subtotal = subtotal.toFixed(2);
    console.log(order);
  };
  
  orderSubtotal();
  
  // P17 - Define a function that mutates the object, adding a salesTax property calculated at .07 percent * subtotal.
  let salesTax = () => {
    order.salesTax = (order.subtotal * .07).toFixed(2);
    console.log(order)
  };
  
  salesTax();
  
  // P18 - Define a function that mutates the object, adding grandTotal property, the sum of all the items in the order & sales tax.
  let grandTotal = () => {
    order.grandTotal = parseFloat(order.salesTax) + parseFloat(order.subtotal);
    console.log(order);
  };
  
  grandTotal();