//2.	Create new Database named Demo
//       And Collections named trainningCenter1, trainningCenter2 
use Demo;
db.createCollection("trainningCenter1");
db.createCollection("trainningCenter2");

//            a.	Insert documents into trainningCenter1 collection contains (Use Variable named data as Array)
//                       i.	_id , name as firstName lastName , age , address as array , status

var data = [
    {
        _id: 1,
        firstName: "Yasser",
        lastName: "Fathalah",
        age: 25,
        address: ["Mansoura", "Egypt"],
        status: "Active"
    },
    {
        _id: 2,
        firstName: "Ahmed",
        lastName: "Adel",
        age: 30,
        address: ["Giza", "Egypt"],
        status: "Inactive"
    },
    {
        _id: 3,
        firstName: "Anisa",
        lastName: "Adam",
        age: 30,
        address: ["Mansoura", "Egypt"],
        status: "Inactive"
    }
];


//            b.	Using insert ONE from data Variable
db.trainningCenter1.insertOne(data);
db.trainningCenter1.find({})

//            c.	Using Same Variable (data) with same data and insert MANY into trainningCenter2 collection
db.trainningCenter2.insertMany(data);
db.trainningCenter2.find({})

//3.	Use find. explain function (find by age field) and mention scanning type
db.trainningCenter2.find({ age: 25 }).explain() // COLLSCAN => Collection Scan

//4.	Create index on created collection named it “IX_age” on age field 
db.trainningCenter2.createIndex({ age: 1 }, { name: "IX_age" });
db.trainningCenter2.getIndexes()

//5.	Use find. explain view winning plan for index created (find by age field) and mention scanning type
db.trainningCenter2.find({ age: 25 }).explain() // IXSCAN => Index Scan

//6.	Create index on created collection named it “compound” on firstNsme and lastName
//            a.	Try find().explain before create index and mention scanning type

db.trainningCenter2.find({ firstName: "Yasser", lastName: "Fathallah" }).explain() // COLLSCAN => Collection Scan

db.trainningCenter2.createIndex({ firstName: 1, lastName: 1 }, { name: "compound" })
db.trainningCenter2.getIndexes()

//            b.	Try find().explain after create index and mention scanning type

db.trainningCenter2.find({ firstName: "Yasser", lastName: "Fathallah" }).explain() // IXSCAN => Index Scan


//7.	Drop Demo Database

use Demo;
db.dropDatabase();




