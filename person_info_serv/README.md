# PERSON INFO SERVICE

Esse serviço tem como responsabilidade cadastrar, editar e remover os dados de pessoas:
Caso rode em localhost considere a _baseUrl_ como `localhost:3100`

## Cadastrar

### Request

**URL:** POST http://{baseUrl}/persons

**Body:**

```json
{
  "first_name": "string",
  "middle_name": "string",
  "last_name": "string",
  "birth_date": "YYYY-MM-DD",
  "weight": 75000,
  "height": 170,
  "objective": "string"
}
```

### Response

**Status:** 201

**Body:**

```json
{
  "message": "CREATED"
}
```

## Obter todos

**URL:** GET http://{baseUrl}/persons

### Response

**Status:** 200

**Body:**

```json
[
  {
    "_id": "string",
    "first_name": "string",
    "middle_name": "string",
    "last_name": "string",
    "full_name": "string",
    "birth_date": "YYYY-MM-DD",
    "age": "YYYY-MM-DD",
    "weight": 75000,
    "height": 170,
    "objective": "string"
  }
]
```

## Obter um

**URL:** GET http://{baseUrl}/persons/:\_id

### Response

**Status:** 200

**Body:**

```json
{
  "_id": "string",
  "first_name": "string",
  "middle_name": "string",
  "last_name": "string",
  "full_name": "string",
  "birth_date": "YYYY-MM-DD",
  "age": "YYYY-MM-DD",
  "weight": 75000,
  "height": 170,
  "objective": "string"
}
```

## Atualizar um

**URL:** PUT http://{baseUrl}/persons/:\_id

**Body:**

```json
{
  "first_name": "string",
  "middle_name": "string",
  "last_name": "string",
  "birth_date": "YYYY-MM-DD",
  "weight": 75000,
  "height": 170,
  "objective": "string"
}
```

### Response

**Status:** 204

## Deletar um

**URL:** DELETE http://{baseUrl}/persons/:\_id

### Response

**Status:** 204
