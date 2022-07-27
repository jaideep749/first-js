let products =
  [
    {
      id: 1,
      productName: 'Tomato',
      image: "v1.jpg",
      availibility: 'true',
      price: 15,
      color: 'red',
      category: 'vegetable',
      quantity: 1
    },
    {
      id: 2,
      productName: 'Potato',
      image: "v11.jpg",
      price: 50,
      color: 'red',
      category: 'vegetable',
      quantity: 1
    },
    {
      id: 3,
      productName: 'Cabbage',
      image: "v3.jpg",
      availibility: 'false',
      price: 50,
      color: 'green',
      category: 'vegetable',
      quantity: 1
    },

    {
      id: 4,
      ProductName: 'Brokoli',
      image: "v4.jpg",
      availibility: 'true',
      price: 150,
      color: 'green',
      category: 'vegetable',
      quantity: 1
    },
    {
      id: 5,
      ProductName: 'Apple',
      image: "f1.jpg",
      availibility: 'true',
      price: 40,
      color: 'red',
      category: 'fruit',
      quantity: 1
    },
    {
      id: 6,
      ProductName: 'Guava',
      image: "f2.jpg",
      availibility: 'true',
      price: 30,
      color: 'red',
      category: 'fruit',
      quantity: 1
    },
    {
      id: 7,
      ProductName: 'Orange',
      image: "f3.jpg",
      availibility: 'true',
      price: 30,
      color: 'orange',
      category: 'fruit',
      quantity: 1
    },
    {
      id: 8,
      ProductName: 'Litchi',
      image: "f4.jpg",
      availibility: 'true',
      price: 30,
      color: 'red',
      category: 'fruit',
      quantity: 1
    }
  ]



//  const filterArray = products.filter(function(element){
//   return (element.category==="vegetable")
//  });

//  DataTransfer.filter(el => {

//  })


function filterObjects(selected) {
  var mainDiv = document
  console.log("selected", selected);
  var filterArray = []
  if(selected){
    filterArray = products.filter(el => {
      if (el?.category === selected) {
        return el
      }
    })
  } else {
    filterArray = [...products]
  }



  console.log("Products", filterArray);
}


// let lowestToHighest = products.sort((a, b) => a.price - b.price);


// let highestToLowest = products.sort((a, b) => b.price-a.price);
 
function consoleFunction (value) {
  console.log('the value is:', value.target.value);
  if (value.target.value === 'LowToHigh') {   //ascending the value...
    console.log(products.sort((a, b) => a.price - b.price));
  } else if(value.target.value === 'HighToLow') { //descending the value...
    console.log(products.sort((a, b) => b.price - a.price));
  } else {
     console.log([...products ]);   //default show all
  }
}

// function displayMessage(){
//   // document.getElementById("select").innerHTML = " ";
//   console.log(document.getElementById("select"));
// }   
// var btn = document.getElementById("select");
// btn.addEventListener("select", displayMessage);

// console.log(btn);

// let Ascending= products.sort((a, b) => (a.color > b.color) ? 1 : (a.color === b.color) ? ((a.price > b.price) ? 1 : -1) : -1 );

// console.log(Ascending);

// let AScending=products.sort((a,b) => {
  
//   if(a.price > b.price) 
 
//   return btn="LowToHigh";
  
//   if(a.price < b.price ) 
  
//   return btn="HighToLow";

//   else

//   return 0;
// });
// console.log(AScending);







