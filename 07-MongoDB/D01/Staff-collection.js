use ITI_Mongo

// 2. Creating the new collection
db.createCollection("Staff")


// 3. Inserting a document
db.Staff.insertOne({
  _id: 1,
  name: "Ali",
  age: 30,
  gender: "male",
  department: "IT"
})


//  4.	Insert many documents into the "Staff" collection:
//     •	   Object: {_id, name, age: 20, gender: "male", department}
//     •	   Object: {_id, name, age: 25, gender: "female", managerName, department}
//     •	   Object: {_id, name, age: 15, gender, DOB}

db.Staff.insertMany([ {
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

db.getCollection("Staff").find({})



// 5.	Query to find data from the "Staff" collection:
//     •	1) Find all documents.
db.getCollection("Staff").find({})

//     •	2) Find documents where gender is "male".
db.getCollection("Staff").find({ gender: "male"})

//     •	3) Find documents with age between 20 and 25.
db.Staff.find({ age: { $gte: 20, $lte: 25 } })

//     •	4) Find documents where age is 25 and gender is "female".
db.Staff.find({ age: 25, gender: "female" })

//     •	5) Find documents where age is 20 or gender is "female".
db.Staff.find({ $or: [{age: 20}, {gender: "female"} ] })


// 6.	Update one document in the "Staff" collection where age is 15, set the name to "new student".
db.Staff.updateOne({ age: 15 }, { $set: { name: "new student" } })

db.getCollection("Staff").find({})

// 7.	Update many documents in the "Staff" collection, setting the department to "AI".
db.Staff.updateMany({}, { $set: { deparntment: "AI" } })

db.getCollection("Staff").find({})






