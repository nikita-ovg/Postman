Response
{"Cur_Abbreviation":"PHP","Cur_ID":502,"Cur_Name":"\u0424\u0438\u043b\u0438\u043f\u043f\u0438\u043d\u0441\u043a\u0438\u0445 \u043f\u0435\u0441\u043e","Cur_OfficialRate":5.039,"Cur_Scale":100,"Date":"2021-09-19T00:00:00"}

Tests

//Статус код 200
pm.test("200", function () {
    pm.response.to.have.status(200);
});

//Проверка структуры json в ответе
const schema = {
    "type": "object",
    "properties": {
        "Cur_Abbreviation": {
            "type": "string"
        },
        "Cur_ID": {
            "type": "integer"
        },
        "Cur_Name": {
            "type": "string"
        },
        "Cur_OfficialRate": {
            "type": "number"
        },
        "Cur_Scale": {
            "type": "integer"
        },
        "Date": {
            "type": "string"
        }
    },
    "required": [
        "Cur_Abbreviation",
        "Cur_ID",
        "Cur_Name",
        "Cur_OfficialRate",
        "Cur_Scale",
        "Date"
    ],
    "additionalProperties": false
}

let byn = pm.response.json();

pm.test('JSON schema is valid', function () {
    pm.expect(tv4.validate(byn, schema)).to.be.true;
});
