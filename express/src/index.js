const express = require("express");
const app = express();
const Sales = require("./models/sales");

app.get("/sales", (req, res) => {
  /*
   * Exercise 1 - Add a query parameter (minSales) and log its value
   */
  /*
   * Exercise 2 - Add validation - This value should be required and should 
                  always be a Number
   */
  /*
   * Exercise 3 -  Retrieve all sales from the Sales model and return
   */
  /*
   * Exercise 4 -  Manipulate them based on the parameter in Exercise 1.
   *              Any sales lower than the minimum should show up as 0
   *              in the array for that salesperson.
   */
});

app.listen(8080, () => {
  console.log("server started");
});
