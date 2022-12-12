Responce
{
    "age": 25,
    "name": "Sergey",
    "salary": [
        1500,
        "3000",
        "4500"
    ]
}

Tests

//Статус код 200
pm.test("200", function () {
    pm.response.to.have.status(200);
});

//Проверка структуры json в ответе
const schema = {
    "type": "object",
  "properties": {
    "age": {
      "type": "integer",
      "default": 25,
      "examples": [
        25
      ]
    },
    "name": {
      "type": "string",
      "default": "Sergey",
      "examples": [
        "Sergey"
      ]
    },
    "salary": {
      "type": "array",
      "items": {
        "type": [
          "number",
          "string"
        ]
      }
    }
  },
  "required": [
    "age",
    "name",
    "salary"
  ],
  "additionalProperties": false
}

let sneg = pm.response.json();

pm.test('Schema is valid', function () {
    pm.expect(tv4.validate(sneg, schema)).to.be.true;
});

//В ответе указаны коэффициенты умножения salary, напишите тесты по проверке правильности результата перемножения на коэффициент
let cer = request.data;
let salary = parseInt(cer.salary);

pm.test("Factor 1 is correct", function () {
    pm.expect(sneg.salary[0]).to.eql(salary);
});

pm.test("Factor 2 correct", function () {
    pm.expect(Number(sneg.salary[1])).to.eql(salary*2);
});

pm.test("Factor 3 is correct", function () {
    pm.expect(Number(sneg.salary[2])).to.eql(salary*3);
});

//Проверить, что 2-й элемент массива salary больше 1-го и 0-го
pm.test("Check the second array element is greater than the zero element", function() {
    pm.expect(parseInt(sneg.salary[2])).to.be.greaterThan(parseInt(sneg.salary[0]));
});

pm.test("Check the second array element is greater than the first element", function() {
    pm.expect(parseInt(sneg.salary[2])).to.be.greaterThan(parseInt(sneg.salary[1]));
});
