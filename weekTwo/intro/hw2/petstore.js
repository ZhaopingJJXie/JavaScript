
/**
 * This function should calculate the total amount of pet food that should be
 * ordered for the upcoming week.
 * @param numAnimals the number of animals in the store
 * @param avgFood the average amount of food (in kilograms) eaten by the animals
 * 				each week
 * @return the total amount of pet food that should be ordered for the upcoming
 * 				 week, or -1 if the numAnimals or avgFood are less than 0 or non-numeric
 */
function calculateFoodOrder(numAnimals, avgFood) {
    // IMPLEMENT THIS FUNCTION!
    //if numAnimals can not be converted to a number
    // or the number is negative, return -1
    if (isNaN(numAnimals) || Number(numAnimals)<0 ){
      return -1;
    }
    else if (isNaN(avgFood) || Number(avgFood) < 0){
      //if the avergae food can not be converted to a number
      //or the aveage food is negative, return -1
      return -1;
    }
    else{
      //else. return the multiplication of numOfAnimals and avgFood
      return Number(numAnimals) * Number(avgFood);
    }
}

/**
 * Determines which day of the week had the most nnumber of people visiting the
 * pet store. If more than one day of the week has the same, highest amount of
 * traffic, an array containing the days (in any order) should be returned.
 * (ex. ["Wednesday", "Thursday"]). If the input is null or an empty array, the function
 * should return null.
 * @param week an array of Weekday objects
 * @return a string containing the name of the most popular day of the week if there is only one most popular day, and an array of the strings containing the names of the most popular days if there are more than one that are most popular
 */
function mostPopularDays(week) {
    // IMPLEMENT THIS FUNCTION!
    if (week == null || week.length == 0){
      //if week is null or week is empty, return null
      return null;
    }else {
      //create an array variable to store the weekDay object,
      //with the first element from week as elements
    var days = [week[0].name];
    var traffics = [week[0].traffic];
    //loop all the remainning element from week to get the maximum traffic days
    for ( i =1 ; i < week.length; i++){
      if(week[i].traffic > traffics[traffics.length-1]){
        //if the next item has more traffic than the previous days
        //remove the previous days
        traffics=[];
        days=[];
        //add the ith day to the array
        traffics.push(week[i].traffic);
        days.push(week[i].name);
      }else if(week[i].traffic == traffics[traffics.length-1]){
        //if the ith day's traffic is the same as previous day
        //add it to the last of the arrays
        traffics.push(week[i].traffic)
        days.push(week[i].name);
      }
        else{
            continue;
        }
    }//if the array has only one element, return the element
     if(days.length == 1){
       return days[0];
     }
     if(days.length >1){
       //else, return the whole array
       return days;
     }
     }
}


/**
 * Given three arrays of equal length containing information about a list of
 * animals - where names[i], types[i], and breeds[i] all relate to a single
 * animal - return an array of Animal objects constructed from the provided
 * info.
 * @param names the array of animal names
 * @param types the array of animal types (ex. "Dog", "Cat", "Bird")
 * @param breeds the array of animal breeds
 * @return an array of Animal objects containing the animals' information, or an
 *         empty array if the array's lengths are unequal or zero, or if any array is null.
 */
function createAnimalObjects(names, types, breeds) {
    // IMPLEMENT THIS FUNCTION!
    var animals = [];
    if (names== null || types == null || breeds == null){
      return animals;
    }
    else if (names.length == 0 || types.length== 0 || breeds.length == 0){
      return animals;
    }
    else if(names.length!= types.length ||names.length != breeds.length
      || types.length != breeds.length){
      return animals;
    }
    else {
    for (i = 0; i < names.length; i++){
      //create a variable for the ith animal
      var ani = new Animal(names[i], types[i], breeds[i]);
      // add the animal to the rear of the array
      animals.push(ani);
    }
    return animals;}
}

/////////////////////////////////////////////////////////////////
//
//  Do not change any code below here!
//
/////////////////////////////////////////////////////////////////


/**
 * A prototype to create Weekday objects
 */
function Weekday (name, traffic) {
    this.name = name;
    this.traffic = traffic;
}

/**
 * A prototype to create Item objects
 */
function Item (name, barcode, sellingPrice, buyingPrice) {
     this.name = name;
     this.barcode = barcode;
     this.sellingPrice = sellingPrice;
     this.buyingPrice = buyingPrice;
}
 /**
  * A prototype to create Animal objects
  */
function Animal (name, type, breed) {
    this.name = name;
     this.type = type;
     this.breed = breed;
}


/**
 * Use this function to test whether you are able to run JavaScript
 * from your browser's console.
 */
function helloworld() {
    return 'hello world!';
}
