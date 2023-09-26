# FOOD INFO SERVICE

Esse serviço tem como responsabilidade cadastrar, editar e remover os dados de comida:
Caso rode em localhost considere a _baseUrl_ como `localhost:3000`

## Cadastrar

### Request

**URL:** POST http://{baseUrl}/foods

**Body:**

```ts
{
    name: string
    quantity: number,
    unity: string
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

**URL:** GET http://{baseUrl}/foods

### Response

**Status:** 200

**Body:**

```json
[
  {
    "name": "string",
    "quantity": 0,
    "unity": "string"
  }
]
```

## Obter um

**URL:** GET http://{baseUrl}/foods/:name

### Response

**Status:** 200

**Body:**

```json
{
  "_id": "string",
  "name": "string",
  "quantity": 0,
  "unity": "string"
}
```

## Atualizar um

**URL:** PUT http://{baseUrl}/foods/:name

**Body:**

```json
{
  "quantity": 0,
  "unity": "string"
}
```

### Response

**Status:** 204

## Deletar um

**URL:** DELETE http://{baseUrl}/foods/:name

### Response

**Status:** 204
