var varTest = "Hello";
let letTest = "World";
const constTest = "Never Change!"; // Stores "Never Change!"
const constNumber = 42; // Stores the number 42
const constArray = [1,2,3];

function scopeTester() {
  console.log(`Global Variables:
    varTest: ${varTest}
    letTest: ${letTest}
    constTest: ${constTest}`);

    if (varTest == "Hello") {
      var localVar = "Local Hello";
      let localLet = "Local Let";
    }
    console.log(`Local Variables:`);
    console.log(`localVar: ${localVar}`);
    // console.log(`localLet: ${localLet}`); // Error - Not in Scope

    // constTest = "Changed Value";
    // constNumber = 24;
    // constArray.push(42); // This works!
    // constArray = ["Mark"]; // This won't work.
    constArray[1] = "Hello";
    const newNumber = constNumber + 10;

    let foundText = "";
    if (varTest == "Hello") {
      foundText = "Greeting";
    } else {
      foundText = "Something Else";
    }
    const foundText = (varTest == "Hello") ? "Greeting" : "Something Else";
    console.log(`Found Text: ${foundText}`);

}
