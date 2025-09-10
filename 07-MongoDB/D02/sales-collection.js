db.getCollection("sales").find({})


//10.	Calculate the total revenue for product from sales collection documents within the date range '01-01-2020' to '01-01-2023' and then sort them in descending order by total revenue.
//a.	Total Revenue=  Sum (Quantity * Price)

db.sales.aggregate([
{
    //product from sales collection documents within the date range '01-01-2020' to '01-01-2023'
    $match: {
      date: { $gte: ISODate("2020-01-01"), $lte: ISODate("2023-01-01") }
    }
},
{
    // total revenue for product
$group: {
      _id: "$product",
      totalRevenue: { $sum: { $multiply: ["$quantity", "$price"] } }
    }
},
{
    // sort them in descending order by total revenue
     $sort: { totalRevenue: -1 } 
}])

