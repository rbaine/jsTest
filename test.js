var arr = [{id:1, name:"Rod"}, {id:2, name:"Cyndy"}, {id:3, name:"Connor"}, {id:4, name:"Daxter"}];

//todo: i added this sort function back in - RB
arr.sort(function (a, b) {
	return a.name > b.name;
	});

var newArr = arr.filter( function name(element, index, array) {
	if (element.id < 2) {
		return element;
	}
});


// todo: clean up this file
console.log("This is the original array...");
console.log(arr);
console.log("\n");
console.log("This is the filtered array.");
console.log(newArr);


//todo: added this function... :) :)
var x = function(){
	return "super cool...";
	return "super cool node app...";
};

console.log(x());

// testing VS Code GIT integration and debug features
// testing wincred


function test(a, b) {

	return a * b;

}


console.log(test(5,3));
