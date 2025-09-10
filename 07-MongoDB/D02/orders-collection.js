use ITI_Mongo

db.orders.find({})

// 9.	Try update operators like `$inc`, `$min`, `$max`, and `$mul` to modify document fields. /////////////////////// update on end

////////////////// increase small pepperoni quantity by 1
db.orders.find({name:"Pepperoni", size:"small"})

db.orders.updateOne(
{name:"Pepperoni", size:"small"},
{$inc: {quantity: 1}}
)

db.orders.find({name:"Pepperoni", size:"small"})


////////////////// multiply small pepperoni quantity by 2
db.orders.find({name:"Pepperoni", size:"small"})

db.orders.updateOne(
{name:"Pepperoni", size:"small"},
{$mul: {quantity: 2}}
)

db.orders.find({name:"Pepperoni", size:"small"})



////////// min and max
db.orders.updateMany({name:"Vegan", size:"medium"},{ $set: {price: 10} })
db.orders.find({name:"Vegan", size:"medium"})

////////// min

db.orders.updateOne(
{_id: 7, name:"Vegan", size:"medium"},
{$min: {price: 15}}
)
db.orders.find({_id: 7, name:"Vegan", size:"medium"})

db.orders.updateOne(
{_id: 8, name:"Vegan", size:"medium"},
{$min: {price: 5}}
)
db.orders.find({_id: 8, name:"Vegan", size:"medium"})

db.orders.find({name:"Vegan", size:"medium"})

////////// max

db.orders.updateOne(
{_id: 7, name:"Vegan", size:"medium"},
{$max: {price: 15}}
)
db.orders.find({_id: 7, name:"Vegan", size:"medium"})

db.orders.updateOne(
{_id: 8, name:"Vegan", size:"medium"},
{$max: {price: 5}}
)
db.orders.find({_id: 8, name:"Vegan", size:"medium"})

db.orders.find({name:"Vegan", size:"medium"})
