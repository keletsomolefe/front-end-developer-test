/**
 * QUESTION 2
 * ==========
 *
 * Complete the function 'findIntersection' below to find the intersection of two arrays. An intersection would be
 * the common elements that exists within both arrays. In this case, make sure that the elements returned are
 * also unique!
 *
 */

var firstArray = [2, 2, 4, 1];
var secondArray = [1, 2, 0, 2];

function findIntersection (arr1, arr2) {

    // TODO: [Your code here]
    /*
        remove duplicates
    */
    arr1 = arr1.filter(function(elem, index, self) {
        return index == self.indexOf(elem);
    });

    /*
        sort arrays
    */
    arr1 = arr1.sort();
    arr2 = arr2.sort();

    var output = [];
  
    while(arr1.length>0 && arr2.length>0)
    {  
        if  (arr1[0]<arr2[0]){ 
            arr1.shift(); 
        }
        else if (arr1[0]>arr2[0]){
            arr2.shift();
        }
        else{
            output.push(arr1.shift());
            arr2.shift();
        }
    }

    return output;
}

var intersection = findIntersection(firstArray, secondArray);
console.log(intersection);
