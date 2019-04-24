// Сортировка треугольников
// Вывести треугольники в порядке убывания их площади.

// Входные параметры: массив объектов треугольник
// Выход: упорядоченный массив имён треугольников

// Примечание:
// •	Расчет площади треугольника должен производится по формуле Герона.
// •	Каждый треугольник определяется именами вершин и длинами его сторон. 
// •	Приложение должно обрабатывать ввод чисел с плавающей точкой:
// { 
//   vertices: ‘ABC’,
//   a: 10,
//   b: 20,
//   c: 22.36
// }

var triangle1 = {
	a: 90,
	b: 60,
	c: 40.36,
	name: "part1"
};

var triangle2 = {
	a: 40,
	b: 25,
	c: 27.40,
	name: "part2"
};

var triangle3 = {
	a: 20,
	b: 30,
	c: 31.46,
	name: "part3"
};

function calculateSquare(triangle) {
	var P = (triangle["a"] + triangle["b"] + triangle["c"]) / 2;
	var temporaryExpression = P * (P - triangle["a"]) * (P - triangle["b"]) * (P - triangle["c"]);
	// console.log(temporaryExpression);
	var S = Math.sqrt(temporaryExpression);

    return {
    	square: S,
    	name: triangle["name"]
    };
}

var triangleWithSquare1 = calculateSquare(triangle1);
var triangleWithSquare2 = calculateSquare(triangle2);
var triangleWithSquare3 = calculateSquare(triangle3);

var trianglesWithSquare = [triangleWithSquare1, triangleWithSquare2, triangleWithSquare3];

// Sorting array
var arrayOfSortingSquares = trianglesWithSquare.sort(function(a, b) {
	return b["square"] - a["square"];
});

// transform array of objects to array of names
var result = arrayOfSortingSquares.map(function(item) {
	return item.name;
});

console.log(result);









