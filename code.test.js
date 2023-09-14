const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');


const testSearch =
    jsc.forall("array nat", function(arr) {
        arr.sort(function(a,b){return a -b}); //makes sure the array is sorted
        if(arr.length > 0) {
            return binarySearch(arr, arr[0]) === 0 || arr[0]== arr[binarySearch(arr,arr[0])]; //deals with duplicates
        } else {
            return binarySearch(arr, "foo") === -1;
        }
    });

jsc.assert(testSearch);

//Help recieved from James Osborn on making sure the array is sorted and duplicates are dealt with 