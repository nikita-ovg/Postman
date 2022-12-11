// Статус код 200
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

// Спарсить response body в json.
var lolip = JSON.parse(responseBody);

// Спарсить request
var mojo = pm.request.url.query.toObject();

// Проверить, что name в ответе равно name in request (name вбить руками.)
pm.test("Check name in response = name in request", function () {
    var lolip = JSON.parse(responseBody);
    pm.expect(lolip.name).to.eql("Nikita");
});
// Проверить, что age в ответе равно age in request (age вбить руками.)
pm.test("Check age in response = age in request", function () {
    var repop = pm.response.json();
    pm.expect(repop.age).to.eql(26);
});

//Вывести в консоль параметр salary из request
var mojo = pm.request.url.query.toObject();
let my_salary = mojo.salary
console.log ('my_salary = ' , my_salary)

//Вывести в консоль параметр salary из response
var cut = JSON.parse(responseBody);
let salary = cut.salary
console.log("resp_salary = " , salary)

//Вывести в консоль 0-й элемент параметра salary из response
var cent = JSON.parse(responseBody);
let sup = cent.salary[0]
console.log("resp_salary_0 = " , sup)

//Вывести в консоль 1-й элемент параметра salary параметр salary из response
var vim = JSON.parse(responseBody);
let xev = vim.salary[1]
console.log("resp_salary_1 = " , xev)

//Вывести в консоль 2-й элемент параметра salary параметр salary из response
var ben = JSON.parse(responseBody);
let nun = ben.salary[2]
console.log("resp_salary_2 = " , nun)

//Проверить, что 0-й элемент параметра salary равен salary из request (salary забрать из request.)
pm.test("Salary_from_response_0 = salary_from_request", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.salary[0]).to.eql(4000);
});

//Проверить, что 1-й элемент параметра salary равен salary*2 из request (salary забрать из request.)
pm.test("Salary_from_response_1 = salary*2_from_request", function () {
    pm.expect(+salary[1]).to.eql(mojo.salary*2)
});

//Проверить, что 2-й элемент параметра salary равен salary*3 из request (salary забрать из request.)
pm.test("Salary_from_response_2 = salary*3_from_request", function () {
    pm.expect(+salary[2]).to.eql(mojo.salary*3);
});

//Создать в окружении переменную name
pm.environment.get("name", lolip.name);

//Создать в окружении переменную age
pm.environment.get("age", lolip.age);

//Создать в окружении переменную salary
pm.environment.get("salary", lolip.salary);

// Передать в окружение переменную name
var name = lolip.name
pm.environment.set("name", name);

//Передать в окружение переменную age
var age = lolip.age
pm.environment.set("age", age);

//Передать в окружение переменную salary
pm.environment.set("salary", lolip.salary[0]);

//Написать цикл который выведет в консоль по порядку элементы списка из параметра salary
for (i=0; i < lolip.salary.length; i++){
console.log("salary_cycle", lolip.salary[i])
}
