console.log("JavaScript Objects & Arrays Challenge is connected!");
// Task 1: Product Price Management
let prices = [14.99, 29.99, 19.49, 11.99, 24.79]; // Initialize array with 5 prices
prices.push(22.49); // Add a new price to the array
prices.shift(); // Remove the first price from the array
console.log("Updated Prices:", prices); // Log the updated prices
// Task 2: Modifying Customer Orders
let orders = [12, 18, 25, 30, 45]; // Initialize array with 5 order quantities
orders[2] += 5; // Increase the third order quantity by 5
let totalOrders = orders.reduce((total, order) => total + order, 0); // Calculate total orders
console.log("Updated Orders:", orders); // Log updated orders
console.log("Total Orders:", totalOrders); // Log total order count
// Task 3: Employee Performance Tracking
let employee = {
  name: "Michael Scott",
  role: "Regional Manager",
  performanceScore: 65,
  isActive: true
};

employee.performanceScore = 90; // Update performance score
employee.promotionEligible = true; // Add new property
console.log("Updated Employee Data:", employee); // Log the employee object
