// Статус код 200
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

// Спарсить response body в json.
var lolip = JSON.parse(responseBody);
// Проверить, что name в ответе равно name in request (name вбить руками.)
pm.test("Check name in response = name in request", function () {
    var lolip = JSON.parse(responseBody);
    pm.expect(lolip.name).to.eql("nikita");
});
// Проверить, что age в ответе равно age in request (age вбить руками.)
pm.test("Check age in response = age in request", function () {
    var repop = pm.response.json();
    pm.expect(repop.age).to.eql("26");
});
// Проверить, что salary в ответе равно salary in request (salary вбить руками.)
pm.test("Check salary in response = salary in request", function () {
    var bulka = pm.response.json();
    pm.expect(bulka.salary).to.eql(4000);
});
// Спарсить request
var request = request.data
// Проверить, что name в ответе равно name in request (name забрать из request)
pm.test("Check name in response = name in request", function () {
    var kilo = JSON.parse(responseBody);
    pm.expect(kilo.nikita).to.eql(request.nikita);
});
// Проверить, что age в ответе равно age in request (age забрать из request)
pm.test("Check age in response = age in request", function () {
    var rep = pm.response.json();
    pm.expect(rep.age).to.eql(request.age);
});
// Проверить, что salary в ответе равно salary in request (salary забрать из request)
pm.test("Check salary in response = salary in request", function () {
    var bul = pm.response.json();
    pm.expect(bul.salary).to.eql(+request.salary);
});

// Вывести в консоль параметр family из response.
var lolip = JSON.parse(responseBody);
let family = lolip.family
console.log("resp_family = " , family)
// Проверить что u_salary_1_5_year в ответе равно salary*4 (salary забрать из request)
pm.test("Check u_salary_1_5_year in response = salary*4", function () {
    var lolip = JSON.parse(responseBody).family;
    pm.expect(lolip.u_salary_1_5_year).to.eql(request.salary*4);
});
