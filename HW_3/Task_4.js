Response
{
    "age": 24,
    "daily_food": 0.684,
    "daily_sleep": 142.5,
    "name": "Milana"
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
      "default": 24,
      "examples": [
        24
      ]
    },
    "daily_food": {
      "type": "number",
      "default": 0.684,
      "examples": [
        0.684
      ]
    },
    "daily_sleep": {
      "type": "number",
      "default": 142.5,
      "examples": [
        142.5
      ]
    },
    "name": {
      "type": "string",
      "default": "Milana",
      "examples": [
        "Milana"
      ]
    }
  },
  "required": [
    "age",
    "daily_food",
    "daily_sleep",
    "name"
  ],
  "additionalProperties": false
}

let elka = pm.response.json();

pm.test('Schema is valid', function () {
    pm.expect(tv4.validate(elka, schema)).to.be.true;
});

//В ответе указаны коэффициенты умножения weight, напишите тесты по проверке правильности результата перемножения на коэффициент
let rero = request.data;
let wei = rero.weight;
let daily_food = elka.daily_food;
let daily_sleep = elka.daily_sleep;

pm.test("Factor 0.012 is correct", function () {
    pm.expect(daily_food).to.eql(wei*0.012);
});

pm.test("Factor 2.5 correct", function () {
    pm.expect(daily_sleep).to.eql(wei*2.5);
});
