var arr = [{id:1, name:"Rod"}, {id:2, name:"Cyndy"}, {id:3, name:"Connor"}, {id:4, name:"Daxter"}];

//arr.sort(function (a, b) {
//	return a.name > b.name;
//	});
	
var newArr = arr.filter( function name(element, index, array) {
	if (element.id > 2) {
		return element;
	};	
});
	

console.log(arr);
console.log("\n");
console.log(newArr);

// testing VS Code GIT integration and debug features

