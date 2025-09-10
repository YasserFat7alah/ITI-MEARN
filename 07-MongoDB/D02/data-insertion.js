use ITI_Mongo

// Orders Insertion
db.orders.insertMany([
    {
        _id: 0, name: "Pepperoni", size: "small", price: 19,
        quantity: 10, date: ISODate("2021-03-13T08:14:30Z")
    },
    {
        _id: 1, name: "Pepperoni", size: "medium", price: 20,
        quantity: 20, date: ISODate("2021-03-13T09:13:24Z")
    },
    {
        _id: 2, name: "Pepperoni", size: "large", price: 21,
        quantity: 30, date: ISODate("2021-03-17T09:22:12Z")
    },
    {
        _id: 3, name: "Cheese", size: "small", price: 12,
        quantity: 15, date: ISODate("2021-03-13T11:21:39.736Z")
    },
    {
        _id: 4, name: "Cheese", size: "medium", price: 13,
        quantity: 50, date: ISODate("2022-01-12T21:23:13.331Z")
    },
    {
        _id: 5, name: "Cheese", size: "large", price: 14,
        quantity: 10, date: ISODate("2022-01-12T05:08:13Z")
    },
    {
        _id: 6, name: "Vegan", size: "small", price: 17,
        quantity: 10, date: ISODate("2021-01-13T05:08:13Z")
    },
    {
        _id: 7, name: "Vegan", size: "medium", price: 18,
        quantity: 10, date: ISODate("2021-01-13T05:10:13Z")
    },
    { _id: 8, name: "Vegan", size: "medium", price: 18, quantity: 20 }
])

// Likes data

db.likes.insertMany([
{
   _id: 10,
   title: 'MongoDB Overview', 
   description: 'MongoDB is no sql database',
   by_user: 'tutorials point',
   url: 'http://www.tutorialspoint.com',
   tags: ['mongodb', 'database', 'NoSQL'],
   likes: 100
},
{
   _id:15,
   title: 'MongoDB Overview', 
   description: 'MongoDB is no sql database',
   by_user: 'tutorials point',
   url: 'http://www.tutorialspoint.com',
   tags: ['mongodb', 'database', 'NoSQL'],
   likes: 150
},
{
   _id: 20,
   title: 'MongoDB Overview', 
   description: 'MongoDB is no sql database',
   by_user: 'tutorials point',
   url: 'http://www.tutorialspoint.com',
   tags: ['mongodb', 'database', 'NoSQL'],
   likes: 250
},

{
   _id: 25,
   title: 'NoSQL Overview', 
   description: 'No sql database is very fast',
   by_user: 'tutorials point',
   url: 'http://www.tutorialspoint.com',
   tags: ['mongodb', 'database', 'NoSQL'],
   likes: 15
},
{
   _id: 30,
   title: 'NoSQL Overview', 
   description: 'No sql database is very fast',
   by_user: 'tutorials point',
   url: 'http://www.tutorialspoint.com',
   tags: ['mongodb', 'database', 'NoSQL'],
   likes: 25
},
{
   _id: 35,
   title: 'NoSQL Overview', 
   description: 'No sql database is very fast',
   by_user: 'tutorials point',
   url: 'http://www.tutorialspoint.com',
   tags: ['mongodb', 'database', 'NoSQL'],
   likes: 10
},

{
   _id: 40,
   title: 'Neo4j Overview', 
   description: 'Neo4j is no sql database',
   by_user: 'Neo4j',
   url: 'http://www.neo4j.com',
   tags: ['neo4j', 'database', 'NoSQL'],
   likes: 750
},

{
   _id: 45,
   title: 'Neo4j Overview', 
   description: 'Neo4j is no sql database',
   by_user: 'Neo4j',
   url: 'http://www.neo4j.com',
   tags: ['neo4j', 'database', 'NoSQL'],
   likes: 250
},

{
   _id: 50,
   title: 'Neo4j Overview', 
   description: 'Neo4j is no sql database',
   by_user: 'Neo4j',
   url: 'http://www.neo4j.com',
   tags: ['neo4j', 'database', 'NoSQL'],
   likes: 300
}
])

// Employees
db.employees.insertMany( 
[
  {
    "name": "John Doe",
    "department": "Sales",
    "salary": 60000,
    "hireDate": ISODate("2022-03-15T08:00:00Z")
  },
  {
    "name": "Alice Smith",
    "department": "Sales",
    "salary": 55000,
    "hireDate": ISODate("2022-05-20T09:30:00Z")
  },
  {
    "name": "Bob Johnson",
    "department": "Engineering",
    "salary": 70000,
    "hireDate": ISODate("2021-10-10T14:15:00Z")
  },
  {
    "name": "Sarah Brown",
    "department": "Sales",
    "salary": 58000,
    "hireDate": ISODate("2022-08-05T11:45:00Z")
  },
  {
    "name": "David Lee",
    "department": "Engineering",
    "salary": 72000,
    "hireDate": ISODate("2022-01-25T16:30:00Z")
  },
  {
    "name": "Emily Taylor",
    "department": "Engineering",
    "salary": 68000,
    "hireDate": ISODate("2021-12-10T08:30:00Z")
  },
  {
    "name": "Olivia Wilson",
    "department": "Sales",
    "salary": 59000,
    "hireDate": ISODate("2022-09-15T10:00:00Z")
  }
]
)

//Sales Data

db.sales.insertMany( 
[
  {
    "product": "Widget",
    "quantity": 10,
    "price": 25.0,
    "date": ISODate("2018-12-15T08:00:00Z")
  },
  {
    "product": "Gadget",
    "quantity": 5,
    "price": 50.0,
    "date": ISODate("2019-03-20T14:30:00Z")
  },
  {
    "product": "Widget",
    "quantity": 8,
    "price": 25.0,
    "date": ISODate("2020-05-01T10:15:00Z")
  },
  {
    "product": "Gadget",
    "quantity": 3,
    "price": 50.0,
    "date": ISODate("2020-09-10T16:45:00Z")
  },
  {
    "product": "Accessory",
    "quantity": 15,
    "price": 10.0,
    "date": ISODate("2021-02-20T09:30:00Z")
  },
  {
    "product": "Widget",
    "quantity": 12,
    "price": 30.0,
    "date": ISODate("2022-04-05T11:45:00Z")
  },
  {
    "product": "Gadget",
    "quantity": 7,
    "price": 55.0,
    "date": ISODate("2023-01-10T14:30:00Z")
  },
  {
    "product": "Accessory",
    "quantity": 20,
    "price": 12.0,
    "date": ISODate("2023-04-15T09:30:00Z")
  }
])





