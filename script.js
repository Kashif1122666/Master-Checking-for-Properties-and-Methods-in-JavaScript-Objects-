//How to check properties in an object

// Method 1: using the in operator  
// The in operator checks whether a property exists in an object or its prototype
// chain.

// Syntax:
    // "propertyName" in objectName

// Example:    
  var car = {
    make: "Toyota",
    model: "Corola"
  };

console.log("make" in car); // Output: true  
console.log("color" in car); // Output: false
// The in operator returns true if the property exists in the object (or its prototype),
// and false if it doesn't.

// Method 2: Using the hasOwnProperty() Method  
//      hasOwnProperty() checks if  a property exists directly on the object, ignoring
//      properties that are inherited from the prototype chain.

//      Syntax :
//         objectName.hasOwnProperty("propertyName")

   //      Example:    
      var car = {
        make: "Toyota",
        model: "Corola"
      };  

    console.log(car.hasOwnProperty("make")); // Output:true  
    console.log(car.hasOwnProperty("tostring")); // Output false
    // tostring is an inherited method from the object's prototype, so hasOwnProperty()
    // returns false for it , even though it can be used by the object.

    // Method 3:   Using typeof to check for methods
    // To check if an object has a method , you can use the typeof operator , which returns
    // the type of the property or method.
    // If the method exists , typeof will return "function"

    // Syntax:
    //      typeof objectName.methodName === "function"
    // Example:
      var car = {
        make: "Toyota",
        model: "Corola",
        start: function() {
          console.log("car is starting");
        }
      };

    console.log(typeof car.start === "function"); // Output : true  
    console.log(typeof car.drive === "function"); // Output : false
    // This checks if the start method exists and returns true , but drive doesn't exist, 
    // so it returns false.    

    // Method 4: Using undefined check  
    //     You can also check for a property or method by comparing it to undefined.

    //     Syntax :
    //       if (objectName.propertyName !== undefined) {
    //          // property exists
    //       }  
    //   Example:   
        var person = {
          name : "John",
          age  :  30
        };

        if(person.name !== undefined){
          console.log("Name exists");
        }
        
        if(person.gender === undefined) {
             console.log("Gender does not exist");
        }
        //   This approach checks if a  property or method is explicitly undefined . if it is, the
        // property or method doesn't exist.

 // 3. Difference Between in and hasOwnProperty()
        // The key Difference is that the in operator checks both the object's properties and 
        // its prototype chain, whereas hasOwnProperty() only checks the object's own properties.

        //     Example:    
    var car = {
      make: "Toyota",
      model: "Corola"
    };  

  console.log("toString" in car) // Output true 
  console.log(car.hasOwnProperty("toString")); // Output false

//   The in operator finds toString because it's inherited , while hasOwnProperty() does 
//   not because toString is not directly defined on the car object
