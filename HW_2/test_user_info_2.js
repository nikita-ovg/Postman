//Вставить параметр salary из окружения в request

//Вставить параметр age из окружения в age

//Вставить параметр name из окружения в name

//Статус код 200
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

//Спарсить response body в json
var cent = JSON.parse(responseBody);

//Спарсить request
var req = request.data

//Проверить, что json response имеет параметр start_qa_salary
pm.test("Check in response start_qa_salary", function () {
    pm.expect(cent).to.have.property("start_qa_salary");
});

//Проверить, что json response имеет параметр qa_salary_after_6_months
pm.test("Check in response qa_salary_after_6_months", function () {
    pm.expect(cent).to.have.property("qa_salary_after_6_months");
});

//Проверить, что json response имеет параметр qa_salary_after_12_months
pm.test("Check in response qa_salary_after_12_months", function () {
    pm.expect(cent).to.have.property("qa_salary_after_12_months");
});

//Проверить, что json response имеет параметр qa_salary_after_1.5_year
pm.test("Check in response qa_salary_after_1.5_year", function () {
    pm.expect(cent).to.have.property("qa_salary_after_1.5_year");
});

//Проверить, что json response имеет параметр qa_salary_after_3.5_years
pm.test("Check in response qa_salary_after_3.5_years", function () {
    pm.expect(cent).to.have.property("qa_salary_after_3.5_years");
});

//Проверить, что json response имеет параметр person
pm.test("Check in response person", function () {
    pm.expect(cent).to.have.property("person");
});

//Проверить, что параметр start_qa_salary равен salary из request (salary забрать из request.)
var request = request.data
pm.test("Check start_qa_salary in response = salary in request", function () {
    pm.expect(+request.salary).to.eql(cent.start_qa_salary);
});

//Проверить, что параметр qa_salary_after_6_months равен salary*2 из request (salary забрать из request.)
pm.test("Check qa_salary_after_6_months in response = salary*2 in request", function () {
    pm.expect(request.salary*2).to.eql(cent.qa_salary_after_6_months);
});

//Проверить, что параметр qa_salary_after_12_months равен salary*2.7 из request (salary забрать из request.)
pm.test("Check qa_salary_after_12_months in response = salary*2.7 in request", function () {
    pm.expect(request.salary*2.7).to.eql(cent.qa_salary_after_12_months);
});

//Проверить, что параметр qa_salary_after_1.5_year равен salary*3.3 из request (salary забрать из request.)
pm.test("Check qa_salary_after_1.5_year in response = salary*3.3 in request", function () {
    pm.expect(request.salary*3.3).to.eql(cent["qa_salary_after_1.5_year"]);
});

//Проверить, что параметр qa_salary_after_3.5_years равен salary*3.8 из request (salary забрать из request.)
pm.test("Check qa_salary_after_3.5_years in response = salary*3.8 in request", function () {
    pm.expect(request.salary*3.8).to.eql(cent["qa_salary_after_3.5_years"]);
});

//Проверить, что в параметре person, 1-й элемент из u_name равен salary из request (salary забрать из request.)
pm.test("Check param person 1st element u_name = salary in request", function () {
    pm.expect(+request.salary).to.eql(cent.person.u_name[1]);
});

//Проверить, что что параметр u_age равен age из request (age забрать из request.)
pm.test("Check u_age = age in request", function () {
    pm.expect(+request.age).to.eql(cent.person.u_age);
});

//Проверить, что параметр u_salary_5_years равен salary*4.2 из request (salary забрать из request.)
pm.test("Check u_salary_5_years = salary*4.2 in request", function () {
    pm.expect(request.salary*4.2).to.eql(cent.person.u_salary_5_years);
});

//Написать цикл который выведет в консоль по порядку элементы списка из параметра person.
for (let key in cent.person)
    console.log(key, cent.person[key]);
