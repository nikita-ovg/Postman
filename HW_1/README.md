# Homework_1. Postman

Protocol: http
IP: 162.55.220.72
Port: 5005

## EP_1

Method: GET
EndPoint: /get_method
request url params: 
 name: str
 age: int

**response:**
```sh
[
    “Str”,
    “Str”
]
```

## EP_2

Method: POST
EndPoint: /user_info_3
request form data: 
 name: str
 age: int
 salary: int
 
 **response:**
 
```sh
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
        "u_salary_1_5_year": 20000
    },
    "name": "nikita",
    "salary": 5000
}
```
## EP_3

Method: GET
EndPoint: /object_info_1
request url params: 
 name: str
 age: int
 weight: int
 
**response:**
 
```sh
{
    "age": 26,
    "daily_food": 0.864,
    "daily_sleep": 180.0,
    "name": "Nikita"
}
```

## EP_4

Method: GET
EndPoint: /object_info_2
request url params: 
 name: str
 age: int
 salary: int
 
**response:**
 
```sh
{
    "person": {
        "u_age": 26,
        "u_name": [
            "Nikita",
            6000,
            26
        ],
        "u_salary_5_years": 25200.0
    },
    "qa_salary_after_1.5_year": 19800.0,
    "qa_salary_after_12_months": 16200.000000000002,
    "qa_salary_after_3.5_years": 22800.0,
    "qa_salary_after_6_months": 12000,
    "start_qa_salary": 6000
}
```

## EP_5

Method: GET
EndPoint: /object_info_3
request url params: 
 name: str
 age: int
 salary: int
 
**response:**
 
```sh
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
        "pets": {
            "cat": {
                "age": 3,
                "name": "Sunny"
            },
            "dog": {
                "age": 4,
                "name": "Luky"
            }
        },
        "u_salary_1_5_year": 28000
    },
    "name": "Nikita",
    "salary": 7000
}
```

## EP_6

Method: GET
EndPoint: /object_info_4
request url params: 
 name: str
 age: int
 salary: int
 
**response:**
 
```sh
{
    "age": 26,
    "name": "Nikita",
    "salary": [
        4000,
        "8000",
        "12000"
    ]
}
```

## EP_7

Method: POST
EndPoint: /user_info_2
request form data: 
 name: str
 age: int
 salary: int
 
**response:**
 
```sh
{
    "person": {
        "u_age": 26,
        "u_name": [
            "Nikita",
            3000,
            26
        ],
        "u_salary_5_years": 12600.0
    },
    "qa_salary_after_1.5_year": 9900.0,
    "qa_salary_after_12_months": 8100.000000000001,
    "qa_salary_after_3.5_years": 11400.0,
    "qa_salary_after_6_months": 6000,
    "start_qa_salary": 3000
}
```
