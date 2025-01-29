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
// Task 4: Customer Feedback Records
let feedback = [
  { customerName: "Jim Halpert", feedbackText: "Great service and quality paper!", rating: 4 },
  { customerName: "Pam Beesly", feedbackText: "I love using this paper for my art projects.", rating: 5 },
  { customerName: "Stanley Hudson", feedbackText: "It’s just paper. Works fine.", rating: 3 }
];

feedback.push({
  customerName: "Dwight Schrute",
  feedbackText: "This paper is the perfect choice for beet invoices!",
  rating: 5
}); // Add new feedback

console.log("Customer Feedback List:", feedback); // Log the feedback array
// Task 5: Inventory Management System
let inventory = {
  itemName: "Dunder Mifflin Premium Paper Reams",
  stockCount: 300,
  price: 19.99,
  calculateTotalValue: function () {
    return this.stockCount * this.price;
  }
};

console.log("Inventory Details:", inventory); // Log inventory details
console.log("Total Inventory Value:", inventory.calculateTotalValue()); // Log total value