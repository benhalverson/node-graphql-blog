# Scalar types

- String
- Boolean
- Int
- Float
- ID

A scalar type is a type that returns a single value.

```
type Query {
    id: ID!
    name: String!
    age: Int!
    employed: Boolean!
    gpa: Float
}
```


Non scalar type is an object or an array. They are collections of discrete values

