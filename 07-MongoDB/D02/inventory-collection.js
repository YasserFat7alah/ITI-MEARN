db.getCollection("inventory").find({})



// 1.	Find documents where the "tags" field exists.///////////////////////////
db.inventory.find({ tags: { $exists: true } })


// 2.	Find documents where the "tags" field does not contain values "ssl" or "security."//////////////////////
db.inventory.find({ tags: { $exists: true, $nin: ["ssl", "security"] } })


// 3.	Find documents where the "qty" field is equal to 85.
db.inventory.find({ qty: 85 })

// 4.	Find documents where the "tags" array contains all of the values [ssl, security] using the `$all` operator.///////////////////////////


db.inventory.find({ tags: { $all: ["ssl", "security"] } })

// 5.	Find documents where the "tags" array has a size of 3./////////////////////////////////////////
db.inventory.find({ tags: { $size: 3 } })



// **BONUS 1**	Find documents where the "tags" array contains ONLY the values [ssl, security].///////////////////////////////
db.inventory.find({ tags: ["ssl", "security"] })
db.inventory.find({ tags: { $all: ["ssl", "security"], $size: 2 } })

//////// data for test
db.inventory.find({ tags: { $all: ["ssl", "security"] } })

// the two tags only
db.inventory.insertMany([
    { tags: ["ssl", "security"], qty: 10 },
    { tags: ["ssl", "security"], qty: 20 },
    { tags: ["ssl", "security"], qty: 30 }
])

// the two tags with other tags
db.inventory.insertMany([
    { tags: ["ssl", "security", "A"], qty: 10 },
    { tags: ["ssl", "security", "A"], qty: 20 },
    { tags: ["ssl", "security", "A"], qty: 30 }
])

// the two tags but with diff order
db.inventory.insertMany([
    { tags: ["B", "ssl", "security"], qty: 10 },
    { tags: ["B", "ssl", "security"], qty: 20 },
    { tags: ["B", "ssl", "security"], qty: 30 }
])

// the two tags but with diff order
db.inventory.insertMany([
    { tags: ["security", "ssl"], qty: 10 },
    { tags: ["security", "ssl"], qty: 20 },
    { tags: ["security", "ssl"], qty: 30 }
])


db.inventory.deleteMany({ tags: ["ssl", "security"], code: { $exists: false } })
db.inventory.deleteMany({ tags: ["ssl", "security", "A"] })
db.inventory.deleteMany({ tags: ["B", "ssl", "security"] })
db.inventory.deleteMany({ tags: ["security", "ssl"] })

db.inventory.find({ tags: { $all: ["ssl", "security"] } })



// 6.	Update the "item" field in the "paper" document, setting "size.uom" to "meter" and using the `$currentDate` operator./////////////////////////////////
db.inventory.find({item: "paper"})
db.inventory.updateOne(
    { item: "paper" },
    {
        $set: { "size.uom": "meter" },
        $currentDate: { lastModified: true }
    }
)

db.inventory.find({ item: "paper" })

//   a.	Also, use the upsert option and change filter condition item:”paper”.
db.inventory.updateOne(
    { item: "red" },
    {
        $set: { "size.uom": "meter" },
        $currentDate: { lastModified: true }
    },
    { upsert: true }
)

db.inventory.find({ item: "red" })

//   b.	Use the `$setOnInsert` operator.
db.inventory.updateOne(
    { item: "green" },
    {
        $set: { "size.uom": "meter" },
        $currentDate: { lastModified: true },
        $setOnInsert: { onInsert: "New Insertion" }
    },
    { upsert: true }
)
db.inventory.find({ item: "green" })

//   c.	Try `updateOne`, `updateMany`, and `replaceOne`.
//updateMany
db.inventory.updateMany(
    { item: "paper" },
    {
        $set: { "size.uom": "meter" },
        $currentDate: { lastModified: true }
    }
)

db.inventory.find({ item: "paper" })

// replaceOne
db.inventory.replaceOne(
    { item: "paper" },
    {
        item: "paper",
        "size.uom": "meter",
    }
)

db.inventory.find({ item: "paper" })
///////////////////////////////////////////////////////////////

// 7.	Insert a document with incorrect field names "neme" and "ege," then rename them to "name" and "age."////////////////////////////////////////////////
db.inventory.insertOne({ neme: "Yasser", ege: 25 })
db.inventory.find({ neme: "Yasser" })

db.inventory.updateOne(
    { neme: { $exists: true } },
    { $rename: { "neme": "name", "ege": "age" } }
)
db.inventory.find({ name: "Yasser" })

// 8.	Try to reset any document field using the `$unset` function.
db.inventory.find({ name: "Yasser" })

db.inventory.updateOne({ name: "Yasser" }, {
    $unset: { age: "" }
})

db.inventory.find({ name: "Yasser" })


















