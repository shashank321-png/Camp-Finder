// Sample data structure for customers
let customers = [];

// Function to display customers
function displayCustomers() {
  const customerList = document.getElementById('customer-list');
  customerList.innerHTML = '';
  customers.forEach(customer => {
    const listItem = document.createElement('li');
    listItem.textContent = `${customer.name} - Purchases: ${customer.purchases}, Amount: ${customer.amount}`;
    listItem.addEventListener('click', () => {
      displayCustomerDetails(customer);
    });
    customerList.appendChild(listItem);
  });
}

// Function to display customer details
function displayCustomerDetails(customer) {
  const customerDetails = document.getElementById('customer-details');
  customerDetails.innerHTML = '';
  const detailsList = document.createElement('ul');
  const nameItem = document.createElement('li');
  nameItem.textContent = `Name: ${customer.name}`;
  const purchasesItem = document.createElement('li');
  purchasesItem.textContent = `Purchases: ${customer.purchases}`;
  const amountItem = document.createElement('li');
  amountItem.textContent = `Amount: ${customer.amount}`;
  detailsList.appendChild(nameItem);
  detailsList.appendChild(purchasesItem);
  detailsList.appendChild(amountItem);
  customerDetails.appendChild(detailsList);
}

// Function to add a new customer
function addCustomer(name, purchases, amount) {
  customers.push({ name, purchases, amount });
  displayCustomers();
}

// Function to edit customer record
function editCustomer(index, name, purchases, amount) {
  customers[index] = { name, purchases, amount };
  displayCustomers();
}

// Function to delete customer record
function deleteCustomer(index) {
  if (confirm("Are you sure you want to delete this customer?")) {
    customers.splice(index, 1);
    displayCustomers();
  }
}

// Example usage
addCustomer("John Doe", 3, "$150");
addCustomer("Jane Smith", 2, "$100");
