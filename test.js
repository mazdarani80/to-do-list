
numbers = [1, 2, 3];
numbersCopy = [];
i = -1;
while (++i < numbers.length) {
  numbersCopy[i] = numbers[i];
}
console.log(numbers, numbersCopy);
////////////////////////////////////////////////////
numbers = [1, 2, 3];
numbersCopy = [];
for (i = 0; i < numbers.length; i++) {
  numbersCopy[i] = numbers[i];
}
console.log(numbers, numbersCopy);
////////////////////////////////////////////
const deepClone = obj => {
    if (obj === null) return null;
    let clone = Object.assign({}, obj);
    Object.keys(clone).forEach(
      key =>
        (clone[key] =
          typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key])
    );
    if (Array.isArray(obj)) {
      clone.length = obj.length;
      return Array.from(clone);
    }
    return clone;
  };
//////////////////////////////////////////

function cloneObject(obj) {

    if (obj === null || typeof obj !== 'object') {
    return obj; 
    };

    let temp = obj.constructor(); 
    for (var key in obj) {   
    temp[key] = cloneObject(obj[key]);  
    }
    return temp;
    }  

    let mohammad = {
    name: "mohammad",
    age: 21
    };
    let copy = (cloneObject(mohammad));
    copy.name = "mohammad";
    console.log(mohammad);
    console.log(copy);
///////////////////////////////////////////////