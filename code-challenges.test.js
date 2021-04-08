// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// const { describe } = require("yargs");

// Please read all questions thoroughly
// Pseudo coding is HIGHLY recommended
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with an expect statement using the variable provided.
//set up test that will describe when codedMessage gets called
// if argument is secretCodeWord1 
//actual result .toEqual("l4ck4d41s1c4l")
// if argument is secretCodeWord2 
//actual result .toEqual("g0bbl3dyg00k")

describe('when codedMessage gets called',()=>{
    it("if argument is secretCodeWord1, retrun l4ck4d41s1c4l",() =>{
    const argument= secretCodeWord1;
    const actualResult = codedMessage(argument)
    expect(actualResult).toEqual("l4ck4d41s1c4l")
    })
    it("if argument is secretCodeWord2, retrun g0bbl3dyg00k",() =>{
    const argument= secretCodeWord2
    const actualResult = codedMessage(argument)
    expect(actualResult).toEqual("g0bbl3dyg00k")
    })
})



// // b) Create the function that makes the test pass.


// //create a function that takes a string as an argument
const codedMessage = (string) =>{
// //strings.toLowerCase() and splits that string with ('') foreach of value and if value === 'a' return 4 elseif value value ==='e' return 3 elseif value === 'i' elseif value === 'o' return 0  else return value and returns that new array to a codeString.join("")

    codedString = []
    string.toLowerCase().split('').forEach((value) =>{
        if (value === 'a')
        return codedString.push(4);
        else if (value ==='e')
        return codedString.push(3);
        else if (value === 'i')
        return codedString.push(1);
        else if(value === 'o')
        return codedString.push(0);
        else
        return codedString.push(value)
    })
    return codedString.join('')
}


var secretCodeWord1 = "lackadaisical"
// Expected output: "l4ck4d41s1c4l"
var secretCodeWord2 = "gobbledygook"
// Expected output: "g0bbl3dyg00k"

// console.log(codedMessage(secretCodeWord1))
// console.log(codedMessage(secretCodeWord2))







// --------------------2) Create a function that takes in an array and returns all the words that contain the letter a.

// a) Create a test with an expect statement using the variable provided.
//setting up test to describe when onlyAs gets called 
// when argument is arrayofWords  
//actual result .toEqual("Apple" "Banana" "Peach")


describe('when onlyAs gets called',()=>{
    it('if argument is arrayOfWords, return "Apple" "Banana" "Peach"',() =>{
    const argument= arrayOfWords;
    const actualResult = onlyAs(argument)
    expect(actualResult).toEqual(["Apple", "Banana", "Peach"])
    })
})


//set up a function that takes in an array of strings
const onlyAs = (array) =>{
    splitStrings=[]
    array.forEach(element => {
        //foreach elemenet in the array it sill split word then findIndex of 'Aa'
//push(element if 'Aa' is found)

       element.split('').find(value =>{
        if(value === 'A'|| value === 'a')
        return splitStrings.push(element)
        })
    })
return splitStrings
}


var arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"]
// Expected output: "Apple" "Banana" "Peach"

// console.log(onlyAs(arrayOfWords))



// b) Create the function that makes the test pass.





// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

//I was able to get the key values but I was unable to get an if statment to extract those key value pairs for the times the number came up. 
// I had done other changes but this was where I was able to still get the count. 


//setup function that takes in an array as the argument
const fullHouse = (array) => {
    
//check the value of each index
 var currentHand = {}


for (var i = 0; i< array.length; i++){
    var number = array[i]
    currentHand[number] = currentHand[number] ? currentHand[number] + 1 : 1;

} return currentHand
//counts the amout of values 
//if statement that for the counts of 3 and 2 


}


// a) Create a test with an expect statement using the variable provided.

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false

console.log(fullHouse(hand1))



// b) Create the function that makes the test pass.
