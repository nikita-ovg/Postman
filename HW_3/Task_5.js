Response
{
    "age": "26",
    "family": {
        "children": [
            [
                "Alex",
                24
            ],
            [
                "Kate",
                12
            ]
        ],
        "u_salary_1_5_year": 80000
    },
    "name": "Nikita",
    "salary": 20000
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
      "type": "string",
      "default": "26",
      "examples": [
        "26"
      ]
    },
    "family": {
      "type": "object",
      "properties": {
        "children": {
          "type": "array",
          "items": {
            "type": "array",
            "items": {
              "type": [
                "string",
                "number"
              ]
            }
          }
        },
        "u_salary_1_5_year": {
          "type": "integer",
          "default": 80000,
          "examples": [
            80000
          ]
        }
      },
      "required": [
        "children",
        "u_salary_1_5_year"
      ],
      "additionalProperties": false
    },
    "name": {
      "type": "string",
      "default": "Danil",
      "examples": [
        "Danil"
      ]
    },
    "salary": {
      "type": "integer",
      "default": 20000,
      "examples": [
        20000
      ]
    }
  },
  "required": [
    "age",
    "family",
    "name",
    "salary"
  ],
  "additionalProperties": false
}

let tururu = pm.response.json();

pm.test('Schema is valid', function () {
    pm.expect(tv4.validate(tururu, schema)).to.be.true;
});

//Проверить что значение поля name = значению переменной name из окружения
pm.test("Check property name = property environment name", function () {
    pm.expect(tururu.name).to.eql(pm.environment.get("name"));
});

//Проверить что значение поля age в ответе соответсвует отправленному в запросе значению поля age
let requestData = request.data

pm.test("Check property age in response = property age in request", function () {
    pm.expect(tururu.age).to.eql(requestData.age);
});
