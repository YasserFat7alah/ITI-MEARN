use Demo;


//1.	Provide the MongoDB code for enforcing JSON schema validation when creating a collection named "employees"
// with required fields [
//                  "name",
//                  "age" (min. 18), 
//                  "department" (limited to ["HR," "Engineering," "Finance"])].
db.createCollection("employees", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            title: "Employee validation error ..",
            required: ["name", "age", "department"],
            properties: {
                // age => min : 18
                age: {
                    bsonType: "int",
                    minimum: 18,
                    description: "Age must be an integer >= 18"
                },
                // department => values ["HR", "Engineering", "Finance"]
                department: {
                    enum: ["HR", "Engineering", "Finance"],
                    description: "Value must be one of [HR, Engineering, Finance]"
                }
            }
        }
    }
})

db.employees.insertOne({ name: "Yasser", age: 19, department: "Engineering" })   // Success Insertion

db.employees.insertOne({ name: "Yasser", age: "19", department: "Engineering" }) // Validation Error ( age must be a number )
db.employees.insertOne({ name: "Yasser", age: 17, department: "Engineering" })   // Validation Error ( age must be >=18 )
db.employees.insertOne({ name: "Yasser", age: 19, department: "Software" })      // Validation Error ( department must be a value of ["HR", "Engineering", "Finance"] )




