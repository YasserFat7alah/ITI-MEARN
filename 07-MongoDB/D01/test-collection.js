use ITI_Mongo

// 8.	Create a new collection called "test" and insert documents from Question 4.

db.createCollection("test")

db.test.insertMany([ 
    {
        _id: 2,
        name: "Omar",
        age: 20,
        gender: "male",
        department: "HR"
      },
      {
        _id: 3,
        name: "Sara",
        age: 25,
        gender: "female",
        managerName: "Ali",
        department: "finance"
      },
      {
        _id: 4,
        name: "Mona",
        age: 15,
        gender: "female",
        DOB: "2010-06-01"
      }
])

db.getCollection("test").find({})


// 9.	Try to delete one document from the "test" collection where age is 15.
db.test.deleteOne({ age: 15 })
db.getCollection("test").find({})

// 10.	 try to delete all male gender
db.test.deleteMany({ gender: "male" })
db.getCollection("test").find({})

// 11.	Try to delete all documents in the "test" collection.
db.test.deleteMany({})
db.getCollection("test").find({})
