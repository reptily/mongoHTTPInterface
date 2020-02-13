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

DELETE - /test\
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

**Insert many records**

POST - /test\
test - name collection\
\
request
```json
[
	{
	"name":"Test One",
	"description":"This is test one",
	"time": 1581323099
	},
	{
	"name":"Test Two",
	"description":"This is test two",
	"time": 1581323099
	}
]
```
response
```json
{
    "result": {
        "ok": 1,
        "n": 2
    },
    "ops": [
        {
            "name": "Test One",
            "description": "This is test one",
            "time": 1581323099,
            "_id": "5e4141e1d06b682e8f006c9f"
        },
        {
            "name": "Test Two",
            "description": "This is test two",
            "time": 1581323099,
            "_id": "5e4141e1d06b682e8f006ca0"
        }
    ],
    "insertedCount": 2,
    "insertedIds": {
        "0": "5e4141e1d06b682e8f006c9f",
        "1": "5e4141e1d06b682e8f006ca0"
    }
}
```

**Update many records**

PATCH - /test\
test - name collection\
\
*Key json*
* find - params for find records
* set - update params

request
```json
{
	"find":{
		"name":"Update Many"
	},
	"set":{
		"name":"Update Many",
		"description":"Update!!!!",
		"time": 1666666666
	}
}
```

response
```json
{
    "result": {
        "n": 5,
        "nModified": 0,
        "ok": 1
    },
    "connection": {
        "id": 0,
        "host": "127.0.0.1",
        "port": 27017
    },
    "modifiedCount": 0,
    "upsertedId": null,
    "upsertedCount": 0,
    "matchedCount": 5,
    "n": 5,
    "nModified": 0,
    "ok": 1
}
```

**Delete record by filter**
DELETE - /test\
test - name collection\
request
```json
{
	"name":"Test One"
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
    "n": 1,
    "ok": 1
}
```
