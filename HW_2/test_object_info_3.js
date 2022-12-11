// Статус код 200
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

// Спарсить response body в json.
var lolip = JSON.parse(responseBody);

// Спарсить request
var request = request.data

// Проверить, что name в ответе равно name in request (name вбить руками.)
pm.test("Check name in response = name in request", function () {
    var lolip = JSON.parse(responseBody);
    pm.expect(lolip.name).to.eql("Nikita");
});
// Проверить, что age в ответе равно age in request (age вбить руками.)
pm.test("Check age in response = age in request", function () {
    var repop = pm.response.json();
    pm.expect(repop.age).to.eql("26");
});
// Проверить, что salary в ответе равно salary in request (salary вбить руками.)
pm.test("Check salary in response = salary in request", function () {
    var bulka = pm.response.json();
    pm.expect(bulka.salary).to.eql(7000);
});

// Вывести в консоль параметр family из response.
var lolip = JSON.parse(responseBody);
let family = lolip.family
console.log("resp_family = " , family)

//Проверить, что у параметра dog есть параметры name
pm.test("Dog name", function () {
    var jsonData = pm.response.json().family.pets.dog;
    pm.expect(jsonData.dog).to.include+("name");
});

//Проверить, что у параметра dog есть параметры age
pm.test("Dog age", function () {
    var jsonData = pm.response.json().family.pets.dog;
    pm.expect(jsonData.dog).to.include+("age");
});

//Проверить, что параметр name имеет значение Luky
pm.test("Name Luky", function () {
    var jsonData = pm.response.json().family.pets.dog;
    pm.expect(jsonData.name).to.eql("Luky");
});

//Проверить, что параметр age имеет значение 4
pm.test("Age = 4", function () {
    var jsonData = pm.response.json().family.pets.dog;
    pm.expect(jsonData.age).to.eql(4);
});
