## Endpoint

**For list all collections**

GET - /\
\
response
```json
[
    {
        "name": "test",
        "type": "collection",
        "options": {},
        "info": {
            "readOnly": false,
            "uuid": "uTcdY1/ySAyiZO5ZTEMzTg=="
        },
        "idIndex": {
            "v": 2,
            "key": {
                "_id": 1
            },
            "name": "_id_",
            "ns": "test.test"
        }
    }
]
```

**Get records for collection**

GET - /test/1\
test - name collection\
1 - page\
\
response
```json
[
    {
        "_id": "5e411752f9cded7619cf9962",
        "name": "Test",
        "description": "This is test",
        "time": 1581323099
    },
    {
        "_id": "5e4123fe9bc9aa09a07f27d2",
        "name": "Test",
        "description": "This is test",
        "time": 1581323099
    }
]
```

**Insert record**

POST - /test\
test - name collection\
\
request
```json
{
	"name":"Test",
	"description":"This is test",
	"time": 1581323099
}
```
response
```json
{
    "result": {
        "n": 1,
        "ok": 1
    },
    "connection": {
        "id": 0,
        "host": "127.0.0.1",
        "port": 27017
    },
    "ops": [
        {
            "name": "Test",
            "description": "This is test",
            "time": 1581323099,
            "_id": "5e4124259bc9aa09a07f27d3"
        }
    ],
    "insertedCount": 1,
    "insertedId": "5e4124259bc9aa09a07f27d3",
    "n": 1,
    "ok": 1
}
```

**Get record**

GET - /test/5e4117328262d875fda2cf25\
test - name collection\
5e4117328262d875fda2cf25 - identification\
\
response
```json
{
    "_id": "5e4124259bc9aa09a07f27d3",
    "name": "Test",
    "description": "This is test",
    "time": 1581323099
}
```

**Update record**

PATCH - /test\
test - name collection\
5e4117328262d875fda2cf25 - identification\
\
request
```json
{
	"name":"Update",
	"description":"Update!!!!",
	"time": 1666666666
}
```
response
```json
{
    "result": {
        "n": 1,
        "nModified": 1,
        "ok": 1
    },
    "connection": {
        "id": 0,
        "host": "127.0.0.1",
        "port": 27017
    },
    "modifiedCount": 1,
    "upsertedId": null,
    "upsertedCount": 0,
    "matchedCount": 1,
    "n": 1,
    "nModified": 1,
    "ok": 1
}
```

**Delete record**

POST - /test\
test - name collection\
5e4117328262d875fda2cf25 - identification\
\
response
```json
{
    "result": {
        "n": 1,
        "ok": 1
    },
    "connection": {
        "id": 0,
        "host": "127.0.0.1",
        "port": 27017
    },
    "n": 1,
    "ok": 1
}
```

**Filter Records**

PUT - /test/1\
test - name collection\
1 - page\
\
request
```json
{
	"name": "Test"
}
```

response
```json
[
    {
        "_id": "5e411752f9cded7619cf9962",
        "name": "Test",
        "description": "This is test",
        "time": 1581323099
    },
    {
        "_id": "5e4123fe9bc9aa09a07f27d2",
        "name": "Test",
        "description": "This is test",
        "time": 1581323099
    },
    {
        "_id": "5e4129ba1c52dd1176c226f3",
        "name": "Test"
    }
]
```