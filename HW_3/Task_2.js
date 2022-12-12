Response
{
    "person": {
        "u_age": 27,
        "u_name": [
            "Nikita",
            5000,
            27
        ],
        "u_salary_1_5_year": 20000
    },
    "qa_salary_after_12_months": 14500.0,
    "qa_salary_after_6_months": 10000,
    "start_qa_salary": 5000
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
    "person": {
      "type": "object",
      "properties": {
        "u_age": {
          "type": "integer",
          "default": 27,
          "examples": [
            27
          ]
        },
        "u_name": {
          "type": "array",
          "items": {
            "type": [
              "string",
              "number"
            ]
          }
        },
        "u_salary_1_5_year": {
          "type": "integer",
          "default": 20000,
          "examples": [
            20000
          ]
        }
      },
      "required": [
        "u_age",
        "u_name",
        "u_salary_1_5_year"
      ],
      "additionalProperties": false
    },
    "qa_salary_after_12_months": {
      "type": "integer",
      "default": 14500,
      "examples": [
        14500
      ]
    },
    "qa_salary_after_6_months": {
      "type": "integer",
      "default": 10000,
      "examples": [
        10000
      ]
    },
    "start_qa_salary": {
      "type": "integer",
      "default": 5000,
      "examples": [
        5000
      ]
    }
  },
  "required": [
    "person",
    "qa_salary_after_12_months",
    "qa_salary_after_6_months",
    "start_qa_salary"
  ],
  "additionalProperties": false
}

let valid = pm.response.json();

pm.test('Schema is valid', function () {
    pm.expect(tv4.validate(valid, schema)).to.be.true;
});

//В ответе указаны коэффициенты умножения salary, напишите тесты по проверке правильности результата перемножения на коэффициент.
let yuko = JSON.parse(request.data);
let sal = yuko.salary;
let qa_salary_after_6_months = valid.qa_salary_after_6_months;
let qa_salary_after_12_months = valid.qa_salary_after_12_months;
let u_salary_1_5_year = valid.person.u_salary_1_5_year;

pm.test("Factor 2 is correct", function () {
    pm.expect(qa_salary_after_6_months).to.eql(sal*2);
});

pm.test("Factor 2.9 correct", function () {
    pm.expect(qa_salary_after_12_months).to.eql(sal*2.9);
});

pm.test("Factor 4 is correct", function () {
    pm.expect(u_salary_1_5_year).to.eql(sal*4);
});
//Достать значение из поля 'u_salary_1.5_year' и передать в поле salary запроса /get_test_user
pm.environment.set("salary", valid.person.u_salary_1_5_year);
